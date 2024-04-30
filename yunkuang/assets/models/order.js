import { axiosAjax } from '../public/js/index'
import { order, user } from '../public/js/apis'
export default {
    state: {
        detail: {
            id: 1,
            uid: 530116207077337600,
            tradeNo: 'hash-1578122412215',
            productName: 'string',
            partnerName: 'string',
            partnerAddress: null,
            productId: null,
            productType: 1,
            minePool: '????',
            cycle: 360,
            minerTypeId: 1,
            minerTypeName: null,
            packagePrice: 375,
            electricFee: 100,
            operationFee: 0,
            manageFee: 0,
            hashrateFee: 0,
            orderCurrency: 'BDDA',
            totalMoney: 24750,
            buyNum: 1,
            hashrateNum: 50,
            orderState: 4,
            payTime: 1578128415408,
            effectiveTime: 0,
            effectiveEndTime: null
        },
        electricList: []
    },
    reducers: {
        setOrderdetail: (state, payload) => {
            state.detail = payload
        },
        setElectricList: (state, payload) => {
            state.electricList = payload
        },
        checkedItem: (state, { id }) => {
            state.electricList.map(function (item, index) {
                if (parseInt(id) === parseInt(item.id)) {
                    state.electricList[index].checked = !item.checked
                }
            })
        }
    },
    effects: (dispatch) => ({
        async orderDetail({ tradeNo, auToken }, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.detailByTradeNo,
                userDefined: {
                    au_token: auToken
                },
                params: { tradeNo }
            })
            if (res.code === 0) {
                dispatch.order.setOrderdetail(res.data)
            }
            return res
        },
        async checkC2cBanlance(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.c2cBalance,
                params: {
                    token_ids: payload
                }
            })
            return res
        },
        async payMultiCreate(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.payMultiCreate,
                params: payload
            })
            return res
        },
        async checkWxpayStatus(payload, rootState) {
            // SUCCESS—支付成功,REFUND—转入退款,NOTPAY—未支付,CLOSED—已关闭,REVOKED—已撤销（刷卡支付）,USERPAYING--用户支付中,PAYERROR--支付失败
            const res = await axiosAjax({
                type: 'get',
                url: order.wxPayStatus,
                noLoading: true,
                params: payload
            })
            return res
        },
        async cnyCoinRate(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.cnyCoinRate,
                params: payload
            })
            return res
        },
        async orderCreate(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.orderCreate,
                params: payload
            })
            return res
        },
        async orderUpdate(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.orderUpdate,
                params: payload
            })
            return res
        },
        async orderCreateElectric(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.createElectric,
                params: payload
            })
            return res
        },
        async payCreate(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.payCreate,
                params: payload
            })
            return res
        },
        async loadPayType(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.loadPayType,
                params: payload
            })
            return res
        },
        async sendVderify(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.sendVderify,
                params: payload
            })
            return res
        },
        async payOrder(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.payOrder,
                params: payload
            })
            return res
        },
        async promotionCode(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.promotionCode,
                params: payload
            })
            return res
        },
        async payStatus(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.payStatus,
                params: payload
            })
            return res
        },
        async payList(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.payList
            })
            return res
        },
        async orderCalculate(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.calculate,
                params: payload
            })
            return res
        },
        async powerPurchase(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.powerpurchase,
                auToken: true,
                params: {
                    feeOrderState: 0,
                    ...payload
                }
            })
            if (res.code === 0) {
                dispatch.order.setElectricList(res.data)
            }
            return res
        },
        async electricityDetail(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.electricitydetail,
                params: payload
            })
            return res
        },
        async cancelOrder(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.cancelorder,
                params: payload
            })
            return res
        },
        async inconeList(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.inconelist,
                params: payload
            })
            return res
        },
        async inconeListv2(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.inconelistv2,
                params: payload
            })
            return res
        },
        async getAddress(payload, rootState) {
            // const params = payload
            // if (payload['token_id'] && payload['token_id'].toLowerCase() === 'usdt') params['chain_type'] = 'TRC20'
            const res = await axiosAjax({
                type: 'get',
                url: order.getaddress,
                params: payload
            })
            return res
        },
        async depositList(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: user.depositlist,
                params: payload
            })
            return res
        },
        async withDrawallist(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: user.withdrawallist,
                params: payload
            })
            return res
        },
        async detailList(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.detail,
                params: payload
            })
            return res
        },
        async extractAddress(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.extractaddress,
                params: payload
            })
            return res
        },
        async bankPayConfirm(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.bankPayConfirm,
                params: payload
            })
            return res
        },
        async createOrder(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.createorder,
                params: payload
            })
            return res
        },
        async tradeOrders(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.tradeorders,
                params: payload
            })
            return res
        },
        async symboList(payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: order.symbols,
                params: payload
            })
            return res
        },
        async cancelOrderfee(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.cancelorderfee,
                params: payload
            })
            return res
        },
        async orderTest(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.ordertest,
                params: payload
            })
            return res
        },
        async prepayMentinfos(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.prepaymentInfo,
                params: payload
            })
            return res
        },
        async electricePaytype(payload, rootState) {
            const res = await axiosAjax({
                type: 'POST',
                url: order.electricepaytype,
                params: payload
            })
            return res
        },
        async electCount(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.electcount,
                params: payload
            })
            return res
        },
        async rechargeOrder(payload, rootState) {
            const res = await axiosAjax({
                type: 'POST',
                url: order.rechargeorder,
                params: payload
            })
            return res
        },
        async electricOrderlist(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.electricorderlist,
                params: payload
            })
            return res
        },
        async cancelElectriice(payload, rootState) {
            const res = await axiosAjax({
                type: 'POST',
                url: `${order.cancelelectriice}?rechargeOrderId=${payload.rechargeOrderId}`,
                params: payload
            })
            return res
        },
        async collectOrder(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.collectorder,
                params: payload
            })
            return res
        },
        async changePaymethed(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.changepaymethed,
                params: payload
            })
            return res
        },
        async collectPaylist(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.collectpaylist,
                params: payload
            })
            return res
        },
        async getextractall(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.extractall,
                params: payload
            })
            return res
        },
        async getOrderlistv2(payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.orderlistv2,
                params: payload
            })
            return res
        }
    })
}
