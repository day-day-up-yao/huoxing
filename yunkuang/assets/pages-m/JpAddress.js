import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const JpAddress = loadable(() => import('../containers-m/JpAddress'))

export default class JpAddressPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <JpAddress {...this.props} />
    }
}
