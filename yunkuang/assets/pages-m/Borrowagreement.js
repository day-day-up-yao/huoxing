import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Borrowagreement = loadable(() => import('../containers-m/Borrowagreement'), { ssr: false })

export default class BorrowagreementPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Borrowagreement {...this.props} />
    }
}
