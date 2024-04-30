import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const BindEmail = loadable(() => import('../containers-m/BindEmail'), { ssr: false })

export default class BindEmailPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <BindEmail {...this.props} />
    }
}
