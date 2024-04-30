import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Newkyc = loadable(() => import('../containers/Newkyc'))

export default class UserPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.public.getCountry({ req: req })
        ])
        return {
            ...webTdk
        }
    }

    render () {
        return <Newkyc {...this.props} />
    }
}
