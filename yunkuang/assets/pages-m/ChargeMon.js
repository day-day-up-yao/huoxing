import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ChargeMon = loadable(() => import('../containers-m/ChargeMon'), { ssr: false })

export default class ChargeMonPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <ChargeMon {...this.props} />
    }
}
