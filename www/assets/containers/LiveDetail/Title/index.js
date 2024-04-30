import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

const Title = (props) => {
    return <div className="title-page-wrapper-noimg">
        <div className="noimg-main">
            <span className="noimg-state">直播中</span>
            <span className="noimg-taxt"> BTC震荡下跌重回60日均线10580，日线指标利多，强势上攻破壁还是遇阻蓄势？</span>
        </div>
        <div className="title-page-wrapper-tatle">
            <span>直播时间：2019年9月4日 20：30</span>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    newsChannelId: state.multi.newsChannelId
})

export default connect(mapStateToProps)(Title)
