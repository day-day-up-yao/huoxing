require("source-map-support").install();
exports.ids = [15];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);





var checkOpen = function checkOpen(callback) {
  var _clickTime = +new Date(); // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束


  var _count = 0;
  var intHandle;
  intHandle = setInterval(function () {
    _count++;
    var elsTime = +new Date() - _clickTime;

    if (_count >= 100 || elsTime > 3000) {
      clearInterval(intHandle);

      if (elsTime > 3000 || document.hidden || document.webkitHidden) {
        console.log('正在打开app');
      } else {
        callback();
      }
    }
  }, 20);
};
/**
 * @params type 当前页面类型 id文章视频等相对应的id
 * newsDetail新闻详情，newsList新闻列表
 * flashDetail快讯详情，flashList快讯列表
 * videoDetail视频详情，videoList视频列表
 * authorCenter作者中心
 * 不传type默认跳转到首页
 * 返回appDownload 传递以上参数
 * 并返回openInBrowser是否提示浏览器中打开
 * */


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var iosUrl = 'https://itunes.apple.com/cn/app/id1343659925?mt=8';
  var andUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('');
  var openApp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (url, doNotDownload) {
    location.href = url;
    checkOpen(function () {
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "o"])() && !doNotDownload) location.href = iosUrl;
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])() && !doNotDownload) location.href = andUrl.current;
    });
  }, [andUrl]);
  var appDownload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (type, id, obj) {
    var doNotDownload = obj ? obj.doNotDownload : false;
    var openInBrowser = false;

    if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "v"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "o"])()) {
      // 打开appStore
      location.href = iosUrl;
    } else if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "v"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])()) {
      // 提示浏览器中打开
      openInBrowser = true;
    } else {
      switch (type) {
        case 'liveshare':
          openApp("marsbusiness://liveshare/".concat(id), doNotDownload);
          break;

        case 'newsDetail':
          openApp("marsbusiness://news/".concat(id), doNotDownload);
          break;

        case 'newsList':
          openApp("marsbusiness://newlist/".concat(id), doNotDownload);
          break;

        case 'flashDetail':
          openApp("marsbusiness://fast/".concat(id), doNotDownload);
          break;

        case 'flashList':
          openApp("marsbusiness://home/fast", doNotDownload);
          break;

        case 'videoDetail':
          openApp("marsbusiness://video/".concat(id), doNotDownload);
          break;

        case 'videoList':
          openApp("marsbusiness://home/video", doNotDownload);
          break;

        case 'authorCenter':
          openApp("marsbusiness://authorCenter/".concat(id), doNotDownload);
          break;

        case 'noticeDetail':
          openApp("marsbusiness://noticeDetail/".concat(id), doNotDownload);
          break;

        default:
          openApp("marsbusiness://home/new", doNotDownload);
      }
    }

    return openInBrowser;
  }, [andUrl]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_redux_actions_public__WEBPACK_IMPORTED_MODULE_1__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
      if (res.code === 1) {
        andUrl.current = res.obj;
      } else {
        _components_Toast__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, []);
  return appDownload;
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return props.openInBrowser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download-app-wechat-tips",
    onClick: function onClick() {
      return props.setOpenInBrowser(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download-app-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00"
  })));
});

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wechat-download-tips-fef770a1.png";

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(111);
/* harmony import */ var _public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(109);
/* harmony import */ var _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(139);
/* harmony import */ var _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      iphonex = _useState2[0],
      setIphonex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      openInBrowser = _useState4[0],
      setOpenInBrowser = _useState4[1];

  var appDownload = Object(_public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
  var clickDownload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setOpenInBrowser(appDownload(props.type, props.id));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* isIphoneX */ "p"])() && setIphonex(true);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-app-wrapper ".concat(iphonex ? 'iphonex' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "download-app-btn",
    onClick: clickDownload
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "\u4E0B\u8F7DMarsBit"
  }), "\u4E0B\u8F7DMarsBit APP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    openInBrowser: openInBrowser,
    setOpenInBrowser: setOpenInBrowser
  }));
});

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cellphone-icon-524dafc5.png";

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(105);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(16);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(25);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// CONCATENATED MODULE: ./assets/containers-m/Flash/FlashListItem/index.js






var FlashListItem_FlashListItem = function FlashListItem(props) {
  var item = props.item,
      serverTime = props.serverTime;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      openMsg = _useState2[0],
      setOpenMsg = _useState2[1];

  item.openMsg = false;
  var titleContent = Object(_multiappsharing_public["i" /* flashRecognize */])(item);
  var title = titleContent.title;
  var contentHTML = titleContent.content.replace(/<\/?.+?>/g, '');
  var content = contentHTML.replace(/ /g, ''); // const content = titleContent.content

  var reg = /【([^【】]+)】([^【】]*)/;
  var cont = reg.exec(content) ? reg.exec(content)[2] : content;
  if (Object(_multiappsharing_public["a" /* GetLength */])(cont) > 80) item.openMsg = openMsg; // const url = 'https://m.marsbit.co/flash/' + item.id + '.html'

  var handleClick = Object(external_react_["useCallback"])(function () {
    setOpenMsg(true);
  });
  console.log(); // 点击展开和，查看原文，增加创建时间

  return external_react_default.a.createElement("div", {
    className: "new-fash-list",
    "data-date": "\u521B\u5EFA\u65F6\u95F4"
  }, external_react_default.a.createElement("i", {
    className: "iconfont iconfont-fangkuai fangkuai"
  }), external_react_default.a.createElement("div", {
    className: "time-flash"
  }, Object(_multiappsharing_public["j" /* flashTime */])(item.createdTime, serverTime)), external_react_default.a.createElement("div", {
    className: "text-flash clearfix"
  }, external_react_default.a.createElement("div", {
    className: "text-box"
  }, external_react_default.a.createElement("a", {
    className: "text-title",
    href: _multiappsharing_public["w" /* mixUrl */].m("/flash/".concat(item.id, ".html"))
  }, title), external_react_default.a.createElement("p", {
    className: "text-msg ".concat(item.openMsg ? '' : 'maxH')
  }, content, external_react_default.a.createElement("a", {
    href: item.url,
    className: "original",
    title: "\u67E5\u770B\u539F\u6587"
  }, "\u67E5\u770B\u539F\u6587")), external_react_default.a.createElement("p", {
    className: "open-msg",
    style: {
      display: openMsg ? 'none' : 'inline-block'
    },
    onClick: function onClick() {
      return handleClick();
    }
  }, "\u5C55\u5F00 ", external_react_default.a.createElement("i", {
    className: "iconfont iconfont-open"
  })), item.images && external_react_default.a.createElement("div", {
    className: "text-img"
  }, external_react_default.a.createElement("img", {
    className: "item-img",
    src: item.images
  })))));
};

