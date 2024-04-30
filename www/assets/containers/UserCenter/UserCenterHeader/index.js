import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { mixUrl } from 'multiPublic'
import { Avatar, AuthorName, AuthorType } from 'multiComps/AuthorInfo'
import amendIcon from '../Image/userCenter-change-amend.png'
import passwordIcon from '../Image/userCenter-change-password.png'

export default () => {
    const { t } = useTranslation()
    const { userInfo, authorInfo } = useSelector((state) => ({
        userInfo: state.login.userInfo.info,
        authorInfo: state.userCenter.authorInfo
    }), shallowEqual)
    const [myOrHers, setMyOrHers] = useState(false) // 是否是本人浏览

    useEffect(() => {
        const myOrHer = userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId
        setMyOrHers(myOrHer)
    }, [userInfo, authorInfo])

    return (
        <div className="user-center-header">
            <Avatar className="user-center-header-img" authorInfo={authorInfo} />
            <div className="user-center-header-right">
                <div className="user-center-header-name-box">
                    <AuthorName className="user-center-header-name" authorInfo={authorInfo} />
                    <AuthorType className="user-center-header-author-type" authorInfo={authorInfo} />
                </div>
                <div className="user-center-header-infor">{authorInfo.introduce}</div>
            </div>
            {myOrHers && <a className="user-center-header-data-edition" href={mixUrl.main(`/compile/portrait`)}>
                <img src={amendIcon} alt="" />
                {t('usercenter_author_info')}
            </a>}
            {myOrHers && <a className="user-center-header-change-password" href={mixUrl.main(`/compile/password`)}>
                <img src={passwordIcon} alt="" />
                {t('usercenter_change_password')}
            </a>}
        </div>
    )
}
