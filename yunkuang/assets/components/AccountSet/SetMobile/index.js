import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import TextInfo from '../TextInfo'
import InputPage from '../InputPage'
import SureButton from '../SureBtn'
import SelectCode from '../../Public/Selectcode'
import SuccPage from '../SetSuccess'
import Toast from '../../Toast'
import { initYpRiddler } from '../../../public/js/index'

export default (props) => {
    const { saftyid, type } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const desc = [t('public.mobiletitle')]
    const [orderid, setOrderid] = useState()
    const [mobileinfo, setMobileinfo] = useState()
    const [mobilecode, setMobilecode] = useState()
    const [sureflag, setSureflag] = useState(false)
    const [popupflg, setPopupflg] = useState(false)
    // 获取手机验证码
    const getmobilecode = useCallback((validInfo) => {
        setOrderid()
        dispatch.public.sendSmsVerifyCode({
            type: 5,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token,
            mobile: mobileinfo.mobile,
            national_code: mobileinfo.contiycode
        }).then((res) => {
            if (res.code === 0) {
                setOrderid(res.data.orderId)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [mobileinfo])
    // 确定设置/修改
    const handleSure = useCallback(() => {
        if (orderid && mobileinfo?.mobile && mobilecode) {
            dispatch.public.bindMobile({
                encryptSecurityId: saftyid,
                mobile_verify_code: mobilecode,
                mobile_order_id: orderid,
                mobile: mobileinfo.mobile,
                national_code: mobileinfo.contiycode
            }).then((res) => {
                if (res.code === 0) {
                    setPopupflg(true)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [orderid, mobileinfo, mobilecode, saftyid])
    const getsureBtn = useCallback(() => {
        if (mobileinfo?.mobile && mobilecode) {
            setSureflag(true)
        } else {
            setSureflag(false)
        }
    }, [mobileinfo, mobilecode])
    return <div className="set-email">
        <TextInfo
            title={type === 1 ? t('public.setmobile') : t('public.modifymobile')}
            desclist={desc}
        />
        <SelectCode
            isVerify
            getThisinfo={(a) => {
                setMobileinfo(a)
            }}
            getonblue={() => {
                getsureBtn()
            }}
        />
        <InputPage
            rightbtn
            holdertext={t('public.mobilecode')}
            getInput={(code) => {
                setMobilecode(code)
            }}
            gatherFn={() => {
                getsureBtn()
            }}
            initid="setmobile"
            istime={orderid}
            sendFn={() => {
                console.log(mobileinfo)
                if (mobileinfo) {
                    initYpRiddler('setmobile', getmobilecode)
                }
            }}
        />
        <SureButton
            surebtn={sureflag}
            isset={type === 1}
            clickbtnFn={() => {
                handleSure()
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
