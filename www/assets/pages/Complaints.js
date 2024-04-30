import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk, mixUrl } from 'multiPublic/index'

const Complaints = loadable(() => import('../containers/Complaints'))

export default class ComplaintsPage extends Component {
    static async getInitialProps (context) {
        const { match } = context

        return {
            clientLink: mixUrl.m(match.url),
            ...webTdk
        }
    }

    render () {
        return <Complaints {...this.props}/>
    }
}
