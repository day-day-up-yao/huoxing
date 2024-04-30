import React from 'react'
import './index.scss'
import jplogo from '../../../public/imgs/newjplogo.jpg'

export default () => {
    return <div className="layout-header-pc-jp">
        <div className="content">
            <div className="content-logo">
                <img src={jplogo} alt=""/>
            </div>
        </div>
    </div>
}
