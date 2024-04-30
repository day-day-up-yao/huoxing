import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Hashrate = loadable(() => import('../containers/Hashrate'))

export default class HashratePage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Hashrate {...this.props} />
    }
}
