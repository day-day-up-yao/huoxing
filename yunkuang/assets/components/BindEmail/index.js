// 绑定手机

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { isMobile, isQuattroWallet, queryParam, initYpRiddler } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
// import Sense from '../Sense'
import Toast from '../../components/Toast'
import Selector from '../Public/Selectcode'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const codeEmail = useRef()
    const codeMobile = useRef()
    const [haveSend, setHaveSend] = useState(false)
    const [haveSends, setHaveSends] = useState(false)
    const [mobil, setmobil] = useState()
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [sendTxts, setSendTxts] = useState(t('header.sign.sendVerifyCode'))
    const [eorderid, setEorderid] = useState()
    const [morderid, setMorderid] = useState()
    const [phoneinfo, setPhoneinfo] = useState({
        mobile: '',
        contiycode: ''
    })
    useEffect(() => {
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.code === 0) {
                setmobil(res.data.email)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
    }, [])

    // 获取手机验证码
    const handleEmail = useCallback(() => {
        if (phoneinfo.mobile !== '') {
            initYpRiddler('mobileinfo', getMobilecode)
        }
    })
    const getMobilecode = useCallback((validInfo) => {
        dispatch.public.sendSmsVerifyCode({
            type: 5,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token,
            mobile: phoneinfo.mobile,
            national_code: phoneinfo.contiycode
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setHaveSend(true)
                setEorderid(res.data.orderId)
            }
        })
    }, [phoneinfo])

    // 获取邮箱验证码
    const handlemobile = useCallback(() => {
        initYpRiddler('emailinfo', getEmailcode)
    }, [])

    const getEmailcode = useCallback((validInfo) => {
        dispatch.public.getEmailcode({
            type: 5,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            setHaveSends(true)
            setMorderid(res.data.orderId)
        })
    })
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
    const handleSure = useCallback(() => {
        if (phoneinfo.mobile === '' && codeMobile.current.value) return
        dispatch.public.bindMobile({
            national_code: phoneinfo.contiycode,
            mobile: phoneinfo.mobile,
            mobile_order_id: eorderid,
            mobile_verify_code: codeEmail.current.value,
            order_id: morderid,
            verify_code: codeMobile.current.value
        }).then((res) => {
            if (res.code !== 0) {
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
    }, [phoneinfo, eorderid, morderid])
    const mobileInfo = useCallback((obj) => {
        setPhoneinfo(obj)
        // console.log(obj)
    })
    return <div>
        {!isMobile() ? '' : <Header title={t('usercenter.bindphone')}/>}
        <div className="bindmobile">
            <h3>{t('usercenter.bindphone')}</h3>
            <Selector
                // notBox
                getThisinfo = {mobileInfo}
            />
            <div className="bindm-con">
                <input type="text" placeholder={t('header.sign.phonecode')} ref={codeEmail}/>
                <span onClick={handleEmail} style={{ display: haveSend === false ? 'inline' : 'none' }}>{sendTxt}</span>
                <span style={{ display: haveSend === true ? 'inline' : 'none' }}>{sendTxt}</span>
            </div>
            <div id="mobileinfo"/>
            <div className="bindm-conm">
                <p>{t('header.sign.email')}</p>
                <p>{mobil}</p>
            </div>
            <div className="bindm-con">
                <input type="text" placeholder={t('header.sign.emailcode')} ref={codeMobile}/>
                <span onClick={handlemobile} style={{ display: haveSends === false ? 'inline' : 'none' }}>{sendTxts}</span>
                <span style={{ display: haveSends === true ? 'inline' : 'none' }}>{sendTxts}</span>
            </div>
            <div id="emailinfo"/>
            <button onClick={handleSure}>{t('header.sign.sure')}</button>
            {/* { <Sense ref={senseEleSms} onSuccess={senseSuccessSms} />} */}
        </div>
    </div>
}
