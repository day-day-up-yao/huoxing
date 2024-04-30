require("source-map-support").install();
exports.ids = ["containers-Privacy"];
exports.modules = {

/***/ "./assets/components/Privacys/index.js":
/*!*********************************************!*\
  !*** ./assets/components/Privacys/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Public_Agreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Public/Agreement */ \"./assets/components/Public/Agreement/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Public_Agreement__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    num: 7\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29tcG9uZW50cy9Qcml2YWN5cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1ByaXZhY3lzL2luZGV4LmpzPzMzODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFncmVlbWVudCBmcm9tICcuLi9QdWJsaWMvQWdyZWVtZW50J1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8QWdyZWVtZW50IG51bT17N30vPlxuICAgIDwvZGl2PlxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/components/Privacys/index.js\n");

/***/ }),

/***/ "./assets/components/Public/Agreement/index.js":
/*!*****************************************************!*\
  !*** ./assets/components/Public/Agreement/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Toast */ \"./assets/components/Toast/index.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var num = props.num;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      info = _useState2[0],\n      setInfo = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    dispatch[\"public\"].userAgreement({\n      type: num\n    }).then(function (res) {\n      if (res.code === 0) {\n        setInfo(res.data.content);\n      } else {\n        _Toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(res.msg);\n      }\n    });\n  }, [num]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"product-agreement\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"agreement-center\"\n  }, info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: info.replace(/\\n/g, '</br>')\n    }\n  })));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29tcG9uZW50cy9QdWJsaWMvQWdyZWVtZW50L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHVibGljL0FncmVlbWVudC9pbmRleC5qcz84NmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uL1RvYXN0J1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG51bSB9ID0gcHJvcHNcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZSgpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gucHVibGljLnVzZXJBZ3JlZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogbnVtXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0SW5mbyhyZXMuZGF0YS5jb250ZW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5pbmZvKHJlcy5tc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW251bV0pXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hZ3JlZW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnQtY2VudGVyXCI+XG4gICAgICAgICAgICB7aW5mbyAmJiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaW5mby5yZXBsYWNlKC9cXG4vZywgJzwvYnI+JykgfX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/components/Public/Agreement/index.js\n");

/***/ }),

/***/ "./assets/containers/Privacy/index.js":
/*!********************************************!*\
  !*** ./assets/containers/Privacy/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Privacys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Privacys */ \"./assets/components/Privacys/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Privacys__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGFpbmVycy9Qcml2YWN5L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRhaW5lcnMvUHJpdmFjeS9pbmRleC5qcz8zMDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByaXZhY3kgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcml2YWN5cydcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPFByaXZhY3kvPlxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/containers/Privacy/index.js\n");

/***/ })

};;