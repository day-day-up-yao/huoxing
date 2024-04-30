import React from 'react'

import './index.scss'

import crownIcon from '../image/live_player_icon.png'

export default (props) => {
    const {
        title, // 标题
        crown // 显示皇冠图标
    } = props

    return (
        <div className="im-live-detail-right-live-box-title">
            {crown === undefined && <div className="im-live-detail-right-live-box-title-line"></div>}
            {crown !== undefined && <img className="im-live-detail-right-live-box-title-icon" src={crownIcon} />}
            <div className="im-live-detail-right-live-box-title-text">{title && title !== '' ? title : ''}</div>
        </div>
    )
}
