import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getRoomLiveTypeList, getRoomLiveList, getRoomLiveUserPopular } from '../redux/actions/live'
import { getAdImgData } from '../redux/actions/home'
import { getShowLivesList } from 'multiRedux/actions/home'
import { webTdk, mixUrl } from 'multiPublic/index'

const ImLiveList = loadable(() => import('../containers/ImLiveList'))

export default class ImLiveListPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context

        const res = await Promise.all([
            store.dispatch(getRoomLiveTypeList()),
            store.dispatch(getRoomLiveList({ recommendFlag: 1, pageSize: 5, newFlag: 1, req: req })),
            store.dispatch(getRoomLiveUserPopular({ limit: 8, pastDays: 7, req: req })),
            store.dispatch(getAdImgData({ req: req })),
            store.dispatch(getShowLivesList({ req: req }))
        ])
        if (res[0].code === 1) {
            if (res[0].obj && res[0].obj.length > 0) {
                let roomPromisList = []
                res[0].obj.map((item) => {
                    roomPromisList.push(store.dispatch(getRoomLiveList({ liveType: item.id, pageSize: 32, req: req })))
                })
                await Promise.all(roomPromisList)
            }
        }

        return {
            clientLink: mixUrl.m(match.url, req),
            ...webTdk,
            title: 'MarsBit_直播频道_直播室_区块链直播_主题峰会_大咖面对面_开直播，上MarsBit',
            description: 'MarsBit Live，用视频连接区块链产业人物，做区块链行业最具价值的视频直播平台',
            keywords: 'MarsBit Live，MarsBit直播,区块链直播,行情直播,区块链对话'
        }
    }

    render () {
        return <ImLiveList {...this.props} />
    }
}
