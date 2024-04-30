import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { isPsd, trim, isMobile, isQuattroWallet, queryParam, initYpRiddler } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
import Toast from '../../components/Toast'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const psdEle = useRef()
    const psdElesure = useRef()
    const verification = useRef()
    const [pswdtitl, setPswdtitl] = useState()
    const [valpswdtitl, setValpswdtitl] = useState()
    const [mobil, setmobil] = useState()
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [orderid, setOrderid] = useState()
    const [bindtrade, setBindtrade] = useState()
    const [registertype, setRegistertype] = useState()
    const newpaswd = useCallback((event) => {
        const val = event.target.value
        if (!isPsd(trim(val))) {
            setPswdtitl(t('header.sign.rightPsd'))
            return false
        } else {
            setPswdtitl('')
            return true
        }
    })
    const valnewpaswd = useCallback((event) => {
        const val = event.target.value
        if (val === psdEle.current.value) {
            setValpswdtitl('')
        } else {
            setValpswdtitl(t('header.sign.valpaswdtitle'))
        }
    })
    const sureSubmit = useCallback(() => {
        if (registertype === 1) {
            initYpRiddler('passwdriddler', getMobilecode)
        } else {
            initYpRiddler('passwdriddler', getEmailcodes)
        }
    })
    const getEmailcodes = useCallback((validInfo) => {
        dispatch.public.getEmailcode({
            type: bindtrade === true ? 16 : 15,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            setHaveSend(true)
            setOrderid(res.data.orderId)
        })
    })
    const getMobilecode = useCallback((validInfo) => {
        dispatch.public.sendSmscode({
            type: bindtrade === true ? 16 : 15,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            setHaveSend(true)
            setOrderid(res.data.orderId)
        })
    })
    useEffect(() => {
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.data.registerType === 1) {
                setmobil(res.data.mobile)
            } else {
                setmobil(res.data.email)
            }
            setBindtrade(res.data.bindTradePwd)
            setRegistertype(res.data.registerType)
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
    const handlesure = useCallback(() => {
        if (orderid && psdEle.current.value && psdElesure.current.value && verification.current.value) {
            dispatch.public.tradePwd({
                trade_pwd: md5(psdEle.current.value),
                trade_pwd2: md5(psdElesure.current.value),
                order_id: orderid,
                verify_code: verification.current.value,
                type: bindtrade === true ? '2' : '1'
            }).then((res) => {
                if (res.code === 0) {
                    if (isQuattroWallet()) {
                        window.location.href = '/Jpindex'
                    } else {
                        if (queryParam('digi') === null) {
                            window.location.href = '/property'
                        } else {
                            window.location.href = '/secure/enproperty'
                        }
                    }
                    Toast.info(t('public.updatapsw'))
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    })
    return <div>
        {!isMobile() ? '' : <Header title={t('public.settingpaswd')}/>}
        <div className="passwd">
            <h3>{t('usercenter.paswd')}</h3>
            <h4>{t('public.pasdtitle')}</h4>
            <div className="passwd-con">
                <div className="passwd-con-top">
                    <input type="password" placeholder={t('usercenter.paswd')} ref={psdEle} onChange={newpaswd}/><br/>
                    <span>{pswdtitl}</span>
                </div>
                <div className="passwd-con-top">
                    <input type="password" placeholder={t('header.sign.yespsw')} ref={psdElesure} onChange={valnewpaswd}/><br/>
                    <span>{valpswdtitl}</span>
                </div>
                <div className="passwd-con-second">
                    <p>{registertype === 1 ? t('public.moblie') : t('public.email')}</p>
                    <p>{mobil}</p>
                </div>
                <div className="passwd-con-last">
                    <input type="text" placeholder={t('header.sign.yzm')} ref={verification}/>
                    <span onClick={sureSubmit} style={{ display: haveSend === false ? 'inline' : 'none' }}>{sendTxt}</span>
                    <span style={{ display: haveSend === true ? 'inline' : 'none' }}>{sendTxt}</span>
                </div>
                <div id="passwdriddler"/>
                <button onClick={handlesure}>{t('header.sign.sure')}</button>
            </div>
        </div>
    </div>
}
