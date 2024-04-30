import React, { useEffect } from 'react'
import Swiper from 'swiper/js/swiper'

import './index.scss'

const autotrue = true
const autofalse = false

export default (props) => {
    const { bannerlist } = props
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.banner-swiper', {
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
            autoplay: bannerlist && bannerlist.length === 1 ? autofalse : autotrue,
            autoplayDisableOnInteraction: false,
            centeredSlides: true
            // // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        })
    }, [])
    return <div className="banner-m">
        <div className="swiper-container banner-swiper">
            <div className="swiper-wrapper">
                {bannerlist && bannerlist.map((item, index) => {
                    return <div className="swiper-slide" key={index}>
                        <div className="bannerthree" onClick={() => {
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
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
        </div>
    </div>
}
