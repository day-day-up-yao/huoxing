
import React from 'react'
import { mixUrl, stringJsonItem, formatPublishTime } from 'multiPublic/index'

const RelatedNewsItem = (props) => {
    const { item } = props
    const link = mixUrl.news(`/${item.id}.html`)
    let coverImg = item.coverPic

    return <a href={link} title={item.title} key={item.id}>
        <div className="title">{item.title}</div>
        <div className="list-text">
            <div className="time clearfix"><span>{formatPublishTime(item.publishTime)}</span></div>
        </div>
        <div className="cover-img-sma"><img src={stringJsonItem(coverImg, 'wap_small')} /></div>
    </a>
}

export default RelatedNewsItem
