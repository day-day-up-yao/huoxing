import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Extractrecords = loadable(() => import('../containers-m/Extractrecords'), { ssr: false })

export default class ExtractrecordsPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Extractrecords {...this.props} />
    }
}
