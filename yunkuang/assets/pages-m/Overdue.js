import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Overdue = loadable(() => import('../containers-m/Overdue'), { ssr: false })

export default class OverduePage extends Component {
    static async getInitialProps () {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Overdue {...this.props} />
    }
}
