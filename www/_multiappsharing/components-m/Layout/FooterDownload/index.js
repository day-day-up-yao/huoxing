import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'
import mLogo from './img/m-share-logo.png'
import WebchatOpenInBrowser from '../../../components-m/WebchatOpenInBrowser'
import useAppDownload from '../../../public/hooks/useAppDownload'
export default function (props) {
    const { t } = useTranslation()
    const { type, id } = props
    const [openInBrowser, setOpenInBrowser] = useState(false)
    const appDownload = useAppDownload()
    const clickDownload = useCallback(() => {
        setOpenInBrowser(appDownload(type, id))
    }, [])
    return <div className="share-download-bottom active" id="share-download-bottom">
        <div className="bottom-left">
            <img src={mLogo} />
            <h4>MarsBit</h4>
            <p>{t('all_world_dynamic')}</p>
        </div>
        <a className="b-down" onClick={clickDownload}>{t('share_open')} APP</a>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
    </div>
}
