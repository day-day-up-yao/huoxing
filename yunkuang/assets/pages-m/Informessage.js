import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Informessage = loadable(() => import('../containers-m/Informessage'), { ssr: false })

export default class InformessagePage extends Component {
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
        return <Informessage {...this.props} />
    }
}
