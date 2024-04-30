import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import { windowScroll, windowOffset, elementOffset, scrollOffset } from 'multiPublic'
import { getMultiSearchList } from '../../../redux/actions/search'
import searchData from '../../../public/js/searchData'
import TopType from '../TopType'
// import TopSort from '../TopSort'
import AllList from '../AllList'
import AuthorList from '../AuthorList'
// import ExcellentNewsList from '../ExcellentNewsList'
import FlashList from '../FlashList'
import NewsList from '../NewsList'
import NoData from '../NoData'

const { searchTabTypeEnum, searchSortTypeEnum } = searchData()

export default () => {
    const { searchQuery } = useParams()
    const { authorListData, livesListData, newsListData } = useSelector((state) => ({
        authorListData: state.search.authorListData,
        // excellentNewsListData: state.search.excellentNewsListData,
        livesListData: state.search.livesListData,
        newsListData: state.search.newsListData
    }), shallowEqual)
    console.log(newsListData)
    const dispatch = useDispatch()
    const [pageType, setPageType] = useState(0) // 当前选中的类别
    const [pageNum, setPageNum] = useState(1) // 当前页
    const [sortType, setSortType] = useState(searchSortTypeEnum.DESC) // 当前选中的排序
    const [isLoading, setIsLoading] = useState(false) // 是否正在请求数据
    const [isSortShow, setIsSortShow] = useState(false) // 是否显示排序组件

    /** @desc 请求搜索列表 */
    const getListData = useCallback(
        (obj) => {
            setIsLoading(true)

            let sendData = {
                q: searchQuery,
                page: 1,
                pageSize: 20,
                type: pageType === searchTabTypeEnum.EXCELLENTNEWS ? searchTabTypeEnum.NEWS : pageType,
                excellentFlag: pageType === searchTabTypeEnum.EXCELLENTNEWS ? 1 : 0
            }

            // if (sortType !== searchSortTypeEnum.DEFAULT) {
            //     sendData.order = sortType
            // }

            if (obj) {
                sendData = {
                    ...sendData,
                    ...obj
                }
            }
            dispatch(getMultiSearchList(sendData)).then((res) => {
                // console.log(res)
                if (res.code === 1) {
                    switch (pageType) {
                        case searchTabTypeEnum.ALL:
                            if (
                                // res.obj.ExcellentNews.recordCount > 0 ||
                                res.obj.News.recordCount > 0 ||
                                res.obj.Lives.recordCount > 0 ||
                                res.obj.Author.recordCount > 0
                            ) {
                                setIsSortShow(false)
                            } else {
                                setIsSortShow(false)
                            }
                            break
                        // case searchTabTypeEnum.EXCELLENTNEWS:
                        case searchTabTypeEnum.NEWS:
                        case searchTabTypeEnum.FLASH:
                        case searchTabTypeEnum.AUTHOR:
                            if (res.obj.recordCount > 0) {
                                setIsSortShow(false)
                            } else {
                                setIsSortShow(false)
                            }
                            break
                        default:
                            setIsSortShow(false)
                            break
                    }

                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                }
            })
        },
        [pageType, sortType, searchQuery]
    )

    // 监听页面向下滚动，加载下一页
    useEffect(() => {
        const scrollFunc = windowScroll((res) => {
            if (res !== 'down' || isLoading || pageType === searchTabTypeEnum.ALL) return false
            let endPage = 1
            const newPage = parseInt(pageNum) + 1
            switch (pageType) {
                // case searchTabTypeEnum.EXCELLENTNEWS:
                //     endPage = excellentNewsListData.totalIndex
                //     break
                case searchTabTypeEnum.FLASH:
                    endPage = livesListData.totalIndex
                    break
                case searchTabTypeEnum.NEWS:
                    endPage = newsListData.totalIndex
                    break
                case searchTabTypeEnum.AUTHOR:
                    endPage = authorListData.totalIndex
                    break
                default:
                    break
            }

            if (endPage < newPage) {
                return
            }

            const $contain = document.getElementById('searchPage')
            if (elementOffset($contain).height < scrollOffset().top + windowOffset().height) {
                getListData({ page: newPage })
                setPageNum(newPage)
            }
        })

        return () => {
            window.removeEventListener('scroll', scrollFunc, false)
        }
    }, [isLoading, pageType, pageNum])

    // 根据当前页面类型切换页面事件
    useEffect(() => {
        // getListData()
        setPageNum(1)
        setSortType(searchSortTypeEnum.DESC)
    }, [pageType])

    // 根据当前页面排序切换页面事件
    useEffect(() => {
        let obj = { page: 1 }

        // if (sortType !== searchSortTypeEnum.DEFAULT) {
        //     obj.order = sortType
        // }

        getListData(obj)
        setPageNum(1)
    }, [sortType])

    // 根据当前页面类型切换页面事件
    const nowTypeChangeDivShow = useCallback(
        (type) => {
            switch (type) {
                case searchTabTypeEnum.ALL:
                    if (
                        // excellentNewsListData.recordCount > 0 ||
                        newsListData.recordCount > 0 ||
                        livesListData.recordCount > 0 ||
                        authorListData.recordCount > 0
                    ) {
                        return <AllList setPageType={setPageType} />
                    } else {
                        return <NoData />
                    }
                // case searchTabTypeEnum.EXCELLENTNEWS:
                //     if (excellentNewsListData.recordCount > 0) {
                //         return <ExcellentNewsList />
                //     } else {
                //         return <NoData />
                //     }
                case searchTabTypeEnum.NEWS:
                    if (newsListData.recordCount > 0) {
                        return <NewsList />
                    } else {
                        return <NoData />
                    }
                case searchTabTypeEnum.FLASH:
                    if (livesListData.recordCount > 0) {
                        return <FlashList />
                    } else {
                        return <NoData />
                    }
                case searchTabTypeEnum.AUTHOR:
                    if (authorListData.recordCount > 0) {
                        return <AuthorList />
                    } else {
                        return <NoData />
                    }
                default:
                    return <AllList />
            }
        },
        [newsListData, livesListData, authorListData]
    )

    return (
        <div className="search-bottom-list" id="searchPage">
            <TopType
                pageType={pageType}
                setPageType={setPageType}
            />
            {pageType !== searchTabTypeEnum.AUTHOR && isSortShow
                ? <TopSort
                    sortType={sortType}
                    setSortType={setSortType}
                    pageType={pageType}
                />
                : null
            }
            {nowTypeChangeDivShow(pageType)}
        </div>
    )
}
