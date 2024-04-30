import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import { cookiesName } from '../index'

export default () => {
    const { i18n } = useTranslation()
    // console.log(window.location.href)

    return useCallback((lang) => {
        let domain = window.location.hostname
        const env = process.env.NODE_ENV
        if (env === 'production') {
          const hostinfo = window.location.host
          if (hostinfo.includes('marstelegram.com')) {
            domain = 'marstelegram.com'
          }
          if (hostinfo.includes('marsbit.cc')) {
            domain = 'marsbit.cc'
          }
          if (hostinfo.includes('marsbit.co')) {
            domain = 'marsbit.co'
          }
            // apiHost = 'https://api.marsbit.co'
        }
        if (env === 'test') domain = 'marslib.com'
        Cookies.remove(cookiesName.language)
        const langTmp = lang || navigator.language || navigator.userLanguage
        Cookies.set(cookiesName.language, langTmp, { domain: domain })
        i18n.changeLanguage(langTmp)
        window.location.href = window.location.pathname + `?lang=${langTmp}`
    }, [])
}
