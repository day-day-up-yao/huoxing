import React, { Component } from 'react'
import loadable from '@loadable/component'
import { mixUrl } from 'multiPublic/index'

const Search = loadable(() => import('../containers-m/Search'))

export default class SearchPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        let tdk = {
            title: '',
            keywords: '',
            description: ''
        }

        return {
            clientLink: mixUrl.main(match.url),
            ...tdk
        }
    }

    render () {
        return <Search {...this.props} />
    }
}
