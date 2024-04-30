require("source-map-support").install();
exports.ids = [39];
exports.modules = {

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./assets/containers-m/Livelist/LiveRoomItem/Image/im-live-list-item-status.gif
var im_live_list_item_status = __webpack_require__(508);
var im_live_list_item_status_default = /*#__PURE__*/__webpack_require__.n(im_live_list_item_status);

// EXTERNAL MODULE: ./assets/containers-m/Livelist/LiveRoomItem/Image/im-live-list-item-status2.png
var im_live_list_item_status2 = __webpack_require__(509);
var im_live_list_item_status2_default = /*#__PURE__*/__webpack_require__.n(im_live_list_item_status2);

// CONCATENATED MODULE: ./assets/containers-m/Livelist/LiveRoomItem/index.js





/* harmony default export */ var LiveRoomItem = (function (props) {
  var itemType = props.itemType,
      roomId = props.roomId,
      status = props.status,
      popularity = props.popularity,
      coverPicUrl = props.coverPicUrl,
      name = props.name,
      id = props.id,
      publishTime = props.publishTime;
  var playNum = popularity && popularity !== '' ? popularity : 0;
  var playNumText = "".concat(playNum, " \u4EBA\u6B21");

  if (playNum > 1000000) {
    playNumText = "99.9\u4E07+  \u4EBA\u6B21";
  } else if (playNum > 10000) {
    playNumText = "".concat((playNum / 10000).toFixed(1), "\u4E07 \u4EBA\u6B21");
  }

  var href = itemType !== undefined && itemType === 'myvideo' ? _multiappsharing_public["A" /* mixUrl */].main("/video/detail/".concat(id, "/").concat(publishTime)) : _multiappsharing_public["A" /* mixUrl */].main("/liveshare/".concat(roomId)); // ?x-oss-process=image/format,webp/resize,w_200

  return external_react_default.a.createElement("a", {
    className: "im-live-list-item im-live-list-item-".concat(itemType),
    href: href,
    target: "_self"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-item-video"
  }, external_react_default.a.createElement("img", {
    className: "im-live-list-item-video-img",
    src: "".concat(coverPicUrl)
  }), itemType !== undefined && itemType === 'myvideo' ? null : external_react_default.a.createElement("div", {
    className: "im-live-list-item-video-state type-lt"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-item-video-state-box type-".concat(status && status !== '' ? status : '0')
  }, status && status === 1 ? external_react_default.a.createElement("img", {
    className: "im-live-list-item-video-state-box-img",
    src: im_live_list_item_status_default.a
  }) : status && status === 0 ? '' : external_react_default.a.createElement("img", {
    className: "im-live-list-item-video-state-box-img",
    src: im_live_list_item_status2_default.a
  }), status && status === 1 ? '直播中' : status && status === 2 ? '回放中' : '即将开始'), status && status !== 0 ? external_react_default.a.createElement("div", {
    className: "im-live-list-item-video-state-box type-pop"
  }, playNumText) : null), itemType === 'top1' || itemType === 'top2' ? external_react_default.a.createElement("div", {
    className: "im-live-list-item-list-top-state"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-item-list-top-title"
  }, name)) : null), itemType === undefined || itemType === 'myvideo' || itemType === 'mylive' || itemType === 'top3' ? external_react_default.a.createElement("div", {
    className: "im-live-list-item-title"
  }, name) : null);
});
// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// EXTERNAL MODULE: ./_multiappsharing/components-m/DownloadBtn/index.js
var DownloadBtn = __webpack_require__(231);

// CONCATENATED MODULE: ./assets/containers-m/Livelist/index.js








/* harmony default export */ var Livelist = __webpack_exports__["default"] = (function (props) {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      roomLiveRecommend: state.live.roomLiveRecommendList,
      roomLiveRecommendList: state.live.roomLiveRecommendList.inforList
    };
  }),
      roomLiveRecommendList = _useSelector.roomLiveRecommendList,
      roomLiveRecommend = _useSelector.roomLiveRecommend;

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])(roomLiveRecommendList),
      _useState2 = slicedToArray_default()(_useState, 2),
      livelist = _useState2[0],
      setLivelist = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var newdData = roomLiveRecommend.currentPage === 1 ? livelist : livelist.concat(roomLiveRecommendList);
    setLivelist(newdData);
  }, [roomLiveRecommendList, roomLiveRecommend]);
  var onBtnMoreClick = Object(external_react_["useCallback"])(function () {
    var currPage = parseInt(roomLiveRecommend.currentPage) + 1;

    if (roomLiveRecommend.pageCount >= currPage) {
      dispatch(Object(live["f" /* getRoomLiveList */])({
        recommendFlag: 1,
        pageSize: 20,
        page: currPage
      }));
    }
  }, [roomLiveRecommend]);
  return external_react_default.a.createElement("div", {
    className: "m-live-box"
  }, external_react_default.a.createElement("div", {
    className: "live-recommend-list"
  }, livelist && livelist.map(function (item, index) {
    return external_react_default.a.createElement(LiveRoomItem, extends_default()({}, item, {
      key: index
    }));
  })), external_react_default.a.createElement("div", {
    className: "video-more",
    onClick: onBtnMoreClick,
    "data-page": ""
  }, external_react_default.a.createElement("p", null, "\u67E5\u770B\u66F4\u591A")), external_react_default.a.createElement(DownloadBtn["a" /* default */], {
    type: "home"
  }));
});

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);





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
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "p"])() && !doNotDownload) location.href = iosUrl;
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])() && !doNotDownload) location.href = andUrl.current;
    });
  }, [andUrl]);
  var appDownload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (type, id, obj) {
    var doNotDownload = obj ? obj.doNotDownload : false;
    var openInBrowser = false;

    if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "y"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "p"])()) {
      // 打开appStore
      location.href = iosUrl;
    } else if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "y"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])()) {
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

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wechat-download-tips-fef770a1.png";

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var _public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(232);
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
    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* isIphoneX */ "q"])() && setIphonex(true);
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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cellphone-icon-524dafc5.png";

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-list-item-status-19bd2cda.gif";

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-list-item-status2-5d5cebf1.png";

/***/ })

};;
//# sourceMappingURL=containers-m-Livelist.js.map