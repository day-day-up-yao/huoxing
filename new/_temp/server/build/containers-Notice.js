require("source-map-support").install();
exports.ids = [9];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var Pagination = function Pagination(props) {
  var currentPage = props.currentPage,
      totalData = props.totalData,
      pageSize = props.pageSize,
      pageChange = props.pageChange,
      prevTxt = props.prevTxt,
      nextTxt = props.nextTxt,
      prevNextCount = props.prevNextCount,
      prevNextHide = props.prevNextHide;
  var dotStr = '•••';
  var prevNextNum = parseInt(prevNextCount);
  var totalPage = Math.ceil(parseInt(totalData) / parseInt(pageSize));
  var totalPagePrev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(totalPage);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(parseInt(currentPage)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      curPage = _useState2[0],
      setCurPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      pageArr = _useState4[0],
      setPageArr = _useState4[1]; // props更新时，useState数据不会更新。故在此currentPage更新时，重新设置curPage


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setCurPage(parseInt(currentPage));
  }, [currentPage]);
  /** @desc 根据当前页两边页数计算: 中间开始于结束数字 */

  var getStartAndEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var start = 0;
    var end = 0;

    if (totalPage > prevNextNum * 2 + 3) {
      // 总页数大于前后个数+当前页+首尾页，需要省略
      if (curPage < prevNextNum * 2) {
        // curr=1,2,3页
        start = 2;
        end = start + 3;
      } else if (curPage > totalPage - prevNextNum * 2) {
        // curr=47,48,49,50
        end = totalPage - 1;
        start = end - 3;
      } else {
        // 如curr=45  分页1...43 44 45 46 47 ...50
        start = curPage - 2;
        end = curPage + 2;
      }
    } else {
      start = 2;
      end = totalPage - 1;
    }

    return {
      start: start,
      end: end
    };
  }, [curPage, totalPage]);
  /** @desc 点击设置当前页，并调用props回调函数 */

  var pageClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (curPage) {
    pageChange(curPage);
    setCurPage(curPage);
  }, [curPage, totalPage]);
  /** @desc 根据curPage自动计算页面显示数组 */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var start = getStartAndEnd().start;
    var end = getStartAndEnd().end;
    var initArr = [1];
    var itemArr = [];
    var lastArr = [];

    for (var i = start; i <= end; i++) {
      itemArr.push(i);
    }

    if (start === 2) {
      if (end === totalPage - 1) {
        lastArr = initArr.concat(itemArr);
      } else {
        lastArr = initArr.concat(itemArr).concat([dotStr]);
      }
    } else {
      if (end === totalPage - 1) {
        lastArr = initArr.concat([dotStr]).concat(itemArr);
      } else {
        lastArr = initArr.concat([dotStr]).concat(itemArr).concat([dotStr]);
      }
    }

    if (totalPagePrev.current !== totalPage) {
      totalPagePrev.current = totalPage;
      setCurPage(1);
    }

    if (totalPage === 1) {
      setPageArr(lastArr);
    } else {
      setPageArr(lastArr.concat([totalPage]));
    }
  }, [curPage, totalPage]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "react-pagination"
  }, !prevNextHide && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "prev ".concat(curPage === 1 && 'disabled'),
    title: prevTxt,
    onClick: function onClick() {
      return curPage > 1 && pageClick(curPage - 1);
    }
  }, prevTxt), pageArr.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: index,
      className: "".concat(curPage === item && 'active'),
      onClick: function onClick() {
        if (item === dotStr) return;
        pageClick(item);
      }
    }, item);
  }), !prevNextHide && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "next ".concat(curPage === totalPage && 'disabled'),
    title: nextTxt,
    onClick: function onClick() {
      return curPage < totalPage && pageClick(curPage + 1);
    }
  }, nextTxt));
};

