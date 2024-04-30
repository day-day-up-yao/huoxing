import React, { Component } from 'react'
import loadable from '@loadable/component'
// import { mixUrl } from 'multiPublic/index'

const NaGa = loadable(() => import('../containers/NaGa'))

export default class NaGaPage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match.url, 111)

        return {
            clientLink: 'https://m.naga.one',
            // ...webTdk
            title: 'NAGA-The First Games NFT MarketPlace On APTOS'
        }
    }

    render () {
        return <NaGa {...this.props} />
    }
}
