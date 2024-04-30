import React from 'react'
import { formatTime, formatPrice } from '../../../public/js/index'
import None from '../None/index'
export default ({ orderlisthy }) => {
    const titlelist = ['订单编号', '借款时间', '借款币种', '已借数量', '抵押币种', '质押金额', '日利率', '借款期限', '到期时间', '状态']
    return <div className="refund">
        <div className="refund-title">
            {titlelist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        {orderlisthy.length > 0 ? (
            <div className="refund-list">
                {orderlisthy.map((item, index) => {
                    return <div className="refund-item" key={index}>
                        <div>{item.loanOrderId}</div>
                        <div>{formatTime(item.loanTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                        <div>{item.loanCurrency}</div>
                        <div>{item.loanAmount }</div>
                        <div>{item.marginCurrency }</div>
                        <div>{item.marginAmountOrigin}</div>
                        <div>{formatPrice(Number(item.dailyRate) * 100)}%</div>
                        <div>{item.cycle} 个月</div>
                        <div>{formatTime(item.repayTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                        <div style={{ color: item.status === 4 ? '#8F8F95' : '' }}>
                            {item.status === 4 ? '已还款' : item.status === 5 ? '自动平仓' : item.status === 6 ? '已平仓' : item.status === 7 ? '提前还款' : ''}
                        </div>
                    </div>
                })}
            </div>
        ) : (
            <None/>
        )}
    </div>
}
