import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import Toast from '../../components/Toast'

export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const toPayFn = useCallback(async (params, stateinfo, payOrderId) => {
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
        // 同步支付状态
        const payStatus = await dispatch.order.payStatus({
            bhexOrderId: payOrderId,
            clientOrderId: stateinfo.data,
            paymentSource: stateinfo?.ordertype
        }).catch(function (err) {
            console.log(err)
            Toast.info(t('public.tbpay'))
        })
        if (!payStatus || payStatus.code !== 0) {
            Toast.info(t('public.tbpay'))
            return
        }
        window.location.href = '/order'
    }, [])
    return { toPayFn }
}
