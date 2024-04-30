import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import Cookie from 'js-cookie'
import Headers from '../../components/Public/Header'
import Toast from '../../components/Toast/index'
import { formatTime } from '../../public/js/index'
import None from '../../components/Public/None'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const head = {
        title: t('exchange.sdjl'),
        second: false,
        thrid: false
    }
    const titlelist = [t('exchange.jyd'), t('exchange.time'), t('exchange.leix'), t('exchange.cjj'), t('exchange.num'), t('exchange.cjiaoe'), t('exchange.sxf')]
    const [history, setHistory] = useState([])
    const [symbols, setSymbol] = useState([])
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (!res.code) {
                setSymbol(res.token)
            }
        })
        dispatch.order.tradeOrders({
            account_id: Cookie.get('user_id'),
            from_trade_id: 0,
            limit: 20,
            s: 'getOrders'
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setHistory(res)
            }
        })
    }, [])
    return <div className="exchangelist">
        <Headers {...{ t, head }}/>
        <div className="changelist">
            <div className='list-top'>
                {titlelist.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
            <div className='list-con'>
                {history.length > 0 ? (
                    history.map((item, index) => {
                        return <div className="con-item" key={index}>
                            <div className="item-first">
                                <img src={symbols.length > 0 ? symbols.filter((itm) => { return itm.tokenId === item.baseTokenId })[0].iconUrl : ''} alt=""/>
                                <i>{item.baseTokenName}/{item.quoteTokenName}</i>
                            </div>
                            <div>{formatTime(Number(item.time), 'yyyy-MM-dd hh:mm')}</div>
                            <div>{t('exchange.shijia')}</div>
                            <div>{(Number(item.price)).toFixed(6)}</div>
                            <div>{(Number(item.quantity)).toFixed(2)}</div>
                            <div>{(Number(item.price * item.quantity)).toFixed(2)}</div>
                            <div>{item.fee}</div>
                        </div>
                    })
                ) : (
                    <None/>
                )}
            </div>
        </div>
    </div>
}
