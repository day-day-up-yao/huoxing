import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enlawer = loadable(() => import('../containers/Enlawer'))

export default class EnlawerPage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enlawer {...this.props} />
    }
}
