import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUnit } from 'multiPublic'

import './index.scss'
import { getDefiTotalLocked, getDefiMarketCap, getDefiItemInfo } from '../../../redux/actions/home'
import defiLogo from '../image/defi-icon.png'
import defiIcon1 from '../image/defi-icon-uniswap.png'
import defiIcon2 from '../image/defi-icon-definer.png'
import defiIcon3 from '../image/defi-icon-huoxing.png'

const defiListDef = [
    {
        name: 'Uniswap V2',
        icon: defiIcon1,
        rate: '',
        text: '总锁仓量',
        span: '',
        homePage: '',
        miningPage: 'https://news.huoxing24.com/20200917174943950223.html'
    },
    {
        name: 'DeFiner',
        icon: defiIcon2,
        rate: '',
        text: '存资产挖矿年化：',
        span: '10%-31%',
        homePage: 'https://definer.org/zh-cn.html',
        miningPage: 'https://news.huoxing24.com/20201102233901959550.html'
    },
    {
        name: '火星DeFi矿池',
        icon: defiIcon3,
        rate: '',
        text: '最高年化收益：',
        span: '30%-110%',
        homePage: 'https://www.mclouds.io/Defi',
        miningPage: 'https://news.huoxing24.com/20200909111036673847.html'
    }
]

export default () => {
    const { defiData } = useSelector((state) => ({
        defiData: state.home.defiData
    }))
    const dispatch = useDispatch()
    const [defiList, setDefiList] = useState(defiListDef)

    useEffect(() => {
        dispatch(getDefiTotalLocked())
        dispatch(getDefiMarketCap())
        dispatch(getDefiItemInfo('Uniswap V2'))
    }, [dispatch])

    useEffect(() => {
        // vue和react默认都是浅监听，只会监听数据的第一层，内层数据发生改变，并不会监听到。
        // 先将原数组深拷贝，赋值给新数组，再修改新数组，将修改后的新数组传递进去，这样就会引起视图更新。
        let list = defiList.concat()
        if (JSON.stringify(defiData.infoData) !== '{}') {
            list[0].name = defiData.infoData.name
            // data.icon = defiData.infoData.logoUrl
            list[0].rate = defiData.infoData.lockedDayChangeRate
            list[0].text = '总锁仓量：' + getUnit(defiData.infoData.locked)
            list[0].homePage = defiData.infoData.website
            setDefiList(list)
        }
    }, [defiData.infoData])

    return (
        <div className="defi-market-data-page">
            <div className="defi-market-data-cont">
                <div className="defi-market-data-left">
                    <div className="defi-market-data-titleBox">
                        <img className="defi-market-data-titleBoxIcon" src={defiLogo} />
                        <div className="defi-market-data-title"> DeFi Today </div>
                    </div>
                    <div className="defi-market-data-leftItem">
                        <div className="defi-market-data-leftItemNum1">{getUnit(defiData.totallocked)}</div>
                        <div className="defi-market-data-leftItemNum2">总锁仓额(USD)</div>
                    </div>
                    <div className="defi-market-data-leftItem">
                        <div className="defi-market-data-leftItemNum1">{getUnit(defiData.marketCap)}</div>
                        <div className="defi-market-data-leftItemNum2">总市值(USD)</div>
                    </div>
                </div>
                <div className="defi-market-data-right">
                    {
                        defiList && defiList.length > 0 && defiList.map((item, index) => {
                            return (
                                <div className="defi-market-data-rightItem" key={index}>
                                    <a href={item.homePage} target="_blank">
                                        <img className="defi-market-data-rightItemIcon" src={item.icon} />
                                    </a>
                                    <div className="defi-market-data-rightItemBar">
                                        <div className="defi-market-data-rightItemNameBar">
                                            <a href={item.homePage} target="_blank">
                                                <div className="defi-market-data-rightItemName">{item.name}</div>
                                            </a>
                                            {item.rate !== '' ? <div className="defi-market-data-rightItemNum" style={{ color: item.rate > 0 ? '#4fae80' : '#c12a2a' }}>
                                                {item.rate > 0 ? `+${item.rate.toFixed(2)}%` : `${item.rate.toFixed(2)}%`}
                                            </div> : null}
                                        </div>
                                        <div className="defi-market-data-rightItemNum2">
                                            {item.text}
                                            <span style={{ color: '#4fae80' }}>{item.span}</span>
                                        </div>
                                        <div className="defi-market-data-rightItemNameBar">
                                            <a className="defi-market-data-rightItemBtn" href={item.homePage} target="_blank">去挖矿</a>
                                            <a className="defi-market-data-rightItemBtn" href={item.miningPage} target="_blank">挖矿教程</a>
                                        </div>
                                    </div>
                                    {index !== 2 ? <div className="defi-market-data-rightLine"></div> : null}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
