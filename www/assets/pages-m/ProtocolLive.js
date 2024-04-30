import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'

const ProtocolLive = loadable(() => import('../containers-m/ProtocolLive'))

export default class ProtocolLivePage extends Component {
    static async getInitialProps (context) {
        const { match } = context

        return {
            clientLink: mixUrl.main(match.url),
            ...webTdk
        }
    }

    render () {
        return <ProtocolLive {...this.props} />
    }
}
