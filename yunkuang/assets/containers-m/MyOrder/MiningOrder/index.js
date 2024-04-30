import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './index.scss'

import copyimg from '../../../public/imgs/h5img/other/copy_icon.png'
import usdtimg from '../../../public/imgs/currey/usdticon.png'
import { payType, formatTime } from '../../../public/js/index'
import { CurrenyBg } from '../../../public/js/curryicon'
import Toast from '../../../components/Toast'

export default (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const history = useHistory()
    const { ordertype, orderlists } = props
    // 算力订单取消
    const cancelhashFn = useCallback((id) => {
        dispatch.order.cancelOrder({
            orderId: id
        }).then((res) => {
            if (res.code === 0) {
                window.location.reload()
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 电费订单取消
    const cancelelectricFn = useCallback((orderid) => {
        dispatch.order.cancelElectriice({
            rechargeOrderId: orderid
        }).then((res) => {
            if (res.code === 0) {
                window.location.reload()
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const leftbtnFn = useCallback((info) => {
        if (ordertype === 0) {
            cancelhashFn(info.id)
        }
        if (ordertype === 1) {
            cancelelectricFn(info.rechargeOrderId)
        }
    }, [ordertype])
    // 去支付
    const gopayFn = useCallback((info) => {
        if (ordertype === 0) {
            history.push({
                pathname: '/checkstand',
                state: {
                    data: info.tradeNo,
                    needpay: info.totalMoney,
                    curreny: info.priceCurrency,
                    ordertype: 'hashrate',
                    type: 'minorder'
                }
            })
        }
        if (ordertype === 1) {
            history.push({
                pathname: '/checkstand',
                state: {
                    data: info.tradeNo,
                    needpay: info.totalAmount,
                    curreny: info.orderCurrency,
                    ordertype: 'electricity-recharge',
                    type: 'elecorder'
                }
            })
        }
    }, [ordertype])
    return <div className="mining-order">
        {orderlists && orderlists.map((item, index) => {
            let iconbg = ''
            let curreny = ''
            let title = ''
            let state = ''
            let orderdesc = ''
            if (ordertype === 0) {
                iconbg = CurrenyBg.find((itm) => itm.name === item.incomeCurrency)?.bg
                curreny = item.incomeCurrency
                title = item.minerTypeName
                state = item.orderState
                orderdesc = item.orderStateDesc
            }
            if (ordertype === 1) {
                orderdesc = item.stateDesc
                state = item.orderState
            }
            if (ordertype === 2) {
                iconbg = CurrenyBg.find((itm) => itm.name === item.currency)?.bg
                curreny = item.currency
                title = item.name
                state = item.status
                if (item.status === 1) {
                    orderdesc = '支付成功'
                }
                if (item.status === 2) {
                    orderdesc = '收益抵扣中'
                }
            }
            return <div className="mining-order-item" key={index}>
                <div className={`order-item-top ${ordertype === 1 && 'electric-top'}`}>
                    {ordertype !== 1 ? (
                        <div className="item-top-curreny"
                            style={{
                                backgroundImage: `url(${iconbg})`,
                                backgroundSize: '100%'
                            }}
                        >{curreny}</div>
                    ) : (
                        <div className="item-top-paycy">
                            <div className="top-up-cy">充值币种</div>
                            <img src={usdtimg} alt=""/>
                            <div>USDT</div>
                        </div>
                    )}
                    {item.tradeNo && <div className="item-top-right">
                        <div className="item-top-orderid">{item.tradeNo}</div>
                        <div className="item-top-copy">
                            <img src={copyimg} alt=""/>
                        </div>
                    </div>}
                </div>
                <div className="order-item-center">
                    {ordertype !== 1 && <div className="item-cennter-title">{title}</div>}
                    {ordertype === 0 && <div className="item-center-desc">
                        <span>永久使用权</span>
                        <span>{item.jointMiningTypeName}</span>
                        {/* <span>{永久使用权}</span> */}
                    </div>}
                    {ordertype === 0 && <div className="item-center-info">
                        <div className="center-info-item">
                            <p>{item.buyNum}</p>
                            <p>数量</p>
                        </div>
                        <div className="center-info-item">
                            <p>{state === 3 ? '--' : payType(item.payType, t)}</p>
                            <p>交易方式</p>
                        </div>
                        <div className="center-info-item">
                            <p className="info-item-money">{item.realAmount > 0 ? parseFloat(item.realAmount).toFixed(2) : parseFloat(item.totalMoney).toFixed(2)} {item.priceCurrency}</p>
                            <p>订单金额</p>
                        </div>
                    </div>}
                    {ordertype === 1 && <div className="item-center-info">
                        <div className="center-info-item">
                            <p>{(state === 3 || state === 8) ? '--' : item.payTypeStr}</p>
                            <p>交易方式</p>
                        </div>
                        <div className="center-info-item">
                            <p>{state === 3 && '-'}{item.totalAmount}</p>
                            <p>充值金额</p>
                        </div>
                        <div className="center-info-item">
                            <p className="info-item-money">{item.afterTotalAmount === null ? '--' : item.afterTotalAmount}</p>
                            <p>充值后余额</p>
                        </div>
                    </div>}
                    {ordertype === 2 && <div className="item-center-info">
                        <div className="center-info-three">
                            <div>需支付</div>
                            <div className="three-amount">{item.amount}</div>
                            <div className="three-amount">{curreny}</div>
                        </div>
                    </div>}
                </div>
                <div className="order-item-bottom">
                    <div className="item-bottom-time">{formatTime(item.createdAt, 'yyyy-MM-dd hh:mm')}</div>
                    <div className="item-bottom-stasus">
                        {state === 0 ? (
                            <div className="status-setting">
                                <div className="status-setting-cannal" onClick={() => {
                                    leftbtnFn(item)
                                }}>{ordertype === 3 ? '收益抵扣' : '取消订单'}</div>
                                <div className="status-setting-topay" onClick={() => {
                                    gopayFn(item)
                                }}>去支付</div>
                            </div>
                        ) : (
                            <div className="status-canal">{orderdesc}</div>
                        )}
                    </div>
                </div>
            </div>
        })}
    </div>
}
