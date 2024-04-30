import React from 'react'
import './index.scss'
import { formatTime, keyLight } from 'multiPublic'

const SearchNewsList = (props) => {
    return props.cont.map((item, index) => {
        return <div className="news-item" key={index}>
            <div className="news-item-content">
                <p className="content-title">
                    <a title={item.title} href={`/newsdetail/${item.id}.html`} dangerouslySetInnerHTML={{ __html: keyLight(item.title, props.searchKey) }}></a>
                </p>
                <p className="content-sup">
                    <span>{item.author}</span>
                    <span>{formatTime(item.createTime, 'yyyy-MM-dd hh:mm')}</span>
                </p>
            </div>
            <div className="news-item-img">
                <img src={`${JSON.parse(item.coverPic).wap_small}`} className="img-pic" alt={item.title} />
            </div>
        </div>
    })
}

export default SearchNewsList
