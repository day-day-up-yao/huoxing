
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { Layout, Button, Row, Col, message } from 'antd'
import Cookies from 'js-cookie'
// import {axiosAjax} from '../../public/index'

import { breadcrumb, navigation, logout } from '../../actions/index'
import './index.scss'

const {Header} = Layout

class MainHeader extends Component {
    constructor () {
        super()
        this.state = {
            live: true
        }
    }
    loginOut () {
        this.props.actions.logout({
            passportId: Cookies.get('hx_passportId')
        })
    }
    goAdd () {
        let search = this.props.title
        if (search !== 'userLive') {
            hashHistory.push(`/${search}`)
        } else {
            message.error('后台不可以创建用户直播间')
        }
    }
    goMainPage () {
        hashHistory.push('/mobile')
    }
    goPcPage () {
        hashHistory.push('/post-list')
    }
    render () {
        return <Header style={{ textAlign: 'center' }}>
            <Row>
                <Col span={8}>
                    <div className="header-item"><Button type="primary" onClick={() => { this.goAdd() }}>新增</Button></div>
                </Col>
                <Col span={8}>
                    <div className="header-item"><Button type="primary" onClick={() => { this.goMainPage() }}>回首页</Button></div>
                </Col>
                <Col span={8}>
                    <div className="header-item"><Button type="primary" onClick={() => { this.loginOut() }}>退出登录</Button></div>
                </Col>
            </Row>
        </Header>
    }
}

const mapStateToProps = (state) => {
    return {
        loginInfo: state.loginInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({breadcrumb, navigation, logout}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)
