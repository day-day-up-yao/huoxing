import React from 'react'
// import { useTranslation } from 'react-i18next'
// import { useSelector, shallowEqual } from 'react-redux'
import './index.scss'
// import logindown from '../../public/imgs/logindown.png'
import SigninAndSignup from '../../components/SigninAndSignup'

export default (props) => {
    // const { i18n } = useTranslation()
    // const { loginType } = useSelector((state) => ({
    //     loginType: state.public.loginInfo.loginType
    // }), shallowEqual)
    return <div className="user-page">
        <div className="user-page-con">
            <SigninAndSignup closeHide={true} />
            {/* {(loginType === 'signin' && (i18n.language).toLowerCase().substring(0, 2) === 'zh') && <div className="login-down">
                <img src={logindown} alt=""/>
            </div>} */}
            {/* {loginType === 'signup' && <div className="siginup-text">{t('header.sign.Coco')}</div>} */}
        </div>
    </div>
}
