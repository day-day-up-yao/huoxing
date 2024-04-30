import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Termsof = loadable(() => import('../containers/Termsof'))

export default class TermsofPage extends Component {
    static async getInitialProps (context) {
        // const { store } = context
        // await store.dispatch.product.getProductList().catch(function (err) {
        //     throw Error(err)
        // })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Termsof {...this.props} />
    }
}
