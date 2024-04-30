import React from 'react'
import { formatTime, formatPrice } from '../../../public/js/index'
import None from '../None/index'
export default ({ tzlist }) => {
    const titlelist = ['订单编号', '调整时间', '抵押币种', '调整方向', '调整金额', '调整前质押率', '调整后质押率', '借款币种']
    return <div className="pledge">
        <div className="pledge-title">
            {titlelist.map((item, index) => {
                return <div className="title-item" key={index}>{item}</div>
            })}
        </div>
        <div className="pledge-list">
            {tzlist.length > 0 ? (
                tzlist.map((item, index) => {
                    return <div className="pledge-list-item" key={index}>
                        <div>{item.orderId}</div>
                        <div>{formatTime(item.addedAt, 'yyyy-MM-dd hh:mm:ss')}</div>
                        <div>{item.marginCurrency}</div>
                        <div>{item.side === 0 ? '转入调低' : '转出调高'}</div>
                        <div>{item.pledgeDelta}</div>
                        <div>{formatPrice(item.beforeRate * 100)}%</div>
                        <div>{formatPrice(item.afterRate * 100)}%</div>
                        <div>{item.loanCurrency}</div>
                    </div>
                })
            ) : (
                <None/>
            )}
        </div>
    </div>
}
