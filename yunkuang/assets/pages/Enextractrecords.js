import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Enextractrecords = loadable(() => import('../containers/Enextractrecords'))

export default class EnextractrecordsPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <Enextractrecords {...this.props} />
    }
}
