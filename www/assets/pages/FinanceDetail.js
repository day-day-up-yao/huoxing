import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getPruductDetail } from '../redux/actions/finance'

// import { webTdk } from 'multiPublic/index'

const FinanceDetail = loadable(() => import('../containers/Financing/FinanDetail'))

export default class FinanceDetailPage extends Component {
    static async getInitialProps (context) {
        const { match, store, req } = context
        const projectId = match.params.projectId
        await Promise.all([
            store.dispatch(getPruductDetail({
                projectId: projectId,
                req: req
            }))
        ])
        return {
            clientLink: ''
        }
    }

    render () {
        return <FinanceDetail {...this.props}/>
    }
}
