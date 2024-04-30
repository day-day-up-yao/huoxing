import React, { useEffect, useMemo, useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { propsInherit, formatTime } from '../../public/index'
// import Cookies from 'js-cookie'

import Header from './Header'
import Footer from './Footer'
// import HelpSlide from './HelpSlide'
// import RightDownImg from './RightDownImg'
import littleimg from '../../public/img/littienaga.png'
import nagalogobig from '../../public/img/nagalogobig.png'

import './index.scss'

const Layout = (props) => {
    const { route } = props
    let pathname = props.location.pathname
    const [nagaflag, setNagaflag] = useState(false)

    // 2020年4月4号全站变灰悼念活动
    useEffect(() => {
        if (formatTime(Date.parse(new Date()), 'yyyy-MM-dd') === '2020-04-04') {
            document.body.style.filter = 'grayscale(100%)'
            document.body.style['-webkit-filter'] = 'grayscale(100%)'
        }
    }, [])

    const nageLink = useMemo(() => {
      return <div className="layout-naga">
        <div className="layout-naga-img" onMouseEnter={() => setNagaflag(true)} onMouseLeave={() => setNagaflag(false)} onClick={() => {
          window.open('https://www.naga.io')
        }}>
          {nagaflag ? (
            <div className="layout-naga-img-big">
              <img src={nagalogobig} alt=""/>
              <p>Discover The Best Web3 Gaming</p>
            </div>
          ) : (
            <div className="layout-naga-img-little">
              <img src={littleimg} alt=""/>
            </div>
          )}
        </div>
      </div>
    }, [nagaflag])

    return [
        <Header pathname={pathname} key="header"/>,
        <div className="layout-content" key="layoutContent">
            {/* <RightDownImg/> */}
            {nageLink}
            {renderRoutes(route.routes, { ...propsInherit(props) })}
        </div>,
        <Footer key="footer"/>
    ]
}

export default Layout
