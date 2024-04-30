import React from 'react'

import './index.scss'

import headerDef from 'multiPublic/img/avatar-default.jpg'

export default (props) => {
    const {
        iconUrl, // 头像
        nickName, // 名称
        introduce // 简介
    } = props

    return (
        <div className="im-live-detail-right-live-presenter-item">
            <div className="im-live-detail-right-live-presenter-item-header">
                <img className="im-live-detail-right-live-presenter-item-header-img" src={iconUrl && iconUrl !== '' ? iconUrl : headerDef} />
                <div className="im-live-detail-right-live-presenter-item-header-text">{nickName}</div>
            </div>
            <div className="im-live-detail-right-live-presenter-item-info">{introduce}</div>
        </div>
    )
}
