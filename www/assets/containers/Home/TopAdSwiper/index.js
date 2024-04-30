import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'

const adLen = 7
export default () => {
    const { topAdData, slideTopAdData } = useSelector((state) => ({
        topAdData: state.home.adData[11] ? state.home.adData[11] : [],
        slideTopAdData: state.home.slideTopAdData
    }), shallowEqual)
    // console.log(topAdData)
    return (
        <div className="top-ad-swiper-wrap" style={{ display: topAdData.length < adLen ? 'none' : 'block' }}>
            {/* <h6 className="ad-text">推广</h6> */}
            <div className="top-ad-swiper-contain">
                <Swiper className="top-ad-swiper" preventClicks={true}
                    autoplay={{ delay: 8000, disableOnInteraction: false }} >
                    {
                        slideTopAdData && slideTopAdData.map((item, index) => {
                            return (
                                <SwiperSlide className="swiper-slide" key={index}>
                                    {
                                        item.map((itemEle, indexEle) => {
                                            return (
                                                <a className="slide-item" key={indexEle} href={!itemEle.url ? '' : itemEle.url} target="_blank" title={itemEle.description} rel="nofollow">
                                                    <img className="ad-img" src={itemEle.img_url} title={itemEle.title} alt={itemEle.title} />
                                                    <div className="ad-info">
                                                        <h5>{itemEle.title}</h5>
                                                        <p className="desc">{itemEle.description}</p>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}
