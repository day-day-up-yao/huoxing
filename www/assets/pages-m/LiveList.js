import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'
import { getRoomLiveList } from '../redux/actions/live'
const LiveList = loadable(() => import('../containers-m/Livelist'), false)

export default class LiveListPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context
        await Promise.all([
            store.dispatch(getRoomLiveList({ recommendFlag: 1, pageSize: 20, newFlag: 1, req: req }))
        ])
        return {
            clientLink: mixUrl.main(match.url, req),
            ...webTdk
        }
    }
    render () {
        return <LiveList {...this.props} />
    }
}
