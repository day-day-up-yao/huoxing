import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const EnuserCenter = loadable(() => import('../containers/EnuserCenter'))

export default class EnuserCenterPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <EnuserCenter {...this.props} />
    }
}
