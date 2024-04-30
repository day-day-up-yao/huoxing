import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Deposit = loadable(() => import('../containers-m/Deposit'))

export default class DepositPage extends Component {
    static async getInitialProps (context) {
        // const { store, req } = context
        // await Promise.all([
        //     store.dispatch.product.cbbProduct({ req: req })
        // ])
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Deposit {...this.props} />
    }
}
