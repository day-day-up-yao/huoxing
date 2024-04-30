import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { langWhat, richtext, tichtextzh } from '../../public/js/index'
import './index.scss'
import Toast from '../../components/Toast'
import dowback from '../../public/imgs/dowmload/backdown.png'
// import dwArdiod from '../../public/imgs/dowmload/adran.png'
// import dwios from '../../public/imgs/dowmload/iosapp.png'
import downlogo from '../../public/imgs/dowmload/downlogo.png'
import iosicon from '../../public/imgs/dowmload/ios-icon.png'
import adicon from '../../public/imgs/dowmload/an-zhuo.png'
import enbg from '../../public/imgs/dowmload/en-bg.png'
import jpbg from '../../public/imgs/dowmload/jp-bg.png'
import jploge from '../../public/imgs/dowmload/jp-logo.png'
import enloge from '../../public/imgs/dowmload/en-logo.png'
import pleaseimg from '../../public/imgs/dowmload/please.png'
import Popup from '../../components/Public/ChangePsd'
export default () => {
    const { t, i18n } = useTranslation()
    const [wechat, setWechat] = useState(false)
    const [todown, setTodownt] = useState(false)
    const [downlink, setDownlink] = useState()
    const [phonetype, setPhonetype] = useState('')
    const [lang, setLang] = useState(0)
    // const [ioslink, setIoslink] = useState()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (langWhat(i18n.language) === 'zh') {
            setLang(1)
            getDownloadlink(0)
            getIoslink(3)
        }
        if (langWhat(i18n.language) === 'en') {
            setLang(2)
            getDownloadlink(6)
        }
        if (langWhat(i18n.language) === 'ja') {
            setLang(3)
            getDownloadlink(5)
            // getIoslink(9)
        }
        let ua = window.navigator.userAgent
        // console.log(ua)
        if (/iphone|ipad|ipod/i.test(ua)) {
            setPhonetype('iOS')
        }
        if (/android/i.test(ua)) {
            setPhonetype('Android')
        }
        if (/micromessenger/i.test(ua)) {
            setWechat(true)
        } else {
            setWechat(false)
        }
    }, [])

    // 下载链接获取 按照type不同获取不同的语言的下载链接
    const getDownloadlink = useCallback((type) => {
        dispatch.public.getAppdownload({
            appType: type
        }).then((res) => {
            setDownlink(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const getIoslink = useCallback((type) => {
        dispatch.public.getAppdownload({
            appType: type
        }).then((res) => {
            console.log(res)
            // setIoslink(res)
        }).catch((err) => {
            console.log(err)
        })
    })

    const handleToandroid = useCallback(() => {
        if (wechat === true) {
            setTodownt(true)
        } else {
            if (phonetype === 'iOS') {
                setShow(true)
                // if (langWhat(i18n.language) === 'zh') {
                //     setShow(true)
                //     if (ioslink.code !== 0) {
                //         Toast.info(ioslink.msg)
                //     } else {
                //         window.location.href = ioslink.data.downloadUrl
                //     }
                // } else {
                //     window.location.href = '/iosdownload'
                // }
            } else {
                if (downlink.code !== 0) {
                    Toast.info(downlink.msg)
                } else {
                    window.location.href = downlink.data.downloadUrl
                }
            }
            // window.location.href = 'https://mclouds.huoxing24.com/android/mcloud-Official-release.apk'
        }
    })
    return <div className="down">
        <div className="down-img">
            {lang === 1 && <img src={dowback} alt="" />}
            {lang === 2 && <img src={enbg} alt="" />}
            {lang === 3 && <img src={jpbg} alt="" />}
        </div>
        <div className={`down-top ${lang === 1 ? 'down-top-zh' : ''}`}>
            {lang === 1 && <div className="down-logo">
                <img src={downlogo} alt="" />
            </div>}
            {lang === 1 && <div className="down-title">
                <h2>一站式实体矿机算力服务平台</h2>
                {/* <h3>
                    <span>挖矿</span>
                    <span>存币</span>
                    <span>借币</span>
                    <span>闪兑</span>
                </h3> */}
            </div>}
            {lang === 2 && <div className="down-infologo">
                <img src={enloge} alt="" />
            </div>}
            {lang === 3 && <div className="down-infologo">
                <img src={jploge} alt="" />
            </div>}
        </div>
        <div className="down-bottom">
            {phonetype === 'iOS' && (langWhat(i18n.language) === 'ja' ? (
                <div className="down-ios">
                    <div className="ios-jpstore" onClick={() => {
                        window.location.href = 'https://apps.apple.com/jp/app/mcsjp/id1597886621'
                    }}>
                        <img src={iosicon} alt=""/>
                        App Store
                    </div>
                </div>
            ) : (
                <div className="down-ios">
                    {/* <img src={dwios} alt=""/>
                    <div className="down-ios-not"/> */}
                    <div className="ios-btn btn-tf">
                        <img src={iosicon} alt="" />
                        <div className="ios-btn-right">
                            <p>App Store</p>
                            <p>TestFlight</p>
                        </div>
                        {<div className="ios-not-download" />}
                    </div>
                    <div className="ios-btn" onClick={handleToandroid}>
                        <img src={iosicon} alt="" />
                        {t('public.localdown')}
                    </div>
                </div>
            ))}
            {phonetype === 'Android' && <div className="down-Ardioad" onClick={handleToandroid}>
                <img src={adicon} alt="" />
                {t('public.localdown')}
            </div>}
        </div>
        {todown === true ? (
            <div className="backwechat">
                <img src={pleaseimg} alt="" />
            </div>
        ) : ''}
        {show && <Popup
            // Topimg = {Succimg}
            succtitle = {langWhat(i18n.language) === 'zh' ? tichtextzh : richtext}
            linkbtn
            btntext = {t('public.close')}
            isdownload
            showInfo = {(num) => {
                setShow(num)
            }}
        />}
    </div>
}
