import React from 'react'
// import { useTranslation } from 'react-i18next'
import { renderRoutes } from 'react-router-config'
import { propsInherit } from '../../public/js/index'

import Header from './Header'
import Footer from './Footer'

import './index.scss'

const Layout = (props) => {
    // const { i18n } = useTranslation()
    const { route } = props
    // let pathname = props.location.pathname
    return <div className="m-layout-container">
        <Header />
        <div className="m-layout-content">
            {renderRoutes(route.routes, { ...propsInherit(props) })}
        </div>
        <Footer/>
        {/* {!(langWhat(i18n.language) === 'ja') && <Footer/>} */}
    </div>
}

export default Layout
