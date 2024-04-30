import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'
import { getBourseStatisticsList, getNoticeDetail } from '../redux/actions/notice'
const NoticeDetail = loadable(() => import('../containers/NoticeDetail'))

export default class NoticeDetailPage extends Component {
    static async getInitialProps (context) {
        const { store, match } = context
        const id = match.params.id
        let title = ''
        await Promise.all([
            store.dispatch(getBourseStatisticsList()).then(function (res) {
                if (res.code !== 1) throw res.msg
            }).catch(function (err) {
                throw new Error(`获取交易所公告统计错误: ${err}`)
            }),
            store.dispatch(getNoticeDetail({
                noticeId: id
            })).then(function (res) {
                title = res.obj.currentExchangeNotice.title
                if (res.code !== 1) throw res.msg
            }).catch(function (err) {
                throw new Error(`获取交易所公告详情统计错误: ${err}`)
            })
        ])
        let tdk = {
            clientLink: mixUrl.m(match.url),
            title: `${title}_MarsBit`,
            keywords: '平台公告,数字货币最新公告,虚拟币最新公告',
            description: 'MarsBit公告专区，了解区块链最新动态'
        }
        return {
            ...tdk
        }
    }

    render () {
        return <NoticeDetail {...this.props}/>
    }
}
