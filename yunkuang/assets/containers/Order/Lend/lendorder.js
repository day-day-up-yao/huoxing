import React, { useState } from 'react'
import { formatTime, formatPrice } from '../../../public/js/index'
import Reimbursement from '../../../containers-m/BorrowOrder/Reimbursement'
import Adjust from '../../../containers-m/BorrowOrder/Adjust'
import None from '../None/index'
export default ({ orderlist }) => {
    const [orderid, serOrderid] = useState()
    const [ordid, serOrdid] = useState()
    const [lcurrcy, setLcurrcy] = useState()
    const [zynum, setZynum] = useState()
    const [qppay, setQppay] = useState()
    const [currcy, setCurrcy] = useState()
    const [reimbursementShow, setReimbursementShow] = useState(false)
    const [adjustShow, setAdjustShow] = useState(false)
    return <div className="lendorder">
        {orderlist.length > 0 ? (
            orderlist.map((item, index) => {
                return <div className="orderlist" item={index} key={index}>
                    <div className="orderlist-top">
                        <div className="top-left">
                            <span>订单ID</span>
                            <span>{item.loanOrderId}</span>
                        </div>
                        <div className="top-right">
                            <div className="right-item">
                                <span>借款时间</span>
                                <span>{formatTime(item.loanTime, 'yyyy-MM-dd hh:mm:ss')}</span>
                            </div>
                            <div className="right-item">
                                <span>还款时间</span>
                                <span>{formatTime(item.repayTime, 'yyyy-MM-dd hh:mm:ss')}</span>
                            </div>
                            <div className="right-status">
                                {item.status === 1 ? '已抵押' : item.status === 2 ? '已放款' : item.status === 3 ? '计息中' : ''}
                            </div>
                        </div>
                    </div>
                    <div className="orderlist-info">
                        <div className="info-left">
                            <div className="info-left-l">
                                <p>
                                    <span>借款币种：</span>
                                    <span>{item.loanCurrency}</span>
                                </p>
                                <p>
                                    <span>剩余本金：</span>
                                    <span>{formatPrice(item.loanAmount)}</span>
                                </p>
                                <p>
                                    <span>日利率：</span>
                                    <span>{formatPrice(Number(item.dailyRate) * 100)}%</span>
                                </p>
                            </div>
                            <div className="info-left-l">
                                <p>
                                    <span>总负债：</span>
                                    <span>{item.totalDebt}</span>
                                </p>
                                <p>
                                    <span>剩余利息：</span>
                                    <span>{item.interestRemaining}</span>
                                </p>
                                <p>
                                    <span>实际累计利息：</span>
                                    <span>{item.interestRealDays}天</span>
                                </p>
                            </div>
                        </div>
                        <div className="info-center">
                            <div>
                                <p>
                                    <span>抵押币种：</span>
                                    <span>{item.marginCurrency }</span>
                                </p>
                                <p>
                                    <span>抵押金额：</span>
                                    <span>{item.marginAmount}</span>
                                </p>
                            </div>
                        </div>
                        <div className="info-right">
                            <div className="info-right-l">
                                <p>
                                    <span>质押率：</span>
                                    <span>{formatPrice(item.marginRate * 100)}%</span>
                                </p>
                                <p>
                                    <span>强平价格：</span>
                                    <span>{item.liquidationPrice}</span>
                                </p>
                                <p>
                                    <span>距强平价：</span>
                                    <span>{(Number(item.percent2Liquidation) * 100).toFixed(2)}%</span>
                                </p>
                            </div>
                            <div className="info-right-r">
                                <div className="info-right-hai" onClick={() => {
                                    setLcurrcy(item.loanCurrency)
                                    serOrderid(item.loanOrderId)
                                    serOrdid(item.id)
                                    setReimbursementShow(true)
                                }}>还款</div>
                                <div className="info-right-adjust" onClick={() => {
                                    setLcurrcy(item.loanCurrency)
                                    setCurrcy(item.marginCurrency)
                                    serOrderid(item.loanOrderId)
                                    setQppay(item.liquidationPrice)
                                    setZynum(item.marginRate)
                                    setAdjustShow(true)
                                }}>调整质押率</div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        ) : (
            <None/>
        ) }
        {reimbursementShow && <Reimbursement {...{ setReimbursementShow, orderid, ordid, lcurrcy }}/>}
        {adjustShow && <Adjust {...{ setAdjustShow, zynum, qppay, orderid, currcy, lcurrcy }}/>}
    </div>
}
