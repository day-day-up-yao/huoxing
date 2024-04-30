import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const JpTransaction = loadable(() => import('../containers-m/JpTransaction'))

export default class JpTransactionPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <JpTransaction {...this.props} />
    }
}
