import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { formatTime, formatPrice, mixUrl, isCoco } from '../../../public/js/index'
import './index.scss'
import Toast from '../../../components/Toast'
import nomesg from '../../../public/imgs/borrow/nobow.png'
export default ({ setReimbursementShow, orderid, ordid, lcurrcy }) => {
    const verifyCodeInput = useRef()
    const dispatch = useDispatch()
    const [ flag, setFlag ] = useState(2)
    const [lxlist, setLxlist] = useState([])
    const [codeflag, setCodeflag] = useState(false)
    const [asset, setAsset] = useState([])
    const [payinfo, setPayinfo] = useState([])
    const [type2fa, setType2fa] = useState({
        type: '',
        show: false
    })
    const [verifyCodeOrderId, setVerifyCodeOrderId] = useState(null)
    const [payorderid, setPayorderid] = useState()
    const [wyflage, setWyflage] = useState(false)
    const [wylist, setWylist] = useState([])
    useEffect(() => {
        dispatch.loan.violateConfiginfo({}).then((res) => {
            if (res.code === 0) {
                setWylist(res.data)
            }
        })
        dispatch.product.checkC2cBanlance({
            token_ids: lcurrcy
        }).then((res) => {
            setAsset(res)
        })
        dispatch.loan.prepayInfo({
            id: ordid
        }).then((res) => {
            if (res.code === 0) {
                setPayinfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.loan.fixedLoadInterestList({
            orderId: orderid
        }).then((res) => {
            if (res.code === 0) {
                setLxlist(res.data)
            } else {
                Toast.info(res.msg)
            }
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
                        paymentSource: flag === 2 ? 'loan-interest' : 'loan-prepay'
                    }).then((res) => {
                        console.log(res)
                        if (res.data === true) {
                            Toast.info('支付成功')
                            if (isCoco()) {
                                window.location.href = '/coco/order'
                            } else {
                                window.location.href = '/lend/order'
                            }
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                }
            })
        }
    }, [payorderid, verifyCodeOrderId, flag])
    const closeVerifyPopup = useCallback(() => {
        setType2fa({ type: '', show: false })
        setCodeflag(false)
    }, [])
    return <div className="css-yr0plm">
        <div className="css-19g6jpf">
            <svg onClick={() => setReimbursementShow(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                    fill="currentColor"></path>
            </svg>
            <div className="sc-gZMcBi flILfR">
                <span onClick={() => setFlag(2)} style={{ color: flag === 2 ? '#025AE6' : '' }}>还款计划表</span>
                <span onClick={() => setFlag(1)} style={{ color: flag === 1 ? '#025AE6' : '' }}>提前还款</span>
            </div>
            <div className="hk-con" style={{ display: flag === 1 ? '' : 'none' }}>
                <div className="hk-con-top">
                    <div className="hk-con-top-t">
                        <div className="hk-con-top-t-l">
                            <span>订单编号：</span>
                            <span>{payinfo.orderId}</span>
                        </div>
                        <div className="hk-con-top-t-r">
                            <span>质押率：</span>
                            <span>{formatPrice(payinfo.pledgeRate * 100)}%</span>
                        </div>
                    </div>
                    <div className="hk-con-top-spns">
                        <span>应还金额 ({payinfo.borrowCurrency})</span>
                        <span>{payinfo.borrowAmt + payinfo.interestAmt + payinfo.violateAmt}</span>
                    </div>
                    <div className="hk-con-top-spn">
                        <span>借币金额</span>
                        <span>{payinfo.borrowAmt}</span>
                    </div>
                    <div className="hk-con-top-spn">
                        <span>利息</span>
                        <span>{payinfo.interestAmt}</span>
                    </div>
                    <div className="hk-con-top-spn">
                        <div>
                            <span>违约金</span>
                            <span className="hk-con-top-spn-spn" onClick={() => {
                                setWyflage(true)
                            }}>?</span>
                        </div>
                        <span>{payinfo.violateAmt}</span>
                    </div>
                </div>
                <div className="hk-con-pay">
                    <h3>选择支付方式</h3>
                    <div className="hk-con-pay-list">
                        <div className="hk-con-pay-list-y">
                            <div className="hk-con-pay-list-y-t">
                                <span>用余额还币</span>
                                <span onClick={() => {
                                    if (isCoco()) {
                                        window.location.href = '/finance'
                                    } else {
                                        window.location.href = mixUrl.main('/property')
                                    }
                                }}>充值</span>
                            </div>
                            <div className="hk-con-pay-list-y-b">
                                <span>可用余额</span>
                                <span>{asset.length > 0 ? asset[0].free : '0'} {lcurrcy}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hk-con-title">
                    <h3>说明</h3>
                    <ul>
                        <li>提前结清，将按天收取应还利息和托管费</li>
                        <li>提前结清后订单结束，剩余质押物会立即返还到您的账户</li>
                    </ul>
                </div>
                <div className="hk-con-sure" onClick={() => {
                    // setCodeflag(true)
                    dispatch.loan.payLoan({
                        pledgeOrderId: ordid,
                        type: 1
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

            {/* 按息还款 */}
            <div className="list-con" style={{ display: flag === 2 ? '' : 'none' }}>
                <ol>
                    <li>{lxlist.length}期还完，按月先付利息，到期还本金，可提前结清，需支付相应违约金<span onClick={() => {
                        dispatch.loan.violateConfiginfo({}).then((res) => {
                            if (res.code === 0) {
                                setWylist(res.data)
                                setWyflage(true)
                            } else {
                                Toast.info(res.msg)
                            }
                        })
                    }}>?</span></li>
                    <li>您需在还币日+3日内手动还币； 若未按时还币，系统将从质押币中自动按市价抵扣；</li>
                </ol>
                {lxlist.length > 0 ? (
                    lxlist.map((item, index) => {
                        return <ul key={index}>
                            <li>
                                <p>
                                    <span>{formatTime(item.end, 'yyyy-MM-dd')}</span>
                                    <span onClick={() => {
                                        if (item.payStatus === 1 || item.payStatus === 3 || item.payStatus === 2) {
                                            return
                                        }
                                        // setCodeflag(true)
                                        dispatch.loan.payLoan({
                                            interestId: item.interestId,
                                            pledgeOrderId: ordid,
                                            type: 0
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
                                    }}
                                    style={{ padding: item.payStatus !== 0 ? '0' : '', border: item.payStatus !== 0 ? 'none' : '', color: item.payStatus === 1 ? '#999' : item.payStatus === 3 ? '#999' : item.payStatus === 2 ? '#999' : '' }}
                                    >{item.payStatus === 1 ? '已还款' : item.payStatus === 0 ? '立即还款' : item.payStatus === 3 ? '提前还款' : item.payStatus === 2 ? '质押币还款' : ''}</span>
                                </p>
                                <p>
                                    <span>{item.paybackInterest} {item.interestCurrency}</span>
                                    <span></span>
                                </p>
                            </li>
                        </ul>
                    })
                ) : (
                    <div className="nolist-con">
                        <div className="nolist-con-img">
                            <img src={nomesg} alt=""/>
                        </div>
                        <div className="nolist-con-t">暂无数据</div>
                    </div>
                )}
            </div>
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
        <div className="wy-posit" style={{ display: wyflage === true ? 'flex' : '' }}>
            <div className="wy-posit-con">
                <div className="wy-posit-con-top">违约金</div>
                <div className="wy-posit-con-title">
                    <p>提前结清违约金是指您在使用提前结清功能时，加收的违约费用</p>
                    {/* <p>提前结清时的当前期数越大，违约费用越少</p> */}
                </div>
                <ul>
                    {wylist.length > 0 ? (
                        wylist.map((item, index) => {
                            return <li key={index}>当前期数是{item.begin}-{item.end}期，违约金为{item.violateDay}天利息</li>
                        })
                    ) : ('')}
                </ul>
                <div className="wy-close">
                    <svg onClick={() => setWyflage(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}
