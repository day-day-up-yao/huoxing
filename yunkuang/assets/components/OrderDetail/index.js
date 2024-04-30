import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import CountDown from '../../components/CountDown'
import Payment from '../../components/Payment'
import { formatTime, trim, numToCeil, isMobile } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import ElectricDays from '../../components/ElectricDays'
import Cookies from 'js-cookie'

import './index.scss'

export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { tradeNo } = useParams()

    // 原node请求接口，到前端请求
    useEffect(() => {
        async function fetchData () {
            const orderDetail = await dispatch.order.orderDetail({
                tradeNo: tradeNo,
                auToken: Cookies.get('au_token')
            }).catch(function (err) {
                console.log(err)
                Toast.info(t('orderdetail.getorder'))
            })
            if (orderDetail.code === 3018) {
                Toast.info(orderDetail.msg)
                window.location.href = '/user/signin'
                return
            }
            await dispatch.product.getProductDetail({ productId: orderDetail.data.productId }).catch(function (err) {
                console.log(err)
                Toast.info(t('buyorder.orderfail'))
            })
        }
        fetchData()
    }, [])

    // 电费账单费用计算用的productDetail，其它展示字段用的orderDetail。原因2020-2-14某些字段没返回或者返回不正确
    const { orderDetail, productDetail } = useSelector((state) => ({
        orderDetail: state.order.detail,
        productDetail: state.product.detail
    }))

    // console.log(productDetail.priceCurrency)

    // console.log(productDetail.hashrateUnit)

    const basecurry = orderDetail.priceCurrency

    // 电费天数
    const [eleDays, setEleDays] = useState(90)
    useEffect(() => { // 订单列表进入订单详情：电费天数回显
        // setEleDays(orderDetail.orderFee.num)
        orderDetail.orderFee && orderDetail.orderFee.num && setEleDays(orderDetail.orderFee.num)
    }, [orderDetail])
    const setDays = (num) => {
        setEleDays(num)
    }

    /** @desc 数字货币支付与法币支付切换时，获取汇率，更改支付显示金额 */
    const [payWay, setPayWay] = useState({
        rate: 1,
        currency: productDetail.priceCurrency, // USDT,BTC,BDDA,人民币使用CNY
        payType: 2 // 1: 币币支付 2: 微信支付 3:支付宝
    })
    const payWayHandle = useCallback(async (params) => {
        // 人民币支付设置汇率为1
        // if (params.currency === 'USDT' || params.currency === 'FIL') {
        //     setPayWay({
        //         ...params,
        //         rate: 1
        //     })
        //     return
        // }
        const prodetail = await dispatch.order.orderDetail({
            tradeNo: tradeNo,
            auToken: Cookies.get('au_token')
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('orderdetail.getorder'))
        })
        // console.log(basecurry)
        // 数字货币支付先请求人民币对应其的汇率
        const rate = await dispatch.product.hashRatesinfo({
            base: prodetail.data.priceCurrency,
            quote: params.currency
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
        // const rate = await dispatch.order.cnyCoinRate({ currency: params.currency }).catch(function (err) {
        //     console.log(err)
        //     Toast.info(t('public.fail'))
        // })
        if (rate.code === 0) {
            setPayWay({
                ...params,
                rate: rate.data
            })
        } else {
            Toast.info(rate.msg)
        }
    }, [basecurry])

    // 电费缴纳方式 1预先支付，2收益支付
    const [electricPay, setElectricPay] = useState(1)
    useEffect(() => {
        if (electricPay === 2 || orderDetail.electricPayType === 2) {
            setEleDays(-1)
        }
    }, [electricPay, orderDetail])
    useEffect(() => {
        if (orderDetail.electricPayType) { // 订单列表进入订单详情：电费缴纳方式回显
            setElectricPay(orderDetail.electricPayType)
        }
    }, [orderDetail])

    /** @desc 支付前先更改订单，选择了电费缴纳方式与天数 */
    // 点击支付按钮时（buyNowHandle）隐藏按钮，以免覆盖短信输入弹出层-----点击（取消或确定）时显示按钮
    // const buyNowHandle = useCallback(() => {
    //     // orderState====0:待支付，1:支付成功,2:支付失败,3:取消,4:算力生效中 5:结束 6:暂停
    //     if (orderDetail.orderState !== 0) return

    //     document.getElementById('createOrderBtn').style.display = 'none'
    //     dispatch.order.orderUpdate({
    //         buyElectricDays: eleDays,
    //         electricPayType: electricPay,
    //         orderId: orderDetail.id
    //     }).then(function (res) {
    //         if (res.code !== 0) {
    //             Toast.info(res.msg)
    //         } else {
    //             /** @desc 订单更新后，自动点击事件，进行支付 */
    //             if (document.all) { // ie浏览器
    //                 document.getElementsByClassName('pay-rightnow')[0].click()
    //             } else { // 其它浏览器
    //                 const event = document.createEvent('MouseEvents')
    //                 event.initEvent('click', true, true)
    //                 document.getElementsByClassName('pay-rightnow')[0].dispatchEvent(event)
    //             }
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info(t('productdetail.ddfail'))
    //     })
    // }, [orderDetail, electricPay, eleDays])

    // 验证优惠码
    const [reduceMoney, setReduceMoney] = useState(null)
    const [reduceType, setReduceType] = useState(null)
    const [promotionCode, setPromotionCode] = useState(null)
    const promotionCodeInput = useRef()
    const promotionCodeVerify = useCallback(() => {
        const val = trim(promotionCodeInput.current.value)
        if (val === '') {
            Toast.info(t('buyorder.yhui'))
            setPromotionCode(null)
            setReduceType(null)
            setReduceMoney(null)
            return
        }
        dispatch.order.promotionCode({
            discountCode: val,
            productId: orderDetail.productId
        }).then(function (res) {
            if (res.code !== 0) {
                setReduceMoney(null)
                Toast.info(res.msg)
            } else {
                setPromotionCode(val)
                setReduceType(res.data.discountType)
                setReduceMoney(res.data.discountAmount)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('buyorder.yhfail'))
        })
    }, [reduceMoney, reduceType, promotionCode, orderDetail])

    // 展示计算
    const orderLeftTime = orderDetail.createdAt + 120 * 60 * 1000
    let hashrateMoney = numToCeil(productDetail.price * orderDetail.buyNum, 2)
    // 新加接口返回优惠金额
    if (orderDetail.discountAmount !== 0) {
        hashrateMoney = hashrateMoney - orderDetail.discountAmount
        // hashrateMoney = hashrateMoney + 1000
    }
    if (reduceType === 0) {
        hashrateMoney = numToCeil(productDetail.price * orderDetail.buyNum, 2) - reduceMoney - orderDetail.discountAmount
    } else if (reduceType === 1) {
        hashrateMoney = numToCeil(productDetail.price * orderDetail.buyNum, 2) * reduceMoney - orderDetail.discountAmount
    } else if (reduceType === 2) {
        hashrateMoney = numToCeil(productDetail.price * orderDetail.buyNum, 2) - reduceMoney * orderDetail.buyNum - orderDetail.discountAmount
    }
    const electricFee = eleDays === -1 ? 0 : numToCeil(orderDetail.buyNum * eleDays * productDetail.electricFee * productDetail.minerTypeInfo.kw * 24, 2)
    const electricDaysMemo = useMemo(() => <ElectricDays electricDayMin={productDetail.electricDayMin} electricDayMax={productDetail.electricDayMax} setDays={setDays} curDays={eleDays} />, [productDetail, setDays, eleDays])

    // console.log(productDetail)
    return <div className="order-detail">
        {!isMobile() ? '' : <Header title={t('buyorder.orderdetail')}/>}
        <div className="order-con">
            <div className="order-con-top">
                <h3>{t('buyorder.ordermsg')}</h3>
                <div className="count-down-wrapper">{
                    (Date.parse(new Date()) < orderLeftTime && orderDetail.orderState === 0) ? <div className="order-count-down">{t('buyorder.sytime')}<CountDown level="hours" eleIdName={`order${orderDetail.id}`} timestamp={orderLeftTime} /></div> : t('buyorder.qxordering')
                }</div>
            </div>
            <div className="order-con-message">
                <ul>
                    <li>
                        <p>{t('buyorder.ordetime')}</p>
                        <p>{orderDetail.createdAt ? formatTime(orderDetail.createdAt, 'yyyy-MM-dd hh:mm:ss') : ''}</p>
                    </li>
                    <li>
                        <p>{t('orderdetail.proname')}</p>
                        <p>{orderDetail.productName}</p>
                    </li>
                    <li>
                        <p>{t('orderdetail.ordernum')}</p>
                        <p>{orderDetail.tradeNo}</p>
                    </li>
                    <li>
                        <p>{t('orderdetail.time')}</p>
                        <p>
                            {orderDetail.productType === 1 && t('header.nav.permanent')}
                            {orderDetail.productType === 2 && `${orderDetail.cycle}${t('product.makeday')}`}
                        </p>
                    </li>
                    <li>
                        <p>{t('buyorder.zlnum')}</p>
                        <p>{orderDetail.buyNum}</p>
                    </li>
                    <li>
                        <p>{t('buyorder.sl')}</p>
                        <p>{orderDetail.hashrateNum} {productDetail.hashrateUnit}</p>
                    </li>
                    <li>
                        <p>{t('orderdetail.metchmodel')}</p>
                        <p>{orderDetail.minerTypeName}</p>
                    </li>
                    <li>
                        <p>{t('productdetail.gh')}</p>
                        <p>{productDetail.minerTypeInfo.kw}</p>
                    </li>
                    <li>
                        <p>{t('productdetail.kc')}</p>
                        <p>{orderDetail.minePool}</p>
                    </li>
                    {productDetail.electricDayMin && <li>
                        <p>{t('buyorder.minfay')}</p>
                        <p>{productDetail.electricDayMin}</p>
                    </li>}
                    {productDetail.electricDayMax && <li>
                        <p>{t('buyorder.macday')}</p>
                        <p>{productDetail.electricDayMax}</p>
                    </li>}
                </ul>
            </div>
            <div className="order-con-pay">
                <h3>{t('h5.index.electric')}</h3>
                {productDetail.electricPayType === 0 && productDetail.jointMiningType !== 7 && <div className="select-electric-way">
                    <div className="electric-way-btn">
                        <button className={electricPay === 1 ? 'active' : ''} onClick={() => {
                            setElectricPay(1)
                            orderDetail.orderFee && orderDetail.orderFee.num && setEleDays(orderDetail.orderFee.num)
                        }}>{t('hasgrate.yjdf')}</button>
                        <button className={electricPay === 2 ? 'active' : ''} onClick={() => setElectricPay(2)}>{t('outlist.sydk')}</button>
                    </div>
                    <div className="electric-way-con" style={{ display: electricPay === 1 ? 'block' : 'none' }}>
                        <div className="order-con-pays">
                            <div className="order-con-pay-title">{t('buyorder.jfday')}</div>
                            <div className="order-con-pay-day">
                                {electricDaysMemo}
                            </div>
                        </div>
                    </div>
                    <div className="electric-way-con" style={{ display: electricPay === 1 ? 'block' : 'none' }}>
                        <p className="earnings-pay-intro">
                        *{t('buyorder.sm')}
                        </p>
                    </div>
                    <div className="electric-way-con" style={{ display: electricPay === 2 ? 'block' : 'none' }}>
                        <p className="earnings-pay-intro">
                        *{t('buyorder.sysm')}
                        </p>
                    </div>
                </div>}
                {productDetail.electricPayType === 1 && <div className="select-electric-way">
                    <div className="electric-way-con">
                        <div className="order-con-pays">
                            <div className="order-con-pay-title">{t('buyorder.jfday')}</div>
                            <div className="order-con-pay-day">
                                {electricDaysMemo}
                            </div>
                        </div>
                    </div>
                </div>}
                {/* {productDetail.electricPayType === 2 && <div className="select-electric-way">
                    <div className="electric-way-con">
                        <p className="earnings-pay-intro">
                            {t('buyorder.titileone')}<br />
                            {t('buyorder.titletwo')}
                        </p>
                    </div>
                </div>} */}
            </div>
            <div className="order-con-pay" style={{ display: (productDetail.jointMiningType === 1 || productDetail.jointMiningType === 2) ? 'none' : 'block' }}>
                <h3>{t('buyorder.yhcode')}</h3>
                <div className="promotion-code-wrapper">
                    <input onChange={(event) => {
                        if (event.target.value !== '') return
                        setPromotionCode(null)
                        setReduceType(null)
                        setReduceMoney(null)
                    }} className="promotion-code" ref={promotionCodeInput} type="text" placeholder={t('buyorder.yhui')} />
                    <a onClick={promotionCodeVerify}>{t('buyorder.yz')}</a>
                </div>
            </div>
            <div className="order-con-bill">
                <h3>{t('buyorder.zd')}</h3>
                <div className="order-con-bill">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    矿机(
                                    {orderDetail.productType === 1 && t('buyorder.buy')}
                                    {orderDetail.productType === 2 && t('buyorder.zy')}
                                    )
                                </th>
                                <td>
                                    {numToCeil(numToCeil(productDetail.priceClean * orderDetail.buyNum, 2), 2)} {orderDetail.priceCurrency}
                                    {/* {`(${orderDetail.buyNum}台)`} */}
                                </td>
                            </tr>
                            {productDetail.taxPercent === 0 ? '' : (
                                <tr>
                                    <th>
                                        {t('buyorder.sf')}
                                    </th>
                                    <td>
                                        {numToCeil(numToCeil(productDetail.taxPercent * orderDetail.buyNum * productDetail.priceClean, 2), 2)} {orderDetail.priceCurrency}
                                    </td>
                                </tr>
                            )}
                            {productDetail.transferFee === 0 ? '' : (
                                <tr>
                                    <th>
                                        {t('buyorder.yf')}
                                    </th>
                                    <td>
                                        {numToCeil(numToCeil(productDetail.transferFee * orderDetail.buyNum, 2), 2)} {orderDetail.priceCurrency}
                                    </td>
                                </tr>
                            )}
                            {(orderDetail.discountAmount !== 0 && !reduceMoney) ? (
                                <tr>
                                    <th>{t('buyorder.kjyh')}</th>
                                    <td>{numToCeil(orderDetail.discountAmount, 2)} {orderDetail.priceCurrency}</td>
                                </tr>
                            ) : ''}
                            {reduceMoney && <tr>
                                <th>{t('buyorder.kjyh')}</th>
                                <td>{reduceMoney && (reduceType === 0 ? `-${numToCeil((Number(reduceMoney) + Number(orderDetail.discountAmount)), 2)} ${orderDetail.priceCurrency}` : reduceType === 1 ? `${reduceMoney}折` : `-${numToCeil((productDetail.price * orderDetail.buyNum - hashrateMoney) / payWay.rate, 2)} ${orderDetail.priceCurrency}`)}</td>
                            </tr>}
                            <tr>
                                <th>{t('h5.index.electric')}</th>
                                <td>{numToCeil(electricFee / payWay.rate, 2)} {orderDetail.priceCurrency}
                                    {/* {`(${orderDetail.buyNum}台)`} */}
                                </td>
                            </tr>
                            <tr className="order-con-bill-all-con">
                                <th>{t('buyorder.hj')}</th>
                                <td>{numToCeil((hashrateMoney + electricFee) * payWay.rate, 2)} {payWay.currency ? payWay.currency : productDetail.priceCurrency}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="order-con-select" style={{ display: orderDetail.orderState === 0 ? 'block' : 'none' }}>
                <h3>{t('buyorder.fkfs')}</h3>
                <div className="order-con-select-top">
                    {/* <div className="order-con-select-top-t">
                        <span>账户余额</span>
                        <span>50000 {orderDetail.priceCurrency}</span>
                    </div> */}
                    <div className="paynow-wrapper">
                        {/* <button id="createOrderBtn" className="create-order-btn" onClick={buyNowHandle} /> */}
                        <Payment
                            orderId={orderDetail.id}
                            eleDays={eleDays}
                            electricPay={electricPay}
                            allpaymoney={hashrateMoney + electricFee}
                            promotionCode={promotionCode}
                            clientTradeNo={tradeNo}
                            clientOrderId={orderDetail.id}
                            orderType="hashrate"
                            payWayHandle={payWayHandle}
                            currtype={orderDetail.priceCurrency}
                            orderpaylist={orderDetail.supportPayCurrency}
                            paySuccess={() => { window.location.href = '/order' }} />
                    </div>
                </div>
            </div>
            <div className="order-con-pay">
                <h3>{t('buyorder.fxts')}</h3>
                <div className="risk-warning">
                    <p>{t('buyorder.fxone')}</p>
                    <p>{t('buyorder.fxtwo')}</p>
                    <p>{t('buyorder.fxthree')}</p>
                </div>
            </div>
        </div>
    </div>
}
