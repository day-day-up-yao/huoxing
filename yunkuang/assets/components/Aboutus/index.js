import React from 'react'
import './index.scss'
import { useTranslation } from 'react-i18next'
// import logone from '../../public/imgs/log1.png'
// import logtwo from '../../public/imgs/log2.png'
// import logthree from '../../public/imgs/log3.png'
// import logfour from '../../public/imgs/log4.png'
export default () => {
    const { t } = useTranslation()
    return <div className="aboutus">
        <h2>{t('aboutus.aboutus')}</h2>
        <div className="aboutus-con">
            <p>{t('aboutus.one')}</p>
            <p>{t('aboutus.two')}</p>
        </div>
        {/* <div className="aboutus-bottom">
            <div className="product-intro-logone">
                <img src={logone}/>
            </div>
            <div className="product-intro-logtwo">
                <img src={logtwo}/>
            </div>
            <div className="product-intro-logthree">
                <img src={logthree}/>
            </div>
            <div className="product-intro-logfour">
                <img src={logfour}/>
            </div>
        </div> */}
    </div>
}
