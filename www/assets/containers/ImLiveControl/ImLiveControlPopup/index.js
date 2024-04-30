import React from 'react'

import './index.scss'

export default (props) => {
    const { title, text, close, ok, okText } = props
    return (
        <div className="im-live-control-popup">
            <div className="im-live-control-popup-title">{title}</div>
            <div className="im-live-control-popup-text">
                {text}
            </div>
            <div className="im-live-control-popup-btn-box" style={{ justifyContent: close && ok ? 'space-between' : 'center' }}>
                {close && <div className="im-live-control-popup-btn close" onClick={close}>取消</div>}
                {ok && <div className="im-live-control-popup-btn ok" onClick={ok}>{okText}</div>}
            </div>
        </div>
    )
}
