import React from 'react'

import Popup from '../Popup'

import './index.scss'

export default (props) => {
    const { text, concelFn, sureFn } = props
    return <Popup
        children={
            <div className="again-confirm">
                <div className="confirm-text">{text}</div>
                <div className="confirm-btn">
                    <div className="again-btn" onClick={() => {
                        concelFn()
                    }}>取消</div>
                    <div className="again-btn btn-sure" onClick={() => {
                        sureFn()
                    }}>确定</div>
                </div>
            </div>
        }
    />
}
