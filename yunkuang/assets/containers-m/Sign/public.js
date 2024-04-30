
import { mixUrl } from '../../public/js/index'

/**
 * @desc：判断是否登录
 * @method isLogin(passportId, dispatch)
 */
export const isLogin = (passportId, dispatch) => {
    if (!passportId) {
        dispatch.public.setLoginInfo('account', true)
        // Toast.info('请先登录', 800)
        return false
    } else {
        return true
    }
}

/**
 * @desc：登录成功
 * @method loginSucceeded(res)
 */
export const loginSuccess = (res) => {
    /** @desc 如果为统一登陆界面，登录完成后跳转到首页，否则刷新页面 */
    let loginPath = false
    switch (window.location.pathname) {
        case '/user/signup':
        case '/user/signup/':
        case '/user/signin':
        case '/user/signin/':
        case '/user/retrieve':
        case '/user/retrieve/':
        case '/user/retrieveemail':
        case '/user/retrieveemail/':
            loginPath = true
            break
        default:
            loginPath = false
    }
    if (mixUrl.main().indexOf(window.location.host) > -1 && loginPath) {
        window.location.href = mixUrl.main()
    } else {
        window.location.reload()
    }
}
