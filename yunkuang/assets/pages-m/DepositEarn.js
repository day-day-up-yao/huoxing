import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const DepositEarn = loadable(() => import('../containers-m/DepositEarn'))

export default class DepositEarnPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <DepositEarn {...this.props} />
    }
}
