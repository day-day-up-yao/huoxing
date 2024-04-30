import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { formatTime } from '../../public/js/index'
import Toast from '../../components/Toast'
import tojn from '../../public/imgs/borrow/tojn.png'
import OrderDetail from './OrderDetail'
import DetailList from './Detaillist'
import nomesg from '../../public/imgs/borrow/nobow.png'
import Refund from './Refund'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const [orderlist, setOrderlist] = useState([]) // 订单列表
    const [detail, setDetail] = useState(false) // 是否显示详情
    const [orderdl, setOrderdl] = useState() // 详情
    const [detaillist, setDetaillist] = useState([]) // 质押完成列表
    const [flagd, setFlagd] = useState(false) // 是否显示质押完成的列表
    const [refind, setRefind] = useState(false) // 是否显示立即还币
    const [hkinfo, setHkinfo] = useState() // 提前还款信息
    useEffect(() => {
        dispatch.loan.hrloanOrder({}).then((res) => {
            if (res.code === 0) {
                setOrderlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="plagorder">
        <div className="plagorder-con">
            <h2>历史订单</h2>
            <ul>
                <li>时间</li>
                <li>币种</li>
                <li>质押算力</li>
                <li>状态</li>
            </ul>
            {orderlist.length > 0 ? (
                orderlist.map((item, index) => {
                    return <ol key={index}>
                        <li>{formatTime(item.validateAt, 'yyyy-MM-dd')}</li>
                        <li>{item.borrowCoin}</li>
                        <li>{item.borrowCoin === 'ETH' ? (item.pledgeHashrate * 1000000 + ' M') : (item.pledgeHashrate + ' T')}</li>
                        <li style={{ color: item.status === 3 ? '#7065D6' : '' }} onClick={() => {
                            dispatch.loan.hrorderDetail({
                                orderId: item.orderId
                            }).then((res) => {
                                if (res.code === 0) {
                                    setOrderdl(res.data)
                                    setDetail(true)
                                } else {
                                    Toast.info(res.msg)
                                }
                            })
                        }}>{item.status === 3 ? '去还币' : '已完成'}
                            <img src={tojn} alt=""/>
                        </li>
                    </ol>
                })
            ) : (
                <div className="nolist-con">
                    <div className="nolist-con-img">
                        <img src={nomesg} alt=""/>
                    </div>
                    <div className="nolist-con-t">暂无数据</div>
                </div>
            )}
            {detail && <OrderDetail {...{ setDetail, orderdl, Toast, setDetaillist, setFlagd, setRefind, setHkinfo }}/>}
            {flagd && <DetailList {...{ detaillist, setFlagd }}/>}
            {refind && <Refund {...{ setRefind, hkinfo, dispatch }}/>}
        </div>
    </div>
}
