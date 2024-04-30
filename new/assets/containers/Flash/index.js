import React, { useState, useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import AdUp from 'multiComps/AdUp'
import LoadMore from 'multiComps/LoadMore'
import { getFlashList } from 'multiRedux/actions/flash'
import Toast from 'multiComps/Toast'
import RightItemWrapper from 'multiComps/RightItemWrapper'
import RightNews from 'multiComps/RightNews'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
// import RightLive from 'multiComps/Home/RightLive'
import FlashListItem from 'multiComps/FlashListItem'
import { getAdImplant } from 'multiRedux/actions/public'
// import { Link } from 'react-router-dom'

import {
    isArray,
    windowScroll,
    elementOffset,
    windowOffset,
    scrollOffset,
    flashRecognize,
    flashTime,
    mixUrl
} from 'multiPublic/index'

const Flash = (props) => {
    const { t } = useTranslation()
    const { flashChannel, flashList, dispatch, login, flashImportant, /* hotNewsList, */ newsRankings, adImplant } = props
    const paramsObj = {
        currentPage: flashList.currentPage,
        pageSize: 20,
        channelId: flashChannel.id || 0,
        passportid: login.info.passportId || ''
    }
    const [params, setParams] = useState(paramsObj)
    useEffect(() => {
        setParams(paramsObj)
    }, [login])

    const loadType = useRef(false) // 点击切换频道为false、加载更多more
    const isLoading = useRef(false) // 是否在加载中
    const isMounted = useRef(false) // 组件是否已经挂载
    /** @desc 滚动加载更多 */
    useEffect(() => {
        const scrollFunc = windowScroll(function (res) {
            if (res !== 'down' || params.currentPage > 3 || isLoading.current) return false

            loadType.current = 'more'
            const $footerWrapper = document.getElementById('footerWrapper')
            if (scrollOffset().top + windowOffset().height > elementOffset($footerWrapper).top - windowOffset().height / 2) {
                loadMore()
            }
        })

        return () => {
            window.removeEventListener('scroll', scrollFunc, false)
        }
    }, [params, isLoading])

    /** @desc 加载更多 */
    const refreshTime = useRef(flashList.inforList[flashList.inforList.length - 1].createdTime)
    useEffect(() => {
        refreshTime.current = flashList.inforList[flashList.inforList.length - 1].createdTime
    }, [flashList])
    const loadMore = useCallback(() => {
        if (isLoading.current) return false
        setParams({
            ...params,
            currentPage: params.currentPage + 1,
            refreshTime: refreshTime.current
        })
    }, [params, isLoading, refreshTime])

    /** @desc 点击快讯频道 */
    const changeChannel = useCallback((channelId) => {
        if (isLoading.current) return false
        loadType.current = false
        setParams({
            ...params,
            currentPage: 1,
            channelId: channelId
        })
    }, [params, loadType, isLoading])

    /** @desc 获取快讯列表 */
    useEffect(() => {
        if (isMounted.current && !isLoading.current) {
            isLoading.current = true
            Promise.all([
                dispatch(getFlashList(params, loadType.current)).catch(function (err) {
                    console.log(err)
                    Toast.info('获取快讯列表错误')
                }),
                dispatch(getAdImplant([{
                    'adPlace': 12,
                    'secondPosition': params.channelId
                }, { 'adPlace': 5 }])).catch(function (err) {
                    console.log(err)
                    Toast.info('获取快讯广告列表错误')
                })
            ]).then(function (res) {
                isLoading.current = false
                if (res[0].code === 1) {
                    const list = res[0].obj.inforList
                    if (!isArray(list) || list.length === 0) {
                        Toast.info('暂无更多快讯')
                    }
                } else {
                    Toast.info(res[0].msg)
                }
            })
        } else {
            isMounted.current = true
        }
    }, [params, isLoading, isMounted])
    return [
        <div className="ad-flash-wrapper" key="adFlashWrapper" style={{ display: !adImplant['5'][0] ? 'none' : 'block' }}>
            <AdUp data={adImplant['5'][0] || []} />
        </div>,
        <div className="flash-notice-nav" key="flashNoticeNav">
            {/* <div className="nav-map">
                <a className="active">快讯</a>
                <Link to={`/notice`} target="_blank" >公告</Link>
                <a style={{ display: 'none' }}>微博/Twitter</a>
            </div> */}
        </div>,
        <div className="layout-main flash-list-wrapper" key="flashListWrapper">
            <div className="layout-left">
                <div className="flash-nav">{flashChannel.map(function (item, index) {
                    return <a
                        key={item.id}
                        className={parseInt(item.channelId) === parseInt(params.channelId) ? 'active' : ''}
                        datatype={item.channelId}
                        onClick={() => changeChannel(item.channelId)}>
                        {item.channelName}
                    </a>
                })}</div>
                <div className="flash-list-content">
                    {flashList.inforList.map(function (item, index) {
                        if (adImplant['12'].length === 0) {
                            return <FlashListItem item={item} serverTime={flashList.currentTime} key={item.id} />
                        }
                        return adImplant['12'].map((adItem, nIndex) => {
                            let adImgUrl = null
                            switch (adItem.useType) {
                                case 1:
                                    adImgUrl = adItem.url
                                    break
                                case 2:
                                    adImgUrl = adItem.url
                                    break
                                case 3:
                                    adImgUrl = mixUrl.news(`/newsdetail/${adItem.url}`)
                                    break
                                case 4:
                                    adImgUrl = mixUrl.news(`/list/${adItem.url}`)
                                    break
                                case 5:
                                    adImgUrl = mixUrl.news(`/feature/${adItem.url.split('/')[1]}`)
                                    break
                                case 6:
                                    adImgUrl = mixUrl.news(`/tags/${adItem.url}`)
                                    break
                                default:
                            }
                            let topOrder = parseInt(adItem.topOrder) === 0 ? parseInt(adItem.topOrder) + 1 : parseInt(adItem.topOrder)
                            if (topOrder === index) {
                                return <a className='flash-ad-list' target="_blank" href={adImgUrl} key={adItem.id}>
                                    <div className="item-icons">
                                        <div className="round" />
                                        <div className="time-left">{flashTime(item.createdTime, flashList.currentTime)}</div>
                                    </div>
                                    <h6>{adItem.title}</h6>
                                    <p>{adItem.description}</p>
                                    <span className="ad-span" style={{ display: `${adItem.useType === 1 ? 'block' : 'none'}` }}>广告</span>
                                </a>
                            }
                            if (nIndex === adImplant['12'].length - 1) {
                                return <FlashListItem item={item} serverTime={flashList.currentTime} key={item.id} />
                            }
                        })
                    })}
                </div>
                <LoadMore
                    onClick={loadMore}
                    style={{ display: (flashList.inforList.length === 0 || flashList.recordCount === flashList.inforList.length) ? 'none' : '' }}
                />

            </div>
            <div className="layout-right">
                <RightItemWrapper firstItem={true} title={t('flash_info')}>
                    {flashImportant.inforList && flashImportant.inforList.map(function (item, index) {
                        const titleContent = flashRecognize(item)
                        return <div className="flash-important-item" key={item.id}>
                            <h4>{flashTime(item.createdTime, flashList.currentTime)}</h4>
                            <a href={mixUrl.news(`/flash/${item.id}.html`)} target="_blank">
                                <h3>{titleContent.title}</h3>
                                <div className="animate-content">
                                    <div className="im-content">
                                        {titleContent.content}
                                    </div>
                                </div>
                            </a>
                        </div>
                    })}
                </RightItemWrapper>
                {/* <RightLive /> */}
                <RightDownloadBox />
                <RightNews data={newsRankings.inforList || []} title={t('24_hot_news')} />
            </div>
        </div>
    ]
}

const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        adUp: multi.adData[5] || [],
        login: multi.login.userInfo,
        flashList: multi.flash.flashList,
        hotNewsList: multi.news.hotNewsList,
        flashImportant: state.flash.flashImportant,
        flashChannel: state.flash.flashChannel,
        newsRankings: state.flash.newsRankings,
        adImplant: state.multi.adImplant
    }
}

export default connect(mapStateToProps)(Flash)
