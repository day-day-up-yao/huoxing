import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'
import adTitleIcon from '../image/ad-carousel-title.png'

export default () => {
    const { liveListImgData } = useSelector((state) => ({
        liveListImgData: state.home.liveListImgData
    }), shallowEqual)

    return (
        <div className="im-live-list-left-live-ad" style={{ display: liveListImgData.length > 0 ? 'block' : 'none' }}>
            <Swiper className="im-live-list-left-live-ad-primary" preventClicks={false}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{
                    el: '.swiper-pagination.left-ad-carousel-recommend-pag',
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'left-ad-carousel-recommend-pag-customs',
                    bulletActiveClass: 'left-ad-carousel-recommend-pag-customs-active'
                }}>
                {
                    liveListImgData && liveListImgData.map((item, index) => {
                        return (
                            <SwiperSlide className="comment-news" key={index}>
                                <a title={item.title} target="_blank" href={item.url}>
                                    <div className="img-div">
                                        <img className="news-img" alt={item.title} src={item.pcImgSrc} />
                                    </div>
                                    <span className="mode"></span>
                                    <div className="title">{item.title}</div>
                                    {item.useType === 1 ? <div className="ad-title">
                                        <img src={adTitleIcon} />
                                    </div> : null}
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="swiper-pagination left-ad-carousel-recommend-pag"></div>
            </Swiper>
        </div>
    )
}
