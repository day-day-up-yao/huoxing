import React, { useCallback } from 'react'
import pointleftimg from '../../public/imgs/h5img/other/pointleft.png'
import './index.scss'
export default (props) => {
    const { title, leftfg, textright, clickFn, nogobanck, onhiddenFn } = props
    const handleGoback = useCallback(() => {
        if (nogobanck) {
            onhiddenFn(false)
        } else {
            window.history.go(-1)
        }
    }, [])
    return <div className="publicheader">
        <div className="publicheader-l" onClick={handleGoback}>
            {leftfg && <img src={pointleftimg} alt=""/>}
        </div>
        <div className="publicheader-c">{title}</div>
        <div className="publicheader-r" onClick={() => {
            clickFn()
        }}>{textright}</div>
    </div>
}
