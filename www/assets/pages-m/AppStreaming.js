import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { mixUrl } from 'multiPublic/index'

const AppStreaming = loadable(() => import('../containers-m/AppStreaming'))

export default class DownloadPage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        let tdk = {
            title: 'MarsBitApp串流教程',
            keywords: `MarsBit下载,MarsBit，MarsBitiOS，MarsBit安卓，MarsBitAndroid`,
            description: 'MarsBit是关注区块链与数字经济，由资深内容和产品技术团队打造，7x24小时为用户提供区块链技术，应用，产业及政策资讯服务。下载MarsBitAPP，高效及时获取重要信息推送。'
        }
        return {
            clientLink: 'onlyMob',
            ...tdk
        }
    }

    render () {
        return <AppStreaming {...this.props} />
    }
}
