import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getRoomLiveList, getRoomLiveUserPopular } from '../redux/actions/live'
import { webTdk, mixUrl } from 'multiPublic/index'

const ImLiveRecommendList = loadable(() => import('../containers/ImLiveRecommendList'))

export default class ImLiveRecommendListPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context

        await Promise.all([
            store.dispatch(getRoomLiveList({ recommendFlag: 1, pageSize: 120, newFlag: 1, req: req })),
            store.dispatch(getRoomLiveUserPopular({ limit: 8, pastDays: 7, req: req }))
        ])

        return {
            clientLink: mixUrl.m(),
            ...webTdk,
            title: 'MarsBit_直播频道_直播室_区块链直播_主题峰会_大咖面对面_开直播，上MarsBit',
            description: 'MarsBit Live，用视频连接区块链产业人物，做区块链行业最具价值的视频直播平台',
            keywords: 'MarsBit Live,区块链直播,行情直播,区块链对话'
        }
    }

    render () {
        return <ImLiveRecommendList {...this.props} />
    }
}
