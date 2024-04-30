import React from 'react'

import nolistimg from '../../public/imgs/h5img/other/no_list.png'

import './index.scss'

export default (props) => {
    const { heightly } = props
    return <div className="no-listimg" style={{ height: heightly }}>
        <img src={nolistimg} alt=""/>
        <p>暂无记录</p>
    </div>
}
