import React, { useEffect, useState } from 'react'
// import cookie from 'js-cookie'
import './index.scss'
// import { useDispatch } from 'react-redux'
import { isJp } from '../../../public/js/index'
// import { useTranslation } from 'react-i18next'
import '../iconfont/font_1805885_nybvicap8rf/iconfont.css'
import closeimg from '../../../public/imgs/newedition/close.png'
import homelogo from '../../../public/imgs/newpage/homelogo.png'
// import Toast from '../../../components/Toast'
import { FooterIcon } from '../../../public/js/curryicon'
export default (props) => {
    // console.log(FooterIcon)
    // const { t, i18n } = useTranslation()
    const [select, setSelect] = useState()
    // const dispatch = useDispatch()
    // const [msgflag, setmsgflag] = useState(0)
    const [downld, setDownld] = useState()
    useEffect(() => {
        setDownld(typeof window !== 'undefined' && window.sessionStorage.getItem('display'))
        setSelect(window.location.pathname)
    }, [])
    const notaber = ['/download', '/myinvite', '/aboutus', '/helpcenter', '/service', '/Defi', '/Defilist', '/Defidetail/:projectCode', '/coco/Defilist', '/coco/Twodefi', '/lend', '/lend/order', '/lend/refundhistory', '/lend/pledgehistory', '/lend/unwindhistory', '/lend/borrowhistory', '/lend/borrowagreement', '/iosdownload']
    return <div className="layout-footer-m" style={{ display: notaber.indexOf(select) > -1 ? 'none' : '' }}>
        {downld === '1' ? ('') : (
            <div className="footer-download">
                <div className="download-left">
                    <div className="download-left-img">
                        <img src={homelogo} alt="" />
                    </div>
                    <div className="download-left-text">
                        <p>Marsbit</p>
                        <p>{isJp ? 'www.mclouds.jp' : 'www.marsbit.io'}</p>
                    </div>
                </div>
                <div className="download-right">
                    <div className="download-right-text" onClick={() => {
                        window.location.href = '/download'
                    }}>
                        APP Download
                    </div>
                    <div className="download-right-close" onClick={() => {
                        setDownld('1')
                        window.sessionStorage.setItem('display', 1)
                    }}>
                        <img src={closeimg} alt="" />
                    </div>
                </div>
            </div>
        )}

        <div className="footer-con">
            <ul>
                {FooterIcon?.map((item, index) => {
                    return <li key={index}
                        style={{ color: select === item.href ? '#003287' : '#505050' }}
                        onClick={() => {
                            window.location.href = item.href
                        }} >
                        <p>
                            {select === item.href ? (
                                <img src={item.selecticon} />
                            ) : (
                                <img src={item.icon} />
                            )}
                        </p>
                        <p>{item.name}</p>
                        {/* <p className="footer-con-pos" style={{ display: item.href === '/tomall' ? '' : 'none' }}>
                            <img src={hotimg} />
                        </p>
                        {isJp ? ('') : (
                            <p className="footer-con-mine" style={{ display: item.href === 'myinfo' ? msgflag === 0 ? 'none' : '' : 'none' }}></p>
                        )} */}
                    </li>
                })}
            </ul>
        </div>
    </div>
}
