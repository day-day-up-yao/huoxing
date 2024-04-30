import { webTdk } from 'multiPublic/index'
import { statistics, statistCc, statistGram, statisticsHx24, myStylesScripts, wxShare, clientLink } from './publc'

const { publicPath } = require('../../config/config')
const { title, description, keywords } = webTdk

export default ({ initState, initProps, styles, scripts, links, platform, isWx, errObjProps, isNagalink, isMarslibco, isMarslibcc, isMarsgram }) => {
    const securelinklist = ['www.naga.one', 'm.naga.one', '10.0.8.138']
    const pageTitle = initProps.title ? initProps.title : title
    const pageDescriptionHtml = initProps.description ? initProps.description.replace(/\n/g, '') : description
    const pageDescription = pageDescriptionHtml.replace(/<[^>]+>/ig, '')
    const pageKeywords = initProps.keywords ? initProps.keywords : keywords
    const pageIcon = securelinklist.indexOf(isNagalink) > -1 ? `${publicPath}/resource/images/naga_icon.ico` : `${publicPath}/favicon.ico`
    const shareIcon = initProps.shareIcon ? initProps.shareIcon : `${publicPath}/resource/images/favicon.ico`
    const shareTitle = initProps.shareTitle ? initProps.shareTitle : pageTitle
    const { myScripts, myStyles } = myStylesScripts(initProps)
    // 统计代码按域名区分
    const statictCode = isMarslibco ? statistics : isMarslibcc ? statistCc : isMarsgram ? statistGram : statistics
    // 如果移动端打开pc页面，如果有相对应的移动端则跳转
    const clientLinkStr = clientLink(initProps, 'pc')
    // 如果是微信pc则返回微信分享代码
    const wxShareStr = wxShare(isWx)
    const errObjScript = errObjProps ? `window._ERROBJPROPS_ = ${JSON.stringify(errObjProps)}` : ''
    const siteicon = 'http://www.marsbit.co/resource/images/huoxing24.png?t=' + new Date().getTime()
    const twettericon = initProps.twettericon ? initProps.twettericon + '?t=' + new Date().getTime() : siteicon
    const twetterType = initProps.twettericon && initProps.twettericon !== '' ? 'summary_large_image' : 'summary'
    // const twitterimg = `http://www.marsbit.co/resource/images/naga_icon.ico`
    // <meta content="${siteicon}" name="twitter:image" />
    return {
        header: `<!DOCTYPE html>
                <html lang="zh-hans">
                    <title>${pageTitle}</title>
                    <meta charset="utf-8">
                    <meta content="index, follow" name="robots" />
                    <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
                    <meta content="ie=edge" http-equiv="x-ua-compatible" />
                    <meta name="keywords" content="${pageKeywords}">
                    <meta name="description" content="${pageDescription}">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <meta name="renderer" content="webkit|ie-comp|ie-stand"/>
                    <meta name="force-rendering" content="webkit"/>
                    <!--微信分享图标-->
                    <meta name="wxshare-icon" content="${shareIcon}"/>
                    <!--微信分享标题--> 
                    <meta name="wxshare-title" content="${shareTitle}"/>
                    <!--微信分享描述--> 
                    <meta name="wxshare-desc" content="${pageDescription}"/>
                    <!--外站分享图标-->
                    <meta property="og:site_name" content="Mars Finance"/>
                    <meta property="og:title" content="${pageTitle}"/>
                    <meta property="og:image" content="${siteicon}"/>
                    <meta property="og:description" content="${pageDescription}"/>
                    <title>${pageTitle}</title>
                    <meta content='${twetterType}' name='twitter:card' />
                    <meta content="@Mars Finance" name="twitter:site"  />
                    <meta content="@Mars_Finance" name="twitter:creator" />
                    <meta content="${pageTitle}" name="twitter:title" />
                    <meta content="${pageDescription}" name="twitter:description" />
                    <meta content="${twettericon}" name="twitter:image" />
                    <!--手机QQ分享-->
                    <meta itemprop="name" content="${pageTitle}">
                    <meta itemprop="description" content="${pageDescription}">
                    <meta itemprop="image" content="${shareIcon}">
                    <!--360site-->
                    <meta name="360-site-verification" content="4d4227e94cc86231bd81ada778d071d7" />
                    ${statisticsHx24('webpc')}
                    ${clientLinkStr}
                    ${wxShareStr}
                    <!--[if lte IE 10]>
                    <script src="${publicPath}/resource/plugin/browser-tips.js"></script>
                    <![endif]-->
                    <link rel="shortcut icon" href="${pageIcon}" type="image/x-icon">
                    ${myStyles}
                    ${styles}
                </head>
                <body>
                    <img src="http://www.marsbit.co/resource/images/huoxing24.png" width="0" height="0" style="height:0;width:0;position:absolute;top:0" />
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root">`,
        footer: `</div>
                    <script>
                        window.__INITIAL_STATE__ =${JSON.stringify(initState)}
                        window.__INITIAL_PROPS__ =${JSON.stringify(initProps)}
                        window.__PLATFORM__ ="${platform}"
                        ${errObjScript}
                    </script>
                    <script src="https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js"></script>
                    ${myScripts}
                    ${scripts}
                    ${statictCode}
                </body>
            </html>`
    }
}
