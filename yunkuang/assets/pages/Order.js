import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Order = loadable(() => import('../containers/Order'))

export default class OrderPage extends Component {
    static async getInitialProps (context) {
        // const { store } = context
        // await Promise.all([
        //     store.dispatch.loan.fixedLoadDetail()
        // ])
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Order {...this.props} />
    }
}
