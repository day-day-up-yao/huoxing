;(function () {
    function cookiesFactory () {
        function extend () {
            var i = 0;
            var result = {};
            for (; i < arguments.length; i++) {
                var attributes = arguments[ i ];
                for (var key in attributes) {
                    result[key] = attributes[key];
                }
            }
            return result;
        }
    
        function decode (s) {
            return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
    
        function init (converter) {
            function api() {}
    
            function set (key, value, attributes) {
                if (typeof document === 'undefined') {
                    return;
                }
    
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);
    
                if (typeof attributes.expires === 'number') {
                    attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
                }
    
                // We're using "expires" because "max-age" is not supported by IE
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
    
                try {
                    var result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}
    
                value = converter.write ?
                    converter.write(value, key) :
                    encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
    
                key = encodeURIComponent(String(key))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape);
    
                var stringifiedAttributes = '';
                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }
    
                    // Considers RFC 6265 section 5.2:
                    // ...
                    // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                    //     character:
                    // Consume the characters of the unparsed-attributes up to,
                    // not including, the first %x3B (";") character.
                    // ...
                    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
                }
    
                return (document.cookie = key + '=' + value + stringifiedAttributes);
            }
    
            function get (key, json) {
                if (typeof document === 'undefined') {
                    return;
                }
    
                var jar = {};
                // To prevent the for loop in the first place assign an empty array
                // in case there are no cookies at all.
                var cookies = document.cookie ? document.cookie.split('; ') : [];
                var i = 0;
    
                for (; i < cookies.length; i++) {
                    var parts = cookies[i].split('=');
                    var cookie = parts.slice(1).join('=');
    
                    if (!json && cookie.charAt(0) === '"') {
                        cookie = cookie.slice(1, -1);
                    }
    
                    try {
                        var name = decode(parts[0]);
                        cookie = (converter.read || converter)(cookie, name) ||
                            decode(cookie);
    
                        if (json) {
                            try {
                                cookie = JSON.parse(cookie);
                            } catch (e) {}
                        }
    
                        jar[name] = cookie;
    
                        if (key === name) {
                            break;
                        }
                    } catch (e) {}
                }
    
                return key ? jar[key] : jar;
            }
    
            api.set = set;
            api.get = function (key) {
                return get(key, false /* read as raw */);
            };
            api.getJSON = function (key) {
                return get(key, true /* read as json */);
            };
            api.remove = function (key, attributes) {
                set(key, '', extend(attributes, {
                    expires: -1
                }));
            };
    
            api.defaults = {};
    
            api.withConverter = init;
    
            return api;
        }
    
        return init(function () {});
    }

    var Cookies = cookiesFactory();
    Cookies.noConflict = function () {
        return Cookies;
    };

    function rand (m) {
        m = m > 16 ? 16 : m
        var num = Math.random().toString()
        if (num.substr(num.length - m, 1) === '0') {
            return rand(m)
        }
        return num.substring(num.length - m)
    }
    
    
    function isLocalStorageSupported () {
        try {
            var testKey = 'test'
            var storage = window.sessionStorage
            storage.setItem(testKey, 'testValue')
            storage.removeItem(testKey)
            return true
        } catch (error) {
            return false
        }
    }
    
    function uuid () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0
            var v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }
    
    var userCookieUuid = 'hx24_userCookieUuid'
    var eventId = 'hx24_eventId'
    var preEventId = 'hx24_preEventId'
    var deviceUuid = 'hx24_deviceUuid'
    
    var domain = window.location.hostname
    var apiHost = 'http://api.marslib.com'
    if (domain.indexOf('marslib.com') > -1) {
        domain = 'marslib.com'
    }
    if (domain.indexOf('marsbit.co') > -1) {
        domain = 'marsbit.co'
        apiHost = 'https://api.marsbit.co'
    }
    
    var cookieEnabled = navigator.cookieEnabled
    var localstorageEnabled = isLocalStorageSupported()
    
    // 当前日期
    var curDate = new Date()
    // 当前时间戳
    var curTamp = curDate.getTime()
    // 当日凌晨的时间戳,减去一毫秒是为了防止后续得到的时间不会达到00:00:00的状态
    var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1
    // 当日已经过去的时间（毫秒）
    var passedTamp = curTamp - curWeeHours
    // 当日剩余时间
    var leftTamp = 24 * 60 * 60 * 1000 - passedTamp
    var leftTime = new Date()
    leftTime.setTime(leftTamp + curTamp)
    
    var eventIdTmp = uuid().replace(/-/g, '')
    if (cookieEnabled) {
        // 激活cookie则设置cookie
        if (!Cookies.get(userCookieUuid)) Cookies.set(userCookieUuid, uuid(), { domain: domain, expires: leftTamp / (24 * 60 * 60 * 1000) })
        Cookies.set(preEventId, (Cookies.get(eventId) || ''), { domain: domain, expires: 365 })
        Cookies.set(eventId, eventIdTmp, { domain: domain, expires: 365 })
        !Cookies.get(deviceUuid) && Cookies.set(deviceUuid, uuid().replace(/-/g, ''), { domain: domain, expires: 365 })
    }
    
    var isLocalstorageSet = ((cookieEnabled && !Cookies.get(eventId)) || !cookieEnabled) && localstorageEnabled
    if (isLocalstorageSet) {
        // 支持localstorage设置localstorage
        var expiresName = 'expires_' + userCookieUuid
        var userCookieUuidStorage = localStorage.getItem(userCookieUuid)
        var userCookieUuidStorageTime = localStorage.getItem(expiresName)
        if (!userCookieUuidStorage || new Date(userCookieUuidStorageTime).toDateString() !== new Date().toDateString()) {
            localStorage.setItem(userCookieUuid, uuid())
            localStorage.setItem(expiresName, leftTime)
        }
        localStorage.setItem(preEventId, localStorage.getItem(eventId) || '')
        localStorage.setItem(eventId, uuid().replace(/-/g, ''))
        !localStorage.getItem(deviceUuid) && localStorage.setItem(deviceUuid, uuid().replace(/-/g, ''))
    }
    
    var imgUrl = apiHost + '/passport/account/recommend/gather.jpg?url=' + encodeURIComponent(window.location.href) + '&timestamp=' + new Date().getTime() + '&device_source=' + window.hx24Flatform + '&id=' + eventIdTmp + '&rand=' + rand(10)
    if (!cookieEnabled && !isLocalStorageSupported) { // 未激活cookie并且未激活localstorage时，带上参数哪怕为空
        imgUrl += '&' + userCookieUuid + '=""&' + preEventId + '=""&' + eventId + '=' + uuid() + '&' + deviceUuid + '=""'
    }
    if (isLocalstorageSet) { // 未激活cookie+激活cookie但未设置成功cookie，但支持localstorage情况下，路径中带uuid相关参数
        var getItem = function (key) {
            return '&' + key + '=' + localStorage.getItem(key)
        }
        imgUrl += getItem(userCookieUuid) + getItem(preEventId) + getItem(eventId) + getItem(deviceUuid)
    }
    
    function sendLog (type) {
        var img = new Image()
        var imgId = uuid()
        window[imgId] = imgId
        img.onload = function () {
            img.onload = null
            img = window[imgId] = null
        }
        img.src = imgUrl + '&type=' + type
    }
    
    sendLog('loading')
}())
