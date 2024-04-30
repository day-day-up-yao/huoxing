require("source-map-support").install();
exports.ids = [4];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feature-backImg-d818821e.png";

/***/ }),

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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(16);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(25);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components/Pagination/index.js
var Pagination = __webpack_require__(120);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/news.js + 1 modules
var news = __webpack_require__(14);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: ./_multiappsharing/public/img/feature-backImg.png
var feature_backImg = __webpack_require__(107);
var feature_backImg_default = /*#__PURE__*/__webpack_require__.n(feature_backImg);

// CONCATENATED MODULE: ./_multiappsharing/components/FeatureListItem/index.js






var FeatureListItem_FeatureListItem = function FeatureListItem(props) {
  var item = props.item;
  var topic = item.topic,
      contentList = item.contentList;
  var featureLink = _multiappsharing_public["w" /* mixUrl */].news("/feature/".concat(topic.id));
  var newsLink = contentList && contentList[0].url;
  return external_react_default.a.createElement("li", {
    className: "feature-list-item-wrapper",
    key: topic.id
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("a", {
    className: "info",
    href: featureLink,
    title: topic.topicName,
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    src: topic.newSmallPcImgSrc || topic.pcImgSrc || feature_backImg_default.a,
    alt: topic.topicName
  }), external_react_default.a.createElement("p", null, topic.topicName)), contentList && external_react_default.a.createElement("a", {
    className: "news",
    href: newsLink,
    title: contentList[0].title,
    target: "_blank"
  }, contentList[0].title)));
};

FeatureListItem_FeatureListItem.propTypes = {
  item: external_prop_types_["object"].isRequired
};
/* harmony default export */ var components_FeatureListItem = (FeatureListItem_FeatureListItem);
// CONCATENATED MODULE: ./assets/containers/Feature/index.js











var Feature_Feature = function Feature(props) {
  var featureList = props.featureList,
      dispatch = props.dispatch;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(external_react_["useState"])(1),
      _useState2 = slicedToArray_default()(_useState, 2),
      curPage = _useState2[0],
      setCurPage = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      orderType = _useState4[0],
      setOrderType = _useState4[1];

  var mounted = Object(external_react_["useRef"])(false); // 判断是否为第一次运行：didMounted

  Object(external_react_["useEffect"])(function () {
    if (mounted.current) {
      dispatch(Object(news["e" /* getFeatureList */])({
        currentPage: curPage,
        pageSize: 15,
        orderType: orderType
      }, 'isMore')).then(function (res) {
        if (res.code !== 1) {
          Toast["a" /* default */].index(res.msg);
        }
      })["catch"](function (err) {
        console.log(err);
        Toast["a" /* default */].info('获取专题列表错误');
      });
    } else {
      mounted.current = true;
    }
  }, [curPage, orderType]);
  return external_react_default.a.createElement("div", {
    className: "feature-list-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "func"
  }, external_react_default.a.createElement("div", {
    className: "sort"
  }, external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return setOrderType(0);
    },
    className: "".concat(orderType === 0 && 'active')
  }, t('feature_update_time')), external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return setOrderType(1);
    },
    className: "".concat(orderType === 1 && 'active')
  }, t('feature_set_time'))), external_react_default.a.createElement("div", {
    className: "number"
  }, t('feature_setting'), external_react_default.a.createElement("span", null, featureList.recordCount), t('feature_zt_num'))), external_react_default.a.createElement("ul", {
    className: "list"
  }, Object(_multiappsharing_public["n" /* isArray */])(featureList.inforList) && featureList.inforList.map(function (item, index) {
    return external_react_default.a.createElement(components_FeatureListItem, {
      item: item,
      key: item.topic.id
    });
  })), external_react_default.a.createElement("div", {
    className: "pagination",
    style: {
      display: (featureList.inforList.length === 0 || featureList.recordCount < featureList.pageSize) && 'none'
    }
  }, external_react_default.a.createElement(Pagination["a" /* default */], {
    pageSize: featureList.pageSize,
    totalData: featureList.recordCount,
    pageChange: function pageChange(curPage) {
      return setCurPage(curPage);
    }
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    featureList: state.multi.news.featureList
  };
};

/* harmony default export */ var containers_Feature = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Feature_Feature));

/***/ })

};;
//# sourceMappingURL=containers-Feature.js.map