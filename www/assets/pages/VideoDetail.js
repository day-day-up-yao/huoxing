import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getVideoContext, getVideoListByTags, getVideoRecommendList } from '../redux/actions/video'
import { webTdk, mixUrl } from 'multiPublic/index'

const VideoDetail = loadable(() => import('../containers/VideoDetail'))

export default class VideoListPage extends Component {
    static async getInitialProps (context) {
        const { match, store, req } = context
        const videoId = match.params.id
        const publishTime = match.params.time
        let tdk = {
            title: '',
            keywords: '',
            description: ''
        }

        async function getListData () {
            const context = await store.dispatch(getVideoContext({ id: videoId, publishTime: publishTime, req: req }))
            if (context.code !== 1) throw Error(context.msg)
            let currData = context.obj.current

            if (currData.tags) {
                const listByTags = await store.dispatch(getVideoListByTags({ name: currData.tags, type: 3, page: 1, size: 4, req: req }))
                if (listByTags.code !== 1) throw Error(context.msg)
            }

            tdk = {
                title: `${currData.title}_${currData.nickName}_MarsBit`,
                keywords: currData.tags || webTdk.keywords,
                description: `${currData.content}来源于MarsBit专栏作家${currData.nickName}`
            }

            return context
        }

        await Promise.all([
            getListData(),
            store.dispatch(getVideoRecommendList({ size: 4, req: req }))
        ])

        return {
            clientLink: mixUrl.m(match.url),
            ...tdk
        }
    }

    render () {
        return <VideoDetail {...this.props} />
    }
}
