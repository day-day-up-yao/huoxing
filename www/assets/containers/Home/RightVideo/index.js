import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { mixUrl, isJson } from 'multiPublic'

import './index.scss'
import defaultImg from '../image/default-img.png'
import videoBtnIcon from '../image/video-icon-play.png'

export default () => {
    const { videoData } = useSelector((state) => ({
        videoData: state.home.videoData
    }), shallowEqual)

    return (
        <div className="right-video" style={{ display: videoData.length > 0 ? 'block' : 'none' }}>
            <a className="right-video-title" href={mixUrl.main(`/video`)} target="_blank">
                精选视频
                <div className="right-video-arrow"></div>
            </a>
            <div className="right-video-list">
                {
                    videoData && videoData.map((item, index) => {
                        return (
                            <a className="right-video-item" key={index} title={item.title} target="_blank" href={mixUrl.main(`/video/detail/${item.id}/${item.publishTime}`)}>
                                <div className="right-video-item-icon">
                                    <img className="right-video-item-img1" src={(item.coverPic && isJson(item.coverPic) && !JSON.parse(item.coverPic).pc ? defaultImg : JSON.parse(item.coverPic).pc)} alt={item.title} />
                                    <div className="right-video-item-img2">
                                        <img src={videoBtnIcon} />
                                    </div>
                                </div>
                                <h5 className="right-video-item-title">{item.title}</h5>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}
