import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'
import LiveInfo from './LiveInfo'
import FooterDownload from 'multiCompsM/Layout/FooterDownload'
import DownloadBtn from 'multiCompsM/DownloadBtn'
import HotLiveroom from './HotLiveroom'
import LiveroomDesc from './LiveroomDesc'
import LiveroomVideo from './LiveroomVideo'
import NostartButton from './NostartButton'
import LiveGuestInfo from './LiveGuestInfo'
import './index.scss'

export default (props) => {
    const { roomData, popularityList, roomLiveRecommendList } = useSelector((state) => ({
        roomData: state.live.room,
        popularityList: state.live.popularityList,
        roomLiveRecommendList: state.live.roomLiveRecommendList.inforList
    }), shallowEqual)
    const livelinkid = props.match.params.roomId
    const { t } = useTranslation()
    // 当前直播间状态 0.未直播 1.直播中 2.回放中
    const [liveState, setLiveState] = useState(roomData.status)
    const [countTime, setCountTime] = useState({
        d: 0,
        h: 0,
        m: 0,
        s: 0
    })
    const getCountTimeText = useCallback(() => {
        let nowTime = new Date().getTime()
        let endTime = Number(roomData.beginTime)
        let leftTime = endTime - nowTime
        let obj = {
            d: 0,
            h: 0,
            m: 0,
            s: 0
        }
        if (leftTime >= 0) {
            obj.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
            obj.h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
            obj.m = Math.floor(leftTime / 1000 / 60 % 60)
            obj.s = Math.floor(leftTime / 1000 % 60)
        } else {
            // 跳走，reload
        }

        setCountTime(obj)

        if (roomData.status === 0) {
            setTimeout(getCountTimeText, 1000)
        }
    }, [])
    const [isBoxShow, setIsBoxShow] = useState(0)
    useEffect(() => {
        if (roomData.status === 0) {
            setLiveState(0)
        } else if (roomData.status === 1) {
            setLiveState(1)
        } else if (roomData.status === 2) {
            setLiveState(2)
        }
    }, [roomData])
    useEffect(() => {
        getCountTimeText()
    }, [])
    const changeBoxShow = (boxShow) => {
        setIsBoxShow(boxShow)
    }

    return <div id="hxwrap">
        <FooterDownload type="liveshare" id={livelinkid}/>
        <div className='hxwrap'>
            <div className="live-share-m">
                <div className="live-share-m-info">
                    <div className="live-share-m-content" id="live-share-m-content">
                        {liveState === 0 ? <div className="readyPic">
                            <img className="live-share-m-ready-coverPic" src={roomData.coverPicUrl}/>
                            <div className="container">
                                <div className="playerWrap">
                                    <div className="player"></div>
                                </div>
                            </div>
                        </div> : <LiveroomVideo changeBoxShow={changeBoxShow} />}
                        {
                            roomData && <div className="live-background" style={{ background: `url(${roomData.coverPicUrl})` }} />
                        }
                    </div>
                    <div className="live-share-m-info">
                        <LiveInfo {...roomData} pop={popularityList[0]}/>
                        {liveState === 0 && <div className="live-share-m-brief">
                            <div><span className="live-share-box-title"></span>主播与嘉宾</div>
                            <LiveGuestInfo {...roomData} /></div>}
                    </div>
                </div>
                <div className="live-share-m-brief">
                    <div><span className="live-share-box-title"></span>{t('live_brief')}</div>
                    <LiveroomDesc {...roomData } />
                </div>
                <div className="live-share-m-hot-box">
                    <div><span className="live-share-box-title"></span>热门直播</div>
                    {roomLiveRecommendList.length > 0 && <HotLiveroom listData={roomLiveRecommendList} />}
                </div>
            </div>
        </div>
        {isBoxShow !== 0 ? <div></div> : null }
        {liveState ? <DownloadBtn/> : <NostartButton { ...roomData } time={countTime} />}
    </div>
}
