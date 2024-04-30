import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './index.scss'

import Header from '../../../components-m/Headers'
import Operation from '../Operation'
import AllPrice from './AllPrice'
import ElecDetail from './ElecDetail'
import Toast from '../../../components/Toast'
import { queryParam } from '../../../public/js/index'

export default (props) => {
    const { detail, onflagFn } = props
    const history = useHistory()
    const dispatch = useDispatch()
    const [seletday, SetSelectday] = useState(detail.electricDayMin)
    const [selectpay, setSelectpay] = useState(0)
    const [uuid, setUuid] = useState('')
    const dayref = useRef(detail.electricDayMin)
    const paytyperef = useRef(0)
    const priceref = useRef(0)
    useEffect(() => {
        if (queryParam('chancode')) {
            setUuid(queryParam('chancode'))
        }
        if (detail.electricPayType === 0 || detail.electricPayType === 1) {
            setSelectpay(0)
            SetSelectday(detail.electricDayMin ? detail.electricDayMin : 0)
        }
        if (detail.electricPayType === 2) {
            setSelectpay(1)
            SetSelectday(0)
        }
    }, [])
    useEffect(() => {
        dayref.current = seletday
        paytyperef.current = selectpay
    }, [seletday, selectpay])
    // console.log(seletday, selectpay)
    // 支付
    const canpayFn = useCallback(() => {
        console.log(dayref.current, paytyperef.current)
        dispatch.order.orderCreate({
            buyElectricDays: dayref.current,
            electricPayType: paytyperef.current === 1 ? 2 : 1,
            buyNum: detail.buyCount,
            productId: detail.id,
            discountCode: '',
            channelUuid: uuid
            // orderCurrency: 'BDDA',
        }).then((res) => {
            if (res.code === 3018) {
                Toast.info(res.msg)
                return
            }
            if (res.code === 0) {
                history.push({
                    pathname: '/checkstand',
                    state: {
                        data: res.data,
                        needpay: priceref.current,
                        curreny: 'USDT',
                        ordertype: 'hashrate',
                        type: 'minorder'
                    }
                })
                // window.location.href = `/checkstand?orderid=${res.data}&&ordertype=miningorder`
            } else {
                Toast.info(res.msg)
            }
        })
    }, [dayref, paytyperef, priceref])
    console.log(priceref.current)
    return <div className="fill-order">
        <Header
            title="填写订单"
            leftfg
            nogobanck
            onhiddenFn={() => {
                onflagFn()
            }}
        />
        <div className="fill-order-con">
            <ElecDetail
                detail={detail}
                getDays={(time) => {
                    SetSelectday(time)
                }}
                getType={(type) => {
                    setSelectpay(type)
                }}
            />
            <AllPrice
                detail={detail}
                eledays={seletday}
                codetype={0}
                disamount={0}
                getPrice={(price) => {
                    priceref.current = price
                }}
            />
        </div>
        <Operation
            detail={detail}
            isfill
            payclickFn={canpayFn}
        />
    </div>
}
