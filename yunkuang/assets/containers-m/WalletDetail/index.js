import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import pointleftimg from '../../public/imgs/h5img/other/pointleft.png'
import walletscar from '../../public/imgs/h5img/other/wallets_car.png'
import miningorderimg from '../../public/imgs/h5img/other/kt_icon.png'
import chongimg from '../../public/imgs/h5img/other/cz_icon.png'
import tiimg from '../../public/imgs/h5img/other/tb_icon.png'
import kjdimg from '../../public/imgs/h5img/other/kjd_icon.png'
import AllBg from '../../components-m/AllBg'
import Toast from '../../components/Toast'
import Notlist from '../../components-m/NolistImg'
import { queryParam } from '../../public/js/index'

import './index.scss'

export default () => {
    const dispatch = useDispatch()
    const selctlist = [
        { title: '全部', type: 0 },
        { title: '充币', type: 1 },
        { title: '提币', type: 2 },
        { title: '其他', type: 3 }
    ]
    const [selecflag, setSelecflag] = useState(0)
    const [recordlist, setRecordlist] = useState([])
    const [allmsg, setAllmsg] = useState()
    // let tokenId = queryParam('tokeninfo')
    useEffect(() => {
        // console.log(JSON.parse(queryParam('tokeninfo')))
        setAllmsg(JSON.parse(queryParam('tokeninfo')))
        if (queryParam('tokeninfo')) {
            getallRecord(JSON.parse(queryParam('tokeninfo')).tokenId)
        }
    }, [])
    // 全部记录
    const getallRecord = useCallback((tokenid) => {
        dispatch.public.getAllflow({
            token_id: tokenid,
            limit: 100
        }).then((res) => {
            if (res.code === 0) {
                setRecordlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 充币记录
    const getChangefn = useCallback(() => {
        dispatch.order.depositList({
            token_id: allmsg.tokenId,
            limit: 100
        }).then((res) => {
            if (res.code === 0) {
                setRecordlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [allmsg])
    // 提币记录
    const getMentionfn = useCallback(() => {
        dispatch.order.withDrawallist({
            token_id: allmsg?.tokenId,
            limit: 100
        }).then((res) => {
            if (res.code === 0) {
                setRecordlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [allmsg])
    // 其他记录
    const getOtherfn = useCallback(() => {
        dispatch.public.balanceFlow({
            token_id: allmsg?.tokenId,
            limit: 100
        }).then((res) => {
            if (res.code === 0) {
                setRecordlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [allmsg])
    const selectBtnfn = useCallback((num) => {
        setSelecflag(num)
        if (!allmsg) return
        if (num === 0) {
            getallRecord(allmsg?.tokenId)
        }
        if (num === 1) {
            getChangefn()
        }
        if (num === 2) {
            getMentionfn()
        }
        if (num === 3) {
            getOtherfn()
        }
    }, [allmsg])
    return <div className="wallet-detail">
        <div className="wallet-detail-header">
            <div className="header-img" onClick={() => {
                window.history.go(-1)
            }}>
                <img src={pointleftimg} alt=""/>
            </div>
            <div className="header-center">
                <img src={allmsg?.iconUrl} alt=""/>
                <span className="header-center-currey">{allmsg?.tokenId}</span>
                <span>{allmsg?.tokenFullName}</span>
            </div>
            <div className="header-img"/>
        </div>
        <div className="wallet-detail-top">
            <div className="top-number">
                <div className="top-number-btc">{allmsg?.total ? Number(allmsg?.total).toFixed(8) : 0}</div>
                <div className="top-number-usdt">
                    <span>≈ {allmsg?.total ? Number(allmsg?.total) * Number(allmsg?.rate) : 0}</span>
                    <span>USDT</span>
                </div>
            </div>
            <div className="top-car">
                <div className="item-car">
                    <img src={walletscar} alt=""/>
                    <div className="car-text">
                        <div className="text-top">{allmsg?.free ? Number(allmsg?.free).toFixed(8) : 0}</div>
                        <div className="text-desc">可用余额</div>
                    </div>
                </div>
                <div className="item-car">
                    <img src={walletscar} alt=""/>
                    <div className="car-text">
                        <div className="text-top other-color">{allmsg?.locked ? Number(allmsg?.locked).toFixed(8) : 0}</div>
                        <div className="text-desc">锁定资产</div>
                    </div>
                </div>
            </div>
        </div>
        <AllBg
            children={
                <div className="wallet-all">
                    <div className="wallet-all-select">
                        {selctlist.map((item, index) => {
                            return <div
                                key={index}
                                className={`all-select-item ${selecflag === index && 'pitch-on-item'}`}
                                onClick={() => {
                                    selectBtnfn(index)
                                }}
                            >
                                {item.title}
                                {selecflag === index && <div className="pitch-on-item-line" />}
                            </div>
                        })}
                    </div>
                    <div className="wallet-all-list">
                        {recordlist && recordlist.length > 0 ? (
                            recordlist.map((item, index) => {
                                const quantity = item.quantity ? item.quantity : item.change
                                const desc = item.statusDesc ? item.statusDesc : item.flowType
                                const status = item.statusIntCode ? item.statusIntCode : 0
                                let icon = miningorderimg
                                if (selecflag === 1) {
                                    icon = chongimg
                                }
                                if (selecflag === 2) {
                                    icon = tiimg
                                }
                                if (selecflag === 3) {
                                    icon = kjdimg
                                }
                                return <div className="wallet-all-list-item" key={index}>
                                    <div className="wallet-all-list-item-left">
                                        <img src={icon} alt=""/>
                                        <div className="all-item-text">
                                            <p>矿机代售收款</p>
                                            <div className="all-item-text-bottom">
                                                <div className={`text-bottom-round ${(status === 7 || status === 5) && 'fail-round'}`}/>
                                                <div className="text-bottom-status">{desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet-all-list-item-right">
                                        <div className="all-item-right-number">{quantity}</div>
                                        <div className="all-item-right-time">{selecflag !== 3 && moment(Number(item.walletHandleTime)).format('DD/MM/YYYY HH:mm:ss')}</div>
                                    </div>
                                </div>
                            })
                        ) : (
                            <Notlist/>
                        )}
                    </div>
                </div>
            }
        />
        <div className="bootom-btn">
            <div className="bootom-btn-item">充币</div>
            <div className="bootom-btn-item">提币</div>
        </div>
    </div>
}
