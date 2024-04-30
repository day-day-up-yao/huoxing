import React from 'react'
import './index.scss'

export default (props) => {
    const {
        time // 当前直播间状态
    } = props
    const timeZero = (num) => {
        if (Number(num) < 10) {
            return `0${num}`
        } else {
            return num
        }
    }
    return (
        <div className="im-live-detail-left-live-video-footer">
            <div className="im-live-detail-left-live-video-footer-text2">
                距直播开始：
                {(timeZero(time.d) && time.d !== 0) && <span>{time.d}天</span>}
                {timeZero(time.h) && <span>{time.h}时</span>}
                {timeZero(time.m) && <span>{time.m}分</span>}
                {timeZero(time.s) && <span>{time.s}秒</span>}
            </div>
        </div>
    )
}
