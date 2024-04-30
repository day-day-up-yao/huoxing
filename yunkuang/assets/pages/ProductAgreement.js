import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ProductAgreement = loadable(() => import('../containers/ProductAgreement'))

export default class ProductAgreementPage extends Component {
    static async getInitialProps () {
        return {
            ...webTdk
        }
    }

    render () {
        return <ProductAgreement {...this.props} />
    }
}
