import React, { Component } from 'react'
import loadable from '@loadable/component'

// import { webTdk } from '../public/js/index'

const IosDownload = loadable(() => import('../containers-m/IosDownload'), { ssr: false })

export default class IosDownloadPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            title: 'mclouds download'
        }
    }

    render () {
        return <IosDownload {...this.props} />
    }
}
