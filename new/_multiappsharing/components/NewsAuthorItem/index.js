import React from 'react'
// import { mixUrl } from '../../public/index'

import './index.scss'

export default (props) => {
    const {
        listData // 作者数据
    } = props

    return (
        <div className="news-author-item">
            {
                listData && listData.map((item, index) => {
                    return (
                        <a className="news-author-item-one" href={`/userCenter/${item.passportId}`} target='_blank' key={index}>
                            <img className="news-author-item-img" src={item.iconUrl} />
                            <div className="news-author-item-title">{item.nickName}</div>
                            <div className="news-author-item-text">{item.introduce}</div>
                        </a>
                    )
                })
            }
        </div>
    )
}
