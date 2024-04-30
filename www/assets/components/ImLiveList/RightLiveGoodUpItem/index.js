import React from 'react'

import './index.scss'

import { mixUrl } from 'multiPublic'
import { Avatar, AuthorName } from 'multiComps/AuthorInfo'

export default (props) => {
    const {
        // iconUrl, // 头像
        nickName, // 名称
        introduce, // 简介
        passportId // 唯一ID
    } = props

    return (
        <div className="im-live-list-right-live-good-up-item">
            {/* <img className="im-live-list-right-live-good-up-item-img" src={iconUrl} title={nickName} alt={nickName} /> */}
            <Avatar className="im-live-list-right-live-good-up-item-img" authorInfo={props} />
            <div className="im-live-list-right-live-good-up-item-right">
                <AuthorName className="im-live-list-right-live-good-up-item-title" authorInfo={props} />
                <a className="im-live-list-right-live-good-up-item-text"
                    href={mixUrl.main(`/userCenter/${passportId}`)}
                    target="_blank"
                    title={nickName}
                >
                    {introduce}
                </a>
            </div>
        </div>
    )
}
