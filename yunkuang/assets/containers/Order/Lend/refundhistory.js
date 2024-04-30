import React from 'react'
import { formatTime } from '../../../public/js/index'
import None from '../None/index'
export default ({ hklist }) => {
    const titlelist = ['订单编号', '还款时间', '还款币种', '还款总额', '本金还款', '利息还款', '违约金', '抵押币种', '释放质押金数量', '借款时间']
    return <div className="refund">
        <div className="refund-title">
            {titlelist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        {hklist.length > 0 ? (
            <div className="refund-list">
                {hklist.map((item, index) => {
                    return <div className="refund-item" key={item} key={index}>
                        <div className="rc-table-cell">{item.loanOrderDetail.loanOrderId}</div>
                        <div className="rc-table-cell">{formatTime(item.paybackAt, 'yyyy-MM-dd hh:mm:ss')}</div>
                        <div className="rc-table-cell">{item.symbol}</div>
                        <div className="rc-table-cell">{item.amount}</div>
                        <div className="rc-table-cell">{item.cost}</div>
                        <div className="rc-table-cell">{item.interest}</div>
                        <div className="rc-table-cell">{item.violate}</div>
                        <div className="rc-table-cell">{item.loanOrderDetail.marginCurrency}</div>
                        <div className="rc-table-cell">{item.pledgeReturn}</div>
                        <div className="rc-table-cell">{formatTime(item.loanOrderDetail.loanTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                    </div>
                })}
            </div>
        ) : (
            <None/>
        )}
    </div>
}
