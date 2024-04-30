import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Toast from '../../components/Toast'
import Payment from '../../components/Payment'
import upimg from '../../public/imgs/up.png'
import downimg from '../../public/imgs/down.png'
import sureimg from '../../public/imgs/select.png'
import { formatTime, payState, payType, isMobile, isJp, queryParam } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import ToPayment from '../../containers/Order/ToPayment'
const Nopay = []
const Yespay = []
const cancel = []
const orderlists = []
export default ({ detailShowDo }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [ulflag, setUlflag] = useState(false)
    const [select, setSelect] = useState(1)
    // const [imgsee, setImgsee] = useState(true)
    const [selectindex, setSelectindex] = useState(0)
    const [ordermeg, setOrdermeg] = useState(t('orderdetail.all'))
    const [orderlist, setOrderlist] = useState()
    const [powerlist, setPowerlist] = useState([])
    const [costorder, setCostorder] = useState([])
    // const onEnter = useCallback(() => {
    //     if (select === true) {
    //         setUlflag(true)
    //         setImgsee(false)
    //     }
    // })
    const [paytype, setPaytype] = useState(
        {
            flage: false,
            client: ''
        }
    )
    // const onLeave = useCallback(() => {
    //     if (select === true) {
    //         setUlflag(false)
    //         setImgsee(true)
    //     }
    // })
    const handleSelect = useCallback(() => {
        setUlflag(!ulflag)
    })
    const nav = useRef([
        { title: t('orderdetail.all') },
        { title: t('orderdetail.nopay') },
        { title: t('orderdetail.payed') },
        { title: t('orderdetail.gocancel') }
    ])
    useEffect(() => {
        if (queryParam('num') === null) {
            setSelect(1)
        } else {
            if (queryParam('num') === '') {
                setSelect(1)
            } else {
                setSelect(Number(queryParam('num')))
            }
        }
        dispatch.order.orderCalculate({}).then((res) => {
            if (res.code === 0) {
                if (res.data === null) {
                    setOrderlist(1)
                } else {
                    res.data.map((item) => {
                        orderlists.push(item)
                        if (item.orderState === 0) {
                            Nopay.push(item)
                        } else if (item.orderState === 1) {
                            Yespay.push(item)
                        } else if (item.orderState === 3) {
                            cancel.push(item)
                        }
                    })
                    setOrderlist(res.data)
                }
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
        })
        dispatch.order.electricOrderlist().then((res) => {
            if (res.code === 0) {
                if (res.data !== null) {
                    setPowerlist(res.data)
                } else {
                    setPowerlist([])
                }
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.order.collectOrder().then((res) => {
            if (res.code === 0) {
                setCostorder(res.data)
                // console.log(res.data)
                // setCostlist(res.data !== null ? res.data : [])
            }
        })
        // dispatch.order.powerPurchase({}).then((res) => {
        //     if (res.code === 0) {
        //         setPowerlist(res.data)
        //     } else {
        //         Toast.info(res.msg)
        //     }
        // }).catch((err) => {
        //     console.log(err)
        //     Toast.info(t('public.fail'))
        // })
    }, [])
    const handleTopay = useCallback((item) => {
        setPaytype(
            {
                flage: true,
                client: item.tradeNo
            }
        )
    })
    const [hint, setHint] = useState(false)
    const [trade, setTrade] = useState('')
    const [collectcurry, setCollectcurry] = useState()
    const changePay = useCallback((id, type) => {
        dispatch.order.changePaymethed({
            tradeNo: id,
            payMethod: type
        }).then((res) => {
            if (res.code === 0) {
                if (type === 2) {
                    window.location.href = `/outputlist/${res.data.orderId}`
                }
                if (type === 1) {
                    setPaytype(
                        {
                            flage: true,
                            client: id
                        }
                    )
                }
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div>
        {!isMobile() ? '' : <Header title={t('orderdetail.myorder')}/>}
        <div className="order">
            <div className="order-top">
                <div className="order-con" style={{ color: select === 1 ? '#ffa006' : '' }}>
                    <div className="order-con-l" onClick={() => setSelect(1)}>{t('orderdetail.metchorder')}</div>
                    <div className="order-con-r" onClick={handleSelect}>
                        <p>（{ordermeg} <span><img src={!ulflag ? downimg : upimg} /></span>）</p>
                        {ulflag && <ol>
                            {nav.current.map((item, index) => {
                                return <li
                                    style={{ width: isJp ? '130px' : '100px' }}
                                    onClick={() => {
                                        setSelectindex(index)
                                        setUlflag(false)
                                        if (index === 1) {
                                            setOrdermeg(t('orderdetail.nopay'))
                                            setOrderlist(Nopay)
                                        } else if (index === 2) {
                                            setOrdermeg(t('orderdetail.payed'))
                                            setOrderlist(Yespay)
                                        } else if (index === 3) {
                                            setOrdermeg(t('orderdetail.gocancel'))
                                            setOrderlist(cancel)
                                        } else if (index === 0) {
                                            setOrdermeg(t('orderdetail.all'))
                                            setOrderlist(orderlists)
                                        }
                                    }} key={index}>
                                    <span>{item.title}</span>
                                    <span><img src={selectindex === index ? sureimg : ''} /></span>
                                </li>
                            })}
                        </ol>}
                    </div>
                </div>
                <div className="order-con" style={{ color: select === 2 ? '#ffa006' : '' }}>
                    <div className="order-con-l" onClick={() => setSelect(2)}>{t('orderdetail.getElect')}</div>
                </div>
                <div className="order-con" style={{ color: select === 3 ? '#ffa006' : '' }}>
                    <div className="order-con-l" onClick={() => setSelect(3)}>{t('orderdetail.costorder')}</div>
                </div>
            </div>
            {select === 1 && <div className="order-con">
                <div className="order-con-title">
                    {Array.isArray(orderlist) && orderlist.map((item, index) => {
                        return <ul key={index}>
                            <li onClick={() => detailShowDo(item)}>
                                <p>{t('orderdetail.proname')}</p>
                                <p>{item.productName}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.time')}</p>
                                <p>{item.cycle === 0 ? t('header.nav.permanent') : `${item.cycle}${t('product.makeday')}`}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.num')}</p>
                                <p>{item.hashrateNum}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.downtime')}</p>
                                <p>{formatTime(item.createdAt, 'yyyy-MM-dd hh:mm')}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.zt')}</p>
                                <p>{payState(item.orderState, t)}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.ordernum')}</p>
                                <p>{item.tradeNo}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.omoney')}</p>
                                <p>{item.realAmount > 0 ? parseFloat(item.realAmount).toFixed(2) : parseFloat(item.totalMoney).toFixed(2)} {item.priceCurrency}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.metchmodel')}</p>
                                <p>{item.minerTypeName}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.paytime')}</p>
                                <p>{item.payTime === 0 ? t('orderdetail.Nopay') : formatTime(item.payTime, 'yyyy-MM-dd hh:mm')}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.paywey')}</p>
                                <p>{item.orderState === 3 ? '-' : payType(item.payType, t)}</p>
                            </li>
                            <li style={{ display: item.orderState === 0 ? 'block' : 'none' }}>
                                <p>{t('orderdetail.cz')}</p>
                                <div className="order-con-span">
                                    <span onClick={() => {
                                        dispatch.order.cancelOrder({
                                            orderId: item.id
                                        }).then((res) => {
                                            if (res.code === 0) {
                                                dispatch.order.orderCalculate().then((res) => {
                                                    if (res.code === 0) {
                                                        setOrderlist(res.data)
                                                    } else {
                                                        Toast.info(res.msg)
                                                    }
                                                }).catch((err) => {
                                                    console.log(err)
                                                })
                                            } else {
                                                Toast.info(res.msg)
                                            }
                                        })
                                    }}>{t('orderdetail.cancal')}</span>
                                    <span onClick={() => {
                                        window.location.href = `/order/${item.tradeNo}`
                                    }}>{t('orderdetail.gopay')}</span>
                                </div>
                            </li>
                            <div className="order-con-bottom"></div>
                        </ul>
                    })}
                </div>
            </div>}
            {select === 2 && <div className="order-right">
                <div className="order-right-con">
                    {powerlist.map((item, index) => {
                        return <ul key={index}>
                            <li>
                                <p>{t('orderdetail.ordernum')}</p>
                                <p>{item.tradeNo}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.downtime')}</p>
                                <p>{formatTime(item.createdAt, 'yyyy-MM-dd')}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.czbz')}</p>
                                <p>{item.orderCurrency}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.jyfs')}</p>
                                <p>{item.payTypeStr}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.omoney')}</p>
                                <p>{item.totalAmount }</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.ddzt')}</p>
                                {item.orderState === 0 ? (
                                    <p>
                                        <span onClick={() => handleTopay(item)}>{t('orderdetail.gopay')}</span>
                                        <span onClick={() => {
                                            dispatch.order.cancelElectriice({
                                                rechargeOrderId: item.rechargeOrderId
                                            }).then((res) => {
                                                if (res.code === 0) {
                                                    window.location.href = '/order?num=2'
                                                } else {
                                                    Toast.info(res.msg)
                                                }
                                            })
                                        }}>{t('orderdetail.cancal')}</span>
                                    </p>
                                ) : (
                                    <p>{item.stateDesc}</p>
                                )}
                            </li>
                        </ul>
                    })}
                </div>
            </div>}
            {select === 3 && <div className="order-right">
                <div className="order-right-con">
                    {costorder.map((item, index) => {
                        return <ul key={index}>
                            <li>
                                <p>{t('orderdetail.ordernum')}</p>
                                <p>{item.tradeNo}</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.costname')}</p>
                                <p>{item.name}</p>
                            </li>
                            <li>
                                <p>{t('property.time')}</p>
                                <p>{formatTime(item.createdAt, 'yyyy-MM-dd')}</p>
                            </li>
                            <li>
                                <p>{t('hasgrate.bz')}</p>
                                <p>{item.currency}</p>
                            </li>
                            <li>
                                <p>{t('exchange.num')}</p>
                                <p>{item.amount }</p>
                            </li>
                            <li>
                                <p>{t('orderdetail.ddzt')}</p>
                                {item.status === 0 && (
                                    item.payAllow === 3 ? (<p>
                                        <span onClick={() => {
                                            setHint(true)
                                            setTrade(item.tradeNo)
                                        }}>{t('outlist.sydk')}</span>
                                        <span className="to-pay-btn" onClick={() => {
                                            changePay(item.tradeNo, 1)
                                            setCollectcurry(item.currency)
                                        }}>{t('orderdetail.gopay')}</span>
                                    </p>) : (
                                        <p>
                                            {item.payAllow === 2 && <span onClick={() => {
                                                setHint(true)
                                                setTrade(item.tradeNo)
                                            }}>
                                                {t('outlist.sydk')}
                                            </span>}
                                            {item.payAllow === 1 && <span className="to-pay-btn" onClick={() => {
                                                changePay(item.tradeNo, 1)
                                                setCollectcurry(item.currency)
                                            }}>
                                                {t('orderdetail.gopay')}
                                            </span>}
                                        </p>
                                    )
                                )}
                                {item.status === 1 && <p>{t('orderdetail.paysucc')}</p>}
                                {item.status === 2 && <p>{t('orderdetail.getdking')}</p>}
                            </li>
                        </ul>
                    })}
                </div>
            </div>}
            <div className="paytype" style={{ display: paytype.flage ? 'flex' : '' }}>
                <div className="paytype-con">
                    <h3>{t('public.selectpay')}</h3>
                    <Payment
                        noBankPay={true}
                        clientTradeNo={paytype.client}
                        orderType="electricity-recharge"
                        paySuccess={() => {
                            window.location.href = '/order?num=2'
                        }}
                    />
                    <div className="close" onClick={() => setPaytype(
                        {
                            flage: false,
                            client: ''
                        }
                    )}>
                        <img src={close} alt=""/>
                    </div>
                </div>
            </div>
            {hint && <div className="cost-prompt">
                <div className="cost-prompt-center">
                    <div className="prompt-center-text">{t('orderdetail.cominginfo')}</div>
                    <div className="prompt-center-btn">
                        <div onClick={() => { setHint(false) }}>{t('public.cancel')}</div>
                        <div onClick={() => { changePay(trade, 2) }}>{t('public.sure')}</div>
                    </div>
                </div>
            </div>}
        </div>
        {collectcurry && <ToPayment {...{ paytype, setPaytype }}
            orderType="collect-order" costorder={true}
            currey={collectcurry}
            SuccessFun={() => {
                window.location.href = '/order?num=3'
            }}
        />}
    </div>
}
