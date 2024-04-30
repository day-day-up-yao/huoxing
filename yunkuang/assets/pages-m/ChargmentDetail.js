import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ChargmentDetail = loadable(() => import('../containers-m/ChargmentDetail'), { ssr: false })

export default class ChargmentDetailPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <ChargmentDetail {...this.props} />
    }
}
