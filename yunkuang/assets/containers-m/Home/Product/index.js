import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import CountDown from '../../../components/CountDown'
import { Encrypt } from '../../../public/js/index'

import './index.scss'

import { CurrenyBg } from '../../../public/js/curryicon'

export default (props) => {
    const { t, i18n } = useTranslation()
    const curTime = Date.parse(new Date())
    const { productList, btnFlag } = props
    return <div className="home-product">
        {productList.map((item, index) => {
            const iconbg = CurrenyBg.find((itm) => itm.name === item.incomeCurrency).bg
            return <div className="product-item" key={index}>
                <div className="item-top">
                    <div className="item-top-left"
                        style={{
                            backgroundImage: `url(${iconbg})`,
                            backgroundSize: '100%'
                        }}
                    >{item.incomeCurrency}</div>
                    <div className="item-top-right">
                        {item.leftNumber === 0 ? (
                            <p>{t('newpage.newproduct.typefour')}</p>
                        ) : (
                            item.effectiveTimeStr === '' ? (
                                item.effectiveTime > curTime ? (i18n.language).toLowerCase().substring(0, 2) === 'en' ? t('newpage.newproduct.qihuo') + moment(item.effectiveTime).format('MM月DD日') : moment(item.effectiveTime).format('MM月DD日') + t('newpage.newproduct.qihuo') : t('newpage.newproduct.xian')
                            ) : (
                                item.effectiveTimeStr
                            )
                        )}
                    </div>
                </div>
                <div className="item-title">{item.name}</div>
                <div className="item-price">
                    <div className="price-text">{item.priceClean}</div>
                    <div className="price-cury">{item.priceCurrency}</div>
                </div>
                <div className="item-line" />
                <div className="item-info">
                    <p>
                        <span>{(item.expectDailyIncome).toFixed(4)}</span>
                        <span>{item.incomeCurrency}/Day</span>
                    </p>
                    <p>
                        <span>{item.hashrateFormat}</span>
                        <span> {item.hashrateUnit}</span>
                    </p>
                </div>
                {btnFlag === 0 ? (
                    <div className="item-btn"
                        onClick={() => {
                            window.location.href = `/product/${Encrypt((item.id).toString())}`
                        }}
                    >{item.leftNumber === 0 ? t('newpage.newproduct.typefour') : t('product.buy')}</div>
                ) : (
                    <div className="item-btn">Coming Soon</div>
                )}
                <div className="item-time">
                    {item.endTime > curTime ? (
                        item.beginTime < curTime ? (
                            <div className="item-time-r"><CountDown eleIdName={`newproduct${item.id}`} timestamp={item.endTime} />{t('newpage.newproduct.over')}</div>
                        ) : (
                            <div className="item-time-r">
                                {(i18n.language).toLowerCase().substring(0, 2) !== 'en' ? (
                                    `${<CountDown eleIdName={`newproduct${item.id}`} timestamp={item.beginTime} /> + t('newpage.newproduct.start')}`
                                ) : (
                                    `${t('newpage.newproduct.start')}${<CountDown eleIdName={`newproduct${item.id}`} timestamp={item.beginTime} />}`
                                )}
                            </div>
                        )
                    ) : (
                        <div className="item-time-r">{t('newpage.newproduct.overed')}</div>
                    )}
                </div>
            </div>
        })}
    </div>
}
