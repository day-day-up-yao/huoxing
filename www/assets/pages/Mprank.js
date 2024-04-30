import React, { Component } from 'react'
import loadable from '@loadable/component'

// import { webTdk } from 'multiPublic/index'

const Mprank = loadable(() => import('../containers/Mprank'))

export default class MprankPage extends Component {
    static async getInitialProps (store) {
        let tdk = {
            title: 'MarsBit 专栏影响力榜单-MarsBit'
        }
        return {
            clientLink: 'onlyPc',
            ...tdk
        }
    }

    render () {
        return <Mprank {...this.props}/>
    }
}
