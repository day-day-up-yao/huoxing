import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import leftbtn from '../../public/imgs/btnleft.png'
import Botbtn from '../../public/imgs/newedition/bottombtn.png'
import Btntop from '../../public/imgs/newedition/btntop.png'
import whitbtn from '../../public/imgs/newedition/whitbtn.png'
import Nometch from '../../public/imgs/newedition/noproduct.png'
import Btnright from '../../public/imgs/newedition/btnright.png'
import Toast from '../../components/Toast'
import Payelectric from './topayelectric'
export default () => {
    const { t, i18n } = useTranslation()
    const Wlist = [
        { name: t('hasgrate.wking'), type: '4', colors: '#32966E' },
        { name: t('hasgrate.dsx'), type: '1', colors: '#EBA713' },
        { name: t('hasgrate.yzt'), type: '6', colors: '#C25050' },
        { name: t('hasgrate.yjs'), type: '5', colors: '#C25050' }
    ]
    const dispatch = useDispatch()
    const [bflag, setBflag] = useState(false)
    const [bname, setBname] = useState('BTC')
    const [posflag, setPosflag] = useState(false)
    const [hashflag, setHashflag] = useState(false)
    const [status, setStatus] = useState({ name: t('hasgrate.wking'), colors: '#32966E' })
    const [myproductlist, setMyproductlist] = useState()
    const [num, setNum] = useState(0)
    const [tonum, setTonum] = useState(2)
    const [posit, setPosit] = useState(false) // 所有弹窗是否显示
    const [oneq, setOneq] = useState(
        {
            qh: false,
            texts: t('hasgrate.sfy'),
            id: '',
            price: '',
            type: ''
        }
    )
    const [payinfo, setPayinfo] = useState(
        {
            see: false,
            text: ''
        }
    )
    const [payflage, setPayflage] = useState(false)
    const [electype, setElectype] = useState(1) // 电费支付方式 1 按天数缴费 2 按金额缴费
    // 语言
    const [langua, setLangua] = useState('CNY')
    const [calculid, setCalculid] = useState('all') // 电费计算金额需要id
    useEffect(() => {
        if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
            setLangua('CNY')
        } else {
            setLangua('USDT')
        }
        gethashlist(4)
    }, [])
    const gethashlist = useCallback((num) => {
        dispatch.order.inconeList({
            orderState: num
        }).then((res) => {
            if (res.code === 0) {
                setMyproductlist(res.data)
                var datas = []
                res.data.map((value) => {
                    if (value.orderIncomeVoList !== null) {
                        datas = datas.concat(value.orderIncomeVoList)
                    }
                })
                // 区分多语言下的订单并且满足订单状态（0待支付,4算力生效中，6已暂停）
                if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
                    const advance = datas.filter((item) => {
                        return item.electricPayType === 1 && item.priceCurrency === 'CNY' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                    })
                    if (advance.length > 0) {
                        setElectype(1)
                    } else {
                        setElectype(2)
                    }
                } else {
                    const advance = datas.filter((item) => {
                        return item.electricPayType === 1 && item.priceCurrency === 'USDT' && (item.orderState === 0 || item.orderState === 4 || item.orderState === 6)
                    })
                    if (advance.length > 0) {
                        setElectype(1)
                    } else {
                        setElectype(2)
                    }
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    const handleToswitch = useCallback((item) => {
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
        setPosit(true)
    })

    const handleSure = useCallback(() => {
        if (oneq.type === 1) {
            updatatype(2, oneq.id, oneq.price)
        }
        if (oneq.type === 2) {
            updatatype(1, oneq.id, oneq.price)
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
            } else if (res.code === 3143) {
                setOneq(
                    {
                        qh: false,
                        texts: '',
                        id: '',
                        price: '',
                        type: ''
                    }
                )
                setPayinfo(
                    {
                        see: true,
                        text: res.msg
                    }
                )
                setCalculid(list)
            } else {
                Toast.info(res.msg)
            }
            console.log(res)
        })
    })
    const handleTochong = useCallback(() => {
        setCalculid('')
        setPosit(true)
        setPayflage(true)
    })
    return <div className="hashrate-m">
        <div className="hash-top">
            <span onClick={() => {
                window.history.go(-1)
            }}>
                <img src={leftbtn} alt=""/>
            </span>
            <span>{t('hasgrate.mysl')}</span>
            <span onClick={() => {
                window.location.href = `/tomall?select=${tonum}`
            }}>{t('hasgrate.tssl')}</span>
        </div>
        <div className="hash-con">
            <div className="hash-con-top">
                <div className="hash-con-top-t">
                    <h2>{t('hasgrate.dqsl')}：{myproductlist ? myproductlist[num].myTotalHashrate === null ? '--' : myproductlist[num].currency === 'ETH' ? Math.round(myproductlist[num].myTotalHashrate * 1000000) : Math.round(myproductlist[num].myTotalHashrate) : '--'} <span>T</span></h2>
                    <div className="hash-con-top-t-b">
                        <span onClick={() => {
                            setBflag(true)
                            setPosflag(true)
                        }}>{bname}{t('hasgrate.sl')}</span>
                        <img src={bflag === false ? Botbtn : Btntop} alt=""/>
                        <div className="hash-con-top-t-b-list" style={{ display: bflag === true ? '' : 'none' }}>
                            {myproductlist ? myproductlist.map((item, index) => {
                                return <p key={index} style={{ color: bname === item.currency ? '#242F44' : '' }} onClick={() => {
                                    setBname(item.currency)
                                    setBflag(false)
                                    setPosflag(false)
                                    setNum(index)
                                    setTonum(index + 2)
                                }}>{item.currency}{t('hasgrate.sl')}</p>
                            }) : ''}
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <span>{t('hasgrate.qwsl')}</span>
                        <span>{myproductlist ? myproductlist[num].blockHashrate === null ? '--' : myproductlist[num].blockHashrate : '--'} {myproductlist ? myproductlist[num].currency === 'BTC' ? 'EH/s' : 'TH/s' : '--'}</span>
                    </li>
                    <li>
                        <span>{t('hasgrate.dqnd')}</span>
                        <span>{myproductlist ? myproductlist[num].blockDifficulty === null ? '--' : myproductlist[num].blockDifficulty : '--'}</span>
                    </li>
                    <li>
                        <span>{t('hasgrate.mustnew')}</span>
                        <span>{myproductlist ? myproductlist[num].blockHeight === null ? '--' : myproductlist[num].blockHeight : '--'}</span>
                    </li>
                </ul>
            </div>
            <div className="hash-con-list">
                <div className="hash-con-list-top">
                    <span>{t('hasgrate.mynetch')}</span>
                    <ol>
                        <li style={{ color: status.colors }} onClick={() => {
                            setHashflag(true)
                            setPosflag(true)
                            setBflag(false)
                        }}>{status.name}</li>
                        <img src={whitbtn} alt=""/>
                    </ol>
                    <ul style={{ display: hashflag === true ? '' : 'none' }}>
                        {Wlist.map((item, index) => {
                            return <li key={item.type} style={{ color: item.colors }} onClick={() => {
                                setStatus(item)
                                setHashflag(false)
                                setPosflag(false)
                                gethashlist(item.type)
                            }}>{item.name}</li>
                        })}
                    </ul>
                </div>
                {myproductlist ? myproductlist[num].orderIncomeVoList ? (
                    <div>
                        {myproductlist[num].orderIncomeVoList.map((item, index) => {
                            return <div className="hash-con-list-lis" key={index}>
                                <div className="hash-con-list-lis-t">
                                    <div className="hash-con-list-lis-t-img">
                                        <img src={item.minerTypePic} alt=""/>
                                    </div>
                                    <div className="hash-con-list-lis-t-r">
                                        <div>
                                            <h3>{item.productName}</h3>
                                            {/* <h4>挖矿极限挑战, 布局区块链的互联网挖..</h4> */}
                                        </div>
                                        <p>
                                            <span>{t('hasgrate.zrsy')}</span>
                                            <span>{item.yesterdayTotalIncome === null ? '--' : item.yesterdayTotalIncome + item.incomeCurrency}</span>
                                        </p>
                                        <div className="hash-con-list-lis-t-r-r"
                                            style={{ display: (item.orderState === 4 || item.orderState === 5 || item.orderState === 6) ? 'inline-block' : 'none' }}
                                            onClick={() => {
                                                window.location.href = `/outputlist/${item.id}?income=${item.filTotalIncome}`
                                            }}>
                                            <span>{t('hasgrate.symx')}</span>
                                            <span>
                                                <img src={Btnright} alt=""/>
                                            </span>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="hash-con-list-lis-b">
                                    <ul>
                                        <li>
                                            <p>{t('hasgrate.allsl')}</p>
                                            <p>{item.incomeCurrency === 'ETH' ? item.hashrateNum * 1000000 : item.hashrateNum} {item.incomeCurrency === 'ETH' ? 'MH/s' : 'TH/s'}</p>
                                        </li>
                                        <li>
                                            <p>{t('hasgrate.bz')}</p>
                                            <p>{item.incomeCurrency}</p>
                                        </li>
                                        <li>
                                            <p>{t('hasgrate.ljsy')}</p>
                                            <p>{item.totalIncome} {item.incomeCurrency}</p>
                                        </li>
                                        <li>
                                            <p>{t('hasgrate.syday')}</p>
                                            <p>{item.incomeDays}</p>
                                        </li>
                                        {/* <li className="hash-con-list-lis-b-last">
                                            <p>{t('hasgrate.dfts')}</p>
                                            <p>{item.leftElectricDays >= 0 ? item.leftElectricDays : 0}</p>
                                        </li> */}
                                        <li>
                                            <p>{t('hasgrate.kffs')}</p>
                                            <p>{item.electricPayType === null ? '--' : item.electricPayType === 1 ? t('hasgrate.yxzf') : t('hasgrate.syzh')}</p>
                                        </li>
                                        {/* <li onClick={() => { handleToswitch(item) }}>
                                            {(item.orderState === 0 || item.orderState === 4 || item.orderState === 6) && <p>{t('hasgrate.qhkf')}</p>}
                                        </li> */}
                                    </ul>
                                    <div className="hash-switch" onClick={() => { handleToswitch(item) }}>
                                        {(item.orderState === 0 || item.orderState === 4 || item.orderState === 6) && <span>{t('hasgrate.qhkf')}</span>}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                ) : (
                    <div className="No-Mbottom-top">
                        <div>
                            <img src={Nometch} alt=""/>
                        </div>
                        <p>{t('hasgrate.zwkj')}</p>
                    </div>
                ) : (
                    <div className="No-Mbottom-top">
                        <div>
                            <img src={Nometch} alt=""/>
                        </div>
                        <p>{t('hasgrate.zwkj')}</p>
                    </div>
                )}
            </div>
        </div>
        <div className="electri-positon" style={{ display: posit ? '' : 'none' }}>
            <div className="oneqh" style={{ display: oneq.qh ? '' : 'none' }}>
                <p>{oneq.texts}</p>
                <div className="nopay-btn">
                    <span onClick={() => {
                        setPosit(false)
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
            <div className="oneqh" style={{ display: payinfo.see ? '' : 'none' }}>
                <p>{payinfo.text}</p>
                <div className="nopay-btn">
                    <span onClick={() => {
                        setPosit(false)
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
                        setPayflage(true)
                    }}>{t('hasgrate.cdf')}</span>
                </div>
            </div>
            {payflage && <Payelectric {...{ setPosit, setPayflage, langua, calculid, electype }}/>}
        </div>
        <div className="hash-position" style={{ display: posflag === true ? '' : 'none' }}></div>
        <div className="to-payelectric">
            <span onClick={() => { handleTochong() }}>{t('header.nav.putelectric')}</span>
        </div>
    </div>
}
