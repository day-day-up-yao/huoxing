import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enoutputlist = loadable(() => import('../containers/Enoutputlist'))

export default class EnoutputlistPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enoutputlist {...this.props} />
    }
}
