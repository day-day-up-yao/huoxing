import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import QRCode from 'qrcode'
import HeaderTitle from '../Title'
import { langWhat, isJp } from '../../../public/js/index'
// import newwechat from '../../../public/imgs/newpage/newwechat.jpg'
// import useline from '../../../public/imgs/btnicon/userline.png'
import newlogo from '../../../public/imgs/newedition/redesign/logo_header.png'
import SelectDown from './SelectDown'
// import msgimg from '../../../public/imgs/newedition/redesign/msg_header.png'
import hashimg from '../../../public/imgs/newedition/redesign/hash_header.png'
import moneyimg from '../../../public/imgs/newedition/redesign/monney_header.png'
import orderimg from '../../../public/imgs/newedition/redesign/order_header.png'
import myselfimg from '../../../public/imgs/newedition/redesign/littleuserimg.png'
import phoneimg from '../../../public/imgs/newedition/redesign/phone_header.png'
import waitimg from '../../../public/imgs/newedition/redesign/waite_header.png'
import languimg from '../../../public/imgs/newedition/redesign/lannguage_header.png'
import Toast from '../../Toast'

import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const [heightpage, setHeightpage] = useState(0)
    const { stateMine } = useSelector(
        (state) => ({
            // loginShow: state.public.loginInfo.loginShow,
            stateMine: state.public.userInfo
        }),
        shallowEqual
    )
    const [downimg, setDownimg] = useState('')
    // const [service, setService] = useState(newwechat)
    const [getlangs, setGetlangs] = useState()
    const [langflag, setlangflag] = useState(false)
    const [userinfo, setUserinfo] = useState()

    useEffect(() => {
        const getlang = navigator.language || navigator.browserLanguage
        setGetlangs(getlang)
        if (
            langWhat(getlang) !== 'zh' &&
            getlang &&
            langWhat(getlang) !== langWhat(i18n.language) &&
            window.localStorage.getItem('headertitle') !== 'ok'
        ) {
            setlangflag(true)
        }
        if (Cookies.get('c_token')) {
            dispatch.public.getUseinfo().then((res) => {
                if (res.code === 0) {
                    setUserinfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        // if (window.location.pathname === '/') {
        //     setHeaderinfo(true)
        // }
        // console.log(window.location.pathname)
        dispatch.public.homeInfo()
        let langua = ''
        if (langWhat(i18n.language) === 'zh') {
            langua = 'https://www.mclouds.io/download?lang=zh-cn'
            // setService(newwechat)
        }
        if (langWhat(i18n.language) === 'en') {
            langua = 'https://www.mclouds.io/download?lang=en-us'
        }
        if (langWhat(i18n.language) === 'ja') {
            langua = 'https://www.mclouds.jp/download?lang=ja=jp'
            // setService(useline)
        }
        // 生成下载二维码
        QRCode.toDataURL(langua)
            .then((url) => {
                // console.log(url)
                setDownimg(url)
            })
            .catch((err) => {
                console.error(err)
            })
        window.onscroll = () => {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            setHeightpage(scrollTop)
            // if (scrollTop > 0 && langWhat(i18n.language) === 'zh') {
            //     document.getElementById('hintinfo').style.display = 'block'
            // } else {
            //     document.getElementById('hintinfo').style.display = 'none'
            // }
        }
    }, [])
    const leftlist = [
        {
            title: t('public.miningmall'),
            list: [
                { text: `BTC${t('newpage.header.wak')}`, link: '/productlists/BTC' },
                { text: `ETH${t('newpage.header.wak')}`, link: '/productlists/ETH' },
                { text: `FIL${t('newpage.header.wak')}`, link: '/productlists/FIL' }
            ]
        },
        {
            title: t('public.financial'),
            list: [
                { text: t('defi.cunbibao'), link: '' },
                { text: t('header.nav.defikc'), link: '' }
            ]
        },
        {
            title: t('public.zyjd'),
            href: ''
        },
        {
            title: t('public.bigcustom'),
            href: ''
        },
        {
            title: t('public.miningtogether'),
            href: ''
        }
    ]
    const rightlist = [
        {
            title: '',
            imgs: myselfimg,
            href: '',
            list: [
                {
                    text: (
                        <div className="my-info">
                            <div className="my-info-photo">
                                <img src={myselfimg} alt="" />
                            </div>
                            <div className="my-info-user">
                                {userinfo?.mobile === '' ? userinfo?.email : userinfo?.mobile}
                            </div>
                            <div className="my-info-uid">UID:{userinfo?.userId}</div>
                            {/* <div className="my-info-kyc">
                                <span>KYC：</span>
                                {(userinfo?.displayLevel === '1' && userinfo?.verifyStatus === 2) ||
                                (userinfo?.displayLevel === '2' && userinfo?.verifyStatus !== 2) ? (
                                    <span>{t('public.basics')}</span>
                                ) : (userinfo?.displayLevel === '2' && userinfo?.verifyStatus === 2) ||
                                  (userinfo?.displayLevel === '3' && userinfo?.verifyStatus !== 2) ? (
                                    <span>{t('public.basics')}</span>
                                ) : (
                                    <span>{t('public.notkyc')}</span>
                                )}
                            </div> */}
                        </div>
                    ),
                    link: ''
                },
                { text: t('h5.mine.user'), link: '/usercenter' },
                // { text: t('public.loginhistory'), link: '/usercenter' },
                { text: t('h5.mine.getout'), link: '/loginout' }
            ]
        },
        // {
        //     title: t('public.message'),
        //     imgs: msgimg,
        //     href: '/'
        // },
        {
            title: t('productdetail.sl'),
            imgs: hashimg,
            href: '/hashrate'
        },
        {
            title: t('newpage.header.moneyuser'),
            href: '/property',
            imgs: moneyimg
        },
        {
            title: t('lendorder.order'),
            href: '/order',
            imgs: orderimg,
            list: [
                { text: t('orderdetail.metchorder'), link: '/order' },
                { text: t('newpage.header.electr'), link: '/order?num=1' },
                { text: t('orderdetail.costorder'), link: '/order?num=2' }
            ]
        }
    ]
    const nologinlist = [
        {
            title: '',
            href: '',
            imgs: phoneimg,
            codeimg: (
                <div className="about-code-img">
                    <img src={downimg} alt="" />
                    <div className="down-desc">Android & iPhone</div>
                </div>
            )
        },
        {
            title: '',
            href: 'waite',
            imgs: waitimg
            // codeimg: <div className="about-code-img">
            //     <img src={service} alt="" />
            // </div>
        },
        {
            title: '',
            href: '',
            imgs: languimg,
            islang: true,
            list: [
                { text: '中文', link: 'zh-CN' },
                { text: '英文', link: 'en-us' },
                { text: '日文', link: 'ja-jp' }
            ]
        }
    ]
    return (
        <div className={heightpage > 0 ? 'layout-header-newpc' : ''}>
            {/* {langWhat(i18n.language) === 'zh' && <Hint />} */}
            {langflag && <HeaderTitle getlocal={getlangs} {...{ setlangflag }} />}
            <div className="layout-header-difpc">
                <div className="header-con">
                    <div className="header-con-l">
                        <div
                            className="logo"
                            onClick={() => {
                                window.location.href = '/'
                            }}
                        >
                            <img src={newlogo} alt="" />
                        </div>
                        <div className="btn-list">
                            {leftlist.map((item, index) => {
                                return <SelectDown pointlist={item} key={index} />
                            })}
                        </div>
                    </div>
                    <div className="header-con-r">
                        <div className="btn-list">
                            {stateMine.userId &&
                                rightlist.map((item, index) => {
                                    return <SelectDown pointlist={item} key={index} leftimg />
                                })}
                            {nologinlist.map((item, index) => {
                                return <SelectDown pointlist={item} key={index} leftimg />
                            })}
                        </div>
                        <div className="r-login" style={{ display: stateMine.userId ? 'none' : 'flex' }}>
                            <div
                                className="r-login-sign"
                                onClick={() => {
                                    if (window.location.pathname === '/user/signin') {
                                        return
                                    }
                                    if (window.location.pathname !== '/user/signup') {
                                        window.location.href = `/user/signin?redirect= ${encodeURIComponent(
                                            window.location.href
                                        )}`
                                    } else {
                                        window.location.href = `/user/signin`
                                    }
                                }}
                            >
                                {t('newpage.header.login')}
                            </div>
                            {isJp && (
                                <div
                                    className="r-login-up"
                                    onClick={() => {
                                        window.location.href = `/user/signup`
                                    }}
                                >
                                    {t('newpage.header.signup')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className="register-login-container" style={{ display: loginShow ? 'flex' : 'none' }} key="registerLogin">
                <SigninAndSignup />
            </div> */}
            </div>
        </div>
    )
}
