import React from 'react'
import moment from 'moment'

import './index.scss'

import timeicon from '../../../../public/img/timeicon.png'
import { formattingNum } from '../../../../public/js/other'

export default (props) => {
    const { detail } = props
    return <div className="finbottom-m">
        <h3>融资信息</h3>
        <div className="finbottom-m-list">
            {detail.investRaisedList.map((item, index) => {
                return <div className="finbottom-m-list-item" key={index}>
                    <div className="m-list-item-top">
                        <div className="item-top-time">
                            <img src={timeicon} alt=""/>
                            <span>日期：{moment(item.investDate).format('YYYY年MM月DD日')}</span>
                        </div>
                        <div className="item-top-money">
                            <h4>融资金额</h4>
                            <div className="top-money-amount">${formattingNum(item.amount)}</div>
                            <a href={item.reportUrl} target="_blank">相关报道</a>
                        </div>
                    </div>
                    <div className="m-list-item-bottom">
                        <h4>投资机构</h4>
                        <div className="item-bottom-invest">
                            {item.orgList.map((itm, idx) => (
                                <div className="bottom-invest-item" key={idx}>
                                    <img src={itm.logoUrl} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}
