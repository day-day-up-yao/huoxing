import React from 'react'

import './index.scss'

import { mixUrl, isArray, keyLight, formatPublishTime } from 'multiPublic'
import searchData from '../../../public/js/searchData'

const { searchKeyColor } = searchData()

export default (props) => {
    const {
        id, // ID
        title, // 标题
        coverPic, // 图片
        synopsis, // 简介
        author, // 作者
        publishTime, // 时间
        keywords, // 关联词组
        searchQuery // 当前搜索内容
    } = props

    const key = keywords && isArray(keywords) && keywords.length > 0 ? keywords : searchQuery
    return (
        <div className="search-news-item">
            <a title={title} target="_blank" href={mixUrl.news(`/${id}.html`)}>
                <div className="list-left">
                    <img alt={title} src={(!coverPic || !JSON.parse(coverPic).pc ? '' : JSON.parse(coverPic).pc)} />
                </div>
                <div className="list-right" style={{ width: '560px' }}>
                    <h1 className="headline" dangerouslySetInnerHTML={{ __html: keyLight(title, key, searchKeyColor) }} />
                    <h3 className="details" dangerouslySetInnerHTML={{ __html: keyLight(synopsis.replace('【GPT】', ''), key, searchKeyColor) }} />
                </div>
            </a>
            <div className="list-bottom index-mian clearfix">
                <p className="name">{author}</p>
                <p className="lock-time">{formatPublishTime(publishTime)}</p>
            </div>
            <div className="shadow"></div>
        </div>
    )
}
