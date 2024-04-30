import React from 'react'

import { isMobile } from '../../../public/js/index'
import closeimg from '../../../public/imgs/h5img/other/closepage.png'

import './index.scss'

export default (props) => {
    const { title, link } = props
    return <>
        {isMobile() && <div className="login-top-operate">
            <div className="operate-close" onClick={() => {
                window.location.href = '/'
            }}>
                <img src={closeimg} alt=""/>
            </div>
            <a className="operate-right" href={link}>{title}</a>
        </div>}
    </>
}
