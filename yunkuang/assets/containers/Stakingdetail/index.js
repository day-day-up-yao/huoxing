import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import './index.scss'
export default () => {
    const { productId } = useParams()
    const [sdetail, setSdetail] = useState({
        referenceApr: '',
        upLimitLots: '',
        soldLots: '',
        perLotAmount: '',
        timeLimit: '',
        tokenName: ''
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch.staking.getStakingdetail({
            product_id: productId
        }).then((res) => {
            console.log(res)
            if (!res.code) {
                setSdetail(res)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="stakdetail">
        <h3>{sdetail.productName}</h3>
        <div className="stakdetail-top">
            <div className="stakdetail-top-left">
                <ul>
                    <li>
                        <p style={{ color: '#F69400' }}>{sdetail.referenceApr}%</p>
                        <p>预期年化</p>
                    </li>
                    <li>
                        <p>{(sdetail.upLimitLots - sdetail.soldLots) * Number(sdetail.perLotAmount)}</p>
                        <p>剩余开放额度{sdetail.tokenName}</p>
                    </li>
                    <li>
                        <p>{sdetail.timeLimit}</p>
                        <p>锁定期限</p>
                    </li>
                </ul>
                <div className="stakdetail-top-left-progress">
                    <div className="stakdetail-top-left-progress-con"></div>
                </div>
                <div className="stakdetail-top-left-num">
                    <span>当前进度{(sdetail.soldLots / sdetail.upLimitLots).toFixed(2)}%</span>
                    <span>{sdetail.soldLots * Number(sdetail.perLotAmount)}/{sdetail.upLimitLots * Number(sdetail.perLotAmount)}</span>
                </div>
            </div>
            <div className="stakdetail-top-right">
                <div className="stakdetail-top-right-item">
                    <p>钱包可用额度</p>
                    <p>充值</p>
                </div>
                <div className="stakdetail-top-right-item">
                    <p>当前申购份数</p>
                    <p>55份</p>
                </div>
                <div className="stakdetail-top-right-item">
                    <p>申购份数</p>
                    <p>1份 = 100 BDDA</p>
                </div>
            </div>
        </div>
    </div>
}
