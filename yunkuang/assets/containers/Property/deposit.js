import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cbimg from '../../public/imgs/new/cbselect.png'
import Toast from '../../components/Toast'
export default ({ addressobj, setAddressobj, basename, setFilling, chains }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [navflag, setNavflag] = useState(0)
    // const nav = [
    //     { title: 'TRC20', tokenname: 'USDT', type: 0 },
    //     { title: 'ERC20', tokenname: 'USDT', type: 1 },
    //     { title: 'OMNI', tokenname: 'USDT', type: 2 }
    // ]
    // 点击复制
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
            Toast.error(t('public.caysucc'))
        } else {
            Toast.error(t('public.cayfail'))
        }
    })
    const handleSelectnav = useCallback((itm, idx) => {
        setNavflag(idx)
        dispatch.order.getAddress({
            token_id: basename,
            chain_type: itm.chainType
        }).then((res) => {
            if (res.code === 0) {
                setAddressobj(res.data)
            } else {
                setAddressobj(
                    {
                        address: '',
                        addressExt: '',
                        allowDeposit: true,
                        isEOS: false,
                        minQuantity: 0,
                        qrcode: '',
                        requiredConfirmNum: 0,
                        tokenType: ''
                    }
                )
                Toast.info(res.msg)
            }
        })
    })
    return <div className="deposit">
        <div className="deposit-con">
            <h3>{basename} {t('property.cb')}</h3>
            {chains.length > 0 ? (
                <div className="type-list">
                    {chains.map((item, index) => {
                        return <div
                            style={{ backgroundImage: `url(` + (navflag === index ? cbimg : '') + `)` }}
                            className={navflag === index ? 'active' : ''}
                            key={index}
                            onClick={() => { handleSelectnav(item, index) }}>{item.chainName}</div>
                    })}
                </div>
            ) : ('')}
            {/* {basename === 'USDT' && <div className="type-list">
                {nav.map((item, index) => {
                    return <div
                        style={{ backgroundImage: `url(` + (navflag === index ? cbimg : '') + `)` }}
                        className={navflag === index ? 'active' : ''}
                        key={index}
                        onClick={() => { handleSelectnav(item) }}>{item.title}</div>
                })}
            </div>} */}
            <div className="address-img">
                <img src={`data:image/png;base64,` + addressobj.qrcode} alt=""/>
            </div>
            <div className="address-list">
                <span>{t('property.cbaddress')}</span>
                <div className="num" id="address">{addressobj.address}</div>
                <div className="copy" onClick={tocopy}>
                    <span>{t('public.cay')}</span>
                </div>
            </div>
            <div className="submit" onClick={() => { setFilling(0) }}>{t('header.sign.sures')}</div>
        </div>
        <div className="deposit-bottom">
            <h3>{t('bindgoogle.Tips')}</h3>
            <ul>
                <li>{t('property.titleone')}</li>
                <li>{t('property.chinnum')}{addressobj.minQuantity}</li>
                <li>{t('property.titletwo')}</li>
            </ul>
        </div>
    </div>
}
