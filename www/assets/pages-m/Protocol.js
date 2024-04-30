import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'

const Protocol = loadable(() => import('../containers-m/Protocol'))

export default class ProtocolPage extends Component {
    static async getInitialProps (context) {
        const { match } = context

        return {
            clientLink: mixUrl.main(match.url),
            ...webTdk
        }
    }

    render () {
        return <Protocol {...this.props} />
    }
}
