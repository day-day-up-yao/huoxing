import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import Toast from '../../../components/Toast'
import { initYpRiddler } from '../../../public/js/index'
import './index.scss'
import SuccInfo from '../../../components/SuccessInfo'
export default ({ userinfo, setIsopen1, objs, basename, secure, otherpage, sucneedinfo }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const paswref = useRef()
    const gacoderef = useRef()
    const othercode = useRef()
    const lastcode = useRef()
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [codeorderid, setCodeorderid] = useState()
    // 资产托管验证的request_id
    const [draworderid, setDraworderid] = useState()
    // 二次验证需要的orderid
    const [orderid, setOrderid] = useState()
    // 是否显示资产托管验证
    const [isopen2, setIsopen] = useState(false)

    const [isother, setIsother] = useState(false)
    // let bindGa = userinfo.bindGA
    // let bindEmail = userinfo.registerType === 1 ? userinfo.email : false
    // let bindMobile = userinfo.registerType === 2 ? userinfo.mobile : false
    // let userBindType = userinfo.registerType === 1 ? [bindGa, bindEmail] : [bindGa, bindMobile]
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
    const handleTosend = useCallback(() => {
        initYpRiddler('otherriddler', getOthercode)
    })
    // 获取手机或邮箱验证码
    const getOthercode = useCallback((validInfo) => {
        if (userinfo.registerType === 1) {
            dispatch.public.getEmailcode({
                type: 14,
                yp_authenticate: validInfo.authenticate,
                yp_token: validInfo.token
            }).then((res) => {
                if (res.code !== 0) {
                    Toast.info(res.msg)
                } else {
                    setOrderid(res.data.orderId)
                    setHaveSend(true)
                }
            })
        } else {
            dispatch.public.sendSmscode({
                type: 14,
                yp_authenticate: validInfo.authenticate,
                yp_token: validInfo.token
            }).then((res) => {
                if (res.code !== 0) {
                    Toast.info(res.msg)
                } else {
                    setOrderid(res.data.orderId)
                    setHaveSend(true)
                }
            })
        }
    })
    const handleCodesure = useCallback(() => {
        if (paswref.current.value === '') {
            Toast.info(t('property.pupaswd'))
            return
        }
        if (userinfo.bindGA) {
            fristDrawal(gacoderef.current.value)
        } else {
            fristDrawal(othercode.current.value)
        }
    })
    const fristDrawal = useCallback((value) => {
        dispatch.public.withDrawal({
            account_id: userinfo.defaultAccountId,
            order_id: orderid,
            trade_password: md5(paswref.current.value),
            auth_type: userinfo.bindGA ? 3 : userinfo.registerType === 1 ? 2 : 1,
            verify_code: value,
            ...objs
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setHaveSend(true)
                setIsopen(true)
                setCodeorderid(res.data.codeOrderId)
                setDraworderid(res.data.requestId)
            }
        })
    })
    const handleSendcode = useCallback(() => {
        dispatch.public.withDrawalcode({
            request_id: draworderid
        }).then((res) => {
            setHaveSend(true)
            setCodeorderid(res.data.codeOrderId)
        })
    })
    const handleEndsure = useCallback(() => {
        dispatch.public.withDrawalverify({
            account_id: userinfo.defaultAccountId,
            token_id: basename,
            client_order_id: new Date().getTime(),
            code_order_id: codeorderid,
            verify_code: lastcode.current.value,
            request_id: draworderid
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.success) {
                    if (otherpage) {
                        setIsother(true)
                        return
                    }
                    if (secure) {
                        window.location.href = `/secure/enproperty/${basename}?detail=1`
                    } else {
                        // setIsother(true)
                        window.location.href = `/property/${basename}?detail=1`
                    }
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    return <div className="verify">
        <div className="verify-info" style={{ display: isopen2 ? 'none' : '' }}>
            <h3>{t('property.tbrz')}</h3>
            <div className="pasdcode">
                <input type="password" placeholder={t('property.pupaswd')} ref={paswref}/>
            </div>
            {userinfo.bindGA ? (
                <div className="pasdcode">
                    <input type="text" placeholder={t('header.sign.placesgoogle')} ref={gacoderef}/>
                </div>
            ) : (
                <div className="othercode">
                    <input type="text" ref={othercode} placeholder={userinfo.registerType === 1 ? t('header.sign.emailcode') : t('header.sign.phonecode')}/>
                    <div className="send" onClick={handleTosend}>{sendTxt}</div>
                </div>
            )}
            <div id="otherriddler" />
            <div className="verify-btn">
                <span onClick={() => { setIsopen1(false) }}>{t('productdetail.qx')}</span>
                <span onClick={handleCodesure}>{t('header.sign.sures')}</span>
            </div>
        </div>
        <div className="verify-info" style={{ display: isopen2 ? '' : 'none' }}>
            <h3>{t('property.moneyaq')}</h3>
            <div className="othertype">
                <span>{userinfo.registerType === 1 ? `mobile：${userinfo.mobile}` : `email：${userinfo.email}`}</span>
            </div>
            <div className="othercode">
                <input type="text" ref={lastcode} placeholder={t('header.sign.enterVerify')}/>
                <div className="send" onClick={handleSendcode}>{sendTxt}</div>
            </div>
            <div className="verify-btn">
                <span onClick={() => { setIsopen1(false) }}>{t('productdetail.qx')}</span>
                <span onClick={handleEndsure}>{t('header.sign.sures')}</span>
            </div>
        </div>
        {isother && <SuccInfo tbinfo={sucneedinfo}/>}
    </div>
}
