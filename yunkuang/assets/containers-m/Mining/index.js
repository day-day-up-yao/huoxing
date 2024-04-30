import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../components-m/Headers'
import useelecimg from '../../public/imgs/h5img/other/useelec.png'
import hashmallimg from '../../public/imgs/h5img/other/hashmall.png'
import AllBg from '../../components-m/AllBg'
import HashItem from './HashItem'
import Toast from '../../components/Toast'

import './index.scss'

export default () => {
    const [allnum, setAllnum] = useState({
        totalIncomeUsdt: 0,
        yesterdayIncomeUsdt: 0,
        ls: []
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch.order.inconeListv2().then((res) => {
            if (res.code === 0) {
                // let hashdata = []
                setAllnum(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="mining">
        <Header title={'我的算力'} />
        <div className="mining-alldata">
            <div className="alldata-info">
                <div className="into-number">${allnum.yesterdayIncomeUsdt}</div>
                <div className="into-text">昨日收益</div>
            </div>
            <div className="alldata-info">
                <div className="into-number">${allnum.totalIncomeUsdt}</div>
                <div className="into-text">累计收益</div>
            </div>
        </div>
        <div className="mining-alldata">
            <div className="alldata-info">
                <img src={useelecimg} alt=""/>
                <div className="info-btn">用电管理</div>
            </div>
            <div className="alldata-info" onClick={() => {
                window.location.href = '/'
            }}>
                <img src={hashmallimg} alt=""/>
                <div className="info-btn">算力商城</div>
            </div>
        </div>
        <AllBg children={
            allnum.ls.length > 0 && allnum.ls.map((item, index) => {
                return <HashItem key={index} hashinfo={item} />
            })
        } />
    </div>
}
