import React from 'react'
import { formatPrice } from '../../public/js/index'
import { Curreylog } from '../../public/js/curryicon'
import electircico from '../../public/imgs/new/electircico.png'
export default ({ myhasrate, i18n, t, payelectirc }) => {
    const Incomelist = [
        {
            text: t('hasgrate.ljsy'),
            list: myhasrate,
            money: myhasrate.length > 0 ? Math.round(myhasrate.reduce((sum, e) => sum + Number(e.currency === 'FIL' ? (e.filTotalIncome * e.filUsdtRate) : e.myTotalIncomeUsdt), 0)) : '--',
            language: true
        },
        {
            text: t('hasgrate.zrsy'),
            list: myhasrate,
            money: myhasrate.length > 0 ? Math.round(myhasrate.reduce((sum, e) => sum + Number(e.currency === 'FIL' ? (e.filYesterdayTotalIncome * e.filUsdtRate) : e.yesterdayTotalIncomeUsdt), 0)) : '--',
            language: true
        },
        {
            text: t('hasgrate.ktqsy'),
            list: myhasrate,
            money: myhasrate.length > 0 ? Math.round(myhasrate.reduce((sum, e) => sum + Number(e.myNoExtractIncomeUsdt), 0)) : '--',
            language: true
        }
    ]

    return <div className="listone">
        <div className="listone-top">
            {Incomelist.map((item, index) => {
                return <div className="items" key={index}>
                    <div className="items-top" style={{ color: index === 0 ? '#f60' : '#283044' }}>
                        <span>{item.money}</span>
                        <span>USDT</span>
                    </div>
                    <div className="items-text">{item.text}</div>
                    <div className="currylist">
                        {item.list.length > 0 ? (
                            item.list.map((itm, indx) => {
                                return <div className="surryitem" key={indx}>
                                    <div className="curryleft">
                                        <img src={Curreylog.filter((itms) => { return itms.name === itm.currency }).length > 0 && Curreylog.filter((itms) => { return itms.name === itm.currency })[0].logo} alt=""/>
                                        {/* <img src={itm.currency === 'BTC' ? `https://static.hcdnin.com/BTC.svg` : itm.currency === 'ETH' ? 'https://static.hcdnin.com/ETH.svg' : itm.currency === 'FIL' ? 'https://static.hcdnin.com/token/TM9qp6AdxdvCygFK4vGz3-XbGSVlOQCcZeQbvOGrr3U.png' : xch} alt=""/> */}
                                    </div>
                                    <div className="curryright">
                                        <p>{itm.currency}</p>
                                        {index === 0 ? (
                                            <p>{itm.myTotalIncome === null ? '--' : itm.currency === 'FIL' ? itm.filTotalIncome : itm.myTotalIncome}</p>
                                        ) : index === 1 ? (
                                            <span>{itm.yesterdayTotalIncome === null ? '--' : itm.currency === 'FIL' ? itm.filYesterdayTotalIncome : itm.yesterdayTotalIncome}</span>
                                        ) : (
                                            <span>{itm.myNoExtractIncome === null ? '--' : itm.myNoExtractIncome}</span>
                                        )}
                                    </div>
                                </div>
                            })
                        ) : ('')}
                    </div>
                </div>
            })}
        </div>
        <div className="listone-bottom">
            {/* 电费信息 */}
            <div className="bottom-left">
                <div className="electirc">
                    <img src={electircico} alt=""/>
                    <p>{t('h5.index.electric')}</p>
                </div>
                <div className="cny">
                    <div className="cny-con">
                        <div className="cny-left">{t('hasgrate.mrdf')}({(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? 'CNY' : ' USDT'})</div>
                        <div className="cny-right">{payelectirc.length > 0 ? payelectirc[0].availableAmount : '--'}</div>
                    </div>
                    <div className="cny-con">
                        <div className="cny-left">{t('payelectric.dayelec')}({(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? 'CNY' : ' USDT'})</div>
                        <div className="cny-right">{payelectirc.length > 0 ? payelectirc[0].dailyCharge : '--'}</div>
                    </div>
                    <div className="cny-con">
                        <div className="cny-left">{t('orderdetail.days')}({(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? '天' : ' day'})</div>
                        <div className="cny-right">{payelectirc.length > 0 ? payelectirc[0].daysRemaining : '--'}</div>
                    </div>
                </div>
            </div>
            <div className="bottom-right">
                {/* 其他币种算力信息 */}
                {myhasrate.length > 0 ? (
                    (myhasrate.filter((itms) => { return itms.currency !== 'FIL' })).map((item, index) => {
                        let hashNum = 0
                        if (item.orderIncomeVoList) {
                            const orderdata = item.orderIncomeVoList.filter((itm) => itm.orderState === 4)
                            hashNum = Number(orderdata.reduce((sum, e) => sum + Number(e.hashrateFormat), 0)).toFixed(2)
                        }
                        return <div className="infoitme" key={index}>
                            <div className="info-top">
                                <img src={Curreylog.filter((itms) => { return itms.name === item.currency }).length > 0 && Curreylog.filter((itms) => { return itms.name === item.currency })[0].logo} alt=""/>
                                <p>{item.currency}{(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? t('hasgrate.sl') : ''}</p>
                            </div>
                            <div className="info-list">
                                {item.currency !== 'FIL' && <div className="hashrate">
                                    <span>{t('hasgrate.mysl')}</span>
                                    {item.currency === 'ETH' ? (
                                        <span>{item.myTotalHashrate === null ? '--' : Math.round(item.myTotalHashrate * 1000000)} {item.hashrateUnit}</span>
                                    ) : (
                                        <span>{item.myTotalHashrate === null ? '--' : Math.round(item.myTotalHashrate)} {item.hashrateUnit}</span>
                                    )}
                                </div>}
                                {item.currency !== 'FIL' && <div className="hashrate">
                                    <span>{t('hasgrate.qwsl')}</span>
                                    <span>{hashNum} {item.hashrateUnit}</span>
                                    {/* <span>{item.blockHashrate === null ? '--' : item.blockHashrate} {item.hashrateUnit}</span> */}
                                </div>}
                            </div>
                        </div>
                    })
                ) : ('')}
                {/* FIL算力信息 */}
                {myhasrate.length > 0 ? (
                    myhasrate.filter((item) => { return item.currency === 'FIL' }).map((item, index) => {
                        return <div className="fil-info" key={index}>
                            <div className="info-top">
                                <img src={Curreylog.filter((itms) => { return itms.name === item.currency })[0].logo} alt=""/>
                                <p>{item.currency}{(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? t('hasgrate.sl') : ''}</p>
                            </div>
                            <div className="filinfo-list">
                                <div className="fil-hashrate">
                                    <span>{t('hasgrate.mysl')}</span>
                                    <span>{item.myTotalHashrate === null ? '--' : Math.round(item.myTotalHashrate)} {item.hashrateUnit}</span>
                                </div>
                                <div className="fil-hashrate">
                                    <span>{t('h5.mine.aqbz')}</span>
                                    <span>{item.filSafeAmt === null ? '--' : formatPrice(Number(item.filSafeAmt))} {item.currency}</span>
                                </div>
                                <div className="fil-hashrate">
                                    <span>{t('h5.mine.dyprice')}</span>
                                    <span>{item.filPledgeAmt === null ? '--' : formatPrice(Number(item.filPledgeAmt))} {item.currency}</span>
                                </div>
                                <div className="fil-hashrate">
                                    <span>{t('h5.mine.scprice')}</span>
                                    <span>{item.filLockAmt === null ? '--' : formatPrice(Number(item.filLockAmt))} {item.currency}</span>
                                </div>
                            </div>
                        </div>
                    })
                ) : ('')}
            </div>
        </div>
    </div>
}
