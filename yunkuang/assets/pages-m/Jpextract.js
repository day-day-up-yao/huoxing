import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Jpextract = loadable(() => import('../containers-m/Jpextract'), { ssr: false })

export default class JpextractPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Jpextract {...this.props} />
    }
}
