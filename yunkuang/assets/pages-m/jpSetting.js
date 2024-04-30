import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const JpSetting = loadable(() => import('../containers-m/JpSetting'))

export default class JpSettingPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <JpSetting {...this.props} />
    }
}
