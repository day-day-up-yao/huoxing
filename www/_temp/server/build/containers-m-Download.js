require("source-map-support").install();
exports.ids = [30];
exports.modules = {

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _multiappsharing_components_m_Layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _Image_m_download_top_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(511);
/* harmony import */ var _Image_m_download_top_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Image_m_download_top_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Image_m_download_ipone_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(512);
/* harmony import */ var _Image_m_download_ipone_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Image_m_download_ipone_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(513);
/* harmony import */ var _public_img_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_9__);









 // import mLogo from './Image/m-b-logo.png'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      and = _useState2[0],
      setAnd = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      apple = _useState4[0],
      setApple = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      isWx = _useState6[0],
      setIsWx = _useState6[1];

  var google = 'https://play.google.com/store/apps/details?id=com.linekong.mars24';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsWx(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "y"])());

    if (Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])()) {
      setApple(0);
      Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_4__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
        if (res.code === 1) {
          setAnd(res.obj);
        } else {
          _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].info(res.msg);
        }
      })["catch"](function (err) {
        throw err;
      });
    } else {
      setApple('https://apps.apple.com/cn/app/id1343659925');
    }
  }, []); // console.log(and)

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "m-download-page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_m_download_top_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-info"
  }, "\u805A\u7126\u5168\u7403\u533A\u5757\u94FE\u79D1\u6280\u524D\u6CBF\u52A8\u6001"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-phone"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_m_download_ipone_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: ""
  })), apple !== 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: apple,
    target: "_blank",
    id: "downloadBtnIos",
    className: "download-btn"
  }), apple === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "android"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: google,
    id: "downloadBtnGoggle",
    className: "download-btn"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: and,
    id: "downloadBtnAndroid",
    className: "download-btn"
  })), isWx && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-app-wechat-tips"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-app-img"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_multiappsharing_components_m_Layout_Footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null));
});

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-download-top-045cd358.png";

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m_download_ipone-46447e3b.png";

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wechat-download-tips-fef770a1.png";

/***/ })

};;
//# sourceMappingURL=containers-m-Download.js.map