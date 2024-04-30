import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import iconCopy from './image/icon-jpaddress-copy.png'
import Toast from '../../components/Toast'

// const listData = [1, 1, 1, 1, 1, 1]
export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [usename, setUsename] = useState()
    const [allnumber, setAllnumber] = useState(0)
    // const [hlnum, setHlnum] = useState(0)
    // const [allb, setAllb] = useState([])
    const [addusdt, setAddusdt] = useState()
    const [addbct, setAddbct] = useState()
    const [addeth, setAddeth] = useState()
    const [addfil, setAddfil] = useState()
    // const [selt, setSelt] = useState(0)
    const [symbles, setSymbles] = useState([])
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((result) => {
            if (result.code === 0) {
                setSymbles(result.data.token)
                dispatch.order.getAddress({
                    token_id: 'USDT',
                    chain_type: result.data.token.filter((item) => { return item.tokenId === 'USDT' })[0].chainTypes.length > 0 ? result.data.token.filter((item) => { return item.tokenId === 'USDT' })[0].chainTypes[0].chainType : ''
                }).then((res) => {
                    if (res.code === 0) {
                        setAddusdt(res.data.address)
                    } else if (res.code === 30000) {
                        Toast.info(res.msg)
                        window.location.href = '/jplogin'
                    } else if (res.code === 35001) {
                        setAddusdt(res.msg)
                    }
                })
                dispatch.order.getAddress({
                    token_id: 'BTC',
                    chain_type: result.data.token.filter((item) => { return item.tokenId === 'BTC' })[0].chainTypes.length > 0 ? result.data.token.filter((item) => { return item.tokenId === 'BTC' })[0].chainTypes[0].chainType : ''
                }).then((res) => {
                    if (res.code === 0) {
                        setAddbct(res.data.address)
                    } else {
                        setAddbct(res.msg)
                    }
                })
                dispatch.order.getAddress({
                    token_id: 'ETH',
                    chain_type: result.data.token.filter((item) => { return item.tokenId === 'ETH' })[0].chainTypes.length > 0 ? result.data.token.filter((item) => { return item.tokenId === 'ETH' })[0].chainTypes[0].chainType : ''
                }).then((res) => {
                    if (res.code === 0) {
                        setAddeth(res.data.address)
                    } else {
                        setAddeth(res.msg)
                    }
                })
                dispatch.order.getAddress({
                    token_id: 'FIL',
                    chain_type: result.data.token.filter((item) => { return item.tokenId === 'FIL' })[0].chainTypes.length > 0 ? result.data.token.filter((item) => { return item.tokenId === 'FIL' })[0].chainTypes[0].chainType : ''
                }).then((res) => {
                    if (res.code === 0) {
                        setAddfil(res.data.address)
                    } else {
                        setAddfil(res.msg)
                    }
                })
            } else {
                Toast.info(result.msg)
            }
        })
        dispatch.public.allAssetinfo({
            unit: 'USDT'
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setAllnumber(res.data.coinAsset)
            }
        })
        // dispatch.order.checkC2cBanlance().then((res) => {
        //     if (res.code === 0) {
        //         var addnum = 0
        //         if (res.length > 0) {
        //             // console.log(res.filter((item) => {
        //             //     return item.tokenName === 'USDT' || item.tokenName === 'ETH' || item.tokenName === 'FIL' || item.tokenName === 'BTC'
        //             // }))
        //             res.data.filter((item) => {
        //                 return item.tokenName === 'USDT' || item.tokenName === 'ETH' || item.tokenName === 'FIL' || item.tokenName === 'BTC'
        //             }).map((item) => {
        //                 addnum += Number(item.btcValue)
        //             })
        //             setAllnumber(addnum)
        //         } else {
        //             setAllnumber(0)
        //         }
        //     }
        // })
        dispatch.public.getUseinfo().then((res) => {
            if (res.code === 0) {
                if (res.data.registerType === 1) {
                    setUsename(res.data.mobile)
                } else {
                    setUsename(res.data.email)
                }
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const blist = [
        { name: 'USDT', address: addusdt, type: 0 },
        { name: 'ETH', address: addeth, type: 1 },
        { name: 'BTC', address: addbct, type: 2 },
        { name: 'FIL', address: addfil, type: 3 }
    ]
    // const types = ['TRC20', 'ERC20', 'OMNI']
    // 点击复制
    const tocopy = useCallback((num) => {
        console.log(num)
        var message = document.getElementById(`address${num}`)
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        var successful = document.execCommand('copy')
        if (successful) {
            Toast.error(t('public.caysucc'))
        } else {
            Toast.error(t('public.cayfail'))
        }
    })
    return (
        <div className="jp-address-page">
            <div className="jp-address-page-player">
                <div className="jp-address-page-player-left">
                    {usename}
                </div>
                <div className="jp-address-page-player-right">
                    <div className="jp-address-page-player-title">
                        Total Balance
                    </div>
                    <div className="jp-address-page-player-num">
                        {Number(allnumber).toFixed(2)} USDT
                    </div>
                </div>
            </div>
            <div className="jp-address-box">
                <div className="jp-address-box-header">
                    <div className="jp-address-box-header-left">
                        受取アドレス、
                    </div>
                    <div className="jp-address-box-header-right">
                    </div>
                </div>
                <div className="jp-address-box-line"></div>
                {blist.map((item, index) => {
                    return <div className="jp-address-box-item" key={index}>
                        <div className="jp-address-box-item-top">
                            <div className="jp-address-box-item-flex">
                                <img className="jp-address-box-item-icon" src={symbles.length > 0 ? symbles.filter((itm) => { return itm.tokenName === item.name })[0].iconUrl : ''}/>
                                {item.name}
                            </div>
                            <div className="jp-address-box-item-flex" onClick={() => { tocopy(index) }}>
                                <img className="jp-address-box-item-icon" src={iconCopy} />
                                コピー
                            </div>
                            {symbles.length > 0 && symbles.filter((itm) => { return itm.tokenId === item.name })[0].chainTypes.length > 0 ? (
                                symbles.filter((itm) => { return itm.tokenId === item.name })[0].chainTypes.map((itms, idx) => {
                                    return <div key={idx} className="jp-address-box-item-currey" onClick={() => {
                                        // setSelt(item.name)
                                        // console.log(symbles.filter((itm) => { return itm.tokenId === item.name })[0].chainTypes[idx].chainType)
                                        dispatch.order.getAddress({
                                            token_id: item.name,
                                            chain_type: itms.chainType
                                        }).then((res) => {
                                            if (!res.code) {
                                                item.name === 'USDT' && setAddusdt(res.address)
                                                item.name === 'BTC' && setAddbct(res.address)
                                                item.name === 'ETH' && setAddeth(res.address)
                                                item.name === 'FIL' && setAddfil(res.address)
                                            }
                                        })
                                    }}>{itms.chainType}</div>
                                })
                            ) : ('')}
                            <div className="jp-address-box-item-select" style={{ display: item.name === 'USDT' ? '' : 'none' }}>
                                {/* {types.map((itm, idx) => {
                                    return <div key={idx} onClick={() => {
                                        setSelt(idx)
                                        dispatch.order.getAddress({
                                            token_id: 'USDT',
                                            chain_type: itm
                                        }).then((res) => {
                                            if (!res.code) {
                                                setAddusdt(res.address)
                                            }
                                        })
                                    }} style={{ color: selt === idx ? '#5CA5B3' : '' }}>{itm}</div>
                                })} */}
                            </div>
                        </div>
                        <div className="jp-address-box-item-bottom" id={`address${index}`}>
                            {item.address}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
