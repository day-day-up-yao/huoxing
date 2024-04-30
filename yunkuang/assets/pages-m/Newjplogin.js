import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Newjplogin = loadable(() => import('../containers-m/Newjplogin'))

export default class NewjploginPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Newjplogin {...this.props} />
    }
}
