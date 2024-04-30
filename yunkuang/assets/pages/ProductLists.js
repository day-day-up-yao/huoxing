import loadable from '@loadable/component'
import React, { Component } from 'react'
import { webTdk } from '../public/js/index'
const ProductLists = loadable(() => import('../containers/ProductLists'))
export default class ProductListsPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        await store.dispatch.product.getProductList({ currency: match.params.curreny, req: req })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }
    render () {
        return <ProductLists/>
    }
}
