import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { mixUrl } from 'multiPublic'

export default () => {
    const { t } = useTranslation()
    const { authorInfo, userInfo } = useSelector((state) => ({
        authorInfo: state.userCenter.authorInfo,
        userInfo: state.login.userInfo.info
    }), shallowEqual)

    return (
        <a className="user-center-join" href={mixUrl.mp()} target="_blank">
            <div className="user-center-join-box">
                <div className="user-center-join-text">
                    {userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId
                        ? authorInfo.vGrade !== undefined && authorInfo.role !== undefined && authorInfo.vGrade !== 0 && authorInfo.role === 1
                            ? t('usercenter_coming') : t('usercenter_immediate_entry')
                        : t('usercenter_immediate_entry')}
                    <br />
                    <span className="user-center-join-text-span">MarsBit {t('usercenter_column')}</span>
                </div>
            </div>
        </a>
    )
}
