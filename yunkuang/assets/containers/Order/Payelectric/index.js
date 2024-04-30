import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { formatTime } from '../../../public/js/index'
import None from '../None/index'
import Toast from '../../../components/Toast'
import ToPayment from '../ToPayment'
import './index.scss'
export default ({ gdlist }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [paytype, setPaytype] = useState(
        {
            flage: false,
            client: ''
        }
    )
    const eleclist = [t('orderdetail.ordernum'), t('orderdetail.downtime'), t('orderdetail.depcurr'), t('orderdetail.jyfs'), t('orderdetail.cztkmoney'), t('orderdetail.cztkmoneyed'), t('orderdetail.czbz'), t('orderdetail.paynum'), t('orderdetail.payhl'), t('orderdetail.ddzt')]
    const handleTopay = useCallback((item) => {
        setPaytype(
            {
                flage: true,
                client: item.tradeNo
            }
        )
    })
    return <div className="electric">
        <div className="electric-title">
            {eleclist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        <div className="electric-list">
            {gdlist.length > 0 ? (
                gdlist.map((item, index) => {
                    return <div className="electric-list-item" key={index}>
                        <div>{item.tradeNo === null ? '--' : item.tradeNo}</div>
                        <div>{formatTime(item.createdAt, 'yyyy-MM-dd hh:mm')}</div>
                        <div>{item.orderCurrency}</div>
                        <div>{(item.orderState === 3 || item.orderState === 8) ? '--' : item.payTypeStr}</div>
                        <div style={{ color: item.orderState === 3 ? '#C25050' : '' }}>{item.orderState === 3 && '-'}{item.totalAmount}</div>
                        <div>{item.afterTotalAmount === null ? '--' : item.afterTotalAmount}</div>
                        <div>{(item.payCurrency && item.orderCurrency !== item.payCurrency) ? item.payCurrency : '--'}</div>
                        <div>{(item.payCurrency && item.orderCurrency !== item.payCurrency) ? item.payNum : '--'}</div>
                        <div>{(item.payCurrency && item.orderCurrency !== item.payCurrency) ? item.payRate : '--'}</div>
                        {item.orderState === 0 ? (
                            <div className="item-zero">
                                <span onClick={() => handleTopay(item)}>{t('orderdetail.gopay')}</span>
                                <span onClick={() => {
                                    dispatch.order.cancelElectriice({
                                        rechargeOrderId: item.rechargeOrderId
                                    }).then((res) => {
                                        if (res.code === 0) {
                                            window.location.reload()
                                        } else {
                                            Toast.info(res.msg)
                                        }
                                    })
                                }}>{t('orderdetail.cancal')}</span>
                            </div>
                        ) : (
                            <div>
                                <i className={item.orderState === 1 ? 'success' : item.orderState === 3 ? 'fail' : ''}>{item.stateDesc}</i>
                            </div>
                        )}
                    </div>
                })
            ) : (
                <None />
            )}
        </div>
        <ToPayment {...{ paytype, setPaytype }} currey='USDT' costorder={true} orderType="electricity-recharge" />
    </div>
}
