import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { formatPrice } from '../../public/js/index'
import { Curreylog } from '../../public/js/curryicon'
import electircico from '../../public/imgs/new/electircico.png'
import Transferlist from '../../components/Transferlist'
export default ({ myhasrate, i18n, t, payelectirc, activelist, isSecure }) => {
    // console.log(activelist)
    // const dispatch = useDispatch()
    const [getincome, setGetincome] = useState(false)
    const Incomelist = [
        {
            type: 0,
            text: t('hasgrate.ljsy'),
            list: myhasrate,
            money: myhasrate.length > 0 ? Number(myhasrate.reduce((sum, e) => sum + Number((e.currency === 'FIL' || e.currency === 'FILDEFI') ? (e.filTotalIncome * e.filUsdtRate) : e.myTotalIncomeUsdt), 0)).toFixed(2) : '--',
            language: true
        },
        {
            type: 1,
            text: t('hasgrate.zrsy'),
            list: myhasrate,
            money: myhasrate.length > 0 ? Number(myhasrate.reduce((sum, e) => sum + Number((e.currency === 'FIL' || e.currency === 'FILDEFI') ? (e.filYesterdayTotalIncome * e.filUsdtRate) : e.yesterdayTotalIncomeUsdt), 0)).toFixed(2) : '--',
            language: true
        },
        {
            type: 2,
            text: t('hasgrate.tqsy'),
            list: myhasrate,
            money: myhasrate.length > 0 ? Number(myhasrate.reduce((sum, e) => sum + Number(e.myNoExtractIncomeUsdt), 0)).toFixed(2) : '--',
            language: true
        }
    ]
    return <div className="listone">
        <div className="listone-top">
            {Incomelist.map((item, index) => {
                return <div className="items" key={index}>
                    <div className="items-top" style={{ color: index === 0 ? '#f60' : '#283044' }}>
                        <span>{item.money}</span>
                        <span> USDT</span>
                    </div>
                    {item.type === 2 ? (
                        <div className="items-othertext" onClick={() => {
                            setGetincome(true)
                        }}>
                            <span>{item.text}</span>
                        </div>
                    ) : (
                        <div className="items-text">{item.text}</div>
                    )}
                    {/* <div className="currylist">
                        {item.list.length > 0 ? (
                            item.list.map((itm, indx) => {
                                return <div className="surryitem" key={indx}>
                                    <div className="curryleft">
                                        <img src={Curreylog.filter((itms) => { return itms.name === itm.currency }).length > 0 && Curreylog.filter((itms) => { return itms.name === itm.currency })[0].logo} alt="" />
                                    </div>
                                    <div className="curryright">
                                        <p>{itm.currency}</p>
                                        {index === 0 ? (
                                            <p>{itm.myTotalIncome === null ? '--' : itm.currency === 'CKB' ? Number(itm.myTotalIncome).toFixed(4) : itm.currency === 'FIL' ? itm.filTotalIncome : itm.myTotalIncome}</p>
                                        ) : index === 1 ? (
                                            <span>{itm.yesterdayTotalIncome === null ? '--' : itm.currency === 'CKB' ? Number(itm.yesterdayTotalIncome).toFixed(4) : itm.currency === 'FIL' ? itm.filYesterdayTotalIncome : itm.yesterdayTotalIncome}</span>
                                        ) : (
                                            <span>{itm.myNoExtractIncome === null ? '--' : itm.currency === 'CKB' ? Number(itm.myNoExtractIncome).toFixed(4) : itm.myNoExtractIncome}</span>
                                        )}
                                    </div>
                                </div>
                            })
                        ) : ('')}
                    </div> */}
                </div>
            })}
        </div>
        <div className="listone-bottom">
            <div className="bottom-right">
                {/* 其他币种算力信息 */}
                {/* filter((itms) => { return itms.currency !== 'FIL' })). */}
                {myhasrate.length > 0 ? (myhasrate.filter((itms) => { return itms.currency !== 'FILDEFI' }).map((item, index) => {
                    let hashNum = 0
                    if (item.orderIncomeVoList) {
                        const orderdata = item.orderIncomeVoList.filter((itm) => itm.orderState === 4)
                        hashNum = orderdata.reduce((sum, e) => sum + Number(e.hashrateFormat), 0)
                    }
                    return <div className="infoitme" key={index}>
                        <div className="info-top">
                            <img src={Curreylog.filter((itms) => { return itms.name === item.currency }).length > 0 && Curreylog.filter((itms) => { return itms.name === item.currency })[0].logo} alt="" />
                            <p>{item.currency}{(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? t('hasgrate.sl') : ''}</p>
                        </div>
                        <div className="info-list">
                            <div className="hashrate">
                                <span>{t('hasgrate.qwsl')}</span>
                                <span>{hashNum} {item.hashrateUnit}</span>
                                {/* <span>{item.blockHashrate === null ? '--' : Number(item.blockHashrate) === 0 ? 0 : Number(item.blockHashrate).toFixed(2)} {item.hashrateUnit}</span> */}
                            </div>
                            <div className="hashrate">
                                <span>{t('hasgrate.mysl')}</span>
                                {item.currency === 'ETH' ? (
                                    <span>{item.myTotalHashrate === null ? '--' : Math.round(item.myTotalHashrate * 1000000)} {item.hashrateUnit}</span>
                                ) : (
                                    <span>{item.myTotalHashrate === null ? '--' : Math.round(item.myTotalHashrate)} {item.hashrateUnit}</span>
                                )}
                            </div>
                        </div>
                        <div className="hashrate-detail">
                            <div className="hashrate-detail-item">
                                <p>{t('hasgrate.ljsy')}</p>
                                {item.currency === 'FIL' ? (
                                    <p>{item.filTotalIncome ? item.filTotalIncome + ' ' + item.currency : '--'}</p>
                                ) : (
                                    <p>{item.myTotalIncome ? item.myTotalIncome + ' ' + item.currency : '--'}</p>
                                )}
                            </div>
                            <div className="hashrate-detail-item">
                                <p>{t('hasgrate.zrsy')}</p>
                                {item.currency === 'FIL' ? (
                                    <p>{item.filYesterdayTotalIncome ? item.filYesterdayTotalIncome + ' ' + item.currency : '--'}</p>
                                ) : (
                                    <p>{item.yesterdayTotalIncome ? item.yesterdayTotalIncome + ' ' + item.currency : '--'}</p>
                                )}
                            </div>
                            <div className="hashrate-detail-item">
                                <p>{t('hasgrate.tqsy')}</p>
                                <p>{item.myNoExtractIncome ? item.myNoExtractIncome + ' ' + item.currency : '--'}</p>
                            </div>
                        </div>
                    </div>
                })) : ('')}
                {/* FIL算力信息 */}
                {/* {myhasrate.length > 0 ? (
                    myhasrate.filter((item) => { return item.currency === 'FIL' }).map((item, index) => {
                        return <div className="fil-info" key={index}>
                            <div className="info-top">
                                <img src={Curreylog.filter((itms) => { return itms.name === item.currency })[0].logo} alt="" />
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
                ) : ('')} */}
            </div>
            {/* 固收类型 */}
            {activelist.length > 0 && <div className="bottom-right">
                {activelist.map((item, index) => {
                    return <div className="infoitme" key={index}>
                        <div className="info-top">
                            <img src={Curreylog.filter((itms) => { return itms.name === 'FIL' }).length > 0 && Curreylog.filter((itms) => { return itms.name === 'FIL' })[0].logo} alt="" />
                            <p>{t('hasgrate.gsx')}DeFi</p>
                        </div>
                        <div className="info-list">
                            <div className="hashrate">
                                <span>{t('hasgrate.cyqy')}</span>
                                <span>{Number(item.myTotalHashrate).toFixed(0)} {t('defidetail.fen')}</span>
                            </div>
                            <div className="hashrate">
                                <span>{t('payelectric.syelecday')}：</span>
                                <span>{item.remainEffectiveDays} {t('public.day')}</span>
                            </div>
                        </div>
                        <div className="hashrate-detail">
                            <div className="hashrate-detail-item">
                                <p>{t('hasgrate.ljsy')}</p>
                                <p>{item.filTotalIncome ? item.filTotalIncome + ' ' + 'FIL' : '--'}</p>
                            </div>
                            <div className="hashrate-detail-item">
                                <p>{t('hasgrate.zrsy')}</p>
                                <p>{item.filYesterdayTotalIncome ? item.filYesterdayTotalIncome + ' ' + 'FIL' : '--'}</p>
                            </div>
                            <div className="hashrate-detail-item">
                                <p>{t('hasgrate.tqsy')}</p>
                                <p>{item.myNoExtractIncome ? item.myNoExtractIncome + ' ' + 'FIL' : '--'}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>}
            {/* 电费信息 */}
            <div className="bottom-left">
                <div className="electirc">
                    <img src={electircico} alt="" />
                    <p>{t('h5.index.electric')}</p>
                </div>
                <div className="cny">
                    <div className="cny-con">
                        <div className="cny-left">{t('hasgrate.mrdf')}(USDT)</div>
                        <div className="cny-right">{payelectirc.length > 0 ? payelectirc[0].availableAmount : '--'}</div>
                    </div>
                    <div className="cny-con">
                        <div className="cny-left">{t('payelectric.dayelec')}(USDT)</div>
                        <div className="cny-right">{payelectirc.length > 0 ? payelectirc[0].dailyCharge : '--'}</div>
                    </div>
                    <div className="cny-con">
                        <div className="cny-left">{t('orderdetail.days')}(day)</div>
                        <div className="cny-right">{payelectirc.length > 0 ? payelectirc[0].daysRemaining : '--'}</div>
                    </div>
                </div>
            </div>
        </div>
        {getincome && <Transferlist
            myhasrate={myhasrate}
            isSecure={isSecure}
            onClose={(e) => {
                setGetincome(e)
            }} />}
    </div>
}
