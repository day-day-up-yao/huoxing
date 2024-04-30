import React from 'react'
import { connect } from 'react-redux'
import { formatTime } from 'multiPublic/index'

import './index.scss'

const TitleImg = ({ liveObj }) => {
    const pcBackground = !liveObj.room.webcast.backImage ? '' : liveObj.room.webcast.backImage
    const time = liveObj.room.webcast.beginTime
    const title = liveObj.room.webcast.title
    const status = liveObj.room.webcast.status
    const type = liveObj.type || status
    let statusText = ''
    switch (type) {
        case 5:
            statusText = '直播中'
            break
        case 1:
            statusText = '直播中'
            break
        case 0:
            statusText = '即将开始'
            break
        case 4:
            statusText = '直播结束'
            break
        case 2:
            statusText = '直播结束'
            break
        default:
    }
    return pcBackground
        ? <div className="m-title">
            <div className="haveImg">
                <div className="wrapper-img">
                    <img src={pcBackground} />
                </div>
                <div className="wrapper-headertitle" style={{ display: !time ? 'none' : 'block' }}>
                    <span className="headertitle-time">直播时间：</span>
                    <span className="headertitle-text">{formatTime(time, 'yyyy-MM-dd hh:mm')}</span>
                </div>
            </div>
        </div>
        : <div className="m-title">
            <div className="noImg">
                <div className="wrapper-header">
                    <div className="waper-title">{statusText}</div>
                    <div className="waper-text">{title}</div>
                </div>
                <div className="wrapper-time" style={{ display: !time ? 'none' : 'block' }}>
                    <span className="title">直播时间：</span>
                    <span className="time">{formatTime(time, 'yyyy-MM-dd hh:mm')}</span>
                </div>
            </div>
        </div>
}

const mapStateToProps = (state) => ({
    liveObj: state.live
})

export default connect(mapStateToProps)(TitleImg)
