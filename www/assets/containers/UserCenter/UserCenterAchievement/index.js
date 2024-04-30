import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { addComma } from 'multiPublic'
import icon1 from '../Image/userCenter-achievement-icon1.png'
import icon2 from '../Image/userCenter-achievement-icon2.png'
import icon3 from '../Image/userCenter-achievement-icon3.png'

export default () => {
    const { t } = useTranslation()
    const { authorAchievement } = useSelector((state) => ({
        authorAchievement: state.userCenter.authorAchievement
    }), shallowEqual)

    return (
        <div className="user-center-achievement">
            <div className="user-center-achievement-title">{t('usercenter_achievement')}</div>
            <div className="user-center-achievement-list">
                <div className="user-center-achievement-item">
                    <img className="user-center-achievement-item-icon" src={icon1} />
                    {t('usercenter_all_fb')}
                    <span className="user-center-achievement-item-span">{authorAchievement ? addComma(authorAchievement.newsCounts) : 0}</span>
                    {t('usercenter_all_author')}，
                    <span className="user-center-achievement-item-span">{authorAchievement ? addComma(authorAchievement.videoCounts) : 0}</span>
                    {t('usercenter_all_vedio')}
                </div>
                <div className="user-center-achievement-item">
                    <img className="user-center-achievement-item-icon" src={icon2} />
                    {t('usercenter_all_hot_more')}
                    <span className="user-center-achievement-item-span">{authorAchievement ? addComma(authorAchievement.newsHotCounts + authorAchievement.videoHotCounts) : 0}</span>
                </div>
                <div className="user-center-achievement-item">
                    <img className="user-center-achievement-item-icon" src={icon3} />
                    {t('usercenter_all_get')}
                    <span className="user-center-achievement-item-span">{authorAchievement ? addComma(authorAchievement.newsCommentCounts + authorAchievement.videoCommentCounts) : 0}</span>
                    {t('usercenter_all_pl')}
                </div>
            </div>
        </div>
    )
}
