import React, { useEffect } from 'react'

import Line from '../../../components-m/Line'
import { numToCeil } from '../../../public/js/index'

export default (props) => {
    const { detail, eledays, codetype, disamount, getPrice } = props
    // 计算电费
    const electricFee = eledays === -1 ? 0 : numToCeil(detail.buyCount * eledays * detail.electricFee * detail.minerTypeInfo.kw * 24, 2)
    // 合计金额
    let hashrateMoney = numToCeil(detail.price * detail.buyCount, 2)
    // 根据校验优惠码返回类型计算优惠金额
    if (codetype === 0) {
        hashrateMoney = numToCeil(detail.price * detail.buyCount, 2) - disamount
    } else if (codetype === 1) {
        hashrateMoney = numToCeil(detail.price * detail.buyCount, 2) * disamount
    } else if (codetype === 2) {
        hashrateMoney = numToCeil(detail.price * detail.buyCount, 2) - disamount * detail.buyCount
    }
    const payWay = detail.priceCurrency
    const pricelist = [
        { name: '矿机总计', price: numToCeil(detail.priceClean * detail.buyCount, 2) },
        { name: '矿机税费', price: numToCeil(detail.taxPercent * detail.buyCount * detail.priceClean, 2) },
        { name: '电费', price: electricFee },
        { name: '运费', price: numToCeil(detail.transferFee * detail.buyCount, 2) },
        { name: '优惠',
            price: <div>
                {codetype === 0 ? (
                    <div>{disamount}</div>
                ) : codetype === 1 ? (
                    <div>{numToCeil(detail.price * detail.buyCount, 2) - numToCeil(detail.price * detail.buyCount, 2) * disamount}</div>
                ) : codetype === 2 ? (
                    <div>{disamount * detail.buyCount}</div>
                ) : ('--')}
            </div>
        }
    ]
    useEffect(() => {
        getPrice(numToCeil(hashrateMoney + electricFee, 2))
    }, [eledays])
    return <div className="fill-action">
        <h3>金额</h3>
        <div className="all-price">
            {pricelist.map((item, index) => {
                return <div className="all-price-item" key={index}>
                    <span>{item.name}</span>
                    <div className="price-item-right">{item.price} {payWay}</div>
                </div>
            })}
            <Line size={12} />
            <div className="all-price-item">
                <div className="price-item-all">订单金额</div>
                <div className="price-item-allnum">{numToCeil(hashrateMoney + electricFee, 2)} {payWay}</div>
            </div>
        </div>
    </div>
}
