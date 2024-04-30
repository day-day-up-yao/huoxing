import React from 'react'

import noseeimg from '../../public/imgs/h5img/other/no_see.png'

import './index.scss'

export default (props) => {
    const { btcnum, usdtnum } = props
    return <>
        <div className="all-assets-title">
            <div className="left-title">
                <span>持有资产估值</span>
                <span>(BTC)</span>
            </div>
            <div className="no-see">
                <img src={noseeimg} alt=""/>
            </div>
        </div>
        <div className="assets-number">
            <div className="num-curreny">{btcnum}</div>
            <div className="num=dello">≈ ${usdtnum}</div>
        </div>
    </>
}
