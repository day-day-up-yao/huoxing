import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ProductAgreement = loadable(() => import('../containers-m/ProductAgreement'))

export default class ProductAgreementPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <ProductAgreement {...this.props} />
    }
}
