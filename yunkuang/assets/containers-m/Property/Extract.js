import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import SelectCurrery from './SelectCurrery'
import Toast from '../../components/Toast'
import { numToFloor, isSecure1475 } from '../../public/js/index'
import Secverify from '../../containers/Property/Secverify'
import close from '../../public/imgs/newedition/close.png'

import './index.scss'

export default (props) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { currerylist, userinfo, closePopup, ispopup, otherpage } = props
    const writeref = useRef()
    const extref = useRef()
    // 是否是内部地址
    const [isinner, setIsinner] = useState(false)
    // 手续费
    const [poundage, setPoundage] = useState(0)
    // 可提取数量
    const [extract, setExtract] = useState(0)
    // 实际到账数量
    const [account, setAccount] = useState(0)
    const [tqvalue, setTqvalue] = useState()
    const [info, setInfo] = useState({
        currery: currerylist[0]?.tokenName,
        chain: currerylist[0]?.chainTypes[0].chainType
    })
    const [withdrawalinfo, setWithdrawalinfo] = useState({
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
    })
    const [secure, setSecure] = useState(false)
    const [basename, setBasename] = useState('BTC')
    const [errmsg, setErrmsg] = useState('')
    const [sucneedinfo, setSucneedinfo] = useState(
        {
            currey: '',
            address: '',
            num: '',
            poundage: ''
        }
    )
    useEffect(() => {
        setBasename(info.currery)
    }, [info])
    useEffect(() => {
        if (isSecure1475()) {
            setSecure(true)
        }
        dispatch.product.quotaInfo({
            token_id: info.currery,
            chain_type: info.chain
        }).then((res) => {
            if (res.code === 0) {
                setWithdrawalinfo(res.data)
                serviceCharge(res.data)
                setExtract(numToFloor(Number(res.data.available), res.data.minPrecision))
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 获取是否是内地地址并且计算手续费
    const handleAddress = useCallback(() => {
        dispatch.product.addlessCheck({
            token_id: info.currery,
            address: writeref.current.value,
            chain_type: info.chain
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.isIllegal) {
                    setErrmsg(res.data.addressExt)
                    // Toast.info(res.data.addressExt)
                    // writeref.current.value = ''
                } else {
                    setErrmsg('')
                    if (res.isInnerAddress !== true) {
                        serviceCharge(withdrawalinfo)
                    } else {
                        setIsinner(true)
                        setPoundage(withdrawalinfo.internalWithdrawFee)
                    }
                }
                // if (res.isInnerAddress !== true) {
                //     serviceCharge(withdrawalinfo)
                // } else {
                //     setIsinner(true)
                //     setPoundage(withdrawalinfo.internalWithdrawFee)
                // }
            }
        })
    })
    // 计算手续费
    // 填写地址后计算手续费
    // tokenId == minerFeeTokenId ： fee + 用户选择的矿工费
    // tokenId == feeTokenId : fee + (用户选择的矿工费 * convertRate)
    // else :   + (用户选择的矿工费 * convertRate)
    const serviceCharge = useCallback((obj) => {
        if (info.currery !== obj.minerFeeTokenId) {
            if (info.currery === obj.feeTokenId) {
                setPoundage(Number(obj.fee) + Number(obj.minMinerFee) * Number(obj.convertRate))
            } else {
                setPoundage(Number(obj.convertFee) + Number(obj.minMinerFee) * Number(obj.convertRate))
            }
        } else {
            setPoundage(Number(obj.fee) + Number(obj.minMinerFee))
        }
    })
    // 实际到账数量
    const handleAccount = useCallback((event) => {
        setTqvalue(event.target.value)
        if (writeref.current.value === '' || event.target.value === '') {
            setAccount(0)
        } else {
            if (isinner) {
                setAccount(event.target.value)
                return
            }
            if (info.currery === withdrawalinfo.minerFeeTokenId) {
                setAccount(event.target.value - Number(withdrawalinfo.fee) - Number(withdrawalinfo.minMinerFee))
            } else {
                if (info.currery === withdrawalinfo.feeTokenId) {
                    setAccount(event.target.value - Number(withdrawalinfo.fee) - (Number(withdrawalinfo.minMinerFee) * Number(withdrawalinfo.convertRate)))
                } else {
                    setAccount(event.target.value - Number(withdrawalinfo.convertFee) - (Number(withdrawalinfo.minMinerFee) * Number(withdrawalinfo.convertRate)))
                }
            }
        }
    })
    // 全部提币
    const handleAll = useCallback(() => {
        // console.log(extract)
        setTqvalue(extract)
        if (writeref.current.value === '' || extract === 0) {
            setAccount(0)
        } else {
            if (isinner) {
                setAccount(extract)
                return
            }
            if (info.currery === withdrawalinfo.minerFeeTokenId) {
                setAccount(extract - Number(withdrawalinfo.fee) - Number(withdrawalinfo.minMinerFee))
            } else {
                if (info.currery === withdrawalinfo.feeTokenId) {
                    setAccount(extract - Number(withdrawalinfo.fee) - (Number(withdrawalinfo.minMinerFee) * Number(withdrawalinfo.convertRate)))
                } else {
                    setAccount(extract - Number(withdrawalinfo.convertFee) - (Number(withdrawalinfo.minMinerFee) * Number(withdrawalinfo.convertRate)))
                }
            }
        }
    })
    const [objs, setObjs] = useState({})
    const [isopen1, setIsopen1] = useState(false)
    // 确认提币
    const handleSure = useCallback(() => {
        if (writeref.current.value === '' || extref.current.value === '') {
            Toast.info(t('property.putaddress'))
            return
        }
        if (extref.current.value < Number(withdrawalinfo.minQuantity)) {
            Toast.info(`${t('property.minnum')}${withdrawalinfo.minQuantity}`)
            return
        }
        if (!userinfo.bindTradePwd) {
            Toast.info(t('property.settingpswd'))
            return
        }
        if (errmsg !== '') {
            Toast.info(errmsg)
            return
        }
        setObjs({
            client_order_id: new Date().getTime(),
            token_id: info.currery,
            address: writeref.current.value,
            quantity: extref.current.value,
            arrive_quantity: extref.current.value,
            miner_fee: withdrawalinfo.minMinerFee,
            convert_rate: withdrawalinfo.convertRate,
            auto_convert: true,
            chain_type: info.chain
        })
        setSucneedinfo({
            currey: info.currery,
            address: writeref.current.value,
            num: extref.current.value,
            poundage: poundage
        })
        setIsopen1(true)
    })
    const [surebtn, setSurebtn] = useState(false)
    const surebtnFn = useCallback(() => {
        if (errmsg === '' && extref.current.value) {
            setSurebtn(true)
        } else {
            setSurebtn(false)
        }
        // console.log(writeref.current.value)
    }, [errmsg, extref])
    return <div>
        <div className="top-up">
            {!otherpage && <h3>{t('property.tb')}</h3>}
            <SelectCurrery
                currerylist = {currerylist}
                getWithdrawal={(obj1) => {
                    setWithdrawalinfo(obj1)
                }}
                getPound={(obj2) => {
                    setExtract(obj2)
                }}
                getInfo={(obj3) => {
                    setInfo(obj3)
                }}/>
            <div className="taddress">
                <h4>{t('property.tbaddress')}</h4>
                <input
                    type="text"
                    ref={writeref}
                    onBlur={() => {
                        handleAddress()
                        surebtnFn()
                    }}
                    placeholder={t('property.putaddress')}
                />
                {errmsg !== '' && <div className="input-err">{errmsg}</div>}
            </div>
            <div className="tnumber">
                <h4>{t('property.tbnum')}</h4>
                <div className="ment-num">
                    <input type="text"
                        ref={extref}
                        placeholder={`${t('property.getnub')} ${extract}`}
                        value={tqvalue}
                        onChange={handleAccount}
                        onBlur={() => {
                            // handleAddress()
                            surebtnFn()
                        }}
                    />
                    <div className='num-right'>
                        <span>{withdrawalinfo.feeTokenName}</span>
                        <span onClick={handleAll}>{t('property.alltb')}</span>
                    </div>
                </div>
            </div>
            <div className="formal">
                <p>
                    <span>账户余额</span>
                    <span className="formal-n">{account}</span>
                </p>
            </div>
            <div className="tnumber">
                <h4>{t('property.headmoney')}</h4>
                <div className="have-number">{poundage}</div>
            </div>
            <div className="tnumber">
                <h4>{t('property.getnum')}</h4>
                <div className="have-number">{account}</div>
            </div>
            {/* <div className="formal">
                <p>
                    <span>{t('property.getnum')}</span>
                    <span className="formal-n">{account}</span>
                </p>
                <p>
                    <span>{t('property.headmoney')}</span>
                    <span>{poundage}</span>
                </p>
            </div> */}
            {/* <div className="deposit-bottom">
                <h3>{t('bindgoogle.Tips')}</h3>
                <ul>
                    <li>{t('property.titleone')}</li>
                    <li>{t('property.minnum')}{withdrawalinfo.minQuantity}</li>
                    <li>{t('property.titletwo')}</li>
                </ul>
            </div> */}
            {ispopup && <div className="close-window" onClick={() => {
                closePopup(false)
            }}>
                <img src={close} alt=""/>
            </div>}
            {isopen1 && <Secverify {...{ userinfo, setIsopen1, objs, basename, secure, otherpage, sucneedinfo }}/>}
        </div>
        <div className={`submit ${surebtn && 'can-btn'}`} onClick={handleSure}>{t('header.sign.sures')}</div>
    </div>
}
