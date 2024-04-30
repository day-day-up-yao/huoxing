import React, { Component } from 'react'
import { mixUrl } from 'multiPublic/index'

export default class LiveSharePage extends Component {
    static async getInitialProps (context) {
        const { res, match, req } = context
        const roomId = match.params.roomId
        res.redirect(301, mixUrl.m(`/liveshare/${roomId}`, req))

        return { customRes: true }
    }

    render () {
        return <div/>
    }
}
