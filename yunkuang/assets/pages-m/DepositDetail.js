import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const DepositDetail = loadable(() => import('../containers-m/DepositDetail'))

export default class DepositDetailPage extends Component {
    static async getInitialProps (context) {
        // const { store, match, req } = context
        // await Promise.all([
        //     store.dispatch.product.cbbProduct({}),
        //     store.dispatch.product.cbbDetail({ prodcode: match.params.projectCode, req: req })
        // ])
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <DepositDetail {...this.props} />
    }
}
