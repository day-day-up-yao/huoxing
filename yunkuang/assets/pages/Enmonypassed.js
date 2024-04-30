import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enmonypassed = loadable(() => import('../containers/Enmonypassed'))

export default class EnmonypassedPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enmonypassed {...this.props} />
    }
}
