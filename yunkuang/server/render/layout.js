import { webTdk } from '../../assets/public/js/index'
import { statistics, myStylesScripts, clientLink, riddler } from './publc'

const { publicPath } = require('../../config/config')
const { title, description, keywords } = webTdk

export default ({ initState, initProps, styles, scripts, links, platform, errObjProps, isSeculink }) => {
    const securelinklist = ['www.secure1475.com', 'secure1475.com']
    const pageTitle = securelinklist.indexOf(isSeculink) > -1 ? '' : initProps.title ? initProps.title : title
    const pageDescription = initProps.description ? initProps.description.replace(/\n/g, '') : description
    const pageKeywords = initProps.keywords ? initProps.keywords : keywords
    const pageIcon = securelinklist.indexOf(isSeculink) > -1 ? '' : `${publicPath}/resource/images/favicon.ico`
    const shareIcon = initProps.shareIcon ? initProps.shareIcon : `${publicPath}/resource/images/wechat-share-icon.ico`

    const { myScripts, myStyles } = myStylesScripts(initProps)
    // 如果移动端打开pc页面，如果有相对应的移动端则跳转
    const clientLinkStr = clientLink(initProps, 'pc')
    const errObjScript = errObjProps ? `window._ERROBJPROPS_ = ${JSON.stringify(errObjProps)}` : ''
    return {
        header: `<!DOCTYPE html>
            <html lang="en" class="page-pc">
                <head>
                    <meta charset="utf-8">
                    <title>${pageTitle}</title>
                    <meta name="keywords" content="${pageKeywords}">
                    <meta name="description" content="${pageDescription}">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <meta name="renderer" content="webkit|ie-comp|ie-stand"/>
                    <meta name="force-rendering" content="webkit"/>
                    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=0.3, maxmum-scale=1.0, minimum-scale=0.3">
                    <meta name="baidu-site-verification" content="aOvqU8RYOF" />

                    <!--手机QQ分享-->
                    <meta itemprop="name" content="${pageTitle}">
                    <meta itemprop="description" content="${pageDescription}">
                    <meta itemprop="image" content="${shareIcon}">
                    <!--360site-->
                    <meta name="360-site-verification" content="e432e6eb0e0b6446e0411134007b9955"/>
                    <script>
                    var ismobile = /iphone|android|ipad/i.test(navigator.userAgent);
                    !(function () {
                        if (ismobile) {
                            document.write('<meta name="viewport" content="initial-scale=0.3">');
                        }
                    })();
                    </script>
                    ${clientLinkStr}
                    <!--[if lte IE 10]>
                    <script src="${publicPath}/resource/plugin/browser-tips.js"></script>
                    <![endif]-->
                    <link rel="shortcut icon" href="${pageIcon}" type="image/x-icon">
                    ${myStyles}
                    ${styles}
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root">`,
        footer: `</div>
                    <script>
                        window.__INITIAL_STATE__ =${JSON.stringify(initState)}
                        window.__INITIAL_PROPS__ =${JSON.stringify(initProps)}
                        window.__PLATFORM__ ="${platform}"
                        ${errObjScript}
                    </script>
                    <!--<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=c2c295e8-a99f-4cd0-a0a7-34f05dcee04f"></script>-->
                    ${myScripts}
                    ${scripts}
                    ${statistics}
                    ${riddler}
                </body>
            </html>`
    }
}
