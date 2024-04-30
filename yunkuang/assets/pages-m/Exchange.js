import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Exchange = loadable(() => import('../containers-m/Exchange'), { ssr: false })

export default class ExchangePage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Exchange {...this.props} />
    }
}
