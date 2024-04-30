import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import See from '../../public/imgs/new/see.png'
import Nosee from '../../public/imgs/new/nosee.png'
import Back from '../../public/imgs/new/goback.png'
// import { formatNum } from '../../public/js/index'
import Toast from '../../components/Toast'
export default ({ filling, setFilling, assetinfo, secure }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [hide, setHide] = useState(true)
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
    return <div className="herders">
        <div className="center">
            {filling === 0 && <div className="left">
                <div className="left-top">
                    <div>{t('public.cyzc')}</div>
                    <div>
                        <img src={See} alt="" onClick={() => { setHide(true) }}/>
                    </div>
                    <div>
                        <img src={Nosee} alt="" onClick={() => { setHide(false) }}/>
                    </div>
                </div>
                {hide ? (
                    <div className="left-b">
                        <span>{Number(asset).toFixed(8)}</span>
                        <span>USDT</span>
                    </div>
                ) : (
                    <div className="left-b">
                        <span>******</span>
                    </div>
                )}
            </div>}
            {filling === 2 && <div className="leftone">
                <div className="leftone-img" onClick={() => { setFilling(0) }}>
                    <img src={Back} alt=""/>
                </div>
                <div className="leftone-text">{t('property.cb')}</div>
            </div>}
            {filling === 1 && <div className="leftone">
                <div className="leftone-img" onClick={() => { setFilling(0) }}>
                    <img src={Back} alt=""/>
                </div>
                <div className="leftone-text">{t('property.tb')}</div>
            </div>}
            {filling === 1 && <div className="center-text">
                <p>
                    <span>{t('public.kyed')}</span>
                    <span>{(Number(assetinfo.fee) + Number(assetinfo.locked)).toFixed(6)}</span>
                </p>
                <p>
                    <span>{t('public.kted')}</span>
                    <span className="text-info">{Number(assetinfo.fee).toFixed(6)}</span>
                </p>
            </div>}
            {/* {filling === 0 && <div className="right" onClick={() => {
                if (secure) {
                    window.location.href = '/secure/enexchange'
                } else {
                    window.location.href = '/exchange'
                }
            }}>{t('exchange.sd')}</div>} */}
        </div>
    </div>
}
