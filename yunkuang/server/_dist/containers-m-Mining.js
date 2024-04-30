require("source-map-support").install();
exports.ids = ["containers-m-Mining"];
exports.modules = {

/***/ "./assets/components-m/AllBg/index.js":
/*!********************************************!*\
  !*** ./assets/components-m/AllBg/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var children = props.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"allbg\"\n  }, children);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29tcG9uZW50cy1tL0FsbEJnL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMtbS9BbGxCZy9pbmRleC5qcz9iMjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWxsYmdcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/components-m/AllBg/index.js\n");

/***/ }),

/***/ "./assets/components-m/Headers/index.js":
/*!**********************************************!*\
  !*** ./assets/components-m/Headers/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imgs_h5img_other_pointleft_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/imgs/h5img/other/pointleft.png */ \"./assets/public/imgs/h5img/other/pointleft.png\");\n/* harmony import */ var _public_imgs_h5img_other_pointleft_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_imgs_h5img_other_pointleft_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var title = props.title,\n      leftfg = props.leftfg,\n      textright = props.textright,\n      clickFn = props.clickFn,\n      nogobanck = props.nogobanck,\n      onhiddenFn = props.onhiddenFn;\n  var handleGoback = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (nogobanck) {\n      onhiddenFn(false);\n    } else {\n      window.history.go(-1);\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"publicheader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"publicheader-l\",\n    onClick: handleGoback\n  }, leftfg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _public_imgs_h5img_other_pointleft_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"publicheader-c\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"publicheader-r\",\n    onClick: function onClick() {\n      clickFn();\n    }\n  }, textright));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29tcG9uZW50cy1tL0hlYWRlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy1tL0hlYWRlcnMvaW5kZXguanM/NWM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHBvaW50bGVmdGltZyBmcm9tICcuLi8uLi9wdWJsaWMvaW1ncy9oNWltZy9vdGhlci9wb2ludGxlZnQucG5nJ1xyXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBsZWZ0ZmcsIHRleHRyaWdodCwgY2xpY2tGbiwgbm9nb2JhbmNrLCBvbmhpZGRlbkZuIH0gPSBwcm9wc1xyXG4gICAgY29uc3QgaGFuZGxlR29iYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChub2dvYmFuY2spIHtcclxuICAgICAgICAgICAgb25oaWRkZW5GbihmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygtMSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpY2hlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGljaGVhZGVyLWxcIiBvbkNsaWNrPXtoYW5kbGVHb2JhY2t9PlxyXG4gICAgICAgICAgICB7bGVmdGZnICYmIDxpbWcgc3JjPXtwb2ludGxlZnRpbWd9IGFsdD1cIlwiLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaWNoZWFkZXItY1wiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpY2hlYWRlci1yXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlja0ZuKClcclxuICAgICAgICB9fT57dGV4dHJpZ2h0fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/components-m/Headers/index.js\n");

/***/ }),

