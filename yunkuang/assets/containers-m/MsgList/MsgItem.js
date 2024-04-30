import React from 'react'

import importimg from '../../public/imgs/h5img/other/important.png'
import bdlimg from '../../public/imgs/h5img/other/bdl.png'
import bdimg from '../../public/imgs/h5img/other/bd.png'
import zdimg from '../../public/imgs/h5img/other/zd.png'
import { formatTime } from '../../public/js/index'

export default (props) => {
    const { placetop, msginfo, msgtype, toDetailFn } = props
    return <div className="placedtop-item" onClick={() => {
        toDetailFn()
    }}>
        <div className="placedtop-item-left">
            {msginfo.messageImportance === 1 && <div className="important-img">
                <img src={importimg} alt=""/>
            </div>}
            <div className="msg-img">
                <img src={(msginfo.messageStatus === 1 || msginfo.readStatus === 1) ? bdimg : bdlimg} alt=""/>
            </div>
        </div>
        <div className={`placedtop-item-right ${(msginfo.messageStatus === 1 || msginfo.readStatus === 1) && 'public-color'}`}>
            <div className="right-top">
                <div className="right-top-text">{msginfo.title}</div>
                {placetop && <div className="top-img">
                    <img src={zdimg} alt=""/>
                </div>}
            </div>
            <div className="right-center">
                {msginfo.content}
            </div>
            <div className="right-bottom">{formatTime(Number(msgtype !== '2' ? msginfo.createdAt : msginfo.pushAt), 'yyyy-MM-dd hh:mm')}</div>
        </div>
    </div>
}
