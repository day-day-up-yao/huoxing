import React, { Component } from 'react'
import loadable from '@loadable/component'
// import Cookies from 'js-cookie'
import { webTdk } from '../public/js/index'

const Mining = loadable(() => import('../containers-m/Mining'), { ssr: false })

export default class MiningPage extends Component {
    static async getInitialProps (context) {
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Mining {...this.props} />
    }
}
