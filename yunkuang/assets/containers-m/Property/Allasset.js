import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import Toast from '../../components/Toast'

export default (props) => {
    const { DesPopup, MetPopup } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [asset, setAsset] = useState(0)
    useEffect(() => {
        dispatch.public.allAssetinfo({
            unit: 'USDT'
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setAsset(res.data.coinAsset)
            }
        })
    }, [])
    return <div className="asset">
        <div className="asset-title">{t('public.cyzc')}</div>
        <div>{Number(asset).toFixed(8)} USDT</div>
        <div className="asset-seting">
            <div onClick={() => { MetPopup(true) }}>{t('property.tb')}</div>
            <div onClick={() => { DesPopup(true) }}>{t('property.cb')}</div>
        </div>
    </div>
}
