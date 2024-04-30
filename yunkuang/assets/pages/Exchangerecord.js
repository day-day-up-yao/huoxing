import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Exchangerecord = loadable(() => import('../containers/Exchangerecord'))

export default class ExchangerecordPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Exchangerecord {...this.props} />
    }
}