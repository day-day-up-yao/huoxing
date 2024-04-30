import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { useSelector, useDispatch } from 'react-redux'
import cookies from 'js-cookie'

import './index.scss'

// import TopDefiMarketData from './TopDefiMarketData'
import TopAdSwiper from './TopAdSwiper'
// import TopCoinSwiper from './TopCoinSwiper'
import TopAdImg from './TopAdImg'
import LeftAdCarousel from './LeftAdCarousel'
import LeftAdRecommend from './LeftAdRecommend'
import LeftNewsList from './LeftNewsList'
import RightAdOneself from './RightAdOneself'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
import RightRankNews from './RightRankNews'
import RightSubject from './RightSubject'
// import RightVideo from './RightVideo'
// import RightLive from 'multiComps/Home/RightLive'
// import RightControllerLive from './RightControllerLive'
import RightTags from './RightTags'
// import RightRiskHint from './RightRiskHint'
// import RightElement from './RightElement'
import RightFlashAndDynamic from 'multiComps/Home/RightFlashAndDynamic'
// import RightMpAuthor from './RightMpAuthor'
// import RightAdLive from './RightAdLive'
import Popup from './Popup'

import { cookiesName } from 'multiPublic'
import { festivalClose } from '../../redux/actions/home'

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])

export default () => {
    const { festivalCloseState } = useSelector((state) => ({
        festivalCloseState: state.home.festivalCloseState
        // bannerv2list: state.home.elementBannerList
    }))
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getAdData())
        const festivalCloseTime = cookies.get(cookiesName.festival)
        if (!festivalCloseTime || festivalCloseState) return

        // 设置过、且设置的已过今天：移除cookie中设置的时间
        cookies.remove(cookiesName.festival)
    }, [])

    let festivalTime = false
    const nowTime = new Date().getTime()
    if (nowTime > dayjs('2021-02-04 00:00').valueOf() && nowTime < dayjs('2021-02-19 00:00').valueOf()) {
        festivalTime = true
    }
    return <div className={`home-festival-bg ${festivalTime && !festivalCloseState ? 'active' : ''}`}>
        <div className="home-festival-bg-img" />
        <div className="home-page-wrapper">
            <div className="home-festival-bg-close" onClick={() => {
                dispatch(festivalClose(true))
                cookies.set(cookiesName.festival, dayjs(new Date()).format('YYYY-MM-DD'))
            }}>
                <span>✕</span>关闭
            </div>

            {/* <TopDefiMarketData /> */}
            {/* <TopCoinSwiper /> */}
            <TopAdImg />
            <TopAdSwiper />
            <div className="home-page-main-box">
                <div className="home-page-main-box-left">
                    <LeftAdCarousel />
                    <LeftAdRecommend />
                    <LeftNewsList />
                </div>
                <div className="home-page-main-box-right">
                    {/* <RightRiskHint /> */}
                    {/* <RightAdLive /> */}
                    {/* <RightElement rightbannerlist={bannerv2list} /> */}
                    <RightAdOneself />
                    {/* <RightControllerLive /> */}
                    <RightFlashAndDynamic onlyOne={'flash'} />
                    {/* <RightLive /> */}
                    {/* <RightFlashAndDynamic onlyOne={'dynamic'} /> */}
                    <RightDownloadBox />
                    <RightRankNews />
                    <div className="right-subject-tags">
                      <RightSubject />
                      {/* <RightVideo /> */}
                      {/* <RightMpAuthor /> */}
                      <RightTags />
                    </div>
                </div>
            </div>
            <Popup />
        </div>
    </div>
}
