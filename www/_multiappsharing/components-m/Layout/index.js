import React from 'react'
import { renderRoutes } from 'react-router-config'
import { propsInherit } from '../../public/index'

import Header from './Header'
import Footer from './Footer'

import './index.scss'

const Layout = (props) => {
    const { route } = props
    let pathname = props.location.pathname
    return <div className="m-layout-container">
        <Header pathname={pathname}/>
        <div className="m-layout-content">
            {renderRoutes(route.routes, { ...propsInherit(props) })}
        </div>
        <Footer/>
    </div>
}

export default Layout
