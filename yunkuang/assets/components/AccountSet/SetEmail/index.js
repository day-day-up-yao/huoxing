import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import TextInfo from '../TextInfo'
import InputPage from '../InputPage'
import SureButton from '../SureBtn'
import Toast from '../../Toast'
import SuccPage from '../SetSuccess'
import { initYpRiddler } from '../../../public/js/index'

export default (props) => {
    const { type, saftyid } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [emailcode, setEmailcode] = useState()
    const [email, setEmail] = useState()
    const [orderid, setOrderid] = useState()
    const [flagbtn, setFlagebtn] = useState(false)
    const [popupflg, setPopupflg] = useState(false)
    // 获取手机验证码
    const getemailecode = useCallback((validInfo) => {
        setOrderid()
        dispatch.public.sendEmailcode({
            type: 6,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            if (res.code === 0) {
                setOrderid(res.data.orderId)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])

    // 验证确定按钮
    const sureFn = useCallback(() => {
        if (emailcode && email && orderid) {
            setFlagebtn(true)
        } else {
            setFlagebtn(false)
        }
    }, [emailcode, email, orderid])
    const clickSure = useCallback(() => {
        dispatch.public.bindEmail({
            encryptSecurityId: saftyid,
            email_order_id: orderid,
            email_verify_code: emailcode,
            email: email
        }).then((res) => {
            if (res.code === 0) {
                setPopupflg(true)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [saftyid, orderid, emailcode, email])
    return <div className="set-email">
        <TextInfo
            title={type === 1 ? t('public.setemail') : t('public.modifyemail')}
        />
        <InputPage
            holdertext={t('public.emailaddress')}
            getInput={(code) => {
                setEmail(code)
            }}
            gatherFn={() => {
                sureFn()
            }}
        />
        <InputPage
            rightbtn
            holdertext={t('public.emailcode')}
            getInput={(code) => {
                setEmailcode(code)
            }}
            gatherFn={() => {
                sureFn()
            }}
            initid="setemail"
            istime={orderid}
            sendFn={() => {
                if (email) {
                    initYpRiddler('setemail', getemailecode)
                }
            }}
        />
        <SureButton
            surebtn={flagbtn}
            isset={type === 1}
            clickbtnFn={() => {
                clickSure()
            }}
        />
        {popupflg && <SuccPage
            title={type === 1 ? t('public.setsucc') : t('public.modifysucc')}
            onsureFn={() => {
                window.location.reload()
            }}
        />}
    </div>
}
