import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Moneypaswd = loadable(() => import('../containers-m/Moneypaswd'), { ssr: false })

export default class MoneypaswdPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Moneypaswd {...this.props} />
    }
}
