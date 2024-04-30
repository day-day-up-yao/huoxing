require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"containers-Author","2":"containers-AuthorDetails","3":"containers-Details","4":"containers-Feature","5":"containers-FeatureDetailsAndTags","6":"containers-Flash","7":"containers-FlashDetails","8":"containers-Home","9":"containers-Notice","10":"containers-NoticeDetail","11":"containers-Tags","12":"containers-m-DetailShare","13":"containers-m-Feature","14":"containers-m-FeatureDetail","15":"containers-m-Flash","16":"containers-m-FlashDetail","17":"containers-m-FlashShareDetail","18":"containers-m-News","19":"containers-m-NoticeDetail"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return clearLoginCookies; });
/* unused harmony export domainSuffix */
/* unused harmony export replaceDomain */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ajaxSignature; });
/* unused harmony export getAPISign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return axiosAjax; });
/* unused harmony export logReport */
/* unused harmony export websocket */
/* unused harmony export openNewWindow */
/* unused harmony export uerserAgent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isPc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isIos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isIphoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isWechat; });
/* unused harmony export isHxApp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isPsd; });
/* unused harmony export isEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isObject; });
/* unused harmony export isJson */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isArray; });
/* unused harmony export isArrayBuffer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return formatPublishTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return flashTime; });
/* unused harmony export isToday */
/* unused harmony export isThisYear */
/* unused harmony export dataURLtoBlob */
/* unused harmony export sortBy */
/* unused harmony export formatNum */
/* unused harmony export formatPrice */
/* unused harmony export formatTotal */
/* unused harmony export formatPercent */
/* unused harmony export formatAbsolute */
/* unused harmony export numDivision */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return queryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return propsInherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return stringArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return stringJsonItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return scrollOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return windowOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return elementOffset; });
/* unused harmony export mouseOffset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return windowScroll; });
/* unused harmony export animation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return arriveAtDom; });
/* unused harmony export deepCompare */
/* unused harmony export deepMerge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return flashRecognize; });
/* unused harmony export arrayMaxMin */
/* unused harmony export toNonExponential */
/* unused harmony export textOverflow */
/* unused harmony export textLength */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return encodeSearchKey; });
/* unused harmony export uuid */
/* unused harmony export uuidDiy */
/* unused harmony export redirectUrl */
/* unused harmony export rem */
/* unused harmony export cookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mixUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return webTdk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cookiesName; });
/* unused harmony export keyLight */
/* unused harmony export getUnit */
/* unused harmony export addComma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return urlToLink; });
/* unused harmony export fileExtension */
/* unused harmony export isAutoplaySupported */
/* unused harmony export execCommandCopy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLength; });
/* unused harmony export nagacomlist */
/* unused harmony export naGacom */
/* unused harmony export marsbitcoHost */
/* unused harmony export isMarsbitco */
/* unused harmony export powerHost */
/* unused harmony export isPowersite */
/* unused harmony export marsbitccHost */
/* unused harmony export isMarsbitcc */
/* unused harmony export marsbitinfoHost */
/* unused harmony export isMarsbitinfo */
/* unused harmony export marsshareHost */
/* unused harmony export isMarsshare */
/* unused harmony export marstelegramHost */
/* unused harmony export isMarstelegram */
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_8__);




var _this = undefined;





 // import hmacSHA256 from 'crypto-js/hmac-sha256'


/**
 * @desc 注销或检测到token过期时删除登录cookie信息
 * @method clearLoginCookies()
 */

var clearLoginCookies = function clearLoginCookies() {
  var domain = '';
  var env = "production";
  if (env === 'test') domain = 'marslib.com';

  if (env === 'production') {
    var networkurl = window.location.hostname;
    if (networkurl.indexOf('marsbit.cc') > -1) domain = 'marsbit.cc';
    if (networkurl.indexOf('marsbit.co') > -1) domain = 'marsbit.co';
    if (networkurl.indexOf('marstelegram.com') > -1) domain = 'marstelegram.com';
  }

  for (var key in cookiesName) {
    if (key === 'deviceId' || key === 'deviceUuid') continue; // 删除老版本登录信息

    js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove(cookiesName[key]); // 删除新版本登录信息

    js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove(cookiesName[key], {
      domain: domain
    });
  }
};
/**
 * @desc 2021-11-26 marsbit.co域名备灾临时代码
 */

var domainSuffix = function domainSuffix(req) {
  var hostServer = req && req.headers ? req.headers.host : '';
  var host = typeof window === 'undefined' ? hostServer : window.location.host;
  if (!host || typeof host !== 'string') return 'co';
  if (host.includes('marsbit.cn')) return 'cn';
  if (host.includes('marsbit.net')) return 'net';
  if (host.includes('marsbit.co')) return 'co';
  return 'co';
};
var replaceDomain = function replaceDomain(data, req) {
  var dataTmp = isObject(data) ? JSON.stringify(data) : data;

  if (typeof dataTmp === 'string') {
    var domainWww = "www.marsbit.".concat(domainSuffix(req));
    var domainNew = "news.marsbit.".concat(domainSuffix(req));
    var domainMp = "mp.marsbit.".concat(domainSuffix(req));
    dataTmp = dataTmp.replace(/www.marsbit.co/g, domainWww);
    dataTmp = dataTmp.replace(/news.marsbit.co/g, domainNew);
    dataTmp = dataTmp.replace(/mp.marsbit.co/g, domainMp);
    dataTmp = isJson(dataTmp) ? JSON.parse(dataTmp) : dataTmp;
  }

  return dataTmp;
};
/**
 * @desc ajax请求
 * nodeJs接口请求错误由render.js统一处理; 前端做单独做明确提示。
 * 错误捕获在每个地方都catch并且throw Error，即使上一层已经捕获。不然error.stack不会追溯到错误位置
 * @returns {data/error}
 * @Params {args} args = {type(get/post/complexpost), url, params, contentType, urlSearchParams, formData, noLoading, userDefined, host, transformRequest, noLog}
 * @method axiosAjax({
        type: get/post/complexpost,
        url: ',
        contentType: 'application/x-home.js.js-form-urlencoded',
        formData: true,
        noLoading: true,
        userDefined: {
            'hx-cookie': Base64.encode(JSON.stringify({
                    'passportId': Cookies.get('passportId'),
                    'token': Cookies.get('token')
                }))
        },
        transformRequest: '',
        urlSearchParams: true,
        params: {
            dataone: 'one',
            datatwo: 'two'
        }
    })
 */

var ajaxSignature = function ajaxSignature() {
  var platform = 'pc';
  var appSecret = 'Fbz]OdjAyhpqOIKA';
  var nonceArr = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890';
  var timestamp = new Date().getTime();
  var nonce = '';

  for (var i = 0; i < 6; i++) {
    var j = Math.round(Math.random() * nonceArr.length);
    nonce += nonceArr[j];
  }

  var sig = blueimp_md5__WEBPACK_IMPORTED_MODULE_5___default()('platform=' + platform + '&timestamp=' + timestamp + '&nonce=' + nonce + '&' + appSecret);
  return js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].encode(JSON.stringify({
    'platform': platform,
    'nonce': nonce,
    'timestamp': timestamp,
    'sig': sig
  }));
};
var getAPISign = function getAPISign() {// 随机数字字母，建议4位
  // const appKey = 'ysBokbA3gKUzt61DmeHWjTFYZ07CGPQL'
  // const appSecret = 'a2PAJXRBChdpGvoyKEz3lLS5Yf1bM0NO'
  // const nonce = Number.parseInt((Math.random() * (9999 - 1000 + 1) + 1000).toString(), 10)
  // // 当前时间戳（秒）
  // const timestamp = Number.parseInt((Date.now() / 1000).toString(), 10)
  // // 使用appSecret进行HMacSha256加密函数
  // const hmac256 = hmacSHA256(`${appKey}${nonce}${timestamp}`, appSecret)
  // const headers = {
  //     'X-Api-Key': appKey,
  //     'X-Api-Sign': `${hmac256}.${nonce}.${timestamp}`
  // }
  // return headers
};

var removeLoading = function removeLoading() {
  if (typeof window !== 'undefined' && document.getElementById('ajaxLoading')) {
    var $ajaxLoading = document.getElementById('ajaxLoading');
    $ajaxLoading.parentNode.removeChild($ajaxLoading);
  }
};

var axiosAjax = function axiosAjax(args) {
  return new Promise(function (resolve, reject) {
    var req = args.req,
        type = args.type,
        url = args.url,
        params = args.params,
        contentType = args.contentType,
        urlSearchParams = args.urlSearchParams,
        formData = args.formData,
        noLoading = args.noLoading,
        noLog = args.noLog,
        userDefined = args.userDefined,
        host = args.host,
        transformRequest = args.transformRequest,
        isDefi = args.isDefi;
    var request = args.req || args.params && args.params.req;
    if (args.params && args.params.req) delete args.params.req; // 获取并设置请求语言

    var language = 'zh-CN';
    var langServer = request && request.language; // 服务端请求

    var langBrowser = typeof window !== 'undefined' && js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get(cookiesName.language); // 前端请求

    if (langServer) language = langServer;
    if (langBrowser) language = langBrowser; // console.log(langServer, langBrowser)
    // params.lang = language

    try {
      var urlLast = _config_config__WEBPACK_IMPORTED_MODULE_8__["apiHost"] + url;
      if (host || host === '') urlLast = host + url;
      if (isDefi) urlLast = url; // 2021-11-26 marsbit.co域名备灾临时代码

      if (typeof window === 'undefined') {// 后端替换请求域名为指定专有Ip或域名
      } else {
        urlLast = urlLast.replace('.co', ".".concat(domainSuffix(req)));
      }

      if (typeof window !== 'undefined') {
        var ajaxLoadingStr = "<div class=\"hx-loading\" id=\"ajaxLoading\">\n                    <div class=\"round round-one\"></div>\n                    <div class=\"round round-two\"></div>\n                    <div class=\"round round-three\"></div>\n                </div>";
        if (noLoading) ajaxLoadingStr = '<div id="ajaxLoading"></div>';
        if (!document.getElementById('ajaxLoading')) document.body.insertAdjacentHTML('beforeend', ajaxLoadingStr);
      }

      var opt = null;
      var ajaxType = type.toLowerCase();

      if (ajaxType === 'post') {
        opt = {
          method: type,
          url: urlLast,
          data: qs__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, params, {
            lang: language
          }))
        };
      } else if (ajaxType === 'get') {
        opt = {
          method: type,
          url: urlLast,
          params: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, params, {
            lang: language
          })
        };
      } else if (ajaxType === 'complexpost') {
        opt = {
          method: 'post',
          url: urlLast,
          params: params
        };
      } else if (ajaxType === 'postpure') {
        opt = {
          method: 'post',
          url: urlLast,
          data: params
        };
      } // 仅浏览器端支持


      if (urlSearchParams) {
        var searchParams = new URLSearchParams();

        for (var key in params) {
          searchParams.append(key, params[key]);
        }

        opt = {
          method: type,
          url: urlLast,
          data: searchParams
        };
      } // 仅浏览器端支持


      if (formData) {
        var fmData = new FormData();

        for (var _key in params) {
          fmData.append(_key, params[_key]);
        }

        opt = {
          method: type,
          url: urlLast,
          data: fmData
        };
      }

      opt.headers = {
        'Accept-Language': language
      };

      if (contentType) {
        opt.headers = {
          'Content-Type': contentType
        };
      }

      if (userDefined) {
        opt.headers = Object.assign(opt.headers ? opt.headers : {}, userDefined);
      }

      if (transformRequest) {
        opt.transformRequest = transformRequest;
      }

      if (isDefi) {
        opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
          'x-apiKey': '4b92a4b6-8ad2-408a-9169-301e03da89c7'
        });
      }

      opt.headers = Object.assign(opt.headers ? opt.headers : {}, {
        'Sign-Param': ajaxSignature()
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, opt, {
        timeout: 30000
      })).then(function (res) {
        var noLogTrue = false; // 自定义是否上报日志

        if (noLog && isArray(noLog)) {
          if (noLog.length === 0) {
            noLogTrue = true;
          } else {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = noLog[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var val = _step.value;

                if (res.data && res.data.code && res.data.code === val) {
                  noLogTrue = true;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }

        if (res.data && res.data.code && res.data.code !== 1 && !noLogTrue) {
          var resCode = res.data.code;
          var resMsg = res.data.msg ? res.data.msg : 'api code is not 1'; // -4需要登录， -1未查询到记录

          if (typeof window === 'undefined') {
            if (resCode !== -4 && resCode !== -1) {
              throw Error(JSON.stringify({
                message: 'api-msg',
                httpCode: 200,
                url: url,
                resCode: resCode,
                resMsg: resMsg
              }));
            }
          } else {
            if (resCode === -4) {
              // 登录失效时清除登录信息并跳转到登录页面
              clearLoginCookies(); // window.location.href = mixUrl.main('/account')
            }

            if (resCode !== -4 && url.indexOf('/logger') === -1) {
              logReport({
                message: 'client-api-msg',
                httpCode: 200,
                url: url,
                params: isJson(params) ? JSON.stringify(params) : params,
                resCode: resCode,
                resMsg: resMsg,
                framework: true
              });
            }
          }
        }

        removeLoading(); // 2021-11-26 marsbit.co域名备灾临时代码

        resolve(replaceDomain(res.data, req));
      })["catch"](function (err) {
        var errMsg = typeof err.message === 'string' ? err.message.replace(/Error: /g, '') : '';
        var urlParam = err.config ? err.config.url : url;
        var codeParam = err.response ? err.response.status : 500;
        var errObj = {
          errMsg: errMsg
        };

        if (isJson(errMsg) && JSON.parse(errMsg).message === 'api-msg') {
          errObj = JSON.parse(errMsg);
        } else {
          errObj = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({
            message: 'api-err',
            httpCode: codeParam,
            url: urlParam
          }, errObj);
        }

        if (typeof window === 'undefined') {
          console.log(errObj);
          reject(Error(JSON.stringify(errObj)));
        } else {
          removeLoading();
          errObj.message = 'client-api-err';
          errObj.params = isJson(params) ? JSON.stringify(params) : params;
          if (err.stack) errObj.stack = err.stack;
          url.indexOf('/logger') === -1 && logReport(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, errObj, {
            framework: true
          }));
          var errStr = "[api-err] url:".concat(urlParam, ", status:").concat(codeParam, ", msg:").concat(errMsg);
          console.error(errStr);
          reject(Error(errStr));
        }
      });
    } catch (err) {
      var errObj = {
        message: 'ajax-handle-error',
        httpCode: 200,
        url: url,
        errMsg: err.message
      };

      if (typeof window === 'undefined') {
        console.log(errObj);
        reject(Error(JSON.stringify(errObj)));
      } else {
        removeLoading();
        errObj.message = 'client-ajax-handle-err';
        errObj.params = isJson(params) ? JSON.stringify(params) : params;
        if (err.stack) errObj.stack = err.stack;
        url.indexOf('/logger') === -1 && logReport(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, errObj, {
          framework: true
        }));
        var errStr = "[ajax-handle-err] url:".concat(url, ", msg:").concat(err.message);
        console.error(errStr);
        reject(Error(errStr));
      }
    }
  });
};
/** @desc
 * 前端日志上报到node服务: 框架自动打印的params中会有framework:true参数(axiosAjax, browser/index.js, browser/app.js)，会自动上传localstorage和sessionstorage
 * node端日志打印: 可调用/server/app/logger.js, 路由中可调用res.logger
 * @params {params} {level, message, ...其它信息}
 * @method logReport(params)
 **/

var logArr = [];
var logPreTime = new Date().getTime(); // 1秒内logArr中不存在的errObj才上报。同一页面同一信息1秒内不再上报

var logReport = function logReport(params) {
  if (typeof window === 'undefined') return;

  try {
    var logCurTime = new Date().getTime();

    var logAjax = function logAjax() {
      var logObj = {};

      if (window.localStorage && params.framework) {
        var localTmp = {};
        Object.keys(window.localStorage).map(function (key, index) {
          if (key.indexOf('Hm_lvt_') === -1 && key.indexOf('Hm_lpvt_') === -1 && key.indexOf('m_unsent_') === -1) {
            // 在此排除不需要的信息
            localTmp[key] = localStorage.getItem(key);
          }
        });
        logObj.localStorage = JSON.stringify(localTmp);
      }

      if (window.sessionStorage && params.framework) {
        var _localTmp = {};
        Object.keys(window.sessionStorage).map(function (key, index) {
          if (key.indexOf('Hm_lvt_') === -1 && key.indexOf('Hm_lpvt_') === -1 && key.indexOf('m_unsent_') === -1) {
            // 在此排除不需要的信息
            _localTmp[key] = sessionStorage.getItem(key);
          }
        });
        logObj.sessionStorage = JSON.stringify(_localTmp);
      }

      var paramsObj = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, params, logObj);

      if (paramsObj.url && paramsObj.url.indexOf('/logger') === -1 || !paramsObj.url) {
        axiosAjax({
          type: 'post',
          url: '/logger',
          noLoading: true,
          host: "".concat(window.location.protocol, "//").concat(window.location.host),
          params: paramsObj
        })["catch"](function (err) {
          console.log(err);
        });
      }
    };

    if (logCurTime - logPreTime >= 1000 && logArr.length !== 0) {
      logArr = [];
      logArr.push(params);
      logPreTime = logCurTime;
      logAjax();
    } else {
      var hasParams = function hasParams() {
        for (var _i = 0, _logArr = logArr; _i < _logArr.length; _i++) {
          var val = _logArr[_i];

          if (deepCompare(val, params)) {
            return true;
          }
        }

        return false;
      };

      if (logArr.length !== 0 && hasParams()) return;
      logArr.push(params);
      logAjax();
    }
  } catch (err) {
    console.log(err);
  }
};
/**
 * @desc websocket连接
 * @params {args} args = {
 *    host 如果不是默认域名添加此参数,
 *    url 接口路由,
 *    params 发送的参数,
 *    binaryType 指定接收数据类型: blob,arraybuffer，
 *    https true支持https传此参数，
 *    success 连接成功，返回event,
 *    message 接收消息，返回event,
 *    close 连接关闭时，返回此event,
 *    error 连接错误，返回此event,
 * }
 * @returns {ws} ws: 此websocket对象，用于后续其它操作。
 * ws.message(callback)
 * ws.message(function (event) {
            console.log(event)
   })
 * ws.send()
 * ws.close()
 * ws.bufferedAmount 0发送完毕，else发送中
 * ws.readyState CONNECTING：值为0，表示正在连接。OPEN：值为1，表示连接成功，可以通信了。CLOSING：值为2，表示连接正在关闭。CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
 * @method websocket(args)
 * */

var websocket = function websocket(args) {
  return new Promise(function (resolve, reject) {
    var messageEventProxy = {};

    try {
      var host = args.host,
          url = args.url,
          params = args.params,
          binaryType = args.binaryType,
          https = args.https,
          success = args.success,
          message = args.message,
          close = args.close,
          error = args.error;
      var wssUrl = "".concat(https || "production" === 'production' ? 'wss' : 'ws', "://").concat((host || (_config_config__WEBPACK_IMPORTED_MODULE_8__["apiHost"].indexOf('http') > -1 ? _config_config__WEBPACK_IMPORTED_MODULE_8__["apiHost"].split('://')[1] : _config_config__WEBPACK_IMPORTED_MODULE_8__["apiHost"])) + (url || ''));
      var ws;
      var lockReconnect = false; // 避免重复连接

      if (window.WebSocket || window.MozWebSocket) {
        // onopen, onmessage心跳检测
        var heartCheck = {
          timeout: 25000,
          timeoutObj: null,
          serverTimeoutObj: null,
          reset: function reset() {
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            return this;
          },
          start: function start() {
            var This = this;
            this.timeoutObj = setTimeout(function () {
              ws.send('ping'); // 如果再timeout时间内没有重置，认为后端主动断开连接，则进行重连

              This.serverTimeoutObj = setTimeout(function () {
                // onclose会执行reconnect，执行ws.close()就行了
                // 如果直接执行reconnect 会触发onclose导致重连两次
                ws.close();
              }, This.timeout);
            }, this.timeout);
          } // onerror, onclose时重新连接

        };

        var reconnect = function reconnect() {
          if (lockReconnect) return;
          lockReconnect = true;
          setTimeout(function () {
            createWebSocket();
            lockReconnect = false;
          }, 2000);
        };

        var createWebSocket = function createWebSocket() {
          var BrowserWebSocket = window.WebSocket || window.MozWebSocket; // ws = new BrowserWebSocket(wssUrl, 'protocol')

          ws = new BrowserWebSocket(wssUrl);
          if (binaryType) ws.binaryType = binaryType;
          /** @desc 自定义message事件
           * 增加代理当onmessage返回消息时，触发自定义事件message的参数callback执行
           * 由于会多次调用message，为了保证proxy唯一性，uuid生成eventProxyKey，监听并执行
           * 若直接改变messageEventProxy，则后边调用message会覆盖上次调用的值，则监听无效
           *
           * 思路:
           * 1,创建messageEventProxy对象，保存要被监听的自定义message对象
           * 2,定义message方法参数，回调函数callback
           * 3,方法内定义proxy代理，监听uuid生成唯一key值eventProxyKey值更新时，执行callback函数
           */

          ws.message = function (callback) {
            var eventProxyKey = uuid();
            messageEventProxy[eventProxyKey] = new Proxy({
              event: null
            }, {
              set: function set(target, propKey, value, receiver) {
                target[propKey] = value;
                callback(value);
                return receiver;
              }
            });
          };

          ws.onopen = function (event) {
            heartCheck.reset().start();
            ws.send(JSON.stringify({
              action: 'auth'
            }));
            if (params) ws.send(JSON.stringify(params));
            if (success) success(event);
            resolve(ws);
          };

          ws.onmessage = function (event) {
            heartCheck.reset().start();
            if (event.data === 'pong') return;
            if (message) message(event);

            for (var key in messageEventProxy) {
              messageEventProxy[key].event = event;
            }
          };

          ws.onclose = function (event) {
            reconnect();
            if (close) close(event);
          };

          ws.onerror = function (err) {
            reconnect();
            if (error) error(err);
          }; // 页面关闭或刷新前关闭ws连接


          window.onbeforeunload = function () {
            ws.close();
          };
        };

        createWebSocket();
      } else {
        var tips = '当前浏览器不支持WebSocket';
        console.error(tips);
        reject(new Error(tips));
      }
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};
/**
 * @desc 非异步打开新窗口
 * @Params {url}
 * @method openNewWindow(url)
 */

var openNewWindow = function openNewWindow(url, blank) {
  document.body.insertAdjacentHTML('beforeend', "<a href=\"".concat(url, "\" target=\"").concat(!blank ? '_blank' : '', "\" id=\"openWin\"> </a>"));
  document.getElementById('openWin').click();
  var $openWin = document.getElementById('openWin');
  $openWin.parentNode.removeChild($openWin);
};
/**
 * @desc 获取浏览器用户代理字符串（服务端/浏览器端）
 * @returns {userAgent}
 * @Params {req} req 用户请求数据
 * @method uerserAgent(req)
 */

var uerserAgent = function uerserAgent(req) {
  return req ? req.headers['user-agent'] || '' : window.navigator.userAgent;
};
/**
 * @desc 判断是否是PC（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isPc(req)
 */

var isPc = function isPc(req) {
  var userAgent = uerserAgent(req).toLowerCase();
  var Agents = ['android', 'iphone', 'ipod', 'windows phone'];
  var flag = true;

  for (var i = 0; i < Agents.length; i++) {
    if (userAgent.indexOf(Agents[i]) > -1) {
      flag = false;
      break;
    }
  }

  return flag;
};
/**
 * @desc 判断是否是iOS（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isIos(req)
 */

var isIos = function isIos(req) {
  var userAgent = uerserAgent(req).toLowerCase();
  return userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || false;
};
/**
 * @desc 判断是否是iphonex
 * @returns {Boolean}
 * @method isIphoneX()
 */

var isIphoneX = function isIphoneX() {
  return /iphone/gi.test(navigator.userAgent) && screen.height === 812 && screen.width === 375;
};
/**
 * @desc 判断是否是Android（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isAndroid(req)
 */

var isAndroid = function isAndroid(req) {
  var userAgent = uerserAgent(req).toLowerCase();
  return userAgent.indexOf('android') > -1 || false;
};
/**
 * @desc 判断是否是微信/Wechat（服务端/浏览器端）
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isWechat(req)
 */

var isWechat = function isWechat(req) {
  var userAgent = uerserAgent(req).toLowerCase();
  return userAgent.indexOf('micromessenger') > -1 || false;
};
/**
 * @desc 判断是否是火星财经App
 * @returns {Boolean}
 * @Params {req} req服务端需要
 * @method isHxApp(req)
 */

var isHxApp = function isHxApp(req) {
  var userAgent = uerserAgent(req).toLowerCase();
  return userAgent.indexOf('marsbit') > -1 || false;
};
/**
 * @desc 判断是否为正确的密码规则: 密码长度6~16位，且同时包含字母和数字
 * @returns {boolean}
 * @Params {password} string
 * @method isPsd(password)
 */

var isPsd = function isPsd(password) {
  var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,16}$/;
  return reg.test(password) || false;
};
/**
 * @desc 判断是否是符合规则邮箱地址
 * @returns {Boolean}
 * @Params {email}
 * @method isEmail(email)
 */

var isEmail = function isEmail(email) {
  var myreg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return myreg.test(email) || false;
};
/**
 * @desc 判断是否是正确的手机号
 * @returns {Boolean}
 * @Params {phoneNumber}
 * @method isPhone()
 */

var isPhone = function isPhone(phoneNumber) {
  // const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  var myreg = /^[0-9]*$/;
  return myreg.test(phoneNumber) || false;
};
/**
 * @desc 判断是否为数字
 * @returns {boolean}
 * @Params {string} string
 * @method isNum(string)
 */

var isNum = function isNum(string) {
  var reg = /^[0-9]+.?[0-9]*$/;
  return reg.test(string);
};
/**
 * @desc 判断是否为object
 * @Params {obj}
 * @returns {boolean}
 * @method isObject(obj)
 */

var isObject = function isObject(obj) {
  return obj && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj) === 'object' && !Array.isArray(obj);
};
/**
 * @desc 判断Json字符串是否为正确的Json格式
 * @returns {boolean}
 * @Params {obj}
 * @method isJson(obj)
 */

var isJson = function isJson(obj) {
  if (typeof obj === 'string') {
    try {
      var objFormat = JSON.parse(obj);
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(objFormat) === 'object' && objFormat;
    } catch (e) {
      return false;
    }
  } else {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
};
/**
 * @desc 判断是否为数组
 * @returns {boolean}
 * @Params {arr}
 * @method isArray(arr)
 */

var isArray = function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
};
/**
 * @desc 判断是否为ArrayBuffer
 * @returns {boolean}
 * @Params {buffer}
 * @method isArrayBuffer(buffer)
 */

var isArrayBuffer = function isArrayBuffer(buffer) {
  return Object.prototype.toString.call(buffer) === '[object ArrayBuffer]';
};
/**
 * @desc 格式化时间，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @returns {string}
 * @Params {date, fmt}
 * @method formatTime(time, "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *         formatTime(time, "yyyy.M.d h:m:s.S")      ==> 2006.7.2 8:9:4.18
 */

var formatTime = function formatTime(date, fmt) {
  var This = new Date(date);
  var o = {
    'M+': This.getMonth() + 1,
    // 月份
    'd+': This.getDate(),
    // 日
    'h+': This.getHours(),
    // 小时
    'm+': This.getMinutes(),
    // 分
    's+': This.getSeconds(),
    // 秒
    'q+': Math.floor((This.getMonth() + 3) / 3),
    // 季度
    'S': This.getMilliseconds() // 毫秒

  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (This.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }

  return fmt;
};
/**
 * @desc 格式化时间: 小于1分钟-刚刚, 小于1小时-多少分钟前, 小于1天-多少小时前, 其它-年/月/日
 * @returns {string}
 * @Params {publishTime, requestTime, mode} publishTime当前时间, requestTime服务器时间, mode参考formatTime格式{hour, day, year}
 * @method formatPublishTime(publishTime, requestTime, mode)
 */

var formatPublishTime = function formatPublishTime(publishTime, requestTime, mode) {
  var hourMode = 'hh:mm';
  var dayMode = 'MM月dd日 hh:mm';
  var yearMode = 'yyyy-MM-dd hh:mm';

  if (mode) {
    if (mode.hour) hourMode = mode.hour;
    if (mode.day) dayMode = mode.day;
    if (mode.year) yearMode = mode.year;
  }

  requestTime = !requestTime ? new Date().getTime() : requestTime;
  var limit = parseInt(requestTime - publishTime) / 1000;

  if (limit < 60) {
    return '刚刚';
  } else if (limit >= 60 && limit < 3600) {
    return Math.floor(limit / 60) + '分钟前';
  } else if (limit >= 3600 && limit < 86400) {
    return Math.floor(limit / 3600) + '小时前';
  } else {
    var timeFormat = isThisYear(publishTime, requestTime) ? isToday(publishTime, requestTime) ? hourMode : dayMode : yearMode;
    return formatTime(publishTime, timeFormat);
  }
};
/**
 * @desc 快讯时间格式化
 * @params {createdTime, serverTime, mode} createdTime当前时间, serverTime服务器时间, mode参考formatTime格式{hour, day, year}
 * @return {timeString}
 */

var flashTime = function flashTime(createdTime, serverTime, mode) {
  var hourMode = 'hh:mm';
  var dayMode = 'MM月dd日 hh:mm';
  var yearMode = 'yyyy-MM-dd hh:mm';

  if (mode) {
    if (mode.hour) hourMode = mode.hour;
    if (mode.day) dayMode = mode.day;
    if (mode.year) yearMode = mode.year;
  }

  var timeFormat = isThisYear(createdTime, serverTime) ? isToday(createdTime, serverTime) ? hourMode : dayMode : yearMode;
  return formatTime(createdTime, timeFormat);
};
/**
 * @desc 判断是否为今日
 * @returns {boolean}
 * @Params {timestamp}
 * @method isToday(timestamp)
 */

var isToday = function isToday(date, serverTime) {
  return new Date(date).toDateString() === (serverTime ? new Date(serverTime).toDateString() : new Date().toDateString());
};
/**
 * @desc 判断是否为今年
 * @returns {boolean}
 * @Params {timestamp}
 * @method isThisYear(timestamp)
 */

var isThisYear = function isThisYear(date, serverTime) {
  return new Date(date).getFullYear() === (serverTime ? new Date().getFullYear() : new Date().getFullYear());
};
/**
 * @desc 图片转blob
 * @returns {blob}
 * @Params {dataurl}
 * @method dataURLtoBlob(dataurl)
 */

var dataURLtoBlob = function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
};
/**
 * @desc 数组根据数组对象中的某个属性值进行排序的方法
 * @param {filed, rev, primer} 排序的属性-如number属性, rev: true表示升序排列false降序排序
 * @method myArray.sort(sortBy('number', false, parseFloat)) 表示根据number属性降序排列
 * */

var sortBy = function sortBy(filed, rev, primer) {
  rev = rev ? 1 : -1;
  return function (a, b) {
    a = a[filed];
    b = b[filed];

    if (typeof primer !== 'undefined') {
      a = primer(a);
      b = primer(b);
    }

    if (a < b) {
      return rev * -1;
    }

    if (a > b) {
      return rev * 1;
    }

    return 1;
  };
};
/**
 * @desc 数字三位数分割法
 * @param number
 * @returns {string}
 */

var formatNum = function formatNum(number) {
  // 数字每3位用逗号分隔
  if (!number) return number;
  var n = Math.abs(number);
  var reg = /\.\d+/;
  var num = (n || 0).toString();
  var temp = reg.exec(num); // 获取小数部分，不存在小数则获取空字符串

  var decimal = temp && temp[0] ? temp[0] : ''; // 获取小数点位置，不存在小数位置则获取字符串长度

  var decimalPointIndex = temp && temp.index ? temp.index : num.length; // 获取整数部分

  var integerNum = num.slice(0, decimalPointIndex);
  var result = ''; // 逗号分隔操作

  while (integerNum.length > 3) {
    result = ',' + integerNum.slice(-3) + result;
    integerNum = integerNum.slice(0, integerNum.length - 3);
  } // 不足3位直接加到最前面


  if (integerNum) {
    result = integerNum + result;
  } // 最后面加上小数部分


  result = result + decimal;
  return number !== 0 ? number > 0 ? result : "-".concat(result) : 0;
};
/**
 * @desc 格式化价格
 * @returns {number}
 * @Params {priceNum, normal(normal\comma)是否常规显示:可省略默认分割显示}
 * @method formatPrice(priceNum)
 */

var formatPrice = function formatPrice(priceNum, normal) {
  if (!priceNum) return 0;
  var price = Math.abs(Number(priceNum));
  if (Object.is(price, NaN)) return 0; // js科学计数情况:1,,小于1且小数点后面带有6个0以上的浮点数值0.00000033=>3.3e-7; 2,整数位数字多于21位1234567890123456789012=>1.2345678901234568e+21

  if (price < 0.00000001) {
    return priceNum > 0 ? "<0.00000001" : ">-0.00000001";
  } else if (price >= 0.00000001 && price < 10000000) {
    if (price < 0.000001 && price >= 0.00000001) {
      price = price.toFixed(8);
    } else if (price < 0.1 && price >= 0.000001) {
      price = price.toPrecision(4);
    } else if (price >= 0.1 && price < 100) {
      price = price.toFixed(4);
    } else if (price >= 100 && price < 10000000) {
      price = price.toFixed(2);
    }

    price = priceNum > 0 ? price : -price;
    return normal === 'normal' ? price : formatNum(price);
  } else if (price >= 10000000) {
    var decimalNum = "".concat(price).length - 1;
    return "".concat(price / Math.pow(10, decimalNum).toFixed(2), "e").concat(priceNum > 0 ? decimalNum : -decimalNum);
  }
};
/**
 * @desc 格式化交易量、市值、成交额
 * @returns {string}
 * @Params {totalNum, normal(normal\comma)是否常规显示:可省略默认分割显示}
 * @method formatTotal(totalNum)
 */

var formatTotal = function formatTotal(totalNum, normal) {
  if (!totalNum) return 0;
  var w = 100000; // 十万

  var y = 100000000; // 亿

  var total = Math.abs(Number(totalNum));
  if (Object.is(total, NaN)) return 0;
  var numArr = "".concat(total).split('.');
  var decimal = numArr.length > 1 ? parseInt(numArr[1].substring(0, 4)) : 0;

  if (total < 0.01) {
    return totalNum > 0 ? "<0.01" : ">-0.01";
  } else {
    if (total >= 0.01 && total < 100000) {
      total = normal === 'normal' ? total.toFixed(2) : formatNum(total.toFixed(2));
    } else if (total >= w && total < y) {
      var cur = (total / w * 10).toFixed(decimal > 0 ? 2 : 0);
      total = normal === 'normal' ? "".concat(cur, "\u4E07") : "".concat(formatNum(cur), "\u4E07");
    } else if (total >= y) {
      var _cur = (total / y).toFixed(decimal > 0 ? 2 : 0);

      total = normal === 'normal' ? "".concat(_cur, "\u4EBF") : "".concat(formatNum(_cur), "\u4EBF");
    }

    return totalNum > 0 ? total : "-".concat(total);
  }
};
/**
 * @desc 格式化百分比:除K线部分
 * @returns {string}
 * @Params {percentNum}
 * @method formatPercent(percentNum)
 */

var formatPercent = function formatPercent(percentNum) {
  if (!percentNum) return "0%";
  var percent = Math.abs(Number(percentNum));
  if (Object.is(percent, NaN)) return "0%";
  var cur = percent * 100;

  if (cur < 0.01) {
    percent = "0.00";
  } else if (cur >= 0.01 && cur < 1000) {
    percent = parseFloat(cur.toFixed(2));
  } else if (cur >= 1000) {
    percent = parseFloat(cur.toFixed(1));
  }

  return percentNum > 0 ? "".concat(percent, "%") : "-".concat(percent, "%");
};
/**
 * @desc 格式化绝对值:适用于币种详情页，币种涨跌绝对值
 * @returns {number}
 * @Params {absoluteNum}
 * @method formatAbsolute(absoluteNum)
 */

var formatAbsolute = function formatAbsolute(absoluteNum) {
  if (!absoluteNum) return 0;
  var absolute = Math.abs(Number(absoluteNum));
  if (Object.is(absolute, NaN)) return 0;

  if (absolute < 10000000) {
    if (absolute < 0.1) {
      absolute = absolute.toPrecision(4);
    } else if (absolute >= 0.1 && absolute < 100) {
      absolute = absolute.toFixed(4);
    } else if (absolute >= 100 && absolute < 10000000) {
      absolute = absolute.toFixed(2);
    }

    return absoluteNum > 0 ? absolute : -absolute;
  } else {
    var decimalNum = "".concat(absolute).length - 1;
    return "".concat(absolute / Math.pow(10, decimalNum).toFixed(2), "e").concat(absoluteNum > 0 ? decimalNum : -decimalNum);
  }
};
/**
 * @desc js除法，避免任何数字除以0为Infinity
 * @returns {number}
 * @Params {divisor, dividend} divisor除数, dividend被除数
 * @method numDivision(divisor, dividend)
 */

var numDivision = function numDivision(divisor, dividend) {
  if (!dividend) return dividend;
  return dividend === 0 ? 0 : divisor / dividend;
};
/**
 * @desc 去除字符串两边空格
 * @returns {string}
 * @Params {string} string
 * @method trim(string)
 */

var trim = function trim(string) {
  return string.replace(/(^\s*)|(\s*$)/g, '');
};
/**
 * @desc 获取地址栏参数
 * @returns {value}
 * @Params {key}
 * @method queryParam(key)
 */

var queryParam = function queryParam(key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  var result = window.location.search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};
/**
 * @desc 自定义属性继承，去除route相关：history、location、match、staticContext、route、 dispatch
 * @returns {props}
 * @Params {props}
 * @method propsInherit(props)
 */

var propsInherit = function propsInherit(props) {
  var newsProps = {};

  for (var key in props) {
    if (key !== 'history' && key !== 'location' && key !== 'match' && key !== 'staticContext' && key !== 'route' && key !== 'dispatch') {
      newsProps[key] = props[key];
    }
  }

  return newsProps;
};
/**
 * @desc 把字符类数组转为数组
 * @returns {array} 数组
 * @Params {arrayString} 字符串类的数组
 * @method stringArray(arrayString)
 */

var stringArray = function stringArray(arrayString) {
  // 判断是否为json或数组字符串，再转换后判断是否为数组
  return isJson(arrayString) ? isArray(JSON.parse(arrayString)) ? JSON.parse(arrayString) : [] : [];
};
/**
 * @desc 获取字符类json数据某key的值
 * @returns {string} key的值
 * @Params {jsonString, key, defaultVal} jsonString字符类的json, key, defaultVal默认值
 * @method coverPcItemVal(jsonString, key, defaultVal)
 */

var stringJsonItem = function stringJsonItem(jsonString, key, defaultVal) {
  var initVal = defaultVal || ''; // 判断是否为json，再转换后判断是否有pc这个属性

  return isJson(jsonString) ? JSON.parse(jsonString)[key] || initVal : initVal;
};
/**
 * @desc 滚动条的滚动位置
 * @returns {top,  left}
 * @method scrollOffset()
 */

var scrollOffset = function scrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  } else {
    var el = document.scrollingElement || document.documentElement;
    return {
      left: el.scrollLeft,
      top: el.scrollTop
    };
  }
};
/**
 * @desc 可视区域高宽
 * @returns {width,  height}
 * @method windowOffset()
 */

