import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Hxintroduce = loadable(() => import('../containers/Hxintroduce'))

export default class HxintroducePage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Hxintroduce {...this.props} />
    }
}
