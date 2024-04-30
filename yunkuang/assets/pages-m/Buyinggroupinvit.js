import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Buyinggroupinvit = loadable(() => import('../containers-m/Buyinggroupinvit'), { ssr: false })

export default class BuyinggroupinvitPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Buyinggroupinvit {...this.props}/>
    }
}
