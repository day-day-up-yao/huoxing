import React from 'react'
import { renderRoutes } from 'react-router-config'
import { propsInherit } from '../../public/js/index'

import Header from './Header'
import Footer from './Footer'

import './index.scss'

const Layout = (props) => {
    const { route } = props
    let pathname = props.location.pathname

    return [
        <Header pathname={pathname} key="header"/>,
        <div className="layout-content-pc" key="layoutContent">
            {renderRoutes(route.routes, { ...propsInherit(props) })}
        </div>,
        <Footer key="footer"/>
    ]
}

export default Layout
