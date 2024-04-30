import React, { useCallback, useState, useEffect } from 'react'
import Cookie from 'js-cookie'
// import { useTranslation } from 'react-i18next'
// import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import { webTdk, isJp } from '../../../public/js/index'
import useLang from '../../../public/hooks/useLang'
import lineimg from '../../../public/imgs/btnicon/line.png'
import useline from '../../../public/imgs/btnicon/userline.png'
// import enlogo from '../../../public/imgs/newpage/footenlogo.png'
// import footnewlogo from '../../../public/imgs/newpage/footnewlogo.jpg'
// import jplogo from '../../../public/imgs/newpage/footjplogo.png'
// import hxlogo from '../../../public/imgs/newpage/huoxinglogo.png'
// import hxlogoen from '../../../public/imgs/newpage/huoxlogoen.png'
import sslimg from '../../../public/imgs/newpage/sslimg.png'
import paymentimg from '../../../public/imgs/newpage/paymentimg.png'
import newfootlogo from '../../../public/imgs/newedition/redesign/logo_header.png'
import huoxinglogoimg from '../../../public/imgs/newedition/redesign/huoxinngcaijing.png'

export default () => {
    const changeLang = useLang()
    const { t, i18n } = useTranslation()
    // const dispatch = useDispatch()
    const [shareCon, setShareCon] = useState('')
    const [lineflag, setLineflag] = useState(false)
    const [setinglag, setSetinglag] = useState(false)
    const [islogin, setIslogin] = useState(false)
    const shareGenerate = useCallback(() => {
        const SocialShare = require('../../SocialShare').default
        return <SocialShare
            url={window.location.href}
            title={webTdk.title}
            sites={['qq', 'weibo', 'wechat', 'twitter']}
        />
    }, [])
    // var ismobile = /iphone|android|ipad/i.test(navigator.userAgent)
    // function addZdassets (url) {
    //     if (document.querySelector('#ze-snippet') || !url) return
    //     var script = document.createElement('script')
    //     script.id = 'ze-snippet'
    //     script.async = true
    //     script.src = url
    //     script.onload = function () {
    //         var lang = window.localStorage.lang
    //         var langObj = {
    //             'en-us': 'en',
    //             'zh-cn': 'zh-CN',
    //             'zh-hk': 'zh-TW',
    //             'th-th': 'th',
    //             'ko-kr': 'ko',
    //             'ja-jp': 'ja',
    //             'ru-ru': 'ru',
    //             'de-de': 'de',
    //             'es-es': 'et',
    //             'fr-fr': 'fr',
    //             'vi-vn': 'vi',
    //             'tr-tr': 'tr'
    //         }
    //         zE(function () {
    //             zE.setLocale(langObj[lang])
    //             if (ismobile) {
    //                 zE('webWidget', 'hide')
    //             } else {
    //                 zE('webWidget', 'show')
    //             }
    //         })
    //     }
    //     document.querySelector('body').appendChild(script)
    // }
    useEffect(() => {
        if (Cookie.get('c_token')) {
            setIslogin(true)
        }
        setShareCon(shareGenerate())
        // addZdassets && addZdassets('https://static.zdassets.com/ekr/snippet.js?key=f39b1a23-b103-4b6e-afa3-14ff463927d9')
        // dispatch.public.indexConfig({
        //     preview: false
        // }).then((res) => {
        //     if (res.zendesk && /\.js/.test(res.zendesk)) {
        //         addZdassets && addZdassets(res.zendesk)
        //     }
        // })
    }, [])

    // 点击其他地方隐藏下拉列表
    const hideAllMenu = useCallback(() => {
        setSetinglag(false)
    })
    useEffect(() => {
        document.addEventListener('click', hideAllMenu)
    }, [hideAllMenu])
    return <div className="layout-footer-newpc">
        <div className="footer-mclouds">
            <div className="content">
                <div className="content-left">
                    <div className="contact-img">
                        <a className="information" href="" target="_blank">
                            <img src={newfootlogo}/>
                        </a>
                        <div className="contact-text">
                            <p><span>{t('footer.contact.service')}</span>{isJp ? 'service@mclouds.jp' : 'service@mclouds.io'}</p>
                            <p><span>Copyright © 2020-2022 MCLOUDS. All Rights Reserved</span></p>
                        </div>
                        <div className="contact-login" style={{ display: islogin ? 'none' : '' }}>
                            <div className="login-left" onClick={() => {
                                if (window.location.pathname === '/user/signin') {
                                    return
                                }
                                if (window.location.pathname !== '/user/signup') {
                                    window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                                } else {
                                    window.location.href = `/user/signin`
                                }
                            }}>{t('newpage.header.login')}</div>
                            {/* <div className="login-right" onClick={() => { window.location.href = `/user/signup` }}>{t('newpage.header.signup')}</div> */}
                        </div>
                        <div className="site-switch">
                            <div className="select-switch" onClick={(e) => {
                                setSetinglag(true)
                                e.nativeEvent.stopImmediatePropagation()
                            }}>{t('public.switchsetting')}</div>
                            {setinglag && <div className="switch-list">
                                <div className="switch-list-item" onClick={() => {
                                    if (isJp) {
                                        window.location.href = 'https://www.mclouds.io/?lang=zh-cn'
                                    } else {
                                        changeLang('zh')
                                    }
                                }}>中国大陆</div>
                                <div className="switch-list-item" onClick={() => {
                                    window.location.href = 'https://www.mclouds.jp'
                                }}>mclouds.jp</div>
                                <div className="switch-list-item" onClick={() => {
                                    if (isJp) {
                                        window.location.href = 'https://www.mclouds.io/?lang=en-us'
                                    } else {
                                        changeLang('en')
                                    }
                                }}>Global Site</div>
                            </div>}
                        </div>
                    </div>
                    <div className="center">
                        <h4>{t('footer.contact.gzmine')}</h4>
                        {(isJp || (i18n.language).toLowerCase().substring(0, 2) === 'ja') ? (
                            <div className="lineconnnet" onMouseEnter={() => { setLineflag(true) }} onMouseLeave={() => { setLineflag(false) }}>
                                <div className="lineconnnet-img">
                                    <img src={lineimg} alt=""/>
                                </div>
                                <div className="lineconnnet-imgcode" style={{ display: lineflag === true ? '' : 'none' }}>
                                    <p>mclouds.jp</p>
                                    <img src={useline} alt=""/>
                                </div>
                            </div>
                        ) : typeof window !== 'undefined' && shareCon}
                    </div>
                </div>
                <div className="business">
                    <div className="business-list">
                        <h3>{t('footer.contact.product')}</h3>
                        <div className="business-list-con">
                            <ul>
                                <li>
                                    <a href="/productlists/BTC">BTC{t('newpage.header.wak')}</a>
                                </li>
                                <li>
                                    <a href="/productlists/ETH">ETH{t('newpage.header.wak')}</a>
                                </li>
                                <li>
                                    <a href="/productlists/FIL">FIL{t('newpage.header.wak')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {(isJp || (i18n.language).toLowerCase().substring(0, 2) === 'ja') ? ('') : (
                        <div className="business-list">
                            <h3>{t('footer.contact.hxproduct')}</h3>
                            <div className="business-list-con">
                                <ul>
                                    <li>
                                        <a href="/">{t('footer.contact.hxyk')}</a>
                                    </li>
                                    {/* <li>
                                        <a href="/lend">{t('footer.contact.hxsd')}</a>
                                    </li> */}
                                    {/* <li>
                                    <a href="https://trade.huoxing24.com">{t('footer.contact.hxjyds')}</a>
                                </li> */}
                                    {/* <li>
                                        <a href="/DeFi">{t('footer.contact.hxdifi')}</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className="business-list">
                        <h3>{t('footer.contact.support')}</h3>
                        <div className="business-list-con">
                            <ul>
                                <li>
                                    <a href="/helpcenter">{t('footer.contact.help')}</a>
                                </li>
                                <li>
                                    <a href="/termsof">{t('footer.contact.user')}</a>
                                </li>
                                <li>
                                    <a href="/privacy">{t('footer.contact.privacy')}</a>
                                </li>
                                <li>
                                    <a href="/law">{t('footer.contact.law')}</a>
                                </li>
                                <li>
                                    <a href="/aboutus">{t('footer.contact.aboutour')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-huoxing">
            <div className="footer-huoxing-top">
                <div className="huoxing-l">
                    <div className="huoxing-left">
                        <div className="huoxing-logoen">
                            <img src={huoxinglogoimg} alt=""/>
                        </div>
                        <div className="left-text">{t('footer.contact.hxtext')}</div>
                    </div>
                    <div className="huoxing-cent">
                        <h3>{t('orderdetail.paywey')}</h3>
                        <div className="huoxing-cent-img">
                            <div className="cent-img">
                                <img src={paymentimg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="huoxing-right">
                    {(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? (
                        <div className="huoxing-right-left">
                            <h3>{t('footer.contact.aboutour')}</h3>
                            <ul>
                                {/* <li>
                                    <a href="http://huoxing24.com/">{t('footer.contact.hxcj')}</a>
                                </li> */}
                                <li>
                                    <a href="/">{t('footer.contact.hxyk')}</a>
                                </li>
                                {/* <li>
                                    <a href="https://trade.huoxing24.com/">{t('footer.contact.hxjyds')}</a>
                                </li> */}
                            </ul>
                        </div>
                    ) : ('')}
                    <div className="huoxing-right-right">
                        <img src={sslimg} alt=""/>
                    </div>
                </div>
            </div>
            <div className="footer-huoxing-bottom">{t('footer.contact.internet')}</div>
        </div>
    </div>
}
