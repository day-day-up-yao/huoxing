import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Together = loadable(() => import('../containers-m/Together'), { ssr: false })

export default class TogetherPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.product.inviteshareInfo({ picType: 19, req: req }),
            store.dispatch.product.getProductList({ productPartnerType: 1, req: req }),
            store.dispatch.product.parterList({ req: req })
        ]).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Together {...this.props}/>
    }
}
