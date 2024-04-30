import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
// import Payelectrice from './payelectrice'
import Payelectrice from '../../components-m/PayElectric'
import switchs from '../../public/imgs/new/switchs.png'
export default ({ t, minlist, setMinlist, idstr, incomeid, electype, isSecure }) => {
    const dispatch = useDispatch()
    const toplist = [t('orderdetail.proname'), t('hasgrate.bz'), t('hasgrate.sl'), t('hasgrate.ljsy'), t('hasgrate.zrsy'), t('hasgrate.syday'), t('hasgrate.kffs'), t('property.make')]
    const selectlist = [
        // { name: t('hasgrate.mynetch'), type: '' },
        { name: t('hasgrate.wking'), type: '4' },
        { name: t('hasgrate.tjwh'), type: '9' },
        { name: t('hasgrate.dsx'), type: '1' },
        { name: t('hasgrate.yzt'), type: '6' },
        { name: t('hasgrate.yjs'), type: '5' }
    ]
    const [falge, setFlage] = useState(0)
    const [prompt, setPrompt] = useState(false) // 弹窗
    const [payinfo, setPayinfo] = useState(
        {
            see: false,
            text: ''
        }
    )
    const [topay, setTopay] = useState(false)
    const [switches, setSwitches] = useState(false)
    const [stype, setStype] = useState(true)
    // 语言
    const [langua, setLangua] = useState('USDT')
    const [calculid, setCalculid] = useState('all') // 电费计算金额需要id
    const [oneq, setOneq] = useState(
        {
            qh: false,
            texts: t('hasgrate.sfy'),
            id: '',
            price: '',
            type: ''
        }
    )
    useEffect(() => {
        setLangua('USDT')
    }, [])
    // 选择算力状态
    const handleToselect = useCallback((itm, idx) => {
        setFlage(idx)
        dispatch.order.inconeList({
            orderState: itm.type
        }).then((res) => {
            if (res.code === 0) {
                var datas = []
                res.data.map((value) => {
                    if (value.orderIncomeVoList !== null) {
                        datas = datas.concat(value.orderIncomeVoList)
                    }
                })
                setMinlist(datas)
            } else {
                Toast.info(res.msg)
            }
        })
    })
    // 单个切换电费模式
    const handlepaytype = useCallback((item) => {
        if (item.electricPayType === 1) {
            setOneq(
                {
                    qh: true,
                    texts: t('hasgrate.sfy'),
                    id: item.id,
                    price: item.priceCurrency,
                    type: item.electricPayType
                }
            )
        }
        if (item.electricPayType === 2) {
            setOneq(
                {
                    qh: true,
                    texts: t('hasgrate.sfysy'),
                    id: item.id,
                    price: item.priceCurrency,
                    type: item.electricPayType
                }
            )
        }
        setPrompt(true)
    })
    // 单个电费确认切换
    const handleSure = useCallback(() => {
        if (oneq.type === 1) {
            updatatype(2, oneq.id, oneq.price)
        }
        if (oneq.type === 2) {
            updatatype(1, oneq.id, oneq.price)
        }
        setPrompt(false)
        setOneq(
            {
                qh: false,
                texts: '',
                id: '',
                price: '',
                type: ''
            }
        )
    })
    // 去缴费
    const handleTopay = useCallback(() => {
        setTopay(true)
        setPrompt(true)
        setCalculid('')
    })
    // 全部切换扣费模式
    const handleAll = useCallback(() => {
        setSwitches(true)
        setPrompt(true)
    })
    // 电费扣费方式相互切换
    const handleTosureall = useCallback(() => {
        // console.log(idstr, stype, incomeid)
        if (stype) {
            if (idstr !== '') {
                updatatype(2, idstr, langua)
            } else {
                Toast.info(t('hasgrate.zwjf'))
            }
        } else {
            if (incomeid !== '') {
                updatatype(1, incomeid, langua)
            } else {
                Toast.info(t('hasgrate.sydd'))
            }
        }
    })
    // 切换电费方式
    const updatatype = useCallback((type, list, lang) => {
        dispatch.order.electricePaytype({
            electricPayType: type,
            electricPriceCurrency: lang,
            orderIdStr: list
        }).then((res) => {
            if (res.code === 0) {
                window.location.reload()
            } else {
                if (res.code === 3143) {
                    setLangua(lang)
                    setSwitches(false)
                    setPayinfo(
                        {
                            see: true,
                            text: res.msg
                        }
                    )
                    setPrompt(true)
                    setCalculid(list)
                } else {
                    Toast.info(res.msg)
                }
            }
        })
    })
    return <div className="listtwo">
        <div className="listtwo-top">
            {selectlist.map((item, index) => {
                return <div
                    className={falge === index ? 'actives' : 'top-item'}
                    key={index}
                    onClick={() => handleToselect(item, index)}>
                    {item.name}
                </div>
            })}
        </div>
        <div className="hashlist">
            <div className="hashlist-top">
                {toplist.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
            <div className="hashlist-list">
                {minlist.length > 0 ? (
                    minlist.map((item, index) => {
                        return <ul key={index}>
                            <li>{item.productName}</li>
                            <li>{item.incomeCurrency}</li>
                            <li>{item.incomeCurrency === 'ETH' ? item.hashrateNum * 1000000 : item.hashrateNum} {item.hashrateUnit}</li>
                            <li>{item.totalIncome === null ? '--' : item.totalIncome + ' ' + item.incomeCurrency}</li>
                            <li>{item.yesterdayTotalIncome === null ? '--' : item.yesterdayTotalIncome + ' ' + item.incomeCurrency}</li>
                            <li>{item.incomeDays === null ? '--' : item.incomeDays}</li>
                            <li>{item.electricPayType === null ? '--' : item.electricPayType === 1 ? t('hasgrate.yxzf') : t('hasgrate.syzh')}</li>
                            <li>
                                <span
                                    style={{ display: (item.orderState === 4 || item.orderState === 5 || item.orderState === 6) ? 'inline-block' : 'none' }}
                                    onClick={() => {
                                        dispatch.product.incomeList({
                                            orderId: item.id
                                        }).then((res) => {
                                            if (res.code === 0) {
                                                if (res.data === null) {
                                                    Toast.info(t('hasgrate.zwc'))
                                                } else {
                                                    if (isSecure) {
                                                        window.location.href = `/secure/enoutputlist/${item.id}?income=${item.filTotalIncome}`
                                                    } else {
                                                        window.location.href = `/outputlist/${item.id}?income=${item.filTotalIncome}`
                                                    }
                                                }
                                            } else {
                                                Toast.info(res.msg)
                                            }
                                        })
                                    }}>{t('hasgrate.symx')}</span>
                                {((item.orderState === 0 || item.orderState === 4 || item.orderState === 6) && item.incomeCurrency !== 'FIL') && <span onClick={() => { handlepaytype(item) }}>{t('hasgrate.qhkf')}</span>}
                            </li>
                        </ul>
                    })
                ) : ('')}
            </div>
            {minlist.length > 0 ? (
                <div className="hashlist-bottom">
                    <div className="all" onClick={() => { handleAll() }}>{t('hasgrate.allqh')}</div>
                    <div className="goto" onClick={() => { handleTopay() }}>{t('hasgrate.gojf')}</div>
                </div>
            ) : ('')}
        </div>
        <div className="prompt" style={{ display: prompt ? 'flex' : '' }}>
            <div className="nopay" style={{ display: payinfo.see ? '' : 'none' }}>
                <p>{payinfo.text}</p>
                <div className="nopay-btn">
                    <span onClick={() => {
                        setPrompt(false)
                        setPayinfo(
                            {
                                see: false,
                                text: ''
                            }
                        )
                    }}>{t('productdetail.qx')}</span>
                    <span onClick={() => {
                        setPayinfo(
                            {
                                see: false,
                                text: ''
                            }
                        )
                        setTopay(true)
                    }}>{t('hasgrate.cdf')}</span>
                </div>
            </div>
            <div className="all" style={{ display: switches ? '' : 'none' }}>
                <h3>{t('hasgrate.allqh')}</h3>
                <div className="all-switch">
                    <div className="switch-left">
                        <div className="left-top"></div>
                        <div className="left-center"></div>
                        <div className="left-bottom"></div>
                    </div>
                    <div className="switch-center">
                        <div className="center-top">
                            <span>{t('hasgrate.cong')}</span>
                            <span>{stype === true ? t('hasgrate.yjdf') : t('hasgrate.syzf')}</span>
                        </div>
                        <div className="center-center"></div>
                        <div className="center-top">
                            <span>{t('hasgrate.dao')}</span>
                            <span>{stype === true ? t('hasgrate.syzf') : t('hasgrate.yjdf')}</span>
                        </div>
                    </div>
                    <div className="switch-img" onClick={() => (setStype(!stype))}>
                        <img src={switchs} alt=""/>
                    </div>
                </div>
                <div className="all-btn">
                    <span onClick={() => {
                        setSwitches(false)
                        setPrompt(false)
                    }}>{t('productdetail.qx')}</span>
                    <span onClick={() => { handleTosureall() }}>{t('header.sign.sures')}</span>
                </div>
            </div>
            {/* 单个切换确认弹窗 */}
            <div className="oneqh" style={{ display: oneq.qh ? '' : 'none' }}>
                <p>{oneq.texts}</p>
                <div className="nopay-btn">
                    <span onClick={() => {
                        setPrompt(false)
                        setOneq(
                            {
                                qh: false,
                                texts: '',
                                id: '',
                                price: '',
                                type: ''
                            }
                        )
                    }}>{t('productdetail.qx')}</span>
                    <span onClick={() => { handleSure() }}>{t('header.sign.sures')}</span>
                </div>
            </div>
            {topay && <Payelectrice {...{ setTopay, setPrompt, langua, calculid, electype }}/>}
        </div>
    </div>
}
