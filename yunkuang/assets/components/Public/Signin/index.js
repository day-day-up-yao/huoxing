import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import md5 from 'blueimp-md5'
import Cookies from 'js-cookie'
import ChangePad from '../../Public/ChangePsd'
import { queryParam, initYpRiddler } from '../../../public/js/index'
import Toast from '../../Toast'
import Select from '../../Public/Selectcode'
import { loginSuccess } from '../../SigninAndSignup/public'
import Succimg from '../../../public/imgs/new/noticeinfo.png'
import enlogo from '../../../public/imgs/newpage/ensignlogo.png'
// import signlogo from '../../../public/imgs/h5img/other/siginlogo.png'
import SignTop from '../SignTop'

import './index.scss'
export default (props) => {
    const { is1475login, iswebsite, isquattor } = props
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { publicinfos } = useSelector((state) => ({
        publicinfos: state.public.publicinfo
    }))
    const [select, setSelect] = useState(true)
    const [prompt, setPrompt] = useState('')
    const [validation, setValidation] = useState(false)
    const [requestid, setRequestid] = useState('')
    const [orderid, setOrderid] = useState('')
    const [seegoogle, setSeegoogle] = useState(false)
    const [pitch, setPitch] = useState(false)
    const [paspt, setPaspt] = useState(false)
    const [seting, setSeting] = useState(false)
    const [autype, setAutype] = useState('MOBILE')
    const [getmobileinfo, setGetmobileinfo] = useState({
        mobile: '',
        contiycode: ''
    })
    const [btnflag, setBtnflag] = useState(false)

    // 检测是否勾选协议
    const protocolEle = useRef()

    const goToRetrieve = useCallback(() => {
        if (!select) {
            dispatch.public.setLoginInfo({ type: 'retrieve', bool: true })
        } else {
            dispatch.public.setLoginInfo({ type: 'retrieveemail', bool: true })
        }
    }, [select])
    const emailEle = useRef()
    const quickCode = useRef()
    const googleRef = useRef()
    // 快捷登录发送验证码倒计时
    const [havequick, setHavequick] = useState(false)
    const [sendquick, setSendquick] = useState(t('header.sign.sendVerifyCode'))
    useEffect(() => {
        btnFlgFn()
    }, [])
    const btnFlgFn = useCallback(() => {
        if (select) {
            if (
                emailEle.current?.value &&
                emailEle.current.value !== '' &&
                psdEle.current?.value &&
                psdEle.current.value !== ''
            ) {
                setBtnflag(true)
            } else {
                setBtnflag(false)
            }
        } else {
            if (
                getmobileinfo.mobile &&
                getmobileinfo.mobile !== '' &&
                quickCode.current?.value &&
                quickCode.current.value !== ''
            ) {
                setBtnflag(true)
            } else {
                setBtnflag(false)
            }
        }
    }, [getmobileinfo, select])
    useEffect(() => {
        let timer = null
        if (havequick) {
            let num = 60
            setSendquick(`${num}s`)
            timer = setInterval(() => {
                if (num > 0) {
                    num--
                    setSendquick(`${num}s`)
                } else {
                    setSendquick(t('header.sign.sendVerifyCode'))
                    setHavequick(false)
                    clearInterval(timer)
                }
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [havequick])
    // 快捷登录获取手机验证码
    const getQuickphone = useCallback(
        (validInfo) => {
            dispatch.public
                .sendSmsVerifyCode({
                    mobile: getmobileinfo.mobile,
                    national_code: getmobileinfo.contiycode,
                    type: 22,
                    yp_authenticate: validInfo.authenticate,
                    yp_token: validInfo.token
                })
                .then((res) => {
                    if (res.code === 0) {
                        setHavequick(true)
                        setOrderid(res.data.orderId)
                    } else {
                        Toast.info(res.msg)
                    }
                })
        },
        [getmobileinfo]
    )
    const handleTogetcode = useCallback(() => {
        if (havequick) return
        if (getmobileinfo.mobile !== '') {
            initYpRiddler('quickriddler', getQuickphone)
        }
    }, [getmobileinfo, havequick])

    const [pasdflag, setPasdflag] = useState(false)

    // 快捷登录
    const handleToquick = useCallback(() => {
        dispatch.public
            .quickAuthorize({
                email: '',
                login_type: 'mobile',
                mobile: getmobileinfo.mobile,
                national_code: getmobileinfo.contiycode,
                order_id: orderid,
                verify_code: quickCode.current.value
            })
            .then((res) => {
                if (iswebsite && res.code === 31038) {
                    setSeting(true)
                    return
                }
                if (res.code === 0) {
                    if (res.data.needCheckPassword) {
                        setPasdflag(res.data.needCheckPassword)
                        setRequestid(res.data.requestId)
                        // console.log(1111)
                    } else {
                        handleLogininfo(res.data)
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
    })

    const pasdRef = useRef()

    // 密码验证登录
    const quickLogin = useCallback(() => {
        if (pasdRef.current.value) {
            dispatch.public
                .quickAdvance({
                    password: pasdRef.current.value,
                    request_id: requestid
                })
                .then((res) => {
                    if (res.code === 0) {
                        handleLogininfo(res.data)
                    } else {
                        Toast.info(res.msg)
                    }
                })
        }
    }, [requestid])

    // 密码验证
    const psdEle = useRef()
    // const psdVerify = useCallback((event) => {
    //     const val = event.target.value
    //     if (!isPsd(val)) {
    //         setPsdTips(t('header.sign.rightPsd'))
    //         return false
    //     } else {
    //         setPsdTips('')
    //         return true
    //     }
    // }, [])
    // 确认登录
    const sureSubmit = useCallback(() => {
        if (!protocolEle.current.checked) {
            Toast.info(t('header.sign.agreeProcotol'))
            return
        }
        if (select) {
            if (psdEle.current.value && emailEle.current.value) {
                initYpRiddler('loginriddler', senseSuccessEmail)
            }
        } else {
            if (quickCode.current.value && getmobileinfo.mobile !== '') {
                handleToquick()
            }
        }
        // event.preventDefault()
    })

    const senseSuccessEmail = useCallback((validInfo) => {
        dispatch.public
            .newUserLogin({
                password: md5(psdEle.current.value),
                username: emailEle.current.value,
                yp_authenticate: validInfo.authenticate,
                yp_token: validInfo.token
            })
            .then((res) => {
                if (res.code === 31038) {
                    setSeting(true)
                    return
                }
                if (res.code !== 0) {
                    Toast.error(res.msg)
                } else {
                    setRequestid(res.data.requestId)
                    // setUsemobile(res.data.email)
                    setTimeout(() => {
                        document.getElementById('googlefocus').focus()
                    }, 200)
                    if (res.data.authType === null) {
                        handleLogininfo(res.data)
                        return
                    }
                    if (res.data.authType === 'GA') {
                        setSeegoogle(true)
                    } else {
                        setAutype(res.data.authType)
                        setValidation(true)
                    }
                }
            })
    })
    // 发送验证码倒计时
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    // 密码登录获取手机验证码
    const getMobilecode = useCallback((validInfo) => {
        dispatch.public
            .sendphoneCode({
                request_id: requestid,
                yp_authenticate: validInfo.authenticate,
                yp_token: validInfo.token
            })
            .then(function (res) {
                if (res.code === 0) {
                    setOrderid(res.data.orderId)
                    setHaveSend(true)
                } else {
                    Toast.info(res.msg)
                }
            })
            .catch(function (err) {
                Toast.error(t('header.sign.codeerr'))
                throw Error(err)
            })
    })
    // 获取邮箱验证码
    const getEmailcode = useCallback((validInfo) => {
        dispatch.public
            .sendemailCode({
                request_id: requestid,
                yp_authenticate: validInfo.authenticate,
                yp_token: validInfo.token
            })
            .then(function (res) {
                if (res.code === 0) {
                    setOrderid(res.data.orderId)
                    setHaveSend(true)
                } else {
                    Toast.info(res.msg)
                }
            })
            .catch(function (err) {
                Toast.error(t('header.sign.codeerr'))
                throw Error(err)
            })
    })
    const handleCode = () => {
        if (requestid) {
            if (autype === 'MOBILE') {
                initYpRiddler('secondcoderiddler', getMobilecode)
            } else {
                initYpRiddler('secondcoderiddler', getEmailcode)
            }
        }
    }
    useEffect(() => {
        let timer = null
        if (haveSend) {
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

    // 最终登录
    const lastLogin = useCallback((e, codetype) => {
        dispatch.public
            .secondvalCode({
                verify_code: e,
                auth_type: codetype,
                request_id: requestid,
                order_id: orderid
            })
            .then(function (res) {
                if (res.code === 0) {
                    handleLogininfo(res.data)
                } else {
                    Toast.error(res.msg)
                }
            })
            .catch(function (err) {
                Toast.error(t('header.sign.codeerr'))
                throw Error(err)
            })
    })

    // 邮箱或手机二次验证
    const valNumber = useCallback(
        (event) => {
            if (event.target.value.length === 6) {
                if (autype === 'MOBILE') {
                    lastLogin(event.target.value, 1)
                } else {
                    lastLogin(event.target.value, 2)
                }
            }
        },
        [requestid, orderid]
    )

    // 谷歌进行二次验证
    const valNumberga = useCallback(
        (event) => {
            if (event.target.value.length === 6) {
                lastLogin(event.target.value, 3)
            }
        },
        [requestid, orderid]
    )

    const handleGooglesure = useCallback(() => {
        if (googleRef.current.value) {
            lastLogin(googleRef.current.value, 3)
        } else {
            Toast.info(t('header.sign.enterVerify'))
        }
    }, [googleRef, requestid, orderid])

    const handleLogininfo = useCallback((userinfo) => {
        Cookies.set('c_token', userinfo.defaultAccountId)
        Cookies.set('user_id', userinfo.userId)
        dispatch.public
            .loginInfo({
                uid: userinfo.userId
            })
            .then(() => {
                Toast.info(t('header.sign.signsucc'))
                if (queryParam('redirect')) {
                    window.location.href = decodeURIComponent(queryParam('redirect'))
                } else {
                    if (is1475login) {
                        window.location.href = '/secure/enhashrate'
                    }
                    if (iswebsite) {
                        loginSuccess()
                    }
                    if (isquattor) {
                        window.location.href = '/jpindex'
                    }
                }
            })
    })
    return (
        <div className={`Login ${is1475login && 'securesize'} ${isquattor && 'quattorsize'}`}>
            <SignTop title="注册" link="/user/signup" />
            {iswebsite && (
                <div>
                    {publicinfos.applyBindMail === 1 && i18n.language.toLowerCase().substring(0, 2) === 'zh' && (
                        <div
                            className="login-to-bindemail"
                            onClick={() => {
                                window.location.href = publicinfos.mailDocUrl
                            }}
                        >
                            {t('public.tobindemail')} >
                        </div>
                    )}
                    {/* <h3>{t('header.sign.sigtitle')}</h3> */}
                    <div className="signlogo">
                        {/* <img src={signlogo} alt=""/> */}
                        <h3>{t('header.sign.signin')}</h3>
                    </div>
                    <div className="Login-select">
                        <div
                            className="Login-select-item"
                            onClick={() => {
                                setSelect(true)
                                setPrompt('')
                            }}
                        >
                            {t('header.sign.pasdlogin')}
                            {select && <div className="Login-select-item-line" />}
                        </div>
                        <div
                            className="Login-select-item"
                            onClick={() => {
                                setSelect(false)
                                setPrompt('')
                            }}
                        >
                            {t('header.sign.quicklogin')}
                            {!select && <div className="Login-select-item-line" />}
                        </div>
                        {/* <p>{select ? t('header.sign.pasdlogin') : t('header.sign.quicklogin')}</p> */}
                    </div>
                </div>
            )}
            {is1475login && (
                <div className="enlogin-con-logo">
                    <img src={enlogo} alt="" />
                </div>
            )}
            <div className="Login-user">
                {!select && (
                    <Select
                        getThisinfo={(obj) => {
                            setGetmobileinfo(obj)
                        }}
                        onGetinput={() => {
                            btnFlgFn()
                        }}
                    />
                )}
                {select && (
                    <input
                        type="email"
                        name="email"
                        className={`${pitch ? 'active' : ''}`}
                        ref={emailEle}
                        placeholder={isquattor ? 'MailAddress' : t('header.sign.pleasephoneemail')}
                        autoComplete="off"
                        onFocus={() => {
                            setPitch(true)
                        }}
                        onBlur={() => {
                            setPitch(false)
                            btnFlgFn()
                        }}
                    />
                )}
                <span className="error">{prompt}</span>
            </div>
            {select ? (
                <div className="Login-user">
                    <input
                        type="password"
                        ref={psdEle}
                        className={`${paspt ? 'active' : ''}`}
                        placeholder={isquattor ? 'Password' : t('header.sign.enterPsd')}
                        autoComplete="new-password"
                        onBlur={() => {
                            setPaspt(false)
                            btnFlgFn()
                        }}
                        onFocus={() => {
                            setPaspt(true)
                        }}
                    />
                    {/* <span className="error">{psdTtips}</span> */}
                </div>
            ) : (
                <div className="login-mobilecode">
                    <div className={`login-quick ${pitch && 'active'}`}>
                        <input
                            type="text"
                            ref={quickCode}
                            maxLength="6"
                            // className={`${pitch ? 'active' : ''}`}
                            placeholder={t('header.sign.enterVerify')}
                            onFocus={() => {
                                setPitch(true)
                            }}
                            onBlur={() => {
                                setPitch(false)
                                btnFlgFn()
                            }}
                        />
                        <div className="login-quick-btn">
                            <span
                                onClick={() => {
                                    handleTogetcode()
                                }}
                            >
                                {sendquick}
                            </span>
                        </div>
                    </div>
                    <div id="quickriddler" />
                </div>
            )}
            {is1475login && (
                <div className={`login-con-forget ${is1475login && 'other'}`}>
                    <a href="/secure/enback">{t('header.sign.forget')}</a>
                </div>
            )}
            {isquattor && (
                <div className="jplogin-getpasd">
                    <a href="/jpregister">Sign UP for Member</a>
                    <a href="/jpgetbackpassd">Forget Password</a>
                </div>
            )}
            {i18n.language.toLowerCase().substring(0, 2) === 'en' ? (
                <div className={`agree ${is1475login && 'secureagress'}`}>
                    <input type="checkbox" ref={protocolEle} />
                    <span>{t('header.sign.agree')}</span>
                    <a
                        style={{ marginLeft: '8px' }}
                        href={is1475login ? '/secure/entermsof' : '/termsof'}
                        target="_blank"
                    >
                        {t('header.sign.user')}，
                    </a>
                    <a href={is1475login ? '/secure/enprivacy' : '/privacy'} target="_blank">
                        {t('header.sign.privacy')}，
                    </a>
                    <a href={is1475login ? '/secure/enlaw' : '/law'} target="_blank">
                        {t('header.sign.law')}
                    </a>
                </div>
            ) : (
                <div className={`agree ${is1475login && 'secureagress'}`}>
                    <input type="checkbox" ref={protocolEle} />
                    <span>{t('header.sign.agree')}</span>
                    <a href={is1475login ? '/secure/entermsof' : '/termsof'} target="_blank">
                        {t('header.sign.user')}
                    </a>
                    <a href={is1475login ? '/secure/enprivacy' : '/privacy'} target="_blank">
                        {t('header.sign.privacy')}
                    </a>
                    <a href={is1475login ? '/secure/enlaw' : '/law'} target="_blank">
                        {t('header.sign.law')}
                    </a>
                </div>
            )}
            {/* <div onClick={goToRetrieve} className="Login-findpswd">
            <a href=""></a>
            <a></a>
        </div> */}
            <div className="Login-btn">
                <button
                    className={`${is1475login && 'securebtn'} ${isquattor && 'quattorbtn'} ${btnflag && 'btn-border'}`}
                    onClick={sureSubmit}
                >
                    {isquattor ? 'Sign In' : t('header.sign.signin')}
                </button>
            </div>
            <div className="Login-findpswd">
                {/* <div className="login-way-select" onClick={() => {
                setSelect(!select)
                setPrompt('')
            }}>
                {!select ? t('header.sign.pasdlogin') : t('header.sign.quicklogin')}
            </div> */}
                {is1475login && (
                    <div className="Login-tosignup">
                        {t('header.sign.Noaccount')}
                        <a href="/secure/enregister" className="Login-tosignup">
                            {t('header.sign.tosign')}
                        </a>
                    </div>
                )}
                {/* <div>{t('header.sign.Noaccount')}<a onClick={goToSignup} className="Login-tosignup">{t('header.sign.tosign')}</a></div> */}
                {iswebsite && <div onClick={goToRetrieve}>{t('header.sign.forget')}</div>}
            </div>
            <div className="validation" style={{ display: validation === true ? (requestid ? '' : 'none') : 'none' }}>
                <div className="to-validation">
                    <h3>{t('header.sign.enterVerify')}</h3>
                    <input type="text" onChange={valNumber} />
                    <button onClick={handleCode} style={{ display: haveSend === false ? 'inline' : 'none' }}>
                        {sendTxt}
                    </button>
                    <button style={{ display: haveSend === true ? 'inline' : 'none' }}>{sendTxt}</button>
                    <div id="secondcoderiddler" />
                </div>
            </div>
            <div className="validation" style={{ display: seegoogle === true ? (requestid ? '' : 'none') : 'none' }}>
                <div className="to-validation">
                    <h3>{t('header.sign.safety')}</h3>
                    <h4>{t('header.sign.safetytitle')}</h4>
                    <input
                        type="text"
                        onChange={valNumberga}
                        ref={googleRef}
                        placeholder={t('header.sign.placesgoogle')}
                        className="valinput"
                        id="googlefocus"
                    />
                    <br />
                    <div
                        className="valbtn"
                        onClick={() => {
                            handleGooglesure()
                        }}
                    >
                        {t('header.sign.sures')}
                    </div>
                </div>
            </div>
            {pasdflag && (
                <div className="validation">
                    <div className="to-validation">
                        <h3>{t('header.sign.loginpasd')}</h3>
                        <h4>{t('header.sign.pasdpopup')}</h4>
                        <input
                            type="password"
                            ref={pasdRef}
                            placeholder={t('header.sign.enterPsd')}
                            className="valinput"
                        />
                        <br />
                        <div
                            className="valbtn"
                            onClick={() => {
                                quickLogin()
                            }}
                        >
                            {t('header.sign.sures')}
                        </div>
                    </div>
                </div>
            )}
            {/* {select === true && <Sense ref={senseEleSms} onSuccess={senseSuccessSms}/>} */}
            {/* {select === false && <Sense ref={senseEleEmail} onSuccess={senseSuccessEmail} idname={'loginriddler'} />} */}
            {iswebsite && seting && (
                <ChangePad
                    Topimg={Succimg}
                    succtitle={t('public.needreset')}
                    infotext={t('public.resetinfo')}
                    btntext={t('public.resetpasd')}
                    linkbtn
                    istochange
                />
            )}
            <div id="loginriddler" />
        </div>
    )
}
