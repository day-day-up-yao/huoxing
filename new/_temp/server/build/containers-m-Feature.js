require("source-map-support").install();
exports.ids = [13];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feature-backImg-d818821e.png";

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var LoadMore = function LoadMore(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: "m-load-more-btn"
  }), "\u52A0\u8F7D\u66F4\u591A");
};

/* harmony default export */ __webpack_exports__["a"] = (LoadMore);

/***/ }),

/***/ 95:
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

// EXTERNAL MODULE: ./_multiappsharing/components-m/LoadMore/index.js
var LoadMore = __webpack_require__(137);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/news.js + 1 modules
var news = __webpack_require__(14);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: ./_multiappsharing/public/img/feature-backImg.png
var feature_backImg = __webpack_require__(107);
var feature_backImg_default = /*#__PURE__*/__webpack_require__.n(feature_backImg);

// CONCATENATED MODULE: ./_multiappsharing/components-m/FeatureListItem/index.js






var FeatureListItem_FeatureListItem = function FeatureListItem(props) {
  var item = props.item;
  var topic = item.topic;
  var featureLink = _multiappsharing_public["w" /* mixUrl */].news("/feature/".concat(topic.id));
  return external_react_default.a.createElement("li", {
    className: "m-feature-list-item-wrapper",
    key: topic.id
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("a", {
    className: "info",
    href: featureLink,
    title: topic.topicName
  }, external_react_default.a.createElement("img", {
    src: topic.newSmallPcImgSrc || topic.pcImgSrc || feature_backImg_default.a,
    alt: topic.topicName
  }), external_react_default.a.createElement("h3", null, topic.topicName))));
};

FeatureListItem_FeatureListItem.propTypes = {
  item: external_prop_types_["object"].isRequired
};
/* harmony default export */ var components_m_FeatureListItem = (FeatureListItem_FeatureListItem);
// CONCATENATED MODULE: ./assets/containers-m/Feature/index.js











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
  var loadMore = Object(external_react_["useCallback"])(function () {
    setCurPage(curPage + 1);
  }, [curPage]);
  return external_react_default.a.createElement("div", {
    className: "m-feature-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "func"
  }, external_react_default.a.createElement("div", {
    className: "sort"
  }, external_react_default.a.createElement("a", {
    onClick: function onClick() {
      return setOrderType(0);
    },
    className: "".concat(orderType === 0 && 'active')
  }, t('feature_update_time')), external_react_default.a.createElement("a", {
    onClick: function onClick() {
      return setOrderType(1);
    },
    className: "".concat(orderType === 1 && 'active')
  }, t('feature_set_time')))), external_react_default.a.createElement("ul", {
    className: "list"
  }, Object(_multiappsharing_public["n" /* isArray */])(featureList.inforList) && featureList.inforList.map(function (item, index) {
    return external_react_default.a.createElement(components_m_FeatureListItem, {
      item: item,
      key: item.topic.id
    });
  })), featureList.inforList.length > 0 ? external_react_default.a.createElement(LoadMore["a" /* default */], {
    onClick: loadMore,
    dataleng: featureList.inforList.length,
    style: {
      display: featureList.inforList.length === 0 || featureList.recordCount < featureList.pageSize ? 'none' : 'block'
    }
  }) : '');
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    featureList: state.multi.news.featureList
  };
};

/* harmony default export */ var containers_m_Feature = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Feature_Feature));

/***/ })

};;
//# sourceMappingURL=containers-m-Feature.js.map