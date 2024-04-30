import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { useTranslation } from 'react-i18next'

import TextInfo from '../TextInfo'
import InputPage from '../InputPage'
import SureButton from '../SureBtn'
import Toast from '../../Toast'
import SuccPage from '../SetSuccess'

export default (props) => {
    const { saftyid } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const textlist = [t('public.modifyone'), t('public.modifytwo')]
    const [currentpwd, setCurrentpwd] = useState()
    const [newpwd, setNewpwd] = useState()
    const [againpwd, setAgainpwd] = useState()
    const [btnflag, setBtnflag] = useState(false)
    const [popupflg, setPopupflg] = useState(false)
    const btnsureFn = useCallback(() => {
        if (currentpwd && newpwd && againpwd) {
            setBtnflag(true)
        } else {
            setBtnflag(false)
        }
    }, [currentpwd, newpwd, againpwd])
    const clickSure = useCallback(() => {
        dispatch.public.updatePwd({
            encryptSecurityId: saftyid,
            old_password: md5(currentpwd),
            password1: md5(newpwd),
            password2: md5(againpwd)
        }).then((res) => {
            if (res.code === 0) {
                setPopupflg(true)
            } else {
                Toast.innfo(res.msg)
            }
        })
    }, [saftyid, currentpwd, newpwd, againpwd])
    return <>
        <TextInfo
            title={t('public.modifypwd')}
            desclist={textlist}
        />
        <InputPage
            holdertext={t('public.nowpwd')}
            ispwd
            getInput={(code) => {
                setCurrentpwd(code)
            }}
            gatherFn={() => {
                btnsureFn()
            }}
        />
        <InputPage
            holdertext={t('public.newpwsd')}
            ispwd
            getInput={(code) => {
                setNewpwd(code)
            }}
            gatherFn={() => {
                btnsureFn()
            }}
        />
        <InputPage
            holdertext={t('public.againpswd')}
            ispwd
            getInput={(code) => {
                setAgainpwd(code)
            }}
            gatherFn={() => {
                btnsureFn()
            }}
        />
        <SureButton
            surebtn={btnflag}
            clickbtnFn={() => {
                clickSure()
            }}
        />
        {popupflg && <SuccPage
            title={t('public.succ')}
            onsureFn={() => {
                window.location.reload()
            }}
            isset
        />}
    </>
}
