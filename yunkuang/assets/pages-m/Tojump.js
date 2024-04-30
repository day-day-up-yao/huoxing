import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Tojump = loadable(() => import('../containers-m/Tojump'), { ssr: false })

export default class TojumpPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Tojump {...this.props} />
    }
}
