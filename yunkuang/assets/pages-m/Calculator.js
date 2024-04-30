import React, { Component } from 'react'
import loadable from '@loadable/component'

// import { webTdk } from '../public/js/index'

const Calculator = loadable(() => import('../containers-m/Calculator'))

export default class CalculatorPage extends Component {
    static async getInitialProps() {
        return {
            clientLink: 'sameUrl',
            // ...webTdk
            title: 'Revenue Calculator'
        }
    }
    render() {
        return <Calculator {...this.props} />
    }
}
