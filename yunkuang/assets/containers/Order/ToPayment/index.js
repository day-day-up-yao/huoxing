import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

import Payment from '../../../components/Payment'
import close from '../../../public/imgs/newedition/close.png'

export default ({ paytype, setPaytype, orderType, costorder, currey, SuccessFun }) => {
    // console.log(orderType)
    const { t } = useTranslation()
    return <div className="paytype" style={{ display: paytype.flage ? 'flex' : '' }}>
        <div className="paytype-con">
            <h3>{t('public.selectpay')}</h3>
            <Payment
                noBankPay={true}
                clientTradeNo={paytype.client}
                orderType={orderType}
                costorder={costorder}
                costcurrey={currey}
                paySuccess={SuccessFun}
            />
            <div className="close" onClick={() => setPaytype(
                {
                    flage: false,
                    client: ''
                }
            )}>
                <img src={close} alt="" />
            </div>
        </div>
    </div>
}
