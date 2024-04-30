import React from 'react'

import './index.scss'

export default (props) => {
    const { children, onClose } = props
    return <div className="popup" onClick={() => {
        if (onClose) {
            onClose()
        }
    }}>
        {children}
    </div>
}
