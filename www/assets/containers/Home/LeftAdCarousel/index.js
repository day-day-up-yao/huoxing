import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mixUrl } from 'multiPublic'

import './index.scss'
import prevIcon from '../image/swiper-icon-prev.png'
import nextIcon from '../image/swiper-icon-next.png'
import adTitleIcon from '../image/ad-carousel-title.png'

export default () => {
    const { primaryImgData, recommendImgData } = useSelector((state) => ({
        primaryImgData: state.home.primaryImgData.length > 6 ? state.home.primaryImgData.slice(0, 6) : state.home.primaryImgData,
        recommendImgData: state.home.recommendImgData
    }), shallowEqual)
    // console.log(primaryImgData, recommendImgData)
    return (
        <div className="left-ad-carousel">
            <Swiper className="left-ad-carousel-primary"
                preventClicks={false}
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{ nextEl: '.swiper-button-next.rm-next', prevEl: '.swiper-button-prev.rm-prev' }}
                pagination={{ el: '.swiper-pagination.rm-pag', type: 'progressbar' }}>
                {
                    primaryImgData && primaryImgData.map((item, index) => {
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
                <div className="perv-bg">
                    <div className="swiper-button-prev rm-prev">
                        <img className="btn-img" src={prevIcon} />
                    </div>
                </div>
                <div className="next-bg">
                    <div className="swiper-button-next rm-next">
                        <img className="btn-img" src={nextIcon} />
                    </div>
                </div>
                <div className="swiper-pagination rm-pag"></div>
            </Swiper>
            <Swiper className="left-ad-carousel-recommend" preventClicks={false}
                pagination={{
                    el: '.swiper-pagination.left-ad-carousel-recommend-pag',
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'left-ad-carousel-recommend-pag-customs',
                    bulletActiveClass: 'left-ad-carousel-recommend-pag-customs-active'
                }}>
                {
                    recommendImgData && recommendImgData.map((item, index) => {
                        return (
                            <SwiperSlide className="left-ad-carousel-recommend-item" key={index}>
                                {
                                    item.map((itemEle, indexEle) => {
                                        return (
                                            <div className="left-ad-carousel-recommend-item-item" key={indexEle}>
                                                <a className="left-ad-carousel-recommend-item-tag" target="_blank" href={mixUrl.news(`/tags/${itemEle.tagsV2 ? JSON.parse(itemEle.tagsV2)[0].name : ''}`)}>
                                                    {itemEle.tagsV2 && JSON.parse(itemEle.tagsV2)[0].name}
                                                </a>
                                                <a className="left-ad-carousel-recommend-item-title" target="_blank" href={itemEle.url}>
                                                    {itemEle.title}
                                                </a>
                                                <a className="left-ad-carousel-recommend-item-text" target="_blank" href={itemEle.url}>
                                                    {itemEle.description !== '' ? itemEle.description : itemEle.title}
                                                </a>
                                                {indexEle === 0 ? <div className="left-ad-carousel-recommend-item-line"></div> : null}
                                            </div>
                                        )
                                    })
                                }
                            </SwiperSlide>
                        )
                    })
                }
                <div className="swiper-pagination left-ad-carousel-recommend-pag"></div>
            </Swiper>
        </div>
    )
}
