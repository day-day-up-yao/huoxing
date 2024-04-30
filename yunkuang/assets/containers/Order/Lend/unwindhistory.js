import React from 'react'
import { formatTime } from '../../../public/js/index'
import None from '../None/index'
export default ({ pclist }) => {
    const titlelist = ['订单编号', '时间', '抵押币种', '平仓使用金额', '平仓剩余抵押金额', '借款币种', '负债总和', '借款金额', '应计利息', '状态']
    return <div className="refund">
        <div className="refund-title">
            {titlelist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        {pclist.length > 0 ? (
            <div className="refund-list">
                {pclist.map((item, index) => {
                    return <div className="refund-item" key={index}>
                        <div>{item.orderId}</div>
                        <div>{formatTime(item.triggerAt, 'yyyy-MM-dd hh:mm:ss')}</div>
                        <div>{item.pledgeSymbol}</div>
                        <div>{item.coveredAmount}</div>
                        <div>{item.fundRest}</div>
                        <div>{item.loanSymbol}</div>
                        <div>{item.totalDebt}</div>
                        <div>{item.loanOrderDetai.marginAmount}</div>
                        <div>{item.interestRemaining}</div>
                        <div>
                            <span className={item.coverStatus === 0 ? 'item-active' : ''}>
                                {item.coverStatus === 0 ? '进行中' : item.coverStatus === 1 ? '已平仓1' : item.coverStatus === 2 ? '已平仓' : ''}
                            </span>
                        </div>
                    </div>
                })}
            </div>
        ) : (
            <None/>
        )}
    </div>
}
