import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'
import { getActivityList, getActivityPlaceList } from '../redux/actions/activity'

const ActivityList = loadable(() => import('../containers/ActivityList'))

export default class ActivityListPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context

        await Promise.all([
            store.dispatch(getActivityList({ place: 'all', timeType: 1, recommend: 1, currentPage: 1, pageSize: 18, req: req })),
            store.dispatch(getActivityList({ place: 'all', timeType: 1, recommend: 0, currentPage: 1, pageSize: 18, req: req })),
            store.dispatch(getActivityPlaceList({ req: req }))
        ])

        let tdk = {
            title: 'MarsBit活动_区块链活动_区块链峰会_区块链沙龙_MarsBit',
            description: '区块链峰会,行业活动,区块链技术沙龙,高峰论坛,区块链全球峰会,区块链线上活动,区块链中国行,区块链马拉松,区块链meetup,面基会',
            keywords: '区块链峰会,行业活动,区块链技术沙龙,高峰论坛,区块链全球峰会,区块链线上活动,区块链中国行,区块链马拉松,区块链meetup,面基会,POWER,POWER大会'
        }

        return {
            clientLink: mixUrl.m(match.url),
            ...tdk
        }
    }

    render () {
        return <ActivityList {...this.props} />
    }
}