Pagination.defaultProps = {
  prevTxt: '上一页',
  nextTxt: '下一页',
  prevNextCount: 2,
  prevNextHide: false,
  currentPage: 1
};
Pagination.propTypes = {
  totalData: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

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

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "text-icon-2fa40eea.png";

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(25);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(16);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(101);

// EXTERNAL MODULE: ./assets/redux/actions/notice.js + 1 modules
var notice = __webpack_require__(30);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components/Pagination/index.js
var Pagination = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/containers/Notice/images/text-icon.png
var text_icon = __webpack_require__(145);
var text_icon_default = /*#__PURE__*/__webpack_require__.n(text_icon);

// CONCATENATED MODULE: ./assets/containers/Notice/noticeCont/index.js











var noticeCont_NoticeCont = function NoticeCont(props) {
  var dispatch = props.dispatch,
      bourseObj = props.bourseObj,
      noticeObj = props.noticeObj;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      bourseSymbol = _useState2[0],
      setBourseSymbol = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      bourseType = _useState4[0],
      setBourseType = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      searchVal = _useState6[0],
      setSearchVal = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(1),
      _useState8 = slicedToArray_default()(_useState7, 2),
      curPage = _useState8[0],
      setCurPage = _useState8[1];

  Object(external_react_["useEffect"])(function () {
    dispatch(Object(notice["d" /* getNoticeList */])({
      exchangeSymbol: bourseSymbol,
      type: bourseType,
      search: '',
      page: curPage,
      pageSize: 20
    }));
  }, [curPage]);
  var getFiltrateSymbol = Object(external_react_["useCallback"])(function (e) {
    var val = '';

    if (e.target.value) {
      val = e.target.value;
    } else if (e.target.getAttribute('datasymbol')) {
      val = e.target.getAttribute('datasymbol');
      var nIndex = 0;
      bourseObj.obj.exchange.map(function (item, index) {
        if (item.symbol === val) {
          nIndex = index;
        }
      });
      var optionSelected = document.getElementById("bourse_".concat(nIndex));
      optionSelected.selected = true;
    }

    setBourseSymbol(val);
    dispatch(Object(notice["d" /* getNoticeList */])({
      exchangeSymbol: val,
      type: bourseType,
      search: searchVal
    }));
  });
  var getFiltrateType = Object(external_react_["useCallback"])(function (e) {
    var val = '';

    if (e.target.value) {
      val = e.target.value;
    } else if (e.target.getAttribute('datatype')) {
      val = e.target.getAttribute('datatype');
      var nIndex = 0;
      bourseObj.obj.type.map(function (item, index) {
        if (item.id === parseInt(val)) {
          nIndex = index;
        }
      });
      var optionSelectedType = document.getElementById("type_".concat(nIndex));
      optionSelectedType.selected = true;
    }

    setBourseType(val);
    dispatch(Object(notice["d" /* getNoticeList */])({
      exchangeSymbol: bourseSymbol,
      type: val,
      search: searchVal
    }));
  });
  var getSearchVal = Object(external_react_["useCallback"])(function (e) {
    var val = e.target.value;
    setSearchVal(val);
  });
  var searchBtn = Object(external_react_["useCallback"])(function (e) {
    dispatch(Object(notice["d" /* getNoticeList */])({
      exchangeSymbol: '',
      type: '',
      search: searchVal
    }));
  });
  var searchEnter = Object(external_react_["useCallback"])(function (event) {
    if (event.keyCode && event.keyCode !== 13) return false;
    var val = event.target.tagName.toLowerCase() !== 'input' ? searchVal : event.target.value;

    if (Object(_multiappsharing_public["C" /* trim */])(val) !== '') {
      dispatch(Object(notice["d" /* getNoticeList */])({
        exchangeSymbol: '',
        type: '',
        search: val
      }));
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "notice-cont-box"
  }, external_react_default.a.createElement("div", {
    className: "cont-type"
  }, external_react_default.a.createElement("select", {
    className: "cont-option-type",
    id: "bourseType",
    onChange: getFiltrateSymbol
  }, Object(_multiappsharing_public["n" /* isArray */])(bourseObj.obj.exchange) && bourseObj.obj.exchange.map(function (item, index) {
    return external_react_default.a.createElement("option", {
      key: index,
      value: item.symbol,
      id: "bourse_".concat(index)
    }, item.name);
  })), external_react_default.a.createElement("select", {
    className: "cont-option-type",
    id: "noticeType",
    onChange: getFiltrateType
  }, Object(_multiappsharing_public["n" /* isArray */])(bourseObj.obj.type) && bourseObj.obj.type.map(function (item, index) {
    return external_react_default.a.createElement("option", {
      key: index,
      value: item.id,
      id: "type_".concat(index)
    }, item.name);
  })), external_react_default.a.createElement("div", {
    className: "notice-input-search"
  }, external_react_default.a.createElement("input", {
    onChange: getSearchVal,
    type: "text",
    onKeyDown: searchEnter,
    placeholder: "\u516C\u544A\u641C\u7D22"
  }), external_react_default.a.createElement("span", {
    onClick: searchBtn
  }))), external_react_default.a.createElement("div", {
    className: "notice-cont-list clearfix"
  }, external_react_default.a.createElement("div", {
    className: "list-header clearfix"
  }, external_react_default.a.createElement("span", null, "\u5E73\u53F0"), external_react_default.a.createElement("span", null, "\u7C7B\u578B"), external_react_default.a.createElement("span", null, "\u5185\u5BB9"), external_react_default.a.createElement("span", null, "\u65F6\u95F4"), external_react_default.a.createElement("span", null, "\u539F\u6587")), external_react_default.a.createElement("div", {
    className: "cont-tbody"
  }, Object(_multiappsharing_public["n" /* isArray */])(noticeObj.obj.inforList) && noticeObj.obj.inforList.map(function (item) {
    return external_react_default.a.createElement("div", {
      className: "cont-item",
      key: item.id
    }, external_react_default.a.createElement("a", {
      className: "bourse-name",
      onClick: getFiltrateSymbol,
      datasymbol: item.exchangeSymbol
    }, external_react_default.a.createElement("img", {
      src: item.exchangeIconUrl,
      alt: ""
    }), item.exchangeName), external_react_default.a.createElement("a", {
      className: "item-type",
      onClick: getFiltrateType,
      datatype: item.type
    }, item.typeName), external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: "/noticeDetail/".concat(item.noticeId),
      className: "item-cont",
      target: "_blank"
    }, item.title), external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: "/noticeDetail/".concat(item.noticeId),
      className: "item-time",
      target: "_blank"
    }, Object(_multiappsharing_public["k" /* formatPublishTime */])(item.publishTime, '')), external_react_default.a.createElement("a", {
      href: item.orignUrl,
      className: "item-link",
      target: "_blank"
    }, external_react_default.a.createElement("img", {
      src: text_icon_default.a,
      alt: item.title
    })));
  })), external_react_default.a.createElement("div", {
    className: "pagination",
    style: {
      display: (noticeObj.obj.inforList.length === 0 || noticeObj.obj.recordCount < noticeObj.pageSize) && 'none'
    }
  }, external_react_default.a.createElement(Pagination["a" /* default */], {
    currentPage: noticeObj.obj.currentPage,
    pageSize: noticeObj.obj.pageSize,
    totalData: noticeObj.obj.recordCount,
    pageChange: function pageChange(curPage) {
      return setCurPage(curPage);
    }
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    noticeObj: state.notice.noticeObj,
    bourseObj: state.notice.bourseObj
  };
};

/* harmony default export */ var noticeCont = (Object(external_react_redux_["connect"])(mapStateToProps)(noticeCont_NoticeCont));
// EXTERNAL MODULE: ./assets/components/NoticeList/index.js
var NoticeList = __webpack_require__(129);

// EXTERNAL MODULE: ./assets/components/DataFocus/index.js
var DataFocus = __webpack_require__(130);

// CONCATENATED MODULE: ./assets/containers/Notice/index.js









var Notice_Notice = function Notice(props) {
  var statisticsObj = props.statisticsObj;
  return external_react_default.a.createElement("div", {
    className: "notice-cont"
  }, external_react_default.a.createElement("div", {
    className: "notice-nav"
  }, external_react_default.a.createElement("div", {
    className: "nav-map"
  }, external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: "/flash",
    target: "_blank"
  }, "\u5FEB\u8BAF"), external_react_default.a.createElement("a", {
    className: "active"
  }, "\u516C\u544A"), external_react_default.a.createElement("a", {
    style: {
      display: 'none'
    }
  }, "\u5FAE\u535A/Twitter"))), external_react_default.a.createElement("div", {
    className: "notice-map-box clearfix"
  }, external_react_default.a.createElement("div", {
    className: "notice-map-left"
  }, external_react_default.a.createElement(noticeCont, null)), external_react_default.a.createElement("div", {
    className: "notice-map-right"
  }, external_react_default.a.createElement(DataFocus["a" /* default */], {
    dataobj: statisticsObj
  }), external_react_default.a.createElement(NoticeList["a" /* default */], {
    title: '重要公告',
    dataArr: Object(_multiappsharing_public["n" /* isArray */])(statisticsObj.importantExchangeNoticeList) && statisticsObj.importantExchangeNoticeList
  }), external_react_default.a.createElement(NoticeList["a" /* default */], {
    title: '新币上线',
    dataArr: Object(_multiappsharing_public["n" /* isArray */])(statisticsObj.newCoinOnlineExchangeNoticeList) && statisticsObj.newCoinOnlineExchangeNoticeList
  }))));
};

var Notice_mapStateToProps = function mapStateToProps(state) {
  return {
    statisticsObj: state.notice.statisticsObj.obj
  };
};

/* harmony default export */ var containers_Notice = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(Notice_mapStateToProps)(Notice_Notice));

/***/ })

};;
//# sourceMappingURL=containers-Notice.js.map