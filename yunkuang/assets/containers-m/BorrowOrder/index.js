import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Selectlist from './Selectlist'
import './index.scss'
import Toast from '../../components/Toast'
import { windowOffset, isMobile, formatTime, formatPrice } from '../../public/js'

import Layout from './Layout'
import Select from './Select'
import DateRangePickerWrapper from './DateRangePickerWrapper'
import Reimbursement from './Reimbursement'
import Adjust from './Adjust'
import nomesg from '../../public/imgs/borrow/nobow.png'
export default () => {
    const dispatch = useDispatch()
    const orderCodeid = useRef()
    const [filterShow, setFilterShow] = useState(false)
    const [dateOrientation, setDateOrientation] = useState('horizontal')
    const [more, setMore] = useState(false)
    const [orderlist, setOrderlist] = useState([])
    const [orderid, serOrderid] = useState()
    const [ordid, serOrdid] = useState()
    const [zynum, setZynum] = useState()
    const [qppay, setQppay] = useState()
    const [currcy, setCurrcy] = useState()
    const [lcurrcy, setLcurrcy] = useState()
    const [jblist, setJblist] = useState([])
    const [loancurrcy, setLoancurrcy] = useState()
    const [statenum, setStatenum] = useState([1, 2, 3])
    const [starttime, setStarttime] = useState(formatTime(new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000 * 90), 'yyyy-MM-dd'))
    const [endtime, setEndtime] = useState(formatTime(Date.parse(new Date()), 'yyyy-MM-dd'))
    const [price, setQprice] = useState(false)
    // const [allflage, setAllflage] = useState(false)
    // const [focused, setFocused] = useState(null)
    const { loanCurrencies } = useSelector((state) => ({
        loanCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.loanCurrencies) || []
    }))
    const states = [
        { value: '-1', name: '全部' },
        { value: '1', name: '用户已抵押' },
        { value: '2', name: '已放款' },
        { value: '3', name: '计息中' }
    ]
    useEffect(() => {
        // 币种列表添加全部
        const objs = [
            { name: '全部', value: '0' }
        ]
        // // const objs = {}
        if (loanCurrencies.length > 0) {
            loanCurrencies.map((itm, idx) => {
                itm.name = itm.currency
                itm.value = idx + 1
                objs.push(itm)
            })
        }
        setJblist(objs)
        if (windowOffset().width <= 760) {
            setDateOrientation('vertical')
        } else {
            setFilterShow(true)
        }
        dispatch.loan.fixedLoadOrders({
            statusList: [1, 2, 3]
        }).then((res) => {
            if (res.code === 0) {
                setOrderlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])

    const [reimbursementShow, setReimbursementShow] = useState(false)
    const [adjustShow, setAdjustShow] = useState(false)
    const [mobAdjustBtnShow, setMobAdjustBtnShow] = useState(false)
    return <div>
        <Selectlist/>
        <Layout>
            <div className="css-1an4fw8">
            质押借币订单
                <div onClick={() => setFilterShow(true)} className="css-qavy20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-8rpvaj"><path d="M3 3v4.5L8.4 13v7h3.3l3.2-3.2V13l5.5-5.5V3H3zm15.4 3.7l-5.5 5.5V16l-2 2h-.5v-5.8L5 6.7V5h13.5v1.7h-.1z" fill="currentColor"></path></svg></div>
            </div>
            <div className="css-15owl46" style={{ display: filterShow ? 'block' : 'none' }}>
                <div className="filter-close" onClick={() => setFilterShow(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-qg86z5"><path fillRule="evenodd" clipRule="evenodd" d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z" fill="currentColor"></path></svg></div>
                <div className="css-y9kj8x">
                    {isMobile() ? (
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>筛选</h3>
                    ) : ('')}
                    <div className="sc-bdVaJa lbWDbo" style={{ width: '156px' }}>
                        <div className="sc-bwzfXH hWlzRt">订单编号</div>
                        <div className=" css-e7kzj0">
                            <input data-bn-type="input" ref={orderCodeid} placeholder="搜索" className="css-1e46yvi" defaultValue="" />
                        </div>
                    </div>
                    <div className="sc-bdVaJa lbWDbo" style={{ width: '200px' }}>
                        <div className="sc-bwzfXH hWlzRt">时间</div>
                        <DateRangePickerWrapper
                            showClearDates
                            onDatesChange={({ startDate, endDate }) => {
                                if (startDate._d) {
                                    setStarttime(startDate._d)
                                }
                                if (endDate._d) {
                                    setEndtime(endDate._d)
                                }
                                // console.log(startDate, endDate)
                                // setStarttime(startDate._d)
                                // setEndtime(endDate._d)
                            }}
                            orientation={dateOrientation}
                            startDatePlaceholderText={starttime}
                            endDatePlaceholderText={endtime}
                            monthFormat="YYYY[年]MMMM"
                            phrases={{ closeDatePicker: '关闭', clearDates: '清除日期' }}
                        />
                    </div>
                    <div className="sc-bdVaJa lbWDbo" style={{ minWidth: '200px' }}>
                        <Select
                            title="借款币种"
                            selected={{
                                value: '1',
                                name: '全部'
                            }}
                            value={'全部'}
                            onInput={(event) => { console.log(event.target.value) }}
                            onSelected={(item, index) => {
                                if (item.name === '全部') {
                                    setLoancurrcy()
                                } else {
                                    setLoancurrcy(item.name)
                                }
                            }}
                            options={jblist}
                        />
                    </div>
                    <div className="sc-bdVaJa lbWDbo" style={{ minWidth: '200px' }}>
                        <Select title="状态" onSelected={(item, index) => {
                            console.log(item)
                            if (item.name === '全部') {
                                setStatenum([1, 2, 3])
                            } else {
                                setStatenum([item.value])
                            }
                        }} options={states}/>
                    </div>
                    <div className="sc-htpNat cyiKwg">
                        {/* <button data-bn-type="button" className="css-1wwf40s" onClick={() => {
                            // setStarttime()
                            // setEndtime()
                            // orderCodeid.current.value = ''
                        }}>重置</button> */}
                        <button data-bn-type="button" className="css-dq59xs" onClick={() => {
                            if (endtime || starttime || loancurrcy || statenum || orderCodeid.current.value !== '') {
                                dispatch.loan.fixedLoadOrders({
                                    endTime: Date.parse(endtime),
                                    startTime: Date.parse(starttime),
                                    loanCurrency: loancurrcy,
                                    orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                                    statusList: statenum
                                }).then((res) => {
                                    if (res.code === 0) {
                                        if (isMobile()) {
                                            setFilterShow(false)
                                        }
                                        setOrderlist(res.data)
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            } else {
                                dispatch.loan.fixedLoadOrders({
                                    statusList: [1, 2, 3]
                                }).then((res) => {
                                    if (res.code === 0) {
                                        setOrderlist(res.data)
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            }
                        }}>搜索</button>
                    </div>
                </div>
            </div>
            <div className="css-cabv63">
                <div className="css-swve3r">
                    {orderlist.length > 0 ? (
                        orderlist.map((item, index) => {
                            return <div className="css-7nkc39" key={index}>
                                <div className="css-j1qn7s">
                                    <div className="css-10nf7hq">
                                        <span className="sc-bxivhb kZUolt">订单ID</span>
                                        <span className="sc-ifAKCX cVpAoW" style={{ fontWeight: '500' }}>{item.loanOrderId }</span>
                                        <span className="sc-bxivhb kZUolt">借款时间</span><span className="sc-ifAKCX cVpAoW">{formatTime(item.loanTime, 'yyyy-MM-dd hh:mm:ss')}</span>
                                        <span className="sc-bxivhb kZUolt">到期时间</span>
                                        <span className="sc-ifAKCX cVpAoW">{formatTime(item.repayTime, 'yyyy-MM-dd hh:mm:ss')}</span>
                                    </div>
                                    <div className="sc-bZQynM cIpjMA" style={{ color: 'rgb(46, 189, 133)', background: 'rgba(46, 189, 133, 0.15)' }}>
                                        {item.status === 1 ? '已抵押' : item.status === 2 ? '已放款' : item.status === 3 ? '计息中' : ''}
                                    </div>
                                </div>
                                <div className="css-1ank7kj">
                                    <div className="css-1xexbg9">
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">借款币种:&nbsp;</span><span className="sc-EHOje jvzENE">{item.loanCurrency}</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">剩余本金:&nbsp;</span><span className="sc-EHOje jvzENE">{formatPrice(item.loanAmount)}</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">日利率:&nbsp;</span><span className="sc-EHOje jvzENE">{formatPrice(Number(item.dailyRate) * 100)}%</span>
                                        </div>
                                    </div>
                                    <div className="css-1xexbg9">
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">总负债:&nbsp;</span><span className="sc-EHOje jvzENE">{item.totalDebt}</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">剩余利息:&nbsp;</span><span className="sc-EHOje jvzENE">{item.interestRemaining}</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">实际累计利息:&nbsp;</span><span className="sc-EHOje jvzENE">{item.interestRealDays}天 </span>
                                        </div>
                                    </div>
                                    <div className="sc-dnqmqq pPkud"></div>
                                    <div className="css-9hhy0i">
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">抵押币种 :&nbsp;</span><span className="sc-EHOje jvzENE">{item.marginCurrency }</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">质押金额 :&nbsp;</span><span className="sc-EHOje jvzENE">{item.marginAmount}</span>
                                        </div>
                                    </div>
                                    <div className="sc-dnqmqq pPkud"></div>
                                    <div className="css-1eldco3">
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">质押率:&nbsp;</span><span className="sc-EHOje jvzENE">{formatPrice(item.marginRate * 100)}%</span>
                                            <span className="sc-htoDjs jISTlx" onClick={() => {
                                                setLcurrcy(item.loanCurrency)
                                                serOrderid(item.loanOrderId)
                                                serOrdid(item.id)
                                                setReimbursementShow(true)
                                            }}>还款</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">
                                                <div className="css-1f9551p" onMouseEnter={() => { setQprice(index) }} onMouseLeave={() => { setQprice(false) }}>
                                                    <span className="sc-iwsKbI gKWhDC">强平价格</span>
                                                    <p style={{ display: price === index ? '' : 'none' }}>当借币资产/质押资产的相对价格达到相对平仓价时，本订单的质押率将达到平仓线</p>
                                                </div>
                                        :&nbsp;
                                            </span>
                                            <span className="sc-EHOje jvzENE">{item.liquidationPrice}</span>
                                            <span className="sc-htoDjs jISTlx" onClick={() => {
                                                setLcurrcy(item.loanCurrency)
                                                setCurrcy(item.marginCurrency)
                                                serOrderid(item.loanOrderId)
                                                setQppay(item.liquidationPrice)
                                                setZynum(item.marginRate)
                                                setAdjustShow(true)
                                            }}>调整质押率</span>
                                        </div>
                                        <div className="sc-gzVnrw hleWAP">
                                            <span className="sc-bxivhb kZUolt">距强平价:&nbsp;</span>
                                            <span className="sc-EHOje jvzENE"><div data-bn-type="text" className="css-qf1j89">{(Number(item.percent2Liquidation) * 100).toFixed(2)}%</div></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    ) : ('')}
                </div>
            </div>

            {/* 移动端 */}
            <div className="css-1no7ynj">
                {orderlist.length > 0 ? (
                    orderlist.map((item, index) => {
                        return <div className="css-1l5lpd5" key={index}>
                            <div className="css-3j2kqe">
                                <div className="css-prp3gn">
                                    <div data-bn-type="text" className="css-ts5quc">{item.loanOrderId}</div>
                                    <div className="sc-bZQynM cIpjMA" style={{ color: 'rgb(46, 189, 133)', background: 'rgba(46, 189, 133, 0.15)' }}>
                                        {item.status === 1 ? '已抵押' : item.status === 2 ? '已放款' : item.status === 3 ? '计息中' : ''}
                                    </div>
                                </div>
                                <div className="css-ybbx55" onClick={() => setMobAdjustBtnShow(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-8rpvaj">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11 7h2v2h-2V7zm0 4h2v2h-2v-2zm2 4h-2v2h2v-2z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="css-uzfte1" style={{ display: mobAdjustBtnShow === index ? 'block' : 'none' }}>
                                    <div className="css-v1khhe" onClick={() => {
                                        setLcurrcy(item.loanCurrency)
                                        serOrderid(item.loanOrderId)
                                        serOrdid(item.id)
                                        setReimbursementShow(true)
                                        setMobAdjustBtnShow(false)
                                    }}>还款</div>
                                    <div className="css-v1khhe" onClick={() => {
                                        setLcurrcy(item.loanCurrency)
                                        setCurrcy(item.marginCurrency)
                                        serOrderid(item.loanOrderId)
                                        setQppay(item.liquidationPrice)
                                        setZynum(item.marginRate)
                                        setAdjustShow(true)
                                        setMobAdjustBtnShow(false)
                                    }}>调整质押率</div>
                                </div>
                            </div>
                            <div className="css-jg500d">
                                <div className="css-ymjgx1">
                                    <div data-bn-type="text" className="css-1qp5tsr">借款时间</div>
                                    <div data-bn-type="text" className="css-1r2jm08">{formatTime(item.loanTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                                </div>
                                <div className="css-ymjgx1">
                                    <div data-bn-type="text" className="css-1qp5tsr">到期时间</div>
                                    <div data-bn-type="text" className="css-1r2jm08">{formatTime(item.repayTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                                </div>
                                <div className="css-ymjgx1">
                                    <div data-bn-type="text" className="css-1qp5tsr">借款币种</div>
                                    <div data-bn-type="text" className="css-1r2jm08">{item.loanCurrency}</div>
                                </div>
                                <div className="css-2y5yk3" onClick={() => {
                                    setMore(index)
                                }} style={{ display: more === index ? 'none' : '' }}>
                                    <div data-bn-type="text" className="css-21cgr0">更多</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-1ljvfyv">
                                        <path d="M8.39 10.517L5 7.127 6.135 6 8.39 8.255 10.645 6l1.135 1.127-3.39 3.39z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="css-moreymjgx1" style={{ display: more === index ? 'block' : 'none' }}>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">剩余本金</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.loanAmount}</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">日利率</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{formatPrice(Number(item.dailyRate) * 100)}%</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">总负债</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.totalDebt}</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">剩余利息</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.interestRemaining}</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">实际累计利息</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.interestRealDays}天</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">质押币种</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.marginCurrency }</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">质押金额</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.marginAmount}</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">质押率</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{formatPrice(Number(item.marginRate) * 100)}%</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr" onMouseEnter={() => { setQprice(index) }} onMouseLeave={() => { setQprice(false) }} style={{ borderBottom: '1px dotted' }}>强平价格</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.liquidationPrice}</div>
                                        <p style={{ display: price === index ? '' : 'none' }}>当借币资产/质押资产的相对价格达到相对平仓价时，本订单的质押率将达到平仓线</p>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">距强平价</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{(Number(item.percent2Liquidation) * 100).toFixed(2)}%</div>
                                    </div>
                                </div>
                                <div className="css-2y5yk3" onClick={() => {
                                    setMore(false)
                                }} style={{ display: more === index ? '' : 'none' }}>
                                    <div data-bn-type="text" className="css-21cgr0">更少</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-1ljvfyv">
                                        <path d="M8.39 10.517L5 7.127 6.135 6 8.39 8.255 10.645 6l1.135 1.127-3.39 3.39z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    })
                ) : (
                    <div className="nolist-con">
                        <div className="nolist-con-img">
                            <img src={nomesg} alt=""/>
                        </div>
                        <div className="nolist-con-t">暂无数据</div>
                    </div>
                )}
            </div>

            {/* 分页 */}
            {/* <div className="css-1xyjjnm">
                <button data-bn-type="button" className="mirror css-1rz1pt4" disabled="" aria-label="Previous page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-yw03l1">
                        <path d="M6.175 8l4.875-4.95L10 2 4 8l6 6 1.05-1.05L6.175 8z" fill="currentColor"></path>
                    </svg></button
                ><button data-bn-type="button" aria-label="Page number 1" disabled="" className="css-1jhro2s">1</button
                ><button data-bn-type="button" className="mirror css-1rz1pt4" disabled="" aria-label="Next page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-yw03l1">
                        <path d="M8.825 8L3.95 12.95 5 14l6-6-6-6-1.05 1.05L8.825 8z" fill="currentColor"></path>
                    </svg>
                </button>
            </div> */}

            {reimbursementShow && <Reimbursement {...{ setReimbursementShow, orderid, ordid, lcurrcy }}/>}
            {adjustShow && <Adjust {...{ setAdjustShow, zynum, qppay, orderid, currcy, lcurrcy }}/>}
        </Layout>
    </div>
}
