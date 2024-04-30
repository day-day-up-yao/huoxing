import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'

const Privacy = loadable(() => import('../containers-m/Privacy'))

export default class PrivacyPage extends Component {
    static async getInitialProps (context) {
        const { match } = context

        return {
            clientLink: mixUrl.main(match.url),
            ...webTdk
        }
    }

    render () {
        return <Privacy {...this.props} />
    }
}
