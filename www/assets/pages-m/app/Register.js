import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'

const RegisterM = loadable(() => import('../../containers-m/app/Register'))

export default class RegisterPage extends Component {
    static async getInitialProps (context) {
        const { match, res, req } = context
        let tdk = {
            title: '注册-中国领先的区块链信息及金融服务平台-MarsBit',
            description: 'MarsBit是集新闻、资讯、行情、数据等区块链信息等专业服务平台，致力于为区块链创业者以及数字货币投资者提供最新最及时的项目报道、投资顾问、项目分析、市场行情',
            keywords: '区块链，区块链项目，区块链是什么，区块链概念股，区块链论坛，区块链社区，区块链服务，区块链培训，区块链资讯，区块链活动，区块链市场，区块链投资，区块链百科，虚拟币，数字货币，挖矿，虚拟币是什么，数字货币是什么，怎么挖矿，挖矿是什么，coinmarketcap，比特币，比特币今日价格，比特币交易平台，莱特币，以太坊'
        }
        // 2020-04-15 新版注册页面替换此页面，此页面除跳转到register路由外，其它组件可删除
        res.redirect(301, `/register${req.url.split('register.html')[1]}`)
        return {
            customRes: true,
            clientLink: mixUrl.main(match.url),
            ...tdk
        }
    }

    render () {
        return <RegisterM {...this.props}/>
    }
}
