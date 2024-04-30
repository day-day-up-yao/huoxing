import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Header from '../../../components/Public/Header'
import Productinfo from './producrinfo'
import Buy from './Buy'
export default () => {
    const { t } = useTranslation()
    const { detail, userKonews } = useSelector((state) => ({
        detail: state.product.detail,
        userKonews: state.public.userKnow
    }))
    const head = {
        title: t('buyorder.qrzf'),
        second: false,
        thrid: false
    }
    return <div className="surepay">
        <Header {...{ head }}/>
        <Productinfo {...{ detail, t }}/>
        <Buy {...{ detail }}/>
        {userKonews && <div className="risk">
            <div dangerouslySetInnerHTML={{ __html: userKonews.content.replace(/(\\r\\n)|(\n)(\r\n)/g, '</br>') }} />
            {/* <h3>{t('buyorder.fxts')}</h3>
            <ol>
                <li>{t('buyorder.fxone')}</li>
                <li>{t('buyorder.fxtwo')}</li>
                <li>{t('buyorder.fxthree')}</li>
            </ol> */}
        </div>}
    </div>
}
