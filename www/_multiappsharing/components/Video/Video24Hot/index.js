import React from 'react'
import './index.scss'
const Video24hotList = (props) => {
    return (
        <a className="video-24hot-list">
            <div className="list-img">
                <img src="" alt=""/>
                <span>14:23</span>
            </div>
            <div className="list-title">
                <h6 style={{ color: props.textColor ? props.textColor : '' }}>新宝骏7个月推4款10万元级别车型，智能网联能否新宝骏7个月推4款10万元级别车型，智能网联能否</h6>
                <div className="author-time"><p>蔚来汽车</p><span>3分钟前</span></div>
            </div>
        </a>
    )
}

export default Video24hotList
