import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Entermsof = loadable(() => import('../containers/Entermsof'))

export default class EntermsofPage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Entermsof {...this.props} />
    }
}
