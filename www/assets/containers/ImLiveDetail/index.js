import React, { useEffect } from 'react'

import './index.scss'

import LeftLiveVideo from './LeftLiveVideo'
import LeftLiveAd from './LeftLiveAd'
import LeftLiveBottomBox from './LeftLiveBottomBox'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
import RightLiveChat from './RightLiveChat'
import RightLivePresenter from './RightLivePresenter'
import RightLiveJoin from './RightLiveJoin'
import liveGather from '../../public/hooks/useLiveGather'
import liveGatherAjax from '../../public/hooks/useLiveGatherAjax'

export default () => {
    liveGatherAjax()
    const livePush = liveGather()
    useEffect(() => {
        livePush({ eventId: 'view_live_intro' })
    }, [])
    return (
        <div className="im-live-detail-page">
            <div className="im-live-detail-page-main-box">
                <div className="im-live-detail-page-main-box-left">
                    <LeftLiveVideo />
                    <LeftLiveAd />
                    <LeftLiveBottomBox />
                </div>
                <div className="im-live-detail-page-main-box-right">
                    <RightLiveChat />
                    <RightLivePresenter />
                    <RightLiveJoin />
                    <RightDownloadBox isLive />
                </div>
            </div>
        </div>
    )
}
