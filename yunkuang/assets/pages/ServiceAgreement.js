import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const ServiceAgreement = loadable(() => import('../containers/ServiceAgreement'))

export default class ServiceAgreementPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <ServiceAgreement {...this.props} />
    }
}
