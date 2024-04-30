import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Termsof = loadable(() => import('../containers-m/Termsof'), { ssr: false })

export default class TermsofPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Termsof {...this.props} />
    }
}
