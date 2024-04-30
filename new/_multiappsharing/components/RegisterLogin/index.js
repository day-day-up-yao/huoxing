import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import Account from './Account'
import Register from './Register'
import Sms from './Sms'
import WeChat from './WeChat'
import Bind from './Bind'

import { loginShowHide } from '../../redux/actions/login'
import { wechatLogin } from './public'

const RegisterLogin = (props) => {
    /** @desc 获取props */
    const { loginType } = props.userState
    const { dispatch, closeHide, mobile } = props
    const { t } = useTranslation()

    // 微信登录
    const [wechatUserInfo, setWechatUserInfo] = useState(null)
    useEffect(() => {
        if (!wechatUserInfo) return
        loginStatus('bind', true)
    }, [wechatUserInfo])
    useEffect(() => {
        wechatLogin({
            bindFn: (info) => {
                setWechatUserInfo(info.obj)
            },
            wechatLoginFn: () => {
                loginStatus('wechat', true)
            }
        })
    }, [])

    /** @desc 关闭注册登录弹出框 */
    const loginStatus = useCallback((type, bool) => {
        dispatch(loginShowHide(type, bool))
    }, [])

    const childProps = {
        loginStatus,
        loginType,
        mobile,
        t
    }

    return <div className="register-login-wrapper">
        <a className="close-icon" style={{ display: closeHide ? 'none' : 'block' }} onClick={() => {
            loginStatus(loginType, false)
        }}/>
        {loginType === 'account' && <Account {...childProps}/>}
        {(loginType === 'register' || loginType === 'retrievePassword') && <Register {...childProps}/>}
        {loginType === 'sms' && <Sms {...childProps}/>}
        {loginType === 'wechat' && <WeChat {...childProps}/>}
        {(loginType === 'bind' || wechatUserInfo) && <Bind {...childProps} wechatUserInfo={wechatUserInfo} />}
    </div>
}

const mapStateToProps = (state) => {
    return {
        userState: state.multi.login.userState
    }
}

export default connect(mapStateToProps)(RegisterLogin)