var windowOffset = function windowOffset() {
  if (window.innerHeight) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  } else {
    if (document.compatMode === 1) {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeght
      };
    } else {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeght
      };
    }
  }
};
/**
 * @desc 获取元素相对于文档的绝对位置和高宽/getBoundingClientRect元素相对于可视区域的位置与高宽
 * @returns {top,  left}
 * @method elementOffset()
 */

var elementOffset = function elementOffset(ele) {
  return {
    top: ele.getBoundingClientRect().top + scrollOffset().top,
    left: ele.getBoundingClientRect().left + scrollOffset().left,
    bottom: ele.getBoundingClientRect().bottom + scrollOffset().top,
    right: ele.getBoundingClientRect().right + scrollOffset().left,
    height: ele.getBoundingClientRect().height,
    width: ele.getBoundingClientRect().width
  };
};
/**
 * @desc 获取鼠标相对于文档的坐标/离可视区域的用clientX+clientY
 * @returns {top,  left}
 * @method mouseOffset()
 */

var mouseOffset = function mouseOffset(event) {
  var e = event || window.event;
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  return {
    x: e.pageX || e.clientX + scrollX,
    y: e.pageY || e.clientY + scrollY
  };
};
/**
 * @desc window滚动，可判断滚动方向：上下
 * @method windowScroll(function(res){
 * res === 'down' / 'up'
 * })
 */

var windowScroll = function windowScroll(callback) {
  var beforeScrollTop = scrollOffset().top;

  var scrollFunc = function scrollFunc() {
    var afterScrollTop = scrollOffset().top;
    var delta = afterScrollTop - beforeScrollTop;
    if (delta === 0) return false;
    callback.call(_this, delta > 0 ? 'down' : 'up');
    beforeScrollTop = afterScrollTop;
  };

  window.addEventListener('scroll', scrollFunc, false);
  return scrollFunc;
};
/**
 * @desc 动画函数: 暂未实现贝塞尔, 恒定速度。不传time则直接系统默认动画
 * @params {from, to, speed, callback}
 * @method animation()
 */

var animation = function animation(params) {
  var from = params.from,
      to = params.to,
      time = params.time,
      callback = params.callback;
  if (typeof from === 'undefined') throw Error('from is required');
  if (typeof to === 'undefined') throw Error('to is required');
  if (!callback) throw Error('callback is required');
  var startNum = parseFloat(from);
  var endNum = parseFloat(to);
  var totalTime = parseFloat(time);
  var currentVal = startNum;
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  function getReqCallback() {
    // let count = 0 // 记录总共运行次数
    var start = null; // 标识是否第一次调用，首次复制给lastTimestamp

    var lastTimestamp = null; // 记录每次调用时间

    var delta = 0; // 相邻调用相隔时间

    return function req(timestamp) {
      var _this2 = this;

      if (time !== 0 && !time) {
        // 此逻辑是为了如果不传time，则系统自动动画。添加贝塞尔和恒定速度功能之后，此逻辑可删除
        var residueDistance = Math.abs(currentVal - endNum);
        var calNum = residueDistance > 1 && currentVal / 8 > 1 ? residueDistance < currentVal / 8 ? residueDistance : currentVal / 8 : 1;

        var recursionFunc = function recursionFunc() {
          callback.call(_this2, currentVal);
          if (currentVal === endNum || currentVal < 1) return false;
          requestAnimationFrame(req);
        };

        if (startNum > endNum) {
          currentVal = currentVal - calNum;

          if (currentVal >= endNum) {
            recursionFunc();
          }
        }

        if (startNum < endNum) {
          currentVal = currentVal + calNum;

          if (currentVal <= endNum) {
            recursionFunc();
          }
        }
      } else {
        // 获取每次调用时间间隔
        if (start === null) {
          start = timestamp;
          lastTimestamp = timestamp;
        }

        delta = timestamp - lastTimestamp; // count ++
        // @desc 计算每次帧刷新偏移量
        // 以秒s为计算单位
        // 速度speed = 里程totalDistance / 时间totalTime
        // 帧率fps = 1000 / delta:requestAnimationFrame调用时间间隔
        // 每次帧刷新变化数量everyTimeDistance: 速度/帧率

        var totalDistance = Math.abs(startNum - endNum);
        var speed = totalTime !== 0 ? totalDistance / totalTime * 1000 : 0;
        var fps = delta !== 0 ? 1000 / delta : 0;
        var everyTimeDistance = fps !== 0 && speed !== 0 ? speed / fps : 0; // 是否为第一次调用，不是则判断剩余可偏移值是否大于everyTimeDistance(大于则取everyTimeDistance否则取剩余值)，是则用everyTimeDistance

        var distance = Math.abs(currentVal - endNum) > everyTimeDistance ? everyTimeDistance : Math.abs(currentVal - endNum); // js中任何数除以0 都是 Infinity

        if (totalTime < delta) {
          currentVal = endNum;
          callback.call(this, currentVal);
          return;
        } // 递归调用


        var _recursionFunc = function _recursionFunc() {
          callback.call(_this2, currentVal);
          if (currentVal === endNum) return false;
          lastTimestamp = timestamp;
          requestAnimationFrame(req);
        }; // 开始数字>结束数字


        if (startNum > endNum) {
          currentVal = currentVal - distance;

          if (currentVal >= endNum) {
            _recursionFunc();
          }
        } // 开始数字<结束数字


        if (startNum < endNum) {
          currentVal = currentVal + distance;

          if (currentVal <= endNum) {
            _recursionFunc();
          }
        }
      }
    };
  }

  requestAnimationFrame(getReqCallback());
};
/**
 * @desc 到达dom元素位置
 * @params {} args: ($ele, time);
 * 传一个参数若数据类型为string/number则为time，否则为js选择器$ele;
 * 传俩参数($ele, time);
 * 传仨参数($ele, time, { add: -100 }更多的参数放在此对象中传递，add表示在$ele位置加或者减去一定的距离--避免共用头部遮挡等情况)
 * @method arriveAtDom($ele, time)
 * @eg arriveAtDom(document.getElementById('test'), 500, { add: -100 })
 */

var arriveAtDom = function arriveAtDom() {
  var $ele;
  var time;
  var additionalParams = {
    // 更多的参数放在此对象中传递
    add: false
  };

  if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string' || typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'number') {
    time = arguments.length <= 0 ? undefined : arguments[0];
  } else {
    $ele = arguments.length <= 0 ? undefined : arguments[0];
    time = arguments.length <= 1 ? undefined : arguments[1];
    if (arguments.length <= 2 ? undefined : arguments[2]) additionalParams = Object.assign(additionalParams, arguments.length <= 2 ? undefined : arguments[2]);
  }

  animation({
    from: document.documentElement.scrollTop || document.body.scrollTop,
    to: $ele ? additionalParams.add ? elementOffset($ele).top + additionalParams.add : elementOffset($ele).top : 0,
    time: time,
    callback: function callback(currentVal) {
      document.documentElement.scrollTop = currentVal;
      document.body.scrollTop = currentVal;
    }
  });
};
/**
 * @desc 深度比较object是否相等
 * @params {x, y}
 * @method deepCompare(x, y)
 */

var deepCompare = function deepCompare(x, y) {
  var i;
  var l;
  var leftChain;
  var rightChain;

  function compare2Objects(x, y) {
    var p; // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true

    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') return true; // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes

    if (x === y) return true; // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes

    if (typeof x === 'function' && typeof y === 'function' || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) {
      return x.toString() === y.toString();
    } // At last checking prototypes as good as we can


    if (!(x instanceof Object && y instanceof Object)) return false;
    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) return false;
    if (x.constructor !== y.constructor) return false;
    if (x.prototype !== y.prototype) return false; // Check for infinitive linking loops

    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) return false; // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance

    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(y[p]) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(x[p])) {
        return false;
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(y[p]) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(x[p])) {
        return false;
      }

      switch (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(x[p])) {
        case 'object':
        case 'function':
          leftChain.push(x);
          rightChain.push(y);
          if (!compare2Objects(x[p], y[p])) return false;
          leftChain.pop();
          rightChain.pop();
          break;

        default:
          if (x[p] !== y[p]) return false;
          break;
      }
    }

    return true;
  }

  if (arguments.length < 1) {
    return true; // Die silently? Don't know how to handle such case, please help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = arguments.length; i < l; i++) {
    leftChain = []; // Todo: this can be cached

    rightChain = [];
    if (!compare2Objects(arguments[0], arguments[i])) return false;
  }

  return true;
};
/**
 * @desc 深度合并对象immutable
 * @params {...objects}
 * @return object
 * @method deepMerge(...objects)
 */

