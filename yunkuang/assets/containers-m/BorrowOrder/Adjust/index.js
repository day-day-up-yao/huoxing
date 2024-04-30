import React, { useEffect, useState, useRef, useCallback } from 'react'
// import Slider from 'rc-slider'
import { useDispatch } from 'react-redux'
import Toast from '../../../components/Toast'
import { formatPrice, mixUrl, isCoco } from '../../../public/js/index'
import './index.scss'
export default ({ setAdjustShow, zynum, qppay, orderid, currcy, lcurrcy }) => {
    const dispatch = useDispatch()
    const verifyCodeInput = useRef()
    const [asset, setAsset] = useState([])
    const [numb, setNumb] = useState()
    const [risk, setRisk] = useState()
    const [coverd, setCoverd] = useState()
    const [rerisk, setRerisk] = useState('-')
    const [recoverd, setRecoverd] = useState('-')
    const [margincall, setMargincall] = useState()
    const [type2fa, setType2fa] = useState({
        type: '',
        show: false
    })
    const [codeflag, setCodeflag] = useState(false)
    const [verifyCodeOrderId, setVerifyCodeOrderId] = useState(null)
    const [payorderid, setPayorderid] = useState()
    useEffect(() => {
        dispatch.product.checkC2cBanlance({
            token_ids: currcy
        }).then((res) => {
            setAsset(res.data)
        })
        dispatch.loan.marginRecalc({
            loanOrderId: orderid,
            marginCallAmount: 0,
            marginCurrency: currcy
        }).then((res) => {
            if (res.code === 0) {
                console.log(res)
                setRisk(res.data.currentRisk)
                setCoverd(res.data.currentCoverd)
                setMargincall(res.data.recMarginCall)
                setRerisk(res.data.refineRisk)
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
                        paymentSource: 'loan-margin'
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
    }, [verifyCodeOrderId, payorderid])
    const closeVerifyPopup = useCallback(() => {
        setType2fa({ type: '', show: false })
        setCodeflag(false)
    }, [])
    return <div className="css-yr0plm">
        <div className="css-19g6jpf">
            <svg onClick={() => setAdjustShow(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                    fill="currentColor">
                </path>
            </svg>
            <div className="css-1ysphr0">
                <div className="css-h100jj active">增加质押金</div>
                {/* <div className="css-1c527bo">移除质押金</div> */}
            </div>
            <div className="css-1hp031r">
                <div className="css-3j2kqe">
                    <span className="sc-jTzLTM iWfUmr">当前质押率：</span><span className="sc-EHOje jvzENE" style={{ color: '#242F44' }}>{formatPrice(Number(risk) * 100)}%</span>
                </div>
                <div className="css-sr9689">
                    <span className="sc-jTzLTM iWfUmr">当前强平价格： </span><span className="sc-EHOje jvzENE">{coverd}</span>
                </div>
                {/* <div className="sc-dnqmqq pPkud" style={{ width: '100%', height: '1px', marginTop: '24px' }}></div>
                <div className="css-1gh1t24">
                    <div>质押率</div>
                    <div data-bn-type="text" className="css-1p4pzn0">低风险: 52.2138%</div>
                </div>
                <div className="slider-wrapper">
                    <Slider dots min={0} marks={marks} step={10} onChange={(value) => console.log(value)} defaultValue={20} />
                </div> */}
                <div className="css-i0y2du">补充数量</div>
                <div className="sc-cSHVUG gSsBCZ">
                    <input type="text" placeholder="请输入质押数量" value={numb} onChange={(e) => {
                        console.log(e.target.value)
                        setNumb(e.target.value)
                        dispatch.loan.marginRecalc({
                            loanOrderId: orderid,
                            marginCallAmount: e.target.value === '' ? 0 : e.target.value,
                            marginCurrency: currcy
                        }).then((res) => {
                            if (res.code === 0) {
                                console.log(res)
                                setRerisk(res.data.refineRisk)
                                setRecoverd(res.data.refineCoverd)
                            } else {
                                Toast.info(res.msg)
                            }
                        })
                    }}/><span className="sc-gqjmRU jHwtHC">{currcy}</span><span className="sc-VigVT dwMdwV" onClick={() => {
                        setNumb(margincall)
                        dispatch.loan.marginRecalc({
                            loanOrderId: orderid,
                            marginCallAmount: margincall,
                            marginCurrency: currcy
                        }).then((res) => {
                            if (res.code === 0) {
                                console.log(res)
                                setRerisk(res.data.refineRisk)
                                setRecoverd(res.data.refineCoverd)
                            } else {
                                Toast.info(res.msg)
                            }
                        })
                    }}>推荐</span>
                </div>
                <div className="sc-asset">
                    <div className="sc-asset-l">可用余额：{asset.length > 0 ? asset[0].free : '0'} {currcy}</div>
                    <div className="sc-asset-r" onClick={() => {
                        if (isCoco()) {
                            window.location.href = '/finance'
                        } else {
                            window.location.href = mixUrl.main('/property')
                        }
                    }}>充值</div>
                </div>
                <div className="sc-cons">
                    <div>推荐补仓数量</div>
                    <div>{margincall} {currcy}</div>
                </div>
                <div className="sc-cons">
                    <div>补仓后质押率</div>
                    <div style={{ color: '#242F44' }}>{formatPrice(Number(rerisk) * 100)}%</div>
                </div>
                <div className="sc-cons">
                    <div>补仓后预计强平价格</div>
                    <div>{recoverd} </div>
                </div>
                <ul>
                    补仓须知
                    <li>补仓后风险值将实时降低</li>
                </ul>
                <div className="sc-kAzzGY kncJkn"></div>
                <button data-bn-type="button" disabled="" className="css-1t7vt3i" style={{ background: '#7065d6', color: '#fff' }} onClick={() => {
                    if (numb) {
                        dispatch.loan.marginCall({
                            loanOrderId: orderid,
                            marginCallAmount: numb,
                            marginCurrency: currcy
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
                    }
                }}>确认</button>
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
