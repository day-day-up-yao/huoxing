import { axiosAjax, ajaxSignature } from '../../public/index'
import { GETUSERINFO, LOGINSTATE, RENAMESTATE } from '../constants/login'

const { apiHost } = require('../../../config/config')

/* -------------------------------ajax-pure------------------------------- */

/**
 * @desc /login登录 /register注册 /getbackuserpw找回密码 /weixinbindnew绑定号码
 * @Params {lastUrl, params} lastUrl, params = {verifcategory: 1注册，绑定手机号码， 2找回密码, 3短信登录, ...其它}
 */
export const sendLogin = (lastUrl, params) => new Promise(function (resolve, reject) {
    axiosAjax({
        type: 'post',
        url: `/passport/account/v2${lastUrl}`,
        params: { platForm: 'pc', ...params },
        urlSearchParams: true,
        noLog: [-7, -3],
        contentType: 'application/x-www-form-urlencoded'
    }).then(function (res) {
        if (res.code) {
            resolve(res)
        } else {
            throw new Error(`账号登录/短信登陆/注册/找回密码: ${JSON.stringify(res)}`)
        }
    }).catch(function (err) {
        reject(err)
    })
})

/**
 * @desc 图形验证码地址，直接设置img的src地址为此地址
 */
export const graphCodeUrl = () => `${apiHost}/passport/account/getGraphCode?sign=${ajaxSignature()}&rnd=${Math.random()}`

/**
 * @desc 获取微信二维码地址
 */
export const getWechatQrCodeUrl = () => 'https://open.weixin.qq.com/connect/qrconnect?appid=wxd2560ca609e45df6&redirect_uri=http%3A%2F%2Fwww%2Ehuoxing24%2Ecom%2Fpassport%2Faccount%2Fweixinweblogin%3FappType%3Dpc%26platform%3Dpc%26requestSource%3Dhuoxing24_pc&response_type=code&scope=snsapi_login&state=123'

/**
 * @desc 判断手机号是否有注册过
 * @Params {phoneNumber} phoneNumber
 */
export const isRegister = (phoneNumber) => axiosAjax({
    type: 'complexpost',
    url: '/passport/account/ifregister',
    params: { phonenum: phoneNumber }
})

/**
 * @desc 获取短信验证码
 * @Params {params} params = {phonenum, countrycode, verifcategory, graphcode}
 */
export const getSmsCode = (params) => axiosAjax({
    type: 'complexpost',
    url: '/passport/account/getverifcode',
    params: params
})

/**
 * @desc 获取微信用户信息
 * @Params {params} params = {accountKey}
 */
export const getWechatUserInfo = (params) => axiosAjax({
    type: 'complexpost',
    url: '/passport/account/getaccountinfo',
    params: params
})

/**
 * @desc 微信绑定老账号
 * @Return {code, msg}
 * @Params {params} params = {unionid微信唯一标识, phonenum, password/verifycode, weixinName, platform(登录平台: 手机端网页h5, 网站pc, app-android/ios)}
 */
export const bindPhoneOld = (params) => axiosAjax({
    type: 'complexpost',
    url: '/passport/account/weixinbindold',
    params: params
})

/**
 * @desc 微信绑定新账号
 * @Return {code, msg}
 * @Params {params} params = {unionid微信唯一标识, phonenum, password/verifycode, weixinName, platform(登录平台: 手机端网页h5, 网站pc, app-android/ios)}
 */
export const bindPhoneNew = (params) => axiosAjax({
    type: 'complexpost',
    url: '/passport/account/weixinbindnew',
    params: params
})

/**
 * @desc 修改昵称
 * @Return {code, msg}
 * @Params {params} params = {passportid, token, nickName}
 */
export const getUpdateUserNick = (params) => axiosAjax({
    type: 'post',
    url: '/passport/account/updateusernick',
    params: params
})

/* -------------------------------ajax-redux------------------------------- */

// 注：页面获取用户信息从store中获取，login的cookie相关操作的地方有(服务端判断需要cookie，登陆后设置cookie，注销删除cookie)。
// 故在登录后需要自动刷新页面，让服务端设置userInfo，此后尽管都是前端路由Link跳转，store中userInfo也能保持正确
/**
 * @desc 获取用户信息
 * @params {passportId}  服务端判断是否登录，显示登录注册按钮还是头像
 */
export const getUserInfo = (obj) => {
    return {
        type: GETUSERINFO,
        data: {
            isLogin: obj.passportId || false,
            info: {
                nickName: obj.nickName || null,
                passportId: obj.passportId || null,
                iconUrl: obj.iconUrl || null,
                realAuth: obj.realAuth || null,
                faceAuth: obj.faceAuth || null,
                intro: obj.intro || null,
                token: obj.token || null,
                phone: obj.phone || null
            }
        }
    }
}

/**
 * @desc 登录框是否显示
 * @params {type, bool}
 */
export const loginShowHide = (type, bool) => ({
    type: LOGINSTATE,
    data: {
        loginType: type,
        loginShow: bool
    }
})

/**
 * @desc 昵称框是否显示
 * @params {bool}
 */
export const renameShowHide = (bool) => ({
    type: RENAMESTATE,
    data: {
        renameShow: bool
    }
})
