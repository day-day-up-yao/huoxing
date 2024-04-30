import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'

import ShareList from '../../../components/NaGa/ShareList'
import { gameList } from '../../../public/js/imgDefaut'

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])
export default (props) => {
    return <div className="page-center">
        <div className="page-banner">
            <Swiper
                className="naga-item-banner-m"
                preventClicks={false}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
            >
                {gameList.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className="page-banner-m">
                            <div className="page-banner-m-item"
                                style={{
                                    backgroundImage: `url(${item.bgimg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center'
                                }}
                            >
                                <div className="banner-m-info">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="banner-m-bg"/>
                            </div>
                            <div className="banner-m-other">
                                <ShareList
                                    link={item.twitter}
                                />
                                <div className="banner-m-info-desc">{item.desc}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
        <div className="first-page">
            {gameList.concat(gameList).concat(gameList).map((item, index) => {
                return <div className="first-page-item" key={index} onClick={() => {
                    window.location.href = `/nagadetail?iteminfo=${JSON.stringify(item)}`
                }}>
                    <div className="first-page-item-img">
                        <img src={item.icon} alt=""/>
                    </div>
                    <div className="first-page-item-con">
                        <h2>{item.name}</h2>
                        <ShareList/>
                    </div>
                </div>
            })}
        </div>
    </div>
}
