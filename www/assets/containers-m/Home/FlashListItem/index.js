import { string } from 'prop-types'
import React from 'react'
import { formatPublishTime } from 'multiPublic/index'
import './index.scss'

const NewsListItem = (props) => {
    const { title, createdTime, id, content, serverTime } = props
    let startIndex = content.indexOf('【') === -1 ? 0 : content.indexOf('【') + 1
    let endIndex = content.indexOf('】') === -1 ? 0 : content.indexOf('】')
    let flashTitle = content.substring(startIndex, endIndex)
    let flashLink = `/flash/${id}.html`
    return <div className="news-list-more">
        <a title={title} href={flashLink} target="_self" >
            <div className="flashTitle">{flashTitle}</div>
            <div className="list-text">
                <div className="bottom-left clearfix">
                    <div className="nick-name txt_0A7FF2">快讯</div>
                    <div className="time">·<span> <time>{formatPublishTime(createdTime, (serverTime && serverTime !== '') && serverTime)}</time></span></div>
                </div>
            </div>
        </a>
    </div>
}
NewsListItem.propTypes = {
    title: string.isRequired
}

export default NewsListItem
