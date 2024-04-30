import React from 'react'
import { formatPublishTime } from 'multiPublic/index'
import { Link } from 'react-router-dom'
import './index.scss'

const NoticeList = (props) => {
    return <div className="notice-list">
        <h6>{props.title}</h6>
        {
            props.dataArr.map(item => {
                return <div className="item" key={item.id}>
                    <div className="clearfix">
                        <Link to={`/noticeDetail/${item.noticeId}`} target="_blank">
                            <p><img src={item.exchangeIconUrl} alt=""/>{item.exchangeSymbol}</p>
                            <span>{formatPublishTime(item.publishTime, '')}</span>
                        </Link>
                    </div>
                    <Link to={`/noticeDetail/${item.noticeId}`} target="_blank">{item.title}</Link>
                </div>
            })
        }
    </div>
}

export default NoticeList
