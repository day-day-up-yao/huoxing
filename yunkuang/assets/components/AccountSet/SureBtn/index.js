import React from 'react'

import './index.scss'

export default (props) => {
    const { surebtn, clickbtnFn, isset } = props
    return <div className="confrim">
        <div
            className={`can-btn ${surebtn && 'sure-btn'}`}
            onClick={() => {
                clickbtnFn()
            }}
        >{isset ? '确定' : '修改'}</div>
    </div>
}
