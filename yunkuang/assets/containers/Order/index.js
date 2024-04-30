import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import cookie from 'js-cookie'
import Activeherder from './active_header'
import Lend from './Lend/index'
import Mining from './Mining/index'
import Payelectric from './Payelectric/index'
import Defiorder from './Defi/index'
import Deposit from './Deposit/index'
import CostOrder from './Cost'
import Toast from '../../components/Toast/index'
import { queryParam } from '../../public/js/index'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const [startnum, setStartnum] = useState(0)
    const [ordernum, setOrdernum] = useState(0)
    const [minlist, setMinlist] = useState([])
    const [defas, setDefas] = useState([])
    const [cblist, setCblist] = useState([])
    const [gdlist, setGdlist] = useState([])
    const [costlist, setCostlist] = useState([])
    useEffect(() => {
        if (queryParam('num') === null) {
            setOrdernum(0)
        } else {
            if (queryParam('num') === '') {
                setOrdernum(0)
            } else {
                setOrdernum(Number(queryParam('num')))
            }
        }
        if (queryParam('num')) {
            Interface(Number(queryParam('num')))
        } else {
            Interface(0)
        }
    }, [])
    const Interface = useCallback((num) => {
        if (num === 0) {
            dispatch.order.orderCalculate({
                orderState: ''
            }).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        setMinlist(res.data)
                    } else {
                        setMinlist([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (num === 1) {
            dispatch.order.electricOrderlist({}).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        setGdlist(res.data)
                    } else {
                        setGdlist([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (num === 2) {
            dispatch.order.collectOrder({
                status: 0
            }).then((res) => {
                if (res.code === 0) {
                    setCostlist(res.data !== null ? res.data : [])
                }
            })
        }
        if (num === 5) {
            dispatch.product.prodOederlist({
                uid: cookie.get('user_id')
            }).then((res) => {
                if (res.status === 'ok') {
                    if (res.data !== null) {
                        setDefas(res.data)
                    }
                }
            })
        }
        if (num === 4) {
            dispatch.product.allRevenue({
                uid: cookie.get('user_id')
            }).then((res) => {
                console.log(res)
                if (res.status === 'ok') {
                    if (res.data !== null) {
                        setCblist(res.data)
                    }
                }
            })
        }
    })
    return <div className="neworder">
        <Activeherder {...{ startnum, setStartnum, ordernum, setOrdernum, setMinlist, Toast, setDefas, setCblist, setGdlist, setCostlist }}/>
        <div className="neworder-con">
            {ordernum === 3 && <Lend {...{ startnum }}/>}
            {ordernum === 0 && <Mining {...{ minlist, setMinlist, startnum }}/>}
            {ordernum === 1 && <Payelectric {...{ gdlist }}/>}
            {ordernum === 5 && <Defiorder {...{ defas }}/>}
            {ordernum === 4 && <Deposit {...{ cblist }}/>}
            {ordernum === 2 && <CostOrder {...{ costlist }}/>}
        </div>
    </div>
}
