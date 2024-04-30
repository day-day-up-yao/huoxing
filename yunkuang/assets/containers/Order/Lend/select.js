import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import '../../../public/css/react-datepicker.scss'
import times from '../../../public/imgs/new/times.png'
import downs from '../../../public/imgs/new/listdown.png'
import './index.scss'
import Toast from '../../../components/Toast'
export default ({ startnum, setOrderlist, setHklist, setTzlist, setPclist, setOrderlisthy }) => {
    const dispatch = useDispatch()
    const orderCodeid = useRef()
    // const { loanCurrencies, marginCurrencies } = useSelector((state) => ({
    //     loanCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.loanCurrencies) || [],
    //     marginCurrencies: (state.loan.fixedLoadDetail && state.loan.fixedLoadDetail.marginCurrencies) || []
    // }))
    const [loanCurrencies, setLoanCurrencies] = useState([])
    const [marginCurrencies, setMarginCurrencies] = useState([])
    const states = [
        { value: '-1', name: '全部' },
        { value: '1', name: '用户已抵押' },
        { value: '2', name: '已放款' },
        { value: '3', name: '计息中' }
    ]
    const pclist = [
        {
            value: '1',
            name: '全部'
        }, {
            value: '0',
            name: '进行中'
        }, {
            value: '1',
            name: '已平仓'
        }
    ]
    const options = [
        {
            value: 0,
            name: '全部'
        }, {
            value: '0',
            name: '转入调低'
        }, {
            value: '1',
            name: '转出调高'
        }
    ]
    const [attime, setAttime] = useState(new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000 * 90), 'yyyy-MM-dd')
    const [edtime, setEdtime] = useState(new Date())
    const [loanflag, setLoanflag] = useState(
        {
            flage: false,
            title: '借款币种',
            type: 0
        }
    )
    const [loanflage, setLoanflage] = useState(
        {
            flage: false,
            title: '还款币种',
            type: 0
        }
    )
    const [marginflag, setMarginflag] = useState(
        {
            flage: false,
            title: '抵押币种',
            type: 0
        }
    )
    const [tzflag, setTzflag] = useState(
        {
            flage: false,
            title: '调整方向',
            type: 0
        }
    )
    const [ztflag, setZtflag] = useState(
        {
            flage: false,
            title: '状态',
            type: 0
        }
    )
    const [statenum, setStatenum] = useState([1, 2, 3])
    useEffect(() => {
        dispatch.loan.fixedLoadDetail().then((res) => {
            if (res.code === 0) {
                setLoanCurrencies(res.data.loanCurrencies)
                setMarginCurrencies(res.data.marginCurrencies)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const handleSearch = useCallback(() => {
        if (startnum === 0) {
            dispatch.loan.fixedLoadOrders({
                startTime: Date.parse(attime),
                endTime: Date.parse(edtime),
                loanCurrency: loanflag.title === '借款币种' ? '' : loanflag.title,
                orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                statusList: statenum
            }).then((res) => {
                if (res.code === 0) {
                    setOrderlist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (startnum === 1) {
            dispatch.loan.paybackHistory({
                startTime: Date.parse(attime),
                endTime: Date.parse(edtime),
                orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                symbol: loanflage.title === '还款币种' ? '' : loanflage.title
            }).then((res) => {
                if (res.code === 0) {
                    setHklist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (startnum === 2) {
            dispatch.loan.pledgeChange({
                startTime: Date.parse(attime),
                endTime: Date.parse(edtime),
                orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                marginCurrency: marginflag.title === '抵押币种' ? '' : marginflag.title,
                side: tzflag.type
            }).then((res) => {
                if (res.code === 0) {
                    setTzlist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (startnum === 3) {
            dispatch.loan.coveredOrders({
                startTime: Date.parse(attime),
                endTime: Date.parse(edtime),
                orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                marginCurrency: marginflag.title === '抵押币种' ? '' : marginflag.title,
                loanCurrency: loanflag.title === '借款币种' ? '' : loanflag.title,
                coverStatus: statenum
            }).then((res) => {
                if (res.code === 0) {
                    setPclist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (startnum === 4) {
            dispatch.loan.fixedLoadOrders({
                startTime: Date.parse(attime),
                endTime: Date.parse(edtime),
                orderId: orderCodeid.current.value === '' ? null : orderCodeid.current.value,
                marginCurrency: marginflag.title === '抵押币种' ? '' : marginflag.title,
                loanCurrency: loanflag.title === '借款币种' ? '' : loanflag.title
            }).then((res) => {
                if (res.code === 0) {
                    setOrderlisthy(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    })
    return <div className="select">
        <div className="select-l">订单明细</div>
        <div className="select-r">
            <div className="r-number">
                <input type="text" placeholder='请输入订单编号' ref={orderCodeid}/>
            </div>
            <div className="r-number">
                <div className="r-number-img">
                    <img src={times} alt=""/>
                </div>
                <DatePicker selected={attime}
                    dateFormat='yyyy-MM-dd'
                    onChange={(data) => {
                        setAttime(data)
                    }} />
            </div>
            <div className="r-number">
                <div className="r-number-img">
                    <img src={times} alt=""/>
                </div>
                <DatePicker selected={edtime}
                    dateFormat='yyyy-MM-dd'
                    onChange={(data) => {
                        setEdtime(data)
                    }} />
            </div>
            {(startnum === 0 || startnum === 4 || startnum === 3) && <div className="r-number">
                <div className="r-number-b" onClick={() => {
                    setLoanflag(
                        {
                            flage: true,
                            title: '借款币种',
                            type: 0
                        }
                    )
                }}>
                    <div className='r-number-text'>{loanflag.title}</div>
                    <div className="pointdown">
                        <img src={downs} alt=""/>
                    </div>
                </div>
                <div className="r-number-list" style={{ display: loanflag.flage ? 'block' : '' }}>
                    {loanCurrencies.map((item, index) => {
                        return <div key={index} onClick={() => {
                            setLoanflag(
                                {
                                    flage: false,
                                    title: item.currency,
                                    type: index + 1
                                }
                            )
                        }}>{item.currency}</div>
                    })}
                </div>
            </div>}
            {startnum === 1 && <div className="r-number">
                <div className="r-number-b" onClick={() => {
                    setLoanflage(
                        {
                            flage: true,
                            title: '还款币种',
                            type: 0
                        }
                    )
                }}>
                    <div className='r-number-text'>{loanflage.title}</div>
                    <div className="pointdown">
                        <img src={downs} alt=""/>
                    </div>
                </div>
                <div className="r-number-list" style={{ display: loanflage.flage ? 'block' : '' }}>
                    {loanCurrencies.map((item, index) => {
                        return <div key={index} onClick={() => {
                            setLoanflage(
                                {
                                    flage: false,
                                    title: item.currency,
                                    type: 0
                                }
                            )
                        }}>{item.currency}</div>
                    })}
                </div>
            </div>}
            {(startnum === 2 || startnum === 4 || startnum === 3) && <div className="r-number">
                <div className="r-number-b" onClick={() => {
                    setMarginflag(
                        {
                            flage: true,
                            title: '抵押币种',
                            type: 0
                        }
                    )
                }}>
                    <div className='r-number-text'>{marginflag.title}</div>
                    <div className="pointdown">
                        <img src={downs} alt=""/>
                    </div>
                </div>
                <div className="r-number-list" style={{ display: marginflag.flage ? 'block' : '' }}>
                    {marginCurrencies.map((item, index) => {
                        return <div key={index} onClick={() => {
                            setMarginflag(
                                {
                                    flage: false,
                                    title: item.currency,
                                    type: 0
                                }
                            )
                        }}>{item.currency}</div>
                    })}
                </div>
            </div>}
            {startnum === 2 && <div className="r-number">
                <div className="r-number-b" onClick={() => {
                    setTzflag(
                        {
                            flage: true,
                            title: '调整方向',
                            type: 0
                        }
                    )
                }}>
                    <div className='r-number-text'>{tzflag.title}</div>
                    <div className="pointdown">
                        <img src={downs} alt=""/>
                    </div>
                </div>
                <div className="r-number-list" style={{ display: tzflag.flage ? 'block' : '' }}>
                    {options.map((item, index) => {
                        return <div key={index} onClick={() => {
                            setTzflag(
                                {
                                    flage: false,
                                    title: item.name,
                                    type: item.value
                                }
                            )
                        }}>{item.name}</div>
                    })}
                </div>
            </div>}
            {(startnum === 0 || startnum === 3) && <div className="r-number">
                <div className="r-number-b" onClick={() => {
                    setZtflag(
                        {
                            flage: true,
                            title: '状态',
                            type: 0
                        }
                    )
                }}>
                    <div className='r-number-text'>{ztflag.title}</div>
                    <div className="pointdown">
                        <img src={downs} alt=""/>
                    </div>
                </div>
                <div className="r-number-list" style={{ display: ztflag.flage ? 'block' : '' }}>
                    {(startnum === 3 ? pclist : states).map((item, index) => {
                        return <div key={index} onClick={() => {
                            setZtflag(
                                {
                                    flage: false,
                                    title: item.name,
                                    type: index + 1
                                }
                            )
                            if (startnum === 0) {
                                if (item.name === '全部') {
                                    setStatenum([1, 2, 3])
                                } else {
                                    setStatenum([item.value])
                                }
                            } else if (startnum === 3) {
                                if (item.name === '全部') {
                                    setStatenum()
                                } else {
                                    if (item.value === '1') {
                                        setStatenum([1, 2])
                                    } else if (item.value === '0') {
                                        setStatenum([0])
                                    }
                                }
                            }
                        }}>{item.name}</div>
                    })}
                </div>
            </div>}
            <div className="r-btn" onClick={handleSearch}>搜索</div>
        </div>
    </div>
}