var deepMerge = function deepMerge() {
  var isObject = function isObject(obj) {
    return obj && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj) === 'object';
  };

  for (var _len = arguments.length, objects = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    objects[_key2] = arguments[_key2];
  }

  return objects.reduce(function (prev, obj) {
    Object.keys(obj).forEach(function (key) {
      var pVal = prev[key];
      var oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat.apply(pVal, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(oVal));
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = deepMerge(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
};
/**
 * @desc 快讯标题截取
 * @params params = item 后台返回快讯obj
 * @return {title, content}
 */

var flashRecognize = function flashRecognize(item) {
  var title = '';
  var content = item.content;

  if (!item.title) {
    var startIndex = item.content.indexOf('【') === -1 ? 0 : item.content.indexOf('【') + 1;
    var endIndex = item.content.indexOf('】') === -1 ? 0 : item.content.indexOf('】');
    title = item.content.substring(startIndex, endIndex);
    content = item.content.substring(endIndex + 1);
  } else {
    title = item.title;
    content = item.content;
  }

  return {
    title: title,
    content: content
  };
};
/**
 * @desc 获取数组最大最小值
 * @params {arr}
 * @return {max, min}
 */

var arrayMaxMin = function arrayMaxMin(arr) {
  return {
    max: Math.max.apply(null, arr),
    min: Math.min.apply(null, arr)
  };
};
/**
 * @desc 将科学计数法转换为小数
 * @params {num}
 * @return {num}
 */

var toNonExponential = function toNonExponential(num) {
  var newNum = Number(num);
  var m = newNum.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
  return newNum.toFixed(Math.max(0, (m[1] || '').length - m[2]));
};
/**
 * @desc 字符串截取，一个中文和中文字符占2个字节
 * @params {text, length字节数}
 * @method textOverflow(text, length)
 * */

var textOverflow = function textOverflow(text, length) {
  if (text.replace(/[^\x00-\xff]/g, 'aa').length <= length) {
    return text;
  } else {
    var _length = 0;
    var outputText = '';

    for (var i = 0; i < text.length; i++) {
      if (/[^\x00-\xff]/.test(text[i])) {
        _length += 2;
      } else {
        _length += 1;
      }

      if (_length > length) {
        break;
      } else {
        outputText += text[i];
      }
    }

    return outputText + '...';
  }
};
/**
 * @desc 字符串长度
 * @params {text}
 * @method textLength(text)
 * */

var textLength = function textLength(text) {
  return text.replace(/[^\x00-\xff]/g, 'aa').length;
};
/**
 * @desc 对查询关键字中的特殊字符进行编码
 * @params {key}
 * @method encodeSearchKey(key)
 * */

var encodeSearchKey = function encodeSearchKey(key) {
  if (!key) return;
  var encodeArr = [{
    code: '%',
    encode: '%25'
  }, {
    code: '?',
    encode: '%3F'
  }, {
    code: '#',
    encode: '%23'
  }, {
    code: '&',
    encode: '%26'
  }, {
    code: '=',
    encode: '%3D'
  }];
  return key.replace(/[%?#&=]/g, function ($, index, str) {
    for (var _i2 = 0, _encodeArr = encodeArr; _i2 < _encodeArr.length; _i2++) {
      var k = _encodeArr[_i2];
      if (k.code === $) return k.encode;
    }
  });
};
/**
 * @desc 生成uuid 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier)
 * @method uuid()
 * */

var uuid = function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
/**
 * @desc 生成uuid，自定义长度与基数
 * @params {len, radix} len长度, radix基数
 * @method uuidDiy(len, radix)
 * @eg
 // 8 character ID (base=2)
 uuid(8, 2) => "01001010"
 // 8 character ID (base=10)
 uuid(8, 10) => "47473046"
 // 8 character ID (base=16)
 uuid(8, 16) => "098F4D35"
 * */

var uuidDiy = function uuidDiy(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  var i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r; // rfc4122 requires these characters

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4'; // Fill in random data. At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return uuid.join('');
};
/**
 * @desc 跳转到url。注：只能用于前端跳转，添加cdn后后端跳转不起作用
 * @params {url需要跳转到url}
 * @method redirectUrl(url)直接跳转，不管pc还是移动,
 * redirectUrl('mob', url)当mob链接被pc访问时跳转，
 * redirectUrl('pc', url)当pc链接被mob访问时跳转
 */

var redirectUrl = function redirectUrl() {
  if (typeof window === 'undefined') return;

  if (arguments.length === 1) {
    window.location.href = arguments[0];
  } else {
    if (arguments[0] === 'mob' && isPc()) window.location.href = arguments[1];
    if (arguments[0] === 'pc' && !isPc()) window.location.href = arguments[1];
  }
};
/**
 * @desc 移动计算宽高
 * @Params {Value}
 * @method rem(Value) // Value像素值
 */

var rem = function rem($pixelValue) {
  return $pixelValue / 24 + 'rem';
};
/**
 * @desc 设置+获取+删除cookie
 * @Params {Value}
 * @method
 * cookie.set(key, val, {expires, domain})
 * cookie.get(key)
 * cookie.del(key)
 */

var cookie = {
  set: function set(key, val, args) {
    var date = new Date(); // 获取当前时间

    var expiresDays = args.expires; // 将date设置为n天以后的时间

    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); // 格式化为cookie识别的时间

    document.cookie = key + '=' + val + ';expires=' + date.toGMTString() + ';domain=' + args.domain; // 设置cookie
  },
  get: function get(key) {
    /* 获取cookie参数 */
    var cookies = document.cookie.replace(/[ ]/g, ''); // 获取cookie，并且将获得的cookie格式化，去掉空格字符

    var arrCookie = cookies.split(';'); // 将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中

    var tips; // 声明变量tips

    for (var i = 0; i < arrCookie.length; i++) {
      // 使用for循环查找cookie中的tips变量
      var arr = arrCookie[i].split('='); // 将单条cookie用"等号"为标识，将单条cookie保存为arr数组

      if (key === arr[0]) {
        // 匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
        tips = arr[1]; // 将cookie的值赋给变量tips

        break;
      }
    }

    return tips;
  },
  del: function del(key) {
    var date = new Date(); // 获取当前时间

    date.setTime(date.getTime() - 10000); // 将date设置为过去的时间

    document.cookie = key + '=v; expires =' + date.toGMTString(); // 设置cookie
  }
  /**
   * @desc 各个链接域名，以此为出口
   */

};
var nodeEnv = "production";
var envDev = nodeEnv === 'development';
var envTest = nodeEnv === 'test';
var mixUrl = {
  en: function en(path) {
    return "http://www.marsfinance.net/".concat(path || '');
  },
  quanter: function quanter(path) {
    return "http://quanter.marsbit.co".concat(path || '');
  },
  baike: function baike(path) {
    return "http://baike.marsbit.co".concat(path || '');
  },
  dappspy: function dappspy(path) {
    return "https://www.dappspy.com".concat(path || '');
  },
  bbs: function bbs(path) {
    return "http://bbs.marsbit.co".concat(path || '');
  },
  mclouds: function mclouds(path) {
    return "https://www.mclouds.io".concat(path || '');
  },
  cococoin: function cococoin(path) {
    return "https://www.cococoin.com/".concat(path || '');
  },
  trade: function trade(path) {
    return "https://trade.marsbit.co/".concat(path || '');
  },
  cq: function cq(path) {
    return "http://www.cryptoquanter.com".concat(path || '');
  },
  clab: function clab(path) {
    return "http://consensus-lab.com".concat(path || '');
  },
  mp: function mp(path, req) {
    // 2021-11-26 marsbit.co域名备灾临时代码
    var hostPrd = "https://mp.marsshare.cc";
    return hostPrd;
  },
  zt: function zt(path) {
    return "".concat(envDev ? Object(_config_config__WEBPACK_IMPORTED_MODULE_8__["ip"])(3008) : envTest ? 'http://zt.marslib.com' : 'https://zt.marsbit.co').concat(path || '');
  },
  m: function m(path, req) {
    var hostPrd = 'https://m.marsshare.cc'; // if (req && req.hostname.indexOf('marstelegram') > -1) {
    //     hostPrd = 'https://m.marstelegram.com'
    // }
    // if (req && req.hostname.indexOf('marsbit.cc') > -1) {
    //     hostPrd = 'https://m.marsbit.cc'
    // }
    // if (req && req.hostname.indexOf('marsshare.cc') > -1) {
    //   hostPrd = 'https://m.marsshare.cc'
    // }
    // if (req && req.hostname.indexOf('marsbit.info') > -1) {
    //   hostPrd = 'https://m.marsbit.info'
    // }
    // const hostPrd = req && req.hostname.indexOf('marstelegram') > 1 ? 'https://m.marstelegram.com' : 'https://m.marsbit.co'

    return "".concat(envDev ? Object(_config_config__WEBPACK_IMPORTED_MODULE_8__["ip"])(3012) : envTest ? 'http://m.marslib.com' : hostPrd).concat(path || '');
  },
  main: function main(path, req) {
    // 2021-11-26 marsbit.co域名备灾临时代码
    var hostPrd = 'https://www.marsshare.cc'; // if (req && req.hostname.indexOf('marstelegram') > -1) {
    //     hostPrd = 'https://www.marstelegram.com'
    // }
    // if (req && req.hostname.indexOf('marsbit.cc') > -1) {
    //     hostPrd = 'https://www.marsbit.cc'
    // }
    // if (req && req.hostname.indexOf('marsshare.cc') > -1) {
    //   hostPrd = 'https://www.marsshare.cc'
    // }
    // if (req && req.hostname.indexOf('marsbit.info') > -1) {
    //   hostPrd = 'https://www.marsbit.info'
    // }
    // const hostPrd = req && req.hostname.indexOf('marstelegram') > 1 ? 'https://www.marstelegram.com' : 'https://www.marsbit.co'

    return "".concat(envDev ? Object(_config_config__WEBPACK_IMPORTED_MODULE_8__["ip"])(3014) : envTest ? 'http://www.marslib.com' : hostPrd).concat(path || '');
  },
  news: function news(path, req) {
    // 2021-11-26 marsbit.co域名备灾临时代码
    var hostPrd = 'https://news.marsshare.cc'; // if (req && req.hostname.indexOf('marstelegram') > -1) {
    //     hostPrd = 'https://news.marstelegram.com'
    // }
    // if (req && req.hostname.indexOf('marsbit.cc') > -1) {
    //     hostPrd = 'https://news.marsbit.cc'
    // }
    // if (req && req.hostname.indexOf('marsshare.cc') > -1) {
    //   hostPrd = 'https://news.marsshare.cc'
    // }
    // if (req && req.hostname.indexOf('marsbit.info') > -1) {
    //   hostPrd = 'https://news.marsbit.info'
    // }
    // const hostPrd = req && req.hostname.indexOf('marstelegram') > 1 ? 'https://news.marstelegram.com' : 'https://news.marsbit.co'

    return "".concat(envDev ? Object(_config_config__WEBPACK_IMPORTED_MODULE_8__["ip"])(3012) : envTest ? 'http://news.marslib.com' : hostPrd).concat(path || '');
  },
  token: function token(path) {
    return "".concat(envDev ? Object(_config_config__WEBPACK_IMPORTED_MODULE_8__["ip"])(3018) : envTest ? 'http://token.marslib.com' : 'https://token.marsbit.co').concat(path || '');
  }
  /**
   * @desc 全站默认TDK
   */

};
var webTdk = {
  title: 'MarsBit—聚焦全球区块链科技前沿动态',
  keywords: '区块链,区块链新闻,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,区块链活动,比特币,BTC,比特币价格,BTC价格,POWER,POWER大会,MarsBit',
  description: 'MarsBit是领先的区块链产业信息服务平台，由资深区块链团队倾力打造，为区块链爱好者提供全球最新的区块链新闻资讯'
  /**
   * @desc 火星24存储cookie名称，公用cookie全部存以此为出口。
   */

};
var cookiesName = {
  nickName: 'hx24_nickName',
  passportId: 'hx24_passportId',
  iconUrl: 'hx24_iconUrl',
  realAuth: 'hx24_realAuth',
  faceAuth: 'hx24_faceAuth',
  intro: 'hx24_intro',
  token: 'hx24_token',
  phone: 'hx24_phone',
  userCookieUuid: 'hx24_userCookieUuid',
  eventId: 'hx24_eventId',
  preEventId: 'hx24_preEventId',
  deviceUuid: 'hx24_deviceUuid',
  traceId: 'hx24_traceId',
  deviceId: 'hx24_deviceId',
  festival: 'hx24_festivalCloseTime',
  language: 'marsbit_lang'
  /**
   * @desc 段落关键字高亮显示
   * @params {content, keyword, color} content段落内容, keyword关键字, color高亮颜色(非必填 默认为红色#e61e1e)
   * @method keyLight(content, keyword)
   * @eg <h1 dangerouslySetInnerHTML={{ __html: keyLight('ababab', 'ba') }}/>
   */

};
var keyLight = function keyLight(content, keyword, color) {
  var bgColor = color || '#e61e1e';
  var a = content.toLowerCase();

  if (isArray(keyword)) {
    var newContent = content;
    keyword.map(function (item) {
      var regEx = new RegExp(item, 'gi');

      if (regEx.test(newContent)) {
        newContent = newContent.replace(regEx, '<span style="color:' + bgColor + '">$&</span>');
      }
    });
    return newContent;
  } else {
    var b = keyword.toLowerCase();
    var indexof = a.indexOf(b);
    var c = indexof > -1 ? content.substr(indexof, keyword.length) : '';
    var sKey = "<span style='color: ".concat(bgColor, "'>").concat(c, "</span>");
    var regEx = new RegExp(keyword, 'gi');
    return content.replace(regEx, sKey);
  }
};
/**
 * @desc 美元单位换算
 * @params {number} 数值
 */

var getUnit = function getUnit(number) {
  var str = '';

  if (number !== '') {
    var num = Number(number);

    if (num >= 1000000000) {
      str = '$ ' + (num / 1000000000).toFixed(2) + 'B';
    } else if (num >= 1000000) {
      str = '$ ' + (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
      str = '$ ' + (num / 1000000).toFixed(2) + 'K';
    } else if (num < 0) {
      str = '— —';
    } else {
      str = '$ ' + num.toFixed(2);
    }
  } else {
    str = '';
  }

  return str;
};
/**
 * @desc 数字格式化 (3位加一个逗号 eg:   333,333,333)
 * @returns {string}
 */

var addComma = function addComma(num) {
  var number = (num || 0).toString();
  var result = '';

  while (number.length > 3) {
    result = ',' + number.slice(-3) + result;
    number = number.slice(0, number.length - 3);
  }

  if (number) {
    result = number + result;
  }

  return result;
};
/**
 * @desc 替换文本中的链接文字为超链接
 * @returns {html}
 */

var urlToLink = function urlToLink(str) {
  var re = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  str = str.replace(re, function (website) {
    return "<a href='" + website + "' target='_blank'>" + website + '</a>';
  });
  return str;
};
/** @desc 获取文件扩展名 */

var fileExtension = function fileExtension(fileUrl) {
  var singfileArray = fileUrl.split('.');
  return singfileArray[singfileArray.length - 1];
};
/**
 * @desc 是否支持自动播放
 * @returns {string}
 */

var isAutoplaySupported = function isAutoplaySupported(callback) {
  // Is the callback a function?
  if (callback && typeof callback !== 'function') {
    console.log('isAutoplaySupported: Callback must be a function!');
    return false;
  } // Check if sessionStorage exist for autoplaySupported,
  // if so we don't need to check for support again


  if (!sessionStorage.autoplaySupported) {
    // Create video element to test autoplay
    var video = document.createElement('video');
    video.autoplay = true;
    video.src = 'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE=';
    video.load();
    video.style.display = 'none';
    video.playing = false;
    video.play(); // Check if video plays

    video.onplay = function () {
      this.playing = true;
    }; // Video has loaded, check autoplay support


    video.oncanplay = function () {
      var res = true;

      if (video.playing) {
        sessionStorage.autoplaySupported = 'true';
        res = true;
      } else {
        sessionStorage.autoplaySupported = 'false';
        res = false;
      }

      if (callback) callback(res);
    };
  } else {
    // We've already tested for support
    // use sessionStorage.autoplaySupported
    var res = true;

    if (sessionStorage.autoplaySupported === 'true') {
      res = true;
    } else {
      res = false;
    }

    if (callback) callback(res);
  }
};
/**
 * @desc 复制文字内容到粘贴板
 * @param {String} text 需要复制的内容
 * @return {Boolean} 复制成功:true或者复制失败:false  执行完函数后，按ctrl + v试试
*/

var execCommandCopy = function execCommandCopy(text) {
  var textareaEl = document.createElement('textarea');
  textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘

  textareaEl.value = text;
  document.body.appendChild(textareaEl);
  textareaEl.select();
  var res = document.execCommand('copy');
  document.body.removeChild(textareaEl);
  console.log('复制成功');
  return res;
}; // 获取字符长度

var GetLength = function GetLength(str) {
  if (typeof str !== 'string') return 0;
  var realLength = 0;
  var len = str.length;
  var charCode = -1;

  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);

    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      realLength += 2;
    }
  }

  return realLength;
};
/**
 * @desc 是否是 naga.one || naga.is
 */

var nagacomlist = ['www.naga.one', 'www.naga.is', 'm.naga.one']; // , '10.0.8.138', 'www.marslib.com'

var naGacom = function naGacom(req) {
  return req && typeof window === 'undefined' ? nagacomlist.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : nagacomlist.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 是否是 m.marsbit.co || www.marsbit.co || new.marsbit.co
 */

var marsbitcoHost = ['m.marsbit.co', 'www.marsbit.co', 'news.marsbit.co']; // export const isQuattroWallet = (req) => true

var isMarsbitco = function isMarsbitco(req) {
  return req && typeof window === 'undefined' ? marsbitcoHost.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : marsbitcoHost.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 是否是大会域名 power.marsbit.co
 */

var powerHost = ['power.marsbit.co']; // export const isQuattroWallet = (req) => true

var isPowersite = function isPowersite(req) {
  return req && typeof window === 'undefined' ? powerHost.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : powerHost.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 是否是 m.marsbit.cc || www.marsbit.cc || new.marsbit.cc
 */

var marsbitccHost = ['m.marsbit.cc', 'www.marsbit.cc', 'news.marsbit.cc', '10.0.8.138']; // export const isQuattroWallet = (req) => true

var isMarsbitcc = function isMarsbitcc(req) {
  return req && typeof window === 'undefined' ? marsbitccHost.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : marsbitccHost.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 是否是 marsbit.info
 */

var marsbitinfoHost = ['m.marsbit.info', 'www.marsbit.info', 'news.marsbit.info']; // export const isQuattroWallet = (req) => true

var isMarsbitinfo = function isMarsbitinfo(req) {
  return req && typeof window === 'undefined' ? marsbitinfoHost.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : marsbitinfoHost.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 是否是 marsbit.info
 */

var marsshareHost = ['m.marsshare.cc', 'www.marsshare.cc', 'news.marsshare.cc']; // export const isQuattroWallet = (req) => true

var isMarsshare = function isMarsshare(req) {
  return req && typeof window === 'undefined' ? marsshareHost.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : marsshareHost.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 是否是 m.marstelegram.com || www.marstelegram.com || new.marstelegram.com
 */

var marstelegramHost = ['m.marstelegram.com', 'www.marstelegram.com', 'news.marstelegram.com']; // export const isQuattroWallet = (req) => true

var isMarstelegram = function isMarstelegram(req) {
  return req && typeof window === 'undefined' ? marstelegramHost.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : marstelegramHost.indexOf(window.location.hostname) > -1;
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  clearLoginCookies: clearLoginCookies,
  ajaxSignature: ajaxSignature,
  axiosAjax: axiosAjax,
  websocket: websocket,
  openNewWindow: openNewWindow,
  uerserAgent: uerserAgent,
  isPc: isPc,
  isIos: isIos,
  isIphoneX: isIphoneX,
  isAndroid: isAndroid,
  isWechat: isWechat,
  isHxApp: isHxApp,
  isPhone: isPhone,
  isPsd: isPsd,
  isEmail: isEmail,
  isNum: isNum,
  isJson: isJson,
  isArrayBuffer: isArrayBuffer,
  isArray: isArray,
  isObject: isObject,
  isToday: isToday,
  isThisYear: isThisYear,
  formatNum: formatNum,
  formatAbsolute: formatAbsolute,
  formatPrice: formatPrice,
  formatTotal: formatTotal,
  formatPercent: formatPercent,
  formatTime: formatTime,
  formatPublishTime: formatPublishTime,
  numDivision: numDivision,
  trim: trim,
  toNonExponential: toNonExponential,
  encodeSearchKey: encodeSearchKey,
  dataURLtoBlob: dataURLtoBlob,
  sortBy: sortBy,
  queryParam: queryParam,
  propsInherit: propsInherit,
  stringArray: stringArray,
  stringJsonItem: stringJsonItem,
  scrollOffset: scrollOffset,
  windowOffset: windowOffset,
  elementOffset: elementOffset,
  mouseOffset: mouseOffset,
  windowScroll: windowScroll,
  animation: animation,
  arriveAtDom: arriveAtDom,
  deepCompare: deepCompare,
  deepMerge: deepMerge,
  webTdk: webTdk,
  mixUrl: mixUrl,
  cookiesName: cookiesName,
  textOverflow: textOverflow,
  textLength: textLength,
  arrayMaxMin: arrayMaxMin,
  flashRecognize: flashRecognize,
  flashTime: flashTime,
  redirectUrl: redirectUrl,
  rem: rem,
  uuid: uuid,
  uuidDiy: uuidDiy,
  logReport: logReport,
  cookie: cookie,
  keyLight: keyLight,
  getUnit: getUnit,
  addComma: addComma,
  isAutoplaySupported: isAutoplaySupported,
  urlToLink: urlToLink,
  fileExtension: fileExtension,
  execCommandCopy: execCommandCopy,
  GetLength: GetLength,
  naGacom: naGacom,
  isMarsbitco: isMarsbitco,
  isMarsbitcc: isMarsbitcc,
  isMarsshare: isMarsshare,
  isMarsbitinfo: isMarsbitinfo,
  isMarstelegram: isMarstelegram,
  isPowersite: isPowersite
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIONERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GETFRIENDLYLINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GETPARTNERLINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GETAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GETADIMPLANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GATHERPUSH; });
// action错误处理
var ACTIONERROR = 'action-error'; // 获取友情链接

var GETFRIENDLYLINKS = 'get-friendly-links'; // 获取合作伙伴

var GETPARTNERLINKS = 'get-partner-links'; // 获取广告

var GETAD = 'get-ad'; // 获取嵌入广告

var GETADIMPLANT = 'get-ad-implant'; // 统计事件上报

var GATHERPUSH = 'gather-push';

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(43);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// CONCATENATED MODULE: ./_multiappsharing/components/Toast/ToastBox.js







var ToastBox_ToastBox =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ToastBox, _Component);

  function ToastBox() {
    var _this;

    classCallCheck_default()(this, ToastBox);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ToastBox).call(this));

    _this.getNoticeKey = function () {
      var notices = _this.state.notices;
      return "notice-".concat(new Date().getTime(), "-").concat(notices.length);
    };

    _this.removeNotice = function (key) {
      var notices = _this.state.notices;

      _this.setState({
        notices: notices.filter(function (notice) {
          if (notice.key === key) {
            if (notice.onClose) setTimeout(notice.onClose, _this.transitionTime);
            return false;
          }

          return true;
        })
      });
    };

    _this.addNotice = function (notice) {
      var notices = _this.state.notices;
      notice.key = _this.getNoticeKey(); // notices.push(notice) // 展示所有的提示

      notices[0] = notice; // 仅展示最后一个提示

      _this.setState({
        notices: notices
      });

      if (notice.duration > 0) {
        setTimeout(function () {
          _this.removeNotice(notice.key);
        }, notice.duration);
      }

      return function () {
        _this.removeNotice(notice.key);
      };
    };

    _this.transitionTime = 300;
    _this.state = {
      notices: []
    };
    return _this;
  }

  createClass_default()(ToastBox, [{
    key: "render",
    value: function render() {
      var notices = this.state.notices;
      var icons = {
        info: 'toast-info',
        success: 'toast-success',
        error: 'toast-error',
        loading: 'toast-loading'
      };
      return external_react_default.a.createElement("div", {
        className: "toast-wrapper"
      }, notices.map(function (notice) {
        return external_react_default.a.createElement("div", {
          className: "toast-mask",
          key: notice.key
        }, external_react_default.a.createElement("div", {
          className: "toast-content"
        }, external_react_default.a.createElement("div", {
          className: "toast-icon ".concat(icons[notice.type])
        }), external_react_default.a.createElement("div", {
          className: "toast-text",
          style: {
            display: notice.content === '' ? 'none' : ''
          }
        }, notice.content)));
      }));
    }
  }]);

  return ToastBox;
}(external_react_["Component"]);

/* harmony default export */ var Toast_ToastBox = (ToastBox_ToastBox);
// CONCATENATED MODULE: ./_multiappsharing/components/Toast/index.js







function createNotification() {
  return _createNotification.apply(this, arguments);
}

function _createNotification() {
  _createNotification = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2() {
    var windowLoaded, div, notification;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            windowLoaded = false;

            window.onload = function () {
              windowLoaded = true;
            };

            _context2.next = 4;
            return new Promise(function (resolve, reject) {
              if (windowLoaded) {
                resolve(true);
              } else {
                var timer = setInterval(function () {
                  if (windowLoaded) return;
                  clearInterval(timer);
                  resolve(true);
                }, 10);
              }
            });

          case 4:
            div = document.createElement('div');
            document.body.appendChild(div);
            notification = external_react_dom_default.a.render(external_react_default.a.createElement(Toast_ToastBox, null), div);
            return _context2.abrupt("return", {
              addNotice: function addNotice(notice) {
                return notification.addNotice(notice);
              },
              destroy: function destroy() {
                external_react_dom_default.a.unmountComponentAtNode(div);
                document.body.removeChild(div);
              }
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createNotification.apply(this, arguments);
}

var Toast_notification;

var Toast_notice =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(type, content) {
    var duration,
        onClose,
        _args = arguments;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            duration = _args.length > 2 && _args[2] !== undefined ? _args[2] : 2000;
            onClose = _args.length > 3 ? _args[3] : undefined;

            if (Toast_notification) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return createNotification();

          case 5:
            Toast_notification = _context.sent;

          case 6:
            return _context.abrupt("return", Toast_notification.addNotice({
              type: type,
              content: content,
              duration: duration,
              onClose: onClose
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function notice(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var Toast = __webpack_exports__["a"] = ({
  info: function info(content, duration, onClose) {
    return Toast_notice('info', content, duration, onClose);
  },
  success: function success() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作成功';
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return Toast_notice('success', content, duration, onClose);
  },
  error: function error(content, duration, onClose) {
    return Toast_notice('error', content, duration, onClose);
  },
  loading: function loading() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return Toast_notice('loading', content, duration, onClose);
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./_multiappsharing/redux/constants/news.js
// 获取新闻导航channelId
var GETNEWSCHANNELID = 'get-news-channel-id'; // 获取热门新闻

var GETHOTNEWS = 'get-hot-news'; // 新闻新闻列表

var GETNEWSLIST = 'get-news-list'; // 获取跟多新闻

var GETMORENEWS = 'get-more-news'; // 获取作者信息

var GETAUTHORINFO = 'get-author-info'; // 获取作者列表

var GETAUTHORLIST = 'get-author-list'; // 获取专题列表

var GETFEATURELIST = 'get-feature-list'; // 获取 更多的专题列表

var GETMOREFEATURELIST = 'get-more-feature-list'; // 获取24H热门新闻

var GET24HNEWSLIST = 'get-24h-news-list';
// CONCATENATED MODULE: ./_multiappsharing/redux/actions/news.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return news_attentionAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return news_getFeatureList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return news_getFeatureRecommendList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return news_getAuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return news_getAuthorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return news_getNewsChannelId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return news_getHotNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return news_getNewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return news_get24hHotNews; });





/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 关注作者
 * @Params {params, type} params = {passportid, token, authorId}, type: delete取消, add关注
 */

var news_attentionAuthor = function attentionAuthor(params, type) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'complexpost',
    url: "/info/follow/author/".concat(type),
    params: params,
    noLoading: true
  });
};
/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取专题列表
 * @Params {params} params = {currentPage, pageSize, type: 5最新6推荐, identityAuth 不传值是全部-0其他-1媒体-2KOL-3投研-4项目-5行情}
 * @Params {isMore} isMore = 'isMore' 判断是否为移动端加载更多的参数
 */

var news_getFeatureList = function getFeatureList(params, isMore) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/topic/gettopicpage',
                  params: params
                });

              case 3:
                data = _context.sent;

                if (isMore) {
                  dispatch({
                    type: GETMOREFEATURELIST,
                    data: data.obj
                  });
                } else {
                  dispatch({
                    type: GETFEATURELIST,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取专题推荐列表
 * @Params {params} params = {currentPage, pageSize}
 */

var news_getFeatureRecommendList = function getFeatureRecommendList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/topic/web/recommend',
                  params: params
                });

              case 3:
                data = _context2.sent;
                dispatch({
                  type: GETFEATURELIST,
                  data: data.obj
                });
                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取作者信息
 * @Params {params} params = {passportId作者id, myPassportId后台通过此参数判断关注与否}
 */

var news_getAuthorInfo = function getAuthorInfo(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/getauthorinfo',
                  params: params
                });

              case 3:
                data = _context3.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORINFO,
                    data: data.obj
                  });
                }

                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context3.t0
                });
                throw new Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取作者列表
 * @Params {params} params = { type:4, currentPage, pageSize, myPassportId}
 */

var news_getAuthorList = function getAuthorList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/author/list',
                  params: params,
                  noLoading: true
                });

              case 3:
                data = _context4.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORLIST,
                    data: data.obj
                  });
                }

                return _context4.abrupt("return", data);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context4.t0
                });
                throw new Error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取新闻导航channelId
 */

var news_getNewsChannelId = function getNewsChannelId(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/channels',
                  params: params
                });

              case 3:
                data = _context5.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETNEWSCHANNELID,
                    data: data.obj
                  });
                }

                return _context5.abrupt("return", data);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context5.t0
                });
                throw new Error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取热门新闻
 * @Params {params} params = {lastDays, readCounts, newsCounts}
 */

var news_getHotNews = function getHotNews(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/hotnews',
                  params: params
                });

              case 3:
                data = _context6.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETHOTNEWS,
                    data: data.obj
                  });
                }

                return _context6.abrupt("return", data);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context6.t0
                });
                throw new Error(_context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取新闻列表
 * @Params {params, urlType, loadType}
 * urlType 获取根据: channel(主页channelId), author(作者详情页authorId), tags(tags与feature页面)
 * loadType默认数据还是加载更多,任意字符串如'more'
 * 对应组件: components/NewsList
 * urlType = channel => params = {currentPage, pageSize, channelId, refreshTime},
 * urlType = author => params = {currentPage, pageSize, passportId, status:1},
 * urlType = tags => params = {currentPage, pageSize, tags},
 */

var news_getNewsList = function getNewsList(params, urlType, loadType) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7(dispatch) {
        var url, channelUrl, data;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                url = '';
                channelUrl = '/info/news/shownews';
                _context7.t0 = urlType;
                _context7.next = _context7.t0 === 'author' ? 6 : _context7.t0 === 'tags' ? 8 : _context7.t0 === 'channel' ? 10 : 10;
                break;

              case 6:
                url = '/info/news/showcolumnlist';
                return _context7.abrupt("break", 11);

              case 8:
                url = '/info/news/relatednews1';
                return _context7.abrupt("break", 11);

              case 10:
                url = channelUrl;

              case 11:
                _context7.next = 13;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: url,
                  params: params
                });

              case 13:
                data = _context7.sent;

                if (data.code === 1) {
                  if (loadType === 'more') {
                    dispatch({
                      type: GETMORENEWS,
                      data: data.obj
                    });
                  } else {
                    dispatch({
                      type: GETNEWSLIST,
                      data: data.obj
                    });
                  }
                }

                return _context7.abrupt("return", data);

              case 18:
                _context7.prev = 18;
                _context7.t1 = _context7["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context7.t1
                });
                throw new Error(_context7.t1);

              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 18]]);
      }));

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取24H热门新闻
 * @Params {params} params = {lastDays, readCounts, newsCounts}
 */

var news_get24hHotNews = function get24hHotNews(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/news/recommend',
                  params: params
                });

              case 3:
                data = _context8.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GET24HNEWSLIST,
                    data: data.obj
                  });
                }

                return _context8.abrupt("return", data);

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context8.t0
                });
                throw new Error(_context8.t0);

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 8]]);
      }));

      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./_multiappsharing/redux/constants/login.js
// 获取用户信息
var GETUSERINFO = 'get-user-info'; // 登录框显示状态

var LOGINSTATE = 'login-state'; // 昵称框显示状态

var RENAMESTATE = 'rename-state';
// CONCATENATED MODULE: ./_multiappsharing/redux/actions/login.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return login_sendLogin; });
/* unused harmony export graphCodeUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getWechatQrCodeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return login_isRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return login_getSmsCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return login_getWechatUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login_bindPhoneOld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login_bindPhoneNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login_getUpdateUserNick; });
/* unused harmony export getUserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return login_loginShowHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return login_renameShowHide; });




var _require = __webpack_require__(23),
    apiHost = _require.apiHost;
/* -------------------------------ajax-pure------------------------------- */

/**
 * @desc /login登录 /register注册 /getbackuserpw找回密码 /weixinbindnew绑定号码
 * @Params {lastUrl, params} lastUrl, params = {verifcategory: 1注册，绑定手机号码， 2找回密码, 3短信登录, ...其它}
 */


var login_sendLogin = function sendLogin(lastUrl, params) {
  return new Promise(function (resolve, reject) {
    Object(_multiappsharing_public["d" /* axiosAjax */])({
      type: 'post',
      url: "/passport/account/v2".concat(lastUrl),
      params: objectSpread_default()({
        platForm: 'pc'
      }, params),
      urlSearchParams: true,
      noLog: [-7, -3],
      contentType: 'application/x-www-form-urlencoded'
    }).then(function (res) {
      if (res.code) {
        resolve(res);
      } else {
        throw new Error("\u8D26\u53F7\u767B\u5F55/\u77ED\u4FE1\u767B\u9646/\u6CE8\u518C/\u627E\u56DE\u5BC6\u7801: ".concat(JSON.stringify(res)));
      }
    })["catch"](function (err) {
      reject(err);
    });
  });
};
/**
 * @desc 图形验证码地址，直接设置img的src地址为此地址
 */

var login_graphCodeUrl = function graphCodeUrl() {
  return "".concat(apiHost, "/passport/account/getGraphCode?sign=").concat(Object(_multiappsharing_public["b" /* ajaxSignature */])(), "&rnd=").concat(Math.random());
};
/**
 * @desc 获取微信二维码地址
 */

var getWechatQrCodeUrl = function getWechatQrCodeUrl() {
  return 'https://open.weixin.qq.com/connect/qrconnect?appid=wxd2560ca609e45df6&redirect_uri=http%3A%2F%2Fwww%2Ehuoxing24%2Ecom%2Fpassport%2Faccount%2Fweixinweblogin%3FappType%3Dpc%26platform%3Dpc%26requestSource%3Dhuoxing24_pc&response_type=code&scope=snsapi_login&state=123';
};
/**
 * @desc 判断手机号是否有注册过
 * @Params {phoneNumber} phoneNumber
 */

var login_isRegister = function isRegister(phoneNumber) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'complexpost',
    url: '/passport/account/ifregister',
    params: {
      phonenum: phoneNumber
    }
  });
};
/**
 * @desc 获取短信验证码
 * @Params {params} params = {phonenum, countrycode, verifcategory, graphcode}
 */

var login_getSmsCode = function getSmsCode(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'complexpost',
    url: '/passport/account/getverifcode',
    params: params
  });
};
/**
 * @desc 获取微信用户信息
 * @Params {params} params = {accountKey}
 */

var login_getWechatUserInfo = function getWechatUserInfo(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'complexpost',
    url: '/passport/account/getaccountinfo',
    params: params
  });
};
/**
 * @desc 微信绑定老账号
 * @Return {code, msg}
 * @Params {params} params = {unionid微信唯一标识, phonenum, password/verifycode, weixinName, platform(登录平台: 手机端网页h5, 网站pc, app-android/ios)}
 */

var login_bindPhoneOld = function bindPhoneOld(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'complexpost',
    url: '/passport/account/weixinbindold',
    params: params
  });
};
/**
 * @desc 微信绑定新账号
 * @Return {code, msg}
 * @Params {params} params = {unionid微信唯一标识, phonenum, password/verifycode, weixinName, platform(登录平台: 手机端网页h5, 网站pc, app-android/ios)}
 */

var login_bindPhoneNew = function bindPhoneNew(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'complexpost',
    url: '/passport/account/weixinbindnew',
    params: params
  });
};
/**
 * @desc 修改昵称
 * @Return {code, msg}
 * @Params {params} params = {passportid, token, nickName}
 */

var login_getUpdateUserNick = function getUpdateUserNick(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'post',
    url: '/passport/account/updateusernick',
    params: params
  });
};
/* -------------------------------ajax-redux------------------------------- */
// 注：页面获取用户信息从store中获取，login的cookie相关操作的地方有(服务端判断需要cookie，登陆后设置cookie，注销删除cookie)。
// 故在登录后需要自动刷新页面，让服务端设置userInfo，此后尽管都是前端路由Link跳转，store中userInfo也能保持正确

/**
 * @desc 获取用户信息
 * @params {passportId}  服务端判断是否登录，显示登录注册按钮还是头像
 */

var login_getUserInfo = function getUserInfo(obj) {
  return {
    type: GETUSERINFO,
    data: {
      isLogin: obj.passportId || false,
      info: {
        nickName: obj.nickName || null,
        passportId: obj.passportId || null,
        iconUrl: obj.iconUrl || null,
        realAuth: obj.realAuth || null,
        faceAuth: obj.faceAuth || null,
        intro: obj.intro || null,
        token: obj.token || null,
        phone: obj.phone || null
      }
    }
  };
};
/**
 * @desc 登录框是否显示
 * @params {type, bool}
 */

var login_loginShowHide = function loginShowHide(type, bool) {
  return {
    type: LOGINSTATE,
    data: {
      loginType: type,
      loginShow: bool
    }
  };
};
/**
 * @desc 昵称框是否显示
 * @params {bool}
 */

var login_renameShowHide = function renameShowHide(bool) {
  return {
    type: RENAMESTATE,
    data: {
      renameShow: bool
    }
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return wechatLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphSms; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var _public_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);














/**
 * @desc：判断是否登录
 * @method isLogin(passportId, dispatch)
 */

var isLogin = function isLogin(passportId, dispatch) {
  if (!passportId) {
    dispatch(Object(_redux_actions_login__WEBPACK_IMPORTED_MODULE_13__[/* loginShowHide */ "h"])('account', true)); // Toast.info('请先登录', 800)

    return false;
  } else {
    return true;
  }
};
/**
 * @desc：判断微信登录+是否绑定手机
 * @method wechatLogin ({ bindFn, wechatLoginFn })
 */

function wechatLogin(_x) {
  return _wechatLogin.apply(this, arguments);
}
/**
 * @desc：登录成功
 * @method loginSucceeded(res)
 */

function _wechatLogin() {
  _wechatLogin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
    var bindFn, wechatLoginFn, res, info;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bindFn = _ref.bindFn, wechatLoginFn = _ref.wechatLoginFn;

            if (!(!Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* queryParam */ "y"])('huoxing24_not') && !Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* queryParam */ "y"])('huoxing24'))) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            _context3.next = 5;
            return Object(_redux_actions_login__WEBPACK_IMPORTED_MODULE_13__[/* getWechatUserInfo */ "f"])({
              accountKey: Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* queryParam */ "y"])('huoxing24_not') || Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* queryParam */ "y"])('huoxing24')
            })["catch"](function (err) {
              _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info('微信用户信息获取错误');
              throw err;
            });

          case 5:
            res = _context3.sent;

            if (res.code === 1) {
              try {
                info = Object.assign(res, {
                  obj: JSON.parse(res.obj) // 转换obj

                });

                if (Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* queryParam */ "y"])('huoxing24_not')) {
                  if (bindFn) bindFn(info);
                } else if (Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* queryParam */ "y"])('huoxing24')) {
                  loginSuccess(info);
                }
              } catch (err) {
                _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info('微信用户信息解析错误');
              }
            } else {
              if (wechatLoginFn) wechatLoginFn();
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _wechatLogin.apply(this, arguments);
}

var loginSuccess = function loginSuccess(res) {
  var info = res.obj;
  var domain = '';
  var env = "production";
  if (env === 'test') domain = 'marslib.com';

  if (env === 'production') {
    var networkurl = window.location.hostname;
    if (networkurl.indexOf('marsbit.cc') > -1) domain = 'marsbit.cc';
    if (networkurl.indexOf('marsbit.co') > -1) domain = 'marsbit.co';
    if (networkurl.indexOf('marstelegram.com') > -1) domain = 'marstelegram.com';
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].nickName, info.nickName, {
    domain: domain,
    expires: 28
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].passportId, info.passportId, {
    domain: domain,
    expires: 28
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].iconUrl, info.iconUrl, {
    domain: domain,
    expires: 28
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].realAuth, info.realAuth, {
    domain: domain,
    expires: 28
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].faceAuth, info.faceAuth, {
    domain: domain,
    expires: 28
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].intro, info.introduce, {
    domain: domain
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].token, encodeURI(info.token), {
    domain: domain,
    expires: 28
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* cookiesName */ "f"].phone, info.phoneNum, {
    domain: domain,
    expires: 28
  });
  /** @desc 如果为统一登陆界面，登录完成后跳转到首页，否则刷新页面 */

  var loginPath = false;

  switch (window.location.pathname) {
    case '/account':
    case '/account/':
    case '/sms':
    case '/sms/':
    case '/wechat':
    case '/wechat/':
    case '/register':
    case '/register/':
    case '/retrievePassword':
    case '/retrievePassword/':
    case '/bind':
    case '/bind/':
      loginPath = true;
      break;

    default:
      loginPath = false;
  }

  if (_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].main().indexOf(window.location.host) > -1 && (loginPath || window.location.href.indexOf('/index?huoxing24') > -1)) {
    window.location.href = _public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].main();
  } else {
    window.location.reload();
  }
};
/**
 * @desc：图像验证码，短信验证码
 */

