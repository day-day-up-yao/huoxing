import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Stakinglist = loadable(() => import('../containers/Stakinglist'))

export default class StakinglistPage extends Component {
    static async getInitialProps (context) {
        // const { store } = context
        // await store.dispatch.product.getProductList().catch(function (err) {
        //     throw Error(err)
        // })
        const { store } = context
        await Promise.all([
            store.dispatch.staking.customKvimg({ custom_keys: 'cust.stakingSettings' }),
            store.dispatch.staking.stakingList({})
        ]).catch((err) => {
            throw Error(err)
        })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Stakinglist {...this.props} />
    }
}
