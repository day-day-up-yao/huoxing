import React, { useState, useRef, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

import './index.scss'

import logo from './images/header-logo.svg'
// import beta from '../../../../public/img/icon-beta.svg'
import appDownloadQrcode from '../../../../public/img/download_img.png'
import defaultAvatar from '../../../../public/img/avatar-default.jpg'
import languageicon from './images/languageicon.png'
// import tagPower from './images/tag-power.gif'
// import tagMclouds from './images/tag-mclouds.gif'

// import { trim, mixUrl, clearLoginCookies, windowScroll, scrollOffset, encodeSearchKey } from '../../../../public/'
import { trim, mixUrl, clearLoginCookies, encodeSearchKey } from '../../../../public/'
import { loginShowHide } from '../../../../redux/actions/login'

import RegisterLogin from '../../../RegisterLogin'
import RenameBox from '../../../RenameBox'

import useLang from '../../../../public/hooks/useLang'

const Navigation = (props) => {
  const changeLang = useLang()
  const { t } = useTranslation()
    /** @desc 搜索 */
    const [search, setSearch] = useState(false)
    const [languflag, setLanguflag] = useState(false)
    const [lanflag, setLanflag] = useState()
    const [navlist, setNavlist] = useState([])
    const searchVal = useRef()
    const header = useRef()

    useEffect(() => {
      const requre = {
        hostname: window.location.hostname
      }
      const nav = [
        { title: t('headernavone'), type: 'home', href: '/', bigShow: false },
        { title: `7x24H ${t('headernavtwo')}`, type: 'flash', href: mixUrl.news('/flash', requre), bigShow: false },
        { title: t('headernavthree'), type: 'news', href: mixUrl.news('/', requre), bigShow: false },
        // { title: '火星号', type: 'mp', href: mixUrl.news('/author'), bigShow: false },
        { title: t('headernavfour'), type: 'live', href: mixUrl.main('/live', requre), bigShow: false, hot: false },
        // { title: '一线', type: 'newsFirst', href: mixUrl.news('/list/28'), bigShow: false },
        // { title: '独家', type: 'exclusive', href: mixUrl.news('/list/37'), bigShow: false },
        // { title: '项目', type: 'project', href: mixUrl.news('/list/89'), bigShow: false },
        // { title: '项目', type: 'project', href: mixUrl.news('/list/89'), bigShow: false },
        { title: t('headernavfive'), type: 'feature', href: mixUrl.news('/feature', requre), bigShow: false },
        { title: 'Layer 2', type: 'project', href: mixUrl.news('/list/311', requre), bigShow: false },
        { title: 'DeFi', type: 'project', href: mixUrl.news('/list/34', requre), bigShow: false },
        { title: 'NFT', type: 'project', href: mixUrl.news('/list/38', requre), bigShow: false },
        { title: 'Web 3', type: 'project', href: mixUrl.news('/list/87', requre), bigShow: false },
        { title: 'NAGA', type: 'project', href: 'https://www.naga.io/', bigShow: false }
        // { title: '融资', type: 'iandf', href: mixUrl.news('/list/90'), bigShow: false },
        // { title: '深度', type: 'depth', href: mixUrl.news('/list/91'), bigShow: false },
        // { title: '精选', type: 'flashFirst', href: mixUrl.news('/feature/20200622131120211592'), bigShow: false },
        // { title: '技术', type: 'newsTech', href: mixUrl.news('/list/6'), bigShow: false },
        // { title: '政策', type: 'newsPolicy', href: mixUrl.news('/list/17'), bigShow: false },
        // { title: '行情', type: 'token', href: mixUrl.token(), bigShow: false },
        // { title: '课程', type: 'learn', href: mixUrl.main('/learning'), bigShow: false },
        // { title: `POW'ER云南`, type: 'power', href: mixUrl.zt('/poweryn'), bigShow: false },
        // { title: '直播', type: 'live', href: mixUrl.cq('/live'), bigShow: false, hot: true },
        // { title: '视频', type: 'video', href: mixUrl.main('/video'), bigShow: true }
        // { title: '活动', type: 'huodong', href: mixUrl.main('/huodong'), bigShow: true }
        // { title: `POWER上海`, type: 'power', href: mixUrl.zt(''), bigShow: false, img: tagPower }
        // { title: '火星云矿', type: 'mclouds', href: mixUrl.mclouds(), bigShow: false, img: tagMclouds }
        // { title: '火星云矿', type: 'mclouds', href: mixUrl.mclouds(), bigShow: false },
        // { title: '可可交易', type: 'cococoin', href: mixUrl.cococoin(), bigShow: false }
        // { title: '数据', type: 'data', href: mixUrl.main('/data'), bigShow: false }
        // { title: '知识库', type: 'knowledge', href: mixUrl.baike(), bigShow: true }
      ]
      setNavlist(nav)
    }, [])

    const searchShow = useCallback(() => {
        setSearch(!search)
        searchVal.current.focus()
    }, [search])
    const searchEnter = useCallback((event) => {
        if (event.keyCode && event.keyCode !== 13) return false

        let val = event.target.tagName.toLowerCase() !== 'input' ? searchVal.current.value : event.target.value
        if (trim(val) !== '') window.location.href = mixUrl.main(`/search/${encodeSearchKey(val)}`)
    }, [])

    /** @desc 注销 */
    const logout = useCallback(() => {
        clearLoginCookies()
        window.location.reload()
    }, [])

    const { dispatch } = props
    /** @desc 注册弹出 */
    // const registerPopup = useCallback(() => {
    //     dispatch(loginShowHide('register', true))
    // }, [])

    /** @desc 登录弹出 */
    const loginPopup = useCallback(() => {
        dispatch(loginShowHide('account', true))
    }, [])

    /** @desc 获取props */
    const { loginShow, renameShow } = props.userState
    const { isLogin, info } = props.userInfo

    const [location, setLocation] = useState({
        host: null,
        pathname: null,
        hostname: null
    })

    useEffect(() => {
        if (Cookies.get('marsbit_lang')) {
            setLanflag(Cookies.get('marsbit_lang'))
        }
    }, [])
    useEffect(() => {
        setLocation({
            host: window.location.host,
            pathname: window.location.pathname,
            hostname: window.location.hostname
        })

        // let posType = null
        // windowScroll(function () {
        //     if (scrollOffset().top >= 35 && posType !== 'fixed') {
        //         header.current.style.top = 0
        //         header.current.style.zIndex = 100

        //         posType = 'fixed'
        //     }

        //     if (scrollOffset().top < 35 && posType !== 'relative') {
        //         header.current.style.top = '35px'
        //         header.current.style.zIndex = 10

        //         posType = 'relative'
        //     }
        // })
    }, [])
    return [
        <div className="header-navigation" key="headerNavigation" ref={header}>
            <div className="content">
                <a href={mixUrl.main()} className="logo" title="MarsBit" target="_blank">
                    <img alt="MarsBit" src={logo} />
                </a>
                <div className="nav">{navlist.map(function (item, index) {
                    const wHost = location.host
                    const wPath = location.pathname
                    const env = process.env.NODE_ENV
                    let homelink = 'https://www.marsbit.cc'
                    if (wHost && env === 'production') {
                        homelink = 'https://www.' + wHost.split('.').slice(-2).join('.')
                    } else {
                        homelink = '/'
                    }
                    const isNews = mixUrl.news().indexOf(wHost) > -1 &&
                        wPath.indexOf('/feature') === -1 &&
                        wPath.indexOf('/flash') === -1 &&
                        wPath.indexOf('/author') === -1 &&
                        wPath.indexOf('/list/10000') === -1 &&
                        wPath.indexOf('/list/17') === -1 &&
                        wPath.indexOf('/list/6') === -1 &&
                        wPath.indexOf('/list/28') === -1 &&
                        wPath.indexOf('/list/37') === -1 &&
                        wPath.indexOf('/list/89') === -1 &&
                        wPath.indexOf('/list/90') === -1 &&
                        wPath.indexOf('/list/91') === -1
                    const isFlash = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/flash') > -1
                    const isFeature = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/feature') > -1
                    const isNewsFirst = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/28') > -1
                    const isExclusive = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/37') > -1
                    const isNewsTech = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/6') > -1
                    const isNewsPolicy = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/17') > -1
                    const isProject = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/89') > -1
                    const isIAndF = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/90') > -1
                    const isDepth = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/list/91') > -1
                    const isMp = mixUrl.news().indexOf(wHost) > -1 && wPath.indexOf('/author') > -1
                    const isToken = mixUrl.token().indexOf(wHost) > -1
                    const isLearn = mixUrl.main().indexOf(wHost) > -1 && wPath.indexOf('/learning') > -1
                    const isVideo = mixUrl.main().indexOf(wHost) > -1 && wPath.indexOf('/video') > -1
                    const isLive = mixUrl.main().indexOf(wHost) > -1 && wPath.indexOf('/live') > -1
                    const isHuodong = mixUrl.main().indexOf(wHost) > -1 && wPath.indexOf('/huodong') > -1
                    const active = (item.type === 'newsTech' && isNewsTech) ||
                        (item.type === 'newsPolicy' && isNewsPolicy) ||
                        (item.type === 'newsFirst' && isNewsFirst) ||
                        (item.type === 'exclusive' && isExclusive) ||
                        (item.type === 'project' && isProject) ||
                        (item.type === 'iandf' && isIAndF) ||
                        (item.type === 'depth' && isDepth) ||
                        (item.type === 'token' && isToken) ||
                        (item.type === 'news' && isNews) ||
                        (item.type === 'feature' && isFeature) ||
                        (item.type === 'flash' && isFlash) ||
                        (item.type === 'mp' && isMp) ||
                        (item.type === 'learn' && isLearn) ||
                        (item.type === 'video' && isVideo) ||
                        (item.type === 'live' && isLive) ||
                        (item.type === 'huodong' && isHuodong)
                    return <a
                        key={index}
                        className={`${active && 'active'} ${item.bigShow ? 'bigshow' : ''} ${item.hot ? 'hot' : ''}`}
                        style={{ position: 'relative' }}
                        href={item.type === 'home' ? homelink : item.href}
                        title={item.title}
                        target="_blank">
                        {item.title}
                        {item.img ? <img src={item.img} style={{ position: 'absolute', width: '90px', height: '40px', left: '0px', top: '20px' }}></img> : null}
                    </a>
                })}</div>
                <div className="nav-dropdown smallshow" style={{ display: 'none' }}>
                    <a className="nav-dropdown-btn"><span /><span /><span /></a>
                    <div className="nav-dropdown-box">{navlist.map(function (item, index) {
                        if (item.bigShow) {
                            return <a key={index} href={item.href} title={item.title} target="_blank">{item.title}</a>
                        }
                    })}</div>
                </div>
                <div className="search-login">
                    <div className="search-btn" onClick={searchShow}>
                        <input type="password" name="pass" style={{ display: 'none' }} />
                        <input type="text" value={t('search')} readOnly />
                        <span className="search-icon" />
                    </div>
                    {isLogin && (parseInt(info.realAuth) === 1 ? <a className="redirect-mars"
                        href={mixUrl.mp()}
                        target="_blank">
                        <em>{t('my_news')}</em>
                        {/* <span><img src={beta} alt="beta" /></span> */}
                        {/* 未登录用户不展示火星号相关内容 */}
                    </a> : (
                      <a className="redirect-mars"
                        href={mixUrl.mp()}
                        target="_blank">
                        <em>{t('open_column')}</em>
                        {/* <span><img src={beta} alt="beta" /></span> */}
                        {/* 未登录用户不展示火星号相关内容 */}
                    </a>
                    ))
                    }
                    <a className="app-download" href={mixUrl.main('/download', { hostname: `${location.host}` })} target="_blank">
                        <span>{t('downloadapp')}</span>
                        <div className="qrcode">
                            <img src={appDownloadQrcode} alt="下载MarsBit客户端" />
                            <p>{t('sao_downloadapp')}</p>
                        </div>
                    </a>
                    <div className="language-select"
                      onMouseEnter={() => setLanguflag(true)}
                      onMouseLeave={() => setLanguflag(false)}
                    >
                      <div className="language-select-img">
                        <img src={languageicon} alt=""/>
                      </div>
                      {languflag && <div className="language-select-list">
                        <div className={`language-select-list-item ${lanflag !== 'zh-TW' && 'selected-item'}`} onClick={() => changeLang('zh-CN')}>简体中文</div>
                        <div className={`language-select-list-item ${lanflag === 'zh-TW' && 'selected-item'}`} onClick={() => changeLang('zh-TW')}>繁体中文</div>
                      </div>}
                    </div>
                    <div className="register-login" style={{ display: !isLogin ? 'flex' : 'none' }}>
                        {/* <a className="register" onClick={registerPopup}>注册</a> */}
                        <a className="login" onClick={loginPopup}>{t('login')}</a>
                    </div>
                    <div className="user-info" style={{ display: isLogin ? 'flex' : 'none' }}>
                        <a
                            className="avatar"
                            title={decodeURI(info.nickName) || 'MarsBit'}
                            href={mixUrl.main(`/userCenter/${info.passportId}`)}>
                            <img src={info.iconUrl || defaultAvatar} alt={decodeURI(info.nickName) || 'MarsBit'} />
                        </a>
                        <div className="user-func">
                            <a href={mixUrl.main(`/userCenter/${info.passportId}`)} title={decodeURI(info.nickName)}>{decodeURI(info.nickName)}</a>
                            <a onClick={logout}>{t('loginout')}</a>
                        </div>
                    </div>
                </div>
                <div className={`search-con ${search ? 'show' : ''}`}>
                    <span className="search-icon" onClick={searchEnter} />
                    <input type="text" placeholder={t('input_please')} ref={searchVal} onKeyDown={searchEnter} />
                    <span className="close-icon" onClick={searchShow} />
                </div>
            </div>
        </div>,
        <div className={`search-mask ${search ? 'show' : ''}`} onClick={() => setSearch(!search)} key="searchMask" />,
        <div className="register-login-container" style={{ display: loginShow ? 'flex' : 'none' }} key="registerLogin">
            <RegisterLogin />
        </div>,
        <div className="register-login-container" style={{ display: renameShow ? 'flex' : 'none' }} key="renameBox">
            <RenameBox info={info} />
        </div>
    ]
}

Navigation.propTypes = {
    userInfo: object.isRequired,
    userState: object.isRequired
}

const mapStateToProps = (state) => {
    const login = state.multi.login
    return {
        userInfo: login.userInfo,
        userState: login.userState
    }
}

export default connect(mapStateToProps)(Navigation)
