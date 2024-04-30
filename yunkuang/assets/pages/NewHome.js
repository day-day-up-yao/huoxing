import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, isJp } from '../public/js/index'
const NewHome = loadable(() => import('../containers/NewHome'))
export default class NewHomePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        // console.log(req)
        await Promise.all([
            store.dispatch.product.getBannerAdList({ picType: (isJp || (req.language).toLowerCase().substring(0, 2) === 'ja') ? 21 : (req.language).toLowerCase().substring(0, 2) === 'en' ? 27 : 14 }),
            store.dispatch.public.getProductList({ recommendIndex: 1, req: req }),
            store.dispatch.product.parterList({ req: req }),
            store.dispatch.product.getProductList({ req: req }),
            store.dispatch.public.userAgreement({ type: 5, req: req })
            // store.dispatch.public.messageList({
            //     type: 0,
            //     curPage: 1,
            //     pageSize: 4,
            //     req: reqmclouds-locality
            // })
            // store.dispatch.public.useAgreement({})
        ])
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <NewHome {...this.props} />
    }
}
