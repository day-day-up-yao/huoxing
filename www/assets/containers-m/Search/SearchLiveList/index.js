import React from 'react'
import './index.scss'
import timeIcon from '../img/m-time.png'
import { formatTime, keyLight } from 'multiPublic'

const SearchLiveList = (props) => {
    return props.cont.map((item, index) => {
        if (!item.title) {
            item.content.replace(/【([^【】]+)】/g, function () {
                item.title = arguments[1]
            })
        }

        const liveLink = `https://flash.huoxing24.com/${item.id}.html`
        return <div className="lives-item" key={index}>
            <div className="lives-item-time">
                <img className="iconfont-time" src={timeIcon} />
                {formatTime(item.createdTime, 'yyyy-MM-dd hh:mm')}
            </div>
            <div className="lives-item-content">
                <p className="content-title"><a title={item.title} href={liveLink} dangerouslySetInnerHTML={{ __html: keyLight(item.title, props.searchKey) }}></a></p>
                <p className="content-msg" dangerouslySetInnerHTML={{ __html: keyLight(item.content, props.searchKey) }}></p>
            </div>
        </div>
    })
}

export default SearchLiveList
