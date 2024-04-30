import React, { useState } from 'react'

import closeimg from '../../../public/img/pointtop.png'
import addimg from '../../../public/img/pointdown.png'

import './index.scss'

export default (props) => {
    const { title, children, spread } = props
    const [unfold, setUnfold] = useState(spread)
    return <div className="items-left-item">
        <div className="screen" onClick={() => {
            setUnfold(!unfold)
        }}>
            <div className="screen-title">{title}</div>
            <div className="screen-img">
                <img src={unfold ? closeimg : addimg} alt=""/>
            </div>
        </div>
        {unfold && children}
    </div>
}