/***/ "./assets/containers-m/Mining/HashItem.js":
/*!************************************************!*\
  !*** ./assets/containers-m/Mining/HashItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_curryicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/js/curryicon */ \"./assets/public/js/curryicon.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _Curreylog$find;\n\n  var hashinfo = props.hashinfo;\n  var hashNum = 0;\n\n  if (hashinfo.orderIncomeVoList) {\n    var orderdata = hashinfo.orderIncomeVoList.filter(function (itm) {\n      return itm.orderState === 4;\n    });\n    hashNum = orderdata.reduce(function (sum, e) {\n      return sum + Number(e.hashrateFormat);\n    }, 0);\n  }\n\n  var iconimg = (_Curreylog$find = _public_js_curryicon__WEBPACK_IMPORTED_MODULE_1__[\"Curreylog\"].find(function (itm) {\n    return itm.name === hashinfo.currency;\n  })) === null || _Curreylog$find === void 0 ? void 0 : _Curreylog$find.logo;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hash-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hash-item-part\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"part-hash\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"part-hash-num\"\n  }, hashNum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, hashinfo.hashrateUnit)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"part-percent\"\n  }, hashinfo.myTotalHashrate === '0' ? 0 : (hashNum / Number(hashinfo.myTotalHashrate) * 100).toFixed(2) + '%'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"part-desc\"\n  }, \"\\u5B9E\\u65F6\\u7B97\\u529B\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hash-item-part\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"part-hash\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"part-hash-num\"\n  }, hashinfo.currency === 'FIL' ? hashinfo.filYesterdayTotalIncome ? hashinfo.filYesterdayTotalIncome : 0 : hashinfo.yesterdayTotalIncome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, hashinfo.currency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"part-percent\"\n  }, \"\\u2248$\", hashinfo.currency === 'FIL' ? hashinfo.filYesterdayTotalIncome ? Number(hashinfo.filYesterdayTotalIncome) * Number(hashinfo.filUsdtRate) : 0 : hashinfo.yesterdayTotalIncomeUsdt ? hashinfo.yesterdayTotalIncomeUsdt : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"part-desc\"\n  }, \"\\u6628\\u65E5\\u6536\\u76CA\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hash-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: iconimg,\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hash-block\"\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGFpbmVycy1tL01pbmluZy9IYXNoSXRlbS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250YWluZXJzLW0vTWluaW5nL0hhc2hJdGVtLmpzPzFkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ3VycmV5bG9nIH0gZnJvbSAnLi4vLi4vcHVibGljL2pzL2N1cnJ5aWNvbidcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBoYXNoaW5mbyB9ID0gcHJvcHNcbiAgICBsZXQgaGFzaE51bSA9IDBcbiAgICBpZiAoaGFzaGluZm8ub3JkZXJJbmNvbWVWb0xpc3QpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJkYXRhID0gaGFzaGluZm8ub3JkZXJJbmNvbWVWb0xpc3QuZmlsdGVyKChpdG0pID0+IGl0bS5vcmRlclN0YXRlID09PSA0KVxuICAgICAgICBoYXNoTnVtID0gb3JkZXJkYXRhLnJlZHVjZSgoc3VtLCBlKSA9PiBzdW0gKyBOdW1iZXIoZS5oYXNocmF0ZUZvcm1hdCksIDApXG4gICAgfVxuICAgIGNvbnN0IGljb25pbWcgPSBDdXJyZXlsb2cuZmluZCgoaXRtKSA9PiBpdG0ubmFtZSA9PT0gaGFzaGluZm8uY3VycmVuY3kpPy5sb2dvXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaGFzaC1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzaC1pdGVtLXBhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydC1oYXNoXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFydC1oYXNoLW51bVwiPntoYXNoTnVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aGFzaGluZm8uaGFzaHJhdGVVbml0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0LXBlcmNlbnRcIj5cbiAgICAgICAgICAgICAgICB7aGFzaGluZm8ubXlUb3RhbEhhc2hyYXRlID09PSAnMCcgPyAwIDogKChoYXNoTnVtIC8gTnVtYmVyKGhhc2hpbmZvLm15VG90YWxIYXNocmF0ZSkpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnQtZGVzY1wiPuWunuaXtueul+WKmzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXNoLWl0ZW0tcGFydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0LWhhc2hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYXJ0LWhhc2gtbnVtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNoaW5mby5jdXJyZW5jeSA9PT0gJ0ZJTCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNoaW5mby5maWxZZXN0ZXJkYXlUb3RhbEluY29tZSA/IGhhc2hpbmZvLmZpbFllc3RlcmRheVRvdGFsSW5jb21lIDogMFxuICAgICAgICAgICAgICAgICAgICApIDogaGFzaGluZm8ueWVzdGVyZGF5VG90YWxJbmNvbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntoYXNoaW5mby5jdXJyZW5jeX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydC1wZXJjZW50XCI+XG4gICAgICAgICAgICAgICAg4omIJHtoYXNoaW5mby5jdXJyZW5jeSA9PT0gJ0ZJTCcgPyAoXG4gICAgICAgICAgICAgICAgICAgIGhhc2hpbmZvLmZpbFllc3RlcmRheVRvdGFsSW5jb21lID8gTnVtYmVyKGhhc2hpbmZvLmZpbFllc3RlcmRheVRvdGFsSW5jb21lKSAqIE51bWJlcihoYXNoaW5mby5maWxVc2R0UmF0ZSkgOiAwXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgaGFzaGluZm8ueWVzdGVyZGF5VG90YWxJbmNvbWVVc2R0ID8gaGFzaGluZm8ueWVzdGVyZGF5VG90YWxJbmNvbWVVc2R0IDogMFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydC1kZXNjXCI+5pio5pel5pS255uKPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhc2gtaWNvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ljb25pbWd9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzaC1ibG9ja1wiLz5cbiAgICA8L2Rpdj5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/containers-m/Mining/HashItem.js\n");

