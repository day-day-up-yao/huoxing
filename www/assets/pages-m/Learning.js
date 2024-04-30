import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'

const Learning = loadable(() => import('../containers-m/Learning'))

export default class LearningPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        let tdk = {
            title: '区块链从入门到精通-MarsBit',
            keywords: '区块链,区块链新闻,区块链服务,比特币资讯,以太坊,区块链是什么,学习区块链,王峰十问',
            description: '近期大热的区块链到底是什么，和我有什么关系'
        }
        return {
            clientLink: mixUrl.main(match.url),
            ...tdk
        }
    }

    render () {
        return <Learning {...this.props}/>
    }
}
