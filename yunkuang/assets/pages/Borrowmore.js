import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Borrowmore = loadable(() => import('../containers/Borrowmore'))

export default class BorrowmorePage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Borrowmore {...this.props} />
    }
}
