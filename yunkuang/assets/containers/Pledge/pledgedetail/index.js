import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { formatTime } from '../../../public/js/index'
import Toast from '../../../components/Toast'
import './index.scss'
export default ({ setDpledge, lendnum, hashratenum, lendtime, allinterest, alltotlereturn, lendcurrency, endtimes, orderlist }) => {
    const dispatch = useDispatch()
    const [selectcheck, setSelectcheck] = useState(false)
    const handleSure = useCallback(() => {
        if (!selectcheck) {
            Toast.info('请先阅读并同意协议')
            return
        }
        dispatch.loan.hrloanCreate({
            loanAmount: lendnum,
            loanCurrency: lendcurrency.currency,
            loanPeriod: lendtime,
            pledgeOrders: orderlist
        }).then((res) => {
            if (res.code === 0) {
                window.location.href = '/pledgeorder'
                Toast.info('质押成功')
            } else {
                Toast.info(res.msg)
            }
        })
    }, [selectcheck])
    return <div className="pledgedetail">
        <div className="pledgedetail-nav">
            <h2>确认订单</h2>
            <div className="lend-position-con-close" onClick={() => { setDpledge(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <div className="pledgedetail-con">
                <ul>
                    <li>
                        <p>借币数量</p>
                        <p>{lendnum}</p>
                    </li>
                    <li>
                        <p>抵押算力</p>
                        <p>{hashratenum}</p>
                    </li>
                    <li>
                        <p>借贷期限</p>
                        <p>{lendtime}个月</p>
                    </li>
                    <li>
                        <p>总利息</p>
                        <p>{allinterest} {lendcurrency.currency}</p>
                    </li>
                    <li>
                        <p>到期时间</p>
                        <p>{formatTime(endtimes, 'yyyy-MM-dd')}</p>
                    </li>
                    <li>
                        <p>还款数量</p>
                        <p>{alltotlereturn} {lendcurrency.currency}</p>
                    </li>
                </ul>
                <div className="pledgedetail-con-select">
                    <input type="checkbox" onChange={(e) => {
                        setSelectcheck(e.target.checked)
                    }}/>
                    <span>我已同意</span>
                    <span>服务协议</span>
                </div>
                <div className="pledgedetail-con-sure" onClick={() => { handleSure() }}>确认</div>
            </div>
        </div>
    </div>
}
