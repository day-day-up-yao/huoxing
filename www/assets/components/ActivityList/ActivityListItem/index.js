import React from 'react'

import './index.scss'
import { formatTime, mixUrl } from 'multiPublic'

import siteIcon from '../Image/activity-list-item-site.png'
import timeIcon from '../Image/activity-list-item-time.png'

export default (props) => {
    const {
        id,
        currentTime,
        title,
        place,
        startTime,
        endTime,
        coverPic
    } = props

    const pic = coverPic ? JSON.parse(coverPic) : {}
    return (
        <a className="activity-list-item" href={mixUrl.main(`/huodong/${id}`)} >
            <div className={`activity-list-item-state ${currentTime > endTime ? 'over' : ''}`}>
                {currentTime > endTime ? '已结束' : '报名中'}
            </div>
            <img src={pic.pc ? pic.pc : ''} alt={title} title={title} />
            <p title={title}>
                {title}
            </p>
            <div className="activity-list-item-b">
                <p className="activity-list-item-site">
                    <img src={siteIcon} alt="" />
                    <span>{place}</span>
                </p>
                <p className="activity-list-item-time">
                    <img src={timeIcon} alt="" />
                    <span>
                        {parseInt(endTime) - parseInt(startTime) < 86400000
                            ? formatTime(startTime, 'MM月dd日')
                            : `${formatTime(startTime, 'MM月dd日')}-${formatTime(endTime, 'MM月dd日')}`
                        }
                    </span>
                </p>
            </div>
        </a>
    )
}
