import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Instructions = loadable(() => import('../containers-m/Instructions'), { ssr: false })

export default class InstructionsPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Instructions {...this.props} />
    }
}
