import React, { Component } from 'react'
import loadable from '@loadable/component'

import { Decrypt } from '../public/js/index'

const ProductDetail = loadable(() => import('../containers-m/ProductDetail'), { ssr: false })

export default class ProductDetailPage extends Component {
    static async getInitialProps (context) {
        const { match, store, req } = context
        await Promise.all([
            store.dispatch.product.getProductDetail({ productId: Decrypt(match.params.productId), req: req }),
            store.dispatch.public.userAgreement({ type: 1, req: req })
        ])
        return {
            title: 'product details'
        }
    }

    render () {
        return <ProductDetail {...this.props} />
    }
}
