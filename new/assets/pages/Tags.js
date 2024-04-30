import React, { Component } from 'react'
import loadable from '@loadable/component'

import { getHotNews, getFeatureRecommendList, getNewsList } from 'multiRedux/actions/news'
import { mixUrl, webTdk } from 'multiPublic/index'

const Tags = loadable(() => import('../containers/Tags'))

export default class TagsPage extends Component {
    static async getInitialProps (context) {
        const { store, match, isServer, res, req, history } = context
        const tags = decodeURI(match.params.tags)
        const breakTheLaw = ['正规真人', '三合一', '网络上赌', '现场同步', '网络网投', '网络赌博', '网赌']
        if (!tags) {
            isServer ? res.redirect('/') : history.push('/')
            return { customRes: true }
        }

        await Promise.all([
            store.dispatch(getHotNews({
                lastDays: 3,
                readCounts: 50,
                newsCounts: 6,
                req: req
            })),
            store.dispatch(getNewsList({
                currentPage: 1,
                pageSize: 15,
                tags: tags,
                req: req
            }, 'tags')),
            store.dispatch(getFeatureRecommendList({
                currentPage: 1,
                pageSize: 5,
                req: req
            }))
        ]).catch(function (err) {
            throw err
        })

        let webTdkTags = {
            title: `${tags.toLowerCase() === 'sto' ? '如何认识STO' : `${tags}_${tags}相关新闻_${tags}动态`}_MarsBit`,
            description: `${tags}的最新报道，${tags}最新新闻 快讯提供最快讯的区块链快讯与区块链新闻`,
            keywords: `${tags}区块链技术文章,${tags}新闻,${tags}快讯,${tags}深度分析,${tags}是什么,${tags}介绍,快讯了解${tags},区块链新闻,区块链快讯,区块链技术`
        }

        // 针对百度搜录“崔萌”，seo临时方案，后期可删除
        if (tags === '崔萌') {
            webTdkTags = webTdk
        }

        // 习见平
        if (tags === '习见平') {
            res.redirect(301, mixUrl.news())
            return { customRes: true }
        } else if (breakTheLaw.includes(tags) || tags.indexOf('三合') > -1 || tags.indexOf('合一') > -1) {
            res.redirect(301, mixUrl.main())
        }

        return {
            clientLink: mixUrl.m(match.url, req),
            ...webTdkTags
        }
    }

    render () {
        return <Tags pageType="tags" {...this.props}/>
    }
}
