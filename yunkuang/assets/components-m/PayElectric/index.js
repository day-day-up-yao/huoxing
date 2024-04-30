import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import elecicon from '../../public/imgs/new/elecicon.png'
import close from '../../public/imgs/newedition/close.png'
import Toast from '../../components/Toast'
import Payment from '../../components/Payment'
import './index.scss'
import selectimgorange from '../../public/imgs/h5img/other/sureselect.png'
import selectimgblue from '../../public/imgs/h5img/other/sureselectblue.png'
export default ({ setTopay, setPrompt, langua, calculid, electype, ish5, onCloseFn }) => {
    // console.log(electype)
    const history = useHistory()
    const dispatch = useDispatch()
    const countcoderef = useRef()
    const inptinfo = useRef()
    const { t } = useTranslation()
    const days = [`30`, `90`] // an天数缴费
    const moneys = ['500', '1000'] // 按金额缴费
    const [selecday, setSelecday] = useState(0)
    const [amount, setAmount] = useState(
        {
            amount: 0,
            remaining: 0
        }
    )
    const [defined, setDefined] = useState()

    // 显示选择支付方式
    const [paytype, setPaytype] = useState(
        {
            flage: false,
            client: ''
        }
    )
    // 使用优惠码显示优惠价格
    const [acode, setAcode] = useState(
        {
            countAmount: 0,
            count: false
        }
    )
    useEffect(() => {
        if (electype === 1) {
            getAmount(30)
        } else {
            // getMoney(500)
            setAmount(
                {
                    amount: 500,
                    remaining: false
                }
            )
        }
    }, [])
    useEffect(() => {
        if (defined && defined !== '') {
            if (electype === 1) {
                getAmount(defined)
            } else {
                setAmount(
                    {
                        amount: defined,
                        remaining: false
                    }
                )
            }
        }
    }, [defined])
    // 通过天数计算缴电费金额
    const getAmount = useCallback((num) => {
        dispatch.order.electCount({
            prepayDays: num,
            prepayCurrency: langua,
            orderIdStr: calculid
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.feePrepayList.length > 0) {
                    const enmountday = res.data.feePrepayList.filter((item) => {
                        return item.currency === 'USDT'
                    })
                    setAmount(
                        {
                            amount: enmountday.length > 0 ? enmountday[0].prepayAmount : '',
                            remaining: enmountday.length > 0 ? enmountday[0].remainingDays : ''
                        }
                    )
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    // 创建电费充值订单
    const handleTopay = useCallback(() => {
        dispatch.order.rechargeOrder({
            buyNum: amount.amount,
            discountCode: countcoderef.current.value ? countcoderef.current.value : '',
            rechargeCurrency: langua
        }).then((res) => {
            if (res.code === 0) {
                if (ish5) {
                    history.push({
                        pathname: '/checkstand',
                        state: {
                            data: res.data,
                            needpay: amount.amount,
                            curreny: 'USDT',
                            ordertype: 'electricity-recharge'
                        }
                    })
                } else {
                    setPaytype(
                        {
                            flage: true,
                            client: res.data
                        }
                    )
                }
            } else {
                Toast.info(res.msg)
            }
        })
    }, [amount])
    // 优惠码校验
    const handleMake = useCallback(() => {
        if (countcoderef.current.value) {
            dispatch.order.promotionCode({
                discountActivityType: 1,
                discountCurrency: langua,
                discountCode: countcoderef.current.value
            }).then((res) => {
                if (res.code === 0) {
                    setAcode(
                        {
                            countAmount: res.data.discountAmount,
                            count: true
                        }
                    )
                } else {
                    Toast.info(res.msg)
                }
                // console.log(res)
            })
        }
    })
    return <div className={`topay ${ish5 && 'otherstyle'}`}>
        <div className="select">
            <p>{t('h5.index.electric')}({electype === 1 ? t('public.day') : 'USDT'})</p>
            <div className="select-list">
                {(electype === 1 ? days : moneys).map((item, index) => {
                    return <div key={index}
                        // style={{ backgroundImage: `url(` + (selecday === index ? elecicon : '') + `)` }}
                        className={`select-list-item ${selecday === index && 'activepay'}`}
                        onClick={() => {
                            setSelecday(index)
                            if (electype === 1) {
                                getAmount(item)
                            } else {
                                setAmount(
                                    {
                                        amount: item,
                                        remaining: false
                                    }
                                )
                            }
                        }}>
                        {item}
                        {selecday === index && <div className="select-img">
                            <img src={ish5 ? selectimgblue : selectimgorange} alt=""/>
                        </div>}
                    </div>
                })}
                <div
                    className={`select-list-item ${selecday === 3 && 'activepay'}`}
                    onClick={() => {
                        setSelecday(3)
                    }}>
                    <input type="text"
                        ref={inptinfo}
                        onChange={(e) => {
                            setDefined(e.target.value)
                            console.log(e.target.value)
                            electype === 1 && getAmount(e.target.value)
                            electype === 2 && setAmount(
                                {
                                    amount: e.target.value,
                                    remaining: false
                                }
                            )
                            // if (e.target.value === '') {
                            //     electype === 1 && getAmount(0)
                            //     electype === 2 && setAmount(
                            //         {
                            //             amount: e.target.value,
                            //             remaining: false
                            //         }
                            //     )
                            // } else {
                            //     electype === 1 && getAmount(e.target.value)
                            //     electype === 2 && setAmount(
                            //         {
                            //             amount: e.target.value,
                            //             remaining: false
                            //         }
                            //     )
                            // }
                        }}
                        // style={{ backgroundImage: `url(` + (selecday === 3 ? elecicon : '') + `)` }}
                        placeholder={t('hasgrate.zdy')}/>
                    {selecday === 3 && <div className="select-img">
                        <img src={ish5 ? selectimgblue : selectimgorange} alt=""/>
                    </div>}
                </div>
            </div>
        </div>
        <div className="promo">
            <p>{t('buyorder.yhcode')}</p>
            <div className="promo-code">
                <input type="text" placeholder={t('buyorder.yhui')} ref={countcoderef}/>
                <span onClick={() => handleMake()}>{t('hasgrate.make')}</span>
            </div>
        </div>
        <div className="promo">
            <p>{t('hasgrate.jine')}</p>
            <div className="amount">
                <p>
                    <span>{(Number(amount.amount) - Number(acode.countAmount)).toFixed(2)}</span>
                    <span>{langua}</span>
                </p>
                <p style={{ display: amount.remaining === false ? 'none' : '' }}>{t('hasgrate.yjsy')}{amount.remaining}</p>
            </div>
        </div>
        <div className="promo">
            <p>{t('hasgrate.zhyi')}</p>
            <ol>
                <li>{t('hasgrate.zyone')} </li>
                <li>{t('hasgrate.zytwo')}</li>
            </ol>
        </div>
        <div className="botton" onClick={() => { handleTopay() }}>{t('hasgrate.pay')}</div>
        <div className="close" onClick={() => {
            if (ish5) {
                onCloseFn()
            } else {
                setPrompt(false)
                setTopay(false)
            }
        }}>
            <img src={close} alt=""/>
        </div>
        <div className="paytype" style={{ display: paytype.flage ? 'flex' : '' }}>
            <div className="paytype-con">
                <h3>{t('hasgrate.selec')}</h3>
                <Payment costcurrey='USDT' noBankPay={true} clientTradeNo={paytype.client} costorder={true} orderType="electricity-recharge"/>
                <div className="close" onClick={() => setPaytype(
                    {
                        flage: false,
                        client: ''
                    }
                )}>
                    <img src={close} alt=""/>
                </div>
            </div>
        </div>
    </div>
}
