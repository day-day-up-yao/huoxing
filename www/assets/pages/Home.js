import React, { Component } from 'react'
import loadable from '@loadable/component'
import dayjs from 'dayjs'
import { webTdk, mixUrl, cookiesName } from 'multiPublic/index'
import {
    getAdData,
    getAdImgData,
    getAdRecommend,
    getRankNews,
    getSubject,
    getVideo,
    getTags,
    getNewsChannelId,
    getNewsHeadlines,
    getNewsTotalList,
    getShowauthorlist,
    // getExchangeRates,
    // getMarketQuotations,
    getHomeRoomList,
    festivalClose
    // getelementCollection
} from '../redux/actions/home'
import {
    getShowLivesList,
    getCalendarList
    // getHoomRoomLiveList
} from 'multiRedux/actions/home'
// import {
//     getRightLivePopularityList
// } from 'multiRedux/actions/live'
// import { elebannerlist } from '../public/graphql/query'

const Home = loadable(() => import('../containers/Home'))

export default class HomePage extends Component {
    static async getInitialProps (context) {
        const { store, req, match } = context

        // 首页节日背景是否已关闭(当天不显示): 有festival的cookie，并且是当天设置的
        const festivalCloseTime = req.cookies[cookiesName.festival]
        if (festivalCloseTime === dayjs(new Date()).format('YYYY-MM-DD')) {
            store.dispatch(festivalClose(true))
        }

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
        // 推荐直播
        // async function liveList () {
        //     const homeLive = await store.dispatch(getHoomRoomLiveList({ recommendFlag: 1, pageSize: 3, newFlag: 1 }))
        //     if (homeLive.code !== 1) throw Error(homeLive.msg)

        //     let ids = []
        //     homeLive.obj.inforList.map((item) => {
        //         ids.push(item.roomId)
        //     })
        //     const popularList = await store.dispatch(getRightLivePopularityList({ roomIDs: ids.join(',') }))
        //     if (popularList.code !== 1) throw Error(popularList.msg)

        //     return popularList
        // }
        // async function market () {
        //     const rates = await store.dispatch(getExchangeRates())
        //     if (rates.code !== 1) throw Error(rates.msg)

        //     const quotations = await store.dispatch(getMarketQuotations())
        //     if (quotations.code !== 1) throw Error(quotations.msg)

        //     return quotations
        // }
        // const variables = {
        //     lang: 'CN',
        //     site: 'ETH',
        //     version: 2
        // }
        // let dataobj = {
        //     variables: variables,
        //     query: elebannerlist,
        //     operationName: 'BannerListV2'
        // }
        // let url = 'https://api.element.market/graphql?args=BannerListV2'

        await Promise.all([
            getNews(),
            store.dispatch(getShowauthorlist({ req: req })),
            getLines(),
            // liveList(),
            // market(),
            store.dispatch(getAdData({ req: req })),
            store.dispatch(getAdRecommend({ req: req })),
            store.dispatch(getRankNews({ req: req })),
            store.dispatch(getSubject({ req: req })),
            store.dispatch(getVideo({ req: req })),
            store.dispatch(getTags({ req: req })),
            store.dispatch(getShowLivesList({ req: req })),
            store.dispatch(getCalendarList({ req: req })),
            store.dispatch(getHomeRoomList())
            // store.dispatch(getelementCollection(dataobj, url))
        ])
        // console.log(res)

        return {
            clientLink: mixUrl.m(match.url, req),
            ...webTdk
        }
    }

    render () {
        return <Home {...this.props} />
    }
}
