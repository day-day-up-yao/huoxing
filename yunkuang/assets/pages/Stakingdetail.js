import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Stakingdetail = loadable(() => import('../containers/Stakingdetail'))

export default class StakingdetailPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Stakingdetail {...this.props} />
    }
}
