require("source-map-support").install();
exports.ids = [35];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('jobList1'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      nowType = _useState2[0],
      setNowType = _useState2[1]; // 当前选中标签


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* windowScroll */ "L"])(function () {
      var JobTabTop = Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* rem */ "D"])(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* elementOffset */ "g"])(document.getElementById('fixedTop')).top);
      var windowH = Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* rem */ "D"])(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* scrollOffset */ "E"])().top + 80);
      var reg = new RegExp('rem', 'g');
      JobTabTop = JobTabTop.replace(reg, '');
      windowH = windowH.replace(reg, '');

      if (Number(windowH) > Number(JobTabTop)) {
        document.getElementById('jobTab').classList.add('fixed');
        addClassActive();
      } else if (Number(windowH) < Number(JobTabTop)) {
        document.getElementById('jobTab').classList.remove('fixed');
      }
    });
  }, []);
  var addClassActive = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var windowH = Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* rem */ "D"])(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* scrollOffset */ "E"])().top + 80);
    var reg = new RegExp('rem', 'g');
    windowH = windowH.replace(reg, '');

    for (var i = 1; i <= 5; i++) {
      var list = Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* rem */ "D"])(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* elementOffset */ "g"])(document.getElementById("jobList".concat(i))).top - 160);
      list = list.replace(reg, '');

      if (Number(windowH) > Number(list)) {
        setNowType("jobList".concat(i));
      }
    }
  }, []); // 点击标签按钮事件

  var onBtnTypeClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (type) {
    setNowType(type);
    var refNowJobList = document.getElementById(type);
    window.scrollTo({
      top: Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* elementOffset */ "g"])(refNowJobList).top - 100
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "m-job-page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-banner"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-layout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-cont"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u5728MarsBit\uFF0C\u6211\u4EEC\u4E13\u6CE8\u4E8E\u505A\u597D\u4EE5\u4E0B2\u4E2A\u4EA7\u54C1\u53CA\u4E1A\u52A1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1. MarsBit\uFF1A\u4E13\u6CE8\u533A\u5757\u94FE\u4E0E\u6570\u5B57\u7ECF\u6D4E\uFF0C\u8BE6\u60C5\u8BF7\u5173\u6CE8", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.huoxing24.com/"
  }, "https://www.huoxing24.com/"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2. MarsBit\u4E91\u77FF\uFF1A\u4E00\u7AD9\u5F0F\u5B9E\u4F53\u77FF\u673A\u7B97\u529B\u670D\u52A1\u5E73\u53F0\uFF0C\u8BE6\u60C5\u8BF7\u5173\u6CE8", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.mclouds.io/"
  }, "https://www.mclouds.io/"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u516C\u53F8\u5177\u6709\u79EF\u6781\u5411\u4E0A\u7684\u56E2\u961F\u7CBE\u795E\u548C\u5DE5\u4F5C\u6C1B\u56F4\uFF0C\u5728\u6211\u4EEC\u4E8B\u4E1A\u8FC5\u901F\u53D1\u5C55\u7684\u4ECA\u5929\uFF0C\u8BDA\u9080\u90A3\u4E9B\u575A\u6301\u8FDB\u53D6\u3001\u5F00\u653E\u5FC3\u6001\u3001\u521B\u65B0\u610F\u8BC6\u3001\u8BDA\u4FE1\u6B63\u76F4\u7684\u6709\u5FD7\u4E4B\u58EB\u52A0\u76DF\uFF0C\u516C\u53F8\u5C06\u63D0\u4F9B\u65BD\u5C55\u624D\u534E\u7684\u5E7F\u9614\u53D1\u5C55\u7A7A\u95F4\u548C\u4E0E\u4E4B\u76F8\u79F0\u7684\u4F18\u539A\u5F85\u9047\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u4E94\u9669\u4E00\u91D1\u3001\u5546\u4E1A\u4FDD\u9669\u3001\u9910\u8865\u3001\u901A\u8BAF\u8865\u8D34\u3001\u56E2\u5EFA\u3001\u8282\u5047\u65E5\u793C\u54C1\u3001\u5343\u5E73\u7C73\u8D85\u5927\u529E\u516C\u5BA4\uFF0C\u53E6\u5916\uFF0C\u4F60\u5C06\u83B7\u5F97\u65E0\u4E0E\u4F26\u6BD4\u7684\u6DF1\u5165\u533A\u5757\u94FE\u884C\u4E1A\u7684\u53D1\u5C55\u673A\u4F1A\uFF0C\u66F4\u591A\u798F\u5229\u7B49\u4F60\u6765\u53D1\u6398\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "fixedTop"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-tab",
    id: "jobTab"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "p1 ".concat(nowType === 'jobList1' ? 'active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick('jobList1');
    }
  }, "\u4EA7\u54C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "p2 ".concat(nowType === 'jobList2' ? 'active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick('jobList2');
    }
  }, "\u8BBE\u8BA1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "p3 ".concat(nowType === 'jobList3' ? 'active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick('jobList3');
    }
  }, "\u7814\u53D1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "p4 ".concat(nowType === 'jobList4' ? 'active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick('jobList4');
    }
  }, "\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "p5 ".concat(nowType === 'jobList5' ? 'active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick('jobList5');
    }
  }, "\u8FD0\u8425")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list-cont"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list",
    id: "jobList1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "DeFi\u4EA7\u54C1\u7ECF\u7406"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0E\u533A\u5757\u94FEDeFi\u7B49\u91D1\u878D\u4EA7\u54C1\u8BBE\u8BA1\u548C\u521B\u65B0\uFF0C\u63A8\u52A8\u4EA7\u54C1\u5F00\u53D1\u548C\u8FED\u4EE3\u5347\u7EA7", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u64B0\u5199\u4EA7\u54C1\u6587\u6863\uFF0C\u5BF9\u4EA7\u54C1\u9700\u6C42\u3001\u4EA7\u54C1\u529F\u80FD\u3001\u4EA4\u4E92\u8BBE\u8BA1\u7B49\u73AF\u8282\u8FDB\u884C\u628A\u5173", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u719F\u6089\u4EE5\u592A\u574AAave/Compound/Synthetix/UniSwap\u7B49\u4E3B\u6D41DeFi\u4EA7\u54C1", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4\u3001\u5177\u5907\u719F\u7EC3\u7684\u82F1\u6587\u53E3\u8BED\u548C\u9605\u8BFB\u80FD\u529B\uFF0C\u53EF\u4F5C\u4E3A\u5DE5\u4F5C\u8BED\u8A00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list",
    id: "jobList2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u9AD8\u7EA7\u89C6\u89C9\u8BBE\u8BA1\u5E08"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0E\u4E1A\u52A1\u7EBF\u89C6\u89C9\u8BBE\u8BA1\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7EBF\u4E0A\u6D77\u62A5\u3001\u957F\u56FE\u3001banner\u3001\u7EBF\u4E0B\u7269\u6599", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u65B0\u4EA7\u54C1\u521B\u610F\u6784\u601D\u548C\u8BBE\u8BA1\u5DE5\u4F5C\uFF0C\u4ECE\u4E13\u4E1A\u89D2\u5EA6\u7ED9\u4E88\u4E1A\u52A1\u90E8\u95E8\u6307\u5BFC\u5EFA\u8BAE", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u4E09\u5E74\u4EE5\u4E0A\u89C6\u89C9\u8BBE\u8BA1\u7ECF\u9A8C\uFF0C\u6709\u533A\u5757\u94FE/\u4E92\u8054\u7F51/4A\u5E7F\u544A\u516C\u53F8\u5DE5\u4F5C\u7ECF\u9A8C\u8005\u4F18\u5148")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list",
    id: "jobList3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "DeFi\u667A\u80FD\u5408\u7EA6\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u5C97\u4F4D\u804C\u8D23\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0E\u57FA\u4E8E\u533A\u5757\u94FE\u6280\u672F\u7684DeFi\u4EA7\u54C1\u7684\u8BBE\u8BA1\uFF0C\u5F00\u53D1\u548C\u5B9E\u73B0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u8DDF\u8E2A\u7814\u7A76DeFi\u4EA7\u54C1\u524D\u6CBF\u6280\u672F\uFF0C\u4FC3\u8FDB\u516C\u53F8\u4EA7\u54C1\u6280\u672F\u7684\u521B\u65B0\u548C\u53D1\u5C55", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u5177\u59071\u5E74\u4EE5\u4E0ADeFi\u4EA7\u54C1\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u67090-1\u4EA7\u54C1\u5F00\u62D3\u7ECF\u9A8C\u8005\u4F18\u5148", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4\u3001\u5177\u5907\u719F\u7EC3\u7684\u82F1\u6587\u53E3\u8BED\u548C\u9605\u8BFB\u80FD\u529B\uFF0C\u53EF\u4F5C\u4E3A\u5DE5\u4F5C\u8BED\u8A00"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u4EFB\u804C\u8981\u6C42\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u672C\u79D1\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F\u3001\u8F6F\u4EF6\u5DE5\u7A0B\u3001\u6570\u5B66\u3001\u79D1\u6280\u91D1\u878D\u4E13\u4E1A\u4F18\u5148", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u4E86\u89E3Solidity\u5F00\u53D1\u548C\u4F18\u5316\uFF0C\u719F\u6089Truffle \u3001Remix\u7B49\u5F00\u53D1\u5DE5\u5177\u3001\u719F\u6089OpenZeppelin\u7B49\u4E09\u65B9\u5B89\u5168\u5408\u7EA6\u5E93", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u5BF9\u533A\u5757\u94FE\u4EA7\u54C1\u6709\u5F3A\u70C8\u8BA4\u540C\u611F\uFF0C\u5177\u5907\u6280\u672F\u94BB\u7814\u7CBE\u795E")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u9AD8\u7EA7Java\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0E\u8D44\u8BAF\u3001\u884C\u60C5\u3001\u6570\u636E\u7B49\u4E1A\u52A1\u6A21\u5757\u5F00\u53D1", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u8BBE\u8BA1\u9AD8\u53EF\u7528\u5FAE\u670D\u52A1\u540E\u53F0\u6846\u67B6", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u5177\u5907\u719F\u7EC3\u4F7F\u7528\u4E3B\u6D41\u5F00\u6E90\u6846\u67B6\uFF0C\u719F\u6089\u591A\u7EBF\u7A0B\u3001\u9AD8\u6027\u80FD\u8BBE\u8BA1\u7F16\u7801\u53CA\u6027\u80FD\u8C03\u4F18\u80FD\u529B")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "Web\u5F00\u53D1\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0EWeb\u524D\u7AEF\u754C\u9762\u3001\u524D\u7AEF\u4E0E\u4E1A\u52A1\u5C42\u4EA4\u4E92\u5F00\u53D1\u548C\u7EF4\u62A4", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u6301\u7EED\u4F18\u5316\u524D\u7AEF\u4F53\u9A8C\u548C\u9875\u9762\u54CD\u5E94\u901F\u5EA6\uFF0C\u786E\u4FDD\u4EA7\u54C1\u4F18\u8D28\u7528\u6237\u4F53\u9A8C\u548C\u9AD8\u6027\u80FD", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u719F\u7EC3\u4F7F\u7528Vue\u3001React\u3001Webpack\u3001ES6\u3001Antd\u8FDB\u884C\u5F00\u53D1", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list",
    id: "jobList4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u7F16\u8F91"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0E\u7F51\u7AD9/APP\u7684\u680F\u76EE\u4E13\u9898\u7B56\u5212\u548C\u8FD0\u8425", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u533A\u5757\u94FE\u53CA\u52A0\u5BC6\u6570\u5B57\u8D44\u4EA7\u3001\u77FF\u4E1A\u70ED\u70B9\u9886\u57DF\u7684\u6D88\u606F\u6574\u5408\u53CA\u884C\u4E1A\u65E5\u5E38\u65B0\u95FB\u8DDF\u8FDB", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u80FD\u72EC\u7ACB\u627F\u62C5\u5185\u5BB9\u91C7\u96C6\u3001\u7EC4\u7A3F\u3001\u5199\u7A3F\u3001\u7F16\u8F91\u7B49\u5DE5\u4F5C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u5185\u5BB9\u8FD0\u8425"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u5C97\u4F4D\u804C\u8D23\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0E\u516C\u53F8\u65B0\u5A92\u4F53\u77E9\u9635\u5E73\u53F0\u539F\u521B\u6587\u7AE0\u64B0\u5199\u3001\u7F16\u8F91\u548C\u63A8\u9001\uFF0C\u4EE5\u63D0\u5347\u516C\u53F8\u54C1\u724C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u8D1F\u8D23\u65B0\u5A92\u4F53\u77E9\u9635\u7684\u8FD0\u8425\u7BA1\u7406\uFF0C\u4E0D\u65AD\u4F18\u5316\u8FD0\u8425\u624B\u6CD5\uFF0C\u63D0\u9AD8\u65B0\u5A92\u4F53\u5E73\u53F0\u5173\u6CE8\u5EA6\u548C\u7528\u6237\u8F6C\u5316\u7387", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u652F\u6301MarsBit\u76F4\u64AD\u680F\u76EE\u7684\u65E5\u5E38\u8FD0\u8425"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u4EFB\u804C\u8981\u6C42\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u672C\u79D1\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u79D1\u6280\u91D1\u878D\u3001\u7ECF\u6D4E\u5B66\u3001\u4E2D\u6587\u3001\u65B0\u95FB\u7B49\u4E13\u4E1A\u4F18\u5148", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u80FD\u591F\u72EC\u7ACB\u627F\u62C5\u5185\u5BB9\u91C7\u96C6\u3001\u7EC4\u7A3F\u3001\u5199\u7A3F\u3001\u7F16\u8F91\u7B49\u5DE5\u4F5C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u5F3A\u81EA\u9A71\u529B\u548C\u6297\u538B\u6027\uFF0C\u70ED\u7231\u6587\u5B57\u5DE5\u4F5C\uFF0C\u5BF9\u533A\u5757\u94FE\u884C\u4E1A\u6709\u70ED\u60C5")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u9AD8\u7EA7\u5185\u5BB9\u8FD0\u8425"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u5C97\u4F4D\u804C\u8D23\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u8D1F\u8D23\u77FF\u4E1A\u70ED\u70B9\u8981\u95FB\u7684\u91C7\u8BBF\u548C\u5199\u4F5C\uFF0C\u7B56\u5212\u9009\u9898\uFF0C\u4EA7\u51FA\u6DF1\u5EA6\u4E14\u6709\u884C\u4E1A\u4EE3\u8868\u6027\u6587\u7AE0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u53C2\u4E0E\u77FF\u4E1A\u77E5\u8BC6\u767E\u79D1\u680F\u76EE\u7684\u5EFA\u7ACB\u548C\u5185\u5BB9\u8FD0\u8425", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u6DF1\u5165\u4EA7\u4E1A\uFF0C\u4ECE\u4E1A\u52A1\u89D2\u5EA6\u51FA\u53D1\u63D0\u5347\u516C\u53F8\u4EA7\u54C1\u7684\u5185\u5BB9\u5F71\u54CD\u529B\u548C\u54C1\u724C\u5EFA\u8BBE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u4EFB\u804C\u8981\u6C42\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u672C\u79D1\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u79D1\u6280\u91D1\u878D\u3001\u7ECF\u6D4E\u5B66\u3001\u4E2D\u6587\u3001\u65B0\u95FB\u7B49\u4E13\u4E1A\u4F18\u5148", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u81F3\u5C112\u5E74\u4EE5\u4E0A\u533A\u5757\u94FE\u884C\u4E1A\u5185\u5BB9\u521B\u4F5C\u7ECF\u9A8C\uFF0C\u66FE\u72EC\u7ACB\u516C\u5F00\u53D1\u8868\u8FC7\u4EE3\u8868\u6027\u884C\u4E1A\u6587\u7AE0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u5F3A\u81EA\u9A71\u529B\u548C\u6297\u538B\u6027\uFF0C\u70ED\u7231\u6587\u5B57\u5DE5\u4F5C\uFF0C\u8BA4\u53EF\u533A\u5757\u94FE\u884C\u4E1A\u3002")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list",
    id: "jobList5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u7528\u6237\u589E\u957F\u7ECF\u7406"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u5C97\u4F4D\u804C\u8D23\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u53C2\u4E0EMarsBit\u65D7\u4E0B\u4EA7\u54C1\u7684\u7528\u6237\u589E\u957F\uFF0C\u5305\u62EC\u65B0\u589E\u3001\u7559\u5B58\u3001\u8F6C\u5316", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u5584\u4E8E\u6570\u636E\u9A71\u52A8\u53CA\u8FD0\u8425\u6D3B\u52A8\u65B9\u6848\u7B56\u5212\uFF0C\u63D0\u5347\u7528\u6237\u8F6C\u5316\u6548\u679C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u6709\u533A\u5757\u94FE\u884C\u4E1A\u3001\u91D1\u878D\u3001\u793E\u533A\u3001\u5A92\u4F53\u4EA7\u54C1\u9886\u57DF\u5DE5\u4F5C\u7ECF\u9A8C\u8005\u4F18\u5148", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u5177\u5907\u719F\u7EC3\u7684\u82F1\u6587\u53E3\u8BED\u548C\u9605\u8BFB\u80FD\u529B\uFF0C\u53EF\u4F5C\u4E3A\u5DE5\u4F5C\u8BED\u8A00"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "\u4EFB\u804C\u8981\u6C42\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u672C\u79D1\u53CA\u4EE5\u4E0A\u5B66\u5386\uFF0C\u79D1\u6280\u91D1\u878D\u3001\u7ECF\u6D4E\u5B66\u3001\u4E2D\u6587\u3001\u65B0\u95FB\u7B49\u4E13\u4E1A\u4F18\u5148", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u4E09\u5E74\u4EE5\u4E0A\u4E92\u8054\u7F51\u4EA7\u54C1\u8FD0\u8425\u7ECF\u9A8C\uFF0C\u6709\u533A\u5757\u94FE\u884C\u4E1A\u3001\u793E\u533A\u3001\u5A92\u4F53\u3001\u91D1\u878D\u4EA7\u54C1\u9886\u57DF\u5DE5\u4F5C\u7ECF\u9A8C\u8005\u4F18\u5148z", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001\u4F18\u79C0\u7684\u6570\u636E\u5206\u6790\u80FD\u529B\uFF0C\u6570\u636E\u9A71\u52A8", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4\u3001\u6709\u6781\u5F3A\u7684\u597D\u5947\u5FC3\u548C\u63A2\u7D22\u6B32\uFF0C\u4F18\u79C0\u7684\u8DE8\u90E8\u95E8\u6C9F\u901A\u80FD\u529B")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "\u76F4\u64AD\u8FD0\u8425"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1\u3001\u8D1F\u8D23\u76F4\u64AD\u5E73\u53F0\u5185\u5BB9\u7B56\u5212\uFF0C\u4FDD\u8BC1\u76F4\u64AD\u6548\u679C\u843D\u5730\u53CA\u5185\u5BB9\u63D0\u5347", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2\u3001\u94FE\u63A5\u4E1A\u754CKOL\uFF0C\u8D1F\u8D23\u5609\u5BBE\u9080\u8BF7\uFF0C\u5177\u5907\u4E00\u5B9A\u4E3B\u6301\u80FD\u529B ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3\u3001 \u4E00\u5E74\u4EE5\u4E0A\u76F4\u64AD\u5E73\u53F0\u8FD0\u8425\u7ECF\u9A8C\uFF0C\u5BF9\u533A\u5757\u94FE\u884C\u4E1A\u6709\u57FA\u672C\u8BA4\u77E5 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4\u3001\u5177\u5907\u719F\u7EC3\u7684\u82F1\u6587\u53E3\u8BED\u548C\u9605\u8BFB\u80FD\u529B\uFF0C\u53EF\u4F5C\u4E3A\u5DE5\u4F5C\u8BED\u8A00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "job-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u6211\u4EEC\u80FD\u63D0\u4F9B\uFF1A", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "1. MarsBit\u53D1\u8D77\u4EBA\u738B\u5CF0\u76F4\u63A5\u9886\u5BFC\uFF0C\u6709\u673A\u4F1A\u548C\u533A\u5757\u94FE\u3001\u4E92\u8054\u7F51\u4E00\u7EBF\u5927\u4F6C\u4E92\u52A0\u5FAE\u4FE1\u597D\u53CB\uFF0C\u66F4\u6709\u673A\u4F1A\u53C2\u4E0E\u56FD\u5185\u3001\u5916\u5927\u578B\u884C\u4E1A\u6D3B\u52A8\uFF1B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2. \u516D\u9669\u4E00\u91D1\u3001\u9910\u8865\u3001\u901A\u8BAF\u8865\u8D34\u3001\u2026\u2026\u57FA\u672C\u798F\u5229\uFF0C\u4E00\u4E2A\u4E0D\u5C11\uFF01", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3. \u56E2\u5EFA\u3001\u8282\u5047\u65E5\u793C\u54C1\u3001\u751F\u65E5\u798F\u5229\u3001\u5B9A\u671F\u4F53\u68C0\u2026\u2026\u989D\u5916\u798F\u5229\uFF0C\u591A\u591A\u76CA\u5584\uFF1B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4. \u5343\u5E73\u7C73\u8D85\u5927\u529E\u516C\u5BA4\uFF0C\u7D27\u9760\u5730\u94C1\u7AD9\uFF0C\u4EA4\u901A\u65B9\u4FBF\uFF0C\u5403\u559D\u73A9\u4E50\u4E00\u5E94\u4FF1\u5168\uFF1B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "5. \u4E0E\u6765\u81EABAT\u3001\u4ECA\u65E5\u5934\u6761\u7B49\u4E00\u7EBF\u4E92\u8054\u7F51\u516C\u53F8\u7684\u4F18\u8D28\u56E2\u961F\u5E76\u80A9\u4F5C\u6218\uFF0C\u5E2E\u4F60\u5FEB\u901F\u6210\u957F\uFF1B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "6. \u83B7\u5F97\u5355\u72EC\u63D0\u4F9B\u7ED9\u5185\u90E8\u7684\u6295\u8D44\u673A\u4F1A\uFF0C\u5E2E\u4F60\u5B9E\u73B0\u8D22\u5BCC\u589E\u957F\uFF1B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "7. \u66F4\u591A\u9690\u5F62\u798F\u5229\uFF0C\u7B49\u4F60\u53D1\u6398\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u6709\u610F\u8005\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFBHR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "phone"
  }, "HR\u5FAE\u4FE1\uFF0813810850996\uFF09"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "wx"
  }, "\u90AE\u7BB1\uFF1Ahxhr@huoxing24.com"))))));
});

/***/ })

};;
//# sourceMappingURL=containers-m-Job.js.map