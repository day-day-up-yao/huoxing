import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Selectlist from './Selectlist'
import './index.scss'

import { windowOffset, isMobile, formatTime, formatPrice } from '../../public/js'

import Layout from './Layout'
import Select from './Select'
import DateRangePickerWrapper from './DateRangePickerWrapper'
import Reimbursement from './Reimbursement'
import Adjust from './Adjust'
import Toast from '../../components/Toast'
import nomesg from '../../public/imgs/borrow/nobow.png'
export default () => {
    const dispatch = useDispatch()
    const orderCodeid = useRef()
    const [filterShow, setFilterShow] = useState(false)
    const [dateOrientation, setDateOrientation] = useState('horizontal')
    const [orderlist, setOrderlist] = useState([])
    const [jblist, setJblist] = useState([])
    const [mjblist, seMjJblist] = useState([])
    const [starttime, setStarttime] = useState(formatTime(new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000 * 90), 'yyyy-MM-dd'))
    const [endtime, setEndtime] = useState(formatTime(Date.parse(new Date()), 'yyyy-MM-dd'))
    const [loancurrcy, setLoancurrcy] = useState()
    const [margincurrcy, setMargincurrcy] = useState()
    const { loanCurrencies, marginCurrencies } = useSelector((state) => ({
        loanCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.loanCurrencies) || [],
        marginCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.marginCurrencies) || []
    }))
    useEffect(() => {
        const mobjs = [
            { name: '全部', value: '0' }
        ]
        // // const objs = {}
        if (marginCurrencies.length > 0) {
            marginCurrencies.map((itm, idx) => {
                itm.name = itm.currency
                itm.value = idx + 1
                mobjs.push(itm)
            })
        }
        seMjJblist(mobjs)
    }, [])
    useEffect(() => {
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
            statusList: [4, 5, 6, 7]
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
    // const [mobAdjustBtnShow, setMobAdjustBtnShow] = useState(false)
    return <div>
        <Selectlist/>
        <Layout>
            <div className="css-1an4fw8">
            质押借币历史
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
                        <div className="sc-bwzfXH hWlzRt">借款时间</div>
                        <DateRangePickerWrapper
                            showClearDates
                            onDatesChange={({ startDate, endDate }) => {
                                setStarttime(startDate._d)
                                setEndtime(endDate._d)
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
                        <Select title="抵押币种"
                            selected={{
                                value: '1',
                                name: '全部'
                            }}
                            value={'全部'}
                            onSelected={(item, index) => {
                                if (item.name === '全部') {
                                    setMargincurrcy()
                                } else {
                                    setMargincurrcy(item.name)
                                }
                            }}
                            options={mjblist}/>
                    </div>
                    <div className="sc-htpNat cyiKwg">
                        {/* <button data-bn-type="button" className="css-1wwf40s">重置</button> */}
                        <button data-bn-type="button" className="css-dq59xs" onClick={() => {
                            if (endtime || starttime || loancurrcy || margincurrcy || orderCodeid.current.value !== '') {
                                dispatch.loan.fixedLoadOrders({
                                    endTime: Date.parse(endtime),
                                    startTime: Date.parse(starttime),
                                    loanCurrency: loancurrcy,
                                    marginCurrency: margincurrcy,
                                    orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                                    statusList: [4, 5, 6, 7]
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
                            }
                        }}>搜索</button>
                    </div>
                </div>
            </div>
            <div className="css-1kmhkw4">
                <div className="sc-bxivhb kwjoul">
                    <div className="rc-table rc-table-has-fix-right">
                        <div className="rc-table-container">
                            <div className="rc-table-content">
                                <table style={{ tableLayout: 'fixed' }}>
                                    <colgroup>
                                        <col style={{ width: '150px', minWidth: '150px' }} />
                                        <col style={{ width: '140px', minWidth: '140px' }} />
                                        <col style={{ width: '80px', minWidth: '80px' }} />
                                        <col style={{ width: '145px', minWidth: '145px' }} />
                                        <col style={{ width: '145px', minWidth: '145px' }} />
                                        <col style={{ width: '145px', minWidth: '145px' }} />
                                        <col style={{ width: '90px', minWidth: '90px' }} />
                                        <col style={{ width: '145px', minWidth: '145px' }} />
                                        <col style={{ width: '140px', minWidth: '140px' }} />
                                        <col style={{ width: '100px', minWidth: '100px' }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="rc-table-cell">订单编号</th>
                                            <th className="rc-table-cell">借款时间</th>
                                            <th className="rc-table-cell">借款币种</th>
                                            <th className="rc-table-cell">已借数量</th>
                                            <th className="rc-table-cell">抵押币种</th>
                                            <th className="rc-table-cell">质押金额</th>
                                            <th className="rc-table-cell">日利率</th>
                                            <th className="rc-table-cell">借款期限</th>
                                            <th className="rc-table-cell">到期时间</th>
                                            {/* <th className="rc-table-cell">类型</th> */}
                                            <th
                                                className="rc-table-cell hide rc-table-cell-fix-right rc-table-cell-fix-right-first"
                                                style={{ position: 'sticky', right: '0px', background: '#eee' }}
                                            >
                                                状态
                                            </th>
                                        </tr>
                                    </thead>
                                    {Array.isArray(orderlist) && orderlist.map((item, index) => {
                                        return <thead style={{ background: '#fff', borderBottom: '1px solid #eee' }} key={index}>
                                            <tr>
                                                <th className="rc-table-cell">{item.loanOrderId}</th>
                                                <th className="rc-table-cell">{formatTime(item.loanTime, 'yyyy-MM-dd hh:mm:ss')}</th>
                                                <th className="rc-table-cell">{item.loanCurrency}</th>
                                                <th className="rc-table-cell">{item.loanAmount }</th>
                                                <th className="rc-table-cell">{item.marginCurrency }</th>
                                                <th className="rc-table-cell">{item.marginAmountOrigin}</th>
                                                <th className="rc-table-cell">{formatPrice(Number(item.dailyRate) * 100)}%</th>
                                                <th className="rc-table-cell">{item.cycle} 个月</th>
                                                <th className="rc-table-cell">{formatTime(item.repayTime, 'yyyy-MM-dd hh:mm:ss')}</th>
                                                {/* <th className="rc-table-cell">类型</th> */}
                                                <th
                                                    className="rc-table-cell hide rc-table-cell-fix-right rc-table-cell-fix-right-first"
                                                    style={{ position: 'sticky', right: '0px' }}
                                                >
                                                    {item.status === 4 ? '已还款' : item.status === 5 ? '自动平仓' : item.status === 6 ? '已平仓' : item.status === 7 ? '提前还款' : ''}
                                                </th>
                                            </tr>
                                        </thead>
                                    })}
                                    <tbody className="rc-table-tbody" style={{ display: orderlist ? orderlist.length > 0 ? 'none' : '' : '' }}>
                                        <tr className="rc-table-placeholder">
                                            <td colspan="10" className="rc-table-cell">
                                                <div className="css-aqhq8h">
                                                    <div className="css-cvp9q5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 96 96"
                                                            fill="none"
                                                            className="css-1no0dzy"
                                                        >
                                                            <g clip-path="url(#page-blank-b96_svg__clip0)">
                                                                <path
                                                                    d="M18 88h-2.5v-2.53H18V88zm0-5.53h-2.5v-2.53H18v2.53zm0-5.53h-2.5V74.4H18v2.54zm0-5.53h-2.5v-2.54H18v2.54zm0-5.54h-2.5v-2.53H18v2.53zm0-5.53h-2.5v-2.53H18v2.53zm0-5.53h-2.5v-2.53H18v2.53zm0-5.53h-2.5v-2.54H18v2.54zm0-5.53h-2.5v-2.54H18v2.54zm0-5.54h-2.5v-2.53H18v2.53zm0-5.53h-2.5v-2.53H18v2.53zm0-5.53h-2.5v-2.54H18v2.54zm0-5.53h-2.5v-2.54H18v2.54zm0-5.54h-2.5v-2.53H18v2.53zm0-5.53h-2.5V8H18v2.55zM18 2.5h-2.5V5H18V2.5zM63.08 5h-2.57V2.5h2.57V5zm5.6 0h-2.56V2.5h2.56V5zM57.44 5h-2.56V2.5h2.56V5zm-5.63 0h-2.56V2.5h2.56V5zm-5.64 0h-2.56V2.5h2.56V5zm-5.63 0H38V2.5h2.56L40.54 5zM34.9 5h-2.56V2.5h2.56V5zm-5.63 0h-2.56V2.5h2.56V5zm-5.63 0h-2.57V2.5h2.57V5zM76.32 12.44l-1.8-1.8 1.77-1.77 1.8 1.8-1.77 1.77zm-4-4l-1.8-1.8 1.77-1.77 1.8 1.8-1.77 1.77zM68.65 14.36h-2.5v2.5h2.5v-2.5zM68.65 8.84h-2.5v2.5h2.5v-2.5zM74.36 14.36h-2.5v2.5h2.5v-2.5z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M65.46 94.5c8.864 0 16.05-7.186 16.05-16.05S74.324 62.4 65.46 62.4s-16.05 7.186-16.05 16.05S56.596 94.5 65.46 94.5z"
                                                                    fill="url(#page-blank-b96_svg__paint0_linear)"
                                                                ></path>
                                                                <path
                                                                    d="M78 63.78v-2.51h2.5v2.5l-2.5.01zM78 58.58v-2.52h2.5v2.5l-2.5.02zm0-5.22v-2.52h2.5v2.5l-2.5.02zm0-5.21v-2.52h2.5v2.5l-2.5.02zm0-5.21v-2.52h2.5v2.5l-2.5.02zm0-5.21v-2.52h2.5v2.5l-2.5.02zm0-5.22V30h2.5v2.5l-2.5.01zm0-5.21v-2.52h2.5v2.5l-2.5.02zm0-5.21v-2.52h2.5v2.5l-2.5.02zM78 16.87v-2.51h2.5v2.5l-2.5.01zM50.46 93.5h-2.51V91h2.5l.01 2.5zM45.06 93.5h-2.52V91H45l.06 2.5zm-5.41 0h-2.52V91h2.5l.02 2.5zm-5.41 0h-2.52V91h2.5l.02 2.5zm-5.41 0h-2.52V91h2.5l.02 2.5zm-5.41 0H20.9V91h2.5l.02 2.5zM18.01 93.5H15.5V91H18l.01 2.5zM66.71 85.5h-2.5V88h2.5v-2.5zM66.71 69h-2.5v14.1h2.5V69z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <linearGradient
                                                                    id="page-blank-b96_svg__paint0_linear"
                                                                    x1="54.111"
                                                                    y1="89.799"
                                                                    x2="76.809"
                                                                    y2="67.1"
                                                                    gradientUnits="userSpaceOnUse"
                                                                >
                                                                    <stop stop-color="#F0B90B"></stop>
                                                                    <stop offset="0.28" stop-color="#F1BC0F"></stop>
                                                                    <stop offset="0.569" stop-color="#F4C41C"></stop>
                                                                    <stop offset="0.862" stop-color="#F8D230"></stop>
                                                                    <stop offset="0.993" stop-color="#FBDA3C"></stop>
                                                                </linearGradient>
                                                                <clipPath id="page-blank-b96_svg__clip0">
                                                                    <path fill="#fff" d="M0 0h96v96H0z"></path>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <div data-bn-type="text" className="css-rolqze">无记录</div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 移动端 */}
            <div className="css-1no7ynj">
                <div className="css-1l5lpd5">
                    {orderlist.length > 0 ? (
                        orderlist.map((item, index) => {
                            return <div className="css-jg500d" key={index} style={{ margin: '10px 0', borderBottom: '1px solid #eee', paddingBottom: '25px' }}>
                                <div className="css-ymjgx1">
                                    <div data-bn-type="text" className="css-1qp5tsr">订单编号</div>
                                    <div data-bn-type="text" className="css-1r2jm08">{item.loanOrderId}</div>
                                </div>
                                <div className="css-ymjgx1">
                                    <div data-bn-type="text" className="css-1qp5tsr">借款时间</div>
                                    <div data-bn-type="text" className="css-1r2jm08">{formatTime(item.loanTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                                </div>
                                <div className="css-ymjgx1">
                                    <div data-bn-type="text" className="css-1qp5tsr">借款币种</div>
                                    <div data-bn-type="text" className="css-1r2jm08">{item.loanCurrency}</div>
                                </div>
                                <div className="css-moreymjgx1">
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">已借数量</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.loanAmount }</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">抵押币种</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.marginCurrency }</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">质押金额</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.marginAmountOrigin}</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">日利率</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{formatPrice(Number(item.dailyRate) * 100)}%</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">借款期限</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{item.cycle} 个月</div>
                                    </div>
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">到期时间</div>
                                        <div data-bn-type="text" className="css-1r2jm08">{formatTime(item.repayTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                                    </div>
                                    {/* <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">类型</div>
                                        <div data-bn-type="text" className="css-1r2jm08">2020-10-02 19:11:05</div>
                                    </div> */}
                                    <div className="css-ymjgx1">
                                        <div data-bn-type="text" className="css-1qp5tsr">状态</div>
                                        <div data-bn-type="text" className="css-1r2jm08">
                                            {item.status === 4 ? '已还款' : item.status === 5 ? '自动平仓' : item.status === 6 ? '已平仓' : item.status === 7 ? '提前还款' : ''}
                                        </div>
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

            {reimbursementShow && <Reimbursement {...{ setReimbursementShow }}/>}
            {adjustShow && <Adjust {...{ setAdjustShow }}/>}
        </Layout>
    </div>
}
