import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'

import { getLiveList } from '../redux/actions/live'

const LiveDetail = loadable(() => import('../containers-m/LiveDetail'))

export default class LiveDetailPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        const castId = match.params.liveId
        let tdk = {
            title: '',
            description: ''
        }
        await Promise.all([
            store.dispatch(getLiveList({
                castId: castId,
                orderBy: 'desc',
                refreshTime: '',
                pageSize: 20,
                req: req
            })).then(function (res) {
                if (res.code === 1) {
                    let data = res.data
                    tdk = {
                        title: data.room.webcast.title,
                        description: data.room.webcast.desc,
                        shareIcon: data.room.webcast.sharPic
                    }
                }
            }).catch(function (err) {
                throw new Error(err)
            })
        ])
        return {
            clientLink: mixUrl.main(match.url, req),
            ...tdk
        }
    }

    render () {
        return <LiveDetail {...this.props}/>
    }
}
