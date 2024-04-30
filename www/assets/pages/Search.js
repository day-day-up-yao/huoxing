import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'
import { get24hHotNews } from 'multiRedux/actions/news'
import { getTags } from '../redux/actions/home'
import { getMultiSearchList } from '../redux/actions/search'

import searchData from '../public/js/searchData'

const { searchTabTypeEnum } = searchData()
const Search = loadable(() => import('../containers/Search'))

export default class SearchPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        const searchQuery = decodeURIComponent(match.params.searchQuery)
        let tdk = {
            title: `${searchQuery} - 搜索 - MarsBit`
        }
        await Promise.all([
            store.dispatch(getMultiSearchList({
                q: searchQuery,
                page: 1,
                pageSize: 20,
                type: searchTabTypeEnum.ALL,
                req: req,
                excellentFlag: 0
            })).catch(function (err) {
                throw new Error(err)
            }),
            store.dispatch(get24hHotNews({
                lastDays: 1,
                readCounts: 50,
                newsCounts: 6
            })).catch(function (err) {
                throw new Error(err)
            }),
            store.dispatch(getTags())
        ])

        return {
            clientLink: mixUrl.m(match.url),
            ...tdk
        }
    }

    render () {
        return <Search {...this.props} />
    }
}
