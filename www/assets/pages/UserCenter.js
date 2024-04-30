import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'
import {
    getuserCenterInfo,
    getAuthorAchievement,
    getAuthorShowcolumnlist
} from '../redux/actions/userCenter'
import { getShowauthorlist } from '../redux/actions/home'

const UserCenter = loadable(() => import('../containers/UserCenter'))

export default class UserCenterPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        const passportId = match.params.passportId
        let tdk = {
            title: '',
            keywords: '',
            description: ''
        }

        await Promise.all([
            store.dispatch(getShowauthorlist({ req: req })),
            store.dispatch(getAuthorAchievement({ passportId: passportId, req: req })),
            store.dispatch(getAuthorShowcolumnlist({ passportId: passportId, req: req })),
            store.dispatch(getuserCenterInfo({ passportids: passportId, req: req })).then(function (res) {
                if (res.code === 1) {
                    let data = res.obj[0]
                    tdk = {
                        title: `${data.nickName}专栏_${data.nickName}MarsBit`,
                        keywords: `${data.nickName},${data.nickName}的新闻,${data.nickName}的视频,${data.nickName}专栏,${data.nickName}火星号,区块链新闻,区块链快讯,区块链技术`,
                        description: `${data.introduce}，火星号是区块链开放内容创作平台，旨在推动全民学习区块链，欢迎入驻火星号`
                    }
                }
            })
        ])

        return {
            clientLink: mixUrl.m(match.url),
            ...tdk
        }
    }

    render () {
        return <UserCenter {...this.props} />
    }
}
