import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { useTranslation } from 'react-i18next'

import './index.scss'

import InputPage from '../AccountSet/InputPage'
import { isPsd } from '../../public/js/index'
import SuccPage from '../AccountSet/SetSuccess'
import TextInfo from '../AccountSet/TextInfo'
import SureButton from '../AccountSet/SureBtn'
import Toast from '../Toast'

export default (props) => {
    const { saftyid, type } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [inputtext, setInputtext] = useState()
    const [surebtn, setSurebtn] = useState(false)
    const [errflg, setErrflg] = useState(false)
    const [popupflg, setPopupflg] = useState(false)
    const focuseFn = useCallback(() => {
        if (inputtext && inputtext !== '') {
            if (isPsd(inputtext)) {
                setErrflg(false)
                setSurebtn(true)
            } else {
                setErrflg(true)
            }
        } else {
            setErrflg(false)
            setSurebtn(false)
        }
    }, [inputtext])
    const textlist = [t('public.fdym'), t('public.succdesc')]
    // 设置反钓鱼码
    const setfishinngFn = useCallback(() => {
        console.log(inputtext, surebtn, saftyid)
        if (inputtext && surebtn) {
            dispatch.public.fishingCode({
                anti_phishing_ode: md5(inputtext),
                encryptSecurityId: saftyid,
                type: 31
            }).then((res) => {
                if (res.code === 0) {
                    setPopupflg(true)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [inputtext, saftyid, surebtn])
    return <div className="fishing-code">
        <TextInfo
            title={t('public.setfish')}
            desclist={textlist}
        />
        <InputPage
            holdertext={t('public.inputfish')}
            errtext={t('header.sign.rightPsd')}
            errappear={errflg}
            getInput={(a) => {
                console.log(a)
                setInputtext(a)
            }}
            gatherFn={() => {
                focuseFn()
            }}
            // leaveFn={() => {
            //     console.log()
            // }}
        />
        <SureButton
            surebtn={surebtn}
            clickbtnFn={() => {
                setfishinngFn()
            }}
        />
        {popupflg && <SuccPage
            title={t('public.fishsucc')}
            isset={type === 1}
            onsureFn={() => {
                window.location.reload()
            }}
        />}
    </div>
}
