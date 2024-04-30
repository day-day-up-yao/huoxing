import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'

import { mixUrl } from 'multiPublic'

export default () => {
    const { activityRecommendListData } = useSelector((state) => ({
        activityRecommendListData: state.activity.activityRecommendListData
    }), shallowEqual)

    return (
        <div className="activity-list-top-banner-swiper" style={{ height: activityRecommendListData.inforList.length === 0 ? '65px' : '390px' }}>
            {activityRecommendListData.inforList.length > 2
                ? <div className="activity-list-top-banner-swiper-box">
                    <Swiper className="activity-list-top-banner-swiper-primary"
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView='auto'
                        preventClicks={false}
                        autoplay={{ delay: 5000, disableOnInteraction: 'false' }}
                        pagination={{
                            el: '.swiper-pagination.activity-p',
                            type: 'bullets',
                            clickable: false
                        }}
                        navigation={{ nextEl: '.activity-n-x', prevEl: '.activity-p-x' }}
                        effect='coverflow'
                        coverflowEffect={{
                            rotate: 30, // 旋转的角度
                            stretch: 300, // 拉伸   图片间左右的间距和密集度
                            depth: 431, // 深度   切换图片间上下的间距和密集度
                            modifier: 2, // 修正值 该值越大前面的效果越明显
                            slideShadows: false // 页面阴影效果
                        }}
                    >
                        {
                            activityRecommendListData && activityRecommendListData.inforList.map((item, index) => {
                                const coverPic = JSON.parse(item.coverPic)
                                return (
                                    <SwiperSlide key={index}>
                                        <a title={item.title} target="_blank" href={mixUrl.main(`/huodong/${item.id}`)}>
                                            <img src={coverPic.pc_recommend} alt={item.title} />
                                        </a>
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className="swiper-pagination activity-p"></div>
                        <div className="swiper-button-next activity-n-x"></div>
                        <div className="swiper-button-prev activity-p-x"></div>
                    </Swiper>
                </div>
                : (activityRecommendListData.inforList.length > 0
                    ? <div className="activity-list-top-banner-swiper-box" style={{ width: '1200px' }}>
                        <Swiper className="activity-list-top-banner-swiper-primary"
                            loop={true}
                            preventClicks={false}
                            autoplay={{ delay: 5000, disableOnInteraction: 'false' }}
                            pagination={{
                                el: '.swiper-pagination.activity-p',
                                type: 'bullets',
                                clickable: false
                            }}
                            navigation={{ nextEl: '.activity-next', prevEl: '.activity-prev' }}
                        >
                            {
                                activityRecommendListData && activityRecommendListData.inforList.map((item, index) => {
                                    const coverPic = JSON.parse(item.coverPic)
                                    return (
                                        <SwiperSlide key={index}>
                                            <a title={item.title} target="_blank" href={mixUrl.main(`/huodong/${item.id}`)}>
                                                <img src={coverPic.pc_recommend} alt={item.title} />
                                            </a>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            <div className="swiper-pagination activity-p"></div>
                            <div className="activity-next"></div>
                            <div className="activity-prev"></div>
                        </Swiper>
                    </div>
                    : null)
            }
        </div >
    )
}
