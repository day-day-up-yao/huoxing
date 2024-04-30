import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import md5 from 'blueimp-md5'
import { useTranslation } from 'react-i18next'
import { numToFixed, isMobile, isJp } from '../../public/js/index'
import Toast from '../../components/Toast'
import Header from '../../components-m/Headers/index'
import './index.scss'
const nav = [
    { title: 'TRC20', tokenname: 'USDT', type: 0 },
    { title: 'ERC20', tokenname: 'USDT', type: 1 },
    { title: 'OMNI', tokenname: 'USDT', type: 2 }
]
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [assetlist, setAssetlist] = useState([])
    // 资产里面没有是否显示币种
    const [btclist, setBtclist] = useState(false)
    const [usdtlist, setUsdtlist] = useState(false)
    const [ethlist, setEthlist] = useState(false)
    const [htlist, setHtlist] = useState(false)
    const [fillist, setFillist] = useState(false)

    const [flag, setFlag] = useState(false)
    const [according, setAccording] = useState(false)
    const [mention, setMention] = useState(false)
    const [pasdtitle, setPasdtitle] = useState(false)
    const [bindetitle, setbindetitle] = useState(false)
    const [bindmtitle, setbindmtitle] = useState(false)
    const [emailcode, setEmailcode] = useState(false)
    const [gaddress, setGaddress] = useState()
    const [getemail, setGetemail] = useState()
    const [qrcode, setQrcode] = useState()
    const [tokenid, setTokenid] = useState()
    const [bindpwd, setBindpwd] = useState()
    const [haveSend, setHaveSend] = useState(false)
    const [sendTxt, setSendTxt] = useState(t('header.sign.sendVerifyCode'))
    const [orderid, setOrderid] = useState()
    const [draworderid, setDraworderid] = useState()
    const [accountid, setAccountid] = useState()
    const [codeorderid, setCodeorderid] = useState()
    const [allnumber, setAllnumber] = useState(0)
    const addtitle = useRef()
    const numtitle = useRef()
    const codetitle = useRef()
    const codetitles = useRef()
    const paswdtitles = useRef()
    const paswdtitle = useRef()
    const lastcode = useRef()
    const [mobilecode, setMobilecode] = useState(false)
    const [remaining, setRemaining] = useState()
    const [getvalue, setGetvalue] = useState()
    const [allmoney, setAllmoney] = useState(0)
    const [handmony, setHandmony] = useState(0)
    const [addhandmony, setAddhandmony] = useState(0)
    const [minerfeetokenid, setMinerfeetokenid] = useState(0)
    const [fee, setFee] = useState(0)
    const [convertfee, setConvertfee] = useState(0)
    const [convertrate, setConvertrate] = useState(0)
    const [arrival, setArrival] = useState(0)
    const [feetokenid, setFeetokenid] = useState(0)
    const [minfee, setMinfee] = useState(0)
    const [selectusdt, setSelectusdt] = useState(0)
    const [selectpay, setSelectpay] = useState(true)
    const [minnum, setMinnum] = useState() // 最小提币数量
    const [selectusdname, setSelectusdname] = useState('TRC20') // 选择USDT提币类型
    const [cbminnum, setCbminnum] = useState() // 最小充币数量
    // 关闭弹窗
    const handleSure = useCallback(() => {
        setAccording(false)
        setFlag(false)
    })
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
    // 解决科学技术问题
    function getFullNum (num) {
        // 处理非数字
        if (isNaN(num)) { return num }
        // 处理不需要转换的数字
        var str = '' + num
        if (!/e/i.test(str)) { return num }
        return (num).toFixed(8).replace(/\.?0+$/, '')
    }
    useEffect(() => {
        // 获取BTC汇率
        dispatch.public.quoteRates({
            tokens: 'BTC',
            legalCoins: 'BTC,USDT,CNY,USD,ETH,JPY'
        }).then((res) => {
            console.log(res)
            if (res.code === 0) {
                setAllmoney(isJp ? res.data[0].rates.JPY : res.data[0].rates.CNY)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.hlv'))
        })
        // 获取个人信息是否设置资金密码
        dispatch.public.getUseinfo({}).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setBindpwd(res.data.bindTradePwd)
                setAccountid(res.data.defaultAccountId)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.getuser'))
        })
        async function doEffect () {
            await dispatch.public.getUseinfo({}).then((res) => {
                setBindpwd(res.data.bindTradePwd)
                setAccountid(res.data.defaultAccountId)
            }).catch(function (err) {
                console.log(err)
                Toast.info(t('public.getuser'))
            })
            // 查询币币资产并过滤
            await dispatch.order.checkC2cBanlance().then((res) => {
                if (!res.code) {
                    if (Array.isArray(res)) {
                        // 资产列表为空是手动添加币种全部显示
                        if (res.length === 0) {
                            setBtclist(true)
                            setUsdtlist(true)
                            setEthlist(true)
                            // setHtlist(true)
                            setFillist(true)
                        } else {
                            var datas = []
                            let hasBtc = false
                            let hasUsdt = false
                            let hasEth = false
                            let hasXch = false
                            let hasFil = false
                            res.map((item) => {
                                if (item.tokenId.toUpperCase() === 'BTC') {
                                    datas.push(item)
                                    hasBtc = true
                                }
                                if (item.tokenId.toUpperCase() === 'USDT') {
                                    datas.push(item)
                                    hasUsdt = true
                                }
                                if (item.tokenId.toUpperCase() === 'ETH') {
                                    datas.push(item)
                                    hasEth = true
                                }
                                if (item.tokenId.toUpperCase() === 'XCH') {
                                    datas.push(item)
                                    hasXch = true
                                }
                                if (item.tokenId.toUpperCase() === 'FIL') {
                                    datas.push(item)
                                    hasFil = true
                                }
                                // if (item.tokenId.toUpperCase() === 'BDDA') {
                                //     datas.push(item)
                                // }
                                // if (item.tokenId.toUpperCase() === 'BDDB') {
                                //     datas.push(item)
                                // }
                            })
                            // 是否显示资产列表里没有的币种
                            setBtclist(!hasBtc)
                            setUsdtlist(!hasUsdt)
                            setEthlist(!hasEth)
                            setHtlist(!hasXch)
                            setFillist(!hasFil)
                            setAssetlist(datas)
                            var addnum = 0
                            if (datas !== '') {
                                datas.map((item) => {
                                    addnum += Number(item.btcValue)
                                })
                                setAllnumber(addnum)
                            } else {
                                setAllnumber(0)
                            }
                        }
                    }
                }
            }).catch(function (err) {
                console.log(err)
                Toast.info('检查币币账户错误')
            })
        }
        doEffect()
    }, [])
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
    // 关闭弹窗
    const cancelbtn = useCallback(() => {
        setFlag(false)
        setPasdtitle(false)
    })
    // 设置资金密码
    const tosetpassd = useCallback(() => {
        window.location.href = '/moneypasswd'
    })
    const [emailed, setEmailed] = useState(false)
    const [getmobile, setGetmobile] = useState()
    // 提币
    const handleBget = useCallback(() => {
        if (numtitle.current.value > getvalue) {
            Toast.info(t('property.getnub') + remaining)
            return
        }
        if (tokenid === 'USDT') {
            if (getvalue < minnum || numtitle.current.value < minnum) {
                Toast.info(t('property.minnum') + minnum)
                return
            }
        }
        if (tokenid === 'BTC') {
            if (getvalue < minnum || numtitle.current.value < minnum) {
                Toast.info(t('property.minnum') + minnum)
                return
            }
        }
        if (tokenid === 'ETH') {
            if (getvalue < minnum || numtitle.current.value < minnum) {
                Toast.info(t('property.minnum') + minnum)
                return
            }
        }
        if (addtitle.current.value && getvalue) {
            if (remaining !== 0) {
                dispatch.public.getUseinfo({}).then((res) => {
                    if (res.email !== '') {
                        setEmailed(true)
                        setGetemail(res.email)
                    }
                    if (res.email === '') {
                        setEmailed(false)
                        setGetmobile(res.mobile)
                    }
                    if (!res.email && res.bindGA !== true) {
                        setbindetitle(true)
                        setMention(false)
                    } else {
                        setGetemail(res.email)
                    }
                    if (!res.mobile && res.bindGA !== true) {
                        setbindmtitle(true)
                        setMention(false)
                    }
                    if (res.email && res.mobile) {
                        setEmailcode(true)
                        setMention(false)
                    }
                    if (res.bindGA === true && res.mobile) {
                        setEmailcode(true)
                        setMention(false)
                    }
                    if (res.email && res.bindGA === true) {
                        setEmailcode(true)
                        setMention(false)
                    }
                })
            } else {
                Toast.info(t('property.zore'))
            }
        } else {
            Toast.info(t('property.putaddress'))
        }
    })
    // 绑定邮箱
    const tobindemail = useCallback(() => {
        window.location.href = '/bindemail'
    })
    // 绑定手机
    const tobindmobile = useCallback(() => {
        window.location.href = '/bindmobile'
    })
    // 获取手机或邮箱验证码
    const handleSendcode = useCallback(() => {
        if (emailed === false) {
            dispatch.public.sendSmscode({
                type: 14,
                email: getmobile
            }).then((res) => {
                if (res.code) {
                    Toast.info(res.msg)
                } else {
                    setOrderid(res.orderId)
                    setHaveSend(true)
                }
            })
        } else {
            dispatch.public.getEmailcode({
                type: 14,
                email: getemail
            }).then((res) => {
                if (res.code) {
                    Toast.info(res.msg)
                } else {
                    setOrderid(res.orderId)
                    setHaveSend(true)
                }
            })
        }
    })
    // 资金密码和邮箱/手机/谷歌验证
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
            chain_type: tokenid === 'USDT' ? selectusdname : tokenid === 'BTC' ? 'BTC' : tokenid === 'ETH' ? 'ERC20' : '',
            auto_convert: true,
            account_id: accountid
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setMobilecode(true)
                setEmailcode(false)
                setDraworderid(res.requestId)
                setCodeorderid(res.codeOrderId)
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
    // 发送验证码
    const handleToSendcode = useCallback(() => {
        dispatch.public.withDrawalcode({
            request_id: draworderid
        }).then((res) => {
            setHaveSend(true)
            setCodeorderid(res.codeOrderId)
        })
    })
    // 资金托管验证
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
            if (!res.code) {
                window.location.href = `/property/${tokenid}?detail=1`
            } else {
                Toast.info(res.msg)
            }
        })
    }, [codeorderid, tokenid, draworderid, accountid])
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
    const handleaddless = useCallback(() => {
        // 获取是否是内部地址
        dispatch.product.addlessCheck({
            token_id: tokenid,
            address: addtitle.current.value,
            chain_type: selectusdname
        }).then((res) => {
            // 计算手续费
            if (res.isInnerAddress !== true) {
                if (tokenid === minerfeetokenid) {
                    setAddhandmony(handmony + minfee)
                } else {
                    if (tokenid === feetokenid) {
                        setAddhandmony(handmony + (minfee * convertrate))
                    } else {
                        setAddhandmony(convertfee + (minfee * convertrate))
                    }
                }
            } else {
                setAddhandmony(handmony)
            }
        })
    })
    // 当资产里面没有币种手动添加需要显示的币种
    const ratelist = [
        { name: 'BTC', flage: btclist },
        { name: 'ETH', flage: ethlist },
        { name: 'USDT', flage: usdtlist },
        { name: 'XCH', flage: htlist },
        { name: 'FIL', flage: fillist }
    ]
    return <div className="property">
        {!isMobile() ? '' : <Header title={t('property.property')}/>}
        <div className="property-con">
            <div className="property-c-top">
                <h3>{t('property.property')}</h3>
                <div className="property-c-top-r">
                    <h4>{t('property.allmoney')}</h4>
                    <p>
                        <span>{getFullNum(allnumber)} BTC </span>
                        <span> ≈ {numToFixed(allmoney * getFullNum(allnumber), 0)} {isJp ? 'JPY' : 'CNY'}</span>
                    </p>
                </div>
                {/* <div className="tosellbtc">
                    <span onClick={() => {
                        window.location.href = '/exchange'
                    }}>{t('property.usdflash')}</span>
                </div> */}
            </div>
            <div className="property-c-title">
                <ul>
                    <li>{t('property.mony')}</li>
                    <li>{t('property.more')}</li>
                    <li>{t('property.notB')}</li>
                    <li>{t('property.make')}</li>
                </ul>
                {ratelist.map((item, index) => {
                    return <ol style={{ display: item.flage === true ? 'flex' : 'none' }} key={index}>
                        <li>{item.name}</li>
                        <li>0</li>
                        <li>0</li>
                        <li>
                            <span onClick={() => {
                                setTokenid(item.name)
                                dispatch.order.getAddress({
                                    token_id: item.name,
                                    chain_type: item.name === 'USDT' ? 'TRC20' : item.name === 'BTC' ? 'BTC' : item.name === 'ETH' ? 'ERC20' : ''
                                }).then((res) => {
                                    if (res.code) {
                                        Toast.info(res.msg)
                                        return
                                    }
                                    if (res.allowDeposit === true) {
                                        setAccording(true)
                                        setFlag(true)
                                        setMention(false)
                                        setGaddress(res.address)
                                        setQrcode(res.qrcode)
                                        setCbminnum(res.minQuantity)
                                    } else {
                                        setAccording(false)
                                        setFlag(false)
                                        setMention(false)
                                    }
                                })
                            }}>
                                {t('property.cb')}
                            </span>
                            <span onClick={() => {
                                setTokenid(item.name)
                                if (bindpwd === true) {
                                    dispatch.product.quotaInfo({
                                        token_id: item.name,
                                        chain_type: item.name === 'USDT' ? 'TRC20' : item.name === 'BTC' ? 'BTC' : item.name === 'ETH' ? 'ERC20' : ''
                                    }).then((res) => {
                                        if (res.code) {
                                            Toast.info(res.msg)
                                            return
                                        }
                                        if (res.refuseReason !== '') {
                                            Toast.info(res.refuseReason)
                                        } else {
                                            setFlag(true)
                                            setMention(true)
                                            setTokenid(item.name)
                                            setRemaining(0)
                                            setHandmony(res.internalWithdrawFee)
                                            setMinerfeetokenid(res.minerFeeTokenId)
                                            setFee(res.fee)
                                            setConvertfee(res.convertFee)
                                            setConvertrate(res.convertRate)
                                            setFeetokenid(res.feeTokenId)
                                            setMinfee(res.minMinerFee)
                                            setMinnum(res.minQuantity)
                                        }
                                    })
                                } else {
                                    setFlag(true)
                                    setPasdtitle(true)
                                }
                            }}>{t('property.tb')}</span>
                            <span onClick={() => {
                                window.location.href = `/property/${item.name}`
                            }}>{t('property.mx')}</span>
                        </li>
                    </ol>
                })}
                {Array.isArray(assetlist) && assetlist.map((item, index) => {
                    return <ol key={index}>
                        <li>{item.tokenName}</li>
                        <li>{Number(item.free).toFixed(8)}</li>
                        <li>{Number(item.locked).toFixed(8)}</li>
                        <li>
                            <span onClick={() => {
                                setTokenid(item.tokenName)
                                dispatch.order.getAddress({
                                    token_id: item.tokenId,
                                    chain_type: item.tokenId === 'USDT' ? 'TRC20' : item.tokenId === 'BTC' ? 'BTC' : item.tokenId === 'ETH' ? 'ERC20' : ''
                                }).then((res) => {
                                    if (res.allowDeposit === true) {
                                        setAccording(true)
                                        setFlag(true)
                                        setMention(false)
                                        setGaddress(res.address)
                                        setQrcode(res.qrcode)
                                        setCbminnum(res.minQuantity)
                                    } else {
                                        setAccording(false)
                                        setFlag(false)
                                        setMention(false)
                                    }
                                })
                            }}>{t('property.cb')}</span>
                            <span onClick={() => {
                                if (bindpwd === true) {
                                    dispatch.product.quotaInfo({
                                        token_id: item.tokenId,
                                        chain_type: item.tokenId === 'USDT' ? 'TRC20' : item.tokenId === 'BTC' ? 'BTC' : item.tokenId === 'ETH' ? 'ERC20' : ''
                                    }).then((res) => {
                                        if (res.refuseReason !== '') {
                                            Toast.info(res.refuseReason)
                                        } else {
                                            setFlag(true)
                                            setMention(true)
                                            setTokenid(item.tokenName)
                                            setRemaining(item.free)
                                            setHandmony(res.internalWithdrawFee)
                                            setMinerfeetokenid(res.minerFeeTokenId)
                                            setFee(res.fee)
                                            setConvertfee(res.convertFee)
                                            setConvertrate(res.convertRate)
                                            setFeetokenid(res.feeTokenId)
                                            setMinfee(res.minMinerFee)
                                            setMinnum(res.minQuantity)
                                        }
                                    })
                                } else {
                                    setFlag(true)
                                    setPasdtitle(true)
                                }
                            }}>{t('property.tb')}</span>
                            <span onClick={() => {
                                window.location.href = `/property/${item.tokenId}`
                            }}>{t('property.mx')}</span>
                        </li>
                    </ol>
                })}
            </div>
            <div className="btnalert" style={{ display: flag === true ? 'flex' : 'none' }}>
                <div className="btn-mention" style={{ display: mention === true ? 'block' : 'none' }}>
                    <div className="btn-mention-top">
                        <h3>{t('property.tb')} {tokenid}</h3>
                    </div>
                    <div className="order-top-up-erc" style={{ display: tokenid === 'USDT' ? 'block' : 'none' }}>
                        {nav.map((items, inx) => {
                            return <span key={inx} onClick={() => {
                                setSelectusdname(items.title)
                                setSelectusdt(inx)
                                dispatch.product.quotaInfo({
                                    token_id: items.tokenname,
                                    chain_type: items.title
                                }).then((res) => {
                                    if (res.refuseReason !== '') {
                                        Toast.info(res.refuseReason)
                                    } else {
                                        setTokenid(items.tokenname)
                                        setHandmony(res.internalWithdrawFee)
                                        setMinerfeetokenid(res.minerFeeTokenId)
                                        setFee(res.fee)
                                        setConvertfee(res.convertFee)
                                        setConvertrate(res.convertRate)
                                        setFeetokenid(res.feeTokenId)
                                        setMinfee(res.minMinerFee)
                                        setMinnum(res.minQuantity)
                                    }
                                })
                            }} style={{ background: selectusdt === inx ? '#242F44' : '', color: selectusdt === inx ? '#fff' : '' }}>{items.title}</span>
                        })}
                    </div>
                    <div className="btn-mention-address">
                        <h3>{t('property.tbaddress')}</h3>
                        <input type="text" ref={addtitle} onChange={handleaddless} />
                    </div>
                    <div className="btn-mention-number">
                        <h3>{t('property.tbnum')}</h3>
                        <div className="btn-mention-number-inp">
                            <input type="text" placeholder={`${t('property.getnub')}` + remaining} ref={numtitle} value={getvalue || ''} onChange={handlevalue} />
                            <span onClick={() => {
                                if (addtitle.current.value === '') {
                                    setHandmony(0)
                                } else {
                                    if (tokenid === minerfeetokenid) {
                                        setArrival(remaining - handmony - minfee)
                                    } else {
                                        if (tokenid === feetokenid) {
                                            setArrival(remaining - fee - (minfee * convertrate))
                                        } else {
                                            setArrival(remaining - convertfee - (minfee * convertrate))
                                        }
                                    }
                                }
                                setGetvalue(remaining)
                            }}>{t('property.alltb')}</span>
                        </div>
                        <div className="btn-mention-number-num">
                            <p>
                                <span>{t('property.getnum')}</span>
                                <span>{Number(arrival).toFixed(4)}</span>
                            </p>
                            <p>
                                <span>{t('property.headmoney')}</span>
                                <span>{Number(addhandmony).toFixed(4)}</span>
                            </p>
                        </div>
                    </div>
                    <div className="btn-mention-men">
                        <button style={{ background: remaining === 0 ? '#ccc' : '#242F44' }} onClick={handleBget}>{t('property.tb')}</button>
                    </div>
                    <div className="mention-tips">
                        <h4>{t('property.title')}</h4>
                        {t('property.titleone')}<br/>
                        {t('property.minnum')}: {minnum}<br/>
                        {t('property.titletwo')}<br/>
                    </div>
                    <div className="toclose" onClick={() => {
                        setFlag(false)
                        addtitle.current.value = ''
                        setAllmoney(0)
                        numtitle.current.value = ''
                        setArrival(0)
                        setGetvalue('')
                    }}>
                        {t('public.close')}
                    </div>
                </div>
                <div className="order-topup" style={{ display: according === true ? 'flex' : 'none' }}>
                    <div className="order-top-up">
                        <h3>{t('property.cb')} {tokenid}</h3>
                        <div className="order-top-up-erc" style={{ display: tokenid === 'USDT' ? 'block' : 'none' }}>
                            {nav.map((items, inx) => {
                                return <span key={items.type} onClick={() => {
                                    setSelectusdt(inx)
                                    dispatch.order.getAddress({
                                        token_id: items.tokenname,
                                        chain_type: items.title
                                    }).then((res) => {
                                        if (res.data.allowDeposit) {
                                            setGaddress(res.data.address)
                                            setQrcode(res.data.qrcode)
                                        } else {
                                            Toast.info(res.msg)
                                        }
                                    }).catch(() => {
                                        Toast.info('数据请求失败')
                                    })
                                }} style={{ background: selectusdt === inx ? '#242F44' : '', color: selectusdt === inx ? '#fff' : '' }}>{items.title}</span>
                            })}
                        </div>
                        <div className="order-top-up-img">
                            <img src={`data:image/png;base64,` + qrcode} />
                        </div>
                        <div className="order-top-up-address">
                            <p>{t('property.cbaddress')}</p>
                            <span id="address">{gaddress}</span>
                            <div onClick={tocopy}>{t('public.cay')}</div>
                        </div>
                        <button onClick={handleSure}>{t('header.sign.sures')}</button>
                        <p className="tips">
                            <span>{t('property.importtitle')}</span><br/>
                            <span>{t('property.chinnum') + cbminnum}</span>
                        </p>
                    </div>
                </div>
                <div className="orderpasswd" style={{ display: pasdtitle === true ? 'block' : 'none' }}>
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
                        <div className="orderpasswdcode-code">
                            <input type="text" placeholder={t('header.sign.enterVerify')} ref={codetitles} />
                            <span onClick={handleSendcode}>{sendTxt}</span>
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
    </div>
}
