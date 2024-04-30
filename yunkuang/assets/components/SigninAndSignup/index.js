import React, { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import Retrieve from './Retrieve'
// import Retrieveemail from './Retrieveemail'

import Signin from '../Public/Signin'
import Signups from '../Public/Signup'
import Retrieveemails from '../Public/BackPassword'

export default ({ closeHide }) => {
    const { loginType } = useSelector((state) => ({
        loginType: state.public.loginInfo.loginType
    }), shallowEqual)
    const dispatch = useDispatch()

    /** @desc 关闭注册登录弹出框 */
    const loginStatus = useCallback((type, bool) => {
        dispatch.public.setLoginInfo(type, bool)
    }, [])

    const childProps = {
        loginStatus,
        loginType
    }

    return <div className="signup-login-wrapper">
        <a className="close-icon" style={{ display: closeHide ? 'none' : 'block' }} onClick={() => {
            loginStatus(loginType, false)
        }} />
        {loginType === 'signin' && <Signin iswebsite {...childProps} />}
        {loginType === 'signup' && <Signups isWebsit {...childProps} />}
        {loginType === 'retrieve' && <Retrieve {...childProps} />}
        {loginType === 'retrieveemail' && <Retrieveemails isWebsit {...childProps} />}
    </div>
}
