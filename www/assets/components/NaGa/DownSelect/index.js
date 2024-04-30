import React, { useState } from 'react'

import pointdown from '../../../public/img/pointdown.png'

import './index.scss'

export default (props) => {
    const { title, little, itemlist } = props
    const [show, setShow] = useState(false)
    const [selectname, setSelectname] = useState(title)
    return <div className={`down-select ${little && 'little-select'}`}>
        <div className="down-select-con" onClick={() => {
            setShow(!show)
        }}>
            <span>{selectname}</span>
            <img src={pointdown} alt=""/>
        </div>
        {show && <div className="down-select-list">
            {itemlist.map((item, index) => {
                return <div className="down-select-list-item" key={index} onClick={() => {
                    setSelectname(item)
                    setShow(false)
                }}>{item}</div>
            })}
        </div>}
    </div>
}
