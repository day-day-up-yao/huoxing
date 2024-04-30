import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import elecicon from '../../public/imgs/new/elecicon.png'
import close from '../../public/imgs/newedition/close.png'
import Toast from '../../components/Toast'
import Payment from '../../components/Payment'
export default ({ setPosit, setPayflage, langua, calculid, electype }) => {
    // console.log(electype)
    const dispatch = useDispatch()
    const countcoderef = useRef()
    const { i18n, t } = useTranslation()
    const days = [`30`, `90`] // an天数缴费
    const moneys = ['500', '1000'] // 按金额缴费
    const [selecday, setSelecday] = useState(0)
    const [amount, setAmount] = useState(
        {
            amount: 0,
            remaining: 0
        }
    )

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
    // 通过天数计算缴电费金额
    const getAmount = useCallback((num) => {
        dispatch.order.electCount({
            prepayDays: num,
            prepayCurrency: langua,
            orderIdStr: calculid
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.feePrepayList.length > 0) {
                    if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
                        const mountday = res.data.feePrepayList.filter((item) => {
                            return item.currency === 'CNY'
                        })
                        setAmount(
                            {
                                amount: mountday.length > 0 ? mountday[0].prepayAmount : '',
                                remaining: mountday.length > 0 ? mountday[0].remainingDays : ''
                            }
                        )
                    } else {
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
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    // 通过金额获取缴费金额
    // const getMoney = useCallback((num) => {
    //     dispatch.order.electCount({
    //         prepayAmount: num,
    //         prepayCurrency: langua,
    //         orderIdStr: calculid
    //     }).then((res) => {
    //         if (res.code === 0) {
    //             if (res.data.feePrepayList.length > 0) {
    //                 if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
    //                     const mountday = res.data.feePrepayList.filter((item) => {
    //                         return item.currency === 'CNY'
    //                     })
    //                     setAmount(
    //                         {
    //                             amount: mountday.length > 0 ? mountday[0].prepayAmount : '',
    //                             remaining: mountday.length > 0 ? mountday[0].remainingDays : ''
    //                         }
    //                     )
    //                 } else {
    //                     const enmountday = res.data.feePrepayList.filter((item) => {
    //                         return item.currency === 'USDT'
    //                     })
    //                     setAmount(
    //                         {
    //                             amount: enmountday.length > 0 ? enmountday[0].prepayAmount : '',
    //                             remaining: enmountday.length > 0 ? enmountday[0].remainingDays : ''
    //                         }
    //                     )
    //                 }
    //             }
    //         } else {
    //             Toast.info(res.msg)
    //         }
    //     })
    // })
    // 创建电费充值订单
    const handleTopay = useCallback(() => {
        dispatch.order.rechargeOrder({
            buyNum: amount.amount,
            discountCode: countcoderef.current.value ? countcoderef.current.value : '',
            rechargeCurrency: langua
        }).then((res) => {
            if (res.code === 0) {
                setPaytype(
                    {
                        flage: true,
                        client: res.data
                    }
                )
            } else {
                Toast.info(res.msg)
            }
        })
    })
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
    return <div className="pay-electric">
        <div className="select">
            <p>{t('h5.index.electric')}({electype === 1 ? t('public.day') : (i18n.language).toLowerCase().substring(0, 2) === 'zh' ? 'CNY' : 'USDT'})</p>
            <div className="select-list">
                {(electype === 1 ? days : moneys).map((item, index) => {
                    return <div key={index}
                        style={{ backgroundImage: `url(` + (selecday === index ? elecicon : '') + `)` }}
                        className={selecday === index ? 'activepay' : ''}
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
                        }}>{item}</div>
                })}
                <div
                    className={selecday === 3 ? 'activepay' : ''}
                    onClick={() => {
                        setSelecday(3)
                    }}>
                    <input type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                electype === 1 && getAmount(0)
                                electype === 2 && setAmount(
                                    {
                                        amount: 0,
                                        remaining: false
                                    }
                                )
                            } else {
                                electype === 1 && getAmount(e.target.value)
                                electype === 2 && setAmount(
                                    {
                                        amount: e.target.value,
                                        remaining: false
                                    }
                                )
                            }
                        }}
                        style={{ backgroundImage: `url(` + (selecday === 3 ? elecicon : '') + `)` }}
                        placeholder={t('hasgrate.zdy')}/>
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
            setPosit(false)
            setPayflage(false)
        }}>
            <img src={close} alt=""/>
        </div>
        <div className="paytype" style={{ display: paytype.flage ? 'flex' : '' }}>
            <div className="paytype-con">
                <h3>{t('hasgrate.selec')}</h3>
                <Payment noBankPay={true} clientTradeNo={paytype.client} orderType="electricity-recharge"/>
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
