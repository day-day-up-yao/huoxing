import React, { Component } from 'react'
import loadable from '@loadable/component'

// import { webTdk } from '../public/js/index'

const HelpCenter = loadable(() => import('../containers-m/HelpCenter'), { ssr: false })

export default class HelpCenterPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            title: 'Help Center'
        }
    }

    render () {
        return <HelpCenter {...this.props} />
    }
}
