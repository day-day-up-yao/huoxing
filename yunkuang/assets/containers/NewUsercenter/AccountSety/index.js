import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import BoxList from '../BoxList'
import backimg from '../../../public/imgs/newedition/redesign/point_back.png'
import Accountset from '../../../components/AccountSet'

export default (props) => {
    const { userinfo } = props
    const { t } = useTranslation()
    const [stallflg, setStallflg] = useState(true)
    const [thetype, setThetype] = useState()
    const [operateway, setOperateway] = useState()
    const [veriflag, setVeriflag] = useState(false)
    const [unbindfg, setUnbindfg] = useState(false)
    const accountlist = [
        {
            type: 0,
            info: [
                // {
                //     title: t('header.sign.loginpasd'),
                //     text: userinfo?.bindPassword ? t('public.setted') : t('public.notset'),
                //     desc: t('public.descones'),
                //     assate: userinfo?.bindPassword ? 0 : 1,
                //     link: '*',
                //     name: 'loginpwd'
                // },
                {
                    title: t('usercenter.paswd'),
                    text: userinfo?.bindTradePwd ? t('public.setted') : t('public.notset'),
                    desc: t('public.desctwos'),
                    assate: userinfo?.bindTradePwd ? 0 : 1,
                    link: '/moneypasswd',
                    name: 'tradepwd'
                }
            ]
        },
        {
            type: 1,
            equipment: userinfo?.bindGA,
            info: [
                {
                    title: t('header.sign.yzphone'),
                    text: userinfo?.mobile === '' ? t('public.notset') : userinfo?.mobile,
                    desc: t('public.descthree'),
                    assate: userinfo?.mobile !== '' ? 0 : 1,
                    link: '/bindmobile',
                    name: 'mobile'
                },
                {
                    title: t('header.sign.yzemail'),
                    text: userinfo?.email === '' ? t('public.notset') : userinfo?.email,
                    desc: t('public.descfour'),
                    assate: userinfo?.email !== '' ? 0 : 1,
                    link: '/bindemail',
                    name: 'email'
                },
                {
                    title: t('public.googlefatitle'),
                    text: userinfo?.bindGA ? t('public.setted') : t('public.notset'),
                    desc: t('public.descfour'),
                    assate: userinfo?.bindGA ? 0 : 1,
                    link: '/bindgoogle',
                    name: 'google'
                }
                // {
                //     title: t('public.phishing'),
                //     text: userinfo?.hasAntiPhishingCode ? userinfo?.antiPhishingCode : t('public.notset'),
                //     desc: t('public.descfive'),
                //     assate: userinfo?.hasAntiPhishingCode ? 0 : 1,
                //     link: '*',
                //     name: 'fishing'
                // }
            ]
        }
        // {
        //     type: 2,
        //     equipment: userinfo?.multiDeviceLogin,
        //     info: [
        //         {
        //             title: t('public.anyshebei'),
        //             text: userinfo?.multiDeviceLogin === 1 ? t('public.opened') : t('public.closeed'),
        //             desc: t('public.descsix'),
        //             assate: -2,
        //             link: ''
        //         }
        //     ]
        // },
        // {
        //     type: 3,
        //     info: [{ title: t('public.loginouts'), text: t('public.descseven'), desc: '', assate: -1, link: 'cancel' }]
        // }
    ]

    // console.log(accountlist)
    useEffect(() => {
        if (userinfo?.mobile === '' || userinfo?.email === '' || !userinfo?.bindGA) {
            setVeriflag(true)
        } else {
            setVeriflag(false)
        }
    }, [userinfo])
    return (
        <div className="accountsety">
            {stallflg ? (
                accountlist.map((item, index) => (
                    <BoxList
                        item={item}
                        key={index}
                        clickFn={(a) => {
                            setStallflg(a.flage)
                            setThetype(a.type)
                            setOperateway(a.setway)
                        }}
                        bindflag={unbindfg}
                    />
                ))
            ) : (
                <div className="setting-box">
                    <Accountset
                        accountinfo={userinfo}
                        type={thetype}
                        way={operateway}
                        islack={veriflag}
                        getunbindFn={(flag) => {
                            setStallflg(true)
                            setUnbindfg(flag)
                        }}
                    />
                    <div className="setting-box-back">
                        <img src={backimg} alt="" />
                        <span
                            onClick={() => {
                                setStallflg(true)
                            }}
                        >
                            {t('public.back')}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}
