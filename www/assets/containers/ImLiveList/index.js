import React, { useEffect } from 'react'

import './index.scss'

import LeftLiveList from './LeftLiveList'
import LeftLiveAd from '../../components/ImLiveList/LeftLiveAd'
// import RightLiveListPlayer from './RightLiveListPlayer'
// import RightLiveJoin from '../../components/ImLiveList/RightLiveJoin'
import RightAdLive from '../Home/RightAdLive'
import Popup from '../Home/Popup'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
import RightFlashAndDynamic from 'multiComps/Home/RightFlashAndDynamic'
import liveGather from '../../public/hooks/useLiveGather'
import liveGatherAjax from '../../public/hooks/useLiveGatherAjax'

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])

export default () => {
    liveGatherAjax()
    const livePush = liveGather()
    useEffect(() => {
        livePush({ eventId: 'live_home_enter' })
    }, [])
    return (
        <div className="im-live-list-page">
            <div className="im-live-list-page-main-box">
                <div className="im-live-list-page-main-box-left">
                    <LeftLiveAd />
                    <LeftLiveList />
                </div>
                <div className="im-live-list-page-main-box-right">
                    <RightAdLive />
                    {/* <RightLiveListPlayer /> */}
                    <RightFlashAndDynamic onlyOne={'flash'} />
                    <RightDownloadBox isLive />
                </div>
            </div>
            <Popup />
        </div>
    )
}
