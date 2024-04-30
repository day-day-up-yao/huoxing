import React from 'react'
import './index.scss'
import UpdataIcon from './images/update-icon.png'
import newbiIcon from './images/newbi-icon.png'
import bourseIcon from './images/bourse-icon.png'

const DataFocus = (props) => {
    return <div className="data-focus clearfix">
        <div className="focus-item">
            <img src={UpdataIcon} alt=""/>
            <p>{props.dataobj.todayUpdateCount}</p>
            <span>今日更新</span>
        </div>
        <div className="focus-item">
            <img src={newbiIcon} alt=""/>
            <p>{props.dataobj.sevenDayNewCoin}</p>
            <span>一周上新</span>
        </div>
        <div className="focus-item">
            <img src={bourseIcon} alt=""/>
            <p>{props.dataobj.exchangeCount}</p>
            <span>收录平台</span>
        </div>
        <div className="focus-item">
            <a href="https://jinshuju.net/f/U21cuJ" target="_blank">申请收录</a>
        </div>
    </div>
}

export default DataFocus
