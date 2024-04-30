import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import Toast from '../../Toast'
// import Sense from '../Sense'
import md5 from 'blueimp-md5'
import Select from '../../Public/Selectcode'
import { isPsd, trim, queryParam, isJp, initYpRiddler, isPhone, isEmail } from '../../../public/js/index'
import SignTop from '../SignTop'

import './index.scss'

export default (props) => {
    const { isSecure, isWebsit, isQuollet } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const goToSignin = useCallback(() => {
        if (isWebsit) {
            dispatch.public.setLoginInfo({ type: 'signin', bool: true })
            return
        }
        if (isSecure) {
            window.location.href = '/secure/enlogin'
        }
        if (isQuollet) {
            window.location.href = '/jplogin'
        }
    }, [])
    // 登录方式email邮箱，phone手机
    const [accountType, setAccountType] = isQuollet || isSecure || isJp ? useState('email') : useState('phone')

    const [phoneEmailTips, setPhoneEmailTips] = useState()
    const [psdTtips, setPsdTips] = useState()
    const [rePsdTtips, setRePsdTips] = useState()
    const [verifyTips, setVerifyTips] = useState()
    const [protocolTips, setProtocolTips] = useState()
    const [iponepitch, setIponepitch] = useState(false)
    const [pasdpitch, setPasdpitch] = useState(false)
    const [newpasdpitch, setNewpasdpitch] = useState(false)
    const [codepitch, setCodepitch] = useState(false)
    const [typewinw, setTypewinw] = useState(false)
    const [getphoneinfo, setGetphoneinfo] = useState({
        mobile: '',
        contiycode: ''
    })
    const singupForm = useRef()
    const changeType = useCallback((event) => {
        if (event === 'email') {
            setAccountType('phone')
        } else {
            setAccountType('email')
        }
        // const type = event.target.getAttribute('datatype')
        // setAccountType(type)
        singupForm.current.reset()
        setPhoneEmailTips('')
        setPsdTips('')
        setRePsdTips('')
        setVerifyTips('')
        setProtocolTips('')
        setHaveSend(false)
    }, [])
    const emailEle = useRef()

    useEffect(() => {
        if (queryParam('signup')) {
            if (isEmail(queryParam('signup'))) {
                setAccountType('email')
                emailEle.current.value = queryParam('signup')
            }
            if (isPhone(queryParam('signup'))) {
                setAccountType('phone')
                setGetphoneinfo({
                    mobile: queryParam('signup'),
                    contiycode: '86'
                })
            }
        }
    }, [])

    // 密码验证
    const psdEle = useRef()
    const psdVerify = useCallback(() => {
        const val = psdEle.current.value
        if (!isPsd(val)) {
            setPsdTips(t('header.sign.rightPsd'))
            return false
        } else {
            setPsdTips('')
            return true
        }
    }, [])

    // 重新输入密码
    const rePsdEle = useRef()
    const rePsdVerify = useCallback(() => {
        const val = rePsdEle.current.value
        const psdVal = psdEle.current.value
        if (val !== psdVal) {
            setRePsdTips(t('header.sign.rightRePsd'))
            return false
        } else {
            setRePsdTips('')
            return true
        }
    }, [])

    // 发送验证码倒计时
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const sendVerifyDo = useCallback(
        async (event) => {
            event.preventDefault()
            if (accountType === 'phone' && getphoneinfo.mobile === '') return
            if (accountType === 'email' && !emailEle.current.value) return
            accountType === 'phone'
                ? initYpRiddler('signupriddler', senseSuccessSms)
                : initYpRiddler('signupriddler', senseSuccessEmail)
        },
        [accountType, haveSend, getphoneinfo, emailEle]
    )
    useEffect(() => {
        let timer = null
        if (!haveSend) {
            setSendTxt(t('header.sign.sendVerifyCode'))
            clearInterval(timer)
        } else {
            let num = 60
            setSendTxt(`${num}s`)
            timer = setInterval(() => {
                if (num > 0) {
                    num--
                    setSendTxt(`${num}s`)
                } else {
                    setSendTxt(t('header.sign.sendVerifyCode'))
                    setHaveSend(false)
                    clearInterval(timer)
                }
            }, 1000)
        }

        return () => clearInterval(timer)
    }, [haveSend])

    // 极验,点击发送验证码: 先进行极验，再发送验证码
    const orderId = useRef()
    // const senseEleSms = useRef()
    const orderIdVerify = useCallback(() => {
        if (!orderId.current) {
            Toast.info(t('header.sign.imgVerify'))
            return false
        } else {
            return true
        }
    }, [orderId])
    const senseSuccessSms = useCallback(
        (validInfo) => {
            dispatch.public
                .sendSmsVerifyCode({
                    mobile: getphoneinfo.mobile,
                    national_code: getphoneinfo.contiycode,
                    yp_authenticate: validInfo.authenticate,
                    yp_token: validInfo.token,
                    type: 1
                })
                .then(function (res) {
                    if (res.data.orderId) {
                        orderId.current = res.data.orderId
                        !haveSend && setHaveSend(true)
                    } else {
                        Toast.info(res.msg)
                    }
                })
                .catch(function (err) {
                    Toast.error(t('header.sign.phoneVerifyCode'))
                    throw Error(err)
                })
        },
        [getphoneinfo]
    )
    // const senseEleEmail = useRef()
    const senseSuccessEmail = useCallback((validInfo) => {
        dispatch.public
            .sendEmailVerifyCode({
                email: emailEle.current.value,
                yp_authenticate: validInfo.authenticate,
                yp_token: validInfo.token,
                type: 1
            })
            .then(function (res) {
                if (res.data.orderId) {
                    orderId.current = res.data.orderId
                    !haveSend && setHaveSend(true)
                } else {
                    Toast.info(res.msg)
                }
            })
            .catch(function (err) {
                Toast.error(t('header.sign.emailVerifyCode'))
                throw Error(err)
            })
    }, [])

    // 验证码不为空
    const verifyEle = useRef()
    const verifyCodeVerify = useCallback(() => {
        if (trim(verifyEle.current.value) === '') {
            setVerifyTips(t('header.sign.enterVerify'))
            return false
        } else {
            setVerifyTips('')
            return true
        }
    }, [])

    // 检测是否勾选协议
    const protocolEle = useRef()
    const protocolVerify = useCallback(() => {
        if (!protocolEle.current.checked) {
            setProtocolTips(t('header.sign.agreeProcotol'))
            return false
        } else {
            setProtocolTips('')
            return true
        }
    }, [])

    // 邀请码
    const inviteEle = useRef()

    // 确认注册
    const sureSubmit = useCallback(() => {
        event.preventDefault()
        if (psdVerify() && rePsdVerify() && verifyCodeVerify() && protocolVerify() && orderIdVerify()) {
            const params = {
                verify_code: verifyEle.current.value,
                password1: md5(psdEle.current.value),
                password2: md5(rePsdEle.current.value),
                invite_code: inviteEle.current.value,
                order_id: orderId.current
            }
            accountType === 'phone' &&
                dispatch.public
                    .phoneSignup({
                        ...params,
                        mobile: getphoneinfo.mobile,
                        national_code: getphoneinfo.contiycode,
                        type: 1
                    })
                    .then(function (res) {
                        if (res.code === 0) {
                            dispatch.public
                                .userReg({
                                    mobile: getphoneinfo.mobile,
                                    uid: res.data.userId
                                })
                                .then((ures) => {
                                    goToSignin()
                                })
                                .catch((errs) => {
                                    console.log(errs)
                                })
                            // goToSignin()
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                    .catch(function (err) {
                        Toast.error(t('header.sign.phoneSignupFailed'))
                        throw Error(err)
                    })

            accountType === 'email' &&
                dispatch.public
                    .emailSignup({
                        ...params,
                        email: emailEle.current.value,
                        type: 0
                    })
                    .then(function (res) {
                        if (res.code === 0) {
                            dispatch.public
                                .userReg({
                                    email: emailEle.current.value,
                                    uid: res.data.userId
                                })
                                .then((ures) => {
                                    goToSignin()
                                })
                                .catch((errs) => {
                                    console.log(errs)
                                })
                            // goToSignin()
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                    .catch(function (err) {
                        Toast.error(t('header.sign.emailSignupFailed'))
                        throw Error(err)
                    })
        }
    }, [accountType, getphoneinfo])

    /** @desc 回车确认登录 */
    useEffect(() => {
        window.onkeyup = function (event) {
            if (event.keyCode === 13) {
                sureSubmit()
            }
        }
    }, [accountType])

    // 邀请码
    const [inviteCode, setInviteCode] = useState(null)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.localStorage.getItem('invicode')) {
                setTypewinw(true)
                setInviteCode(window.localStorage.getItem('invicode'))
            } else {
                setInviteCode(queryParam('code'))
            }
        }
    }, [])

    return (
        <div className={`signup-wrapper ${isSecure && 'secure'} ${isQuollet && 'quolletsize'}`}>
            <SignTop title="登录" link="/user/signin" />
            {isWebsit && (
                <div>
                    <h3>{accountType === 'phone' ? t('header.sign.phone') : t('header.sign.email')}</h3>
                    {/* <div className="phone-email-tab">
                <button datatype="phone" onClick={changeType} style={{ borderBottom: accountType === 'phone' ? '3px solid #f60' : '' }}>{t('header.sign.phone')}</button>
                <button datatype="email" onClick={changeType} style={{ borderBottom: accountType === 'email' ? '3px solid #f60' : '' }}>{t('header.sign.email')}</button>
            </div> */}
                </div>
            )}
            <form ref={singupForm}>
                <div className="input-con">
                    <div className={`item ${iponepitch ? 'active' : ''}`}>
                        {accountType === 'phone' && (
                            <Select
                                getThisinfo={(obj) => {
                                    setGetphoneinfo(obj)
                                }}
                                mobilevalue={getphoneinfo.mobile}
                            />
                        )}
                        <input
                            type="email"
                            ref={emailEle}
                            autoComplete="off"
                            style={{ display: accountType === 'email' ? 'block' : 'none' }}
                            placeholder={t('header.sign.emailTips')}
                            onBlur={() => {
                                setIponepitch(false)
                            }}
                            onFocus={() => {
                                setIponepitch(true)
                            }}
                        />
                        <span className="error">{phoneEmailTips}</span>
                    </div>
                    <div className="item" className={`item ${codepitch && 'active'}`}>
                        <div className="more-func">
                            <input
                                type="type"
                                ref={verifyEle}
                                onChange={verifyCodeVerify}
                                placeholder={t('header.sign.enterVerify')}
                                onBlur={() => {
                                    setCodepitch(false)
                                }}
                                onFocus={() => {
                                    setCodepitch(true)
                                }}
                            />
                            <a onClick={sendVerifyDo}>{sendTxt}</a>
                        </div>
                        <span className="error">{verifyTips}</span>
                    </div>
                    <div className="item" className={`item ${pasdpitch && 'active'}`}>
                        <input
                            type="password"
                            ref={psdEle}
                            onChange={psdVerify}
                            autoComplete="new-password"
                            placeholder={t('header.sign.enterPsd')}
                            onBlur={() => {
                                setPasdpitch(false)
                            }}
                            onFocus={() => {
                                setPasdpitch(true)
                            }}
                        />
                        <span className="error">{psdTtips}</span>
                    </div>
                    <div className="item" className={`item ${newpasdpitch && 'active'}`}>
                        <input
                            type="password"
                            ref={rePsdEle}
                            onChange={rePsdVerify}
                            autoComplete="new-password"
                            placeholder={t('header.sign.reEnterPsd')}
                            onBlur={() => {
                                setNewpasdpitch(false)
                            }}
                            onFocus={() => {
                                setNewpasdpitch(true)
                            }}
                        />
                        <span className="error">{rePsdTtips}</span>
                    </div>
                    {inviteCode === null && !typewinw ? (
                        <div className="item">
                            <input
                                type="type"
                                onChange={(event) => {
                                    setInviteCode(event.target.value)
                                }}
                                ref={inviteEle}
                                placeholder={t('header.sign.inviteCode')}
                                value={inviteCode}
                            />
                        </div>
                    ) : (
                        <div className="item">
                            <input type="type" disabled="disabled" value={inviteCode} ref={inviteEle} />
                        </div>
                    )}
                    {isSecure && (
                        <div className="enregist-con-send">
                            <div>{t('header.sign.sendtitle')}</div>
                            <div>{t('header.sign.sendtitle2')}</div>
                        </div>
                    )}
                    <div className="item">
                        <div className={`agree ${isSecure && 'secureagress'}`}>
                            <input type="checkbox" ref={protocolEle} onChange={protocolVerify} />
                            <span>{t('header.sign.agree')}</span>
                            <a href={isSecure ? '/secure/entermsof' : '/termsof'} target="_blank">
                                {t('footer.contact.user')}
                            </a>
                            <a href={isSecure ? '/secure/enprivacy' : '/privacy'} target="_blank">
                                {t('header.sign.privacy')}
                            </a>
                            <a href={isSecure ? '/secure/enlaw' : '/law'} target="_blank">
                                {t('footer.contact.law')}
                            </a>
                        </div>
                        <span className="error">{protocolTips}</span>
                    </div>
                </div>
            </form>
            <a className={`submit ${isSecure && 'securebtn'} ${isQuollet && 'quolletbtn'}`} onClick={sureSubmit}>
                {t('header.sign.signup')}
            </a>
            <div
                className="other-func"
                onClick={() => {
                    changeType(accountType)
                }}
            >
                {accountType === 'email' ? t('header.sign.phone') : t('header.sign.email')}
                {/* <a onClick={goToSignin}>{t('header.sign.hasAccout')}?<span>{t('header.sign.signin')}</span></a> */}
            </div>
            <div id="signupriddler" />
            {/* <div className='submit-titile'>{t('header.sign.Coco')}</div> */}
            {/* {accountType === 'phone' && <Sense ref={senseEleSms} onSuccess={senseSuccessSms} />}
        {accountType === 'email' && <Sense ref={senseEleEmail} onSuccess={senseSuccessEmail} />} */}
        </div>
    )
}
