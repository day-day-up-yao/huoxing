import React, { useEffect, useCallback, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookie from 'js-cookie'
import backimg from '../../public/imgs/borrow/backbow.png'
import logos from '../../public/imgs/borrow/borrlogo.png'
import tojn from '../../public/imgs/borrow/tojn.png'
import selecttime from '../../public/imgs/borrow/selecttime.png'
import lendright from '../../public/imgs/btnicon/lendright.png'
import Toast from '../../components/Toast'
import Pledgelist from './pledgelist'
import Pledgedetail from './pledgedetail'
import './index.scss'
let id = ''
export default () => {
    const dispatch = useDispatch()
    const inputref = useRef()
    const { loanlists } = useSelector((state) => ({
        loanlists: state.loan.hrloanLists
    }))
    const [select, setSelect] = useState(0)
    const [mselect, setMselect] = useState(0)
    const [lendtime, setLendtime] = useState(1)
    const [hrnum, setHrnum] = useState('--') // 产出
    const [hashratenum, setHashratenum] = useState('--') // 质押算力
    const [allinterest, setAllinterest] = useState('--') // 总利息
    const [alltotlereturn, setAlltotlereturn] = useState('--') // 总还款
    const [flaglist, setFlaglist] = useState(false) // 是否显示算力产品列表
    const [hrlist, setHrlist] = useState([]) // 算力产品列表
    const [dpledge, setDpledge] = useState(false) // 质押详情页面显示
    const [tsflage, setTsflage] = useState(false) // 错误提示显示
    const [lendnum, setLendnum] = useState() // 借币数量
    const [endtimes, setEndtimes] = useState() // 到期时间
    const [orderlist, setOrderlist] = useState([]) // 订单tradeNo
    const [loginflag, setLoginflag] = useState(false) // 判断是否登录
    const [daytime, setDaytime] = useState(loanlists.loanCurrencies.length > 0 ? loanlists.loanCurrencies[0].periodDays[0].loanDays : 0)
    const [lendcurrency, setLendcurrency] = useState(
        loanlists.loanCurrencies.length > 0
            ? loanlists.loanCurrencies[0] : {
                currency: '',
                currencyLogo: '',
                pledgeRate: '',
                periodDays: [
                    { loanPeriod: '', dailyRate: '' }
                ]
            }
    )
    const [dayrate, setDayrate] = useState(loanlists.loanCurrencies.length > 0 ? loanlists.loanCurrencies[0].periodInterests[0].dailyRate : 0)
    useEffect(() => {
        if (Cookie.get('c_token')) {
            setLoginflag(true)
        }
        dispatch.loan.hrloanDetail({
            tokenId: lendcurrency.currency,
            period: lendtime
        }).then((res) => {
            if (res.code === 0) {
                const Blist = res.data.hashrateOrderList.filter((it) => { return it.incomeCurrency === lendcurrency.currency })
                if (Blist.length === 0) {
                    setHrnum('--')
                    setHashratenum('--')
                } else {
                    setHrlist(Blist)
                    let incomenum = 0
                    let hrnum = 0
                    let hroreder = []
                    Blist.map((item) => {
                        if (item.pledgeEndTime === 0) {
                            hroreder.push(item.tradeNo)
                            item.checked = true
                            if (item.loanIncome >= 0) {
                                incomenum += Number(item.loanIncome)
                            }
                            hrnum += item.hashrateNum
                        } else {
                            item.checked = false
                        }
                    })
                    setHrnum(incomenum)
                    setHashratenum(lendcurrency.currency === 'ETH' ? (hrnum * 1000000 + 'M') : (hrnum + 'T'))
                    setOrderlist(hroreder)
                }
            } else {
                Toast.info(res.msg)
            }
        })
        loanlists.loanCurrencies.length > 0 && setLendcurrency(loanlists.loanCurrencies[0])
    }, [])
    const handleSelect = useCallback((num, itm) => {
        setSelect(num)
        setLendcurrency(itm)
        dispatch.loan.hrloanDetail({
            tokenId: itm.currency,
            period: lendtime
        }).then((res) => {
            if (res.code === 0) {
                const Blist = res.data.hashrateOrderList.filter((it) => { return it.incomeCurrency === itm.currency })
                if (Blist.length === 0) {
                    setHrnum('--')
                    setHashratenum('--')
                } else {
                    setHrlist(Blist)
                    let incomenum = 0
                    let hrnum = 0
                    let hroreder = []
                    Blist.map((item) => {
                        if (item.pledgeEndTime === 0) {
                            hroreder.push(item.tradeNo)
                            item.checked = true
                            if (item.loanIncome >= 0) {
                                incomenum += Number(item.loanIncome)
                            }
                            hrnum += item.hashrateNum
                        } else {
                            item.checked = false
                        }
                    })
                    setHrnum(incomenum)
                    setHashratenum(res.data.loanCurrency.currency === 'ETH' ? (hrnum * 1000000 + 'M') : (hrnum + 'T'))
                    setOrderlist(hroreder)
                }
            } else {
                Toast.info(res.msg)
            }
        })

        if (inputref.current.value) {
            dispatch.loan.hrCalculator({
                borrowAmount: inputref.current.value,
                borrowCurrency: itm.currency,
                period: lendtime,
                periodType: 0
            }).then((res) => {
                if (res.code === 0) {
                    setAllinterest(res.data.totalInterest)
                    setAlltotlereturn(res.data.totalReturn)
                    setEndtimes(res.data.endTime)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [lendtime, inputref])
    const handleTotime = useCallback((m, item) => {
        setMselect(m)
        setDayrate(item.dailyRate)
        setLendtime(item.loanPeriod)
        dispatch.loan.hrloanDetail({
            tokenId: lendcurrency.currency,
            period: item.loanPeriod
        }).then((res) => {
            if (res.code === 0) {
                setDaytime(res.data.loanCurrency.periodDays[m].loanDays)
                const Blist = res.data.hashrateOrderList.filter((it) => { return it.incomeCurrency === lendcurrency.currency })
                if (Blist.length === 0) {
                    setHrnum('--')
                    setHashratenum('--')
                } else {
                    setHrlist(Blist)
                    let incomenum = 0
                    let hrnum = 0
                    let hroreder = []
                    Blist.map((item) => {
                        if (item.pledgeEndTime === 0) {
                            hroreder.push(item.tradeNo)
                            item.checked = true
                            if (item.loanIncome >= 0) {
                                incomenum += Number(item.loanIncome)
                            }
                            hrnum += item.hashrateNum
                        } else {
                            item.checked = false
                        }
                    })
                    setHrnum(incomenum)
                    setHashratenum(lendcurrency.currency === 'ETH' ? (hrnum * 1000000 + 'M') : (hrnum + 'T'))
                    setOrderlist(hroreder)
                }
            } else {
                Toast.info(res.msg)
            }
        })

        if (inputref.current.value) {
            dispatch.loan.hrCalculator({
                borrowAmount: inputref.current.value,
                borrowCurrency: lendcurrency.currency,
                period: item.loanPeriod,
                periodType: 0
            }).then((res) => {
                if (res.code === 0) {
                    setAllinterest(res.data.totalInterest)
                    setAlltotlereturn(res.data.totalReturn)
                    setEndtimes(res.data.endTime)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [lendcurrency, inputref])

    const handleTosure = useCallback(() => {
        if (!loginflag) {
            window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
            return
        }
        if (hrnum === '--' || hrnum === 0) {
            Toast.info('暂无可质押算力')
            return
        }

        if (!inputref.current.value || inputref.current.value === 0) {
            Toast.info('请输入可借数量')
            return
        }
        if (tsflage) {
            Toast.info('超出最大限额')
            return
        }
        setDpledge(true)
    }, [hrnum, inputref, tsflage, loginflag])
    return <div className="pledge">
        <div className="pledge-top">
            <div className="bannerthree" style={{ background: `url(` + backimg + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }}>
                <div className="banner-img">
                    <img src={logos} alt=""/>
                </div>
                <div className="banner-title">算力质押贷</div>
                <div className="sub-title"><span>质押</span>实体算力 · <span>借出</span>未来挖矿产出</div>
            </div>
        </div>
        <div className="pledge-nav">
            <div className="pledge-con">
                <div className="pledge-con-top">
                    {loanlists.loanCurrencies.map((item, index) => {
                        return <p key={index} onClick={() => { handleSelect(index, item) }} className={select === index ? 'active' : ''}>{item.currency}</p>
                    })}
                </div>
                <div className="pledge-con-input">
                    <p>质押算力</p>
                    <div className="pledge-con-input-c">
                        <span>可抵押算力 {hashratenum}</span>
                        <span onClick={() => {
                            if (hrlist.length > 0) {
                                setFlaglist(hrlist.length > 0)
                            } else {
                                Toast.info('暂无质押订单')
                            }
                        }}>选择质押订单
                            <img src={lendright} alt=""/>
                        </span>
                    </div>
                    <div className="pledge-con-input-b">
                        <span>已缴纳电费的订单质押率更高</span>
                        <span onClick={() => {
                            window.location.href = '/hashrate'
                        }}>去缴纳
                            <img src={tojn} alt=""/>
                        </span>
                    </div>
                </div>
                <div className="pledge-con-time">
                    <p>质押期限</p>
                    <div className="pledge-con-time-list">
                        {lendcurrency.periodInterests.length > 0 ? (
                            lendcurrency.periodInterests.map((item, index) => {
                                return <div
                                    className={mselect === index ? 'pledge-con-time-list-itemactive' : 'pledge-con-time-list-item'}
                                    key={index}
                                    onClick={() => { handleTotime(index, item) }}>{item.loanPeriod}个月
                                    <div className="pledge-con-time-list-item-img" style={{ display: mselect === index ? '' : 'none' }}>
                                        <img src={selecttime} alt=""/>
                                    </div>
                                </div>
                            })
                        ) : ('')}
                    </div>
                    <div className="pledge-con-time-b">
                        <p>
                            <span>未来预计产出</span>
                            <span> {hrnum}{lendcurrency.currency}</span>
                        </p>
                        <p>
                            <span>算力产品质押率</span>
                            <span> {lendcurrency.pledgeRate * 100}%</span>
                        </p>
                    </div>
                </div>
                <div className="pledge-con-lend" style={{ border: tsflage ? '1px solid #C25050' : '' }}>
                    <div className="pledge-con-lend-l">
                        <span>我要借</span>
                        <input type="text"
                            placeholder={`最大可借` + (hrnum === '--' ? '--' : (Number(hrnum) * Number(lendcurrency.pledgeRate)) / (1 + Number(dayrate) * Number(daytime)))}
                            onChange={(e) => {
                                const val = e.target.value
                                if (val) {
                                    if (val > (Number(hrnum) * Number(lendcurrency.pledgeRate)) / (1 + Number(dayrate) * Number(daytime))) {
                                        setTsflage(true)
                                    } else {
                                        setTsflage(false)
                                    }
                                    setLendnum(val)
                                    id && clearTimeout(id)
                                    id = setTimeout(() => {
                                        dispatch.loan.hrCalculator({
                                            borrowAmount: val,
                                            borrowCurrency: lendcurrency.currency,
                                            period: lendtime,
                                            periodType: 0
                                        }).then((res) => {
                                            if (res.code === 0) {
                                                setAllinterest(res.data.totalInterest)
                                                setAlltotlereturn(res.data.totalReturn)
                                                setEndtimes(res.data.endTime)
                                            } else {
                                                Toast.info(res.msg)
                                            }
                                        })
                                    }, 500)
                                }
                            }}
                            ref={inputref}
                        />
                    </div>
                    <div className="pledge-con-lend-r">
                        <div className="pledge-con-lend-r-img">
                            <img src={lendcurrency.currencyLogo} alt=""/>
                        </div>
                        {lendcurrency.currency}
                    </div>
                </div>
                <div className="pledge-con-err" style={{ display: tsflage ? 'block' : 'none' }}>超出最大限额</div>
                <div className="pledge-con-lx">
                    <p>利息</p>
                    <ul>
                        <li>
                            <span>总利率</span>
                            <span>{dayrate * 100}%</span>
                        </li>
                        <li>
                            <span>总利息</span>
                            <span>{allinterest} {allinterest === '--' ? '' : lendcurrency.currency}</span>
                        </li>
                        <li>
                            <span>还款数量</span>
                            <span>{alltotlereturn} {allinterest === '--' ? '' : lendcurrency.currency}</span>
                        </li>
                    </ul>
                </div>
                <div className="pledge-con-btn" onClick={() => { handleTosure() }}>{loginflag ? '开始质押借币' : '登录以进行借币'}</div>
            </div>
            <div className="to-link" onClick={() => {
                if (loginflag) {
                    window.location.href = '/pledgeorder'
                } else {
                    window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
                }
            }}>历史订单</div>
        </div>
        <div className="pledge-postion" style={{ display: flaglist ? 'flex' : '' }}>
            <Pledgelist {...{ setFlaglist, hrlist, setHrnum, setHashratenum, setOrderlist, lendcurrency }}/>
        </div>
        {dpledge && <Pledgedetail {...{ setDpledge, lendnum, hashratenum, lendtime, allinterest, alltotlereturn, lendcurrency, endtimes, orderlist }}/>}
    </div>
}
