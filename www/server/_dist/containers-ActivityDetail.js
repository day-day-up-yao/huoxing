require("source-map-support").install();
exports.ids = ["containers-ActivityDetail"];
exports.modules = {

/***/ "./_multiappsharing/components/SocialShare/index.js":
/*!**********************************************************!*\
  !*** ./_multiappsharing/components/SocialShare/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qrcode.react */ \"qrcode.react\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n // Initialize a variables.\n\nvar image = (document.images[0] || 0).src || '';\nvar site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;\nvar title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;\nvar description = getMetaContentByName('description') || getMetaContentByName('Description') || '';\nvar url = location.href;\nvar origin = location.origin;\n\nfunction getMetaContentByName(name) {\n  return (document.getElementsByName(name)[0] || 0).content;\n}\n\nvar Share =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Share, _Component);\n\n  function Share() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Share);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Share).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Share, [{\n    key: \"getDataFormat\",\n    value: function getDataFormat() {\n      var _this = this;\n\n      // const hyphenateRE = /([a-z\\d])([A-Z])/g;\n      return Object.keys(this.props).reduce(function (pre, cur) {\n        pre[cur] = typeof _this.props[cur] === 'string' ? encodeURIComponent(_this.props[cur]) : _this.props[cur];\n        return pre;\n      }, {});\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // const setData = this.getDataFormat();\n      var _this$getDataFormat = this.getDataFormat(),\n          url = _this$getDataFormat.url,\n          sites = _this$getDataFormat.sites,\n          disabled = _this$getDataFormat.disabled,\n          title = _this$getDataFormat.title,\n          image = _this$getDataFormat.image,\n          description = _this$getDataFormat.description,\n          summary = _this$getDataFormat.summary,\n          source = _this$getDataFormat.source,\n          wechatQrcodeSize = _this$getDataFormat.wechatQrcodeSize,\n          wechatQrcodeLevel = _this$getDataFormat.wechatQrcodeLevel,\n          initialized = _this$getDataFormat.initialized;\n\n      var templates = {\n        qzone: \"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=\".concat(url, \"&title=\").concat(title, \"&desc=\").concat(description, \"&summary=\").concat(summary, \"&site=\").concat(source),\n        qq: \"http://connect.qq.com/widget/shareqq/index.html?url=\".concat(url, \"&title=\").concat(title, \"&source=\").concat(source, \"&desc=\").concat(description),\n        tencent: \"http://share.v.t.qq.com/index.php?c=share&a=index&title=\".concat(title, \"&url=\").concat(url, \"&pic=\").concat(image),\n        weibo: \"http://service.weibo.com/share/share.php?url=\".concat(url, \"&title=\").concat(title, \"&pic=\").concat(image),\n        wechat: decodeURIComponent(url),\n        douban: \"http://shuo.douban.com/!service/share?href=\".concat(url, \"&name=\").concat(title, \"&text=\").concat(description, \"&image=\").concat(image, \"&starid=0&aid=0&style=11\"),\n        diandian: \"http://www.diandian.com/share?lo=\".concat(url, \"&ti=\").concat(title, \"&type=link\"),\n        linkedin: \"http://www.linkedin.com/shareArticle?mini=true&ro=true&title=\".concat(title, \"&url=\").concat(url, \"&summary=\").concat(summary, \"&source=\").concat(source, \"&armin=armin\"),\n        facebook: \"https://www.facebook.com/sharer/sharer.php?u=\".concat(url),\n        twitter: \"https://twitter.com/intent/tweet?text=\".concat(title, \"&url=\").concat(url, \"&via=\").concat(origin),\n        google: \"https://plus.google.com/share?url=\".concat(url)\n      };\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"social-share\"\n      }, initialized ? this.props.children : sites.map(function (site) {\n        if (~disabled.indexOf(site)) return;\n\n        if (site !== 'wechat') {\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"a\", {\n            key: site,\n            className: \"social-share-icon icon-\".concat(site),\n            target: \"_blank\",\n            href: templates[site]\n          });\n        } else {\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"a\", {\n            key: site,\n            className: \"social-share-icon icon-\".concat(site),\n            target: \"_blank\"\n          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n            className: \"wechat-qrcode\"\n          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h4\", null, \"\\u5FAE\\u4FE1\\u626B\\u4E00\\u626B\\uFF1A\\u5206\\u4EAB\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            value: templates[site],\n            size: wechatQrcodeSize,\n            level: wechatQrcodeLevel\n          })));\n        }\n      }));\n    }\n  }]);\n\n  return Share;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nShare.defaultProps = {\n  url: url,\n  origin: origin,\n  title: title,\n  description: description,\n  disabled: [],\n  summary: description,\n  image: image,\n  site: site,\n  source: site,\n  initialized: false,\n  sites: ['qzone', 'weibo', 'google', 'twitter', 'qq', 'tencent', 'wechat', 'douban', 'linkedin', 'facebook'],\n  wechatQrcodeSize: 150,\n  wechatQrcodeLevel: 'Q'\n};\nShare.propTypes = {\n  url: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  origin: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  sites: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,\n  wechatQrcodeTitle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  wechatQrcodeHelper: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  initialized: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  wechatQrcodeLevel: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  wechatQrcodeSize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number // getDataFormat() {\n  //   const hyphenateRE = /([a-z\\d])([A-Z])/g;\n  //   return Object.keys(this.props).reduce((pre,cur) => {\n  //     const key = \"data-\"+cur.replace(hyphenateRE, '$1-$2').toLowerCase();\n  //     pre[key] = this.props[cur];\n  //     return pre;\n  //   },{})\n  // }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fbXVsdGlhcHBzaGFyaW5nL2NvbXBvbmVudHMvU29jaWFsU2hhcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fbXVsdGlhcHBzaGFyaW5nL2NvbXBvbmVudHMvU29jaWFsU2hhcmUvaW5kZXguanM/NTAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUVJjb2RlIGZyb20gJ3FyY29kZS5yZWFjdCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG4vLyBJbml0aWFsaXplIGEgdmFyaWFibGVzLlxubGV0IGltYWdlID0gKGRvY3VtZW50LmltYWdlc1swXSB8fCAwKS5zcmMgfHwgJydcbmxldCBzaXRlID0gZ2V0TWV0YUNvbnRlbnRCeU5hbWUoJ3NpdGUnKSB8fCBnZXRNZXRhQ29udGVudEJ5TmFtZSgnU2l0ZScpIHx8IGRvY3VtZW50LnRpdGxlXG5sZXQgdGl0bGUgPSBnZXRNZXRhQ29udGVudEJ5TmFtZSgndGl0bGUnKSB8fCBnZXRNZXRhQ29udGVudEJ5TmFtZSgnVGl0bGUnKSB8fCBkb2N1bWVudC50aXRsZVxubGV0IGRlc2NyaXB0aW9uID0gZ2V0TWV0YUNvbnRlbnRCeU5hbWUoJ2Rlc2NyaXB0aW9uJykgfHwgZ2V0TWV0YUNvbnRlbnRCeU5hbWUoJ0Rlc2NyaXB0aW9uJykgfHwgJydcbmxldCB1cmwgPSBsb2NhdGlvbi5ocmVmXG5sZXQgb3JpZ2luID0gbG9jYXRpb24ub3JpZ2luXG5cbmZ1bmN0aW9uIGdldE1ldGFDb250ZW50QnlOYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIChkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShuYW1lKVswXSB8fCAwKS5jb250ZW50XG59XG5cbmNsYXNzIFNoYXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkaXNhYmxlZDogW10sXG4gICAgICAgIHN1bW1hcnk6IGRlc2NyaXB0aW9uLFxuICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgIHNpdGU6IHNpdGUsXG4gICAgICAgIHNvdXJjZTogc2l0ZSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBzaXRlczogWydxem9uZScsICd3ZWlibycsICdnb29nbGUnLCAndHdpdHRlcicsICdxcScsICd0ZW5jZW50JywgJ3dlY2hhdCcsICdkb3ViYW4nLCAnbGlua2VkaW4nLCAnZmFjZWJvb2snXSxcbiAgICAgICAgd2VjaGF0UXJjb2RlU2l6ZTogMTUwLFxuICAgICAgICB3ZWNoYXRRcmNvZGVMZXZlbDogJ1EnXG4gICAgfVxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNpdGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIHdlY2hhdFFyY29kZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB3ZWNoYXRRcmNvZGVIZWxwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGluaXRpYWxpemVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgd2VjaGF0UXJjb2RlTGV2ZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHdlY2hhdFFyY29kZVNpemU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9XG4gICAgLy8gZ2V0RGF0YUZvcm1hdCgpIHtcbiAgICAvLyAgIGNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2c7XG4gICAgLy8gICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKChwcmUsY3VyKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGtleSA9IFwiZGF0YS1cIitjdXIucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICAvLyAgICAgcHJlW2tleV0gPSB0aGlzLnByb3BzW2N1cl07XG4gICAgLy8gICAgIHJldHVybiBwcmU7XG4gICAgLy8gICB9LHt9KVxuICAgIC8vIH1cbiAgICBnZXREYXRhRm9ybWF0ICgpIHtcbiAgICAgICAgLy8gY29uc3QgaHlwaGVuYXRlUkUgPSAvKFthLXpcXGRdKShbQS1aXSkvZztcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHByZVtjdXJdID0gdHlwZW9mIHRoaXMucHJvcHNbY3VyXSA9PT0gJ3N0cmluZycgPyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm9wc1tjdXJdKSA6IHRoaXMucHJvcHNbY3VyXVxuICAgICAgICAgICAgcmV0dXJuIHByZVxuICAgICAgICB9LCB7fSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICAvLyBjb25zdCBzZXREYXRhID0gdGhpcy5nZXREYXRhRm9ybWF0KCk7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBzaXRlcywgZGlzYWJsZWQsIHRpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24sIHN1bW1hcnksIHNvdXJjZSwgd2VjaGF0UXJjb2RlU2l6ZSwgd2VjaGF0UXJjb2RlTGV2ZWwsIGluaXRpYWxpemVkIH0gPSB0aGlzLmdldERhdGFGb3JtYXQoKVxuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IHtcbiAgICAgICAgICAgIHF6b25lOiBgaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT91cmw9JHt1cmx9JnRpdGxlPSR7dGl0bGV9JmRlc2M9JHtkZXNjcmlwdGlvbn0mc3VtbWFyeT0ke3N1bW1hcnl9JnNpdGU9JHtzb3VyY2V9YCxcbiAgICAgICAgICAgIHFxOiBgaHR0cDovL2Nvbm5lY3QucXEuY29tL3dpZGdldC9zaGFyZXFxL2luZGV4Lmh0bWw/dXJsPSR7dXJsfSZ0aXRsZT0ke3RpdGxlfSZzb3VyY2U9JHtzb3VyY2V9JmRlc2M9JHtkZXNjcmlwdGlvbn1gLFxuICAgICAgICAgICAgdGVuY2VudDogYGh0dHA6Ly9zaGFyZS52LnQucXEuY29tL2luZGV4LnBocD9jPXNoYXJlJmE9aW5kZXgmdGl0bGU9JHt0aXRsZX0mdXJsPSR7dXJsfSZwaWM9JHtpbWFnZX1gLFxuICAgICAgICAgICAgd2VpYm86IGBodHRwOi8vc2VydmljZS53ZWliby5jb20vc2hhcmUvc2hhcmUucGhwP3VybD0ke3VybH0mdGl0bGU9JHt0aXRsZX0mcGljPSR7aW1hZ2V9YCxcbiAgICAgICAgICAgIHdlY2hhdDogZGVjb2RlVVJJQ29tcG9uZW50KHVybCksXG4gICAgICAgICAgICBkb3ViYW46IGBodHRwOi8vc2h1by5kb3ViYW4uY29tLyFzZXJ2aWNlL3NoYXJlP2hyZWY9JHt1cmx9Jm5hbWU9JHt0aXRsZX0mdGV4dD0ke2Rlc2NyaXB0aW9ufSZpbWFnZT0ke2ltYWdlfSZzdGFyaWQ9MCZhaWQ9MCZzdHlsZT0xMWAsXG4gICAgICAgICAgICBkaWFuZGlhbjogYGh0dHA6Ly93d3cuZGlhbmRpYW4uY29tL3NoYXJlP2xvPSR7dXJsfSZ0aT0ke3RpdGxlfSZ0eXBlPWxpbmtgLFxuICAgICAgICAgICAgbGlua2VkaW46IGBodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnJvPXRydWUmdGl0bGU9JHt0aXRsZX0mdXJsPSR7dXJsfSZzdW1tYXJ5PSR7c3VtbWFyeX0mc291cmNlPSR7c291cmNlfSZhcm1pbj1hcm1pbmAsXG4gICAgICAgICAgICBmYWNlYm9vazogYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgICAgICAgICB0d2l0dGVyOiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3RpdGxlfSZ1cmw9JHt1cmx9JnZpYT0ke29yaWdpbn1gLFxuICAgICAgICAgICAgZ29vZ2xlOiBgaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPSR7dXJsfWBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtc2hhcmVcIj5cbiAgICAgICAgICAgIHtpbml0aWFsaXplZCA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiBzaXRlcy5tYXAoKHNpdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAofmRpc2FibGVkLmluZGV4T2Yoc2l0ZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIGlmIChzaXRlICE9PSAnd2VjaGF0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEga2V5PXtzaXRlfSBjbGFzc05hbWU9e2Bzb2NpYWwtc2hhcmUtaWNvbiBpY29uLSR7c2l0ZX1gfSB0YXJnZXQ9J19ibGFuaycgaHJlZj17dGVtcGxhdGVzW3NpdGVdfT48L2E+XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGtleT17c2l0ZX0gY2xhc3NOYW1lPXtgc29jaWFsLXNoYXJlLWljb24gaWNvbi0ke3NpdGV9YH0gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWNoYXQtcXJjb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PuW+ruS/oeaJq+S4gOaJq++8muWIhuS6qzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFFSY29kZSB2YWx1ZT17dGVtcGxhdGVzW3NpdGVdfSBzaXplPXt3ZWNoYXRRcmNvZGVTaXplfSBsZXZlbD17d2VjaGF0UXJjb2RlTGV2ZWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBOzs7O0FBL0VBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUFrRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_multiappsharing/components/SocialShare/index.js\n");

