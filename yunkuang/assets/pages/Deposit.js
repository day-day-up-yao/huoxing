import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Deposit = loadable(() => import('../containers/Deposit'))

export default class DepositPage extends Component {
    static async getInitialProps (context) {
        // const { store } = context
        // await store.dispatch.product.getProductList().catch(function (err) {
        //     throw Error(err)
        // })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Deposit {...this.props} />
    }
}
