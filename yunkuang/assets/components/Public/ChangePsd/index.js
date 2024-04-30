import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { isQuattroWallet, isSecure1475 } from '../../../public/js/index'

import './index.scss'

// Topimg // 头图
// succtitle // 头图下面描述文案
// describe // 提示文字
// btntext // 跳转按钮文字
// linkbtn // 跳转按钮是否显示
// surebtn // 确认按钮是否显示
// bigsize // 字体
// timeflag // 是否显示倒计时
// isloginpasd // 修改登录密码
// isIndex // 是否是首页显示
// showInfo // 不再显示
// gomenypasd // 修改资金密码
// infotext // 正文
// istochange // 去修改登录密码
// isdownload // 下载页面
// richtext 富文本

export default (props) => {
    const {
        Topimg,
        succtitle,
        describe,
        btntext,
        linkbtn,
        surebtn,
        bigsize,
        timeflag,
        isloginpasd,
        isIndex,
        showInfo,
        gomenypasd,
        infotext,
        isdownload,
        // richtext,
        istochange } = props

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const [countdown, setCountdown] = useState()
    const [start, setStart] = useState()

    useEffect(() => {
        if (window.localStorage.getItem('firstPopup') && isIndex) {
            setStart(false)
        } else {
            setStart(timeflag)
        }
    }, [])

    useEffect(() => {
        if (!timeflag) return
        let time = null
        if (start) {
            let num = 5
            time = setInterval(() => {
                if (num > 0) {
                    num--
                    setCountdown(`${num}s`)
                } else {
                    setCountdown()
                    clearInterval(time)
                    setStart(false)
                }
            }, 1000)
        }
        return () => clearInterval(time)
    }, [start])
    const handleTologin = useCallback(() => {
        if (isdownload) {
            showInfo(false)
            return
        }
        if (start) return
        if (isloginpasd) {
            if (isQuattroWallet()) {
                window.location.href = '/jplogin'
            } else if (isSecure1475()) {
                window.location.href = '/secure/enlogin'
            } else {
                window.location.href = '/user/signin'
            }
        }
        if (isIndex) {
            if (isQuattroWallet()) {
                window.location.href = '/jpaddress'
            } else if (isSecure1475()) {
                window.location.href = '/secure/enproperty'
            } else {
                window.location.href = '/property'
            }
        }
        if (gomenypasd) {
            if (isQuattroWallet()) {
                window.location.href = '/jpsecurity'
            } else if (isSecure1475()) {
                window.location.href = '/secure/enusercenter'
            } else {
                window.location.href = '/usercenter'
            }
        }
        if (istochange) {
            dispatch.public.setLoginInfo({ type: 'retrieveemail', bool: true })
        }
    }, [start])
    const handleClose = useCallback(() => {
        dispatch.public.closePopup()
        showInfo(0)
    })
    // 返回
    const handleGoback = useCallback(() => {
        if (start) return
        showInfo(1)
        window.localStorage.setItem('firstPopup', 1)
    }, [start])
    // console.log(start)
    return <div className="changepasd">
        <div className="changepasd-center">
            <div className="changepasd-center-top">
                {Topimg && <img src={Topimg} alt=""/>}
                {succtitle && <div className={`${bigsize ? 'change-size' : 'richtext'}`} dangerouslySetInnerHTML={{ __html: succtitle }} />}
            </div>
            {describe && <ul>
                {describe.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>}
            {infotext && <div className="changepasd-center-txt">{infotext}</div>}
            {linkbtn && <div className="change-bottom">
                <div className={`changepasd-btn ${start ? 'btn-bg' : ''}`} onClick={() => { handleTologin() }}>{btntext} {timeflag && countdown}</div>
                {!isloginpasd && !gomenypasd && !istochange && !isdownload && <div className="changepasd-notsee" onClick={() => {
                    showInfo(2)
                }}>{t('public.notsee')}</div>}
            </div>}
            {surebtn && <div className="change-other">
                <div onClick={() => {
                    handleClose()
                }}>{t('public.sure')} {timeflag && countdown}</div>
                <div className="change-other-back" onClick={() => {
                    handleGoback()
                }}>{t('public.back')}</div>
            </div>}
        </div>
    </div>
}
