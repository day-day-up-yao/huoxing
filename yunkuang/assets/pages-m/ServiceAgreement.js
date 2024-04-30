import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ServiceAgreement = loadable(() => import('../containers-m/ServiceAgreement'), { ssr: false })

export default class ServiceAgreementPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <ServiceAgreement {...this.props} />
    }
}
