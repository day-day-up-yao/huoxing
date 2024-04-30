import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const OrderDetail = loadable(() => import('../containers/OrderDetail'))

export default class OrderDetailPage extends Component {
    static async getInitialProps (context) {
        // 由于在此请求，若接口为域名api.mclouds.io则会出现要求登录，故放到了前端请求
        // const { match, store, req } = context
        // const orderDetail = await store.dispatch.order.orderDetail({
        //     tradeNo: match.params.tradeNo,
        //     auToken: req.cookies.au_token
        // }).catch(function (err) {
        //     throw Error(err)
        // })

        // if (orderDetail.code !== 0) {
        //     throw Error(orderDetail.msg)
        // }

        // await store.dispatch.product.getProductDetail({ productId: orderDetail.data.productId })
        return {
            ...webTdk
        }
    }

    render () {
        return <OrderDetail {...this.props} />
    }
}
