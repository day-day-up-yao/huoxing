import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

// import { langWhat, richtext } from '../../public/js/index'
// import Popup from '../../components/Public/ChangePsd'

// import iosinfo from '../../public/imgs/dowmload/iosdownload.png'
import jabg from '../../public/imgs/dowmload/ja-iosload.png'
import enbg from '../../public/imgs/dowmload/en-iosload.png'
import zhbg from '../../public/imgs/dowmload/zh-iosload.png'

export default () => {
    const env = process.env.NODE_ENV
    const { t, i18n } = useTranslation()
    const [ioslink, setIoslink] = useState('')
    const [imgload, setImgload] = useState(0)
    const [standby, setStandby] = useState('')
    // const [show, setShow] = useState(false)
    useEffect(() => {
        if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
            setImgload(1)
            if (env === 'development' || env === 'test') {
                setIoslink('itms-services://?action=download-manifest&url=https://mclouds.huoxing24.com/ios/mclouds/zh/mcloudsdownloadtesting.plist')
            } else {
                setIoslink('itms-services://?action=download-manifest&url=https://mclouds.huoxing24.com/ios/mclouds/zh/mcloudsdownload.plist')
                setStandby('itms-services://?action=download-manifest&url=https://mclouds.huoxing24.com/ios/mclouds/zh/mcloudsdownload2.plist')
            }
        }
        if ((i18n.language).toLowerCase().substring(0, 2) === 'en') {
            setImgload(2)
            setIoslink('')
            setStandby('')
        }
        if ((i18n.language).toLowerCase().substring(0, 2) === 'ja') {
            setImgload(3)
            setIoslink('itms-services://?action=download-manifest&url=https://mclouds.huoxing24.com/ios/mclouds/jp/mcloudsjapan.plist')
            setStandby('itms-services://?action=download-manifest&url=https://mclouds.huoxing24.com/ios/mclouds/jp/mcloudsdownload2.plist')
        }
    }, [])

    return <div className='ios-download'>
        {imgload === 1 && <img src={zhbg} alt=""/>}
        {imgload === 2 && <img src={enbg} alt=""/>}
        {imgload === 3 && <img src={jabg} alt=""/>}
        {/* <img src={iosinfo} alt=""/> */}
        {(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? (
            <div className="download-go">
                <div className="download-btn">
                    <a href={ioslink}>
                        <div className="download-go-con">
                            { t('public.localdown') }
                        </div>
                    </a>
                </div>
                <div className="download-btn">
                    <a href={standby}>
                        <div className="download-go-con">
                            { t('public.standyaddress') }
                        </div>
                    </a>
                </div>
            </div>
        ) : (
            <div className="download-go">
                <div className="download-btn" style={{ width: '100%' }}>
                    <a href={ioslink}>
                        <div className="download-go-con">
                            { t('public.localdown') }
                        </div>
                    </a>
                    {/* {langWhat(i18n.language) === 'ja' ? (
                        <div className="download-go-con" onClick={() => {
                            setShow(true)
                        }}>
                            { t('public.localdown') }
                        </div>
                    ) : (
                        <a href={ioslink}>
                            <div className="download-go-con">
                                { t('public.localdown') }
                            </div>
                        </a>
                    )} */}
                </div>
                {/* <div className="download-btn">
                    <a href={standby}>
                        <div className="download-go-con">
                            { t('public.standyaddress') }
                        </div>
                    </a>
                </div> */}
            </div>
        )}
        {/* {show && <Popup
            succtitle = {richtext}
            linkbtn
            btntext = '閉じる'
            isdownload
            showInfo = {(num) => {
                setShow(num)
            }}
        />} */}
    </div>
}
