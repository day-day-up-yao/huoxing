import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const UserCenter = loadable(() => import('../containers/NewUsercenter'))

export default class UserCenterPage extends Component {
    static async getInitialProps(context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render() {
        return <UserCenter {...this.props} />
    }
}
