import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { useTranslation } from 'react-i18next'

import TextInfo from '../TextInfo'
import InputPage from '../InputPage'
import SureButton from '../SureBtn'
import Toast from '../../Toast'
import { initYpRiddler } from '../../../public/js/index'

export default (props) => {
    const { verifyinfo, getorderid, entype } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [mobilecode, setMobilecode] = useState()
    const [emailcode, setEmailcode] = useState()
    const [gacode, setGacode] = useState()
    const [mobileorder, setMobileorder] = useState()
    const [emailorder, setEmailorder] = useState()
    const [changebtn, setChangebtn] = useState(false)
    // 改变btn按钮颜色
    const changeFn = useCallback(() => {
        if (verifyinfo.bindGA && verifyinfo.email !== '' && verifyinfo.mobile !== '') {
            if (emailcode && mobilecode && gacode) {
                setChangebtn(true)
            } else {
                setChangebtn(false)
            }
            return
        }
        if (verifyinfo.bindGA && verifyinfo.email !== '') {
            if (emailcode && gacode) {
                setChangebtn(true)
            } else {
                setChangebtn(false)
            }
            return
        }
        if (verifyinfo.bindGA && verifyinfo.mobile !== '') {
            if (mobilecode && gacode) {
                setChangebtn(true)
            } else {
                setChangebtn(false)
            }
            return
        }
        if (verifyinfo.email !== '' && verifyinfo.mobile !== '') {
            if (mobilecode && emailcode) {
                setChangebtn(true)
            } else {
                setChangebtn(false)
            }
            return
        }
        if (verifyinfo.email !== '') {
            if (emailcode) {
                setChangebtn(true)
            } else {
                setChangebtn(false)
            }
            return
        }
        if (verifyinfo.mobile !== '') {
            if (mobilecode) {
                setChangebtn(true)
            } else {
                setChangebtn(false)
            }
        }
    }, [mobilecode, emailcode, gacode, verifyinfo])
    // 获取手机验证码
    const getmobileFn = useCallback((validInfo) => {
        setMobileorder()
        dispatch.public.sendSmscode({
            type: entype,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            if (res.code === 0) {
                setMobileorder(res.data.orderId)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [entype])
    // 获取邮箱验证码
    const getemailFn = useCallback((validInfo) => {
        setEmailorder()
        dispatch.public.sendEmailcode({
            type: entype,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            if (res.code === 0) {
                setEmailorder(res.data.orderId)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [entype])
    const clickSure = useCallback(() => {
        if ((emailorder || mobileorder) && (gacode || mobilecode || emailcode)) {
            dispatch.public.verifySeafy({
                email_order_id: emailorder,
                email_verify_code: emailcode,
                encryptUid: md5(verifyinfo.userId),
                ga_verify_code: gacode,
                mobile_order_id: mobileorder,
                mobile_verify_code: mobilecode,
                type: entype
            }).then((res) => {
                if (res.code === 0) {
                    getorderid(res.data.encryptSecurityId)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [mobilecode, gacode, emailcode, verifyinfo, mobileorder, emailorder, entype])
    // console.log(sureobj)
    const verifycodeFn = useCallback((code) => {
        if (code?.length === 6) {
            changeFn()
            return
        }
        if (code?.length !== 6 && changebtn) {
            setChangebtn(false)
        }
    }, [changebtn, changeFn])
    return <div className="safety-verify">
        <TextInfo
            title={t('header.sign.safety')}
        />
        {verifyinfo?.mobile !== '' && <InputPage
            inouttext={t('header.sign.yzphone')}
            rightbtn
            holdertext={t('public.mobilecode')}
            initid="iponeypid"
            istime={mobileorder}
            gatherFn={() => {
                changeFn()
            }}
            getInput={(code) => {
                setMobilecode(code)
                verifycodeFn(code)
            }}
            sendFn={() => {
                initYpRiddler('iponeypid', getmobileFn)
            }}
        />}
        {verifyinfo?.email !== '' && <InputPage
            inouttext={t('header.sign.yzemail')}
            rightbtn
            holdertext={t('public.emailcode')}
            initid="emailypid"
            istime={emailorder}
            gatherFn={() => {
                changeFn()
            }}
            getInput={(code) => {
                setEmailcode(code)
                verifycodeFn(code)
            }}
            sendFn={() => {
                initYpRiddler('emailypid', getemailFn)
            }}
        />}
        {verifyinfo?.bindGA && <InputPage
            inouttext={t('public.googlecode')}
            holdertext={t('public.gainput')}
            gatherFn={() => {
                changeFn()
            }}
            getInput={(code) => {
                setGacode(code)
                verifycodeFn(code)
            }}
        />}
        <SureButton
            isset
            surebtn={changebtn}
            clickbtnFn={() => {
                clickSure()
            }}
        />
    </div>
}
