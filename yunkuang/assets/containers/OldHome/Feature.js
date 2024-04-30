// 首页产品列表
import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Encrypt, Months, formatNum } from '../../public/js/index'
import { Curreylog, CurryList } from '../../public/js/curryicon'
import Productlist from '../../components/Newproductlists'
import rightbtn from '../../public/imgs/newedition/btnright.png'
import Meatch from '../../public/imgs/newpage/meatch.png'
import eths from '../../public/imgs/newpage/eths.png'
import fils from '../../public/imgs/newpage/fils.png'
import overzh from '../../public/imgs/newpage/overzh.png'
import overen from '../../public/imgs/newpage/overen.png'
import overjp from '../../public/imgs/newpage/overjp.png'
import Toast from '../../components/Toast'
export default ({ products, partnerlist, lists, t, i18n }) => {
    const curTime = Date.parse(new Date())
    const dispatch = useDispatch()
    const [bselec, setBselec] = useState(0)
    const [mselec, setMselec] = useState(-1)
    const [currlist, setCurrlist] = useState([])
    const handleSelect = useCallback((item) => {
        if (item.stuse === false) {
            return
        }
        setBselec(item.type)
        if (item.name === 'ALL') {
            dispatch.product.getProductList({}).then((res) => {
                if (res.code === 0) {
                    if (res.data.length > 9) {
                        setCurrlist((res.data).splice(0, 9))
                    } else {
                        setCurrlist(res.data)
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        } else {
            dispatch.product.getProductList({
                currency: item.name
            }).then((res) => {
                if (res.code === 0) {
                    if (res.data === null) {
                        setCurrlist([])
                    } else {
                        if (res.data.length > 9) {
                            setCurrlist((res.data).splice(0, 9))
                        } else {
                            setCurrlist(res.data)
                        }
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    })
    const handleToseleccs = useCallback((itm, num) => {
        setMselec(num)
        dispatch.public.getProductList({
            productPartnerType: itm.id
        }).then((res) => {
            if (res.code === 0) {
                if (res.data === null) {
                    setCurrlist([])
                } else {
                    if (res.data.length > 9) {
                        setCurrlist((res.data).splice(0, 9))
                    } else {
                        setCurrlist(res.data)
                    }
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    const handleAll = useCallback(() => {
        setMselec(-1)
        dispatch.public.getProductList({
            currency: 'FIL'
        }).then((res) => {
            if (res.code === 0) {
                if (res.data === null) {
                    setCurrlist([])
                } else {
                    if (res.data.length > 9) {
                        setCurrlist((res.data).splice(0, 9))
                    } else {
                        setCurrlist(res.data)
                    }
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    return <div className="feature">
        <h3>{t('newpage.home.featured')}</h3>
        <Productlist {...{ products }}/>
        <div className="feature-list">
            <div className="feature-list-select">
                <div className="feature-list-top">
                    {CurryList.map((item, index) => {
                        return <div className={bselec === index ? bselec === 0 ? 'allctive' : 'active' : 'list-top-select'} key={index} onClick={() => { handleSelect(item) }}>
                            <img src={bselec === index ? item.icons : item.icon} alt=""/>
                            <span style={{ color: item.stuse === false ? '#A2A2AA' : '' }}>{item.name}{item.name === 'ALL' ? '' : t('newpage.header.wak')}</span>
                        </div>
                    })}
                </div>
                {bselec === 3 ? (
                    <div className="feature-list-merchant">
                        <div className={mselec === -1 ? 'mactive' : ''} onClick={() => { handleAll() }}>{t('newpage.home.all')}</div>
                        {partnerlist.map((item, index) => {
                            return <div className={mselec === index ? 'mactive' : ''} key={index} onClick={() => { handleToseleccs(item, index) }}>{item.productPartnerName}</div>
                        })}
                    </div>
                ) : ''}
            </div>
            {bselec === 0 ? (
                <div className="feature-list-con">
                    {lists && lists.map((item, index) => {
                        return <div className="feature-list-con-item" key={index}>
                            <a href={`/product/${Encrypt((item.id).toString())}`} target="_blank">
                                <div className="list-con-item-top">
                                    <div className="item-top-l">
                                        <img src={Curreylog.filter((itm) => { return itm.name === item.incomeCurrency }).length > 0 && Curreylog.filter((itm) => { return itm.name === item.incomeCurrency })[0].logo} alt=""/>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                                <div className="list-con-item-hash">
                                    <p>
                                        {new Date(item.effectiveTime).getFullYear() >= new Date().getFullYear() ? (
                                            (i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
                                                new Date(item.effectiveTime).getMonth() > new Date().getMonth() ? (`${Months.filter((itm) => { return itm.type === (new Date(item.effectiveTime).getMonth() + 1) })[0].moth}${t('newpage.newproduct.qihuo')}`) : (t('newpage.newproduct.xian'))
                                            ) : (
                                                new Date(item.effectiveTime).getMonth() > new Date().getMonth() ? (`${new Date(item.effectiveTime).getMonth() + 1}${t('newpage.home.qihuos')}`) : (t('newpage.newproduct.xian'))
                                            )
                                        ) : (t('newpage.newproduct.xian'))}
                                    </p>
                                    <p>
                                        <span>{item.hashrateFormat}</span>
                                        <span> {item.hashrateUnit}</span>
                                    </p>
                                    <p>
                                        <span>{Number(item.minerTypeInfo.electricFee).toFixed(2)}</span>
                                        <span> USDT/{t('newpage.newproduct.day')}</span>
                                    </p>
                                </div>
                                <div className="list-con-item-price">
                                    {/* <span>{(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? '￥' : ''}</span> */}
                                    <span>{formatNum(item.priceClean)}</span>
                                    <span>{item.priceCurrency}</span>
                                </div>
                                <div className="item-position">
                                    <img src={item.incomeCurrency === 'BTC' ? Meatch : item.incomeCurrency === 'ETH' ? eths : fils} alt=""/>
                                    <div className="item-position-mc"></div>
                                </div>
                                {item.leftNumber === 0 ? (
                                    <div className="item-over">
                                        <div className="item-over-img">
                                            {(i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
                                                <img src={overen} alt=""/>
                                            ) : (
                                                (i18n.language).toLowerCase().substring(0, 2) === 'zh' ? (
                                                    <img src={overzh} alt=""/>
                                                ) : (
                                                    <img src={overjp} alt=""/>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : ('')}
                                {item.endTime < curTime ? (
                                    item.leftNumber === 0 ? ('') : (
                                        <div className="item-over"></div>
                                    )
                                ) : ('')}
                            </a>
                        </div>
                    })}
                </div>
            ) : (
                <div className="feature-list-con">
                    {currlist.map((item, index) => {
                        return <div className="feature-list-con-item" key={index}>
                            <a href={`/product/${Encrypt((item.id).toString())}`} target="_blank">
                                <div className="list-con-item-top">
                                    <div className="item-top-l">
                                        <img src={Curreylog.filter((itm) => { return itm.name === item.incomeCurrency }).length > 0 && Curreylog.filter((itm) => { return itm.name === item.incomeCurrency })[0].logo} alt=""/>
                                    </div>
                                    <p>
                                        {item.name}
                                    </p>
                                </div>
                                <div className="list-con-item-hash">
                                    <p>
                                        {new Date(item.effectiveTime).getFullYear() >= new Date().getFullYear() ? (
                                            (i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
                                                new Date(item.effectiveTime).getMonth() > new Date().getMonth() ? (`${Months.filter((itm) => { return itm.type === (new Date(item.effectiveTime).getMonth() + 1) })[0].moth}${t('newpage.newproduct.qihuo')}`) : (t('newpage.newproduct.xian'))
                                            ) : (
                                                new Date(item.effectiveTime).getMonth() > new Date().getMonth() ? (`${new Date(item.effectiveTime).getMonth() + 1}${t('newpage.newproduct.qihuo')}`) : (t('newpage.newproduct.xian'))
                                            )
                                        ) : (t('newpage.newproduct.xian'))}
                                    </p>
                                    <p>
                                        <span>{item.hashrateFormat}</span>
                                        <span> {item.hashrateUnit}</span>
                                    </p>
                                    <p>
                                        <span>{Number(item.minerTypeInfo.electricFee).toFixed(2)}</span>
                                        <span> USDT/{t('newpage.newproduct.day')}</span>
                                    </p>
                                </div>
                                <div className="list-con-item-price">
                                    {/* <span>{(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? '￥' : ''}</span> */}
                                    <span>{item.priceClean}</span>
                                    <span>{item.priceCurrency}</span>
                                </div>
                                <div className="item-position">
                                    <img src={item.incomeCurrency === 'BTC' ? Meatch : item.incomeCurrency === 'ETH' ? eths : fils} alt=""/>
                                    <div className="item-position-mc"></div>
                                </div>
                                {item.leftNumber === 0 ? (
                                    <div className="item-over">
                                        <div className="item-over-img">
                                            {(i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
                                                <img src={overen} alt=""/>
                                            ) : (
                                                (i18n.language).toLowerCase().substring(0, 2) === 'zh' ? (
                                                    <img src={overzh} alt=""/>
                                                ) : (
                                                    <img src={overjp} alt=""/>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : ('')}
                                {item.endTime < curTime ? (
                                    <div className="item-over"></div>
                                ) : ('')}
                            </a>
                        </div>
                    })}
                </div>
            )}
            <div className="feature-all-list">
                <a href="/productlists/BTC" target="_blank">
                    {t('newpage.home.all')}
                    <img src={rightbtn} alt=""/>
                </a>
            </div>
        </div>
        <a name='howwork'></a>
    </div>
}
