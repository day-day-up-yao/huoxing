import { axiosAjax } from '../public/js/index'
import { loan } from '../public/js/apis'

export default {
    state: {
        fixedLoadDetail: {
            loanCurrencies: [],
            marginCurrencies: []
        },
        hrloanLists: {}
    },
    reducers: {
        setFixedLoadDetail: (state, payload) => {
            state.fixedLoadDetail = payload
        },
        setHrloanLists: (state, payload) => {
            state.hrloanLists = payload
        }
    },
    effects: (dispatch) => ({
        async fixedLoadDetail (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.fixedLoadDetail,
                auToken: true,
                params: {
                    ...payload
                }
            })
            if (res.code === 0) dispatch.loan.setFixedLoadDetail(res.data)
            return res
        },
        async fixedloanCreate (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.fixedloancreate,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async currencyRate (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.currencyrate,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async fixedLoadOrders (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.fixedLoadOrders,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async paymentStatus (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.paymentstatus,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async fixedLoadInterestList (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.fixedLoadInterestList,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async paybackHistory (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.paybackhistory,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async pledgeChange (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.pledgechange,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async coveredOrders (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.coveredorders,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async payLoan (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.payloan,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async marginRecalc (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.marginrecalc,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async pledgeCalCulator (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.pledgeCalculator,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async marginCall (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.margincall,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async prepayInfo (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.prepayinfo,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async violateConfiginfo (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.violateconfiginfo,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async interestCalculator (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.interestcalculator,
                auToken: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrloanList (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.hrloanlist,
                params: {
                    ...payload
                }
            })
            if (res.code === 0) dispatch.loan.setHrloanLists(res.data)
            return res
        },
        async hrloanDetail (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.hrloandetail,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrCalculator (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.hrcalculator,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrloanCreate (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.hrloancreate,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrloanOrder (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: loan.hrloanroder,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrorderDetail (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.hrorderdetail,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrdetailList (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: loan.hrdetaillist,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrprepayInfo (payload, state) {
            const res = await axiosAjax({
                type: 'POST',
                url: loan.hrprepayinfo,
                params: {
                    ...payload
                }
            })
            return res
        },
        async hrPayloan (payload, state) {
            const res = await axiosAjax({
                type: 'POST',
                url: loan.hrpayloan,
                params: {
                    ...payload
                }
            })
            return res
        }
    })
}
