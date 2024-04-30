import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Information = loadable(() => import('../containers-m/Information'), { ssr: false })

export default class InformationPage extends Component {
    static async getInitialProps (context) {
        // const { store } = context
        // await Promise.all([
        //     store.dispatch.public.getProductList({ jointMiningType: 3 })
        // ]).catch(function (err) {
        //     throw Error(err)
        // })
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Information {...this.props} />
    }
}
