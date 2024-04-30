require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var ipServer = function ipServer() {
  var os = __webpack_require__(45);

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

var publicPathTest = 'www.marslib.com';
var publicPathPrd = 'www.huoxing24.com';
var apiHostTest = 'api.marslib.com';
var apiHostPrd = 'api.marstelegram.com'; // race.huoxing24.com, publicChainRrank接口有自有项目接口和火星财经借口主要新闻快讯

var hxHostTest = 'api.marslib.com';
var hxHostPrd = 'api.huoxing24.com';
/** @Desc Defi数据api接口地址 */

var apiDomain = 'www.oklink.com';
/** @Desc element接口地址 */

var apiElementPrd = 'java-biz-s1.element.lan';
var config = {
  ip: function ip(port) {
    return "http://".concat(typeof window !== 'undefined' ? ipClient() : ipServer(), ":").concat(port);
  },
  webpackPort: 8066,
  // webpack服务端口
  serverPort: 3014 // 网站服务端口

};

if (env === 'development') {
  config = Object.assign(config, {
    publicPath: config.ip(config.webpackPort),
    // apiHost: `http://${apiHostTest}`,
    apiHost: "https://".concat(apiHostPrd),
    apiDomain: "https://".concat(apiDomain),
    hxHost: "https://".concat(hxHostTest),
    elementPrd: "http://".concat(apiElementPrd, ":8000")
  });
}

if (env === 'test') {
  config = Object.assign(config, {
    // publicPath: config.ip(config.serverPort), // localTest test时使用这个地址
    // publicPath: `http://${publicPathTest}`,
    publicPath: "",
    apiHost: "https://".concat(apiHostPrd),
    apiDomain: "https://".concat(apiDomain),
    hxHost: "https://".concat(hxHostTest),
    elementPrd: "http://".concat(apiElementPrd, ":8000")
  });
}

if (env === 'production') {
  config = Object.assign(config, {
    // publicPath: config.ip(config.serverPort), // localTest production时使用这个地址
    // publicPath: `https://${publicPathPrd}`,
    publicPath: "",
    apiHost: "https://".concat(apiHostPrd),
    apiDomain: "https://".concat(apiDomain),
    hxHost: "https://".concat(hxHostPrd),
    elementPrd: "http://".concat(apiElementPrd, ":8000")
  });
}

module.exports = config;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-promise-router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var env = "production";
var folderAddressTest = 'www.marslib.com';
var folderAddressPrd = 'www.huoxing24.com.temp';
/** @desc 测试服 */

var redisIp = '8.210.39.220'; // 开发环境使用外网地址

if (env === 'test') redisIp = '172.16.20.169'; // 测试服使用内网地址

var config = {
  redisIp: redisIp,
  // 微信分享缓存服务器IP
  redisPsd: 'KN9YMBSeKJ4oKl0',
  // 微信分享缓存服务器Password
  loadableStatsOutputPath: "/data/www/".concat(folderAddressTest, "/node/server/build"),
  // localTest test 时注释此段
  sshServer: [// 部署ssh服务器
  {
    config: {
      host: '8.210.39.220',
      port: 22,
      username: 'root',
      password: 'l8.LuQrR7xXtQM',
      readyTimeout: 200000
    },
    logs: 'deploy',
    path: "/data/www/".concat(folderAddressTest, "/node/publish.zip"),
    // shell: [`cd /data/node_site/${urlTest}`, 'unzip -o publish.zip', 'npm run pm2Test', 'rm -f publish.zip']
    shell: ['']
  }]
  /** @desc 正式服 */

};

if (env === 'production') {
  config = {
    redisIp: 'r-j6cwzd7dvux3iybide.redis.rds.aliyuncs.com',
    // 外网IP:39.105.139.238
    redisPsd: 'Qwe123KN9YMB',
    loadableStatsOutputPath: "/data/node_site/".concat(folderAddressPrd, "/node/server/build"),
    // localTest production 时注释此段
    sshServer: [{
      config: {
        host: '39.102.95.60',
        port: 22,
        username: 'root',
        password: '12>R_%Y)5V#.UL',
        readyTimeout: 200000
      },
      logs: 'deploy',
      path: "/data/node_site/".concat(folderAddressPrd, "/node/publish.zip"),
      // shell: [`cd /data/node_site/${urlPed}`, 'unzip -o publish.zip', 'npm run pm2Test', 'rm -f publish.zip']
      shell: ['']
    }, {
      config: {
        host: '39.102.93.110',
        port: 22,
        username: 'root',
        password: '12>R_%Y)5V#.UL',
        readyTimeout: 200000
      },
      logs: 'deploy',
      path: "/data/node_site/".concat(folderAddressPrd, "/node/publish.zip"),
      // shell: [`cd /data/node_site/${urlPed}`, 'unzip -o publish.zip', 'npm run pm2Test', 'rm -f publish.zip']
      shell: ['']
    }]
  };
}

module.exports = config;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-winston");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("i18next-express-middleware");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("js-base64");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("blueimp-md5");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var crypto = __webpack_require__(48);

var zlib = __webpack_require__(49);

var base64url = {};

var newBuffer = function newBuffer(fill, encoding) {
  return Buffer.from && Buffer.from(fill, encoding);
};

base64url.unescape = function unescape(str) {
  return (str + Array(5 - str.length % 4)).replace(/_/g, '=').replace(/-/g, '/').replace(/\*/g, '+');
};

base64url.escape = function escape(str) {
  return str.replace(/\+/g, '*').replace(/\//g, '-').replace(/=/g, '_');
};

base64url.encode = function encode(str) {
  return this.escape(newBuffer(str).toString('base64'));
};

base64url.decode = function decode(str) {
  return newBuffer(this.unescape(str), 'base64').toString();
};

function base64encode(str) {
  return newBuffer(str).toString('base64');
} // function base64decode (str) {
//     return newBuffer(str, 'base64').toString()
// }


var Api = function Api(sdkappid, key) {
  this.sdkappid = sdkappid;
  this.key = key;
};
/**
 * 通过传入参数生成 base64 的 hmac 值
 * @param identifier
 * @param currTime
 * @param expire
 * @returns {string}
 * @private
 */


Api.prototype._hmacsha256 = function (identifier, currTime, expire, base64UserBuf) {
  var contentToBeSigned = 'TLS.identifier:' + identifier + '\n';
  contentToBeSigned += 'TLS.sdkappid:' + this.sdkappid + '\n';
  contentToBeSigned += 'TLS.time:' + currTime + '\n';
  contentToBeSigned += 'TLS.expire:' + expire + '\n';

  if (base64UserBuf != null) {
    contentToBeSigned += 'TLS.userbuf:' + base64UserBuf + '\n';
  }

  var hmac = crypto.createHmac('sha256', this.key);
  return hmac.update(contentToBeSigned).digest('base64');
};
/**
 * TRTC业务进房权限加密串需使用用户定义的userbuf
 * @brief 生成 userbuf
 * @param account 用户名
 * @param dwSdkappid sdkappid
 * @param dwAuthID  数字房间号
 * @param dwExpTime 过期时间：该权限加密串的过期时间，建议300秒，实际过期时间:now+dwExpTime
 * @param dwPrivilegeMap 用户权限，255表示所有权限
 * @param dwAccountType 用户类型,默认为0
 * @param roomstr 字符串房间号
 * @return userbuf  {string}  返回的userbuf
 */


Api.prototype._genUserbuf = function (account, dwAuthID, dwExpTime, dwPrivilegeMap, dwAccountType, roomstr) {
  var accountLength = account.length;
  var roomstrlength = 0;
  var length = 1 + 2 + accountLength + 20;

  if (roomstr != null) {
    roomstrlength = roomstr.length;
    length = length + 2 + roomstrlength;
  }

  var offset = 0;
  var Alloc = Buffer.alloc;
  var userBuf = new Alloc(length); // cVer

  if (roomstr != null) {
    userBuf[offset++] = 1;
  } else {
    userBuf[offset++] = 0;
  } // wAccountLen


  userBuf[offset++] = (accountLength & 0xFF00) >> 8;
  userBuf[offset++] = accountLength & 0x00FF; // buffAccount

  for (; offset < 3 + accountLength; ++offset) {
    userBuf[offset] = account.charCodeAt(offset - 3);
  } // dwSdkAppid


  userBuf[offset++] = (this.sdkappid & 0xFF000000) >> 24;
  userBuf[offset++] = (this.sdkappid & 0x00FF0000) >> 16;
  userBuf[offset++] = (this.sdkappid & 0x0000FF00) >> 8;
  userBuf[offset++] = this.sdkappid & 0x000000FF; // dwAuthId

  userBuf[offset++] = (dwAuthID & 0xFF000000) >> 24;
  userBuf[offset++] = (dwAuthID & 0x00FF0000) >> 16;
  userBuf[offset++] = (dwAuthID & 0x0000FF00) >> 8;
  userBuf[offset++] = dwAuthID & 0x000000FF; // 过期时间：dwExpTime+now

  var expire = Date.now() / 1000 + dwExpTime;
  userBuf[offset++] = (expire & 0xFF000000) >> 24;
  userBuf[offset++] = (expire & 0x00FF0000) >> 16;
  userBuf[offset++] = (expire & 0x0000FF00) >> 8;
  userBuf[offset++] = expire & 0x000000FF; // dwPrivilegeMap

  userBuf[offset++] = (dwPrivilegeMap & 0xFF000000) >> 24;
  userBuf[offset++] = (dwPrivilegeMap & 0x00FF0000) >> 16;
  userBuf[offset++] = (dwPrivilegeMap & 0x0000FF00) >> 8;
  userBuf[offset++] = dwPrivilegeMap & 0x000000FF; // dwAccountType

  userBuf[offset++] = (dwAccountType & 0xFF000000) >> 24;
  userBuf[offset++] = (dwAccountType & 0x00FF0000) >> 16;
  userBuf[offset++] = (dwAccountType & 0x0000FF00) >> 8;
  userBuf[offset++] = dwAccountType & 0x000000FF;

  if (roomstr != null) {
    // roomstrlength
    userBuf[offset++] = (roomstr.length & 0xFF00) >> 8;
    userBuf[offset++] = roomstr.length & 0x00FF; // roomstr

    for (; offset < length; ++offset) {
      userBuf[offset] = account.charCodeAt(offset - (length - roomstr.length));
    }
  }

  return userBuf;
};

Api.prototype.genSig = function (userid, expire, userBuf) {
  var currTime = Math.floor(Date.now() / 1000);
  var sigDoc = {
    'TLS.ver': '2.0',
    'TLS.identifier': '' + userid,
    'TLS.sdkappid': Number(this.sdkappid),
    'TLS.time': Number(currTime),
    'TLS.expire': Number(expire)
  };
  var sig = '';

  if (userBuf != null) {
    var base64UserBuf = base64encode(userBuf);
    sigDoc['TLS.userbuf'] = base64UserBuf;
    sig = this._hmacsha256(userid, currTime, expire, base64UserBuf);
  } else {
    sig = this._hmacsha256(userid, currTime, expire, null);
  }

  sigDoc['TLS.sig'] = sig;
  var compressed = zlib.deflateSync(newBuffer(JSON.stringify(sigDoc))).toString('base64');
  return base64url.escape(compressed);
};
/**
 *【功能说明】用于签发 TRTC 和 IM 服务中必须要使用的 UserSig 鉴权票据
 *
 *【参数说明】
 * @param userid - 用户id，限制长度为32字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。
 * @param expire - UserSig 票据的过期时间，单位是秒，比如 86400 代表生成的 UserSig 票据在一天后就无法再使用了。
 */


Api.prototype.genUserSig = function (userid, expire) {
  return this.genSig(userid, expire, null);
};
/**
 *【功能说明】
 * 用于签发 TRTC 进房参数中可选的 PrivateMapKey 权限票据。
 * PrivateMapKey 需要跟 UserSig 一起使用，但 PrivateMapKey 比 UserSig 有更强的权限控制能力：
 *  - UserSig 只能控制某个 UserID 有无使用 TRTC 服务的权限，只要 UserSig 正确，其对应的 UserID 可以进出任意房间。
 *  - PrivateMapKey 则是将 UserID 的权限控制的更加严格，包括能不能进入某个房间，能不能在该房间里上行音视频等等。
 * 如果要开启 PrivateMapKey 严格权限位校验，需要在【实时音视频控制台】=>【应用管理】=>【应用信息】中打开“启动权限密钥”开关。
 *
 *【参数说明】
 * @param userid - 用户id，限制长度为32字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。
 * @param expire - PrivateMapKey 票据的过期时间，单位是秒，比如 86400 生成的 PrivateMapKey 票据在一天后就无法再使用了。
 * @param roomid - 房间号，用于指定该 userid 可以进入的房间号
 * @param privilegeMap - 权限位，使用了一个字节中的 8 个比特位，分别代表八个具体的功能权限开关：
 *  - 第 1 位：0000 0001 = 1，创建房间的权限
 *  - 第 2 位：0000 0010 = 2，加入房间的权限
 *  - 第 3 位：0000 0100 = 4，发送语音的权限
 *  - 第 4 位：0000 1000 = 8，接收语音的权限
 *  - 第 5 位：0001 0000 = 16，发送视频的权限
 *  - 第 6 位：0010 0000 = 32，接收视频的权限
 *  - 第 7 位：0100 0000 = 64，发送辅路（也就是屏幕分享）视频的权限
 *  - 第 8 位：1000 0000 = 200，接收辅路（也就是屏幕分享）视频的权限
 *  - privilegeMap == 1111 1111 == 255 代表该 userid 在该 roomid 房间内的所有功能权限。
 *  - privilegeMap == 0010 1010 == 42  代表该 userid 拥有加入房间和接收音视频数据的权限，但不具备其他权限。
 */


Api.prototype.genPrivateMapKey = function (userid, expire, roomid, privilegeMap) {
  var userBuf = this._genUserbuf(userid, roomid, expire, privilegeMap, 0, null);

  return this.genSig(userid, expire, userBuf);
};
/**
 *【功能说明】
 * 用于签发 TRTC 进房参数中可选的 PrivateMapKey 权限票据。
 * PrivateMapKey 需要跟 UserSig 一起使用，但 PrivateMapKey 比 UserSig 有更强的权限控制能力：
 *  - UserSig 只能控制某个 UserID 有无使用 TRTC 服务的权限，只要 UserSig 正确，其对应的 UserID 可以进出任意房间。
 *  - PrivateMapKey 则是将 UserID 的权限控制的更加严格，包括能不能进入某个房间，能不能在该房间里上行音视频等等。
 * 如果要开启 PrivateMapKey 严格权限位校验，需要在【实时音视频控制台】=>【应用管理】=>【应用信息】中打开“启动权限密钥”开关。
 *
 *【参数说明】
 * @param userid - 用户id，限制长度为32字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。
 * @param expire - PrivateMapKey 票据的过期时间，单位是秒，比如 86400 生成的 PrivateMapKey 票据在一天后就无法再使用了。
 * @param roomstr - 房间号，用于指定该 userid 可以进入的房间号
 * @param privilegeMap - 权限位，使用了一个字节中的 8 个比特位，分别代表八个具体的功能权限开关：
 *  - 第 1 位：0000 0001 = 1，创建房间的权限
 *  - 第 2 位：0000 0010 = 2，加入房间的权限
 *  - 第 3 位：0000 0100 = 4，发送语音的权限
 *  - 第 4 位：0000 1000 = 8，接收语音的权限
 *  - 第 5 位：0001 0000 = 16，发送视频的权限
 *  - 第 6 位：0010 0000 = 32，接收视频的权限
 *  - 第 7 位：0100 0000 = 64，发送辅路（也就是屏幕分享）视频的权限
 *  - 第 8 位：1000 0000 = 200，接收辅路（也就是屏幕分享）视频的权限
 *  - privilegeMap == 1111 1111 == 255 代表该 userid 在该房间内的所有功能权限。
 *  - privilegeMap == 0010 1010 == 42  代表该 userid 拥有加入房间和接收音视频数据的权限，但不具备其他权限。
 */


Api.prototype.genPrivateMapKeyWithStringRoomID = function (userid, expire, roomstr, privilegeMap) {
  var userBuf = this._genUserbuf(userid, 0, expire, privilegeMap, 0, roomstr);

  return this.genSig(userid, expire, userBuf);
};

exports.Api = Api;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("i18next-node-fs-backend");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {"headernavone":"首页","headernavtwo":"快讯","headerimportant":"要闻","headernavthree":"新闻","headernavfour":"直播","headernavfive":"专题","my_news":"我的专栏","downloadapp":"下载APP","sao_downloadapp":"扫描下载APP","loginout":"退出登录","login":"登录","input_please":"请输入搜索关键字","search":"搜索","business_cooperation":"商务合作","all_world_dynamic":"聚焦全球区块链科技前沿动态","friendship_link":"友情链接","more_footer":"更多","investment_web3":"投资区块链，下载MarsBit APP","android_download":"Android版下载","ios_download":"iPhone 版下载","product_dynamics":"项目动态","download_marsbit_app":"下载MarsBit APP","marsbit_app_desc":"以行业热点、实时快讯、视频解读等维度提供全方位的区块链整合服务","most_new_topic":"最新专题","hot_door_title":"热门标签","hot_door_nft":"热门NFT","account_pasd_login":"账号密码登录","signnup_new_account":"注册新账号","please_sure_ipone":"请输入正确手机号","password_not_null":"密码不能为空","account_paswd_error":"账号密码登录错误","input_mobile_code":"输入手机号码","input_password":"密码","forget_password":"忘记密码","sure":"确定","other_ways_login":"其它方式登录","wechat_login":"微信登录","message_login":"短信登录","account_login":"账号登录","password_rule":"密码长度6~16位，且同时包含字母和数字","account_login_error":"账号登录错误","user_register_error":"用户注册错误","change_password_error":"修改密码错误","register_marsbit":"注册MarsBit","retrieve_password":"找回密码","register_agree":"注册即视为同意","marsbit_user_agreement":"MarsBit用户协议","to_sure":"确认","haved_account_to_login":"已有账号，直接登录","register_verify_error":"手机是否有注册验证错误","bind_mobile_fail":"绑定手机号失败","registered_bind_error":"已注册手机号绑定错误","not_register_bind_error":"未注册手机号绑定错误","mobile_register_verify_fail":"手机是否有注册验证失败","bind_account":"绑定账号","register_new_account":"注册新账号","element_all_quant":"总交易额","element_min_price":"地板价","element_holder":"持有者","24_hot_news":"24H热门新闻","flash_info":"快讯精选","disclaimer_in":"免责声明：本文不构成投资建议，用户应考虑本文中的任何意见、观点或结论是否符合其特定状况，及遵守所在国家和地区的相关法律法规。","look_all_info":"查看全文","hand_pick_flash":"精选快讯","see_more_info_download":"看更多快讯，下载MarsBit APP","usercenter_author_info":"编辑资料","usercenter_change_password":"修改密码","usercenter_article":"文章","usercenter_vidio":"视频","usercenter_collect":"收藏","usercenter_coming":"进入","usercenter_immediate_entry":"立即入驻","usercenter_column":"专栏","no_content":"暂无内容","usercenter_attention":"关注","usercenter_vermicelli":"粉丝","usercenter_achievement":"个人成就","usercenter_all_fb":"共发布了","usercenter_all_author":"篇文章","usercenter_all_vedio":"部视频","usercenter_all_hot_more":"发布的文章总热度超过","usercenter_all_get":"文章总共获得","usercenter_all_pl":"次评论","usercenter_column_author":"专栏作者","usercenter_change_batch":"换一批","news_hotd":"热度","news_sm_one":"声明：本文为入驻“MarsBit 专栏”作者作品，不代表MarsBit官方立场。","news_sm_two":"转载请联系网页底部：内容合作栏目，邮件进行授权。授权后转载时请注明出处、作者和本文链接。","news_sm_three":"未经许可擅自转载本站文章，将追究相关法律责任，侵权必究。","news_sm_four":"提示：投资有风险，入市须谨慎，本资讯不作为投资理财建议。","news_guan_j":"关键字","news_updated":"最近更新","news_this_article":"本文来源","news_author_title":"原文标题","feature_update_time":"按更新时间","feature_set_time":"按创建时间","feature_setting":"已创建","feature_zt_num":"个专题","feature_desc":"专题介绍","feature_recommended_topic":"推荐专题","feature_hot_news":"热门新闻","about_news":"相关新闻","news_get_you":"为你推荐","guan_zhu":"关注","guan_zhu_ed":"已关注","verify_code":"验证码","send_verify_code":"发送验证码","author_info_self":"个人专栏","author_info_media":"媒体专栏","author_info_enterprise":"企业专栏","author_info_ordinary_user":"普通用户","author_info_zl_self":"专栏个人认证","author_info_zl_media":"专栏媒体认证","author_info_zl_enterprise":"专栏机构认证","live_ing":"直播中","live_playback":"回放中","live_about_start":"即将开始","live_broadcast_time":"直播时间","live_start_time":"开始时间","live_tj_strem":"推荐直播","live_brief":"直播简介","live_commincation":"聊天室","live_not_start":"直播尚未开始","live_finsh":"直播已结束，感谢参与互动","live_to_say":"发布评论，参与直播互动","live_send":"发送","share_open":"打开","open_column":"开通专栏","abstract-news":"本摘要由 Mars AI 模型生成，其生成内容的准确性、完整性还处于迭代更新阶段。","abstract-title":"摘要由 Mars AI 生成"}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {"headernavone":"首頁","headernavtwo":"快訊","headerimportant":"要聞","headernavthree":"新聞","headernavfour":"直播","headernavfive":"專題","my_news":"我的專欄","downloadapp":"下載APP","sao_downloadapp":"掃描下載APP","loginout":"退出登錄","login":"登錄","input_please":"請輸入搜索關鍵字","search":"搜索","business_cooperation":"商務合作","all_world_dynamic":"聚焦全球區塊鏈科技前沿動態","friendship_link":"友情鏈接","more_footer":"更多","investment_web3":"投資區塊鏈，下載MarsBit APP","android_download":"Android版下載","ios_download":"iPhone 版下載","product_dynamics":"項目動態","download_marsbit_app":"下載MarsBit APP","marsbit_app_desc":"以行業熱點、實時快訊、視頻解讀等維度提供全方位的區塊鏈整合服務","most_new_topic":"最新專題","hot_door_title":"熱門標籤","hot_door_nft":"熱門NFT","account_pasd_login":"賬號密碼登錄","signnup_new_account":"註冊新賬號","please_sure_ipone":"請輸入正確手機號","password_not_null":"密碼不能為空","account_paswd_error":"賬號密碼登錄錯誤","input_mobile_code":"輸入手機號碼","input_password":"密碼","forget_password":"忘記密碼","sure":"確定","other_ways_login":"其它方式登錄","wechat_login":"微信登錄","message_login":"短信登錄","account_login":"賬號登錄","password_rule":"密碼長度6~16位，且同時包含字母和數字","account_login_error":"賬號登錄錯誤","user_register_error":"用戶註冊錯誤","change_password_error":"修改密碼錯誤","register_marsbit":"註冊MarsBit","retrieve_password":"找回密碼","register_agree":"註冊即視為同意","marsbit_user_agreement":"MarsBit用戶協議","to_sure":"確認","haved_account_to_login":"已有賬號，直接登錄","register_verify_error":"手機是否有註冊驗證錯誤","bind_mobile_fail":"綁定手機號失敗","registered_bind_error":"已註冊手機號綁定錯誤","not_register_bind_error":"未註冊手機號綁定錯誤","mobile_register_verify_fail":"手機是否有註冊驗證失敗","bind_account":"綁定賬號","register_new_account":"註冊新賬號","element_all_quant":"總交易額","element_min_price":"地板價","element_holder":"持有者","24_hot_news":"24H熱門新聞","flash_info":"快訊精選","disclaimer_in":"免責聲明：本文不構成投資建議，用戶應考慮本文中的任何意見、觀點或結論是否符合其特定狀況，及遵守所在國家和地區的相關法律法規。","look_all_info":"查看全文","hand_pick_flash":"精選快訊","see_more_info_download":"看更多快訊，下載MarsBit APP","usercenter_author_info":"編輯資料","usercenter_change_password":"修改密碼","usercenter_article":"文章","usercenter_vidio":"視頻","usercenter_collect":"收藏","usercenter_coming":"進入","usercenter_immediate_entry":"立即入駐","usercenter_column":"專欄","no_content":"暫無內容","usercenter_attention":"關注","usercenter_vermicelli":"粉絲","usercenter_achievement":"個人成就","usercenter_all_fb":"共發布了","usercenter_all_author":"篇文章","usercenter_all_vedio":"部視頻","usercenter_all_hot_more":"發布的文章總熱度超過","usercenter_all_get":"文章總共獲得","usercenter_all_pl":"次評論","usercenter_column_author":"專欄作者","usercenter_change_batch":"換一批","news_hotd":"熱度","news_sm_one":"聲明：本文為入駐“MarsBit 專欄”作者作品，不代表MarsBit官方立場。","news_sm_two":"轉載請聯繫網頁底部：內容合作欄目，郵件進行授權。授權後轉載時請註明出處、作者和本文鏈接。","news_sm_three":"未經許可擅自轉載本站文章，將追究相關法律責任，侵權必究。","news_sm_four":"提示：投資有風險，入市須謹慎，本資訊不作為投資理財建議。","news_guan_j":"關鍵字","news_updated":"最近更新","news_this_article":"本文來源","news_author_title":"原文標題","feature_update_time":"按更新時間","feature_set_time":"按創建時間","feature_setting":"已創建","feature_zt_num":"個專題","feature_desc":"專題介紹","feature_recommended_topic":"推薦專題","feature_hot_news":"熱門新聞","about_news":"相關新聞","news_get_you":"為你推薦","verify_code":"驗證碼","send_verify_code":"發送驗證碼","author_info_self":"個人專欄","author_info_media":"媒體專欄","author_info_enterprise":"企業專欄","author_info_ordinary_user":"普通用戶","author_info_zl_self":"專欄個人認證","author_info_zl_media":"專欄媒體認證","author_info_zl_enterprise":"專欄機構認證","live_ing":"直播中","live_playback":"回放中","live_about_start":"即將開始","live_broadcast_time":"直播時間","live_start_time":"開始時間","live_tj_strem":"推薦直播","live_brief":"直播簡介","live_commincation":"聊天室","live_not_start":"直播尚未開始","live_finsh":"直播已結束，感謝參與互動","live_to_say":"發布評論，參與直播互動","live_send":"發送","share_open":"打開","open_column":"開通專欄","abstract-news":"本摘要由Mars AI模型生成，其生成內容的準確性、完整性還處於反覆運算更新階段。","abstract-title":"摘要由Mars AI生成"}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("jssha");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "debug"
var external_debug_ = __webpack_require__(17);
var external_debug_default = /*#__PURE__*/__webpack_require__.n(external_debug_);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(26);
var external_http_default = /*#__PURE__*/__webpack_require__.n(external_http_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(6);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: external "http-errors"
var external_http_errors_ = __webpack_require__(27);
var external_http_errors_default = /*#__PURE__*/__webpack_require__.n(external_http_errors_);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(11);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "cookie-parser"
var external_cookie_parser_ = __webpack_require__(28);
var external_cookie_parser_default = /*#__PURE__*/__webpack_require__.n(external_cookie_parser_);

// EXTERNAL MODULE: external "compression"
var external_compression_ = __webpack_require__(29);
var external_compression_default = /*#__PURE__*/__webpack_require__.n(external_compression_);

// EXTERNAL MODULE: external "express-winston"
var external_express_winston_ = __webpack_require__(15);
var external_express_winston_default = /*#__PURE__*/__webpack_require__.n(external_express_winston_);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(18);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(7);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(0);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(30);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(31);

// EXTERNAL MODULE: external "blueimp-md5"
var external_blueimp_md5_ = __webpack_require__(32);
var external_blueimp_md5_default = /*#__PURE__*/__webpack_require__.n(external_blueimp_md5_);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(33);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(5);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__(3);

// CONCATENATED MODULE: ./_multiappsharing/public/index.js




var _this = undefined;





 // import hmacSHA256 from 'crypto-js/hmac-sha256'


/**
 * @desc 注销或检测到token过期时删除登录cookie信息
 * @method clearLoginCookies()
 */

var public_clearLoginCookies = function clearLoginCookies() {
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

    external_js_cookie_default.a.remove(cookiesName[key]); // 删除新版本登录信息

    external_js_cookie_default.a.remove(cookiesName[key], {
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
  var dataTmp = public_isObject(data) ? JSON.stringify(data) : data;

  if (typeof dataTmp === 'string') {
    var domainWww = "www.marsbit.".concat(domainSuffix(req));
    var domainNew = "news.marsbit.".concat(domainSuffix(req));
    var domainMp = "mp.marsbit.".concat(domainSuffix(req));
    dataTmp = dataTmp.replace(/www.marsbit.co/g, domainWww);
    dataTmp = dataTmp.replace(/news.marsbit.co/g, domainNew);
    dataTmp = dataTmp.replace(/mp.marsbit.co/g, domainMp);
    dataTmp = public_isJson(dataTmp) ? JSON.parse(dataTmp) : dataTmp;
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

var public_ajaxSignature = function ajaxSignature() {
  var platform = 'pc';
  var appSecret = 'Fbz]OdjAyhpqOIKA';
  var nonceArr = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890';
  var timestamp = new Date().getTime();
  var nonce = '';

  for (var i = 0; i < 6; i++) {
    var j = Math.round(Math.random() * nonceArr.length);
    nonce += nonceArr[j];
  }

  var sig = external_blueimp_md5_default()('platform=' + platform + '&timestamp=' + timestamp + '&nonce=' + nonce + '&' + appSecret);
  return external_js_base64_["Base64"].encode(JSON.stringify({
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

var public_axiosAjax = function axiosAjax(args) {
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

    var langBrowser = typeof window !== 'undefined' && external_js_cookie_default.a.get(cookiesName.language); // 前端请求

    if (langServer) language = langServer;
    if (langBrowser) language = langBrowser; // console.log(langServer, langBrowser)
    // params.lang = language

    try {
      var urlLast = config["apiHost"] + url;
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
          data: external_qs_default.a.stringify(objectSpread_default()({}, params, {
            lang: language
          }))
        };
      } else if (ajaxType === 'get') {
        opt = {
          method: type,
          url: urlLast,
          params: objectSpread_default()({}, params, {
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
        'Sign-Param': public_ajaxSignature()
      });
      external_axios_default()(objectSpread_default()({}, opt, {
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
              public_clearLoginCookies(); // window.location.href = mixUrl.main('/account')
            }

            if (resCode !== -4 && url.indexOf('/logger') === -1) {
              public_logReport({
                message: 'client-api-msg',
                httpCode: 200,
                url: url,
                params: public_isJson(params) ? JSON.stringify(params) : params,
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

        if (public_isJson(errMsg) && JSON.parse(errMsg).message === 'api-msg') {
          errObj = JSON.parse(errMsg);
        } else {
          errObj = objectSpread_default()({
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
          errObj.params = public_isJson(params) ? JSON.stringify(params) : params;
          if (err.stack) errObj.stack = err.stack;
          url.indexOf('/logger') === -1 && public_logReport(objectSpread_default()({}, errObj, {
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
        errObj.params = public_isJson(params) ? JSON.stringify(params) : params;
        if (err.stack) errObj.stack = err.stack;
        url.indexOf('/logger') === -1 && public_logReport(objectSpread_default()({}, errObj, {
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

var public_logReport = function logReport(params) {
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

      var paramsObj = objectSpread_default()({}, params, logObj);

      if (paramsObj.url && paramsObj.url.indexOf('/logger') === -1 || !paramsObj.url) {
        public_axiosAjax({
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

          if (public_deepCompare(val, params)) {
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

var public_websocket = function websocket(args) {
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
      var wssUrl = "".concat(https || "production" === 'production' ? 'wss' : 'ws', "://").concat((host || (config["apiHost"].indexOf('http') > -1 ? config["apiHost"].split('://')[1] : config["apiHost"])) + (url || ''));
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

var public_isObject = function isObject(obj) {
  return obj && typeof_default()(obj) === 'object' && !Array.isArray(obj);
};
/**
 * @desc 判断Json字符串是否为正确的Json格式
 * @returns {boolean}
 * @Params {obj}
 * @method isJson(obj)
 */

var public_isJson = function isJson(obj) {
  if (typeof obj === 'string') {
    try {
      var objFormat = JSON.parse(obj);
      return typeof_default()(objFormat) === 'object' && objFormat;
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
  return public_isJson(arrayString) ? isArray(JSON.parse(arrayString)) ? JSON.parse(arrayString) : [] : [];
};
/**
 * @desc 获取字符类json数据某key的值
 * @returns {string} key的值
 * @Params {jsonString, key, defaultVal} jsonString字符类的json, key, defaultVal默认值
 * @method coverPcItemVal(jsonString, key, defaultVal)
 */

var stringJsonItem = function stringJsonItem(jsonString, key, defaultVal) {
  var initVal = defaultVal || ''; // 判断是否为json，再转换后判断是否有pc这个属性

  return public_isJson(jsonString) ? JSON.parse(jsonString)[key] || initVal : initVal;
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

var public_deepCompare = function deepCompare(x, y) {
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
      } else if (typeof_default()(y[p]) !== typeof_default()(x[p])) {
        return false;
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof_default()(y[p]) !== typeof_default()(x[p])) {
        return false;
      }

      switch (typeof_default()(x[p])) {
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

var public_deepMerge = function deepMerge() {
  var isObject = function isObject(obj) {
    return obj && typeof_default()(obj) === 'object';
  };

  for (var _len = arguments.length, objects = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    objects[_key2] = arguments[_key2];
  }

  return objects.reduce(function (prev, obj) {
    Object.keys(obj).forEach(function (key) {
      var pVal = prev[key];
      var oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat.apply(pVal, toConsumableArray_default()(oVal));
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
    return "".concat(envDev ? Object(config["ip"])(3008) : envTest ? 'http://zt.marslib.com' : 'https://zt.marsbit.co').concat(path || '');
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

    return "".concat(envDev ? Object(config["ip"])(3012) : envTest ? 'http://m.marslib.com' : hostPrd).concat(path || '');
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

    return "".concat(envDev ? Object(config["ip"])(3014) : envTest ? 'http://www.marslib.com' : hostPrd).concat(path || '');
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

    return "".concat(envDev ? Object(config["ip"])(3012) : envTest ? 'http://news.marslib.com' : hostPrd).concat(path || '');
  },
  token: function token(path) {
    return "".concat(envDev ? Object(config["ip"])(3018) : envTest ? 'http://token.marslib.com' : 'https://token.marsbit.co').concat(path || '');
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
/* harmony default export */ var _multiappsharing_public = ({
  clearLoginCookies: public_clearLoginCookies,
  ajaxSignature: public_ajaxSignature,
  axiosAjax: public_axiosAjax,
  websocket: public_websocket,
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
  isJson: public_isJson,
  isArrayBuffer: isArrayBuffer,
  isArray: isArray,
  isObject: public_isObject,
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
  deepCompare: public_deepCompare,
  deepMerge: public_deepMerge,
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
  logReport: public_logReport,
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
// CONCATENATED MODULE: ./server/app/logger.js




var winston = __webpack_require__(46);

var createLogger = winston.createLogger,
    format = winston.format,
    transports = winston.transports;

__webpack_require__(47); // 确保项目根目录存在logs文件夹


var logDirectory = external_path_default.a.resolve('./', 'logs');
external_fs_default.a.existsSync(logDirectory) || external_fs_default.a.mkdirSync(logDirectory); // 根据日期生成文件

var transportFile = function transportFile(obj) {
  return new winston.transports.DailyRotateFile(Object.assign({
    datePattern: 'YYYY-MM-DD-HH',
    // zippedArchive: true,
    maxSize: '20m',
    maxFiles: '1d'
  }, obj));
}; // 信息输出


var logger_formatPrintf = function formatPrintf(info) {
  try {
    var timestamp = info.timestamp,
        level = info.level,
        message = info.message;
    var obj = {
      level: level,
      timestamp: timestamp,
      message: message
    };

    if (info.meta) {
      // 由express-winston中间件打印，包含meta信息
      var meta = info.meta;
      var req = meta.req;
      obj.url = "".concat(req.method, " ").concat(req.headers.host + req.originalUrl);
      req.query && JSON.stringify(req.query) !== '{}' && (obj.query = JSON.stringify(req.query));
      req.body && JSON.stringify(req.body) !== '{}' && (obj.body = JSON.stringify(req.body));
      meta.error && Object.keys(meta.error).map(function (key, index) {
        // 暂时有errpath， errmessage
        var val = meta.error[key];
        obj["err_".concat(key)] = public_isObject(val) ? JSON.stringify(val) !== '{}' ? JSON.stringify(val) : '' : val;
      });
      meta.stack && (obj.stack = meta.stack.replace(/[\r\n]/g, ''));
      obj.cookies = "".concat(req.headers.cookie);
      obj.userAgent = req.headers['user-agent'];
      meta.res && Object.keys(meta.res).map(function (key, index) {
        // 暂时有resstatusCode
        var val = meta.res[key];
        obj["res_".concat(key)] = public_isObject(val) ? JSON.stringify(val) !== '{}' ? JSON.stringify(val) : '' : val;
      });
      meta.responseTime && (obj.responseTime = meta.responseTime);
      obj.meta = JSON.stringify(meta);
    } else {
      Object.keys(info).map(function (key, index) {
        if (key !== 'level' && key !== 'timestamp' && key !== 'message') {
          if (key === 'stack' || key === 'componentStack') {
            obj[key] = info[key].replace(/[\r\n]/g, '');
          } else {
            var val = info[key];
            obj[key] = public_isObject(val) ? JSON.stringify(val) !== '{}' ? JSON.stringify(val) : '' : val;
          }
        }
      });
    }

    return JSON.stringify(obj);
  } catch (err) {
    return JSON.stringify({
      level: 'error',
      message: 'winston printf'
    });
  }
};

var logger_transportLevelFile = function transportLevelFile(level) {
  return transportFile({
    level: level,
    format: format.combine(format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }), format.printf(logger_formatPrintf)),
    filename: external_path_default.a.resolve(logDirectory, "".concat(level, "-%DATE%.log"))
  });
};

var logger = createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  },
  handleExceptions: true,
  json: true,
  maxsize: 5242880,
  // 5MB
  maxFiles: 5
});
logger.configure({
  level: 'verbose'
});
logger.configure({
  level: 'debug'
});
logger.configure({
  level: 'silly',
  transports: [transportFile({
    // 此没有级别则从最低级silly全部打印
    format: format.combine(format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }), format.printf(logger_formatPrintf)),
    filename: external_path_default.a.resolve(logDirectory, 'info-%DATE%.log')
  }), // transportLevelFile('http'), // level以当前级别包含关系，如: http则打印http+info+wran+error; warn则打印wran+error
  // transportLevelFile('error'), // error则只打印error
  logger_transportLevelFile('warn'), new transports.Console({
    format: format.combine(format.colorize(), format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }), format.printf(function (info) {
      var timestamp = info.timestamp,
          level = info.level,
          message = info.message;
      return "".concat(timestamp, " [").concat(level, "]: ").concat(message);
    }))
  })]
});
/** @desc 日志级别(error, warn, info, http, verbose, debug, silly)
 * 符合RFC5424指定的严重性顺序。官方地址:https://tools.ietf.org/html/rfc5424
 * error:0 严重错误，会导致程序或页面崩溃，必须马上处理：程序运行错误, ejs模板错误, middleware其它运行中间件错误
 * warn:1 警告需要尽早解决，对于那些目前还不是错误，然而不及时处理也会变成错误的情况。内存或cpu使用率过高, 接口请求错误, 接口请求成功但code!==1
 * info:2 有意义的事件信息，记录程序正常的运行状态，比如收到请求，成功执行。通过查看info,可以快速定位error，warn。info不宜过多，通常情况下不超过debug的10%
 * http:3 请求日志，可查看当前请求头信息与状态码等
 * verbose:4 冗余信息，记录一些有用可长期存在的信息
 * debug:5 调试信息，与程序运行时的流程相关的详细信息以及当前变量状态
 * silly:6 临时信息，临时日志后期可删除
 * */

/** @desc 后端自动打印: 包含meta字段，后端自动打印在/server/app/app.js中的错误处理中间件统一捕获错误
 * error
 * 1:ejs模板错误; 2:react后端运行错误; 2:middleware其它中间件错误(包括自动捕获至全局的错误errorHandle);
 * warn
 * 1:api接口请求错误400/500; 2:api接口请求正确200但code!==1; 3:内存或cpu使用过高等性能警告
 * http
 * 1:所有相关请求
 * ----example----
 * warn
 * {message: 'api-err', httpCode: 400/500, url: '/failed', errMsg: 'error message', stack: 'stack'} // 由ajax公共函数统一打印
 * error
 * {message: 'api-msg', httpCode: 200, url: '/succeed', resCode: -1, resMsg: 'res.msg', stack: 'stack'} // 由ajax公共函数统一打印
 * middleware error
 * {level: 'error', message: 'middlewareerror', error: 'error', stack: 'stack', meta: {}} // 由错误中间件统一打印
 * */

/** @desc 前端日志上报: 框架前端自动打印multiPublic/index.js中logReport参数params包含framework:true。前端所有日志message中都包含’client‘字符串
 * error
 * 1:js运行错误browser/index.js; 2:react组件捕获错误browser/app.js;
 * warn
 * 1:api接口请求错误400/500; 2:api接口请求正确200但code!==1;
 * 1
 * ----example----
 * {message: 'client-api-msg', url: '/succeed', params:{}, httpCode: 200, resCode: -1, resMsg: 'res.msg', ip: '', userAgent: '', cookies: '', localStorage: '', sessionStorage}
 * {message: 'client-api-err', url: '/failed', params:{}, httpCode: 400/500, errMsg: 'error message', ip: '', userAgent: '', cookies: '', localStorage: '', sessionStorage}
 * {message: 'client-ajax-handle-err', url: '/failed', params:{}, httpCode: 200, errMsg: 'error message', ip: '', userAgent: '', cookies: '', localStorage: '', sessionStorage}
 * {message: 'client-app-err', errMsg: 'error message', userAgent: '', stack: '', ip: '', userAgent: '', cookies: '', localStorage: '', sessionStorage} // ejs项目
 * {message: 'client-app-err-react', errMsg: 'error message', timetampClient: '', userAgent: '', stack: '', componentStack: '', ip: '', userAgent: '', cookies: '', localStorage: '', sessionStorage}
 * {message: 'client-app-err-window', errMsg: 'error message', timetampClient: '', userAgent: '', source: '', lineno: '', colno: '', stack: '', ip: '', userAgent: '', cookies: '', localStorage: '', sessionStorage}
 * */

/** @desc 自定义日志，开发者主动打印。react程序中调用multiPublic/index.js的logReport方法{level: 'error'} level为主动传入字段
 * { level: 'error', message: trace, stack: 'stack'}
 * ----example----
 * logReport({ level: 'error', message: '', path: '' }) // 前端程序
 * res.logger.error({ message: '', path: '' }) // 后端路由
 * logger.error({ message: '', path: '' }) // 调用文件
 * */

/** @desc 整体描述
 * 前端日志上报为: ajax调用nodejs的/logger路由，由node调动此日志程序打印。所有message中包含'client'字符。logger路由判断params中是否有framework为框架打印否则为自定义打印
 * 后端日志打印为: app.js中的错误中间件统一捕获利用此日志程序打印。路由中可调用res.logger，或者调用server/app/logger.js
 * 前后端同构react程序日志打印为: 调用multiPublic/index.js中的logReport方法打印[为前端打印，如果后端报错会直接由app.js错误中间件处理]
 * */

/** @desc 使用示例
 * logger.error('error test')
 * logger.warn('warn test')
 * logger.info('info test')
 * logger.http('http test')
 * logger.verbose('verbose test')
 * logger.debug('debug test')
 * logger.silly('silly test')
 * logger.log({ level: 'verbose', message: 'log verbose test' })
 * */

/** @desc 日志格式/字段
 * 文件日志格式统一采用JSON，便于ELK解析处理。
 * 日志中的各个字段的值，都应该尽量使用英文，不使用中文。
 * 日志具体字段，分为基础数据 + 扩展数据。基础数据，是底层日志框架自带的，所有日志都会包含。扩展数据，不同类型的日志，包含不同的字段。
 * */

/* const loggerParams = {
    /!** ---------基础数据------- **!/
    level: 'error',
    message: 'middlewareError',
    // message: 'HTTP GET /',
    timestamp: '2019-11-29 19:59:58',
    /!** ---------扩展字段------- **!/
    httpCode: '400/500',
    url: '/failed',
    errMsg: 'error message'
    // httpCode: 200,
    // url: '/succeed',
    // resCode: -1,
    // resMsg: 'res.msg'
    // eg: 以下为http请求日志，请求头中所有信息可在此查看
    // url: '',
    // query: {},
    // body: {}
    // res_statusCode: 200,
    // responseTime: 1,
    // meta: {} // 其它请求信息userAgent, cookies等,以多层json数据存在,由express-winston自动打印，备份作为其它问题查询
    // eg: 以下为ejs+router等中间件错误日志
    // url: '',
    // query: {},
    // body: {}
    // err_message: 200,
    // err_path: 200,
    // meta: {} // 其它错误信息process, trace等,以多层json数据存在,由express-winston自动打印，备份作为其它问题查询
}
console.log(loggerParams) */

/* harmony default export */ var app_logger = (logger);
// EXTERNAL MODULE: external "http-proxy-middleware"
var external_http_proxy_middleware_ = __webpack_require__(34);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(35);
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_);

// CONCATENATED MODULE: ./server/app/proxy.js



/* harmony default export */ var proxy = (function (app) {
  var onError = function onError(err, req, res) {
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.' + err);
  };

  var onProxyReq = function onProxyReq(proxyReq, req, res) {
    if (req.method.toLowerCase() === 'post' && req.body) {
      if (!req.body || !Object.keys(req.body).length) return;
      var contentType = proxyReq.getHeader('Content-Type');

      var writeBody = function writeBody(bodyData) {
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      };

      if (contentType === 'application/json') {
        writeBody(JSON.stringify(req.body));
      }

      if (contentType === 'application/x-www-form-urlencoded') {
        writeBody(external_querystring_default.a.stringify(req.body));
      }
    }
  };

  var onProxyRes = function onProxyRes(proxyRes, req, res) {} // const cookies = proxyRes.headers['set-cookie']
  // const cookieRegex = /Path=\/XXX\//i
  // // 修改cookie Path
  // if (cookies) {
  //     const newCookie = cookies.map(function (cookie) {
  //         if (cookieRegex.test(cookie)) {
  //             return cookie.replace(cookieRegex, 'Path=/')
  //         }
  //         return cookie
  //     })
  //     // 修改cookie path
  //     delete proxyRes.headers['set-cookie']
  //     proxyRes.headers['set-cookie'] = newCookie
  // }
  // api.defi.com 接口代理
  ;

  app.use(['/api/explorer'], Object(external_http_proxy_middleware_["createProxyMiddleware"])({
    target: config["apiDomain"],
    changeOrigin: true,
    ws: true,
    https: true,
    headers: {
      Referer: config["apiDomain"]
    },
    cookieDomainRewrite: '',
    onError: onError,
    onProxyReq: onProxyReq,
    onProxyRes: onProxyRes
  }));
});
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "express-promise-router"
var external_express_promise_router_ = __webpack_require__(12);
var external_express_promise_router_default = /*#__PURE__*/__webpack_require__.n(external_express_promise_router_);

// EXTERNAL MODULE: external "https"
var external_https_ = __webpack_require__(36);
var external_https_default = /*#__PURE__*/__webpack_require__.n(external_https_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(37);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(19);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(16);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(20);

// EXTERNAL MODULE: external "react-router-config"
var external_react_router_config_ = __webpack_require__(38);

// EXTERNAL MODULE: external "@loadable/server"
var external_loadable_server_ = __webpack_require__(21);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(22);

// CONCATENATED MODULE: ./server/render/publc.js


var _require = __webpack_require__(3),
    publicPath = _require.publicPath;
/** @desc 财经统计代码
 * @params
 * url, timestamp, device_source, ref_url, hx24_eventId, hx24_preEventId, hx24_userCookieUuid, hx24_deviceUuid
 * @method statisticsHx24(platform) platform: webpc, webm
 * */


var statisticsHx24 = function statisticsHx24(platform) {
  return "\n<script>\n    window.hx24Flatform = \"".concat(platform, "\";\n</script>\n");
};
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


var statistics = "\n    <script>\n    var _hmt = _hmt || [];\n    (function() {\n    var hm = document.createElement(\"script\");\n    hm.src = \"https://hm.baidu.com/hm.js?0f04816eea55fec5a1f0c7fe30aef21b\";\n    var s = document.getElementsByTagName(\"script\")[0]; \n    s.parentNode.insertBefore(hm, s);\n    })();\n    </script>\n    "; // marstelegram.com 域名统计代码

var statistGram = "\n    <script>\n    var _hmt = _hmt || [];\n    (function() {\n    var hm = document.createElement(\"script\");\n    hm.src = \"https://hm.baidu.com/hm.js?60730e7a185bb6e05ddc28f2fcf20ddc\";\n    var s = document.getElementsByTagName(\"script\")[0]; \n    s.parentNode.insertBefore(hm, s);\n    })();\n    </script>\n    "; // marsbit.cc 域名统计代码

var statistCc = "\n    <script>\n    var _hmt = _hmt || [];\n    (function() {\n    var hm = document.createElement(\"script\");\n    hm.src = \"https://hm.baidu.com/hm.js?76e96681d574f1bc7561c43bf9661c8c\";\n    var s = document.getElementsByTagName(\"script\")[0]; \n    s.parentNode.insertBefore(hm, s);\n    })();\n    </script>\n    ";
/** @desc 自定义style与script
 * @method myStylesScripts(initProps)
 * */

var publc_myStylesScripts = function myStylesScripts(initProps) {
  var myStyles = '';

  if (initProps.stylesheet) {
    if (!isArray(initProps.stylesheet) || initProps.stylesheet.length === 0) throw new Error('stylesheet is not a array or length is 0');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = initProps.stylesheet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;
        var href = val.indexOf('https://') > -1 || val.indexOf('http://') > -1 ? val : publicPath + val;
        myStyles += "<link href=\"".concat(href, "?v=").concat(new Date().getMonth(), "\" rel=\"stylesheet\" type=\"text/css\">");
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

  var myScripts = '';

  if (initProps.javascript) {
    if (!isArray(initProps.javascript) || initProps.javascript.length === 0) throw new Error('javascript is not a array or length is 0');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = initProps.javascript[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _val = _step2.value;
        var src = _val.indexOf('https://') > -1 || _val.indexOf('http://') > -1 ? _val : publicPath + _val;
        myScripts += "<script type=\"text/javascript\" src=\"".concat(src, "?v=").concat(new Date().getMonth(), "\" crossorigin></script>");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return {
    myStyles: myStyles,
    myScripts: myScripts
  };
};

var publc_clientLink = function clientLink(initProps, platform) {
  if (!initProps.hasOwnProperty('clientLink') || initProps.clientLink === 'onlyPc' || initProps.clientLink === 'onlyMob' || initProps.clientLink === false || initProps.clientLink === '') return '';

  var isPcStr = function isPcStr() {
    if (platform === 'pc') return "!isPc()";
    if (platform === 'mob') return 'isPc()';
  };

  return "<script>\n        function isPc() {\n            var userAgent = window.navigator.userAgent.toLowerCase()\n            var Agents = ['android', 'iphone', 'ipod', 'windows phone']\n            for (var i = 0; i < Agents.length; i++) {\n                if (userAgent.indexOf(Agents[i]) > -1) return  false\n            }\n            return true\n        }\n        if (".concat(isPcStr(), ") window.location.href = '").concat(initProps.clientLink, "' \n    </script>");
};
/** @desc 微信分享。注：url暂时调用www.huoxing24.com。跨域问题需要具体跟运维查看
 * 请注意，原有的1.2.0版本 wx.onMenuShareTimeline、wx.onMenuShareAppMessage、wx.onMenuShareQQ、wx.onMenuShareQZone 接口，即将废弃。
 * 请尽快迁移使用客户端6.7.2及JSSDK 1.4.0以上版本支持的 wx.updateAppMessageShareData、wx.updateTimelineShareData接口。
 * @method wxShare(isWx)
 * */


var wxShare = function wxShare(isWx) {
  if (!isWx) return '';
  return "<script src=\"https://res.wx.qq.com/open/js/jweixin-1.6.0.js\"></script>\n            <script>\n            function formatParams(data) {\n                var arr = [];\n                for (var name in data) {\n                    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))\n                }\n                arr.push(('v=' + Math.random()).replace('.', ''))\n                return arr.join('&')\n            }\n    \n            function ajax(options) {\n                options = options || {}\n                options.type = (options.type || 'get').toLowerCase()\n                options.dataType = options.dataType || 'json'\n                var params = formatParams(options.data)\n                var xhr = new XMLHttpRequest()\n                xhr.onreadystatechange = function () {\n                    if (xhr.readyState === 4) {\n                        var status = xhr.status\n                        if (status >= 200 && status < 300) {\n                            options.success && options.success(xhr.responseText, xhr.responseXML)\n                        } else {\n                            options.fail && options.fail(status)\n                        }\n                    }\n                }\n                if (options.type === 'get') {\n                    xhr.open('GET', options.url + '?' + params, true)\n                    xhr.send(null)\n                } else if (options.type === 'post') {\n                    xhr.open('POST', options.url, true)\n                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')\n                    xhr.send(params)\n                }\n            }\n            ajax({\n                url: 'https://m.marsbit.co/signture',\n                type: 'post',\n                data: { url: window.location.href.split('#')[0] },\n                success: function (res, xml) {\n                    const data = JSON.parse(res)\n                    wx.config({\n                        debug: false,\n                        appId: 'wx0ed2ac0b34184652',\n                        timestamp: data.timestamp,\n                        nonceStr: data.nonceStr,\n                        signature: data.signature,\n                        jsApiList: [\n                            'checkJsApi',\n                            'updateAppMessageShareData',\n                            'updateTimelineShareData'\n                        ],\n                        openTagList: ['wx-open-launch-app']\n                    })\n                    wx.ready(function () {\n                        const shareData = {\n                            title: document.querySelector('meta[name=\"wxshare-title\"]').getAttribute('content'),\n                            desc:  document.querySelector('meta[name=\"description\"]').getAttribute('content'),\n                            imgUrl: ".concat(publicPath, "/resource/images/favicon.ico,\n                            link: data.url,\n                            success: function () {\n                                document.querySelector('.m-wx-share-box').style.display = 'inline'\n                            },\n                            cancel: function () {\n                                document.querySelector('.m-wx-share-box').style.display = 'inline'\n                            }\n                        }\n                        wx.updateAppMessageShareData(shareData)\n                        wx.updateTimelineShareData(shareData)\n                    })\n                    \n                    wx.error(function (err) {\n                        console.log(err.errMsg)\n                    })\n                },\n                fail: function (status) {\n                    console.log('wx share fail status ' + status)\n                }\n            })\n        </script>");
};


// CONCATENATED MODULE: ./server/render/layout.js



var layout_require = __webpack_require__(3),
    layout_publicPath = layout_require.publicPath;

var title = webTdk.title,
    description = webTdk.description,
    keywords = webTdk.keywords;
/* harmony default export */ var layout = (function (_ref) {
  var initState = _ref.initState,
      initProps = _ref.initProps,
      styles = _ref.styles,
      scripts = _ref.scripts,
      links = _ref.links,
      platform = _ref.platform,
      isWx = _ref.isWx,
      errObjProps = _ref.errObjProps,
      isNagalink = _ref.isNagalink,
      isMarslibco = _ref.isMarslibco,
      isMarslibcc = _ref.isMarslibcc,
      isMarsgram = _ref.isMarsgram;
  var securelinklist = ['www.naga.one', 'm.naga.one', '10.0.8.138'];
  var pageTitle = initProps.title ? initProps.title : title;
  var pageDescriptionHtml = initProps.description ? initProps.description.replace(/\n/g, '') : description;
  var pageDescription = pageDescriptionHtml.replace(/<[^>]+>/ig, '');
  var pageKeywords = initProps.keywords ? initProps.keywords : keywords;
  var pageIcon = securelinklist.indexOf(isNagalink) > -1 ? "".concat(layout_publicPath, "/resource/images/naga_icon.ico") : "".concat(layout_publicPath, "/favicon.ico");
  var shareIcon = initProps.shareIcon ? initProps.shareIcon : "".concat(layout_publicPath, "/resource/images/favicon.ico");
  var shareTitle = initProps.shareTitle ? initProps.shareTitle : pageTitle;

  var _myStylesScripts = publc_myStylesScripts(initProps),
      myScripts = _myStylesScripts.myScripts,
      myStyles = _myStylesScripts.myStyles; // 统计代码按域名区分


  var statictCode = isMarslibco ? statistics : isMarslibcc ? statistCc : isMarsgram ? statistGram : statistics; // 如果移动端打开pc页面，如果有相对应的移动端则跳转

  var clientLinkStr = publc_clientLink(initProps, 'pc'); // 如果是微信pc则返回微信分享代码

  var wxShareStr = wxShare(isWx);
  var errObjScript = errObjProps ? "window._ERROBJPROPS_ = ".concat(JSON.stringify(errObjProps)) : '';
  var siteicon = 'http://www.marsbit.co/resource/images/huoxing24.png?t=' + new Date().getTime();
  var twettericon = initProps.twettericon ? initProps.twettericon + '?t=' + new Date().getTime() : siteicon;
  var twetterType = initProps.twettericon && initProps.twettericon !== '' ? 'summary_large_image' : 'summary'; // const twitterimg = `http://www.marsbit.co/resource/images/naga_icon.ico`
  // <meta content="${siteicon}" name="twitter:image" />

  return {
    header: "<!DOCTYPE html>\n                <html lang=\"zh-hans\">\n                    <title>".concat(pageTitle, "</title>\n                    <meta charset=\"utf-8\">\n                    <meta content=\"index, follow\" name=\"robots\" />\n                    <meta content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\" name=\"viewport\" />\n                    <meta content=\"ie=edge\" http-equiv=\"x-ua-compatible\" />\n                    <meta name=\"keywords\" content=\"").concat(pageKeywords, "\">\n                    <meta name=\"description\" content=\"").concat(pageDescription, "\">\n                    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"/>\n                    <meta name=\"renderer\" content=\"webkit|ie-comp|ie-stand\"/>\n                    <meta name=\"force-rendering\" content=\"webkit\"/>\n                    <!--\u5FAE\u4FE1\u5206\u4EAB\u56FE\u6807-->\n                    <meta name=\"wxshare-icon\" content=\"").concat(shareIcon, "\"/>\n                    <!--\u5FAE\u4FE1\u5206\u4EAB\u6807\u9898--> \n                    <meta name=\"wxshare-title\" content=\"").concat(shareTitle, "\"/>\n                    <!--\u5FAE\u4FE1\u5206\u4EAB\u63CF\u8FF0--> \n                    <meta name=\"wxshare-desc\" content=\"").concat(pageDescription, "\"/>\n                    <!--\u5916\u7AD9\u5206\u4EAB\u56FE\u6807-->\n                    <meta property=\"og:site_name\" content=\"Mars Finance\"/>\n                    <meta property=\"og:title\" content=\"").concat(pageTitle, "\"/>\n                    <meta property=\"og:image\" content=\"").concat(siteicon, "\"/>\n                    <meta property=\"og:description\" content=\"").concat(pageDescription, "\"/>\n                    <title>").concat(pageTitle, "</title>\n                    <meta content='").concat(twetterType, "' name='twitter:card' />\n                    <meta content=\"@Mars Finance\" name=\"twitter:site\"  />\n                    <meta content=\"@Mars_Finance\" name=\"twitter:creator\" />\n                    <meta content=\"").concat(pageTitle, "\" name=\"twitter:title\" />\n                    <meta content=\"").concat(pageDescription, "\" name=\"twitter:description\" />\n                    <meta content=\"").concat(twettericon, "\" name=\"twitter:image\" />\n                    <!--\u624B\u673AQQ\u5206\u4EAB-->\n                    <meta itemprop=\"name\" content=\"").concat(pageTitle, "\">\n                    <meta itemprop=\"description\" content=\"").concat(pageDescription, "\">\n                    <meta itemprop=\"image\" content=\"").concat(shareIcon, "\">\n                    <!--360site-->\n                    <meta name=\"360-site-verification\" content=\"4d4227e94cc86231bd81ada778d071d7\" />\n                    ").concat(statisticsHx24('webpc'), "\n                    ").concat(clientLinkStr, "\n                    ").concat(wxShareStr, "\n                    <!--[if lte IE 10]>\n                    <script src=\"").concat(layout_publicPath, "/resource/plugin/browser-tips.js\"></script>\n                    <![endif]-->\n                    <link rel=\"shortcut icon\" href=\"").concat(pageIcon, "\" type=\"image/x-icon\">\n                    ").concat(myStyles, "\n                    ").concat(styles, "\n                </head>\n                <body>\n                    <img src=\"http://www.marsbit.co/resource/images/huoxing24.png\" width=\"0\" height=\"0\" style=\"height:0;width:0;position:absolute;top:0\" />\n                    <noscript>You need to enable JavaScript to run this app.</noscript>\n                    <div id=\"root\">"),
    footer: "</div>\n                    <script>\n                        window.__INITIAL_STATE__ =".concat(JSON.stringify(initState), "\n                        window.__INITIAL_PROPS__ =").concat(JSON.stringify(initProps), "\n                        window.__PLATFORM__ =\"").concat(platform, "\"\n                        ").concat(errObjScript, "\n                    </script>\n                    <script src=\"https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js\"></script>\n                    ").concat(myScripts, "\n                    ").concat(scripts, "\n                    ").concat(statictCode, "\n                </body>\n            </html>")
  };
});
// CONCATENATED MODULE: ./server/render/layout-m.js



var layout_m_require = __webpack_require__(3),
    layout_m_publicPath = layout_m_require.publicPath;

var layout_m_title = webTdk.title,
    layout_m_description = webTdk.description,
    layout_m_keywords = webTdk.keywords;
/* harmony default export */ var layout_m = (function (_ref) {
  var initState = _ref.initState,
      initProps = _ref.initProps,
      styles = _ref.styles,
      scripts = _ref.scripts,
      links = _ref.links,
      platform = _ref.platform,
      isWx = _ref.isWx,
      errObjProps = _ref.errObjProps,
      isNagalink = _ref.isNagalink,
      isMarslibco = _ref.isMarslibco,
      isMarslibcc = _ref.isMarslibcc,
      isMarsgram = _ref.isMarsgram;
  var securelinklist = ['www.naga.one', 'm.naga.one'];
  var pageTitle = initProps.title ? initProps.title : layout_m_title;
  var pageDescriptionHtml = initProps.description ? initProps.description.replace(/\n/g, '') : layout_m_description;
  var pageDescription = pageDescriptionHtml.replace(/<[^>]+>/ig, '');
  var pageKeywords = initProps.keywords ? initProps.keywords : layout_m_keywords;
  var pageIcon = securelinklist.indexOf(isNagalink) > -1 ? "".concat(layout_m_publicPath, "/resource/images/naga_icon.ico") : "".concat(layout_m_publicPath, "/favicon.ico");
  var shareIcon = initProps.shareIcon ? initProps.shareIcon : "".concat(layout_m_publicPath, "/resource/images/favicon.ico");
  var shareTitle = initProps.shareTitle ? initProps.shareTitle : pageTitle;

  var _myStylesScripts = publc_myStylesScripts(initProps),
      myScripts = _myStylesScripts.myScripts,
      myStyles = _myStylesScripts.myStyles;

  var siteicon = 'http://www.marsbit.co/resource/images/huoxing24.png?t=' + new Date().getTime();
  var twettericon = initProps.twettericon ? initProps.twettericon + '?t=' + new Date().getTime() : siteicon;
  var twetterType = initProps.twettericon && initProps.twettericon !== '' ? 'summary_large_image' : 'summary'; // 如果pc打开移动端页面，如果有相对应的pc页面则跳转

  var clientLinkStr = publc_clientLink(initProps, 'mob'); // 统计代码按域名区分

  var wxShareStr = wxShare(isWx);
  var statictCode = isMarslibco ? statistics : isMarslibcc ? statistCc : isMarsgram ? statistGram : statistics; // 如果是微信pc则返回微信分享代码

  var errObjScript = errObjProps ? "window._ERROBJPROPS_ = ".concat(JSON.stringify(errObjProps)) : ''; // const twitterimg = 'http://www.marsbit.co/resource/images/naga_icon.ico'

  return {
    header: "<!DOCTYPE html>\n            <html lang=\"zh-cmn-Hans\">\n                <head>\n                    <meta charset=\"utf-8\">\n                    <meta name=\"keywords\" content=\"".concat(pageKeywords, "\">\n                    <meta name=\"description\" content=\"").concat(pageDescription, "\">\n                    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n                    <!--\u624B\u673AQQ\u5206\u4EAB-->\n                    <meta itemprop=\"name\" content=\"").concat(pageTitle, "\">\n                    <meta itemprop=\"description\" content=\"").concat(pageDescription, "\">\n                    <meta itemprop=\"image\" content=\"").concat(shareIcon, "\">\n                    <!--360site-->\n                    <meta name=\"360-site-verification\" content=\"4d4227e94cc86231bd81ada778d071d7\" />\n                    <!--\u89C6\u7A97\u9650\u5236-->\n                    <meta name=\"viewport\"\n                          content=\"\n                          width=device-width,\n                          initial-scale=1.0,\n                          minimum-scale=1.0,\n                          maximum-scale=1.0,\n                          user-scalable=no\">\n\n                    <!--\u5FAE\u4FE1\u5206\u4EAB\u56FE\u6807-->\n                    <meta name=\"wxshare-icon\" content=\"").concat(shareIcon, "\"/>\n                    <!--\u5FAE\u4FE1\u5206\u4EAB\u6807\u9898--> \n                    <meta name=\"wxshare-title\" content=\"").concat(shareTitle, "\"/>\n                    <!--\u5FAE\u4FE1\u5206\u4EAB\u63CF\u8FF0--> \n                    <meta name=\"wxshare-desc\" content=\"").concat(pageDescription, "\"/>\n                    <!--\u5916\u7AD9\u5206\u4EAB\u56FE\u6807-->\n                    <meta property=\"og:site_name\" content=\"Mars Finance\"/>\n                    <meta property=\"og:title\" content=\"").concat(pageTitle, "\"/>\n                    <meta property=\"og:image\" content=\"http://www.marsbit.co/resource/images/huoxing24.png\"/>\n                    <meta property=\"og:description\" content=\"").concat(pageDescription, "\"/>\n                    <title>").concat(pageTitle, "</title>\n                    <meta content=\"").concat(twetterType, "\" name='twitter:card' />\n                    <meta content=\"@Mars Finance\" name=\"twitter:site\"  />\n                    <meta content=\"@Mars_Finance\" name=\"twitter:creator\" />\n                    <meta content=\"").concat(pageTitle, "\" name=\"twitter:title\" />\n                    <meta content=\"").concat(pageDescription, "\" name=\"twitter:description\" />\n                    <meta content=\"").concat(twettericon, "\" name=\"twitter:image\" />\n                    ").concat(statisticsHx24('webm'), "\n                    ").concat(clientLinkStr, "\n                    ").concat(wxShareStr, "\n                    <script src=\"").concat(layout_m_publicPath, "/resource/plugin/remset.js?t=").concat(new Date().getDay(), "\"></script>\n                    <link rel=\"shortcut icon\" href=\"").concat(pageIcon, "\" type=\"image/x-icon\">\n                    ").concat(myStyles, "\n                    ").concat(styles, "\n                </head>\n                <body>\n                    <img src=\"http://www.marsbit.co/resource/images/huoxing24.png\" width=\"0\" height=\"0\" style=\"height:0;width:0;position:absolute;top:0\" />\n                    <noscript>You need to enable JavaScript to run this app.</noscript>\n                    <div id=\"root\" class=\"root-mobile\">"),
    footer: "</div>\n                    <script>\n                        window.__INITIAL_STATE__= ".concat(JSON.stringify(initState), "\n                        window.__INITIAL_PROPS__ = ").concat(JSON.stringify(initProps), "\n                        window.__PLATFORM__ =\"").concat(platform, "\"\n                        ").concat(errObjScript, "\n                    </script>\n                    <script src=\"https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js\">\n                    </script>\n                    ").concat(myScripts, "\n                    ").concat(scripts, "\n                    ").concat(statictCode, "\n                </body>\n            </html>")
  };
});
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(39);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./assets/redux/constants/home.js
// 获取Defi数据———总锁仓
var GETDEFITOTALLOCKED = 'get-defi-totalLocked'; // 获取Defi数据———总市值

var GETDEFIMARKETCAP = 'get-defi-marketcap'; // 获取Defi数据———单项内容

var GETDEFIITEMINFO = 'get-defi-iteminfo'; // 获取首页广告数据

var GETADDATA = 'get-ad-data'; // 获取首页广告图片数据

var GETADIMGDATA = 'get-ad-img-data'; // 获取首页精选内容

var GETADRECOMMEND = 'get-ad-recommend'; // 获取首页右侧新闻排行

var GETRANKNEWS = 'get-rank-news'; // 获取首页最新专题

var GETSUBJECT = 'get-subject'; // 获取首页精选视频

var GETVIDEO = 'get-video'; // 获取首页精选标签

var GETTAGS = 'get-tags'; // 获取首页新闻导航栏

var GETLEFTNEWSCHANNELID = 'get-left-news-channel-id'; // 获取首页新闻头条

var GETNEWSHEADLINES = 'get-left-news-headlines'; // 获取首页更多的新闻头条

var GETNEWSHEADLINESMORE = 'get-left-news-headlines-more'; // 获取首页全部新闻内容

var GETNEWSTOTALLIST = 'get-left-news-total-list'; // 获取首页更多的全部新闻内容

var GETNEWSTOTALLISTMORE = 'get-left-news-total-list-more'; // 获取首页热门作者

var GETHOMESHOWAUTHORLIST = 'get-show-author-list'; // 获取首页当前汇率

var GETEXCHANGERATES = 'get-exchange-rates'; // 获取首页货币行情

var GETMARKERQUOTATIONS = 'get-marker-quotations'; // 获取首页后台可控直播入口

var GETHOMEROOMLIST = 'get-home-room-list'; // 首页节日背景关闭

var FESTIVALCLOSE = 'festival-close'; // 获取element banner数据

var GETELEMNETBANNER = 'get-element-banner'; // 获取element banner详情

var GETCOLLECTIONDEATIL = 'get-collection-detail';
// CONCATENATED MODULE: ./assets/redux/reducers/home.js



var home_initState = {
  // Defi数据
  defiData: {
    totallocked: '',
    // 总锁仓
    marketCap: '',
    // 总市值
    infoData: {} // 单项内容

  },
  // 广告数据
  adData: {},
  // 首页右侧app下载 —— adData[10]
  adOneselfData: [],
  // 首页顶部滚动数据 —— adData[11]
  slideTopAdData: [],
  // 广告图片数据
  adImgData: {},
  // 首页图片广告 —— adImgData[1]
  primaryImgData: [],
  // 首页文字广告 —— adImgData[17]
  recommendImgData: [],
  // 直播详情页广告 —— adImgData[30]
  liveDetailImgData: [],
  // 直播列表页广告 —— adImgData[31]
  liveListImgData: [],
  // 首页顶部横幅广告 —— adImgData[32]
  homeTopAdImgData: [],
  // 精选内容
  adRecommend: [],
  // 新闻排行数据
  rankNews: [],
  // 最新专题
  subjectData: [],
  // 精选视频
  videoData: [],
  // 精选标签
  tagsData: [],
  // 新闻导航
  newsChannelIdData: [],
  // 新闻头条
  newsHeadlinesData: [],
  // 新闻全部内容
  newsTotalListData: {},
  // 作者数据
  authorListData: [],
  // 右侧MarsBit作者滚动数据
  mpAuthorData: [],
  // 当前汇率
  usdToCnyRate: 1,
  // 当前货币行情列表
  slideTopCoinData: [],
  // 可控直播入口
  controllerLiveData: [],
  // 关闭节日背景
  festivalCloseState: false,
  // element banner列表
  elementBannerList: [],
  // 获取合集详情列表
  collectionlist: []
};
/* harmony default export */ var home = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : home_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newDefiData = state.defiData;
  var newsAdImgData = state.adImgData;
  var newsAuthorData = state.authorListData;
  var oldNewsTotalListData = state.newsTotalListData;

  switch (action.type) {
    case GETDEFITOTALLOCKED:
      newDefiData.totallocked = action.data.extend.totalLocked;
      return objectSpread_default()({}, state, {
        defiData: newDefiData
      });

    case GETDEFIMARKETCAP:
      var list = action.data;

      if (list.length !== 0) {
        newDefiData.marketCap = list[list.length - 1].marketCap;
        return objectSpread_default()({}, state, {
          defiData: newDefiData
        });
      } else {
        return state;
      }

    case GETDEFIITEMINFO:
      newDefiData.infoData = action.data;
      return objectSpread_default()({}, state, {
        defiData: newDefiData
      });

    case GETADDATA:
      var adOneselfData = [];

      if (action.data[10] && action.data[10].length !== 0) {
        adOneselfData = action.data[10].concat();
        adOneselfData.map(function (item, index) {
          var appUrl = ''; // 点击地址

          var appType = '';

          switch (item.title) {
            case 'MarsBit云矿':
              appUrl = 'https://www.mclouds.io/';
              appType = '下载APP';
              break;

            case 'MarsBit交易大师':
              appUrl = 'https://trade.huoxing24.com/';
              appType = '下载APP';
              break;

            case '可可金融':
              appUrl = 'https://www.cococoin.com/m/other/download';
              appType = '下载APP';
              break;

            case 'MarsBitDeFi矿池':
              appUrl = item.url;
              appType = '去挖矿';
              break;

            case 'MarsBit闪贷':
              appUrl = item.url;
              appType = '去借贷';
              break;

            case 'MarsBit存币宝':
              appUrl = item.url;
              appType = '去存币';
              break;

            default:
              appUrl = '';
              appType = 0;
              break;
          }

          item.appUrl = appUrl;
          item.appType = appType;
        });
      }

      var adLen = 7;
      var slideData = [];

      if (action.data[11] && action.data[11].length !== 0) {
        var listData = action.data[11].concat();
        var adGroup = Math.ceil(listData.length / adLen);

        if (adGroup * adLen > listData.length) {
          var addLen = adGroup * adLen - listData.length;
          var addNewArr = listData.slice(0, addLen);

          for (var i = 0; i < addNewArr.length; i++) {
            listData.push(addNewArr[i]);
          }
        }

        for (var _i = 0; _i < listData.length; _i += adLen) {
          slideData.push(listData.slice(_i, _i + adLen));
        }
      }

      return objectSpread_default()({}, state, {
        adData: action.data,
        slideTopAdData: slideData,
        adOneselfData: adOneselfData
      });

    case GETADIMGDATA:
      var listPrimary = [];

      if (action.data[1] && action.data[1].length !== 0) {
        listPrimary = action.data[1].concat();
        listPrimary.map(function (item) {
          if (!item.pcImgSrc) {
            item.pcImgSrc = mixUrl["static"]('/images/2018/03/05/1520243882098653.svg');
          }

          switch (item.useType) {
            case 1:
            case 2:
              break;

            case 3:
              item.url = mixUrl.news("/".concat(item.url, ".html"));
              break;

            case 4:
              item.url = mixUrl.news("/list/".concat(item.url));
              break;

            case 5:
              item.url = mixUrl.news("/feature/".concat(item.url.split('/')[1]));
              break;

            case 6:
              item.url = mixUrl.news("/tags/".concat(item.url));
              break;

            default:
              break;
          }
        });
      }

      var recommendList = [];

      if (action.data[17] && action.data[17].length !== 0) {
        var listRecommend = action.data[17].concat();
        var recommendItem = [];
        listRecommend.map(function (item, index) {
          switch (item.useType) {
            case 1:
            case 2:
              break;

            case 3:
              item.url = mixUrl.news("/newsdetail/".concat(item.url));
              break;

            case 4:
              item.url = mixUrl.news("/list/".concat(item.url));
              break;

            case 5:
              item.url = mixUrl.news("/feature/".concat(item.url.split('/')[1]));
              break;

            case 6:
              item.url = mixUrl.news("/tags/".concat(item.url));
              break;
          }

          if (index < 6) {
            if (index % 2 === 0) {
              recommendItem = [];
              recommendItem.push(item);
            } else {
              recommendItem.push(item);
              recommendList.push(recommendItem);
            }
          }
        });
      }

      var liveDetailImgList = [];

      if (action.data[30] && action.data[30].length !== 0) {
        liveDetailImgList = action.data[30].concat();
      }

      var liveListImgList = [];

      if (action.data[31] && action.data[31].length !== 0) {
        liveListImgList = action.data[31].concat();
      }

      var homeTopAdImgList = [];

      if (action.data[32] && action.data[32].length !== 0) {
        homeTopAdImgList = action.data[32].concat();
      }

      return objectSpread_default()({}, state, {
        adImgData: action.data,
        primaryImgData: listPrimary,
        recommendImgData: recommendList,
        liveDetailImgData: liveDetailImgList,
        liveListImgData: liveListImgList,
        homeTopAdImgData: homeTopAdImgList
      });

    case GETADRECOMMEND:
      return objectSpread_default()({}, state, {
        adRecommend: action.data
      });

    case GETRANKNEWS:
      return objectSpread_default()({}, state, {
        rankNews: action.data.inforList
      });

    case GETSUBJECT:
      var subjectData = [];

      if (action.data.inforList && action.data.inforList.length !== 0) {
        subjectData = action.data.inforList.concat();
        subjectData.map(function (item, index) {
          var aUrl = !item.topic.typeLink ? mixUrl.news("/feature/".concat(item.topic.id)) : item.topic.typeLink;
          var dTopic = Object.assign({
            topicName: '',
            newSmallPcImgSrc: ''
          }, item.topic);
          var itemListArr = Array.isArray(item.contentList) ? item.contentList : [];
          itemListArr = itemListArr.slice(0, 1);
          item.aUrl = aUrl;
          item.dTopic = dTopic;
          item.itemListArr = itemListArr;
        });
      }

      return objectSpread_default()({}, state, {
        subjectData: subjectData
      });

    case GETVIDEO:
      return objectSpread_default()({}, state, {
        videoData: action.data
      });

    case GETTAGS:
      return objectSpread_default()({}, state, {
        tagsData: action.data.inforList
      });

    case GETLEFTNEWSCHANNELID:
      var newsChannelIdData = [];

      if (action.data && action.data.length !== 0) {
        newsChannelIdData = action.data.concat();
        newsChannelIdData.unshift({
          id: 0,
          channelId: 10002,
          channelName: '头条',
          rank: 0,
          updateTime: '',
          createTime: ''
        });
        newsChannelIdData.map(function (item, index) {
          if ((parseInt(item.channelId) === 10000 || parseInt(item.channelId) === 28) && !item.custom) {
            // 上边自定义了学习区块链(课程)，在此删除接口返回的。为了把MarsBit号与学习区块链(课程)调换位置
            newsChannelIdData.splice(index, 1);
          } else if (parseInt(item.channelId) === 1) {
            // 不显示 channelId = 1 的分类
            newsChannelIdData.splice(index, 1);
          }
        });
      }

      return objectSpread_default()({}, state, {
        newsChannelIdData: newsChannelIdData
      });

    case GETNEWSHEADLINES:
      // 广告位置 初始数组位置，每隔4个出现一次
      var adImgFirst = 4;
      var adImgNum = 0;
      var headList = action.data.concat();
      var authorList = newsAuthorData.slice(0, 5);
      headList.splice(2, 0, {
        infoType: 'author',
        infoObj: authorList
      });
      var headAdList = newsAdImgData[3].concat(); // 根据位置参数 从大到小

      headAdList.sort(function (a, b) {
        return -(a.weight - b.weight);
      });
      var newHeadList = [];

      for (var headIndex = 0; headIndex < headList.length; headIndex++) {
        if (headIndex === adImgFirst + adImgNum * 5 - adImgNum && adImgNum < headAdList.length) {
          var adItem = headAdList[adImgNum];
          newHeadList.push({
            infoType: 'adImg',
            infoObj: adItem
          });
          adImgNum += 1;
        }

        newHeadList.push(headList[headIndex]);
      }

      return objectSpread_default()({}, state, {
        newsHeadlinesData: newHeadList
      });

    case GETNEWSHEADLINESMORE:
      var moreHeadList = action.data;

      if (moreHeadList.length !== 0) {
        var newMoreHeadList = state.newsHeadlinesData.concat(action.data);
        return JSON.parse(JSON.stringify(objectSpread_default()({}, state, {
          newsHeadlinesData: newMoreHeadList
        })));
      } else {
        return state;
      }

    case GETNEWSTOTALLIST:
      return objectSpread_default()({}, state, {
        newsTotalListData: action.data
      });

    case GETNEWSTOTALLISTMORE:
      var moreList = action.data.inforList;

      if (moreList.length !== 0) {
        oldNewsTotalListData[action.channelId] = {
          currentPage: action.data.currentPage,
          currentTime: action.data.currentTime,
          inforList: oldNewsTotalListData[action.channelId].inforList.concat(action.data.inforList),
          pageCount: action.data.pageCount,
          pageSize: action.data.pageSize,
          recordCount: action.data.recordCount
        };
        return JSON.parse(JSON.stringify(objectSpread_default()({}, state, {
          newsTotalListData: oldNewsTotalListData
        })));
      } else {
        return state;
      }

    case GETHOMESHOWAUTHORLIST:
      var mpAuthorLen = 10;
      var mpAuthorData = [];

      if (action.data.inforList && action.data.inforList.length !== 0) {
        var _listData = action.data.inforList.concat();

        for (var _i2 = 0; _i2 < _listData.length; _i2 += mpAuthorLen) {
          mpAuthorData.push(_listData.slice(_i2, _i2 + mpAuthorLen));
        }
      }

      return objectSpread_default()({}, state, {
        authorListData: action.data.inforList,
        mpAuthorData: mpAuthorData
      });

    case GETEXCHANGERATES:
      return objectSpread_default()({}, state, {
        usdToCnyRate: action.data[0].rate
      });

    case GETMARKERQUOTATIONS:
      var coinLen = 12;
      var slideCoinData = [];

      if (action.data && action.data.length !== 0) {
        var listCoinData = action.data.concat();
        var coinCoinGroup = Math.ceil(listCoinData.length / coinLen);

        if (coinCoinGroup * coinLen > listCoinData.length) {
          var _addLen = coinCoinGroup * coinLen - listCoinData.length;

          var _addNewArr = listCoinData.slice(0, _addLen);

          for (var _i3 = 0; _i3 < _addNewArr.length; _i3++) {
            listCoinData.push(_addNewArr[_i3]);
          }
        }

        for (var _i4 = 0; _i4 < listCoinData.length; _i4 += coinLen) {
          slideCoinData.push(listCoinData.slice(_i4, _i4 + coinLen));
        }
      }

      return objectSpread_default()({}, state, {
        slideTopCoinData: slideCoinData
      });

    case GETHOMEROOMLIST:
      return objectSpread_default()({}, state, {
        controllerLiveData: action.data
      });

    case FESTIVALCLOSE:
      return objectSpread_default()({}, state, {
        festivalCloseState: action.data
      });

    case GETELEMNETBANNER:
      return objectSpread_default()({}, state, {
        elementBannerList: action.data
      });

    case GETCOLLECTIONDEATIL:
      return objectSpread_default()({}, state, {
        collectionlist: action.data
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "autoprefixer"
var external_autoprefixer_ = __webpack_require__(10);

// CONCATENATED MODULE: ./assets/redux/constants/live.js
// 获取直播列表
var GETLIVELIST = 'get-live-list'; // 发送直播内容

var SENDTOCONT = 'sendto-cont'; // 发送的数据推送到列表

var PUSHSENDTOCONT = 'push-sendto-cont'; // 直播数据排序

var LISTRANK = 'list-rank'; // 判断是否关注

var ISATTENTION = 'is-attention'; // 头部行情

var MARKETLIST = 'market-list'; // 获取直播间详情

var GETROOMBYID = 'get-room-id'; // 获取直播间人气

var GETROOMPOPULARITY = 'get-room-popularty'; // 获取直播间列表

var GETROOMLIVELIST = 'get-room-live-list'; // 获取自己正在使用的直播间列表

var GETROOMLIVENOWMAINLIST = 'get-room-live-now-main-list'; // 获取直播间推荐列表

var GETROOMLIVERECOMMENDLIST = 'get-room-live-recommend-list'; // 获取直播间类型列表

var GETROOMLIVETYPELIST = 'get-room-live-type-list'; // 获取直播间分类列表合集

var GETROOMLIVETYPELISTOBJDATA = 'get-room-live-type-list-obj-data'; // 获取直播间历史聊天记录

var GETROOMCHATHISTORY = 'get-room-chat-history'; // 获取直播间人气主播列表

var GETROOMLIVEUSERPOPULAR = 'get-room-live-use-popular';
/* ---------------------tweblive------------------ */

var SETROLE = 'set-role';
var SETCHATINFO = 'set-chat-info';
var PUSHCURRENTMESSAGELIST = 'push-current-message-list';
var PUSHCURRENTTIPSLIST = 'push-current-tips-list';
var LIVERESET = 'live-reset';
var ISSDKREADY = 'is-sdk-Ready';
// CONCATENATED MODULE: ./assets/redux/reducers/live.js




var initList = {
  liveData: [],
  popularityList: [],
  // 人气列表
  // 直播全部列表
  roomLiveList: {
    pageSize: 1,
    recordCount: 1,
    currentPage: 1,
    pageCount: 1,
    inforList: []
  },
  // 正在使用的直播间列表
  roomLiveNowMainList: {
    pageSize: 1,
    recordCount: 1,
    currentPage: 1,
    pageCount: 1,
    inforList: []
  },
  roomHistoryList: [],
  // 直播聊天室历史记录
  roomLiveTypeList: [],
  // 直播类型列表
  // 直播推荐列表
  roomLiveRecommendList: {
    pageSize: 1,
    recordCount: 1,
    currentPage: 1,
    pageCount: 1,
    inforList: []
  },
  roomLiveTypeListObjData: {},
  // 直播分类列表
  roomLiveUsePopularList: [],
  // 人气主播
  // 直播间信息
  room: {
    beginTime: null,
    brief: null,
    coverPicUrl: null,
    createTime: null,
    guestList: [],
    name: null,
    personNum: null,
    popularity: null,
    presenterList: [],
    pullStreamUrl: null,
    pushStreamUrl: null,
    realBeginTime: null,
    realEndTime: null,
    recordVideoUrl: null,
    roomId: null,
    roomType: null,
    sharePicUrl: null,
    shareUrl: null,
    status: null
  },
  err: {},

  /* ----------- tweblive ---------- */
  currentMessageList: [],
  // 当前消息列表
  currentLiveTips: [],
  // 当前直播提示
  chatInfo: {
    // 当前聊天信息
    groupId: '',
    userId: '',
    userSig: '',
    sdkAppID: 'SDKAPPID',
    streamId: '',
    role: '',
    resolution: ''
  },
  isSDKReady: false
};
/* harmony default export */ var live = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initList;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var chatInfo = JSON.parse(JSON.stringify(state.chatInfo));
  var oldRoomLiveTypeListObjData = state.roomLiveTypeListObjData;

  switch (action.type) {
    case GETLIVELIST:
      var dataOjb = action.data;
      var room = dataOjb.room;
      var list = dataOjb.contentList;
      var moreStart = list.length < 20 ? 0 : 1;
      var liveObj = state.liveData.concat(list);
      return objectSpread_default()({}, state, {
        room: room,
        liveData: liveObj,
        moreStart: moreStart
      });

    case GETROOMPOPULARITY:
      var popArr = action.data;
      return objectSpread_default()({}, state, {
        popularityList: popArr
      });

    case LISTRANK:
      var rankArr = action.data.contentList;
      return objectSpread_default()({}, state, {
        liveData: rankArr
      });

    case PUSHSENDTOCONT:
      var pushObj = JSON.parse(action.data.obj);
      var type = pushObj.type;

      if (type === 4) {
        return objectSpread_default()({}, state, {
          type: 4
        });
      } else if (type === 5) {
        return objectSpread_default()({}, state, {
          type: 5
        });
      }

      var pushList = !pushObj.data.contentList ? '' : pushObj.data.contentList;
      var objId = pushObj.data.content;
      var listId = '';

      if (type === 7) {
        return objectSpread_default()({}, state, {
          liveData: pushList
        });
      } else if (type === 1) {
        // 增加
        var newsLiveData = state.liveData;
        newsLiveData.unshift(pushObj.data);
        return objectSpread_default()({}, state, {
          liveData: newsLiveData
        });
      } else if (type === 2) {
        // 删除
        listId = !pushList ? objId.contentId : '';
        var deleteArr = [];
        state.liveData.map(function (item) {
          if (item.content.contentId !== listId) {
            deleteArr.push(item);
          }
        });
        return objectSpread_default()({}, state, {
          liveData: deleteArr
        });
      } else if (type === 3) {
        // 修改
        listId = !pushList ? objId.contentId : '';
        state.liveData.map(function (item, index) {
          if (item.content.contentId === listId) {
            state.liveData[index] = pushObj.data;
          }
        });
        return objectSpread_default()({}, state, {
          liveData: state.liveData
        });
      } else {
        return state;
      }

    case GETROOMBYID:
      return objectSpread_default()({}, state, {
        room: action.data
      });

    case GETROOMLIVELIST:
      var roomLiveListData = action.data;

      if (action.data.currentPage > 1) {
        roomLiveListData.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          roomLiveList: roomLiveListData
        });
      } else {
        return objectSpread_default()({}, state, {
          roomLiveList: roomLiveListData
        });
      }

    case GETROOMLIVENOWMAINLIST:
      return objectSpread_default()({}, state, {
        roomLiveNowMainList: action.data
      });

    case GETROOMLIVERECOMMENDLIST:
      var recommendListData = action.data;

      if (action.data.currentPage > 1) {
        recommendListData.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          roomLiveRecommendList: recommendListData
        });
      } else {
        return objectSpread_default()({}, state, {
          roomLiveRecommendList: recommendListData
        });
      }

    case GETROOMLIVETYPELIST:
      return objectSpread_default()({}, state, {
        roomLiveTypeList: action.data
      });

    case GETROOMLIVETYPELISTOBJDATA:
      if (action.data.currentPage > 1) {
        oldRoomLiveTypeListObjData[action.liveType] = {
          currentPage: action.data.currentPage,
          inforList: oldRoomLiveTypeListObjData[action.liveType].inforList.concat(action.data.inforList),
          pageCount: action.data.pageCount,
          pageSize: action.data.pageSize,
          recordCount: action.data.recordCount
        };
        return JSON.parse(JSON.stringify(objectSpread_default()({}, state, {
          roomLiveTypeListObjData: oldRoomLiveTypeListObjData
        })));
      } else {
        oldRoomLiveTypeListObjData[action.liveType] = action.data;
        return JSON.parse(JSON.stringify(objectSpread_default()({}, state, {
          roomLiveTypeListObjData: oldRoomLiveTypeListObjData
        })));
      }

    case GETROOMCHATHISTORY:
      return objectSpread_default()({}, state, {
        roomHistoryList: action.data
      });

    case GETROOMLIVEUSERPOPULAR:
      return objectSpread_default()({}, state, {
        roomLiveUsePopularList: action.data
        /* ----------- tweblive ---------- */

      });

    case SETROLE:
      chatInfo.role = external_autoprefixer_["data"];
      return objectSpread_default()({}, state, {
        chatInfo: chatInfo
      });

    case SETCHATINFO:
      chatInfo.groupId = external_autoprefixer_["data"].roomID;
      chatInfo.userId = external_autoprefixer_["data"].userID;
      chatInfo.userSig = external_autoprefixer_["data"].userSig;
      chatInfo.streamId = external_autoprefixer_["data"].streamID;
      chatInfo.role = external_autoprefixer_["data"].role;
      chatInfo.resolution = external_autoprefixer_["data"].resolution;
      return objectSpread_default()({}, state, {
        chatInfo: chatInfo
      });

    case PUSHCURRENTMESSAGELIST:
      if (Array.isArray(action.data)) {
        return objectSpread_default()({}, state, {
          currentMessageList: [].concat(toConsumableArray_default()(state.currentMessageList), toConsumableArray_default()(action.data))
        });
      } else {
        return objectSpread_default()({}, state, {
          currentMessageList: [].concat(toConsumableArray_default()(state.currentMessageList), [action.data])
        });
      }

    case PUSHCURRENTTIPSLIST:
      if (Array.isArray(external_autoprefixer_["data"])) {
        return objectSpread_default()({}, state, {
          currentLiveTips: [].concat(toConsumableArray_default()(state.currentLiveTips), toConsumableArray_default()(action.data))
        });
      } else {
        return objectSpread_default()({}, state, {
          currentLiveTips: [].concat(toConsumableArray_default()(state.currentLiveTips), [action.data])
        });
      }

    // let timer = null
    // timer = setTimeout(() => {
    //     state.currentLiveTips.shift()
    // }, 2000)
    // if (state.currentLiveTips.length === 0) {
    //     clearTimeout(timer)
    // }
    // return state

    case LIVERESET:
      return objectSpread_default()({}, state, {
        currentMessageList: [],
        currentLiveTips: []
      });

    case ISSDKREADY:
      return objectSpread_default()({}, state, {
        isSDKReady: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/reducers/attention.js


var attention_initState = {
  list: [],
  marketList: []
};
/* harmony default export */ var attention = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : attention_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ISATTENTION:
      return objectSpread_default()({}, state, {
        list: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/constants/learning.js
// 热门标签
var HOTTAGSLIST = 'hont-tags-list'; // 热门专题

var HOTCOLUMNLIST = 'Hot-column-list';
// CONCATENATED MODULE: ./assets/redux/reducers/learning.js


var learning_initList = {
  tagsArr: [],
  hotColumn: []
};
/* harmony default export */ var learning = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : learning_initList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case HOTTAGSLIST:
      return objectSpread_default()({}, state, {
        tagsArr: action.data.inforList
      });

    case HOTCOLUMNLIST:
      return objectSpread_default()({}, state, {
        hotColumn: action.data.inforList
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/constants/mpRank.js
// 获取火星排行榜
var GETMPRANKLIST = 'get-mprank-list';
// CONCATENATED MODULE: ./assets/redux/reducers/mpRank.js


var mpRank_initList = {
  rankListObj: {}
};
/* harmony default export */ var mpRank = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mpRank_initList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETMPRANKLIST:
      return objectSpread_default()({}, state, {
        rankListObj: !action.data ? {
          inforList: []
        } : action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/constants/userCenter.js
// 获取用户/作者 个人信息
var GETUSERCENTERAUTHORINFO = 'get-user-center-author-info'; // 获取用户/作者 个人成就

var GETUSERCENTERAUTHORACHIEVEMENT = 'get-user-center-author-achievement'; // 获取用户/作者 文章列表

var GETUSERCENTERAUTHORSHOWCOLUMNLIST = 'get-user-center-author-showcolumn-list'; // 获取用户/作者 视频列表

var GETUSERCENTERAUTHORVIDEOLIST = 'get-user-center-author-video-list'; // 获取用户/作者 收藏列表

var GETUSERCENTERAUTHORCOLLECTLIST = 'get-user-center-author-collect-list'; // 获取用户/作者 关注列表

var GETUSERCENTERAUTHORFOLLOWLIST = 'get-user-center-author-follow-list';
// CONCATENATED MODULE: ./assets/redux/reducers/userCenter.js



var userCenter_initList = {
  // 用户详细信息
  authorInfo: {
    bbsUid: 0,
    bonusPoint: 0,
    iconUrl: '',
    identityAuth: 0,
    introduce: '',
    nickName: '',
    passportId: '',
    realAuth: 0,
    faceAuth: 0,
    registerPlatform: 0,
    role: 0,
    type: 0,
    vGrade: 0,
    weCenterUid: 0,
    weixinName: ''
  },
  // 个人成就
  authorAchievement: {
    authorFollowCounts: 0,
    // 粉丝数
    authorLikeCounts: 0,
    // 关注数
    commentBeLikeCounts: 0,
    // 评论获赞数
    newsBeLikeCounts: 0,
    // 文章获赞数
    newsCommentCounts: 0,
    // 新闻评论数
    newsCounts: 0,
    // 发布文章数
    newsHotCounts: 0,
    // 新闻热度
    videoBeLikeCounts: 0,
    // 视频获赞数
    videoCommentCounts: 0,
    // 视频评论数
    videoCounts: 0,
    // 发布视频数
    videoHotCounts: 0,
    // 视频热度
    videoLiveCount: 0 // 直播数？

  },
  // 文章列表
  authorNewsList: {
    currentPage: 1,
    // 当前页数
    inforList: [],
    // 列表
    pageCount: 1,
    // 总页数
    pageSize: 0,
    // 当前页数数量
    recordCount: 0 // 总数量

  },
  // 视频列表
  authorVideoList: {
    currentPage: 1,
    // 当前页数
    inforList: [],
    // 列表
    pageCount: 1,
    // 总页数
    pageSize: 0,
    // 当前页数数量
    recordCount: 0 // 总数量

  },
  // 收藏列表
  authorCollectList: {
    currentPage: 1,
    // 当前页数
    inforList: [],
    // 列表
    pageCount: 0,
    // 总页数
    pageSize: 0,
    // 当前页数数量
    recordCount: 0 // 总数量

  },
  // 关注列表
  authorFollowList: {
    currentPage: 1,
    // 当前页数
    currentTime: 0,
    // 当前时间
    inforList: [],
    // 列表
    pageCount: 1,
    // 总页数
    pageSize: 0,
    // 当前页数数量
    recordCount: 0 // 总数量

  }
};
/* harmony default export */ var userCenter = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userCenter_initList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETUSERCENTERAUTHORINFO:
      if (isArray(action.data) && action.data.length > 0) {
        return objectSpread_default()({}, state, {
          authorInfo: action.data[0]
        });
      } else {
        return state;
      }

    case GETUSERCENTERAUTHORACHIEVEMENT:
      return objectSpread_default()({}, state, {
        authorAchievement: action.data
      });

    case GETUSERCENTERAUTHORSHOWCOLUMNLIST:
      if (action.data.currentPage > 1) {
        var newsObj = action.data;
        newsObj.inforList = state.authorNewsList.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          authorNewsList: newsObj
        });
      } else {
        return objectSpread_default()({}, state, {
          authorNewsList: action.data
        });
      }

    case GETUSERCENTERAUTHORVIDEOLIST:
      if (action.data.currentPage > 1) {
        var videoObj = action.data;
        videoObj.inforList = state.authorVideoList.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          authorVideoList: videoObj
        });
      } else {
        return objectSpread_default()({}, state, {
          authorVideoList: action.data
        });
      }

    case GETUSERCENTERAUTHORCOLLECTLIST:
      if (action.data.currentPage > 1) {
        var collectObj = action.data;
        collectObj.inforList = state.authorCollectList.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          authorCollectList: collectObj
        });
      } else {
        return objectSpread_default()({}, state, {
          authorCollectList: action.data
        });
      }

    case GETUSERCENTERAUTHORFOLLOWLIST:
      if (action.data.currentPage > 1) {
        var followObj = action.data;
        followObj.inforList = state.authorFollowList.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          authorFollowList: followObj
        });
      } else {
        return objectSpread_default()({}, state, {
          authorFollowList: action.data
        });
      }

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/constants/video.js
// 获取视频列表
var GETVIDEOLIST = 'get-video-list'; // 获取视频详情

var GETVIDEOCONTEXT = 'get-video-context'; // 获取 根据标签 推荐视频

var GETVIDEOLISTBYTAGS = 'get-video-list-by-tags'; // 获取推荐视频

var GETVIDEORECOMMENDLIST = 'get-video-recommend-list';
// CONCATENATED MODULE: ./assets/redux/reducers/video.js



var video_initList = {
  // 视频列表数据
  videoListData: {
    pageSize: 0,
    recordCount: 0,
    currentPage: 0,
    pageCount: 0,
    inforList: []
  },
  // 视频详情
  videoDetail: {
    current: {
      author: '',
      commentCounts: 0,
      content: '',
      coverPic: '',
      createTime: 0,
      createdBy: '',
      hotCounts: 0,
      iconUrl: '',
      id: '',
      nickName: '',
      passportId: '',
      publishTime: 0,
      readCounts: 0,
      role: 0,
      shareLogoPic: '',
      status: 0,
      title: '',
      topOrder: 0,
      updateTime: 0,
      url: '',
      vGrade: 0
    },
    next: {},
    pre: {}
  },
  // 根据标签的推荐视频列表
  videoByTagsListData: {
    pageSize: 0,
    recordCount: 0,
    currentPage: 0,
    pageCount: 0,
    inforList: []
  },
  // 推荐视频列表
  videoRecommendListData: {
    pageSize: 0,
    recordCount: 0,
    currentPage: 0,
    pageCount: 0,
    inforList: []
  }
};
/* harmony default export */ var video = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : video_initList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETVIDEOLIST:
      if (action.data.currentPage > 1) {
        var videolist = action.data;

        if (videolist.inforList.length > 0) {
          for (var i = 0; i < videolist.inforList.length; i++) {
            videolist.inforList[i].videoTime = formatPublishTime(videolist.inforList[i].publishTime);
          }
        }

        videolist.inforList = state.videoListData.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          videoListData: videolist
        });
      } else {
        var _videolist = action.data;

        if (_videolist.inforList.length > 0) {
          for (var _i = 0; _i < _videolist.inforList.length; _i++) {
            _videolist.inforList[_i].videoTime = formatPublishTime(_videolist.inforList[_i].publishTime);
          }
        }

        return objectSpread_default()({}, state, {
          videoListData: _videolist
        });
      }

    case GETVIDEOCONTEXT:
      return objectSpread_default()({}, state, {
        videoDetail: action.data
      });

    case GETVIDEOLISTBYTAGS:
      return objectSpread_default()({}, state, {
        videoByTagsListData: action.data
      });

    case GETVIDEORECOMMENDLIST:
      return objectSpread_default()({}, state, {
        videoRecommendListData: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/constants/activity.js
// 获取活动列表
var GETACTIVITYLIST = 'get-activity-list'; // 获取活动推荐列表

var GETACTIVITYRECOMMENDLIST = 'get-activity-recommend-list'; // 获取活动举办地址列表

var GETACTIVITYPLACELIST = 'get-activity-place-list'; // 获取活动举办地址列表

var GETACTIVITYINFODATA = 'get-activity-info-data';
// CONCATENATED MODULE: ./assets/redux/reducers/activity.js


var activity_initState = {
  // 全部活动列表
  activityAllListData: {
    pageSize: 1,
    recordCount: 1,
    currentPage: 1,
    pageCount: 1,
    currentTime: 0,
    inforList: []
  },
  // 推荐活动列表
  activityRecommendListData: {
    pageSize: 1,
    recordCount: 1,
    currentPage: 1,
    pageCount: 1,
    inforList: []
  },
  // 举办地址列表
  activityPlaceList: [],
  // 活动详情
  activityInfoData: {
    id: 0,
    title: '',
    url: '',
    content: '',
    fee: '',
    numPeople: 0,
    detailPlace: '',
    place: '',
    placeType: 1,
    sponsor: '',
    coverPic: '',
    synopsis: '',
    status: 0,
    recommend: 0,
    startTime: 0,
    endTime: 0,
    createTime: 0,
    ingOrEnd: 0
  }
};
/* harmony default export */ var activity = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activity_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETACTIVITYLIST:
      return objectSpread_default()({}, state, {
        activityAllListData: action.data
      });

    case GETACTIVITYRECOMMENDLIST:
      return objectSpread_default()({}, state, {
        activityRecommendListData: action.data
      });

    case GETACTIVITYPLACELIST:
      var placeItemAll = {
        'place': 'all',
        'rank': 'all',
        'placeCount': ''
      };
      var placeList = action.data.concat();
      placeList.unshift(placeItemAll);
      return objectSpread_default()({}, state, {
        activityPlaceList: placeList
      });

    case GETACTIVITYINFODATA:
      return objectSpread_default()({}, state, {
        activityInfoData: action.data
      });

    default:
      return state;
  }
});
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
// CONCATENATED MODULE: ./assets/redux/reducers/news.js


var news_initState = {
  featureDetails: {
    topic: {
      id: '',
      topicName: '',
      description: '',
      pcBackImage: '',
      mImgSrc: '',
      mBackImage: '',
      createTime: 0,
      tags: '',
      titleDisplayFlag: 0
    },
    topicContentList: {
      pageSize: 0,
      recordCount: 0,
      currentPage: 0,
      pageCount: 0,
      inforList: []
    }
  },
  relatedNewslist: {
    inforList: []
  },
  recommendNewsList: {
    inforList: []
  },
  adImplant: [],
  newsDetails: {
    current: {
      title: '',
      createdBy: '',
      author: '',
      publishTime: '',
      hotCounts: '',
      synopsis: '',
      content: '',
      tagsV2: ''
    },
    next: {
      coverPic: '',
      title: '',
      id: ''
    }
  },
  hotNewsVideo: []
};
/* harmony default export */ var reducers_news = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : news_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETNEWSDETAILS:
      /** @desc 2020.8.13
       * PC内置微信浏览器使用chrome53，window.__INITIAL_STATE__ 会报错
       * 测试结果为：current.content引起
       * 此处对其进行特殊字符编码
       * 在组件/containers/Details/NewsContent使用时进行解码 decodeURIComponent
       */
      var current = action.data.current;
      var newContent = encodeURIComponent(current.content);
      delete current.content;
      current.content = newContent;
      return objectSpread_default()({}, state, {
        newsDetails: {
          current: current,
          next: current.next
        }
      });

    case GETRECOMMENDNEWS:
      return objectSpread_default()({}, state, {
        recommendNewsList: action.data
      });

    case GETRELATEDNEWS:
      return objectSpread_default()({}, state, {
        relatedNewslist: action.data
      });

    case GETFEATUREDETAILS:
      return objectSpread_default()({}, state, {
        featureDetails: action.data
      });

    case GETMOREFEATURE:
      var inforList = action.data.topicContentList.inforList;

      if (inforList.length !== 0) {
        var obj = action.data;
        obj.topicContentList.inforList = state.featureDetails.topicContentList.inforList.concat(action.data.topicContentList.inforList);
        return objectSpread_default()({}, state, {
          featureDetails: obj
        });
      } else {
        return state;
      }

    case GETADIMPLANT:
      return objectSpread_default()({}, state, {
        adImplant: action.data
      });

    case GETHOTNEWSVIDEO:
      return objectSpread_default()({}, state, {
        hotNewsVideo: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/constants/search.js
// 获取多重搜索后的列表
var GETMULTISEARCHLIST = 'get-multi-search-list'; // 获取新闻搜索

var GETNEWSSEARCHLIST = 'get-news-search-list'; // 获取快讯搜索

var GETLIVESEARCHLIST = 'get-live-search-list';
// CONCATENATED MODULE: ./assets/public/js/searchData.js
/* harmony default export */ var searchData = (function () {
  return {
    // 0:全部;1:新闻(标题、摘要和内容搜索); 2:快讯(标题和内容); 3:专栏作者; 4:专题(名称); 5:视频(名称) String
    // 搜索标签导航
    searchTabTypeEnum: {
      ALL: 0,
      // 综合
      EXCELLENTNEWS: 99,
      // 精选
      NEWS: 1,
      // 新闻
      FLASH: 2,
      // 快讯
      AUTHOR: 3 // 作者

    },
    // 搜索类别导航
    searchTabType: [{
      type: 0,
      label: '综合'
    }, {
      type: 99,
      label: '精选'
    }, {
      type: 1,
      label: '新闻'
    }, {
      type: 2,
      label: '快讯'
    }, {
      type: 3,
      label: '作者'
    }],
    // 关键字颜色
    searchKeyColor: '#0A7FF2',
    // 搜索排序   按时间排序标识 asc：升序，desc：降序  无默认
    searchSortTypeEnum: {
      DEFAULT: 'default',
      // 默认
      DESC: 'desc',
      // 降序
      ASC: 'asc' // 升序

    },
    searchMTabType: [{
      type: 1,
      label: '新闻'
    }, {
      type: 2,
      label: '快讯'
    }, {
      type: 3,
      label: '行情'
    }]
  };
});
// CONCATENATED MODULE: ./assets/redux/reducers/search.js




var _searchData = searchData(),
    searchTabTypeEnum = _searchData.searchTabTypeEnum;

var search_initList = {
  tagsArr: [],
  hotColumn: [],
  // 作者列表数据
  authorListData: {
    currentIndex: 1,
    // 当前页数
    inforList: [],
    // 数据列表
    pageSize: 1,
    // 一页显示数量
    recordCount: 0,
    // 总共数量
    totalIndex: 1 // 总共页数

  },
  // 精选列表数据
  excellentNewsListData: {
    currentIndex: 1,
    // 当前页数
    inforList: [],
    // 数据列表
    pageSize: 1,
    // 一页显示数量
    recordCount: 0,
    // 总共数量
    totalIndex: 1 // 总共页数

  },
  // 快讯列表数据
  livesListData: {
    currentIndex: 1,
    // 当前页数
    inforList: [],
    // 数据列表
    pageSize: 1,
    // 一页显示数量
    recordCount: 0,
    // 总共数量
    totalIndex: 1 // 总共页数

  },
  // 新闻列表数据
  newsListData: {
    currentIndex: 1,
    // 当前页数
    inforList: [],
    // 数据列表
    pageSize: 1,
    // 一页显示数量
    recordCount: 0,
    // 总共数量
    totalIndex: 1 // 总共页数

  }
};
/* harmony default export */ var search = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : search_initList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETMULTISEARCHLIST:
      switch (action.pageType) {
        case searchTabTypeEnum.ALL:
          return objectSpread_default()({}, state, {
            authorListData: !action.data.Author ? state.authorListData : action.data.Author,
            excellentNewsListData: !action.data.ExcellentNews ? state.excellentNewsListData : action.data.ExcellentNews,
            livesListData: !action.data.Lives ? state.livesListData : action.data.Lives,
            newsListData: !action.data.News ? state.newsListData : action.data.News
          });

        case searchTabTypeEnum.EXCELLENTNEWS:
          if (action.pageNum > 1) {
            var moreList = action.data.inforList;

            if (moreList.length !== 0) {
              var newListData = {
                currentIndex: action.data.currentIndex,
                inforList: state.excellentNewsListData.inforList.concat(moreList),
                pageSize: action.data.pageSize,
                recordCount: action.data.recordCount,
                totalIndex: action.data.totalIndex
              };
              return objectSpread_default()({}, state, {
                excellentNewsListData: newListData
              });
            } else {
              return state;
            }
          } else {
            return objectSpread_default()({}, state, {
              excellentNewsListData: action.data
            });
          }

        case searchTabTypeEnum.NEWS:
          if (action.pageNum > 1) {
            var _moreList = action.data.inforList;

            if (_moreList.length !== 0) {
              var _newListData = {
                currentIndex: action.data.currentIndex,
                inforList: state.newsListData.inforList.concat(_moreList),
                pageSize: action.data.pageSize,
                recordCount: action.data.recordCount,
                totalIndex: action.data.totalIndex
              };
              return objectSpread_default()({}, state, {
                newsListData: _newListData
              });
            } else {
              return state;
            }
          } else {
            return objectSpread_default()({}, state, {
              newsListData: action.data
            });
          }

        case searchTabTypeEnum.FLASH:
          if (action.pageNum > 1) {
            var _moreList2 = action.data.inforList;

            if (_moreList2.length !== 0) {
              var _newListData2 = {
                currentIndex: action.data.currentIndex,
                inforList: state.livesListData.inforList.concat(_moreList2),
                pageSize: action.data.pageSize,
                recordCount: action.data.recordCount,
                totalIndex: action.data.totalIndex
              };
              return objectSpread_default()({}, state, {
                livesListData: _newListData2
              });
            } else {
              return state;
            }
          } else {
            return objectSpread_default()({}, state, {
              livesListData: action.data
            });
          }

        case searchTabTypeEnum.AUTHOR:
          if (action.pageNum > 1) {
            var _moreList3 = action.data.inforList;

            if (_moreList3.length !== 0) {
              var _newListData3 = {
                currentIndex: action.data.currentIndex,
                inforList: state.authorListData.inforList.concat(_moreList3),
                pageSize: action.data.pageSize,
                recordCount: action.data.recordCount,
                totalIndex: action.data.totalIndex
              };
              return objectSpread_default()({}, state, {
                authorListData: _newListData3
              });
            } else {
              return state;
            }
          } else {
            return objectSpread_default()({}, state, {
              authorListData: action.data
            });
          }

        default:
          return state;
      }

    case GETNEWSSEARCHLIST:
      return objectSpread_default()({}, state, {
        tagsArr: action.data.inforList
      });

    case GETLIVESEARCHLIST:
      return objectSpread_default()({}, state, {
        tagsArr: action.data.inforList
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/login.js
// 获取用户信息
var GETUSERINFO = 'get-user-info'; // 登录框显示状态

var LOGINSTATE = 'login-state'; // 昵称框显示状态

var RENAMESTATE = 'rename-state';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/login.js


var login_initState = {
  userInfo: {
    isLogin: false,
    info: {
      nickName: null,
      passportId: null,
      iconUrl: null,
      realAuth: null,
      faceAuth: null,
      intro: null,
      token: null,
      phone: null
    }
  },
  userState: {
    loginType: 'account',
    // account账号登录,sms短信登录,register注册,retrievePassword找回密码,wechat微信登录,bind绑定账号
    loginShow: false,
    renameShow: false // 昵称弹窗

  }
};
/* harmony default export */ var login = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : login_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETUSERINFO:
      return objectSpread_default()({}, state, {
        userInfo: action.data
      });

    case LOGINSTATE:
      return objectSpread_default()({}, state, {
        userState: action.data
      });

    case RENAMESTATE:
      return objectSpread_default()({}, state, {
        userState: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/comment.js
// 获取新闻评论
var GETNEWSCOMMENT = 'get-news-commnet'; // 获取新闻更多评论

var GETNEWSMORECOMMENT = 'get-news-more-commnet'; // 回复评论

var REPLYCOMENT = 'reply-comment'; // 删除评论

var DELCOMMENT = 'del-comment'; // 删除回复

var DELREPLY = 'del-reply';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/comment.js


/** @desc 新闻视频评论 */

var initCommentList = {
  pageSize: 0,
  recordCount: 0,
  currentPage: 0,
  pageCount: 0,
  currentTime: new Date(),
  inforList: []
};
/* harmony default export */ var comment = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initCommentList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETNEWSCOMMENT:
      return action.data;

    case GETNEWSMORECOMMENT:
      var commentList = action.data.inforList;

      if (commentList.length !== 0) {
        var newCommentList = state.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, action.data, {
          inforList: newCommentList
        });
      } else {
        return state;
      }

    case REPLYCOMENT:
      var pid = action.data.pid;
      var replayCommentList = state.inforList;
      replayCommentList.map(function (item, index) {
        if (pid === item.comment.id) {
          var replies = item.replies;
          replies.push(action.data);
          replayCommentList[index] = objectSpread_default()({}, replayCommentList[index], {
            replies: replies
          });
        }
      });
      return objectSpread_default()({}, state, {
        inforList: replayCommentList
      });

    case DELCOMMENT:
      var delCommentId = action.data;
      var delCommentList = state.inforList;
      delCommentList.map(function (item, index) {
        if (delCommentId === item.comment.id) {
          delCommentList.splice(index, 1);
        }
      });
      return objectSpread_default()({}, state, {
        inforList: delCommentList
      });

    case DELREPLY:
      var replyId = action.data.replyId;
      var commentId = action.data.commentId;
      var delReplyCommentList = state.inforList;
      delReplyCommentList.map(function (item, index) {
        if (commentId === item.comment.id) {
          var replies = item.replies;
          replies.map(function (item, index) {
            if (replyId === item.id) {
              replies.splice(index, 1);
            }
          });
          delReplyCommentList[index] = objectSpread_default()({}, delReplyCommentList[index], {
            replies: replies
          });
        }
      });
      return objectSpread_default()({}, state, {
        inforList: delReplyCommentList
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/flash.js
// 获取快讯列表
var GETFLASHLIST = 'get-flash-list'; // 获取更多快讯

var GETMOREFLASH = 'get-more-flash'; // 快讯利好利空

var FLASHUPDOWN = 'flash-up-down';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/flash.js



/** @desc 快讯列表 */

var initFlashList = {
  pageSize: 0,
  recordCount: 0,
  currentPage: 1,
  pageNum: 0,
  currentTime: new Date(),
  inforList: []
};

var flash_flashList = function flashList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initFlashList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETFLASHLIST:
      return action.data;

    case GETMOREFLASH:
      var flshList = action.data.inforList;

      if (flshList.length !== 0) {
        var newFlashList = state.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          inforList: newFlashList
        });
      } else {
        return state;
      }

    case FLASHUPDOWN:
      var upList = state.inforList;
      upList.map(function (item, index) {
        if (item.id === action.params.id) {
          upList[index] = objectSpread_default()({}, upList[index], {
            upCounts: action.data.upCounts,
            downCounts: action.data.downCounts,
            status: action.params.status,
            type: action.params.status
          });
        }
      });
      return objectSpread_default()({}, state, {
        inforList: upList
      });

    default:
      return state;
  }
};

/* harmony default export */ var flash = (Object(external_redux_["combineReducers"])({
  flashList: flash_flashList
}));
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/news.js
// 获取新闻导航channelId
var GETNEWSCHANNELID = 'get-news-channel-id'; // 获取热门新闻

var GETHOTNEWS = 'get-hot-news'; // 新闻新闻列表

var news_GETNEWSLIST = 'get-news-list'; // 获取跟多新闻

var GETMORENEWS = 'get-more-news'; // 获取作者信息

var GETAUTHORINFO = 'get-author-info'; // 获取作者列表

var GETAUTHORLIST = 'get-author-list'; // 获取专题列表

var GETFEATURELIST = 'get-feature-list'; // 获取 更多的专题列表

var GETMOREFEATURELIST = 'get-more-feature-list'; // 获取24H热门新闻

var GET24HNEWSLIST = 'get-24h-news-list';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/news.js



/** @desc 新闻列表 */

var initNewsList = {
  pageSize: 0,
  recordCount: 0,
  currentPage: 0,
  pageCount: 0,
  currentTime: 0,
  inforList: []
};

var news_newsList = function newsList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initNewsList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case news_GETNEWSLIST:
      return objectSpread_default()({}, state, action.data);

    case GETMORENEWS:
      var _newsList = action.data.inforList;

      if (_newsList.length !== 0) {
        var newNewsList = state.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, action.data, {
          inforList: newNewsList
        });
      } else {
        return state;
      }

    default:
      return state;
  }
};
/** @desc 新闻导航channelId */


var initStateChannelId = [];

var news_newsChannelId = function newsChannelId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStateChannelId;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETNEWSCHANNELID:
      var _newsChannelId = action.data;

      _newsChannelId.unshift({
        id: 100,
        channelId: 0,
        channelName: '头条',
        rank: 20,
        updateTime: '',
        createTime: ''
      });

      return _newsChannelId;

    default:
      return state;
  }
};
/** @desc 热门新闻 */


var initHotNewsList = {
  inforList: []
};

var news_hotNewsList = function hotNewsList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initHotNewsList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETHOTNEWS:
      return action.data;

    default:
      return state;
  }
};
/** @desc 24H热门新闻 */


var initHotNews24HList = {
  inforList: []
};

var news_hot24HNewsList = function hot24HNewsList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initHotNews24HList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET24HNEWSLIST:
      return action.data;

    default:
      return state;
  }
};
/** @desc 作者信息 */


var initStateAuthor = {
  authorInfo: {
    newsCount: 0,
    followCount: 0,
    totalReadCounts: 0,
    infolist: [],
    ifCollect: 0,
    passportId: '',
    nickName: '',
    iconUrl: '',
    introduce: '',
    vGrade: 0
  },
  authorList: {
    inforList: []
  }
};

var news_author = function author() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStateAuthor;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETAUTHORINFO:
      return objectSpread_default()({}, state, {
        authorInfo: action.data
      });

    case GETAUTHORLIST:
      return objectSpread_default()({}, state, {
        authorList: action.data
      });

    default:
      return state;
  }
};
/** @desc 专题列表 */


var initFeatureList = {
  pageSize: 0,
  recordCount: 0,
  currentPage: 0,
  pageCount: 0,
  inforList: []
};

var news_featureList = function featureList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initFeatureList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETFEATURELIST:
      return action.data;

    case GETMOREFEATURELIST:
      var obj = action.data;
      obj.inforList = state.inforList.concat(action.data.inforList);
      return obj;

    default:
      return state;
  }
};

/* harmony default export */ var redux_reducers_news = (Object(external_redux_["combineReducers"])({
  newsList: news_newsList,
  hotNewsList: news_hotNewsList,
  newsChannelId: news_newsChannelId,
  author: news_author,
  featureList: news_featureList,
  hot24HNewsList: news_hot24HNewsList
}));
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/market.js
// 获取涨跌幅数据
var GETRISEDROPDATA = 'get-rise-drop-data'; // 获取搜索行情数据

var GETSEARCHMARKETDATA = 'get-search-market-data';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/market.js


/** @desc 行情涨跌幅 */

var initRiseDrop = {
  pageSize: 0,
  recordCount: 0,
  currentPage: 1,
  pageNum: 0,
  inforList: []
};

var market_riseDrop = function riseDrop() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initRiseDrop;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETRISEDROPDATA:
      return action.data;

    case GETSEARCHMARKETDATA:
      return action.data;

    default:
      return state;
  }
};

/* harmony default export */ var market = (Object(external_redux_["combineReducers"])({
  riseDrop: market_riseDrop
}));
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/header.js
// 获取头部导航栏内容
var HEADERCHANNELS = 'header-channels';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/header.js



var navData = [{
  channelName: '头条',
  channelId: '0',
  url: mixUrl.m()
}, {
  channelName: '快讯',
  channelId: '100',
  url: mixUrl.m("/flash")
}, {
  channelName: '视频',
  channelId: '200',
  url: mixUrl.m("/video")
}, {
  channelName: '活动',
  channelId: '300',
  url: mixUrl.m("/huodong")
}, {
  channelName: '专题',
  channelId: '500',
  url: mixUrl.m('/feature')
}];
var header_initState = {
  channelsList: []
};
/* harmony default export */ var header = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : header_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case HEADERCHANNELS:
      return objectSpread_default()({}, state, {
        channelsList: navData.concat(action.data)
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/home.js
// 获取首页 7x24H 快讯
var GETSHOWLIVESLIST = 'get-show-lives-list'; // 获取首页项目动态(潜伏日历)

var GETCALENDARLIST = 'get-calendar-list'; // 获取首页推荐直播列表

var GETHOOMROOMLIVERECOMMENDLIST = 'get-hoom-room-live-recommend-list'; // 获取首页直播分类列表

var GETHOOMROOMLIVETYPELISTOBJDATA = 'get-hoom-room-live-type-list-objdata'; // 获取首页直播列表

var GETHOOMROOMLIVELIST = 'get-hoom-room-live-list'; // 是否显示实名验证弹窗

var HOMELIVEVERIFYPOPUPSHOW = 'home-live-verify-popup-show';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/home.js



var reducers_home_initState = {
  // 7x24H 快讯
  showlivesData: [],
  // 项目动态(潜伏日历)
  calendarData: [],
  // 弹窗状态
  popupState: {
    liveVerify: false // 创建直播实名验证弹窗

  },

  /* ----------- 临时添加，右侧推荐直播列表 ---------- */
  roomLiveRecommendList: {
    pageSize: 1,
    recordCount: 1,
    currentPage: 1,
    pageCount: 1,
    inforList: []
  },
  roomLiveTypeListObjData: {},
  roomLiveList: []
};
/* harmony default export */ var reducers_home = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducers_home_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETSHOWLIVESLIST:
      var liveList = action.data.inforList;
      liveList.map(function (item) {
        if (!item.content) return;
        var startIndex = item.content.indexOf('【') === -1 ? 0 : item.content.indexOf('【') + 1;
        var endIndex = item.content.indexOf('】') === -1 ? 0 : item.content.indexOf('】');
        item.title = item.content.substring(startIndex, endIndex);
        item.url = mixUrl.news("/flash/".concat(item.id, ".html"));
      });
      return objectSpread_default()({}, state, {
        showlivesData: liveList
      });

    case GETCALENDARLIST:
      return objectSpread_default()({}, state, {
        calendarData: action.data
      });

    case HOMELIVEVERIFYPOPUPSHOW:
      return objectSpread_default()({}, state, {
        popupState: action.data
        /* ----------- 临时添加，右侧推荐直播列表 ---------- */

      });

    case GETHOOMROOMLIVELIST:
      return objectSpread_default()({}, state, {
        roomLiveList: action.data
      });

    case GETHOOMROOMLIVERECOMMENDLIST:
      var recommendListData = action.data;

      if (action.data.currentPage > 1) {
        recommendListData.inforList.concat(action.data.inforList);
        return objectSpread_default()({}, state, {
          roomLiveRecommendList: recommendListData
        });
      } else {
        return objectSpread_default()({}, state, {
          roomLiveRecommendList: recommendListData
        });
      }

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/live.js
// 首页右侧直播间人气列表（用来请求列表的人气数据）
var GETRIGHTLIVEPOPULARITYLIST = 'get-right-live-popularity-list';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/live.js


var live_initState = {
  // 右侧人气列表
  roomLivePopularityList: []
};
/* harmony default export */ var reducers_live = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : live_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETRIGHTLIVEPOPULARITYLIST:
      return objectSpread_default()({}, state, {
        roomLivePopularityList: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./_multiappsharing/redux/constants/public.js
// action错误处理
var ACTIONERROR = 'action-error'; // 获取友情链接

var GETFRIENDLYLINKS = 'get-friendly-links'; // 获取合作伙伴

var GETPARTNERLINKS = 'get-partner-links'; // 获取广告

var GETAD = 'get-ad'; // 获取嵌入广告

var public_GETADIMPLANT = 'get-ad-implant'; // 统计事件上报

var GATHERPUSH = 'gather-push';
// CONCATENATED MODULE: ./_multiappsharing/redux/reducers/public.js














/** @desc 尾部合作伙伴，友情链接 */

var initStateFooter = {
  partner: [],
  friendly: []
};

var public_footer = function footer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStateFooter;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETPARTNERLINKS:
      return objectSpread_default()({}, state, {
        partner: action.data
      });

    case GETFRIENDLYLINKS:
      return objectSpread_default()({}, state, {
        friendly: action.data
      });

    default:
      return state;
  }
};
/** @desc 广告 */


var initStateAd = {};

var public_adData = function adData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStateAd;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETAD:
      return action.data;

    default:
      return state;
  }
};
/** @desc 嵌入广告 */


var adImplantData = {};

var public_adImplant = function adImplant() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : adImplantData;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case public_GETADIMPLANT:
      return action.data;

    default:
      return state;
  }
};
/** @desc 统计上报 */


var gatherData = [];

var public_gather = function gather() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gatherData;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GATHERPUSH:
      var preTraceId = external_js_cookie_default.a.get(cookiesName.traceId);
      var traceId = uuidDiy(32, 16);
      external_js_cookie_default.a.set(cookiesName.traceId, traceId);
      var deviceId = external_js_cookie_default.a.get(cookiesName.deviceId);

      if (!deviceId) {
        deviceId = uuidDiy();
        external_js_cookie_default.a.set(cookiesName.deviceId, deviceId);
      }

      var reportData = {
        trace_id: traceId,
        pre_trace_id: preTraceId,
        device_type: 'web',
        device_id: deviceId,
        event_type: action.data && action.data.eventType,
        timestamp: parseInt(new Date().getTime() / 1000),
        event_info: action.data && action.data.eventInfo
      };
      var userId = external_js_cookie_default.a.get(cookiesName.passportId);
      if (userId) reportData['user_id'] = userId;
      var userName = external_js_cookie_default.a.get(cookiesName.nickName);
      if (userName) reportData['user_name'] = userName;
      state.push(reportData);
      return toConsumableArray_default()(state);

    default:
      return state;
  }
};

/* harmony default export */ var reducers_public = (Object(external_redux_["combineReducers"])({
  login: login,
  footer: public_footer,
  adData: public_adData,
  market: market,
  flash: flash,
  comment: comment,
  news: redux_reducers_news,
  adImplant: public_adImplant,
  header: header,
  home: reducers_home,
  live: reducers_live,
  gather: public_gather
}));
// CONCATENATED MODULE: ./assets/redux/constants/finance.js
// 获取投资信息列表
var GETFINANCELIST = 'get-finance-list'; // 获取项目分类列表

var GETPRODUCTTYPE = 'get-product-type'; // 获取项目详情

var GETPRODUCTDETAIL = 'get-product-detail';
// CONCATENATED MODULE: ./assets/redux/reducers/finance.js


var finance_initState = {
  financeList: [],
  productTypelist: [],
  pruductDetail: {
    brief: '',
    category: '',
    discord: '',
    logoUrl: '',
    projectName: '',
    twitter: '',
    website: '',
    investRaisedList: [],
    reportUrl: ''
  }
};
/* harmony default export */ var finance = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : finance_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GETFINANCELIST:
      return objectSpread_default()({}, state, {
        financeList: action.data
      });

    case GETPRODUCTTYPE:
      return objectSpread_default()({}, state, {
        productTypelist: action.data
      });

    case GETPRODUCTDETAIL:
      return objectSpread_default()({}, state, {
        pruductDetail: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./assets/redux/reducers/rootReducer.js














/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])(Object.assign({
  home: home,
  live: live,
  attention: attention,
  mpRank: mpRank,
  learning: learning,
  userCenter: userCenter,
  video: video,
  activity: activity,
  search: search,
  login: login,
  news: reducers_news,
  multi: reducers_public,
  finance: finance
})));
// CONCATENATED MODULE: ./server/render/store.js





var store_errorHandle = function errorHandle(store) {
  return function (next) {
    return function (action) {
      if (action.type === ACTIONERROR) {
        return store.getState();
      } else {
        return next(action);
      }
    };
  };
};

/* harmony default export */ var render_store = (function () {
  return Object(external_redux_["createStore"])(rootReducer, {}, Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, store_errorHandle)));
});
// EXTERNAL MODULE: ./config/config-server.js
var config_server = __webpack_require__(13);
var config_server_default = /*#__PURE__*/__webpack_require__.n(config_server);

// CONCATENATED MODULE: ./server/render/render.js





 // import { renderToNodeStream } from 'react-dom/server'







 // import { getUserInfo } from 'multiRedux/actions/login'
// import { getFooterData } from 'multiRedux/actions/public'







/**
 * @Desc 匹配当前请求url是否跟客户端路由一致 不一致则执行next 进行静态资源处理等
 * @param {url, routesParam}
 */

var render_urlMatch = function urlMatch(url, routesParam) {
  var isExit = false;

  var hasKey = function hasKey(arr) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;
        var hasPath = null;

        if (val.path) {
          var params = {};
          params.path = val.path;
          if (val.exact) params.exact = val.exact;
          if (val.strict) params.strict = val.strict;
          hasPath = Object(external_react_router_dom_["matchPath"])(url, params);
        }

        var isObj = Object.prototype.toString.call(hasPath) === '[object Object]';

        if (isObj) {
          isExit = true;
          return true;
        }

        if (val.routes && !isObj) {
          hasKey(val.routes);
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
  };

  hasKey(routesParam);
  return isExit;
};
/**
 * @Desc 服务端渲染
 */


var devEnv = "production" === 'development';
var rootPath = external_path_default.a.join(__dirname).split('server')[0];
var stasFileFolder = devEnv ? '_dist' : 'build';
var nodeStats = external_path_default.a.join("".concat(rootPath, "server/").concat(stasFileFolder, "/loadable-stats.json"));
var webStats = external_path_default.a.join("".concat(rootPath, "static/").concat(stasFileFolder, "/loadable-stats.json"));
/* harmony default export */ var render = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    var extractorParams, nodeExtractor, _nodeExtractor$requir, App, routes, routesM, ErrorPage, webExtractor, lang, domain, env, quermlist, platform, mhostlist, routesParams, routesLast, isMatch, store, branch, promises, apiErr, initProps, _initProps, clientLink, errReport, jsx, html, errObjProps, errMsg, scripts, links, styles, scriptCreate, initState, isWx, isNagalink, isMarslibco, isMarslibcc, isMarsgram, isnewMarsshare, isMarsbitinfolink, layoutParams, htmlTemplate, lastHtmlStr;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**  生成服务端extractor */
            extractorParams = {
              statsFile: nodeStats,
              entrypoints: ['App']
            };
            if (!devEnv) extractorParams.outputPath = config_server_default.a.loadableStatsOutputPath;
            nodeExtractor = new external_loadable_server_["ChunkExtractor"](extractorParams);
            _nodeExtractor$requir = nodeExtractor.requireEntrypoint(), App = _nodeExtractor$requir["default"];
            routes = App.routes().routes;
            routesM = App.routes().routesM;
            ErrorPage = App.ErrorPage;
            /**  生成客户端extractor */

            webExtractor = new external_loadable_server_["ChunkExtractor"]({
              statsFile: webStats,
              entrypoints: ['index']
            });
            lang = req.language;
            domain = '';
            env = "production";

            if (env === 'production') {
              if (req.hostname.includes('marstelegram.com')) {
                domain = 'marstelegram.com';
              }

              if (req.hostname.includes('marsbit.cc')) {
                domain = 'marsbit.cc';
              }

              if (req.hostname.includes('marsbit.co')) {
                domain = 'marsbit.co';
              }
            }

            if (env === 'test') domain = 'marslib.com';

            if (req.cookies[cookiesName.language]) {
              lang = req.cookies[cookiesName.language];
            } else {
              external_js_cookie_default.a.set(cookiesName.language, lang, {
                domain: domain
              });
            }

            quermlist = req.url.split('=');

            if (quermlist && quermlist[1]) {
              console.log(quermlist[1]);
              req.language = quermlist[1];
              lang = quermlist[1];
              external_js_cookie_default.a.set(cookiesName.language, quermlist[1], {
                domain: domain
              });
            }

            req.i18n.changeLanguage(lang);
            platform = 'pc';

            if (devEnv) {
              if (!isPc(req)) platform = 'mob';
            } else {
              mhostlist = ['m.marstelegram.com', 'm.marsbit.cc', 'm.marsshare.cc', 'marsbit.info'];
              if (req.hostname === mixUrl.m().split('://')[1] || mhostlist.indexOf(req.hostname) > -1) platform = 'mob';
            } // const routesParam = platform === 'pc' ? routes : routesM

            /** 生成默认数据与路由匹配 */
            // 可通过此参数传递给routes做逻辑判断：Tips：browser/index.js存在同样逻辑


            routesParams = {
              isnaGacom: naGacom(req)
            };
            routesLast = platform === 'pc' ? routes(routesParams) : routesM(routesParams);
            isMatch = render_urlMatch(req.path, routesLast);

            if (isMatch) {
              _context.next = 27;
              break;
            }

            _context.next = 25;
            return next();

          case 25:
            _context.next = 59;
            break;

          case 27:
            /**  生成默认数据与路由匹配 */
            store = render_store();
            branch = Object(external_react_router_config_["matchRoutes"])(routesLast, req.path);
            promises = branch.map(function (_ref2) {
              var route = _ref2.route,
                  match = _ref2.match;
              var getInitialProps = route.component.getInitialProps;
              return getInitialProps instanceof Function ? getInitialProps({
                req: req,
                res: res,
                match: match,
                store: store,
                isServer: true
              }) : Promise.resolve(null);
            });
            /** @desc 用户信息设置
            * 由于CDN之后CDN页面缓存了initailState，路由有可能不走node，故登录完之后界面不能显示登录信息，甚至出现别人的登录信息
            * 由于可能出现的server与client不match问题，jsx中不要直接Cookies.get()
            * 统一登录信息cookie入口放在redux中好处是[1:以后若有需求更新cookie名称，只需要更新统一设置与获取处; 2:由于是redux更新不会存在上面的match问题]
            * 2019-12-4设置用户信息[文件有:server/render.js, browser/AppWrapper.js]
            * */

            /* promises.push(
                store.dispatch(getUserInfo({
                    nickName: req.cookies[cookiesName.nickName],
                    passportId: req.cookies[cookiesName.passportId],
                    iconUrl: req.cookies[cookiesName.iconUrl],
                    realAuth: req.cookies[cookiesName.realAuth],
                    intro: req.cookies[cookiesName.intro],
                    token: req.cookies[cookiesName.token],
                    phone: req.cookies[cookiesName.phone]
                }))
            ) */

            apiErr = null; // 默认数据请求

            initProps = {};
            _context.next = 34;
            return Promise.all(promises).then(function (res) {
              // console.log(res)
              res.map(function (item) {
                var isObj = Object.prototype.toString.call(item) === '[object Object]'; // 排除undefined，null等

                var notGetUserInfo = isObj && (!item.hasOwnProperty('type') || item.type !== 'get-user-info') && !item.hasOwnProperty('data'); // 排除获取用户登录信息actions返回

                if (notGetUserInfo) {
                  initProps = Object.assign(initProps, item);
                }
              });
            })["catch"](function (err) {
              apiErr = err;
            });

          case 34:
            // 如果当前页面只有pc或者只有移动端。通过域名或者请求已经判断为移动或pc，但当前pages中返回clientLink是否只有移动或pc。由此pc或移动返回同样内容
            // 线上通过是否包含m.huoxing24.com/m.marslib.com判断是否为移动端。本地通过process.env.NODE_ENV判断
            // clientLink若为跳转mixUrl，开发环境都不跳转,为服务端正常判断加载页面。
            // clientLink若为onlyMob/onlyPc变现跟线上一致

            /** @desc clienLink
             * 1: pages-m没有对应页面----pc打开移动端的地址m.huoxing24.com
             * 注：在routes/index.js中配置路由并加载pages-m对应的组件
             * onlymob显示跟移动端一模一样
             * minUrl.main()/mixUrl.news()跳转到pc对应地址
             * 2: pages没有对应页面----m端打开pc的地址www.huoxing24.com+news.huoxing24.com+token.huoxing24.com。
             * 注：在routes/index-m.js中配置路由并加载pages中对应的组件
             * onlypc显示跟pc端一模一样
             * mixUrl.m()跳转到m对应地址
             * 3: pages-m与pages都有对应页面，不共用地址[cdn缓存]。只是线上有cdn后端不能判断，转为前端跳转。路由与参数一致，只是域名不同。移动端为m.huoxing24.com，pc端为news.huoxing24.com/www.huoxing24.com/token.huoxing24.com
             * 注：routes/index.js加载pages组件，routes/index-m.js加载pages-m组件[同4]
             * pages-m中填写pc对应的地址mixUrl.news/mixUrl.main
             * pages中填写m对应的地址mixUrl.m
             * 4: pages-m与pages都有对应页面，且共用一个地址[cdn不缓存]。www.huoxing24.com+news.huoxing24.com+token.huoxing24.com。
             * 注：routes/index.js加载pages组件，routes/index-m.js加载pages-m组件[同3]
             * sameUrl--由于线上使用域名判断是否为pc或mob，故若pc与mob使用同于域名地址[不加cdn]，在此需要重新再用clientLink重新判断一次。eg: http://www.cryptoquanter.com/
             * */
            _initProps = initProps, clientLink = _initProps.clientLink;

            if (clientLink) {
              if (platform === 'mob' && clientLink === 'onlyPc') platform = 'pc';
              if (platform === 'pc' && clientLink === 'onlyMob') platform = 'mob';

              if (clientLink === 'sameUrl') {
                // 线上已通过域名判断，若不加CDN，node能获取到UA，在此转换到通过UA判断。并且不用跳转clientLink设置为undefined
                initProps.clientLink = undefined;

                if (!isPc(req)) {
                  platform = 'mob';
                } else {
                  platform = 'pc';
                }
              }
            } // platform === 'pc' &&
            // await store
            //     .dispatch(getFooterData())
            //     .catch(function (err) {
            //         apiErr = err
            //     })


            errReport = function errReport(err) {
              if (!(err instanceof Error)) return;
              var errMsg = err.message.replace(/Error: /g, '');

              if (public_isJson(errMsg)) {
                res.logger.error(objectSpread_default()({}, JSON.parse(errMsg), {
                  stack: err.stack
                }));
              } else {
                res.logger.error({
                  message: errMsg,
                  stack: err.stack
                });
              }

              return errMsg;
            }; // apiErr 请求错误,打印日志


            if (apiErr) errReport(apiErr);
            /** 利用extractor生成主要jsx内容 */

            jsx = null;
            html = '';
            errObjProps = null;

            try {
              /** 当前没有错误情况下才开始尝试渲染正式App */
              jsx = webExtractor.collectChunks(external_react_default.a.createElement(external_react_redux_["Provider"], {
                store: store
              }, external_react_default.a.createElement(external_react_router_dom_["StaticRouter"], {
                location: req.originalUrl,
                context: {}
              }, external_react_default.a.createElement(external_react_i18next_["I18nextProvider"], {
                i18n: req.i18n
              }, external_react_default.a.createElement(App, extends_default()({
                platform: platform
              }, initProps, {
                routesParams: routesParams
              }))))));
              /** 建立stream渲染中部 */
              // const stream = renderToNodeStream(jsx)

              html = Object(server_["renderToString"])(jsx);
            } catch (err) {
              /** 错误组件渲染
               * 如果node程序或者不是react程序报错则使用express的errorHandle，也就是404页面
               * 如果是react组件报错则使用此错误处理组件
               * 如果是此错误组件出错则也使用express的errorHandle
               * */
              errObjProps = {
                platform: platform,
                message: 'unknown error',
                stack: 'unknown stack'
              };

              if (err instanceof Error) {
                errMsg = errReport(err);
                errObjProps = objectSpread_default()({}, errObjProps, {
                  message: errMsg,
                  stack: err.stack
                });
              }

              jsx = webExtractor.collectChunks(external_react_default.a.createElement(external_react_redux_["Provider"], {
                store: store
              }, external_react_default.a.createElement(external_react_i18next_["I18nextProvider"], {
                i18n: req.i18n
              }, external_react_default.a.createElement(external_react_router_dom_["StaticRouter"], {
                location: req.originalUrl,
                context: {}
              }, external_react_default.a.createElement(ErrorPage, errObjProps)))));
              html = Object(server_["renderToString"])(jsx);
            }
            /** 利用extractor获取js+css，并生成html骨架，并渲染头部 */


            scripts = '';
            links = webExtractor.getLinkTags();
            styles = webExtractor.getStyleTags();

            if (devEnv) {
              // 开发环境静态资源在另外一个端口需要添加crossorigin属性
              scriptCreate = function scriptCreate(item) {
                var scriptsStr = "<script ";
                var scriptsStrEnd = "crossorigin></script>";
                Object.keys(item.props).map(function (key, index) {
                  if (key === 'dangerouslySetInnerHTML') {
                    scriptsStrEnd = "crossorigin>".concat(item.props[key]['__html'], "</script>");
                  } else {
                    scriptsStr += "".concat(key, "=\"").concat(item.props[key], "\" ");
                  }
                });
                scripts += scriptsStr + scriptsStrEnd;
              };

              webExtractor.getScriptElements().map(function (item, index) {
                if (Array.isArray(item)) {
                  item.map(function (itemIn, indexIn) {
                    scriptCreate(itemIn);
                  });
                } else {
                  scriptCreate(item);
                }
              });
            } else {
              scripts = webExtractor.getScriptTags();
            } // 获取redux默认state


            initState = store.getState();
            isWx = isWechat(req);
            isNagalink = req.hostname;
            isMarslibco = isMarsbitco(req);
            isMarslibcc = isMarsbitcc(req);
            isMarsgram = isMarstelegram(req);
            isnewMarsshare = isMarsshare(req);
            isMarsbitinfolink = isMarsbitinfo(req);
            layoutParams = {
              initState: initState,
              initProps: initProps,
              styles: styles,
              scripts: scripts,
              links: links,
              platform: platform,
              isWx: isWx,
              errObjProps: errObjProps,
              isNagalink: isNagalink,
              isMarslibco: isMarslibco,
              isMarslibcc: isMarslibcc,
              isMarsgram: isMarsgram,
              isnewMarsshare: isnewMarsshare,
              isMarsbitinfolink: isMarsbitinfolink
            };
            htmlTemplate = '';

            if (platform === 'pc') {
              htmlTemplate = layout(layoutParams);
            } else {
              htmlTemplate = layout_m(layoutParams);
            }
            /** getInitialProps中返回customRes=true时，不使用这里的res.send，执行其中的res调用 */
            // 2021-11-26 huoxing24.com域名备灾临时代码


            lastHtmlStr = htmlTemplate.header + html + htmlTemplate.footer;
            !initProps.customRes && res.send(replaceDomain(lastHtmlStr, req)); // res.write(htmlTemplate.header)
            //
            // stream.pipe(res, { end: false })
            //
            // /** stream完成后渲染尾部 */
            // stream.on('end', () =>
            //     res.end(htmlTemplate.footer)
            // )

          case 59:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})()); // 2021-11-26 huoxing24.com域名备灾临时代码 -----> 搜索此注释所有备灾代码都有
// 1: ajaxAxios -----> 接口请求域名api.huoxing24.com(前端由代码判断，后端直接请求专有Ip)
// 2: ajaxAxios -----> 接口返回的Data(前端由代码判断，后端在render.js中最后组合的html字符串中判断)
// 3: mixUrl -----> 返回域.com替换(前端由代码判断，后端在render.js中最后组合的html字符串中判断)
// 4: render.js -----> 服务端渲染(替换html字符串中.com为.cn，替换store中.com为.cn ====> 最终res.send中替换)
// 5: 其它写死的www/news.huoxing24.com ----> 编辑器全局替换为mixUrl
// EXTERNAL MODULE: ./server/routes/imLive/TLSSigAPIv2.js
var TLSSigAPIv2 = __webpack_require__(40);
var TLSSigAPIv2_default = /*#__PURE__*/__webpack_require__.n(TLSSigAPIv2);

// CONCATENATED MODULE: ./server/routes/index.js







var router = new external_express_promise_router_default.a();
router.get('*', render);
router.get('/newsdetailShare/:newsId',
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.redirect(301, mixUrl.news("/".concat(req.params.newsId)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/authorCenter/:authorId',
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(req, res, next) {
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.redirect(301, mixUrl.m("/authorCenter/".concat(req.params.authorId)));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/news/:useTypeId',
/*#__PURE__*/
function () {
  var _ref3 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(req, res, next) {
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.redirect(301, mixUrl.news("/list/".concat(req.params.useTypeId)));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/newsdetail/:newsId',
/*#__PURE__*/
function () {
  var _ref4 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee4(req, res, next) {
    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res.redirect(301, mixUrl.news("/".concat(req.params.newsId)));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
router.get('/imlive/list',
/*#__PURE__*/
function () {
  var _ref5 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee5(req, res, next) {
    return regenerator_default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res.redirect(301, mixUrl.main("/live"));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
router.get(['/imlive/detail/:liveId', '/live:liveId'],
/*#__PURE__*/
function () {
  var _ref6 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee6(req, res, next) {
    return regenerator_default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            res.redirect(301, mixUrl.main("/live/".concat(req.params.liveId)));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}());
router.get('/imlive/recommendlist',
/*#__PURE__*/
function () {
  var _ref7 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee7(req, res, next) {
    return regenerator_default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            res.redirect(301, mixUrl.main("/live/recommend"));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}()); // router.get('/liveNewsDetail/:flashId', async function (req, res, next) {
//     res.redirect(301, mixUrl.news(`/flash/${req.params.flashId}`))
// })
// im-user-sig

router.get('/imusersig/:userId',
/*#__PURE__*/
function () {
  var _ref8 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee8(req, res, next) {
    var imSdkAppId, imSecretKey, api, sig;
    return regenerator_default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            imSdkAppId = 1400383128;
            imSecretKey = '734e752d070bafe347a9831a18c451877273dc675b9a41b2c72fa2c89f93d3a7';
            api = new TLSSigAPIv2_default.a.Api(imSdkAppId, imSecretKey);
            sig = api.genUserSig(req.params.userId, 86400 * 180);
            res.send({
              code: 1,
              msg: 'sig success',
              data: sig
            }); // var sig = api.genPrivateMapKey('xiaojun', 86400 * 180, 10000, 255)
            // console.log('sig with userbuf ' + sig)
            // var sig = api.genPrivateMapKeyWithStringRoomID('xiaojun', 86400 * 180, '1000000040', 255)

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}());
router.get('/format', function (req, res, next) {
  var imgUrl = req.query.imgUrl;

  var getImgP = function getImgP(url) {
    return new Promise(function (resolve, reject) {
      var chunks = [];
      var size = 0;
      external_https_default.a.get(url, function (res) {
        if (!res) {
          reject(res);
          return;
        }

        res.on('data', function (chunk) {
          chunks.push(chunk);
          size += chunk.length;
        });
        res.on('end', function (err) {
          console.log(err);
          var data = Buffer.concat(chunks, size);
          var base64Img = data.toString('base64');
          resolve(base64Img);
        });
      });
    });
  };

  getImgP(imgUrl).then(function (data) {
    res.send(JSON.stringify({
      imgUrl: "data:image/jpeg;base64,".concat(data)
    }));
  })["catch"](function () {
    res.send(JSON.stringify({
      imgUrl: ''
    }));
  });
});
router.get('/test',
/*#__PURE__*/
function () {
  var _ref9 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee9(req, res, next) {
    var test;
    return regenerator_default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return new Promise(function (resolve, reject) {
              resolve({
                name: 'test'
              });
            });

          case 2:
            test = _context9.sent;
            console.log(test);
            res.send(test);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}());
/* harmony default export */ var server_routes = (router);
// CONCATENATED MODULE: ./server/routes/users.js



var users_router = new external_express_promise_router_default.a();
users_router.get('/',
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send('respond with a resource');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ var users = (users_router);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(14);

// EXTERNAL MODULE: external "request"
var external_request_ = __webpack_require__(23);
var external_request_default = /*#__PURE__*/__webpack_require__.n(external_request_);

// CONCATENATED MODULE: ./server/routes/signture/sign.js
var createNonceStr = function createNonceStr() {
  return Math.random().toString(36).substr(2, 15);
};

var createTimestamp = function createTimestamp() {
  return parseInt(new Date().getTime() / 1000) + '';
};

var raw = function raw(args) {
  var keys = Object.keys(args);
  keys = keys.sort();
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });
  var string = '';

  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k];
  }

  string = string.substr(1);
  return string;
};
/**
 * @synopsis 签名算法
 *
 * @param jsapi_ticket 用于签名的 jsapi_ticket
 * @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
 *
 * @returns
 */


var sign = function sign(jsapiTicket, url) {
  var ret = {
    jsapi_ticket: jsapiTicket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: url
  };
  var string = raw(ret);

  var JsSHA = __webpack_require__(50);

  var shaObj = new JsSHA(string, 'TEXT');
  ret.signature = shaObj.getHash('SHA-1', 'HEX');
  return ret;
};

/* harmony default export */ var signture_sign = (sign);
// EXTERNAL MODULE: external "redis"
var external_redis_ = __webpack_require__(41);
var external_redis_default = /*#__PURE__*/__webpack_require__.n(external_redis_);

// CONCATENATED MODULE: ./server/routes/signture/client.js


var redisServerIP = config_server["redisIp"];
var redisServerPort = '6379';
var redisPassword = config_server["redisPsd"];

var client_setupRedis = function setupRedis() {
  var client = external_redis_default.a.createClient(redisServerPort, redisServerIP);
  client.auth(redisPassword);
  client.on('error', function (error) {
    console.log('RedisServer is error!\n' + error);
  });
  client.on('connect', function () {
    console.log('RedisServer is connected!');
  });
  client.on('end', function () {
    console.log('RedisServer is end!');
  });
  client.select('15', function (error) {
    if (error) console.log(error);
    console.log('RedisServer is connected 15!');
  });
  return client;
};

/* harmony default export */ var signture_client = (client_setupRedis);
// CONCATENATED MODULE: ./server/routes/signture.js







var signture_router = external_express_default.a.Router();
var routes_signture_client = signture_client();
var getAsync = Object(external_util_["promisify"])(routes_signture_client.get).bind(routes_signture_client); // 获取当个值

var setAsync = Object(external_util_["promisify"])(routes_signture_client.set).bind(routes_signture_client); // 设置单个值

var hmsetAsync = Object(external_util_["promisify"])(routes_signture_client.hmset).bind(routes_signture_client); // 设置多个值，以json形式

var hgetallAsync = Object(external_util_["promisify"])(routes_signture_client.hgetall).bind(routes_signture_client); // 获取多个值，以json形式
// 用户名：lineJoyce@sina.com 密码：linekong2018

var signture_config = {
  appID: 'wx0ed2ac0b34184652',
  appSecret: 'a99c38fbea57fb8ba669d6cda2354788' // accessToken与jsApiTickets过期时间

};
var deadTime = 2 * 60 * 60 * 1000;
/** 请求获取access_token */

var tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + signture_config.appID + '&secret=' + signture_config.appSecret;

var signture_getAccessToken = function getAccessToken() {
  return new Promise(function (resolve, reject) {
    external_request_default()(tokenUrl, function (error, response, data) {
      if (error) reject(new Error("getAccessToken: ".concat(error)));

      if (response && response.statusCode && response.statusCode === 200) {
        var accessToken = JSON.parse(data).access_token;

        if (accessToken) {
          resolve(accessToken);
        } else {
          reject(new Error("getAccessToken: ".concat(response.body)));
        }
      } else {
        reject(new Error("getAccessToken: ".concat(response.body)));
      }
    });
  });
};
/**
 * 请求获取Jsapi_Ticket
 * @param {* URL链接} hrefURL
 * @param {* token} accessToken
 */


var signture_getJsapiTicket = function getJsapiTicket(reqUrl, accessToken) {
  var ticketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + accessToken + '&type=jsapi';
  return new Promise(function (resolve, reject) {
    external_request_default()(ticketUrl, function (error, response, data) {
      if (error) reject(new Error("getJsapiTicket: ".concat(error)));

      if (response.statusCode && response.statusCode === 200) {
        var content = JSON.parse(data);
        if (!content) reject(new Error("getJsapiTicket: ".concat(response.body)));

        if (content.errcode === 0) {
          resolve(signture_sign(content.ticket, reqUrl));
        } else if (content.errcode === 40001) {
          resolve({
            errcode: 40001,
            errmsg: 'invalid credential, access_token is invalid or not latest'
          });
        } else {
          reject(new Error("getJsapiTicket: ".concat(response.body)));
        }
      } else {
        reject(new Error("getJsapiTicket: ".concat(response.body)));
      }
    });
  });
};

function getAndSetAccessToken() {
  return _getAndSetAccessToken.apply(this, arguments);
}

function _getAndSetAccessToken() {
  _getAndSetAccessToken = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2() {
    var token, access;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return signture_getAccessToken();

          case 2:
            token = _context2.sent;
            access = {
              'token': token,
              'time': new Date().getTime()
            };
            _context2.next = 6;
            return hmsetAsync('access', access);

          case 6:
            return _context2.abrupt("return", access);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAndSetAccessToken.apply(this, arguments);
}

function dueClear(_x) {
  return _dueClear.apply(this, arguments);
}

function _dueClear() {
  _dueClear = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(reqUrl) {
    var access, ticketObj;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getAndSetAccessToken();

          case 2:
            access = _context3.sent;
            _context3.next = 5;
            return noDueVerify(access, reqUrl);

          case 5:
            ticketObj = _context3.sent;
            return _context3.abrupt("return", ticketObj);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _dueClear.apply(this, arguments);
}

function noDueVerify(_x2, _x3) {
  return _noDueVerify.apply(this, arguments);
}

function _noDueVerify() {
  _noDueVerify = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee4(access, reqUrl) {
    var ticketsArrStr, ticketsArr, ticketObj, newAccess, ticketIndex, tempArr, key, ticketDie, _ticketObj, _newAccess;

    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getAsync('tickets');

          case 2:
            ticketsArrStr = _context4.sent;
            ticketsArr = JSON.parse(ticketsArrStr); // 如果tickets不存在redis中，请求ticket并存入

            if (!(!ticketsArrStr || !Array.isArray(ticketsArr))) {
              _context4.next = 20;
              break;
            }

            console.log('redis no tickets');
            _context4.next = 8;
            return signture_getJsapiTicket(reqUrl, access.token);

          case 8:
            ticketObj = _context4.sent;

            if (!(ticketObj.hasOwnProperty('errcode') && ticketObj.errcode === 40001)) {
              _context4.next = 17;
              break;
            }

            console.log('accessToken time live, but accessToken die'); // accessToken未到过期时间，但过期了重新请求

            _context4.next = 13;
            return getAndSetAccessToken();

          case 13:
            newAccess = _context4.sent;
            _context4.next = 16;
            return signture_getJsapiTicket(reqUrl, newAccess.token);

          case 16:
            ticketObj = _context4.sent;

          case 17:
            _context4.next = 19;
            return setAsync('tickets', JSON.stringify([ticketObj]));

          case 19:
            return _context4.abrupt("return", ticketObj);

          case 20:
            // 检测当前url是否之前获取过jsApiTicket
            ticketIndex = -1;
            tempArr = ticketsArr.slice(0);
            _context4.t0 = regenerator_default.a.keys(ticketsArr);

          case 23:
            if ((_context4.t1 = _context4.t0()).done) {
              _context4.next = 32;
              break;
            }

            key = _context4.t1.value;
            ticketDie = parseInt(Date.parse(new Date()) / 1000) - parseInt(ticketsArr[key].timestamp) > deadTime / 1000;
            if (ticketDie) tempArr.splice(ticketIndex, 1); // 删除已过期的ticket

            if (!(ticketsArr[key].url === reqUrl && !ticketDie)) {
              _context4.next = 30;
              break;
            }

            // 未过期且是当前url，下一步重新获取
            ticketIndex = key;
            return _context4.abrupt("break", 32);

          case 30:
            _context4.next = 23;
            break;

          case 32:
            if (!(ticketIndex === -1)) {
              _context4.next = 51;
              break;
            }

            // 没获取过或已过期，去获取
            console.log('no ticket or ticket die');
            _context4.next = 36;
            return signture_getJsapiTicket(reqUrl, access.token);

          case 36:
            _ticketObj = _context4.sent;

            if (!(_ticketObj.hasOwnProperty('errcode') && _ticketObj.errcode === 40001)) {
              _context4.next = 45;
              break;
            }

            console.log('accessToken time live, but accessToken die'); // accessToken未到过期时间，但过期了重新请求

            _context4.next = 41;
            return getAndSetAccessToken();

          case 41:
            _newAccess = _context4.sent;
            _context4.next = 44;
            return signture_getJsapiTicket(reqUrl, _newAccess.token);

          case 44:
            _ticketObj = _context4.sent;

          case 45:
            tempArr.push(_ticketObj);
            _context4.next = 48;
            return setAsync('tickets', JSON.stringify(tempArr));

          case 48:
            return _context4.abrupt("return", _ticketObj);

          case 51:
            // 获取过，直接返回之前信息
            console.log('ticket live');
            return _context4.abrupt("return", ticketsArr[ticketIndex]);

          case 53:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _noDueVerify.apply(this, arguments);
}

signture_router.post('/',
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    var reqUrl, access;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reqUrl = req.body.url;
            _context.next = 3;
            return hgetallAsync('access');

          case 3:
            access = _context.sent;

            if (access) {
              // 请求过access_token并且存储到redis
              if (new Date().getTime() - parseInt(access.time) > deadTime) {
                // accessToken已過期
                console.log('access die');
                dueClear(reqUrl).then(function (data) {
                  res.json(data);
                })["catch"](function (err) {
                  res.status(404).send(err.message);
                });
              } else {
                // accessToken未過期
                console.log('access live');
                noDueVerify(access, reqUrl).then(function (data) {
                  res.json(data);
                })["catch"](function (err) {
                  res.status(404).send(err.message);
                });
              }
            } else {
              // 未请求过access_token
              console.log('no access');
              dueClear(reqUrl).then(function (data) {
                res.json(data);
              })["catch"](function (err) {
                res.status(404).send(err.message);
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ var signture = (signture_router);
// CONCATENATED MODULE: ./server/routes/logger.js





var logger_router = new external_express_promise_router_default.a();
var logger_logArr = [];
var logger_logPreTime = new Date().getTime(); // 1秒内logArr中不存在的errObj才上报，防止强刷

logger_router.post('/',
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    var body, headers, cookies, ip, cookiesTmp, logObj, logCurTime, logPrint, hasLogObj;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = req.body, headers = req.headers, cookies = req.cookies, ip = req.ip;
            cookiesTmp = {};
            Object.keys(cookies).map(function (key, index) {
              // 排除不必要的信息
              var keyTrue = key.indexOf('Hm_lvt_') === -1 && key.indexOf('Hm_lpvt_') === -1 && key.indexOf('CNZZDATA') === -1 && key !== 'yp_riddler_id' && key !== 'UM_distinctid';

              if (keyTrue) {
                cookiesTmp[key] = cookies[key];
              }
            });
            logObj = objectSpread_default()({}, body, {
              ip: ip,
              userAgent: headers['user-agent'],
              cookies: cookiesTmp
            });
            logCurTime = new Date().getTime();

            logPrint = function logPrint() {
              if (body.framework) {
                // 如果框架自动打印包含framework字段
                delete logObj.framework;

                switch (logObj.message) {
                  case 'client-api-msg':
                  case 'client-api-err':
                    res.logger.warn(objectSpread_default()({}, logObj));
                    break;

                  case 'client-app-err':
                  case 'client-app-err-react':
                  case 'client-app-err-window':
                  case 'client-ajax-handle-err':
                    res.logger.error(objectSpread_default()({}, logObj));
                    break;

                  default:
                    res.logger.info(objectSpread_default()({}, logObj));
                }
              } else {
                // 打印前端自定义日志
                if (body.level) {
                  var level = body.level;
                  delete body.level;
                  res.logger[level](objectSpread_default()({}, body, {
                    message: "client: ".concat(body.message || 'browser')
                  }));
                } else {
                  res.logger.info(objectSpread_default()({}, body, {
                    message: "client: ".concat(body.message || 'browser')
                  }));
                }
              }
            };

            if (!(logCurTime - logger_logPreTime >= 1000 && logger_logArr.length !== 0)) {
              _context.next = 14;
              break;
            }

            logger_logArr = [];
            logger_logArr.push(logObj);
            logger_logPreTime = logCurTime;
            logPrint();
            _context.next = 19;
            break;

          case 14:
            hasLogObj = function hasLogObj() {
              for (var _i = 0, _logArr = logger_logArr; _i < _logArr.length; _i++) {
                var val = _logArr[_i];

                if (public_deepCompare(val, logObj)) {
                  return true;
                }
              }

              return false;
            };

            if (!(logger_logArr.length !== 0 && hasLogObj())) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return");

          case 17:
            logger_logArr.push(logObj);
            logPrint();

          case 19:
            res.send({
              code: 1,
              msg: 'Log reported successfully'
            });
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            res.send({
              code: -1,
              msg: _context.t0.message
            });

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ var routes_logger = (logger_router);
// CONCATENATED MODULE: ./server/routes/root.js




/* harmony default export */ var root = (function (app) {
  app.use('/', server_routes);
  app.use('/users', users);
  app.use('/signture', signture);
  app.use('/logger', routes_logger);
});
// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(24);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: external "i18next-express-middleware"
var external_i18next_express_middleware_ = __webpack_require__(25);
var external_i18next_express_middleware_default = /*#__PURE__*/__webpack_require__.n(external_i18next_express_middleware_);

// EXTERNAL MODULE: external "i18next-node-fs-backend"
var external_i18next_node_fs_backend_ = __webpack_require__(42);
var external_i18next_node_fs_backend_default = /*#__PURE__*/__webpack_require__.n(external_i18next_node_fs_backend_);

// EXTERNAL MODULE: ./_multiappsharing/public/i18n/zh-cn.json
var zh_cn = __webpack_require__(43);
var zh_cn_default = /*#__PURE__*/__webpack_require__.n(zh_cn);

// EXTERNAL MODULE: ./_multiappsharing/public/i18n/zh-tw.json
var zh_tw = __webpack_require__(44);
var zh_tw_default = /*#__PURE__*/__webpack_require__.n(zh_tw);

// CONCATENATED MODULE: ./_multiappsharing/public/i18n/index.js


/* harmony default export */ var i18n = ({
  'zh-cn': {
    translation: zh_cn_default.a
  },
  'zh-tw': {
    translation: zh_tw_default.a
  }
});
// CONCATENATED MODULE: ./server/app/i18n.js




/* harmony default export */ var app_i18n = (function (app) {
  external_i18next_default.a.use(external_i18next_node_fs_backend_default.a).use(external_i18next_express_middleware_["LanguageDetector"]).init({
    react: {
      useSuspense: false
    },
    preload: ['zh-CN', 'zh-TW'],
    resources: i18n,
    lng: 'en',
    // 使用i18n.changeLanguage更改语言，此处暂无效果，原因待查？browser/i18n.js一样
    fallbackLng: ['zh-CN', 'zh-TW'],
    lowerCaseLng: true,
    // keySeparator: false, // 多级访问如one.two
    interpolation: {
      escapeValue: false
    }
  }, function (err, t) {
    if (err) throw Error(err);
  });
  app.use(external_i18next_express_middleware_default.a.handle(external_i18next_default.a, {
    ignoreRoutes: ['/foo'],
    // or function(req, res, options, i18next) { /* return true to ignore */ }
    removeLngFromUrl: false
  }));
});
// CONCATENATED MODULE: ./server/app/app.js










var app_app = external_express_default()(); // 接口代理

proxy(app_app); // react程序国际化挂载到req上

app_i18n(app_app);
var app_rootPath = external_path_default.a.join(__dirname).split('server')[0];
app_app.use(external_compression_default()());
app_app.set('views', external_path_default.a.join("".concat(app_rootPath, "/server/views")));
app_app.set('view engine', 'ejs');
app_app.use(external_express_winston_default.a.logger({
  winstonInstance: app_logger
}));
app_app.use(function (req, res, next) {
  res.logger = app_logger;
  next();
});
app_app.use(external_express_default.a.json());
app_app.use(external_express_default.a.urlencoded({
  extended: false
}));
app_app.use(external_cookie_parser_default()());
var staticOptions = {
  index: false,
  maxAge: 365 * 24 * 60 * 60 * 1000,
  setHeaders: function setHeaders(res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*');
  }
};
app_app.use(external_express_default.a["static"](external_path_default.a.join("".concat(app_rootPath, "/static")), staticOptions));
root(app_app);
app_app.use(function (req, res, next) {
  next(external_http_errors_default()(404));
});
external_express_winston_default.a.requestWhitelist.push('body'); // 把post参数打印至日志文件

app_app.use(external_express_winston_default.a.errorLogger({
  winstonInstance: app_logger
}));
app_app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
/* harmony default export */ var server_app_app = (app_app);
// CONCATENATED MODULE: ./server/app/index.js





var app_createHttp = function createHttp(app) {
  external_debug_default()('huoxing24:server');

  var normalizePort = function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      return val;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  };

  var onError = function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    if (error.code === 'EACCES') {
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    } else if (error.code === 'EADDRINUSE') {
      console.error(bind + ' is already in use');
      process.exit(1);
    } else {
      throw error;
    }
  };

  var port = normalizePort(process.env.PORT || config["serverPort"]);
  app.set('port', port);
  var server = external_http_default.a.createServer(app);

  var onListening = function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    external_debug_default()('Listening on ' + bind);
  };

  server.listen(port, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.info('==> Server Listening on port %s.', port);
    }
  });
  server.on('error', onError);
  server.on('listening', onListening);
};

app_createHttp(server_app_app);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map