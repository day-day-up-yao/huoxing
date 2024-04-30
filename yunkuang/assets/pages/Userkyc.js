import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Userkyc = loadable(() => import('../containers/Userkyc'), { ssr: false })

export default class UserPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            ...webTdk
        }
    }

    render () {
        return <Userkyc {...this.props} />
    }
}
