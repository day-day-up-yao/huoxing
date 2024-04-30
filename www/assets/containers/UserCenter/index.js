import React, { useState, useCallback } from 'react'

import './index.scss'

import UserCenterHeader from './UserCenterHeader'
import UserCenterJoin from './UserCenterJoin'
import UserCenterTag from './UserCenterTag'
import UserCenterFollowAndFans from './UserCenterFollowAndFans'
import UserCenterAchievement from './UserCenterAchievement'
import UserCenterList from '../UserCenter/UserCenterList'
import RightMpAuthor from '../Home/RightMpAuthor'

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])

// 标签类型
const userCenterTagType = {
    ARTICLE: 'article', // 文章
    VIDEO: 'video', // 视频
    COLLECTION: 'collection', // 收藏
    FOLLOW: 'follow', // 关注
    LIVE: 'live' // 直播
}

export default () => {
    const [nowType, setNowType] = useState(userCenterTagType.ARTICLE) // 当前标签

    // 点击标签切换事件
    const onBtnTypeClick = useCallback(
        (type) => {
            setNowType(type)
        },
        []
    )

    return (
        <div className="user-center-page">
            <div className="user-center-page-header">
                <div className="user-center-page-header-cont">
                    <div className="user-center-page-header-cont-left">
                        <UserCenterHeader />
                        <UserCenterTag nowType={nowType} userCenterTagType={userCenterTagType} onBtnTypeClick={onBtnTypeClick} />
                    </div>
                    <div className="user-center-page-header-cont-right">
                        <UserCenterJoin />
                    </div>
                </div>
            </div>
            <div className="user-center-page-main">
                <div className="user-center-page-main-left">
                    <UserCenterList oldType={nowType} userCenterTagType={userCenterTagType} />
                </div>
                <div className="user-center-page-main-right">
                    <UserCenterFollowAndFans userCenterTagType={userCenterTagType} onBtnTypeClick={onBtnTypeClick} />
                    <UserCenterAchievement />
                    <RightMpAuthor />
                </div>
            </div>
        </div>
    )
}