/***/ }),

/***/ "./assets/containers-m/Mining/index.js":
/*!*********************************************!*\
  !*** ./assets/containers-m/Mining/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_m_Headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components-m/Headers */ \"./assets/components-m/Headers/index.js\");\n/* harmony import */ var _public_imgs_h5img_other_useelec_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/imgs/h5img/other/useelec.png */ \"./assets/public/imgs/h5img/other/useelec.png\");\n/* harmony import */ var _public_imgs_h5img_other_useelec_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_imgs_h5img_other_useelec_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_imgs_h5img_other_hashmall_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/imgs/h5img/other/hashmall.png */ \"./assets/public/imgs/h5img/other/hashmall.png\");\n/* harmony import */ var _public_imgs_h5img_other_hashmall_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_imgs_h5img_other_hashmall_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_m_AllBg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components-m/AllBg */ \"./assets/components-m/AllBg/index.js\");\n/* harmony import */ var _HashItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HashItem */ \"./assets/containers-m/Mining/HashItem.js\");\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Toast */ \"./assets/components/Toast/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    totalIncomeUsdt: 0,\n    yesterdayIncomeUsdt: 0,\n    ls: []\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      allnum = _useState2[0],\n      setAllnum = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    dispatch.order.inconeListv2().then(function (res) {\n      if (res.code === 0) {\n        // let hashdata = []\n        setAllnum(res.data);\n      } else {\n        _components_Toast__WEBPACK_IMPORTED_MODULE_8__[\"default\"].info(res.msg);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"mining\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_m_Headers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: '我的算力'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"mining-alldata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"alldata-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"into-number\"\n  }, \"$\", allnum.yesterdayIncomeUsdt), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"into-text\"\n  }, \"\\u6628\\u65E5\\u6536\\u76CA\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"alldata-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"into-number\"\n  }, \"$\", allnum.totalIncomeUsdt), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"into-text\"\n  }, \"\\u7D2F\\u8BA1\\u6536\\u76CA\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"mining-alldata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"alldata-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: _public_imgs_h5img_other_useelec_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"info-btn\"\n  }, \"\\u7528\\u7535\\u7BA1\\u7406\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"alldata-info\",\n    onClick: function onClick() {\n      window.location.href = '/';\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: _public_imgs_h5img_other_hashmall_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"info-btn\"\n  }, \"\\u7B97\\u529B\\u5546\\u57CE\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_m_AllBg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: allnum.ls.length > 0 && allnum.ls.map(function (item, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HashItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        key: index,\n        hashinfo: item\n      });\n    })\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGFpbmVycy1tL01pbmluZy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250YWluZXJzLW0vTWluaW5nL2luZGV4LmpzP2ZhN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy1tL0hlYWRlcnMnXG5pbXBvcnQgdXNlZWxlY2ltZyBmcm9tICcuLi8uLi9wdWJsaWMvaW1ncy9oNWltZy9vdGhlci91c2VlbGVjLnBuZydcbmltcG9ydCBoYXNobWFsbGltZyBmcm9tICcuLi8uLi9wdWJsaWMvaW1ncy9oNWltZy9vdGhlci9oYXNobWFsbC5wbmcnXG5pbXBvcnQgQWxsQmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy1tL0FsbEJnJ1xuaW1wb3J0IEhhc2hJdGVtIGZyb20gJy4vSGFzaEl0ZW0nXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ub2FzdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbYWxsbnVtLCBzZXRBbGxudW1dID0gdXNlU3RhdGUoe1xuICAgICAgICB0b3RhbEluY29tZVVzZHQ6IDAsXG4gICAgICAgIHllc3RlcmRheUluY29tZVVzZHQ6IDAsXG4gICAgICAgIGxzOiBbXVxuICAgIH0pXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gub3JkZXIuaW5jb25lTGlzdHYyKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaGFzaGRhdGEgPSBbXVxuICAgICAgICAgICAgICAgIHNldEFsbG51bShyZXMuZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3QuaW5mbyhyZXMubXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1pbmluZ1wiPlxuICAgICAgICA8SGVhZGVyIHRpdGxlPXsn5oiR55qE566X5YqbJ30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pbmctYWxsZGF0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxkYXRhLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludG8tbnVtYmVyXCI+JHthbGxudW0ueWVzdGVyZGF5SW5jb21lVXNkdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludG8tdGV4dFwiPuaYqOaXpeaUtuebijwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbGRhdGEtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50by1udW1iZXJcIj4ke2FsbG51bS50b3RhbEluY29tZVVzZHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRvLXRleHRcIj7ntK/orqHmlLbnm4o8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pbmctYWxsZGF0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxkYXRhLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlZWxlY2ltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1idG5cIj7nlKjnlLXnrqHnkIY8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxkYXRhLWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtoYXNobWFsbGltZ30gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1idG5cIj7nrpflipvllYbln448L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFsbEJnIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIGFsbG51bS5scy5sZW5ndGggPiAwICYmIGFsbG51bS5scy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIYXNoSXRlbSBrZXk9e2luZGV4fSBoYXNoaW5mbz17aXRlbX0gLz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gLz5cbiAgICA8L2Rpdj5cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/containers-m/Mining/index.js\n");

