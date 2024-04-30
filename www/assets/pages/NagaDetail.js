import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { mixUrl } from 'multiPublic/index'

const NagaDetail = loadable(() => import('../containers/NaGa/NagaDetail'))

export default class NagaDetailPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match.url, 111)

        return {
            clientLink: 'https://m.naga.one/detail',
            // ...webTdk
            title: 'naga'
        }
    }

    render () {
        return <NagaDetail {...this.props} />
    }
}
