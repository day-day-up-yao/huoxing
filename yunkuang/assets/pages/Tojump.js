import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Tojumpgroup = loadable(() => import('../containers/Tojump'))

export default class TojumpgroupPage extends Component {
    static async getInitialProps (context) {
        // const { match, store } = context
        // await store.dispatch.product.getProductDetail({ productId: match.params.productId }).catch(function (err) {
        //     throw Error(err)
        // })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Tojumpgroup {...this.props} />
    }
}
