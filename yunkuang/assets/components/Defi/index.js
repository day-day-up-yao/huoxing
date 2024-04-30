import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cookie from 'js-cookie'
import './index.scss'
import { isMobile, queryParam, isCoco, isJp, formatPrice } from '../../public/js/index'
import Toast from '../../components/Toast'
import topimg from '../../public/imgs/def/d2.png'
import botimg from '../../public/imgs/def/dfb.png'
import useline from '../../public/imgs/btnicon/userline.png'
// import nxlogo from '../../public/imgs/def/hxlogo.png'
// import cocologo from '../../public/imgs/def/Cocolog.png'
import wechatimg from '../../public/imgs/def/wechatcodede.jpg'
import anmont from '../../public/imgs/def/anmont.png'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    // const { defiList } = useSelector((state) => ({
    //     defiList: state.product.defilist
    // }))
    const [prodlist, setProdlist] = useState([])
    const [appflage, setAppflage] = useState(false)
    const [anuntitle, setAnuntitle] = useState('')
    // const [cocoflag, setCocoflag] = useState(false)
    useEffect(() => {
        // console.log(defiList)
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
            setAppflage(false)
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
        <div className='df'>
            {/* <div className='df-xhlogo'>
                <img src={cocoflag === true ? cocologo : nxlogo} alt=""/>
            </div> */}
            <div className='df-top'>
                <div className='df-top-img'>
                    <img src={topimg} alt=""/>
                </div>
                <h3>{t('defi.title')}</h3>
                {isMobile() ? (
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
                ) : (
                    <div>
                        <h4>{t('defi.subtitle')}</h4>
                        {/* <h4 className="start-time">下期发售时间9/15 9:00 敬请期待</h4> */}
                        <div className="de-anment">
                            <div className="de-anment-img">
                                <img src={anmont} alt=""/>
                            </div>
                            <div className="de-anment-p">{anuntitle}</div>
                        </div>
                    </div>
                )}
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
                                <div className='df-con-btn' style={{ color: item.status === 0 ? '' : '#7B8093' }}
                                    onClick={() => {
                                        if (typeof window === 'undefined') {} else {
                                            if (isCoco()) {
                                                if (appflage === true) {
                                                    window.location.href = `/coco/Defidetail/${item.prodCode}?channel=111`
                                                    window.localStorage.setItem('prod', JSON.stringify(item))
                                                } else {
                                                    window.location.href = `/coco/Defidetail/${item.prodCode}`
                                                    window.localStorage.setItem('prod', JSON.stringify(item))
                                                }
                                            } else {
                                                if (appflage === true) {
                                                    window.location.href = `/Defidetail/${item.prodCode}?channel=111`
                                                    window.localStorage.setItem('prod', JSON.stringify(item))
                                                } else {
                                                    if (isJp) {
                                                        window.location.href = `/Defidetail/${item.prodCode}?language=ja-jp`
                                                    } else {
                                                        window.location.href = `/Defidetail/${item.prodCode}`
                                                    }
                                                    window.localStorage.setItem('prod', JSON.stringify(item))
                                                }
                                            }
                                        }
                                    }}
                                >{item.status === 0 ? t('defi.startwa') : t('defi.over')}</div>
                                {/* <div className='df-con-list-position'>
                                    <div>限额</div>
                                    {item['coin-stake'] === 'ETH' ? '1500 ETH' : '50万U'}
                                </div> */}
                            </div>
                        })
                    ) : ('')}
                </div>
            </div>
            {isMobile() ? ('') : (
                <div className='df-tosxs'>
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
            )}
        </div>
        <div className='df-con-con-code'>
            <p>{isJp ? 'お問い合わせ先' : ''}</p>
            <img src={isJp ? useline : wechatimg} alt=""/>
        </div>
        {/* {isMobile() ? (
            <div className='df-con-con-code'>
                <img src={wechatimg} alt=""/>
            </div>
        ) : ('')} */}
    </div>
}
