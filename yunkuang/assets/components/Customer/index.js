import React from 'react'
import './index.scss'
import bingimg from '../../public/imgs/biguser.png'
export default () => {
    return <div className="customer">
        <h2>大客户</h2>
        <div className="aboutus-conimg">
            <div className="aboutus-img">
                <img src={bingimg} />
            </div>
        </div>
        {/* <div className="aboutus-con">
            <p>买更多，惠更多</p>
            <p>单次购满20台，即享受大客户服务</p>
            <p>权益1：尊享大客户价超值购机</p>
            <p>权益2：尊享贵宾礼遇专属客服</p>
            <p>更多权益持续更新中</p>
            <p>联系我们，即刻激活</p>
        </div> */}
    </div>
}
