import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import NewsListItem from 'multiComps/NewsListItem'
import NewsAdImgItem from 'multiComps/NewsAdImgItem'
import NewsAuthorItem from 'multiComps/NewsAuthorItem'
import NewsFlashItem from 'multiComps/NewsFlashItem'
import LoadMore from 'multiComps/LoadMore'
import Toast from 'multiComps/Toast'
import {
    isArray,
    windowScroll,
    elementOffset,
    windowOffset,
    scrollOffset
} from 'multiPublic'

import './index.scss'

import { getNewsHeadlines, getNewsMoreList } from '../../../redux/actions/home'
// import defaultImg from '../image/default-img.png'

// 头条ID
const headlinesId = 10002

export default () => {
    const { newsChannelIdData, newsHeadlinesData, newsTotalListData } = useSelector((state) => ({
        newsChannelIdData: state.home.newsChannelIdData,
        newsHeadlinesData: state.home.newsHeadlinesData,
        newsTotalListData: state.home.newsTotalListData
    }))

    // console.log(newsHeadlinesData)

    const dispatch = useDispatch()
    const [newsList, setNewsList] = useState(newsHeadlinesData) // 当前选中的列表
    const [nowTypeId, setNowTypeId] = useState(headlinesId) // 当前选中的列表ID
    const [idPageList, setIdPageList] = useState({}) // 各个列表当前页数
    const isLoading = useRef(false) // 是否在加载中

    useEffect(() => {
        if (Object.keys(idPageList).length > 0) return
        if (newsChannelIdData && newsChannelIdData.length) {
            let listData = newsChannelIdData.concat()
            let pageList = {}
            listData.map((item) => {
                pageList[item.channelId] = 1
            })
            setIdPageList(pageList)
        }
    }, [newsChannelIdData, idPageList])

    // 滚动加载更多
    useEffect(() => {
        const scrollFunc = windowScroll((res) => {
            let currentPage = idPageList[nowTypeId]
            if (res !== 'down' || currentPage > 3 || isLoading.current) return false

            const $footerWrapper = document.getElementById('footerWrapper')
            if (scrollOffset().top + windowOffset().height > elementOffset($footerWrapper).top - windowOffset().height / 2) {
                loadMore()
            }
        })
        return () => {
            window.removeEventListener('scroll', scrollFunc, false)
        }
    }, [isLoading, nowTypeId, idPageList, newsHeadlinesData])

    // 加载更多
    const loadMore = useCallback(() => {
        if (isLoading.current) return false

        isLoading.current = true
        if (nowTypeId === headlinesId) {
            let data = newsHeadlinesData.concat()
            let time = data && isArray(data) && data.length > 2 ? data[data.length - 1].publishTime : new Date().getTime()
            dispatch(getNewsHeadlines(time, 'isMore')).then(function (res) {
                isLoading.current = false
                if (res.code === 1) {
                    let list = res.obj
                    if (!isArray(list) || list.length === 0) {
                        Toast.info('暂无更多新闻头条')
                    } else {
                        let objList = idPageList
                        objList[nowTypeId] += 1
                        setIdPageList(objList)
                    }
                } else {
                    Toast.info(res.msg)
                }
            }).catch(function (err) {
                console.log(err)
                Toast.info('获取列表错误')
            })
        } else {
            let currPage = parseInt(newsTotalListData[nowTypeId].currentPage) + 1
            let pageSize = newsTotalListData[nowTypeId].pageSize
            let data = newsTotalListData[nowTypeId].inforList.concat()
            let lastTime = data && isArray(data) && data.length > 2 ? data[data.length - 1].publishTime : new Date().getTime()

            dispatch(getNewsMoreList(nowTypeId, currPage, pageSize, lastTime)).then(function (res) {
                isLoading.current = false
                if (res.code === 1) {
                    let list = res.obj.inforList
                    if (!isArray(list) || list.length === 0) {
                        Toast.info('暂无更多新闻')
                    } else {
                        let objList = idPageList
                        objList[nowTypeId] += 1
                        setIdPageList(objList)
                    }
                } else {
                    Toast.info(res.msg)
                }
            }).catch(function (err) {
                console.log(err)
                Toast.info('获取列表错误')
            })
        }
    }, [isLoading, idPageList, nowTypeId, newsHeadlinesData, newsTotalListData])

    // 点击切换类型按钮事件
    const onBtnTypeClick = useCallback((id) => {
        if (nowTypeId !== Number(id)) {
            setNowTypeId(Number(id))

            if (Number(id) === headlinesId) {
                setNewsList(newsHeadlinesData)
            } else {
                setNewsList(newsTotalListData[Number(id)].inforList)
            }
        }
    }, [nowTypeId, newsHeadlinesData, newsTotalListData])

    useEffect(() => {
        if (nowTypeId === headlinesId) {
            setNewsList(newsHeadlinesData)
        } else {
            let data = newsTotalListData[nowTypeId].inforList.concat()
            setNewsList(data)
        }
    }, [nowTypeId, newsHeadlinesData, newsTotalListData])

    return (
        <div className="left-news-list" style={{ display: newsChannelIdData.length > 0 ? 'block' : 'none' }}>
            <div className="left-news-list-tags">
                {
                    newsChannelIdData && newsChannelIdData.slice(0, 13).map((item, index) => {
                        return (
                            <div className={`left-news-list-tags-item ${nowTypeId === Number(item.channelId) ? 'active' : ''}`} onClick={() => onBtnTypeClick(item.channelId)} key={index}>
                                {item.channelName}
                            </div>
                        )
                    })
                }
            </div>
            <div className="block-style">
                <div className="news-list-content">
                    {
                        newsList && newsList.map((item, index) => {
                            if (nowTypeId === headlinesId) {
                                // 隐藏指定标签信息流内容
                                if (item.infoType === 'author' || item.infoType === 'notice') return
                            }

                            const itemList = nowTypeId === headlinesId ? item.infoObj : item

                            const arrTag = (!itemList.tags || typeof itemList.tags !== 'string') ? [] : itemList.tags.split(',')
                            let authCat = null
                            arrTag.map((itemTag) => {
                                switch (itemTag) {
                                    case '火星号精选':
                                        authCat = '火星号'
                                        break
                                    case '火星深度':
                                        authCat = '深度'
                                        break
                                    case '火星一线':
                                        authCat = '一线'
                                        break
                                    case '火星独家':
                                        authCat = '独家'
                                        break
                                    case '火星原创':
                                        authCat = '原创'
                                        break
                                    case '火星快译':
                                        authCat = '快译'
                                        break
                                    case '火星特约':
                                        authCat = '特约'
                                        break
                                }
                            })

                            const obj = {
                                authCat: authCat
                            }

                            if (nowTypeId === headlinesId && item.infoType === 'adImg') {
                                return <NewsAdImgItem {...itemList} key={index} />
                            } else if (nowTypeId === headlinesId && item.infoType === 'author') {
                                return <NewsAuthorItem listData={itemList} key={index} />
                            } else if (nowTypeId === headlinesId && item.infoType === 'live') {
                                return <NewsFlashItem {...itemList} key={index} />
                            } else {
                                if (item.infoType) {
                                    obj.infoType = item.infoType
                                }

                                return <NewsListItem {...itemList} {...obj} key={index} />
                            }
                        })
                    }
                </div>
                <div className="not-cont" style={{ display: newsList.length === 0 ? 'block' : 'none' }}>
                    <p>暂无内容</p>
                </div>
                <LoadMore style={{ display: newsList.length === 0 ? 'none' : 'block' }} onClick={() => { loadMore() }} />
            </div>
        </div >
    )
}
