import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import pointrightimg from '../../public/imgs/h5img/other/pointright.png'
import canseeimg from '../../public/imgs/h5img/other/cansee.png'

import Line from '../../components-m/Line'
import { Curreylog } from '../../public/js/curryicon'
import Toast from '../../components/Toast'

export default (props) => {
    const dispatch = useDispatch()
    const { item, extractlist } = props
    const [flage, setFlage] = useState(false)
    const [hidden, setHidden] = useState(false)
    const mineClick = useCallback(() => {
        if (item.link === '*') {
            setFlage(!flage)
        } else {
            window.location.href = item.link
        }
    }, [flage])
    // 提取收益
    const extractEarn = useCallback(() => {
        dispatch.order.getextractall().then((res) => {
            if (res.code === 0) {
                window.location.reload()
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="invidis-item">
        <div className="item-con">
            <div className="invidis-item-top">
                <div className="left-top-item">
                    <div className="invidis-item-top-img">
                        <img src={item.imgs} alt=""/>
                    </div>
                    <div className="invidis-item-top-title">
                        {item.name}
                    </div>
                </div>
                <div className="right-item-top" onClick={() => {
                    mineClick()
                }}>
                    <span>{item.mine}</span>
                    <img src={pointrightimg} alt=""/>
                </div>
            </div>
            <div className="invidis-item-bottom">
                <div className="invidis-item-bottom-cury">{item.money}</div>
                <div className="invidis-item-bottom-delor">≈${item.rate}</div>
            </div>
        </div>
        {flage && <div className="earn-list">
            {extractlist && extractlist.map((itm, index) => {
                let curreny = Curreylog.find((e) => e.name === itm.currency)?.logo
                if (itm.currency === 'FILDEFI') {
                    curreny = Curreylog.find((e) => e.name === 'FIL')?.logo
                }
                let yestaday = 0
                let hlyestaday = 0
                if (itm.currency === 'FIL' && itm.filYesterdayTotalIncome) {
                    yestaday = itm.filYesterdayTotalIncome
                    hlyestaday = Number(itm.filYesterdayTotalIncome) * Number(itm.filUsdtRate)
                } else {
                    yestaday = itm.yesterdayTotalIncome
                    hlyestaday = itm.yesterdayTotalIncomeUsdt
                }
                return <div className="earn-list-item" key={index}>
                    <div className="item-curreny-info">
                        <img src={curreny} alt=""/>
                        <div className="info-curreny">
                            <p>{itm.currency}</p>
                            <p className="gray">Bitcoin</p>
                        </div>
                    </div>
                    <div className="item-number-info">
                        <div className="info-value">
                            <p>{itm.myNoExtractIncome}</p>
                            {!hidden && <p className="gray">{yestaday}</p>}
                        </div>
                        <div className="info-right">
                            <p>≈${itm.myNoExtractIncomeUsdt}</p>
                            {!hidden && <p className="gray">{hlyestaday}</p>}
                        </div>
                    </div>
                </div>
            })}
            <Line />
            <div className="earn-get">
                <div className="yestaday-earn">
                    <span>昨日收益</span>
                    <div className="yestaday-earn-see" onClick={() => {
                        setHidden(!hidden)
                    }}>
                        <img src={canseeimg} alt=""/>
                    </div>
                </div>
                <div className="earn-get-btn" onClick={() => {
                    extractEarn()
                }}>提取收益</div>
            </div>
        </div>}
    </div>
}
