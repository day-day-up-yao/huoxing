import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import SelectCurrery from './SelectCurrery'
import Toast from '../../components/Toast'
import copyicon from '../../public/imgs/h5img/other/copys_ico.png'

export default (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { currerylist, otherpage } = props
    const [upinfo, setUpinfo] = useState({
        address: '',
        addressExt: '',
        allowDeposit: true,
        isEOS: false,
        minQuantity: 0,
        qrcode: '',
        requiredConfirmNum: 0,
        tokenType: ''
    })
    useEffect(() => {
        if (currerylist?.length > 0) {
            dispatch.order.getAddress({
                token_id: currerylist[0]?.tokenName,
                chain_type: currerylist[0]?.chainTypes[0].chainType
            }).then((res) => {
                if (res.code === 0) {
                    setUpinfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [currerylist])
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
    return <div className="top-up">
        {!otherpage && <h3>{t('property.cb')}</h3>}
        {<SelectCurrery currerylist = {currerylist} isTopup getCurreryinfo={(obj) => {
            setUpinfo(obj)
        }}/>}
        <div className="address-img-m">
            <img src={`data:image/png;base64,` + upinfo.qrcode} alt=""/>
        </div>
        <div className="address-list-m">
            <span>{t('property.cbaddress')}</span>
            <div className="address-list-m-con">
                <div className="num" id="address">{upinfo.address}</div>
                <div className="copy" onClick={tocopy}>
                    <img src={copyicon} alt=""/>
                </div>
            </div>
        </div>
        {/* <div className="submit" onClick={() => { closeAll(false) }}>{t('header.sign.sures')}</div> */}
        <div className="deposit-bottom">
            <h3>{t('bindgoogle.Tips')}</h3>
            <ul>
                <li>{t('property.titleone')}</li>
                <li>{t('property.chinnum')}{upinfo.minQuantity}</li>
                <li>{t('property.titletwo')}</li>
            </ul>
        </div>
    </div>
}
