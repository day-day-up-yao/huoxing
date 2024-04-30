import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './index.scss'

import { getRoomLiveList } from '../../../redux/actions/live'
import LeftLiveHeader from '../../../components/ImLiveList/LeftLiveHeader'
import LeftLiveRecommend from '../../../components/ImLiveDetail/LeftLiveRecommend'

export default () => {
    const { roomLiveRecommendList } = useSelector((state) => ({
        roomLiveRecommendList: state.live.roomLiveRecommendList // 推荐列表
    }), shallowEqual)
    const dispatch = useDispatch()
    const [isHaveMore, setIsHaveMore] = useState(false) // 是否还有更多内容

    useEffect(() => {
        let currPage = parseInt(roomLiveRecommendList.currentPage) + 1
        if (roomLiveRecommendList.pageCount >= currPage) {
            setIsHaveMore(true)
        } else {
            setIsHaveMore(false)
        }
    }, [roomLiveRecommendList])

    // 点击分类列表加载更多按钮事件
    const onBtnMoreClick = useCallback(
        () => {
            let currPage = parseInt(roomLiveRecommendList.currentPage) + 1
            if (roomLiveRecommendList.pageCount >= currPage) {
                dispatch(getRoomLiveList({ pageSize: 32, page: currPage, recommendFlag: 1, newFlag: 1 }))
            }
        },
        [roomLiveRecommendList]
    )

    return (
        <div className="im-live-list-left-live-list-top">
            <LeftLiveHeader title={'精选直播'} notLine />
            <LeftLiveRecommend listData={roomLiveRecommendList.inforList} onBtnClick={onBtnMoreClick} isHaveMore={isHaveMore} />
        </div>
    )
}
