import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk, isJp } from '../public/js/index'

const Together = loadable(() => import('../containers/Together'))

export default class TogetherPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.product.getProductList({ currency: 'FIL', req: req }),
            store.dispatch.product.inviteshareInfo({ picType: isJp ? 24 : 20 }),
            store.dispatch.public.quoteRates({ tokens: 'BTC,ETH', legalCoins: 'BTC,USDT,CNY,USD,ETH,JPY', req: req })
        ]).catch(function (err) {
            throw Error(err)
        })
        // await store.dispatch.product.getProductList({ jointMiningType: 9 }).catch(function (err) {
        //     throw Error(err)
        // })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Together {...this.props} />
    }
}
