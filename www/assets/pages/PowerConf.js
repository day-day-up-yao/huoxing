import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { mixUrl } from 'multiPublic/index'

const PowerConf = loadable(() => import('../containers/PowerConf'))

export default class PowerConfPage extends Component {
    static async getInitialProps (context) {
        // const { req } = context
        // let link = 'https://m.marsbit.cc'
        // console.log(req)
        // if (req.hostname.indexOf('.cc') > -1) {
        //     link = 'https://m.marsbit.cc'
        // }
        // if (req.hostname.indexOf('.co') > -1) {
        //     link = 'https://m.marsbit.co'
        // }
        // if (req.hostname.indexOf('.com') > -1) {
        //     link = 'https://m.marstelegram.com'
        // }

        let tdk = {
            title: 'POWER 2023 HONG KONG WEB3 创新者峰会 - MarsBit'
        }

        return {
            clientLink: 'https://m.marsbit.cc/power/hk/zh',
            ...tdk
        }
    }

    render () {
        return <PowerConf {...this.props} />
    }
}
