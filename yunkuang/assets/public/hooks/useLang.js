import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import { cookiesName } from '../js/index'

export default () => {
    const { i18n } = useTranslation()
    // console.log(window.location.href)

    return useCallback((lang) => {
        const langTmp = lang || navigator.language || navigator.userLanguage
        Cookies.set(cookiesName.language, langTmp)
        i18n.changeLanguage(langTmp)
        if ((window.location.pathname).split('/')[1] === 'product' || (window.location.pathname).split('/')[1] === 'order') {
            window.location.href = '/'
        } else {
            // window.location.reload()
            window.location.href = window.location.pathname
        }
    }, [])
}
