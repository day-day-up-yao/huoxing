import React, { useEffect, useState, useRef, useCallback } from 'react'
import Toast from '../../../components/Toast'
import './index.scss'
export default ({ setRefind, hkinfo, dispatch }) => {
    const verifyCodeInput = useRef()
    const [asset, setAsset] = useState([])
    const [codeflag, setCodeflag] = useState(false)
    const [type2fa, setType2fa] = useState({
        type: '',
        show: false
    })
    const [verifyCodeOrderId, setVerifyCodeOrderId] = useState(null)
    const [payorderid, setPayorderid] = useState()
    useEffect(() => {
        dispatch.product.checkC2cBanlance({
            token_ids: hkinfo.borrowCurrency
        }).then((res) => {
            setAsset(res)
        })
    }, [])
    const payOrderSendClick = useCallback(() => {
        const val = verifyCodeInput.current.value
        if (val === '') {
            Toast.info('请输入验证码')
        } else {
            dispatch.order.payOrder({
                order_id: payorderid,
                verify_code: verifyCodeInput.current.value,
                verify_code_order_id: verifyCodeOrderId
            }).then((res) => {
                if (res.code && res.code !== 0) {
                    Toast.info(res.msg)
                } else {
                    dispatch.loan.paymentStatus({
                        bhexOrderId: payorderid,
                        clientOrderId: res.clientOrderId,
                        paymentSource: 'hr-loan-prepay'
                    }).then((res) => {
                        if (res.data === true) {
                            Toast.info('支付成功')
                            window.location.href = '/pledgeorder'
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                }
            })
        }
    }, [payorderid, verifyCodeOrderId])
    const closeVerifyPopup = useCallback(() => {
        setType2fa({ type: '', show: false })
        setCodeflag(false)
    }, [])
    return <div className="refunds">
        <div className="refunds-con">
            <h3>立即还币</h3>
            <div className="lend-position-con-close" onClick={() => { setRefind(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <div className="refunds-con-item">
                <h4>
                    <span>订单号</span>
                    <span>{hkinfo.orderId}</span>
                </h4>
                <p>
                    <span>质押率</span>
                    <span>{hkinfo.pledgeRate * 100}%</span>
                </p>
            </div>
            <div className="refunds-con-item">
                <h4>
                    <span>应还金额</span>
                    <span>{hkinfo.remainingDebt}</span>
                </h4>
                <p>
                    <span>借币金额</span>
                    <span>{hkinfo.borrowAmt }{hkinfo.borrowCurrency}</span>
                </p>
                {hkinfo.overdueDays > 0 ? (
                    <p>
                        <span>逾期利息</span>
                        <span>{hkinfo.voerdueInterest }{hkinfo.borrowCurrency}</span>
                    </p>
                ) : ('')}
                <p>
                    <span>利息</span>
                    <span>{hkinfo.cycleInterest }{hkinfo.borrowCurrency}</span>
                </p>
            </div>
            <div className="refunds-con-item">
                <h4>
                    <span>选择支付方式</span>
                </h4>
                <div className="refunds-con-item-ls">
                    <p>
                        <span>用余额还币</span>
                        <span style={{ color: '#7065d6' }} onClick={() => {
                            window.location.href = '/property'
                        }}>去充值</span>
                    </p>
                    <p>
                        <span>可用余额</span>
                        <span>{asset.length > 0 ? asset[0].free : '0'} {hkinfo.borrowCurrency}</span>
                    </p>
                </div>
            </div>
            <div className="refunds-con-item">
                <h4>
                    <span>产品说明</span>
                </h4>
                <ol>
                    <li>按月取整计息，如借了1个月，26天还款。按1个月结息；借3个月，39天还款，按2个月结息；</li>
                    <li>提前还款完，原有计算收益将被解除。</li>
                </ol>
            </div>
            <div className="refunds-con-btn" onClick={() => {
                dispatch.loan.hrPayloan({
                    pledgeOrderId: hkinfo.orderId
                }).then((ress) => {
                    if (ress.code === 0) {
                        setPayorderid(ress.data.tradeNo)
                        dispatch.order.loadPayType({
                            order_id: ress.data.tradeNo
                        }).then((res) => {
                            if (res) {
                                if (res.data.authType === 'MOBILE' || res.data.authType === 'EMAIL') {
                                    if (res.data.authType === 'MOBILE') {
                                        setType2fa({
                                            type: 'mobile',
                                            show: true
                                        })
                                    }
                                    // 弹出框输入email验证码
                                    if (res.data.authType === 'EMAIL') {
                                        setType2fa({
                                            type: 'email',
                                            show: true
                                        })
                                    }
                                    dispatch.order.sendVderify({
                                        order_id: ress.data.tradeNo
                                    }).then((rs) => {
                                        if (rs) {
                                            setVerifyCodeOrderId(rs.data.orderId)
                                        }
                                    })
                                    // if (!sendVerifyCode || !sendVerifyCode.orderId) {
                                    //     Toast.info('请求失败')
                                    //     return
                                    // }
                                    // setVerifyCodeOrderId(sendVerifyCode.orderId)
                                    // 弹出框输入短信验证码
                                } else if (res.data.authType === 'GA') {
                                    // 弹出框输入googl验证码
                                    setType2fa({
                                        type: 'ga',
                                        show: true
                                    })
                                }
                                setCodeflag(true)
                            }
                        })
                    } else {
                        Toast.info(ress.msg)
                    }
                })
            }}>确认还款</div>
        </div>
        <div style={{ display: codeflag === true ? 'flex' : 'none' }} className={`popup2fa ${(type2fa.type === 'mobile' || type2fa.type === 'email' || type2fa.type === 'ga') ? 'active' : ''}`}>
            <div className="popup2fa-con-posit">
                <h3>{(type2fa.type === 'mobile' && '手机') || (type2fa.type === 'email' && '邮箱') || (type2fa.type === 'ga' && '谷歌')}验证</h3>
                <div className="popup2fa-con">
                    <input ref={verifyCodeInput} type="text" placeholder={`${'请输入'}${(type2fa.type === 'mobile' && '手机') || (type2fa.type === 'email' && '邮箱') || (type2fa.type === 'ga' && '谷歌')}${'验证码'}`} />
                    <button onClick={payOrderSendClick} className="sure-pay">确定</button>
                    <button onClick={closeVerifyPopup} className="cancel-pay">取消</button>
                </div>
            </div>
        </div>
    </div>
}
