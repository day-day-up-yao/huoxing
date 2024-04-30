import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import Cookies from 'js-cookie'
import './index.scss'
import { formatTime, isMobile, queryParam } from '../../public/js/index'
import CountDown from '../../components/CountDown'
import Header from '../../components-m/Headers/index'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    // const [ratemony, setRatemony] = useState(0)
    const { detail } = useSelector((state) => ({
        detail: state.product.detail
    }))
    // console.log(detail)
    const [showType, setShowType] = useState('attention')

    const [agreement, setAgreement] = useState(false)
    const [flag, setFlag] = useState(false)
    const [tokycmsg, setTokycmsg] = useState(false)
    const [sinapro, setSinapro] = useState(false)
    const [buynum, setBuynum] = useState(detail.buyCount)
    const [uuid, setUuid] = useState('')
    useEffect(() => {
        if (queryParam('chancode')) {
            setUuid(queryParam('chancode'))
        }
        setBuynum(detail.buyCount)
    }, [detail])
    // 默认同意购买协议不选中
    useEffect(() => {
        // if (detail.locality === 'CN') {
        //     detail.locality = 'zh'
        // }
        // if ((detail.locality).toLowerCase() === 'jp' || (detail.locality).toLowerCase() === 'ja-jp') {
        //     detail.locality = 'ja'
        // }
        // if ((i18n.language).toLowerCase().substring(0, 2) !== (detail.locality).toLowerCase()) {
        //     window.location.href = '/'
        // }
        // if ((i18n.language).toLowerCase().substring(0, 2) === detail.)
        // console.log(detail.locality.toLowerCase())
        document.getElementById('agreementCheck').checked = false
        if (Cookies.get('user_id')) {
            dispatch.product.queryBooking({
                productId: detail.id
            }).then((res) => {
                if (res.data && (detail.beginTime > curTime || detail.endTime < curTime)) {
                    setSinapro(true)
                }
            })
        }
    }, [])
    const buyNow = useCallback((event) => {
        event.preventDefault()
        // if (detail.beginTime > curTime) {
        //     Toast.info('已结束售卖')
        //     return
        // }
        // if (detail.endTime < curTime) {
        //     Toast.info('已结束售卖')
        //     return
        // }
        if (!agreement) {
            Toast.info(t('productdetail.agree'))
            return
        }
        if ((detail.beginTime > curTime || detail.endTime < curTime) && sinapro === true) {
            return
        }
        const id = event.target.getAttribute('dataid')
        const count = event.target.getAttribute('datacount')
        if (detail.beginTime > curTime || detail.endTime < curTime) {
            // dispatch.product.queryBooking({
            //     productId: id
            // }).then((res) => {
            //     if (res.code === 0) {
            //         if (res.data) {
            //             Toast.info(t('productdetail.yd'))
            //         } else {
            //             dispatch.product.productooking({
            //                 bookingNum: count,
            //                 productId: id
            //             }).then((res) => {
            //                 if (res.code === 0) {
            //                     Toast.info(t('productdetail.ydsucc'))
            //                     window.location.reload()
            //                 } else {
            //                     Toast.info(res.msg)
            //                 }
            //             }).catch((err) => {
            //                 console.log(err)
            //                 Toast.info(t('productdetail.ydfail'))
            //             })
            //         }
            //     } else {
            //         Toast.info(res.msg)
            //     }
            // })
            return
        }
        dispatch.order.orderCreate({
            buyElectricDays: detail.electricDayMin ? detail.electricDayMin : 90,
            electricPayType: 1,
            buyNum: count,
            productId: id,
            channelUuid: uuid
            // orderCurrency: 'BDDA',
        }).then(function (res) {
            if (res.code !== 0) {
                if (res.code === 3127) {
                    setFlag(true)
                    setTokycmsg(true)
                } else {
                    if (res.msg === 3018) {
                        if (!isMobile()) {
                            Toast.info(res.msg)
                        } else {
                            window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                        }
                    } else {
                        Toast.info(res.msg)
                    }
                }
            } else {
                window.location.href = `/order/${res.data}`
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('productdetail.ddfail'))
        })
    }, [detail, agreement])

    // 获取btc汇率
    // useEffect(() => {
    //     dispatch.product.moneyRate({
    //         currency: 'BTC'
    //     }).then((res) => {
    //         if (res.code === 0) {
    //             setRatemony(res.data)
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info('获取汇率失败')
    //     })
    // }, [])

    const curTime = Date.parse(new Date())
    let productTiplist = t('productdetail.productTiplist')
    let productTips = t('productdetail.productTip')
    if (detail.productType === 1) productTips = t('productdetail.productTips')
    return <div className="product-detail-wrapper">
        {!isMobile() ? '' : <Header title={t('productdetail.cpxq')}/>}
        <div className="product-detail">
            <div className="up">
                <div className="left">
                    <div className="name">
                        <h2>{detail.name}</h2>
                        <div className="product-type">
                            {detail.jointMiningType === 3 ? t('productdetail.hb') : detail.cycle === -1 ? '算力预约金' : detail.productType === 1 ? t('h5.index.permanent') : detail.productType === 2 ? `${detail.cycle + ' '}${t('product.makeday')}` : detail.cycle}
                            {/* {detail.productType === 1 && '永久产权'}
                            {detail.productType === 2 && `${detail.cycle}天使用权`} */}
                        </div>
                        <a className="tips" style={{ display: detail.cycle === -1 ? 'none' : 'block' }}>
                            <span>?</span>
                            <div className="intro">{productTips}</div>
                        </a>
                    </div>
                    <div className="img">
                        <div className="img_setting">
                            <img src={detail.minerTypeInfo.pic} alt={detail.name} title="火星云矿产品图片"/>
                        </div>
                    </div>
                    <div className="count-time">
                        {detail.beginTime > curTime ? <div className="count-time-con"><CountDown eleIdName={`product${detail.id}`} timestamp={detail.beginTime} />{t('product.start')}</div> : <div className="count-time-con"><CountDown eleIdName={`product${detail.id}`} timestamp={detail.endTime} />{t('product.over')}</div>}
                    </div>
                    {/* <div className="left-content">
                        <div className="left-num">
                            <p>已购{(detail.totalNumber - detail.leftNumber) >= 0 ? (detail.cycle === -1 ? Number(detail.totalNumber - detail.leftNumber) * 5 : (detail.totalNumber - detail.leftNumber)) : 0}{detail.incomeCurrency === 'FIL' ? detail.cycle === 0 ? '台' : 'T' : '台'}</p>
                            <p>总量{detail.cycle === -1 ? Number(detail.totalNumber) * 5 : detail.totalNumber}{detail.incomeCurrency === 'FIL' ? detail.cycle === 0 ? '台' : 'T' : '台'}</p>
                        </div>
                        <div className="left-number" id="leftNumber">
                            <div className="left-bar" style={{ width: `${(detail.totalNumber - detail.leftNumber) / detail.totalNumber * 100}%` }} />
                        </div>
                    </div> */}
                </div>
                <div className="right">
                    <div className="start-time">{t('productdetail.startTime')}{detail.effectiveTimeStr === '' ? formatTime(detail.effectiveTime, 'yyyy-MM-dd') : detail.effectiveTimeStr}</div>
                    {detail.jointMiningType === 7 ? (
                        <ul className="params">
                            <li>
                                <p>{detail.jointMiningTypeName}</p>
                                <p>{t('newpage.newproduct.producttype')}</p>
                            </li>
                            <li>
                                <p>{detail.cycle}{t('product.makeday')}</p>
                                <p>{t('newpage.newproduct.makezq')}</p>
                            </li>
                            <li>
                                <p>{detail.yearRate}</p>
                                <p>{t('newpage.newproduct.yearpas')}</p>
                            </li>
                            <li>
                                <p>{Number(detail.hashrateFormat) * Number(detail.buyCount)} {detail.hashrateUnit}</p>
                                <p>{t('newpage.newproduct.qyfe')}</p>
                            </li>
                            <li>
                                <p>
                                    {detail.operationFee * 100}%
                                </p>
                                <p>{t('newpage.newproduct.glf')}</p>
                            </li>
                            <li>
                                <p>{(Number(detail.expectDailyIncome) * Number(detail.buyCount)).toFixed(6)} {detail.incomeCurrency}</p>
                                <p>{t('newpage.newproduct.yjrcc')}</p>
                            </li>
                        </ul>
                    ) : (
                        <ul className="params">
                            <li>
                                <p style={{ color: '#FFA006' }}>{detail.cycle === -1 ? '算力预约金' : detail.productType === 1 ? t('h5.index.permanent') : detail.productType === 2 ? `${detail.cycle}${t('product.makeday')}` : detail.cycle}</p>
                                <p>{t('productdetail.cycle')}</p>
                            </li>
                            <li>
                                <p>{detail.expectDailyIncome}{detail.incomeCurrency}</p>
                                <p>{t('newpage.newproduct.dayout')}</p>
                            </li>
                            <li>
                                <p>{detail.hashrateFormat}{detail.hashrateUnit}</p>
                                <p>{t('productdetail.sl')}</p>
                            </li>
                            <li>
                                <p>{detail.minerTypeInfo.kw}kW</p>
                                <p>{t('productdetail.gh')}</p>
                            </li>
                            <li>
                                <p>
                                    {detail.minerTypeInfo.electricFee} USDT/kWh
                                    <a className="tipss">
                                        <span>!</span>
                                        <b className="intro">{productTiplist}</b>
                                    </a>
                                </p>
                                <p>{t('productdetail.dj')}</p>
                            </li>
                            <li>
                                <p>{detail.operationFee * 100}%</p>
                                <p>{t('productdetail.yw')}</p>
                            </li>
                        </ul>
                    )}
                    {/* <div className="select-num-money">{t('product.yearRate')}{detail.yearRate}</div> */}
                    <div className="select-num">
                        <p className="unit-price">{t('productdetail.all')} {typeof window === 'undefined' ? '' : (Number(detail.price) * Number(detail.buyCount)) + detail.priceCurrency}</p>
                        <div className="select-con">
                            <button onClick={() => {
                                if (detail.conditions.length > 0) {
                                    if (detail.buyCount === detail.conditions[0].buyMin) return
                                }
                                if (detail.buyCount === 1) {
                                    Toast.info(t('productdetail.buyone'))
                                    return
                                }
                                dispatch.product.minusDetail()
                            }}>-</button>
                            <div className="select-cur">
                                <input type="number" value={buynum} onChange={(e) => {
                                    // console.log(e.target.value)
                                    setBuynum(e.target.value)
                                    detail.buyCount = e.target.value
                                }}/>
                            </div>
                            <button onClick={() => {
                                // if (detail.jointMiningType !== 0) {
                                //     Toast.info('联合挖矿一个用户仅能够买一台')
                                //     return
                                // }
                                if (detail.buyCount === detail.leftNumber) {
                                    Toast.info(t('productdetail.nometch'))
                                    return
                                }
                                dispatch.product.addDetail()
                                // setBuynum(detail.buyCount)
                            }}>+</button>
                        </div>
                        {/* <div className="will-get">
                            <p>预计日收益：{detail.buyExpectDailyIncome}BTC</p>
                        </div> */}
                    </div>
                    <div className="buy-agreement">
                        <input id="agreementCheck" type="checkbox" onChange={(event) => {
                            setAgreement(event.target.checked)
                        }} />
                        <label>{t('productdetail.agreed')}</label>
                        <a href={`/productagreement/${detail.jointMiningType}`}>{t('productdetail.xy')}</a>
                        {/* {(isJp || (i18n.language).toLowerCase().substring(0, 2) === 'ja') ? (
                            <a href={detail.jointMiningType === 3 ? '/resource/docs/极速回本产品矿机租赁（购买）、委托管理服务协议（电子签约版）(C-J)(1)(1).docx' : '/resource/docs/矿机租赁（购买）、委托管理服务协议(C-J)(2).docx'} target="_blank">{t('productdetail.xy')}</a>
                        ) : (
                            (i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
                                <a href={detail.jointMiningType === 3 ? '/resource/docs/极速回本产品矿机租赁（购买）、委托管理服务协议（电子签约版）.pdf' : '/resource/docs/【EN】矿机租赁（购买）委托管理服务协议（电子签约版）.docx'} target="_blank">{t('productdetail.xy')}</a>
                            ) : (
                                <a href={detail.jointMiningType === 3 ? '/resource/docs/极速回本产品矿机租赁（购买）、委托管理服务协议（电子签约版）.pdf' : '/resource/docs/矿机租赁（购买）、委托管理服务协议.pdf'} target="_blank">{t('productdetail.xy')}</a>
                            )
                        )} */}
                    </div>
                    <div
                        className={`buy-now ${(detail.beginTime > curTime || detail.endTime < curTime) ? 'grey' : ''}`}
                        dataid={detail.id}
                        datacount={detail.buyCount}
                        onClick={buyNow}>
                        {(detail.beginTime > curTime || detail.endTime < curTime) ? t('productdetail.yud') : t('productdetail.buging')}
                    </div>
                    {/* <div className="count-time">
                        {detail.beginTime > curTime ? <div className="count-time-con"><CountDown eleIdName={`product${detail.id}`} timestamp={detail.beginTime} />开始售卖</div> : <div className="count-time-con"><CountDown eleIdName={`product${detail.id}`} timestamp={detail.endTime} />后结束</div>}
                    </div> */}
                </div>
            </div>
            <div className="down">
                <div className="tab-btn">
                    <a onClick={() => setShowType('attention')} className={showType === 'attention' ? 'active' : ''}>{t('productdetail.title')}</a>
                    <a onClick={() => setShowType('parameter')} className={showType === 'parameter' ? 'active' : ''}>{t('productdetail.number')}</a>
                </div>
                <div className="tab-con">
                    <div className="attention-cont" style={{ display: showType === 'attention' ? 'block' : 'none' }}>
                        <div dangerouslySetInnerHTML={{ __html: detail.desc.replace(/\n/g, '</br>') }} />
                    </div>
                    <div className="parameter-cont" style={{ display: showType === 'parameter' ? 'block' : 'none' }}>
                        <img src={detail.productPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="btnalert" style={{ display: flag === true ? 'flex' : 'none' }}>
            <div className="orderpasswdkyc" style={{ display: tokycmsg === true ? 'block' : 'none' }}>
                <h3>{t('productdetail.buytitle')}</h3>
                <div className="orderpasswd-btn">
                    <span onClick={() => {
                        setFlag(false)
                        setTokycmsg(false)
                    }}>{t('productdetail.qx')}</span>
                    <span onClick={() => {
                        window.location.href = '/userkyc'
                    }}>{t('productdetail.setting')}</span>
                </div>
            </div>
        </div>
    </div>
}
