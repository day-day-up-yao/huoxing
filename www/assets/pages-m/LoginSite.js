import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk, mixUrl } from 'multiPublic/index'
import { loginShowHide } from 'multiRedux/actions/login'

const LoginSite = loadable(() => import('../containers-m/LoginSite'))

export default class LoginSitePage extends Component {
    static async getInitialProps (context) {
        const { store, match } = context

        const path = match.path ? match.path.split('/')[1] : 'register'
        store.dispatch(loginShowHide(path, true))

        return {
            clientLink: mixUrl.main(`/${path}`),
            ...webTdk,
            title: '注册MarsBit账号-关注区块链与数字经济'
        }
    }

    render () {
        return <LoginSite {...this.props}/>
    }
}
