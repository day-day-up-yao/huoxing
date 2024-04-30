import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Outputlist = loadable(() => import('../containers/Outputlist'))

export default class OutputlistPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Outputlist {...this.props}/>
    }
}
