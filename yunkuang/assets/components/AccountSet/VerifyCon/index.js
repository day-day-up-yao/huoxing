import React from 'react'

import linkimg from '../../../public/imgs/newedition/redesign/link_icons.png'

import './index.scss'

export default (props) => {
    const { icons, issure, onLink, title } = props
    return <>
        <div className={`verify-con ${issure && 'sure-ed'}`} onClick={() => {
            if (!issure) {
                onLink()
            }
        }}>
            <div className="verify-con-left">
                <img src={icons} alt=""/>
                <span>{title}</span>
            </div>
            {!issure && <div className="verify-con-right">
                <img src={linkimg} alt=""/>
            </div>}
        </div>
    </>
}