var GraphSms =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(GraphSms, _Component);

  function GraphSms() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GraphSms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GraphSms)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      graphAjaxRight: false,
      // 发送短信验证码时，图形验证码验证通过
      phoneRight: false,
      // 电话号码是否验证成功
      phoneTips: '',
      // 电话验证提示信息
      graphRight: false,
      // 图形验证
      graphToken: '',
      // 图形验证token
      graphAuth: '',
      // 图形验证Auth
      graphTips: '',
      // 图形验证码提示信息
      smsRight: false,
      // 短信验证码已经输入
      smsCodeBtnTxt: '发送验证码',
      // 发生验证码按钮文字
      smsTips: '' // 短信验证码提示信息

      /** @desc 短信验证码接口返回错误 */

    };

    _this.smsApiFailed = function (res) {
      switch (res.code) {
        case -5:
        case -8:
        case -14:
          _this.setState({
            phoneTips: res.msg
          });

          break;

        case -15:
          _this.setState({
            graphTips: res.msg
          });

          break;

        case -6:
        case -7:
          _this.setState({
            smsTips: res.msg
          });

          break;

        default:
          _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info(res.msg);
      }
    };

    _this.phoneVerify = function (phoneNumParam) {
      var phoneNum = phoneNumParam || _this.phoneNum.value;

      if (phoneNum === '') {
        _this.setState({
          phoneTips: '手机号不能为空'
        });
      } else if (!Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* isPhone */ "t"])(phoneNum)) {
        _this.setState({
          phoneTips: '请输入有效的手机号'
        });
      } else {
        _this.setState({
          phoneTips: ''
        });
      }
    };

    _this.phoneInput = function (event) {
      var val = event.target.value;

      if (val.length > 11) {
        _this.phoneNum.value = val.substr(0, 11);
      }

      if (val.length === 11 && Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* isPhone */ "t"])(val)) {
        _this.setState({
          phoneRight: true
        });
      } else {
        _this.setState({
          phoneRight: false
        });
      }
    };

    _this.smsVerify = function (smsCodeParam) {
      var smsCode = smsCodeParam || _this.smsCode.value;

      if (smsCode === '') {
        _this.setState({
          smsTips: '短信验证码不能为空'
        });
      } else if (smsCode.length < 6) {
        _this.setState({
          smsTips: '短信验证码为6位数字'
        });
      } else if (!Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* isNum */ "q"])(smsCode)) {
        _this.setState({
          smsTips: '短信验证码为6位数字'
        });
      } else {
        _this.setState({
          smsTips: ''
        });
      }
    };

    _this.smsInput = function () {
      var val = event.target.value;

      if (val.length > 6) {
        _this.smsCode.value = val.substr(0, 6);
      }

      var lastVal = _this.smsCode.value;

      if (lastVal.length === 6 && Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* isNum */ "q"])(lastVal)) {
        _this.setState({
          smsRight: true
        });
      } else {
        _this.setState({
          smsRight: false
        });
      }
    };

    _this.graphVerify = function () {
      var _this$state = _this.state,
          graphAuth = _this$state.graphAuth,
          graphToken = _this$state.graphToken;

      if (graphAuth === '' || graphToken === '') {
        _this.setState({
          graphTips: '请先进行图形验证'
        });
      }
    };

    _this.clearPhoneTips = function () {
      _this.setState({
        phoneTips: ''
      });
    };

    _this.clearSmsTips = function () {
      _this.setState({
        smsTips: ''
      });
    };

    _this.graphVerifyProgram = function () {
      var This = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this);
      /* eslint-disable no-new */


      new YpRiddler({
        expired: 10,
        mode: 'dialog',
        winWidth: 440,
        lang: 'zh-cn',
        // 界面语言, 目前支持: 中文简体 zh-cn, 英语 en
        // langPack: LANG_OTHER, // 你可以通过该参数自定义语言包, 其优先级高于lang
        container: document.getElementById('graphCodeBox'),
        appId: 'a8c0a90197e14dbda2621a071fd256fa',
        version: 'v1',
        onError: function onError(param) {
          This.setState({
            graphRight: false
          });

          if (!param.code) {
            This.setState({
              graphTips: '错误请求'
            });
          } else if (parseInt(param.code / 100) === 5) {
            // 服务不可用时，开发者可采取替代方案
            This.setState({
              graphTips: '验证服务暂不可用'
            });
          } else if (param.code === 429) {
            This.setState({
              graphTips: '请求过于频繁，请稍后再试'
            });
          } else if (param.code === 403) {
            This.setState({
              graphTips: '请求受限，请稍后再试'
            });
          } else if (param.code === 400) {
            This.setState({
              graphTips: '非法请求，请检查参数'
            });
          } // 异常回调


          This.setState({
            graphTips: '验证服务异常'
          });
        },
        onSuccess: function onSuccess(validInfo, close, defaultSuccess) {
          This.setState({
            graphRight: true,
            graphToken: validInfo.token,
            graphAuth: validInfo.authenticate,
            graphTips: ''
          }); // 成功回调

          console.log('验证通过! token=' + validInfo.token + ', authenticate=' + validInfo.authenticate); // 验证成功默认样式

          defaultSuccess(true);
          close();
        },
        onFail: function onFail(code, msg, retry) {
          This.setState({
            graphRight: false
          }); // 失败回调

          This.setState({
            graphTips: "\u56FE\u5F62\u9A8C\u8BC1\u5931\u8D25"
          });
          console.error('出错啦：' + msg + ' code: ' + code);
          retry();
        },
        beforeStart: function beforeStart(next) {
          console.log('验证马上开始');
          next();
        },
        onExit: function onExit() {
          // 退出验证 （仅限dialog模式有效）
          console.log('退出验证');
        }
      });
    };

    _this.getSmsCodeFunc = function () {
      var This = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this);

      var phoneNum = Object(_public_index__WEBPACK_IMPORTED_MODULE_12__[/* trim */ "C"])(_this.phoneNum.value);
      var _this$state2 = _this.state,
          graphToken = _this$state2.graphToken,
          graphAuth = _this$state2.graphAuth;

      _this.phoneVerify(phoneNum);

      _this.graphVerify();

      function sendSmsCode() {
        return _sendSmsCode.apply(this, arguments);
      }

      function _sendSmsCode() {
        _sendSmsCode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var loginType, isExist, verifyType, getSuccess, sendCode, _isExist;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 发送短信验证码
                  loginType = This.props.loginType;
                  _context.next = 3;
                  return Object(_redux_actions_login__WEBPACK_IMPORTED_MODULE_13__[/* isRegister */ "g"])(phoneNum)["catch"](function (err) {
                    console.log(err);
                    _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info('手机是否有注册验证错误');
                  });

                case 3:
                  isExist = _context.sent;
                  verifyType = 1; // 1注册，绑定手机号码， 2找回密码, 3短信登录

                  _context.t0 = loginType;
                  _context.next = _context.t0 === 'register' ? 8 : _context.t0 === 'sms' ? 10 : _context.t0 === 'bind' ? 12 : _context.t0 === 'retrievePassword' ? 14 : 16;
                  break;

                case 8:
                  verifyType = 1;
                  return _context.abrupt("break", 16);

                case 10:
                  verifyType = 3;
                  return _context.abrupt("break", 16);

                case 12:
                  if (isExist === 1) {
                    verifyType = 3;
                  } else if (isExist === -1) {
                    verifyType = 1;
                  } else {
                    console.log(isExist);
                    _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info('手机是否有注册验证失败');
                  }

                  return _context.abrupt("break", 16);

                case 14:
                  verifyType = 2;
                  return _context.abrupt("break", 16);

                case 16:
                  getSuccess = false;

                  sendCode = function sendCode() {
                    return Object(_redux_actions_login__WEBPACK_IMPORTED_MODULE_13__[/* getSmsCode */ "c"])({
                      'phonenum': phoneNum,
                      'countrycode': '86',
                      'verifcategory': verifyType,
                      'token': graphToken,
                      'authenticate': graphAuth
                    })["catch"](function (err) {
                      _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info('获取验证码错误');
                      throw err;
                    });
                  }; // 短信登录与密码找回直接进入倒计时，注册先验证手机号是否已经注册


                  if (!(loginType === 'sms' || loginType === 'retrievePassword' || loginType === 'bind')) {
                    _context.next = 24;
                    break;
                  }

                  _context.next = 21;
                  return sendCode();

                case 21:
                  getSuccess = _context.sent;
                  _context.next = 40;
                  break;

                case 24:
                  if (!(loginType === 'register')) {
                    _context.next = 40;
                    break;
                  }

                  _context.next = 27;
                  return Object(_redux_actions_login__WEBPACK_IMPORTED_MODULE_13__[/* isRegister */ "g"])(phoneNum)["catch"](function (err) {
                    _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info('手机是否有注册验证错误');
                    throw err;
                  });

                case 27:
                  _isExist = _context.sent;

                  if (!(_isExist.code === 1)) {
                    _context.next = 33;
                    break;
                  }

                  This.setState({
                    phoneTips: '手机号已存在请直接登录'
                  });
                  return _context.abrupt("return", false);

                case 33:
                  if (!(_isExist.code === -1)) {
                    _context.next = 39;
                    break;
                  }

                  _context.next = 36;
                  return sendCode();

                case 36:
                  getSuccess = _context.sent;
                  _context.next = 40;
                  break;

                case 39:
                  _Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].info(_isExist.msg);

                case 40:
                  return _context.abrupt("return", getSuccess);

                case 41:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _sendSmsCode.apply(this, arguments);
      }

      function countDown() {
        return _countDown.apply(this, arguments);
      }

      function _countDown() {
        _countDown = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var smsCodeRes;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return sendSmsCode();

                case 2:
                  smsCodeRes = _context2.sent;

                  if (smsCodeRes.code) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return");

                case 5:
                  if (smsCodeRes.code !== 1) {
                    This.graphVerifyProgram();
                    This.setState({
                      graphTips: '',
                      graphToken: '',
                      graphAuth: '',
                      graphRight: false
                    });
                    This.smsApiFailed(smsCodeRes);
                  } else {
                    This.setState({
                      graphRight: false,
                      smsCodeBtnTxt: '60s'
                    }, function () {
                      This.setState({
                        graphAjaxRight: true,
                        codeTimer: setInterval(function () {
                          var txt = parseInt(This.state.smsCodeBtnTxt);

                          if (txt > 0) {
                            This.setState({
                              smsCodeBtnTxt: "".concat(txt - 1, "s")
                            });
                          } else {
                            clearInterval(This.state.codeTimer);
                            This.graphVerifyProgram();
                            This.smsCode.value = '';
                            This.setState({
                              smsCodeBtnTxt: "\u53D1\u9001\u9A8C\u8BC1\u7801",
                              graphAjaxRight: false
                            });
                          }
                        }, 1000)
                      });
                    });
                  }

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _countDown.apply(this, arguments);
      }

      if (_this.state.graphRight && _this.state.phoneRight) {
        countDown();
      }
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GraphSms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.graphVerifyProgram();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 组件卸载前，清除定时器
      clearInterval(this.state.codeTimer);

      this.setState = function (state, callback) {
        return false;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          phoneRight = _this$state3.phoneRight,
          graphRight = _this$state3.graphRight,
          graphTips = _this$state3.graphTips,
          smsTips = _this$state3.smsTips,
          smsCodeBtnTxt = _this$state3.smsCodeBtnTxt,
          phoneTips = _this$state3.phoneTips;
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "graph-sms"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: t('input_mobile_code'),
        ref: function ref(_ref2) {
          _this2.phoneNum = _ref2;
        },
        onFocus: this.clearPhoneTips,
        onChange: this.phoneInput
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "error"
      }, phoneTips)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-box",
        id: "graphCodeBox"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "error"
      }, graphTips)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item column"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: t('verify_code'),
        ref: function ref(_ref3) {
          _this2.smsCode = _ref3;
        },
        onFocus: this.clearSmsTips,
        onChange: this.smsInput
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "error"
      }, smsTips)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "code-btn ".concat(phoneRight && graphRight ? '' : 'can-not-click'),
        onClick: this.getSmsCodeFunc
      }, smsCodeBtnTxt === '发送验证码' ? t('send_verify_code') : smsCodeBtnTxt))));
    }
  }]);

  return GraphSms;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
GraphSms.propTypes = {
  loginType: prop_types__WEBPACK_IMPORTED_MODULE_9__["string"].isRequired // register注册， retrievePassword找回密码, sms短信登录

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

(function(exports) {
  exports.noop = function(){};
})( true && typeof module.exports === 'object' ? module.exports : window);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/redux/constants/flash.js
// 获取快讯频道
var GETFLASHCHANNEL = 'get-flash-channel'; // 获取精选快讯

var GETIMPORTANTFLASH = 'get-important-flash'; // 获取新闻排行

var GETNEWSRANKINGS = 'get-news-rankings'; // 获取快讯详情

var GETFLASHDETAILS = 'get-flash-details'; // 获取详情利好利空

var DETAILSUPORDOWN = 'details-up-or-down';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/flash.js + 1 modules
var flash = __webpack_require__(31);

// CONCATENATED MODULE: ./assets/redux/actions/flash.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flash_getFlashChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return flash_getImportantFlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return flash_getNewsRankings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flash_getFlashDetails; });
/* unused harmony export getDetailUporDown */






/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取快讯频道
 */

var flash_getFlashChannel = function getFlashChannel(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/lives/channels',
                  params: params
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETFLASHCHANNEL,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取精选快讯
 * @params params = {tags:2, currentPage, pageSize}
 */

var flash_getImportantFlash = function getImportantFlash(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/lives/getimportantlives',
                  params: params
                });

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETIMPORTANTFLASH,
                    data: data.obj
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取新闻排行
 * @params params = {lastDays:3, readCounts:50, newsCounts:10}
 */

var flash_getNewsRankings = function getNewsRankings(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/recommend',
                  params: params
                });

              case 3:
                data = _context3.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETNEWSRANKINGS,
                    data: data.obj
                  });
                }

                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context3.t0
                });
                throw new Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取快讯详情
 * @params params = {id快讯ID, passportid}
 */

var flash_getFlashDetails = function getFlashDetails(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/lives/getbyid',
                  params: params
                });

              case 3:
                data = _context4.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETFLASHDETAILS,
                    data: data.obj
                  });
                }

                return _context4.abrupt("return", data);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context4.t0
                });
                throw new Error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 快讯详情利好利空
 * @params params = {id快讯ID, passportid}
 */

var flash_getDetailUporDown = function getDetailUporDown(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(flash["a" /* flashUpDownAjax */])(params);

              case 3:
                data = _context5.sent;

                if (data.code === 1) {
                  dispatch({
                    type: DETAILSUPORDOWN,
                    data: data.obj,
                    params: params
                  });
                }

                return _context5.abrupt("return", data);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context5.t0
                });
                throw new Error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/redux/constants/news.js
// 获取新闻详情
var GETNEWSDETAILS = 'get-news-details'; // 获取推荐新闻

var GETRECOMMENDNEWS = 'get-recommend-news'; // 获取相关新闻

var GETRELATEDNEWS = 'get-related-news'; // 获取专题详情

var GETFEATUREDETAILS = 'get-feature-details'; // 获取更多专题列表

var GETMOREFEATURE = 'get-more-feature';
var GETADIMPLANT = 'get-ad-implant';
var GETNEWSLIST = 'get-news-list';
var GETHOTNEWSVIDEO = 'get-hot-news-video';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./assets/redux/actions/news.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return news_favoriteNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return news_statisticsNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return news_getRelatedNews; });
/* unused harmony export getRecommendNews */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return news_getNewsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return news_getFeatureDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return news_getHotNewsVideo; });





/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 收藏新闻
 * @Params {params} params = {newsId, passportId, token, status:1收藏-1取消收藏}
 */

var news_favoriteNews = function favoriteNews(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'get',
    url: '/info/news/collect',
    params: params
  });
};
/**
 * @desc 统计新闻访问量
 * @Params {params} params = {id新闻id, ifRecommend}
 */

var news_statisticsNews = function statisticsNews(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'get',
    url: '/info/news/addreadcount',
    params: params
  });
};
/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取相关新闻
 * @Params {params} params = {tags新闻相关tags, id新闻id, newsCounts返回数据条数, publishTime发布时间}
 */

var news_getRelatedNews = function getRelatedNews(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/relatednews',
                  params: params
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETRELATEDNEWS,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取推荐新闻
 * @Params {params} params = {currentPage, pageSize, passportId}
 */

var news_getRecommendNews = function getRecommendNews(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/recommend/getplatenews',
                  params: params
                });

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETRECOMMENDNEWS,
                    data: data.obj
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取新闻详情
 * @Params {params} params = {currentPage, pageSize, channelId}
 */

var news_getNewsDetails = function getNewsDetails(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/getbyid',
                  params: params
                });

              case 3:
                data = _context3.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETNEWSDETAILS,
                    data: data.obj
                  });
                }

                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context3.t0
                });
                throw new Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取专题详情
 * @Params {params, loadType} params = {id, currentPage, pageSize}
 * loadType默认数据还是加载更多,任意字符串如'isMore'
 */

var news_getFeatureDetails = function getFeatureDetails(params, loadType) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/topic/info',
                  params: params
                });

              case 3:
                data = _context4.sent;

                if (data.code === 1) {
                  if (loadType) {
                    dispatch({
                      type: GETMOREFEATURE,
                      data: data.obj
                    });
                  } else {
                    dispatch({
                      type: GETFEATUREDETAILS,
                      data: data.obj
                    });
                  }
                }

                return _context4.abrupt("return", data);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context4.t0
                });
                throw new Error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}; // 热点信息列表

var news_getHotNewsVideo = function getHotNewsVideo(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/hot/info',
                  params: {
                    infoCounts: 6
                  }
                });

              case 3:
                data = _context5.sent;
                dispatch({
                  type: GETHOTNEWSVIDEO,
                  data: data.obj
                });
                return _context5.abrupt("return", data);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context5.t0
                });
                throw new Error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var ipServer = function ipServer() {
  var os = __webpack_require__(98);

  var interfaces = os.networkInterfaces();

  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];

      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
};

var ipClient = function ipClient() {
  return window.location.host.split(':')[0];
};

var env =  true ? "production" : undefined; // 注(1): 热替换服务端暂时未实现先注释

/** @Desc 后端调试在chrome中输入: chrome://inspect 然后单击Remote Target下的inspect */

/** @Desc 安装多系统共享组件: npm install --save gitlab:leonchou/multiAppSharing。此处建议使用npm换用淘宝源（废弃）。暂时用gulp拷贝 */

/** @Desc 配置环境变量取值：config、configDB、server/render/render.js、multiPublic/index.js、webpack-config、Layout/Header/Navigation */

/**
 * @Desc 服务端配置用到publicPath：
 * webpack前端资源路径
 * layout.js的css+js路径
 * */

var publicPathTest = 'news.marslib.com';
var publicPathPrd = 'news.huoxing24.com';
var apiHostTest = 'api.marslib.com';
var apiHostPrd = 'api.marstelegram.com'; // race.huoxing24.com, publicChainRrank接口有自有项目接口和火星财经借口主要新闻快讯

var hxHostTest = 'api.marslib.com';
var hxHostPrd = 'api.huoxing24.com';
/** @Desc Defi数据api接口地址 */

var apiDomain = 'www.oklink.com';
var config = {
  ip: function ip(port) {
    return "http://".concat(typeof window !== 'undefined' ? ipClient() : ipServer(), ":").concat(port);
  },
  webpackPort: 8089,
  // webpack服务端口
  serverPort: 3012 // 网站服务端口
  // 测试环境不支持https，需要改为http

};

if (env === 'development') {
  config = Object.assign(config, {
    publicPath: config.ip(config.webpackPort),
    // apiHost: `http://${apiHostTest}`,
    apiHost: "https://".concat(apiHostPrd),
    apiDomain: "https://".concat(apiDomain),
    hxHost: "http://".concat(hxHostTest)
  });
}

if (env === 'test') {
  config = Object.assign(config, {
    // publicPath: config.ip(config.serverPort), // localTest test时使用这个地址
    publicPath: "http://".concat(publicPathTest),
    apiHost: "https://".concat(apiHostPrd),
    apiDomain: "https://".concat(apiDomain),
    hxHost: "http://".concat(hxHostTest)
  });
}

if (env === 'production') {
  config = Object.assign(config, {
    // publicPath: config.ip(config.serverPort), // localTest production时使用这个地址
    publicPath: "",
    apiHost: "https://".concat(apiHostPrd),
    apiDomain: "https://".concat(apiDomain),
    hxHost: "https://".concat(hxHostPrd)
  });
}

module.exports = config;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gather */
/* unused harmony export getDownLoadImg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAndroidDownloadUrl; });
/* unused harmony export getFooterData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAdImplant; });
/* unused harmony export gatherPush */
/* unused harmony export gatherLive */
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _constants_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);







var _require = __webpack_require__(23),
    hxHost = _require.hxHost,
    apiHost = _require.apiHost;
/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 事件埋点
 * data 可以是 ArrayBufferView，Blob，DOMString 或 Formdata，根据官方规范，
 * 需要 request header 为 CORS-safelisted-request-header，在这里则需要保证 Content-Type 为以下三种之一：
 * application/x-www-form-urlencoded
 * multipart/form-data
 * text/plain
 * 我们一般会用到 DOMString , Blob 和 Formdata 这三种对象作为数据发送到后端，下面以这三种方式为例进行说明
 */
// const syncReport = (url, { data = {}, headers = {} } = {}) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('POST', url, false)
//     xhr.withCredentials = true
//     Object.keys(headers).forEach((key) => {
//         xhr.setRequestHeader(key, headers[key])
//     })
//     xhr.send(JSON.stringify(data))
// }


var reportData = function reportData(url, data, type) {
  if (window.navigator && window.navigator.sendBeacon) {
    var params = data;

    if (type === 'formdata') {
      params = new FormData();
      Object.keys(data).forEach(function (key) {
        var value = data[key];

        if (typeof value !== 'string') {
          // formData只能append string 或 Blob
          value = JSON.stringify(value);
        }

        params.append(key, value);
      });
    }

    if (type === 'blob') {
      params = new Blob([JSON.stringify(data), {
        type: 'application/x-www-form-urlencoded'
      }]);
    }

    if (!type) {
      params = JSON.stringify(params);
    }

    navigator.sendBeacon(url, params);
  } else {
    // 不支持时，用同步的xhr替代
    var xhr = new XMLHttpRequest();
    xhr.open('POST', arguments[0], true);
    xhr.send(arguments[1]);
  }
};

var gather = function gather(payload) {
  var params = {
    ip: '',
    type: 'stat',
    payload: payload
  };
  var url = "".concat(apiHost, "/passport/account/recommend/gather");
  reportData(url, params);
};
/**
 * @desc 右侧下载广告
 */

var getDownLoadImg = function getDownLoadImg() {
  return Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* axiosAjax */ "d"])({
    type: 'get',
    host: '',
    url: "https://static.marsbit.co/production/right_ad_img.json?timestamp=".concat(Date.parse(new Date())),
    noLoading: true
  });
};
/**
 * @desc 获取安卓下载地址
 */

var getAndroidDownloadUrl = function getAndroidDownloadUrl() {
  return Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* axiosAjax */ "d"])({
    type: 'get',
    url: '/mgr/app/web/url',
    noLoading: true
  });
};
/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取尾部链接
 * @Params {params} params = {category}
 */

var getFooterData = function getFooterData(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var reqData, data, partner, friendly;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                reqData = function reqData(type) {
                  return Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* axiosAjax */ "d"])({
                    host: apiHost === 'https://api.huoxing24.com' || apiHost === 'http://api.marslib.com' ? apiHost : hxHost,
                    type: 'complexpost',
                    url: '/info/news/getfooterinfo',
                    params: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                      type: type
                    }, params)
                  });
                };

                _context.next = 4;
                return Promise.all([reqData(3), reqData(1)])["catch"](function (err) {
                  throw Error(err);
                });

              case 4:
                data = _context.sent;
                partner = data[0];
                friendly = data[1];

                if (partner.code === 1) {
                  dispatch({
                    type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* GETPARTNERLINKS */ "f"],
                    data: partner.obj.inforList
                  });
                }

                if (friendly.code === 1) {
                  dispatch({
                    type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* GETFRIENDLYLINKS */ "e"],
                    data: friendly.obj.inforList
                  });
                }

                return _context.abrupt("return", data);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* ACTIONERROR */ "a"],
                  data: _context.t0
                });
                throw Error(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取广告
 * @Params {params} params = {adPlace 数字之间用英文逗号相隔，形如 1,2,3的形式, type1:PC段；2:移动端}
 */

var getAd = function getAd(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* axiosAjax */ "d"])({
                  type: 'get',
                  url: '/info/ad/showad',
                  params: params
                });

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* GETAD */ "c"],
                    data: data.obj
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* ACTIONERROR */ "a"],
                  data: _context2.t0
                });
                throw Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取嵌入广告
 * @Params {params} params = {adPlace: 广告位置, type: 类型}
 */

var getAdImplant = function getAdImplant(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* axiosAjax */ "d"])({
                  type: 'postpure',
                  url: '/info/ad/v2/showad?type=1',
                  params: params
                });

              case 3:
                data = _context3.sent;

                if (data.code === 1) {
                  dispatch({
                    type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* GETADIMPLANT */ "d"],
                    data: data.obj
                  });
                }

                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* ACTIONERROR */ "a"],
                  data: _context3.t0
                });
                throw Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 事件埋点
 * @Params {params} params = {adPlace: 广告位置, type: 类型}
 */

var gatherPush = function gatherPush(eventType, eventInfo) {
  return {
    type: _constants_public__WEBPACK_IMPORTED_MODULE_5__[/* GATHERPUSH */ "b"],
    data: {
      eventType: eventType,
      eventInfo: eventInfo
    }
  };
}; // 上报直播事件

var gatherLive = function gatherLive(_ref4) {
  var liveState = _ref4.liveState,
      eventId = _ref4.eventId,
      eventInfo = _ref4.eventInfo;
  var userId = typeof window !== 'undefined' && js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* cookiesName */ "f"].passportId); // 是否为主播

  var isMain = liveState && liveState.presenterList && Array.isArray(liveState.presenterList) && liveState.presenterList.length > 0 && liveState.presenterList[0].passportId === userId; // 是否为嘉宾

  var gusetList = liveState && liveState.guestList && Array.isArray(liveState.guestList) ? liveState.guestList : [];
  var isGuest;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = gusetList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;
      if (val.passportId !== userId) continue;
      isGuest = true;
      break;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var eventOtherInfo = eventInfo && Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* isObject */ "r"])(eventInfo) ? eventInfo : {};

  var pushData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    'event_id': eventId
  }, eventOtherInfo);

  if (liveState) {
    if (userId && (isMain || isGuest)) {
      // 用户角色：主播（broadcaster）、嘉宾（guest）、观众（audience）
      pushData['room_role'] = isMain ? 'broadcaster' : isGuest ? 'guest' : 'audience';
    }

    if (liveState.roomId) pushData['room_id'] = liveState.roomId;
    if (liveState.name) pushData['room_title'] = liveState.name;
    if (liveState.adminCreateFlag) pushData['room_type'] = liveState.adminCreateFlag === 1 ? 'by_admin' : 'by_user'; // 直播间创建类型：用户创建(by_user)、火星后台创建(by_admin)
  }

  return gatherPush('LIVE', pushData);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./_multiappsharing/redux/constants/home.js
// 获取首页 7x24H 快讯
var GETSHOWLIVESLIST = 'get-show-lives-list'; // 获取首页项目动态(潜伏日历)

var GETCALENDARLIST = 'get-calendar-list'; // 获取首页推荐直播列表

var GETHOOMROOMLIVERECOMMENDLIST = 'get-hoom-room-live-recommend-list'; // 获取首页直播分类列表

var GETHOOMROOMLIVETYPELISTOBJDATA = 'get-hoom-room-live-type-list-objdata'; // 获取首页直播列表

var GETHOOMROOMLIVELIST = 'get-hoom-room-live-list'; // 是否显示实名验证弹窗

var HOMELIVEVERIFYPOPUPSHOW = 'home-live-verify-popup-show';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./_multiappsharing/redux/actions/home.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return home_getShowLivesList; });
/* unused harmony export getCalendarList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return home_getHoomRoomLiveList; });
/* unused harmony export homeLiveVerifyPopupShow */






/** ---------------------------------------- pure ajax ---------------------------------------- */

/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 请求首页右侧7x24H快讯
 */

var home_getShowLivesList = function getShowLivesList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var url, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "/info/lives/showlives";
                _context.next = 4;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: url,
                  params: objectSpread_default()({
                    currentPage: 1,
                    pageSize: 8
                  }, params)
                });

              case 4:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETSHOWLIVESLIST,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 请求 项目动态（潜伏日历）
 */

var home_getCalendarList = function getCalendarList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var time, timeStr, dateStr, url, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                time = new Date().getTime();
                timeStr = Object(_multiappsharing_public["l" /* formatTime */])(time, 'yyyy-MM-dd').replace(/-/g, '/');
                dateStr = new Date(timeStr).getTime() / 1000;
                url = "/info/calendar/getCalendarList";
                _context2.next = 7;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: url,
                  params: objectSpread_default()({
                    queryTime: parseInt(dateStr),
                    pageSize: 8
                  }, params)
                });

              case 7:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETCALENDARLIST,
                    data: data.obj
                  });
                }

                return _context2.abrupt("return", data);

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 直播间广场列表
 * @Params {params} 非必传
 * queryTime 查询时间，首页传0，翻页传上页最后一条记录createTime
 * pageSize 每页数量，默认20
 * liveType 类型分类 1.全部(默认不传)
 * recommendFlag 1=推荐请求 跟分类平行
 */

var home_getHoomRoomLiveList = function getHoomRoomLiveList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(dispatch) {
        var url, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                url = '/info/video/live/getRoomListPage';
                _context3.next = 4;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: url,
                  params: params,
                  noLoading: true
                });

              case 4:
                data = _context3.sent;

                if (data.code === 1) {
                  if (params.recommendFlag) {
                    dispatch({
                      type: GETHOOMROOMLIVERECOMMENDLIST,
                      data: data.obj
                    });
                  } else if (params.liveType) {
                    dispatch({
                      type: GETHOOMROOMLIVETYPELISTOBJDATA,
                      data: data.obj,
                      liveType: params.liveType
                    });
                  } else {
                    dispatch({
                      type: GETHOOMROOMLIVELIST,
                      data: data.obj
                    });
                  }
                }

                return _context3.abrupt("return", data);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context3.t0
                });
                throw new Error(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 昵称框是否显示
 * @params {bool}
 */

var home_homeLiveVerifyPopupShow = function homeLiveVerifyPopupShow(bool) {
  return {
    type: HOMELIVEVERIFYPOPUPSHOW,
    data: {
      liveVerify: bool
    }
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/redux/constants/notice.js
// 交易所公告列表
var GETNOTICELIST = 'get-notice-list'; // 交易所信息列表

var GETBOURSELIST = 'get-bourse-list'; // 交易所公告统计列表

var GETBOURSESTATISTICSLIST = 'get-bourse-statistics-list'; // 交易所公告详情

var GETNOTICEDETAIL = 'get-notice-detail';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./assets/redux/actions/notice.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return notice_getNoticeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notice_getBourseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return notice_getBourseStatisticsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return notice_getNoticeDetail; });





/**
 * @desc 交易所公告列表
 * @Params {params} params = {
 *     exchangeSymbol 交易所标识
 *     type 公告类型
 *     search 查询关键词
 *     queryTime 查询时间
 *     pageSize 查询一页显示数
 * }
 */

var notice_getNoticeList = function getNoticeList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: '/info/notice/web/list',
                  params: params
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETNOTICELIST,
                    data: data
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 交易所信息列表
 * @Params {params} params = {}
 */

var notice_getBourseList = function getBourseList() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: '/info/notice/resource'
                });

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  data.obj.exchange.unshift({
                    symbol: '',
                    name: '平台'
                  });
                  data.obj.type.unshift({
                    id: '',
                    name: '公告类型'
                  });
                  dispatch({
                    type: GETBOURSELIST,
                    data: data
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 交易所公告列表
 * @Params {params} params = {}
 */

var notice_getBourseStatisticsList = function getBourseStatisticsList() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: '/info/notice/statistics'
                });

              case 3:
                data = _context3.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETBOURSESTATISTICSLIST,
                    data: data
                  });
                }

                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context3.t0
                });
                throw new Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 交易所公告详情
 * @Params {params} params = {noticeId}
 */

var notice_getNoticeDetail = function getNoticeDetail(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: '/info/notice/one',
                  params: params
                });

              case 3:
                data = _context4.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETNOTICEDETAIL,
                    data: data
                  });
                }

                return _context4.abrupt("return", data);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context4.t0
                });
                throw new Error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./_multiappsharing/redux/constants/flash.js
// 获取快讯列表
var GETFLASHLIST = 'get-flash-list'; // 获取更多快讯

var GETMOREFLASH = 'get-more-flash'; // 快讯利好利空

var FLASHUPDOWN = 'flash-up-down';
// CONCATENATED MODULE: ./_multiappsharing/redux/actions/flash.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flash_getFlashList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flash_flashUpDownAjax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return flash_getUporDown; });





/**
 * @desc 获取快讯列表
 * @Params {params} params = {id, passportid, token, status 0:利空; 1:利好}
 */

var flash_getFlashList = function getFlashList(params, loadType) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/lives/showlives',
                  params: params
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  if (loadType === 'more') {
                    dispatch({
                      type: GETMOREFLASH,
                      data: data.obj
                    });
                  } else {
                    dispatch({
                      type: GETFLASHLIST,
                      data: data.obj
                    });
                  }
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取快讯利好利空
 * @Params {params} params = {id: 快讯id, status: 0利空1利好, passportid, token}
 */

var flash_flashUpDownAjax = function flashUpDownAjax(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'post',
    url: '/info/lives/upordown',
    params: params,
    noLoading: true
  });
};
var flash_getUporDown = function getUporDown(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return flash_flashUpDownAjax(params);

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: FLASHUPDOWN,
                    data: data.obj,
                    params: params
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/redux/constants/author.js
// 获取作者文章
var GETAUTHORNEWS = 'get-author-news'; // 获取作者视频

var GETAUTHORVIDEO = 'get-author-video'; // 获取作者文章

var GETAUTHORCOLLECT = 'get-author-collect'; // 获取作者关注

var GETCOLLECTAUTHOR = 'get-collect-author'; // 获取作者个人成就

var GETAUTHORACHIEVE = 'get-author-achieve'; // 获取作者列表

var GETAUTHOR = 'get-author'; // 获取专栏作者信息

var GETAUTHORINFO = 'get-author-info';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./assets/redux/actions/author.js
/* unused harmony export favoriteNews */
/* unused harmony export getAuthorNews */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return author_getAuthorVideo; });
/* unused harmony export getAuthorCollect */
/* unused harmony export getCollectAuthor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return author_getAuthorAchieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return author_getAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return author_getAuthorInfo; });





/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 收藏新闻
 * @Params {params} params = {newsId, passportId, token, status:1收藏-1取消收藏}
 */

