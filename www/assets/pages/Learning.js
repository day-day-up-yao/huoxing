import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'

const Learning = loadable(() => import('../containers/Learning'))

export default class LearningPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        let tdk = {
            title: '学习区块链，从0到1系统理解区块链-MarsBit',
            keywords: '比特币,比特币资讯,区块链,区块链资讯,数字货币,数字货币资讯,比特币是什么,区块链是什么,区块链教学,区块链自学,区块链技术,比特币技术',
            description: '为区块链新手提供的区块链入门教程，系统了解区块链技术、数字货币、技术原理、产业发展等'
        }
        return {
            clientLink: mixUrl.m(match.url),
            ...tdk
        }
    }

    render () {
        return <Learning {...this.props}/>
    }
}
