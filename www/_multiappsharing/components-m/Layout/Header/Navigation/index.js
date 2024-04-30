import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import './index.scss'
import { mixUrl } from '../../../../public'
import search from '../images/m-search.svg'
import languageh5 from '../images/languageiconh5.png'
import useLang from '../../../../public/hooks/useLang'
const Navigation = (props) => {
    const { t } = useTranslation()
    const changeLang = useLang()
    const { channelsList } = props
    const [isShow] = useState(false)
    const [location, setLocation] = useState({
        host: null,
        pathname: null
    })

    const [langh5, setlangh5] = useState(false)
    const [lanflag, setLanflag] = useState()

    useEffect(() => {
      if (Cookies.get('marsbit_lang')) {
          setLanflag(Cookies.get('marsbit_lang'))
      }
  }, [])

    useEffect(() => {
        setLocation({
            host: window.location.host,
            pathname: window.location.pathname
        })
    }, [])
    // 应高是高度吧
    // useEffect(() => {
    //     if (channelsList.length === 0) {
    //         return
    //     }
    //     let p = document.getElementById('HeaderTaglistParent')
    //     let w = p.offsetWidth
    //     let currItem = document.getElementById('HeaderTagItem500')
    //     let currItemWidth = currItem.offsetWidth
    //     let currItemOffLeft = currItem.offsetLeft - currItem.scrollLeft
    //     let pOffLeft = p.scrollLeft
    //     let deffLeft = (currItemOffLeft - pOffLeft - w / 2 + currItemWidth / 2)
    //     p.scrollLeft = deffLeft
    // }, [channelsList])

    // 点击链接
    const onBtnTagClick = useCallback((item) => {
        if (item.url) {
            window.location.href = item.url
        } else {
            if (parseInt(item.channelId) === 0) {
                window.location.href = mixUrl.main()
            } else if (parseInt(item.channelId) === 1) {
                window.location.href = mixUrl.m('/flash/')
            } else {
                window.location.href = mixUrl.m(`/news/${item.channelId}`)
            }
        }
    }, [])

    const goOtherLink = useCallback((src) => {
        window.location.href = location.host + src
    })

    return <div className="m-navigation">
        <div className={`nav-down-warp ${isShow === true ? 'show' : ''}`}>
            <div className="nav-down-contain">
                <h3>所有栏目</h3>
                <ul>
                    {channelsList && channelsList.map((item, index) => {
                        const wHost = location.host
                        const wPath = location.pathname
                        const isFeature = mixUrl.m().indexOf(wHost) > -1 && wPath.indexOf('/feature') > -1
                        const active = (item.channelId === '500' && isFeature)
                        return <li id={`HeaderTagItem${item.channelId}`} className={active ? 'active' : ''} key={index} onClick={() => { onBtnTagClick(item) }}>
                            {item.channelName}
                        </li>
                    })}
                </ul>
            </div>
        </div>
        <div id="hd_wrap">
            <div id="hd" className="nav-list">
                <div className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={() => { goOtherLink('/') }}><a href="/" title="">{t('headerimportant')}</a></div>
                <div className={`nav-item ${location.pathname === '/flash/' ? 'active' : ''}`} onClick={() => { goOtherLink('/flash/') }}><a href="/flash/">{t('headernavtwo')}</a></div>
                <div className={`nav-item ${location.pathname === '/liveroom' ? 'active' : ''}`} onClick={() => { goOtherLink('/liveroom') }}><a href="/liveroom">{t('headernavfour')}</a></div>
                <div className={`nav-item ${location.pathname === '/feature' ? 'active' : ''}`} onClick={() => goOtherLink('/feature')}><a href="/feature">{t('headernavfive')}</a></div>
                <div className="searchBorder">
                    <a title="搜索" href="/search"><img alt="搜索" src={search}/></a>
                </div>
                <div className="language-h5">
                    <img alt="language" src={languageh5} onClick={() => setlangh5(!langh5)}/>
                    {langh5 && <div className="language-h5-list">
                      <div className={`language-h5-list-item ${lanflag !== 'zh-TW' && 'lang-h5-active'}`} onClick={() => changeLang('zh-CN')}>简体中文</div>
                      <div className={`language-h5-list-item ${lanflag === 'zh-TW' && 'lang-h5-active'}`} onClick={() => changeLang('zh-TW')}>繁体中文</div>
                    </div>}
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    channelsList: state.multi.header.channelsList
})
export default connect(mapStateToProps)(Navigation)
