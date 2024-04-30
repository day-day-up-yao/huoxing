import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'
export default () => {
    const { primaryImgData } = useSelector((state) => ({
        primaryImgData: state.home.primaryImgData
    }), shallowEqual)

    return (
        <div className="top-ad-carousel">
            <Swiper id='newsWrap'>
                {
                    primaryImgData && primaryImgData.map((item, index) => {
                        return (
                            <SwiperSlide className="" key={index}>
                                <a title={item.title} target="_self" href={item.url}>
                                    <img src={item.mImgSrc} alt={item.title} />
                                </a>
                                <span className="img-news-title">{item.title}</span>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
