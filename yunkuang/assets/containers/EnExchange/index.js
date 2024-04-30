import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import selec from '../../public/imgs/select.png'
import down from '../../public/imgs/down.png'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const oneinp = useRef()
    const twoinp = useRef(0)
    const [exusdt, setExusdt] = useState(0)
    const [btcnum, setBtcnum] = useState(0)
    const [flag, setFlaf] = useState(false)
    const [userid, setUserid] = useState()
    const [curry, setCurry] = useState('BTC')
    const [currimg, setCurrimg] = useState('https://static.hcdnin.com/BTC.svg')
    const [see, setSee] = useState(false)
    const [symbols, setSymbol] = useState([])
    const currenylist = [
        { name: 'BTC', type: 1, imgs: 'https://static.hcdnin.com/BTC.svg' },
        { name: 'ETH', type: 2, imgs: 'https://static.hcdnin.com/ETH.svg' },
        { name: 'FIL', type: 3, imgs: 'https://static.hcdnin.com/token/TM9qp6AdxdvCygFK4vGz3-XbGSVlOQCcZeQbvOGrr3U.png' }
    ]
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
        dispatch.public.getUseinfo({}).then((res) => {
            setUserid(res.data.userId)
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.getuser'))
        })
        dispatch.public.quoteRates({
            tokens: curry,
            legalCoins: 'BTC,USDT,CNY,USD,ETH,JPY'
        }).then((res) => {
            if (res.code === 0) {
                setExusdt(res.data[0].rates.USDT)
            }
        })
        // 查询BTC余额
        dispatch.order.checkC2cBanlance().then((res) => {
            if (res) {
                res.map((item) => {
                    if (item.tokenName === curry) {
                        setBtcnum(item.free)
                    }
                })
            }
        })
    }, [])
    // const time = setInterval(() => {
    //     console.log(curry)
    //     dispatch.public.quoteRates({
    //         tokens: curry,
    //         legalCoins: 'USDT'
    //     }).then((res) => {
    //         if (res.code === 0) {
    //             setExusdt(res.data[0].rates.USDT)
    //         }
    //     })
    // }, 6000)
    // useEffect(() => {
    //     // 获取汇率
    //     setInterval(() => {
    //         console.log(curry)
    //         dispatch.public.quoteRates({
    //             tokens: curry,
    //             legalCoins: 'USDT'
    //         }).then((res) => {
    //             if (res.code === 0) {
    //                 setExusdt(res.data[0].rates.USDT)
    //             }
    //         })
    //     }, 6000)
    // }, [curry])
    const handleall = useCallback(() => {
        oneinp.current.value = btcnum
        twoinp.current.value = (oneinp.current.value * exusdt).toFixed(2)
    }, [btcnum, exusdt])
    const handletoinp = useCallback(() => {
        twoinp.current.value = (event.target.value * exusdt).toFixed(2)
    }, [exusdt])
    const handletwoinp = useCallback(() => {
        oneinp.current.value = (event.target.value / exusdt).toFixed(6)
    }, [exusdt])
    const handleToexchange = useCallback(() => {
        if (oneinp.current.value <= 0) {
            Toast.info(t('exchange.placebtc'))
            return
        }
        if (twoinp.current.value <= 0) {
            Toast.info(t('exchange.placeusdt'))
            return
        }
        // if (oneinp.current.value > btcnum) {
        //     Toast.info(`${curry}${t('exchange.ntdy')}`)
        //     return
        // }
        if (symbols.filter((itm) => { return itm.baseTokenId === curry })[0].minTradeQuantity > oneinp.current.value) {
            Toast.info(`${t('exchange.nonum') + symbols.filter((itm) => { return itm.baseTokenId === curry })[0].minTradeQuantity}`)
            return
        }
        setFlaf(true)
    })
    const handletrue = useCallback(() => {
        dispatch.order.createOrder({
            type: 'market',
            side: 'SELL',
            price: exusdt,
            quantity: curry === 'BTC' ? Math.floor(oneinp.current.value * 1000000) / 1000000 : Math.floor(oneinp.current.value * 10000) / 10000,
            symbol_name: curry,
            symbol_id: `${curry}USDT`,
            order_time: '0',
            client_order_id: new Date().getTime(),
            account_id: userid,
            exchange_id: '661'
        }).then((res) => {
            if (!res.code) {
                Toast.info(t('exchange.pleasewait'))
                window.location.reload()
            } else {
                Toast.info(res.msg)
            }
        })
    }, [curry, exusdt])
    return <div>
        <div className='exchange'>
            <div className="excon">
                <h3>{t('exchange.sd')}</h3>
                <h4>{t('exchange.sdtitle')}</h4>
                <div className='excon-inp'>
                    <div className="excon-inp-top">
                        <div className="inp-top-l" onClick={() => { setSee(true) }}>
                            <div className="excon-inp-top-img">
                                <img src={currimg} alt=""/>
                            </div>
                            <div className="excon-inp-top-text">{curry}</div>
                            <div className="excon-inp-top-imgr">
                                <img src={down} alt=""/>
                            </div>
                        </div>
                        <div className="inp-top-r">
                            <input type="text" ref={oneinp} onChange={handletoinp}/>
                            <span onClick={handleall}>{t('exchange.alldh')}</span>
                        </div>
                        <div className="inp-top-list" style={{ display: see ? '' : 'none' }}>
                            {currenylist.map((item, index) => {
                                return <div className="list-curreny" key={index} onClick={() => {
                                    setCurry(item.name)
                                    setCurrimg(item.imgs)
                                    setSee(false)
                                    twoinp.current.value = ''
                                    oneinp.current.value = ''
                                    dispatch.order.checkC2cBanlance().then((res) => {
                                        if (res) {
                                            res.map((itm) => {
                                                if (itm.tokenName === item.name) {
                                                    setBtcnum(itm.free)
                                                }
                                            })
                                        }
                                    })
                                    dispatch.public.quoteRates({
                                        tokens: item.name,
                                        legalCoins: 'USDT'
                                    }).then((res) => {
                                        if (res.code === 0) {
                                            setExusdt(res.data[0].rates.USDT)
                                        }
                                    })
                                    // clearInterval(time)
                                }}>
                                    <div className="list-curreny-l">
                                        <div className="curreny-l-img">
                                            <img src={item.imgs} alt=""/>
                                        </div>
                                        <div className="curreny-l-text">{item.name}</div>
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
                    <p>
                        <span>{t('exchange.ye')}</span>
                        <span> {btcnum} {curry}</span>
                    </p>
                    <div className="excon-inp-top">
                        <div className="excon-inp-top-img">
                            <img src="https://static.hcdnin.com/USDT.svg" alt=""/>
                        </div>
                        <input className="excon-inp-two" type="text" ref={twoinp} onChange={handletwoinp}/>
                    </div>
                    <p>
                        <span>1 {curry} ≈</span>
                        <span> {exusdt} USDT</span>
                        {/* <span className="excon-inp-two-spn">{t('exchange.yxtime')}<b>{numtimes}</b>秒</span> */}
                    </p>
                    <button onClick={handleToexchange}>{t('exchange.qdmac')}</button>
                </div>
            </div>
            <div className="exbon">
                <div className="exbon-top">
                    <span>{t('exchange.sdsm')}</span>
                </div>
                <div className="exbon-top-con">
                    <span>1 {t('exchange.smone')}</span><br/>
                    <b>{t('exchange.onetitle')}</b>
                </div>
                <div className="exbon-top-con">
                    <span>2 {t('exchange.smtwo')}</span><br/>
                    <span>{t('exchange.jxone')}</span><br/>
                    <ul>
                        <li>{t('exchange.jxtwo')}</li>
                        <li>{t('exchange.jxthree')}</li>
                        <li>{t('exchange.jxfour')}</li>
                    </ul>
                    <span>{t('exchange.fq')}</span><br/>
                    <ul>
                        <li>{t('exchange.fqone')}</li>
                        <li>{t('exchange.fq')}</li>
                        <li>{t('exchange.fqtwo')}</li>
                    </ul>
                    <span>{t('exchange.ck')}</span><br/>
                    <ul>
                        <li>{t('exchange.cktitle')}</li>
                    </ul>
                </div>
                <div className="exbon-top-con">
                    <span>3 {t('exchange.threesm')}</span><br/>
                    <span>{t('exchange.sxf')}</span><br/>
                    <ul>
                        <li>{t('exchange.sxftitle')}</li>
                    </ul>
                    <span>{t('exchange.jyje')}</span><br/>
                    <ul>
                        <li>{t('exchange.jytitle')}</li>
                    </ul>
                </div>
            </div>
            <div className='extitle' style={{ display: flag === true ? 'block' : 'none' }}>
                <div className='extitlecon'>
                    <h3>{t('exchange.qddh')}</h3>
                    <p>{t('exchange.qdtitle')}{twoinp.current.value}USDT?</p>
                    <div>
                        <span onClick={() => {
                            setFlaf(false)
                            twoinp.current.value = ''
                            oneinp.current.value = ''
                        }}>{t('productdetail.qx')}</span>
                        <span onClick={handletrue}>{t('header.sign.sures')}</span>
                    </div>
                </div>
            </div>
            <div className="exrecords" onClick={() => {
                window.location.href = '/secure/enexchangerecord'
            }}>{t('exchange.sdjl')}</div>
        </div>
    </div>
}
