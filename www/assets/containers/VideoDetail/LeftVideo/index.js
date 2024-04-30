import React, { useEffect, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'
import Toast from 'multiComps/Toast'
// import useTWebLivePlayer from '../../../public/hooks/useNewVideoPlayer'

export default () => {
    const { videoDetail } = useSelector((state) => ({
        videoDetail: state.video.videoDetail
    }), shallowEqual)
    const [url, setUrl] = useState('')
    useEffect(() => {
        if (!videoDetail) {
            setTimeout(() => {
                Toast.info('视频不存在或已删除')
            }, 500)
            return
        }

        let playbackUrl = JSON.parse(videoDetail.current.url)
        if (!playbackUrl) {
            Toast.info('未获取到视频地址，请刷新试试')
            return
        }

        playbackUrl = playbackUrl[0].fileUrl
        setUrl(playbackUrl)
    }, [videoDetail])
    // const {
    //     player,
    //     setMutedBtnShow,
    //     mutedBtnShow
    // } = useTWebLivePlayer({ elementID: 'video-detail-left-video' })

    return (
        <div className="video-detail-left-video">
            <div className="video-detail-left-video-wrapper">
                <div className="video-detail-video-wrapper">
                    <div id="video-detail-left-video" style={{ width: '100%', height: '100%', zIndex: 0 }}>
                        <video
                            // muted
                            preload='auto'
                            autoPlay='autoplay'
                            controls
                            src={url}
                            className="topshow-video"
                            poster={JSON.parse(videoDetail.current.coverPic).video_pc}
                        />
                    </div>
                    {/* <div className="click-cancel-muted" style={{ display: mutedBtnShow ? 'block' : 'none' }} onClick={() => {
                        if (!player) return
                        setMutedBtnShow(false)
                    }}>
                        <button>点击取消静音</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
