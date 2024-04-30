import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const MyInvite = loadable(() => import('../containers/MyInvite'))

export default class MyInvitePage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <MyInvite {...this.props} />
    }
}
