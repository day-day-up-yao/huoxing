import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getRoomByID, getRoomPopularity, getRoomLiveList } from '../redux/actions/live'
import { mixUrl } from 'multiPublic/index'
const LiveShare = loadable(() => import('../containers-m/LiveShare'))
export default class LiveSharePage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        const roomId = match.params.roomId
        let tdk = {
            title: '',
            description: ''
        }
        await Promise.all([
            store.dispatch(getRoomByID({
                roomId: roomId,
                req: req
            })).then(function (res) {
                if (res.code === 1) {
                    let data = res.obj
                    tdk = {
                        title: data.name,
                        description: data.brief.replace(/<[^<>]+>/g, '').replace(/&nbsp;/ig, '')
                    }
                }
            }).catch(function (err) {
                throw new Error(err)
            }),
            store.dispatch(getRoomPopularity({ roomIDs: roomId, req: req })),
            store.dispatch(getRoomLiveList({ recommendFlag: 1, pageSize: 4, newFlag: 1, req: req }))
        ])
        return {
            clientLink: mixUrl.main(`/live/${roomId}`, req),
            shareIcon: mixUrl.main('/resource/images/wxshare-live.png'),
            javascript: ['/resource/plugin/TcPlayer-2.3.2.js'],
            ...tdk
        }
    }
    render () {
        return <LiveShare {...this.props}/>
    }
}
