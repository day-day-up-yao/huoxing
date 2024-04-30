import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Userkyc = loadable(() => import('../containers-m/Userkyc'), { ssr: false })

export default class UserkycPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Userkyc {...this.props} />
    }
}
