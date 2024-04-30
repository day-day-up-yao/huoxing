import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Defi = loadable(() => import('../containers-m/Defi'))

export default class DefiPage extends Component {
    static async getInitialProps (context) {
        const { store } = context
        await store.dispatch.product.cbbProduct({})
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Defi {...this.props} />
    }
}
