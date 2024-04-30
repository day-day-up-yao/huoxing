import React, { useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import { arriveAtDom } from 'multiPublic'
import searchData from '../../../public/js/searchData'
import AuthorList from '../AuthorList'
// import ExcellentNewsList from '../ExcellentNewsList'
import FlashList from '../FlashList'
import NewsList from '../NewsList'

const { searchTabTypeEnum } = searchData()

export default (props) => {
    const { authorListData, livesListData, newsListData } = useSelector((state) => ({
        authorListData: state.search.authorListData,
        // excellentNewsListData: state.search.excellentNewsListData,
        livesListData: state.search.livesListData,
        newsListData: state.search.newsListData
    }), shallowEqual)
    const {
        setPageType // 更改界面类型
    } = props
    // console.log(newsListData)

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
        <div className="search-all-list">
            {/* <div className="search-all-list-num">
                搜索出 {authorListData.recordCount + excellentNewsListData.recordCount + livesListData.recordCount + newsListData.recordCount > 999
                    ? '999+'
                    : authorListData.recordCount + excellentNewsListData.recordCount + livesListData.recordCount + newsListData.recordCount} 个相关结果
            </div> */}
            {/* {excellentNewsListData.recordCount > 0 &&
                <div className="search-all-list-title" style={{ marginBottom: '20px' }}>
                    精选内容
                    <span className="search-all-list-title-num">({onCountChangeText(excellentNewsListData.recordCount)})</span>
                </div>
            }
            {excellentNewsListData.recordCount > 0 &&
                <ExcellentNewsList pageType={0} />
            }
            {excellentNewsListData.totalIndex > 1 &&
                <div className="search-all-list-btn"
                    onClick={() => {
                        arriveAtDom(0)
                        setPageType(searchTabTypeEnum.EXCELLENTNEWS)
                    }}
                >
                    查看更多精选
                </div>
            } */}
            {newsListData.recordCount > 0 &&
                <div className="search-all-list-title" style={{ marginBottom: '20px' }}>
                    新闻
                    {/* <span className="search-all-list-title-num">({onCountChangeText(newsListData.recordCount)})</span> */}
                </div>
            }
            {newsListData.recordCount > 0 &&
                <NewsList pageType={0} />
            }
            {newsListData.totalIndex > 1 &&
                <div className="search-all-list-btn"
                    onClick={() => {
                        arriveAtDom(0)
                        setPageType(searchTabTypeEnum.NEWS)
                    }}
                >
                    查看更多新闻
                </div>
            }
            {livesListData.recordCount > 0 &&
                <div className="search-all-list-title" style={{ marginBottom: '20px' }}>
                    快讯
                    <span className="search-all-list-title-num">({onCountChangeText(livesListData.recordCount)})</span>
                </div>
            }
            {livesListData.recordCount > 0 &&
                <FlashList pageType={0} />
            }
            {livesListData.totalIndex > 1 &&
                <div className="search-all-list-btn"
                    onClick={() => {
                        arriveAtDom(0)
                        setPageType(searchTabTypeEnum.FLASH)
                    }}
                >
                    查看更多快讯
                </div>
            }
            {authorListData.recordCount > 0 &&
                <div className="search-all-list-title" style={{ marginBottom: '20px' }}>
                    作者
                    <span className="search-all-list-title-num">({onCountChangeText(authorListData.recordCount)})</span>
                </div>
            }
            {authorListData.recordCount > 0 &&
                <AuthorList pageType={0} />
            }
            {authorListData.totalIndex > 1 &&
                <div className="search-all-list-btn"
                    onClick={() => {
                        arriveAtDom(0)
                        setPageType(searchTabTypeEnum.AUTHOR)
                    }}
                >
                    查看更多作者
                </div>
            }
        </div>
    )
}
