import React from 'react'
import './index.scss'
import { flashTime, flashRecognize, keyLight } from 'multiPublic'

const SearchFlashList = (props) => {
    return <ul id="liveNewsContain" className="flash-news-list">
        {
            props.cont.map((item, index) => {
                const recognize = flashRecognize(item)
                const title = recognize.title
                const content = recognize.content
                const liveLink = `https://flash.huoxing24.com/${item.id}.html`
                return <li className="flash-news" key={index}>
                    <div className="news-item">
                        <div className="item-icons">
                            <div className="round"></div>
                            <div className="time-left">
                                <span>{flashTime(item.createdTime)}</span>
                            </div>
                        </div>
                        <a className="" target="_blank" href={liveLink}>
                            <h1 className={`${parseInt(item.tag) === 2 ? 'news-title import' : 'news-title'}`} dangerouslySetInnerHTML={{ __html: keyLight(title, props.searchKey) }}/>
                        </a>
                        <h2 className="news-detail" data-id={item.id} dangerouslySetInnerHTML={{ __html: keyLight(content, props.searchKey) }}>
                            {item.url && <a rel="nofollow" title="查看原文" href={item.url} style="color: #0a7ff2" target="_blank"> 「查看原文」</a>}
                        </h2>
                        {item.images && <img alt={`${!item.imagesRemark ? title : item.imagesRemark}`} onClick={props.showListImg} src={item.images}/>}
                    </div>
                </li>
            })
        }
    </ul>
}

export default SearchFlashList
