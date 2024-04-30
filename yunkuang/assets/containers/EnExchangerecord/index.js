import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import { formatTime } from '../../public/js/index'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [history, setHistory] = useState([])
    useEffect(() => {
        dispatch.public.getUseinfo({}).then((res) => {
            dispatch.order.tradeOrders({
                account_id: res.data.userId,
                from_trade_id: 0,
                limit: 20,
                symbol_id: 'BTCUSDT'
            }).then((res) => {
                if (res.code !== 0) {
                    Toast.info(res.msg)
                } else {
                    setHistory(res.data)
                }
            })
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.getuser'))
        })
    }, [])
    return <div>
        <div className="exrecord">
            <h2>{t('exchange.sdjl')}</h2>
            <div className="exrecord-con">
                <ul>
                    <li>{t('exchange.time')}</li>
                    <li>{t('exchange.leix')}</li>
                    <li>{t('exchange.jyd')}</li>
                    <li>{t('exchange.cjj')}</li>
                    <li>{t('exchange.num')}</li>
                    <li>{t('exchange.cjiaoe')}</li>
                    <li>{t('exchange.sxf')}</li>
                </ul>
                {history.map((item, index) => {
                    return <ol key={index}>
                        <li>{formatTime(Number(item.time), 'yyyy-MM-dd hh:mm')}</li>
                        <li>{t('exchange.shijia')}</li>
                        <li>{item.baseTokenName}/{item.quoteTokenName}</li>
                        <li>{(Number(item.price)).toFixed(6)}</li>
                        <li>{(Number(item.quantity)).toFixed(2)}</li>
                        <li>{(Number(item.price * item.quantity)).toFixed(2)}</li>
                        <li>{item.fee}</li>
                    </ol>
                })}
            </div>
        </div>
    </div>
}
