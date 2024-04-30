import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import cbimg from '../../public/imgs/new/cbselect.png'
import { numToFloor } from '../../public/js/index'
import Secverify from './Secverify/index'
export default ({ basename, quotainfo, setQuotainfo, userinfo, chains, secure }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const writeref = useRef()
    const extref = useRef()
    // const [chantype, setChantype] = useState('')
    // const nav = [
    //     { title: 'TRC20', tokenname: 'USDT', type: 0 },
    //     { title: 'ERC20', tokenname: 'USDT', type: 1 },
    //     { title: 'OMNI', tokenname: 'USDT', type: 2 }
    // ]
    const [navflag, setNavflag] = useState(0)
    // 手续费
    const [poundage, setPoundage] = useState(0)
    // 实际到账数量
    const [account, setAccount] = useState(0)
    // 可提取数量
    const [extract, setExtract] = useState(0)
    const [tqvalue, setTqvalue] = useState()
    // 是否是内部地址
    const [isinner, setIsinner] = useState(false)
    const [isopen1, setIsopen1] = useState(false)
    const [errmsg, setErrmsg] = useState('')
    useEffect(() => {
        // 计算手续费
        serviceCharge(quotainfo)
        setExtract(numToFloor(Number(quotainfo.available), quotainfo.minPrecision))
    }, [])
    // 获取不同的chain_type对应的信息
    const handleSelectnav = useCallback((itm, idx) => {
        // setChantype(itm.chainType)
        setNavflag(idx)
        dispatch.product.quotaInfo({
            token_id: basename,
            chain_type: itm.chainType
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
                return
            }
            setTqvalue()
            setQuotainfo(res.data)
            // 计算手续费
            serviceCharge(res.data)
        })
    })
    const [objs, setObjs] = useState({})
    // 计算手续费
    // 填写地址后计算手续费
    // tokenId == minerFeeTokenId ： fee + 用户选择的矿工费
    // tokenId == feeTokenId : fee + (用户选择的矿工费 * convertRate)
    // else :   + (用户选择的矿工费 * convertRate)
    const serviceCharge = useCallback((obj) => {
        if (basename !== obj.minerFeeTokenId) {
            if (basename === obj.feeTokenId) {
                setPoundage(Number(obj.fee) + Number(obj.minMinerFee) * Number(obj.convertRate))
            } else {
                setPoundage(Number(obj.convertFee) + Number(obj.minMinerFee) * Number(obj.convertRate))
            }
        } else {
            setPoundage(Number(obj.fee) + Number(obj.minMinerFee))
        }
    })
    // 获取是否是内地地址并且计算手续费
    const handleAddress = useCallback(() => {
        handleTocheck()
    })
    // // 提币地址校验
    // const handleTovalidation = useCallback(() => {
    //     dispatch.public.validationAddress({
    //         address: writeref.current.value,
    //         chain_type: chains.length > 0 ? chains[navflag].chainType : ''
    //     }).then((res) => {
    //         if (res.data) {
    //             handleTocheck()
    //         } else {
    //             Toast.info(res.msg)
    //         }
    //     })
    // })

    // 提币地址检查
    const handleTocheck = useCallback(() => {
        dispatch.product.addlessCheck({
            token_id: basename,
            address: writeref.current.value,
            chain_type: chains.length > 0 ? chains[navflag].chainType : ''
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.isIllegal) {
                    setErrmsg(res.data.addressExt)
                    // Toast.info(res.data.addressExt)
                    // writeref.current.value = ''
                } else {
                    setErrmsg('')
                    if (res.isInnerAddress !== true) {
                        serviceCharge(quotainfo)
                    } else {
                        setIsinner(true)
                        setPoundage(quotainfo.internalWithdrawFee)
                    }
                }
            }
        })
    })
    /**
   * 实际到账
   * // arrivalAccountAmount 到账金额
      if(tokenId == minerFeeTokenId) {
          arrivalAccountAmount = 用户输入的提币数量 - fee - 用户选择的矿工费
      } else {
          if(tokenId == feeTokenId) {
              arrivalAccountAmount = 用户输入的提币数量 -  fee - (用户选择的矿工费 * convertRate)
          } else {
              arrivalAccountAmount = 用户输入的提币数量 -  convertFee - (用户选择的矿工费 * convertRate)
          }
      }
   */
    // 实际到账数量
    const handleAccount = useCallback((event) => {
        if (writeref.current.value === '' || event.target.value === '') {
            setAccount(0)
        } else {
            if (isinner) {
                setAccount(event.target.value)
                return
            }
            if (basename === quotainfo.minerFeeTokenId) {
                setAccount(event.target.value - Number(quotainfo.fee) - Number(quotainfo.minMinerFee))
            } else {
                if (basename === quotainfo.feeTokenId) {
                    setAccount(event.target.value - Number(quotainfo.fee) - (Number(quotainfo.minMinerFee) * Number(quotainfo.convertRate)))
                } else {
                    setAccount(event.target.value - Number(quotainfo.convertFee) - (Number(quotainfo.minMinerFee) * Number(quotainfo.convertRate)))
                }
            }
        }
    })
    // 全部提币
    const handleAll = useCallback(() => {
        setTqvalue(extract)
        if (writeref.current.value === '' || extract === 0) {
            setAccount(0)
        } else {
            if (isinner) {
                setAccount(extract)
                return
            }
            if (basename === quotainfo.minerFeeTokenId) {
                setAccount(extract - Number(quotainfo.fee) - Number(quotainfo.minMinerFee))
            } else {
                if (basename === quotainfo.feeTokenId) {
                    setAccount(extract - Number(quotainfo.fee) - (Number(quotainfo.minMinerFee) * Number(quotainfo.convertRate)))
                } else {
                    setAccount(extract - Number(quotainfo.convertFee) - (Number(quotainfo.minMinerFee) * Number(quotainfo.convertRate)))
                }
            }
        }
    })
    // 确认提币
    const handleSure = useCallback(() => {
        if (writeref.current.value === '' || extref.current.value === '') {
            Toast.info(t('property.putaddress'))
            return
        }
        if (extref.current.value < Number(quotainfo.minQuantity)) {
            Toast.info(`${t('property.minnum')}${quotainfo.minQuantity}`)
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
            token_id: basename,
            address: writeref.current.value,
            quantity: extref.current.value,
            arrive_quantity: extref.current.value,
            miner_fee: quotainfo.minMinerFee,
            convert_rate: quotainfo.convertRate,
            auto_convert: true,
            chain_type: chains.length > 0 ? chains[navflag].chainType : ''
        })
        setIsopen1(true)
    })
    return <div className="mention">
        <div className="mention-top">
            <h3>{basename} {t('property.tb')}</h3>
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
            <div className="taddress">
                <h4>{t('property.tbaddress')}</h4>
                <input type="text" ref={writeref} placeholder={t('property.putaddress')} onBlur={handleAddress}/>
                {errmsg !== '' && <div className="input-err">{errmsg}</div>}
            </div>
            <div className="tnumber">
                <h4>{t('property.tbnum')}</h4>
                <div className="ment-num">
                    <input onKeyUp={(e) => {
                        if (basename === 'HNT') {
                            e.target.value = e.target.value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
                        }
                        // console.log(e.target.value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3'))
                    }} type="text" ref={extref} placeholder={`${t('property.getnub')} ${quotainfo.maxWithdrawPrecision ? numToFloor(extract, quotainfo.maxWithdrawPrecision) : extract}`} defaultValue={tqvalue} onChange={handleAccount}/>
                    <div className='num-right'>
                        <span>{basename}</span>
                        <span onClick={handleAll}>{t('property.alltb')}</span>
                    </div>
                </div>
            </div>
            <div className="formal">
                <p>
                    <span>{t('property.headmoney')}</span>
                    <span>{poundage}</span>
                </p>
                <p>
                    <span>{t('property.getnum')}</span>
                    <span className="formal-n">{account}</span>
                </p>
            </div>
            <div className="submit" onClick={handleSure}>{t('header.sign.sures')}</div>
        </div>
        <div className="deposit-bottom">
            <h3>{t('bindgoogle.Tips')}</h3>
            <ul>
                <li>{t('property.titleone')}</li>
                <li>{t('property.minnum')}{quotainfo.maxWithdrawPrecision ? numToFloor(quotainfo.minQuantity, quotainfo.maxWithdrawPrecision) : quotainfo.minQuantity}</li>
                <li>{t('property.titletwo')}</li>
            </ul>
        </div>
        {((!userinfo.bindGA && userinfo.mobile === '') || (!userinfo.bindGA && userinfo.email === '')) ? (
            <div className="second">
                <div className="second-con">
                    <h3>{t('public.an')}</h3>
                    <h4>{t('public.antitle')}</h4>
                    <div className='second-box'>
                        <div className="box-left">
                            {secure ? (
                                <a href="/secure/enbindgoogle">{t('header.sign.googlecode')}</a>
                            ) : (
                                <a href="/bindgoogle">{t('header.sign.googlecode')}</a>
                            )}
                            <i>{t('public.tj')}</i>
                        </div>
                        <div className="box-left">
                            {secure ? (
                                <a href={userinfo.mobile === '' ? '/secure/enbindmobile' : '/secure/enbindemail'}>{userinfo.email === '' ? t('header.sign.yzemail') : t('header.sign.yzphone')}</a>
                            ) : (
                                <a href={userinfo.mobile === '' ? '/bindmobile' : '/bindemail'}>{userinfo.email === '' ? t('header.sign.yzemail') : t('header.sign.yzphone')}</a>
                            )}
                        </div>
                    </div>
                    <div className="noneed" onClick={() => {
                        window.location.reload()
                    }}>{t('userkyc.noneed')}</div>
                </div>
            </div>
        ) : ('')}
        {isopen1 && <Secverify {...{ userinfo, setIsopen1, objs, basename, secure }}/>}
    </div>
}
