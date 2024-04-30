import React from 'react'

import './index.scss'

export default (props) => {
    const { title, desclist } = props
    return <div className="text-info">
        <h3>{title}</h3>
        {desclist && desclist.map((item, index) => {
            return <div className="text-desc" key={index}>{item}</div>
        })}
    </div>
}