/***/ }),

/***/ "./assets/containers/ActivityDetail/BottomInfo/index.js":
/*!**************************************************************!*\
  !*** ./assets/containers/ActivityDetail/BottomInfo/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var synopsis = props.synopsis,\n      content = props.content;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"activity-detail-bottom-info\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"activity-detail-bottom-info-box\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"feature\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null), \"\\u6D3B\\u52A8\\u7279\\u8272\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"feature-cont\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, synopsis))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"activity-cont simditor\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null), \"\\u6D3B\\u52A8\\u5185\\u5BB9\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"activity-text simditor-body\",\n    dangerouslySetInnerHTML: {\n      __html: content\n    }\n  }))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGFpbmVycy9BY3Rpdml0eURldGFpbC9Cb3R0b21JbmZvL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRhaW5lcnMvQWN0aXZpdHlEZXRhaWwvQm90dG9tSW5mby9pbmRleC5qcz9lMjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc3lub3BzaXMsXG4gICAgICAgIGNvbnRlbnRcbiAgICB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktZGV0YWlsLWJvdHRvbS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWRldGFpbC1ib3R0b20taW5mby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PjxzcGFuPjwvc3Bhbj7mtLvliqjnibnoibI8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N5bm9wc2lzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1jb250IHNpbWRpdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNj48c3Bhbj48L3NwYW4+5rS75Yqo5YaF5a65PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS10ZXh0IHNpbWRpdG9yLWJvZHlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/containers/ActivityDetail/BottomInfo/index.js\n");

/***/ }),

