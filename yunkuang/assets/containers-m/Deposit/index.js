import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import Cookie from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { queryParam, isJp } from '../../public/js/index'
// import textimg from '../../public/imgs/def/cuntext.png'
import jptextimg from '../../public/imgs/def/jpcuntext.png'
import huoxinglogo from '../../public/imgs/def/huoxlogo.png'
import newwechcode from '../../public/imgs/def/newwechcode.png'
import ptwoimg from '../../public/imgs/def/ptwoimg.png'
import poneimg from '../../public/imgs/def/poneimg.png'
import cunover from '../../public/imgs/def/cunover.png'
import jpcunover from '../../public/imgs/def/jpcunover.png'
import pointlink from '../../public/imgs/def/pointlink.png'
import connect from '../../public/imgs/btnicon/userline.png'
import headerlogo from '../../public/imgs/def/headerlogo.png'
import Toast from '../../components/Toast'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [ flag, setFlag ] = useState(0)
    const [select, setSelect] = useState(0)
    const [appflage, setAppflage] = useState(false)
    const [productlist, setProductlist] = useState([])
    // const { productlist } = useSelector((state) => ({
    //     productlist: state.product.cbbdetail
    // }))
    // console.log(productlist)
    const selectTop = [
        { name: t('record.allb'), type: 1 },
        { name: 'BTC', type: 2 },
        { name: 'ETH', type: 3 }
    ]
    useEffect(() => {
        dispatch.product.cbbProduct({}).then((res) => {
            if (res.status === 'ok') {
                setProductlist(res.data)
            }
            console.log(res)
        })
        // dispatch.product.cbbProduct({})
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
    }, [])
    const handleTodetail = useCallback((item) => {
        if (appflage) {
            window.location.href = `/marspals/${item.prodetail.prodCode}?channel=111`
        } else {
            window.location.href = `/marspals/${item.prodetail.prodCode}`
        }
    }, [appflage])
    return <div className="deposit">
        <div className='deposit-center'>
            <div className="deposit-top-logo">
                <img src={headerlogo} alt=""/>
            </div>
            <div className="deposit-top">
                {isJp ? (
                    <div className="deposit-top-left">
                        <div className="left-img">
                            <img src={jptextimg} alt=""/>
                        </div>
                    </div>
                ) : (
                    <div className="deposit-top-left">
                        <div className="left-text">
                            {t('record.headers')}
                        </div>
                        <div>
                            <p><img src={poneimg} alt=""/>{t('record.title')}</p>
                            <p> <img src={ptwoimg} alt=""/> {t('record.titles')}</p>
                        </div>
                    </div>
                )}
                {/* <div className="deposit-top-right">
                    <img src={rightimg} alt=""/>
                </div> */}
                <div className="deposit-top-sg" onClick={() => {
                    if (Cookie.get('user_id')) {
                        dispatch.product.allRevenue({
                            uid: Cookie.get('user_id')
                        }).then((res) => {
                            if (res.status === 'ok') {
                                if (res.data === null) {
                                    Toast.info(t('record.notjl'))
                                } else {
                                    if (appflage) {
                                        window.location.href = `/depositearn?channel=111`
                                    } else {
                                        window.location.href = '/depositearn'
                                    }
                                }
                            } else {
                                Toast.info(res.msg)
                            }
                        })
                    } else {
                        window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                    }
                }}>
                    <p>{t('record.mysg')}</p>
                    <img src={pointlink} alt=""/>
                </div>
            </div>
            <div className="deposit-con">
                <div className="deposit-con-top">
                    {selectTop.map((item, index) => {
                        return <div key={index} onClick={() => {
                            setSelect(index)
                            if (item.name === t('record.allb')) {
                                setFlag(0)
                            } else {
                                setFlag(item.name)
                            }
                        }} className={select !== index ? '' : 'deposit-con-top-selec'}>{item.name}</div>
                    })}
                </div>
                <div className="deposit-con-list">
                    {flag === 0 ? (
                        productlist && productlist.map((item, index) => {
                            return <div className="deposit-con-list-item" key={index}>
                                <div className="item-top">
                                    <img src={item.prodhead.logo} alt=""/>
                                    <h3>{item.prodhead.title}</h3>
                                </div>
                                {isJp ? (
                                    <div className="item-jpbox">
                                        <div>四半期ごとに元本と利益をリターン</div>
                                    </div>
                                ) : (
                                    <div className="item-box">
                                        <div>{t('record.zx')}</div>
                                        <div>{t('record.ajdf')}</div>
                                        <div>{t('record.zero')}</div>
                                    </div>
                                )}
                                <div className="item-nh">
                                    <p>
                                        <span>{item.prodhead['aorRate'] * 100}</span>
                                        <span>%</span>
                                    </p>
                                    <p>{t('record.xsed')} {item.prodetail['totalQuota']} {item.token}</p>
                                </div>
                                <div className="item-btn" onClick={() => { handleTodetail(item) }}>{item.prodetail.status === 0 ? t('record.gobuy') : t('record.ckxq')}</div>
                                <div className="item-over" style={{ display: item.prodetail.status === 0 ? 'none' : '' }}>
                                    <img src={isJp ? jpcunover : cunover} alt=""/>
                                </div>
                            </div>
                        })
                    ) : (
                        (productlist && productlist.filter((itm) => { return itm.token === flag })).map((item, index) => {
                            return <div className="deposit-con-list-item" key={index}>
                                <div className="item-top">
                                    <img src={item.prodhead.logo} alt=""/>
                                    <h3>{item.prodhead.title}</h3>
                                </div>
                                {isJp ? (
                                    <div className="item-jpbox">
                                        <div>四半期ごとに元本と利益をリターン</div>
                                    </div>
                                ) : (
                                    <div className="item-box">
                                        <div>{t('record.zx')}</div>
                                        <div>{t('record.ajdf')}</div>
                                        <div>{t('record.zero')}</div>
                                    </div>
                                )}
                                <div className="item-nh">
                                    <p>
                                        <span>{item.prodhead['aorRate'] * 100}</span>
                                        <span>%</span>
                                    </p>
                                    <p>{t('record.xsed')} {item.prodetail['totalQuota']} {item.token}</p>
                                </div>
                                <div className="item-btn" onClick={() => { handleTodetail(item) }}>{item.prodetail.status === 0 ? t('record.gobuy') : t('record.ckxq')}</div>
                                <div className="item-over" style={{ display: item.prodetail.status === 0 ? 'none' : '' }}>
                                    <img src={isJp ? jpcunover : cunover} alt=""/>
                                </div>
                            </div>
                        })
                    )}
                </div>
            </div>
        </div>
        <div className="deposit-bottom">
            {isJp ? (
                <div className="deposit-jpwchat">
                    <p>お問い合わせ先</p>
                    <img src={connect} alt=""/>
                </div>
            ) : (
                <div className="deposit-wchat">
                    <div className="deposit-wchat-l">
                        <img src={huoxinglogo} alt=""/>
                    </div>
                    <div className="deposit-wchat-r">
                        <div className="r-text">
                            <p>扫码</p>
                            <p>加官方客服</p>
                            <p>www.mclouds.io</p>
                        </div>
                        <div className="r-img">
                            <img src={newwechcode} alt=""/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}
