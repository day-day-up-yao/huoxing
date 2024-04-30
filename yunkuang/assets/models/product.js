import { axiosAjax, numToCeil } from '../public/js/index'
import { add, multiply, subtract, format, divide } from 'mathjs'
import { product, order } from '../public/js/apis'

export default {
    state: {
        list: [],
        banner: [],
        bannerone: [],
        messagebanner: [],
        activebanner: [],
        getpartlist: [],
        defilist: [],
        cbbdetail: [],
        cbbproductdetail: {},
        detail: {
            leftNumWidth: 0,
            buyCount: 0,
            buyPrice: 0,
            buyExpectDailyIncome: 0,
            conditions: [],
            jointMiningType: 0,
            jointMiningTypeName: '',
            id: 1,
            name: '',
            productType: 1,
            partnerId: 1,
            minePool: '',
            cycle: 0,
            hashrate: 0,
            minerType: 1,
            price: 0,
            electricFee: 0,
            operationFee: 0,
            manageFee: 0,
            hashrateFee: 0,
            totalNumber: 0,
            leftNumber: 0,
            costCycle: 0,
            userPercent: 0,
            electricDayMax: 0,
            electricDayMin: 0,
            expectDailyIncome: 0,
            beginTime: Date.parse(new Date()),
            endTime: 0,
            effectiveTime: Date.parse(new Date()),
            effectiveTimeStr: '',
            desc: '',
            createdAt: Date.parse(new Date()),
            hashrateFormat: 0,
            minerTypeInfo: {
                id: 1,
                typeName: '',
                pic: '',
                manufacturer: '',
                hashRateSize: 0,
                kw: 0,
                electricFee: 0,
                minerPrice: 0
            }
        },
        inviteimg: [
            {
                originalPic: ''
            }
        ]
    },
    reducers: {
        setList: (state, payload) => {
            state.list = payload
        },
        addItem: (state, { productId }) => {
            state.list.map(function (item, index) {
                if (productId === item.id && item.buyCount < item.leftNumber) {
                    const num = add(item.buyCount, 1)
                    state.list[index].buyCount = num
                    state.list[index].buyPrice = numToCeil(item.priceClean * num, 2)
                    state.list[index].buyExpectDailyIncome = format(multiply(item.expectDailyIncome, num), 14)
                }
            })
        },
        minusItem: (state, { productId }) => {
            state.list.map(function (item, index) {
                if (productId === item.id && item.buyCount > 1) {
                    const num = subtract(item.buyCount, 1)
                    state.list[index].buyCount = num
                    state.list[index].buyPrice = numToCeil(item.priceClean * num, 2)
                    state.list[index].buyExpectDailyIncome = format(multiply(item.expectDailyIncome, num), 14)
                }
            })
        },
        addDetail: (state, payload) => {
            const detail = state.detail
            if (detail.buyCount >= detail.leftNumber) return
            const num = add(detail.buyCount, 1)
            state.detail.buyCount = num
            state.detail.buyPrice = numToCeil(detail.priceClean * num, 2)
            state.detail.buyExpectDailyIncome = format(multiply(detail.expectDailyIncome, num), 14)
        },
        minusDetail: (state, payload) => {
            const detail = state.detail
            if (detail.buyCount === 1) return false
            const num = subtract(detail.buyCount, 1)
            state.detail.buyCount = num
            state.detail.buyPrice = numToCeil(detail.priceClean * num, 2)
            state.detail.buyExpectDailyIncome = format(multiply(detail.expectDailyIncome, num), 14)
        },
        setProductDetail: (state, payload) => {
            state.detail = payload
        },
        setBanner: (state, payload) => {
            state.banner = payload
        },
        setBannerone: (state, payload) => {
            state.bannerone = payload
        },
        setMessageBanner: (state, payload) => {
            state.messagebanner = payload
        },
        setActivebanner: (state, payload) => {
            state.activebanner = payload
        },
        setGetpartlist: (state, payload) => {
            state.getpartlist = payload
        },
        setDefilist: (state, payload) => {
            state.defilist = payload
        },
        setCbbdetail: (state, payload) => {
            state.cbbdetail = payload
        },
        setCbbproductdetail: (state, payload) => {
            state.cbbproductdetail = payload
        },
        setInviteimg: (state, payload) => {
            state.inviteimg = payload
        }
    },
    effects: (dispatch) => ({
        async getProductList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.list,
                params: payload
            })
            if (res.code === 0) {
                dispatch.product.setList(res.data)
                // if (res.data === null) {
                //     return
                // } else {
                //     dispatch.product.setList(res.data)
                //     dispatch.product.setList(res.data.map(function (item, index) {
                //         const leftNumWidth = divide(item.leftNumber * 270, item.totalNumber)
                //         return {
                //             ...item,
                //             leftNumWidth,
                //             buyCount: 1,
                //             buyPrice: item.price,
                //             buyExpectDailyIncome: item.expectDailyIncome
                //         }
                //     }))
                // }
                // rootState.product.list = res.data.map(function (item, index) {
                //     const leftNumWidth = divide(item.leftNumber * 270, item.totalNumber)
                //     return {
                //         ...item,
                //         leftNumWidth,
                //         buyCount: 1,
                //         buyPrice: item.price,
                //         buyExpectDailyIncome: item.expectDailyIncome
                //     }
                // })
            }
            return res
        },
        async getProductDetail ({ productId }, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.detail,
                params: {
                    productId: productId
                }
            })
            if (res.code === 0) {
                const leftNumWidth = divide(res.data.leftNumber * 340, res.data.totalNumber)
                dispatch.product.setProductDetail({
                    ...res.data,
                    leftNumWidth,
                    buyCount: res.data.conditions.length > 0 ? res.data.conditions[0].buyMin : 1,
                    buyPrice: res.data.priceClean,
                    buyExpectDailyIncome: res.data.expectDailyIncome
                })
            }
            return res
        },
        async getBannerAdList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.indexbanner,
                params: payload
            })
            if (res.code === 0) {
                if (payload.picType === 2 || payload.picType === 22 || payload.picType === 28) {
                    dispatch.product.setBanner(res.data)
                }
                if (payload.picType === 14 || payload.picType === 21 || payload.picType === 27) {
                    dispatch.product.setBannerone(res.data)
                }
                if (payload.picType === 34 || payload.picType === 35 || payload.picType === 36) {
                    dispatch.product.setMessageBanner(res.data)
                }
            }
            return res
        },
        async moneyRate (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.moneyrate,
                params: payload,
                noLoading: true,
                noLog: []
            })
            return res
        },
        async hashrateInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.hashrateinfo,
                params: payload,
                noLoading: true
            })
            return res
        },
        async btcQuote (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.btcquote,
                params: payload,
                noLoading: true,
                noLog: []
            })
            return res
        },
        async inviteInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.inviteinfo,
                params: payload
            })
            return res
        },
        async inviteshareInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.inviteshareinfo,
                params: payload
            })
            if (res.code === 0) {
                if (res.data !== null) {
                    dispatch.product.setActivebanner(res.data[0].originalPic)
                }
            }
            return res
        },
        async quotaInfo (payload, rootState) {
            // const params = payload
            // if (payload['token_id'] && payload['token_id'].toLowerCase() === 'usdt') params['chain_type'] = 'TRC20'
            const res = await axiosAjax({
                type: 'get',
                url: product.quotainfo,
                params: payload
            })
            return res
        },
        async addlessCheck (payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: product.addlesscheck,
                params: payload
            })
            return res
        },
        async productooking (payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: product.productbooking,
                params: payload
            })
            return res
        },
        async queryBooking (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.querybooking,
                params: payload
            })
            return res
        },
        async groupBuying (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.groupbuying,
                params: payload
            })
            return res
        },
        async incomeList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.incomelist,
                params: payload
            })
            return res
        },
        async newsInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.newsinfo,
                hxApi: true,
                params: payload
            })
            return res
        },
        async newsMessage (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.newsmessage,
                hxApi: true,
                params: payload
            })
            return res
        },
        async showLives (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.showlives,
                hxApi: true,
                params: payload
            })
            return res
        },
        async liveList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.livelist,
                hxApi: true,
                params: payload
            })
            return res
        },
        async FilPrice (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.Filprice,
                hxApi: true,
                params: payload,
                noLoading: true
            })
            return res
        },
        async parterList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.parterlist,
                hxApi: true,
                params: payload
            })
            if (res.code === 0) {
                dispatch.product.setGetpartlist(res.data)
            }
            return res
        },
        async prodList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.prodlist,
                params: payload
            })
            if (res.status === 'ok') {
                if (res.status !== null) {
                    dispatch.product.setDefilist(res.data.prods)
                }
            }
            return res
        },
        async prodOeder (payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: product.prodoeder,
                params: payload
            })
            return res
        },
        async baseicInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: product.baseicinfo,
                params: payload,
                userDefined: {
                    'accept-language': 'zh-CN'
                }
            })

            return res
        },
        async ieoOrder (payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: product.ieo_order,
                params: payload,
                userDefined: {
                    'accept-language': 'zh-CN'
                }
            })
            return res
        },
        async checkC2cBanlance (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: order.c2cBalance,
                params: payload
            })
            return res
        },
        async prodDetail (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.proddetail,
                params: payload
            })
            return res
        },
        async prodOederlist (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.prodoederlist,
                params: payload
            })
            return res
        },
        async prodDetaillist (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.proddetaillist,
                params: payload
            })
            return res
        },
        async anunitList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.anunitlist,
                params: payload
            })
            return res
        },
        async defiLogo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.defilogo,
                params: payload
            })
            return res
        },
        async mfiPerm (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.mfiperm,
                params: payload
            })
            return res
        },
        async inviteCode (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.invitecode,
                params: payload
            })
            return res
        },
        async cbbProduct (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.cbbproduct,
                params: payload
            })
            // if (res.status === 'ok') {
            //     dispatch.product.setCbbdetail(res.data)
            // }
            console.log(res)
            return res
        },
        async cbbBuy (payload, rootState) {
            const res = await axiosAjax({
                type: 'post',
                url: product.cbbbuy,
                params: payload
            })
            return res
        },
        async cbbRevenue (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.cbbrevenue,
                params: payload
            })
            return res
        },
        async interestOrder (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.interestorder,
                params: payload
            })
            return res
        },
        async cbbDetail (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.cbbdetail,
                params: payload
            })
            // if (res.status === 'ok') {
            //     dispatch.product.setCbbproductdetail(res.data)
            // }
            return res
        },
        async allRevenue (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.allrevenue,
                params: payload
            })
            return res
        },
        async expecteDoutput (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.expectedoutput,
                params: payload
            })
            return res
        },
        async calhashInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.calhashinfo,
                params: payload
            })
            return res
        },
        async marketPriceinfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                hxApi: true,
                noLoading: true,
                url: product.marketpriceinfo,
                params: payload
            })
            return res
        },
        async hashRatesinfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.hashRates,
                params: payload
            })
            return res
        },
        async allRateinfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.allRate,
                params: payload
            })
            return res
        },
        async byidproductList (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.byidproductlist,
                params: payload
            })
            return res
        },
        async getproductInfo (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: product.getproductinfo,
                params: payload
            })
            return res
        }
    })
}
