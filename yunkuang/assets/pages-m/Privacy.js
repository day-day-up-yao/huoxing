import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Privacy = loadable(() => import('../containers-m/Privacy'), { ssr: false })

export default class PrivacyPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Privacy {...this.props} />
    }
}
