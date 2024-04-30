import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import Sense from '../../components/Sense'

import './index.scss'

import useLang from '../../../public/hooks/useLang'
import engulish from '../../../public/imgs/newpage/engulish.png'
import china from '../../../public/imgs/newpage/zhcn.png'
import janpa from '../../../public/imgs/newpage/japage.png'
import ndown from '../../../public/imgs/newpage/ndown.png'
// import backimg from '../../public/imgs/newpage/ensign.png'

export default () => {
    const changeLang = useLang()
    const { t, i18n } = useTranslation()
    const [languflag, setLanguflag] = useState(false)
    const languagelist = [
        { name: 'English', imgs: engulish, lang: 'en' },
        { name: '日本語', imgs: janpa, lang: 'ja' }
    ]
    return <div className="enlogin-language" onMouseEnter={() => { setLanguflag(true) }} onMouseLeave={() => { setLanguflag(false) }}>
        <div className="enlogin-language-img">
            <img src={(i18n.language).toLowerCase().substring(0, 2).substring(0, 2) === 'en' ? engulish : (i18n.language).toLowerCase().substring(0, 2) === 'ja' ? janpa : china} alt=""/>
        </div>
        <span>{t('newpage.header.enlang')}</span>
        <img src={ndown} alt=""/>
        <div className="enlogin-language-pos" style={{ display: languflag ? '' : 'none' }}>
            {languagelist.map((item, index) => {
                return <div className="language-pos-c" key={index} onClick={() => {
                    changeLang(item.lang)
                }}>
                    <div className="language-pos-l">
                        <img src={item.imgs} alt=""/>
                    </div>
                    <div className="language-pos-r">{item.name}</div>
                </div>
            })}
        </div>
    </div>
}
