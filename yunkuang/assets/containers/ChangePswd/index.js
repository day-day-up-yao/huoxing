import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

import './index.scss'

import noticeimg from '../../public/imgs/newedition/redesign/notic_icon.png'
import WriteInnput from './WriteInput'
import Toast from '../../components/Toast'
import { cookiesName } from '../../public/js/index'

export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [oldpswd, setOldpswd] = useState()
    const [newpswd, setNewpswd] = useState()
    const [againswd, setAgainpswd] = useState()
    const sureFn = useCallback(() => {
        if (oldpswd && newpswd && againswd) {
            if (newpswd === againswd) {
                dispatch.public.updatePwd({
                    old_password: md5(oldpswd),
                    password1: md5(newpswd),
                    password2: md5(againswd)
                }).then((res) => {
                    if (res.code === 0) {
                        if (res.data.success) {
                            gobanckFn()
                        }
                        // console.log(res.data)
                    } else {
                        Toast.info(res.msg)
                    }
                })
            } else {
                Toast.info(t('header.sign.rightRePsd'))
            }
        } else {
            Toast.info(t('header.sign.enterPsd'))
        }
    }, [oldpswd, newpswd, againswd])
    // 退出登录
    const gobanckFn = useCallback(() => {
        dispatch.public.userLoginout().then((res) => {
            if (res.data.success) {
                Cookies.remove(cookiesName.userId)
                Cookies.remove(cookiesName.cToken)
                window.location.href = '/'
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="change-pswd">
        <div className="paswd-con">
            {/* <div className="paswd-con-notic">
                <img src={noticeimg} alt=""/>
                <span>密码8-20位字符，必须包含大小写字母和数字</span>
            </div> */}
            <div className="paswd-con-notic">
                <img src={noticeimg} alt=""/>
                <span>{t('public.modifyinfo')}</span>
            </div>
            <h3>{t('public.modifypswd')}</h3>
            <WriteInnput desc={t('public.oldpwsd')} getNum={(a) => {
                setOldpswd(a)
            }} />
            <WriteInnput desc={t('public.newpwsd')} getNum={(b) => {
                setNewpswd(b)
            }} />
            <WriteInnput desc={t('public.againpswd')} getNum={(c) => {
                setAgainpswd(c)
            }} />
            <div className="paswd-con-btn" onClick={() => {
                sureFn()
            }}>{t('public.sure')}</div>
        </div>
    </div>
}
