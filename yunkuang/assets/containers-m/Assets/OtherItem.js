import React, { useCallback } from 'react'

import pointdownimg from '../../public/imgs/h5img/other/pointdown.png'

export default (props) => {
    const { maininfo, otherdesc, openFn, ispopup } = props
    const clickFn = useCallback(() => {
        if (otherdesc.type === 0 && !ispopup) {
            openFn()
        }
    }, [])
    return <div className="other-item" onClick={() => {
        clickFn()
    }}>
        <div className="other-item-title">
            {otherdesc.title}<span>(USDT)</span>
        </div>
        <div className="other-item-con">
            <div className="item-con-box" style={{ width: otherdesc.breadth }}>
                <div className="box-num tag-num">{maininfo?.availableAmount}</div>
                <div className="box-desc">
                    <span>{otherdesc.onedesc}</span>
                    {!ispopup && <div className="box-desc-img">
                        <img src={pointdownimg} alt=""/>
                    </div>}
                </div>
            </div>
            <div className="item-con-box" style={{ width: otherdesc.breadth }}>
                <div className="box-num">{maininfo?.dailyCharge}</div>
                <div className="box-desc">
                    <span>{otherdesc.twodesc}</span>
                    {!ispopup && <div className="box-desc-img">
                        <img src={pointdownimg} alt=""/>
                    </div>}
                </div>
            </div>
            {otherdesc.threedesc !== '' && <div className="item-con-box" style={{ width: otherdesc.breadth }}>
                <div className="box-num">{maininfo?.daysRemaining}</div>
                <div className="box-desc">
                    <span>{otherdesc.threedesc}</span>
                    {!ispopup && <div className="box-desc-img">
                        <img src={pointdownimg} alt=""/>
                    </div>}
                </div>
            </div>}
        </div>
    </div>
}
