import React from 'react'
import './index.scss'
import { formatPublishTime, keyLight } from 'multiPublic'

const SearchNewsList = (props) => {
    return props.cont.map((item, index) => {
        return <div className="index-news-list" key={index}>
            <a title={item.title} target="_blank" href={`https://news.huoxing24.com/${item.id}.html`}>
                <div className="list-left">
                    <img alt={item.title} src={(!item.coverPic || !JSON.parse(item.coverPic).pc ? 'https://static.huoxing24.com/images/2018/03/05/1520243882098653.svg' : JSON.parse(item.coverPic).pc)}/>
                </div>
                <div className="list-right" style={{ width: '560px' }}>
                    <h1 className="headline" dangerouslySetInnerHTML={{ __html: keyLight(item.title, props.searchKey) }}/>
                    <h3 className="details" dangerouslySetInnerHTML={{ __html: keyLight(item.synopsis.replace('【GPT】', ''), props.searchKey) }}/>
                </div>
            </a>
            <div className="list-bottom index-mian clearfix">
                <p className="name">{item.author}</p>
                <p className="lock-time">{formatPublishTime(item.publishTime)}</p>
            </div>
            <div className="shadow"></div>
        </div>
    })
}

export default SearchNewsList
