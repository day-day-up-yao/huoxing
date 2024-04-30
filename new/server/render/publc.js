import { isArray } from 'multiPublic/index'

const { publicPath } = require('../../config/config')

/** @desc 财经统计代码
 * @params
 * url, timestamp, device_source, ref_url, hx24_eventId, hx24_preEventId, hx24_userCookieUuid, hx24_deviceUuid
 * @method statisticsHx24(platform) platform: webpc, webm
 * */
const statisticsHx24 = (platform) => `
<script>
    window.hx24Flatform = "${platform}";
</script>
`
/* const statisticsHx24 = (platform) => `
<script>
    window.hx24Flatform = "${platform}";
    (function () {
        var hx24 = document.createElement("script");
        hx24.src = "${publicPath}/${process.env.NODE_ENV === 'development' ? '_dist' : 'build'}/gather.js?timestamp=${gatherTime}";
        var script = document.getElementsByTagName("script")[0];
        script.parentNode.insertBefore(hx24, script);
    })();
</script>
` */

/** @desc 其它平台统计代码 */
// marsbit.co 域名统计代码
const statistics = `
    <script>
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?0f04816eea55fec5a1f0c7fe30aef21b";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
    </script>
    `
// marstelegram.com 域名统计代码
const statistGram = `
    <script>
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?60730e7a185bb6e05ddc28f2fcf20ddc";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
    </script>
    `
// marsbit.cc 域名统计代码
const statistCc = `
    <script>
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?76e96681d574f1bc7561c43bf9661c8c";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
    </script>
    `
/** @desc 自定义style与script
 * @method myStylesScripts(initProps)
 * */
const myStylesScripts = (initProps) => {
    let myStyles = ''
    if (initProps.stylesheet) {
        if (!isArray(initProps.stylesheet) || initProps.stylesheet.length === 0) throw new Error('stylesheet is not a array or length is 0')
        for (let val of initProps.stylesheet) {
            const href = (val.indexOf('https://') > -1 || val.indexOf('http://') > -1) ? val : publicPath + val
            myStyles += `<link href="${href}?v=${new Date().getMonth()}" rel="stylesheet" type="text/css">`
        }
    }

    let myScripts = ''
    if (initProps.javascript) {
        if (!isArray(initProps.javascript) || initProps.javascript.length === 0) throw new Error('javascript is not a array or length is 0')
        for (let val of initProps.javascript) {
            const src = (val.indexOf('https://') > -1 || val.indexOf('http://') > -1) ? val : publicPath + val
            myScripts += `<script type="text/javascript" src="${src}?v=${new Date().getMonth()}" crossorigin></script>`
        }
    }

    return { myStyles, myScripts }
}

const clientLink = (initProps, platform) => {
    if (!initProps.hasOwnProperty('clientLink') || initProps.clientLink === 'onlyPc' || initProps.clientLink === 'onlyMob' || initProps.clientLink === false || initProps.clientLink === '') return ''
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
 * 请注意，原有的1.2.0版本 wx.onMenuShareTimeline、wx.onMenuShareAppMessage、wx.onMenuShareQQ、wx.onMenuShareQZone 接口，即将废弃。
 * 请尽快迁移使用客户端6.7.2及JSSDK 1.4.0以上版本支持的 wx.updateAppMessageShareData、wx.updateTimelineShareData接口。
 * @method wxShare(isWx)
 * */
const wxShare = (isWx) => {
    if (!isWx) return ''
    return `<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
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
                url: 'https://m.marsbit.co/signture',
                type: 'post',
                data: { url: window.location.href.split('#')[0] },
                success: function (res, xml) {
                    const data = JSON.parse(res)
                    wx.config({
                        debug: false,
                        appId: 'wx0ed2ac0b34184652',
                        timestamp: data.timestamp,
                        nonceStr: data.nonceStr,
                        signature: data.signature,
                        jsApiList: [
                            'checkJsApi',
                            'updateAppMessageShareData',
                            'updateTimelineShareData'
                        ],
                        openTagList: ['wx-open-launch-app']
                    })
                    wx.ready(function () {
                        const shareData = {
                            title: document.querySelector('meta[name="wxshare-title"]').getAttribute('content'),
                            desc:  document.querySelector('meta[name="description"]').getAttribute('content'),
                            imgUrl: ${publicPath}/resource/images/favicon.ico,
                            link: data.url,
                            success: function () {
                                document.querySelector('.m-wx-share-box').style.display = 'inline'
                            },
                            cancel: function () {
                                document.querySelector('.m-wx-share-box').style.display = 'inline'
                            }
                        }
                        wx.updateAppMessageShareData(shareData)
                        wx.updateTimelineShareData(shareData)
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

export { statisticsHx24, statistics, myStylesScripts, clientLink, wxShare, statistCc, statistGram }
