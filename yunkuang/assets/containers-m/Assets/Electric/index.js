import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import './index.scss'

import closepageimg from '../../../public/imgs/h5img/other/closepage.png'
import switchsimg from '../../../public/imgs/h5img/other/switchs_icon.png'
import miningimg from '../../../public/imgs/h5img/other/mining_icon.png'
import Line from '../../../components-m/Line'
import Againconfirm from '../../../components-m/AgainConfirm'
import Toast from '../../../components/Toast'
import Nolist from '../../../components-m/NolistImg'
import Popup from '../../../components-m/Popup'
import PayElectric from '../../../components-m/PayElectric'
import observe from '../../../models/observe'

export default (props) => {
    const dispatch = useDispatch()
    const { children, closeFn, orderdata } = props
    const [mymininglist, setMymininglist] = useState()
    const [active, setActive] = useState(1)
    const [sureflg, setSureflg] = useState(false)
    const [orderid, setOrderid] = useState()
    const [allid, setAllid] = useState()
    const [hint, setHint] = useState({
        flage: 1, // 1 收益抵扣，2 预交电费
        text: '您是否要将所选订单切换为收益支付电费?',
        isall: false
    })
    const getlistFn = useCallback((type) => {
        if (orderdata) {
            let aheadlist = []
            let payearnlist = []
            let stopedlist = []
            let prepayid = []
            let incomeid = []
            orderdata.map((item) => {
                // 预先支付
                if (item.electricPayType === 1 && item.orderState === 4) {
                    aheadlist.push(item)
                    prepayid.push(item.id)
                }
                // 收益抵扣
                if (item.electricPayType === 2 && item.orderState === 4) {
                    payearnlist.push(item)
                    incomeid.push(item.id)
                }
                // 已暂停
                if (item.orderState === 6) {
                    stopedlist.push(item)
                }
            })
            console.log(prepayid.toString())
            if (type === 1) {
                setMymininglist(aheadlist)
                setAllid(prepayid.toString())
            }
            if (type === 2) {
                setAllid(incomeid.toString())
                setMymininglist(payearnlist)
            }
            if (type === 3) {
                setMymininglist(stopedlist)
            }
        }
    }, [])
    const selectlist = [
        { name: '预交电费', type: 1 },
        { name: '收益支付', type: 2 },
        { name: '已暂停', type: 3 }
    ]
    const [payelec, setPayelec] = useState(false)
    useEffect(() => {
        observe.dispatch('我终于传过去了')
        getlistFn(1)
    }, [orderdata])
    // 切换扣费方式
    const switchPayelectric = useCallback((type, list) => {
        dispatch.order.electricePaytype({
            electricPayType: type,
            electricPriceCurrency: 'USDT',
            orderIdStr: list
        }).then((res) => {
            if (res.code === 0) {
                window.location.reload()
            } else {
                if (res.code === 3143) {
                    setHint({
                        flage: 3,
                        text: res.msg,
                        isall: false
                    })
                } else {
                    Toast.info(res.mag)
                }
            }
        })
    }, [])
    // 单个切换Btn
    const oneSwitchFn = useCallback((item) => {
        if (active === 1) {
            setHint({
                flage: 2,
                text: '您是否要将所选订单切换为收益支付电费?',
                isall: false
            })
        }
        if (active === 2) {
            setHint({
                flage: 1,
                text: '您是否要将所选订单切换为預繳電費?',
                isall: false
            })
        }
        if (active === 3) {
            if (item.electricPayType === 1) {
                setHint({
                    flage: 2,
                    text: '您是否要将所选订单切换为收益支付电费?',
                    isall: false
                })
            }
            if (item.electricPayType === 2) {
                setHint({
                    flage: 1,
                    text: '您是否要将所选订单切换为預繳電費?',
                    isall: false
                })
            }
        }
        setOrderid(item.id)
        setSureflg(true)
    }, [active])
    const allswitchFn = useCallback(() => {
        setSureflg(true)
        if (active === 1) {
            setHint({
                flage: 2,
                text: '您是否要将全部订单切换为收益支付电费?',
                isall: true
            })
        }
        if (active === 2) {
            setHint({
                flage: 1,
                text: '您是否要将全部订单切换为預繳電費?',
                isall: true
            })
        }
    }, [active])
    return <div className="electirc-page">
        <div className="electirc-page-con">
            <div className="electirc-page-con-top">
                {children}
            </div>
            <div className="close-page" onClick={() => {
                closeFn()
            }}>
                <img src={closepageimg} alt=""/>
            </div>
            <div className="electric-orderlist">
                <div className="select-type">
                    {selectlist.map((item, index) => {
                        return <div className={`${active === item.type && 'select-item'}`} key={index}
                            onClick={() => {
                                setActive(item.type)
                                getlistFn(item.type)
                            }}
                        >{item.name}</div>
                    })}
                </div>
                {mymininglist?.length > 0 ? (
                    <div className="mining-list">
                        {mymininglist && mymininglist.map((item, index) => {
                            return <div className="mining-list-item" key={index}>
                                <div className="item-text">
                                    <div className="item-text-onetitle">
                                        {item.productName}
                                    </div>
                                    <div className="item-text-twotitle">
                                        {item.minerTypeName}
                                    </div>
                                </div>
                                <div className="item-mining-info">
                                    <div className="mining-info-itm">
                                        <p>台数</p>
                                        <p>{item.buyNum}</p>
                                    </div>
                                    <div className="mining-info-itm">
                                        <p>总功率</p>
                                        <p>{item.totalKW}KW</p>
                                    </div>
                                    <div className="mining-info-itm">
                                        <p>USDT/kW·h</p>
                                        <p>{item.electricPrice}</p>
                                    </div>
                                    <div className="mining-info-itm">
                                        <div className="switch-btn" onClick={() => {
                                            oneSwitchFn(item)
                                        }}>
                                            <img src={switchsimg} alt=""/>
                                            <span>切换扣费模式</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mining-img-posit">
                                    <img src={miningimg} alt=""/>
                                </div>
                            </div>
                        })}
                    </div>
                ) : (
                    <Nolist heightly={380} />
                )}
                <Line />
                <div className="electric-bottom">
                    {active !== 3 && <div className="btn-switch" onClick={() => {
                        allswitchFn()
                    }}>全部切换</div>}
                    <div className="btn-switch pay-btn" onClick={() => {
                        setPayelec(true)
                    }}>缴纳电费</div>
                </div>
            </div>
        </div>
        {sureflg && <Againconfirm
            text={hint.text}
            concelFn={() => {
                setSureflg(false)
            }}
            sureFn={() => {
                // 全部切换
                if (hint.isall) {
                    switchPayelectric(hint.flage, allid)
                    return
                }
                // 电费不足一天
                if (hint.flage === 3) {
                    setSureflg(false)
                    return
                }
                // 单个切换
                switchPayelectric(hint.flage, orderid)
            }}
        />}
        {payelec && <Popup
            children={
                <div className="electirc-page-con">
                    <PayElectric
                        ish5
                        langua={'USDT'}
                        onCloseFn={() => {
                            setPayelec(false)
                        }}
                    />
                </div>
            }
        />}
    </div>
}
