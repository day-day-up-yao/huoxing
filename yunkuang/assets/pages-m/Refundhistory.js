import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Refundhistory = loadable(() => import('../containers-m/BorrowOrder/refundhistory'))

export default class RefundhistoryPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.loan.fixedLoadDetail({ req: req })
        ])
        return {
            // clientLink: 'onlyMob',
            ...webTdk
        }
    }

    render () {
        return <Refundhistory {...this.props} />
    }
}
