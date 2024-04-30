import React, { Component } from 'react'
import loadable from '@loadable/component'

import { getFeatureDetails } from '../redux/actions/news'
import { getFeatureRecommendList, getHotNews } from 'multiRedux/actions/news'
import { mixUrl } from 'multiPublic/index'

const FeatureDetailsAndTags = loadable(() => import('../containers/FeatureDetailsAndTags'))

export default class FeatureDetailsPage extends Component {
    static async getInitialProps (context) {
        const { store, match, isServer, res, history, req } = context
        const featureId = decodeURI(match.params.featureId)
        if (!featureId) {
            isServer ? res.redirect('/') : history.push('/')
            return { customRes: true }
        }

        // const featureDetails = await store.dispatch(getFeatureDetails(featureId)).catch(function (err) {
        //     throw new Error(err)
        // })

        // const tags = featureDetails.obj.tags

        const featureDetails = await store.dispatch(getFeatureDetails({
            id: featureId,
            currentPage: 1,
            pageSize: 15,
            req: req
        })).catch(function (err) {
            throw new Error(err)
        })

        const topic = featureDetails.obj.topic
        await Promise.all([
            new Promise((resolve, reject) => {
                store.dispatch(getHotNews({
                    lastDays: 3,
                    readCounts: 50,
                    newsCounts: 6,
                    req: req
                })).then(function (res) {
                    if (res.code === 1) {
                        resolve(res)
                    } else {
                        throw res.msg
                    }
                }).catch(function (err) {
                    reject(new Error(`获取热门新闻错误: ${err}`))
                })
            }),
            // new Promise((resolve, reject) => {
            //     store.dispatch(getTopicInfo({
            //         currentPage: 1,
            //         pageSize: 15,
            //         id: featureId
            //     })).then(function (res) {
            //         if (res.code === 1) {
            //             resolve(res)
            //         } else {
            //             throw res.msg
            //         }
            //     }).catch(function (err) {
            //         reject(new Error(`获取专题内容列表错误: ${err}`))
            //     })
            // }),
            new Promise((resolve, reject) => {
                store.dispatch(getFeatureRecommendList({
                    currentPage: 1,
                    pageSize: 5,
                    req: req
                })).then(function (res) {
                    if (res.code === 1) {
                        resolve(res)
                    } else {
                        throw res.msg
                    }
                }).catch(function (err) {
                    reject(new Error(`获取专题列表错误: ${err}`))
                })
            })
        ]).catch(function (err) {
            throw err
        })

        return {
            clientLink: mixUrl.m(`/feature/${match.params.featureId}`, req),
            title: `${topic.topicName}_MarsBit`,
            description: topic.description,
            keywords: `${topic.tags}区块链技术文章,${topic.tags}新闻,${topic.tags}快讯,${topic.tags}深度分析,${topic.tags}是什么,${topic.tags}介绍,快讯了解${topic.tags},区块链新闻,区块链快讯,区块链技术`
        }
    }

    render () {
        return <FeatureDetailsAndTags pageType="feature" {...this.props}/>
    }
}
