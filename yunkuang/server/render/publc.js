import { isArray } from '../../assets/public/js/index'

const { publicPath } = require('../../config/config')

/** @desc 其它平台统计代码与推送代码 */
const statistics = `
    <!--百度推送-->
    <script>
    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
    </script>
    <!--友盟-->
    <div style="display: none">
        <script type="text/javascript" src="https://s4.cnzz.com/z_stat.php?id=1278650757&web_id=1278650757"></script>
    </div>
    `
/** @desc 自定义style与script
 * @method myStylesScripts(initProps)
 * */
const myStylesScripts = (initProps) => {
    let myStyles = ''
    if (initProps.stylesheet) {
        if (!isArray(initProps.stylesheet) || initProps.stylesheet.length === 0) {
            throw new Error('stylesheet is not a array or length is 0')
        }
        for (let val of initProps.stylesheet) {
            const href = val.indexOf('https://') > -1 || val.indexOf('http://') > -1 ? val : publicPath + val
            myStyles += `<link href="${href}" rel="stylesheet" type="text/css">`
        }
    }

    let myScripts = ''
    if (initProps.javascript) {
        if (!isArray(initProps.javascript) || initProps.javascript.length === 0) {
            throw new Error('javascript is not a array or length is 0')
        }
        for (let val of initProps.javascript) {
            const src = val.indexOf('https://') > -1 || val.indexOf('http://') > -1 ? val : publicPath + val
            myScripts += `<script type="text/javascript" src="${src}" crossorigin></script>`
        }
    }

    return { myStyles, myScripts }
}

const clientLink = (initProps, platform) => {
    if (
        !initProps.hasOwnProperty('clientLink') ||
        initProps.clientLink === 'onlyPc' ||
        initProps.clientLink === 'onlyMob' ||
        initProps.clientLink === false ||
        initProps.clientLink === ''
    ) {
        return ''
    }
    const isPcStr = () => {
        if (platform === 'pc') return `!isPc()`
        if (platform === 'mob') return 'isPc()'
    }
    return `<script>
        function isPc() {
            var userAgent = window.navigator.userAgent.toLowerCase()
            var Agents = ['android', 'iphone', 'ipod', 'windows phone']
            for (var i = 0; i < Agents.length; i++) {
                if (userAgent.indexOf(Agents[i]) > -1) return  false
            }
            return true
        }
        if (${isPcStr()}) window.location.href = '${initProps.clientLink}' 
    </script>`
}

/** @desc 微信分享。注：url暂时调用www.huoxing24.com。跨域问题需要具体跟运维查看
 * @method wxShare(isWx)
 * */
const wxShare = (isWx) => {
    if (!isWx) return ''
    return `<script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
            <script>
            function formatParams(data) {
                var arr = [];
                for (var name in data) {
                    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
                }
                arr.push(('v=' + Math.random()).replace('.', ''))
                return arr.join('&')
            }
    
            function ajax(options) {
                options = options || {}
                options.type = (options.type || 'get').toLowerCase()
                options.dataType = options.dataType || 'json'
                var params = formatParams(options.data)
                var xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        var status = xhr.status
                        if (status >= 200 && status < 300) {
                            options.success && options.success(xhr.responseText, xhr.responseXML)
                        } else {
                            options.fail && options.fail(status)
                        }
                    }
                }
                if (options.type === 'get') {
                    xhr.open('GET', options.url + '?' + params, true)
                    xhr.send(null)
                } else if (options.type === 'post') {
                    xhr.open('POST', options.url, true)
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                    xhr.send(params)
                }
            }
            ajax({
                url: '/signture',
                type: 'post',
                data: { url: window.location.href.split('#')[0] },
                success: function (res, xml) {
                    const data = JSON.parse(res)
                    wx.config({
                        debug: false,
                        appId: 'wxec2dc083d4024311',
                        timestamp: data.timestamp,
                        nonceStr: data.nonceStr,
                        signature: data.signature,
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ'
                        ]
                    })
                    wx.ready(function () {
                        const shareData = {
                            title: document.title,
                            desc: document.querySelector('meta[name="description"]').getAttribute('content'),
                            imgUrl: document.querySelector('meta[name="wxshare-icon"]').getAttribute('content'),
                            link: data.url
                        }
                        wx.onMenuShareAppMessage(shareData)
                        wx.onMenuShareTimeline(shareData)
                        wx.onMenuShareQQ(shareData)
                    })
                    wx.error(function (err) {
                        console.log(err.errMsg)
                    })
                },
                fail: function (status) {
                    console.log('wx share fail status ' + status)
                }
            })
        </script>`
}

/** @desc 云片身份验证
 * @method riddler
 * */

const riddler = `
    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=c2c295e8-a99f-4cd0-a0a7-34f05dcee04f"></script>
    <script src="https://cdn.bootcss.com/babel-polyfill/7.4.3/polyfill.min.js"></script>
    <script src="https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js?t=20210720"></script>`

export { statistics, myStylesScripts, clientLink, wxShare, riddler }
