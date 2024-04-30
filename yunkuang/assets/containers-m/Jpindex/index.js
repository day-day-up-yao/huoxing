import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import JpWallet from './JpWallet'
import JpTransaction from '../../components-m/JpTransaction'
import JpValue from './JpValue'
import Toast from '../../components/Toast'
import iconCopy from '../JpAddress/image/icon-jpaddress-copy.png'
export default () => {
    const isindex = true
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [usename, setUsename] = useState()
    const [useid, setUseid] = useState()
    const [allnumber, setAllnumber] = useState(0)
    // const [hlnum, setHlnum] = useState(0)
    useEffect(() => {
        // dispatch.public.allAssetinfo({
        //     unit: 'BTC'
        // }).then((res) => {
        //     if (res.code) {
        //         Toast.info(res.msg)
        //     } else {
        //         setAllnumber(res.coinAsset)
        //     }
        //     console.log(res)
        // })
        // dispatch.public.quoteRates({
        //     tokens: 'BTC',
        //     legalCoins: 'USD'
        // }).then((res) => {
        //     if (res.code === 0) {
        //         setHlnum(res.data[0].rates.USD)
        //     }
        // })
        // dispatch.order.checkC2cBanlance().then((res) => {
        //     if (!res.code) {
        //         var addnum = 0
        //         if (res.length > 0) {
        //             // console.log(res.filter((item) => {
        //             //     return item.tokenName === 'USDT' || item.tokenName === 'ETH' || item.tokenName === 'FIL' || item.tokenName === 'BTC'
        //             // }))
        //             res.filter((item) => {
        //                 return item.tokenName === 'USDT' || item.tokenName === 'ETH' || item.tokenName === 'FIL' || item.tokenName === 'BTC'
        //             }).map((item) => {
        //                 addnum += Number(item.btcValue)
        //             })
        //             setAllnumber(addnum)
        //         } else {
        //             setAllnumber(0)
        //         }
        //     } else if (res.code === 30000) {
        //         window.location.href = '/jplogin'
        //     }
        // })
        dispatch.public.allAssetinfo({
            unit: 'USDT'
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setAllnumber(res.data.coinAsset)
            }
            if (res.code === 30000) {
                window.location.href = '/jplogin'
            }
        })
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.code === 0) {
                setUsename(res.data.email)
                setUseid(res.data.userId)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 点击复制
    const tocopy = useCallback(() => {
        var message = document.getElementById('address')
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
        <div className="jp-index">
            <div className="jp-index-player">
                <div className="jp-index-player-left">
                    <p>{usename}</p>
                    <div>UID：
                        <span id="address">{useid}</span>
                        <img src={iconCopy} onClick={tocopy}/>
                    </div>
                </div>
                <div className="jp-index-player-right">
                    <div className="jp-index-player-title">
                    Total Balance
                    </div>
                    <div className="jp-index-player-num">
                        {Number(allnumber).toFixed(2)} USDT
                    </div>
                </div>
            </div>
            <JpWallet />
            <JpTransaction {...{ isindex }}/>
            <JpValue />
        </div>
    )
}
