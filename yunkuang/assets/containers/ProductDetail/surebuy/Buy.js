import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import selecday from '../../../public/imgs/new/selecday.png'
import Toast from '../../../components/Toast'
import { numToCeil, queryParam } from '../../../public/js/index'
export default ({ detail }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const daylist = [detail.electricDayMin, detail.electricDayMax]
    const [navflag, setNavflag] = useState(0)
    const [eledays, setEledays] = useState(detail.electricDayMin)
    const [flag, setFlag] = useState(false)
    const [tokycmsg, setTokycmsg] = useState(false)
    const [yhcode, setYhcode] = useState('')
    const [disamount, setDisamount] = useState('')
    const [codetype, setCodetype] = useState(null)
    const [selectpay, setSelectpay] = useState(0)
    const [buynum, setBuynum] = useState(detail.buyCount)
    const [uuid, setUuid] = useState('')
    useEffect(() => {
        if (queryParam('chancode')) {
            setUuid(queryParam('chancode'))
        }
        setBuynum(detail.buyCount)
    }, [detail])
    // 合计金额
    let hashrateMoney = numToCeil(detail.price * detail.buyCount, 2)
    const payWay = detail.priceCurrency // USDT,BTC,BDDA,人民币使用CNY
    // 新加返回优惠金额
    // if (detail.discountAmount !== 0) {
    //     hashrateMoney = hashrateMoney - detail.discountAmount
    // }
    useEffect(() => {
        if (detail.electricPayType === 0 || detail.electricPayType === 1) {
            setSelectpay(0)
            setEledays(detail.electricDayMin ? detail.electricDayMin : 0)
        }
        if (detail.electricPayType === 2) {
            setSelectpay(1)
            setEledays(0)
        }
    }, [])
    // 根据校验优惠码返回类型计算优惠金额
    if (codetype === 0) {
        hashrateMoney = numToCeil(detail.price * detail.buyCount, 2) - disamount
    } else if (codetype === 1) {
        hashrateMoney = numToCeil(detail.price * detail.buyCount, 2) * disamount
    } else if (codetype === 2) {
        hashrateMoney = numToCeil(detail.price * detail.buyCount, 2) - disamount * detail.buyCount
    }
    // 计算电费
    const electricFee = eledays === -1 ? 0 : numToCeil(detail.buyCount * eledays * detail.electricFee * detail.minerTypeInfo.kw * 24, 2)
    const handleToverify = useCallback(() => {
        dispatch.order.promotionCode({
            discountCode: yhcode,
            productId: detail.id
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setDisamount(res.data.discountAmount)
                setCodetype(res.data.discountType)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('buyorder.yhfail'))
        })
    })
    const handleTobuy = useCallback(() => {
        dispatch.order.orderCreate({
            buyElectricDays: eledays,
            electricPayType: selectpay === 1 ? 2 : 1,
            buyNum: detail.buyCount,
            productId: detail.id,
            discountCode: yhcode,
            channelUuid: uuid
            // orderCurrency: 'BDDA',
        }).then(function (res) {
            if (res.code !== 0) {
                if (res.code === 3127) {
                    setFlag(true)
                    setTokycmsg(true)
                } else {
                    if (res.msg === 3018) {
                        Toast.info(res.msg)
                    } else {
                        Toast.info(res.msg)
                    }
                }
            } else {
                window.location.href = `/order/${res.data}`
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('productdetail.ddfail'))
        })
    })
    return <div className="buy">
        {/* <div className="buy-left">
            <div>{t('buyorder.kjsl')}</div>
            <div>{t('buyorder.dfjnts')}</div>
            <div>{t('buyorder.yhcode')}</div>
            <div>{t('buyorder.zdmx')}</div>
        </div> */}
        <div className="buy-right">
            <div className="right-num">
                <div className="left-text">{t('buyorder.kjsl')}</div>
                <div className='right-con'>
                    <div className="minus"
                        onClick={() => {
                            if (detail.conditions.length > 0) {
                                if (detail.buyCount === detail.conditions[0].buyMin) return
                            }
                            if (detail.buyCount === 1) {
                                Toast.info(t('productdetail.buyone'))
                                return
                            }
                            dispatch.product.minusDetail()
                        }}>-</div>
                    <div className='num'>
                        <input type="number" value={buynum} onChange={(e) => {
                            // console.log(e.target.value)
                            setBuynum(e.target.value)
                            detail.buyCount = e.target.value
                        }}/>
                    </div>
                    <div className="add"
                        onClick={() => {
                            if (detail.buyCount === detail.leftNumber) {
                                Toast.info(t('productdetail.nometch'))
                                return
                            }
                            dispatch.product.addDetail()
                        }}>+</div>
                </div>
            </div>
            <div className="right-num">
                <div className="left-text">{t('productdetail.sl')}</div>
                <div>{(detail.hashrate) * buynum} {detail.hashrateUnit}</div>
            </div>
            {detail.jointMiningType !== 7 && <div className="right-day">
                <div className="left-text">{t('buyorder.dfjnts')}</div>
                <div className='right-day-con'>
                    <div className="electric-type">
                        {(detail.electricPayType === 0 || detail.electricPayType === 1) && <div
                            className={selectpay === 0 ? 'actives' : ''}
                            style={{ backgroundImage: `url(` + (selectpay === 0 ? selecday : '') + `)` }}
                            onClick={() => {
                                setSelectpay(0)
                                setEledays(detail.electricDayMin)
                                setNavflag(0)
                            }}>{t('hasgrate.yjdf')}</div>}
                        {(detail.electricPayType === 0 || detail.electricPayType === 2) && <div
                            className={selectpay === 1 ? 'actives' : ''}
                            style={{ backgroundImage: `url(` + (selectpay === 1 ? selecday : '') + `)` }}
                            onClick={() => {
                                setSelectpay(1)
                                setEledays(0)
                            }}>{t('outlist.sydk')}</div>}
                    </div>
                    {selectpay === 0 && <div className="day-list">
                        {daylist.map((item, index) => {
                            return <div
                                style={{ backgroundImage: `url(` + (navflag === index ? selecday : '') + `)` }}
                                onClick={() => {
                                    setNavflag(index)
                                    if (index === 1) {
                                        setEledays(90)
                                    }
                                    if (index === 0) {
                                        setEledays(30)
                                    }
                                }}
                                className={navflag === index ? 'actives' : 'day'} key={index}>{item}{t('public.day')}</div>
                        })}
                        <div className={navflag === 3 ? 'actives' : 'day'} style={{ backgroundImage: `url(` + (navflag === 3 ? selecday : '') + `)` }}>
                            <input type="text" onClick={() => setNavflag(3)} onChange={(e) => {
                                setEledays(e.target.value)
                            }} placeholder={t('buyorder.tszdy')}/>
                        </div>
                    </div>}
                    {selectpay === 1 && <div className="day-list">
                        <p>*{t('buyorder.sysm')}</p>
                    </div>}
                    {selectpay === 0 && <div className="day-list">
                        <p>*{t('buyorder.sm')}</p>
                    </div>}
                </div>
            </div>}
            <div className="right-code">
                <div className="left-text">{t('buyorder.yhcode')}</div>
                <div className="right-input">
                    <div className="left">
                        <input type="text" placeholder={t('buyorder.yhui')} onChange={(e) => {
                            setYhcode(e.target.value)
                        }}/>
                    </div>
                    <div className="right" onClick={() => { handleToverify() }}>{t('buyorder.yz')}</div>
                </div>
            </div>
            <div className="right-bill">
                <div className="left-text" style={{ display: 'block' }}>{t('buyorder.zdmx')}</div>
                <div className="bill-con">
                    <div className="bill-item">
                        <span>{t('buyorder.kjzj')}</span>
                        <span>{numToCeil(detail.priceClean * detail.buyCount, 2)} {payWay}</span>
                    </div>
                    <div className="bill-item">
                        <span>{t('buyorder.sf')}</span>
                        <span>{numToCeil(detail.taxPercent * detail.buyCount * detail.priceClean, 2)} {payWay}</span>
                    </div>
                    <div className="bill-item">
                        <span>{t('h5.index.electric')}</span>
                        <span>{electricFee} {payWay}</span>
                    </div>
                    <div className="bill-item">
                        <span>{t('buyorder.yf')}</span>
                        <span>{numToCeil(detail.transferFee * detail.buyCount, 2)} {payWay}</span>
                    </div>
                    <div className="bill-item">
                        <span>{t('buyorder.kjyh')}</span>
                        {codetype === 0 ? (
                            <span className="item-code">{disamount} {payWay}</span>
                        ) : codetype === 1 ? (
                            <span className="item-code">{numToCeil(detail.price * detail.buyCount, 2) - numToCeil(detail.price * detail.buyCount, 2) * disamount} {payWay}</span>
                        ) : codetype === 2 ? (
                            <span className="item-code">{disamount * detail.buyCount} {payWay}</span>
                        ) : ('--')}
                    </div>
                    <div className="bill-all">
                        <span>{t('buyorder.hj')}</span>
                        <span>{numToCeil(hashrateMoney + electricFee, 2)} {payWay}</span>
                    </div>
                </div>
            </div>
            <div className="right-btn">
                <span onClick={() => { handleTobuy() }}>{t('buyorder.qrzf')}</span>
            </div>
        </div>
        <div className="btnalert" style={{ display: flag === true ? 'flex' : 'none' }}>
            <div className="orderpasswdkyc" style={{ display: tokycmsg === true ? 'block' : 'none' }}>
                <h3>{t('productdetail.buytitle')}</h3>
                <div className="orderpasswd-btn">
                    <span onClick={() => {
                        setFlag(false)
                        setTokycmsg(false)
                    }}>{t('productdetail.qx')}</span>
                    <span onClick={() => {
                        window.location.href = '/userkyc'
                    }}>{t('productdetail.setting')}</span>
                </div>
            </div>
        </div>
    </div>
}
