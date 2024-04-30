import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Borrow = loadable(() => import('../containers-m/Borrow'))

export default class BorrowPage extends Component {
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
        return <Borrow {...this.props} />
    }
}
