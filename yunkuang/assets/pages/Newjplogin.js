import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Newjplogin = loadable(() => import('../containers/Newjplogin'))

export default class NewjploginPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Newjplogin {...this.props} />
    }
}
