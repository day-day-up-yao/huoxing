import React from 'react'

import './index.scss'

import tvIcon from '../../image/live_detail_tv.png'

export default (props) => {
    const {
        status, // 当前直播间状态
        url, // 连接地址
        text, // 文字说明
        countTime // 倒计时 时间
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
            <div className="im-live-detail-left-live-video-footer-box">
                <img className="im-live-detail-left-live-video-footer-img" src={tvIcon} />
                {url && url !== '' && <a className="im-live-detail-left-live-video-footer-text" title={text} href={url} target="_blank" >{`直播合作：${text}`}</a>}
            </div>
            {status !== undefined && status === 0 && <div className="im-live-detail-left-live-video-footer-box">
                {countTime.d === 0 && countTime.h === 0 && countTime.m === 0 && countTime.s === 0
                    ? <div className="im-live-detail-left-live-video-footer-text">主播马上就到，敬请期待</div>
                    : <div className="im-live-detail-left-live-video-footer-text">距开播预计还剩</div>}
                {countTime.d === 0 && countTime.h === 0 && countTime.m === 0 && countTime.s === 0 ? null
                    : <div className="im-live-detail-left-live-video-footer-time">
                        {timeZero(countTime.d)}
                        <span className="im-live-detail-left-live-video-footer-time-sp">天</span>
                        {timeZero(countTime.h)}
                        <span className="im-live-detail-left-live-video-footer-time-sp">时</span>
                        {timeZero(countTime.m)}
                        <span className="im-live-detail-left-live-video-footer-time-sp">分</span>
                        {timeZero(countTime.s)}
                        <span className="im-live-detail-left-live-video-footer-time-sp">秒</span>
                    </div>}
            </div>}
        </div>
    )
}
