import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const DeviceManage = loadable(() => import('../containers-m/MyCenter/DeviceManage'), { ssr: false })

export default class DeviceManagePage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <DeviceManage {...this.props} />
    }
}
