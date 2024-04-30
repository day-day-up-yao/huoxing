import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Borrowagreement = loadable(() => import('../containers/Borrowagreement'))

export default class BorrowagreementPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Borrowagreement {...this.props} />
    }
}
