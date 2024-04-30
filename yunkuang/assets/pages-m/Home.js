import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk, isJp } from '../public/js/index'

const Home = loadable(() => import('../containers-m/Home'), { ssr: false })

export default class HomePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.product.getBannerAdList({ picType: (isJp || (req.language).toLowerCase().substring(0, 2) === 'ja') ? 22 : (req.language).toLowerCase().substring(0, 2) === 'en' ? 28 : 2 }),
            store.dispatch.public.getProductList({ recommendIndex: 1, req: req }),
            store.dispatch.public.userAgreement({ type: 5, req: req })
        ]).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Home {...this.props}/>
    }
}
