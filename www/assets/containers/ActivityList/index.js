import React from 'react'

import './index.scss'

import TopBannerSwiper from './TopBannerSwiper'
import BottomList from './BottomList'

import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, EffectCoverflow, Navigation, Pagination])

export default () => {
    return (
        <div className="activity-list-page">
            <TopBannerSwiper />
            <BottomList />
        </div>
    )
}
