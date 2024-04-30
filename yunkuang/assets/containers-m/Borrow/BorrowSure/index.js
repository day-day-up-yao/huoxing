import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { formatTime, queryParam, isCoco } from '../../../public/js/index'
import './index.scss'
import Toast from '../../../components/Toast'
export default ({ setOrderSureShow, rate, day, curBorrow, curBorrowSelected, curCollateral, curCollateralSelected, allpay, allreat, endtime }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [check, setCheck] = useState(false)
    const [type2fa, setType2fa] = useState({
        type: '',
        show: false
    })
    const verifyCodeInput = useRef()
    const [appflage, setAppflage] = useState(false)
    const [codeflag, setCodeflag] = useState(false)
    const [verifyCodeOrderId, setVerifyCodeOrderId] = useState(null)
    const [payorderid, setPayorderid] = useState()
    useEffect(() => {
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
        // var endDate = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 * day)
    }, [])
    const payOrderSendClick = useCallback(() => {
        const val = verifyCodeInput.current.value
        if (val === '') {
            Toast.info(t('header.sign.enterVerify'))
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
                        paymentSource: 'loan-order'
                    }).then((res) => {
                        if (res.data === true) {
                            Toast.info('支付成功')
                            if (appflage === true) {
                                window.location.href = '/lend/order?channel=111'
                            } else {
                                if (isCoco()) {
                                    window.location.href = '/coco/order'
                                } else {
                                    window.location.href = '/lend/order'
                                }
                            }
                        } else {
                            Toast.info(res.msg)
                        }
                    })
                }
            })
        }
    }, [verifyCodeOrderId, payorderid])
    const closeVerifyPopup = useCallback(() => {
        setType2fa({ type: '', show: false })
        setCodeflag(false)
    }, [])
    return <div className="css-yr0plm">
        <div className="css-1glly88">
            <div className="css-1y6ued0">
                <div className="title">
                    <span>{t('lend.sureorder')}</span>
                    <svg onClick={() => setOrderSureShow(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-1iwojl1">
                        <path
                            d="M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z"
                            fill="currentColor">
                        </path>
                    </svg>
                </div>
                <div className="content">
                    <div className="lines">
                        <div className="line"><span className="key">{t('lend.lendnum')}</span><span>{curBorrow} {curBorrowSelected.currency}</span></div>
                        <div className="line"><span className="key">{t('lend.zynum')}</span><span>{curCollateral} {curCollateralSelected.currency}</span></div>
                        <div className="line"><span className="key">{t('lend.lendtime')}</span><span>{day} {t('lend.month')}</span></div>
                        <div className="line"><span className="key">{t('lend.allinterest')}</span><span>{allreat} {curBorrowSelected.currency}</span></div>
                        <div className="line"><span className="key">{t('lend.overtime')}</span><span>{formatTime(endtime, 'yyyy-MM-dd')}</span></div>
                    </div>
                    <div className="repay-amt"><span>{t('lend.hknum')}</span><span>{allpay} {curBorrowSelected.currency}</span></div>
                    <div className="confirm">
                        <div className="agree">
                            <label className="css-51ezhr">
                                <div className="css-s6cz5e">
                                    <input type="checkbox" onChange={(e) => {
                                        setCheck(e.target.checked)
                                    }} data-bn-type="checkbox" hidden="" className="css-p19g2b" />
                                </div>
                                <span>{t('lend.pleaseagree')}
                                    <a className="primary" href={isCoco() ? '/coco/agreement' : '/lend/agreement'} target="_blank">{t('header.sign.service')}</a>
                                </span>
                            </label>
                        </div>
                        <button onClick={() => {
                            if (check) {
                                dispatch.loan.fixedloanCreate({
                                    loanAmount: curBorrow,
                                    loanCurrency: curBorrowSelected.currency,
                                    loanPeriod: day,
                                    marginAmount: curCollateral,
                                    marginCurrency: curCollateralSelected.currency
                                }).then((ress) => {
                                    setOrderSureShow(true)
                                    if (ress.code === 0) {
                                        setPayorderid(ress.data.tradeNo)
                                        // 判断二次验证的方式
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
                            } else {
                                Toast.info('请先阅读并同意协议')
                            }
                            // window.location.href = '/borrow/order'
                        }} data-bn-type="button" disabled="" className="css-1miqa7d" style={{ background: '#7065d6', color: '#fff' }}>确认</button>
                    </div>
                </div>
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
    </div>
}
