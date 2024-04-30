import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const HelpCenter = loadable(() => import('../containers/HelpCenter'))

export default class HelpCenterPage extends Component {
    static async getInitialProps (context) {
        // const { store } = context
        // await store.dispatch.product.getProductList().catch(function (err) {
        //     throw Error(err)
        // })
        const { store, req } = context
        await store.dispatch.product.getProductList({ req: req }).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <HelpCenter {...this.props} />
    }
}
