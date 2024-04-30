import {
    GETUSERINFO,
    LOGINSTATE,
    RENAMESTATE
} from '../constants/login'

const initState = {
    userInfo: {
        isLogin: false,
        info: {
            nickName: null,
            passportId: null,
            iconUrl: null,
            realAuth: null,
            faceAuth: null,
            intro: null,
            token: null,
            phone: null
        }
    },
    userState: {
        loginType: 'account', // account账号登录,sms短信登录,register注册,retrievePassword找回密码,wechat微信登录,bind绑定账号
        loginShow: false,
        renameShow: false // 昵称弹窗
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETUSERINFO:
            return { ...state, userInfo: action.data }
        case LOGINSTATE:
            return { ...state, userState: action.data }
        case RENAMESTATE:
            return { ...state, userState: action.data }
        default:
            return state
    }
}
