import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Assets = loadable(() => import('../containers-m/Assets'), { ssr: false })

export default class AssetsPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Assets {...this.props} />
    }
}
