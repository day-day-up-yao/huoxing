import React, { useState, useCallback } from 'react'
import './index.scss'
import down from '../../../public/img/qrcode-app-download.png'
import kefu from '../../../public/img/kefu.jpg'
// import hxewm from '../../../public/img/qrcode-wechat.png'
// import report from './images/report.png'
// import top from './images/top.png'

const RightDwonload = () => {
    const goTo = () => {
        let scrollToTop = window.setInterval(function () {
            let pos = window.pageYOffset
            if (pos > 0) {
                window.scrollTo(0, pos - 20)
            } else {
                window.clearInterval(scrollToTop)
            }
        }, 2)
    }

    const [curItem, suetCurItem] = useState(null)
    const curItemShow = useCallback((e) => {
        suetCurItem(e.target.getAttribute('data-type'))
    }, [])
    const curItemHide = useCallback((e) => {
        suetCurItem(null)
    }, [])
    const onBtnClick = useCallback(() => {
        window.open('https://jinshuju.net/f/ZMjfI3')
    }, [])
    return <div className="footer-right-dwon">
        <p className={`icon-item interview ${curItem === 'interview' ? 'active' : ''}`}><a data-type='interview' onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span><img src={kefu} alt="" />商务合作</span></p>
        <p className={`icon-item down ${curItem === 'down' ? 'active' : ''}`}><a data-type="down" onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span><img src={down} alt="" />扫描下载APP</span></p>
        {/* <p className={`icon-item ewm ${curItem === 'ewm' ? 'active' : ''}`}><a data-type="ewm" onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span><img src={hxewm} alt="" />关注公众号</span></p> */}
        {/* <p className={`icon-item report ${curItem === 'report' ? 'active' : ''}`} onClick={onBtnClick}><a data-type="report" onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span><img src={report} alt="" /></span></p>
        <p className={`icon-item top ${curItem === 'top' ? 'active' : ''}`} id="iconItemTop" onClick={goTo}><a data-type="top" onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span><img src={top} alt="" /></span></p> */}
        <p className={`icon-item report ${curItem === 'report' ? 'active' : ''}`} onClick={onBtnClick}><a data-type="report" onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span>投诉举报</span></p>
        <p className={`icon-item top ${curItem === 'top' ? 'active' : ''}`} id="iconItemTop" onClick={goTo}><a data-type="top" onMouseMove={curItemShow} onMouseLeave={curItemHide}></a><span>返回顶部</span></p>
    </div>
}

export default RightDwonload
