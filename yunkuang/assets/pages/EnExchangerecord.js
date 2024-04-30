import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const EnExchangerecord = loadable(() => import('../containers/EnExchangerecord'))

export default class EnExchangerecordPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <EnExchangerecord {...this.props} />
    }
}
