import React, { useCallback } from 'react'

import './index.scss'

import { agenderlist, guestlist, logolist, guestLists } from '../../public/js/powerdate'

export default () => {
    const handleMoure = useCallback(() => {
        const wxpeaker = document.getElementById('wxspeakerlist')
        const expandhtm = document.getElementById('powerexpand')
        wxpeaker.style.height = 'auto'
        expandhtm.style.display = 'none'
    }, [])
    const handleoneMoure = useCallback(() => {
        const wxpeaker = document.getElementById('onewxspeakerlist')
        const expandhtm = document.getElementById('onepowerexpand')
        wxpeaker.style.height = 'auto'
        expandhtm.style.display = 'none'
    }, [])
    return <div className="singapore-wrapper">
        <section className="content-sg">
            <div className="first-page">
                <div className="logo">
                    <a href="https://m.marsbit.cc" target="_blank">
                        <img alt="create-element" src={require('../../containers/PowerConf/images/singapore/logo.png')} className="marsbit-icon"/>
                    </a>
                </div>
                <div className="power-shadow">
                    <div className="content">
                        <div className="topic">
                            {/* <h1>POW’ER 2023</h1> */}
                            <h2>
                                <img src={require('../../containers/PowerConf/images/singapore/headertext.png')} alt=""/>
                            </h2>
                            <div className="unionhost">
                                <div className="topic-instit">
                                    <div className="organizers">主办<img src={require('../../containers/PowerConf/images/singapore/sinlogo.png')} alt=""/></div>
                                    {/* <div className="organizers">支持机构：<img className="second-img" src={require('../../containers/PowerConf/images/singapore/zhichi1.png')} alt=""/></div> */}
                                </div>
                                <div className="organizers">协办
                                    <img className="cuberlogo" src={require('../../containers/PowerConf/images/singapore/zhichi1.png')} alt=""/>
                                    <img src={require('../../containers/PowerConf/images/singapore/gdocket.png')} alt=""/>
                                    <img src={require('../../containers/PowerConf/images/singapore/element_logo.png')} alt=""/>
                                </div>
                            </div>
                            <h4><img src={require('../../containers/PowerConf/images/singapore/clock.svg')} alt=""/> 01.09-01.10</h4>
                            <h5><img src={require('../../containers/PowerConf/images/singapore/position.svg')} alt=""/> 香港数码港</h5>
                        </div>
                    </div>
                    <a href="https://www.eventbrite.com/checkout-external?eid=498465633127" target="_blank">Buy Ticket</a>
                </div>
            </div>
            {/* <div className="power-business">
                <p>商务合作</p>
                <p>联系人：Tony</p>
                <p>手机：+86 13699119973</p>
                <p>Email：tangteng@huoxing24.com</p>
            </div> */}
            <div className="common-box meeting">
                <div className="point-one"></div>
                <h3 className="title">大会议程</h3>
                <div data-role="collapsibleset" data-theme="a" data-content-theme="a">
                    <div className="agender-list">
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
                    </div>
                </div>
            </div>
            <div className="common-box guest">
                <div className="point-two"></div>
                <h3 className="title speaker">本期嘉宾</h3>
                <div className="speak-mask">
                    <div className="wxspeaker-list" id="onewxspeakerlist">
                        <div className="wxspeaker-list-item">
                            {guestLists.map((item, index) => {
                                return <div className="speaker-content" key={index}>
                                    <div className="speaker-photo">
                                        <div className="speaker-inner">
                                            <img src={item.icon} alt=""/>
                                        </div>
                                    </div>
                                    <div className="speaker-info">
                                        <h4><div>{item.name}</div></h4>
                                        <div className="divsion"></div>
                                        <p>{item.brief}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="expand" id="onepowerexpand" onClick={() => {
                        handleoneMoure()
                    }}>
                        <span className="more"></span>
                    </div>
                </div>
            </div>
            <div className="common-box guest">
                <div className="point-two"></div>
                <h3 className="title speaker">往期嘉宾</h3>
                <div className="speak-mask">
                    <div className="wxspeaker-list" id="wxspeakerlist">
                        {guestlist.map((item, index) => {
                            return <div key={index} className="wxspeaker-list-item">
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
                        })}
                    </div>
                    <div className="expand" id="powerexpand" onClick={() => {
                        handleMoure()
                    }}>
                        <span className="more"></span>
                    </div>
                </div>
            </div>
            {/* <div className="common-box media-box">
                <div className="media-list"></div>
                <div className="point-three"></div>
            </div> */}
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
            <div className="common-box road-box">
                <h3 className="title road-map">往期大会</h3>
                <div className="road-desc">POWER源于比特币共识机制工作量证明（Proof-of-Work，PoW），意为加密产业贡献者和推动力。POWER由MarsBit发起成立，自2018年起，先后在硅谷、纽约、北京、上海、深圳、重庆等地举行7场大型产业峰会，数百场周边沙龙活动。</div>
                <div className="road-list">
                    <div className="whiteline"></div>
                    <div className="city-list">
                        <div className="city-item">
                            <div className="arrow city-desc">
                                <img src={require('../../containers/PowerConf/images/singapore/up.png')}/>
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
                            <div className="arrow">
                                <img src={require('../../containers/PowerConf/images/singapore/down.png')}/>
                            </div>
                        </div>
                        <div className="city-item">
                            <div className="arrow city-desc">
                                <img src={require('../../containers/PowerConf/images/singapore/up.png')}/>
                            </div>
                            <div className="red-point city-desc">
                                <div className="point"></div>
                            </div>
                            <div className="city city-desc">
                                <p>2019.3</p>
                                <p>重庆</p>
                            </div>
                        </div>
                        <div className="city-item city-desc">
                            <div className="city city-desc">
                                <p>2020.8</p>
                                <p>北京</p>
                            </div>
                            <div className="red-point city-desc">
                                <div className="point"></div>
                            </div>
                            <div className="arrow city-desc">
                                <img src={require('../../containers/PowerConf/images/singapore/down.png')}/>
                            </div>
                        </div>
                        <div className="city-item">
                            <div className="arrow  city-desc">
                                <img src={require('../../containers/PowerConf/images/singapore/up.png')}/>
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
            <div className="common-box photowall">
                <div className="point-three"></div>
                {/* <!-- <div><h3 className="title">
                    照片墙
                </h3></div> --> */}
                <div className="photo-box">
                    <div className="photo-list">
                        <div className="line">
                            <div className="photo-item low">
                                <img src={require('../../containers/PowerConf/images/singapore/2.png')} alt="" />
                            </div>
                            <div className="blank"></div>
                            <div className="photo-item height">
                                <img src={require('../../containers/PowerConf/images/singapore/1.png')} alt="" />
                            </div>
                        </div>
                        <div className="line">
                            <div className="photo-item height">
                                <img src={require('../../containers/PowerConf/images/singapore/3.png')} alt="" />
                            </div>
                            <div className="blank"></div>
                            <div className="photo-item low">
                                <img src={require('../../containers/PowerConf/images/singapore/4.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div className="point-three"></div> --> */}
            </div>
            <div className="common-box aboutus">
                <h3 className="title">
                    关于MarsBit
                </h3>
                <p>MarBit是火星财经的全球品牌，面向区块链从业者，依托资讯、技术研发、开放平台、产业研究、教育培训、会议展览、投资等产品及服务，致力于成为加密产业持续、良性发展的推动力。目前，服务用户数量超300万，连接国内区块链技术及应用型企业超6000家。<br/>公司于2018年2月发起成立，获得IDG资本、策源资本、泛城资本、币安、火币、OKX等多家知名机构投资。截至2019年9月，最新估值达2亿美元。</p>
            </div>
            <div className="regester-box">
                <div className="regester-text">
                    有意登記入駐 「HONG KONG WEB 3.0 HUB」請填寫下方表格G-Rocket HKWEB3HUB 报名通道
                    <a href="http://g-rocket.co/?page_id=25932" target="_blank">立即报名</a>
                </div>
            </div>
            <div className="power-footer">
                <div className="power-footer-left">
                    <img src={require('../../containers/PowerConf/images/singapore/footerleft.png')} alt=""/>
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
            {/* <div className='singapore-footer'>
                <h3>
                    <img src={require('../../containers/PowerConf/images/singapore/footertext.png')} alt=""/>
                </h3>
                <p>
                    01.09 - 01.10
                </p>
            </div> */}
        </section>
    </div>
}
