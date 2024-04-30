import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import Orderinfo from './orderinfo'
import Payinfo from './payinfo'
import Toast from '../../components/Toast'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const { tradeNo } = useParams()
    const [orderinfo, setOrderinfo] = useState()
    const [buyday, setBuyday] = useState(
        {
            electricDayMin: '--',
            electricDayMax: '--',
            priceClean: 0,
            taxPercent: 0,
            transferFee: '',
            hashrateUnit: '',
            minerTypeInfo: {
                kw: ''
            },
            maybeEffectiveTimeStr: '',
            userPercent: 0
        }
    )
    useEffect(() => {
        dispatch.order.orderDetail({
            tradeNo: tradeNo,
            auToken: Cookies.get('au_token')
        }).then((res) => {
            if (res.code === 3018) {
                Toast.info(res.msg)
                window.location.href = '/user/signin'
            } else if (res.code === 0) {
                dispatch.product.getProductDetail({
                    productId: res.data.productId
                }).then((res) => {
                    setBuyday(res.data)
                })
                setOrderinfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="orderinfo">
        {orderinfo && <Orderinfo {...{ orderinfo, buyday }}/>}
        {orderinfo && <Payinfo {...{ orderinfo, buyday, tradeNo }}/>}
    </div>
}
