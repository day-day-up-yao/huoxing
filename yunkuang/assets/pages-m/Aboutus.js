import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const Aboutus = loadable(() => import('../containers-m/Aboutus'), { ssr: false })

export default class AboutusPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Aboutus {...this.props} />
    }
}
