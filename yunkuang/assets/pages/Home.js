import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk, isJp } from '../public/js/index'

const Home = loadable(() => import('../containers/Home'))

export default class HomePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        console.log(req.language)
        await Promise.all([
            store.dispatch.product.getProductList(),
            // store.dispatch.public.getProductList({ jointMiningType: 3 }),
            store.dispatch.public.getProductList({ jointMiningType: 9 }),
            store.dispatch.product.getBannerAdList({ picType: isJp ? 22 : 2 }),
            store.dispatch.product.getBannerAdList({ picType: isJp ? 21 : 14 })
        ]).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Home {...this.props} />
    }
}
