import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ChangePswd = loadable(() => import('../containers/ChangePswd'))

export default class ChangePswdPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <ChangePswd {...this.props} />
    }
}
