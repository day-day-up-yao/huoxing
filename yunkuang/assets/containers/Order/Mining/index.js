import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { formatTime, payType, numToCeil } from '../../../public/js/index'
import Toast from '../../../components/Toast/index'
import None from '../None/index'
import './index.scss'
export default ({ minlist, setMinlist, startnum }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [detail, setDetail] = useState(-1)
    const surenum = [1, 4, 5, 6, 9, 10]
    const Payelec = (currency, num, rate) => (<div className="info-item">
        <p>
            <span>{t('orderdetail.czbz')}：</span>
            <span>{currency}</span>
        </p>
        <p>
            <span>{t('orderdetail.paynum')}：</span>
            <span>{numToCeil(num / rate, 8)}</span>
        </p>
        <p>
            <span>{t('orderdetail.payhl')}：</span>
            <span>{rate}</span>
        </p>
    </div>)
    return <div className="mining">
        {minlist.length > 0 ? (
            minlist.map((item, index) => {
                let flage = false
                if (item.finalPayCurrency && item.finalPayCurrency !== item.priceCurrency) {
                    flage = true
                } else if (item.firstPayCurrency && item.firstPayCurrency !== item.priceCurrency) {
                    flage = true
                } else if (item.payCurrency && item.payCurrency !== item.priceCurrency) {
                    flage = true
                } else {
                    flage = false
                }
                return <div className="mining-con" key={index}>
                    <div className="list-top">
                        <div className="list-top-l">
                            <span>{t('orderdetail.ordernum')}：</span>
                            <span>{item.tradeNo}</span>
                        </div>
                        <div className="list-top-r">
                            <div className="list-top-r-r">
                                <span>{t('orderdetail.downtime')}：</span>
                                <span>{formatTime(item.createdAt, 'yyyy-MM-dd hh:mm')}</span>
                            </div>
                            <div className="list-top-r-r">
                                <span>{t('orderdetail.paytime')}：</span>
                                <span>{item.payTime === 0 ? t('orderdetail.Nopay') : formatTime(item.payTime, 'yyyy-MM-dd hh:mm')}</span>
                            </div>
                            {item.orderState === 0 ? (
                                <div className="waitingpay">
                                    <span onClick={() => {
                                        window.location.href = `/order/${item.tradeNo}`
                                    }}>{t('orderdetail.gopay')}</span>
                                    <span onClick={() => {
                                        dispatch.order.cancelOrder({
                                            orderId: item.id
                                        }).then((res) => {
                                            if (res.code === 0) {
                                                dispatch.order.orderCalculate({
                                                    orderState: startnum === 1 ? 0 : ''
                                                }).then((res) => {
                                                    if (res.code === 0) {
                                                        setMinlist(res.data)
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
                                </div>
                            ) : (
                                <div className="list-top-r-span">
                                    <span className={(item.orderState === 4 || item.orderState === 7) ? 'four' : (item.orderState === 0 || item.orderState === 10) ? 'zero' : item.orderState === 8 ? 'fail' : 'other'}>
                                        {item.orderStateDesc}
                                    </span>
                                    {flage && (surenum.find((itm) => itm === item.orderState) || item.orderStage === 1 || item.orderStage === 2 || item.orderStage === 3) && <span onClick={() => {
                                        if (index === detail) {
                                            setDetail(-1)
                                        } else {
                                            setDetail(index)
                                        }
                                    }}>
                                        {index === detail ? t('orderdetail.hiddendetail') : t('orderdetail.paydetail')}
                                    </span>}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="list-info">
                        <div className="info-item">
                            <p>
                                <span>{t('orderdetail.proname')}：</span>
                                <span>{item.productName}</span>
                            </p>
                            <p>
                                <span>{t('orderdetail.metchmodel')}：</span>
                                <span>{item.minerTypeName}</span>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <span>{t('orderdetail.num')}：</span>
                                <span>{item.buyNum}</span>
                            </p>
                            <p>
                                <span>{t('orderdetail.time')}：</span>
                                <span>{item.jointMiningType === 3 ? t('productdetail.hb') : item.cycle === -1 ? '算力预约金' : item.productType === 1 ? t('h5.index.permanent') : item.productType === 2 ? `${item.cycle}${t('product.makeday')}` : item.cycle}</span>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <span>{t('orderdetail.paywey')}：</span>
                                <span>{item.orderState === 3 ? '--' : payType(item.payType, t)}</span>
                            </p>
                            <p>
                                <span>{t('orderdetail.omoney')}：</span>
                                <span>{item.realAmount > 0 ? parseFloat(item.realAmount).toFixed(2) : parseFloat(item.totalMoney).toFixed(2)} {item.priceCurrency}</span>
                            </p>
                        </div>
                        {item.payCurrency && item.payCurrency !== item.priceCurrency && !item.firstPayCurrency && !item.finalPayCurrency && index === detail && Payelec(item.payCurrency, item.payNum, item.payRate)}
                        {item.firstPayCurrency && flage && index === detail && Payelec(item.firstPayCurrency, item.firstAmount, item.firstPayRate)}
                        {item.finalPayCurrency && flage && index === detail && Payelec(item.finalPayCurrency, item.finalAmount, item.finalPayRate)}
                    </div>
                </div>
            })
        ) : (
            <None/>
        )}
    </div>
}
