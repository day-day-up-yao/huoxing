import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { cookiesName, flashRecognize, mixUrl } from 'multiPublic/index'
import { getFlashDetails } from '../redux/actions/flash'
import { getShowLivesList } from 'multiRedux/actions/home'
// import twetticon from '../../static/resource/images/huoxing24.png'

const Details = loadable(() => import('../containers/FlashDetails'))

export default class FlashDetailsPage extends Component {
    static async getInitialProps (context) {
        const { store, req, res, isServer, match } = context
        const flashId = match.params.flashId

        const params = { id: flashId, req: req }
        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)
        if (passportId) {
            params.passportid = passportId
        }

        let returnData = {
            clientLink: mixUrl.m(`/flashshare/${match.params.flashId}.html`, req),
            title: '',
            description: '',
            keywords: '',
            twettericon: ''
        }
        await Promise.all([
            store.dispatch(getFlashDetails(params)),
            store.dispatch(getShowLivesList({ req: req }))
        ]).then(function (response) {
            const resDetails = response[0]
            if (resDetails.code === 1) {
                const titleCon = flashRecognize(resDetails.obj)
                returnData.title = `${titleCon.title}_MarsBit`
                returnData.description = titleCon.content
                returnData.keywords = `MarsBit,区块链,区块链快讯,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,比特币,BTC,区块链活动,比特币价格,BTC价格,POWER,POWER大会`
                const imglist = titleCon.content.match(/<img.*?>/g)
                if (imglist) {
                    const imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1]
                    returnData.twettericon = imgurl
                }
            }

            // 未查询到记录跳转到404页面
            if (resDetails.code === -1) {
                res.render('error', {
                    message: resDetails.msg || '快讯详情查询错误',
                    error: {
                        status: 200,
                        stack: JSON.stringify(resDetails)
                    }
                })
                returnData = { customRes: true }
            }
        }).catch(function (err) {
            throw new Error(`获取快讯详情错误: ${err}`)
        })

        return returnData
    }

    render () {
        return <Details {...this.props}/>
    }
}
