import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { getNoticeIdDetail } from '../redux/actions/noticeDetail'
import { flashRecognize, mixUrl, webTdk } from 'multiPublic/index'
import { getFlashDetails, getImportantFlash } from '../redux/actions/flash'
import { getHotNewsVideo } from '../redux/actions/news'
import icon from '../public/img/flash-share-icon.jpg'
// import twetticon from '../../static/resource/images/huoxing24.png'
const FlashShareDetail = loadable(() => import('../containers-m/FlashShareDetail'))
export default class FlashShareDetailPage extends Component {
    static async getInitialProps (context) {
        const { store, match, res, req } = context
        const epxressRes = res
        const flashId = match.params.flashId

        let returnData = {
            clientLink: mixUrl.news(`/flash/${flashId}.html`, req),
            shareIcon: icon,
            twettericon: '',
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
                    epxressRes.redirect('/livenews')
                    returnData = { customRes: true }
                }
            }).catch(function (err) {
                throw new Error(`获取快讯详情错误: ${err}`)
            }),
            store.dispatch(getImportantFlash({
                tags: 2,
                currentPage: 1,
                pageSize: 6,
                req: req
            })),
            store.dispatch(getHotNewsVideo())
        ])
        return returnData
    }

    render () {
        return <FlashShareDetail {...this.props}/>
    }
}
