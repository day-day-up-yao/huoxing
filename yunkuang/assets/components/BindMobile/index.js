// 绑定邮箱
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { isEmail, trim, isQuattroWallet, queryParam, initYpRiddler } from '../../public/js/index'
// import Sense from '../Sense'
import './index.scss'
import Toast from '../../components/Toast'
export default () => {
    // const senseEleSms = useRef()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const Emailcode = useRef()
    const codeEmail = useRef()
    const codeMobile = useRef()
    const [emailtitl, setEmailtitl] = useState()
    const [haveSend, setHaveSend] = useState(false)
    const [haveSends, setHaveSends] = useState(false)
    const [mobil, setmobil] = useState()
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [sendTxts, setSendTxts] = useState(t('header.sign.sendVerifyCode'))
    const [eorderid, setEorderid] = useState()
    const [morderid, setMorderid] = useState()
    const newpaswd = useCallback((event) => {
        const val = event.target.value
        if (!isEmail(trim(val))) {
            setEmailtitl(t('public.qputemail'))
            return false
        } else {
            setEmailtitl('')
            return true
        }
    })
    useEffect(() => {
        dispatch.public.getUseinfo({}).then((res) => {
            console.log(2222)
            setmobil(res.data.mobile)
        })
    }, [])
    const getEmailcode = useCallback((validInfo) => {
        dispatch.public.sendEmailVerifyCode({
            type: 6,
            email: Emailcode.current.value,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setHaveSend(true)
                setEorderid(res.data.orderId)
            }
        })
    }, [])
    const handleEmail = useCallback(() => {
        if (isEmail(trim(Emailcode.current.value))) {
            if (Emailcode.current.value) {
                initYpRiddler('emailriddler', getEmailcode)
            }
            event.preventDefault()
        } else {
            setEmailtitl(t('public.qputemail'))
        }
    })
    const handlemobile = useCallback(() => {
        initYpRiddler('mobileriddler', getMobilecode)
    })
    const getMobilecode = useCallback((validInfo) => {
        dispatch.public.sendSmscode({
            type: 6,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            setHaveSends(true)
            setMorderid(res.data.orderId)
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
    })
    useEffect(() => {
        let timers = null
        if (haveSends) {
            let num = 60
            setSendTxts(`${num}s`)
            timers = setInterval(() => {
                if (num > 0) {
                    num--
                    setSendTxts(`${num}s`)
                } else {
                    setSendTxts(t('header.sign.sendVerifyCode'))
                    setHaveSends(false)
                    clearInterval(timers)
                }
            }, 1000)
        }
        return () => clearInterval(timers)
    }, [haveSends])
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
    const handleSure = useCallback(() => {
        dispatch.public.bindEmail({
            email: Emailcode.current.value,
            email_order_id: eorderid,
            email_verify_code: codeEmail.current.value,
            order_id: morderid,
            verify_code: codeMobile.current.value
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                if (isQuattroWallet()) {
                    window.location.href = '/Jpindex'
                } else {
                    if (queryParam('digi') === null) {
                        window.location.href = '/usercenter'
                    } else {
                        window.location.href = '/secure/enusercenter'
                    }
                }
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
    })
    return <div className="bindmobile">
        <h3>{t('usercenter.bindemail')}</h3>
        <div className="bindm-cons">
            <input type="text" placeholder={t('header.sign.email')} onChange={newpaswd} ref={Emailcode}/>
        </div>
        <div className="bindm-cont">{emailtitl}</div>
        <div className="bindm-con">
            <input type="text" placeholder={t('header.sign.emailcode')} ref={codeEmail}/>
            <span onClick={handleEmail} style={{ display: haveSend === false ? 'inline' : 'none' }}>{sendTxt}</span>
            <span style={{ display: haveSend === true ? 'inline' : 'none' }}>{sendTxt}</span>
        </div>
        <div id="emailriddler"/>
        <div className="bindm-con">
            <p>{t('header.sign.phone')}</p>
            <p>{mobil}</p>
        </div>
        <div className="bindm-con">
            <input type="text" placeholder={t('header.sign.phonecode')} ref={codeMobile}/>
            <span onClick={handlemobile} style={{ display: haveSends === false ? 'inline' : 'none' }}>{sendTxts}</span>
            <span style={{ display: haveSends === true ? 'inline' : 'none' }}>{sendTxts}</span>
        </div>
        <div id="mobileriddler"/>
        <button onClick={handleSure}>{t('header.sign.sures')}</button>
    </div>
}
