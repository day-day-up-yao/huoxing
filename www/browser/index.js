import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Provider } from 'react-redux'
import { loadableReady } from '@loadable/component'
import { I18nextProvider } from 'react-i18next'

import { isJson, logReport, naGacom, cookiesName, queryParam } from 'multiPublic/index'
import configureStore from './store'
import AppWrapper from './AppWrapper'
import App from '../assets/App'
import i18n from './i18n'
// import registerServiceWorker from './registerServiceWorker'

let lang = navigator.language || navigator.userLanguage

let domain = ''
const env = process.env.NODE_ENV
if (env === 'production') {
    const hostinfo = window.location.hostname
    if (hostinfo.includes('marstelegram.com')) {
      domain = 'marstelegram.com'
    }
    if (hostinfo.includes('marsbit.cc')) {
      domain = 'marsbit.cc'
    }
    if (hostinfo.includes('marsbit.co')) {
      domain = 'marsbit.co'
    }
    if (hostinfo.includes('marsshare.cc')) {
      domain = 'marsshare.cc'
    }
    if (hostinfo.includes('marsbit.info')) {
      domain = 'marsbit.info'
    }
    // apiHost = 'https://api.marsbit.co'
}
if (env === 'test') domain = 'marslib.com'
if (Cookies.get(cookiesName.language)) {
  lang = Cookies.get(cookiesName.language)
} else {
  Cookies.set(cookiesName.language, lang, { domain: domain })
}
if (queryParam('lang')) {
  lang = queryParam('lang')
  Cookies.set(cookiesName.language, queryParam('lang'), { domain: domain })
}

i18n.changeLanguage(lang)

const store = configureStore(window.__INITIAL_STATE__)
const initProps = window.__INITIAL_PROPS__
const platform = window.__PLATFORM__
const errObjProps = window._ERROBJPROPS_

// 可通过此参数传递给routes做逻辑判断：Tips：server/render/render.js存在同样逻辑
const routesParams = {
    isnaGacom: naGacom()
}

// 错误日志上报，可与browser/AppWrapper.js中react的componentDidCatch捕获一起组合查看。
// timestampClient+userAgent(node添加)+ip(node添加)
window.onerror = function (message, source, lineno, colno, error) {
    logReport({
        message: 'client-app-err-window',
        errMsg: message,
        timestampClient: new Date().getTime(),
        source: source,
        lineno: lineno,
        colno: colno,
        stack: error && error.stack,
        framework: true
    })
}

if (errObjProps && isJson(errObjProps)) { // 如果后端运行报错,会把报错信息存到全局变量_ERROBJPROPS_，前端运行时发现错误运行错误展示组件。逻辑跟后台一样
    const ErrorPage = App.ErrorPage
    loadableReady(() => {
        hydrate(<Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <ErrorPage {...errObjProps} />
                </BrowserRouter>
            </I18nextProvider>
        </Provider>, document.getElementById('root'))
    })
} else {
    loadableReady(() => {
        hydrate(<Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <AppWrapper platform={platform} {...initProps} routesParams={routesParams} />
                </BrowserRouter>
            </I18nextProvider>
        </Provider>, document.getElementById('root'))
        // registerServiceWorker()
    })
}
