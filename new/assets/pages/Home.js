import React, { Component } from 'react'
import loadable from '@loadable/component'

import { getNewsList, getHotNews, getNewsChannelId } from 'multiRedux/actions/news'
import { getAdImplant } from 'multiRedux/actions/public'
import { getHoomRoomLiveList } from 'multiRedux/actions/home'
import { mixUrl } from 'multiPublic/index'

const Home = loadable(() => import('../containers/Home'))

const title = '区块链新闻_区块链项目新闻_区块链报道_MarsBit'
const description = '火星新闻提供最快速的区块链,数字货币,比特币,以太坊,莱特币,eos,比特币现金bch,瑞波xrp,波场tron,sto,监管,稳定币,挖矿,矿机,币圈及区块链实时要闻,专题报道,深度文章和市场行情信息和报价'
const keywords = 'MarsBit,区块链,区块链新闻,比特币新闻以太坊新闻,数字货币新闻,行情新闻,比特币新闻,以太坊新闻,莱特币新闻,eos新闻,比特币现金bch新闻,瑞波xrp新闻,波场tron新闻,sto新闻,监管新闻,稳定币新闻,挖矿新闻,矿机新闻,币圈新闻'

export default class HomePage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        const searchId = match.params.channelId || 0
        await Promise.all([
            store.dispatch(getNewsChannelId({ req: req })),
            store.dispatch(getNewsList({
                currentPage: 1,
                pageSize: 15,
                channelId: searchId,
                req: req
            }, 'channel')),
            store.dispatch(getHotNews({
                lastDays: 3,
                readCounts: 50,
                newsCounts: 6,
                req: req
                // req: req
            })),
            store.dispatch(getHoomRoomLiveList({
                recommendFlag: 1,
                pageSize: 3,
                newFlag: 1,
                req: req
            })),
            store.dispatch(getAdImplant([{ 'adPlace': 3, 'secondPosition': searchId }]))
        ]).catch(function (err) {
            throw Error(err)
        })
        //     .then(function (res) {
        //     此处res为[undefined, undefined]
        //     如果此处想要获取到值
        //     Promise.all([store.dispatch(getNewsChannelId()).catch(function(err){
        //         throw new Error(`热门新闻数据错误: ${err}`)
        //     })]).then(function(res){
        //         if (res[0].code !== 1) {
        //             throw res[0].msg
        //         }
        //     })
        // })
        return {
            clientLink: mixUrl.main(),
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
