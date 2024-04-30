import React from 'react'
import { useDispatch } from 'react-redux'
import { formatTime } from '../../../public/js/index'
import tojn from '../../../public/imgs/borrow/tojn.png'
import './index.scss'
export default ({ setDetail, orderdl, Toast, setDetaillist, setFlagd, setRefind, setHkinfo }) => {
    const dispatch = useDispatch()
    return <div className="plagorderdetail">
        <div className="plagorderdetail-con">
            <h3>订单详情</h3>
            <div className="lend-position-con-close" onClick={() => { setDetail(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <div className="plagorderdetail-con-item1">
                <p>
                    <span>订单号</span>
                    <span>{orderdl.orderId}</span>
                </p>
                <p>
                    <span>起借日期</span>
                    <span>{formatTime(orderdl.validateAt, 'yyyy-MM-dd')}</span>
                </p>
                <p>
                    <span>到期日期</span>
                    <span>{formatTime(orderdl.endAt, 'yyyy-MM-dd')}</span>
                </p>
                {orderdl.interestOverdue > 0 ? (
                    <p>
                        <span>逾期天数</span>
                        <span>{orderdl.daysVerdue }</span>
                    </p>
                ) : ('')}
            </div>
            <div className="plagorderdetail-con-item1">
                <p>
                    <span>币种</span>
                    <span>{orderdl.borrowCoin}</span>
                </p>
                <p>
                    <span>期限</span>
                    <span>{orderdl.cycle}个月</span>
                </p>
                <p>
                    <span>借出</span>
                    <span>{orderdl.borrowAmt}{orderdl.borrowCoin}</span>
                </p>
                <p>
                    <span>质押算力</span>
                    <span>{orderdl.borrowCoin === 'ETH' ? (orderdl.pledgeHashrate * 1000000 + 'M') : (orderdl.pledgeHashrate + 'T')}</span>
                </p>
                <p>
                    <span>质押算力明细</span>
                    <span className='plagorderdetail-con-item1-tosee' onClick={() => {
                        dispatch.loan.hrdetailList({
                            orderId: orderdl.orderId
                        }).then((res) => {
                            console.log(res)
                            if (res.code === 0) {
                                setDetaillist(res.data)
                                setDetail(false)
                                setFlagd(true)
                            } else {
                                Toast.info(res.msg)
                            }
                        })
                    }}>
                    查看
                        <img src={tojn} alt=""/>
                    </span>
                </p>
            </div>
            <div className="plagorderdetail-con-item1">
                <p>
                    <span>当前质押率</span>
                    <span>{orderdl.pledgeRate * 100}%</span>
                </p>
                <p>
                    <span>日利率</span>
                    <span>{orderdl.dailyRate * 100}%</span>
                </p>
                {orderdl.interestOverdue > 0 ? (
                    <p>
                        <span>逾期利息</span>
                        <span>{orderdl.interestOverdue}{orderdl.borrowCoin}</span>
                    </p>
                ) : ('')}
                <p>
                    <span>利息</span>
                    <span>{orderdl.cycleInterest}{orderdl.borrowCoin}</span>
                </p>
                <p>
                    <span>已还数量</span>
                    <span>{orderdl.debtRepaied}{orderdl.borrowCoin}</span>
                </p>
                <p>
                    <span>应还数量</span>
                    <span>{orderdl.borrowAmt + orderdl.cycleInterest + (orderdl.interestOverdue === null ? 0 : orderdl.interestOverdue) - orderdl.debtRepaied}{orderdl.borrowCoin}</span>
                </p>
            </div>
            <div className="plagorderdetail-con-btn" style={{ display: orderdl.status === 3 ? '' : 'none' }} onClick={() => {
                dispatch.loan.hrprepayInfo({
                    orderId: orderdl.orderId
                }).then((res) => {
                    if (res.code === 0) {
                        setDetail(false)
                        setHkinfo(res.data)
                        setRefind(true)
                    } else {
                        Toast.info(res.msg)
                    }
                })
            }}>立即还币</div>
        </div>
    </div>
}
