import React, { Component } from 'react'
import loadable from '@loadable/component'

import { webTdk } from '../public/js/index'

const PropertyDetail = loadable(() => import('../containers/PropertyDetail'))

export default class PropertyDetailPage extends Component {
    static async getInitialProps (context) {
        const { match } = context
        console.log(match)
        return {
            clientLink: 'onlyPc',
            ...webTdk
        }
    }

    render () {
        return <PropertyDetail {...this.props}/>
    }
}
