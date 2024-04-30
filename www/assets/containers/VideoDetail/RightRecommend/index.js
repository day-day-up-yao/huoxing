import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import RightRecommendItem from '../../../components/VideoDetail/RightRecommendItem'

export default () => {
    const { videoByTagsListData, videoRecommendListData } = useSelector((state) => ({
        videoByTagsListData: state.video.videoByTagsListData,
        videoRecommendListData: state.video.videoRecommendListData
    }), shallowEqual)

    return (
        <div className="video-detail-right-recommend">
            <div className="video-detail-right-recommend-title-box">
                <div className="video-detail-right-recommend-line"></div>
                <div className="video-detail-right-recommend-title">精选视频</div>
            </div>
            {videoByTagsListData && videoByTagsListData.inforList.length > 0 && videoByTagsListData.inforList.map((item, index) => {
                return (
                    <RightRecommendItem {...item} key={index} />
                )
            })}
            {videoByTagsListData && videoRecommendListData && videoByTagsListData.inforList.length < 4 && videoRecommendListData.slice(0, parseInt(4 - videoByTagsListData.inforList.length)).map((item, index) => {
                return (
                    <RightRecommendItem {...item} key={index} />
                )
            })}
        </div>
    )
}
