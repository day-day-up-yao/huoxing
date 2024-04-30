import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const OnTitle = loadable(() => import('../containers-m/OnTitle'), { ssr: false })

export default class OnTitlePage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <OnTitle {...this.props} />
    }
}
