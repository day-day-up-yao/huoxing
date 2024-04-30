import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import inpimg from '../../public/imgs/sure.png'
import Payment from '../Payment/index'
import Toast from '../../components/Toast'
import { isMobile } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    // const [electricList, setElectricList] = useState([])
    const { electricList } = useSelector((state) => ({
        electricList: state.order.electricList
    }))
    // 点击选择待缴电费
    const [clientTradeNo, setClientTradeNo] = useState([])
    useEffect(() => {
        dispatch.order.powerPurchase({
            feeOrderState: 0
        })
    }, [])
    const selectedHandle = useCallback((event) => {
        dispatch.order.checkedItem({ id: event.target.getAttribute('dataid') })
        const tradeNo = event.target.getAttribute('datatradeno')
        const idArr = clientTradeNo
        if (idArr.indexOf(tradeNo) === -1) {
            idArr.push(tradeNo)
        } else {
            idArr.splice(idArr.indexOf(tradeNo), 1)
        }
        setClientTradeNo(idArr)
    }, [clientTradeNo])
    const handleToget = useCallback((e) => {
        dispatch.order.cancelOrderfee({
            orderFeeId: e
        }).then((res) => {
            if (res.code === 0) {
                dispatch.order.powerPurchase({
                    feeOrderState: 0
                })
            } else {
                Toast.info(res.msg)
            }
            console.log(res)
        }).catch((err) => {
            console.log(err)
            Toast.info(t('public.fail'))
        })
    }, [])
    return <div className="electric">
        {!isMobile() ? '' : <Header title={t('header.nav.putelectric')}/>}
        <div className="electric-con">
            <h3>{t('payelectric.djdf')}</h3>
        </div>
        <div style={{ minHeight: '200px' }}>
            <div className="electric-nav">
                {Array.isArray(electricList) && electricList.map((item, index) => {
                    if (item.canPay === 1) {
                        return <div key={index}>
                            <div className="electric-nav-cent">
                                <div
                                    className="electric-nav-cent-l"
                                    dataid={item.id}
                                    datatradeno={item.tradeNo}
                                    onClick={selectedHandle}
                                    style={{ background: item.checked ? '#242F44' : '' }}>
                                    <img dataid={item.id} datatradeno={item.tradeNo} src={inpimg} />
                                </div>
                                <div className="electric-nav-cent-img">
                                    <img src={item.minerPicUrl} />
                                </div>
                                <div className="electric-nav-cent-message">
                                    <ul>
                                        <li>
                                            <p>{t('payelectric.proname')}</p>
                                            <p>{item.productName}</p>
                                        </li>
                                        <li>
                                            <p>{t('payelectric.ordernum')}</p>
                                            <p>{item.id}</p>
                                        </li>
                                        <li>
                                            <p>{t('payelectric.dayelec')}</p>
                                            <p>{(item.totalMoney / item.num).toFixed(3)} CNY</p>
                                        </li>
                                        <li>
                                            <p>{t('payelectric.syelecday')}</p>
                                            <p>{item.leftElectricDays ? '天' : '-'}</p>
                                        </li>
                                        <li>
                                            <p>{t('payelectric.jfday')}</p>
                                            <p>{item.num}</p>
                                        </li>
                                    </ul>
                                    <div className="electric-nav-cent-message-number">
                                        {/* <div className="electric-nav-cent-m-n-r">
                                                <p>选择续费天数</p>
                                                <div className="electric-nav-cent-m-n-r-c">
                                                    <span onClick={() => {
                                                        event.preventDefault()
                                                        dispatch.order.minusItem({ productId: item.id })
                                                    }}>-</span>
                                                    <span>{item.checked}个月</span>
                                                    <span onClick={() => {
                                                        event.preventDefault()
                                                        dispatch.order.addItem({ productId: item.id })
                                                    }}>+</span>
                                                </div>
                                            </div> */}
                                        <div className="electric-nav-cent-m-n-l">
                                            <p>{t('payelectric.dfmaony')}</p>
                                            <p>{item.totalMoney.toFixed(2)} CNY</p>
                                        </div>
                                        <div className="electric-nav-last">
                                            <p>{t('payelectric.cz')}</p>
                                            <p onClick={() => { handleToget(item.id) }}>{t('payelectric.qxorder')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="electric-nav-bottom"></div>
                        </div>
                    }
                })}
            </div>
            <div className="electric-last" style={{ display: clientTradeNo.length !== 0 ? 'flex' : 'none' }}>
                {/* <div className="electric-last-p1">
                        <p></p>
                        <p>
                            <span>账户余额</span>
                            <span>500000 CNY</span>
                        </p>
                    </div> */}
                <Payment noBankPay={true} clientTradeNo={clientTradeNo.join(',')} orderType="electricity" />
            </div>
        </div>
    </div>
}
