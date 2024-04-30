import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const MyInvite = loadable(() => import('../containers-m/MyInvite'), { ssr: false })

export default class MyInvitePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.public.TemplateInfo({ req: req })
        ]).catch((err) => {
            throw Error(err)
        })
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <MyInvite {...this.props}/>
    }
}
