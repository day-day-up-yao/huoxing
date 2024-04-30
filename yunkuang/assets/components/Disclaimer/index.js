import React, { useState, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default (props) => {
    const { knowinfo } = props
    // console.log(knowinfo)
    const { t } = useTranslation()
    const boxref = useRef()
    const [flage, setFlage] = useState(false)
    const [accoding, setAccoding] = useState(false)
    const selectAgree = useCallback(() => {
        if (boxref.current.checked) {
            setFlage(true)
        } else {
            setFlage(false)
        }
    })
    const handleSure = useCallback(() => {
        if (flage) {
            setAccoding(true)
        }
    }, [flage])
    return <div className="stop-info" style={{ display: accoding ? 'none' : '' }}>
        <div className="stop-box">
            {/* <h3>免责声明</h3> */}
            <div className="box-text">
                {knowinfo && <div dangerouslySetInnerHTML={{ __html: knowinfo.content.replace(/(\\r\\n)|(\n)(\r\n)/g, '</br>') }} />}
                {/* <p>{t('public.notbelongto')}</p> */}
                {/* <p>{t('public.nowebnet')}</p> */}
            </div>
            <div className="box-select">
                <input type="checkbox" ref={boxref} onChange={selectAgree}/>
                <p>{t('public.ensure')}</p>
            </div>
            <div className="box-btn">
                <div className={flage ? 'btn-sure' : 'sureok'} onClick={handleSure}>{t('public.sure')}</div>
                <div>{t('public.cancel')}</div>
            </div>
        </div>
    </div>
}
