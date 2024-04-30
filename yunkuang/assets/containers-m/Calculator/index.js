import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import icongt from '../../public/imgs/newpage/icongt.png'
import { queryParam } from '../../public/js/index'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const priceref = useRef() // 矿机价格
    const numbersref = useRef() // 台数
    const hashref = useRef() // 算力
    const cnyref = useRef() // 币价
    const electref = useRef() // 电费
    const kwhref = useRef() // 功耗
    const [rate, setRate] = useState(0) // 当前币价
    const [flag, setFlag] = useState('BTC') // 币种选择
    const [datflag, setDatflag] = useState(0) // 选择收益类型
    const [ield, setIeld] = useState(1) // 收益天数
    const [echo, setEcho] = useState(false) // 回本周期说明
    const currey = ['BTC', 'ETH']
    const [reats, setReats] = useState(0) // 输入币价
    const [earnday, setEarnday] = useState(
        {
            electricFee: 0,
            income: 0,
            pureIncome: 0,
            retDayNum: 0
        }
    ) // 收益/电费/净收益/回本周期
    const earninglist = [
        { name: t('cout.daysy'), num: 1, type: 0 },
        { name: t('cout.monthsy'), num: 30, type: 1 },
        { name: t('cout.yearsy'), num: 365, type: 2 }
    ]
    const [num, setNum] = useState(1)
    const [productinfo, setProductinfo] = useState(
        {
            price: '',
            buynum: 1,
            hashrate: '',
            incomeCurrency: '',
            minerTypeInfo: {
                kw: '',
                electricFee: ''
            }
        }
    )
    const [tnum, setTnum] = useState(1) // 矿机台数
    useEffect(() => {
        if (queryParam('productid') !== null && queryParam('productid') !== '') {
            dispatch.product.getProductDetail({
                productId: queryParam('productid')
            }).then((res) => {
                if (res.code === 0) {
                    setProductinfo(res.data)
                    setFlag(res.data.incomeCurrency)
                    dispatch.product.hashRatesinfo({
                        base: res.data.incomeCurrency,
                        quote: 'USDT'
                    }).then((ress) => {
                        if (ress.code === 0) {
                            setRate(ress.data)
                            handleTocalcu(res.data.incomeCurrency)
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                    // dispatch.public.quoteRates({
                    //     tokens: res.data.incomeCurrency,
                    //     legalCoins: 'USDT'
                    // }).then((ress) => {
                    //     if (ress.code === 0) {
                    //         setRate(ress.data[0].rates.CNY)
                    //         handleTocalcu(res.data.incomeCurrency)
                    //     }
                    // })
                } else {
                    Toast.info(res.msg)
                }
            })
        } else {
            dispatch.product.hashRatesinfo({
                base: 'BTC',
                quote: 'USDT'
            }).then((res) => {
                if (res.code === 0) {
                    setRate(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [])
    const handleToval = useCallback((e) => {
        setNum(e.target.value)
    })
    const handleToselect = useCallback((type) => {
        priceref.current.value = ''
        numbersref.current.value = ''
        hashref.current.value = ''
        cnyref.current.value = ''
        electref.current.value = ''
        kwhref.current.value = ''
        setFlag(type)
        setReats(0)
        setEarnday({
            electricFee: 0,
            income: 0,
            pureIncome: 0,
            retDayNum: 0
        })
        dispatch.product.hashRatesinfo({
            base: type,
            quote: 'USDT'
        }).then((res) => {
            if (res.code === 0) {
                setRate(res.data)
            }
        })
    }, [priceref, hashref, cnyref, electref, kwhref])
    const handleToselectday = useCallback((itm) => {
        setDatflag(itm.type)
        setIeld(itm.num)
    })
    const handleTocalcu = useCallback((nums) => {
        if (priceref.current.value === '') {
            Toast.info(t('cout.plaseprice'))
            return
        }
        if (numbersref.current.value === '') {
            Toast.info(t('cout.plasenum'))
            return
        }
        if (hashref.current.value === '') {
            Toast.info(t('cout.plasehash'))
            return
        }
        if (cnyref.current.value === '') {
            Toast.info(t('cout.pleasebj'))
            return
        }
        if (electref.current.value === '') {
            Toast.info(t('h5.index.electric'))
            return
        }
        if (kwhref.current.value === '') {
            Toast.info(t('productdetail.gh'))
            return
        }
        setReats(cnyref.current.value)
        dispatch.product.calhashInfo({
            currency: nums,
            hashrateNum: nums === 'ETH' ? (hashref.current.value / 1000000) : hashref.current.value,
            minerTypePrice: priceref.current.value,
            currencyPrice: cnyref.current.value,
            electricFeePrice: electref.current.value,
            minerTypeKW: kwhref.current.value
        }).then((res) => {
            if (res.code === 0) {
                setEarnday(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [priceref, hashref, cnyref, electref, kwhref])
    return <div className="clacu">
        <div className="clacu-top">
            <div className="select">
                {currey.map((item, index) => {
                    return <div key={index} onClick={() => { handleToselect(item) }} className={flag === item ? 'active' : ''}>{item}</div>
                })}
            </div>
            <div className='pricenum'>
                <div className="price-left">
                    <p>{t('cout.kjprice')}</p>
                    <div className="price-left-r">
                        <input type="text" placeholder='10000' ref={priceref} defaultValue={productinfo.price} onChange={() => { }} />
                        <span>U</span>
                    </div>
                    <div className='price-line'></div>
                </div>
                <div className="price-right">
                    <p>{t('cout.tnumber')}</p>
                    <div className="price-right-r">
                        <input type="text" placeholder='1' ref={numbersref} onChange={handleToval} defaultValue={productinfo.price === '' ? '' : 1} onChange={(e) => {
                            if (e.target.value === '') {
                                setTnum(1)
                            } else {
                                setTnum(e.target.value)
                            }
                        }} />
                        <span>{t('cout.tai')}</span>
                    </div>
                    <div className='price-line'></div>
                </div>
            </div>
            <div className="price">
                <p>{t('productdetail.sl')}</p>
                <div className="price-r">
                    <input type="text" placeholder='100' ref={hashref} defaultValue={flag === 'ETH' ? productinfo.hashrate * 1000000 : productinfo.hashrate} onChange={() => { }} />
                    <span>{flag === 'ETH' ? 'MH/s' : 'TH/s'}</span>
                </div>
                <div className='price-line'></div>
            </div>
            <div className="price">
                <p>{t('cout.bj')}</p>
                <div className="price-r">
                    <input type="text" placeholder={`${t('cout.nowbj')}：${Number(rate).toFixed(0)}`} ref={cnyref} defaultValue={productinfo.price === '' ? '' : Number(rate).toFixed(0)} onChange={() => { }} />
                    <span>U</span>
                </div>
                <div className='price-line'></div>
            </div>
            <div className="price">
                <p>{t('h5.index.electric')}</p>
                <div className="price-r">
                    <input type="text" placeholder='0.3' ref={electref} defaultValue={productinfo.minerTypeInfo.electricFee} onChange={() => { }} />
                    <span>U/{t('h5.index.limit')}</span>
                </div>
                <div className='price-line'></div>
            </div>
            <div className="price">
                <p>{t('productdetail.gh')}</p>
                <div className="price-r">
                    <input type="text" placeholder='3.3' ref={kwhref} defaultValue={productinfo.minerTypeInfo.kw} onChange={() => { }} />
                    <span>kw/h</span>
                </div>
                <div className='price-line'></div>
            </div>
            {/* <div className="rate">
                <span>可可交易所BTC当前币价</span>
                <span>￥{rate}</span>
            </div> */}
            <div className="btn" onClick={() => { handleTocalcu(flag) }}>{t('newpage.home.calculate')}</div>
        </div>
        <div className="clacu-bottom">
            <div className="bottom-select">
                {earninglist.map((item, index) => {
                    return <div key={index} onClick={() => { handleToselectday(item) }} className={datflag === index ? 'active' : ''}>{item.name}</div>
                })}
            </div>
            <div className='bottom-num'>
                <p>
                    <span>{earnday.retDayNum}</span>
                    <span>{t('public.day')}</span>
                </p>
                <p onMouseEnter={() => { setEcho(true) }} onMouseLeave={() => { setEcho(false) }}>
                    <span>
                        {t('cout.hbzq')}
                        <img src={icongt} alt="" />
                    </span>
                    <span style={{ display: echo ? '' : 'none' }}>{t('cout.textsm')}</span>
                </p>
            </div>
            <div className="bottom-list">
                <div className="list">
                    <div className="list-r">
                        <span className="list-r-one">{(Number(earnday.income) * ield * num * tnum).toFixed(6)} {flag}</span><br />
                        <span>≈{(Number(earnday.income) * reats * ield * num * tnum).toFixed(2)}U</span><br />
                        <span>{t('cout.sy')}</span>
                    </div>
                    <div className="list-r">
                        <span>{(Number(earnday.electricFee) * ield * num * tnum).toFixed(6)} {flag}</span><br />
                        <span>≈{(Number(earnday.electricFee) * reats * ield * num * tnum).toFixed(2)}U</span><br />
                        <span>{t('h5.index.electric')}</span>
                    </div>
                    <div className="list-r">
                        <span>{(Number(earnday.pureIncome) * ield * num * tnum).toFixed(6)} {flag}</span><br />
                        <span>≈{(Number(earnday.pureIncome) * reats * ield * num * tnum).toFixed(2)}U</span><br />
                        <span>{t('cout.jsy')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
