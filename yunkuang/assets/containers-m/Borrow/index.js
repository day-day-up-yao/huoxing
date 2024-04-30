import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Swiper from 'swiper/js/swiper'
// import { useDispatch, useSelector } from 'react-redux'
import cookie from 'js-cookie'
import './index.scss'
import Select from './Select'
import BorrowSure from './BorrowSure'
import Layout from './Layout'
import { trim } from 'lodash'
import Toast from '../../components/Toast'
import { formatPrice, queryParam, formatTime, isCoco } from '../../public/js'
import backimg from '../../public/imgs/borrow/backbow.png'
import logos from '../../public/imgs/borrow/borrlogo.png'
let id = ''
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [appflage, setAppflage] = useState(false)
    const { loanCurrencies, marginCurrencies } = useSelector((state) => ({
        loanCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.loanCurrencies) || [],
        marginCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.marginCurrencies) || []
    }))
    const [plans, setPlans] = useState(false)
    const [planlist, setPlanlist] = useState([])
    const [wyflage, setWyflage] = useState(false)
    const [wylist, setWylist] = useState([])
    // 资产
    const [asset, setAsset] = useState([{ free: '' }])
    // 可借贷币种
    const [curBorrowSelected, setCurBorrowSelected] = useState(
        loanCurrencies.length > 0
            ? loanCurrencies[0]
            : {
                currency: '',
                maxAmount: 0,
                minAmount: 0
            }
    )
    const [curBorrow, setCurBorrow] = useState() // 借款数量
    const [borrowErr, setBorrowErr] = useState(false) // 是否显示借款范围提示
    // 质押币种
    const [curCollateralSelected, setCurCollateralSelected] = useState(
        marginCurrencies.length > 0
            ? marginCurrencies[0]
            : {
                currency: ''
            }
    )
    const [curCollateral, setCurCollateral] = useState() // 质押数量

    const [rate, setRate] = useState(0) // 日利率
    const [day, setDay] = useState(1) // 借贷天数
    const [flage, setFlage] = useState(0) // H5折叠展开
    const [tipflag, setTipflag] = useState(-1) // 是否显示质押率说明
    const [titflag, setTitflag] = useState(false) // 是否显示借币说明
    const [lxflag, setLxflag] = useState(false) // 是否显示利息说明
    const [loginflag, setLoginflag] = useState(false) // 是否登录
    const [allreat, setAllreat] = useState('-') // 总利息
    const [allpay, setAllpay] = useState('-') // 还款数量
    const [endtime, setEndtime] = useState()
    const autotrue = true
    const autofalse = false
    const lendlist = [
        { back: backimg, logo: logos, texone: t('lend.texone'), texttwo: t('lend.texttwo') }
    ]
    useEffect(() => {
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
            autoplay: lendlist.length === 1 ? autofalse : autotrue,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
        // 判断是否是手机端
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
        loanCurrencies.length > 0 && setCurBorrowSelected(loanCurrencies[0]) // 显示的借币币种
        marginCurrencies.length > 0 && setCurCollateralSelected(marginCurrencies[0]) // 显示还币币种
        if (cookie.get('c_token')) {
            setLoginflag(true)
            // 资产
            dispatch.product.checkC2cBanlance({
                token_ids: curCollateralSelected.currency
            }).then((res) => {
                if (res.code === 0) {
                    setAsset(res.data)
                }
            })
        } else {
            setLoginflag(false)
        }
        if (curBorrowSelected.periodInterests) {
            setRate(curBorrowSelected.periodInterests[0].dailyRate) // 日利率
            setDay(curBorrowSelected.periodInterests[0].loanPeriod) // 质押天数
        }
    }, [loanCurrencies, marginCurrencies])
    const tiplist = [
        { name: t('lend.initial'), num: `${formatPrice(curCollateralSelected.initMarginRate * 100)}%`, content: `${t('lend.dmake') + curCollateralSelected.currency + t('lend.izuowei')}*${formatPrice(curCollateralSelected.initMarginRate * 100)}%` },
        { name: t('lend.bc'), num: `${formatPrice(curCollateralSelected.marginCallRate * 100)}%`, content: `${t('lend.dmake') + curCollateralSelected.currency + t('lend.izuowei')}>=${formatPrice(curCollateralSelected.marginCallRate * 100)}%${t('lend.bcmo')}` },
        { name: t('lend.pc'), num: `${formatPrice(curCollateralSelected.liquidationRate * 100)}%`, content: `${t('lend.dmake') + curCollateralSelected.currency + t('lend.izuowei')}>=${formatPrice(curCollateralSelected.liquidationRate * 100)}%${t('lend.pcmo')}` }
    ]
    // 确认提交
    const [orderSureShow, setOrderSureShow] = useState(false)

    return <Layout>
        <div className="banner">
            {/* <div className="banner-img">
                <img src={logos} alt=""/>
            </div>
            {curBorrowSelected.currency === 'FIL' ? (
                <div className="banner-title">借FIL 全新上线</div>
            ) : (
                <div className="banner-title">借USDT 首月<span style={{ color: '#FFCF74' }}>0息</span></div>
            )} */}
            {/* {curBorrowSelected.currency === 'FIL' ? (
                <div className="sub-title">质押BTC、ETH、USDT借出FIL · 闪电放款</div>
            ) : (
                <div className="sub-title">USDT全网<span>最低</span>借币利率 · 实体矿机算力<span>免费送</span></div>
            )} */}
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {lendlist.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            <div className="bannerthree" style={{ background: `url(` + item.back + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }}>
                                {/* <div className="banner-img">
                                    <img src={item.logo} alt=""/>
                                </div> */}
                                <div className="banner-title">{item.texone}<span style={{ color: '#FFCF74' }}> {item.texttwo}</span></div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="swiper-pagination"></div>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
            </div>
        </div>
        <div className="form-con">
            <div className="lead-in">
                <span>{t('lend.dqkj')}:</span>
                <div className="logo-wrap">
                    {loanCurrencies.map(function (item, index) {
                        return <div className="css-1hafhoh" key={index}>
                            <img
                                src={item.currencyLogo}
                                alt={item.currency}
                                title={item.currency}
                            />
                        </div>
                    })}
                </div>
                {/* <div className="more">
                    <span className="vl">|</span><a className="t" onClick={() => {
                        if (cookie.get('c_token')) {
                            if (appflage === true) {
                                window.location.href = `/lend/order?channel=111`
                            } else {
                                if (isCoco()) {
                                    window.location.href = '/coco/order'
                                } else {
                                    window.location.href = '/lend/order'
                                }
                            }
                        } else {
                            if (isCoco()) {
                                window.location.href = `/login?redirect= ${encodeURIComponent(window.location.href)}`
                            } else {
                                window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                            }
                        }
                    }} style={{ color: '#025AE6' }}>{t('lend.historyorder')}</a>
                </div> */}
            </div>
            <div className="lead-in-phone">
                <div className="line-1">
                    <span>{t('lend.dqkj')}:</span>
                    <div className="more"><a className="t" onClick={() => {
                        if (cookie.get('c_token')) {
                            if (appflage === true) {
                                window.location.href = `/lend/order?channel=111`
                            } else {
                                if (isCoco()) {
                                    window.location.href = '/coco/order'
                                } else {
                                    window.location.href = '/lend/order'
                                }
                            }
                        } else {
                            if (isCoco()) {
                                window.location.href = `/login?redirect= ${encodeURIComponent(window.location.href)}`
                            } else {
                                window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                            }
                        }
                    }} style={{ color: '#025AE6' }}>{t('lend.historyorder')}</a></div>
                </div>
                <div className="line-2">
                    {Array.isArray(loanCurrencies) && loanCurrencies.map(function (item, index) {
                        return <div className="css-1hafhoh" key={index}>
                            <img
                                src={item.currencyLogo}
                                alt={item.currency}
                                title={item.currency}
                            />
                        </div>
                    })}
                </div>
            </div>
            <div className="form-wrap">
                <div className="field">
                    <div className="title">{t('lend.wantlend')}</div>
                    <Select
                        // inputOnly={true}
                        error={borrowErr}
                        options={loanCurrencies.filter((itm) => { return itm.currency !== curCollateralSelected.currency })}
                        value={curBorrow}
                        onInput={(event) => {
                            const value = trim(event.target.value)
                            const val = value ? value.replace(/[^0-9.]/g, '') : ''
                            setCurBorrow(val)
                            if (val === '') {
                                setCurCollateral()
                                setBorrowErr(false)
                                return
                            }
                            // debounce()
                            id && clearTimeout(id)
                            id = setTimeout(() => {
                                dispatch.loan.pledgeCalCulator({
                                    borrowCurrency: curBorrowSelected.currency,
                                    marginCurrency: curCollateralSelected.currency,
                                    borrowAmount: val,
                                    period: day
                                }).then((res) => {
                                    if (res.code === 0) {
                                        setCurCollateral(res.data.marginAmount)
                                        setAllreat(res.data.totalInterest)
                                        setAllpay(res.data.totalReturn)
                                        setEndtime(res.data.endTime)
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            }, 500)
                            // dispatch.loan.pledgeCalCulator({
                            //     borrowCurrency: curBorrowSelected.currency,
                            //     marginCurrency: curCollateralSelected.currency,
                            //     borrowAmount: val,
                            //     period: day
                            // }).then((res) => {
                            //     if (res.code === 0) {
                            //         setCurCollateral(res.data.marginAmount)
                            //         setAllreat(res.data.totalInterest)
                            //         setAllpay(res.data.totalReturn)
                            //         setEndtime(res.data.endTime)
                            //     } else {
                            //         Toast.info(res.msg)
                            //     }
                            // })
                            // console.log(val)
                            // setCurCollateral(val * 2)
                            if (val < curBorrowSelected.minAmount) {
                                setBorrowErr(`${t('lend.min')}${curBorrowSelected.minAmount}${curBorrowSelected.currency}${t('lend.qj')}`)
                                return
                            }
                            if (val > curBorrowSelected.maxAmount) {
                                setBorrowErr(`${t('lend.maxlend')}${curBorrowSelected.maxAmount}${curBorrowSelected.currency}`)
                                return
                            }
                            setBorrowErr(false)
                        }}
                        selected={curBorrowSelected}
                        onSelected={(item, index) => {
                            // console.log(marginCurrencies.filter((itm) => { return itm.currency !== item.currency }))
                            // setLoanlist(marginCurrencies.filter((itm) => {
                            //     return itm !== item.currency
                            // }))
                            setRate(item.periodInterests[0].dailyRate)
                            setCurBorrowSelected(item)
                            setBorrowErr(false)
                            if (curBorrow && curBorrow !== '') {
                                dispatch.loan.pledgeCalCulator({
                                    borrowCurrency: item.currency,
                                    marginCurrency: curCollateralSelected.currency,
                                    borrowAmount: curBorrow,
                                    period: day
                                }).then((res) => {
                                    if (res.code === 0) {
                                        setCurCollateral(res.data.marginAmount)
                                        setAllreat(res.data.totalInterest)
                                        setAllpay(res.data.totalReturn)
                                        setEndtime(res.data.endTime)
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            }
                        }}
                        // placeholder={`${curBorrowSelected.minAmount + curBorrowSelected.currency} <= 数量 <= ${curBorrowSelected.maxAmount + curBorrowSelected.currency}`}
                    />
                    <div className="error-tip">{borrowErr}</div>
                </div>
                <div className="field">
                    <div className="title">
                        <span>{t('lend.pledge')}</span>
                        {/* <label className="css-51ezhr">
                            <span className="only-show">
                                <div className="css-s6cz5e">
                                    <input type="checkbox" data-bn-type="checkbox" hidden="" className="css-p19g2b" />
                                </div>
                                只展示我的资产
                            </span>
                        </label> */}
                    </div>
                    <Select
                        selectOnly={true}
                        options={marginCurrencies.filter((itm) => { return itm.currency !== curBorrowSelected.currency })}
                        value={curCollateral}
                        onInput={(event) => { setCurCollateral(event.target.value) }}
                        selected={curCollateralSelected}
                        onSelected={(item, index) => {
                            // setMaginlist(loanCurrencies.filter((itm) => {
                            //     return itm !== item.currency
                            // }))
                            // console.log(loanCurrencies.filter((itm) => { return itm.currency !== item.currency }))
                            if (cookie.get('c_token')) {
                                setLoginflag(true)
                                dispatch.product.checkC2cBanlance({
                                    token_ids: item.currency
                                }).then((res) => {
                                    setAsset(res)
                                })
                                // dispatch.product.checkC2cBanlance({}).then((res) => {
                                //     console.log(res)
                                // })
                            } else {
                                setLoginflag(false)
                            }
                            setCurCollateralSelected(item)
                            if (curBorrow && curBorrow !== '') {
                                dispatch.loan.pledgeCalCulator({
                                    borrowCurrency: curBorrowSelected.currency,
                                    marginCurrency: item.currency,
                                    borrowAmount: curBorrow,
                                    period: day
                                }).then((res) => {
                                    if (res.code === 0) {
                                        setCurCollateral(res.data.marginAmount)
                                        setAllreat(res.data.totalInterest)
                                        setAllpay(res.data.totalReturn)
                                        setEndtime(res.data.endTime)
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            }
                        }}
                    />
                    {/* asset.length !== 0 ? asset[0].free < curCollateral ? '' : '' : '' : 'none' */}
                    <div className="error-tip" style={{ display: loginflag === true ? asset.length === 0 ? '' : asset[0].free < curCollateral ? '' : 'none' : 'none' }}>
                        <span>
                            <span>{t('lend.property')}{asset.length > 0 ? Number(asset[0].free).toFixed(6) : '0'} {curCollateralSelected.currency}</span><span className="link" onClick={() => {
                                if (isCoco()) {
                                    window.location.href = '/finance'
                                } else {
                                    window.location.href = '/property'
                                }
                            }}><a style={{ color: '#025AE6' }}>{t('lend.gotozc')}</a> &gt;&gt;</span>
                        </span>
                    </div>
                    <div className="tips">
                        {tiplist.map((item, index) => {
                            return <span className="tip" key={index}>
                                <span className="CursorPointer__Box-sc-1mbwq70-0 iVySat" key={index} onMouseEnter={() => {
                                    setTipflag(index)
                                }} onMouseLeave={() => {
                                    setTipflag(-1)
                                }}>
                                    <span style={{ fontSite: '14px' }}>{item.name}</span>
                                    <p style={{ display: tipflag === index ? 'block' : 'none' }}>{item.content}</p>
                                </span>
                                <span className="t">{item.num}</span>
                            </span>
                        })}
                    </div>
                </div>
                <div className="field">
                    <div className="title" onMouseEnter={() => { setTitflag(true) }} onMouseLeave={() => { setTitflag(false) }}>
                        <span className="CursorPointer__Box-sc-1mbwq70-0 iVySat">
                            <span style={{ fontSite: '16px' }}>{t('lend.lendtime')}</span>
                            <p style={{ display: titflag === true ? '' : 'none' }}>{t('lend.lendtimet')}</p>
                        </span>
                    </div>
                    <div className="durations">
                        {Array.isArray(curBorrowSelected.periodInterests) && curBorrowSelected.periodInterests.map((item, index) => {
                            return <div className={flage === index ? 'duration on' : 'duration'} key={index} onClick={() => {
                                setRate(item.dailyRate)
                                setDay(item.loanPeriod)
                                setFlage(index)
                                if (curBorrow && curBorrow !== '') {
                                    dispatch.loan.pledgeCalCulator({
                                        borrowCurrency: curBorrowSelected.currency,
                                        marginCurrency: curCollateralSelected.currency,
                                        borrowAmount: curBorrow,
                                        period: item.loanPeriod
                                    }).then((res) => {
                                        if (res.code === 0) {
                                            setAllreat(res.data.totalInterest)
                                            setAllpay(res.data.totalReturn)
                                            setEndtime(res.data.endTime)
                                        } else {
                                            Toast.info(res.msg)
                                        }
                                    })
                                }
                            }}>
                                {Number(item.loanPeriod)} {t('lend.month')}
                                {/* <span style={{ fontSize: '12px', color: '#FFCF74' }}>{Number(item.loanPeriod) === 3 ? '(首月0息)' : ''}</span> */}
                                {/* {curBorrowSelected.currency === 'FIL' ? ('') : (
                                    <span style={{ fontSize: '12px', color: '#FFCF74' }}>{Number(item.loanPeriod) === 3 ? '(首月0息)' : ''}</span>
                                )} */}
                            </div>
                        })}
                    </div>
                </div>
                <div className="field">
                    <div className="title" onMouseEnter={() => { setLxflag(true) }} onMouseLeave={() => { setLxflag(false) }}>
                        <span className="CursorPointer__Box-sc-1mbwq70-0 iVySat">
                            <span style={{ fontSite: '16px' }}>{t('lend.interest')}</span>
                            <p style={{ display: lxflag === true ? '' : 'none' }}>{t('lend.interesttitle')}{curBorrowSelected.currency}</p>
                        </span>
                    </div>
                    <div className="items">
                        {/* <div className="item"><span className="key">月利率</span><span>{(Number(rate) * 30 * 100).toFixed(2)}%</span></div> */}
                        <div className="item"><span className="key">{t('lend.dayrate')}({t('lend.referto')})</span><span>{formatPrice(Number(rate) * 100)}% ({(Number(rate) * 30 * 100).toFixed(1)}%)</span></div>
                        <div className="item"><span className="key">{t('lend.allinterest')}</span><span>{allreat} {curBorrowSelected.currency}</span></div>
                        <div className="item"><span className="key">{t('lend.hkplan')}</span><span style={{ color: (curBorrow && curBorrow !== '') ? '#7065d6' : '' }} onClick={() => {
                            if (curBorrow && curBorrow !== '') {
                                dispatch.loan.interestCalculator({
                                    borrowAmt: curBorrow,
                                    cycle: day,
                                    dailyRate: rate,
                                    borrowCoin: curBorrowSelected.currency
                                }).then((res) => {
                                    if (res.code === 0) {
                                        setPlans(true)
                                        setPlanlist(res.data)
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            }
                        }}>{t('lend.view')}</span></div>
                    </div>
                </div>
                <div className="field"><div style={{ height: '1px', background: 'rgb(234, 236, 239)' }}></div></div>
                <div className="field">
                    <div className="title"><span>{t('lend.hknum')}</span><span>{allpay} {curBorrowSelected.currency}</span></div>
                </div>
                <button onClick={() => {
                    if (borrowErr) {
                        return
                    }
                    if (loginflag) {
                        if (asset.length === 0 || asset[0].free < curCollateral) {
                            Toast.info(t('lend.zcbz'))
                            return
                        }
                        if (curBorrow) {
                            setOrderSureShow(true)
                        }
                    } else {
                        if (isCoco()) {
                            window.location.href = `/login?redirect= ${encodeURIComponent(window.location.href)}`
                        } else {
                            window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                        }
                    }
                }} data-bn-type="button" className="css-1miqa7d" style={{ background: '#7065d6', color: '#fff' }}>{loginflag === true ? t('lend.startlend') : t('lend.tologin')}</button>
            </div>
            <div className="bottom-text" style={{ display: curBorrowSelected.currency === 'FIL' ? 'none' : '' }}>
                <h3>{t('lend.detailstate')}</h3>
                <ul>
                    <li>{t('lend.stateone')}</li>
                    <li>{t('lend.statetwo')} </li>
                    {/* <li>3. 借币期限满3个月，且没有提前归还，享首月零息;</li> */}
                </ul>
                <h4>{t('lend.howmake')}</h4>
                <ul>
                    <li>{t('lend.makeone')}</li>
                    <li>{t('lend.maletwo')}</li>
                    <li>{t('lend.makethree')}</li>
                    {/* <a href={isCoco() ? `/coco/more` : '/lend/more'}>{t('lend.knowmore')}</a> */}
                </ul>
            </div>
        </div>
        <div className="lend-position" style={{ display: plans === true ? 'flex' : 'none' }}>
            <div className="lend-position-con" style={{ display: wyflage === true ? 'none' : '' }}>
                <h3>{t('lend.hkplan')}</h3>
                <ol>
                    <li>{planlist.length}{t('lend.plan1')}<span onClick={() => {
                        dispatch.loan.violateConfiginfo({}).then((res) => {
                            if (res.code === 0) {
                                setWylist(res.data)
                                setWyflage(true)
                            } else {
                                Toast.info(res.msg)
                            }
                        })
                    }}>?</span></li>
                    <li>{t('lend.plan2')}</li>
                </ol>
                {/* <h4>{planlist.length}期还完，按月先付利息，到期还本金</h4>
                <h5>可提前结清，需支付相应违约金<span onClick={() => {
                    dispatch.loan.violateConfiginfo({}).then((res) => {
                        if (res.code === 0) {
                            setWylist(res.data)
                            setWyflage(true)
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                }}>?</span></h5> */}
                <ul>
                    {planlist.map((item, index) => {
                        return <li key={index}>
                            <span>{formatTime(item.end, 'yyyy-MM-dd')}</span>
                            <span>{item.paybackInterest} {curBorrowSelected.currency}</span>
                        </li>
                    })}
                </ul>
                <div className="lend-position-con-close" onClick={() => { setPlans(false) }}>
                    <svg onClick={() => setWyflage(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div className="lend-position-wy" style={{ display: wyflage === true ? '' : 'none' }}>
                <h3>{t('lend.breach')}</h3>
                <h4>{t('lend.breachtitle')}</h4>
                <ul>
                    {wylist.map((item, index) => {
                        return <li key={index}>{t('lend.newqs')}{item.begin}-{item.end}{t('lend.qi')}，{t('lend.wyjw')}{item.violateDay}{t('lend.daylx')}</li>
                    })}
                </ul>
                <div className="lend-position-con-close" onClick={() => { setWyflage(false) }}>
                    <svg onClick={() => setWyflage(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
        {orderSureShow && <BorrowSure {...{ setOrderSureShow, rate, day, curBorrow, curBorrowSelected, curCollateral, curCollateralSelected, allpay, allreat, endtime }}/>}
    </Layout>
}
