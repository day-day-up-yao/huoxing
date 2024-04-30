import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { propsInherit, formatTime } from 'multiPublic/index'
// import Cookies from 'js-cookie'

// import Header from './Header'
// import Footer from './Footer'
// import HelpSlide from './HelpSlide'
// import RightDownImg from './RightDownImg'

import './index.scss'

const NotLayout = (props) => {
    const { route } = props
    // let pathname = props.location.pathname

    // 2020年4月4号全站变灰悼念活动
    useEffect(() => {
        if (formatTime(Date.parse(new Date()), 'yyyy-MM-dd') === '2020-04-04') {
            document.body.style.filter = 'grayscale(100%)'
            document.body.style['-webkit-filter'] = 'grayscale(100%)'
        }
    }, [])

    return [
        // <Header pathname={pathname} key="header"/>,
        <div className="notlayout-content" key="layoutContent">
            {/* <RightDownImg/> */}
            {renderRoutes(route.routes, { ...propsInherit(props) })}
        </div>
        // <Footer key="footer"/>
    ]
}

export default NotLayout
