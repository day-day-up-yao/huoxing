import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getNoticeIdDetail } from '../redux/actions/noticeDetail'
import { mixUrl } from 'multiPublic/index'

const NoticeDetail = loadable(() => import('../containers-m/NoticeDetail'))
export default class NoticeDetailPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        let noticeId = match.params.noticeId
        let title = ''
        let shareIcon = ''
        await store.dispatch(getNoticeIdDetail({
            noticeId: noticeId,
            req: req
        })).then(function (res) {
            title = `${res.obj.currentExchangeNotice.title}_MarsBit`
            shareIcon = res.obj.currentExchangeNotice.exchangeIconUrl
        }).catch(function (err) {
            throw Error(err)
        })
        const tdk = {
            clientLink: mixUrl.news(match.url),
            title: title,
            description: `https://news.huoxing24.com/noticeDetail/${noticeId}`,
            keywords: '区块链,区块链新闻,区块链服务,公告,交易所公告,区块链公告',
            shareIcon: shareIcon
        }
        return {
            ...tdk
        }
    }

    render () {
        return <NoticeDetail {...this.props}/>
    }
}
