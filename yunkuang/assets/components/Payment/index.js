import React, { useState, useRef, useCallback, useEffect } from 'react'
import Toast from '../../components/Toast'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import codewechat from '../../public/imgs/codewetchat.jpg'
import './index.scss'
import Recharge from '../../components/Recharge'
import { numToFixed, isPc, trim, twiceVerify } from '../../public/js/index'
import { Curreylog } from '../../public/js/curryicon'
// import usdticon from './imgs/usdticon.png'
import wechaticon from './imgs/wechaticon.png'
import playicon from './imgs/playicon.png'
import caricon from './imgs/caricon.png'
import Succimg from '../../public/imgs/new/changesucc.png'

// 订单详情页，在点击支付时，首先会调用更新订单接口orderUpdate。在此组件的支付按钮上覆盖了一个createOrderBtn按钮并且隐藏，此组件蒙版关闭后需要显示此按钮。仅针对订单详情
const createOrderBtnShow = () => {
    if (document.getElementById('createOrderBtn')) document.getElementById('createOrderBtn').style.display = 'block'
}
const createOrderBtnHide = () => {
    if (document.getElementById('createOrderBtn')) document.getElementById('createOrderBtn').style.display = 'none'
}
/** @props {clientTradeNo算力或电费订单id, payType算力或者电费类型, paySuccess支付成功回调函数} */
let timer = null
let times = 0 // 微信支付自动查询支付状态，大于10次，不再轮训
export default ({ clientTradeNo, clientOrderId, orderType, paySuccess, payWayHandle, promotionCode, noBankPay, allpaymoney, eleDays, electricPay, orderId, costorder, costcurrey, currtype, orderpaylist }) => {
    // console.log(costcurrey)
    // console.log(orderpaylist)
    // const env = process.env.NODE_ENV
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [type2fa, setType2fa] = useState({
        type: '',
        show: false
    })
    const [verifyCodeOrderId, setVerifyCodeOrderId] = useState(null)
    const [payOrderId, setPayOrderId] = useState(false)
    const [wxQrcode, setWxQrcode] = useState(null)
    const verifyCodeInput = useRef()
    const [goVerify, setGoVerify] = useState(false)
    const [payhard, setPayhard] = useState(false)

    const [succTime, setSuccTime] = useState(10)
    const [succhard, setSucchard] = useState(false)
    const [succflag, setSuccflag] = useState(false)
    // 支付方式与币种
    // currency: 'CNY', // USDT,BTC,BDDA,人民币使用CNY
    // payType: 2 // 1: 币币支付 2: 微信支付 3:支付宝 4:银行卡支付
    const [payWay, setPayWay] = useState({
        currency: null,
        payType: null
    })

    // const testCurrery = {
    //     createdAt: null,
    //     currency: 'TETH',
    //     id: null,
    //     payType: 1,
    //     typeName: '币币支付',
    //     updatedAt: null,
    //     version: null
    // }

    // 检查微信支付状态
    const checkWxpayStatus = useCallback(async function (tradeNo, type) {
        if (type === 'click') {
            clearInterval(timer)
            setWxQrcode(null)
            createOrderBtnShow()
        }

        const payStatus = await dispatch.order.checkWxpayStatus({
            tradeNo: tradeNo
        }).catch(function (err) {
            console.log(err)
            // Toast.info('微信支付错误')
        })
        if (!payStatus || !payStatus.hasOwnProperty('code')) {
            console.log(payStatus)
            return
        }

        if (payStatus.code === 0) {
            // 如果是点击‘click’检查则显示全部状态
            if (type === 'click') {
                switch (payStatus.data) {
                    case 'SUCCESS':
                        Toast.info('支付成功')
                        setSuccflag(true)
                        setSucchard(true)
                        // if (paySuccess) { paySuccess() } else { window.location.reload() }
                        break
                    case 'PAYERROR':
                        setWxQrcode(null)
                        Toast.info('支付失败')
                        break
                    case 'NOTPAY':
                        setWxQrcode(null)
                        Toast.info('未支付')
                        break
                    case 'REFUND':
                        setWxQrcode(null)
                        Toast.info('转入退款')
                        break
                    case 'CLOSED':
                        setWxQrcode(null)
                        Toast.info('已关闭')
                        break
                    case 'REVOKED':
                        setWxQrcode(null)
                        Toast.info('已撤销')
                        break
                    default:
                        setWxQrcode(null)
                        Toast.info('未知状态')
                }
            } else {
                switch (payStatus.data) {
                    case 'SUCCESS':
                        setWxQrcode(null)
                        createOrderBtnShow()
                        clearInterval(timer)
                        Toast.info('支付成功')
                        setSuccflag(true)
                        setSucchard(true)
                        // if (paySuccess) { paySuccess() } else { window.location.reload() }
                        break
                    case 'PAYERROR':
                        setWxQrcode(null)
                        createOrderBtnShow()
                        clearInterval(timer)
                        Toast.info('支付失败')
                        break
                    case 'CLOSED':
                        setWxQrcode(null)
                        createOrderBtnShow()
                        clearInterval(timer)
                        Toast.info('已关闭')
                        break
                }
            }
        } else {
            Toast.info(payStatus.msg)
        }
    }, [])

    /** @desc ----------创建支付订单--------- */
    const buyNow = useCallback(async () => {
        if (!clientTradeNo) {
            Toast.info(t('public.qrorder'))
            return
        }

        if (!payWay.payType) {
            Toast.info(t('public.selectpay'))
            return
        }

        // 如果是币币支付,--检测是否存在余额,--检测是否需要二次验证
        if (payWay.payType === 1) {
            // 获取用户信息检测是否需要二次验证
            const tVerify = await twiceVerify(dispatch, true)
            if (tVerify) {
                setGoVerify(true)
                return
            }

            // 获取余额
            const hasBanlance = await dispatch.order.checkC2cBanlance(payWay.currency).catch(function (err) {
                console.log(err)
                Toast.info(t('public.fail'))
            })
            if (!hasBanlance || !Array.isArray(hasBanlance.data)) {
                if (hasBanlance.msg) {
                    Toast.info(hasBanlance.msg)
                } else {
                    Toast.info(t('public.fail'))
                }
                return
            }

            if (hasBanlance.data.length === 0 || (hasBanlance.data[0].free && hasBanlance.data[0].free <= 0)) {
                Toast.info(t('public.yebz'))
            }
        }

        // 创建支付订单
        const payMultiParams = {
            clientOrderId: clientTradeNo,
            paymentSource: orderType,
            ...payWay
        }
        if (promotionCode) payMultiParams.discountCode = promotionCode
        const payCreate = await dispatch.order.payMultiCreate(payMultiParams).catch(function (err) {
            console.log(err)
            Toast.info(t('public.fail'))
        })
        if (!payCreate || payCreate.code !== 0) {
            Toast.info(payCreate.msg)
            return false
        }
        setPayOrderId(payCreate.data.tradeNo)

        if (payCreate.data.payType === 2) { // 微信支付
            setWxQrcode(payCreate.data.qrCodeBase64)
            // 设置定制器检测微信支付状态
            timer = setInterval(() => {
                if (times <= 10) {
                    times++
                    checkWxpayStatus(payCreate.data.tradeNo)
                } else {
                    clearInterval(timer)
                }
            }, 10000)
        } else if (payCreate.data.payType === 3) { // 支付宝支付

        } else if (payCreate.data.payType === 1) { // 数字货币支付
            // 获取2FA(二次安全验证)验证方式
            const loadPayType = await dispatch.order.loadPayType({
                order_id: payCreate.data.tradeNo
            }).catch(function (err) {
                console.log(err)
                Toast.info(t('public.hqfa'))
            })
            if (!loadPayType || !loadPayType.data.orderInfo || !loadPayType.data.authType) {
                loadPayType.msg ? Toast.info(loadPayType.msg) : Toast.info(t('public.hqfa'))
                return false
            }

            // 当为MOBILE,EMAIL时调用send_payment_verify_code
            if (loadPayType.data.need2FA) {
                verifyCodeInput.current.value = ''
                /** @desc 需要二次验证弹出输入验证码框 */
                if (loadPayType.data.authType === 'MOBILE' || loadPayType.data.authType === 'EMAIL') {
                    const sendVerifyCode = await dispatch.order.sendVderify({
                        order_id: payCreate.data.tradeNo
                    }).catch(function (err) {
                        console.log(err)
                        Toast.info(t('public.fail'))
                    })
                    if (!sendVerifyCode || !sendVerifyCode.data.orderId) {
                        Toast.info(t('public.fail'))
                        return
                    }
                    setVerifyCodeOrderId(sendVerifyCode.data.orderId)

                    // 弹出框输入短信验证码
                    if (loadPayType.data.authType === 'MOBILE') {
                        setType2fa({
                            type: 'mobile',
                            show: true
                        })
                    }
                    // 弹出框输入email验证码
                    if (loadPayType.data.authType === 'EMAIL') {
                        setType2fa({
                            type: 'email',
                            show: true
                        })
                    }
                } else if (loadPayType.data.authType === 'GA') {
                    // 弹出框输入googl验证码
                    setType2fa({
                        type: 'ga',
                        show: true
                    })
                    setVerifyCodeOrderId('')
                }
            } else {
                // console.log(1111)
                /** @desc 不需要验证码则直接请求支付接口 */
                coinPay({
                    order_id: payCreate.data.tradeNo
                })
            }
        }
    }, [payOrderId, verifyCodeOrderId, type2fa, clientTradeNo, payWay, wxQrcode, promotionCode])

    /** @desc ----------数字货币支付--------- */
    const coinPay = useCallback(async (params) => {
        // 发起支付
        const payOrder = await dispatch.order.payOrder(params).catch(function (err) {
            console.log(err)
            Toast.info(t('orderdetail.payfail'))
        })
        if (payOrder.code && payOrder.code !== 0) {
            Toast.info(payOrder.msg)
            return
        }
        if (!payOrder || !payOrder.data.orderId) {
            Toast.info(t('orderdetail.payfail'))
            return
        }
        closeVerifyPopup()
        createOrderBtnShow()
        Toast.info(t('orderdetail.paysucc'))

        // 同步支付状态
        const payStatus = await dispatch.order.payStatus({
            bhexOrderId: payOrderId,
            clientOrderId: clientTradeNo,
            paymentSource: orderType
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.tbpay'))
        })
        if (!payStatus || payStatus.code !== 0) {
            Toast.info(t('public.tbpay'))
            // return
        }
        setSuccflag(true)
        setSucchard(true)
        // if (paySuccess) { paySuccess() } else { window.location.reload() }
    }, [payOrderId, verifyCodeOrderId, clientTradeNo])

    /** @desc ----------点击确认支付--------- */
    const payOrderSendClick = useCallback(() => {
        const val = verifyCodeInput.current.value
        if (val === '') {
            Toast.info(t('header.sign.enterVerify'))
        } else {
            coinPay({
                order_id: payOrderId,
                verify_code_order_id: verifyCodeOrderId,
                verify_code: verifyCodeInput.current.value
            })
        }
    }, [payOrderId, verifyCodeOrderId])
    const closeVerifyPopup = useCallback(() => {
        setType2fa({ type: '', show: false })
        createOrderBtnShow()
    }, [])

    // 支付方式
    const [payList, setPayList] = useState([])
    useEffect(() => {
        dispatch.order.payList().then((res) => {
            if (res.code === 0) {
                if (costcurrey) {
                    const iteminfo = res.data.find((itm) => (itm.currency === costcurrey))
                    selectCurrey(iteminfo)
                }
                if (costorder) {
                    const payElectlist = res.data.filter((itm) => (itm.supportElectric === 1))
                    setPayList(payElectlist)
                } else {
                    const paytypelist = res.data.filter((item) => item.currency === currtype || item.currency === 'TETH')
                    if (orderpaylist) {
                        setPayList(orderpaylist)
                    } else {
                        setPayList(paytypelist)
                    }
                }
            }
        })
    }, [allpaymoney, costorder, costcurrey, orderpaylist])

    // 账户余额
    const [leftMoney, setLeftMoney] = useState(0)

    // 微信二维码提示文档
    const [wxCodeTips, setWxCodeTips] = useState('请用微信扫描并支付')
    const [wxCodeTit, setWxCodeTit] = useState('扫码添加小助手沟通')
    // 客服二维码提示
    useEffect(() => {
        if (!isPc()) {
            setWxCodeTips(`若长按识别支付无效，请使用另一台手机扫码支付`)
            setWxCodeTit('长按添加小助手沟通')
        }
    }, [])

    // 银行卡信息与支付宝信息切换 0银行卡，1支付宝
    const [bankType, setBankType] = useState(0)
    const bankNumEle = useRef()
    const bankAddressEle = useRef()
    const aliNumEle = useRef()
    const nameEle = useRef()
    const bankPayConfirm = useCallback(() => {
        const bankNum = trim(bankNumEle.current.value)
        const bankAddress = trim(bankAddressEle.current.value)
        const aliNum = trim(aliNumEle.current.value)
        const name = trim(nameEle.current.value)
        if (name === '') {
            Toast.info('请输入姓名')
            return
        }
        const params = {
            bankType: bankType,
            orderId: clientOrderId,
            realName: name
        }
        if (promotionCode) params.discountCode = promotionCode
        if (bankType === 0) {
            if (bankNum === '') {
                Toast.info('请输入银行卡卡号')
                return
            }
            if (bankAddress === '') {
                Toast.info('请输入银行卡开户行')
                return
            }
            params.accountNo = bankNum
            params.openingBank = bankAddress
        } else if (bankType === 1) {
            if (aliNum === '') {
                Toast.info('请输入支付宝账户')
                return
            }
            params.accountNo = aliNum
        }
        dispatch.order.orderUpdate({
            buyElectricDays: eleDays,
            electricPayType: electricPay,
            orderId: orderId
        }).then(function (res) {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                dispatch.order.bankPayConfirm(params).then(function (res) {
                    if (res.code === 0) {
                        if (res.data) {
                            window.location.href = '/order'
                        } else {
                            Toast.info('未收到货款，请联系客服')
                        }
                    } else {
                        Toast.info(res.msg)
                    }
                }).catch(function (err) {
                    console.log(err)
                    Toast.info('银行卡支付确认错误')
                })
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('算力订单创建失败')
        })
    }, [bankType, clientOrderId, promotionCode, eleDays, electricPay, orderId])

    // 点击复制银行卡卡号，或者支付宝账号
    const copyAccount = useCallback((event) => {
        const range = document.createRange()
        range.selectNode(document.getElementById(event.target.getAttribute('dataid')))
        const selection = window.getSelection()
        if (selection.rangeCount > 0) selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand('copy')
        Toast.info('复制成功')
    }, [])

    // 选择币种支付
    const selectCurrey = useCallback((item) => {
        const params = { currency: item.currency.toUpperCase(), payType: item.payType }
        setPayWay(params)

        if (item.payType === 4) {
            setBankType(0)
            createOrderBtnHide()
        } else {
            createOrderBtnShow()
        }
        if (item.payType === 3) {
            setBankType(1)
            createOrderBtnHide()
        } else {
            createOrderBtnShow()
        }

        // 查询余额并展示
        item.payType === 1 && dispatch.order.checkC2cBanlance(item.currency.toUpperCase()).then(function (res) {
            if (res && Array.isArray(res.data)) {
                if (res.data.length === 0) {
                    setLeftMoney(0)
                    return
                }

                if (res.data[0].free) setLeftMoney(res.data[0].free)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('查询币币账户余额错误')
        })

        if (payWayHandle) payWayHandle(params)
    }, [])
    // 成功倒计时显示订单成功弹窗
    useEffect(() => {
        // if (!timeflag) return
        let time = null
        if (succhard) {
            let num = 10
            time = setInterval(() => {
                if (num > 0) {
                    num--
                    setSuccTime(`${num}s`)
                } else {
                    setSuccTime()
                    clearInterval(time)
                    setSucchard(false)
                }
            }, 1000)
        }
        return () => clearInterval(time)
    }, [succhard])
    return <div className="payment-wrapper">
        <div className="pay-type">
            {payList.map(function (item, index) {
                // let classNameOne = ''
                // if (item.payType === 4) classNameOne = 'bank-card'
                // if (item.payType === 2) classNameOne = 'wechat'
                // if (item.payType === 3) classNameOne = 'alpay'
                // if (item.currency.toUpperCase() === 'BDDA') classNameOne = 'Ubdda'
                // if (item.currency.toUpperCase() === 'USDT') classNameOne = item.currency.toLowerCase()
                return <div
                    key={index}
                    title={item.typeName}
                    style={{ display: (noBankPay && (item.payType === 4 || item.payType === 3)) ? 'none' : 'flex' }}
                    className={`item ${(payWay.currency === item.currency && payWay.payType === item.payType) ? 'active' : ''}`}
                    // className={`item ${classNameOne} ${(payWay.currency === item.currency && payWay.payType === item.payType) ? 'active' : ''}`}
                    onClick={() => {
                        if (costorder && costcurrey && item.supportElectric === 0) return
                        if (orderType === 'collect-order') return
                        // if (costorder && costcurrey) return
                        selectCurrey(item)
                    }} >
                    {item.payType === 1 && <img src={Curreylog.filter((itm) => { return itm.name === item.currency.toUpperCase() })[0]?.logo} alt="" />}
                    {item.payType === 2 && <img src={wechaticon} alt="" />}
                    {item.payType === 3 && <img src={playicon} alt="" />}
                    {item.payType === 4 && <img src={caricon} alt="" />}
                    {item.payType === 1 ? `${item.currency.toUpperCase()}` : item.typeName}
                </div>
            })}
        </div>
        <div className="pay-other-info">
            <button className="pay-rightnow" style={{ display: payWay.payType !== 4 ? payWay.payType !== 3 ? 'block' : 'none' : 'none' }} onClick={buyNow}>{t('public.ljfk')}</button>
            <div className="wx-pay-tips-outer" style={{ display: payWay.payType === 2 ? 'block' : 'none' }}>
                微信支付支持第二台手机扫码支付，不支持截图扫码。<br />
                若出现错误提示，请使用支付宝或银行卡转账方式支付。
            </div>
            <div className="charge-wrapper" style={{ display: payWay.payType === 1 ? 'flex' : 'none' }}>
                <div className="left-money">{t('public.zhye')} {numToFixed(leftMoney, 8)}{payWay.currency}</div>
                <Recharge currency={payWay.currency} />
            </div>
            <div className="bank-card-wrapper" style={{ display: (payWay.payType === 4 || payWay.payType === 3) ? 'block' : 'none' }}>
                {/* <div className="pay-tab">
                    <a onClick={() => setBankType(0)} className={`bank-card ${bankType === 0 ? 'active' : ''}`}>银行卡</a>
                    <a onClick={() => setBankType(1)} className={`bank-card ${bankType === 1 ? 'active' : ''}`}>支付宝</a>
                </div> */}
                <div className="bank-card-tips">
                    <div className="bank-tips" style={{ display: bankType === 0 ? 'block' : 'none' }}>
                        户名：深圳市火星区块科技有限公司<br />
                        开户行：交通银行北京望京支行<br />
                        收款账号：<em id="bankAccount">110060906013000274855</em><a dataid="bankAccount" onClick={copyAccount}>复制卡号</a><br />
                    </div>
                    <div className="alipay-tips" style={{ display: bankType === 1 ? 'block' : 'none' }}>
                        企业支付宝账户：<br />
                        户名：深圳市火星区块科技有限公司<br />
                        账号：<em id="alipayAccount">hxykf@mclouds.io</em><a dataid="alipayAccount" onClick={copyAccount}>复制账号</a><br />
                    </div>
                    <span>转账订单标注金额至以上账户，在下方填入您的账户信息，点击“我已支付”等待审核</span>
                </div>
                <div className="pay-con">
                    <div className="bank-card" style={{ display: bankType === 0 ? 'block' : 'none' }}>
                        <input ref={bankNumEle} type="number" placeholder="请输入您支付所用银行卡号" /><br />
                        <input ref={bankAddressEle} type="text" placeholder="请输入该卡开户行" /><br />
                    </div>
                    <div className="alipay" style={{ display: bankType === 1 ? 'block' : 'none' }}>
                        <input ref={aliNumEle} type="text" placeholder="请输入您的支付宝账号" /><br />
                    </div>
                    <input ref={nameEle} type="text" placeholder="请输入您的真实姓名" />
                </div>
                <a className="had-pay"
                    style={{ display: (payWay.payType === 4 || payWay.payType === 3) ? 'block' : 'none' }}
                    onClick={bankPayConfirm}
                >我已支付</a>
            </div>
        </div>
        <div className={`popup2fa ${(type2fa.type === 'mobile' || type2fa.type === 'email' || type2fa.type === 'ga') ? 'active' : ''}`}>
            <div className="popup2fa-con">
                <input ref={verifyCodeInput} type="number" placeholder={`${t('header.sign.qsr')}${(type2fa.type === 'mobile' && t('header.sign.dx')) || (type2fa.type === 'email' && t('header.sign.youxaing')) || (type2fa.type === 'ga' && t('header.sign.guge'))}${t('header.sign.yzm')}`} />
                <button onClick={payOrderSendClick} className="sure-pay">{t('header.sign.sures')}</button>
                <button onClick={closeVerifyPopup} className="cancel-pay">{t('productdetail.qx')}</button>
            </div>
        </div>
        <div className="wechat-pay" style={{ display: wxQrcode ? 'flex' : 'none' }}>
            <div className="wechat-pay-con" style={{ display: payhard === false ? 'block' : 'none' }}>
                <img src={`data:image/png;base64,${wxQrcode}`} alt="微信支付" />
                <p>{wxCodeTips}</p>
                <div className="sure-cancel">
                    <button onClick={() => checkWxpayStatus(payOrderId, 'click')} className="wxpay-sure">我已支付</button>
                    <button onClick={() => checkWxpayStatus(payOrderId, 'click')} className="wxpay-cancel">关闭</button>
                    {/* <button onClick={() => setWxQrcode(null)} className="wxpay-cancel">关闭</button> */}
                </div>
                <div className="wechat-pay-question" onClick={() => {
                    setPayhard(true)
                }}>支付遇到困难？</div>
            </div>
            <div className="wechat-pay-con" style={{ display: payhard === true ? 'block' : 'none' }}>
                <img src={codewechat} alt="客服小助手" />
                <div className="wechat-pay-con-p">{wxCodeTit}</div>
                <div className="wechat-pay-question" onClick={() => {
                    checkWxpayStatus(payOrderId, 'click')
                    setPayhard(false)
                }}>关闭</div>
            </div>
        </div>
        <div className="goto-usercenter" style={{ display: goVerify ? 'flex' : 'none' }}>
            <div className="goto-usercenter-con">
                <p>{t('public.bindtitle')}</p>
                <div className="button">
                    <a>{t('productdetail.qx')}</a>
                    <a href="/usercenter">{t('header.sign.sures')}</a>
                </div>
            </div>
        </div>
        {succflag && <div className="payment-success">
            <div className="payment-success-center">
                <img src={Succimg} alt=""/>
                <div className="payment-success-text">{t('orderdetail.paysucc')}</div>
                <div className="payment-success-other">
                    {succhard ? (
                        <div className="other-time">
                            <p>{t('orderdetail.dealorder')}</p>
                            <p>{succTime}</p>
                        </div>
                    ) : (
                        <div className="other-go-order" onClick={() => {
                            if (paySuccess) { paySuccess() } else { window.location.reload() }
                        }}>
                            {t('orderdetail.seeorder')}
                        </div>
                    )}
                </div>
            </div>
        </div>}
    </div>
}
