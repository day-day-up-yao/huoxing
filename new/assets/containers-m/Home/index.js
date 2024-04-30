import React, { Component } from 'react'
import { connect } from 'react-redux'
import loadable from '@loadable/component'

import './index.scss'

import { sendLogin } from 'multiRedux/actions/login'
import { encodePsd } from 'multiPublic/indexBrowser'

import Test from './Test'
import jpg from './images/bg.jpg'

const TestLoadable = loadable(() => import('./TestLoadable'))

const mapStateToProps = (state) => ({
    userInfo: state.multi.login.userInfo
})

@connect(mapStateToProps)
class Home extends Component {
    /** @desc 账号登录 */
    loginFunc = () => {
        sendLogin({
            userName: this.phone.value,
            password: encodePsd(this.password.value),
            verifyCategory: 3
        }).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err)
        })
    }

    render () {
        const { userInfo } = this.props
        return <div className="m-home">
            home <br/>
            <Test/>
            <TestLoadable/>
            姓名:{userInfo.info.nickName !== '' ? userInfo.info.nickName : '未登录'}<br/>
            账号:
            <input type="text" ref={input => {
                this.phone = input
            }}/>
            <br/>
            密码:
            <input type="password" ref={input => {
                this.password = input
            }}/>
            <button onClick={() => {
            }}>
                登录
            </button>
            <br/>
            <img src={jpg} alt="jpg"/>
        </div>
    }
}

export default Home
