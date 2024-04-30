import React, { Component } from 'react'
import loadable from '@loadable/component'

import { getFeatureList } from 'multiRedux/actions/news'
import { getHeaderChannels } from 'multiRedux/actions/header'
import { mixUrl } from 'multiPublic/index'

const Feature = loadable(() => import('../containers-m/Feature'))
export default class FeaturePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context

        await Promise.all([
            store.dispatch(getFeatureList({
                currentPage: 1,
                pageSize: 15,
                orderType: 0,
                req: req
            })),
            store.dispatch(getHeaderChannels())
        ]).catch(function (err) {
            throw new Error(`获取相关数据错误: ${err}`)
        })

        return {
            clientLink: mixUrl.news(`/feature`, req),
            title: '专题_MarsBit-关注区块链与数字经济_MarsBit',
            description: '区块链热点事件报道与区块链专题展示。MarsBit是全球估值最高的区块链产业信息，由资深区块链团队倾力打造，为中国区块链爱好者提供全球最新的区块链新闻资讯',
            keywords: 'MarsBit,区块链,区块链新闻,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,区块链活动,比特币,BTC,比特币价格,BTC价格,POWER,POWER大会'
        }
    }

    render () {
        return <Feature {...this.props} />
    }
}
