import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import Header from '../../components-m/Headers'
import TotalAssets from '../../components-m/TotalAssets'
import Allbg from '../../components-m/AllBg'
import Toast from '../../components/Toast'

import './index.scss'

export default () => {
    const env = process.env.NODE_ENV
    const dispatch = useDispatch()
    const [allassets, setAllassets] = useState()
    const [allrate, setAllrate] = useState()
    const [wallet, setWallet] = useState()
    useEffect(() => {
        dispatch.public.getuserBalance({
            uid: Cookies.get('user_id')
        }).then((res) => {
            if (res.code === 0) {
                setWallet(res.data)
                // console.log(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                getrateFn(res.data.token)
                getAssetfn(res.data.token)
            }
        })
    }, [])
    const getrateFn = useCallback((data) => {
        const cuurreylist = []
        data.map((item) => {
            if (item.tokenName !== 'TETH') {
                cuurreylist.push(item.tokenName)
            }
        })
        dispatch.product.allRateinfo({
            tokens: cuurreylist.toString(),
            legalCoins: 'USDT'
        }).then((resls) => {
            if (resls.code === 0) {
                setAllrate(resls.data)
            } else {
                Toast.info(resls.msg)
            }
        })
    }, [])
    const getAssetfn = useCallback((list) => {
        dispatch.product.checkC2cBanlance({}).then((result) => {
            if (result.code === 0) {
                const data = list
                if (env === 'production') {
                    data.splice(data.length - 1, 1)
                }
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < result.data.length; j++) {
                        if (result.data[j].tokenName === data[i].tokenName) {
                            data[i].free = result.data[j].free
                            data[i].locked = result.data[j].locked
                            data[i].total = result.data[j].total
                        }
                    }
                }
                setAllassets(data)
            }
        })
    }, [])
    return <div className="my-wallet">
        <Header
            title="钱包"
            leftfg
        />
        <div className="wallet-top">
            <TotalAssets
                btcnum={wallet?.walletBalanceBTC}
                usdtnum={wallet?.walletBalanceUSDT}
            />
            <div className="wallet-btn-list">
                <div className="btn-item" onClick={() => {
                    window.location.href = '/chargemon'
                }}>充币</div>
                <div className="btn-item" onClick={() => {
                    window.location.href = '/wellatmention'
                }}>提币</div>
            </div>
        </div>
        <Allbg
            children={
                <div className="wallet-list">
                    {allassets && allassets.map((item, index) => {
                        const rate = allrate?.find((itm) => itm.token === item.tokenName)?.rates.USDT
                        let uprice = 0
                        if (rate && item.free) {
                            uprice = Number(rate) * Number(item.free)
                            item.rate = rate
                        }
                        return <div className="wallet-list-item" key={index} onClick={() => {
                            window.location.href = `/propertydetail?tokeninfo=${JSON.stringify(item)}`
                        }}>
                            <div className="wallet-left">
                                <img src={item.iconUrl} alt=""/>
                                <div className="wallet-left-text">
                                    <p>{item.tokenName}</p>
                                    <span>{item.tokenFullName}</span>
                                </div>
                            </div>
                            <div className="wallet-right">
                                <div className="wallet-right-text">
                                    <p>{item.free ? Number(item.free).toFixed(8) : 0}</p>
                                    <span>≈${uprice}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            }
        />
    </div>
}
