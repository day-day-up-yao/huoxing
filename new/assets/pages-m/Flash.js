import React, { Component } from 'react'
import loadable from '@loadable/component'
import Cookies from 'js-cookie'
import { cookiesName, webTdk, mixUrl } from 'multiPublic/index'
import { getFlashList } from 'multiRedux/actions/flash'

const FlashList = loadable(() => import('../containers-m/Flash'), false)

export default class FlashPage extends Component {
    static async getInitialProps (context) {
        const { match, store, isServer, req } = context
        const passportId = isServer ? req.cookies[cookiesName.passportId] : Cookies.get(cookiesName.passportId)

        await Promise.all([
            store.dispatch(getFlashList({
                currentPage: 1,
                pageSize: 30,
                passportid: passportId,
                req: req
            }))
        ])
        return {
            clientLink: mixUrl.news(match.url, req),
            ...webTdk
        }
    }
    render () {
        return <FlashList {...this.props} />
    }
}
