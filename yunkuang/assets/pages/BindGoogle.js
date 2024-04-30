import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const BindGoogle = loadable(() => import('../containers/BindGoogle'))

export default class BindGooglePage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <BindGoogle {...this.props} />
    }
}
