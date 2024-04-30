import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewsListItem from '../NewsListItem'
import FlashListItem from '../FlashListItem'
import Toast from 'multiComps/Toast'
import { scrollOffset, elementOffset, isArray, windowOffset, windowScroll } from 'multiPublic'
import { getNewsHeadlines } from '../../../redux/actions/home'
import './index.scss'
export default () => {
    const isLoading = useRef(false) // 是否在加载中
    const paramObj = {
        currentPage: 1
    }
    const [params, setParams] = useState(paramObj)
    const dispatch = useDispatch()
    const { newsHeadlinesData } = useSelector((state) => ({
        newsHeadlinesData: state.home.newsHeadlinesData
    }))
    const [newsList, setNewsList] = useState(newsHeadlinesData)

    useEffect(() => {
        const scrollFunc = windowScroll((res) => {
            if (res !== 'down' || isLoading.current) return false

            const $btnMore = document.getElementById('btnMore')
            if (scrollOffset().top + windowOffset().height > elementOffset($btnMore).top - windowOffset().height / 2) {
                loadMore()
            }
        })
        return () => {
            window.removeEventListener('scroll', scrollFunc, false)
        }
    }, [params, isLoading, newsHeadlinesData])

    const loadMore = useCallback(() => {
        if (isLoading.current) return false

        isLoading.current = true
        let data = newsHeadlinesData.concat()
        let time = data && isArray(data) && data.length > 2 ? data[data.length - 1].publishTime : new Date().getTime()
        dispatch(getNewsHeadlines(time, 'isMore', true)).then(function (res) {
            if (res.code === 1) {
                isLoading.current = false
                let list = res.obj
                if (!isArray(list) || list.length === 0) {
                    Toast.info('暂无更多新闻')
                } else {
                    setParams({
                        ...params,
                        currentPage: params.currentPage + 1
                    })
                }
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取列表错误')
        })
    }, [params, isLoading])
    useEffect(() => {
        setNewsList(newsHeadlinesData)
    }, [newsHeadlinesData])

    return (
        <div className="news-box">
            <div className="list-box">
                {
                    newsList && newsList.map((item, index) => {
                        const itemList = item.infoObj
                        if (item.infoType === 'news') {
                            return <NewsListItem {...itemList} key={index} />
                        } else if (item.infoType === 'live') {
                            return <FlashListItem {...itemList} key={index} />
                        }
                    })
                }
            </div>
            <div className="flash-more-btn">
                <div className="btn-more" id="btnMore">加载更多</div>
            </div>
        </div>
    )
}
