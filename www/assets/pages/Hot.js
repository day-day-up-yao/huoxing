import React, { Component } from 'react'
import { mixUrl } from 'multiPublic/index'

export default class HotPage extends Component {
    static async getInitialProps (context) {
        const { res, match, req } = context
        const id = match.params.id

        res.redirect(301, mixUrl.news(`/feature/${id}`), req)

        return { customRes: true }
    }

    render () {
        return <div />
    }
}
