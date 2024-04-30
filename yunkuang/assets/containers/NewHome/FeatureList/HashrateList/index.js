import React, { useEffect, useContext } from 'react'
import Swiper from 'swiper/js/swiper'

import { Context } from '../../Context'
import { Curreylog } from '../../../../public/js/curryicon'
import { Encrypt } from '../../../../public/js/index'

import './index.scss'

export default () => {
    const { lists } = useContext(Context)
    // const [productlist, setProductlist] = useState([])
    // useEffect(() => {
    //     const productgroup =
    // }, [])
    // console.log(lists)
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.hame-hashrate-swiper', {
            pagination: {
                el: '.home-swiper-pagination1',
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
            autoplay: false
            // // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        })
    }, [])
    // const bannerlist = [1, 2, 3, 4, 5, 6]
    const curTime = Date.parse(new Date())
    return (
        <div className="home-hashrate">
            <div className="swiper-container hame-hashrate-swiper">
                <div className="swiper-wrapper">
                    {Array.from({ length: parseInt(lists.length / 6) + 1 }).map((itm, num) => {
                        return (
                            <div className="swiper-slide" key={num}>
                                {lists.slice(num * 6, 6 * (num + 1)).map((item, index) => {
                                    let timefalg = 0
                                    let btname = ''
                                    if (item.endTime > curTime) {
                                        if (item.beginTime < curTime) {
                                            timefalg = 1
                                            btname = 'Buy now'
                                        } else {
                                            timefalg = 2
                                            btname = 'Preparing'
                                        }
                                    } else {
                                        timefalg = 3
                                        btname = 'Ended'
                                    }
                                    return (
                                        <a href={`/product/${Encrypt(item.id.toString())}`} target="_blank" key={index}>
                                            <div className="hame-hashrate-item">
                                                <div className="hame-hashrate-item-title">
                                                    <img
                                                        src={
                                                            Curreylog.filter((itm) => {
                                                                return itm.name === item.incomeCurrency
                                                            })[0].logo
                                                        }
                                                        alt=""
                                                    />
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className="hame-hashrate-item-rate">
                                                    <div className="hame-hashrate-item-rate-item">
                                                        <div className="hame-hashrate-item-rate-item-top">
                                                            {item.hashrateFormat} {item.hashrateUnit}
                                                        </div>
                                                        <div className="hame-hashrate-item-rate-item-bottom">
                                                            3250 W
                                                        </div>
                                                    </div>
                                                    <div className="hame-hashrate-item-rate-item">
                                                        <div className="hame-hashrate-item-rate-item-top">
                                                            {item.priceClean} {item.priceCurrency}
                                                        </div>
                                                        <div className="hame-hashrate-item-rate-item-bottom">
                                                            {Number(item.minerTypeInfo.electricFee).toFixed(2)} U/kWh
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`hame-hashrate-item-bottom item-bottom-${timefalg}`}>
                                                    {btname}
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="swiper-pagination home-swiper-pagination1"></div>
                {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
            </div>
        </div>
    )
}
