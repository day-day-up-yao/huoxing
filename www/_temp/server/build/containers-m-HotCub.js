require("source-map-support").install();
exports.ids = [34];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: external "react-simple-img"
var external_react_simple_img_ = __webpack_require__(170);

// EXTERNAL MODULE: ./assets/components-m/FeatureList/img/video-btn.png
var video_btn = __webpack_require__(510);
var video_btn_default = /*#__PURE__*/__webpack_require__.n(video_btn);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// CONCATENATED MODULE: ./_multiappsharing/components-m/LoadMore/index.js




var LoadMore_LoadMore = function LoadMore(props) {
  return external_react_default.a.createElement("a", extends_default()({}, props, {
    className: "m-load-more-btn"
  }), "\u52A0\u8F7D\u66F4\u591A");
};

/* harmony default export */ var components_m_LoadMore = (LoadMore_LoadMore);
// CONCATENATED MODULE: ./assets/components-m/FeatureList/index.js








var FeatureList_FeatureList = function FeatureList(props) {
  var topicContentList = props.topicContentList,
      loadMore = props.loadMore;
  return external_react_default.a.createElement("div", {
    className: "m-feature-list-wrapper"
  }, Object(_multiappsharing_public["n" /* isArray */])(topicContentList.inforList) && topicContentList.inforList.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "m-feature-topic-list-item",
      key: index
    }, external_react_default.a.createElement("div", {
      className: "item-right"
    }, external_react_default.a.createElement("a", {
      className: "title-synopsis",
      title: item.title,
      href: item.url,
      target: "_blank"
    }, external_react_default.a.createElement("h5", null, item.authCat && item.authCat !== '' && external_react_default.a.createElement("span", null, item.authCat), item.title)), external_react_default.a.createElement("div", {
      className: "relate-info"
    }, external_react_default.a.createElement("div", {
      className: "author-time"
    }, external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(item.publishTime, item.serverTime && item.serverTime !== '' && item.serverTime))))), external_react_default.a.createElement("a", {
      className: "item-left",
      title: item.title,
      href: item.url,
      target: "_blank"
    }, item.newsCat && item.newsCat !== '' && external_react_default.a.createElement("span", null, item.newsCat), external_react_default.a.createElement(external_react_simple_img_["SimpleImg"], {
      applyAspectRatio: true,
      width: 220,
      height: 160,
      placeholder: '#f6f8fa',
      src: Object(_multiappsharing_public["G" /* stringJsonItem */])(item.coverPic, 'pc'),
      alt: ""
    }), item.contentType === 1 ? external_react_default.a.createElement("img", {
      className: "videoImg",
      src: video_btn_default.a
    }) : null));
  }), external_react_default.a.createElement("div", {
    className: "no-feature",
    style: {
      display: topicContentList.inforList.length === 0 ? 'block' : ''
    }
  }, "\u6682\u65E0\u5185\u5BB9"), props.isMore ? external_react_default.a.createElement(components_m_LoadMore, {
    onClick: loadMore,
    dataleng: topicContentList.inforList.length,
    style: {
      display: topicContentList.inforList.length === 0 || topicContentList.currentPage === topicContentList.pageCount ? 'none' : 'block'
    }
  }) : '');
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicContentList: state.news.featureDetails.topicContentList
  };
};

/* harmony default export */ var components_m_FeatureList = (Object(external_react_redux_["connect"])(mapStateToProps)(FeatureList_FeatureList));
// EXTERNAL MODULE: ./assets/redux/actions/news.js + 1 modules
var news = __webpack_require__(35);

// CONCATENATED MODULE: ./assets/containers-m/HotCub/index.js






 // import { getNewsList } from 'multiRedux/actions/news'




var HotCub_FeatureAndTags = function FeatureAndTags(props) {
  var featureDetails = props.featureDetails,
      dispatch = props.dispatch,
      match = props.match; // console.log(featureDetails)

  console.log('专题列表');
  /** @desc 加载更多  */

  var _useState = Object(external_react_["useState"])({
    currentPage: 2,
    pageSize: 15,
    id: match.params.featureId
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(true),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isMore = _useState4[0],
      setIsMore = _useState4[1]; // const [active, setActive] = useState(false)
  // const [ showall ] = useState(false)// setShowall
  // const showAllcontent = useCallback(() => {
  //     setShowall(true)
  //     setActive(true)
  // }, [])


  Object(external_react_["useEffect"])(function () {
    if (!match.params.featureId) {
      setIsMore(false);
    }
  }, []);
  var loadMore = Object(external_react_["useCallback"])(function () {
    dispatch(Object(news["a" /* getFeatureDetails */])(params, 'isMore')).then(function (res) {
      if (res.code === 1) {
        var curPage = res.obj.topicContentList.currentPage;
        var list = res.obj.topicContentList.inforList;

        if (Object(_multiappsharing_public["n" /* isArray */])(list) && list.length !== 0) {
          setParams(objectSpread_default()({}, params, {
            currentPage: curPage + 1
          }));
        } else {
          Toast["a" /* default */].info('暂无更多新闻');
        }
      } else {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取关键字或专题新闻列表错误');
    });
  }, [params]);
  return external_react_default.a.createElement("div", {
    className: "m-feature-details"
  }, external_react_default.a.createElement("div", {
    className: "hot-top-bg show"
  }, external_react_default.a.createElement("div", {
    className: "feature-title"
  }, featureDetails.topic.titleDisplayFlag === 0 ? '' : featureDetails.topic.topicName)), external_react_default.a.createElement("div", {
    className: "feature-con"
  }, external_react_default.a.createElement("div", {
    className: "wrap feature-desc"
  }, external_react_default.a.createElement("input", {
    type: "checkbox",
    id: "exp",
    className: "exp"
  }), external_react_default.a.createElement("div", {
    className: "text"
  }, external_react_default.a.createElement("label", {
    className: "btn",
    htmlFor: "exp"
  }), featureDetails.topic.description))), external_react_default.a.createElement(components_m_FeatureList, {
    loadMore: loadMore,
    isMore: isMore
  }));
};

var HotCub_mapStateToProps = function mapStateToProps(state) {
  return {
    featureDetails: state.news.featureDetails
  };
};

/* harmony default export */ var HotCub = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(HotCub_mapStateToProps)(HotCub_FeatureAndTags));

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "video-btn-417b2428.png";

/***/ })

};;
//# sourceMappingURL=containers-m-HotCub.js.map