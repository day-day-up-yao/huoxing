import React, { useState, useEffect, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { mixUrl } from 'multiPublic'

import './index.scss'
import ImLiveListItem from './ImLiveListItem'
import { getRightLivePopularityList } from '../../../redux/actions/live'

export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { roomLiveRecommendList, roomLivePopularityList } = useSelector((state) => ({
        roomLiveRecommendList: state.multi.home.roomLiveRecommendList.inforList, // 推荐列表
        roomLivePopularityList: state.multi.live.roomLivePopularityList // 人气列表
    }), shallowEqual)
    const [listData, setListData] = useState(roomLiveRecommendList)
    const timer = useRef()

    useEffect(() => {
        if (timer.current) return
        timer.current = setInterval(() => {
            dispatch(getRightLivePopularityList())
        }, 5000)
        return () => {
            clearInterval(timer)
        }
    }, [dispatch, listData])

    useEffect(() => {
        const newList = listData.concat()
        for (let i = 0; i < newList.length; i++) {
            for (let j = 0; j < roomLivePopularityList.length; j++) {
                if (newList[i].roomId === roomLivePopularityList[j].roomId) {
                    newList[i].popularity = roomLivePopularityList[j].popularity
                }
            }
        }
        setListData(newList)
    }, [roomLivePopularityList])

    return (
        <div className="right-live" style={{ display: listData.length > 0 ? 'block' : 'none' }}>
            <a className="right-live-title" href={mixUrl.main(`/live`)} target="_blank">
                {t('live_tj_strem')}
                <div className="right-live-arrow"></div>
            </a>
            <div className="right-live-list">
                {
                    listData && listData.map((item, index) => {
                        return (
                            <ImLiveListItem {...item} itemType={`right`} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
