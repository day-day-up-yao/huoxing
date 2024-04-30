import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import InputPage from '../InputPage'
import SureButton from '../SureBtn'
import Toast from '../../Toast'
import SuccPage from '../SetSuccess'

export default (props) => {
    const { saftyid, type } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [seetype, setSeetype] = useState(false)
    const [gainfo, setGainfo] = useState({
        qrcode: '',
        secretKey: ''
    })
    const [gacode, setGacode] = useState()
    const [btnflag, setBtnflag] = useState(false)
    const [popupflg, setPopupflg] = useState(false)
    useEffect(() => {
        dispatch.public.bindGa().then((res) => {
            if (res.code === 0) {
                setGainfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const getsureBtn = useCallback(() => {
        if (gacode) {
            setBtnflag(true)
        } else {
            setBtnflag(false)
        }
    }, [gacode])
    const verifycodeFn = useCallback((code) => {
        if (code?.length === 6) {
            getsureBtn()
            return
        }
        if (code?.length !== 6 && btnflag) {
            getsureBtn(false)
        }
    }, [btnflag, getsureBtn])
    const clickSure = useCallback(() => {
        if (gacode && saftyid) {
            dispatch.public.bindGoogle({
                ga_secret_key: gainfo.secretKey,
                encryptSecurityId: saftyid,
                ga_code: gacode
            }).then((res) => {
                if (res.code === 0) {
                    setPopupflg(true)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [gainfo, saftyid, gacode])
    return <div className="set-google">
        <div className="set-google-top">
            <div className="google-text">{t('public.gatitle')}</div>
            <div className="google-top-center">
                {seetype ? (
                    <div className="google-top-center-input">{gainfo.secretKey}</div>
                ) : (
                    <div className="google-top-center-img">
                        <img src={'data:image/png;base64,' + gainfo.qrcode} alt=""/>
                    </div>
                )}
                <div className="google-top-center-change" onClick={() => {
                    setSeetype(!seetype)
                }}>{seetype ? t('public.scancode') : t('public.notscan')}</div>
            </div>
        </div>
        <div className="set-google-bottom">
            <div className="google-text">{t('public.gatitletwo')}</div>
            <InputPage
                holdertext={t('header.sign.enterVerify')}
                getInput={(code) => {
                    setGacode(code)
                    verifycodeFn(code)
                }}
                gatherFn={() => {
                    getsureBtn()
                }}
            />
            <SureButton
                surebtn={btnflag}
                isset={type === 1}
                clickbtnFn={() => {
                    clickSure()
                }}
            />
        </div>
        {popupflg && <SuccPage
            title={type === 1 ? t('public.setsucc') : t('public.modifysucc')}
            onsureFn={() => {
                window.location.reload()
            }}
        />}
    </div>
}
