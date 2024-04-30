import React, { useEffect } from 'react'
import { mixUrl, windowScroll, scrollOffset, elementOffset } from '../../../public/'
import './index.scss'
import logo from './images/m-header-logo-blue.svg'
// import backPage from './images/m-header-back-prev-page-icon.png'
import Navigation from './Navigation'

const Header = () => {
    // 滚动
    useEffect(() => {
        const $share = document.getElementById('wTop')
        windowScroll(function (res) {
            if (scrollOffset().top > elementOffset($share).height) {
                $share.style.position = 'fixed'
                if (res === 'up') {
                    $share.className = 'm-header active'
                } else if (res === 'down') {
                    $share.className = 'm-header'
                }
            }
        })
    }, [])

    return <div id="wTop" className="m-header active">
        <div className="huoxing-top">
            {/* <a title="返回" href={mixUrl.m()} className="back-prev-page">
                <img src={backPage} alt="返回" />
            </a> */}
            <a title="MarsBit" className="logo" href={mixUrl.m()}>
                <img alt="MarsBit" src={logo} />
            </a>
            {/* <a href={mixUrl.m('/search')} className="search" /> */}
        </div>
        <Navigation />
    </div>
}

export default Header
