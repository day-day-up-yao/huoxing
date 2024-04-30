import React from 'react'

import './index.scss'
import gradeBlue from '../../LiveShare/LiveInfo/images/live-share-guest-blue.png'
import gradeYellow from '../../LiveShare/LiveInfo/images/live-share-guest-yellow.png'
import IconStatus from '../HotLiveroom/Image/im-live-list-item-status.gif'
import IconStatus2 from '../HotLiveroom/Image/im-live-list-item-status2.png'
import { formatTime } from 'multiPublic'

export default (props) => {
    const presenter = (props.presenterList && Array.isArray(props.presenterList) && props.presenterList[0]) || {}
    const presenterGrade = 'vGrade' in presenter && ((presenter.vGrade === 2 || presenter.vGrade === 3)
        ? gradeBlue
        : presenter.vGrade === 1
            ? gradeYellow
            : null)
    let playNum = props.pop.popularity ? props.pop.popularity : props.popularity
    const {
        name,
        status,
        beginTime
    } = props
    let playNumText = playNum
    if (playNum > 1000000) {
        playNumText = '99.9万+'
    } else if (playNumText > 10000) {
        playNumText = `${(playNumText / 10000).toFixed(1)}万`
    }

    return <div className="liveshare-m-info-box">
        <div className="liveshare-info-simple">
            <div className="video-title">
                <span className={`live-status im-item-status-${status && status === 2 ? 'finish' : (status && status === 1 ? 'living' : 'ready')}`}>
                    {status && status === 1 ? <img src={IconStatus} /> : (status && status === 2) ? <img src={IconStatus2} /> : ''}
                    <em>{status && status === 1 ? '直播中' : (status && status === 2 ? '回放中' : '即将开始')}</em>
                </span>
                <div className="title">{name}</div>
            </div>
            {status ? <div className="liveshare-info-presenter">
                <div className="presenter-info">
                    <div className="avatar"><img src={presenter.iconUrl}/></div>
                    <div className="name">{presenter.nickName}</div>
                    {presenterGrade && <div className="grade"><img src={presenterGrade}/></div>}
                </div>
                <div className="presenter-play-num">观看人次：<span>{playNumText}</span></div>
            </div> : <div className="live-time">直播时间：{formatTime(beginTime, 'yyyy-MM-dd hh:mm')}</div>}
        </div>
    </div>
}