var author_favoriteNews = function favoriteNews(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'get',
    url: '/info/news/collect',
    params: params
  });
};
/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 获取作者文章
 * @Params {params} params = {status, passportId, token, currentPage, pageSize}
 */

var author_getAuthorNews = function getAuthorNews(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/news/showcolumnlist',
                  params: Object.assign({
                    status: 1,
                    passportId: '',
                    token: '',
                    currentPage: 1,
                    pageSize: 10
                  }, params)
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORNEWS,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取作者视频
 * @Params {params} params = {currentPage, pageSize, status, passportId}
 */

var author_getAuthorVideo = function getAuthorVideo(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/video/getuserlist',
                  params: Object.assign({
                    currentPage: 1,
                    pageSize: 15,
                    status: 1,
                    passportId: ''
                  }, params)
                });

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORVIDEO,
                    data: data.obj
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取作者收藏
 * @Params {params} params = {passportId, token, currentPage, pageSize}
 */

var author_getAuthorCollect = function getAuthorCollect(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/news/collectlist',
                  params: Object.assign({
                    passportId: '',
                    token: '',
                    currentPage: 1,
                    pageSize: 10
                  }, params)
                });

              case 3:
                data = _context3.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORCOLLECT,
                    data: data.obj
                  });
                }

                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context3.t0
                });
                throw new Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 获取作者关注的作者
 * @Params {params} params = {passportid, token}
 */

var author_getCollectAuthor = function getCollectAuthor(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/follow/author/list',
                  params: Object.assign({
                    passportid: '',
                    token: ''
                  }, params)
                });

              case 3:
                data = _context4.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETCOLLECTAUTHOR,
                    data: data.obj
                  });
                }

                return _context4.abrupt("return", data);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                dispatch({
                  type: GETCOLLECTAUTHOR,
                  data: _context4.t0
                });
                throw new Error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 作者个人成就
 * @Params pr
 */

var author_getAuthorAchieve = function getAuthorAchieve(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/author/getAuthorAchievement',
                  params: {
                    passportId: params.passportId
                  }
                });

              case 3:
                data = _context5.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORACHIEVE,
                    data: data.obj
                  });
                }

                return _context5.abrupt("return", data);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                dispatch({
                  type: GETAUTHORACHIEVE,
                  data: _context5.t0
                });
                throw new Error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 作者列表
 * @Params getAuthor
 */

var author_getAuthor = function getAuthor(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/author/showauthorlist',
                  params: Object.assign({
                    currentPage: 1,
                    pageSize: 20
                  }, params)
                });

              case 3:
                data = _context6.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHOR,
                    data: data.obj
                  });
                }

                return _context6.abrupt("return", data);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                dispatch({
                  type: GETAUTHOR,
                  data: _context6.t0
                });
                throw new Error(_context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 专栏作者信息
 * @Params getAuthorInfo
 */

var author_getAuthorInfo = function getAuthorInfo(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'post',
                  url: '/info/news/getauthorinfo',
                  params: Object.assign({
                    passportId: params.passportId
                  }, params)
                });

              case 3:
                data = _context7.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETAUTHORINFO,
                    data: data.obj
                  });
                }

                return _context7.abrupt("return", data);

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);
                dispatch({
                  type: GETAUTHORINFO,
                  data: _context7.t0
                });
                throw new Error(_context7.t0);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 8]]);
      }));

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "download_img-a72fa1d2.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-sms-3d57ba28.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-wechat-3e74161b.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-account-17a5b9b1.png";

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollNewsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);












var Home = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Home";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Home */ 8).then(__webpack_require__.bind(null, 42));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(42);
    }

    return eval('require.resolve')("../containers/Home");
  }
});
var title = 'MarsBit新闻-区块链新闻-比特币新闻';
var description = 'MarsBit新闻提供最快速的区块链,数字货币,比特币,以太坊l,莱特币,eos,比特币现金bch,瑞波xrp,波场tron,sto,监管,稳定币,挖矿,矿机,币圈及区块链实时要闻,专题报道,深度文章和市场行情信息和报价';
var keywords = 'MarsBit新闻,区块链新闻,比特币新闻以太坊新闻,数字货币新闻,行情新闻,比特币新闻,以太坊新闻,莱特币新闻,eos新闻,比特币现金bch新闻,瑞波xrp新闻,波场tron新闻,sto新闻,监管新闻,稳定币新闻,挖矿新闻,矿机新闻，币圈新闻等';

var RollNewsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(RollNewsPage, _Component);

  function RollNewsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, RollNewsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(RollNewsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(RollNewsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Home, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, req, searchId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, req = context.req;
                searchId = match.params.channelId || 0;
                _context.next = 4;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getNewsChannelId */ "h"])()), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getNewsList */ "i"])({
                  currentPage: 1,
                  pageSize: 15,
                  channelId: searchId,
                  req: req
                }, 'channel')), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getHotNews */ "g"])({
                  lastDays: 3,
                  readCounts: 50,
                  newsCounts: 6,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_10__[/* getAdImplant */ "b"])([{
                  'adPlace': 3,
                  'secondPosition': searchId
                }]))])["catch"](function (err) {
                  throw Error(err);
                });

              case 4:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].m(),
                  title: title,
                  description: description,
                  keywords: keywords,
                  cookies: req.cookies
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RollNewsPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashShareDetailPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony import */ var _public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40);
/* harmony import */ var _public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_13__);









 // import { getNoticeIdDetail } from '../redux/actions/noticeDetail'




 // import twetticon from '../../static/resource/images/huoxing24.png'

var FlashShareDetail = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-FlashShareDetail";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-FlashShareDetail */ 17).then(__webpack_require__.bind(null, 94));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(94);
    }

    return eval('require.resolve')("../containers-m/FlashShareDetail");
  }
});

var FlashShareDetailPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(FlashShareDetailPage, _Component);

  function FlashShareDetailPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FlashShareDetailPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(FlashShareDetailPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FlashShareDetailPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FlashShareDetail, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, res, req, epxressRes, flashId, returnData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, res = context.res, req = context.req;
                epxressRes = res;
                flashId = match.params.flashId;
                returnData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* mixUrl */ "w"].news("/flash/".concat(flashId, ".html"), req),
                  shareIcon: _public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
                  twettericon: ''
                }, _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* webTdk */ "E"]);
                _context.next = 6;
                return Promise.all([store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__[/* getFlashDetails */ "b"])({
                  id: flashId,
                  req: req
                })).then(function (res) {
                  if (res.code === 1) {
                    var titleCon = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* flashRecognize */ "i"])(res.obj);
                    returnData.title = "".concat(titleCon.title, "_MarsBit");
                    returnData.shareTitle = "".concat(titleCon.title);
                    returnData.description = titleCon.content;
                    returnData.keywords = "MarsBit,\u533A\u5757\u94FE,\u533A\u5757\u94FE\u5FEB\u8BAF,\u533A\u5757\u94FE\u670D\u52A1,\u533A\u5757\u94FE\u662F\u4EC0\u4E48,\u533A\u5757\u94FE\u5A92\u4F53,\u533A\u5757\u94FE\u5E94\u7528,\u533A\u5757\u94FE\u793E\u533A,\u533A\u5757\u94FE\u6280\u672F,\u533A\u5757\u94FE\u6D4F\u89C8\u5668,\u533A\u5757\u94FE\u62DB\u8058,\u533A\u5757\u94FE\u5B66\u4E60,\u6BD4\u7279\u5E01,BTC,\u533A\u5757\u94FE\u6D3B\u52A8,\u6BD4\u7279\u5E01\u4EF7\u683C,BTC\u4EF7\u683C,POWER,POWER\u5927\u4F1A";
                    var imglist = titleCon.content.match(/<img.*?>/g);

                    if (imglist) {
                      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
                      returnData.twettericon = imgurl;
                    }
                  } // 未查询到记录跳转到快讯列表页


                  if (res.code === -1) {
                    epxressRes.redirect('/livenews');
                    returnData = {
                      customRes: true
                    };
                  }
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u5FEB\u8BAF\u8BE6\u60C5\u9519\u8BEF: ".concat(err));
                }), store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__[/* getImportantFlash */ "c"])({
                  tags: 2,
                  currentPage: 1,
                  pageSize: 6,
                  req: req
                })), store.dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_12__[/* getHotNewsVideo */ "c"])())]);

              case 6:
                return _context.abrupt("return", returnData);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FlashShareDetailPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "flash-share-icon-a26d5040.jpg";

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./_multiappsharing/redux/constants/header.js
// 获取头部导航栏内容
var HEADERCHANNELS = 'header-channels';
// CONCATENATED MODULE: ./_multiappsharing/redux/actions/header.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return header_getHeaderChannels; });






/**
 * @desc 获取头部导航内容
 */

var header_getHeaderChannels = function getHeaderChannels(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'get',
                  url: '/info/news/channels',
                  formData: false,
                  params: objectSpread_default()({}, params)
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: HEADERCHANNELS,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_flash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);













var FlashList = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-Flash";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-Flash */ 15).then(__webpack_require__.bind(null, 97));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(97);
    }

    return eval('require.resolve')("../containers-m/Flash");
  }
}, false);

var FlashPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(FlashPage, _Component);

  function FlashPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FlashPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(FlashPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FlashPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FlashList, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var match, store, isServer, req, passportId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                match = context.match, store = context.store, isServer = context.isServer, req = context.req;
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId);
                _context.next = 4;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_flash__WEBPACK_IMPORTED_MODULE_12__[/* getFlashList */ "b"])({
                  currentPage: 1,
                  pageSize: 30,
                  passportid: passportId,
                  req: req
                }))]);

              case 4:
                return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].news(match.url, req)
                }, _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* webTdk */ "E"]));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FlashPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePsd", function() { return encodePsd; });
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsencrypt__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @desc 密码加密
 * @returns {string}
 * @Params {password}
 * @method encodePsd(password)
 */

var publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg3mRptcLRCaT2BiEH8ZI1cTWToCZyX/XUZHZ902Bhk4fvDZchHsI3JKQHx7iS4RrYyI8G94eIdh1yYnd2fuwylmG1+FGcZeV5N7lex57Uih9Sm4OOz9kJq3vRZLX+M5vMEb+sAgWICJByKxOlGNMZhAbnhYpu8PaZzJGFFwt/cjXIDY7RX7YIP3gRTc4sDUfjv6DkjGYyqVmjRQgggSFtjR0euaelCZxzOPF5xShNubXX5b9xJuBAz+NhWCJ8zeEchOZkRAwujRPC1ebmfsTumecopjyaRUAb1csvscgG+frluDfs8zSUKDutkLNOe8utD2/KkHnQfUxucaV1XbPOQIDAQAB';

var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var encodePsd = function encodePsd(password) {
  var encrypt = new jsencrypt__WEBPACK_IMPORTED_MODULE_0___default.a();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(JSON.stringify({
    content: password.toString(),
    nonce: randomNumber(0, 1000000).toString(),
    timestamp: (Date.parse(new Date()) / 1000).toString()
  }));
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("js-base64");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("blueimp-md5");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header-logo-aedf116d.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avatar-default-874a5ab4.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "languageicon-6b605a04.png";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("jsencrypt");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "footer-logo-6d3787c4.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "littienaga-d545f904.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nagalogobig-565d604b.png";

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);













var Home = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Home";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Home */ 8).then(__webpack_require__.bind(null, 42));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(42);
    }

    return eval('require.resolve')("../containers/Home");
  }
});
var title = '区块链新闻_区块链项目新闻_区块链报道_MarsBit';
var description = '火星新闻提供最快速的区块链,数字货币,比特币,以太坊,莱特币,eos,比特币现金bch,瑞波xrp,波场tron,sto,监管,稳定币,挖矿,矿机,币圈及区块链实时要闻,专题报道,深度文章和市场行情信息和报价';
var keywords = 'MarsBit,区块链,区块链新闻,比特币新闻以太坊新闻,数字货币新闻,行情新闻,比特币新闻,以太坊新闻,莱特币新闻,eos新闻,比特币现金bch新闻,瑞波xrp新闻,波场tron新闻,sto新闻,监管新闻,稳定币新闻,挖矿新闻,矿机新闻,币圈新闻';

var HomePage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(HomePage, _Component);

  function HomePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, HomePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HomePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Home, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, req, searchId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, req = context.req;
                searchId = match.params.channelId || 0;
                _context.next = 4;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getNewsChannelId */ "h"])({
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getNewsList */ "i"])({
                  currentPage: 1,
                  pageSize: 15,
                  channelId: searchId,
                  req: req
                }, 'channel')), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getHotNews */ "g"])({
                  lastDays: 3,
                  readCounts: 50,
                  newsCounts: 6,
                  req: req // req: req

                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_11__[/* getHoomRoomLiveList */ "a"])({
                  recommendFlag: 1,
                  pageSize: 3,
                  newFlag: 1,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_10__[/* getAdImplant */ "b"])([{
                  'adPlace': 3,
                  'secondPosition': searchId
                }]))])["catch"](function (err) {
                  throw Error(err);
                });

              case 4:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].main(),
                  title: title,
                  description: description,
                  keywords: keywords,
                  cookies: req.cookies
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);














 // import icon from '../../static/resource/images/huoxing24.png'

var Details = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Details";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Details */ 3).then(__webpack_require__.bind(null, 86));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(86);
    }

    return eval('require.resolve')("../containers/Details");
  }
});

var DetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(DetailsPage, _Component);

  function DetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(DetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Details, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, res, req, history, isServer, match, newsId, passportId, token, params, returnData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, res = context.res, req = context.req, history = context.history, isServer = context.isServer, match = context.match; // 没有newsId跳转到新闻列表页

                newsId = match.params.newsId; // 百度搜索跳转到首页--2020/7/3--后期可删除

                if (!(newsId === '20200305094124968744')) {
                  _context.next = 5;
                  break;
                }

                res.redirect(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].main());
                return _context.abrupt("return", {
                  customRes: true
                });

              case 5:
                if (newsId) {
                  _context.next = 8;
                  break;
                }

                isServer ? res.redirect('/') : history.push('/');
                return _context.abrupt("return", {
                  customRes: true
                });

              case 8:
                // 获取passportId, token
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId);
                token = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].token] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].token);
                params = {
                  id: newsId,
                  req: req
                };

                if (passportId) {
                  params = {
                    id: newsId,
                    passportId: passportId,
                    token: token,
                    req: req
                  };
                }

                returnData = {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].m("/newsdetail/".concat(match.params.newsId, ".html"), req),
                  title: '',
                  description: '',
                  keywords: '',
                  twettericon: ''
                };
                _context.next = 15;
                return Promise.all([store.dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__[/* getNewsDetails */ "d"])(params)), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_13__[/* getShowLivesList */ "b"])({
                  req: req
                })), // store.dispatch(getCalendarList()),
                store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_13__[/* getHoomRoomLiveList */ "a"])({
                  recommendFlag: 1,
                  pageSize: 3,
                  newFlag: 1,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_12__[/* getAdImplant */ "b"])([{
                  'adPlace': 2
                }, {
                  'adPlace': 5
                }, {
                  'adPlace': 7
                }]))]).then(function (response) {
                  var resDetails = response[0];

                  if (resDetails.code === 1) {
                    var details = resDetails.obj.current;
                    returnData.title = "".concat(details.title, "_MarsBit");
                    returnData.description = "".concat(details.synopsis, "\u6765\u6E90\u4E8EMarsBit\u4E13\u680F\u4F5C\u5BB6").concat(details.author);
                    returnData.keywords = details.tags;
                    var htmlinnfo = decodeURIComponent(resDetails.obj.current.content);
                    var imglist = htmlinnfo.match(/<img.*?>/g);

                    if (imglist) {
                      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
                      returnData.twettericon = imgurl;
                    }

                    store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_14__[/* getAuthorInfo */ "c"])({
                      passportId: resDetails.obj.current.createdBy,
                      myPassportId: passportId || ''
                    }));
                  } // 未查询到记录跳转到404页面


                  if (resDetails.code === -1) {
                    res.render('error', {
                      message: resDetails.msg || '新闻详情查询错误',
                      error: {
                        status: 200,
                        stack: JSON.stringify(resDetails)
                      }
                    });
                    returnData = {
                      customRes: true
                    };
                  }
                })["catch"](function (err) {
                  throw new Error(err);
                });

              case 15:
                return _context.abrupt("return", returnData);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);












var Author = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Author";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Author */ 1).then(__webpack_require__.bind(null, 80));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(80);
    }

    return eval('require.resolve')("../containers/Author");
  }
});

var AuthorPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AuthorPage, _Component);

  function AuthorPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AuthorPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AuthorPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AuthorPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Author, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, req, isServer, match, passportId, _match$params, order, type, page;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, req = context.req, isServer = context.isServer, match = context.match;
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId);
                _match$params = match.params, order = _match$params.order, type = _match$params.type, page = _match$params.page;
                _context.next = 5;
                return store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__[/* getAuthorList */ "d"])({
                  type: order || 5,
                  currentPage: page || 1,
                  pageSize: 30,
                  identityAuth: type === 0 && null || type || null,
                  myPassportId: passportId,
                  req: req
                }))["catch"](function (err) {
                  throw new Error(err);
                });

              case 5:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].m(),
                  title: 'MarsBit 专栏_MarsBit 专栏作者_MarsBit 专栏作家_MarsBit',
                  description: 'MarsBit是全球估值最高的区块链产业信息，由资深区块链团队倾力打造，为中国区块链爱好者提供全球最新的区块链新闻资讯。MarsBit 专栏，推动全民学习区块链',
                  keywords: '区块链专栏,区块链作者,区块链媒体,区块链项目,区块链机构，区块链KOL'
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AuthorPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorDetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_author__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);













var AuthorDetails = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-AuthorDetails";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-AuthorDetails */ 2).then(__webpack_require__.bind(null, 87));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(87);
    }

    return eval('require.resolve')("../containers/AuthorDetails");
  }
});

var AuthorDetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AuthorDetailsPage, _Component);

  function AuthorDetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AuthorDetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AuthorDetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AuthorDetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AuthorDetails, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, req, isServer, match, authorId, passportId, token, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, req = context.req, isServer = context.isServer, match = context.match; // 获取作者 passportId

                authorId = match.params.authorId; // 获取自己 passportId, token

                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId);
                token = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].token] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].token);
                params = {
                  passportId: authorId,
                  token: authorId === passportId ? token : '',
                  currentPage: 1,
                  pageSize: 15,
                  status: 1,
                  req: req
                };
                _context.next = 7;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__[/* getNewsList */ "i"])(params, 'author')), store.dispatch(Object(_redux_actions_author__WEBPACK_IMPORTED_MODULE_12__[/* getAuthorVideo */ "d"])(params, 'author')), store.dispatch(Object(_redux_actions_author__WEBPACK_IMPORTED_MODULE_12__[/* getAuthor */ "a"])(params, 'author')), store.dispatch(Object(_redux_actions_author__WEBPACK_IMPORTED_MODULE_12__[/* getAuthorAchieve */ "b"])(params, 'author')), store.dispatch(Object(_redux_actions_author__WEBPACK_IMPORTED_MODULE_12__[/* getAuthorInfo */ "c"])(params, 'author'))])["catch"](function (err) {
                  throw Error(err);
                });

              case 7:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].m(),
                  title: 'author details',
                  keywords: 'author details',
                  description: 'author details'
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AuthorDetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);











var Feature = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Feature";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Feature */ 4).then(__webpack_require__.bind(null, 89));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(89);
    }

    return eval('require.resolve')("../containers/Feature");
  }
});

var FeaturePage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FeaturePage, _Component);

  function FeaturePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FeaturePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FeaturePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FeaturePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Feature, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, req = context.req;
                _context.next = 3;
                return store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getFeatureList */ "e"])({
                  currentPage: 1,
                  pageSize: 15,
                  orderType: 0,
                  req: req
                }))["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u76F8\u5173\u4E13\u9898\u9519\u8BEF: ".concat(err));
                });

              case 3:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* mixUrl */ "w"].m("/feature", req),
                  title: 'MarsBit-关注区块链与数字经济_MarsBit',
                  description: '区块链热点事件报道与区块链专题展示。MarsBit是全球估值最高的区块链产业信息，由资深区块链团队倾力打造，为中国区块链爱好者提供全球最新的区块链新闻资讯',
                  keywords: 'MarsBit,区块链,区块链新闻,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,区块链活动,比特币,BTC,比特币价格,BTC价格,POWER,POWER大会'
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FeaturePage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureDetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);













var FeatureDetailsAndTags = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-FeatureDetailsAndTags";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-FeatureDetailsAndTags */ 5).then(__webpack_require__.bind(null, 90));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(90);
    }

    return eval('require.resolve')("../containers/FeatureDetailsAndTags");
  }
});

var FeatureDetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(FeatureDetailsPage, _Component);

  function FeatureDetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FeatureDetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(FeatureDetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FeatureDetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FeatureDetailsAndTags, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
        pageType: "feature"
      }, this.props));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, isServer, res, history, req, featureId, featureDetails, topic;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, isServer = context.isServer, res = context.res, history = context.history, req = context.req;
                featureId = decodeURI(match.params.featureId);

                if (featureId) {
                  _context.next = 5;
                  break;
                }

                isServer ? res.redirect('/') : history.push('/');
                return _context.abrupt("return", {
                  customRes: true
                });

              case 5:
                _context.next = 7;
                return store.dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__[/* getFeatureDetails */ "b"])({
                  id: featureId,
                  currentPage: 1,
                  pageSize: 15,
                  req: req
                }))["catch"](function (err) {
                  throw new Error(err);
                });

              case 7:
                featureDetails = _context.sent;
                topic = featureDetails.obj.topic;
                _context.next = 11;
                return Promise.all([new Promise(function (resolve, reject) {
                  store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__[/* getHotNews */ "g"])({
                    lastDays: 3,
                    readCounts: 50,
                    newsCounts: 6,
                    req: req
                  })).then(function (res) {
                    if (res.code === 1) {
                      resolve(res);
                    } else {
                      throw res.msg;
                    }
                  })["catch"](function (err) {
                    reject(new Error("\u83B7\u53D6\u70ED\u95E8\u65B0\u95FB\u9519\u8BEF: ".concat(err)));
                  });
                }), // new Promise((resolve, reject) => {
                //     store.dispatch(getTopicInfo({
                //         currentPage: 1,
                //         pageSize: 15,
                //         id: featureId
                //     })).then(function (res) {
                //         if (res.code === 1) {
                //             resolve(res)
                //         } else {
                //             throw res.msg
                //         }
                //     }).catch(function (err) {
                //         reject(new Error(`获取专题内容列表错误: ${err}`))
                //     })
                // }),
                new Promise(function (resolve, reject) {
                  store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__[/* getFeatureRecommendList */ "f"])({
                    currentPage: 1,
                    pageSize: 5,
                    req: req
                  })).then(function (res) {
                    if (res.code === 1) {
                      resolve(res);
                    } else {
                      throw res.msg;
                    }
                  })["catch"](function (err) {
                    reject(new Error("\u83B7\u53D6\u4E13\u9898\u5217\u8868\u9519\u8BEF: ".concat(err)));
                  });
                })])["catch"](function (err) {
                  throw err;
                });

              case 11:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].m("/feature/".concat(match.params.featureId), req),
                  title: "".concat(topic.topicName, "_MarsBit"),
                  description: topic.description,
                  keywords: "".concat(topic.tags, "\u533A\u5757\u94FE\u6280\u672F\u6587\u7AE0,").concat(topic.tags, "\u65B0\u95FB,").concat(topic.tags, "\u5FEB\u8BAF,").concat(topic.tags, "\u6DF1\u5EA6\u5206\u6790,").concat(topic.tags, "\u662F\u4EC0\u4E48,").concat(topic.tags, "\u4ECB\u7ECD,\u5FEB\u8BAF\u4E86\u89E3").concat(topic.tags, ",\u533A\u5757\u94FE\u65B0\u95FB,\u533A\u5757\u94FE\u5FEB\u8BAF,\u533A\u5757\u94FE\u6280\u672F")
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FeatureDetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);













var Tags = _loadable_component__WEBPACK_IMPORTED_MODULE_10___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Tags";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Tags */ 11).then(__webpack_require__.bind(null, 81));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(81);
    }

    return eval('require.resolve')("../containers/Tags");
  }
});

var TagsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(TagsPage, _Component);

  function TagsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, TagsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(TagsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(TagsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Tags, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({
        pageType: "tags"
      }, this.props));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, isServer, res, req, history, tags, breakTheLaw, webTdkTags;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, isServer = context.isServer, res = context.res, req = context.req, history = context.history;
                tags = decodeURI(match.params.tags);
                breakTheLaw = ['正规真人', '三合一', '网络上赌', '现场同步', '网络网投', '网络赌博', '网赌'];

                if (tags) {
                  _context.next = 6;
                  break;
                }

                isServer ? res.redirect('/') : history.push('/');
                return _context.abrupt("return", {
                  customRes: true
                });

              case 6:
                _context.next = 8;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__[/* getHotNews */ "g"])({
                  lastDays: 3,
                  readCounts: 50,
                  newsCounts: 6,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__[/* getNewsList */ "i"])({
                  currentPage: 1,
                  pageSize: 15,
                  tags: tags,
                  req: req
                }, 'tags')), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_11__[/* getFeatureRecommendList */ "f"])({
                  currentPage: 1,
                  pageSize: 5,
                  req: req
                }))])["catch"](function (err) {
                  throw err;
                });

              case 8:
                webTdkTags = {
                  title: "".concat(tags.toLowerCase() === 'sto' ? '如何认识STO' : "".concat(tags, "_").concat(tags, "\u76F8\u5173\u65B0\u95FB_").concat(tags, "\u52A8\u6001"), "_MarsBit"),
                  description: "".concat(tags, "\u7684\u6700\u65B0\u62A5\u9053\uFF0C").concat(tags, "\u6700\u65B0\u65B0\u95FB \u5FEB\u8BAF\u63D0\u4F9B\u6700\u5FEB\u8BAF\u7684\u533A\u5757\u94FE\u5FEB\u8BAF\u4E0E\u533A\u5757\u94FE\u65B0\u95FB"),
                  keywords: "".concat(tags, "\u533A\u5757\u94FE\u6280\u672F\u6587\u7AE0,").concat(tags, "\u65B0\u95FB,").concat(tags, "\u5FEB\u8BAF,").concat(tags, "\u6DF1\u5EA6\u5206\u6790,").concat(tags, "\u662F\u4EC0\u4E48,").concat(tags, "\u4ECB\u7ECD,\u5FEB\u8BAF\u4E86\u89E3").concat(tags, ",\u533A\u5757\u94FE\u65B0\u95FB,\u533A\u5757\u94FE\u5FEB\u8BAF,\u533A\u5757\u94FE\u6280\u672F") // 针对百度搜录“崔萌”，seo临时方案，后期可删除

                };

                if (tags === '崔萌') {
                  webTdkTags = _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* webTdk */ "E"];
                } // 习见平


                if (!(tags === '习见平')) {
                  _context.next = 15;
                  break;
                }

                res.redirect(301, _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].news());
                return _context.abrupt("return", {
                  customRes: true
                });

              case 15:
                if (breakTheLaw.includes(tags) || tags.indexOf('三合') > -1 || tags.indexOf('合一') > -1) {
                  res.redirect(301, _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].main());
                }

              case 16:
                return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].m(match.url, req)
                }, webTdkTags));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TagsPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_flash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_flash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(26);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
















var Home = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Flash";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Flash */ 6).then(__webpack_require__.bind(null, 91));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(91);
    }

    return eval('require.resolve')("../containers/Flash");
  }
});
var title = '区块链快讯_区块链项目动态_区块链报道_MarsBit';
var description = 'MarsBit快讯提供最快讯的区块链快讯、数字货币快讯、比特币快讯、以太坊快讯、项目快讯、交易所快讯、投资快讯、政策快讯等区块链实时要闻和市场行情信息';
var keywords = 'MarsBit,区块链,区块链快讯,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,比特币,BTC,区块链活动,比特币价格,BTC价格,POWER,POWER大会';

var FlashPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FlashPage, _Component);

  function FlashPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FlashPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FlashPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FlashPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Home, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, isServer, req, passportId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, isServer = context.isServer, req = context.req;
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_15__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_15__[/* cookiesName */ "f"].passportId);
                _context.next = 4;
                return Promise.all([store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_10__[/* getFlashChannel */ "a"])({
                  req: req
                })), store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_10__[/* getImportantFlash */ "c"])({
                  tags: 2,
                  currentPage: 1,
                  pageSize: 10,
                  req: req
                })), store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_10__[/* getNewsRankings */ "d"])({
                  lastDays: 1,
                  readCounts: 50,
                  newsCounts: 6,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_13__[/* getHotNews */ "g"])({
                  lastDays: 3,
                  readCounts: 50,
                  newsCounts: 10,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_flash__WEBPACK_IMPORTED_MODULE_12__[/* getFlashList */ "b"])({
                  currentPage: 1,
                  pageSize: 20,
                  passportid: passportId,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_11__[/* getAd */ "a"])({
                  adPlace: 5,
                  type: 1,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_14__[/* getHoomRoomLiveList */ "a"])({
                  recommendFlag: 1,
                  pageSize: 3,
                  newFlag: 1,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_11__[/* getAdImplant */ "b"])([{
                  'adPlace': 12,
                  'secondPosition': 0
                }, {
                  'adPlace': 5
                }]))])["catch"](function (err) {
                  throw Error(err);
                });

              case 4:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_15__[/* mixUrl */ "w"].m("/flash", req),
                  title: title,
                  description: description,
                  keywords: keywords,
                  cookies: req.cookies
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FlashPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashDetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);












 // import twetticon from '../../static/resource/images/huoxing24.png'

var Details = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-FlashDetails";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-FlashDetails */ 7).then(__webpack_require__.bind(null, 92));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(92);
    }

    return eval('require.resolve')("../containers/FlashDetails");
  }
});

var FlashDetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FlashDetailsPage, _Component);

  function FlashDetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FlashDetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FlashDetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FlashDetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Details, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, req, res, isServer, match, flashId, params, passportId, returnData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, req = context.req, res = context.res, isServer = context.isServer, match = context.match;
                flashId = match.params.flashId;
                params = {
                  id: flashId,
                  req: req
                };
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* cookiesName */ "f"].passportId);

                if (passportId) {
                  params.passportid = passportId;
                }

                returnData = {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* mixUrl */ "w"].m("/flashshare/".concat(match.params.flashId, ".html"), req),
                  title: '',
                  description: '',
                  keywords: '',
                  twettericon: ''
                };
                _context.next = 8;
                return Promise.all([store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__[/* getFlashDetails */ "b"])(params)), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_home__WEBPACK_IMPORTED_MODULE_12__[/* getShowLivesList */ "b"])({
                  req: req
                }))]).then(function (response) {
                  var resDetails = response[0];

                  if (resDetails.code === 1) {
                    var titleCon = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* flashRecognize */ "i"])(resDetails.obj);
                    returnData.title = "".concat(titleCon.title, "_MarsBit");
                    returnData.description = titleCon.content;
                    returnData.keywords = "MarsBit,\u533A\u5757\u94FE,\u533A\u5757\u94FE\u5FEB\u8BAF,\u533A\u5757\u94FE\u670D\u52A1,\u533A\u5757\u94FE\u662F\u4EC0\u4E48,\u533A\u5757\u94FE\u5A92\u4F53,\u533A\u5757\u94FE\u5E94\u7528,\u533A\u5757\u94FE\u793E\u533A,\u533A\u5757\u94FE\u6280\u672F,\u533A\u5757\u94FE\u6D4F\u89C8\u5668,\u533A\u5757\u94FE\u62DB\u8058,\u533A\u5757\u94FE\u5B66\u4E60,\u6BD4\u7279\u5E01,BTC,\u533A\u5757\u94FE\u6D3B\u52A8,\u6BD4\u7279\u5E01\u4EF7\u683C,BTC\u4EF7\u683C,POWER,POWER\u5927\u4F1A";
                    var imglist = titleCon.content.match(/<img.*?>/g);

                    if (imglist) {
                      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
                      returnData.twettericon = imgurl;
                    }
                  } // 未查询到记录跳转到404页面


                  if (resDetails.code === -1) {
                    res.render('error', {
                      message: resDetails.msg || '快讯详情查询错误',
                      error: {
                        status: 200,
                        stack: JSON.stringify(resDetails)
                      }
                    });
                    returnData = {
                      customRes: true
                    };
                  }
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u5FEB\u8BAF\u8BE6\u60C5\u9519\u8BEF: ".concat(err));
                });

              case 8:
                return _context.abrupt("return", returnData);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FlashDetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeDetailPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_notice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30);












var NoticeDetail = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-NoticeDetail";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-NoticeDetail */ 10).then(__webpack_require__.bind(null, 82));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(82);
    }

    return eval('require.resolve')("../containers/NoticeDetail");
  }
});

var NoticeDetailPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(NoticeDetailPage, _Component);

  function NoticeDetailPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NoticeDetailPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(NoticeDetailPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NoticeDetailPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NoticeDetail, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, id, title, tdk;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match;
                id = match.params.id;
                title = '';
                _context.next = 5;
                return Promise.all([store.dispatch(Object(_redux_actions_notice__WEBPACK_IMPORTED_MODULE_11__[/* getBourseStatisticsList */ "b"])()).then(function (res) {
                  if (res.code !== 1) throw res.msg;
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u4EA4\u6613\u6240\u516C\u544A\u7EDF\u8BA1\u9519\u8BEF: ".concat(err));
                }), store.dispatch(Object(_redux_actions_notice__WEBPACK_IMPORTED_MODULE_11__[/* getNoticeDetail */ "c"])({
                  noticeId: id
                })).then(function (res) {
                  title = res.obj.currentExchangeNotice.title;
                  if (res.code !== 1) throw res.msg;
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u4EA4\u6613\u6240\u516C\u544A\u8BE6\u60C5\u7EDF\u8BA1\u9519\u8BEF: ".concat(err));
                })]);

              case 5:
                tdk = {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* mixUrl */ "w"].m(match.url),
                  title: "".concat(title, "_MarsBit"),
                  keywords: '平台公告,数字货币最新公告,虚拟币最新公告',
                  description: 'MarsBit公告专区，了解区块链最新动态'
                };
                return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, tdk));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NoticeDetailPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_notice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);











var Notice = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-Notice";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-Notice */ 9).then(__webpack_require__.bind(null, 93));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(93);
    }

    return eval('require.resolve')("../containers/Notice");
  }
});

var NoticePage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(NoticePage, _Component);

  function NoticePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NoticePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(NoticePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NoticePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Notice, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, req, tdk;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, req = context.req;
                _context.next = 3;
                return Promise.all([store.dispatch(Object(_redux_actions_notice__WEBPACK_IMPORTED_MODULE_10__[/* getNoticeList */ "d"])({
                  exchangeSymbol: '',
                  type: '',
                  search: '',
                  page: 1,
                  pageSize: 20,
                  req: req
                })).then(function (res) {
                  if (res.code !== 1) throw res.msg;
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u516C\u544A\u5217\u8868\u9519\u8BEF: ".concat(err));
                }), store.dispatch(Object(_redux_actions_notice__WEBPACK_IMPORTED_MODULE_10__[/* getBourseList */ "a"])()).then(function (res) {
                  if (res.code !== 1) throw res.msg;
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u4EA4\u6613\u6240\u4FE1\u606F\u9519\u8BEF: ".concat(err));
                }), store.dispatch(Object(_redux_actions_notice__WEBPACK_IMPORTED_MODULE_10__[/* getBourseStatisticsList */ "b"])()).then(function (res) {
                  if (res.code !== 1) throw res.msg;
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u4EA4\u6613\u6240\u516C\u544A\u7EDF\u8BA1\u9519\u8BEF: ".concat(err));
                })]);

              case 3:
                tdk = {
                  title: '平台最新公告_MarsBit',
                  keywords: '平台公告,数字货币最新公告,虚拟币最新公告',
                  description: 'MarsBit公告专区，了解区块链最新动态'
                };
                return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                  clientLink: 'onlyPc'
                }, tdk));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NoticePage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-header-logo-blue-da1e4841.svg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-search-007ea385.svg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "languageiconh5-6b605a04.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-b-logo-cbe38d33.png";

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);












 // import icon from '../../static/resource/images/huoxing24.png'

var NewsDetail = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-News";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-News */ 18).then(__webpack_require__.bind(null, 88));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(88);
    }

    return eval('require.resolve')("../containers-m/News");
  }
});

var DetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(DetailsPage, _Component);

  function DetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(DetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NewsDetail, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, res, req, history, isServer, match, newsId, passportId, token, params, returnData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, res = context.res, req = context.req, history = context.history, isServer = context.isServer, match = context.match; // console.log(req.hostname)

                newsId = match.params.newsId; // 百度 搜索跳转到首页--2020/7/3--后期可删除

                if (!(newsId === '20200305094124968744')) {
                  _context.next = 5;
                  break;
                }

                res.redirect(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].main());
                return _context.abrupt("return", {
                  customRes: true
                });

              case 5:
                if (newsId) {
                  _context.next = 8;
                  break;
                }

                isServer ? res.redirect('/') : history.push('/');
                return _context.abrupt("return", {
                  customRes: true
                });

              case 8:
                // 获取passportId, token
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].passportId);
                token = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].token] : js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* cookiesName */ "f"].token);
                params = {
                  id: newsId,
                  req: req
                };

                if (passportId) {
                  params = {
                    id: newsId,
                    passportId: passportId,
                    token: token,
                    req: req
                  };
                }

                returnData = {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].news("/".concat(match.params.newsId, ".html"), req),
                  title: '',
                  description: '',
                  keywords: '',
                  twettericon: ''
                };
                _context.next = 15;
                return Promise.all([store.dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__[/* getNewsDetails */ "d"])(params))]).then(function (response) {
                  var resDetails = response[0];

                  if (resDetails.code === 1) {
                    var details = resDetails.obj.current;
                    returnData.title = "".concat(details.title, "_MarsBit");
                    returnData.description = "".concat(details.synopsis, "\u6765\u6E90\u4E8EMarsBit\u4E13\u680F\u4F5C\u5BB6").concat(details.author);
                    returnData.keywords = details.tags;
                    var htmlinnfo = decodeURIComponent(resDetails.obj.current.content);
                    var imglist = htmlinnfo.match(/<img.*?>/g);

                    if (imglist) {
                      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
                      returnData.twettericon = imgurl;
                    }

                    store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_12__[/* getAuthorInfo */ "c"])({
                      passportId: resDetails.obj.current.createdBy,
                      myPassportId: passportId || '',
                      req: req
                    }));
                  } // 未查询到记录跳转到404页面


                  if (resDetails.code === -1) {
                    res.render('error', {
                      message: resDetails.msg || '新闻详情查询错误',
                      error: {
                        status: 200,
                        stack: JSON.stringify(resDetails)
                      }
                    });
                    returnData = {
                      customRes: true
                    };
                  }
                })["catch"](function (err) {
                  throw new Error(err);
                });

              case 15:
                return _context.abrupt("return", returnData);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailSharePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);












 // import icon from '../../static/resource/images/huoxing24.png'

var DetalShare = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-DetailShare";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-DetailShare */ 12).then(__webpack_require__.bind(null, 83));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(83);
    }

    return eval('require.resolve')("../containers-m/DetailShare");
  }
});

var DetailSharePage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(DetailSharePage, _Component);

  function DetailSharePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DetailSharePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(DetailSharePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DetailSharePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DetalShare, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var match, store, res, req, isServer, history, newsId, passportId, token, params, returnData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                match = context.match, store = context.store, res = context.res, req = context.req, isServer = context.isServer, history = context.history;
                newsId = match.params.newsId;

                if (newsId) {
                  _context.next = 5;
                  break;
                }

                isServer ? res.redirect('/') : history.push('/');
                return _context.abrupt("return", {
                  customRes: true
                });

              case 5:
                // 获取passportId, token
                passportId = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* cookiesName */ "f"].passportId] : js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* cookiesName */ "f"].passportId);
                token = isServer ? req.cookies[_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* cookiesName */ "f"].token] : js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* cookiesName */ "f"].token);
                params = {
                  id: newsId,
                  req: req
                };

                if (passportId) {
                  params = {
                    id: newsId,
                    passportId: passportId,
                    token: token,
                    req: req
                  };
                }

                returnData = {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "w"].news("/".concat(match.params.newsId, ".html"), req),
                  title: '',
                  description: '',
                  keywords: '',
                  twettericon: ''
                };
                _context.next = 12;
                return Promise.all([store.dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_12__[/* getNewsDetails */ "d"])(params)), store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__[/* getImportantFlash */ "c"])({
                  tags: 2,
                  currentPage: 1,
                  pageSize: 6,
                  req: req
                }))]).then(function (response) {
                  var resDetails = response[0];

                  if (resDetails.code === 1) {
                    var details = resDetails.obj.current;
                    returnData.title = "".concat(details.title, "_MarsBit");
                    returnData.description = "".concat(details.synopsis, "\u6765\u6E90\u4E8EMarsBit\u4E13\u680F\u4F5C\u5BB6").concat(details.author);
                    returnData.keywords = details.tags;
                    var htmlinnfo = decodeURIComponent(resDetails.obj.current.content);
                    var imglist = htmlinnfo.match(/<img.*?>/g);

                    if (imglist) {
                      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
                      returnData.twettericon = imgurl;
                    }
                  } // 未查询到记录跳转到404页面


                  if (resDetails.code === -1) {
                    res.render('error', {
                      message: resDetails.msg || '新闻详情查询错误',
                      error: {
                        status: 200,
                        stack: JSON.stringify(resDetails)
                      }
                    });
                    returnData = {
                      customRes: true
                    };
                  }
                })["catch"](function (err) {
                  throw new Error(err);
                });

              case 12:
                return _context.abrupt("return", returnData);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DetailSharePage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);












var Feature = _loadable_component__WEBPACK_IMPORTED_MODULE_8___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-Feature";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-Feature */ 13).then(__webpack_require__.bind(null, 95));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(95);
    }

    return eval('require.resolve')("../containers-m/Feature");
  }
});

var FeaturePage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FeaturePage, _Component);

  function FeaturePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FeaturePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FeaturePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FeaturePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Feature, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, req = context.req;
                _context.next = 3;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getFeatureList */ "e"])({
                  currentPage: 1,
                  pageSize: 15,
                  orderType: 0,
                  req: req
                })), store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_header__WEBPACK_IMPORTED_MODULE_10__[/* getHeaderChannels */ "a"])())])["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u76F8\u5173\u6570\u636E\u9519\u8BEF: ".concat(err));
                });

              case 3:
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].news("/feature", req),
                  title: '专题_MarsBit-关注区块链与数字经济_MarsBit',
                  description: '区块链热点事件报道与区块链专题展示。MarsBit是全球估值最高的区块链产业信息，由资深区块链团队倾力打造，为中国区块链爱好者提供全球最新的区块链新闻资讯',
                  keywords: 'MarsBit,区块链,区块链新闻,区块链服务,区块链是什么,区块链媒体,区块链应用,区块链社区,区块链技术,区块链浏览器,区块链招聘,区块链学习,区块链活动,比特币,BTC,比特币价格,BTC价格,POWER,POWER大会'
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FeaturePage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureDetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);













var FeatureDetail = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-FeatureDetail";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-FeatureDetail */ 14).then(__webpack_require__.bind(null, 96));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(96);
    }

    return eval('require.resolve')("../containers-m/FeatureDetail");
  }
});

var FeatureDetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(FeatureDetailsPage, _Component);

  function FeatureDetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FeatureDetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(FeatureDetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FeatureDetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FeatureDetail, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
        pageType: "feature"
      }, this.props));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, isServer, res, history, req, featureId, featureDetails, topic;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, isServer = context.isServer, res = context.res, history = context.history, req = context.req;
                featureId = decodeURI(match.params.featureId);

                if (featureId) {
                  _context.next = 5;
                  break;
                }

                isServer ? res.redirect('/') : history.push('/');
                return _context.abrupt("return", {
                  customRes: true
                });

              case 5:
                _context.next = 7;
                return store.dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_10__[/* getFeatureDetails */ "b"])({
                  id: featureId,
                  currentPage: 1,
                  pageSize: 15,
                  req: req
                }))["catch"](function (err) {
                  throw new Error(err);
                });

              case 7:
                featureDetails = _context.sent;
                _context.next = 10;
                return Promise.all([store.dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_header__WEBPACK_IMPORTED_MODULE_11__[/* getHeaderChannels */ "a"])({
                  req: req
                }))])["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u76F8\u5173\u6570\u636E\u9519\u8BEF: ".concat(err));
                });

              case 10:
                topic = featureDetails.obj.topic;
                return _context.abrupt("return", {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_12__[/* mixUrl */ "w"].news("/feature/".concat(match.params.featureId), req),
                  title: "".concat(topic.topicName, "_MarsBit"),
                  description: topic.description,
                  keywords: "".concat(topic.tags, "\u533A\u5757\u94FE\u6280\u672F\u6587\u7AE0,").concat(topic.tags, "\u65B0\u95FB,").concat(topic.tags, "\u5FEB\u8BAF,").concat(topic.tags, "\u6DF1\u5EA6\u5206\u6790,").concat(topic.tags, "\u662F\u4EC0\u4E48,").concat(topic.tags, "\u4ECB\u7ECD,\u5FEB\u8BAF\u4E86\u89E3").concat(topic.tags, ",\u533A\u5757\u94FE\u65B0\u95FB,\u533A\u5757\u94FE\u5FEB\u8BAF,\u533A\u5757\u94FE\u6280\u672F")
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FeatureDetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40);
/* harmony import */ var _public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_12__);













var FlashDetail = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-FlashDetail";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-FlashDetail */ 16).then(__webpack_require__.bind(null, 84));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(84);
    }

    return eval('require.resolve')("../containers-m/FlashDetail");
  }
});

var DetailsPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(DetailsPage, _Component);

  function DetailsPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, DetailsPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(DetailsPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(DetailsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FlashDetail, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, res, req, epxressRes, flashId, returnData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, res = context.res, req = context.req;
                epxressRes = res;
                flashId = match.params.flashId;
                returnData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* mixUrl */ "w"].news("/flash/".concat(flashId, ".html"), req),
                  shareIcon: _public_img_flash_share_icon_jpg__WEBPACK_IMPORTED_MODULE_12___default.a
                }, _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* webTdk */ "E"]);
                _context.next = 6;
                return Promise.all([store.dispatch(Object(_redux_actions_flash__WEBPACK_IMPORTED_MODULE_11__[/* getFlashDetails */ "b"])({
                  id: flashId,
                  req: req
                })).then(function (res) {
                  if (res.code === 1) {
                    var titleCon = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_10__[/* flashRecognize */ "i"])(res.obj);
                    returnData.title = "".concat(titleCon.title, "_MarsBit");
                    returnData.shareTitle = "".concat(titleCon.title);
                    returnData.description = titleCon.content;
                    returnData.keywords = "MarsBit,\u533A\u5757\u94FE,\u533A\u5757\u94FE\u5FEB\u8BAF,\u533A\u5757\u94FE\u670D\u52A1,\u533A\u5757\u94FE\u662F\u4EC0\u4E48,\u533A\u5757\u94FE\u5A92\u4F53,\u533A\u5757\u94FE\u5E94\u7528,\u533A\u5757\u94FE\u793E\u533A,\u533A\u5757\u94FE\u6280\u672F,\u533A\u5757\u94FE\u6D4F\u89C8\u5668,\u533A\u5757\u94FE\u62DB\u8058,\u533A\u5757\u94FE\u5B66\u4E60,\u6BD4\u7279\u5E01,BTC,\u533A\u5757\u94FE\u6D3B\u52A8,\u6BD4\u7279\u5E01\u4EF7\u683C,BTC\u4EF7\u683C,POWER,POWER\u5927\u4F1A";
                    var imglist = titleCon.content.match(/<img.*?>/g);

                    if (imglist) {
                      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
                      returnData.twettericon = imgurl;
                    }
                  } // 未查询到记录跳转到快讯列表页


                  if (res.code === -1) {
                    epxressRes.redirect('/flash/');
                    returnData = {
                      customRes: true
                    };
                  }
                })["catch"](function (err) {
                  throw new Error("\u83B7\u53D6\u5FEB\u8BAF\u8BE6\u60C5\u9519\u8BEF: ".concat(err));
                })]);

              case 6:
                return _context.abrupt("return", returnData);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DetailsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeDetailPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_noticeDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);












var NoticeDetail = _loadable_component__WEBPACK_IMPORTED_MODULE_9___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "containers-m-NoticeDetail";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | containers-m-NoticeDetail */ 19).then(__webpack_require__.bind(null, 85));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(85);
    }

    return eval('require.resolve')("../containers-m/NoticeDetail");
  }
});

var NoticeDetailPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(NoticeDetailPage, _Component);

  function NoticeDetailPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NoticeDetailPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(NoticeDetailPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NoticeDetailPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NoticeDetail, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var store, match, req, noticeId, title, shareIcon, tdk;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = context.store, match = context.match, req = context.req;
                noticeId = match.params.noticeId;
                title = '';
                shareIcon = '';
                _context.next = 6;
                return store.dispatch(Object(_redux_actions_noticeDetail__WEBPACK_IMPORTED_MODULE_10__[/* getNoticeIdDetail */ "a"])({
                  noticeId: noticeId,
                  req: req
                })).then(function (res) {
                  title = "".concat(res.obj.currentExchangeNotice.title, "_MarsBit");
                  shareIcon = res.obj.currentExchangeNotice.exchangeIconUrl;
                })["catch"](function (err) {
                  throw Error(err);
                });

              case 6:
                tdk = {
                  clientLink: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_11__[/* mixUrl */ "w"].news(match.url),
                  title: title,
                  description: "https://news.huoxing24.com/noticeDetail/".concat(noticeId),
                  keywords: '区块链,区块链新闻,区块链服务,公告,交易所公告,区块链公告',
                  shareIcon: shareIcon
                };
                return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, tdk));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NoticeDetailPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/redux/constants/noticeDetail.js
// 交易所公告详情
var GETNOTICEDETAIL = 'get-notice-detail';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(9);

// CONCATENATED MODULE: ./assets/redux/actions/noticeDetail.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noticeDetail_getNoticeIdDetail; });





/**
 * @desc 交易所公告详情
 * @Params {params} params = {noticeId 公告id}
 */

var noticeDetail_getNoticeIdDetail = function getNoticeIdDetail(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: '/info/notice/one',
                  params: params
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETNOTICEDETAIL,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-config"
var external_react_router_config_ = __webpack_require__(32);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(16);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(25);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(10);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(18);

// EXTERNAL MODULE: ./_multiappsharing/components/Layout/Header/Navigation/images/header-logo.svg
var header_logo = __webpack_require__(51);
var header_logo_default = /*#__PURE__*/__webpack_require__.n(header_logo);

// EXTERNAL MODULE: ./_multiappsharing/public/img/download_img.png
var download_img = __webpack_require__(34);
var download_img_default = /*#__PURE__*/__webpack_require__.n(download_img);

// EXTERNAL MODULE: ./_multiappsharing/public/img/avatar-default.jpg
var avatar_default = __webpack_require__(52);
var avatar_default_default = /*#__PURE__*/__webpack_require__.n(avatar_default);

// EXTERNAL MODULE: ./_multiappsharing/components/Layout/Header/Navigation/images/languageicon.png
var languageicon = __webpack_require__(53);
var languageicon_default = /*#__PURE__*/__webpack_require__.n(languageicon);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/login.js + 1 modules
var login = __webpack_require__(15);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: ./_multiappsharing/components/RegisterLogin/images/icon-sms.png
var icon_sms = __webpack_require__(35);
var icon_sms_default = /*#__PURE__*/__webpack_require__.n(icon_sms);

// EXTERNAL MODULE: ./_multiappsharing/components/RegisterLogin/images/icon-wechat.png
var icon_wechat = __webpack_require__(36);
var icon_wechat_default = /*#__PURE__*/__webpack_require__.n(icon_wechat);

// EXTERNAL MODULE: ./_multiappsharing/components/RegisterLogin/public.js
var RegisterLogin_public = __webpack_require__(19);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// CONCATENATED MODULE: ./_multiappsharing/components/RegisterLogin/Account.js











var Account_Account = function Account(props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;
  /** @desc 获取props */


  var loginStatus = props.loginStatus,
      mobile = props.mobile;
  /** @desc 账号 */

  var phoneNum = Object(external_react_["useRef"])();

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      phoneNumErr = _useState2[0],
      setPhoneNumErr = _useState2[1];
  /** @desc 密码 */


  var psd = Object(external_react_["useRef"])();

  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      psdErr = _useState4[0],
      setPsdErr = _useState4[1];
  /** @desc 确认登录 */


  var confirm = Object(external_react_["useCallback"])(function () {
    var accountVal = Object(_multiappsharing_public["C" /* trim */])(phoneNum.current.value);
    var psdVal = Object(_multiappsharing_public["C" /* trim */])(psd.current.value);
    var validateAccount = accountVal === '' || !Object(_multiappsharing_public["t" /* isPhone */])(accountVal);
    var validatePsd = psdVal === '';
    if (validateAccount) setPhoneNumErr(t('please_sure_ipone'));
    if (validatePsd) setPsdErr(t('password_not_null'));

    if (validateAccount || validatePsd) {
      return false;
    }

    var _require = __webpack_require__(45),
        encodePsd = _require.encodePsd;

    Object(login["j" /* sendLogin */])('/login', {
      phonenum: accountVal,
      password: encodePsd(psdVal)
    }).then(function (res) {
      if (res.code === 1) {
        Object(RegisterLogin_public["c" /* loginSuccess */])(res);
      } else {
        switch (res.code) {
          case -7:
            // -7手机号未注册
            setPhoneNumErr(res.msg);
            setPsdErr('');
            break;

          case -3:
            // -3 密码错误
            setPhoneNumErr('');
            setPsdErr(res.msg);
            break;

          default:
            Toast["a" /* default */].info(res.msg);
        }
      }
    })["catch"](function (err) {
      Toast["a" /* default */].info(t('account_paswd_error'));
      throw err;
    });
  }, []);
  /** @desc 回车确认登录 */

  Object(external_react_["useEffect"])(function () {
    window.onkeyup = function (event) {
      if (event.keyCode === 13) {
        confirm();
      }
    };
  }, []);
  return external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("div", {
    className: "header"
  }, external_react_default.a.createElement("h1", null, t('account_pasd_login')), external_react_default.a.createElement("a", {
    className: "new-account",
    onClick: function onClick() {
      loginStatus('register', true);
    }
  }, t('signnup_new_account'), external_react_default.a.createElement("span", {
    className: "arrow-icon"
  }))), external_react_default.a.createElement("div", {
    className: "body"
  }, external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "input-box"
  }, external_react_default.a.createElement("input", {
    ref: phoneNum,
    onFocus: function onFocus() {
      setPhoneNumErr('');
    },
    type: "text",
    placeholder: t('input_mobile_code')
  })), external_react_default.a.createElement("p", {
    className: "error"
  }, phoneNumErr)), external_react_default.a.createElement("div", {
    className: "item password"
  }, external_react_default.a.createElement("div", {
    className: "input-box"
  }, external_react_default.a.createElement("input", {
    ref: psd,
    onFocus: function onFocus() {
      setPsdErr('');
    },
    type: "password",
    placeholder: t('input_password')
  })), external_react_default.a.createElement("p", {
    className: "error"
  }, psdErr), external_react_default.a.createElement("a", {
    className: "password-forget",
    onClick: function onClick() {
      loginStatus('retrievePassword', true);
    }
  }, t('forget_password'))), external_react_default.a.createElement("button", {
    className: "submit",
    onClick: confirm
  }, t('sure')), external_react_default.a.createElement("div", {
    className: "other-way"
  }, external_react_default.a.createElement("p", null, t('other_ways_login')), external_react_default.a.createElement("div", {
    className: "ways"
  }, !mobile && external_react_default.a.createElement("a", {
    className: "wechat",
    title: t('wechat_login'),
    onClick: function onClick() {
      if (_multiappsharing_public["w" /* mixUrl */].main().indexOf(window.location.host) > -1) {
        loginStatus('wechat', true);
      } else {
        window.location.href = _multiappsharing_public["w" /* mixUrl */].main('/wechat');
      }
    }
  }, external_react_default.a.createElement("img", {
    src: icon_wechat_default.a,
    alt: t('wechat_login')
  })), external_react_default.a.createElement("a", {
    className: "sms",
    title: t('message_login'),
    onClick: function onClick() {
      loginStatus('sms', true);
    }
  }, external_react_default.a.createElement("img", {
    src: icon_sms_default.a,
    alt: t('message_login')
  }))))));
};

Account_Account.propTypes = {
  loginStatus: external_prop_types_["func"].isRequired
};
/* harmony default export */ var RegisterLogin_Account = (Account_Account);
// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(29);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// CONCATENATED MODULE: ./_multiappsharing/components/RegisterLogin/Register.js













var Register_Register =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      codeTimer: null,
      // 短信倒计时定时器
      psdTips: null,
      // 密码错误提示
      psdRight: false // 密码输入符合规则

      /** @desc 注册/找回密码接口返回错误 */

    };

    _this.registerApiFailed = function (res) {
      switch (res.code) {
        case -2:
        case -5:
          _this.graphSms.setState({
            phoneTips: res.msg
          });

          break;

        case -6:
          _this.graphSms.setState({
            smsTips: res.msg
          });

          break;

        default:
          Toast["a" /* default */].info(res.msg);
      }
    };

    _this.psdVeriry = function (passwordParam) {
      var password = passwordParam.target ? passwordParam.target.value : passwordParam;

      if (!Object(_multiappsharing_public["u" /* isPsd */])(password)) {
        _this.setState({
          psdTips: '密码长度6~16位，且同时包含字母和数字',
          psdRight: false
        });
      } else {
        _this.setState({
          psdTips: '',
          psdRight: true
        });
      }
    };

    _this.clearPsdTips = function () {
      _this.setState({
        psdTips: ''
      });
    };

    _this.loginHandle = function (phoneNum, password) {
      Object(login["j" /* sendLogin */])('/login', {
        phonenum: phoneNum,
        password: password
      }).then(function (res) {
        if (res.code === 1) {
          Object(RegisterLogin_public["c" /* loginSuccess */])(res);
        } else {
          Toast["a" /* default */].info(res.msg);
        }
      })["catch"](function (err) {
        Toast["a" /* default */].info('账号登录错误');
        throw err;
      });
    };

    _this.registerHandle = function () {
      var psdRight = _this.state.psdRight;
      var password = Object(_multiappsharing_public["C" /* trim */])(_this.password.value);
      var graphSms = _this.graphSms;
      graphSms.phoneVerify();
      graphSms.smsVerify();
      var _graphSms$state = graphSms.state,
          phoneRight = _graphSms$state.phoneRight,
          smsRight = _graphSms$state.smsRight;
      var phoneNum = graphSms.phoneNum.value;
      var smsCode = graphSms.smsCode.value;

      _this.psdVeriry(password);

      var sendOk = phoneRight && smsRight && psdRight;
      if (!sendOk) return false;

      var This = assertThisInitialized_default()(_this);

      var loginType = _this.props.loginType;

      var _require = __webpack_require__(45),
          encodePsd = _require.encodePsd;

      if (loginType === 'register') {
        // 注册
        var params = {
          phonenum: phoneNum,
          password: encodePsd(password),
          verifcode: smsCode,
          verifcategory: 1
        };
        if (Object(_multiappsharing_public["y" /* queryParam */])('inviteCode')) params.inviteCode = Object(_multiappsharing_public["y" /* queryParam */])('inviteCode');
        Object(login["j" /* sendLogin */])('/register', params).then(function (res) {
          if (res.code === 1) {
            This.loginHandle(phoneNum, encodePsd(password));
          } else {
            This.registerApiFailed(res);
          }
        })["catch"](function (err) {
          Toast["a" /* default */].info('用户注册错误');
          throw err;
        });
      } else if (loginType === 'retrievePassword') {
        Object(login["j" /* sendLogin */])('/getbackuserpw', {
          // 找回密码
          phonenum: phoneNum,
          password: encodePsd(password),
          verifcode: smsCode,
          verifcategory: 2
        }).then(function (res) {
          if (res.code === 1) {
            This.loginHandle(phoneNum, encodePsd(password));
          } else {
            This.registerApiFailed(res);
          }
        })["catch"](function (err) {
          Toast["a" /* default */].info('修改密码错误');
          throw err;
        });
      }
    };

    return _this;
  }

  createClass_default()(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 回车确认
      var This = this;

      window.onkeyup = function (event) {
        if (event.keyCode === 13) {
          This.registerHandle();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          loginType = _this$props.loginType,
          loginStatus = _this$props.loginStatus,
          mobile = _this$props.mobile,
          t = _this$props.t;
      var psdTips = this.state.psdTips;
      return external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "header"
      }, external_react_default.a.createElement("h1", {
        className: mobile ? 'mobile' : ''
      }, loginType === 'register' ? t('register_marsbit') : t('retrieve_password'))), external_react_default.a.createElement("div", {
        className: "body"
      }, external_react_default.a.createElement(RegisterLogin_public["a" /* GraphSms */], {
        ref: function ref(_ref) {
          _this2.graphSms = _ref;
        },
        loginType: loginType,
        t: t
      }), external_react_default.a.createElement("div", {
        className: "item password"
      }, external_react_default.a.createElement("div", {
        className: "input-box"
      }, external_react_default.a.createElement("input", {
        type: "password",
        placeholder: t('input_password'),
        ref: function ref(_ref2) {
          _this2.password = _ref2;
        },
        onFocus: this.clearPsdTips,
        onBlur: this.psdVeriry
      })), external_react_default.a.createElement("p", {
        className: "error"
      }, psdTips)), external_react_default.a.createElement("a", {
        className: "protocol",
        href: _multiappsharing_public["w" /* mixUrl */].main('/protocol'),
        target: "_blank"
      }, t('register_agree'), external_react_default.a.createElement("span", null, "\u300A", t('marsbit_user_agreement'), "\u300B")), external_react_default.a.createElement("button", {
        className: "submit",
        onClick: this.registerHandle
      }, t('to_sure')), external_react_default.a.createElement("a", {
        className: "tips",
        onClick: function onClick() {
          loginStatus('account', true);
        }
      }, external_react_default.a.createElement("span", null, t('haved_account_to_login')), external_react_default.a.createElement("span", {
        className: "arrow-icon"
      }))));
    }
  }]);

  return Register;
}(external_react_["Component"]);

