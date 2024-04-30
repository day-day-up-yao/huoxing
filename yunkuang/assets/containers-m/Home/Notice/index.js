import React, { useEffect, useCallback } from 'react'
import Swiper from 'swiper/js/swiper'
import { useDispatch } from 'react-redux'

import './index.scss'

import leftimg from '../../../public/imgs/h5img/other/notice_l.png'
import rightimg from '../../../public/imgs/h5img/other/notice_r.png'
import Toast from '../../../components/Toast'

export default (props) => {
    const { announcelist } = props
    const dispatch = useDispatch()
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.notice-swiper', {
            direction: 'vertical', // 竖向切换选项
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true, // 动态监测器
            // observerParent: false,
            initialSlide: 0,
            autoplay: true,
            autoplayDisableOnInteraction: false
            // centeredSlides: true
        })
    }, [])
    // 标记已读消息
    const tagFn = useCallback((id) => {
        dispatch.public.messageRead({
            type: 0,
            msgId: id
        }).then((res) => {
            if (res.code === 0) {
                window.location.href = `/anmessage/${id}`
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="notice">
        <div className="notice-con">
            <div className="notice-left">
                <img src={leftimg} alt=""/>
            </div>
            <div className="notice-center">
                <div className="swiper-container notice-swiper">
                    <div className="swiper-wrapper">
                        {announcelist.msgList.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="notice-text" onClick={() => {
                                    tagFn(item.id)
                                }}>{item.title}</div>
                            </div>
                        ))}
                    </div>
                    {/* <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <!-- 如果需要滚动条 -->
                    <div class="swiper-scrollbar"></div> */}
                </div>
            </div>
            <div className="notice-right">
                <img src={rightimg} alt=""/>
            </div>
        </div>
    </div>
}
