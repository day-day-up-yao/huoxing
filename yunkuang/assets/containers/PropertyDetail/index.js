import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './herder'
import Recharge from './recharge'
import Extract from './extract'
import Site from './site'
import Toast from '../../components/Toast'
export default () => {
    const dispatch = useDispatch()
    const { tokenId } = useParams()
    const [flag, setFlag] = useState(0)
    const [cassetlist, setCassetlist] = useState([])
    const [tassetlist, setTassetlist] = useState([])
    const [znlist, setZnlist] = useState([])
    const [token, setToken] = useState([])
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                setToken(res.data.token)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.public.getUseinfo({}).then((res) => {
            // 站内支付/收益
            dispatch.public.balanceFlow({
                account_id: res.data.defaultAccountId,
                token_id: tokenId,
                limit: 100
            }).then((res) => {
                if (res.code === 0) {
                    setZnlist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
            // 充币记录
            dispatch.order.depositList({
                account_id: res.data.defaultAccountId,
                token_id: tokenId,
                limit: 100
            }).then((res) => {
                if (res.code === 0) {
                    setCassetlist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
            // 提币记录
            dispatch.order.withDrawallist({
                account_id: res.data.defaultAccountId,
                token_id: tokenId,
                limit: 100
            }).then((res) => {
                if (res.code === 0) {
                    setTassetlist(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        })
    }, [])
    return <div className="particulars">
        <Header {...{ flag, setFlag }}/>
        <div className='particulars-con'>
            {flag === 0 && <Recharge {...{ cassetlist, token }}/>}
            {flag === 1 && <Extract {...{ tassetlist, token }}/>}
            {flag === 2 && <Site {...{ znlist, token }}/>}
        </div>
    </div>
}
