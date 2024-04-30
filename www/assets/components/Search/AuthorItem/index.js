import React, { useCallback } from 'react'

import './index.scss'

import { Avatar } from 'multiComps/AuthorInfo'
import { mixUrl, isArray, keyLight } from 'multiPublic'
import searchData from '../../../public/js/searchData'

const { searchKeyColor } = searchData()

export default (props) => {
    const {
        authorInfo, // 作者数据
        searchQuery // 当前搜索内容
    } = props

    const key = authorInfo.keywords && isArray(authorInfo.keywords) && authorInfo.keywords.length > 0 ? authorInfo.keywords : searchQuery

    // 点击头像事件
    const onBtnClick = useCallback(
        () => {
            window.open(mixUrl.main(`/userCenter/${authorInfo.passportId}`))
        },
        [authorInfo]
    )

    return (
        <div className="search-author-item" onClick={() => onBtnClick()}>
            <Avatar className="search-author-item-head" authorInfo={authorInfo} />
            <div className="search-author-item-name" dangerouslySetInnerHTML={{ __html: keyLight(authorInfo.nickName, key, searchKeyColor) }}></div>
            {authorInfo.introduce && authorInfo.introduce !== '' &&
                <div className="search-author-item-text" dangerouslySetInnerHTML={{ __html: keyLight(authorInfo.introduce, key, searchKeyColor) }}></div>
            }
        </div>
    )
}
