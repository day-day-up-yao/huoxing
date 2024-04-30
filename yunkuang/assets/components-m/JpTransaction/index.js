import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { formatTime } from '../../public/js/index'
import './index.scss'
import iconAll from '../../containers-m/Jpindex/image/icon-jpindex-transaction.png'
export default ({ isindex }) => {
    const dispatch = useDispatch()
    const [cblist, setCblist] = useState([]) // 充币
    const [tblist, setTblist] = useState([]) // 提币
    const [ktlist, setKtlist] = useState([]) // 其他（空投、支付）
    const [flag, setFlag] = useState(0)
    const [allb, setAllb] = useState([])
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                setAllb(res.data.token)
            }
        })
        // 其他记录(空投、站内支付)
        dispatch.public.balanceFlow({}).then((res) => {
            if (isindex && res.data.length > 5) {
                setKtlist(res.data.slice(0, 4))
            } else {
                setKtlist(res.data)
            }
        })
        // 充币记录
        dispatch.order.depositList({}).then((res) => {
            if (res.code === 0) {
                if (isindex && res.data.length > 5) {
                    setCblist(res.data.slice(0, 4))
                } else {
                    setCblist(res.data)
                }
            }
        })
        // 提币记录
        dispatch.order.withDrawallist({}).then((res) => {
            if (res.code === 0) {
                if (isindex && res.data.length > 5) {
                    setTblist(res.data.slice(0, 4))
                } else {
                    setTblist(res.data)
                }
            }
        })
    }, [])
    const tabData = [
        { name: 'Received', list: cblist },
        { name: 'Sent', list: tblist },
        { name: 'others', list: ktlist }
    ]
    return (
        <div className="jp-home-transaction" style={{ minHeight: '257px' }}>
            {isindex && <div className="jp-home-transaction-header">
                <div className="jp-home-transaction-header-left">
                    Transactions
                </div>
                <div className="jp-home-transaction-header-right" onClick={() => {
                    window.location.href = '/jptransaction'
                }}>
                    <img className="jp-home-transaction-header-right-icon" src={iconAll} />
                    <div className="jp-home-transaction-header-right-text">
                         Show All
                    </div>
                </div>
            </div>}
            <div className="jp-home-transaction-line"></div>
            <div className="jp-home-transaction-tab-box">
                {
                    tabData && tabData.map((item, index) => {
                        return (
                            <div className="jp-home-transaction-tab" key={index} onClick={() => {
                                setFlag(index)
                            }}>
                                <div className={`jp-home-transaction-tab-text ${flag === index ? 'jp-home-transaction-tab-text-select' : ''}`}>{item.name}</div>
                                <div className={`jp-home-transaction-tab-line  ${flag === index ? 'jp-home-transaction-tab-line-select' : ''}`}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="jp-home-transaction-item">
                <div className="jp-home-transaction-item-flex jp-home-transaction-item-header">coin</div>
                <div className="jp-home-transaction-item-flex jp-home-transaction-item-header">type</div>
                <div className="jp-home-transaction-item-flex jp-home-transaction-item-header">time</div>
                <div className="jp-home-transaction-item-flex jp-home-transaction-item-header">amout</div>
            </div>
            {(flag === 0 ? cblist : flag === 1 ? tblist : ktlist).map((item, index) => {
                return <div className="jp-home-transaction-item" key={index}>
                    <div className="jp-home-transaction-item-flex">
                        <img className="jp-home-transaction-item-icon" src={allb.length > 0 ? allb.filter((itm) => { return itm.tokenName === item.tokenName }).length > 0 ? allb.filter((itm) => { return itm.tokenName === item.tokenName })[0].iconUrl : '' : ''}/>
                        {item.tokenName}
                    </div>
                    <div className="jp-home-transaction-item-flex">{flag === 0 ? 'received' : flag === 1 ? 'sent' : 'others'}</div>
                    {flag === 2 ? (
                        <div className="jp-home-transaction-item-flex">{formatTime(Number(item.created), 'yyyy/MM/dd')}</div>
                    ) : (
                        <div className="jp-home-transaction-item-flex">{formatTime(Number(item.time), 'yyyy/MM/dd')}</div>
                    )}
                    {flag === 2 ? (
                        <div className="jp-home-transaction-item-flex">{Number(item.change).toFixed(2)} {item.tokenName}</div>
                    ) : (
                        <div className="jp-home-transaction-item-flex">{Number(item.quantity).toFixed(2)} {item.tokenName}</div>
                    )}
                </div>
            })}
        </div>
    )
}
