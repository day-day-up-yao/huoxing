import React, { Component } from 'react'
import loadable from '@loadable/component'

import { getFeatureDetails } from '../redux/actions/news'
import { getHeaderChannels } from 'multiRedux/actions/header'
import { mixUrl } from 'multiPublic/index'

const FeatureDetail = loadable(() => import('../containers-m/FeatureDetail'))

export default class FeatureDetailsPage extends Component {
    static async getInitialProps (context) {
        const { store, match, isServer, res, history, req } = context
        const featureId = decodeURI(match.params.featureId)
        if (!featureId) {
            isServer ? res.redirect('/') : history.push('/')
            return { customRes: true }
        }

        const featureDetails = await store.dispatch(getFeatureDetails({
            id: featureId,
            currentPage: 1,
            pageSize: 15,
            req: req
        })).catch(function (err) {
            throw new Error(err)
        })

        await Promise.all([
            store.dispatch(getHeaderChannels({ req: req }))
        ]).catch(function (err) {
            throw new Error(`获取相关数据错误: ${err}`)
        })

        const topic = featureDetails.obj.topic

        return {
            clientLink: mixUrl.news(`/feature/${match.params.featureId}`, req),
            title: `${topic.topicName}_MarsBit`,
            description: topic.description,
            keywords: `${topic.tags}区块链技术文章,${topic.tags}新闻,${topic.tags}快讯,${topic.tags}深度分析,${topic.tags}是什么,${topic.tags}介绍,快讯了解${topic.tags},区块链新闻,区块链快讯,区块链技术`
        }
    }

    render () {
        return <FeatureDetail pageType="feature" {...this.props}/>
    }
}
