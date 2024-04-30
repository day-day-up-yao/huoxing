import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import './index.scss'

import { formatTime } from '../../../public/js/index'
import ToPayment from '../ToPayment'
import None from '../None/index'
import Toast from '../../../components/Toast'

export default ({ costlist }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [hint, setHint] = useState(false)
    const [trade, setTrade] = useState('')
    const [collectcurry, setCollectcurry] = useState()
    const eleclist = [t('orderdetail.ordernum'), t('orderdetail.costname'), t('property.time'), t('hasgrate.bz'), t('exchange.num'), t('orderdetail.ddzt')]

    const [paytype, setPaytype] = useState(
        {
            flage: false,
            client: ''
        }
    )

    // const handleTopay = useCallback((item) => {
    //     changePay(item.tradeNo, 1)
    //     setPaytype(
    //         {
    //             flage: true,
    //             client: item.tradeNo
    //         }
    //     )
    // })

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
    return <div className="cost-order">
        <div className="cost-order-title">
            {eleclist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        <div className="cost-order-list">
            {costlist.length > 0 ? (
                costlist.map((item, index) => {
                    return <div className="cost-order-list-item" key={index}>
                        <div>{item.tradeNo}</div>
                        <div>{item.name}</div>
                        <div>{formatTime(item.createdAt, 'yyyy-MM-dd hh:mm')}</div>
                        <div>{item.currency}</div>
                        <div>{item.amount}</div>
                        <div>
                            {item.status === 0 && (item.payAllow === 3 ? (
                                <p>
                                    <span onClick={() => {
                                        setHint(true)
                                        setTrade(item.tradeNo)
                                    }}>{t('outlist.sydk')}</span>
                                    <span className="to-pay-btn" onClick={() => {
                                        changePay(item.tradeNo, 1)
                                        setCollectcurry(item.currency)
                                    }}>{t('orderdetail.gopay')}</span>
                                </p>
                            ) : (
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
                            ))}
                            {item.status === 1 && t('orderdetail.paysucc')}
                            {item.status === 2 && t('orderdetail.getdking')}
                        </div>
                    </div>
                })
            ) : (
                <None />
            )}
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
        {collectcurry && <ToPayment {...{ paytype, setPaytype }} orderType="collect-order" costorder={true} currey={collectcurry} />}
    </div>
}
