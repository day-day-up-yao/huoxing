import React, { Component } from 'react'
import { Layout } from 'antd'
import MainHeader from './header'
import FlashContent from './flashcontent.js'
// import AlertLogin from '../AlertLogin'
import './index.scss'

export default class Mainmobile extends Component {
    render () {
        return <Layout>
            <MainHeader />
            <Layout>
                <FlashContent />
            </Layout>
            {/* <AlertLogin /> */}
        </Layout>
    }
}
