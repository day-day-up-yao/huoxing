import i18next from 'i18next'
import i18nMiddleware, { LanguageDetector } from 'i18next-express-middleware'
import Backend from 'i18next-node-fs-backend'
import resources from '../../_multiappsharing/public/i18n'

export default (app) => {
    i18next
        .use(Backend)
        .use(LanguageDetector)
        .init({
            react: {
                useSuspense: false
            },
            preload: ['zh-CN', 'zh-TW'],
            resources,
            lng: 'en', // 使用i18n.changeLanguage更改语言，此处暂无效果，原因待查？browser/i18n.js一样
            fallbackLng: ['zh-CN', 'zh-TW'],
            lowerCaseLng: true,
            // keySeparator: false, // 多级访问如one.two
            interpolation: {
                escapeValue: false
            }
        }, (err, t) => {
            if (err) throw Error(err)
        })
    app.use(
        i18nMiddleware.handle(i18next, {
            ignoreRoutes: ['/foo'], // or function(req, res, options, i18next) { /* return true to ignore */ }
            removeLngFromUrl: false
        })
    )
}
