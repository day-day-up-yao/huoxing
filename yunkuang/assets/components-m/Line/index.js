import React from 'react'

import './index.scss'

export default (props) => {
    const { size } = props
    return <div className="line" style={{ margin: `${size ? size + 'px' : 0} 0` }}/>
}
