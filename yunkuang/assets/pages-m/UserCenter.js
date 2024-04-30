import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const UserCenter = loadable(() => import('../containers-m/UserCenter'), { ssr: false })

export default class UserCenterPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <UserCenter {...this.props} />
    }
}
