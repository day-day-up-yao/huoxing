import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const PledgeOrder = loadable(() => import('../containers/PledgeOrder'))

export default class PledgeOrderPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            // clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <PledgeOrder {...this.props} />
    }
}
