import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getNoticeList, getBourseList, getBourseStatisticsList } from '../redux/actions/notice'

const Notice = loadable(() => import('../containers/Notice'))

export default class NoticePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch(getNoticeList({
                exchangeSymbol: '',
                type: '',
                search: '',
                page: 1,
                pageSize: 20,
                req: req
            })).then(function (res) {
                if (res.code !== 1) throw res.msg
            }).catch(function (err) {
                throw new Error(`获取公告列表错误: ${err}`)
            }),
            store.dispatch(getBourseList()).then(function (res) {
                if (res.code !== 1) throw res.msg
            }).catch(function (err) {
                throw new Error(`获取交易所信息错误: ${err}`)
            }),
            store.dispatch(getBourseStatisticsList()).then(function (res) {
                if (res.code !== 1) throw res.msg
            }).catch(function (err) {
                throw new Error(`获取交易所公告统计错误: ${err}`)
            })
        ])
        let tdk = {
            title: '平台最新公告_MarsBit',
            keywords: '平台公告,数字货币最新公告,虚拟币最新公告',
            description: 'MarsBit公告专区，了解区块链最新动态'
        }
        return {
            clientLink: 'onlyPc',
            ...tdk
        }
    }

    render () {
        return <Notice {...this.props}/>
    }
}
