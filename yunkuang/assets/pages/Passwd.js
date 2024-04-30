import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Passwd = loadable(() => import('../containers/Passwd'))

export default class PasswdPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Passwd {...this.props}/>
    }
}
