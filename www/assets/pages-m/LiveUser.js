import React, { Component } from 'react'
import loadable from '@loadable/component'
import { getLiveList } from '../redux/actions/live'
import { mixUrl } from 'multiPublic/index'

const LiveUser = loadable(() => import('../containers-m/LiveUser'))

export default class LiveUserPage extends Component {
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
                        title: '嘉宾与主持人-' + data.room.webcast.title,
                        description: data.room.webcast.desc
                    }
                }
            }).catch(function (err) {
                throw new Error(err)
            })
        ])
        return {
            clientLink: mixUrl.main(match.url),
            ...tdk
        }
    }

    render () {
        return <LiveUser {...this.props}/>
    }
}
