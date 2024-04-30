import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Pledgehistory = loadable(() => import('../containers-m/BorrowOrder/pledgehistory'))

export default class PledgehistoryPage extends Component {
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
        return <Pledgehistory {...this.props} />
    }
}