Register_Register.propTypes = {
  loginStatus: external_prop_types_["func"].isRequired,
  loginType: external_prop_types_["string"].isRequired // register注册， retrievePassword找回密码, sms短信登录

};
/* harmony default export */ var RegisterLogin_Register = (Register_Register);
// EXTERNAL MODULE: ./_multiappsharing/components/RegisterLogin/images/icon-account.png
var icon_account = __webpack_require__(37);
var icon_account_default = /*#__PURE__*/__webpack_require__.n(icon_account);

// CONCATENATED MODULE: ./_multiappsharing/components/RegisterLogin/Sms.js















var Sms_Sms =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Sms, _Component);

  function Sms() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Sms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Sms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.loginApiFailed = function (res) {
      switch (res.code) {
        case -5:
        case -6:
        case -14:
          _this.graphSms.setState({
            phoneTips: res.msg
          });

          break;

        case -4:
          _this.graphSms.setState({
            smsTips: res.msg
          });

          break;

        default:
          Toast["a" /* default */].info(res.msg);
      }
    };

    _this.smsHandle = function () {
      var graphSms = _this.graphSms;
      graphSms.phoneVerify();
      graphSms.smsVerify();
      var _graphSms$state = graphSms.state,
          phoneRight = _graphSms$state.phoneRight,
          smsRight = _graphSms$state.smsRight;
      if (!phoneRight || !smsRight) return false;

      var This = assertThisInitialized_default()(_this);

      Object(login["j" /* sendLogin */])('/login', {
        phonenum: graphSms.phoneNum.value,
        verifycode: graphSms.smsCode.value,
        verifycategory: 3
      }).then(function (res) {
        if (res.code === 1) {
          Object(RegisterLogin_public["c" /* loginSuccess */])(res);
        } else {
          This.loginApiFailed(res);
        }
      })["catch"](function (err) {
        Toast["a" /* default */].info('短信登录错误');
        throw err;
      });
    };

    return _this;
  }

  createClass_default()(Sms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 回车确认
      var This = this;

      window.onkeyup = function (event) {
        if (event.keyCode === 13) {
          This.smsHandle();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          loginStatus = _this$props.loginStatus,
          mobile = _this$props.mobile,
          t = _this$props.t;
      return external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "header"
      }, external_react_default.a.createElement("h1", null, t('message_login')), external_react_default.a.createElement("a", {
        className: "new-account",
        onClick: function onClick() {
          loginStatus('register', true);
        }
      }, t('register_new_account'), external_react_default.a.createElement("span", {
        className: "arrow-icon"
      }))), external_react_default.a.createElement("div", {
        className: "body"
      }, external_react_default.a.createElement(RegisterLogin_public["a" /* GraphSms */], {
        ref: function ref(_ref) {
          _this2.graphSms = _ref;
        },
        loginType: "sms",
        t: t
      }), external_react_default.a.createElement("button", {
        className: "submit",
        onClick: this.smsHandle
      }, t('sure')), external_react_default.a.createElement("div", {
        className: "other-way"
      }, external_react_default.a.createElement("p", null, t('other_ways_login')), external_react_default.a.createElement("div", {
        className: "ways"
      }, !mobile && external_react_default.a.createElement("a", {
        className: "wechat",
        title: t('wechat_login'),
        onClick: function onClick() {
          if (_multiappsharing_public["w" /* mixUrl */].main().indexOf(window.location.host) > -1) {
            loginStatus('wechat', true);
          } else {
            window.location.href = _multiappsharing_public["w" /* mixUrl */].main('/wechat');
          }
        }
      }, external_react_default.a.createElement("img", {
        src: icon_wechat_default.a,
        alt: t('wechat_login')
      })), external_react_default.a.createElement("a", {
        className: "account",
        title: t('account_login'),
        onClick: function onClick() {
          loginStatus('account', true);
        }
      }, external_react_default.a.createElement("img", {
        src: icon_account_default.a,
        alt: t('account_login')
      }))))));
    }
  }]);

  return Sms;
}(external_react_["Component"]);

Sms_Sms.propTypes = {
  loginStatus: external_prop_types_["func"].isRequired
};
/* harmony default export */ var RegisterLogin_Sms = (Sms_Sms);
// CONCATENATED MODULE: ./_multiappsharing/components/RegisterLogin/WeChat.js







var WeChat_WeChat = function WeChat(props) {
  /** @desc 获取props */
  var loginStatus = props.loginStatus;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  return external_react_default.a.createElement("div", {
    className: "content wechat"
  }, external_react_default.a.createElement("div", {
    className: "body"
  }, external_react_default.a.createElement("div", {
    className: "wechat-qrcode"
  }, external_react_default.a.createElement("iframe", {
    scrolling: "no",
    frameBorder: "0",
    src: Object(login["e" /* getWechatQrCodeUrl */])()
  })), external_react_default.a.createElement("div", {
    className: "other-way"
  }, external_react_default.a.createElement("p", null, t('other_ways_login')), external_react_default.a.createElement("div", {
    className: "ways"
  }, external_react_default.a.createElement("a", {
    className: "account",
    title: t('account_login'),
    onClick: function onClick() {
      loginStatus('account', true);
    }
  }, external_react_default.a.createElement("img", {
    src: icon_account_default.a,
    alt: t('account_login')
  })), external_react_default.a.createElement("a", {
    className: "sms",
    title: t('message_login'),
    onClick: function onClick() {
      loginStatus('sms', true);
    }
  }, external_react_default.a.createElement("img", {
    src: icon_sms_default.a,
    alt: t('message_login')
  }))))));
};

WeChat_WeChat.propTypes = {
  loginStatus: external_prop_types_["func"].isRequired
};
/* harmony default export */ var RegisterLogin_WeChat = (WeChat_WeChat);
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// CONCATENATED MODULE: ./_multiappsharing/components/RegisterLogin/Bind.js














var Bind_Bind =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Bind, _Component);

  function Bind() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Bind);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Bind)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      pageShow: false,
      userInfo: _this.props.wechatUserInfo || null
      /** @desc 绑定手机号 */

    };

    _this.bindHandle = function () {
      var userInfo = _this.state.userInfo;
      var graphSms = _this.graphSms;
      graphSms.phoneVerify();
      graphSms.smsVerify();
      var _graphSms$state = graphSms.state,
          phoneRight = _graphSms$state.phoneRight,
          smsRight = _graphSms$state.smsRight;

      function bindPhone() {
        return _bindPhone.apply(this, arguments);
      }

      function _bindPhone() {
        _bindPhone = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee() {
          var isExist, bind, params;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(login["g" /* isRegister */])(graphSms.phoneNum.value)["catch"](function (err) {
                    Toast["a" /* default */].info('手机是否有注册验证错误');
                    throw err;
                  });

                case 2:
                  isExist = _context.sent;
                  bind = {
                    code: -100,
                    msg: '绑定手机号失败'
                  };
                  params = {
                    phonenum: graphSms.phoneNum.value,
                    // verifycode: graphSms.smsCode.value, // 因为服务器接口 参数拼错，改动较大，临时处理
                    unionid: userInfo.unionid,
                    nickName: userInfo.nickName,
                    iconUrl: userInfo.iconUrl,
                    platform: 'pc'
                  };

                  if (!(isExist.code === 1)) {
                    _context.next = 12;
                    break;
                  }

                  params.verifycode = graphSms.smsCode.value; // 因为服务器接口 参数拼错，改动较大，临时处理

                  _context.next = 9;
                  return Object(login["b" /* bindPhoneOld */])(params)["catch"](function (err) {
                    Toast["a" /* default */].info('已注册手机号绑定错误');
                    throw err;
                  });

                case 9:
                  bind = _context.sent;
                  _context.next = 22;
                  break;

                case 12:
                  if (!(isExist.code === -1)) {
                    _context.next = 19;
                    break;
                  }

                  params.verifcode = graphSms.smsCode.value; // 因为服务器接口 参数拼错，改动较大，临时处理

                  _context.next = 16;
                  return Object(login["a" /* bindPhoneNew */])(params)["catch"](function (err) {
                    Toast["a" /* default */].info('未注册手机号绑定错误');
                    throw err;
                  });

                case 16:
                  bind = _context.sent;
                  _context.next = 22;
                  break;

                case 19:
                  console.log(isExist);
                  Toast["a" /* default */].info('手机是否有注册验证失败');
                  return _context.abrupt("return");

                case 22:
                  if (bind.code === 1) {
                    Object(RegisterLogin_public["c" /* loginSuccess */])(bind);
                  } else {
                    Toast["a" /* default */].info(bind.msg);
                  }

                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _bindPhone.apply(this, arguments);
      }

      if (phoneRight && smsRight) {
        bindPhone();
      }
    };

    return _this;
  }

  createClass_default()(Bind, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var This = this;
      var loginStatus = this.props.loginStatus;

      if (this.state.userInfo) {
        // 此处为微信登录，服务端跳转到首页时，/RegisterLogin/index.js请求接口获取wechatLogin,传递wechatUserinfo
        this.setState({
          pageShow: true
        });
      } else {
        // 如果直接跳转到bind页面时，自己请求接口获取wechatLogin
        if (!Object(_multiappsharing_public["y" /* queryParam */])('huoxing24_not') && !Object(_multiappsharing_public["y" /* queryParam */])('huoxing24')) {
          loginStatus('wechat', true);
          return;
        }

        Object(RegisterLogin_public["d" /* wechatLogin */])({
          bindFn: function bindFn(info) {
            This.setState({
              pageShow: true,
              userInfo: info.obj
            });
          },
          wechatLoginFn: function wechatLoginFn() {
            loginStatus('wechat', true);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageShow = this.state.pageShow;
      var loginStatus = this.props.loginStatus;
      return external_react_default.a.createElement("div", {
        className: "content",
        style: {
          display: pageShow ? 'block' : 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "header"
      }, external_react_default.a.createElement("h1", null, "\u7ED1\u5B9A\u8D26\u53F7"), external_react_default.a.createElement("a", {
        className: "new-account",
        onClick: function onClick() {
          loginStatus('register', true);
        }
      }, "\u6CE8\u518C\u65B0\u8D26\u53F7", external_react_default.a.createElement("span", {
        className: "arrow-icon"
      }))), external_react_default.a.createElement("div", {
        className: "body"
      }, external_react_default.a.createElement(RegisterLogin_public["a" /* GraphSms */], {
        ref: function ref(_ref) {
          _this2.graphSms = _ref;
        },
        loginType: "bind"
      }), external_react_default.a.createElement("button", {
        className: "submit",
        onClick: this.bindHandle
      }, "\u786E\u8BA4"), external_react_default.a.createElement("a", {
        className: "tips",
        onClick: function onClick() {
          loginStatus('account', true);
        }
      }, external_react_default.a.createElement("span", null, "\u5DF2\u6709\u8D26\u53F7\uFF0C\u76F4\u63A5\u767B\u5F55"), external_react_default.a.createElement("span", {
        className: "arrow-icon"
      }))));
    }
  }]);

  return Bind;
}(external_react_["Component"]);

Bind_Bind.propTypes = {
  loginStatus: external_prop_types_["func"].isRequired
};
/* harmony default export */ var RegisterLogin_Bind = (Bind_Bind);
// CONCATENATED MODULE: ./_multiappsharing/components/RegisterLogin/index.js














var RegisterLogin_RegisterLogin = function RegisterLogin(props) {
  /** @desc 获取props */
  var loginType = props.userState.loginType;
  var dispatch = props.dispatch,
      closeHide = props.closeHide,
      mobile = props.mobile;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t; // 微信登录


  var _useState = Object(external_react_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      wechatUserInfo = _useState2[0],
      setWechatUserInfo = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    if (!wechatUserInfo) return;
    loginStatus('bind', true);
  }, [wechatUserInfo]);
  Object(external_react_["useEffect"])(function () {
    Object(RegisterLogin_public["d" /* wechatLogin */])({
      bindFn: function bindFn(info) {
        setWechatUserInfo(info.obj);
      },
      wechatLoginFn: function wechatLoginFn() {
        loginStatus('wechat', true);
      }
    });
  }, []);
  /** @desc 关闭注册登录弹出框 */

  var loginStatus = Object(external_react_["useCallback"])(function (type, bool) {
    dispatch(Object(login["h" /* loginShowHide */])(type, bool));
  }, []);
  var childProps = {
    loginStatus: loginStatus,
    loginType: loginType,
    mobile: mobile,
    t: t
  };
  return external_react_default.a.createElement("div", {
    className: "register-login-wrapper"
  }, external_react_default.a.createElement("a", {
    className: "close-icon",
    style: {
      display: closeHide ? 'none' : 'block'
    },
    onClick: function onClick() {
      loginStatus(loginType, false);
    }
  }), loginType === 'account' && external_react_default.a.createElement(RegisterLogin_Account, childProps), (loginType === 'register' || loginType === 'retrievePassword') && external_react_default.a.createElement(RegisterLogin_Register, childProps), loginType === 'sms' && external_react_default.a.createElement(RegisterLogin_Sms, childProps), loginType === 'wechat' && external_react_default.a.createElement(RegisterLogin_WeChat, childProps), (loginType === 'bind' || wechatUserInfo) && external_react_default.a.createElement(RegisterLogin_Bind, extends_default()({}, childProps, {
    wechatUserInfo: wechatUserInfo
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userState: state.multi.login.userState
  };
};

/* harmony default export */ var components_RegisterLogin = (Object(external_react_redux_["connect"])(mapStateToProps)(RegisterLogin_RegisterLogin));
// CONCATENATED MODULE: ./_multiappsharing/components/RenameBox/index.js








/* harmony default export */ var RenameBox = (function (porps) {
  var info = porps.info;
  var dispatch = Object(external_react_redux_["useDispatch"])();
  /** @desc 昵称 */

  var nickName = Object(external_react_["useRef"])();

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      nickNameErr = _useState2[0],
      setNickNameErr = _useState2[1];
  /** @desc 确认登录 */


  var confirm = Object(external_react_["useCallback"])(function () {
    var nickNameVal = Object(_multiappsharing_public["C" /* trim */])(nickName.current.value);

    if (nickNameVal === '') {
      setNickNameErr('昵称不能为空！');
      return false;
    }

    Object(login["d" /* getUpdateUserNick */])({
      passportid: info.passportId,
      token: info.token,
      nickName: nickNameVal
    }).then(function (res) {
      if (res.code === 1) {
        var domain = '';
        var env = "production";
        if (env === 'test') domain = 'marslib.com';
        if (env === 'production') domain = 'marsbit.co';
        external_js_cookie_default.a.set(_multiappsharing_public["f" /* cookiesName */].nickName, nickNameVal, {
          domain: domain,
          expires: 28
        });
        window.location.reload();
      } else {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      Toast["a" /* default */].info('修改昵称错误');
      throw err;
    });
  }, [info]);
  /** @desc 回车确认修改 */

  Object(external_react_["useEffect"])(function () {
    window.onkeyup = function (event) {
      if (event.keyCode === 13) {
        confirm();
      }
    };
  }, []);
  /** @desc 控制弹出框显示 */

  var isRenameBoxShow = Object(external_react_["useCallback"])(function (bool) {
    dispatch(Object(login["i" /* renameShowHide */])(bool));
  }, []);
  return external_react_default.a.createElement("div", {
    className: "rename-box-wrapper"
  }, external_react_default.a.createElement("a", {
    className: "close-icon",
    onClick: function onClick() {
      isRenameBoxShow(false);
    }
  }), external_react_default.a.createElement("div", {
    className: "header"
  }, external_react_default.a.createElement("h1", null, "\u4FEE\u6539\u6635\u79F0")), external_react_default.a.createElement("div", {
    className: "body"
  }, external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "input-box"
  }, external_react_default.a.createElement("input", {
    ref: nickName,
    onFocus: function onFocus() {
      setNickNameErr('');
    },
    type: "text",
    maxLength: 16,
    placeholder: "\u8BF7\u4FEE\u6539\u6635\u79F0\u540E\u53C2\u4E0E\u76F4\u64AD\u4E92\u52A8"
  })), external_react_default.a.createElement("p", {
    className: "error"
  }, nickNameErr)), external_react_default.a.createElement("button", {
    className: "submit",
    onClick: confirm
  }, "\u786E\u5B9A")));
});
// CONCATENATED MODULE: ./_multiappsharing/public/hooks/useLang.js




/* harmony default export */ var useLang = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      i18n = _useTranslation.i18n; // console.log(window.location.href)


  return Object(external_react_["useCallback"])(function (lang) {
    var domain = window.location.hostname;
    var env = "production";

    if (env === 'production') {
      var hostinfo = window.location.host;

      if (hostinfo.includes('marstelegram.com')) {
        domain = 'marstelegram.com';
      }

      if (hostinfo.includes('marsbit.cc')) {
        domain = 'marsbit.cc';
      }

      if (hostinfo.includes('marsbit.co')) {
        domain = 'marsbit.co';
      } // apiHost = 'https://api.marsbit.co'

    }

    if (env === 'test') domain = 'marslib.com';
    external_js_cookie_default.a.remove(_multiappsharing_public["f" /* cookiesName */].language);
    var langTmp = lang || navigator.language || navigator.userLanguage;
    external_js_cookie_default.a.set(_multiappsharing_public["f" /* cookiesName */].language, langTmp, {
      domain: domain
    });
    i18n.changeLanguage(langTmp);
    window.location.href = window.location.pathname + "?lang=".concat(langTmp);
  }, []);
});
// CONCATENATED MODULE: ./_multiappsharing/components/Layout/Header/Navigation/index.js







 // import beta from '../../../../public/img/icon-beta.svg'



 // import tagPower from './images/tag-power.gif'
// import tagMclouds from './images/tag-mclouds.gif'
// import { trim, mixUrl, clearLoginCookies, windowScroll, scrollOffset, encodeSearchKey } from '../../../../public/'







var Navigation_Navigation = function Navigation(props) {
  var changeLang = useLang();

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;
  /** @desc 搜索 */


  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      languflag = _useState4[0],
      setLanguflag = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      lanflag = _useState6[0],
      setLanflag = _useState6[1];

  var _useState7 = Object(external_react_["useState"])([]),
      _useState8 = slicedToArray_default()(_useState7, 2),
      navlist = _useState8[0],
      setNavlist = _useState8[1];

  var searchVal = Object(external_react_["useRef"])();
  var header = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(function () {
    var requre = {
      hostname: window.location.hostname
    };
    var nav = [{
      title: t('headernavone'),
      type: 'home',
      href: '/',
      bigShow: false
    }, {
      title: "7x24H ".concat(t('headernavtwo')),
      type: 'flash',
      href: _multiappsharing_public["w" /* mixUrl */].news('/flash', requre),
      bigShow: false
    }, {
      title: t('headernavthree'),
      type: 'news',
      href: _multiappsharing_public["w" /* mixUrl */].news('/', requre),
      bigShow: false
    }, // { title: '火星号', type: 'mp', href: mixUrl.news('/author'), bigShow: false },
    {
      title: t('headernavfour'),
      type: 'live',
      href: _multiappsharing_public["w" /* mixUrl */].main('/live', requre),
      bigShow: false,
      hot: false
    }, // { title: '一线', type: 'newsFirst', href: mixUrl.news('/list/28'), bigShow: false },
    // { title: '独家', type: 'exclusive', href: mixUrl.news('/list/37'), bigShow: false },
    // { title: '项目', type: 'project', href: mixUrl.news('/list/89'), bigShow: false },
    // { title: '项目', type: 'project', href: mixUrl.news('/list/89'), bigShow: false },
    {
      title: t('headernavfive'),
      type: 'feature',
      href: _multiappsharing_public["w" /* mixUrl */].news('/feature', requre),
      bigShow: false
    }, {
      title: 'Layer 2',
      type: 'project',
      href: _multiappsharing_public["w" /* mixUrl */].news('/list/311', requre),
      bigShow: false
    }, {
      title: 'DeFi',
      type: 'project',
      href: _multiappsharing_public["w" /* mixUrl */].news('/list/34', requre),
      bigShow: false
    }, {
      title: 'NFT',
      type: 'project',
      href: _multiappsharing_public["w" /* mixUrl */].news('/list/38', requre),
      bigShow: false
    }, {
      title: 'Web 3',
      type: 'project',
      href: _multiappsharing_public["w" /* mixUrl */].news('/list/87', requre),
      bigShow: false
    }, {
      title: 'NAGA',
      type: 'project',
      href: 'https://www.naga.io/',
      bigShow: false // { title: '融资', type: 'iandf', href: mixUrl.news('/list/90'), bigShow: false },
      // { title: '深度', type: 'depth', href: mixUrl.news('/list/91'), bigShow: false },
      // { title: '精选', type: 'flashFirst', href: mixUrl.news('/feature/20200622131120211592'), bigShow: false },
      // { title: '技术', type: 'newsTech', href: mixUrl.news('/list/6'), bigShow: false },
      // { title: '政策', type: 'newsPolicy', href: mixUrl.news('/list/17'), bigShow: false },
      // { title: '行情', type: 'token', href: mixUrl.token(), bigShow: false },
      // { title: '课程', type: 'learn', href: mixUrl.main('/learning'), bigShow: false },
      // { title: `POW'ER云南`, type: 'power', href: mixUrl.zt('/poweryn'), bigShow: false },
      // { title: '直播', type: 'live', href: mixUrl.cq('/live'), bigShow: false, hot: true },
      // { title: '视频', type: 'video', href: mixUrl.main('/video'), bigShow: true }
      // { title: '活动', type: 'huodong', href: mixUrl.main('/huodong'), bigShow: true }
      // { title: `POWER上海`, type: 'power', href: mixUrl.zt(''), bigShow: false, img: tagPower }
      // { title: '火星云矿', type: 'mclouds', href: mixUrl.mclouds(), bigShow: false, img: tagMclouds }
      // { title: '火星云矿', type: 'mclouds', href: mixUrl.mclouds(), bigShow: false },
      // { title: '可可交易', type: 'cococoin', href: mixUrl.cococoin(), bigShow: false }
      // { title: '数据', type: 'data', href: mixUrl.main('/data'), bigShow: false }
      // { title: '知识库', type: 'knowledge', href: mixUrl.baike(), bigShow: true }

    }];
    setNavlist(nav);
  }, []);
  var searchShow = Object(external_react_["useCallback"])(function () {
    setSearch(!search);
    searchVal.current.focus();
  }, [search]);
  var searchEnter = Object(external_react_["useCallback"])(function (event) {
    if (event.keyCode && event.keyCode !== 13) return false;
    var val = event.target.tagName.toLowerCase() !== 'input' ? searchVal.current.value : event.target.value;
    if (Object(_multiappsharing_public["C" /* trim */])(val) !== '') window.location.href = _multiappsharing_public["w" /* mixUrl */].main("/search/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(val)));
  }, []);
  /** @desc 注销 */

  var logout = Object(external_react_["useCallback"])(function () {
    Object(_multiappsharing_public["e" /* clearLoginCookies */])();
    window.location.reload();
  }, []);
  var dispatch = props.dispatch;
  /** @desc 注册弹出 */
  // const registerPopup = useCallback(() => {
  //     dispatch(loginShowHide('register', true))
  // }, [])

  /** @desc 登录弹出 */

  var loginPopup = Object(external_react_["useCallback"])(function () {
    dispatch(Object(login["h" /* loginShowHide */])('account', true));
  }, []);
  /** @desc 获取props */

  var _props$userState = props.userState,
      loginShow = _props$userState.loginShow,
      renameShow = _props$userState.renameShow;
  var _props$userInfo = props.userInfo,
      isLogin = _props$userInfo.isLogin,
      info = _props$userInfo.info;

  var _useState9 = Object(external_react_["useState"])({
    host: null,
    pathname: null,
    hostname: null
  }),
      _useState10 = slicedToArray_default()(_useState9, 2),
      location = _useState10[0],
      setLocation = _useState10[1];

  Object(external_react_["useEffect"])(function () {
    if (external_js_cookie_default.a.get('marsbit_lang')) {
      setLanflag(external_js_cookie_default.a.get('marsbit_lang'));
    }
  }, []);
  Object(external_react_["useEffect"])(function () {
    setLocation({
      host: window.location.host,
      pathname: window.location.pathname,
      hostname: window.location.hostname
    }); // let posType = null
    // windowScroll(function () {
    //     if (scrollOffset().top >= 35 && posType !== 'fixed') {
    //         header.current.style.top = 0
    //         header.current.style.zIndex = 100
    //         posType = 'fixed'
    //     }
    //     if (scrollOffset().top < 35 && posType !== 'relative') {
    //         header.current.style.top = '35px'
    //         header.current.style.zIndex = 10
    //         posType = 'relative'
    //     }
    // })
  }, []);
  return [external_react_default.a.createElement("div", {
    className: "header-navigation",
    key: "headerNavigation",
    ref: header
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("a", {
    href: _multiappsharing_public["w" /* mixUrl */].main(),
    className: "logo",
    title: "MarsBit",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    alt: "MarsBit",
    src: header_logo_default.a
  })), external_react_default.a.createElement("div", {
    className: "nav"
  }, navlist.map(function (item, index) {
    var wHost = location.host;
    var wPath = location.pathname;
    var env = "production";
    var homelink = 'https://www.marsbit.cc';

    if (wHost && env === 'production') {
      homelink = 'https://www.' + wHost.split('.').slice(-2).join('.');
    } else {
      homelink = '/';
    }

    var isNews = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/feature') === -1 && wPath.indexOf('/flash') === -1 && wPath.indexOf('/author') === -1 && wPath.indexOf('/list/10000') === -1 && wPath.indexOf('/list/17') === -1 && wPath.indexOf('/list/6') === -1 && wPath.indexOf('/list/28') === -1 && wPath.indexOf('/list/37') === -1 && wPath.indexOf('/list/89') === -1 && wPath.indexOf('/list/90') === -1 && wPath.indexOf('/list/91') === -1;
    var isFlash = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/flash') > -1;
    var isFeature = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/feature') > -1;
    var isNewsFirst = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/28') > -1;
    var isExclusive = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/37') > -1;
    var isNewsTech = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/6') > -1;
    var isNewsPolicy = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/17') > -1;
    var isProject = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/89') > -1;
    var isIAndF = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/90') > -1;
    var isDepth = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/list/91') > -1;
    var isMp = _multiappsharing_public["w" /* mixUrl */].news().indexOf(wHost) > -1 && wPath.indexOf('/author') > -1;
    var isToken = _multiappsharing_public["w" /* mixUrl */].token().indexOf(wHost) > -1;
    var isLearn = _multiappsharing_public["w" /* mixUrl */].main().indexOf(wHost) > -1 && wPath.indexOf('/learning') > -1;
    var isVideo = _multiappsharing_public["w" /* mixUrl */].main().indexOf(wHost) > -1 && wPath.indexOf('/video') > -1;
    var isLive = _multiappsharing_public["w" /* mixUrl */].main().indexOf(wHost) > -1 && wPath.indexOf('/live') > -1;
    var isHuodong = _multiappsharing_public["w" /* mixUrl */].main().indexOf(wHost) > -1 && wPath.indexOf('/huodong') > -1;
    var active = item.type === 'newsTech' && isNewsTech || item.type === 'newsPolicy' && isNewsPolicy || item.type === 'newsFirst' && isNewsFirst || item.type === 'exclusive' && isExclusive || item.type === 'project' && isProject || item.type === 'iandf' && isIAndF || item.type === 'depth' && isDepth || item.type === 'token' && isToken || item.type === 'news' && isNews || item.type === 'feature' && isFeature || item.type === 'flash' && isFlash || item.type === 'mp' && isMp || item.type === 'learn' && isLearn || item.type === 'video' && isVideo || item.type === 'live' && isLive || item.type === 'huodong' && isHuodong;
    return external_react_default.a.createElement("a", {
      key: index,
      className: "".concat(active && 'active', " ").concat(item.bigShow ? 'bigshow' : '', " ").concat(item.hot ? 'hot' : ''),
      style: {
        position: 'relative'
      },
      href: item.type === 'home' ? homelink : item.href,
      title: item.title,
      target: "_blank"
    }, item.title, item.img ? external_react_default.a.createElement("img", {
      src: item.img,
      style: {
        position: 'absolute',
        width: '90px',
        height: '40px',
        left: '0px',
        top: '20px'
      }
    }) : null);
  })), external_react_default.a.createElement("div", {
    className: "nav-dropdown smallshow",
    style: {
      display: 'none'
    }
  }, external_react_default.a.createElement("a", {
    className: "nav-dropdown-btn"
  }, external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null)), external_react_default.a.createElement("div", {
    className: "nav-dropdown-box"
  }, navlist.map(function (item, index) {
    if (item.bigShow) {
      return external_react_default.a.createElement("a", {
        key: index,
        href: item.href,
        title: item.title,
        target: "_blank"
      }, item.title);
    }
  }))), external_react_default.a.createElement("div", {
    className: "search-login"
  }, external_react_default.a.createElement("div", {
    className: "search-btn",
    onClick: searchShow
  }, external_react_default.a.createElement("input", {
    type: "password",
    name: "pass",
    style: {
      display: 'none'
    }
  }), external_react_default.a.createElement("input", {
    type: "text",
    value: t('search'),
    readOnly: true
  }), external_react_default.a.createElement("span", {
    className: "search-icon"
  })), isLogin && (parseInt(info.realAuth) === 1 ? external_react_default.a.createElement("a", {
    className: "redirect-mars",
    href: _multiappsharing_public["w" /* mixUrl */].mp(),
    target: "_blank"
  }, external_react_default.a.createElement("em", null, t('my_news'))) : external_react_default.a.createElement("a", {
    className: "redirect-mars",
    href: _multiappsharing_public["w" /* mixUrl */].mp(),
    target: "_blank"
  }, external_react_default.a.createElement("em", null, t('open_column')))), external_react_default.a.createElement("a", {
    className: "app-download",
    href: _multiappsharing_public["w" /* mixUrl */].main('/download', {
      hostname: "".concat(location.host)
    }),
    target: "_blank"
  }, external_react_default.a.createElement("span", null, t('downloadapp')), external_react_default.a.createElement("div", {
    className: "qrcode"
  }, external_react_default.a.createElement("img", {
    src: download_img_default.a,
    alt: "\u4E0B\u8F7DMarsBit\u5BA2\u6237\u7AEF"
  }), external_react_default.a.createElement("p", null, t('sao_downloadapp')))), external_react_default.a.createElement("div", {
    className: "language-select",
    onMouseEnter: function onMouseEnter() {
      return setLanguflag(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setLanguflag(false);
    }
  }, external_react_default.a.createElement("div", {
    className: "language-select-img"
  }, external_react_default.a.createElement("img", {
    src: languageicon_default.a,
    alt: ""
  })), languflag && external_react_default.a.createElement("div", {
    className: "language-select-list"
  }, external_react_default.a.createElement("div", {
    className: "language-select-list-item ".concat(lanflag !== 'zh-TW' && 'selected-item'),
    onClick: function onClick() {
      return changeLang('zh-CN');
    }
  }, "\u7B80\u4F53\u4E2D\u6587"), external_react_default.a.createElement("div", {
    className: "language-select-list-item ".concat(lanflag === 'zh-TW' && 'selected-item'),
    onClick: function onClick() {
      return changeLang('zh-TW');
    }
  }, "\u7E41\u4F53\u4E2D\u6587"))), external_react_default.a.createElement("div", {
    className: "register-login",
    style: {
      display: !isLogin ? 'flex' : 'none'
    }
  }, external_react_default.a.createElement("a", {
    className: "login",
    onClick: loginPopup
  }, t('login'))), external_react_default.a.createElement("div", {
    className: "user-info",
    style: {
      display: isLogin ? 'flex' : 'none'
    }
  }, external_react_default.a.createElement("a", {
    className: "avatar",
    title: decodeURI(info.nickName) || 'MarsBit',
    href: _multiappsharing_public["w" /* mixUrl */].main("/userCenter/".concat(info.passportId))
  }, external_react_default.a.createElement("img", {
    src: info.iconUrl || avatar_default_default.a,
    alt: decodeURI(info.nickName) || 'MarsBit'
  })), external_react_default.a.createElement("div", {
    className: "user-func"
  }, external_react_default.a.createElement("a", {
    href: _multiappsharing_public["w" /* mixUrl */].main("/userCenter/".concat(info.passportId)),
    title: decodeURI(info.nickName)
  }, decodeURI(info.nickName)), external_react_default.a.createElement("a", {
    onClick: logout
  }, t('loginout'))))), external_react_default.a.createElement("div", {
    className: "search-con ".concat(search ? 'show' : '')
  }, external_react_default.a.createElement("span", {
    className: "search-icon",
    onClick: searchEnter
  }), external_react_default.a.createElement("input", {
    type: "text",
    placeholder: t('input_please'),
    ref: searchVal,
    onKeyDown: searchEnter
  }), external_react_default.a.createElement("span", {
    className: "close-icon",
    onClick: searchShow
  })))), external_react_default.a.createElement("div", {
    className: "search-mask ".concat(search ? 'show' : ''),
    onClick: function onClick() {
      return setSearch(!search);
    },
    key: "searchMask"
  }), external_react_default.a.createElement("div", {
    className: "register-login-container",
    style: {
      display: loginShow ? 'flex' : 'none'
    },
    key: "registerLogin"
  }, external_react_default.a.createElement(components_RegisterLogin, null)), external_react_default.a.createElement("div", {
    className: "register-login-container",
    style: {
      display: renameShow ? 'flex' : 'none'
    },
    key: "renameBox"
  }, external_react_default.a.createElement(RenameBox, {
    info: info
  }))];
};

