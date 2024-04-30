import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

// import AdImg from '../image/ad-home-top-bg-mclouds.jpg'

export default () => {
    const { homeTopAdImgData } = useSelector((state) => ({
        homeTopAdImgData: state.home.homeTopAdImgData
    }), shallowEqual)
    return (
        <div className="top-ad-img-page" style={{ paddingTop: homeTopAdImgData.length > 0 ? '20px' : '0' }} >
            <a href={homeTopAdImgData.length > 0 ? homeTopAdImgData[0].url : ''} target="_blank">
                <img className="top-ad-img" src={homeTopAdImgData.length > 0 ? homeTopAdImgData[0].pcImgSrc : ''} />
            </a>
        </div>
    )
}
