import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { numToCeil } from '../../public/js/index'
import Payment from '../../components/Payment/index'
import Toast from '../../components/Toast'
export default ({ orderinfo, buyday, tradeNo }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [payWay, setPayWay] = useState({
        rate: 1,
        currency: orderinfo.priceCurrency, // USDT,BTC,BDDA,人民币使用CNY
        payType: 2 // 1: 币币支付 2: 微信支付 3:支付宝
    })
    const payWayHandle = useCallback(async (params) => {
        let currency = params.currency
        const rate = await dispatch.product.hashRatesinfo({
            base: orderinfo.priceCurrency,
            quote: currency
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
        // 数字货币支付先请求人民币对应其的汇率
        // const rate = await dispatch.order.cnyCoinRate({ currency: currency }).catch(function (err) {
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
    }, [])
    // const electricFee = eleDays === -1 ? 0 : numToCeil(orderDetail.buyNum * eleDays * productDetail.electricFee * productDetail.minerTypeInfo.kw * 24, 2)
    return <div className="go-pay">
        <div className="pay-info">
            <div className="left">{t('buyorder.zdmx')}</div>
            <div className="right">
                <p>
                    <span>{t('buyorder.kjzj')}</span>
                    <span>{numToCeil(numToCeil(buyday.priceClean * orderinfo.buyNum, 2), 2)} {orderinfo.priceCurrency}</span>
                </p>
                <p>
                    <span>{t('buyorder.sf')}</span>
                    <span>{numToCeil(numToCeil(buyday.taxPercent * orderinfo.buyNum * buyday.priceClean, 2), 2)} {orderinfo.priceCurrency}</span>
                </p>
                <p>
                    <span>{t('h5.index.electric')}</span>
                    <span>
                        {orderinfo.orderFee === null ? 0 : numToCeil(orderinfo.orderFee.totalMoney, 2)} {orderinfo.priceCurrency}
                    </span>
                </p>
                <p>
                    <span>{t('buyorder.yf')}</span>
                    <span>
                        {numToCeil(numToCeil(buyday.transferFee * orderinfo.buyNum, 2), 2)} {orderinfo.priceCurrency}
                    </span>
                </p>
                <p>
                    <span>{t('buyorder.kjyh')}</span>
                    <span className="nosame">{numToCeil(numToCeil(orderinfo.discountCodeAmount, 2), 2)} {orderinfo.priceCurrency}</span>
                </p>
                <div className="all-money">
                    <span>{t('buyorder.hj')}</span>
                    <span>{numToCeil(numToCeil(orderinfo.totalMoney, 2) * payWay.rate, 8)} {payWay.currency}</span>
                </div>
            </div>
        </div>
        <div className="pay-types">
            <div className="types-left">{t('buyorder.fkfs')}</div>
            <div className="type-right">
                <Payment
                    orderId={orderinfo.id}
                    eleDays={orderinfo.orderFee === null ? 0 : orderinfo.orderFee.num}
                    electricPay={orderinfo.electricPayType}
                    allpaymoney={orderinfo.totalMoney}
                    clientTradeNo={tradeNo}
                    clientOrderId={orderinfo.id}
                    orderType="hashrate"
                    payWayHandle={payWayHandle}
                    paySuccess={() => { window.location.href = '/order' }}
                    currtype={orderinfo.priceCurrency}
                    orderpaylist={buyday.supportPayCurrency}
                    costcurrey={orderinfo.priceCurrency}
                />
            </div>
        </div>
    </div>
}
