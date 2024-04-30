import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Twodefidetail = loadable(() => import('../containers-m/Twodefidetail'))

export default class TwodefidetailPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Twodefidetail {...this.props} />
    }
}
