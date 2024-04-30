import React from 'react'
import { useTranslation } from 'react-i18next'

import noticeimg from '../../public/imgs/h5img/other/notc_icon.png'
import { CurrenyBg } from '../../public/js/curryicon'
import CountDown from '../../components/CountDown'
import counticon from '../../public/imgs/h5img/other/count_icon.png'
import poingright from '../../public/imgs/h5img/other/pointright.png'
import Line from '../../components-m/Line'

export default (props) => {
    const { detail } = props
    const curTime = Date.parse(new Date())
    const { t } = useTranslation()
    const iconbg = CurrenyBg.find((itm) => itm.name === detail.incomeCurrency)?.bg
    const messagelist = [
        { title: '使用周期', type: 0, centerinfo: <>{detail.productType === 1 ? t('h5.index.permanent') : detail.productType === 2 ? `${detail.cycle}${t('product.makeday')}` : detail.cycle}</>, bottom: '', notic: false, popuptext: '' },
        {
            title: '电费',
            type: 1,
            centerinfo: <>
                {detail.minerTypeInfo.electricFee}
                <span>USDT/kWh</span>
            </>,
            bottom: '',
            notic: true,
            popuptext: ''
        },
        {
            title: '预计日产出',
            type: 2,
            centerinfo: <>
               {detail.expectDailyIncome}
                <span>{detail.incomeCurrency}</span>
            </>,
            bottom: <>
                ≈0.3
                <span>元/度</span>
            </>,
            notic: true,
            popuptext: ''
        },
        {
            title: '算力',
            type: 3,
            centerinfo: <>
                {detail.hashrateFormat}
                <span>{detail.hashrateUnit}</span>
            </>,
            bottom: '',
            notic: true,
            popuptext: ''
        },
        {
            title: '功耗',
            type: 4,
            centerinfo: <>
                {detail.minerTypeInfo.kw}
                <span>kW</span>
            </>,
            bottom: '',
            notic: true,
            popuptext: ''
        },
        {
            title: '管理费',
            type: 5,
            centerinfo: <>
                {detail.operationFee * 100}%
            </>,
            bottom: '',
            notic: true,
            popuptext: ''
        },
        {
            title: '挖矿类型',
            type: 6,
            centerinfo: <>{detail.jointMiningTypeName}</>,
            bottom: '',
            notic: true,
            popuptext: ''
        },
        {
            title: '回本前分润',
            type: 7,
            centerinfo: <>100%</>,
            bottom: '',
            notic: true,
            popuptext: ''
        },
        {
            title: '回本前分润',
            type: 8,
            centerinfo: <>{detail.userPercent * 100}%</>,
            bottom: '',
            notic: true,
            popuptext: ''
        }
    ]
    return <>
        <div className="productdetail-top">
            <div className="product-img">
                <img src={detail.minerTypeInfo.pic} alt={detail.name}/>
                <div className="product-time">
                    <div className="product-time-left">
                        <div className="left-type">
                            <div className="left-type-img">
                                <img src={iconbg} alt=""/>
                                <p>{detail.incomeCurrency}</p>
                            </div>
                            <div className="left-type-text">
                                {detail.future === 0 ? '现货' : `${detail.future}月期货`}
                            </div>
                        </div>
                    </div>
                    <div className="product-time-right">
                        {detail.beginTime > curTime ? (<div className="count-time-con">
                            <CountDown eleIdName={`product${detail.id}`} timestamp={detail.beginTime} />{t('product.start')}
                        </div>) : (
                            detail.endTime > curTime ? (
                                <div className="count-time-con">
                                    <CountDown eleIdName={`product${detail.id}`} timestamp={detail.endTime} />{t('product.over')}
                                </div>
                            ) : (
                                <div className="count-time-con">
                                    已结束
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="product-price">
                <div className="product-price-left">
                    <p>{detail.price}</p>
                    <span>{detail.priceCurrency}</span>
                    <s>{detail.priceShow}{detail.priceCurrency}</s>
                </div>
                <div className="product-price-right" onClick={() => {
                    window.location.href = '/calculator'
                }}>
                    <img src={counticon} alt=""/>
                    <p>计算</p>
                    <img src={poingright} alt=""/>
                </div>
            </div>
            <div className="product-name">{detail.name}</div>
            {detail.payMode === 1 && <>
                <Line size={12}/>
                <div className="product-again">
                    预售价 ¥10,300，付定金后再减 ¥25.00，尾款需付10,005;(若有优惠，优惠将在付尾款时使用)
                </div>
                <div className="product-pay">
                    <div className="product-pay-left">
                        <div className="pay-left-round"/>
                        <div className="pay-left-line"/>
                        <div className="pay-left-round"/>
                    </div>
                    <div className="product-pay-right">
                        <div className={`pay-right-money ${(detail.payStage === 1 || detail.payStage === 2) && 'paired-money'}`}>
                            <div>定金</div>
                            <div>{detail.firstPay}</div>
                        </div>
                        <div className={`pay-right-money pay-bottom ${detail.payStage === 2 && 'paired-money'}`}>
                            <div>尾款</div>
                            <div>{detail.price}</div>
                        </div>
                    </div>
                </div>
            </>}
        </div>
        <div className="product-message">
            <div className="product-msg-list">
                {messagelist.map((item, index) => {
                    return <div className="product-list-item" key={index}>
                        <div className="list-item-top">
                            <div>{item.title}</div>
                            {item.notic && <div className="list-item-top-img">
                                <img src={noticeimg} alt=""/>
                            </div>}
                        </div>
                        <div className="list-item-center">{item.centerinfo}</div>
                        <div className="list-item-bottom">
                            {item.bottom}
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className="product-explain">
            <h3>产品说明</h3>
            <div className="explain-text">
                <div dangerouslySetInnerHTML={{ __html: detail.desc.replace(/\n/g, '</br>') }} />
            </div>
        </div>
    </>
}
