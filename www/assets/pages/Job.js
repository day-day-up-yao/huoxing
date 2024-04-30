import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'

const Job = loadable(() => import('../containers/Job'))

export default class JobPage extends Component {
    static async getInitialProps (context) {
        const { match } = context

        return {
            clientLink: mixUrl.m(match.url),
            ...webTdk,
            title: '加入我们-MarsBit'
        }
    }

    render () {
        return <Job {...this.props} />
    }
}
