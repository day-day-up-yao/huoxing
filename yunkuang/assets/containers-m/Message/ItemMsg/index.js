import React from 'react'

import './index.scss'

export default (props) => {
    const { icon, title, desc, number, type } = props
    return <div className="message-item" onClick={() => {
        if (type !== 0) {
            window.location.href = `/msglist?msgtype=${type}`
        }
    }}>
        <div className="item-left">
            <img src={icon} alt=""/>
        </div>
        <div className="item-center">
            <div className="center-title">{title}</div>
            <div className="center-dsc">{desc}</div>
        </div>
        {number > 1 && <div className="item-right">{number}</div>}
    </div>
}
