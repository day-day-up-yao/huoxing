import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Jpregister = loadable(() => import('../containers-m/Sign/Jpregister'))

export default class JpregisterPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Jpregister {...this.props} />
    }
}
