import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { isJp } from '../../public/js/index'
import Swiper from 'swiper/js/swiper'
import './index.scss'
import imgone from '../../public/imgs/onelist.jpg'
import imgtwo from '../../public/imgs/two.png'
import imgthree from '../../public/imgs/QandA.png'
import wechatcode from '../../public/imgs/wechatcode.jpg'
import weixinwerter from '../../public/imgs/weixinwerter.png'
import alowy from '../../public/imgs/alowy.png'
import timeimg from '../../public/imgs/time.png'
import jpselect from '../../public/imgs/jponeselect.png'
import jptwo from '../../public/imgs/jptwo.png'
import jpwechat from '../../public/imgs/jpwechat.png'
import Productlist from '../../components/Productlist/index'
// import Toast from '../../components/Toast'
const autotrue = true
const autofalse = false
export default (props) => {
    const { t } = useTranslation()
    const { productList, ratemonynumber, banneronelist, activlist, userKnows } = useSelector(state => ({
        productList: state.product.list,
        bannerList: state.product.banner,
        ratemonynumber: state.public.ratemony,
        banneronelist: state.product.bannerone,
        activlist: state.public.activelist,
        userKnows: state.public.userKnow
    }))
    const [titleflag, setTitleflag] = useState(false)
    const [titleflags, setTitleflags] = useState(false)
    const qustionone = [
        {
            title: t('index.top.titleone'),
            prompt: t('index.top.promptone')
        },
        {
            title: t('index.top.titletwo'),
            prompt: t('index.top.prompttwo')
        },
        {
            title: t('index.top.titlethree'),
            prompt: t('index.top.promptthree')
        },
        {
            title: t('index.top.titlefour'),
            prompt: t('index.top.promptfour')
        },
        {
            title: t('index.top.titlefive'),
            prompt: t('index.top.promptfive')
        },
        {
            title: t('index.top.titlesix'),
            prompt: t('index.top.promptsix')
        }
    ]
    const qustiontwo = [
        {
            title: t('index.top.titleseven'),
            prompt: t('index.top.promptseven')
        },
        {
            title: t('index.top.titleeight'),
            prompt: t('index.top.prompteight')
        },
        {
            title: t('index.top.titlenine'),
            prompt: t('index.top.promptnine')
        },
        {
            title: t('index.top.titleten'),
            prompt: t('index.top.promptten')
        },
        {
            title: t('index.top.titleeleven'),
            prompt: t('index.top.prompteleven')
        },
        {
            title: t('index.top.titletwoven'),
            prompt: t('index.top.prompttweven')
        }
    ]
    useEffect(() => {
        console.log(userKnows)
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },
            direction: 'horizontal', // 水平切换选项
            autoplayDisableOnInteraction: false, // 一张不轮播
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true,
            observerParent: false,
            initialSlide: 0,
            autoplay: banneronelist.length === 1 ? autofalse : autotrue,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })

        // 根据地址栏显示展示哪类产品
        if ((window.location.href).split('/')[3] && (window.location.href).split('/')[3] === '#productlists') setProductType({ type: 2, joinType: 0 })
    }, [banneronelist])

    // 产品列表
    const [productType, setProductType] = useState({
        type: isJp ? 2 : 1, // 永久产品，分时租赁
        joinType: 0 // 是否是联合挖矿
    }, [])
    // 活动产品
    const actproductType = { type: 1, joinType: 2 }
    // 极速回本产品
    // const speedproductType = { type: 1, joinType: 3 }
    return <div className="home-page-pc">
        <div className="Hometop">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {banneronelist.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            <div className="bannerthree" style={{ background: `url(` + item.originalPic + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }} onClick={() => {
                                window.location.href = item.clickUrl
                            }}></div>
                        </div>
                    })}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            <div className="callboss" style={{ display: isJp ? 'none' : '' }}>
                <div className="callboss-img">
                    <img src={wechatcode} />
                </div>
                <p>{t('index.top.wechat')}</p>
            </div>
            {/* <div className="Hometop_imgb">
                <div className="Hometop_B">
                    {Array.isArray(bannerList) && bannerList.map((item, index) => {
                        return <div className="Hometop_B_img" key={index} onClick={() => { window.location.href = item.clickUrl }}>
                            <img src={item.originalPic} />
                        </div>
                    })}
                </div>
            </div> */}
        </div>
        {/* <div className="announcement">
            <span>公告：</span>
            <a href="https://mars4913.zendesk.com/hc/zh-cn/articles/900001191806-%E6%B5%8B%E8%AF%95">哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</a>
        </div> */}
        <a name='productlist'></a>
        <div className="HomeNew_C_t" id='#productlist'>
            <div className="listselect" onClick={() => {
                setProductType({ type: 1, joinType: 0 })
            }}>
                <h3 style={{ background: productType.type === 1 ? '#242F44' : '#fff' }}></h3>
                <div className="listselect-title">
                    <span style={{ color: productType.type === 1 ? '#222' : 'rgba(153, 153, 153, 1)' }}>{t('index.top.permanent')}</span>
                    <a href="/instructions">{t('index.top.more')} {'>'} </a>
                </div>
                <div className="listselect-con">
                    <div className="listselect-con-left" style={{ color: productType.type === 1 ? '#222' : 'rgba(153, 153, 153, 1)' }}>
                        <p>{t('index.top.haveproduct')}</p>
                        <p>{t('index.top.invest')}</p>
                        <p>{t('index.top.enjoy')}</p>
                    </div>
                    <div className="listselect-con-right">
                        <img src={alowy} alt="" />
                    </div>
                </div>
            </div>
            <a name='productlists'></a>
            <div className="listselect" onClick={() => {
                setProductType({ type: 2, joinType: 0 })
            }} id='#productlists'>
                <h3 style={{ background: productType.type === 1 ? '#fff' : '#242F44' }}></h3>
                <div className="listselect-title">
                    <span style={{ color: productType.type === 1 ? 'rgba(153, 153, 153, 1)' : '#222' }}>{t('index.top.timeproduct')}</span>
                    <a href="/instructions">{t('index.top.more')} {'>'} </a>
                </div>
                <div className="listselect-con">
                    <div className="listselect-con-left" style={{ color: productType.type === 1 ? 'rgba(153, 153, 153, 1)' : '#222' }}>
                        <p>{t('index.top.makeproduct')}</p>
                        <p>{t('index.top.invests')}</p>
                        <p>{t('index.top.enjoys')}</p>
                    </div>
                    <div className="listselect-con-right">
                        <img src={timeimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="HomeNew_C">
            <div className="HomeNew_C_y">
                {isJp ? (
                    <Productlist productList = {productList} ratemonynumber = {ratemonynumber} productType = {productType}/>
                ) : (
                    <div>
                        <Productlist productList = { activlist } ratemonynumber = {ratemonynumber} productType = {actproductType}/>
                        <Productlist productList = { productList } ratemonynumber = {ratemonynumber} productType = {productType}/>
                    </div>
                )}
                <div className="product-tou-img">
                    <img src={isJp ? jpselect : imgone} alt="" />
                </div>
                <div className="product-tou-two">
                    <div className="product-tou-imgs">
                        <img src={isJp ? jptwo : imgtwo} alt="" />
                    </div>
                </div>
                <div className="product-tous" style={{ display: isJp ? 'none' : '' }}>
                    <h2>{t('index.top.userwerter')}</h2>
                    <div className="product-tou-imgss">
                        <img src={isJp ? jpwechat : weixinwerter} alt="" />
                    </div>
                </div>
                <div className="product-tou">
                    <h2>Q&A</h2>
                    <div className="qalist">
                        <ul>
                            {Array.isArray(qustionone) && qustionone.map((item, index) => {
                                return <li key={index}>
                                    <span onMouseEnter={() => { setTitleflag(index) }} onMouseLeave={() => { setTitleflag(false) }}>{item.title}</span>
                                    <p style={{ display: titleflag === index ? 'block' : 'none' }}>{item.prompt}</p>
                                </li>
                            })}
                        </ul>
                        <ul>
                            {Array.isArray(qustiontwo) && qustiontwo.map((item, index) => {
                                return <li key={index}>
                                    <span onMouseEnter={() => { setTitleflags(index) }} onMouseLeave={() => { setTitleflags(false) }}>{item.title}</span>
                                    <p style={{ display: titleflags === index ? 'block' : 'none' }}>{item.prompt}</p>
                                </li>
                            })}
                        </ul>
                        <div className="qalistimg">
                            <img src={imgthree} alt="" />
                        </div>
                    </div>
                </div>
                <div className="product-tou-bottom">
                    <h3><span>{t('index.top.teamwork')}</span></h3>
                    <div className="product-introbottom">
                        <a href="https://www.bitmain.com/">{t('index.top.bit')}</a>
                        <a href="https://www.avalonminer.shop/">{t('index.top.jianan')}</a>
                        <a href="https://www.whatsminer.com/mall/BTmall.html">{t('index.top.WhatsMiner')}</a>
                        <a href="https://www.hummerminer.com/">{t('index.top.fn')}</a>
                        <a href="https://btc.com/">{t('index.top.btc')}</a>
                        <a href="https://v3.antpool.com/home">{t('index.top.my')}</a>
                        <a href="https://www.poolin.com/">{t('index.top.by')}</a>
                        <a href="http://oldltc.pandabtc.cn/">{t('index.top.lbt')}</a>
                        <a href="http://www.wayi.cn/index">{t('index.top.wyw')}</a>
                        <a href="">{t('index.top.btlj')}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
