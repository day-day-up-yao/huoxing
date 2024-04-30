import React, { Component } from 'react'
import loadable from '@loadable/component'

const Anmessage = loadable(() => import('../containers-m/Anmessage'))

export default class AnmessagePage extends Component {
    static async getInitialProps () {
        // const { match, store, req } = context
        // let title = ''
        // await store.dispatch.public.messageDetail({ msgId: match.params.msgId, req: req }).then((res) => {
        //     title = res.data.title
        // }).catch(function (err) {
        //     throw Error(err)
        // })
        // let tdk = {
        //     title: `${title}`
        // }
        return {
            clientLink: 'sameUrl',
            title: 'Announcement'
        }
    }

    render () {
        return <Anmessage {...this.props} />
    }
}
