import React, { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

import Popup from '../../../components-m/Popup'
import InputPage from '../../../components/AccountSet/InputPage'
import SureButton from '../../../components/AccountSet/SureBtn'
import pointleft from '../../../public/imgs/h5img/other/pointleft.png'
import Toast from '../../../components/Toast'
import userPayment from '../userPayment'

export default (props) => {
    const { verifytype, payOrderId, verifyCodeOrderId, stateinfo, oncloseFn } = props
    const { t } = useTranslation()
    const { toPayFn } = userPayment()
    const [surecode, setSurecode] = useState()
    const [btnflag, setBtnflag] = useState(false)
    const [title, setTitle] = useState()
    useEffect(() => {
        if (verifytype.type === 'mobile') {
            setTitle('手机验证')
        }
        if (verifytype.type === 'email') {
            setTitle('邮箱验证')
        }
        if (verifytype.type === 'ga') {
            setTitle('谷歌验证')
        }
    }, [])
    const clickSure = useCallback(() => {
        if (surecode?.length === 6) {
            setBtnflag(true)
        } else {
            setBtnflag(false)
        }
    }, [surecode])
    // 确认btn
    const cansureFn = useCallback(() => {
        if (!btnflag) return
        if (surecode === '') {
            Toast.info(t('header.sign.enterVerify'))
        } else {
            toPayFn({
                order_id: payOrderId,
                verify_code_order_id: verifyCodeOrderId,
                verify_code: surecode
            }, stateinfo, payOrderId)
        }
    }, [payOrderId, verifyCodeOrderId, surecode])
    return <Popup
        children={
            <div className="again-sure">
                <div className="again-sure-back" onClick={() => {
                    oncloseFn()
                }}>
                    <img src={pointleft} alt=""/>
                </div>
                <div className="again-sure-con">
                    <h3>{title}</h3>
                    <InputPage
                        holdertext='请输入验证码'
                        gatherFn={() => {
                            clickSure()
                        }}
                        getInput={(e) => {
                            setSurecode(e)
                            if (e.length === 6) {
                                setBtnflag(true)
                            } else {
                                setBtnflag(false)
                            }
                        }}
                    />
                    <SureButton
                        surebtn={btnflag}
                        isset
                        clickbtnFn={() => {
                            cansureFn()
                        }}
                    />
                </div>
            </div>
        }
    />
}
