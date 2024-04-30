import React from 'react'
import { useTranslation } from 'react-i18next'
import surepic from '../../../public/imgs/new/surepic.png'
import { formatTime } from '../../../public/js/index'
import CountDown from '../../../components/CountDown'
import btcicons from '../../../public/imgs/newpage/btcicons.png'
import ethicons from '../../../public/imgs/newpage/ethicons.png'
import filicons from '../../../public/imgs/newpage/filicons.png'
import './index.scss'
export default ({ orderinfo, buyday }) => {
    // console.log(orderinfo)
    const { t } = useTranslation()
    const infolist = [
        {
            title: t('orderdetail.metchmodel'),
            info: orderinfo.minerTypeName
        },
        {
            title: t('buyorder.zlnum'),
            info: orderinfo.buyNum
        },
        {
            title: t('buyorder.sl'),
            info: orderinfo.incomeCurrency === 'ETH' ? orderinfo.hashrateNum * 1000000 + ' ' + buyday.hashrateUnit : orderinfo.hashrateNum + ' ' + buyday.hashrateUnit
        },
        {
            title: t('productdetail.yjkwsj'),
            info: buyday.maybeEffectiveTimeStr
        }
    ]
    // 预缴电费显示
    const electinfo = [
        {
            title: t('productdetail.gh'),
            info: buyday.minerTypeInfo.kw + ' KW'
        },
        {
            title: 'USDT/kWh',
            info: orderinfo.electricPrice ? orderinfo.electricPrice : 0
        },
        {
            title: t('productdetail.dfms'),
            info: orderinfo.electricPayType === 1 ? t('orderdetail.ycdf') : t('hasgrate.syzf')
        },
        {
            title: t('productdetail.yjts'),
            info: orderinfo.orderFee ? orderinfo.orderFee.num + ' ' + t('public.day') : 0
        }
    ]
    // 极速回本显示
    const speedlist = [
        {
            title: t('productdetail.wklx'),
            info: buyday.jointMiningTypeName
        },
        {
            title: t('productdetail.hbqfr'),
            info: '100%'
        },
        {
            title: t('productdetail.hbhfr'),
            info: buyday.userPercent * 100 + '%'
        }
    ]
    // 展示计算
    const orderLeftTime = orderinfo.createdAt + orderinfo.payRemainTime * 1000
    return <div className="productinfo">
        <div className="info-top">
            <div className="top-left">
                {orderinfo.incomeCurrency === 'BTC' && <img src={btcicons} alt=""/>}
                {orderinfo.incomeCurrency === 'ETH' && <img src={ethicons} alt=""/>}
                {orderinfo.incomeCurrency === 'FIL' && <img src={filicons} alt=""/>}
                <div className="productname">
                    <div className="name">{orderinfo.productName}</div>
                    <div className="name-info">
                        <p>
                            <span>{t('orderdetail.ordernum')}</span>
                            <span>{orderinfo.tradeNo}</span>
                        </p>
                        <p>
                            <span>{t('buyorder.ordetime')}</span>
                            <span>{formatTime(orderinfo.createdAt, 'yyyy-MM-dd hh:mm')}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="top-right">
                <img src={surepic} alt=""/>
            </div>
            <div className="info-times">
                {(Date.parse(new Date()) < orderLeftTime && orderinfo.orderState === 0) ? <div className="order-count-down">{t('buyorder.sytime')}<CountDown level="hours" eleIdName={`order${orderinfo.id}`} timestamp={orderLeftTime} /></div> : t('buyorder.qxordering')}
            </div>
        </div>
        <div className="info-bottom">
            <div>{t('buyorder.orderdetail')}</div>
            <div className="info-bottom-list">
                {infolist.map((item, index) => {
                    return <div className="bottom-item" key={index}>
                        <p>{item.title}</p>
                        <p>{item.info}</p>
                    </div>
                })}
            </div>
            {orderinfo.electricPayType === 1 && <div className="info-bottom-list">
                {electinfo.map((item, index) => {
                    return <div className="bottom-item" key={index}>
                        <p>{item.title}</p>
                        <p>{item.info}</p>
                    </div>
                })}
            </div>}
            {buyday.jointMiningType === 3 && <div className="info-bottom-list">
                {speedlist.map((item, index) => {
                    return <div className="bottom-item" key={index}>
                        <p>{item.title}</p>
                        <p>{item.info}</p>
                    </div>
                })}
            </div>}
        </div>
    </div>
}
