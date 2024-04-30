import React from 'react'
import './index.scss'
import Img from '../img/m-search.png'

const NoData = (props) => {
    return <div className="result-img">
        <img src={Img} alt="" />
        <p>很抱歉，没有找到<span>{props.searchKey}</span>相关结果，请修改或者尝试其他搜索词</p>
    </div>
}

export default NoData
