import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Twodefilist = loadable(() => import('../containers-m/Twodefilist'))

export default class TwodefilistPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Twodefilist {...this.props} />
    }
}
