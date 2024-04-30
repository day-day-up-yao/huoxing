import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const [allb, setAllb] = useState([])
    const [curreylist, setCurreylist] = useState([])
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                setAllb(res.data.token)
            }
        })
        dispatch.product.marketPriceinfo({
            symbol_currency: 'btc,eth,fil'
        }).then((res) => {
            if (res.code === 1) {
                setCurreylist(res.data)
            }
        })
        // dispatch.public.quoteRates({
        //     tokens: 'BTC,ETH,FIL',
        //     legalCoins: 'USD'
        // }).then((res) => {
        //     if (res.code === 0) {
        //         setRatemony(res.data[0].rates.USD)
        //         setRatemonyeth(res.data[1].rates.USD)
        //         setRatemonyfil(res.data[2].rates.USD)
        //     }
        // })
        // dispatch.public.quoteTicker({
        //     symbol: '661.BTCUSDT,661.ETHUSDT,661.FILUSDT'
        // }).then((res) => {
        //     if (res.code === 200) {
        //         setRisefalleth(((Number(res.data[0].c) - Number(res.data[0].o)) / Number(res.data[0].o) * 100))
        //         setRisefall(((Number(res.data[1].c) - Number(res.data[1].o)) / Number(res.data[1].o) * 100))
        //         setRisefallfil(((Number(res.data[2].c) - Number(res.data[2].o)) / Number(res.data[2].o) * 100))
        //     }
        // })
    }, [])
    useEffect(() => {
        setInterval(() => {
            dispatch.product.marketPriceinfo({
                symbol_currency: 'btc,eth,fil'
            }).then((res) => {
                if (res.code === 1) {
                    setCurreylist(res.data)
                }
            })
        }, 4000)
    }, [])
    // const ulist = [
    //     { name: 'BTC', price: ratemony, applies: risefall, imgs: 'https://static.hcdnin.com/BTC.svg' },
    //     { name: 'ETH', price: ratemonyeth, applies: risefalleth, imgs: 'https://static.hcdnin.com/ETH.svg' },
    //     { name: 'FIL', price: ratemonyfil, applies: risefallfil, imgs: 'https://static.hcdnin.com/token/TM9qp6AdxdvCygFK4vGz3-XbGSVlOQCcZeQbvOGrr3U.png' }
    // ]
    return (
        <div className="jp-home-value">
            <div className="jp-home-value-header">
                <div className="jp-home-value-header-left">
                    Market Price
                </div>
                <div className="jp-home-value-header-right">
                    <div className="jp-home-value-header-right-text">
                        24h Change
                    </div>
                </div>
            </div>
            <div className="jp-home-value-line"></div>
            {curreylist.length > 0 && curreylist.map((item, index) => {
                return <div className="jp-home-value-item" key={index}>
                    <div className="jp-home-value-item-flex">
                        <img className="jp-home-value-item-icon" src={allb.length > 0 ? allb.filter((itm) => { return itm.tokenName === item.symbol_dsp })[0].iconUrl : ''}/>
                        {item.symbol_dsp}
                    </div>
                    <div className="jp-home-value-item-flex">$ {Number(item.price_usd).toFixed(2)}</div>
                    <div className={`jp-home-value-item-flex ${Number(item.rise_fall_24h) < 0 ? 'jp-home-value-item-red' : 'jp-home-value-item-green'}`}>{Number(item.rise_fall_24h).toFixed(2)}%</div>
                </div>
            })}
        </div>
    )
}
