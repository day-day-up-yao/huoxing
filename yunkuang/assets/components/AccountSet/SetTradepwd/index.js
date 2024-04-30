import React, { useState, useCallback } from 'react'
import md5 from 'blueimp-md5'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import TextInfo from '../TextInfo'
import InputPage from '../InputPage'
import SureButton from '../SureBtn'
import Toast from '../../Toast'
import SuccPage from '../SetSuccess'

export default (props) => {
    const { type, saftyid } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const textlist = [t('public.modifytwo')]
    const [freshpwd, setFreshpwd] = useState()
    const [oncepwd, setOncepwd] = useState()
    const [btnflag, setBtnflag] = useState(false)
    const [popupflg, setPopupflg] = useState(false)
    const btnsureFn = useCallback(() => {
        if (freshpwd && oncepwd) {
            setBtnflag(true)
        } else {
            setBtnflag(false)
        }
    }, [freshpwd, oncepwd])
    const clickSure = useCallback(() => {
        if (freshpwd && oncepwd) {
            dispatch.public.tradePwd({
                encryptSecurityId: saftyid,
                trade_pwd: md5(freshpwd),
                trade_pwd2: md5(oncepwd),
                type: type
            }).then((res) => {
                if (res.code === 0) {
                    setPopupflg(true)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [saftyid, freshpwd, oncepwd, type])
    return <>
        <TextInfo
            title={type === 1 ? t('public.settradepwd') : t('public.modifytradepwd')}
            desclist={textlist}
        />
        <InputPage
            holdertext={t('public.newtradepwd')}
            ispwd
            getInput={(code) => {
                setFreshpwd(code)
            }}
            gatherFn={() => {
                btnsureFn()
            }}
        />
        <InputPage
            holdertext={t('public.againtradepwd')}
            ispwd
            getInput={(code) => {
                setOncepwd(code)
            }}
            gatherFn={() => {
                btnsureFn()
            }}
        />
        <SureButton
            surebtn={btnflag}
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
    </>
}
