import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import Toast from '../../components/Toast'
import Popup from '../../components-m/Popup'

export default (props) => {
    const { detail, notice, isfill, payclickFn, onflagFn } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const curTime = Date.parse(new Date())
    const [buynum, setBuynum] = useState(detail.buyCount)
    const [agree, setAgree] = useState(false)
    const [riskflg, setRiskflg] = useState(false)
    const agreeref = useRef()
    useEffect(() => {
        setBuynum(detail.buyCount)
    }, [detail])
    // 减少
    const minusFn = useCallback(() => {
        if (detail.conditions.length > 0) {
            if (detail.buyCount === detail.conditions[0].buyMin) return
        }
        if (detail.buyCount === 1) {
            Toast.info(t('productdetail.buyone'))
            return
        }
        dispatch.product.minusDetail()
    }, [detail])
    // 增加
    const addFn = useCallback(() => {
        if (detail.buyCount === detail.leftNumber) {
            Toast.info(t('productdetail.nometch'))
            return
        }
        dispatch.product.addDetail()
    }, [detail])
    // 去支付
    const toPayFn = useCallback(() => {
        if (!isfill) {
            if (detail.endTime > curTime) {
                setRiskflg(true)
                setAgree(false)
            }
        } else {
            payclickFn()
        }
    }, [isfill])
    const paysureFn = useCallback(() => {
        onflagFn(true)
    }, [])
    return <>
        <div className="product-operation">
            <div className="product-operation-left">
                <div className="operation-left-name">数量</div>
                <div className="operation-left-click" onClick={minusFn}>-</div>
                <input type="text" value={buynum} onChange={(e) => {
                    setBuynum(e.target.value)
                    detail.buyCount = e.target.value
                }}/>
                <div className="operation-left-click" onClick={addFn}>+</div>
            </div>
            <div className={`product-operation-right ${detail.endTime < curTime && 'buy-over'}`} onClick={toPayFn}>{detail.endTime < curTime ? '已结束' : '支付'}</div>
        </div>
        {riskflg && <Popup
            children={
                <div className="risk-warning" onClick={(event) => {
                    event.stopPropagation()
                }}>
                    <h3>风险提示</h3>
                    <div className="risk-warning-con">
                        <div dangerouslySetInnerHTML={{ __html: notice.content.replace(/(\\r\\n)|(\n)(\r\n)/g, '</br>') }} />
                        <div className="risk-select">
                            <input type="checkbox" ref={agreeref} onChange={(e) => {
                                setAgree(agreeref.current.checked)
                            }}/>
                            <div className="risk-select-text">
                                同意<a href="">《矿机租赁/购买协议》</a>及风险提示
                            </div>
                        </div>
                    </div>
                    <div className={`risk-waning-btn ${agree && 'agree-btn'}`} onClick={paysureFn}>我知道了</div>
                </div>
            }
            onClose={() => {
                setRiskflg(false)
            }}
        />}
    </>
}
