import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const EnHashrate = loadable(() => import('../containers/EnHashrate'))

export default class EnHashratePage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <EnHashrate {...this.props} />
    }
}
