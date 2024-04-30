import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const BorrowOrder = loadable(() => import('../containers-m/BorrowOrder'))

export default class BorrowOrderPage extends Component {
    static async getInitialProps (context) {
        const { store } = context
        await Promise.all([
            store.dispatch.loan.fixedLoadDetail()
        ])
        return {
            // clientLink: 'onlyMob',
            ...webTdk
        }
    }

    render () {
        return <BorrowOrder {...this.props} />
    }
}
