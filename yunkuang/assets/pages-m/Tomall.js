import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk, isJp } from '../public/js/index'

const Tomall = loadable(() => import('../containers-m/Tomall'), { ssr: false })

export default class TomallPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.product.inviteshareInfo({ picType: isJp ? 25 : 19, req: req }),
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
        return <Tomall {...this.props} />
    }
}
