import React, { Component } from 'react'
import loadable from '@loadable/component'
// import Cookies from 'js-cookie'
import { webTdk } from '../public/js/index'

const MsgDetail = loadable(() => import('../containers-m/MsgDetail'), { ssr: false })

export default class MsgDetailPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <MsgDetail {...this.props} />
    }
}
