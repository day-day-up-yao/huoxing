import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Toast from '../Toast'
import { isMobile, isQuattroWallet, initYpRiddler, isSecure1475 } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [googimg, setGoogimg] = useState()
    const [googkey, setGoogkey] = useState()
    const [electnum, setElectnum] = useState()
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const googlecode = useRef()
    const emailcode = useRef()
    const [orderid, setOrderid] = useState()
    const [flage, setFlage] = useState(true)
    useEffect(() => {
        dispatch.public.bindGa({}).then((res) => {
            setGoogimg(res.data.qrcode)
            setGoogkey(res.data.secretKey)
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.data.email !== '') {
                setElectnum(res.data.email)
                setFlage(true)
            } else {
                setElectnum(res.data.mobile)
                setFlage(false)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
    }, [])
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
    const handletobinge = useCallback(() => {
        if (flage === true) {
            initYpRiddler('bindgariddler', getPhonecode)
        } else {
            initYpRiddler('bindgariddler', getEmailcode)
        }
    })
    const getPhonecode = useCallback((validInfo) => {
        dispatch.public.getEmailcode({
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token,
            type: 7
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setHaveSend(true)
                setOrderid(res.data.orderId)
            }
        })
    })

    const getEmailcode = useCallback((validInfo) => {
        dispatch.public.sendSmscode({
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token,
            type: 7
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setHaveSend(true)
                setOrderid(res.data.orderId)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
    })

    const handletogoogle = useCallback(() => {
        if (googlecode.current.value && emailcode.current.value) {
            dispatch.public.bindGoogle({
                ga_code: googlecode.current.value,
                verify_code: emailcode.current.value,
                order_id: orderid,
                ga_secret_key: googkey
            }).then((res) => {
                if (res.code !== 0) {
                    Toast.info(res.msg)
                } else {
                    if (isSecure1475()) {
                        window.location.href = '/secure/enusercenter'
                    }
                    if (isQuattroWallet()) {
                        window.location.href = '/Jpindex'
                    } else {
                        window.location.href = '/usercenter'
                    }
                }
            }).catch(function (err) {
                console.log(err)
                Toast.info(t('public.fail'))
            })
        }
    })
    return <div>
        {!isMobile() ? '' : <Header title={t('bindgoogle.googlebind')}/>}
        <div className="bindgoogle">
            <h2>{t('bindgoogle.bindgoogle')}</h2>
            <div className="google_title">
                <p>{t('bindgoogle.titleone')}</p>
                <p>
                    <span>{t('bindgoogle.titletwo')}</span><br/>
                    <span>
                        <img src={'data:image/png;base64,' + googimg} alt=""/>
                    </span><br/>
                    <span>{googkey}</span>
                </p>
                <p>{t('bindgoogle.titlethree')}</p>
                <p>{t('bindgoogle.titlefour')}</p>
            </div>
            <div className="google_startbind">
                <div className="google_startbind_t">
                    <p>{flage === true ? t('header.sign.email') : t('header.sign.phone')}</p>
                    <p>{electnum}</p>
                </div>
                <div className="google_startbind_em">
                    <input type="text" placeholder={t('header.sign.enterVerify')} ref={emailcode}/>
                    <span onClick={handletobinge} style={{ display: haveSend === false ? 'inline' : 'none' }}>{sendTxt}</span>
                    <span style={{ display: haveSend === true ? 'inline' : 'none' }}>{sendTxt}</span>
                </div>
                <div id="bindgariddler" />
                <div className="google_startbind_em">
                    <input type="text" placeholder={t('bindgoogle.bindgoogle')} ref={googlecode}/>
                </div>
                <div className="google_startbind_fin" onClick={handletogoogle}>{t('bindgoogle.succ')}</div>
            </div>
            <div className="google_botton">
                <p>{t('bindgoogle.Tips')}</p>
                <p>{t('bindgoogle.tiptitle')}{googkey},{t('bindgoogle.tiptitles')}</p>
            </div>
        </div>
    </div>
}
