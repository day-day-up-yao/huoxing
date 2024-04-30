import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { isPc, formatTime, payState, payType } from '../../public/js/index'
import Order from '../../components/Order'

import './index.scss'
export default () => {
    const { t } = useTranslation()
    // 算力订单详情
    const [detailShow, setDetailShow] = useState(false)
    const [detail, setDetail] = useState({
        productName: '',
        tradeNo: '',
        cycle: '',
        hashrateNum: '',
        minerTypeName: '',
        totalMoney: '',
        createdAt: '',
        payTime: '',
        orderState: '',
        payType: ''
    })
    const detailShowDo = useCallback((detail) => {
        if (isPc()) return
        setDetail(detail)
        setDetailShow(true)
    }, [])

    // 电费订单详情
    const [eleShow, setEleShow] = useState(false)
    const [eleDetail, setEleDetail] = useState({
        id: '',
        productName: '',
        cycle: '',
        createdAt: '',
        num: ''
    })
    const eleDetailShowDo = useCallback((detail) => {
        if (isPc()) return
        setEleDetail(detail)
        setEleShow(true)
    }, [])
    return <div className="order-m">
        <Order detailShowDo={detailShowDo} eleDetailShowDo={eleDetailShowDo}/>
        <div className="popup-detail" style={{ display: detailShow ? 'flex' : 'none' }}>
            <div className="content">
                <table>
                    <tbody>
                        <tr><th>{t('orderdetail.proname')}</th><td>{detail.productName}</td></tr>
                        <tr><th>{t('orderdetail.ordernum')}</th><td>{detail.tradeNo}</td></tr>
                        <tr><th>{t('orderdetail.time')}</th><td>{detail.cycle === 0 ? t('header.nav.permanent') : `${detail.cycle}${t('product.makeday')}`}</td></tr>
                        <tr><th>{t('orderdetail.num')}</th><td>{detail.hashrateNum}</td></tr>
                        <tr><th>{t('orderdetail.metchmodel')}</th><td>{detail.minerTypeName}</td></tr>
                        <tr><th>{t('orderdetail.omoney')}</th><td>{parseFloat(detail.totalMoney).toFixed(2)}</td></tr>
                        <tr><th>{t('orderdetail.downtime')}</th><td>{formatTime(detail.createdAt, 'yyyy-MM-dd hh:mm')}</td></tr>
                        <tr><th>{t('orderdetail.paytime')}</th><td>{detail.payTime === 0 ? t('orderdetail.Nopay') : formatTime(detail.payTime, 'yyyy-MM-dd hh:mm')}</td></tr>
                        <tr><th>{t('orderdetail.zt')}</th><td>{payState(detail.orderState, t)}</td></tr>
                        <tr><th>{t('orderdetail.paywey')}</th><td>{detail.orderState === 3 ? '-' : payType(detail.payType, t)}</td></tr>
                    </tbody>
                </table>
                <button onClick={() => setDetailShow(false)}>{t('header.sign.sures')}</button>
            </div>
        </div>
        <div className="popup-detail" style={{ display: eleShow ? 'flex' : 'none' }}>
            <div className="content">
                <table>
                    <tbody>
                        <tr><th>{t('orderdetail.proname')}</th><td>{eleDetail.productName}</td></tr>
                        <tr><th>{t('orderdetail.ordernum')}</th><td>{eleDetail.id}</td></tr>
                        <tr><th>{t('orderdetail.time')}</th><td>{eleDetail.cycle === 0 ? t('header.nav.permanent') : `${eleDetail.cycle}${t('product.makeday')}`}</td></tr>
                        <tr><th>{t('orderdetail.downtime')}</th><td>{formatTime(eleDetail.createdAt, 'yyyy-MM-dd hh:mm')}</td></tr>
                        <tr><th>{t('orderdetail.days')}</th><td>{eleDetail.num}</td></tr>
                    </tbody>
                </table>
                <button onClick={() => setEleShow(false)}>{t('header.sign.sures')}</button>
            </div>
        </div>
    </div>
}
