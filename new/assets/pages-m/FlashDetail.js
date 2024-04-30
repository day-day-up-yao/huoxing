import React, { Component } from 'react'
import loadable from '@loadable/component'
import { flashRecognize, webTdk, mixUrl } from 'multiPublic/index'
import { getFlashDetails } from '../redux/actions/flash'
import icon from '../public/img/flash-share-icon.jpg'
const FlashDetail = loadable(() => import('../containers-m/FlashDetail'))

export default class DetailsPage extends Component {
    static async getInitialProps (context) {
        const { store, match, res, req } = context
        const epxressRes = res
        const flashId = match.params.flashId
        let returnData = {
            clientLink: mixUrl.news(`/flash/${flashId}.html`, req),
            shareIcon: icon, // 注意这个位置
            ...webTdk
        }
        await Promise.all([
            store.dispatch(getFlashDetails({ id: flashId, req: req })).then(function (res) {
                if (res.code === 1) {
                    const titleCon = flashRecognize(res.obj)
                    returnData.title = `${titleCon.title}_MarsBit`
                    returnData.shareTitle = `${titleCon.title}`
                    returnData.description = titleCon.content
                    returnData.keywords = `MarsBit,区块链,区块链快讯,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,比特币,BTC,区块链活动,比特币价格,BTC价格,POWER,POWER大会`
                    const imglist = titleCon.content.match(/<img.*?>/g)
                    if (imglist) {
                        const imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1]
                        returnData.twettericon = imgurl
                    }
                }

                // 未查询到记录跳转到快讯列表页
                if (res.code === -1) {
                    epxressRes.redirect('/flash/')
                    returnData = { customRes: true }
                }
            }).catch(function (err) {
                throw new Error(`获取快讯详情错误: ${err}`)
            })
        ])
        return returnData
    }

    render () {
        return <FlashDetail {...this.props} />
    }
}
