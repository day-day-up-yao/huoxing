import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Borrowhistory = loadable(() => import('../containers-m/BorrowOrder/Borrowhistory'))

export default class BorrowhistoryPage extends Component {
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
        return <Borrowhistory {...this.props} />
    }
}
