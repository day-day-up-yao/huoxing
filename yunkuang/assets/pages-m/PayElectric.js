import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const PayElectric = loadable(() => import('../containers-m/PayElectric'), { ssr: false })

export default class PayElectricPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <PayElectric {...this.props} />
    }
}