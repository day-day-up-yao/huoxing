import React from 'react'
import moment from 'moment'

import './index.scss'

import { formattingNum } from '../../../../public/js/other'

export default (props) => {
    const { productList } = props
    return <div className="fincenter-m-center">
        {productList.inforList.map((item, index) => {
            const liststring = []
            item.orgList.map((itm) => {
                liststring.push(itm.orgName)
            })
            return <a className="finlist-m-item" key={index} href={`/financedetail/${item.projectId}`} target="_blank">
                <div className="finlist-item-top">
                    <img src={item.projectLogoUrl} alt=""/>
                    <span>{item.projectName}</span>
                </div>
                <div className="finlist-item-bottom">
                    <div className="finlist-item-bottom-left">
                        <div className="bottom-left-one">
                            <h4>融资金额</h4>
                            <div className="left-one-money">${formattingNum(item.amount)}</div>
                        </div>
                        <div className="bottom-left-two">
                            <h4>融资时间</h4>
                            <div className="left-two-time">{moment(item.investDate).format('YYYY年MM月DD日')}</div>
                        </div>
                    </div>
                    <div className="finlist-item-bottom-right">
                        <h4>投资机构</h4>
                        <div className="bottom-right-instit">
                            {liststring.join(', ')}
                        </div>
                    </div>
                </div>
            </a>
        })}
    </div>
}
