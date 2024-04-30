import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getVideoList } from '../redux/actions/video'
import { mixUrl } from 'multiPublic/index'

const VideoList = loadable(() => import('../containers/VideoList'))

export default class VideoListPage extends Component {
    static async getInitialProps (context) {
        const { match, store, req } = context

        await Promise.all([
            store.dispatch(getVideoList({ currentPage: 1, pageSize: 24, req: req }))
        ])

        return {
            clientLink: mixUrl.m(match.url),
            title: '区块链视频_区块链项目视频_区块链报道_MarsBit',
            description: 'MarsBit视频频道提供最全面的区块链及数字货币的视频报道，覆盖区块链，区块链技术，区块链服务，BTC，ETH，莱特币，比特币现金bch，瑞波币xrp，eos，波场tron，钱包，挖矿,监管，稳定币，矿机从技术到产品的视频内容',
            keywords: 'MarsBit,区块链,区块链视频,比特币视频,以太坊视频,数字货币视频,行情视频,比特币视频,以太坊视频,莱特币视频,eos视频,比特币现金bch视频,瑞波xrp视频,波场tron视频,sto视频,监管视频,稳定币视频,挖矿视频,矿机视频,币圈视频'
        }
    }

    render () {
        return <VideoList {...this.props} />
    }
}
