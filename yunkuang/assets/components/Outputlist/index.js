import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { formatTime, isMobile, isJp, queryParam } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import echarts from 'echarts/lib/echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import './index.scss'
import '../../public/css/react-datepicker.scss'
import Toast from '../../components/Toast'
export default () => {
    const { t } = useTranslation()
    // 解决科学技术问题
    function getFullNum (num) {
        // 处理非数字
        if (isNaN(num)) { return num }
        // 处理不需要转换的数字
        var str = '' + num
        if (!/e/i.test(str)) { return num }
        return (num).toFixed(8).replace(/\.?0+$/, '')
    }
    const { productId } = useParams()
    const dispatch = useDispatch()
    // const startTime = useRef()
    // const overTime = useRef()
    const [flag, setFlag] = useState()
    const [incomelist, setIncomelist] = useState([])
    const [incomeselectlist, setSelectincomelist] = useState([])
    const [xlist, setXlist] = useState([])
    const [ylist, setYlist] = useState([])
    const [hashincome, setHashincome] = useState(
        {
            filTotalIncome: 0,
            filUsdtRate: 0,
            filCnyRate: 0
        }
    )
    const [startstime, setStartstime] = useState(new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
    const [endstime, setendstime] = useState(new Date())
    useEffect(() => {
        dispatch.order.inconeList({}).then((res) => {
            if (res.code === 0) {
                setHashincome(res.data[2])
            }
        })
        dispatch.product.incomeList({
            orderId: productId
        }).then((res) => {
            if (res.code === 0) {
                if (res.data === null) {
                    Toast.info(t('outlist.syk'))
                    return
                }
                const listx = []
                const listy = []
                if (res.data.length > 8) {
                    res.data.slice(0, 7).map((item) => {
                        listx.push(formatTime(item.incomeDayStr, 'MM-dd'))
                        listy.push(item.curReturnMoney)
                    })
                } else {
                    res.data.map((item) => {
                        listx.push(formatTime(item.incomeDayStr, 'MM-dd'))
                        listy.push(item.curReturnMoney)
                    })
                }
                // console.log(listx.reverse())
                // console.log(listy.reverse())
                setXlist(listx.reverse())
                setYlist(listy)
                setIncomelist(res.data)
                setSelectincomelist(res.data)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            Toast.info(t('public.fail'))
            console.log(err)
        })
    }, [])
    useEffect(() => {
        var myChart = echarts.init(document.getElementById('main'))
        const option = {
            title: {
                text: t('outlist.ljhb')
            },
            tooltip: {
                trigger: 'axis',
                position: function (position) {
                    return [position[0], position[1]]
                },
                formatter: '{a0}：{c0}元' + '<br>' + '日期：{b0}'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xlist
            },
            yAxis: {
                type: 'value',
                name: `${t('outlist.ljhbs')}(/USDT)`,
                splitNumber: 3
            },
            series: [{
                name: t('outlist.ljhbs'),
                data: ylist.reverse(),
                type: 'line',
                color: 'rgb(0, 90, 230, 0.8)', // 折线颜色
                // 背景颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#242F44'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            }]
        }
        myChart.setOption(option)
        // console.log(startTime.current.value, overTime.current.value)
    }, [xlist, ylist])
    const handleTolist = useCallback((e) => {
        if (flag === e) {
            setFlag(-1)
        } else {
            setFlag(e)
        }
    }, [flag])
    const handlefallist = useCallback(() => {
        setFlag(-1)
    }, [])
    const handleSelset = useCallback(() => {
        // if (!startTime.current.value && overTime.current.value) {
        //     Toast.info(t('outlist.placone'))
        //     return
        // }
        // if (!overTime.current.value && startTime.current.value) {
        //     Toast.info(t('outlist.plactwo'))
        //     return
        // }
        // if (!startTime.current.value && !overTime.current.value) {
        //     setIncomelist(incomeselectlist)
        //     return
        // }
        // const a = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
        // if (!a.test(startTime.current.value) || !a.test(overTime.current.value)) {
        //     Toast.info(t('outlist.gsfail'))
        //     return
        // }
        const selctlist = []
        incomeselectlist.map((item) => {
            if (Date.parse(startstime) <= Date.parse(item.incomeDayStr) && Date.parse(item.incomeDayStr) <= Date.parse(endstime)) {
                selctlist.push(item)
            }
        })
        setIncomelist(selctlist)
    }, [incomeselectlist, startstime, endstime])
    return <div>
        {!isMobile() ? '' : <Header title={t('outlist.syc')}/>}
        <div className="output">
            <div className="output-top-t" style={{ display: incomelist[0]?.jointMiningType === 3 ? 'block' : 'none' }}>
                <div className="output-top">
                    <div className="output-top-left" id="main"></div>
                    <div className="output-top-right">
                        <p>
                            <span>{t('outlist.dqzt')}：</span>
                            <span style={{ color: incomelist.length > 0 ? (incomelist[0].totalReturnMoney < incomelist[0].totalCostMoney) ? 'rgb(0, 90, 230, 0.9)' : '' : '' }}>{incomelist.length > 0 ? (incomelist[0].totalReturnMoney < incomelist[0].totalCostMoney) ? t('outlist.hbq') : t('outlist.syfpq') : ''}</span>
                        </p>
                        <p>
                            <span>{t('outlist.kjzb')}：</span>
                            <span>{incomelist.length > 0 ? Number(incomelist[0].totalCostMoney).toFixed(2) : 0}USDT</span>
                        </p>
                        {incomelist.length > 0 && incomelist[0].incomeCurrency === 'FIL' ? (
                            <div>
                                <p>
                                    <span>{t('outlist.ktxhb')}：</span>
                                    <span style={{ color: '#00bb7f' }}>{incomelist.length > 0 ? ((incomelist[0].totalReturnMoney / incomelist[0].totalCostMoney) * 100).toFixed() : 0}%</span>
                                </p>
                                { isJp ? (
                                    <p>
                                        <span>{t('outlist.wkcchb')}：</span>
                                        <span style={{ color: '#00bb7f' }}>{incomelist.length > 0 ? (((Number(queryParam('income')) * Number(hashincome.filUsdtRate)) / incomelist[0].totalCostMoney) * 100).toFixed() : 0}%</span>
                                    </p>
                                ) : (
                                    <p>
                                        <span>{t('outlist.wkcchb')}：</span>
                                        <span style={{ color: '#00bb7f' }}>{incomelist.length > 0 ? (((Number(queryParam('income')) * Number(hashincome.filCnyRate)) / incomelist[0].totalCostMoney) * 100).toFixed() : 0}%</span>
                                    </p>
                                )}
                            </div>
                        ) : (
                            <p>
                                <span>{t('outlist.hbjd')}：</span>
                                <span style={{ color: '#00bb7f' }}>{incomelist.length > 0 ? ((incomelist[0].totalReturnMoney / incomelist[0].totalCostMoney) * 100).toFixed() : 0}%</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="output-bottom">
                <div className="output-bottom-top">
                    <div className="output-bottom-top-t">{t('outlist.symx')}</div>
                    <div className="output-bottom-top-r">
                        <DatePicker
                            selected={startstime}
                            dateFormat='yyyy-MM-dd'
                            lang="zh-cn"
                            onChange={(data) => {
                                setStartstime(data)
                                // console.log(data)
                            }} />
                        {/* <input type="text" placeholder={t('outlist.startime')} ref={startTime}/> */}
                        <span style={{ lineHeight: '35px', margin: '0 15px' }}>—</span>
                        <DatePicker
                            selected={endstime}
                            dateFormat='yyyy-MM-dd'
                            // showTimeSelect
                            // lang="zh-cn"
                            onChange={(data) => {
                                setendstime(data)
                                // console.log(data)
                            }} />
                        {/* <input type="text" placeholder={t('outlist.endtime')} ref={overTime}/> */}
                        <button className="search-btn" onClick={() => {
                            handleSelset()
                        }}>{t('outlist.cx')}</button>
                    </div>
                </div>
                {Array.isArray(incomelist) && incomelist.map((item, index) => {
                    return <div className="output-bottom-con" key={index}>
                        <ul>
                            <li>
                                <p>{t('outlist.rq')}</p>
                                <p>{item.incomeDayStr}</p>
                            </li>
                            <li>
                                <p>
                                    <span>{t('outlist.drsy')}</span>
                                    {/* <span className="output-bottom-con-p-span" style={{ display: item?.jointMiningType === 3 ? '' : 'none' }}>({t('outlist.syfc')}:{item.userPercent * 100}%)</span> */}
                                </p>
                                <p>{getFullNum(item.userIncome)} {item.incomeCurrency}</p>
                            </li>
                            <li>
                                <p>{t('outlist.syjz')}</p>
                                <p>{(Number(item.userIncome) * Number(item.coinUsdtRate)).toFixed(2)} USDT</p>
                            </li>
                            <li>
                                <p>
                                    <span>{t('outlist.dfzf')}</span>
                                </p>
                                <p>
                                    {item.electricFee > 0 ? t('outlist.sydk') : t('outlist.yyj')}
                                </p>
                            </li>
                            <li>
                                {item.electricFee > 0 ? (
                                    <p>{t('outlist.sydkdf')}</p>
                                ) : (
                                    <p>{t('outlist.dfdk')}</p>
                                )}
                                <p className="output-bottom-con-posit">
                                    {item.electricFee > 0 ? (
                                        <span>{item.electricFee === null ? '-' : item.electricFee} {item.incomeCurrency}</span>
                                    ) : (
                                        <span>0</span>
                                    )}
                                    {/* <span className="output-bottom-con-diff" style={{ color: item.diffPercent >= 0 ? '#00bb7f' : '#dc1e1e' }}>{item.diffPercent === null ? '' : item.diffPercent > 0 ? '+' + (item.diffPercent * 1000 / 10).toFixed(2) + '%' : item.diffPercent === 0 ? '' : (item.diffPercent * 100).toFixed(2) + '%'}</span> */}
                                </p>
                            </li>
                            <li>
                                {flag !== index && <p onClick={() => {
                                    handleTolist(index)
                                }}>{t('outlist.more')}</p>}
                            </li>
                        </ul>
                        <ol style={{ display: flag === index ? 'flex' : 'none' }}>
                            <li></li>
                            <li>
                                <p>{t('outlist.drc')}</p>
                                <p>{item.incomeCurrency === 'FIL' ? getFullNum(item.digIncomeFil) : getFullNum(item.totalIncome)} {item.incomeCurrency}</p>
                            </li>
                            <li>
                                <p>{t('outlist.glfkc')}</p>
                                <p>{item.operationFee === null ? '-' : Number(item.operationFee).toFixed(8)} {item.incomeCurrency}</p>
                            </li>
                            <li>
                                <p>{t('outlist.hbsykc')}</p>
                                <p>{item.platformIncome === null ? '-' : Number(item.platformIncome).toFixed(8)} {item.incomeCurrency}</p>
                            </li>
                            <li>
                                <p>{t('outlist.jsbj')}</p>
                                <p>{Number(item.coinUsdtRate).toFixed(2)} USDT</p>
                            </li>
                            <li>
                                <p onClick={() => {
                                    handlefallist()
                                }}>{t('outlist.sq')}</p>
                            </li>
                        </ol>
                    </div>
                })}
            </div>
        </div>
    </div>
}
