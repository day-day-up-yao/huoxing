import React, { Component } from 'react'
import loadable from '@loadable/component'
// import Cookies from 'js-cookie'
import { webTdk, isJp } from '../public/js/index'

const Message = loadable(() => import('../containers-m/Message'), { ssr: false })

export default class MessagePage extends Component {
    static async getInitialProps (context) {
        const { store, req } = context
        await Promise.all([
            store.dispatch.product.getBannerAdList({ picType: (isJp || (req.language).toLowerCase().substring(0, 2) === 'ja') ? 36 : (req.language).toLowerCase().substring(0, 2) === 'en' ? 35 : 34 })
        ]).catch(function (err) {
            throw Error(err)
        })
        return {
            clientLink: 'sameUrl',
            ...webTdk
        }
    }

    render () {
        return <Message {...this.props} />
    }
}
