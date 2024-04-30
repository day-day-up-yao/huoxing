import React from 'react'
import { useTranslation } from 'react-i18next'
import Back from '../../public/imgs/new/goback.png'
import './index.scss'
export default ({ flag, setFlag }) => {
    const { t } = useTranslation()
    const partilist = [t('property.cbrecord'), t('property.tbrecord'), t('property.zlzf')]
    return <div className="header">
        <div className="header-con">
            <div className="left">
                <div className="left-img" onClick={() => {
                    window.history.go(-1)
                }}>
                    <img src={Back} alt=""/>
                </div>
                <div className="left-text">{t('property.mx')}</div>
            </div>
            <div className="right">
                {partilist.map((item, index) => {
                    return <div key={index} className={flag === index ? 'actives' : ''} onClick={() => {
                        setFlag(index)
                    }}>{item}</div>
                })}
            </div>
        </div>
    </div>
}
