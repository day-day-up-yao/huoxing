import { string } from 'prop-types'
import React from 'react'
import { stringJsonItem, formatPublishTime } from 'multiPublic/index'
import './index.scss'
// import SimpleImg from './SimpleImg'

const NewsListItem = (props) => {
    const { title, nickName, coverPic, publishTime, id, serverTime } = props
    const newsLink = `/newsdetail/${id}.html`
    const videoImg = stringJsonItem(coverPic, 'wap_small')
    return <div className="news-list-more">
        <a className="item-left" title={title} href={newsLink} target="_self" >
            <div className="title">{title}</div>
            <div className="list-text">
                <div className="bottom-left clearfix">
                    <div className="nick-name">{nickName}</div>
                    <div className="time"> <time>{formatPublishTime(publishTime, (serverTime && serverTime !== '') && serverTime)}</time></div>
                </div>
            </div>
            <div className="cover-img-sma-first">
                {/* <SimpleImg coverPic={videoImg} type="wap_small" /> */}
                <img src={videoImg} />
            </div>
        </a>
    </div>
}
NewsListItem.propTypes = {
    title: string.isRequired
}

export default NewsListItem
