import React, { useState, useCallback } from 'react'
import RangeCalendars from 'rc-calendar/lib/RangeCalendar'
// import { useDispatch } from 'react-redux'
import moment from 'moment'
import 'moment/locale/zh-cn'
import zhCN from 'rc-calendar/lib/locale/zh_CN'

import './index.scss'

import screenimg from '../../../../public/img/finance/screenicon.png'
import pointdown from '../../../../public/img/finance/point_down_w.png'
import notselectimg from '../../../../public/img/finance/notselect_icon.png'
import selectingimg from '../../../../public/img/finance/selecting_icon.png'
// import { getFinancelist } from '../../../../redux/actions/finance'
// import Toast from '../../../../../_multiappsharing/components/Toast'

export default (props) => {
    const { catelist, getPruductlist } = props
    // console.log(page)
    // const dispatch = useDispatch()
    const [screenflg, setScreenflg] = useState(false)
    const [satetype, setSatetype] = useState(-1)
    const [starttime, setStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
    const [selecttime, setSelecttime] = useState('投资时间（全部）')
    const [minmoney, setMinmoney] = useState(0)
    const [maxmoney, setMaxmoney] = useState('max')
    const [producttype, setProducttype] = useState('')
    const [quantity, setQuantity] = useState('融资金额')
    const [selectType, setSelectType] = useState(-1)
    // const [searchname, setSearchname] = useState('')
    const selectamount = ['< $1M', '$1M - 5M', '$5M - 10M', '$10M >']
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
    // 确认通过价格筛选
    const amountsureFn = useCallback(() => {
        if (minmoney !== 'min' && maxmoney !== 'max') {
            setQuantity(`$${minmoney}M - ${maxmoney}M`)
        }
        getFinance()
        setSelectType(-1)
        setScreenflg(false)
    }, [minmoney, maxmoney])
    const screeninglist = [
        {
            name: selecttime,
            center: <div className="acreening-item-down">
                <div className="select-m-time">
                    <div className="select-m-time-top">
                        {stimelist.map((item, index) => {
                            return <div className="m-time-top-item" key={index} onClick={() => {
                                if (item.stime === '' && item.etime === '') {
                                    setStarttime('')
                                    setEndtime('')
                                    setSelecttime('选择日期')
                                } else {
                                    setStarttime(parseInt(item.stime / 1000))
                                    setEndtime(parseInt(item.etime / 1000))
                                    setSelecttime(moment(item.stime).format('YYYY/MM/DD') + ' - ' + moment(item.etime).format('YYYY/MM/DD'))
                                }
                            }}>{item.name}</div>
                        })}
                    </div>
                    <div className="select-m-time-bottom">
                        <RangeCalendars
                            showDateInput={false}
                            onSelect={(e) => {
                                setStarttime(new Date(moment(e[0]._d).format('YYYY/MM/DD')).getTime() / 1000)
                                setEndtime(new Date(moment(e[1]._d).format('YYYY/MM/DD')).getTime() / 1000)
                                setSelecttime(moment(e[0]._d).format('YYYY/MM/DD') + ' - ' + moment(e[1]._d).format('YYYY/MM/DD'))
                            }}
                            locale={zhCN}
                        />
                    </div>
                    <div className="m-item-btn">
                        <div className="m-item-btn-item" onClick={() => {
                            setSelectType(-1)
                        }}>取消</div>
                        <div className="m-item-btn-item" onClick={() => {
                            getFinance()
                            setSelectType(-1)
                            setScreenflg(false)
                        }}>确定</div>
                    </div>
                </div>
            </div>,
            flage: false,
            type: 0
        },
        {
            name: quantity,
            center: <div className="acreening-item-down">
                <div className="select-m-amount">
                    <div className="m-amount-top">
                        <div className="white-amount">
                            <h4>最小</h4>
                            <div className="white-amount-b">
                                <input type="text" value={minmoney} onChange={(e) => {
                                    setMinmoney(e.target.value)
                                }} />
                                <span>M</span>
                            </div>
                        </div>
                        <div className="white-amount">
                            <h4>最大</h4>
                            <div className="white-amount-b">
                                <input type="text" value={maxmoney} onChange={(e) => {
                                    setMinmoney(e.target.value)
                                }}/>
                                <span>M</span>
                            </div>
                        </div>
                    </div>
                    <div className="m-amount-bottom">
                        {selectamount.map((itm, indx) => (
                            <div className="m-amount-bottom-item" key={indx} onClick={() => {
                                selectMamount(indx)
                            }}>{itm}</div>
                        ))}
                    </div>
                    <div className="m-amount-btn">
                        <div className="m-amount-btn-item" onClick={() => {
                            setSelectType(-1)
                        }}>取消</div>
                        <div className="m-amount-btn-item" onClick={() => {
                            amountsureFn()
                        }}>确定</div>
                    </div>
                </div>
            </div>,
            flage: false,
            type: 1
        },
        {
            name: selecttime,
            center: <div className="acreening-item-down">
                <div className="categary-list">
                    <div className="categary-list-item" onClick={() => {
                        setSatetype(-1)
                    }}>
                        <span>项目类型（全部）</span>
                        <img src={satetype === -1 ? selectingimg : notselectimg} alt=""/>
                    </div>
                    {catelist.map((item, index) => {
                        return <div className="categary-list-item" key={index} onClick={() => {
                            setScreenflg(false)
                            setSelectType(-1)
                            getFinance(item)
                            setSatetype(index)
                        }}>
                            <span>{item}</span>
                            <img src={satetype === index ? selectingimg : notselectimg} alt=""/>
                        </div>
                    })}
                </div>
            </div>,
            flage: false,
            type: 2
        }
    ]
    // 获取融资列表
    const getFinance = useCallback((page, type) => {
        let catetype = ''
        if (type) {
            catetype = type
        }
        setProducttype(catetype)
        const params = {
            pageSize: 20,
            category: catetype,
            projectName: '',
            minInvestDate: starttime,
            maxInvestDate: endtime,
            minAmount: minmoney === 'min' ? 0 : Number(minmoney) * 1000000,
            maxAmount: maxmoney === 'max' ? 2100000000 : Number(maxmoney) * 1000000
        }
        getPruductlist(params)
        // dispatch(getFinancelist(params)).then((res) => {
        //     if (res.code === 1) {
        //         getPruductlist(res.obj)
        //     } else {
        //         Toast.info(res.msg)
        //     }
        // })
    }, [minmoney, maxmoney, producttype, starttime, endtime])
    // 选择筛选价格
    const selectMamount = useCallback((index) => {
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
    return <div className="finan-m-header">
        <div className="finan-header-top">
            <h3>最新融资事件</h3>
            <div className="fin-screening" onClick={() => {
                setScreenflg(!screenflg)
            }}>
                <img src={screenimg} alt=""/>
            </div>
        </div>
        {screenflg && <div className="screening-info">
            {screeninglist.map((item, index) => {
                return <div className="screening-info-item" key={index}>
                    <div className="acreening-item-con" onClick={() => {
                        if (selectType === index) {
                            setSelectType(-1)
                        } else {
                            setSelectType(index)
                        }
                    }}>
                        <span>{item.name}</span>
                        <img src={pointdown} alt=""/>
                    </div>
                    {selectType === index && item.center}
                </div>
            })}
        </div>}
    </div>
}
