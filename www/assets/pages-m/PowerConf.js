import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { mixUrl } from 'multiPublic/index'

const PowerConf = loadable(() => import('../containers-m/PowerConf'))

export default class PowerConfPage extends Component {
    static async getInitialProps (context) {
        const { req } = context
        let link = 'https://power.marsbit.cc'
        if (req.hostname.indexOf('.cc') > -1) {
            link = 'https://power.marsbit.cc'
        }
        if (req.hostname.indexOf('.co') > -1) {
            link = 'https://power.marsbit.co'
        }

        let tdk = {
            title: 'POWER 2023 HONG KONG WEB3 创新者峰会 - MarsBit'
        }

        return {
            clientLink: `${link}/hk/zh`,
            // ...webTdk,
            ...tdk
        }
    }

    render () {
        return <PowerConf {...this.props} />
    }
}
