import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Outputlist = loadable(() => import('../containers-m/Outputlist'), { ssr: false })

export default class OutputlistPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Outputlist {...this.props} />
    }
}
