import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Stopnet = loadable(() => import('../containers-m/Stopnet'))

export default class StopnetPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Stopnet {...this.props} />
    }
}
