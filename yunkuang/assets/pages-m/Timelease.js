import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Together = loadable(() => import('../containers-m/Timelease'), { ssr: false })

export default class TogetherPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await store.dispatch.product.getProductList({ productType: 2, req: req }).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Together {...this.props}/>
    }
}
