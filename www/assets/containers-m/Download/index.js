import React, { useEffect, useState } from 'react'

import './index.scss'

import { isWechat, isAndroid } from 'multiPublic'
import { getAndroidDownloadUrl } from 'multiRedux/actions/public'
import Footer from '../../../_multiappsharing/components-m/Layout/Footer'
import Toast from 'multiComps/Toast'
import TopIcon from './Image/m-download-top.png'
import PhoneIcon from './Image/m_download_ipone.png'
import WXTipsIcon from '../../public/img/wechat-download-tips.png'
// import mLogo from './Image/m-b-logo.png'
export default () => {
    const [and, setAnd] = useState('')
    const [apple, setApple] = useState()
    const [isWx, setIsWx] = useState(false)
    const google = 'https://play.google.com/store/apps/details?id=com.linekong.mars24'
    useEffect(() => {
        setIsWx(isWechat())
        if (isAndroid()) {
            setApple(0)
            getAndroidDownloadUrl().then(function (res) {
                if (res.code === 1) {
                    setAnd(res.obj)
                } else {
                    Toast.info(res.msg)
                }
            }).catch(function (err) {
                throw err
            })
        } else {
            setApple('https://apps.apple.com/cn/app/id1343659925')
        }
    }, [])
    // console.log(and)
    return (
        <div className="m-download-page">
            <div className="download-top">
                <img src={TopIcon} alt="" />
            </div>
            <div className="download-info">
                聚焦全球区块链科技前沿动态
            </div>
            <div className="download-phone">
                <img src={PhoneIcon} alt="" />
            </div>
            {apple !== 0 && <a href={apple} target="_blank" id="downloadBtnIos" className="download-btn"/>}
            {apple === 0 && <div className="android">
                <a href={google} id="downloadBtnGoggle" className="download-btn"></a>
                <a href={and} id="downloadBtnAndroid" className="download-btn"></a>
            </div>}
            {isWx &&
                <div className="download-app-wechat-tips">
                    <div className="download-app-img">
                        <img src={WXTipsIcon} alt="请在浏览器中打开" />
                    </div>
                </div>
            }
            <Footer/>
            {/* <div className="bottom-cont">
                <p className="logo">
                    <a href="https://www.marsbit.co">
                        <img src={mLogo} alt="" />
                    </a>
                </p>
                <p className="share" style={{ display: 'none' }}>
                    <a href="https://twitter.com/Mars_Finance" target="_blank" className="tw"></a>
                    <a href="https://t.me/MarsFinance" target="_blank" className="db"></a>
                </p>
                <p className="slogan">商务合作：17611771363(手机号)</p>
                <p className="copyright">Copyright MarsBit All Rights Reserved.</p>
                <div className="clearfix"></div>
            </div> */}
        </div>
    )
}
