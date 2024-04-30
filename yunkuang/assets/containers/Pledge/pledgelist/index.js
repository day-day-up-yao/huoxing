import React, { useCallback, useEffect } from 'react'
import { formatTime } from '../../../public/js/index'
import selecticon from '../../../public/imgs/btnicon/selecticon.png'
import selecticons from '../../../public/imgs/btnicon/selecticons.png'
import Fil from '../../../public/imgs/newedition/ipfsicon.png'
import Ethimg from '../../../public/imgs/newedition/ethicon.png'
import Btcimg from '../../../public/imgs/newedition/btcicon.png'
import './index.scss'
export default ({ setFlaglist, hrlist, setHrnum, setHashratenum, setOrderlist, lendcurrency }) => {
    useEffect(() => {
        const getcheck = document.getElementById('btncheck')
        getcheck.checked = true
    }, [])
    const handleToselect = useCallback((e) => {
        const id = e.target.getAttribute('dataid')
        const getcheck = document.getElementById('btncheck')
        hrlist.map(function (item, index) {
            if (parseInt(id) === parseInt(item.id) && item.pledgeEndTime === 0) {
                hrlist[index].checked = !item.checked
            }
        })
        const selects = hrlist.filter((item) => { return item.pledgeEndTime === 0 })
        const newlist = hrlist.filter((item) => { return item.checked === true })
        if (selects.length === newlist.length) {
            getcheck.checked = true
        } else {
            getcheck.checked = false
        }
        let incomenum = 0
        let hrnum = 0
        let hroreder = []
        newlist.map((item) => {
            if (item.pledgeEndTime === 0) {
                hroreder.push(item.tradeNo)
                if (item.loanIncome >= 0) {
                    incomenum += Number(item.loanIncome)
                }
                hrnum += item.hashrateNum
            }
        })
        setHrnum(incomenum)
        setHashratenum(lendcurrency.currency === 'ETH' ? (hrnum * 1000000 + 'M') : (hrnum + 'T'))
        setOrderlist(hroreder)
    })
    const handleTocheck = useCallback(() => {
        const getcheck = document.getElementById('btncheck')
        hrlist.map((item) => {
            if (item.pledgeEndTime === 0) {
                if (getcheck.checked) {
                    item.checked = true
                } else {
                    item.checked = false
                }
            }
        })
        const newlist = hrlist.filter((item) => { return item.checked === true })
        let incomenum = 0
        let hrnum = 0
        let hroreder = []
        newlist.map((item) => {
            if (item.pledgeEndTime === 0) {
                hroreder.push(item.tradeNo)
                incomenum += Number(item.loanIncome)
                hrnum += item.hashrateNum
            }
        })
        setHrnum(incomenum)
        setHashratenum(lendcurrency.currency === 'ETH' ? (hrnum * 1000000 + 'M') : (hrnum + 'T'))
        setOrderlist(hroreder)
    })
    return <div className="pledgelist">
        <div className="pledgelist-top">
            <p>选择质押订单</p>
            <div className="pledgelist-top-r">
                <input type="checkbox" id='btncheck' onChange={(e) => { handleTocheck(e) }}/>全选
                <div className="lend-position-con-close" onClick={() => { setFlaglist(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div className="pledgelist-con">
            {hrlist.length > 0 ? (
                hrlist.map((item, index) => {
                    return <div className="pledgelist-con-item" key={index}>
                        <div className="pledgelist-con-item-l"
                            dataid={item.id}
                            datatradeno={item.hashrateNum}
                            onClick={handleToselect}>
                            <img
                                dataid={item.id}
                                datatradeno={item.hashrateNum}
                                src={item.checked ? selecticons : selecticon}
                                alt=""/>
                        </div>
                        <div className="pledgelist-con-item-r">
                            <div className="pledgelist-con-item-r-l">
                                <img src={item.minerTypePic} alt=""/>
                                <div className="pledgelist-con-item-l-posit">
                                    {item.incomeCurrency === 'BTC' ? (
                                        <img src={Btcimg} alt=""/>
                                    ) : item.incomeCurrency === 'ETH' ? (
                                        <img src={Ethimg} alt=""/>
                                    ) : (
                                        <img src={Fil} alt=""/>
                                    )}
                                </div>
                            </div>
                            <div className="pledgelist-con-item-r-r">
                                <div>
                                    <h2 style={{ color: item.pledgeEndTime > 0 ? '#8F8F95' : '' }}>{item.minerTypeName}</h2>
                                    <h3>{item.productName}</h3>
                                </div>
                                <ul>
                                    <li>
                                        <p style={{ color: item.pledgeEndTime > 0 ? '#8F8F95' : '' }}>{item.incomeCurrency === 'ETH' ? (item.hashrateNum * 1000000 + 'M') : (item.hashrateNum + 'T')}</p>
                                        <p>算力</p>
                                    </li>
                                    <li>
                                        <p style={{ color: item.pledgeEndTime > 0 ? '#8F8F95' : '' }}>{item.productType === 1 ? '永续' : ''}</p>
                                        <p>产权有效期</p>
                                    </li>
                                    <li>
                                        <p style={{ color: item.pledgeEndTime > 0 ? '#8F8F95' : '' }}>{item.pledgeEndTime > 0 ? formatTime(item.pledgeEndTime, 'yyyy-MM-dd') : '未质押'}</p>
                                        <p>到期质押日</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                })
            ) : ('')}
        </div>
    </div>
}
