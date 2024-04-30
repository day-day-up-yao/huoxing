import { webTdk } from '../../assets/public/js/index'
import { statistics, myStylesScripts, clientLink, riddler } from './publc'

const { publicPath } = require('../../config/config')
const { title, description, keywords } = webTdk

export default ({ initState, initProps, styles, scripts, links, platform, isWx, errObjProps, isSeculink }) => {
    const securelinklist = ['www.secure1475.com', 'secure1475.com']
    const pageTitle = securelinklist.indexOf(isSeculink) > -1 ? '' : initProps.title ? initProps.title : title
    const pageDescription = initProps.description ? initProps.description.replace(/\n/g, '') : description
    const pageKeywords = initProps.keywords ? initProps.keywords : keywords
    const pageIcon = securelinklist.indexOf(isSeculink) > -1 ? '' : `${publicPath}/resource/images/favicon.ico`
    const shareIcon = initProps.shareIcon ? initProps.shareIcon : `${publicPath}/resource/images/favicon.ico`
    const { myScripts, myStyles } = myStylesScripts(initProps)
    // 如果pc打开移动端页面，如果有相对应的pc页面则跳转
    const clientLinkStr = clientLink(initProps, 'mob')
    const errObjScript = errObjProps ? `window._ERROBJPROPS_ = ${JSON.stringify(errObjProps)}` : ''
    return {
        header: `<!DOCTYPE html>
            <html lang="zh-cmn-Hans" class="page-m">
                <head>
                    <meta charset="utf-8">
                    <meta name="keywords" content="${pageKeywords}">
                    <meta name="description" content="${pageDescription}">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                    <!--手机QQ分享-->
                    <meta itemprop="name" content="${pageTitle}">
                    <meta itemprop="description" content="${pageDescription}">
                    <meta itemprop="image" content="${shareIcon}">
                    <!--360site-->
                    <meta name="360-site-verification" content="e432e6eb0e0b6446e0411134007b9955"/>
                    <!--视窗限制-->
                    <meta name="viewport"
                          content="
                          width=device-width,
                          initial-scale=1.0,
                          minimum-scale=1.0,
                          maximum-scale=1.0,
                          user-scalable=no">
                    <!--微信分享图标-->
                    <meta name="wxshare-icon" content="${shareIcon}">      
                    <title>${pageTitle}</title>
                    ${clientLinkStr}
                    <script src="${publicPath}/resource/plugin/remset.js"></script>
                    <link rel="shortcut icon" href="${pageIcon}" type="image/x-icon">
                    ${myStyles}
                    ${styles}
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root">`,
        footer: `</div>
                    <script>
                        window.__INITIAL_STATE__= ${JSON.stringify(initState)}
                        window.__INITIAL_PROPS__ = ${JSON.stringify(initProps)}
                        window.__PLATFORM__ ="${platform}"
                        ${errObjScript}
                    </script>
                    ${myScripts}
                    ${scripts}
                    ${statistics}
                    ${riddler}
                </body>
            </html>`
    }
}
