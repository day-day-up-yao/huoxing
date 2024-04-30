import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const User = loadable(() => import('../containers/User'))

export default class UserPage extends Component {
    static async getInitialProps (context) {
        const { match, store, req } = context
        await store.dispatch.public.setLoginInfo({ type: match.params.type, bool: true, req: req })
        return {
            ...webTdk
        }
    }

    render () {
        return <User {...this.props} />
    }
}
