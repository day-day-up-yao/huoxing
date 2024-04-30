import React from 'react'

import './index.scss'

import LeftVideo from './LeftVideo'
import LeftAuthor from './LeftAuthor'
// import LeftComment from './LeftComment'
import RightRecommend from './RightRecommend'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'

export default () => {
    return (
        <div className="video-detail-page">
            <div className="video-detail-page-main-box">
                <div className="video-detail-page-main-box-left">
                    <LeftVideo />
                    <LeftAuthor />
                    {/* <LeftComment /> */}
                </div>
                <div className="video-detail-page-main-box-right">
                    <RightRecommend />
                    <RightDownloadBox />
                </div>
            </div>
        </div>
    )
}
