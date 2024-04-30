import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import Swiper from 'swiper/js/swiper'
import { useTranslation } from 'react-i18next'
import pointerright from '../../public/imgs/newedition/13.png'
import Header from './header'
import Hotlist from '../../components-m/Businesslist/index'
import Prompt from '../../components/Prompt'
import Disclaimer from '../../components/Disclaimer'
import './index.scss'
const autotrue = true
const autofalse = false
export default (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [costlist, setCostlist] = useState([])
    const [costflag, setCostflag] = useState(false)
    // const dispatch = useDispatch()
    // const [currencylist, setCurrencylist] = useState([])
    const { bannerList, apppuductlists, userKonws } = useSelector(state => ({
        bannerList: state.product.banner,
        banneronelists: state.product.bannerone,
        apppuductlists: state.public.apppuductlist,
        userKonws: state.public.userKnow
    }))
    // const [userKnows, setUserKnows] = useState()
    useEffect(() => {
        if (window.localStorage.getItem('costorder')) {
            setCostflag(true)
        }
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true,
            observerParent: false,
            initialSlide: 0,
            autoplay: bannerList && bannerList.length === 1 ? autofalse : autotrue,
            autoplayDisableOnInteraction: false,
            centeredSlides: true
            // // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        })
        if (Cookies.get('user_id')) {
            dispatch.order.collectOrder({
                status: 0
            }).then((res) => {
                if (res.code === 0) {
                    setCostlist(res.data !== null ? res.data : [])
                }
            })
        }
    }, [])
    return <div className="home-page-m">
        <Header/>
        {costlist.length > 0 && !costflag && <Prompt num={costlist.length} />}
        {!Cookies.get('c_token') && <Disclaimer knowinfo={userKonws}/>}
        <div className="Hometop-m">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {bannerList && bannerList.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            <div className="bannerthree" onClick={() => {
                                window.location.href = item.clickUrl
                            }}>
                                <img src={item.originalPic} alt=""/>
                            </div>
                        </div>
                    })}
                </div>
                <div className="swiper-pagination"></div>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
            </div>
        </div>
        {/* <div className="homebtcprice">
            {currencylist.length > 0 ? (
                currencylist.map((item, index) => {
                    return <div className='homebtcprice-left' key={index}>
                        <p>{item.symbol_dsp}/USDT</p>
                        <p style={{ color: item.rise_fall_24h < 0 ? '#ee4d64' : '#00AD90', fontWeight: '600' }}>{Number(item.price_usd).toFixed(2)}</p>
                        <p style={{ color: item.rise_fall_24h < 0 ? '#ee4d64' : '#00AD90' }}> {item.rise_fall_24h > 0 ? '+' : ''}{(item.rise_fall_24h * 100).toFixed(2)}%</p>
                    </div>
                })
            ) : ('')}
        </div> */}
        <div className="timeactive">
            <div className="timeactive-left">
                <span>{t('h5.index.recommended')}</span>
                {/* <span>抓住牛市挖矿红利</span> */}
            </div>
            <div className="timeactive-right">
                <span onClick={() => {
                    window.location.href = '/tomall'
                }}>{t('h5.index.more')}</span>
                <div className="timeactive-right-img">
                    <img src={pointerright} alt=""/>
                </div>
            </div>
        </div>
        <div className="HomeNew_C-m">
            <a name='productlist'></a>
            <div className="HomeNew_C_y" id='productlist'>
                <a name='productlists'></a>
                <Hotlist productList = {apppuductlists}/>
                {/* <div className="home-info-con">
                    <div className="home-info-con-title">
                        <span>矿业</span>
                        <span>头条</span>
                    </div>
                    {infomsg.map((item, index) => {
                        return <a href={`/informessage/${item.id}?sign=深度`} key={index}>
                            <div className="info-con-msg">
                                <div className="info-con-msg-left">
                                    <h2>{item.title}</h2>
                                    <p>
                                        <span>{item.nickName}</span>
                                        <span>{formatTime(Number(item.publishTime), 'MM-dd hh:mm')}</span>
                                    </p>
                                </div>
                                <div className="info-con-msg-right">
                                    <img src={JSON.parse(item.coverPic).pc} alt=""/>
                                </div>
                            </div>
                        </a>
                    })}
                </div> */}
            </div>
        </div>
    </div>
}
