require("source-map-support").install();
exports.ids = [10];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var NoticeList = function NoticeList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notice-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, props.title), props.dataArr.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      key: item.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/noticeDetail/".concat(item.noticeId),
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.exchangeIconUrl,
      alt: ""
    }), item.exchangeSymbol), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_1__[/* formatPublishTime */ "k"])(item.publishTime, '')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/noticeDetail/".concat(item.noticeId),
      target: "_blank"
    }, item.title));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (NoticeList);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_update_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var _images_update_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_update_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_newbi_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var _images_newbi_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_newbi_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_bourse_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(133);
/* harmony import */ var _images_bourse_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_bourse_icon_png__WEBPACK_IMPORTED_MODULE_4__);






var DataFocus = function DataFocus(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "data-focus clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "focus-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_update_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.dataobj.todayUpdateCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4ECA\u65E5\u66F4\u65B0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "focus-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_newbi_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.dataobj.sevenDayNewCoin), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4E00\u5468\u4E0A\u65B0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "focus-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_bourse_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.dataobj.exchangeCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6536\u5F55\u5E73\u53F0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "focus-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://jinshuju.net/f/U21cuJ",
    target: "_blank"
  }, "\u7533\u8BF7\u6536\u5F55")));
};

/* harmony default export */ __webpack_exports__["a"] = (DataFocus);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "update-icon-4095d99b.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "newbi-icon-2a29217d.png";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bourse-icon-c07be9d1.png";

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(101);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NoticeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var _components_DataFocus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(130);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);








var NoticeDetail = function NoticeDetail(props) {
  var statisticsObj = props.statisticsObj,
      noticeDetailObj = props.noticeDetailObj;
  var currentExchangeNotice = noticeDetailObj.currentExchangeNotice;
  var nextExchangeNotice = !noticeDetailObj.nextExchangeNotice ? '' : noticeDetailObj.nextExchangeNotice;
  var pastExchangeNotice = !noticeDetailObj.pastExchangeNotice ? '' : noticeDetailObj.pastExchangeNotice;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notice-detail-cont"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notice-detail-box clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notice-detail-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.marsbit.co/",
    target: "_blank"
  }, "\u9996\u9875"), " > ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/notice"
  }, "\u516C\u544A"), " > ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, currentExchangeNotice.exchangeName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "title-h5"
  }, currentExchangeNotice.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: currentExchangeNotice.exchangeIconUrl,
    alt: ""
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, currentExchangeNotice.exchangeName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_2__[/* formatPublishTime */ "k"])(currentExchangeNotice.publishTime))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u516C\u544A\u7C7B\u578B\uFF1A", currentExchangeNotice.typeName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cont",
    dangerouslySetInnerHTML: {
      __html: currentExchangeNotice.content
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "link"
  }, "\u539F\u6587\u94FE\u63A5\uFF1A", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: currentExchangeNotice.orignUrl,
    target: "_blank"
  }, "\u70B9\u51FB\u67E5\u770B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-next"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: nextExchangeNotice === '' ? 'none' : 'block'
    }
  }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/noticeDetail/".concat(nextExchangeNotice.noticeId),
    target: "_blank"
  }, nextExchangeNotice.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: pastExchangeNotice === '' ? 'none' : 'block'
    }
  }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/noticeDetail/".concat(pastExchangeNotice.noticeId),
    target: "_blank"
  }, pastExchangeNotice.title)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notice-detail-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DataFocus__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    dataobj: statisticsObj
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoticeList__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: '重要公告',
    dataArr: Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_2__[/* isArray */ "n"])(statisticsObj.importantExchangeNoticeList) && statisticsObj.importantExchangeNoticeList
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoticeList__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: '新币上线',
    dataArr: Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_2__[/* isArray */ "n"])(statisticsObj.newCoinOnlineExchangeNoticeList) && statisticsObj.newCoinOnlineExchangeNoticeList
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    statisticsObj: state.notice.statisticsObj.obj,
    noticeDetailObj: state.notice.noticeDetailObj.obj
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(NoticeDetail));

/***/ })

};;
//# sourceMappingURL=containers-NoticeDetail.js.map