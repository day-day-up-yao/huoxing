import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { mixUrl } from 'multiPublic/index'

const NagaDetail = loadable(() => import('../containers-m/NaGa/NagaDetail/index'))

export default class NagaDetailPage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match.url, 22)

        return {
            clientLink: 'https://www.naga.one',
            // ...webTdk
            title: 'naga'
        }
    }

    render () {
        return <NagaDetail {...this.props} />
    }
}