/***/ "./assets/containers/ActivityDetail/TopInfo/index.js":
/*!***********************************************************!*\
  !*** ./assets/containers/ActivityDetail/TopInfo/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_multiappsharing/public */ \"./_multiappsharing/public/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var title = props.title,\n      coverPic = props.coverPic,\n      sponsor = props.sponsor,\n      numPeople = props.numPeople,\n      connection = props.connection,\n      detailPlace = props.detailPlace,\n      startTime = props.startTime,\n      endTime = props.endTime,\n      fee = props.fee,\n      url = props.url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      shareCon = _useState2[0],\n      setShareCon = _useState2[1]; // 由于使用window，且需要在didMount中生成。直接生成会出现client的div和server的div不匹配错误\n  // 生成分享按钮事件\n\n\n  var shareGenerate = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    var SocialShare = __webpack_require__(/*! ./_multiappsharing/components/SocialShare */ \"./_multiappsharing/components/SocialShare/index.js\")[\"default\"];\n\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialShare, {\n      url: window.location.href,\n      title: title,\n      sites: ['qq', 'weibo', 'wechat']\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setShareCon(shareGenerate());\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"activity-detail-top-info\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"activity-detail-top-info-wrap\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"activity-img\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: coverPic !== '' ? JSON.parse(coverPic).pc : '',\n    title: \"\",\n    alt: \"\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"activity-right\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"activity-message\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"message-left\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"sponsor\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"\\u4E3B\\u529E\\u65B9\\uFF1A\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, sponsor)), numPeople && numPeople !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"person-num\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"\\u6D3B\\u52A8\\u4EBA\\u6570\\uFF1A\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"\".concat(numPeople, \"\\u4EBA\"))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"contact\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"\\u8054\\u7CFB\\u65B9\\u5F0F\\uFF1A\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, connection))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"message-right\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"site\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"\\u6D3B\\u52A8\\u5730\\u70B9\\uFF1A\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, detailPlace)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"time\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"\\u6D3B\\u52A8\\u65F6\\u95F4\\uFF1A\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, parseInt(endTime) - parseInt(startTime) < 86400000 ? Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[\"formatTime\"])(startTime, 'yy年MM月dd日') : \"\".concat(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[\"formatTime\"])(startTime, 'yy年MM月dd日'), \"-\").concat(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[\"formatTime\"])(endTime, 'yy年MM月dd日')))), fee !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"money\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"\\u8D39\\u7528\\uFF1A\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, fee)) : null), url !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    className: \"activityBtn\",\n    href: url,\n    title: \"\\u7ACB\\u5373\\u53C2\\u4E0E\",\n    target: \"_blank\"\n  }, \"\\u7ACB\\u5373\\u53C2\\u4E0E\") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"notActivityBtn\",\n    title: \"\\u7ACB\\u5373\\u53C2\\u4E0E\"\n  }, \"\\u7ACB\\u5373\\u53C2\\u4E0E\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"shareBox\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"font\", null, \"\\u5206\\u4EAB\"), typeof window !== 'undefined' && shareCon)))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGFpbmVycy9BY3Rpdml0eURldGFpbC9Ub3BJbmZvL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRhaW5lcnMvQWN0aXZpdHlEZXRhaWwvVG9wSW5mby9pbmRleC5qcz81NTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICdtdWx0aVB1YmxpYydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgY292ZXJQaWMsXG4gICAgICAgIHNwb25zb3IsXG4gICAgICAgIG51bVBlb3BsZSxcbiAgICAgICAgY29ubmVjdGlvbixcbiAgICAgICAgZGV0YWlsUGxhY2UsXG4gICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgZW5kVGltZSxcbiAgICAgICAgZmVlLFxuICAgICAgICB1cmxcbiAgICB9ID0gcHJvcHNcbiAgICBjb25zdCBbc2hhcmVDb24sIHNldFNoYXJlQ29uXSA9IHVzZVN0YXRlKCcnKSAvLyDnlLHkuo7kvb/nlKh3aW5kb3fvvIzkuJTpnIDopoHlnKhkaWRNb3VudOS4reeUn+aIkOOAguebtOaOpeeUn+aIkOS8muWHuueOsGNsaWVudOeahGRpduWSjHNlcnZlcueahGRpduS4jeWMuemFjemUmeivr1xuXG4gICAgLy8g55Sf5oiQ5YiG5Lqr5oyJ6ZKu5LqL5Lu2XG4gICAgY29uc3Qgc2hhcmVHZW5lcmF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgU29jaWFsU2hhcmUgPSByZXF1aXJlKCdtdWx0aUNvbXBzL1NvY2lhbFNoYXJlJykuZGVmYXVsdFxuICAgICAgICByZXR1cm4gPFNvY2lhbFNoYXJlXG4gICAgICAgICAgICB1cmw9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgc2l0ZXM9e1sncXEnLCAnd2VpYm8nLCAnd2VjaGF0J119XG4gICAgICAgIC8+XG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTaGFyZUNvbihzaGFyZUdlbmVyYXRlKCkpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWRldGFpbC10b3AtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1kZXRhaWwtdG9wLWluZm8td3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb3ZlclBpYyAhPT0gJycgPyBKU09OLnBhcnNlKGNvdmVyUGljKS5wYyA6ICcnfSB0aXRsZT1cIlwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcG9uc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuS4u+WKnuaWue+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Nwb25zb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtudW1QZW9wbGUgJiYgbnVtUGVvcGxlICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwZXJzb24tbnVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7mtLvliqjkurrmlbDvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7bnVtUGVvcGxlfeS6umB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7ogZTns7vmlrnlvI/vvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb25uZWN0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPua0u+WKqOWcsOeCue+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbFBsYWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj48c3Bhbj7mtLvliqjml7bpl7TvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KGVuZFRpbWUpIC0gcGFyc2VJbnQoc3RhcnRUaW1lKSA8IDg2NDAwMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRUaW1lKHN0YXJ0VGltZSwgJ3l55bm0TU3mnIhkZOaXpScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtmb3JtYXRUaW1lKHN0YXJ0VGltZSwgJ3l55bm0TU3mnIhkZOaXpScpfS0ke2Zvcm1hdFRpbWUoZW5kVGltZSwgJ3l55bm0TU3mnIhkZOaXpScpfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWUgIT09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJtb25leVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+6LS555So77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2ZlZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cmwgIT09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8YSBjbGFzc05hbWU9XCJhY3Rpdml0eUJ0blwiIGhyZWY9e3VybH0gdGl0bGU9XCLnq4vljbPlj4LkuI5cIiB0YXJnZXQ9XCJfYmxhbmtcIj7nq4vljbPlj4LkuI48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cIm5vdEFjdGl2aXR5QnRuXCIgdGl0bGU9XCLnq4vljbPlj4LkuI5cIj7nq4vljbPlj4LkuI48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaGFyZUJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250PuWIhuS6qzwvZm9udD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgc2hhcmVDb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFTQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFTQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/containers/ActivityDetail/TopInfo/index.js\n");

