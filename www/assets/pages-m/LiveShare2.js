import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getRoomByID } from '../redux/actions/live'
import { mixUrl } from 'multiPublic/index'

const LiveShare2 = loadable(() => import('../containers-m/LiveShare2'))

export default class LiveSharePage2 extends Component {
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
            })
        ])
        return {
            clientLink: 'onlyMob',
            shareIcon: mixUrl.main('/resource/images/wxshare-live.png'),
            ...tdk
        }
    }

    render () {
        return <LiveShare2 {...this.props} />
    }
}