FlashListItem_FlashListItem.propTypes = {
  // item: object.iuRequired,
  serverTime: external_prop_types_["number"].isRequired
};
/* harmony default export */ var Flash_FlashListItem = (FlashListItem_FlashListItem);
// EXTERNAL MODULE: ./_multiappsharing/components-m/DownloadBtn/index.js
var DownloadBtn = __webpack_require__(138);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/flash.js + 1 modules
var flash = __webpack_require__(31);

// CONCATENATED MODULE: ./assets/containers-m/Flash/index.js













var Flash_Flash = function Flash(props) {
  var flashList = props.flashList,
      dispatch = props.dispatch;
  var paramsObj = {
    currentPage: flashList.currentPage,
    pageSize: 30
  };

  var _useState = Object(external_react_["useState"])(paramsObj),
      _useState2 = slicedToArray_default()(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var isLoading = Object(external_react_["useRef"])(false);
  var loadType = Object(external_react_["useRef"])(false); // 加载跟是更多，点击切换是false ，这里没有切换

  var isMounted = Object(external_react_["useRef"])(false); // 组件是否已经挂载

  /** @desc 滚动加载更多 */

  Object(external_react_["useEffect"])(function () {
    var scrollFunc = Object(_multiappsharing_public["G" /* windowScroll */])(function (res) {
      if (res !== 'down' || isLoading.current) return false;
      loadType.current = 'more';
      var $btnMore = document.getElementById('btnMore');

      if (Object(_multiappsharing_public["z" /* scrollOffset */])().top + Object(_multiappsharing_public["F" /* windowOffset */])().height > Object(_multiappsharing_public["g" /* elementOffset */])($btnMore).top - Object(_multiappsharing_public["F" /* windowOffset */])().height / 2) {
        loadMore();
      }
    });
    return function () {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [isLoading]);
  /** @desc 获取刷新时间 */

  var refreshTime = Object(external_react_["useRef"])(flashList.inforList[flashList.inforList.length - 1].createTime);
  Object(external_react_["useEffect"])(function () {
    refreshTime.current = flashList.inforList[flashList.inforList.length - 1].createTime;
  }, [flashList]);
  var loadMore = Object(external_react_["useCallback"])(function () {
    console.log(1111);
    if (isLoading.current) return false;
    setParams(objectSpread_default()({}, params, {
      currentPage: params.currentPage + 1,
      refreshTime: refreshTime.currentPage
    }));
  }, [params, isLoading, refreshTime]); // 获取快讯列表，更新isMount，flashList, isLoading,

  /** @desc 获取快讯列表 */

  Object(external_react_["useEffect"])(function () {
    if (isMounted.current && !isLoading.current) {
      isLoading.current = true;
      Promise.all([dispatch(Object(flash["b" /* getFlashList */])(params, loadType.current))["catch"](function (err) {
        console.log(err);
        Toast["a" /* default */].info('获取快讯列表错误');
      })]).then(function (res) {
        isLoading.current = false;

        if (res[0].code === 1) {
          var list = res[0].obj.inforList;

          if (!Object(_multiappsharing_public["n" /* isArray */])(list) || list.length === 0) {
            Toast["a" /* default */].info('暂无更多快讯');
          }
        } else {
          Toast["a" /* default */].info(res[0].msg);
        }
      });
    } else {
      isMounted.current = true;
    }
  }, [isLoading, isMounted, params]);
  return external_react_default.a.createElement("div", {
    className: "news-fash page-con-wrap",
    id: "currNewsBox"
  }, external_react_default.a.createElement("div", {
    className: "lives-box"
  }, flashList.inforList.map(function (item, index) {
    return external_react_default.a.createElement(Flash_FlashListItem, defineProperty_default()({
      item: item,
      serverTime: flashList.currentTime,
      key: item.id
    }, "key", index));
  })), external_react_default.a.createElement("div", {
    className: "flash-more-btn"
  }, external_react_default.a.createElement("div", {
    className: "btn-more",
    id: "btnMore"
  }, "\u52A0\u8F7D\u66F4\u591A")), external_react_default.a.createElement(DownloadBtn["a" /* default */], null));
};

var mapStateToProps = function mapStateToProps(state) {
  var multi = state.multi;
  return {
    flashList: multi.flash.flashList
  };
};

/* harmony default export */ var containers_m_Flash = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Flash_Flash));

/***/ })

};;
//# sourceMappingURL=containers-m-Flash.js.map