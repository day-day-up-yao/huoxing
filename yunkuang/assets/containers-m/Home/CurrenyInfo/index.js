import React, { useEffect } from 'react'
import Swiper from 'swiper/js/swiper'

import './index.scss'

import { Curreylog } from '../../../public/js/curryicon'

export default (props) => {
    const { currenylist } = props
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.curreny-swiper', {
            direction: 'horizontal', // 竖向切换选项
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true, // 动态监测器
            // observerParent: false,
            initialSlide: 0,
            autoplay: true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 2.4, // 展示个数
            spaceBetween: 20 // slide间距
            // centeredSlides: true
        })
    }, [])
    return <div className="home-currenyinfo">
        <div className="swiper-container curreny-swiper">
            <div className="swiper-wrapper">
                {currenylist.map((item, index) => {
                    const icon = Curreylog.find((itm) => itm.name === item.token)?.logo
                    return <div className="swiper-slide" key={index}>
                        <div className="currenyinfo-item">
                            <div className="item-top">
                                <img src={icon} alt=""/>
                                <p>
                                    <span>{item.token}</span>
                                    <span>{item.fullname}</span>
                                </p>
                            </div>
                            <div className="item-bottom">
                                <p className="fall">${Number(item.rates.USD).toFixed(2)}</p>
                                <p>{item.unitIncomeDesc}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
