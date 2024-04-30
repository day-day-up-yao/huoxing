import React from 'react'

import Popup from '../../../components-m/Popup'
import succimg from '../../../public/imgs/new/changesucc.png'

import './index.scss'

export default () => {
    return <Popup
        children={
            <div className="submitinfo">
                <div className="submitinfo-con">
                    <img src={succimg} alt=""/>
                    <p>支付成功</p>
                    <div>倒计时</div>
                    <div className="submitinfo-btn">
                        <div className="btn-item">查看矿机</div>
                        <div className="btn-item">查看订单</div>
                    </div>
                </div>
            </div>
        }
    />
}