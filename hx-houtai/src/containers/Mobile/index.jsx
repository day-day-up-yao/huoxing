import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Row, Col } from 'antd'
// import MainHeader from './header'
// import FlashContent from './flashcontent.js'
// import AlertLogin from '../AlertLogin'
// import defaultImg from './img/default.png'
import './index.scss'

export default class Mobile extends Component {
    render () {
        return (
            <div className="mobile-index">
                <Row>
                    <div className="center">
                        <div className="logo"></div>
                    </div>
                </Row>
                <Row>
                    <h3>快讯管理</h3>
                    <Col span={8}><Link to={{pathname: '/mflash-list'}}><Button size="large" type="primary">快讯管理</Button></Link></Col>
                    <Col span={8}><Link to={{pathname: '/mflash-edit'}}><Button size="large" type="primary">快讯发布</Button></Link></Col>
                </Row>
                <Row>
                    <h3>广告管理</h3>
                    <Col span={8}><Link to={{pathname: '/webAd-list'}}><Button size="large" type="primary">网页广告</Button></Link></Col>
                    <Col span={8}><Link to={{pathname: '/appAd-list'}}><Button size="large" type="primary">APP广告</Button></Link></Col>
                </Row>
                <Row>
                    <h3>直播管理</h3>
                    <Col span={8}><Link to={{pathname: '/offiLive-list'}}><Button size="large" type="primary">官方直播</Button></Link></Col>
                    <Col span={8}><Link to={{pathname: '/userLive-list'}}><Button size="large" type="primary">用户直播</Button></Link></Col>
                    <Col span={8}><Link to={{pathname: '/recommend-list'}}><Button size="large" type="primary">首页推荐</Button></Link></Col>
                </Row>
                <Row>
                    <h3>迷你功能</h3>
                    <Col><Link to={{pathname: '/post-list'}}><Button size="large" type="primary">回到PC</Button></Link></Col>
                </Row>
            </div>
        )
    }
}
