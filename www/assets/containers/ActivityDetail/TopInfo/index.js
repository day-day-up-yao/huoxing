import React, { useState, useEffect, useCallback } from 'react'

import './index.scss'
import { formatTime } from 'multiPublic'

export default (props) => {
    const {
        title,
        coverPic,
        sponsor,
        numPeople,
        connection,
        detailPlace,
        startTime,
        endTime,
        fee,
        url
    } = props
    const [shareCon, setShareCon] = useState('') // 由于使用window，且需要在didMount中生成。直接生成会出现client的div和server的div不匹配错误

    // 生成分享按钮事件
    const shareGenerate = useCallback(() => {
        const SocialShare = require('multiComps/SocialShare').default
        return <SocialShare
            url={window.location.href}
            title={title}
            sites={['qq', 'weibo', 'wechat']}
        />
    }, [])

    useEffect(() => {
        setShareCon(shareGenerate())
    }, [])

    return (
        <div className="activity-detail-top-info">
            <div className="activity-detail-top-info-wrap">
                <div className="activity-img">
                    <img src={coverPic !== '' ? JSON.parse(coverPic).pc : ''} title="" alt="" />
                </div>
                <div className="activity-right">
                    <div className="activity-message">
                        <h1>{title}</h1>
                        <div className="message-left">
                            <div className="sponsor">
                                <span>主办方：</span>
                                <p>{sponsor}</p>
                            </div>
                            {numPeople && numPeople !== 0
                                ? <div className="person-num">
                                    <span>活动人数：</span>
                                    <p>{`${numPeople}人`}</p>
                                </div>
                                : null
                            }
                            <div className="contact">
                                <span>联系方式：</span>
                                <p>{connection}</p>
                            </div>
                        </div>
                        <div className="message-right">
                            <div className="site">
                                <span>活动地点：</span>
                                <p>{detailPlace}</p>
                            </div>
                            <div className="time"><span>活动时间：</span>
                                <p>
                                    {parseInt(endTime) - parseInt(startTime) < 86400000
                                        ? formatTime(startTime, 'yy年MM月dd日')
                                        : `${formatTime(startTime, 'yy年MM月dd日')}-${formatTime(endTime, 'yy年MM月dd日')}`
                                    }
                                </p>
                            </div>
                            {fee !== ''
                                ? <div className="money">
                                    <span>费用：</span>
                                    <p>{fee}</p>
                                </div>
                                : null
                            }
                        </div>
                        {url !== ''
                            ? <a className="activityBtn" href={url} title="立即参与" target="_blank">立即参与</a>
                            : <div className="notActivityBtn" title="立即参与">立即参与</div>
                        }
                        <div id="shareBox">
                            <font>分享</font>
                            {typeof window !== 'undefined' && shareCon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
