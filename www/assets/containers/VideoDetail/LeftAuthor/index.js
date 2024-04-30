import React, { useState, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import { mixUrl, formatTime, stringArray, stringJsonItem, encodeSearchKey } from 'multiPublic'
import ArrowIcon from '../Image/video_author_arrow.png'
import VBlueIcon from '../Image/video_author_blue.svg'
import VOrangeIcon from '../Image/video_author_orange.svg'

export default () => {
    const { videoDetail } = useSelector((state) => ({
        videoDetail: state.video.videoDetail
    }), shallowEqual)
    const [isOpen, setIsOpen] = useState(false) // 是否展开简介

    // 点击展开按钮事件
    const onBtnOpenClick = useCallback(
        () => {
            setIsOpen(!isOpen)
        },
        [isOpen]
    )

    return (
        <div className="video-detail-left-author">
            <div className="video-detail-left-author-title">{videoDetail.current.title}</div>
            <a className="video-detail-left-author-header-box" href={mixUrl.main(`/userCenter/${videoDetail.current.createdBy}`)} target="_blank">
                <img className="video-detail-left-author-header-img" src={videoDetail.current.iconUrl} alt={videoDetail.current.nickName} />
                <div className="video-detail-left-author-header-text">{videoDetail.current.nickName}</div>
                {videoDetail.current.vGrade && parseInt(videoDetail.current.vGrade) === 1 && <img className="video-detail-left-author-header-icon" src={VOrangeIcon} />}
                {videoDetail.current.vGrade && parseInt(videoDetail.current.vGrade) === 2 && <img className="video-detail-left-author-header-icon" src={VBlueIcon} />}
                {videoDetail.current.vGrade && parseInt(videoDetail.current.vGrade) === 3 && <img className="video-detail-left-author-header-icon" src={VBlueIcon} />}
                <div className="video-detail-left-author-header-text">{`发布于${formatTime(videoDetail.current.publishTime, 'yyyy年MM月dd日 hh:mm')} · ${videoDetail.current.hotCounts} 播放`}</div>
            </a>
            <div className="video-detail-left-author-content-box">
                <div className="video-detail-left-author-content-text" style={{ display: isOpen ? 'block' : '-webkit-box' }}>{videoDetail.current.content}</div>
                {videoDetail.current.content && videoDetail.current.content.length >= 46 &&
                    <div className="video-detail-left-author-content-btn" onClick={onBtnOpenClick}>
                        {isOpen ? '收起' : '展开'}
                        <img className="video-detail-left-author-content-btn-img" src={ArrowIcon} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                }
            </div>
            <div className="video-detail-left-author-tag-box">
                {videoDetail.current.tagsV2 && stringArray(videoDetail.current.tagsV2).length !== 0 && stringArray(videoDetail.current.tagsV2).map((item, index) => {
                    if (index >= 3 || !item.name) return false
                    const symbol = stringJsonItem(item.name, 'symbol')
                    const fullname = stringJsonItem(item.name, 'full_name')
                    const link = ((item.type === 3 || symbol === '') && mixUrl.news(`/tags/${encodeSearchKey(item.name)}`)) || mixUrl.main(`/marketsDetail/${fullname}/${symbol}`)
                    const name = ((item.type === 3 || fullname === '') && item.name) || fullname
                    return (
                        <a className="video-detail-left-author-tag-item" key={index} title={item.name} href={link} target="_blank">
                            {name}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
