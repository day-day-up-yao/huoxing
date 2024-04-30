import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../components-m/Headers'
import AllBg from '../../components-m/AllBg'
import MiningOrder from './MiningOrder'

import './index.scss'
import Toast from '../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const [orderlist, setOrderlist] = useState()
    const [miningnum, setMiningnum] = useState()
    const [electricnum, setElectricnum] = useState()
    const [costnum, setCostnum] = useState()
    const [mininglist, setMininglist] = useState()
    const [electriclist, setElectriclist] = useState()
    const [costlist, setCostlist] = useState()
    useEffect(() => {
        miningFn()
        electricFn()
        costFn()
    }, [])
    // 算力订单
    const miningFn = useCallback(() => {
        dispatch.order.getOrderlistv2().then((res) => {
            if (res.code === 0) {
                setMininglist(res.data)
                setOrderlist(res.data)
                setMiningnum({
                    paidnnum: res.data.filter((item) => item.orderState === 0)?.length,
                    auditnum: res.data.filter((item) => item.orderState === 7)?.length,
                    succnum: res.data.filter((item) => item.orderState === 1)?.length,
                    activenum: res.data.filter((item) => item.orderState === 4)?.length,
                    endednum: res.data.filter((item) => item.orderState === 5)?.length
                })
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 电费订单
    const electricFn = useCallback(() => {
        dispatch.order.electricOrderlist().then((res) => {
            if (res.code === 0) {
                setElectriclist(res.data)
                setElectricnum({
                    topupnnum: res.data.filter((item) => item.recordType === 1)?.length,
                    deductionnum: res.data.filter((item) => item.recordType === 3)?.length,
                    rechargenum: res.data.filter((item) => item.recordType === 2)?.length
                })
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 费用订单
    const costFn = useCallback(() => {
        dispatch.order.collectOrder().then((res) => {
            if (res.code === 0) {
                console.log(res.data)
                setCostlist(res.data)
                setCostnum({
                    needpaynum: res.data.filter((item) => item.status === 0)?.length,
                    paysuccnum: res.data.filter((item) => item.status === 1)?.length,
                    incomenum: res.data.filter((item) => item.status === 2)?.length
                })
            }
        })
    }, [])
    const selelctlist = [
        { title: '矿机订单', type: 0 },
        { title: '电费订单', type: 1 },
        { title: '费用订单', type: 2 }
    ]
    const statelist = [
        { title: '待支付', num: miningnum?.paidnnum, type: 0, status: 0 },
        { title: '待审核', num: miningnum?.auditnum, type: 1, status: 7 },
        { title: '支付成功', num: miningnum?.succnum, type: 2, status: 1 },
        { title: '生效中', num: miningnum?.activenum, type: 3, status: 4 },
        { title: '已结束', num: miningnum?.miningnum, type: 4, status: 5 }
    ]
    const elecstatuslist = [
        { title: '充值记录', num: electricnum?.topupnnum, type: 0, status: 1 },
        { title: '扣费记录', num: electricnum?.deductionnum, type: 1, status: 3 },
        { title: '矿机订单充值', num: electricnum?.rechargenum, type: 2, status: 2 }
    ]
    const costseleclist = [
        { title: '待支付', num: costnum?.needpaynum, type: 0, status: 0 },
        { title: '支付成功', num: costnum?.paysuccnum, type: 1, status: 1 },
        { title: '收益低口中', num: costnum?.incomenum, type: 2, status: 2 }
    ]
    const [selecttype, setSelecttype] = useState(0)
    const [activestate, setActivestate] = useState(-1)
    const [otherlist, setOtherlist] = useState()
    useEffect(() => {
        setOtherlist(statelist)
    }, [miningnum])
    // 选择订单类型
    const selectFn = useCallback((type) => {
        setSelecttype(type)
        setActivestate(-1)
        if (type === 0) {
            setOrderlist(mininglist)
            setOtherlist(statelist)
        }
        if (type === 1) {
            setOrderlist(electriclist)
            setOtherlist(elecstatuslist)
        }
        if (type === 2) {
            setOrderlist(costlist)
            setOtherlist(costseleclist)
        }
    }, [mininglist, electriclist, costlist, elecstatuslist, costseleclist, statelist])
    // 选择区分订单
    const differenFn = useCallback((single) => {
        setActivestate(single.type)
        if (selecttype === 0) {
            const miningdata = mininglist.filter((itm) => itm.orderState === single.status)
            setOrderlist(miningdata)
        }
        if (selecttype === 1) {
            const electricdata = electriclist.filter((itm) => itm.recordType === single.status)
            setOrderlist(electricdata)
        }
        if (selecttype === 2) {
            const costdata = costlist.filter((itm) => itm.status === single.status)
            setOrderlist(costdata)
        }
    }, [selecttype, mininglist, electriclist, costlist])
    return <div className="my-oeder">
        <Header title="我的订单" leftfg />
        <div className="my-oeder-select">
            {selelctlist.map((item, index) => {
                return <div
                    className={`select-item ${selecttype === index && 'pitch-on'}`}
                    key={index}
                    onClick={() => {
                        selectFn(index)
                    }}>
                    <span>{item.title}</span>
                    {selecttype === index && <div className="select-item-line">
                        <div className="line-select" />
                    </div>}
                </div>
            })}
        </div>
        <AllBg
            children={
                <div>
                    <div className="state-list">
                        {otherlist?.map((item, index) => {
                            return <div className={`state-list-item ${activestate === index && 'active'}`} key={index} onClick={() => {
                                differenFn(item)
                            }}>
                                <span>{item.title}:</span>
                                <span>{item.num}</span>
                            </div>
                        })}
                    </div>
                    <div style={{ height: 50 }}>
                        <MiningOrder
                            ordertype={selecttype}
                            orderlists={orderlist}
                        />
                    </div>
                </div>
            }
        />
    </div>
}
