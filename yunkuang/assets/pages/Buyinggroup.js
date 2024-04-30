import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Buyinggroup = loadable(() => import('../containers/Buyinggroup'), { ssr: false })

export default class BuyinggroupPage extends Component {
    static async getInitialProps (context) {
        const { match, store } = context
        await store.dispatch.product.getProductDetail({ productId: match.params.productId }).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Buyinggroup {...this.props} />
    }
}
