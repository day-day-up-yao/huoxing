import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enbindmobile = loadable(() => import('../containers/Enbindmobile'))

export default class EnbindmobilePage extends Component {
    static async getInitialProps (context) {
        // const { match } = context
        // console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enbindmobile {...this.props} />
    }
}
