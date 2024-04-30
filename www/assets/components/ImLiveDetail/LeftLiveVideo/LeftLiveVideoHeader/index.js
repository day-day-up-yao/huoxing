import React from 'react'
import { formatTime } from 'multiPublic'

import './index.scss'

import { Avatar } from 'multiComps/AuthorInfo'
import typeIcon2 from '../../image/live_detail_type_2.gif'
import popIcon from '../../image/live_detail_pop.png'
import warningIcon from '../../image/live-tip-warning.png'

export default (props) => {
    const {
        status, // 当前直播状态  0即将开始 1直播中 2回放中
        name, // 直播间标题
        type2, // 直播间分类
        beginTime, // 直播时间
        presenterList, // 直播主持人列表
        popularity, // 初始观看人数
        pop, // 观看人次列表
        onBtnGetTipAddClick // 点击举报按钮事件
    } = props

    let playNum = pop.popularity ? pop.popularity : (popularity && popularity !== 0 ? popularity : 0)
    let playNumText = playNum
    if (playNum > 1000000) {
        playNumText = `99.9万+`
    } else if (playNum > 10000) {
        playNumText = `${(playNum / 10000).toFixed(1)}万`
    }

    return (
        <div className="im-live-detail-left-live-video-header">
            <Avatar className="im-live-detail-left-live-video-header-img" authorInfo={presenterList[0]} />
            <div className="im-live-detail-left-live-video-header-info">
                <div className="im-live-detail-left-live-video-header-top-box">
                    <div className="im-live-detail-left-live-video-header-top-left">
                        {status !== undefined && status === 0 && <div className="im-live-detail-left-live-video-header-icon im-live-detail-left-live-video-header-type1">即将开始</div>}
                        {status !== undefined && status === 1 && <div className="im-live-detail-left-live-video-header-icon im-live-detail-left-live-video-header-type2">
                            <img src={typeIcon2} style={{ height: '16px', marginRight: '4px' }} />
                            直播中
                        </div>}
                        {status !== undefined && status === 2 && <div className="im-live-detail-left-live-video-header-icon im-live-detail-left-live-video-header-type3">回放中</div>}
                        {name && name !== '' && <div className="im-live-detail-left-live-video-header-title" title={name}>{name}</div>}
                        {type2 && type2 !== '' && <div className="im-live-detail-left-live-video-header-title-sp">{type2}</div>}
                    </div>
                    <div className="im-live-detail-left-live-video-header-top-text">
                        <img className="im-live-detail-left-live-video-header-top-text-icon" src={popIcon} />
                        {`观看人次：${playNumText}`}
                    </div>
                </div>
                <div className="im-live-detail-left-live-video-header-bottom-box">
                    <div className="im-live-detail-left-live-video-header-bottom-left">
                        {name && name !== '' && <div className="im-live-detail-left-live-video-header-bottom-text">{`主播：${presenterList && presenterList.length > 0 && presenterList[0].nickName !== '' ? presenterList[0].nickName : ''}`}</div>}
                        {beginTime && beginTime !== '' && <div className="im-live-detail-left-live-video-header-bottom-text">{`直播时间：${formatTime(beginTime, 'yyyy-MM-dd hh:mm')}`}</div>}
                    </div>
                    <div className="im-live-detail-left-live-video-header-bottom-right" onClick={() => onBtnGetTipAddClick()}>
                        <img className="im-live-detail-left-live-video-header-bottom-right-icon" src={warningIcon} />
                        举报
                    </div>
                </div>
            </div>
        </div >
    )
}
