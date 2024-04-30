import React, { useState } from 'react'
import { formatTime } from '../../../public/js/index'
import surepic from '../../../public/imgs/new/surepic.png'
import btcicons from '../../../public/imgs/newpage/btcicons.png'
import ethicons from '../../../public/imgs/newpage/ethicons.png'
import filicons from '../../../public/imgs/newpage/filicons.png'
import gtimg from '../../../public/imgs/newpage/icongt.png'
export default ({ detail, t }) => {
    // console.log(detail)
    const [tip, setTip] = useState(false)
    return <div className="productinfo">
        <div className="info-top">
            <div className="top-left">
                {detail.incomeCurrency === 'BTC' && <img src={btcicons} alt=""/>}
                {detail.incomeCurrency === 'ETH' && <img src={ethicons} alt=""/>}
                {detail.incomeCurrency === 'FIL' && <img src={filicons} alt=""/>}
                <div className="right-text">
                    <p>{detail.name}</p>
                    <p className="text-item">
                        {t('newpage.newproduct.fkyj') + formatTime(detail.maybeEffectiveTimeStr, 'yyyy-MM-dd') + t('newpage.newproduct.qihuo')}
                        <img src={gtimg} alt="" onMouseEnter = {() => { setTip(true) }} onMouseLeave={() => { setTip(false) }}/>
                        {tip && <span>{t('productdetail.timesm')}</span>}
                    </p>
                </div>
            </div>
            <div className="top-right">
                <img src={surepic} alt=""/>
            </div>
        </div>
        <div className="info-bottom">
            <div className="info-bottom-title">{t('productdetail.minedetail')}</div>
            <div className="info-bottom-list">
                <div className="bottom-item">
                    <p>{t('orderdetail.metchmodel')}</p>
                    <p>{detail.minerTypeInfo.typeName}</p>
                </div>
                <div className="bottom-item">
                    <p>{t('productdetail.dwsl')}</p>
                    <p>{detail.hashrate} {detail.hashrateUnit}</p>
                </div>
                <div className="bottom-item">
                    <p>{t('productdetail.gh')}</p>
                    <p>{detail.minerTypeInfo.kw} kW</p>
                </div>
                <div className="bottom-item">
                    <p>USDT/kWh</p>
                    <p>{detail.electricFee}</p>
                </div>
                <div className="bottom-item">
                    <p>{t('newpage.newproduct.makezq')}</p>
                    {detail.cycle ? (
                        <p>{detail.cycle === 0 ? t('header.nav.permanent') : detail.cycle + ' ' + t('public.day')}</p>
                    ) : (
                        <p>{t('header.nav.permanent')}</p>
                    )}
                </div>
                <div className="bottom-item">
                    <p>{t('newpage.newproduct.glf')}</p>
                    <p>{detail.operationFee * 100}%</p>
                </div>
            </div>
            {detail.jointMiningType === 3 && <div className="info-bottom-list">
                <div className="bottom-item">
                    <p>{t('productdetail.wklx')}</p>
                    <p>{detail.jointMiningTypeName}</p>
                </div>
                <div className="bottom-item">
                    <p>{t('productdetail.hbqfr')}</p>
                    <p>100%</p>
                </div>
                <div className="bottom-item">
                    <p>{t('productdetail.hbhfr')}</p>
                    <p>{detail.userPercent * 100}%</p>
                </div>
            </div>}
        </div>
    </div>
}
