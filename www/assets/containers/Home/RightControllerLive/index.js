import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import { formatTime, isThisYear, mixUrl } from 'multiPublic'

export default () => {
    const { controllerLiveData } = useSelector((state) => ({
        controllerLiveData: state.home.controllerLiveData
    }), shallowEqual)

    return (
        <div className="home-right-controller-live">
            <a className="home-right-controller-live-title" href={mixUrl.main(`/live`)} target="_blank">
                MarsBit Live
                <div className="home-right-controller-live-arrow"></div>
            </a>
            {controllerLiveData && controllerLiveData.slice(0, 2).map((item, index) => {
                return (
                    <a className="home-right-controller-live-item" href={mixUrl.main(`/live/${item.roomId}`)} target="_blank" key={index}>
                        <div className="home-right-controller-live-item-left">
                            <img className="home-right-controller-live-item-img" src={item.coverPicUrl} />
                            <div className={`home-right-controller-live-item-status type-${item.status || '0'}`}>
                                {item.status === 1 ? '直播中' : (item.status === 2 ? '回放中' : '即将开始')}
                            </div>
                        </div>
                        <div className="home-right-controller-live-item-right">
                            <div className="home-right-controller-live-item-title">
                                {item.name}
                            </div>
                            <div className="home-right-controller-live-item-time">
                                开播时间：
                                <span>{formatTime(item.beginTime, isThisYear(item.beginTime) ? 'MM-dd hh:mm' : 'yyyy-MM-dd hh:mm')}</span>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
