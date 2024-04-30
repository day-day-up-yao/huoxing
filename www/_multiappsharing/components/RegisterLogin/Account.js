import React, { useRef, useState, useEffect, useCallback } from 'react'
import { func } from 'prop-types'
import { useTranslation } from 'react-i18next'

import sms from './images/icon-sms.png'
import wechat from './images/icon-wechat.png'

import { sendLogin } from '../../redux/actions/login'
import { trim, isPhone, mixUrl } from '../../public/index'
import { loginSuccess } from './public'

import Toast from '../Toast'

const Account = (props) => {
    const { t } = useTranslation()
    /** @desc 获取props */
    const { loginStatus, mobile } = props

    /** @desc 账号 */
    const phoneNum = useRef()
    const [phoneNumErr, setPhoneNumErr] = useState('')

    /** @desc 密码 */
    const psd = useRef()
    const [psdErr, setPsdErr] = useState('')

    /** @desc 确认登录 */
    const confirm = useCallback(() => {
        const accountVal = trim(phoneNum.current.value)
        const psdVal = trim(psd.current.value)

        const validateAccount = accountVal === '' || !isPhone(accountVal)
        const validatePsd = psdVal === ''
        if (validateAccount) setPhoneNumErr(t('please_sure_ipone'))
        if (validatePsd) setPsdErr(t('password_not_null'))
        if (validateAccount || validatePsd) {
            return false
        }

        const { encodePsd } = require('../../public/indexBrowser')
        sendLogin('/login', {
            phonenum: accountVal,
            password: encodePsd(psdVal)
        }).then(function (res) {
            if (res.code === 1) {
                loginSuccess(res)
            } else {
                switch (res.code) {
                    case -7: // -7手机号未注册
                        setPhoneNumErr(res.msg)
                        setPsdErr('')
                        break
                    case -3: // -3 密码错误
                        setPhoneNumErr('')
                        setPsdErr(res.msg)
                        break
                    default:
                        Toast.info(res.msg)
                }
            }
        }).catch(function (err) {
            Toast.info(t('account_paswd_error'))
            throw err
        })
    }, [])

    /** @desc 回车确认登录 */
    useEffect(() => {
        window.onkeyup = function (event) {
            if (event.keyCode === 13) {
                confirm()
            }
        }
    }, [])

    return <div className="content">
        <div className="header">
            <h1>{t('account_pasd_login')}</h1>
            <a className="new-account" onClick={() => {
                loginStatus('register', true)
            }}>
                {t('signnup_new_account')}
                <span className="arrow-icon" />
            </a>
        </div>
        <div className="body">
            <div className="item">
                <div className="input-box">
                    <input ref={phoneNum} onFocus={() => {
                        setPhoneNumErr('')
                    }} type="text" placeholder={t('input_mobile_code')} />
                </div>
                <p className="error">{phoneNumErr}</p>
            </div>
            <div className="item password">
                <div className="input-box">
                    <input ref={psd} onFocus={() => {
                        setPsdErr('')
                    }} type="password" placeholder={t('input_password')} />
                </div>
                <p className="error">{psdErr}</p>
                <a className="password-forget" onClick={() => {
                    loginStatus('retrievePassword', true)
                }}>{t('forget_password')}</a>
            </div>
            <button className="submit" onClick={confirm}>{t('sure')}</button>
            <div className="other-way">
                <p>{t('other_ways_login')}</p>
                <div className="ways">
                    {!mobile && <a className="wechat" title={t('wechat_login')} onClick={() => {
                        if (mixUrl.main().indexOf(window.location.host) > -1) {
                            loginStatus('wechat', true)
                        } else {
                            window.location.href = mixUrl.main('/wechat')
                        }
                    }}><img src={wechat} alt={t('wechat_login')} /></a>}
                    <a className="sms" title={t('message_login')} onClick={() => {
                        loginStatus('sms', true)
                    }}><img src={sms} alt={t('message_login')} /></a>
                </div>
            </div>
        </div>
    </div>
}

Account.propTypes = {
    loginStatus: func.isRequired
}

export default Account
