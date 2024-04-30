import React from 'react'

import './index.scss'
import { mixUrl } from 'multiPublic'

export default (props) => {
    const {
        id, // id
        title, // 标题
        publishTime, // 时间
        coverPic, // 图片
        author, // 作者
        hotCounts // 播放数量
    } = props

    const imgUrl = coverPic ? JSON.parse(coverPic).pc : ''

    return (
        <a className="video-detail-right-recommend-item" href={mixUrl.main(`/video/detail/${id}/${publishTime}`)} target="_blank" title={title} >
            <div className="video-detail-right-recommend-item-left">
                <img className="video-detail-right-recommend-item-img" src={imgUrl} />
            </div>
            <div className="video-detail-right-recommend-item-right">
                <div className="video-detail-right-recommend-item-title">{title}</div>
                <div className="video-detail-right-recommend-item-text-box">
                    <div className="video-detail-right-recommend-item-text">
                        {author}
                    </div>
                    <div className="video-detail-right-recommend-item-text-line" />
                    <div className="video-detail-right-recommend-item-text">
                        {`播放量 ${hotCounts}`}
                    </div>
                </div>
            </div>
        </a>
    )
}
