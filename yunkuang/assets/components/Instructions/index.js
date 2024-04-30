import React from 'react'
import './index.scss'
import { useTranslation } from 'react-i18next'
import alowy from '../../public/imgs/alowy.png'
import timeimg from '../../public/imgs/time.png'
export default () => {
    const { t } = useTranslation()
    return <div className="instruct">
        <h2>{t('instructions.title')}</h2>
        <div className="instruct-con">
            <h3>1.{t('instructions.onetitle')}</h3>
            <div className='instruct-con-title'>
                <div className='instruct-con-l'>
                    <p>{t('instructions.con')}</p><br/>
                    <a href="#productlist" onClick={() => { window.location.href = '/#productlist' }} target="_self">{t('instructions.select')} {'>'} </a>
                </div>
                <div className="instruct-con-r">
                    <img src={alowy} alt=""/>
                </div>
            </div>
        </div>
        <h5></h5>
        <div className="instruct-con">
            <h3>2. {t('instructions.twotitle')}</h3>
            <div className='instruct-con-title'>
                <div className='instruct-con-l'>
                    <p>{t('instructions.cons')}</p><br/>
                    <a href="#productlists" onClick={() => { window.location.href = '/#productlists' }} target="_self">{t('instructions.selects')} {'>'}</a>
                </div>
                <div className="instruct-con-r">
                    <img src={timeimg} alt=""/>
                </div>
            </div>
        </div>
    </div>
}
