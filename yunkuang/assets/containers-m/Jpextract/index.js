import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import md5 from 'blueimp-md5'
import Toast from '../../components/Toast'
import { queryParam, initYpRiddler } from '../../public/js/index'
import './index.scss'
import jpselect from '../../public/imgs/jpimg/jpselect.png'
export default () => {
    // const env = process.env.NODE_ENV
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const addtitle = useRef()
    const numtitle = useRef()
    const paswdtitles = useRef()
    const paswdtitle = useRef()
    const codetitles = useRef()
    const codetitle = useRef()
    const lastcode = useRef()
    // const blist = [
    //     { name: 'BTC', type: '0' },
    //     { name: 'ETH', type: '1' },
    //     { name: 'FIL', type: '2' },
    //     { name: 'USDT', type: '3' },
    //     { name: 'DOT', type: '4' }
    // ]
    // const Ulist = [
    //     { name: 'TRC20', type: '0' },
    //     { name: 'ERC20', type: '1' },
    //     { name: 'OMNI', type: '2' }
    // ]
    const [Ulist, setUlist] = useState([])
    const [flag, setFlag] = useState(queryParam('type') ? queryParam('type') : 'BTC')
    const [uflag, setUflag] = useState(0)
    const [assetlist, setAssetlist] = useState([
        { tokenName: queryParam('type') ? queryParam('type') : 'BTC' }
    ]) // 资产币种
    // const [blist, setBlist] = useState([
    //     { tokenName: 'BTC' }
    // ])
    const [handmony, setHandmony] = useState(0)
    const [addhandmony, setAddhandmony] = useState(0)
    const [minerfeetokenid, setMinerfeetokenid] = useState(0)
    const [fee, setFee] = useState(0)
    const [convertfee, setConvertfee] = useState(0)
    const [tokenid, setTokenid] = useState()
    const [convertrate, setConvertrate] = useState(0)
    const [feetokenid, setFeetokenid] = useState(0)
    const [minfee, setMinfee] = useState(0)
    const [arrival, setArrival] = useState(0)
    const [getvalue, setGetvalue] = useState()
    const [money, setMoney] = useState()
    // const [btclist, setBtclist] = useState(false)
    // const [usdtlist, setUsdtlist] = useState(false)
    // const [ethlist, setEthlist] = useState(false)
    // const [selectusdname, setSelectusdname] = useState('TRC20')
    const [bindpwd, setBindpwd] = useState(false)
    const [bindmtitle, setbindmtitle] = useState(false)
    const [bindetitle, setbindetitle] = useState(false)
    const [selectpay, setSelectpay] = useState(true)
    const [emailcode, setEmailcode] = useState(false)
    const [emailed, setEmailed] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [haveSend, setHaveSend] = useState(false)
    const [pasion, setPasion] = useState(false)
    const [mobilecode, setMobilecode] = useState(false)
    // const [getmobile, setGetmobile] = useState()
    // const [getemail, setGetemail] = useState()
    const [orderid, setOrderid] = useState()
    const [accountid, setAccountid] = useState()
    const [draworderid, setDraworderid] = useState()
    const [codeorderid, setCodeorderid] = useState()
    const [minnum, setMinnum] = useState(0)
    const needlist = ['BTC', 'ETH', 'FIL', 'USDT', 'BDDA']
    // const testCurrey = {
    //     allowDeposit: true,
    //     allowWithdraw: true,
    //     chainTypes: [
    //         {
    //             allowDeposit: true,
    //             allowWithdraw: true,
    //             chainType: 'TETH'
    //         }
    //     ],
    //     displayChainName: null,
    //     iconUrl: 'https://static.hcdncn.com/BTC.svg',
    //     tokenFullName: 'Bitcoin',
    //     tokenId: 'TETH',
    //     tokenName: 'TETH'
    // }
    useEffect(() => {
        let timer = null
        if (haveSend) {
            let num = 60
            setSendTxt(`${num}s`)
            timer = setInterval(() => {
                if (num > 0) {
                    num--
                    setSendTxt(`${num}s`)
                } else {
                    setSendTxt(t('header.sign.sendVerifyCode'))
                    setHaveSend(false)
                    clearInterval(timer)
                }
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [haveSend])
    useEffect(() => {
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                dispatch.product.checkC2cBanlance({}).then((result) => {
                    const data = []
                    for (let i = 0; i < needlist.length; i++) {
                        for (let j = 0; j < res.data.token.length; j++) {
                            if (res.data.token[j].tokenId === needlist[i]) {
                                data.push(res.data.token[j])
                            }
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 0; j < result.data.length; j++) {
                            if (result.data[j].tokenName === data[i].tokenId) {
                                data[i].free = result.data[j].free
                                data[i].locked = result.data[j].locked
                            }
                        }
                    }
                    setUlist(data.filter((item) => {
                        return item.tokenName === flag
                    })[0].chainTypes)
                    setAssetlist(data)
                    // console.log(data.filter((item) => {
                    //     return item.tokenId === flag
                    // })[0].chainTypes)
                    dispatch.product.quotaInfo({
                        token_id: flag,
                        chain_type: data.filter((item) => { return item.tokenId === flag })[0].chainTypes.length > 0 ? data.filter((item) => { return item.tokenId === flag })[0].chainTypes[0].chainType : ''
                    }).then((reses) => {
                        if (reses.code === 30000) {
                            Toast.info(reses.msg)
                            window.location.href = '/jplogin'
                            return
                        }
                        if (reses.data.refuseReason !== '') {
                            Toast.info(reses.data.refuseReason)
                        } else {
                            setTokenid(queryParam('type') ? queryParam('type') : 'BTC')
                            setHandmony(reses.data.internalWithdrawFee)
                            setMinerfeetokenid(reses.data.minerFeeTokenId)
                            setFee(reses.data.fee)
                            setConvertfee(reses.data.convertFee)
                            setConvertrate(reses.data.convertRate)
                            setFeetokenid(reses.data.feeTokenId)
                            setMinfee(reses.data.minMinerFee)
                            setMoney(reses.data.available)
                            setMinnum(reses.data.minQuantity)
                        }
                    })
                })
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 计算实际到账
    const handlevalue = useCallback((event) => {
        if (addtitle.current.value === '') {
            setHandmony(0)
        } else {
            if (tokenid === minerfeetokenid) {
                setArrival(event.target.value - handmony - minfee)
            } else {
                if (tokenid === feetokenid) {
                    setArrival(event.target.value - fee - (minfee * convertrate))
                } else {
                    setArrival(event.target.value - convertfee - (minfee * convertrate))
                }
            }
        }
        setGetvalue(event.target.value)
    })
    const handleBget = useCallback(() => {
        if (numtitle.current.value > getvalue) {
            Toast.info(t('property.getnub') + money)
            return
        }
        if (tokenid === 'USDT') {
            if (getvalue < minnum || numtitle.current.value < minnum) {
                Toast.info(`最低送金数` + minnum)
                return
            }
        }
        if (tokenid === 'BTC') {
            if (getvalue < minnum || numtitle.current.value < minnum) {
                Toast.info(`最低送金数` + minnum)
                return
            }
        }
        if (tokenid === 'ETH') {
            if (getvalue < minnum || numtitle.current.value < minnum) {
                Toast.info(`最低送金数` + minnum)
                return
            }
        }
        if (addtitle.current.value && getvalue) {
            if (money !== 0) {
                dispatch.public.getUseinfo({}).then((res) => {
                    setPasion(true)
                    if (res.data.bindTradePwd) {
                        setBindpwd(false)
                    } else {
                        setBindpwd(true)
                    }
                    setAccountid(res.data.defaultAccountId)
                    if (res.data.email !== '') {
                        setEmailed(true)
                        // setGetemail(res.data.email)
                    }
                    if (res.data.email === '') {
                        setEmailed(false)
                        // setGetmobile(res.data.mobile)
                    }
                    if (!res.data.email && res.data.bindGA !== true) {
                        setbindetitle(true)
                        // setMention(false)
                    }
                    if (!res.data.mobile && res.data.bindGA !== true) {
                        setbindmtitle(true)
                        // setMention(false)
                    }
                    if (res.data.email && res.data.mobile) {
                        setEmailcode(true)
                        // setMention(false)
                    }
                    if (res.data.bindGA === true && res.data.mobile) {
                        setEmailcode(true)
                        // setMention(false)
                    }
                    if (res.data.email && res.data.bindGA === true) {
                        setEmailcode(true)
                        // setMention(false)
                    }
                })
            } else {
                Toast.info(t('property.zore'))
            }
        } else {
            Toast.info(t('property.putaddress'))
        }
    })
    const cancelbtn = useCallback(() => {
        setBindpwd(false)
        setPasion(false)
    })
    const tosetpassd = useCallback(() => {
        window.location.href = '/moneypasswd'
    })
    const tobindemail = useCallback(() => {
        window.location.href = '/bindemail'
    })
    const tobindmobile = useCallback(() => {
        window.location.href = '/bindmobile'
    })
    const getMobilecode = useCallback((validInfo) => {
        dispatch.public.sendSmscode({
            type: 14,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setOrderid(res.data.orderId)
                setHaveSend(true)
            }
        })
    })

    const getEmailcode = useCallback((validInfo) => {
        dispatch.public.getEmailcode({
            type: 14,
            yp_authenticate: validInfo.authenticate,
            yp_token: validInfo.token
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setOrderid(res.data.orderId)
                setHaveSend(true)
            }
        })
    })
    const handleSendcode = useCallback(() => {
        if (emailed === false) {
            initYpRiddler('coderiddler', getMobilecode)
        } else {
            initYpRiddler('coderiddler', getEmailcode)
        }
    })
    const handlesuccess = useCallback(() => {
        dispatch.public.withDrawal({
            client_order_id: new Date().getTime(),
            token_id: tokenid,
            address: addtitle.current.value,
            quantity: numtitle.current.value,
            arrive_quantity: numtitle.current.value,
            miner_fee: minfee,
            verify_code: selectpay === true ? codetitle.current.value : codetitles.current.value,
            auth_type: selectpay === true ? 3 : 2,
            trade_password: selectpay === true ? md5(paswdtitle.current.value) : md5(paswdtitles.current.value),
            order_id: orderid,
            convert_rate: convertrate,
            chain_type: Ulist.length > 0 ? Ulist[uflag].chainType : '',
            auto_convert: true,
            account_id: accountid
        }).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setMobilecode(true)
                setEmailcode(false)
                setDraworderid(res.data.requestId)
                setCodeorderid(res.data.codeOrderId)
                // setSendTxt('发送验证码')
                addtitle.current.value = ''
                numtitle.current.value = ''
                // dispatch.public.withDrawalverify({
                //     account_id: accountid,
                //     token_id: tokenid,
                //     client_order_id: new Date().getTime(),
                //     request_id: res.requestId,
                //     skip_input_id_card_no: true,
                //     id_card_no: ''
                // }).then((res) => {
                //     console.log(res)
                // })
            }
        })
    })
    const handleToSendcode = useCallback(() => {
        dispatch.public.withDrawalcode({
            request_id: draworderid
        }).then((res) => {
            setHaveSend(true)
            setCodeorderid(res.data.codeOrderId)
        })
    })
    // const handlelastSucc = useCallback(() => {}, [])
    const handlelastSucc = useCallback(() => {
        if (!lastcode.current.value) {
            Toast.info(t('header.sign.sendVerifyCode'))
            return
        }
        dispatch.public.withDrawalverify({
            account_id: accountid,
            token_id: tokenid,
            client_order_id: new Date().getTime(),
            code_order_id: codeorderid,
            verify_code: lastcode.current.value,
            request_id: draworderid
        }).then((res) => {
            if (res.code === 0) {
                window.location.href = `/jpindex`
            } else {
                Toast.info(res.msg)
            }
        })
    }, [codeorderid, tokenid, draworderid, accountid])
    return <div className="jpext">
        <div className="jpext-con">
            <div className="jpext-con-top">
                <ul>
                    {/* {ratelist.map((item, index) => {
                        return <li key={index} onClick={() => {
                            setFlag(index)
                        }} style={{ display: item.flage === true ? '' : 'none', backgroundImage: flag === index ? `url(` + jpselect + `)` : '' }}>{item.name}</li>
                    })} */}
                    {assetlist.map((item, index) => {
                        return <li key={index} onClick={() => {
                            setUlist(item.chainTypes)
                            setUflag(0)
                            setFlag(item.tokenName)
                            setTokenid(item.tokenName)
                            dispatch.product.quotaInfo({
                                token_id: item.tokenId,
                                chain_type: item.chainTypes.length > 0 ? item.chainTypes[0].chainType : ''
                            }).then((res) => {
                                if (res.data.refuseReason !== '') {
                                    Toast.info(res.data.refuseReason)
                                } else {
                                    setTokenid(item.tokenId)
                                    setHandmony(res.data.internalWithdrawFee)
                                    setMinerfeetokenid(res.data.minerFeeTokenId)
                                    setFee(res.data.fee)
                                    setConvertfee(res.data.convertFee)
                                    setConvertrate(res.data.convertRate)
                                    setFeetokenid(res.data.feeTokenId)
                                    setMinfee(res.data.minMinerFee)
                                    setMoney(res.data.available)
                                    setMinnum(res.data.minQuantity)
                                }
                            })
                        }} style={{ backgroundImage: flag === item.tokenName ? `url(` + jpselect + `)` : '' }}>{item.tokenName}</li>
                    })}
                </ul>
            </div>
            <div className="jpext-con-tops">
                <ul>
                    {Ulist.map((item, index) => {
                        return <li key={index} onClick={() => {
                            setUflag(index)
                            // setSelectusdname(item.chainType)
                            dispatch.product.quotaInfo({
                                token_id: tokenid,
                                chain_type: item.chainType
                            }).then((res) => {
                                if (res.data.refuseReason !== '') {
                                    Toast.info(res.data.refuseReason)
                                } else {
                                    setHandmony(res.data.internalWithdrawFee)
                                    setMinerfeetokenid(res.data.minerFeeTokenId)
                                    setFee(res.data.fee)
                                    setConvertfee(res.data.convertFee)
                                    setConvertrate(res.data.convertRate)
                                    setFeetokenid(res.data.feeTokenId)
                                    setMinfee(res.data.minMinerFee)
                                    setMoney(res.data.available)
                                    setMinnum(res.data.minQuantity)
                                }
                            })
                        }} style={{ backgroundImage: uflag === index ? `url(` + jpselect + `)` : '' }}>{item.chainType}</li>
                    })}
                </ul>
            </div>
            <div className="jpext-con-address">
                <h3>送金先のアドレス</h3>
                <input type="text" ref={addtitle} placeholder='アドレスを入力する/貼り付ける' onChange={() => {
                    // 获取是否是内部地址
                    dispatch.product.addlessCheck({
                        token_id: tokenid,
                        address: addtitle.current.value,
                        chain_type: Ulist.length > 0 ? Ulist[uflag].chainType : ''
                    }).then((res) => {
                        if (res.code === 0) {
                            // 计算手续费
                            if (res.data.isInnerAddress !== true) {
                                if (tokenid === minerfeetokenid) {
                                    setAddhandmony(Number(handmony) + Number(minfee))
                                } else {
                                    if (tokenid === feetokenid) {
                                        setAddhandmony(Number(fee) + (Number(minfee) * Number(convertrate)))
                                    } else {
                                        setAddhandmony(Number(convertfee) + (Number(minfee) * Number(convertrate)))
                                    }
                                }
                            } else {
                                setAddhandmony(Number(handmony))
                            }
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                }}/>
            </div>
            <div className="jpext-con-putnum">
                <div className="jpext-con-putnum-t">
                    <span>送金数</span>
                    <span>送金可能：{money} {tokenid}</span>
                </div>
                <div className="jpext-con-putnum-b">
                    <input type="text" placeholder="送金数" ref={numtitle} value={getvalue || ''} onChange={handlevalue}/>
                    <div>
                        <span>{tokenid}</span>
                        <span onClick={() => {
                            if (addtitle.current.value === '') {
                                console.log(0)
                                setHandmony(0)
                            } else {
                                if (tokenid === minerfeetokenid) {
                                    console.log(11)
                                    setArrival(money - handmony - minfee)
                                } else {
                                    if (tokenid === feetokenid) {
                                        console.log(22)
                                        setArrival(money - fee - (minfee * convertrate))
                                    } else {
                                        console.log(33)
                                        setArrival(money - convertfee - (minfee * convertrate))
                                    }
                                }
                            }
                            setGetvalue(money)
                        }}>全額送金</span>
                    </div>
                </div>
            </div>
            <div className="jpext-con-getnum">
                <h3>着金額</h3>
                <div className="jpext-con-getnum-b">
                    <input type="text" placeholder="引落数をご入力ください" readOnly={true} value={Number(arrival).toFixed(4)} onChange={() => {}}/>
                    <span>{tokenid}</span>
                </div>
            </div>
            <div className="jpext-con-sxpay">
                <span>手数料</span>
                <span>{Number(addhandmony).toFixed(4)} {tokenid}</span>
            </div>
            <div className="jpext-con-btn" style={{ background: money > 0 ? '' : '#ccc' }} onClick={handleBget}>送金</div>
            <div className="jpext-con-prompt">
                <h4>ご注意</h4>
                <ol>
                    <li>1、最低送金額：{minnum}{tokenid}。</li>
                    <li>2、送金先のウォレットアドレスが正しいかどうかを必ずご確認ください。間違えたウォレットに送付した資産は回収できません。</li>
                    <li>3、情報の改ざんや漏洩を防ぐために、コンピュータとブラウザが安全であることを確認してください。</li>
                </ol>
            </div>
        </div>
        <div className="order-topupjp" style={{ display: pasion === true ? '' : 'none' }}>
            <div className="orderpasswd" style={{ display: bindpwd === true ? 'block' : 'none' }}>
                <h3>{t('property.settingpswd')}</h3>
                <div className="orderpasswd-btn">
                    <span onClick={cancelbtn}>{t('productdetail.qx')}</span>
                    <span onClick={tosetpassd}>{t('productdetail.setting')}</span>
                </div>
            </div>
            <div className="orderpasswd" style={{ display: bindetitle === true ? 'block' : 'none' }}>
                <h3>{t('property.bindemail')}</h3>
                <div className="orderpasswd-btn">
                    <span onClick={cancelbtn}>{t('productdetail.qx')}</span>
                    <span onClick={tobindemail}>{t('productdetail.setting')}</span>
                </div>
            </div>
            <div className="orderpasswd" style={{ display: bindmtitle === true ? 'block' : 'none' }}>
                <h3>{t('property.bindphone')}</h3>
                <div className="orderpasswd-btn">
                    <span onClick={cancelbtn}>{t('productdetail.qx')}</span>
                    <span onClick={tobindmobile}>{t('productdetail.setting')}</span>
                </div>
            </div>
            <div className="orderpasswdcode" style={{ display: emailcode === true ? 'block' : 'none' }}>
                <h3>
                    <span onClick={() => {
                        setSelectpay(true)
                    }} style={{ background: selectpay === true ? '#242F44' : '', color: selectpay === true ? '#fff' : '' }}>{t('header.sign.googlecode')}</span>
                    <span onClick={() => {
                        setSelectpay(false)
                    }} style={{ background: selectpay === false ? '#242F44' : '', color: selectpay === false ? '#fff' : '' }}>{emailed === true ? t('header.sign.yzemail') : t('header.sign.yzphone')}</span>
                </h3>
                <div style={{ display: selectpay === false ? 'block' : 'none' }}>
                    <div className="orderpasswdcode-psw">
                        <input type="password" placeholder={t('property.pupaswd')} ref={paswdtitles} />
                    </div>
                    <div id="coderiddler">
                        <div className="orderpasswdcode-code">
                            <input type="text" placeholder={t('header.sign.enterVerify')} ref={codetitles} />
                            <span onClick={handleSendcode}>{sendTxt}</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: selectpay === true ? 'block' : 'none' }}>
                    <div className="orderpasswdcode-psw">
                        <input type="password" placeholder={t('property.pupaswd')} ref={paswdtitle} />
                    </div>
                    <div className="orderpasswdcode-code">
                        <input type="text" placeholder={t('header.sign.placesgoogle')} ref={codetitle} />
                    </div>
                </div>
                <button onClick={handlesuccess}>{t('header.sign.sures')}</button>
                <div className="orderpasswdcode-close" onClick={() => {
                    setPasion(false)
                    setFlag(false)
                    setEmailcode(false)
                    numtitle.current.value = ''
                    addtitle.current.value = ''
                    setGetvalue('')
                }}>{t('public.close')}</div>
            </div>
            <div className="orderpasswdcode" style={{ display: mobilecode === true ? 'block' : 'none' }}>
                <h3>{t('property.moneyaq')}</h3>
                <div className="orderpasswdcode-code">
                    <input type="text" placeholder={t('header.sign.enterVerify')} ref={lastcode} />
                    <span onClick={handleToSendcode}>{sendTxt}</span>
                </div>
                <div onClick={handlelastSucc} className="orderpasswdcode-btn">{t('header.sign.sures')}</div>
                <div className="orderpasswdcode-close" onClick={() => {
                    setFlag(false)
                    setMobilecode(false)
                    numtitle.current.value = ''
                    addtitle.current.value = ''
                    setGetvalue('')
                }}>{t('public.close')}</div>
            </div>
        </div>
    </div>
}
