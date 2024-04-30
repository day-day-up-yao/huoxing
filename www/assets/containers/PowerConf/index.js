import React from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.scss'

import { agenderlist, guestlist, logolist, groupList, guestLists } from '../../public/js/powerdate'

// import { isPc } from '../../../_multiappsharing/public/index'

SwiperCore.use([Autoplay, Navigation, Pagination])

export default () => {
    return <div className="singapore-wrapper">
        <section className="content-sg">
            <div className="first-page">
                {/* <div className="bg-shadow"></div> */}
                <header>
                    <a href="https://www.marsbit.cc" target="_blank">
                        <img alt="create-element" src={require('./images/singapore/logo.png')} className="marsbit-icon"/>
                    </a>
                </header>
                <div className="content">
                    <div className="topic">
                        {/* <h1>POW'ER 2023</h1> */}
                        <h2>
                            <img src={require('./images/singapore/headertext.png')} alt=""/>
                        </h2>
                        <div className="topic-instit">
                            <div className="organizers organizers-left">主办<img src={require('./images/singapore/sinlogo.png')} alt=""/></div>
                            <div className="organizers">协办
                                <img style={{ width: 101 }} src={require('./images/singapore/zhichi1.png')} alt=""/>
                                <img src={require('./images/singapore/gdocket.png')} alt=""/>
                                <img src={require('./images/singapore/element_logo.png')} alt=""/>
                            </div>
                        </div>
                        {/* <div className="organizers other-insit">协办
                            <img style={{ width: 101 }} src={require('./images/singapore/zhichi1.png')} alt=""/>
                            <img className="vdxlogo" src={require('./images/singapore/glogo.png')} alt=""/>
                            <img src={require('./images/singapore/element_logo.png')} alt=""/>
                        </div> */}
                        <h4><img src={require('./images/singapore/clock.svg')} alt=""/> 01.09-01.10</h4>
                        <h5><img src={require('./images/singapore/position.svg')} alt=""/> 香港数码港</h5>
                        <a href="https://www.eventbrite.com/checkout-external?eid=498465633127" target="_blank">Buy Ticket</a>
                        {/* <div className="topic-bottom">
                            <p>商务合作</p>
                            <p>联系人：Tony</p>
                            <p>手机：+86 13699119973</p>
                            <p>Email：tangteng@huoxing24.com</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="common-box meeting">
                <h3 className="title">大会议程</h3>
                {/* <!-- <div className="select-data">
                    <div className="item-left">17th</div>
                    <div className="item-right">18th</div>
                </div> --> */}
                <div className="agender">
                    {agenderlist.map((item, index) => {
                        return <div className="agender-item" key={index}>
                            <div className="agender-item-title">
                                <div className="item-title-border"/>
                                <span>{item.time}</span>
                            </div>
                            <div className="agender-item-child">
                                {item.desclist.map((itm, idx) => {
                                    return <div className="agender-item-child-itm" key={idx}>{itm}</div>
                                })}
                            </div>
                        </div>
                    })}
                    {/* <ul className="tab">
                        {agenderlist.map((item, index) => {
                            return <li key={index}>
                                <div className="border-inner">
                                    <span className="time">{item.time}</span>
                                    <div className="meeting-info">
                                        <span className="topic">{item.title}</span>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul> */}
                </div>
                <div className="point-two"></div>
            </div>
            <div className="common-box guest">
                <h3 className="title speaker">本期嘉宾</h3>
                <div className="speaker-list">
                    <Swiper
                        className="swiper"
                        preventClicks={false}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + '</span>'
                            }
                        }}
                    >
                        {groupList(guestLists, 12).map((item, index) => {
                            return <SwiperSlide key={index}>
                                <div className="speaker-box">
                                    {item.map((itm, idx) => {
                                        // const desc = itm.brief
                                        return <div className="speaker-content" key={idx}>
                                            <div className="speaker-photo">
                                                <div className="speaker-inner">
                                                    <img src={itm.icon} alt=""/>
                                                </div>
                                            </div>
                                            <div className="speaker-info">
                                                <h4><div>{itm.name}</div></h4>
                                                <div className="divsion"></div>
                                                <p>{itm.brief}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </SwiperSlide>
                        })}
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
            </div>

            <div className="common-box guest">
                <h3 className="title speaker">往期嘉宾</h3>
                <div className="speaker-list">
                    <Swiper
                        className="swiper"
                        preventClicks={false}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + '</span>'
                            }
                        }}
                    >
                        {guestlist.map((item, index) => {
                            return <SwiperSlide key={index}>
                                <div className="speaker-box">
                                    {item.list.map((itm, idx) => {
                                        return <div className="speaker-content" key={idx}>
                                            <div className="speaker-photo">
                                                <div className="speaker-inner">
                                                    <img src={itm.icon} alt=""/>
                                                </div>
                                            </div>
                                            <div className="speaker-info">
                                                <h4><div>{itm.name}</div></h4>
                                                <div className="divsion"></div>
                                                <p>{itm.brief}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </SwiperSlide>
                        })}
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
            </div>
            {logolist.map((item, index) => (
                <div className="common-box media-box" key={index}>
                    <div className="media-list">
                        <h3 className="title">{item.title}</h3>
                        <div className="logo-list">
                            {item.list.map((itm, idx) => (
                                <img src={itm} alt="" key={idx}/>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="road">
                <div className="whiteline"></div>
                <div className="common-box road-box">
                    <h3 className="title road-map">往期大会</h3>
                    <div className="road-desc">POWER源于比特币共识机制工作量证明（Proof-of-Work，PoW），意为加密产业贡献者和推动力。POWER由MarsBit发起成立，自2018年起，先后在硅谷、纽约、北京、上海、深圳、重庆等地举行7场大型产业峰会，数百场周边沙龙活动。</div>
                    <div className="road-list">
                        <div className="city-list">
                            <div className="city-item">
                                <div className="arrow city-desc">
                                    <img src={require('./images/singapore/up.png')}/>
                                </div>
                                <div className="red-point city-desc">
                                    <div className="point"></div>
                                </div>
                                <div className="city city-desc">
                                    <p>2018.8</p>
                                    <p>硅谷</p>
                                </div>
                            </div>
                            <div className="city-item">
                                <div className="city city-desc">
                                    <p>2018.10</p>
                                    <p>纽约</p>
                                </div>
                                <div className="red-point city-desc">
                                    <div className="point"></div>
                                </div>
                                <div className="arrow city-desc">
                                    <img src={require('./images/singapore/down.png')}/>
                                </div>
                            </div>
                            <div className="city-item">
                                <div className="arrow city-desc">
                                    <img src={require('./images/singapore/up.png')}/>
                                </div>
                                <div className="red-point city-desc">
                                    <div className="point"></div>
                                </div>
                                <div className="city city-desc">
                                    <p>2019.3</p>
                                    <p>重庆</p>
                                </div>
                            </div>
                            <div className="city-item">
                                <div className="city city-desc">
                                    <p>2020.8</p>
                                    <p>北京</p>
                                </div>
                                <div className="red-point city-desc">
                                    <div className="point"></div>
                                </div>
                                <div className="arrow city-desc">
                                    <img src={require('./images/singapore/down.png')}/>
                                </div>

                            </div>
                            <div className="city-item">
                                <div className="arrow  city-desc">
                                    <img src={require('./images/singapore/up.png')}/>
                                </div>
                                <div className="red-point city-desc">
                                    <div className="point"></div>
                                </div>
                                <div className="city  city-desc">
                                    <p>2020.11</p>
                                    <p>深圳</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="common-box photowall">
                <div className="photo-box">
                    <div className="photo-list">
                        <div className="line">
                            <div className="photo-item low">
                                <img src={require('./images/singapore/2.png')} alt="" />
                            </div>
                            <div className="blank"></div>
                            <div className="photo-item height">
                                <img src={require('./images/singapore/1.png')} alt="" />
                            </div>
                        </div>
                        <div className="line">
                            <div className="photo-item height">
                                <img src={require('./images/singapore/3.png')} alt="" />
                            </div>
                            <div className="blank"></div>
                            <div className="photo-item low">
                                <img src={require('./images/singapore/4.png')} alt="" />
                            </div>
                        </div>
                        <div className="line">
                            <div className="photo-item low">
                                <img src={require('./images/singapore/5.png')} alt="" />
                            </div>
                            <div className="blank"></div>
                            <div className="photo-item height">
                                <img src={require('./images/singapore/6.png')} alt="" />
                            </div>
                        </div>
                        <div className="line">
                            <div className="photo-item height">
                                <img src={require('./images/singapore/7.png')} alt="" />
                            </div>
                            <div className="blank"></div>
                            <div className="photo-item low">
                                <img src={require('./images/singapore/8.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="common-box aboutus">
                <h3 className="title">
                    关于MarsBit
                </h3>
                <p>MarsBit是火星财经的全球品牌，面向区块链从业者，依托资讯、技术研发、开放平台、产业研究、教育培训、会议展览、投资等产品及服务，致力于成为加密产业持续、良性发展的推动力。目前，服务用户数量超300万，连接国内区块链技术及应用型企业超6000家。<br/>公司于2018年2月发起成立，获得IDG资本、策源资本、泛城资本、币安、火币、OKX等多家知名机构投资。截至2019年9月，最新估值达2亿美元。</p>
            </div>
            <div className="regester-text">
                有意登記入駐 「HONG KONG WEB 3.0 HUB」請填寫下方表格G-Rocket HKWEB3HUB 报名通道
                <a href="http://g-rocket.co/?page_id=25932" target="_blank">立即报名</a>
            </div>
        </section>
        <div className="power-footer">
            <div className="power-footer-con">
                <div className="power-footer-left">
                    <img src={require('./images/singapore/footerleft.png')} alt=""/>
                    <span>01.09 - 01.10</span>
                </div>
                <div className="power-footer-right">
                    <div className="power-footer-right-title">商务合作</div>
                    <div className="power-footer-right-desc">
                        <p>联系人：Tony</p>
                        <p>手机：+86 13699119973</p>
                        <p>Email：tangteng@huoxing24.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
