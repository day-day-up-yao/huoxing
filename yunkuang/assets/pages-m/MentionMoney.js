import React, { Component } from 'react'
import loadable from '@loadable/component'
// import Cookies from 'js-cookie'
import { webTdk } from '../public/js/index'

const Mention = loadable(() => import('../containers-m/Property/Mention'), { ssr: false })

export default class MentionPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Mention {...this.props} />
    }
}
