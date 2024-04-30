require("source-map-support").install();
exports.ids = [19];
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

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-header-logo-blue-f47ea14f.svg";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_m_header_logo_blue_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(149);
/* harmony import */ var _img_m_header_logo_blue_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_m_header_logo_blue_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _multiappsharing_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_m_DownloadBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(138);












var NoticeDetail =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NoticeDetail, _Component);

  function NoticeDetail() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NoticeDetail);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NoticeDetail).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NoticeDetail, [{
    key: "render",
    value: function render() {
      var noticeObj = this.props.noticeObj;
      var contObj = noticeObj.currentExchangeNotice;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "m-notice-detail"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "m-header",
        style: {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        title: "MarsBit",
        className: "logo",
        href: _multiappsharing_public__WEBPACK_IMPORTED_MODULE_9__[/* mixUrl */ "w"].m()
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "MarsBit",
        src: _img_m_header_logo_blue_svg__WEBPACK_IMPORTED_MODULE_8___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: _multiappsharing_public__WEBPACK_IMPORTED_MODULE_9__[/* mixUrl */ "w"].m('/search'),
        className: "search"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", null, contObj.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail-logo"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: contObj.exchangeIconUrl,
        alt: "",
        className: "cont-logo"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "name"
      }, contObj.exchangeSymbol), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "time"
      }, Object(_multiappsharing_public__WEBPACK_IMPORTED_MODULE_9__[/* flashTime */ "j"])(contObj.publishTime)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "type"
      }, contObj.typeName))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail-cont",
        dangerouslySetInnerHTML: {
          __html: contObj.content
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "orign-url"
      }, "\u539F\u6587\u8FDE\u63A5\uFF1A", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: contObj.orignUrl
      }, "\u70B9\u51FB\u8FDB\u5165")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_m_DownloadBtn__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        type: "noticeDetail",
        id: this.props.match.params.noticeId
      }));
    }
  }]);

  return NoticeDetail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    noticeObj: state.noticeDetail.noticeObj
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(NoticeDetail));

/***/ })

};;
//# sourceMappingURL=containers-m-NoticeDetail.js.map