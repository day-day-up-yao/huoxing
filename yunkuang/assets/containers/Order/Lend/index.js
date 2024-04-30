import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Toast from '../../../components/Toast'
import Select from './select'
// 质押借币订单
import Lendorder from './lendorder'
// 还款历史
import Refundhistory from './refundhistory'
// 质押率调整历史
import Pledgehistory from './pledgehistory'
// 平仓历史
import Unwindhistory from './unwindhistory'
// 质押借币历史
import Borrowhistory from './borrowhistory'
import './index.scss'
export default ({ startnum }) => {
    const dispatch = useDispatch()
    const [orderlist, setOrderlist] = useState([])
    const [hklist, setHklist] = useState([])
    const [tzlist, setTzlist] = useState([])
    const [pclist, setPclist] = useState([])
    const [orderlisthy, setOrderlisthy] = useState([])
    useEffect(() => {
        dispatch.loan.fixedLoadOrders({
            statusList: [1, 2, 3]
        }).then((res) => {
            if (res.code === 0) {
                setOrderlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.loan.paybackHistory({}).then((res) => {
            if (res.code === 0) {
                setHklist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.loan.pledgeChange({}).then((res) => {
            if (res.code === 0) {
                setTzlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.loan.coveredOrders({}).then((res) => {
            if (res.code === 0) {
                setPclist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.loan.fixedLoadOrders({
            statusList: [4, 5, 6, 7]
        }).then((res) => {
            if (res.code === 0) {
                setOrderlisthy(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="lend">
        <Select {...{ startnum, setOrderlist, setHklist, setTzlist, setPclist, setOrderlisthy }}/>
        {startnum === 0 && <Lendorder {...{ orderlist }}/>}
        {startnum === 1 && <Refundhistory {...{ hklist }}/>}
        {startnum === 2 && <Pledgehistory {...{ tzlist }}/>}
        {startnum === 3 && <Unwindhistory {...{ pclist }}/>}
        {startnum === 4 && <Borrowhistory {...{ orderlisthy }}/>}
    </div>
}
