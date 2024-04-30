// 手机找回密码
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { isPsd, trim, initYpRiddler } from '../../public/js/index'
import './index.scss'
// import Sense from '../Sense'
import Toast from '../../components/Toast'
import SuccessInfo from '../../components/Public/ChangePsd'
import Succimg from '../../public/imgs/new/changesucc.png'
import Select from '../Public/Selectcode'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [pswdtitl, setPswdtitl] = useState()
    const [valpswdtitl, setValpswdtitl] = useState()
    const [orderid, setOrderid] = useState()
    const [requestid, setRequestid] = useState()
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [haveSends, setHaveSends] = useState(false)
    const [sendTxts, setSendTxts] = useState(t('header.sign.sendVerifyCode'))
    const [ipntitle, setIpntitle] = useState(1)
    const [authtype, setAuthtype] = useState()
    const [needFA, setNeedFa] = useState(false)
    const GAnumbers = useRef()
    const GAnumberss = useRef()
    const GAnumber = useRef()
    const GAnumberes = useRef()
    const psdEle = useRef()
    const psdElesure = useRef()
    const [changesucc, setChangesucc] = useState(false)
    const describeinfo = [t('public.descone'), t('public.desctwo')]
    const [getphoneinfo, setGetphoneinfo] = useState({
        mobile: '',
        contiycode: ''
    })
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
        if (getphoneinfo.mobile) {
            initYpRiddler('retrievephoneriddler', senseSuccessSms)
            // senseEleSms.current.sense()
        }
        // event.preventDefault()
    }, [getphoneinfo])
    // const senseEleSms = useRef()
    const senseSuccessSms = useCallback((validInfo) => {
        dispatch.public.sendSmsVerifyCode({
            mobile: getphoneinfo.mobile,
            national_code: getphoneinfo.contiycode,
            type: 3,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then(function (res) {
            if (res.code === 0) {
                setOrderid(res.data.orderId)
                setHaveSend(true)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [getphoneinfo])
    // 验证码验证
    const valnumber = useCallback((event) => {
        if (event.target.value.length === 6) {
            dispatch.public.findPwdmobile({
                order_id: orderid,
                verify_code: event.target.value,
                mobile: getphoneinfo.mobile,
                national_code: getphoneinfo.contiycode
            }).catch(function (err) {
                Toast.error(t('header.sign.codeerr'))
                throw Error(err)
            }).then(function (res) {
                if (res.code !== 0) {
                    Toast.info(res.msg)
                    setIpntitle(res.msg)
                } else {
                    setNeedFa(res.data.need2FA)
                    setAuthtype(res.data.authType)
                    setIpntitle(1)
                    setRequestid(res.data.requestId)
                }
            })
        }
    }, [getphoneinfo, orderid])
    const handleToGA = useCallback(() => {
        dispatch.public.findpwdCheck2({
            request_id: requestid,
            order_id: '',
            verify_code: GAnumbers.current.value
        }).then((res) => {
            if (res.data.success === true) {
                setNeedFa(false)
                setAuthtype()
            }
        })
    }, [requestid])
    const handleToGAes = useCallback(() => {
        dispatch.public.findpwdCheck2({
            request_id: requestid,
            order_id: '',
            verify_code: GAnumberes.current.value
        }).then((res) => {
            if (res.data.success === true) {
                setNeedFa(false)
                setAuthtype()
            }
        })
    }, [requestid])
    // 确认找回密码
    const handlesure = useCallback(() => {
        if (requestid && psdEle.current.value && psdElesure.current.value && (psdEle.current.value === psdElesure.current.value)) {
            if (isPsd(psdEle.current.value)) {
                dispatch.public.findpswdSure({
                    request_id: requestid,
                    password1: md5(psdEle.current.value),
                    password2: md5(psdElesure.current.value),
                    mobile: getphoneinfo.mobile,
                    national_code: getphoneinfo.contiycode
                }).then(function (res) {
                    if (res.data.success === true) {
                        Toast.info('修改成功')
                        setChangesucc(true)
                        // dispatch.public.setLoginInfo({ type: 'signin', bool: true })
                    } else {
                        Toast.info(res.msg)
                    }
                })
            }
        }
        if (ipntitle !== 1) {
            Toast.info(ipntitle)
        }
    }, [getphoneinfo, requestid])
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
    const handleEmailcode = useCallback(() => {
        dispatch.public.findPwd({
            request_id: requestid
        }).then(function (res) {
            setOrderid(res.data.orderId)
            setHaveSends(true)
        })
    }, [requestid])
    const handleMOBILEcode = useCallback(() => {
        dispatch.public.findPwd({
            request_id: requestid
        }).then(function (res) {
            setOrderid(res.data.orderId)
            setHaveSends(true)
        })
    }, [requestid])
    useEffect(() => {
        let timer = null
        if (haveSends) {
            let num = 60
            setSendTxts(`${num}s`)
            timer = setInterval(() => {
                if (num > 0) {
                    num--
                    setSendTxts(`${num}s`)
                } else {
                    setSendTxts(t('header.sign.sendVerifyCode'))
                    setHaveSends(false)
                    clearInterval(timer)
                }
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [haveSends])
    const handleToGAs = useCallback(() => {
        dispatch.public.findpwdCheck2({
            request_id: requestid,
            order_id: orderid,
            verify_code: GAnumber.current.value
        }).then((res) => {
            if (res.data.success === true) {
                setNeedFa(false)
                setAuthtype()
            }
        })
    }, [requestid, orderid])
    const handleToGAsss = useCallback(() => {
        dispatch.public.findpwdCheck2({
            request_id: requestid,
            order_id: orderid,
            verify_code: GAnumberss.current.value
        }).then((res) => {
            if (res.data.success === true) {
                setNeedFa(false)
                setAuthtype()
            }
        })
    }, [requestid, orderid])
    return <div className="Retrieve">
        <h3>{t('header.sign.suchpsw')}</h3>
        <div className="Retrieve-title">{t('header.sign.title')}</div>
        <Select
            getThisinfo = {(obj) => {
                setGetphoneinfo(obj)
            }}
        />
        <div className="Retrieve-val">
            <input type="text" autoComplete="off" placeholder={t('header.sign.enterVerify')} onChange={valnumber}/>
            <button onClick={sureSubmit} style={{ display: haveSend === false ? 'inline' : 'none' }}>{sendTxt}</button>
            <button style={{ display: haveSend === true ? 'inline' : 'none' }}>{sendTxt}</button>
        </div>
        <div id="retrievephoneriddler"/>
        <div className="Retrieve-new">
            <input type="password" ref={psdEle} autoComplete="new-password" placeholder={t('header.sign.newpsw')} onChange={newpaswd}/><br/>
            <span className="error">{pswdtitl}</span>
        </div>
        <div className="Retrieve-sure">
            <input type="password" ref={psdElesure} placeholder={t('header.sign.yespsw')} onChange={valnewpaswd}/><br/>
            <span className="error">{valpswdtitl}</span>
        </div>
        <button className="Retrieve-btn" onClick={handlesure}>{t('header.sign.sure')}</button>
        {/* { <Sense ref={senseEleSms} onSuccess={senseSuccessSms} />} */}
        <div className="Retrieve-validation" style={{ display: needFA === true ? '' : 'none' }}>
            <div className="Retrieve-validation-ga" style={{ display: authtype === 'GA' ? 'block' : 'none' }}>
                <h3>{t('header.sign.googlecode')}</h3>
                <input type="text" placeholder={t('header.sign.placesgoogle')} ref={GAnumbers}/>
                <div className="Retrieve-validation-btn">
                    <p></p>
                    <p onClick={ handleToGA }>{t('header.sign.sures')}</p>
                </div>
            </div>
            <div className="Retrieve-validation-ga" style={{ display: authtype === 'ID_CARD' ? 'block' : 'none' }}>
                <h3>{t('header.sign.yzmsg')}</h3>
                <input type="text" placeholder={t('header.sign.zjId')} ref={GAnumberes}/>
                <div className="Retrieve-validation-btn">
                    <p></p>
                    <p onClick={ handleToGAes }>{t('header.sign.sures')}</p>
                </div>
            </div>
            <div className="Retrieve-validation-code" style={{ display: authtype === 'EMAIL' ? 'block' : 'none' }}>
                <h3>{t('header.sign.yzemail')}</h3>
                <div>
                    <input type="text" placeholder={t('header.sign.enterVerify')} ref={GAnumber}/>
                    <span onClick={handleEmailcode}>{sendTxts}</span>
                </div>
                <div className="Retrieve-validation-btn">
                    <p></p>
                    <p onClick={ handleToGAs }>{t('header.sign.sures')}</p>
                </div>
            </div>
            <div className="Retrieve-validation-code" style={{ display: authtype === 'MOBILE' ? 'block' : 'none' }}>
                <h3>{t('header.sign.yzphone')}</h3>
                <div>
                    <input type="text" placeholder={t('header.sign.enterVerify')} ref={GAnumberss}/>
                    <span onClick={handleMOBILEcode}>{sendTxts}</span>
                </div>
                <div className="Retrieve-validation-btn">
                    <p></p>
                    <p onClick={ handleToGAsss }>{t('header.sign.sures')}</p>
                </div>
            </div>
        </div>
        <div className="get-password" onClick={() => {
            dispatch.public.setLoginInfo({ type: 'retrieveemail', bool: true })
        }}>{t('header.sign.getpasswordemail')}</div>
        {changesucc && <SuccessInfo
            Topimg = {Succimg}
            succtitle={t('public.loginsucc')}
            describe = {describeinfo}
            btntext ={t('public.gologin')}
            linkbtn
            timeflag
            isloginpasd
        />}
    </div>
}
