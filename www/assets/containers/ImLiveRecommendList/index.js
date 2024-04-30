import React, { useEffect } from 'react'

import './index.scss'

import LeftLiveListTop from './LeftLiveListTop'
import RightLiveListPlayer from '../ImLiveList/RightLiveListPlayer'
import RightLiveJoin from '../../components/ImLiveList/RightLiveJoin'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
import liveGather from '../../public/hooks/useLiveGather'
import liveGatherAjax from '../../public/hooks/useLiveGatherAjax'

export default () => {
    liveGatherAjax()
    const livePush = liveGather()
    useEffect(() => {
        livePush({ eventId: 'recommended_enter' })
    }, [])
    return (
        <div className="im-live-recommend-list-page">
            <div className="im-live-recommend-list-page-main-box">
                <div className="im-live-recommend-list-page-main-box-left">
                    <LeftLiveListTop />
                </div>
                <div className="im-live-recommend-list-page-main-box-right">
                    <RightLiveJoin />
                    <RightLiveListPlayer />
                    <RightDownloadBox isLive />
                </div>
            </div>
        </div>
    )
}
