import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const CheckStand = loadable(() => import('../containers-m/CheckStand'), { ssr: false })

export default class CheckStandPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <CheckStand {...this.props} />
    }
}
