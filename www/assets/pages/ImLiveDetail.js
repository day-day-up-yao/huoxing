import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getRoomByID, getRoomPopularity, getRoomLiveList, getRoomChatHistory } from '../redux/actions/live'
import { getAdImgData } from '../redux/actions/home'
import { mixUrl } from 'multiPublic/index'

const ImLiveDetail = loadable(() => import('../containers/ImLiveDetail'))

export default class ImLiveDetailPage extends Component {
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
                    // console.log(res.obj)
                }
            }).catch(function (err) {
                throw new Error(err)
            }),
            store.dispatch(getRoomPopularity({ roomIDs: roomId, req: req })),
            store.dispatch(getRoomLiveList({ recommendFlag: 1, pageSize: 8, newFlag: 1, req: req })),
            store.dispatch(getRoomChatHistory({ roomId: roomId, pageSize: 99999, req: req })),
            store.dispatch(getAdImgData({ req: req }))
        ])

        return {
            clientLink: mixUrl.m(`/liveshare/${roomId}`, req),
            shareIcon: mixUrl.main('/resource/images/wxshare-live.png'),
            ...tdk
        }
    }

    render () {
        return <ImLiveDetail {...this.props} />
    }
}
