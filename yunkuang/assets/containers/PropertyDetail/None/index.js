import React from 'react'
import noorder from '../../../public/imgs/new/noorder.png'
import './index.scss'
export default () => {
    return <div className="none">
        <div className="none-con">
            <div className="none-img">
                <img src={noorder} alt=""/>
            </div>
            <div className="none-text">当前无记录</div>
        </div>
    </div>
}
