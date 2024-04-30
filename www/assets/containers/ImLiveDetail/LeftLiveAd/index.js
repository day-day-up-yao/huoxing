import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

// import joinIcon from '../Image/live-ad-join.png'

export default () => {
    const { liveDetailImgData } = useSelector((state) => ({
        liveDetailImgData: state.home.liveDetailImgData
    }), shallowEqual)

    return (
        <div className="im-live-detail-left-live-ad">
            <a className="im-live-list-right-join-box" href={liveDetailImgData.length > 0 ? liveDetailImgData[0].url : ''} target="_blank">
                <img className="im-live-detail-left-live-ad-img" src={liveDetailImgData.length > 0 ? liveDetailImgData[0].pcImgSrc : ''} />
            </a>
        </div>
    )
}
