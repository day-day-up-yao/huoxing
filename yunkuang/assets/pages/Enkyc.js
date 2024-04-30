import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enkyc = loadable(() => import('../containers/Enkyc'))

export default class UserPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await store.dispatch.public.getCountry({ req: req }).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enkyc {...this.props} />
    }
}