/***/ }),

/***/ "./assets/containers/ActivityDetail/index.js":
/*!***************************************************!*\
  !*** ./assets/containers/ActivityDetail/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./node_modules/node-noop/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopInfo */ \"./assets/containers/ActivityDetail/TopInfo/index.js\");\n/* harmony import */ var _BottomInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomInfo */ \"./assets/containers/ActivityDetail/BottomInfo/index.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      activityInfoData: state.activity.activityInfoData\n    };\n  }, react_redux__WEBPACK_IMPORTED_MODULE_1__[\"shallowEqual\"]),\n      activityInfoData = _useSelector.activityInfoData;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"activity-detail-page\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], activityInfoData), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BottomInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], activityInfoData));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGFpbmVycy9BY3Rpdml0eURldGFpbC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250YWluZXJzL0FjdGl2aXR5RGV0YWlsL2luZGV4LmpzPzg2YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHNoYWxsb3dFcXVhbCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuaW1wb3J0IFRvcEluZm8gZnJvbSAnLi9Ub3BJbmZvJ1xuaW1wb3J0IEJvdHRvbUluZm8gZnJvbSAnLi9Cb3R0b21JbmZvJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpdml0eUluZm9EYXRhIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+ICh7XG4gICAgICAgIGFjdGl2aXR5SW5mb0RhdGE6IHN0YXRlLmFjdGl2aXR5LmFjdGl2aXR5SW5mb0RhdGFcbiAgICB9KSwgc2hhbGxvd0VxdWFsKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1kZXRhaWwtcGFnZVwiPlxuICAgICAgICAgICAgPFRvcEluZm8gey4uLmFjdGl2aXR5SW5mb0RhdGF9IC8+XG4gICAgICAgICAgICA8Qm90dG9tSW5mbyB7Li4uYWN0aXZpdHlJbmZvRGF0YX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/containers/ActivityDetail/index.js\n");

/***/ })

};;