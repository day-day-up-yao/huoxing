require("source-map-support").install();
exports.ids = [5];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _Image_pc_download_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(471);
/* harmony import */ var _Image_pc_download_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Image_pc_download_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Image_apple_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(472);
/* harmony import */ var _Image_apple_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Image_apple_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Image_google_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(473);
/* harmony import */ var _Image_google_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Image_google_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Image_android_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(474);
/* harmony import */ var _Image_android_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Image_android_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Image_download_right_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(475);
/* harmony import */ var _Image_download_right_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Image_download_right_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_downloadimg_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(476);
/* harmony import */ var _public_img_downloadimg_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_downloadimg_png__WEBPACK_IMPORTED_MODULE_10__);




 // import PhoneIcon from './Image/phone.png'

 // import IosIcon from './Image/ios.svg'
// import AndIcon from './Image/and.svg'
// import EwmIcon from './Image/ewm.png'






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      and = _useState2[0],
      setAnd = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_3__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
      if (res.code === 1) {
        setAnd(res.obj);
      } else {
        _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, []); // console.log(and)

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-cont"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "phone"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_download_right_png__WEBPACK_IMPORTED_MODULE_9___default.a
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-load-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-log"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_pc_download_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u805A\u7126\u5168\u7403\u533A\u5757\u94FE\u79D1\u6280\u524D\u6CBF\u52A8\u6001")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-btn"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "download-btn hoverable ios",
    href: "https://apps.apple.com/cn/app/id1343659925",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_apple_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "iOS\u7248\u4E0B\u8F7D"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "androidBtn",
    className: "download-btn hoverable android",
    href: "https://play.google.com/store/apps/details?id=com.linekong.mars24",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_google_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "google store\u7248\u4E0B\u8F7D"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "androidBtn",
    className: "download-btn hoverable android",
    href: and,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _Image_android_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "\u5B89\u5353\u7248\u672C\u4E0B\u8F7D"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ewm-btn"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-box-ios"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_downloadimg_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: ""
  })))))));
});

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pc-download-logo-11b8176d.png";

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "apple-e5dc42ea.png";

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google-dde2415d.png";

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "android-767e7463.png";

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "download_right-34fa9afc.png";

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "downloadimg-a72fa1d2.png";

/***/ })

};;
//# sourceMappingURL=containers-Download.js.map