import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const LawStatement = loadable(() => import('../containers-m/LawStatement'), { ssr: false })

export default class LawStatementPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <LawStatement {...this.props} />
    }
}
