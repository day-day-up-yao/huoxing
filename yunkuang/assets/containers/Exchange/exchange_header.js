import React from 'react'
import Back from '../../public/imgs/new/goback.png'
export default ({ asset, t }) => {
    return <div className="exchange-header">
        <div className="exchange-header-con">
            <div className="left">
                <div className="left-img" onClick={() => {
                    window.history.go(-1)
                }}>
                    <img src={Back} alt=""/>
                </div>
                <div className="left-text">{t('exchange.sd')}</div>
            </div>
            <div className='center'>
                <p>
                    <span>可用额度</span>
                    <span>{(Number(asset.locke) + Number(asset.fee)).toFixed(6)}</span>
                </p>
                <p>
                    <span>可兑换额度</span>
                    <span className='center-span'>{Number(asset.fee).toFixed(6)}</span>
                </p>
            </div>
            <div className="right" onClick={() => {
                window.location.href = '/exchangerecord'
            }}>{t('exchange.sdjl')}</div>
        </div>
    </div>
}
