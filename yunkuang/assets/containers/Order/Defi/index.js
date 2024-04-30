import React from 'react'
import { numToFloor, formatTime } from '../../../public/js/index'
import None from '../None/index'
import './index.scss'
const defititle = ['起投时间', '到账时间', '币种', '投入数量', '收益额', '收益率', '约合年化收益率']
export default ({ defas }) => {
    return <div className="defiorder">
        <div className="defiorder-title">
            {defititle.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        {defas.length > 0 ? (
            <div className="defiorder-list">
                {defas.map((item, index) => {
                    return <div className="defiorder-list-item" key={index}>
                        <div>{formatTime(item.ordertime, 'yyyy/MM/dd')}</div>
                        <div>{formatTime(item.settlement, 'yyyy/MM/dd')}</div>
                        <div>{item.pay_token}</div>
                        <div>{item.amount}</div>
                        <div>{Number(item.profit) !== 0 ? Number(item.profit).toFixed(6) : '--'}</div>
                        <div>{Number(item.real_revenue) !== 0 ? numToFloor(Number(item.real_revenue) * 100, 2) + '%' : '--'}</div>
                        <div>{item.revenue}</div>
                    </div>
                })}
            </div>
        ) : (
            <None/>
        )}
    </div>
}
