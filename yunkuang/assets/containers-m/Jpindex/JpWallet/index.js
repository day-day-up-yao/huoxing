import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import './index.scss'
import iconWithdraw from '../image/icon-jpindex-withdraw.png'
import iconDeposit from '../image/icon-jpindex-deposit.png'
import Toast from '../../../components/Toast'
// const listData = ['BTC', 'ETH', 'USDT', 'FIL']

export default () => {
    // const { t } = useTranslation()
    const dispatch = useDispatch()
    const [assetlist, setAssetlist] = useState([])
    const [btclist, setBtclist] = useState(false)
    const [usdtlist, setUsdtlist] = useState(false)
    const [ethlist, setEthlist] = useState(false)
    const [fillist, setFillist] = useState(false)
    useEffect(() => {
        dispatch.order.checkC2cBanlance().then((res) => {
            if (res.code === 0) {
                if (Array.isArray(res.data)) {
                    // 资产列表为空是手动添加币种全部显示
                    if (res.data.length === 0) {
                        setBtclist(true)
                        setUsdtlist(true)
                        setEthlist(true)
                        setFillist(true)
                    } else {
                        var datas = []
                        let hasBtc = false
                        let hasUsdt = false
                        let hasEth = false
                        let hasFil = false
                        res.data.map((item) => {
                            if (item.tokenId.toUpperCase() === 'BTC') {
                                datas.push(item)
                                hasBtc = true
                            }
                            if (item.tokenId.toUpperCase() === 'USDT') {
                                datas.push(item)
                                hasUsdt = true
                            }
                            if (item.tokenId.toUpperCase() === 'ETH') {
                                datas.push(item)
                                hasEth = true
                            }
                            if (item.tokenId.toUpperCase() === 'FIL') {
                                datas.push(item)
                                hasFil = true
                            }
                            // if (item.tokenId.toUpperCase() === 'BDDA') {
                            //     datas.push(item)
                            // }
                            // if (item.tokenId.toUpperCase() === 'BDDB') {
                            //     datas.push(item)
                            // }
                        })
                        // 是否显示资产列表里没有的币种
                        setBtclist(!hasBtc)
                        setUsdtlist(!hasUsdt)
                        setEthlist(!hasEth)
                        setFillist(!hasFil)
                        setAssetlist(datas)
                        // var addnum = 0
                        // if (datas !== '') {
                        //     datas.map((item) => {
                        //         addnum += Number(item.btcValue)
                        //     })
                        //     setAllnumber(addnum)
                        // } else {
                        //     setAllnumber(0)
                        // }
                    }
                }
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('检查币币账户错误')
        })
    }, [])
    // 当资产里面没有币种手动添加需要显示的币种
    const ratelist = [
        { name: 'BTC', flage: btclist },
        { name: 'ETH', flage: ethlist },
        { name: 'USDT', flage: usdtlist },
        { name: 'FIL', flage: fillist }
    ]
    return (
        <div className="jp-home-wallet">
            {/* <div className="jp-home-wallet-item">
                <div className="jp-home-wallet-name">BTC</div>
                <div className="jp-home-wallet-num">103.22 BTC</div>
                <div className="jp-home-wallet-btnbox">
                    <img className="jp-home-wallet-btn" src={iconWithdraw} />
                    <img className="jp-home-wallet-btn" src={iconDeposit} />
                </div>
            </div> */}
            {ratelist.map((item, index) => {
                return <div className="jp-home-wallet-item" key={index} style={{ display: item.flage === true ? '' : 'none' }}>
                    <div className="jp-home-wallet-name">{item.name}</div>
                    <div className="jp-home-wallet-num">0 {item.name}</div>
                    <div className="jp-home-wallet-btnbox">
                        <img className="jp-home-wallet-btn" src={iconWithdraw} onClick={() => {
                            window.location.href = `/jpextract?type=${item.name}`
                        }}/>
                        <img className="jp-home-wallet-btn" src={iconDeposit} onClick={() => {
                            window.location.href = '/jpaddress'
                        }}/>
                    </div>
                </div>
            })}
            {assetlist.map((item, index) => {
                return <div className="jp-home-wallet-item" key={index}>
                    <div className="jp-home-wallet-name">{item.tokenName}</div>
                    <div className="jp-home-wallet-num">{Number(item.free).toFixed(3)} {item.tokenName}</div>
                    <div className="jp-home-wallet-btnbox">
                        <img className="jp-home-wallet-btn" src={iconWithdraw} onClick={() => {
                            window.location.href = `/jpextract?type=${item.tokenName}`
                        }}/>
                        <img className="jp-home-wallet-btn" src={iconDeposit} onClick={() => {
                            window.location.href = '/jpaddress'
                        }}/>
                    </div>
                </div>
            })}
            {/* {
                listData && listData.map((item, index) => {
                    return (
                        <div className="jp-home-wallet-item" key={index}>
                            <div className="jp-home-wallet-name">{item}</div>
                            <div className="jp-home-wallet-num">103.22 BTC</div>
                            <div className="jp-home-wallet-btnbox">
                                <img className="jp-home-wallet-btn" src={iconWithdraw} />
                                <img className="jp-home-wallet-btn" src={iconDeposit} />
                            </div>
                        </div>
                    )
                })
            } */}
        </div>
    )
}
