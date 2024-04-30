import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getFinancelist, getProductType } from '../redux/actions/finance'

// import { webTdk } from 'multiPublic/index'

const FinanList = loadable(() => import('../containers/Financing/FinanList'))

export default class FinanListPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch(getFinancelist({
                currentPage: 1,
                pageSize: 20,
                category: '',
                projectName: '',
                minInvestDate: '',
                maxInvestDate: '',
                minAmount: '',
                maxAmount: '',
                req: req
            })),
            store.dispatch(getProductType())
        ])
        return {
            clientLink: ''
        }
    }

    render () {
        return <FinanList {...this.props}/>
    }
}
