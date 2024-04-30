import React from 'react'

import './index.scss'

import { mixUrl } from 'multiPublic'

import IconStatus from './Image/im-live-list-item-status.gif'
import IconStatus2 from './Image/im-live-list-item-status2.png'

export default (props) => {
    const {
        itemType, // item样式 undefind.正常直播列表组件  top1.广场推荐位左侧大图 top2.广场推荐位左侧左侧小图 top3.广场推荐位新小图 right.首页右侧列表 myvideo.个人视频列表组件 mylive.个人直播组件
        roomId, // 房间ID
        status, // 播放状态 0.未直播 1.直播中 2.回放中
        popularity, // 观看人数
        coverPicUrl, // 背景图片
        // presenterList, // 主播人列表
        name, // 直播间名称
        id, // 视频ID（暂时只有视频列表组件）
        publishTime // 视频创建时间（暂时只有视频列表组件）
    } = props

    let playNum = popularity && popularity !== '' ? popularity : 0
    let playNumText = `${playNum} 人次`
    if (playNum > 1000000) {
        playNumText = `99.9万+  人次`
    } else if (playNum > 10000) {
        playNumText = `${(playNum / 10000).toFixed(1)}万 人次`
    }
    const href = itemType !== undefined && itemType === 'myvideo' ? mixUrl.main(`/video/detail/${id}/${publishTime}`) : mixUrl.main(`/liveshare/${roomId}`)
    // ?x-oss-process=image/format,webp/resize,w_200
    return (
        <a className={`im-live-list-item im-live-list-item-${itemType}`} href={href} target="_self">
            <div className="im-live-list-item-video">
                <img className="im-live-list-item-video-img" src={`${coverPicUrl}`} />
                {itemType !== undefined && itemType === 'myvideo' ? null
                    : <div className="im-live-list-item-video-state type-lt">
                        <div className={`im-live-list-item-video-state-box type-${status && status !== '' ? status : '0'}`}>
                            {status && status === 1 ? <img className="im-live-list-item-video-state-box-img" src={IconStatus} /> : (status && status === 0 ? '' : <img className="im-live-list-item-video-state-box-img" src={IconStatus2} />)}
                            {status && status === 1 ? '直播中' : (status && status === 2 ? '回放中' : '即将开始')}
                        </div>
                        {status && status !== 0 ? <div className="im-live-list-item-video-state-box type-pop">
                            {playNumText}
                        </div> : null}
                    </div>
                }
                {itemType === 'top1' || itemType === 'top2'
                    ? <div className="im-live-list-item-list-top-state">
                        <div className="im-live-list-item-list-top-title">
                            {name}
                        </div>
                    </div> : null
                }
            </div>
            {itemType === undefined || itemType === 'myvideo' || itemType === 'mylive' || itemType === 'top3'
                ? <div className="im-live-list-item-title">
                    {name}
                </div> : null
            }
        </a>
    )
}
