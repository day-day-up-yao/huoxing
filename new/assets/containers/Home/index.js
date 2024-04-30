import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'
import NewsList from '../../components/NewsList'
import RightNews from 'multiComps/RightNews'

import { mixUrl, isArray } from 'multiPublic/index'
import { getNewsList, get24hHotNews } from 'multiRedux/actions/news'
// import RightLive from 'multiComps/Home/RightLive'
import Toast from 'multiComps/Toast'

const NewsHome = (props) => {
    const { t } = useTranslation()
    /** @desc 获取props  */
    const { newsChannelId, match, /* hotNewsList, */ newsList, dispatch, hotNews24H } = props
    /** @desc 加载更多  */
    const lastNews = newsList.inforList.length !== 0 && newsList.inforList[newsList.inforList.length - 1]
    const [params, setParams] = useState({
        currentPage: newsList.currentPage + 1,
        pageSize: newsList.pageSize,
        channelId: match.params.channelId || 0,
        refreshTime: lastNews && lastNews.publishTime
    })
    const [isMore, setIsMore] = useState(true)
    const loadMore = useCallback(() => {
        dispatch(getNewsList(params, 'channel', 'more')).then(function (res) {
            if (res.code === 1) {
                const curPage = res.obj.currentPage
                const list = res.obj.inforList

                if (isArray(list) && list.length !== 0) {
                    setParams({
                        ...params,
                        currentPage: curPage + 1,
                        refreshTime: list[list.length - 1].publishTime
                    })
                } else {
                    Toast.info('暂无更多新闻')
                    setIsMore(false)
                }
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取首页新闻列表错误')
        })
    }, [params])
    useEffect(() => {
        // 获取24H热门
        dispatch(get24hHotNews({
            lastDays: 1,
            readCounts: 50,
            newsCounts: 6
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取24H热门新闻错误')
        })
    }, [])
    return [
        <div className="news-list-nav" key="newsListNav">
            <div className="content">
                {newsChannelId.slice(0, 17).map((item, index) => {
                    const active = match.params.channelId ? (parseInt(item.channelId) === parseInt(match.params.channelId) ? 'active' : '') : (index === 0 ? 'active' : '')
                    if (item.channelId !== 1) {
                        return <a
                            href={mixUrl.news(`/list/${item.channelId}`)}
                            className={active}
                            key={item.channelId}
                            target="_blank">
                            {item.channelName}
                        </a>
                    }
                })}
            </div>
        </div>,
        <div className="layout-main news-list-home" key="layoutMain">
            <div className="layout-left">
                <NewsList loadMore={loadMore} isMore={isMore} />
            </div>
            <div className="layout-right">
                <RightNews data={hotNews24H} ismore={false} title={t('24_hot_news')} />
                {/* <RightLive /> */}
            </div>
        </div>
    ]
}

const mapStateToProps = (state) => {
    const news = state.multi.news
    return {
        newsChannelId: news.newsChannelId,
        newsList: news.newsList,
        hotNewsList: news.hotNewsList,
        hotNews24H: news.hot24HNewsList.inforList
    }
}

export default connect(mapStateToProps)(NewsHome)
