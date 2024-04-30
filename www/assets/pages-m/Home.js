import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'
import { getAdImgData, getNewsHeadlines, getNewsChannelId, getNewsTotalList } from '../redux/actions/home'
const Home = loadable(() => import('../containers-m/Home'), false)

export default class HomePage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        async function getNews () {
            const channelId = await store.dispatch(getNewsChannelId({ req: req }))
            // 接口不等于1时，抛出错误，让render.js中logger进日志，好查问题
            if (channelId.code !== 1) throw Error(channelId.msg)

            let ids = []
            channelId.obj.map((item) => {
                ids.push(item.channelId)
            })
            const newsList = await store.dispatch(getNewsTotalList(ids, { req: req }))
            if (newsList.code !== 1) throw Error(newsList.msg)

            // 此处是否 return 数据，取决于Promise.all后，数据是否还有其它用处
            return newsList
        }
        async function getLines () {
            const adImg = await store.dispatch(getAdImgData({ req: req }))
            if (adImg.code !== 1) throw Error(adImg.msg)

            const newsHeadLines = await store.dispatch(getNewsHeadlines('', false, false, { req: req }))
            if (newsHeadLines.code !== 1) throw Error(newsHeadLines.msg)

            return newsHeadLines
        }
        await Promise.all([
            getNews(),
            getLines()
        ])
        return {
            clientLink: mixUrl.main(match.url, req),
            ...webTdk
        }
    }
    render () {
        return <Home {...this.props} />
    }
}
