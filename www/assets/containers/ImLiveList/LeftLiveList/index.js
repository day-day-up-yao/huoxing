import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './index.scss'

import { isArray, mixUrl } from 'multiPublic'
import { getRoomLiveList, getRoomPopularity } from '../../../redux/actions/live'
import LeftLiveHeader from '../../../components/ImLiveList/LeftLiveHeader'
import ImLiveListItem from 'multiComps/Home/RightLive/ImLiveListItem'
import LeftLiveRecommend from '../../../components/ImLiveDetail/LeftLiveRecommend'

export default () => {
    const { roomLiveTypeList, roomLiveTypeListObjData, roomLiveRecommendList, roomLivePopularityList } = useSelector((state) => ({
        roomLiveTypeList: state.live.roomLiveTypeList, // 类型列表
        roomLiveRecommendList: state.live.roomLiveRecommendList.inforList, // 推荐列表
        roomLiveTypeListObjData: state.live.roomLiveTypeListObjData, // 分类列表
        roomLivePopularityList: state.live.popularityList // 人气列表
    }), shallowEqual)
    const dispatch = useDispatch()
    const [nowType, setNowType] = useState(9999) // 当前分类 10000.广场 9999.推荐 1.其他
    const [nowListData, setNowListData] = useState(roomLiveTypeListObjData[9999].inforList) // 当前分类
    const [nowRecommend, setNowRecommend] = useState(roomLiveRecommendList) // 当前推荐
    const [isHaveMore, setIsHaveMore] = useState(false) // 是否还有更多内容
    const [isOpen, setIsOpen] = useState(0) // 是否初始化完成
    const timer = useRef()

    useEffect(() => {
        setNowRecommend(roomLiveRecommendList)
    }, [roomLiveTypeList, roomLiveRecommendList, roomLiveTypeListObjData])

    // 初始请求人气值
    useEffect(() => {
        if (isOpen !== 0) return
        let ids = []
        roomLiveRecommendList.map((item) => {
            ids.push(item.roomId)
        })
        nowListData.map((item) => {
            ids.push(item.roomId)
        })
        dispatch(getRoomPopularity({ roomIDs: ids.join(',') })).then(() => {
            setIsOpen(1)
        })
    }, [dispatch.live, nowListData, roomLiveRecommendList, isOpen])

    // 请求人气值
    useEffect(() => {
        if (timer.current || isOpen === 0) return
        timer.current = setInterval(() => {
            dispatch(getRoomPopularity())
        }, 5000)
        return () => {
            clearInterval(timer.current)
        }
    }, [dispatch.live, nowListData, roomLiveRecommendList, isOpen])

    // 人气赋值
    useEffect(() => {
        const newList = nowListData
        for (let i = 0; i < newList.length; i++) {
            for (let j = 0; j < roomLivePopularityList.length; j++) {
                if (newList[i].roomId === roomLivePopularityList[j].roomId) {
                    newList[i].popularity = roomLivePopularityList[j].popularity
                    break
                }
            }
        }
        setNowListData(newList)
        const newList2 = roomLiveRecommendList
        for (let i = 0; i < newList2.length; i++) {
            for (let j = 0; j < roomLivePopularityList.length; j++) {
                if (newList2[i].roomId === roomLivePopularityList[j].roomId) {
                    newList2[i].popularity = roomLivePopularityList[j].popularity
                    break
                }
            }
        }
        setNowRecommend(newList2)
    }, [roomLivePopularityList])

    useEffect(() => {
        if (roomLiveTypeListObjData && roomLiveTypeListObjData[nowType]) {
            setNowListData(roomLiveTypeListObjData[nowType].inforList)

            let currPage = parseInt(roomLiveTypeListObjData[nowType].currentPage) + 1
            if (roomLiveTypeListObjData[nowType].pageCount >= currPage) {
                setIsHaveMore(true)
            } else {
                setIsHaveMore(false)
            }
        }
    }, [roomLiveTypeListObjData, nowType])

    // 点击切换类型按钮事件
    const onBtnTypeClick = useCallback(
        (type) => {
            setNowType(type)
        },
        []
    )

    // 点击分类列表加载更多按钮事件
    const onBtnMoreClick = useCallback(
        () => {
            let currPage = parseInt(roomLiveTypeListObjData[nowType].currentPage) + 1
            if (roomLiveTypeListObjData[nowType].pageCount >= currPage) {
                dispatch(getRoomLiveList({ liveType: nowType, pageSize: 32, page: currPage }))
            }
        },
        [nowType, roomLiveTypeListObjData]
    )

    return (
        <div className="im-live-list-left-live-list">
            {/* <LeftLiveHeader title={'精选直播'} notLine moreUrl={mixUrl.main(`/live/recommend`)} />
            <div className="im-live-list-left-live-list-top-box">
                <div className="im-live-list-left-live-list-top-box-left">
                    {nowRecommend && isArray(nowRecommend) && nowRecommend[0] && <ImLiveListItem {...nowRecommend[0]} itemType={`top1`} />}
                </div>
                <div className="im-live-list-left-live-list-top-box-right">
                    {nowRecommend && isArray(nowRecommend) && nowRecommend[1] && <ImLiveListItem {...nowRecommend[1]} itemType={`top2`} />}
                    {nowRecommend && isArray(nowRecommend) && nowRecommend[3] && <ImLiveListItem {...nowRecommend[3]} itemType={`top2`} />}
                </div>
                <div className="im-live-list-left-live-list-top-box-right">
                    {nowRecommend && isArray(nowRecommend) && nowRecommend[2] && <ImLiveListItem {...nowRecommend[2]} itemType={`top2`} />}
                    {nowRecommend && isArray(nowRecommend) && nowRecommend[4] && <ImLiveListItem {...nowRecommend[4]} itemType={`top2`} />}
                </div>
            </div> */}
            <div className="im-live-list-left-live-list-new-box" style={{ display: 'none' }}>
                <div className="im-live-list-left-live-list-new-box-left">
                    精选直播
                </div>
                <div className="im-live-list-left-live-list-new-box-list">
                    {
                        nowRecommend && isArray(nowRecommend) && nowRecommend.map((item, index) => {
                            if (index < 4) {
                                return (
                                    <div className="im-live-list-left-live-list-new-box-item" key={index}>
                                        <ImLiveListItem {...item} itemType={`top3`} />
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </div>
                <a className="im-live-list-left-live-list-new-box-right" href={mixUrl.main(`/live/recommend`)} target="_blank">
                    查看更多
                </a>
            </div>
            <LeftLiveHeader title={''} typeList={roomLiveTypeList} nowType={nowType} onBtnTypeClick={onBtnTypeClick} />
            <LeftLiveRecommend listData={nowListData} onBtnMoreClick={onBtnMoreClick} isHaveMore={isHaveMore} />
        </div>
    )
}
