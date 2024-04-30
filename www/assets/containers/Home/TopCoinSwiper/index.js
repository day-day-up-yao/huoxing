import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'
import { mixUrl } from 'multiPublic'
import { getExchangeRates, getMarketQuotations } from '../../../redux/actions/home'

const cocoHasArr = ['btc', 'eth', 'xrp', 'bch', 'ltc', 'okb', 'link', 'ada', 'xmr', 'ht', 'xtz', 'eos', 'etc', 'dash', 'neo', 'atom', 'ont', 'zec', 'mkr8', '']

export default () => {
    const { usdToCnyRate, slideTopCoinData } = useSelector((state) => ({
        usdToCnyRate: state.home.usdToCnyRate,
        slideTopCoinData: state.home.slideTopCoinData
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(getExchangeRates())
            dispatch(getMarketQuotations())
        }, 60000)
        return () => {
            clearInterval(id)
        }
    }, [dispatch.home])

    return (
        <div className="top-coin-swiper-wrap" style={{ display: slideTopCoinData.length > 0 ? 'block' : 'none' }}>
            {/* <h6 className="coin-text">推广</h6> */}
            <div className="top-coin-swiper-contain">
                <Swiper className="top-coin-swiper" preventClicks={true}
                    navigation={{ nextEl: '.market-next', prevEl: '.market-prev' }}
                    autoplay={{ delay: 8000, disableOnInteraction: false }} >
                    {
                        slideTopCoinData && slideTopCoinData.map((item, index) => {
                            return (
                                <SwiperSlide className="swiper-slide clearfix" key={index}>
                                    {
                                        item.map((itemEle, indexEle) => {
                                            let hasNum = parseFloat(itemEle.rise_fall_24h * 100)
                                            const cocoHas = cocoHasArr.indexOf(itemEle.currency.toLowerCase()) > -1
                                            return (
                                                <div className="slide-item clearfix" key={indexEle}>
                                                    <div className="icon-cont">
                                                        <p className="icon-text">
                                                            <img src={itemEle.icon} alt="" />
                                                            <span>{itemEle.currency_dsp}</span>
                                                        </p>
                                                        <h5>{`￥${Math.round(usdToCnyRate * itemEle.price * 100) / 100}`}</h5>
                                                    </div>
                                                    <div className="exponent-big">
                                                        <p className={`exponent ${hasNum > 0 ? 'rise' : 'fall'}`}>
                                                            {hasNum > 0 ? '+' + (itemEle.rise_fall_24h * 100).toFixed(2) + '%' : (itemEle.rise_fall_24h * 100).toFixed(2) + '%'}
                                                        </p>
                                                        <span className={`${hasNum > 0 ? 'rise' : 'fall'}`}></span>
                                                    </div>
                                                    <a className="coco-link" style={{ display: cocoHas ? 'block' : 'none' }} target="_blank" href={mixUrl.cococoin(`exchange/${itemEle.currency.toUpperCase()}/USDT`)}></a>
                                                </div>
                                            )
                                        })
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="swiper-button-prev market-prev"></div>
                <div className="swiper-button-next market-next"></div>
            </div>
        </div >
    )
}
