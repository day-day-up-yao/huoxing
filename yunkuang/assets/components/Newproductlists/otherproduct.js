import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { Encrypt } from '../../public/js/index'
import { Curreylog } from '../../public/js/curryicon'
import CountDown from '../../components/CountDown'
import firstfa from '../../public/imgs/newpage/firstfa.png'
import yfk from '../../public/imgs/newpage/yfk.png'

import './index.scss'

export default ({ item, code }) => {
    // console.log(products)
    // console.log(new Date().getFullYear(), new Date(1614474000000).getFullYear())
    const { t, i18n } = useTranslation()
    const curTime = Date.parse(new Date())
    return item && <div className="feature-top-item" onClick={() => {
        window.location.href = `/product/${Encrypt((item.id).toString())}${code ? `?chancode=${code}` : ''}`
    }}>
        <div className="item-top">
            <img src={Curreylog.filter((itm) => { return itm.name === item.incomeCurrency }).length > 0 && Curreylog.filter((itm) => { return itm.name === item.incomeCurrency })[0].logo} alt=""/>
            <p>{item.incomeCurrency}</p>
        </div>
        <h4>
            <span>{item.name}</span>
        </h4>
        <div className="item-price">
            <span>{item.priceClean}</span>
            <span>{item.priceCurrency}</span>
        </div>
        <div className="item-hash">
            <p>
                <span>{(item.expectDailyIncome).toFixed(4)}</span>
                <span>{item.incomeCurrency}/{t('newpage.newproduct.dayc')}</span>
            </p>
        </div>
        <div className="item-reve">
            <p>
                <span>{item.hashrateFormat}</span>
                <span> {item.hashrateUnit}</span>
            </p>
            {item.jointMiningType === 7 ? (
                <p>
                    <span>{item.cycle}</span>
                    <span>{t('product.makeday')}</span>
                </p>
            ) : (
                <p>
                    <span>{item.minerTypeInfo.electricFee}</span>
                    <span> USDT/kWh</span>
                </p>
            )}
        </div>
        {item.leftNumber === 0 ? (
            <div className={item.leftNumber !== 0 ? 'item-btn' : 'item-btnover'}>{t('newpage.newproduct.typefour')}</div>
        ) : (
            <div className={item.endTime > curTime ? 'item-btn' : 'item-btnover'}>{t('product.buy')}</div>
        )}
        <div className="item-time">
            {/* <div className="item-time-l">
                <img src={Times} alt=""/>
            </div> */}
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
        <div className="feature-top-item-pos">
            {item.leftNumber === 0 ? (
                <p>{t('newpage.newproduct.typefour')}</p>
            ) : (
                item.effectiveTimeStr === '' ? (
                    item.effectiveTime > curTime ? (i18n.language).toLowerCase().substring(0, 2) === 'en' ? t('newpage.newproduct.qihuo') + moment(item.effectiveTime).format('MM月DD日') : moment(item.effectiveTime).format('MM月DD日') + t('newpage.newproduct.qihuo') : t('newpage.newproduct.xian')
                ) : (
                    item.effectiveTimeStr
                )
                // new Date(item.effectiveTime).getFullYear() >= new Date().getFullYear() ? (
                //     (i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
                //         new Date(item.effectiveTime).getMonth() > new Date().getMonth() ? (`${Months.filter((itm) => { return itm.type === (new Date(item.effectiveTime).getMonth() + 1) })[0].moth} Futures`) : (`Spot Futures`)
                //     ) : (
                //         new Date(item.effectiveTime).getMonth() > new Date().getMonth() ? (`${new Date(item.effectiveTime).getMonth() + 1}${t('newpage.newproduct.qihuo')}`) : (t('newpage.newproduct.xian'))
                //     )
                // ) : (t('newpage.newproduct.xian'))
            )}
            {/* <img src={item.endTime > curTime ? item.jointMiningType === 3 ? (i18n.language === 'en' ? accele : (i18n.language === 'ja' || i18n.language === 'ja-jp') ? jpjoint : zhminning) : (i18n.language === 'en' ? selecteden : (i18n.language === 'ja' || i18n.language === 'ja-jp') ? selectedjps : selectedzh) : item.leftNumber === 0 ? (i18n.language === 'en' ? soldout : (i18n.language === 'ja' || i18n.language === 'ja-jp') ? jpsold : zhsold) : (i18n.language === 'en' ? selecteden : (i18n.language === 'ja' || i18n.language === 'ja-jp') ? selectedjps : selectedzh)} alt=""/> */}
        </div>
        {(i18n.language).toLowerCase().substring(0, 2) === 'zh' && (item.id === 205 || item.id === 202) ? (
            <div className="firstfa-img">
                <img src={firstfa} alt=""/>
            </div>
        ) : ('')}
        {(i18n.language).toLowerCase().substring(0, 2) === 'zh' && (item.id === 210 || item.id === 211) ? (
            <div className="firstfa-img">
                <img src={yfk} alt=""/>
            </div>
        ) : ('')}
    </div>
}
