import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Jpprivacy = loadable(() => import('../containers-m/Jpprivacy'))

export default class JpprivacyPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Jpprivacy {...this.props} />
    }
}
