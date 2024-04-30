// 收银台
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Header from '../../components-m/Headers'
import AllBg from '../../components-m/AllBg'
import selectimgblue from '../../public/imgs/h5img/other/sureselectblue.png'
import refreshimg from '../../public/imgs/h5img/other/refreshicon.png'
import CountDown from '../../components/CountDown'
import { Curreylog } from '../../public/js/curryicon'
// import observe from '../../models/observe'
import Secondary from './Secondarys'
import Toast from '../../components/Toast'
import { numToCeil } from '../../public/js/index'
import AgainSure from './AgainSure'
import userPayment from './userPayment'

import './index.scss'

export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const location = useLocation()
    const { toPayFn } = userPayment()
    let parameinfo = location.state
    const [paylist, setPaylist] = useState()
    const [payinfo, setPayinfo] = useState({
        type: 0,
        currency: 'USDT',
        amount: '',
        tradeno: '',
        ordertype: ''
    })
    const [type2fa, setType2fa] = useState({
        type: '',
        show: false
    })
    const [secondfg, setSecondfg] = useState(false)
    const [verifyCodeOrderId, setVerifyCodeOrderId] = useState(null)
    const [payOrderId, setPayOrderId] = useState(false)
    const [allassets, setAllassets] = useState(0)
    const [orderinfo, setOrderinfo] = useState()
    // const payTime = 1656924532283 + 120 * 60 * 1000
    console.log(parameinfo)
    useEffect(() => {
        // const info = location.state
        setPayinfo({
            type: 0,
            currency: parameinfo?.curreny,
            amount: parameinfo?.needpay
        })
        getMyassets(parameinfo?.curreny)
        if (parameinfo?.type !== 'minorder') {
            dispatch.order.payList().then((res) => {
                if (res.code === 0) {
                    const paydata = res.data.filter((item) => item.payType === 1)
                    setPaylist(paydata)
                } else {
                    Toast.info(res.msg)
                }
            })
        } else {
            dispatch.order.orderDetail({
                tradeNo: parameinfo?.data
            }).then((res) => {
                if (res.code === 0) {
                    setPaylist(res.data.supportPayCurrency)
                    setOrderinfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [parameinfo])
    // 获取用户资产
    const getMyassets = useCallback((currency) => {
        dispatch.product.checkC2cBanlance({
            token_ids: currency
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.length > 0) {
                    setAllassets(Number(res.data[0].free).toFixed(8))
                } else {
                    setAllassets(0)
                }
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 创建支付订单
    const createPayorder = useCallback(async () => {
        const payMultiParams = {
            clientOrderId: parameinfo?.data,
            paymentSource: parameinfo?.ordertype,
            payType: 1,
            currency: payinfo.currency
        }
        const payCreate = await dispatch.order.payMultiCreate(payMultiParams).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
        if (!payCreate || payCreate.code !== 0) {
            Toast.info(payCreate.msg)
            return
        }
        setPayOrderId(payCreate.data.tradeNo)
        // 获取2FA(二次安全验证)验证方式
        const loadPayType = await dispatch.order.loadPayType({
            order_id: payCreate.data.tradeNo
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.hqfa'))
        })
        if (!loadPayType || !loadPayType.data.orderInfo || !loadPayType.data.authType) {
            loadPayType.msg ? Toast.info(loadPayType.msg) : Toast.info(t('public.hqfa'))
            return false
        }
        if (loadPayType.data.need2FA) {
            /** @desc 需要二次验证弹出输入验证码框 */
            if (loadPayType.data.authType === 'MOBILE' || loadPayType.data.authType === 'EMAIL') {
                const sendVerifyCode = await dispatch.order.sendVderify({
                    order_id: payCreate.data.tradeNo
                }).catch(function (err) {
                    console.log(err)
                    Toast.info(t('public.fail'))
                })
                if (!sendVerifyCode || !sendVerifyCode.data.orderId) {
                    Toast.info(t('public.fail'))
                    return
                }
                setVerifyCodeOrderId(sendVerifyCode.data.orderId)

                // 弹出框输入短信验证码
                if (loadPayType.data.authType === 'MOBILE') {
                    setType2fa({
                        type: 'mobile',
                        show: true
                    })
                }
                // 弹出框输入email验证码
                if (loadPayType.data.authType === 'EMAIL') {
                    setType2fa({
                        type: 'email',
                        show: true
                    })
                }
            } else if (loadPayType.data.authType === 'GA') {
                // 弹出框输入googl验证码
                setType2fa({
                    type: 'ga',
                    show: true
                })
                setVerifyCodeOrderId('')
            }
        } else {
            toPayFn({
                order_id: payCreate.data.tradeNo
            }, parameinfo, payOrderId)
        }
    }, [payinfo, parameinfo])
    // 获取币种汇率
    const getrateFn = useCallback(async (currency, index) => {
        const rate = await dispatch.product.hashRatesinfo({
            base: parameinfo?.curreny,
            quote: currency
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
        if (rate.code === 0) {
            setPayinfo({
                type: index,
                currency: currency,
                amount: numToCeil((Number(parameinfo?.needpay) * Number(rate.data)), 6)
            })
        } else {
            Toast.info(rate.msg)
        }
    }, [parameinfo])
    // 展示计算
    const payTime = orderinfo?.createdAt + orderinfo?.payRemainTime * 1000
    // console.log(type2fa)
    return <div className="check-stand">
        <Header title={'收银台'} leftfg />
        <div className="need-payinfo">
            <div className="payinfo-amount">
                <span>{payinfo.amount}</span>
                <span className="amount-unit">{payinfo.currency}</span>
            </div>
            <div className="payinfo-text">支付金额</div>
        </div>
        <AllBg
            children={
                <div className="check-stand-con">
                    {parameinfo?.type === 'minorder' && <div className="mining-info">
                        <div className="mining-info-item">
                            <p className="item-lift-name">矿机名称</p>
                            <p>{orderinfo?.productName}</p>
                        </div>
                        <div className="mining-info-item item-have-other">
                            <p className="item-lift-name">订单金额</p>
                            <p>
                                <span>{payinfo.amount}</span>
                                <span className="curreny-unit">{payinfo.currency}</span>
                            </p>
                        </div>
                    </div>}
                    <div className="mining-info">
                        <h3>支付方式</h3>
                        <div className="select-currency-list">
                            {paylist && paylist.map((item, index) => {
                                const curreny = Curreylog.find((e) => e.name === item.currency)?.logo
                                return <div
                                    className={`select-currency-item ${payinfo.type === index && 'select-item'}`}
                                    key={index}
                                    onClick={() => {
                                        getrateFn(item.currency, index)
                                        getMyassets(item.currency)
                                    }}
                                >
                                    <div className="curreny-icon">
                                        <img src={curreny} alt=""/>
                                    </div>
                                    <span>{item.currency}</span>
                                    {payinfo.type === index && <div className="selected-item-img">
                                        <img src={selectimgblue} alt=""/>
                                    </div>}
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="mining-info">
                        <div className="account-money">
                            <div className="left-account-info">
                                <div className="account-name">账户余额</div>
                                <div className="account-number">
                                    <span className="account-number-amount">{allassets}</span>
                                    <span>{payinfo.currency}</span>
                                </div>
                                <div className="account-refresh" onClick={() => {
                                    getMyassets(payinfo.currency)
                                }}>
                                    <img src={refreshimg} alt=""/>
                                </div>
                            </div>
                            <div className="top-up-btn">
                                充值
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
        <div className="check-stand-bottom">
            <div className="check-stand-bottom-con">
                {parameinfo?.type === 'minorder' && <div className="bottom-timeinfo">
                    <div className="time-left">
                        {payTime && <CountDown level="hours" eleIdName={`order`} timestamp={payTime} />}
                    </div>
                    <div className="time-text">后自动取消</div>
                </div>}
                <div className={`bottom-timeinfo bottom-pay-btn ${parameinfo?.type !== 'minorder' && 'pay-btn-allwidth'}`} onClick={() => {
                    // setSecondfg(true)
                    createPayorder()
                }}>
                    <p>支付</p>
                    <p>
                        <span>{payinfo.amount}</span>
                        <span>{payinfo.currency}</span>
                    </p>
                </div>
            </div>
        </div>
        {secondfg && <Secondary
            oncloseFn={() => {
                setSecondfg(false)
            }}
        />}
        {type2fa.show && <AgainSure
            verifytype={type2fa}
            stateinfo={parameinfo}
            payOrderId={payOrderId}
            verifyCodeOrderId={verifyCodeOrderId}
            oncloseFn={() => {
                setType2fa({
                    type: type2fa.type,
                    show: false
                })
            }}
        />}
    </div>
}
