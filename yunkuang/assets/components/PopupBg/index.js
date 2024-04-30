import React from 'react'

import './index.scss'

export default (props) => {
    const { children } = props
    return <div className="popup-bg">
        {children}
    </div>
}
