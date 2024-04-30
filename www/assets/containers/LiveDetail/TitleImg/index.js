import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTime } from 'multiPublic/index'

import './index.scss'
class TitleImg extends Component {
    render () {
        const { liveObj } = this.props
        const pcBackground = !liveObj.room.webcast.mBackImage ? '' : liveObj.room.webcast.mBackImage
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
        if (pcBackground) {
            return <div className="title-page-wrapper-hasimg">
                <div className="title-page-wrapper-img">
                    <img src={pcBackground} alt="" />
                </div>
            </div>
        } else {
            return <div className="title-page-not-img">
                <h4><span>{statusText}</span>{title}</h4>
                <h6 style={{ display: !time ? 'none' : 'block' }}>直播时间 {formatTime(time, 'yyyy-MM-dd hh:mm')}</h6>
            </div>
        }
    }
}

const mapStateToProps = (state) => ({
    liveObj: state.live
})

export default connect(mapStateToProps)(TitleImg)
