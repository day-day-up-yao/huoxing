import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Defidetail = loadable(() => import('../containers/Defidetail'))

export default class DefidetailPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Defidetail {...this.props} />
    }
}
