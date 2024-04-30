import React, { Component } from 'react'
import loadable from '@loadable/component'
import { webTdk, mixUrl } from 'multiPublic/index'
import { getHeaderChannels } from 'multiRedux/actions/header'

const Complaints = loadable(() => import('../containers-m/Complaints'))

export default class ComplaintsPage extends Component {
    static async getInitialProps (context) {
        const { store, match, req } = context

        await Promise.all([
            store.dispatch(getHeaderChannels({ req: req }))
        ]).catch(function (err) {
            throw new Error(`获取相关数据错误: ${err}`)
        })

        return {
            clientLink: mixUrl.main(match.url),
            ...webTdk
        }
    }

    render () {
        return <Complaints {...this.props}/>
    }
}
