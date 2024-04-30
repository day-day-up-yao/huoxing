import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const AccountSafety = loadable(() => import('../containers-m/MyCenter/AccountSafety'), { ssr: false })

export default class AccountSafetyPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <AccountSafety {...this.props} />
    }
}
