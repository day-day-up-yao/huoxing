import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LiveRoomItem from './LiveRoomItem/'
import { getRoomLiveList } from '../../redux/actions/live'
import DownloadBtn from 'multiCompsM/DownloadBtn'
import './index.scss'

export default (props) => {
    const { roomLiveRecommendList, roomLiveRecommend } = useSelector((state) => ({
        roomLiveRecommend: state.live.roomLiveRecommendList,
        roomLiveRecommendList: state.live.roomLiveRecommendList.inforList
    }))
    const dispatch = useDispatch()
    const [livelist, setLivelist] = useState(roomLiveRecommendList)
    useEffect(() => {
        const newdData = roomLiveRecommend.currentPage === 1 ? livelist : livelist.concat(roomLiveRecommendList)
        setLivelist(newdData)
    }, [roomLiveRecommendList, roomLiveRecommend])
    const onBtnMoreClick = useCallback(
        () => {
            let currPage = parseInt(roomLiveRecommend.currentPage) + 1
            if (roomLiveRecommend.pageCount >= currPage) {
                dispatch(getRoomLiveList({ recommendFlag: 1, pageSize: 20, page: currPage }))
            }
        }, [roomLiveRecommend]
    )

    return <div className="m-live-box">
        <div className="live-recommend-list">
            {
                livelist && livelist.map((item, index) => {
                    return <LiveRoomItem {...item} key={index} />
                })
            }
        </div>
        <div className="video-more" onClick={onBtnMoreClick} data-page=""><p>查看更多</p></div>
        <DownloadBtn type="home" />
    </div>
}
