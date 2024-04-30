import md5 from 'blueimp-md5'
import { axiosAjax } from '../public/js/index'
import { user, common, product } from '../public/js/apis'

export default {
    state: {
        language: 'zh',
        userInfo: {
            accountId: null,
            cToken: null,
            userId: null,
            auToken: null
        },
        loginInfo: {
            loginType: 'signin', // sigin登录，signup注册，retrieve手机找回密码, retrieveemail邮箱找回密码
            loginShow: false
        },
        ratemony: 0,
        newprductlist: [],
        activelist: [],
        apppuductlist: [],
        annlist: [],
        countirlist: [],
        invitelist: { bannerUrl: '',
            inviteDesc: '',
            posterUrl: ''
        },
        cardtypelist: [],
        messageinfo: {
            content: '', createdAt: '', title: ''
        },
        userKnow: {},
        publicinfo: {
            DefiPool: 0,
            applyBindMail: 0,
            borrowCoin: 0,
            depositCoin: 0,
            exchangeCoin: 0,
            incomeCoinList: [],
            mailDocUrl: '',
            minerTypeList: 0,
            register: 0
        }
    },
    reducers: {
        setUserInfo: (state, { accountId, cToken, userId, auToken }) => {
            const userInfo = {
                ...state.userInfo,
                accountId: accountId || null,
                cToken: cToken || null,
                userId: userId || null
            }
            if (typeof window === 'undefined') {
                userInfo.auToken = auToken || null
            }
            return {
                ...state,
                userInfo: userInfo
            }
        },
        setLoginInfo: (state, { type, bool }) => {
            state.loginInfo.loginType = type
            state.loginInfo.loginShow = bool
            return state
        },
        setRatemony: (state, payload) => {
            state.ratemony = payload
        },
        setJoinlist: (state, payload) => {
            state.newprductlist = payload
        },
        setActivelist: (state, payload) => {
            state.activelist = payload
        },
        setApppuductlist: (state, payload) => {
            state.apppuductlist = payload
        },
        setAnnlist: (state, payload) => {
            state.annlist = payload
        },
        setCountrylist: (state, payload) => {
            state.countirlist = payload
        },
        setInvitelist: (state, payload) => {
            state.invitelist = payload
        },
        setCardlist: (state, payload) => {
            state.cardtypelist = payload
        },
        setMessageinfo: (state, payload) => {
            state.messageinfo = payload
        },
        setUserKnow: (state, payload) => {
            state.userKnow = payload
        },
        setPublicinfo: (state, payload) => {
            state.publicinfo = payload
        }
    },
    effects: (dispatch) => ({
        async newUserLogin (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.userlogin,
                params: {
                    ...payload
                }
            })
            return res
        },
        async sendSmsVerifyCode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.sendSmsVerifyCode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async sendEmailVerifyCode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.sendEmailVerifyCode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async phoneSignup (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.phoneSignUp,
                params: {
                    ...payload,
                    passport1: md5(payload.passport1),
                    passport2: md5(payload.passport2)
                }
            })
            return res
        },
        async emailSignup (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.emailSignUp,
                params: {
                    ...payload,
                    passport1: md5(payload.passport1),
                    passport2: md5(payload.passport2)
                }
            })
            return res
        },
        async phonelogin (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.phonelogin,
                params: {
                    captcha_id: common.senseId,
                    ...payload
                }
            })
            return res
        },
        async emaillogin (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.emaillogin,
                params: {
                    captcha_id: common.senseId,
                    ...payload
                }
            })
            return res
        },
        async sendemailCode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.sendemailCode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async sendphoneCode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.sendphoneCode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async secondvalCode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.secondvalCode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async findPwdmobile (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.findPwdmobile,
                params: {
                    ...payload
                }
            })
            return res
        },
        async findPwdemail (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.findPwdemail,
                params: {
                    ...payload
                }
            })
            return res
        },
        async findpswdSure (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.findpswdSure,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getUseinfo (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.getuseinfo,
                params: {
                    ...payload
                }
            })
            return res
        },
        async sendSmscode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.sendsmscode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getEmailcode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.getemailcode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async tradePwd (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.tradepwd,
                params: {
                    ...payload
                }
            })
            return res
        },
        async bindEmail (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.bind_email,
                params: {
                    ...payload
                }
            })
            return res
        },
        async bindMobile (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.bind_mobile,
                params: {
                    ...payload
                }
            })
            return res
        },
        // 提币
        async withDrawal (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.withdrawal,
                params: {
                    ...payload
                }
            })
            return res
        },
        async withDrawalcode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.withdrawalcode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async withDrawalverify (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.withdrawalverify,
                params: {
                    ...payload
                }
            })
            return res
        },
        async quoteRates (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.quoterates,
                params: {
                    ...payload
                },
                noLoading: true
            })
            // console.log(res)
            if (res.code === 0) {
                dispatch.public.setRatemony(res.data)
            }
            return res
        },
        async bindGa (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.bindga,
                params: {
                    ...payload
                }
            })
            return res
        },
        async bindGoogle (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.bindgoogle,
                params: {
                    ...payload
                }
            })
            return res
        },
        async userReg (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.userreg,
                signature: true,
                params: {
                    ...payload
                }
            })
            return res
        },
        async useKyc (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.usekyc,
                params: {
                    ...payload
                }
            })
            return res
        },
        async verifyInfo (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.verifyinfo,
                params: {
                    ...payload
                }
            })
            return res
        },
        async indexConfig (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.indexconfig,
                params: {
                    ...payload
                }
            })
            return res
        },
        async quoteTicker (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.quoteticker,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getProductList (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: product.list,
                params: {
                    ...payload
                }
            })
            if (res.code === 0) {
                if (payload.jointMiningType === 3) {
                    dispatch.public.setJoinlist(res.data)
                }
                if (payload.jointMiningType === 9) {
                    dispatch.public.setActivelist(res.data)
                }
                if (payload.recommendIndex === 1) {
                    dispatch.public.setApppuductlist(res.data)
                }
            }
            return res
        },
        async findpwdCheck2 (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.find_pwd_check2,
                params: {
                    ...payload
                }
            })
            return res
        },
        async findPwd (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.find_pwd,
                params: {
                    ...payload
                }
            })
            return res
        },
        async inviteMyincome (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.invitemyincome,
                params: {
                    ...payload
                }
            })
            return res
        },
        async inviteIncomebank (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.inviteincomebank,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getAppdownload (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.appdownload,
                params: {
                    ...payload
                }
            })
            return res
        },
        async messageList (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.messagelist,
                params: {
                    ...payload
                }
            })
            if (res.code === 0) {
                dispatch.public.setAnnlist(res.data)
            }
            return res
        },
        async messageDetail (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.messagedetail,
                params: {
                    ...payload
                }
            })
            dispatch.public.setMessageinfo(res.data)
            return res
        },
        async messageRead (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.messageread,
                params: {
                    ...payload
                }
            })
            return res
        },
        async balanceFlow (payload, state) {
            const res = await axiosAjax({
                type: 'GET',
                url: user.balanceflow,
                params: {
                    ...payload
                }
            })
            return res
        },
        async ExtractRecords (payload, state) {
            const res = await axiosAjax({
                type: 'GET',
                url: user.extractRecords,
                params: {
                    ...payload
                }
            })
            return res
        },
        async configV2 (payload, state) {
            const res = await axiosAjax({
                type: 'GET',
                url: user.configv2,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getCountry (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.getcountry,
                params: {
                    ...payload
                }
            })
            // const citylist = res.data.sort((a, b) => {
            //     return a.shortName.localeCompare(b.shortName)
            // })
            if (res) {
                dispatch.public.setCountrylist(res.data)
            }
            return res
        },
        async allAssetinfo (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.allassetinfo,
                params: {
                    ...payload
                }
            })
            return res
        },
        async TemplateInfo (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.templateInfo,
                params: {
                    ...payload
                }
            })
            if (res.code === 0 && res.data !== null) {
                dispatch.public.setInvitelist(res.data)
            }
            return res
        },
        async cardType (payload, state) {
            const res = await axiosAjax({
                type: 'POST',
                url: user.cardtype,
                params: {
                    ...payload
                }
            })
            dispatch.public.setCardlist(res)
            return res
        },
        async basicVerify (payload, state) {
            const res = await axiosAjax({
                type: 'POST',
                url: user.basicverify,
                params: {
                    ...payload
                }
            })
            return res
        },
        async photoVerify (payload, state) {
            const res = await axiosAjax({
                type: 'POST',
                url: user.photoverify,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getkyClevel (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.getkyclevel,
                params: {
                    ...payload
                }
            })
            return res
        },
        async loginInfo (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.logininfo,
                params: {
                    ...payload
                }
            })
            return res
        },
        async userAgreement (payload) {
            const res = await axiosAjax({
                type: 'get',
                url: user.useagreement,
                params: {
                    ...payload
                }
            })
            if (res.code === 0) {
                dispatch.public.setUserKnow(res.data)
            }
            return res
        },
        async homeInfo (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.homeinfo,
                params: {
                    ...payload
                }
            })
            if (res.code === 0) {
                dispatch.public.setPublicinfo(res.data)
            }
            return res
        },
        async userLoginout (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.userloginout,
                params: {
                    ...payload
                }
            })
            return res
        },
        async resetInfo (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.resetinfo,
                params: {
                    ...payload
                }
            })
            return res
        },
        async closePopup (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.closepopup,
                params: {
                    ...payload
                }
            })
            return res
        },
        async quickAuthorize (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.quickauthorize,
                params: {
                    ...payload
                }
            })
            return res
        },
        async quickAdvance (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.quickadvance,
                params: {
                    ...payload
                }
            })
            return res
        },
        async validationAddress (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.validationaddress,
                params: {
                    ...payload
                }
            })
            return res
        },
        async userMsglist (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.fornew,
                params: {
                    ...payload
                }
            })
            return res
        },
        async loginHistory (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.loginhistory,
                params: {
                    ...payload
                }
            })
            return res
        },
        async setReaded (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.goread,
                params: {
                    ...payload
                }
            })
            return res
        },
        async multiDevice (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.multidevice,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getPushmsg (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.pushmessge,
                params: {
                    ...payload
                }
            })
            return res
        },
        async updatePwd (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.update_pwd,
                params: {
                    ...payload
                }
            })
            return res
        },
        async setPushreaded (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.setreaded,
                params: {
                    ...payload
                }
            })
            return res
        },
        async fishingCode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.fishingcode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getPushcount (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.pushcount,
                params: {
                    ...payload
                }
            })
            return res
        },
        async sendEmailcode (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.sendemailcode,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getuserBalance (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.getBalance,
                params: {
                    ...payload
                }
            })
            return res
        },
        async verifySeafy (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.verifyseafy,
                params: {
                    ...payload
                }
            })
            return res
        },
        async getAllflow (payload, state) {
            const res = await axiosAjax({
                type: 'get',
                url: user.getallflow,
                params: {
                    ...payload
                }
            })
            return res
        },
        async userCancel (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.usercancel,
                params: {
                    ...payload
                }
            })
            return res
        },
        async unBindga (payload, state) {
            const res = await axiosAjax({
                type: 'post',
                url: user.unbindga,
                params: {
                    ...payload
                }
            })
            return res
        }
    })
}
