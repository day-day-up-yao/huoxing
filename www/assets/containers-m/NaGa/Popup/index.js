import React from 'react'

import './index.scss'

export default (props) => {
    const { children, isother } = props
    return <div className={`popup-m ${isother && 'other-popup'}`}>
        {children}
    </div>
}
