import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'

// import bigimg from '../../../public/img/bigimg.png'
import ShareList from '../../../components/NaGa/ShareList'
import { gameList } from '../../../public/js/imgDefaut'

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])
export default (props) => {
    // function createArr (num) {
    //     let arr = []
    //     for (let i = 0; i < num; i++) {
    //         arr.push(i + 1)
    //     }
    //     let result = []
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         let rand = Math.ceil(Math.random() * i)
    //         // 根据arr数组长度，随机产生一个索引
    //         // 从原数组arr把该索引的元素删除，并加入到result数组--便是随机产生啦
    //         result.push(arr.splice(rand, 1))
    //     }
    //     return result
    // }
    // let tenArr = createArr(50)
    return <div className="right-con">
        <div className="right-con-banner">
            <Swiper
                className="naga-item-banner"
                preventClicks={false}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                pagination={{
                    el: '.swiper-pagination.right-naga-carousel-recommend-pag',
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'right-naga-carousel-recommend-pag-customs',
                    bulletActiveClass: 'right-naga-carousel-recommend-pag-customs-active'
                }}
            >
                {gameList.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className="itemcon-banner"
                            style={{
                                backgroundImage: `url(${item.bgimg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}
                        >
                            <div className="itemcon-banner-bg"/>
                            <div className="itemcon-banner-con">
                                <div className="itemcon-banner-con-top">
                                    <div className="banner-top-img">
                                        <img src={item.icon} alt=""/>
                                    </div>
                                    <div className="banner-con-top-left">
                                        <div className="banner-title">
                                            {item.name}
                                        </div>
                                        <ShareList
                                            link={item.twitter}
                                        />
                                    </div>
                                </div>
                                <div className="itemcon-banner-con-desc">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
                <div className="swiper-pagination right-naga-carousel-recommend-pag"></div>
            </Swiper>
        </div>
        <div className="all-list">
            {gameList.concat(gameList).concat(gameList).concat(gameList).map((item, index) => {
                return <div className="all-list-item" key={index} onClick={() => {
                    // goitemFn()
                    window.open(`/nagadetail?iteminfo=${JSON.stringify(item)}`)
                }}>
                    <div className="item-top">
                        <img src={item.icon} alt=""/>
                    </div>
                    <div className="item-bottom">
                        <div className="item-bottom-title">{item.name}</div>
                        <div className="item-bottom-desc">{item.desc}</div>
                        <ShareList/>
                    </div>
                </div>
            })}
            {/* {tenArr && tenArr.map((item) => {
                return <div className="all-list-item" key={item} onClick={() => {
                    // goitemFn()
                    window.location.href = '/nagadetail'
                }}>
                    <div className="item-top">
                        <img src={bigimg} alt=""/>
                    </div>
                    <div className="item-bottom">
                        <div className="item-bottom-title">MetaGods</div>
                        <div className="item-bottom-desc">Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</div>
                        <ShareList/>
                    </div>
                </div>
            })} */}
        </div>
    </div>
}
