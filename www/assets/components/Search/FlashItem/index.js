import React from 'react'

import './index.scss'

import { mixUrl, formatPublishTime, isArray, keyLight } from 'multiPublic'
import searchData from '../../../public/js/searchData'

const { searchKeyColor } = searchData()

export default (props) => {
    const {
        id, // ID
        title, // 标题
        content, // 内容
        tag, // 标签
        url, // 连接
        images, // 图片
        imagesRemark, // 背景
        createdTime, // 时间
        keywords, // 关联词组
        searchQuery, // 当前搜索内容
        showListImg // 展示图片事件
    } = props

    const key = keywords && isArray(keywords) && keywords.length > 0 ? keywords : searchQuery
    return (
        <div className="search-flash-item">
            <div className="search-flash-item-wrap">
                <a target="_blank" href={mixUrl.news(`/flash/${id}.html`)}>
                    <h1 className={`${parseInt(tag) === 2 ? 'news-title import' : 'news-title'}`} dangerouslySetInnerHTML={{ __html: keyLight(title, key, searchKeyColor) }} />
                </a>
                <h2 className="news-detail" dangerouslySetInnerHTML={{ __html: keyLight(content, key, searchKeyColor) }}>
                    {url && <a rel="nofollow" title="查看原文" href={url} style="color: #0a7ff2" target="_blank"> 「查看原文」</a>}
                </h2>
                {images && <img style={{ cursor: 'pointer' }} alt={`${!imagesRemark ? title : imagesRemark}`} onClick={showListImg} src={images} />}
                <div className="time-left">
                    {formatPublishTime(createdTime)}
                </div>
            </div>
        </div>
    )
}
