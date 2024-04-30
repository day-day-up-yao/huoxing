import React, { Component } from 'react'
import loadable from '@loadable/component'

// import { webTdk } from '../public/js/index'

const Announcement = loadable(() => import('../containers-m/Announcement'), { ssr: false })

export default class AnnouncementPage extends Component {
    static async getInitialProps (context) {
        const { req } = context
        console.log(req.language)
        return {
            clientLink: 'sameUrl',
            title: 'Announcement'
        }
    }

    render () {
        return <Announcement {...this.props} />
    }
}
