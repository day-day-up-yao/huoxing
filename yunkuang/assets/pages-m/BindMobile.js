import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const BindMobile = loadable(() => import('../containers-m/BindMobile'), { ssr: false })

export default class BindMobilePage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <BindMobile {...this.props} />
    }
}
