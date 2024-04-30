import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { isArray } from 'multiPublic'
import NewsListItem from 'multiComps/NewsListItem'
import LoadMore from 'multiComps/LoadMore'
import UserCenterFollowItem from '../../../components/UserCenter/UserCenterFollowItem'
import ImLiveListItem from 'multiComps/Home/RightLive/ImLiveListItem'
import {
    getAuthorShowcolumnlist,
    getAuthorVideolist,
    getAuthorCollectlist,
    getAuthorFollowList
} from '../../../redux/actions/userCenter'
import { getRoomLiveList } from '../../../redux/actions/live'

export default (props) => {
    const { t } = useTranslation()
    const {
        oldType, // 当前标签
        userCenterTagType // 标签类型
    } = props
    const { authorNewsList, authorVideoList, authorCollectList, authorFollowList, authorAchievement, authorInfo, roomLiveList } = useSelector((state) => ({
        authorNewsList: state.userCenter.authorNewsList,
        authorVideoList: state.userCenter.authorVideoList,
        authorCollectList: state.userCenter.authorCollectList,
        authorFollowList: state.userCenter.authorFollowList,
        authorAchievement: state.userCenter.authorAchievement,
        authorInfo: state.userCenter.authorInfo,
        roomLiveList: state.live.roomLiveList
    }), shallowEqual)
    const dispatch = useDispatch()
    const [nowList, setNowList] = useState(authorNewsList) // 当前选中的列表
    const [nowType, setNowType] = useState(userCenterTagType.ARTICLE) // 当前标签
    const [isHoveMore, setIsHoveMore] = useState(0) // 是否显示加载更多

    // 初始请求
    useEffect(() => {
        dispatch(getAuthorVideolist({ passportId: authorInfo.passportId }))
        dispatch(getAuthorCollectlist({ passportId: authorInfo.passportId }))
        dispatch(getAuthorFollowList({ passportid: authorInfo.passportId }))
        dispatch(getRoomLiveList({ passportId: authorInfo.passportId, pageSize: 21, adminCreateFlag: 0 }))
    }, [authorInfo.passportId])

    // 列表切换，先清空列表防止数据混乱
    useEffect(() => {
        if (!oldType) return
        if (oldType !== nowType) {
            setNowList([])
            setIsHoveMore(0)
        }
    }, [oldType])

    // 列表切换时，更新列表
    useEffect(() => {
        if (nowList.length > 0) return
        setNowType(oldType)
        setListData()
    }, [nowList])

    // 加载更多时，更新列表
    useEffect(() => {
        setListData()
    }, [authorNewsList, authorVideoList, authorCollectList, authorFollowList, roomLiveList])

    // 列表赋值
    const setListData = () => {
        switch (oldType) {
            case userCenterTagType.ARTICLE:
                setNowList(authorNewsList.inforList)
                if (authorNewsList.inforList.length < authorAchievement.newsCounts) {
                    setIsHoveMore(1)
                } else {
                    setIsHoveMore(0)
                }
                break
            case userCenterTagType.VIDEO:
                setNowList(authorVideoList.inforList)
                if (authorVideoList.inforList.length < authorAchievement.videoCounts) {
                    setIsHoveMore(1)
                } else {
                    setIsHoveMore(0)
                }
                break
            case userCenterTagType.COLLECTION:
                setNowList(authorCollectList.inforList)
                if (authorCollectList.inforList.length < authorCollectList.recordCount) {
                    setIsHoveMore(1)
                } else {
                    setIsHoveMore(0)
                }
                break
            case userCenterTagType.FOLLOW:
                setNowList(authorFollowList.inforList)
                if (authorFollowList.inforList.length < authorAchievement.authorLikeCounts) {
                    setIsHoveMore(1)
                } else {
                    setIsHoveMore(0)
                }
                break
            case userCenterTagType.LIVE:
                setNowList(roomLiveList.inforList)
                if (roomLiveList.inforList.length < authorAchievement.videoLiveCount) {
                    setIsHoveMore(1)
                } else {
                    setIsHoveMore(0)
                }
                break
            default:
                break
        }
    }

    // 点击加载更多按钮事件
    const loadMore = useCallback(
        () => {
            switch (nowType) {
                case userCenterTagType.ARTICLE:
                    dispatch(getAuthorShowcolumnlist({ passportId: authorInfo.passportId, currentPage: authorNewsList.currentPage + 1 }))
                    break
                case userCenterTagType.VIDEO:
                    dispatch(getAuthorVideolist({ passportId: authorInfo.passportId, currentPage: authorVideoList.currentPage + 1 }))
                    break
                case userCenterTagType.COLLECTION:
                    dispatch(getAuthorCollectlist({ passportId: authorInfo.passportId, currentPage: authorCollectList.currentPage + 1 }))
                    break
                case userCenterTagType.FOLLOW:
                    dispatch(getAuthorFollowList({ passportId: authorInfo.passportId, currentPage: authorFollowList.currentPage + 1 }))
                    break
                case userCenterTagType.LIVE:
                    dispatch(getRoomLiveList({ passportId: authorInfo.passportId, pageSize: 21, page: roomLiveList.currentPage + 1, adminCreateFlag: 0 }))
                    break
                default:
                    break
            }
        },
        [nowType, authorInfo, authorNewsList, roomLiveList, authorVideoList, authorCollectList, authorFollowList]
    )

    return (
        <div className="user-center-list">
            <div className={`user-center-list-news-list ${nowType === userCenterTagType.VIDEO || nowType === userCenterTagType.LIVE ? 'user-center-list-news-list-myvideo' : ''}`}>
                {
                    nowList && isArray(nowList) && nowList.map((item, index) => {
                        switch (nowType) {
                            case userCenterTagType.ARTICLE:
                            case userCenterTagType.COLLECTION:
                                const arrTag = (!item.tags || typeof item.tags !== 'string') ? [] : item.tags.split(',')
                                let authCat = null
                                arrTag.map((itemTag) => {
                                    switch (itemTag) {
                                        case 'MarsBit 专栏精选':
                                            authCat = 'MarsBit 专栏'
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

                                const newsObj = {
                                    authCat: authCat
                                }

                                return <NewsListItem {...item} {...newsObj} key={index} />
                            case userCenterTagType.VIDEO:
                                let url = item.coverPic ? JSON.parse(item.coverPic).pc ? JSON.parse(item.coverPic).pc : JSON.parse(item.coverPic).mainImg : ''
                                const videoObj = {
                                    itemType: 'myvideo',
                                    name: item.title,
                                    coverPicUrl: url
                                }

                                return <ImLiveListItem {...item} {...videoObj} key={index} />
                            case userCenterTagType.FOLLOW:
                                return <UserCenterFollowItem authorInfo={item} key={index} />
                            case userCenterTagType.LIVE:
                                return <ImLiveListItem {...item} itemType={'mylive'} key={index} />
                            default:
                                return null
                        }
                    })
                }
            </div>
            <LoadMore style={{ display: isHoveMore === 0 ? 'none' : 'block' }} onClick={() => loadMore()} />
            <div className="user-center-list-no" style={{ display: nowList.length === 0 ? 'block' : 'none' }}>{t('no_content')}</div>
        </div>
    )
}
