import React, { useEffect } from 'react'
import Swiper from 'swiper/js/swiper'

import './index.scss'

export default (props) => {
    const { bannerlist } = props
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.message-swiper', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            speed: 1500,
            observer: true,
            observerParent: false,
            initialSlide: 0,
            autoplay: bannerlist.length > 1 && true,
            autoplayDisableOnInteraction: false,
            centeredSlides: true
        })
    }, [])
    return <div className="message-banner">
        <div className="swiper-container message-swiper">
            <div className="swiper-wrapper">
                {bannerlist && bannerlist.map((item, index) => {
                    return <div className="swiper-slide" key={index}>
                        <div className="silde-item" onClick={() => {
                            window.location.href = item.clickUrl
                        }}
                        style={{
                            backgroundImage: `url(${item.originalPic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        />
                    </div>
                })}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </div>
}
