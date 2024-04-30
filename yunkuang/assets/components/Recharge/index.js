import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../Toast'
import './index.scss'

export default ({ style, currency }) => {
    const dispatch = useDispatch()

    const [according, setAccording] = useState(false)
    const [gaddress, setGaddress] = useState()
    const [qrcode, setQrcode] = useState(null)
    const [selectusdt, setSelectusdt] = useState(0)
    const [currencyinfo, setCurrencyinfo] = useState()
    const { t } = useTranslation()

    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                setCurrencyinfo(res.data.token.find((item) => (item.tokenId === currency)))
            }
        })
    }, [currency])
    const handletopup = useCallback(() => {
        setSelectusdt(0)
        if (currencyinfo) {
            dispatch.order.getAddress({
                token_id: currency,
                chain_type: currencyinfo.chainTypes.length > 0 ? currencyinfo.chainTypes[0].chainType : ''
            }).then((res) => {
                setGaddress(res.data.address)
                setQrcode(res.data.qrcode)
            })
        }
        setAccording(true)
    }, [currencyinfo])
    const handleSure = useCallback(() => {
        setAccording(false)
    })
    // 点击充值
    const tocopy = useCallback(() => {
        var message = document.getElementById('address')
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        var successful = document.execCommand('copy')
        if (successful) {
            Toast.info(t('public.caysucc'))
        } else {
            Toast.error(t('public.cayfail'))
        }
    })
    return <div className="recharge-wrapper" style={style}>
        <p className="not-enough">
            {/* 余额不足? */}
            <a onClick={handletopup}>{t('public.djcz')}</a>
        </p>
        <div className="order-topup" style={{ display: according === true ? 'flex' : 'none' }}>
            <div className="order-top-up">
                <h3>【{currency}{t('public.djcz')}】</h3>
                <div className="order-top-up-erc">
                    {currencyinfo && currencyinfo.chainTypes.map((items, inx) => {
                        return <span key={inx} onClick={() => {
                            setSelectusdt(inx)
                            dispatch.order.getAddress({
                                token_id: currency,
                                chain_type: items.chainType
                            }).then((res) => {
                                if (res.data.allowDeposit) {
                                    setGaddress(res.data.address)
                                    setQrcode(res.data.qrcode)
                                } else {
                                    Toast.info(res.msg)
                                }
                            }).catch(() => {
                                Toast.info(t('public.fail'))
                            })
                        }} style={{ background: selectusdt === inx ? '#F4881C' : '', color: selectusdt === inx ? '#fff' : '#242F44' }}>{items.chainType}</span>
                    })}
                </div>
                <div className="order-top-up-img">
                    {qrcode && <img src={`data:image/png;base64,` + qrcode} />}
                </div>
                <span className="address" id="address">{gaddress}</span>
                <div className="order-top-up-address">
                    <p>{t('property.cbaddress')}</p>
                    <div onClick={tocopy}>{t('public.cay')}</div>
                </div>
                <button onClick={handleSure}>{t('header.sign.sures')}</button>
                <p className="tips">{t('property.importtitle')}</p>
            </div>
        </div>
    </div>
}
