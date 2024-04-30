import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const JpSecurity = loadable(() => import('../containers-m/JpSecurity'))

export default class JpSecurityPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <JpSecurity {...this.props} />
    }
}
