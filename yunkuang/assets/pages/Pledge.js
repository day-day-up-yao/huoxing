import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk } from '../public/js/index'
const Pledge = loadable(() => import('../containers/Pledge/index'))
export default class PledgePage extends Component {
    static async getInitialProps (context) {
        const { store } = context
        await store.dispatch.loan.hrloanList({}).catch(function (err) {
            throw Error(err)
        })
        return {
            // clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Pledge {...this.props} />
    }
}
