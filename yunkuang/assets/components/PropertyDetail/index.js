import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { formatTime, isMobile, queryParam } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const { tokenId } = useParams()
    const dispatch = useDispatch()
    const [views, setViews] = useState()
    // const [accountid, setAccountid] = useState()
    const [cassetlist, setCassetlist] = useState([])
    const [tassetlist, setTassetlist] = useState([])
    const [num, setNum] = useState()
    const [selecttitle, setSelecttitle] = useState(1)
    const [znlist, setZnlist] = useState([])
    useEffect(() => {
        if (queryParam('detail')) {
            setSelecttitle(3)
        }
        dispatch.public.getUseinfo({}).then((res) => {
            // 站内支付/收益
            dispatch.public.balanceFlow({
                account_id: res.data.defaultAccountId,
                token_id: tokenId,
                limit: 100
            }).then((res) => {
                setZnlist(res.data)
            })
            // 充币记录
            dispatch.order.depositList({
                account_id: res.defaultAccountId,
                token_id: tokenId,
                limit: 100
            }).then((res) => {
                setCassetlist(res.data)
            })
            // 提币记录
            dispatch.order.withDrawallist({
                account_id: res.defaultAccountId,
                token_id: tokenId,
                limit: 100
            }).then((res) => {
                setTassetlist(res.data)
            })
        })
    }, [])
    return <div className="detail">
        {!isMobile() ? '' : <Header title={t('property.moneymx')}/>}
        <div className="detail-con">
            <div className='detail-con-top'>
                <h3>{t('property.mx')}</h3>
                <div>
                    <span style={{ color: selecttitle === 1 ? '#0a76f5' : '' }} onClick={() => { setSelecttitle(1) }}>{t('property.zlzf')}</span>
                    <span style={{ color: selecttitle === 2 ? '#0a76f5' : '' }} onClick={() => { setSelecttitle(2) }}>{t('property.cbrecord')}</span>
                    <span style={{ color: selecttitle === 3 ? '#0a76f5' : '' }} onClick={() => { setSelecttitle(3) }}>{t('property.tbrecord')}</span>
                </div>
            </div>
            <div className="detail-con-title" style={{ display: selecttitle === 1 ? 'block' : 'none' }}>
                <ul style={{ justifyContent: 'space-between' }}>
                    <li>{t('property.mony')}</li>
                    <li>{t('property.time')}</li>
                    <li>{t('property.moneynum')}</li>
                    <li>{t('property.leix')}</li>
                </ul>
                {Array.isArray(znlist) && znlist.map((item, index) => {
                    return <div className="detail-con-title-ol" key={index}>
                        <ol style={{ justifyContent: 'space-between' }}>
                            <li>{item.tokenName}</li>
                            <li>{formatTime(Number(item.created), 'yyyy-MM-dd hh:mm')}</li>
                            <li>{item.change}</li>
                            <li>{item.flowType}</li>
                        </ol>
                    </div>
                })}
            </div>
            <div className="detail-con-title" style={{ display: selecttitle === 2 ? 'block' : 'none' }}>
                <ul>
                    <li>{t('property.mony')}</li>
                    <li>{t('property.time')}</li>
                    <li>{t('property.moneynum')}</li>
                    {/* <li>{t('property.adds')}</li> */}
                    <li>{t('property.zt')}</li>
                </ul>
                {Array.isArray(cassetlist) && cassetlist.map((item, index) => {
                    return <div className="detail-con-title-ol" key={index}>
                        <ol>
                            <li>{item.tokenName}</li>
                            <li>{formatTime(Number(item.time), 'yyyy-MM-dd hh:mm')}</li>
                            <li>{item.quantity}</li>
                            {/* <li>{item.address}</li> */}
                            <li>{item.statusDesc}</li>
                            <li onClick={() => {
                                setViews(index)
                            }}>{t('property.detail')}</li>
                        </ol>
                        <div className="detail-con-title-ol-alert" style={{ display: views === index ? 'block' : 'none' }}>
                            <div className="detail-con-title-ol-alert-l">
                                <span>{t('property.adds')}</span>
                                <span>{item.address}</span>
                            </div>
                            <div className="detail-con-title-ol-alert-l">
                                <span>Txid：</span>
                                <span>{item.txid}</span>
                            </div>
                            <div className="detail-con-title-ol-alert-r">
                                <p>
                                    <span>{t('property.cltime')}</span>
                                    <span>{formatTime(Number(item.walletHandleTime), 'yyyy-MM-dd hh:mm')}</span>
                                </p>
                                <div className="detail-con-title-ol-alert-r-r" onClick={() => setViews()}>{t('property.sq')}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="detail-con-title" style={{ display: selecttitle === 3 ? 'block' : 'none' }}>
                <ul>
                    <li>{t('property.mony')}</li>
                    <li>{t('property.time')}</li>
                    <li>{t('property.moneynum')}</li>
                    {/* <li>{t('property.adds')}</li> */}
                    <li>{t('property.zt')}</li>
                </ul>
                {Array.isArray(tassetlist) && tassetlist.map((item, index) => {
                    return <div className="detail-con-title-ol" key={index}>
                        <ol>
                            <li>{item.tokenName}</li>
                            <li>{formatTime(Number(item.time), 'yyyy-MM-dd hh:mm')}</li>
                            <li>{item.quantity}</li>
                            {/* <li>{item.address}</li> */}
                            <li>{item.statusDesc}</li>
                            <li onClick={() => {
                                setNum(index)
                            }}>{t('property.detail')}</li>
                        </ol>
                        <div className="detail-con-title-ol-alert" style={{ display: num === index ? 'block' : 'none' }}>
                            <div className="detail-con-title-ol-alert-l">
                                <span>{t('property.adds')}</span>
                                <span>{item.address}</span>
                            </div>
                            <div className="detail-con-title-ol-alert-l">
                                <span>Txid：</span>
                                <span>{item.txid}</span>
                            </div>
                            <div className="detail-con-title-ol-alert-r">
                                <p>
                                    <span>{t('property.cltime')}</span>
                                    <span>{formatTime(Number(item.walletHandleTime), 'yyyy-MM-dd hh:mm')}</span>
                                </p>
                                <div className="detail-con-title-ol-alert-r-r" onClick={() => setNum()}>{t('property.sq')}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
