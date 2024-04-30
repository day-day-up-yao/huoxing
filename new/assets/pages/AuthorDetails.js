import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { getNewsList } from 'multiRedux/actions/news'
import { cookiesName, mixUrl } from 'multiPublic/index'
import { getAuthorVideo, getAuthor, getAuthorAchieve, getAuthorInfo } from '../redux/actions/author'

const AuthorDetails = loadable(() => import('../containers/AuthorDetails'))

export default class AuthorDetailsPage extends Component {
    static async getInitialProps (context) {
        const { store, req, isServer, match } = context

        // 获取作者 passportId
        const authorId = match.params.authorId
        // 获取自己 passportId, token
        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)
        const token = isServer ? req.cookies[cookiesName.token] : Cookies.get(cookiesName.token)

        let params = {
            passportId: authorId,
            token: authorId === passportId ? token : '',
            currentPage: 1,
            pageSize: 15,
            status: 1,
            req: req
        }
        await Promise.all([
            store.dispatch(getNewsList(params, 'author')),
            store.dispatch(getAuthorVideo(params, 'author')),
            store.dispatch(getAuthor(params, 'author')),
            store.dispatch(getAuthorAchieve(params, 'author')),
            store.dispatch(getAuthorInfo(params, 'author'))
        ]).catch(function (err) {
            throw Error(err)
        })

        return {
            clientLink: mixUrl.m(),
            title: 'author details',
            keywords: 'author details',
            description: 'author details'
        }
    }

    render () {
        return <AuthorDetails {...this.props}/>
    }
}
