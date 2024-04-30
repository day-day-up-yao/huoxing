import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'
import { getActivityInfoData } from '../redux/actions/activity'

const ActivityDetail = loadable(() => import('../containers/ActivityDetail'))

export default class ActivityDetailPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        const id = match.params.id

        let tdk = {
            title: 'MarsBit活动_区块链活动_区块链峰会_区块链沙龙_MarsBit财经',
            description: '区块链峰会,行业活动,区块链技术沙龙,高峰论坛,区块链全球峰会,区块链线上活动,区块链中国行,区块链马拉松,区块链meetup,面基会',
            keywords: '区块链峰会,行业活动,区块链技术沙龙,高峰论坛,区块链全球峰会,区块链线上活动,区块链中国行,区块链马拉松,区块链meetup,面基会,POWER,POWER大会'
        }

        await Promise.all([
            store.dispatch(getActivityInfoData({
                id: id,
                req: req
            })).then(function (res) {
                if (res.code === 1) {
                    let data = res.obj
                    tdk.title = data.title + '_MarsBit活动_MarsBit财经'
                }
            }).catch(function (err) {
                throw new Error(err)
            })
        ])

        return {
            clientLink: mixUrl.m(`/huodongDetail/${id}`),
            ...tdk
        }
    }

    render () {
        return <ActivityDetail {...this.props} />
    }
}
