import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import './index.scss'

import Header from './header'
import AssetsInfo from './AllassetsInfo'
import AllBg from '../../components-m/AllBg'
import AssetsOther from './AssetsOther'
import Toast from '../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const [userinfo, setUserinfo] = useState()
    const [electricinfo, setElectricinfo] = useState()
    const [assetsinfo, setAssetsinfo] = useState()
    const [btcrate, setBtcrate] = useState(0)
    const [cantract, setCantract] = useState() // 可提取收益列表
    const [mininglist, setMininglist] = useState()
    useEffect(() => {
        // 获取用户信息
        dispatch.public.getUseinfo().then((res) => {
            if (res.code === 0) {
                setUserinfo(res.data)
                getBalance(res.data.userId)
            } else {
                Toast.info(res.msg)
            }
        })
        // 获取用户电费信息
        dispatch.order.prepayMentinfos().then((res) => {
            if (res.code === 0) {
                const elecinfo = res.data.balanceList.find((itm) => itm.currency === 'USDT')
                setElectricinfo(elecinfo)
            } else {
                Toast.info(res.msg)
            }
        })
        // 获取BTC/USDT汇率
        dispatch.product.allRateinfo({
            tokens: 'BTC',
            legalCoins: 'USDT'
        }).then((res) => {
            if (res.code === 0) {
                setBtcrate(res.data[0].rates.USD)
            } else {
                Toast.info(res.msg)
            }
        })
        // 获取算力收益信息
        dispatch.order.inconeListv2().then((res) => {
            if (res.code === 0) {
                let extractlist = []
                // let mininglist = []
                res.data.ls.map((item) => {
                    // if (item.orderIncomeVoList !== null) {
                    //     mininglist = mininglist.concat(item.orderIncomeVoList)
                    // }
                    if (item.myNoExtractIncomeUsdt && item.myNoExtractIncomeUsdt !== '0') {
                        extractlist.push(item)
                    }
                    // return extractlist, mininglist
                })
                setCantract(extractlist)
                // setMininglist(mininglist)
            } else {
                Toast.info(res.msg)
            }
        })
        // 算力订单
        dispatch.order.orderCalculate().then((res) => {
            if (res.code === 0) {
                setMininglist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 获取资产信息
    const getBalance = useCallback((userid) => {
        dispatch.public.getuserBalance({
            uid: userid
        }).then((res) => {
            if (res.code === 0) {
                setAssetsinfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="assets">
        <Header usermsg={userinfo} />
        <AssetsInfo holdassets={assetsinfo} />
        <AllBg
            children={
                <AssetsOther
                    extract={cantract}
                    eleinfo={electricinfo}
                    assetdata={assetsinfo}
                    rate={btcrate}
                    miningdata={mininglist}
                />
            }
        />
    </div>
}
