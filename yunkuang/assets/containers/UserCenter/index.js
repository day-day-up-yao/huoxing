import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Header from './user_header'
import mobile from '../../public/imgs/new/ipone.png'
import bindemail from '../../public/imgs/new/bindemail.png'
import moneypassd from '../../public/imgs/new/moneypassd.png'
import setting from '../../public/imgs/new/setting.png'
import Toast from '../../components/Toast/index'
import './index.scss'

export default () => {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { publicinfos } = useSelector((state) => ({
        publicinfos: state.public.publicinfo
    }))
    const [userinfo, setUserinfo] = useState({
        email: '',
        mobile: '',
        userId: '',
        bindGA: '',
        bindTradePwd: '',
        verifyStatus: '',
        displayLevel: 0,
        kycLevel: ''
    })
    // const [emillink, setEmaillink] = useState()
    useEffect(() => {
        dispatch.public
            .getUseinfo({})
            .then((res) => {
                if (res.code === 0) {
                    setUserinfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
            .catch(function (err) {
                console.log(err)
                Toast.info('获取用户信息错误')
            })
        // dispatch.public.homeInfo().then((res) => {
        //     if (res.code === 0) {
        //         setEmaillink(res.data.mailDocUrl)
        //     }
        // })
    }, [])
    const userlist = [
        {
            name: t('header.sign.googlecode'),
            link: '/bindgoogle',
            text: t('usercenter.promptone'),
            icon: '',
            btn1: t('usercenter.bind'),
            btn2: t('usercenter.binded'),
            type: 0,
            flage: userinfo.bindGA
        },
        {
            name: t('usercenter.bindphone'),
            link: '/bindmobile',
            text: t('usercenter.promptone'),
            icon: mobile,
            btn1: t('usercenter.bind'),
            btn2: t('usercenter.binded'),
            type: 1,
            flage: userinfo.mobile !== ''
        },
        {
            name: t('usercenter.bindemail'),
            link:
                publicinfos.applyBindMail === 1 && i18n.language.toLowerCase().substring(0, 2) === 'zh'
                    ? publicinfos.mailDocUrl
                    : '/bindemail',
            text: t('usercenter.promptone'),
            icon: bindemail,
            btn1: t('usercenter.bind'),
            btn2: t('usercenter.binded'),
            type: 2,
            flage: userinfo.email !== ''
        },
        {
            name: t('usercenter.paswd'),
            link: '/moneypasswd',
            text: t('usercenter.prompttwo'),
            icon: moneypassd,
            btn1: t('usercenter.bind'),
            btn2: t('usercenter.binded'),
            type: 3,
            flage: userinfo.bindTradePwd
        },
        {
            name: t('userkyc.userkyc'),
            link: '/Newkyc',
            text: t('usercenter.promptkyc'),
            icon: setting,
            btn1: t('usercenter.bind'),
            btn2: t('usercenter.binded'),
            type: 4,
            flage: ''
        }
    ]
    console.log(userlist)
    return (
        <div className="newcenter">
            <Header {...{ userinfo }} />
            <div className="center-list">
                {userlist.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            {item.type === 0 ? (
                                <div className="item-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M24 39.001c8.285 0 15.001-6.716 15.001-15 0-8.285-6.716-15.001-15-15.001C15.716 9 9 15.716 9 24c0 8.285 6.716 15.001 15 15.001z"
                                            fill="#616161"
                                        ></path>
                                        <path
                                            d="M24 33.546a9.545 9.545 0 01-9.545-9.545 9.545 9.545 0 019.546-9.546 9.52 9.52 0 016.75 2.796l3.856-3.857A14.955 14.955 0 0024.001 9C15.716 9 9 15.716 9 24c0 8.285 6.716 15.001 15 15.001 4.143 0 7.892-1.679 10.609-4.392L30.75 30.75a9.528 9.528 0 01-6.75 2.795z"
                                            fill="#9E9E9E"
                                        ></path>
                                        <path
                                            d="M33.546 24h-4.773a4.772 4.772 0 10-8.212 3.307l-.004.004 5.91 5.91v.001c4.077-1.088 7.08-4.803 7.08-9.221z"
                                            fill="#424242"
                                        ></path>
                                        <path
                                            d="M39 24h-5.455c0 4.419-3.004 8.134-7.077 9.222l4.212 4.213C35.612 34.977 39 29.885 39 24z"
                                            fill="#616161"
                                        ></path>
                                        <path
                                            d="M24 38.83c-8.255 0-14.952-6.67-14.999-14.915L9 24c0 8.284 6.716 15 15 15 8.285 0 15.001-6.716 15.001-15L39 23.915c-.047 8.245-6.745 14.915-15 14.915z"
                                            fill="#212121"
                                            fillOpacity="0.1"
                                        ></path>
                                        <path
                                            d="M26.469 33.222l.133.133c4.006-1.131 6.944-4.813 6.944-9.184v-.17c0 4.418-3.003 8.133-7.077 9.221z"
                                            fill="#fff"
                                            fillOpacity="0.05"
                                        ></path>
                                        <path
                                            d="M36.273 22.637H24a1.363 1.363 0 000 2.727h12.272a1.363 1.363 0 00.002-2.727z"
                                            fill="#9E9E9E"
                                        ></path>
                                        <path
                                            opacity="0.5"
                                            d="M36.273 22.637H24a1.363 1.363 0 000 2.727h12.272a1.363 1.363 0 00.002-2.727z"
                                            fill="#BDBDBD"
                                        ></path>
                                        <path
                                            d="M11.727 25.023a1.023 1.023 0 100-2.045 1.023 1.023 0 000 2.045zM24 12.75a1.023 1.023 0 100-2.046 1.023 1.023 0 000 2.046zM24 37.296a1.023 1.023 0 100-2.045 1.023 1.023 0 000 2.045zM15.307 16.344a1.023 1.023 0 100-2.045 1.023 1.023 0 000 2.045zM15.307 33.717a1.023 1.023 0 100-2.046 1.023 1.023 0 000 2.046z"
                                            fill="#BDBDBD"
                                        ></path>
                                        <path
                                            d="M32.694 33.717a1.023 1.023 0 100-2.046 1.023 1.023 0 000 2.046z"
                                            fill="#757575"
                                        ></path>
                                        <path
                                            d="M24 22.808h12.273c.724 0 1.316.565 1.359 1.278.001-.029.005-.056.005-.085 0-.754-.61-1.364-1.364-1.364H24.001a1.363 1.363 0 00-1.359 1.45 1.36 1.36 0 011.359-1.28z"
                                            fill="#fff"
                                            fillOpacity="0.2"
                                        ></path>
                                        <path
                                            d="M37.632 24.085a1.365 1.365 0 01-1.359 1.28H24.001a1.361 1.361 0 01-1.359-1.28 1.363 1.363 0 001.359 1.448h12.272a1.363 1.363 0 001.359-1.448z"
                                            fill="#212121"
                                            fillOpacity="0.2"
                                        ></path>
                                        <path
                                            d="M24 14.626a9.52 9.52 0 016.75 2.795l3.94-3.943-.084-.085-3.856 3.857A9.52 9.52 0 0024 14.454a9.545 9.545 0 00-9.545 9.545l.001.086a9.544 9.544 0 019.545-9.46z"
                                            fill="#212121"
                                            fillOpacity="0.1"
                                        ></path>
                                    </svg>
                                </div>
                            ) : (
                                <div className="item-img">
                                    <img src={item.icon} alt="" />
                                </div>
                            )}
                            <div className="item-right">
                                <h3>{item.name}</h3>
                                <h4>{item.text}</h4>
                                {item.type === 4 ? (
                                    <div
                                        className="item-btned"
                                        onClick={() => {
                                            window.location.href = '/Newkyc'
                                        }}
                                    >
                                        {userinfo.verifyStatus === 2 && userinfo.kycLevel === 20
                                            ? t('usercenter.kyced')
                                            : t('usercenter.nokyc')}
                                    </div>
                                ) : item.type === 3 ? (
                                    <div
                                        className="item-btned"
                                        onClick={() => {
                                            window.location.href = '/moneypasswd'
                                        }}
                                    >
                                        {item.flage ? t('usercenter.amend') : t('usercenter.setting')}
                                    </div>
                                ) : item.flage ? (
                                    <div className="item-btn">{t('usercenter.binded')}</div>
                                ) : (
                                    <div
                                        className="item-btned"
                                        onClick={() => {
                                            window.location.href = item.link
                                        }}
                                    >
                                        {t('usercenter.bind')}
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
