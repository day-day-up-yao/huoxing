import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

export default (props) => {
    const { t } = useTranslation()
    const {
        userCenterTagType, // 标签类型
        onBtnTypeClick // 获取当前标签
    } = props
    const { authorAchievement } = useSelector((state) => ({
        authorAchievement: state.userCenter.authorAchievement
    }), shallowEqual)

    return (
        <div className="user-center-follow-and-fans">
            <div className="user-center-follow-and-fans-box user-center-follow-and-fans-box-follow"
                onClick={() => onBtnTypeClick(userCenterTagType.FOLLOW)}>
                <div className="user-center-follow-and-fans-box-span">{t('usercenter_attention')}</div>
                <div className="user-center-follow-and-fans-box-text">{authorAchievement ? authorAchievement.authorLikeCounts : 0}</div>
            </div>
            <div className="user-center-follow-and-fans-line"></div>
            <div className="user-center-follow-and-fans-box">
                <div className="user-center-follow-and-fans-box-span">{t('usercenter_vermicelli')}</div>
                <div className="user-center-follow-and-fans-box-text">{authorAchievement ? authorAchievement.authorFollowCounts : 0}</div>
            </div>
        </div>
    )
}
