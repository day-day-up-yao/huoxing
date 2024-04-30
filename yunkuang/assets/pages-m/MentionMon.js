import React, { Component } from 'react'
import loadable from '@loadable/component'
// import Cookies from 'js-cookie'
import { webTdk } from '../public/js/index'

const MentionMon = loadable(() => import('../containers-m/MentionMon'), { ssr: false })

export default class MentionMonPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <MentionMon {...this.props} />
    }
}
