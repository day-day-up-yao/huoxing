import React, { useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import AuthorItem from '../../../components/Search/AuthorItem'

export default (props) => {
    const { authorListData } = useSelector((state) => ({
        authorListData: state.search.authorListData
    }), shallowEqual)
    const { searchQuery } = useParams() // url参数
    const {
        pageType // 0:全部; 1:新闻(标题、摘要和内容搜索); 2:快讯(标题和内容); 3:专栏作者; 4:专题(名称); 5:视频(名称)
    } = props

    // 更改搜索数目显示
    const onCountChangeText = useCallback(
        (num) => {
            if (parseInt(num) > 9999) {
                return '9999+'
            } else {
                return num
            }
        },
        []
    )

    return (
        <div className="search-author-list">
            {pageType !== 0 &&
                <div className="search-author-list-title">
                    作者
                    <span className="search-author-list-title-num">({onCountChangeText(authorListData.recordCount)})</span>
                </div>
            }
            <div className="search-author-list-wrap">
                {
                    authorListData && authorListData.inforList.length > 0 && authorListData.inforList.map((item, index) => {
                        return (
                            (pageType === 0 && index < 5) || pageType !== 0
                                ? <AuthorItem authorInfo={item} searchQuery={searchQuery} key={index} />
                                : null
                        )
                    })
                }
            </div>
        </div>
    )
}
