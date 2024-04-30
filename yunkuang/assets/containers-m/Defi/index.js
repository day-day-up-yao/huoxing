import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next'
import '../../components/Defi/index.scss'
import './index.scss'
import { isMobile, queryParam, isCoco, isJp, formatPrice } from '../../public/js/index'
import Toast from '../../components/Toast'
import topimg from '../../public/imgs/def/d2.png'
import botimg from '../../public/imgs/def/dfb.png'
// import nxlogo from '../../public/imgs/def/hxlogo.png'
// import cocologo from '../../public/imgs/def/Cocolog.png'
import huoxinglogo from '../../public/imgs/def/huoxlogo.png'
import newwechcode from '../../public/imgs/def/newwechcode.png'
import useline from '../../public/imgs/btnicon/userline.png'
import anmont from '../../public/imgs/def/anmont.png'
import Marspal from '../Deposit'
export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [prodlist, setProdlist] = useState([])
    const [appflage, setAppflage] = useState(true)
    const [anuntitle, setAnuntitle] = useState('')
    const [point, setPoint] = useState(false)
    // const [cocoflag, setCocoflag] = useState(false)
    useEffect(() => {
        document.title = t('defi.defititle')
        dispatch.product.anunitList({}).then((res) => {
            if (res.status === 'ok') {
                setAnuntitle(res.data[0].msgbody)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.product.prodList({}).then((res) => {
            if (res.status === 'ok') {
                if (res.data.prods !== null) {
                    setProdlist(res.data.prods)
                    // dispatch.product.defiLogo({
                    //     logo: res.data.prods[0]['coin-roi']
                    // }).then((res) => {
                    //     console.log(res, 1111)
                    // })
                }
            } else {
                Toast.info(res.msg)
            }
        })
        if (queryParam('channel') === null) {
            setAppflage(true)
        } else {
            setAppflage(true)
        }
        // if (isCoco()) {
        //     setCocoflag(true)
        // } else {
        //     setCocoflag(false)
        // }
    }, [])
    return <div className='ndf'>
        {appflage ? '' : (
            <div className='ndf-heard'>
                <span className={point ? '' : 'ndf-heard-span'} onClick={() => { setPoint(false) }}>{t('defi.defititle')}</span>
                <span className={!point ? '' : 'ndf-heard-span'} onClick={() => { setPoint(true) }}>{t('defi.cunbibao')}</span>
            </div>
        )}
        {point ? (
            <Marspal/>
        ) : (
            <div>
                <div className='df'>
                    {/* <div className='df-xhlogo'>
                <img src={cocoflag === true ? cocologo : nxlogo} alt=""/>
            </div> */}
                    <div className='df-top'>
                        <div className='df-top-img'>
                            <img src={topimg} alt=""/>
                        </div>
                        <h3>{t('defi.title')}</h3>
                        <div>
                            <h4>{t('defi.subtitle')}</h4>
                            <div className="de-anment">
                                <div className="de-anment-img">
                                    <img src={anmont} alt=""/>
                                </div>
                                <div className="de-anment-p">{anuntitle}</div>
                            </div>
                            {/* <h4 className="start-time">下期发售时间9/15 9:00 敬请期待</h4> */}
                            <div className='df-tosx'>
                                <div className='df-tosx-con'>
                                    <div className='df-tosx-img'>
                                        <img src={botimg} alt=""/>
                                    </div>
                                    <p onClick={() => {
                                        if (typeof window === 'undefined') {} else {
                                            if (cookie.get('c_token')) {
                                                if (isCoco()) {
                                                    if (appflage === true) {
                                                        window.location.href = `/coco/Defilist?channel=111`
                                                    } else {
                                                        window.location.href = '/coco/Defilist'
                                                    }
                                                } else {
                                                    if (appflage === true) {
                                                        window.location.href = `/Defilist?channel=111`
                                                    } else {
                                                        window.location.href = `/Defilist`
                                                    }
                                                }
                                            } else {
                                                if (isCoco()) {
                                                    if (isMobile()) {
                                                        window.location.href = `/m/login?redirect= ${encodeURIComponent(window.location.href)}`
                                                    } else {
                                                        window.location.href = `/login?redirect= ${encodeURIComponent(window.location.href)}`
                                                    }
                                                } else {
                                                    window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                                                }
                                            }
                                        }
                                    }}>{t('defi.mybuy')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='df-con-con'>
                        <div className='df-con'>
                            {prodlist.length > 0 ? (
                                prodlist.map((item, index) => {
                                    return <div className='df-con-list' key={index}>
                                        <div className='df-con-list-img'>
                                            <img src={item.logo} alt=""/>
                                        </div>
                                        <div className='df-con-list-con'>{item.description}</div>
                                        <ul>
                                            <li>
                                                <p>{item.aor}</p>
                                                <p>{t('defi.mustyear')}</p>
                                            </li>
                                            <li>
                                                <p>{formatPrice(item['coin-roi'])} {item['coin-stake']}</p>
                                                <p>{t('defi.qtmoney')}</p>
                                            </li>
                                            <li>
                                                <p>{item.cycle}{t('defi.day')}</p>
                                                <p>{t('defi.cycle')}</p>
                                            </li>
                                        </ul>
                                        <div className='df-con-btn' style={{ color: item.status === 0 ? '' : '#7B8093' }} onClick={() => {
                                            if (typeof window === 'undefined') {} else {
                                                if (isCoco()) {
                                                    if (appflage === true) {
                                                        window.location.href = `/coco/Defidetail/${item['prod-code']}?channel=111`
                                                        window.localStorage.setItem('prod', JSON.stringify(item))
                                                    } else {
                                                        window.location.href = `/coco/Defidetail/${item['prod-code']}`
                                                        window.localStorage.setItem('prod', JSON.stringify(item))
                                                    }
                                                } else {
                                                    if (appflage === true) {
                                                        window.location.href = `/Defidetail/${item['prod-code']}?channel=111`
                                                        window.localStorage.setItem('prod', JSON.stringify(item))
                                                    } else {
                                                        if (isJp) {
                                                            window.location.href = `/Defidetail/${item['prod-code']}?language=ja-jp`
                                                        } else {
                                                            window.location.href = `/Defidetail/${item['prod-code']}`
                                                        }
                                                        window.localStorage.setItem('prod', JSON.stringify(item))
                                                    }
                                                }
                                            }
                                        }}>{item.status === 0 ? t('defi.startwa') : t('defi.over')}</div>
                                        {/* <div className='df-con-list-position'>
                                    <div>限额</div>
                                    {item['coin-stake'] === 'ETH' ? '1500 ETH' : '50万U'}
                                </div> */}
                                    </div>
                                })
                            ) : ('')}
                        </div>
                    </div>
                </div>
                {isJp ? (
                    <div className='df-con-con-jpcode'>
                        <p>お問い合わせ先</p>
                        <img src={useline} alt=""/>
                    </div>
                ) : (
                    <div className='df-con-con-code'>
                        <div className="deposit-wchat">
                            <div className="deposit-wchat-l">
                                <img src={huoxinglogo} alt=""/>
                            </div>
                            <div className="deposit-wchat-r">
                                <div className="r-text">
                                    <div>扫码</div>
                                    <div>加官方客服</div>
                                    <div>www.mclouds.io</div>
                                </div>
                                <div className="r-img">
                                    <img src={newwechcode} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )}
        {/* {isMobile() ? (
            <div className='df-con-con-code'>
                <img src={wechatimg} alt=""/>
            </div>
        ) : ('')} */}
    </div>
}
