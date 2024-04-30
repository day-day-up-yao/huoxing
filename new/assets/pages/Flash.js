import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { getFlashChannel, getImportantFlash, getNewsRankings } from '../redux/actions/flash'
import { getAd, getAdImplant } from 'multiRedux/actions/public'
import { getFlashList } from 'multiRedux/actions/flash'
import { getHotNews } from 'multiRedux/actions/news'
import { getHoomRoomLiveList } from 'multiRedux/actions/home'
import { cookiesName, mixUrl } from 'multiPublic/index'

const Home = loadable(() => import('../containers/Flash'))
const title = '区块链快讯_区块链项目动态_区块链报道_MarsBit'
const description = 'MarsBit快讯提供最快讯的区块链快讯、数字货币快讯、比特币快讯、以太坊快讯、项目快讯、交易所快讯、投资快讯、政策快讯等区块链实时要闻和市场行情信息'
const keywords = 'MarsBit,区块链,区块链快讯,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,比特币,BTC,区块链活动,比特币价格,BTC价格,POWER,POWER大会'

export default class FlashPage extends Component {
    static async getInitialProps (context) {
        const { store, isServer, req } = context

        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)

        await Promise.all([
            store.dispatch(getFlashChannel({ req: req })),
            store.dispatch(getImportantFlash({
                tags: 2,
                currentPage: 1,
                pageSize: 10,
                req: req
            })),
            store.dispatch(getNewsRankings({
                lastDays: 1,
                readCounts: 50,
                newsCounts: 6,
                req: req
            })),
            store.dispatch(getHotNews({
                lastDays: 3,
                readCounts: 50,
                newsCounts: 10,
                req: req
            })),
            store.dispatch(getFlashList({
                currentPage: 1,
                pageSize: 20,
                passportid: passportId,
                req: req
            })),
            store.dispatch(getAd({
                adPlace: 5,
                type: 1,
                req: req
            })),
            store.dispatch(getHoomRoomLiveList({
                recommendFlag: 1,
                pageSize: 3,
                newFlag: 1,
                req: req
            })),
            store.dispatch(getAdImplant([{
                'adPlace': 12,
                'secondPosition': 0
            }, { 'adPlace': 5 }]))
        ]).catch(function (err) {
            throw Error(err)
        })

        return {
            clientLink: mixUrl.m(`/flash`, req),
            title: title,
            description: description,
            keywords: keywords,
            cookies: req.cookies
        }
    }

    render () {
        return <Home {...this.props}/>
    }
}
