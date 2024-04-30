import React, { Component } from 'react'
// import { mixUrl } from 'multiPublic/index'

export default class HomePage extends Component {
    static async getInitialProps (context) {
        // const { res } = context
        // res.redirect(301, mixUrl.m())
        return { customRes: true }
    }

    render () {
        return <div>Home</div>
    }
}
