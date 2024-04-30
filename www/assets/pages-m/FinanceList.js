import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'
import { getFinancelist, getProductType } from '../redux/actions/finance'

const FinanceList = loadable(() => import('../containers-m/FinanceInfo/FinanceList'))

export default class FinanceListPage extends Component {
    static async getInitialProps (context) {
        const { match, req, store } = context
        await Promise.all([
            store.dispatch(getFinancelist({
                currentPage: 1,
                pageSize: 10,
                category: '',
                projectName: '',
                minInvestDate: '',
                maxInvestDate: '',
                minAmount: '',
                maxAmount: '',
                req: req
            })),
            store.dispatch(getProductType({ req: req }))
        ])
        return {
            clientLink: mixUrl.main(match.url, req)
        }
    }

    render () {
        return <FinanceList {...this.props} />
    }
}