/***/ }),

/***/ "./assets/public/imgs/h5img/other/hashmall.png":
/*!*****************************************************!*\
  !*** ./assets/public/imgs/h5img/other/hashmall.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"hashmall.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvcHVibGljL2ltZ3MvaDVpbWcvb3RoZXIvaGFzaG1hbGwucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3B1YmxpYy9pbWdzL2g1aW1nL290aGVyL2hhc2htYWxsLnBuZz8xNWY0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhc2htYWxsLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/public/imgs/h5img/other/hashmall.png\n");

/***/ }),

/***/ "./assets/public/imgs/h5img/other/pointleft.png":
/*!******************************************************!*\
  !*** ./assets/public/imgs/h5img/other/pointleft.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"pointleft.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvcHVibGljL2ltZ3MvaDVpbWcvb3RoZXIvcG9pbnRsZWZ0LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9wdWJsaWMvaW1ncy9oNWltZy9vdGhlci9wb2ludGxlZnQucG5nP2RlZDEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicG9pbnRsZWZ0LnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/public/imgs/h5img/other/pointleft.png\n");

/***/ }),

/***/ "./assets/public/imgs/h5img/other/useelec.png":
/*!****************************************************!*\
  !*** ./assets/public/imgs/h5img/other/useelec.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"useelec.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvcHVibGljL2ltZ3MvaDVpbWcvb3RoZXIvdXNlZWxlYy5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcHVibGljL2ltZ3MvaDVpbWcvb3RoZXIvdXNlZWxlYy5wbmc/ZDdlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ1c2VlbGVjLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/public/imgs/h5img/other/useelec.png\n");

/***/ })

};;