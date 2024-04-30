import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
// import md5 from 'blueimp-md5'

import SafetyVerify from './SafetyVerify'
import FishingCode from '../FishingCode'
import SetEmail from './SetEmail'
import SetMobile from './SetMobile'
import SetLoginpwd from './SetLoginpwd'
import SetTradepwd from './SetTradepwd'
import SetGoogle from './SetGoogle'
import LackVerify from './LackVerify'
import emailicons from '../../public/imgs/newedition/redesign/email_icons.png'
import mobileicons from '../../public/imgs/newedition/redesign/mobile_icons.png'
import gaicons from '../../public/imgs/newedition/redesign/ga_icons.png'

import './index.scss'
import Toast from '../Toast'

export default (props) => {
    const { accountinfo, type, way, islack, getunbindFn } = props
    // type: email邮箱 loginpwd登录密码 tradepwd资金密码 mobile手机 fishing钓鱼码 google谷歌
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [getid, setGetid] = useState()
    const [genre, setGenre] = useState()
    const [lackflag, setLackflag] = useState(false)
    const [ontype, setOntype] = useState({
        type: '',
        ways: 1
    })
    const verifylist = [
        { title: accountinfo.mobile === '' ? t('header.sign.yzphone') : accountinfo.mobile, issure: accountinfo.mobile !== '', icons: mobileicons, types: 'mobile' },
        { title: accountinfo.email === '' ? t('header.sign.yzemail') : accountinfo.email, issure: accountinfo.email !== '', icons: emailicons, types: 'email' },
        { title: t('public.googlefatitle'), issure: accountinfo.bindGA, icons: gaicons, types: 'google' }
    ]
    useEffect(() => {
        if (way !== 1 && islack) {
            setLackflag(true)
        }
        getotherFn(type, way)
    }, [type, way, islack])
    // 获取验证type
    const getotherFn = useCallback((name, num) => {
        setOntype({
            type: name,
            ways: num
        })
        if (name === 'unbingga') {
            setGenre(32)
        }
        if (name === 'email') {
            setGenre(6)
        }
        if (name === 'mobile') {
            setGenre(5)
        }
        if (name === 'google') {
            setGenre(7)
        }
        if (name === 'fishing') {
            setGenre(31)
        }
        if (name === 'loginpwd') {
            setGenre(4)
        }
        if (name === 'tradepwd') {
            if (num === 1) {
                setGenre(15)
            } else {
                setGenre(16)
            }
        }
    }, [])
    // 解绑谷歌
    const unbindGa = useCallback((id) => {
        dispatch.public.unBindga({
            type: 32,
            encryptSecurityId: id
        }).then((res) => {
            if (res.code === 0) {
                getunbindFn(true)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="account-set">
        <div className="account-set-con">
            {lackflag ? (
                <LackVerify
                    lacklist={verifylist}
                    onamend={(a) => {
                        setLackflag(a.lack)
                        getotherFn(a.types, a.ways)
                    }}
                />
            ) : (
                <>
                    {getid ? (
                        <>
                            {ontype.type === 'loginpwd' && <SetLoginpwd
                                saftyid={getid}
                                type={ontype.ways}
                            />}
                            {ontype.type === 'tradepwd' && <SetTradepwd
                                saftyid={getid}
                                type={ontype.ways}
                            />}
                            {ontype.type === 'email' && <SetEmail
                                saftyid={getid}
                                type={ontype.ways}
                            />}
                            {ontype.type === 'mobile' && <SetMobile
                                saftyid={getid}
                                type={ontype.ways}
                            />}
                            {ontype.type === 'google' && <SetGoogle
                                saftyid={getid}
                                type={ontype.ways}
                            />}
                            {ontype.type === 'fishing' && <FishingCode
                                saftyid={getid}
                                type={ontype.ways}
                            />}
                        </>
                    ) : (
                        <SafetyVerify
                            verifyinfo={accountinfo}
                            getorderid={(id) => {
                                if (type === 'unbingga') {
                                    unbindGa(id)
                                } else {
                                    setGetid(id)
                                }
                            }}
                            entype={genre}
                        />
                    )}
                </>
            )}
        </div>
    </div>
}
