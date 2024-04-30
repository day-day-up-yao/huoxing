import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Unwindhistory = loadable(() => import('../containers-m/BorrowOrder/Unwindhistory'))

export default class UnwindhistoryPage extends Component {
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
        return <Unwindhistory {...this.props} />
    }
}
