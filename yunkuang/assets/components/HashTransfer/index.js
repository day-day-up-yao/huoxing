import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import Header from './hashheader'
import Listone from './listone'
import Listtwo from './listtwo'
import './index.scss'
export default ({ isSecure }) => {
    // console.log(isSecure)
    const dispatch = useDispatch()
    const { i18n, t } = useTranslation()
    const [myhasrate, setMyhashrate] = useState([])
    const [minlist, setMinlist] = useState([])
    const [payelectirc, setPayelectirc] = useState([])
    const [idstr, setIdstr] = useState('') // 预先支付id
    const [incomeid, setIncomeid] = useState('') // 收益支付id
    const [electype, setElectype] = useState(1) // 电费支付方式 1 按天数缴费 2 按金额缴费
    const [activelist, setActivelist] = useState([])
    useEffect(() => {
        dispatch.order.inconeList({}).then((res) => {
            if (res.code === 0) {
                var datas = []
                var otherdatas = []
                let maindatas = []
                let activdatas = []
                let securedata = []
                res.data.map((value) => {
                    if (value.orderIncomeVoList !== null) {
                        datas = datas.concat(value.orderIncomeVoList)
                    }
                    if (value.currency === 'FILDEFI') {
                        if (value.orderIncomeVoList !== null) {
                            activdatas.push(value)
                        }
                    }
                    if (value.currency !== 'BTC' && value.currency !== 'ETH' && value.currency !== 'FIL') {
                        if (value.orderIncomeVoList !== null) {
                            otherdatas.push(value)
                        }
                    } else {
                        maindatas.push(value)
                    }
                    if (value.currency !== 'BTC' && value.currency !== 'ETH') {
                        if (value.orderIncomeVoList !== null) {
                            securedata.push(value)
                        }
                    }
                })
                setActivelist(activdatas)
                if (isSecure) {
                    setMyhashrate(securedata)
                } else {
                    setMyhashrate(maindatas.concat(otherdatas))
                }
                // 区分多语言下的订单并且满足订单状态（0待支付,4算力生效中，6已暂停）
                // if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
                //     const advance = datas.filter((item) => {
                //         return item.electricPayType === 1 && item.priceCurrency === 'CNY' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                //     })
                //     if (advance.length > 0) {
                //         setElectype(1)
                //         setIdstr(advance.map((item) => {
                //             if (item.electricPayType === 1) {
                //                 return item.id
                //             }
                //         }).join(','))
                //     } else {
                //         setIdstr('')
                //         setElectype(2)
                //     }
                //     const earnings = datas.filter((item) => {
                //         return item.electricPayType === 2 && item.priceCurrency === 'CNY' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                //     })
                //     if (earnings.length > 0) {
                //         setIncomeid(earnings.map((item) => {
                //             if (item.electricPayType === 2) {
                //                 return item.id
                //             }
                //         }).join(','))
                //     } else {
                //         setIncomeid('')
                //     }
                // } else {
                //     const advance = datas.filter((item) => {
                //         return item.electricPayType === 1 && item.priceCurrency === 'USDT' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                //     })
                //     if (advance.length > 0) {
                //         setElectype(1)
                //         setIdstr(advance.map((item) => {
                //             if (item.electricPayType === 1) {
                //                 return item.id
                //             }
                //         }).join(','))
                //     } else {
                //         setIdstr('')
                //         setElectype(2)
                //     }
                //     const earnings = datas.filter((item) => {
                //         return item.electricPayType === 2 && item.priceCurrency === 'USDT' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                //     })
                //     if (earnings.length > 0) {
                //         setIncomeid(earnings.map((item) => {
                //             if (item.electricPayType === 2) {
                //                 return item.id
                //             }
                //         }).join(','))
                //     } else {
                //         setIncomeid('')
                //     }
                // }
                const advance = datas.filter((item) => {
                    return item.electricPayType === 1 && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                })
                if (advance.length > 0) {
                    setElectype(1)
                    setIdstr(advance.map((item) => {
                        if (item.electricPayType === 1) {
                            return item.id
                        }
                    }).join(','))
                } else {
                    setIdstr('')
                    setElectype(2)
                }
                const earnings = datas.filter((item) => {
                    return item.electricPayType === 2 && item.priceCurrency === 'USDT' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                })
                if (earnings.length > 0) {
                    setIncomeid(earnings.map((item) => {
                        if (item.electricPayType === 2) {
                            return item.id
                        }
                    }).join(','))
                } else {
                    setIncomeid('')
                }
                const minminglist = datas.filter((item) => {
                    return item.orderState === 4
                })
                setMinlist(minminglist)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.order.prepayMentinfos().then((res) => {
            if (res.code === 0) {
                // if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
                //     setPayelectirc(res.data.balanceList.filter((item) => {
                //         return item.currency === 'CNY'
                //     }))
                // } else {
                //     setPayelectirc(res.data.balanceList.filter((item) => {
                //         return item.currency === 'USDT'
                //     }))
                // }
                setPayelectirc(res.data.balanceList.filter((item) => {
                    return item.currency === 'USDT'
                }))
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="income">
        <Header {...{ myhasrate, i18n, t }}/>
        <div className="income-con">
            <Listone {...{ myhasrate, i18n, t, payelectirc, activelist, isSecure }}/>
            <Listtwo {...{ i18n, t, minlist, setMinlist, idstr, incomeid, electype, isSecure }}/>
        </div>
    </div>
}
