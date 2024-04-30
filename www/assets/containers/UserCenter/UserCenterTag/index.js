import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { addComma } from 'multiPublic'

export default (props) => {
    const { t } = useTranslation()
    const {
        nowType, // 当前标签
        userCenterTagType, // 标签类型
        onBtnTypeClick // 获取当前标签
    } = props
    const { authorInfo, userInfo, authorAchievement, authorCollectList } = useSelector((state) => ({
        userInfo: state.login.userInfo.info,
        authorInfo: state.userCenter.authorInfo,
        authorCollectList: state.userCenter.authorCollectList,
        authorAchievement: state.userCenter.authorAchievement
    }), shallowEqual)
    // const myOrHers = userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId
    //     ? '我的'
    //     : '他的'
    const myOrHers = userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId
        ? ''
        : ''

    return (
        <div className="user-center-tag">
            <div className={`user-center-tag-box ${nowType === userCenterTagType.ARTICLE ? 'user-center-tag-box-active' : ''}`}
                onClick={() => onBtnTypeClick(userCenterTagType.ARTICLE)} >
                {`${myOrHers}${t('usercenter_article')}`}
                <div className="user-center-tag-box-span">{authorAchievement ? addComma(authorAchievement.newsCounts) : 0}</div>
            </div>
            <div className={`user-center-tag-box ${nowType === userCenterTagType.VIDEO ? 'user-center-tag-box-active' : ''}`}
                onClick={() => onBtnTypeClick(userCenterTagType.VIDEO)} >
                {`${myOrHers}${t('usercenter_vidio')}`}
                <div className="user-center-tag-box-span">{authorAchievement ? addComma(authorAchievement.videoCounts) : 0}</div>
            </div>
            <div className={`user-center-tag-box ${nowType === userCenterTagType.COLLECTION ? 'user-center-tag-box-active' : ''}`}
                onClick={() => onBtnTypeClick(userCenterTagType.COLLECTION)} >
                {`${myOrHers}${t('usercenter_collect')}`}
                <div className="user-center-tag-box-span">{authorCollectList ? addComma(authorCollectList.recordCount) : 0}</div>
            </div>
            <div className={`user-center-tag-box ${nowType === userCenterTagType.LIVE ? 'user-center-tag-box-active' : ''}`}
                onClick={() => onBtnTypeClick(userCenterTagType.LIVE)} >
                {`${myOrHers}${t('headernavfour')}`}
                <div className="user-center-tag-box-span">{authorAchievement ? addComma(authorAchievement.videoLiveCount) : 0}</div>
            </div>
        </div >
    )
}
