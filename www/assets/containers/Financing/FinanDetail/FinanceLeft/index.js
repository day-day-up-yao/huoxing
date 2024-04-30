import React from 'react'
import moment from 'moment'

import './index.scss'

import { formattingNum } from '../../../../public/js/other'
import timeicon from '../../../../public/img/timeicon.png'

export default (props) => {
    const { detail } = props
    const categorylist = detail.category.split(',')
    const catestyle = ['', 'one-type-item', 'two-type-item']
    return <div className="financedetail-left">
        <div className="financedetail-left-top">
            <div className="lefttop-header">
                <img src={detail.logoUrl} alt=""/>
                <div className="lefttop-header-right">
                    <h3>{detail.projectName}</h3>
                    <div className="lefttop-header-right-type">
                        {categorylist.map((item, index) => (
                            <div className={`header-type-item ${catestyle[index]}`} key={index}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lefttop-desc">{detail.brief}</div>
        </div>
        <div className="financedetail-left-infolist">
            <h3>融资信息</h3>
            {detail.investRaisedList.map((item, index) => {
                return <div className="infolist-item" key={index}>
                    <div className="infolist-item-left">
                        <div className="infolist-item-left-time">
                            <img src={timeicon} alt=""/>
                            <span>日期：{moment(item.investDate).format('YYYY年MM月DD日')}</span>
                        </div>
                        <div className="infolist-item-left-money">
                            <h4>融资金额</h4>
                            <div className="money-amount">${formattingNum(item.amount)}</div>
                        </div>
                        <a className="infolist-item-left-other" href={item.reportUrl} target="_blank">相关报道</a>
                    </div>
                    <div className="infolist-item-right">
                        <h4>投资机构</h4>
                        <div className="infolist-item-right-prolist">
                            {item.orgList.map((itm, idx) => {
                                return <div className="prolist-item" key={idx}>
                                    <img src={itm.logoUrl} alt=""/>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}
