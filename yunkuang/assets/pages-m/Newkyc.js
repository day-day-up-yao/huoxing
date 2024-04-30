import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk } from '../public/js/index'
const Newkyc = loadable(() => import('../containers-m/Newkyc'))
export default class NewkycPage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.public.getCountry({ req: req })
        ])
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Newkyc {...this.props}/>
    }
}
