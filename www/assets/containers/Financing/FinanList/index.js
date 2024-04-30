import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/zh-cn'
import zhCN from 'rc-calendar/lib/locale/zh_CN'
import RangeCalendars from 'rc-calendar/lib/RangeCalendar'

import './index.scss'

import dateicon from '../../../public/img/finance/dateicon.png'
import searchicon from '../../../public/img/finance/search_icon.png'
import downpoint from '../../../public/img/finance/down_i.png'
import lighticon from '../../../public/img/finance/lighticon.png'
import preimg from '../../../public/img/prepage.png'
import nextimg from '../../../public/img/nextpage.png'
import { getFinancelist } from '../../../redux/actions/finance'
import { formattingNum } from '../../../public/js/other'
import Pagination from '../../../../_multiappsharing/components/Pagination'
import Toast from '../../../../_multiappsharing/components/Toast'

export default () => {
    const dispatch = useDispatch()
    const { financeList, productTypelist } = useSelector((state) => ({
        financeList: state.finance.financeList,
        productTypelist: state.finance.productTypelist
    }))
    const [finenlist, setFinenlist] = useState(financeList)
    const classcolor = ['', 'five-second-item', 'five-thend-item']
    const [otherflg, setOtherflg] = useState(false)
    const [current, setCurrent] = useState(1)
    const [amountflg, setAmountflg] = useState(false)
    const [minmoney, setMinmoney] = useState(0)
    const [maxmoney, setMaxmoney] = useState('max')

    const [productflg, setProductflg] = useState(false)
    const [producttype, setProducttype] = useState('')
    const [searchname, setSearchname] = useState('')
    const [selecttime, setSelecttime] = useState('选择日期')
    const [timeflag, setTimeflag] = useState(false)
    const [starttime, setStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
    const [quantity, setQuantity] = useState('融资金额')
    // useEffect(() => {
    //     getFinance()
    // }, [current, producttype])
    // 获取融资列表
    const getFinance = useCallback((page, type) => {
        setCurrent(page)
        let catetype = ''
        if (type) {
            catetype = type
        }
        setProducttype(catetype)
        const params = {
            currentPage: page,
            pageSize: 20,
            category: catetype,
            projectName: searchname,
            minInvestDate: starttime,
            maxInvestDate: endtime,
            minAmount: minmoney === 'min' ? 0 : Number(minmoney) * 1000000,
            maxAmount: maxmoney === 'max' ? 2100000000 : Number(maxmoney) * 1000000
        }
        dispatch(getFinancelist(params)).then((res) => {
            if (res.code === 1) {
                setFinenlist(res.obj)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [current, minmoney, maxmoney, producttype, searchname, starttime, endtime])
    // 筛选价钱列表
    const amountlist = ['< $1M', '$1M - 5M', '$5M - 10M', '$10M >']
    // 筛选时间列表
    let nowTime = new Date()
    const stimelist = [
        {
            name: '最近7日',
            stime: nowTime.getTime() - 3600 * 1000 * 24 * 7,
            etime: nowTime.getTime()
        },
        {
            name: '最近30日',
            stime: nowTime.getTime() - 3600 * 1000 * 24 * 30,
            etime: nowTime.getTime()
        },
        {
            name: '本月',
            stime: new Date(nowTime.getFullYear(), nowTime.getMonth(), 1).getTime(),
            etime: new Date(nowTime.getFullYear(), nowTime.getMonth() + 1, 0).getTime() + 24 * 60 * 60 * 1000 - 1
        },
        {
            name: '上月',
            stime: new Date(nowTime.getFullYear(), nowTime.getMonth() - 1, 1).getTime(),
            etime: new Date(nowTime.getFullYear(), nowTime.getMonth(), 0).getTime() + 24 * 60 * 60 * 1000 - 1
        },
        {
            name: '今年',
            stime: new Date(nowTime.getFullYear(), 0).getTime(),
            etime: new Date(nowTime.getFullYear(), 11, 31).getTime() + 24 * 60 * 60 * 1000 - 1
        },
        {
            name: '全部',
            stime: '',
            etime: ''
        }
    ]
    // 确认通过时间筛选
    const timesureFn = useCallback(() => {
        getFinance(1)
        setTimeflag(false)
    }, [])
    // 选择筛选价格
    const selectAmount = useCallback((index) => {
        if (index === 0) {
            setMinmoney('min')
            setMaxmoney('1')
            setQuantity('$min - 1M')
        }
        if (index === 1) {
            setMinmoney('1')
            setMaxmoney('5')
            setQuantity('$1M - 5M')
        }
        if (index === 2) {
            setMinmoney('5')
            setMaxmoney('10')
            setQuantity('$5M - 10M')
        }
        if (index === 3) {
            setMinmoney('10')
            setMaxmoney('max')
            setQuantity('$10M - max')
        }
    }, [])
    // 确认通过价格筛选
    const amountsureFn = useCallback(() => {
        if (minmoney !== 'min' && maxmoney !== 'max') {
            setQuantity(`$${minmoney}M - ${maxmoney}M`)
        }
        getFinance(1)
        setAmountflg(false)
    }, [minmoney, maxmoney, getFinance])
    // 搜索名称获取融资列表
    const searchFn = useCallback(() => {
        getFinance(1)
    }, [getFinance])
    // 回车执行
    useEffect(() => {
        window.onkeyup = function (event) {
            if (event.keyCode === 13) {
                getFinance(1)
            }
        }
    }, [getFinance])
    // 点击其他地方隐藏下拉列表
    const hideAllMenu = useCallback(() => {
        setAmountflg(false)
        setProductflg(false)
        setTimeflag(false)
    })
    useEffect(() => {
        document.addEventListener('click', hideAllMenu)
    }, [hideAllMenu])
    return <div className="finanlist">
        <h3>最新融资事件</h3>
        <div className="finanlist-header">
            <div className="select-list">
                <div className="select-list-item list-item-data">
                    <div className="item-select" onClick={(e) => {
                        setTimeflag(!timeflag)
                        e.nativeEvent.stopImmediatePropagation()
                    }}>
                        <span>{selecttime}</span>
                        <div className="list-item-img">
                            <img src={dateicon} alt=""/>
                        </div>
                    </div>
                    {timeflag && <div className="select-amount" onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation()
                    }}>
                        <div className="data-select">
                            <RangeCalendars
                                showDateInput={false}
                                onSelect={(e) => {
                                    setStarttime(new Date(moment(e[0]._d).format('YYYY/MM/DD')).getTime() / 1000)
                                    setEndtime(new Date(moment(e[1]._d).format('YYYY/MM/DD')).getTime() / 1000)
                                    setSelecttime(moment(e[0]._d).format('YYYY/MM/DD') + ' - ' + moment(e[1]._d).format('YYYY/MM/DD'))
                                }}
                                locale={zhCN}
                            />
                            <div className="data-select-right">
                                {stimelist.map((item, index) => {
                                    return <div
                                        className="select-data-item"
                                        key={index}
                                        onClick={() => {
                                            if (item.stime === '' && item.etime === '') {
                                                setStarttime('')
                                                setEndtime('')
                                                setSelecttime('选择日期')
                                            } else {
                                                setStarttime(parseInt(item.stime / 1000))
                                                setEndtime(parseInt(item.etime / 1000))
                                                setSelecttime(moment(item.stime).format('YYYY/MM/DD') + ' - ' + moment(item.etime).format('YYYY/MM/DD'))
                                            }
                                        }}
                                    >{item.name}</div>
                                })}
                            </div>
                        </div>
                        <div className="data-select-btn">
                            <div className="data-btn-item" onClick={() => {
                                setTimeflag(false)
                                setSelecttime('选择日期')
                            }}>取消</div>
                            <div className="data-btn-item" onClick={timesureFn}>确定</div>
                        </div>
                    </div>}
                </div>
                <div className="select-list-item">
                    <div className="item-select" onClick={(e) => {
                        setAmountflg(!amountflg)
                        e.nativeEvent.stopImmediatePropagation()
                    }}>
                        <span>{quantity}</span>
                        <div className={`list-item-img little-img ${amountflg && 'rotate-img'}`}>
                            <img src={downpoint} alt=""/>
                        </div>
                    </div>
                    {amountflg && <div className="select-amount" onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation()
                    }}>
                        <div className="selelct-amount-con">
                            <div className="selelct-amount-con-left">
                                <div className="amount-left-num">
                                    <p>最小</p>
                                    <div className="amount-left-num-white">
                                        <input type="text" value={minmoney} onChange={(e) => {
                                            setMinmoney(e.target.value)
                                        }}/>
                                        <span>M</span>
                                    </div>
                                </div>
                                <div className="amount-left-num bottom-max">
                                    <p>最大</p>
                                    <div className="amount-left-num-white">
                                        <input type="text" value={maxmoney} onChange={(e) => {
                                            setMaxmoney(e.target.value)
                                        }}/>
                                        <span>M</span>
                                    </div>
                                </div>
                            </div>
                            <div className="selelct-amount-con-right">
                                {amountlist.map((item, index) => {
                                    return <div
                                        className="right-select-mount"
                                        key={index}
                                        onClick={() => {
                                            selectAmount(index)
                                        }}
                                    >{item}</div>
                                })}
                            </div>
                        </div>
                        <div className="select-sure-btn">
                            <div className="select-item-btn btn-cancal" onClick={() => {
                                setAmountflg(false)
                            }}>取消</div>
                            <div className="select-item-btn btn-sure" onClick={(e) => {
                                amountsureFn()
                                e.nativeEvent.stopImmediatePropagation()
                            }}>确定</div>
                        </div>
                    </div>}
                </div>
                <div className="select-list-item">
                    <div className="item-select" onClick={(e) => {
                        setProductflg(!productflg)
                        e.nativeEvent.stopImmediatePropagation()
                    }}>
                        <span>{producttype === '' ? '项目名称' : producttype}</span>
                        <div className={`list-item-img little-img ${productflg && 'rotate-img'}`}>
                            <img src={downpoint} alt=""/>
                        </div>
                    </div>
                    {productflg && <div className="select-amount">
                        <div className="select-product-item" onClick={() => {
                            getFinance(1)
                        }}>All</div>
                        {productTypelist.length > 0 && productTypelist.map((item, index) => {
                            return <div className="select-product-item" key={index} onClick={() => {
                                getFinance(1, item)
                            }}>{item}</div>
                        })}
                    </div>}
                </div>
                <div className="select-list-item">
                    <input className="list-item-search" type="text" placeholder="输入项目名称搜索" onChange={(e) => {
                        setSearchname(e.target.value)
                    }}/>
                    <div className="list-item-img" onClick={searchFn}>
                        <img src={searchicon} alt=""/>
                    </div>
                </div>
            </div>
            <div className="finanlist-header-right">
                <img src={lighticon} alt=""/>
                <p>1 - 10 of 28</p>
            </div>
        </div>
        <div className="finanlist-center">
            <div className="finanlist-center-top">
                <div className="center-item-one">#</div>
                <div className="center-item-two">项目</div>
                <div className="center-item-three">融资日期</div>
                <div className="center-item-four">融资金额</div>
                <div className="center-item-five">项目类型</div>
                <div className="center-item-six">投资机构</div>
            </div>
            {finenlist.inforList.length > 0 && finenlist.inforList.map((item, index) => {
                const categorylist = item.category.split(',')
                const investlist = item.orgList.length > 3 ? item.orgList.slice(0, 3) : item.orgList
                const otherinverst = item.orgList.length > 3 ? item.orgList.slice(3, item.orgList.length) : []
                return <div className="finanlist-center-top finanlist-center-list" key={index}>
                    <div className="center-item-one one-item-number">{`0` + `${index + 1 + (current - 1) * 20}`}</div>
                    <a href={`/financedetail/${item.projectId}`} target="_blank">
                        <div className="center-item-two">
                            <img src={item.projectLogoUrl} alt=""/>
                            <p>{item.projectName}</p>
                        </div>
                    </a>
                    <div className="center-item-three">{moment(item.investDate).format('YYYY年MM月DD日')}</div>
                    <div className="center-item-four">${formattingNum(item.amount)}</div>
                    <div className="center-item-five">
                        {categorylist.map((item, index) => {
                            return <div className={`five-item ${classcolor[index]}`} key={index}>{item}</div>
                        })}
                    </div>
                    <div className="center-item-six">
                        <div className="invest-list">
                            {investlist.map((item, index) => {
                                return <a href="" key={index}>
                                    <img src={item.logoUrl} alt=""/>
                                </a>
                            })}
                            {otherinverst.length > 0 && otherflg !== index && <span className="invest-list-num" onClick={() => {
                                setOtherflg(index)
                            }}>{'+' + otherinverst.length}</span>}
                        </div>
                        {otherinverst.length > 0 && otherflg === index && <div className="other-invest">
                            {otherinverst.map((item, index) => {
                                return <a href="" key={index}>
                                    <img src={item.logoUrl} alt=""/>
                                </a>
                            })}
                        </div>}
                    </div>
                </div>
            })}
        </div>
        {finenlist.inforList.length > 0 && <Pagination
            // currentPage={1}
            totalData={financeList.recordCount}
            pageSize={20}
            pageChange={(curPage) => {
                setCurrent(curPage)
                getFinance(curPage)
            }}
            prevTxt={
                <>
                    <img src={preimg} alt=""/>
                </>
            }
            nextTxt={
                <>
                    <img src={nextimg} alt=""/>
                </>
            }
        />}
    </div>
}
