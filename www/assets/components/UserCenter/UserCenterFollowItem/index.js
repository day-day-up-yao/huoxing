import React from 'react'

import './index.scss'

import { Avatar, AuthorName } from 'multiComps/AuthorInfo'

export default (props) => {
    const { authorInfo } = props
    return (
        <div className="user-center-follow-item">
            <Avatar className="user-center-follow-item-img" authorInfo={authorInfo} />
            <div className="user-center-follow-item-right">
                <div className="user-center-follow-item-name-box">
                    <AuthorName className="user-center-follow-item-name" authorInfo={authorInfo} />
                </div>
                <div className="user-center-follow-item-infor">{authorInfo.introduce}</div>
            </div>
        </div>
    )
}
