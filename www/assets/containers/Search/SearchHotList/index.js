import React from 'react'
import './index.scss'
import { keyLight } from 'multiPublic'

const SearchHotList = (props) => {
    return <div className="hot-news-warp">
        <div className="hot-news-list clearfix">
            {
                props.cont.map((d, index) => {
                    let item = d.topic
                    let news = !d.contentList ? [] : d.contentList
                    const newsLink = `https://news.huoxing24.com/${item.id}.html`
                    return <div className="news-item" key={index}>
                        <div className="news-item-contain">
                            <a target="_blank" className="mews-item-top clearfix" href={`/hot/${item.tags}/${item.id}`}>
                                <img src={!item.newSmallPcImgSrc ? '../../img/default-img.svg' : item.newSmallPcImgSrc} alt={item.topicName}/>
                                <h3 dangerouslySetInnerHTML={{ __html: keyLight(item.topicName, props.searchKey) }}/>
                            </a>
                            {news.length > 0 &&
                                <div className="desc clearfix">
                                    <i className="round"></i>
                                    <a target="_blank" href={newsLink} dangerouslySetInnerHTML={{ __html: keyLight(news[0].title, props.searchKey) }}/>
                                </div>
                            }
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default SearchHotList
