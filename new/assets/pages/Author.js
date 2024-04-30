import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'

import { getAuthorList } from 'multiRedux/actions/news'
import { cookiesName, mixUrl } from 'multiPublic/index'

const Author = loadable(() => import('../containers/Author'))

export default class AuthorPage extends Component {
    static async getInitialProps (context) {
        const { store, req, isServer, match } = context

        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)

        const { order, type, page } = match.params
        await store.dispatch(getAuthorList({
            type: order || 5,
            currentPage: page || 1,
            pageSize: 30,
            identityAuth: (type === 0 && null) || (type || null),
            myPassportId: passportId,
            req: req
        })).catch(function (err) {
            throw new Error(err)
        })

        return {
            clientLink: mixUrl.m(),
            title: 'MarsBit 专栏_MarsBit 专栏作者_MarsBit 专栏作家_MarsBit',
            description: 'MarsBit是全球估值最高的区块链产业信息，由资深区块链团队倾力打造，为中国区块链爱好者提供全球最新的区块链新闻资讯。MarsBit 专栏，推动全民学习区块链',
            keywords: '区块链专栏,区块链作者,区块链媒体,区块链项目,区块链机构，区块链KOL'
        }
    }

    render () {
        return <Author {...this.props}/>
    }
}
