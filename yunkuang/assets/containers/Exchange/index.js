import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Cookie from 'js-cookie'
import Herder from '../../components/Public/Header'
import down from '../../public/imgs/new/listdown.png'
import selec from '../../public/imgs/select.png'
import Toast from '../../components/Toast/index'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const currenylist = [
        { name: 'BTC', type: 1, imgs: 'https://static.hcdnin.com/BTC.svg' },
        { name: 'ETH', type: 2, imgs: 'https://static.hcdnin.com/ETH.svg' },
        { name: 'FIL', type: 3, imgs: 'https://static.hcdnin.com/token/TM9qp6AdxdvCygFK4vGz3-XbGSVlOQCcZeQbvOGrr3U.png' }
    ]
    const head = {
        title: t('exchange.sd'),
        second: true,
        thrid: true
    }
    const dispatch = useDispatch()
    const dhcurryref = useRef()
    const getcurryref = useRef()
    const [exusdt, setExusdt] = useState(0)
    const [symbols, setSymbol] = useState([]) // 获取币种信息（精度，最小购买数等）
    const [btcnum, setBtcnum] = useState(0)
    const [curry, setCurry] = useState(
        {
            currey: 'BTC',
            imgs: 'https://static.hcdnin.com/BTC.svg'
        }
    )
    const [asset, setAsset] = useState(
        {
            fee: 0,
            locke: 0
        }
    )
    const [flage, setFlage] = useState(false)
    const [sure, setSure] = useState(false)
    const [numb, setNumb] = useState(0)
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (!res.code) {
                setSymbol(res.symbol)
            }
        })
        // 查询汇率
        dispatch.public.quoteRates({
            tokens: curry.currey,
            legalCoins: 'BTC,USDT,CNY,USD,ETH,JPY'
        }).then((res) => {
            if (res.code === 0) {
                setExusdt(res.data[0].rates.USDT)
            }
        })
        // 查询BTC余额
        dispatch.order.checkC2cBanlance().then((res) => {
            if (res) {
                const assetlist = res.filter((itm) => {
                    return itm.tokenName === curry.currey
                })
                if (assetlist.length > 0) {
                    setBtcnum(assetlist[0].free)
                    setAsset(
                        {
                            fee: assetlist[0].free,
                            locke: assetlist[0].locked
                        }
                    )
                } else {
                    setBtcnum(0)
                    setAsset(
                        {
                            fee: 0,
                            locke: 0
                        }
                    )
                }
            }
        })
    }, [])
    const handleSelect = useCallback((item) => {
        setCurry(
            {
                imgs: item.imgs,
                currey: item.name
            }
        )
        // 查询汇率
        dispatch.public.quoteRates({
            tokens: item.name,
            legalCoins: 'BTC,USDT,CNY,USD,ETH,JPY'
        }).then((res) => {
            if (res.code === 0) {
                setExusdt(res.data[0].rates.USDT)
            }
        })
        // 查询BTC余额
        dispatch.order.checkC2cBanlance().then((res) => {
            if (res) {
                const assetlist = res.filter((itm) => {
                    return itm.tokenName === item.name
                })
                if (assetlist.length > 0) {
                    setBtcnum(assetlist[0].free)
                    setAsset(
                        {
                            fee: assetlist[0].free,
                            locke: assetlist[0].locked
                        }
                    )
                } else {
                    setBtcnum(0)
                    setAsset(
                        {
                            fee: 0,
                            locke: 0
                        }
                    )
                }
            }
        })
        setFlage(false)
    })
    const handleInput = useCallback((e) => {
        getcurryref.current.value = (e.target.value * exusdt).toFixed(2)
    })
    // 全部兑换
    const handleAll = useCallback(() => {
        dhcurryref.current.value = btcnum
        getcurryref.current.value = (dhcurryref.current.value * exusdt).toFixed(2)
    })
    const handleGetcurry = useCallback((e) => {
        dhcurryref.current.value = (e.target.value / exusdt).toFixed(6)
    })
    const handleBuy = useCallback(() => {
        if (dhcurryref.current.value <= 0) {
            Toast.info(t('exchange.placebtc'))
            return
        }
        if (getcurryref.current.value <= 0) {
            Toast.info(t('exchange.placeusdt'))
            return
        }
        // if (oneinp.current.value > btcnum) {
        //     Toast.info(`${curry}${t('exchange.ntdy')}`)
        //     return
        // }
        if (symbols.filter((itm) => { return itm.baseTokenId === curry.currey })[0].minTradeQuantity > dhcurryref.current.value) {
            Toast.info(`${t('exchange.nonum') + symbols.filter((itm) => { return itm.baseTokenId === curry.currey })[0].minTradeQuantity}`)
            return
        }
        setNumb(getcurryref.current.value)
        setSure(true)
    }, [curry, symbols])
    const handleLastsure = useCallback(() => {
        dispatch.order.createOrder({
            type: 'market',
            side: 'SELL',
            price: exusdt,
            quantity: curry.currey === 'BTC' ? Math.floor(dhcurryref.current.value * 1000000) / 1000000 : Math.floor(dhcurryref.current.value * 10000) / 10000,
            symbol_name: curry.currey,
            symbol_id: `${curry.currey}USDT`,
            order_time: '0',
            client_order_id: new Date().getTime(),
            account_id: Cookie.get('user_id'),
            exchange_id: '661'
        }).then((res) => {
            if (!res.code) {
                Toast.info(t('exchange.pleasewait'))
                window.location.reload()
            } else {
                Toast.info(res.msg)
            }
        })
    })
    return <div className='exchanges'>
        <Herder {...{ asset, t, head }}/>
        <div className="exchanges-con">
            <div className="con-left">
                <h3>{t('exchange.sd')}</h3>
                <h4>{t('exchange.sdtitle')}</h4>
                <div className="concurrency">
                    <div className='concurrency-left' onClick={() => {
                        setFlage(true)
                    }}>
                        <img src={curry.imgs} alt=""/>
                        <span>{curry.currey}</span>
                        <img src={down} alt=""/>
                    </div>
                    <div className="concurrency-right">
                        <input type="text" ref={dhcurryref} onChange={handleInput}/>
                        <span onClick={handleAll}>{t('exchange.alldh')}</span>
                    </div>
                    <div className="currency-list" style={{ display: flage ? '' : 'none' }}>
                        {currenylist.map((item, index) => {
                            return <div className="item" key={index} onClick={() => {
                                handleSelect(item)
                            }}>
                                <div className='item-img'>
                                    <img src={item.imgs} alt=""/>
                                    <div className="item-text">{item.name}</div>
                                </div>
                                {curry === item.name ? (
                                    <div className="list-curreny-r">
                                        <img src={selec} alt=""/>
                                    </div>
                                ) : ('')}
                            </div>
                        })}
                    </div>
                </div>
                <div className='writing'>
                    <div>{t('exchange.ye')}</div>
                    <div>{btcnum}</div>
                    <div>{curry.currey}</div>
                </div>
                <div className='getcurrency'>
                    <div className='getcurrency-left'>
                        <img src="https://static.hcdnin.com/USDT.svg" alt=""/>
                        <div className='line'></div>
                    </div>
                    <div className='getcurrency-right'>
                        <input type="text" ref={getcurryref} onChange={handleGetcurry}/>
                        <span>USDT</span>
                    </div>
                </div>
                <div className='writing'>
                    <div>1{curry.currey}</div>
                    <div>≈</div>
                    <div>{exusdt}</div>
                    <div>USDT</div>
                </div>
                <div className='botton' onClick={handleBuy}>{t('exchange.qdmac')}</div>
            </div>
            <div className="con-right">
                <div className="exbon">
                    <div className="exbon-top">
                        <span>{t('exchange.sdsm')}</span>
                    </div>
                    <div className="exbon-list">
                        <div className="exbon-top-con">
                            <span>1 {t('exchange.smone')}</span><br/>
                            <span>{t('exchange.onetitle')}</span>
                        </div>
                        <div className="exbon-top-con">
                            <span>2 {t('exchange.smtwo')}</span><br/>
                            <ul>
                                <span>{t('exchange.jxone')}</span><br/>
                                <li>{t('exchange.jxtwo')}</li>
                                <li>{t('exchange.jxthree')}</li>
                                <li>{t('exchange.jxfour')}</li>
                            </ul>
                            <ul>
                                <span>{t('exchange.fq')}</span><br/>
                                <li>{t('exchange.fqone')}</li>
                                <li>{t('exchange.fq')}</li>
                                <li>{t('exchange.fqtwo')}</li>
                            </ul>
                            <ul>
                                <span>{t('exchange.ck')}</span><br/>
                                <li>{t('exchange.cktitle')}</li>
                            </ul>
                        </div>
                        <div className="exbon-top-con">
                            <span>3 {t('exchange.threesm')}</span><br/>
                            <ul>
                                <span>{t('exchange.sxf')}</span><br/>
                                <li>{t('exchange.sxftitle')}</li>
                            </ul>
                            <ul>
                                <span>{t('exchange.jyje')}</span><br/>
                                <li>{t('exchange.jytitle')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="exchanges-sure" style={{ display: sure ? '' : 'none' }}>
            <div className="sure-con">
                <h3>{t('exchange.qddh')}</h3>
                <h4>{t('exchange.qdtitle')}{numb}USDT?</h4>
                <div className="sure-bottom">
                    <span onClick={() => { setSure(false) }}>{t('productdetail.qx')}</span>
                    <span onClick={handleLastsure}>{t('header.sign.sures')}</span>
                </div>
            </div>
        </div>
    </div>
}
