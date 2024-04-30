import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import LeftLiveVideoHeader from '../../../components/ImLiveDetail/LeftLiveVideo/LeftLiveVideoHeader'
// import LeftLiveVideoFooter from '../../../components/ImLiveDetail/LeftLiveVideo/LeftLiveVideoFooter'
import LiveTipBox from '../../../components/ImLiveDetail/LiveTipBox'
import useTWebLivePlayer from '../../../public/hooks/useTWebLivePlayer'
import { windowScroll, scrollOffset, isArray } from 'multiPublic'

export default () => {
    const { room, popularityList } = useSelector((state) => ({
        room: state.live.room,
        popularityList: state.live.popularityList
    }), shallowEqual)
    const {
        player,
        countTime,
        timeZero,
        setMutedBtnShow,
        mutedBtnShow
    } = useTWebLivePlayer({ elementID: 'im-live-detail-left-live-video' })
    const [isPip, setIsPip] = useState(0)
    const [isTipShow, setIsTipShow] = useState(false) // 是否显示举报弹窗

    // 滚动画中画
    useEffect(() => {
        if ((room.status !== 2 && room.status !== 1) || !player) return
        const box = document.getElementById('im-live-detail-left-live-video')
        const scrollFunc = windowScroll((res) => {
            if (res === 'down' && isPip === 0 && scrollOffset().top > 600) {
                player.getPIP()
                setIsPip(1)
                box.style.zIndex = 1000
            }

            if (res === 'up' && isPip === 1 && scrollOffset().top < 600) {
                player.exitPIP()
                setIsPip(0)
                box.style.zIndex = 0
            }
        })

        return () => {
            window.removeEventListener('scroll', scrollFunc, false)
        }
    }, [room, player, isPip])

    // 点击举报按钮事件
    const onBtnGetTipAddClick = useCallback(
        () => {
            setIsTipShow(!isTipShow)
        },
        [isTipShow]
    )

    return (
        <div className="im-live-detail-left-live-video">
            <LeftLiveVideoHeader {...room} pop={popularityList && isArray(popularityList) && popularityList.length > 0 ? popularityList[0] : 0} onBtnGetTipAddClick={onBtnGetTipAddClick} />
            <div className="im-live-detail-left-live-video-wrapper">
                {room.status === 0 || (room.status === 2 && !room.recordVideoUrl) ? <img className="im-live-detail-left-live-video-bg" src={room.coverPicUrl} /> : null}
                <div className="im-live-detail-video-wrapper">
                    <div id="im-live-detail-left-live-video" style={{ width: '100%', height: '100%', zIndex: 0 }}></div>
                    <div className="click-cancel-muted" style={{ display: mutedBtnShow ? 'block' : 'none' }} onClick={() => {
                        if (!player) return
                        setMutedBtnShow(false)
                    }}>
                        <button>点击取消静音</button>
                    </div>
                </div>
                {room.status === 0 ? <div className="im-live-detail-left-live-video-footer">
                    {countTime.d === 0 && countTime.h === 0 && countTime.m === 0 && countTime.s === 0
                        ? <div className="im-live-detail-left-live-video-footer-text1">主播马上就到，敬请期待</div>
                        : <div className="im-live-detail-left-live-video-footer-text1">距开播预计还剩</div>}
                    {countTime.d === 0 && countTime.h === 0 && countTime.m === 0 && countTime.s === 0 ? null
                        : <div className="im-live-detail-left-live-video-footer-text2">
                            {timeZero(countTime.d)}
                            <span className="im-live-detail-left-live-video-footer-text1">天</span>
                            {timeZero(countTime.h)}
                            <span className="im-live-detail-left-live-video-footer-text1">时</span>
                            {timeZero(countTime.m)}
                            <span className="im-live-detail-left-live-video-footer-text1">分</span>
                            {timeZero(countTime.s)}
                            <span className="im-live-detail-left-live-video-footer-text1">秒</span>
                        </div>}
                </div> : null}
                {room.status === 2 && !room.recordVideoUrl ? <div className="im-live-detail-left-live-video-footer">
                    <div className="im-live-detail-left-live-video-footer-text1">直播已结束，回放制作中，敬请期待</div>
                </div> : null}
            </div>
            {/* <LeftLiveVideoFooter {...room} countTime={countTime} /> */}
            {isTipShow === true ? <LiveTipBox room={room} onBtnGetTipAddClick={onBtnGetTipAddClick} /> : null}
        </div>
    )
}
