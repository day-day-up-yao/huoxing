// 首页大banner
import React, { useEffect } from 'react'
import Swiper from 'swiper/js/swiper'
// import btcbanner from '../../public/imgs/newpage/btcbanner.png'
// import ethbanner from '../../public/imgs/newpage/ethbanner.png'
import './index.scss'
const autotrue = true
const autofalse = false
export default ({ bannerlist }) => {
    // const bannerlist = [
    //     { originalPic: btcbanner, clickUrl: '' },
    //     { originalPic: ethbanner, clickUrl: '' }
    // ]
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.swiper1', {
            pagination: {
                el: '.swiper-pagination1',
                type: 'bullets', // 分页器样式类型
                clickable: true // 点击分页器切换
            },
            direction: 'horizontal', // 水平切换选项
            autoplayDisableOnInteraction: false, // 一张不轮播
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true,
            observerParent: false,
            initialSlide: 0,
            autoplay: bannerlist && bannerlist.length === 1 ? autofalse : autotrue
            // // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        })
    }, [])
    return <div className="newbanner">
        <div className="swiper-container swiper1">
            <div className="swiper-wrapper">
                {bannerlist && bannerlist.map((item, index) => {
                    return <div className="swiper-slide" key={index}>
                        <a href={item.clickUrl} target="_blank">
                            <div className="bannerthree">
                                <img src={item.originalPic} alt=""/>
                            </div>
                        </a>
                    </div>
                })}
            </div>
            <div className="swiper-pagination swiper-pagination1"></div>
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
        </div>
    </div>
}