Navigation_Navigation.propTypes = {
  userInfo: external_prop_types_["object"].isRequired,
  userState: external_prop_types_["object"].isRequired
};

var Navigation_mapStateToProps = function mapStateToProps(state) {
  var login = state.multi.login;
  return {
    userInfo: login.userInfo,
    userState: login.userState
  };
};

/* harmony default export */ var Header_Navigation = (Object(external_react_redux_["connect"])(Navigation_mapStateToProps)(Navigation_Navigation));
// CONCATENATED MODULE: ./_multiappsharing/components/Layout/Header/index.js

 // import ProductLink from './ProductLink'


/* harmony default export */ var Layout_Header = (function () {
  return external_react_default.a.createElement("div", {
    className: "layout-header"
  }, external_react_default.a.createElement(Header_Navigation, {
    key: "navigation"
  }));
});
// EXTERNAL MODULE: ./_multiappsharing/redux/actions/public.js
var actions_public = __webpack_require__(24);

// EXTERNAL MODULE: ./_multiappsharing/components/Layout/Footer/images/footer-logo.png
var footer_logo = __webpack_require__(55);
var footer_logo_default = /*#__PURE__*/__webpack_require__.n(footer_logo);

// CONCATENATED MODULE: ./_multiappsharing/components/Layout/Footer/index.js







 // import qrcode from '../../../public/img/qrcode-wechat.png'

 // import RightDwonload from '../RightDownLoad'




var Footer_Footer = function Footer(props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;
  /** @desc 合作弹出框显示与隐藏 */


  var _useState = Object(external_react_["useState"])({
    show: false,
    type: 'details' // details内容合作，business商务合作

  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      popup = _useState2[0],
      setPopup = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      and = _useState4[0],
      setAnd = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    Object(actions_public["c" /* getAndroidDownloadUrl */])().then(function (res) {
      if (res.code === 1) {
        setAnd(res.obj);
      } else {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, [and]);
  var popShowHide = Object(external_react_["useCallback"])(function (type) {
    setPopup({
      show: !popup.show,
      type: !popup.show ? type : popup.type
    });
  }, [popup]);
  return external_react_default.a.createElement("div", {
    className: "footer-wrapper",
    id: "footerWrapper"
  }, external_react_default.a.createElement("div", {
    className: "footer-main"
  }, external_react_default.a.createElement("div", {
    className: "copyright"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
    className: "foot-logo",
    src: footer_logo_default.a,
    alt: "MarsBit"
  })), external_react_default.a.createElement("div", {
    className: "foot-business"
  }, t('business_cooperation'), "\uFF1Atg: @Ulysses2047"), external_react_default.a.createElement("div", {
    className: "foot-slogan"
  }, t('all_world_dynamic'), " | Copyright \xA9MarsBit All Rights Reserved. | ", external_react_default.a.createElement("a", {
    href: "https://beian.miit.gov.cn/#/Integrated/index",
    target: "_blank"
  }, "\u6842ICP\u59072023010597\u53F7-1"))), external_react_default.a.createElement("div", {
    className: "friendly",
    style: {
      display: 'none'
    }
  }, external_react_default.a.createElement("h3", null, t('friendship_link')), external_react_default.a.createElement("div", {
    className: "links"
  }, props.footer.friendly.map(function (item, index) {
    if (index < 7) {
      return external_react_default.a.createElement("a", {
        key: index,
        title: item.name,
        target: "_blank",
        href: item.url,
        rel: "nofollow"
      }, item.name);
    }
  }), external_react_default.a.createElement("a", {
    className: "more-links",
    target: "_blank",
    href: _multiappsharing_public["w" /* mixUrl */].main('/friendlylink')
  }, t('more_footer')))), external_react_default.a.createElement("div", {
    className: "item download"
  }, external_react_default.a.createElement("h3", null, t('investment_web3')), external_react_default.a.createElement("div", {
    className: "down-cont"
  }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("img", {
    src: download_img_default.a,
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: and,
    className: "and"
  }, t('android_download')), external_react_default.a.createElement("a", {
    href: "https://itunes.apple.com/cn/app/id1343659925?mt=8",
    className: "ios",
    target: "_blank"
  }, t('ios_download'))))), external_react_default.a.createElement("div", {
    className: "popup",
    style: {
      display: popup.show ? 'flex' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "content-wrapper"
  }, external_react_default.a.createElement("a", {
    className: "close-icon footer-close",
    onClick: function onClick() {
      popShowHide();
    }
  }), external_react_default.a.createElement("div", {
    className: "content business",
    style: {
      display: popup.type === 'business' ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("h3", null, t('business_cooperation')), external_react_default.a.createElement("p", null, external_react_default.a.createElement("span", null, "tg: @Ulysses2047"), external_react_default.a.createElement("span", null, "\u5FAE\u4FE1\uFF1Abefabing")))), external_react_default.a.createElement("div", {
    className: "footer"
  }, external_react_default.a.createElement("a", {
    className: "footer-close",
    onClick: function onClick() {
      popShowHide();
    }
  }, "\u6211\u77E5\u9053\u4E86")))));
};

Footer_Footer.propTypes = {
  footer: external_prop_types_["object"].isRequired
};

var Footer_mapStateToProps = function mapStateToProps(state) {
  return {
    footer: state.multi.footer
  };
};

/* harmony default export */ var Layout_Footer = (Object(external_react_redux_["connect"])(Footer_mapStateToProps)(Footer_Footer));
// EXTERNAL MODULE: ./_multiappsharing/public/img/littienaga.png
var littienaga = __webpack_require__(56);
var littienaga_default = /*#__PURE__*/__webpack_require__.n(littienaga);

// EXTERNAL MODULE: ./_multiappsharing/public/img/nagalogobig.png
var nagalogobig = __webpack_require__(57);
var nagalogobig_default = /*#__PURE__*/__webpack_require__.n(nagalogobig);

// CONCATENATED MODULE: ./_multiappsharing/components/Layout/index.js




 // import Cookies from 'js-cookie'


 // import HelpSlide from './HelpSlide'
// import RightDownImg from './RightDownImg'





var Layout_Layout = function Layout(props) {
  var route = props.route;
  var pathname = props.location.pathname;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      nagaflag = _useState2[0],
      setNagaflag = _useState2[1]; // 2020年4月4号全站变灰悼念活动


  Object(external_react_["useEffect"])(function () {
    if (Object(_multiappsharing_public["l" /* formatTime */])(Date.parse(new Date()), 'yyyy-MM-dd') === '2020-04-04') {
      document.body.style.filter = 'grayscale(100%)';
      document.body.style['-webkit-filter'] = 'grayscale(100%)';
    }
  }, []);
  var nageLink = Object(external_react_["useMemo"])(function () {
    return external_react_default.a.createElement("div", {
      className: "layout-naga"
    }, external_react_default.a.createElement("div", {
      className: "layout-naga-img",
      onMouseEnter: function onMouseEnter() {
        return setNagaflag(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setNagaflag(false);
      },
      onClick: function onClick() {
        window.open('https://www.naga.io');
      }
    }, nagaflag ? external_react_default.a.createElement("div", {
      className: "layout-naga-img-big"
    }, external_react_default.a.createElement("img", {
      src: nagalogobig_default.a,
      alt: ""
    }), external_react_default.a.createElement("p", null, "Discover The Best Web3 Gaming")) : external_react_default.a.createElement("div", {
      className: "layout-naga-img-little"
    }, external_react_default.a.createElement("img", {
      src: littienaga_default.a,
      alt: ""
    }))));
  }, [nagaflag]);
  return [external_react_default.a.createElement(Layout_Header, {
    pathname: pathname,
    key: "header"
  }), external_react_default.a.createElement("div", {
    className: "layout-content",
    key: "layoutContent"
  }, nageLink, Object(external_react_router_config_["renderRoutes"])(route.routes, objectSpread_default()({}, Object(_multiappsharing_public["x" /* propsInherit */])(props)))), external_react_default.a.createElement(Layout_Footer, {
    key: "footer"
  })];
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: ./assets/pages/Home.js
var Home = __webpack_require__(58);

// EXTERNAL MODULE: ./assets/pages/Details.js
var Details = __webpack_require__(59);

// EXTERNAL MODULE: ./assets/pages/Author.js
var Author = __webpack_require__(60);

// EXTERNAL MODULE: ./assets/pages/AuthorDetails.js
var AuthorDetails = __webpack_require__(61);

// EXTERNAL MODULE: ./assets/pages/Feature.js
var Feature = __webpack_require__(62);

// EXTERNAL MODULE: ./assets/pages/FeatureDetails.js
var FeatureDetails = __webpack_require__(63);

// EXTERNAL MODULE: ./assets/pages/Tags.js
var Tags = __webpack_require__(64);

// EXTERNAL MODULE: ./assets/pages/Flash.js
var Flash = __webpack_require__(65);

// EXTERNAL MODULE: ./assets/pages/FlashDetail.js
var FlashDetail = __webpack_require__(66);

// EXTERNAL MODULE: ./assets/pages/NoticeDetail.js
var NoticeDetail = __webpack_require__(67);

// EXTERNAL MODULE: ./assets/pages/Notice.js
var Notice = __webpack_require__(68);

// EXTERNAL MODULE: ./assets/pages/RollNews.js
var RollNews = __webpack_require__(38);

// EXTERNAL MODULE: ./assets/pages-m/FlashShareDetail.js
var FlashShareDetail = __webpack_require__(39);

// CONCATENATED MODULE: ./assets/routes/index.js












 // import DetailShare from '../pages-m/DetailShare'

/** @desc 以下路由没 有相对应的pc页面，只有mob页面。在此添加当pc端访问时渲染移动端页面
 * exact 精准的 是否匹配子路由
 * strict 严格的 是否匹配斜杠”/“
 * 由于matchRoutes不能匹配多层component:root。故在m端component的root下路由，在此需要分拆配置
 * */


var onlyMobRoutes = [{
  path: '/flashshare/:flashId.html',
  component: FlashShareDetail["a" /* default */],
  exact: true,
  strict: true
}];
/** @desc 以下为正常pc端路由  */

/* harmony default export */ var assets_routes = (function (params) {
  var routes = [{
    component: components_Layout,
    routes: [{
      path: ['', '/', '/list', '/list/', '/list/:channelId'],
      component: Home["a" /* default */],
      exact: true,
      strict: true
    }, {
      path: '/roll',
      component: RollNews["a" /* default */]
    }, {
      path: '/author/details/:authorId',
      component: AuthorDetails["a" /* default */]
    }, {
      path: ['/author/:order/:type/:page', '/author'],
      component: Author["a" /* default */]
    }, {
      path: '/feature/:featureId',
      component: FeatureDetails["a" /* default */]
    }, {
      path: '/feature',
      component: Feature["a" /* default */],
      exact: true
    }, {
      path: ['/tags/:tags', '/tags'],
      component: Tags["a" /* default */]
    }, {
      path: '/flash',
      component: Flash["a" /* default */],
      exact: true,
      strict: false
    }, {
      path: '/flash/:flashId.html',
      component: FlashDetail["a" /* default */]
    }, {
      path: '/:newsId.html',
      component: Details["a" /* default */],
      exact: true,
      strict: true
    }, {
      path: '/notice',
      component: Notice["a" /* default */]
    }, {
      path: '/noticeDetail/:id',
      component: NoticeDetail["a" /* default */]
    }]
  }];
  return onlyMobRoutes.concat(routes);
}); // export default onlyMobRoutes.concat(routes)
// EXTERNAL MODULE: ./_multiappsharing/components-m/Layout/Header/images/m-header-logo-blue.svg
var m_header_logo_blue = __webpack_require__(69);
var m_header_logo_blue_default = /*#__PURE__*/__webpack_require__.n(m_header_logo_blue);

// EXTERNAL MODULE: ./_multiappsharing/components-m/Layout/Header/images/m-search.svg
var m_search = __webpack_require__(70);
var m_search_default = /*#__PURE__*/__webpack_require__.n(m_search);

// EXTERNAL MODULE: ./_multiappsharing/components-m/Layout/Header/images/languageiconh5.png
var languageiconh5 = __webpack_require__(71);
var languageiconh5_default = /*#__PURE__*/__webpack_require__.n(languageiconh5);

// CONCATENATED MODULE: ./_multiappsharing/components-m/Layout/Header/Navigation/index.js











var Header_Navigation_Navigation = function Navigation(props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var changeLang = useLang();
  var channelsList = props.channelsList;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 1),
      isShow = _useState2[0];

  var _useState3 = Object(external_react_["useState"])({
    host: null,
    pathname: null
  }),
      _useState4 = slicedToArray_default()(_useState3, 2),
      location = _useState4[0],
      setLocation = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      langh5 = _useState6[0],
      setlangh5 = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      lanflag = _useState8[0],
      setLanflag = _useState8[1];

  Object(external_react_["useEffect"])(function () {
    if (external_js_cookie_default.a.get('marsbit_lang')) {
      setLanflag(external_js_cookie_default.a.get('marsbit_lang'));
    }
  }, []);
  Object(external_react_["useEffect"])(function () {
    setLocation({
      host: window.location.host,
      pathname: window.location.pathname
    });
  }, []); // 应高是高度吧
  // useEffect(() => {
  //     if (channelsList.length === 0) {
  //         return
  //     }
  //     let p = document.getElementById('HeaderTaglistParent')
  //     let w = p.offsetWidth
  //     let currItem = document.getElementById('HeaderTagItem500')
  //     let currItemWidth = currItem.offsetWidth
  //     let currItemOffLeft = currItem.offsetLeft - currItem.scrollLeft
  //     let pOffLeft = p.scrollLeft
  //     let deffLeft = (currItemOffLeft - pOffLeft - w / 2 + currItemWidth / 2)
  //     p.scrollLeft = deffLeft
  // }, [channelsList])
  // 点击链接

  var onBtnTagClick = Object(external_react_["useCallback"])(function (item) {
    if (item.url) {
      window.location.href = item.url;
    } else {
      if (parseInt(item.channelId) === 0) {
        window.location.href = _multiappsharing_public["w" /* mixUrl */].main();
      } else if (parseInt(item.channelId) === 1) {
        window.location.href = _multiappsharing_public["w" /* mixUrl */].m('/flash/');
      } else {
        window.location.href = _multiappsharing_public["w" /* mixUrl */].m("/news/".concat(item.channelId));
      }
    }
  }, []);
  var goOtherLink = Object(external_react_["useCallback"])(function (src) {
    window.location.href = location.host + src;
  });
  return external_react_default.a.createElement("div", {
    className: "m-navigation"
  }, external_react_default.a.createElement("div", {
    className: "nav-down-warp ".concat(isShow === true ? 'show' : '')
  }, external_react_default.a.createElement("div", {
    className: "nav-down-contain"
  }, external_react_default.a.createElement("h3", null, "\u6240\u6709\u680F\u76EE"), external_react_default.a.createElement("ul", null, channelsList && channelsList.map(function (item, index) {
    var wHost = location.host;
    var wPath = location.pathname;
    var isFeature = _multiappsharing_public["w" /* mixUrl */].m().indexOf(wHost) > -1 && wPath.indexOf('/feature') > -1;
    var active = item.channelId === '500' && isFeature;
    return external_react_default.a.createElement("li", {
      id: "HeaderTagItem".concat(item.channelId),
      className: active ? 'active' : '',
      key: index,
      onClick: function onClick() {
        onBtnTagClick(item);
      }
    }, item.channelName);
  })))), external_react_default.a.createElement("div", {
    id: "hd_wrap"
  }, external_react_default.a.createElement("div", {
    id: "hd",
    className: "nav-list"
  }, external_react_default.a.createElement("div", {
    className: "nav-item ".concat(location.pathname === '/' ? 'active' : ''),
    onClick: function onClick() {
      goOtherLink('/');
    }
  }, external_react_default.a.createElement("a", {
    href: "/",
    title: ""
  }, t('headerimportant'))), external_react_default.a.createElement("div", {
    className: "nav-item ".concat(location.pathname === '/flash/' ? 'active' : ''),
    onClick: function onClick() {
      goOtherLink('/flash/');
    }
  }, external_react_default.a.createElement("a", {
    href: "/flash/"
  }, t('headernavtwo'))), external_react_default.a.createElement("div", {
    className: "nav-item ".concat(location.pathname === '/liveroom' ? 'active' : ''),
    onClick: function onClick() {
      goOtherLink('/liveroom');
    }
  }, external_react_default.a.createElement("a", {
    href: "/liveroom"
  }, t('headernavfour'))), external_react_default.a.createElement("div", {
    className: "nav-item ".concat(location.pathname === '/feature' ? 'active' : ''),
    onClick: function onClick() {
      return goOtherLink('/feature');
    }
  }, external_react_default.a.createElement("a", {
    href: "/feature"
  }, t('headernavfive'))), external_react_default.a.createElement("div", {
    className: "searchBorder"
  }, external_react_default.a.createElement("a", {
    title: "\u641C\u7D22",
    href: "/search"
  }, external_react_default.a.createElement("img", {
    alt: "\u641C\u7D22",
    src: m_search_default.a
  }))), external_react_default.a.createElement("div", {
    className: "language-h5"
  }, external_react_default.a.createElement("img", {
    alt: "language",
    src: languageiconh5_default.a,
    onClick: function onClick() {
      return setlangh5(!langh5);
    }
  }), langh5 && external_react_default.a.createElement("div", {
    className: "language-h5-list"
  }, external_react_default.a.createElement("div", {
    className: "language-h5-list-item ".concat(lanflag !== 'zh-TW' && 'lang-h5-active'),
    onClick: function onClick() {
      return changeLang('zh-CN');
    }
  }, "\u7B80\u4F53\u4E2D\u6587"), external_react_default.a.createElement("div", {
    className: "language-h5-list-item ".concat(lanflag === 'zh-TW' && 'lang-h5-active'),
    onClick: function onClick() {
      return changeLang('zh-TW');
    }
  }, "\u7E41\u4F53\u4E2D\u6587"))))));
};

var Header_Navigation_mapStateToProps = function mapStateToProps(state) {
  return {
    channelsList: state.multi.header.channelsList
  };
};

/* harmony default export */ var Layout_Header_Navigation = (Object(external_react_redux_["connect"])(Header_Navigation_mapStateToProps)(Header_Navigation_Navigation));
// CONCATENATED MODULE: ./_multiappsharing/components-m/Layout/Header/index.js



 // import backPage from './images/m-header-back-prev-page-icon.png'



var Header_Header = function Header() {
  // 滚动
  Object(external_react_["useEffect"])(function () {
    var $share = document.getElementById('wTop');
    Object(_multiappsharing_public["G" /* windowScroll */])(function (res) {
      if (Object(_multiappsharing_public["z" /* scrollOffset */])().top > Object(_multiappsharing_public["g" /* elementOffset */])($share).height) {
        $share.style.position = 'fixed';

        if (res === 'up') {
          $share.className = 'm-header active';
        } else if (res === 'down') {
          $share.className = 'm-header';
        }
      }
    });
  }, []);
  return external_react_default.a.createElement("div", {
    id: "wTop",
    className: "m-header active"
  }, external_react_default.a.createElement("div", {
    className: "huoxing-top"
  }, external_react_default.a.createElement("a", {
    title: "MarsBit",
    className: "logo",
    href: _multiappsharing_public["w" /* mixUrl */].m()
  }, external_react_default.a.createElement("img", {
    alt: "MarsBit",
    src: m_header_logo_blue_default.a
  }))), external_react_default.a.createElement(Layout_Header_Navigation, null));
};

/* harmony default export */ var components_m_Layout_Header = (Header_Header);
// EXTERNAL MODULE: ./_multiappsharing/components-m/Layout/Footer/m-img/m-b-logo.png
var m_b_logo = __webpack_require__(72);
var m_b_logo_default = /*#__PURE__*/__webpack_require__.n(m_b_logo);

// CONCATENATED MODULE: ./_multiappsharing/components-m/Layout/Footer/index.js




/* harmony default export */ var components_m_Layout_Footer = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  return external_react_default.a.createElement("div", {
    className: "bottom-cont"
  }, external_react_default.a.createElement("p", {
    className: "logo"
  }, external_react_default.a.createElement("a", {
    href: "https://www.marsbit.co"
  }, external_react_default.a.createElement("img", {
    src: m_b_logo_default.a,
    alt: ""
  }))), external_react_default.a.createElement("p", {
    className: "share",
    style: {
      display: 'none'
    }
  }, external_react_default.a.createElement("a", {
    href: "https://twitter.com/Mars_Finance",
    target: "_blank",
    className: "tw"
  }), external_react_default.a.createElement("a", {
    href: "https://t.me/MarsFinance",
    target: "_blank",
    className: "db"
  })), external_react_default.a.createElement("p", {
    className: "slogan"
  }, t('business_cooperation'), "\uFF1Atg: @Ulysses2047"), external_react_default.a.createElement("p", {
    className: "copyright"
  }, "Copyright MarsBit All Rights Reserved."), external_react_default.a.createElement("div", {
    className: "clearfix"
  }));
});
// CONCATENATED MODULE: ./_multiappsharing/components-m/Layout/index.js








var components_m_Layout_Layout = function Layout(props) {
  var route = props.route;
  var pathname = props.location.pathname;
  return external_react_default.a.createElement("div", {
    className: "m-layout-container"
  }, external_react_default.a.createElement(components_m_Layout_Header, {
    pathname: pathname
  }), external_react_default.a.createElement("div", {
    className: "m-layout-content"
  }, Object(external_react_router_config_["renderRoutes"])(route.routes, objectSpread_default()({}, Object(_multiappsharing_public["x" /* propsInherit */])(props)))), external_react_default.a.createElement(components_m_Layout_Footer, null));
};

/* harmony default export */ var components_m_Layout = (components_m_Layout_Layout);
// CONCATENATED MODULE: ./assets/pages-m/Home.js







 // import { mixUrl } from 'multiPublic/index'

var Home_HomePage =
/*#__PURE__*/
function (_Component) {
  inherits_default()(HomePage, _Component);

  function HomePage() {
    classCallCheck_default()(this, HomePage);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(HomePage).apply(this, arguments));
  }

  createClass_default()(HomePage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Home");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  customRes: true
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./assets/pages-m/Tags.js










var Tags_TagsPage =
/*#__PURE__*/
function (_Component) {
  inherits_default()(TagsPage, _Component);

  function TagsPage() {
    classCallCheck_default()(this, TagsPage);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(TagsPage).apply(this, arguments));
  }

  createClass_default()(TagsPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Tags");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = context.res;
                res.redirect(301, _multiappsharing_public["w" /* mixUrl */].m());
                return _context.abrupt("return", {
                  customRes: true
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TagsPage;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./assets/pages-m/Author.js










var Author_AuthorPage =
/*#__PURE__*/
function (_Component) {
  inherits_default()(AuthorPage, _Component);

  function AuthorPage() {
    classCallCheck_default()(this, AuthorPage);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(AuthorPage).apply(this, arguments));
  }

  createClass_default()(AuthorPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Author");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = context.res;
                res.redirect(301, _multiappsharing_public["w" /* mixUrl */].m());
                return _context.abrupt("return", {
                  customRes: true
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AuthorPage;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./assets/pages-m/Details.js
var pages_m_Details = __webpack_require__(73);

// EXTERNAL MODULE: ./assets/pages-m/DetailShare.js
var DetailShare = __webpack_require__(74);

// EXTERNAL MODULE: ./assets/pages-m/Feature.js
var pages_m_Feature = __webpack_require__(75);

// CONCATENATED MODULE: ./assets/pages-m/AuthorDetails.js










var AuthorDetails_AuthorDetailsPage =
/*#__PURE__*/
function (_Component) {
  inherits_default()(AuthorDetailsPage, _Component);

  function AuthorDetailsPage() {
    classCallCheck_default()(this, AuthorDetailsPage);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(AuthorDetailsPage).apply(this, arguments));
  }

  createClass_default()(AuthorDetailsPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "AuthorDetails");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = context.res;
                res.redirect(301, _multiappsharing_public["w" /* mixUrl */].m());
                return _context.abrupt("return", {
                  customRes: true
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AuthorDetailsPage;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./assets/pages-m/FeatureDetails.js
var pages_m_FeatureDetails = __webpack_require__(76);

// EXTERNAL MODULE: ./assets/pages-m/Flash.js
var pages_m_Flash = __webpack_require__(44);

// EXTERNAL MODULE: ./assets/pages-m/FlashDetail.js
var pages_m_FlashDetail = __webpack_require__(77);

// EXTERNAL MODULE: ./assets/pages-m/NoticeDetail.js
var pages_m_NoticeDetail = __webpack_require__(78);

// CONCATENATED MODULE: ./assets/routes/index-m.js














/** @desc 以下路由没有相对应的mob页面，只有pc页面。在此添加当mob端访问时渲染pc页面
 * exact 精准的 是否匹配子路由
 * strict 严格的 是否匹配斜杠”/“
 * 由于matchRoutes不能匹配多层component:root。故在pc端component的root下路由，在此需要分拆配置
 * */

var onlyPcRoutes = [];
/** @desc 以下为正常移动端路由 */

/* harmony default export */ var index_m = (function (params) {
  var routes = [{
    path: '/flashshare/:flashId.html',
    component: FlashShareDetail["a" /* default */],
    exact: true,
    strict: true
  }, {
    path: '/newsdetailShare/:newsId.html',
    component: DetailShare["a" /* default */],
    exact: true,
    strict: true
  }, {
    component: components_m_Layout,
    routes: [{
      path: ['', '/', '/list', '/list/', '/list/:channelId'],
      component: Home_HomePage,
      exact: true,
      strict: true
    }, {
      path: '/roll',
      component: RollNews["a" /* default */]
    }, {
      path: ['/author/:order/:type/:page', '/author'],
      component: Author_AuthorPage
    }, {
      path: '/author/details/:authorId',
      component: AuthorDetails_AuthorDetailsPage
    }, {
      path: '/feature/:featureId',
      component: pages_m_FeatureDetails["a" /* default */]
    }, {
      path: '/feature',
      component: pages_m_Feature["a" /* default */],
      exact: true
    }, {
      path: ['/tags/:tags', '/tags'],
      component: Tags_TagsPage
    }, {
      path: '/flash/',
      component: pages_m_Flash["a" /* default */],
      exact: true,
      strict: false
    }, {
      path: '/livenews/',
      component: pages_m_Flash["a" /* default */],
      exact: true
    }, {
      path: '/flash/:flashId.html',
      component: pages_m_FlashDetail["a" /* default */]
    }, {
      path: '/newsdetail/:newsId.html',
      component: pages_m_Details["a" /* default */],
      exact: true,
      strict: true
    }, {
      path: '/noticeDetail/:noticeId',
      component: pages_m_NoticeDetail["a" /* default */]
    }]
  }];
  return onlyPcRoutes.concat(routes);
}); // export default onlyPcRoutes.concat(routes)
// CONCATENATED MODULE: ./_multiappsharing/components/Layout/ErrorLayout.js





var ErrorLayout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return [external_react_default.a.createElement(Layout_Header, {
    key: "header"
  }), external_react_default.a.createElement("div", {
    className: "error-container-pc",
    key: "errorContainerPc"
  }, children), external_react_default.a.createElement(Layout_Footer, {
    key: "footer"
  })];
};

/* harmony default export */ var ErrorLayout = (ErrorLayout_Layout);
// CONCATENATED MODULE: ./_multiappsharing/components-m/Layout/ErrorLayout.js





var Layout_ErrorLayout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return [external_react_default.a.createElement(components_m_Layout_Header, {
    key: "header"
  }), external_react_default.a.createElement("div", {
    className: "error-container-m",
    key: "errorContainerM"
  }, children), external_react_default.a.createElement(components_m_Layout_Footer, {
    key: "footer"
  })];
};

/* harmony default export */ var Layout_ErrorLayout = (Layout_ErrorLayout_Layout);
// CONCATENATED MODULE: ./assets/App.js













var App_App =
/*#__PURE__*/
function (_Component) {
  inherits_default()(App, _Component);

  function App() {
    classCallCheck_default()(this, App);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(App).apply(this, arguments));
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      var routesLast = this.props.platform === 'pc' ? assets_routes(this.props.routesParams) : index_m(this.props.routesParams);
      return external_react_default.a.createElement("div", {
        className: "app-container"
      }, Object(external_react_router_config_["renderRoutes"])(routesLast, objectSpread_default()({}, this.props)));
    }
  }], [{
    key: "routes",
    value: function routes() {
      return {
        routes: assets_routes,
        routesM: index_m
      };
    }
  }, {
    key: "ErrorPage",
    value: function ErrorPage(_ref) {
      var platform = _ref.platform,
          message = _ref.message,
          stack = _ref.stack;

      if (platform === 'pc') {
        return external_react_default.a.createElement(ErrorLayout, null, external_react_default.a.createElement("h1", null, message), external_react_default.a.createElement("pre", null, stack));
      } else {
        return external_react_default.a.createElement(Layout_ErrorLayout, null, external_react_default.a.createElement("h1", null, message), external_react_default.a.createElement("pre", null, stack));
      }
    }
  }]);

  return App;
}(external_react_["Component"]);

/* harmony default export */ var assets_App = __webpack_exports__["default"] = (App_App);

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-simple-img");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("hammerjs");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("media-quill/es/videoPlayer");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ })
/******/ ]);
//# sourceMappingURL=App.js.map