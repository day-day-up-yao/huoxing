import { axiosAjax } from '../public/js'
import { staking } from '../public/js/apis'

export default {
    state: {
        webbackground: '',
        stakingproductlist: []
    },
    reducers: {
        setWebbackground: (state, payload) => {
            state.webbackground = payload
        },
        setStakingproductlist: (state, payload) => {
            state.stakingproductlist = payload
        }
    },
    effects: (dispatch) => ({
        async customKvimg (payload, rootState) {
            const res = await axiosAjax({
                type: 'get',
                url: staking.custom_kvimg,
                params: {
                    ...payload
                }
            })
            if (!res.code) {
                dispatch.staking.setWebbackground(res)
            }
            return res
        },
        async stakingList (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: staking.stakinglist,
                params: {
                    ...payload
                }
            })
            if (!res.code) {
                dispatch.staking.setStakingproductlist(res)
            }
            return res
        },
        async getStakingdetail (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: staking.getstakingdetail,
                params: {
                    ...payload
                }
            })
            return res
        }
    })
}
