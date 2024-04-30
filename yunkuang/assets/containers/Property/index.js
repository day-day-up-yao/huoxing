import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Assetherder from './asset_herder'
import Assetlist from './assetlist'
import Deposit from './deposit'
import Mention from './mention'
import { isSecure1475 } from '../../public/js/index'
import './index.scss'
import Toast from '../../components/Toast'
import ChangePad from '../../components/Public/ChangePsd'
import Succimg from '../../public/imgs/new/noticeinfo.png'

export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [secure, setSecure] = useState('') // 判断是否是www.secure1475.com或secure1475.com
    const [filling, setFilling] = useState(0)
    const [basename, setBasename] = useState('BTC')
    const [addressobj, setAddressobj] = useState(
        {
            qrcode: '',
            address: '',
            minQuantity: 0
        }
    )
    const [quotainfo, setQuotainfo] = useState(
        {
            allowWithdraw: true,
            available: 0,
            brokerFee: '',
            convertFee: '',
            convertRate: '',
            dayQuota: '',
            fee: '',
            feeTokenId: '',
            feeTokenName: '',
            internalWithdrawFee: '',
            internalWithdrawHasFee: false,
            isEOS: false,
            maxWithdrawPrecision: '',
            maxMinerFee: '',
            minMinerFee: '',
            minPrecision: 6,
            minQuantity: '',
            minerFeeTokenId: '',
            minerFeeTokenName: '',
            needAddressTag: false,
            needConvert: true,
            needKycCheck: false,
            needKycQuantity: '',
            needKycQuotaQuantity: '',
            needKycQuotaUnit: '',
            platformFee: '',
            refuseReason: '',
            riskBalance: [],
            riskBalanceBtcValue: '',
            suggestMinerFee: '',
            tokenType: '',
            usedQuota: ''
        }
    )
    // 用户信息
    const [userinfo, setUserinfo] = useState({
        bindGA: '',
        registerType: '',
        email: '',
        mobile: ''
    })
    const [assetinfo, setAssetinfo] = useState(
        {
            fee: 0,
            locked: 0
        }
    )
    // 连名称
    const [chains, setChains] = useState([])
    const [flagpasd, setFlagasd] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setSecure(isSecure1475())
        }
        dispatch.public.getUseinfo({}).then((res) => {
            setUserinfo(res.data)
        })
        dispatch.public.resetInfo().then((res) => {
            if (res.code === 0) {
                setFlagasd(res.data.resetTradePwd)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className='assets' style={{ background: filling === 0 ? '#fff' : '#FBFBFC' }}>
        <Assetherder {...{ filling, setFilling, assetinfo, secure }}/>
        {filling === 0 && <Assetlist {...{ setFilling, setAddressobj, setBasename, setQuotainfo, setAssetinfo, setChains, secure }}/>}
        {filling === 2 && <Deposit {...{ addressobj, setAddressobj, basename, setFilling, chains }}/>}
        {filling === 1 && <Mention {...{ basename, quotainfo, setQuotainfo, userinfo, chains, secure }}/>}
        {flagpasd && <ChangePad
            Topimg = {Succimg}
            succtitle = {t('public.changepasd')}
            btntext = {t('public.gochange')}
            linkbtn
            gomenypasd
            // showInfo = {notShow}
        />}
    </div>
}
