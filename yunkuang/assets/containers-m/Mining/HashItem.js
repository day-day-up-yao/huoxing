import React from 'react'
import { Curreylog } from '../../public/js/curryicon'

export default (props) => {
    const { hashinfo } = props
    let hashNum = 0
    if (hashinfo.orderIncomeVoList) {
        const orderdata = hashinfo.orderIncomeVoList.filter((itm) => itm.orderState === 4)
        hashNum = orderdata.reduce((sum, e) => sum + Number(e.hashrateFormat), 0)
    }
    const iconimg = Curreylog.find((itm) => itm.name === hashinfo.currency)?.logo
    return <div className="hash-item">
        <div className="hash-item-part">
            <div className="part-hash">
                <span className="part-hash-num">{hashNum}</span>
                <span>{hashinfo.hashrateUnit}</span>
            </div>
            <div className="part-percent">
                {hashinfo.myTotalHashrate === '0' ? 0 : ((hashNum / Number(hashinfo.myTotalHashrate)) * 100).toFixed(2) + '%'}
            </div>
            <div className="part-desc">实时算力</div>
        </div>
        <div className="hash-item-part">
            <div className="part-hash">
                <span className="part-hash-num">
                    {hashinfo.currency === 'FIL' ? (
                        hashinfo.filYesterdayTotalIncome ? hashinfo.filYesterdayTotalIncome : 0
                    ) : hashinfo.yesterdayTotalIncome}
                </span>
                <span>{hashinfo.currency}</span>
            </div>
            <div className="part-percent">
                ≈${hashinfo.currency === 'FIL' ? (
                    hashinfo.filYesterdayTotalIncome ? Number(hashinfo.filYesterdayTotalIncome) * Number(hashinfo.filUsdtRate) : 0
                ) : (
                    hashinfo.yesterdayTotalIncomeUsdt ? hashinfo.yesterdayTotalIncomeUsdt : 0
                )}
            </div>
            <div className="part-desc">昨日收益</div>
        </div>
        <div className="hash-icon">
            <img src={iconimg} alt=""/>
        </div>
        <div className="hash-block"/>
    </div>
}
