import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enhelpcenter = loadable(() => import('../containers/Enhelpcenter'))

export default class UserPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enhelpcenter {...this.props} />
    }
}
