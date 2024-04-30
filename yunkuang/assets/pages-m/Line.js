import React, { Component } from 'react'
import loadable from '@loadable/component'
// import Cookies from 'js-cookie'
import { webTdk } from '../public/js/index'

const Line = loadable(() => import('../containers-m/Line'), { ssr: false })

export default class LinePage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Line {...this.props} />
    }
}
