require("source-map-support").install();
exports.ids = [5];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var RightItemWrapper = function RightItemWrapper(props) {
  var id = props.id,
      children = props.children,
      title = props.title,
      firstItem = props.firstItem,
      titleBtn = props.titleBtn,
      titleStyle = props.titleStyle,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id || '',
    className: "layout-content-right-item ".concat(firstItem ? 'first-item' : '')
  }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-item-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    style: titleStyle && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, titleStyle)
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button",
    style: {
      display: titleBtn && titleBtn !== '' ? 'flex' : 'none'
    },
    onClick: onClick && onClick
  }, titleBtn)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-item-content"
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (RightItemWrapper);

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feature-backImg-d818821e.png";

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_simple_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);
/* harmony import */ var react_simple_img__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_img__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RightItemWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(106);
/* harmony import */ var _public_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _public_img_feature_backImg_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(107);
/* harmony import */ var _public_img_feature_backImg_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_feature_backImg_png__WEBPACK_IMPORTED_MODULE_7__);








/** @desc 右侧新闻item */

var RightNewsItem = function RightNewsItem(props) {
  var title = props.title,
      id = props.id,
      coverPic = props.coverPic,
      author = props.author,
      rank = props.rank,
      tags = props.tags; // 新闻链接

  var newsLink = _public_index__WEBPACK_IMPORTED_MODULE_6__[/* mixUrl */ "w"].news("/".concat(id, ".html"));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-news-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "left",
    title: title,
    href: newsLink,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, rank + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_img__WEBPACK_IMPORTED_MODULE_2__["SimpleImg"], {
    applyAspectRatio: true,
    width: 90,
    height: 65,
    placeholder: '#f6f8fa',
    src: Object(_public_index__WEBPACK_IMPORTED_MODULE_6__[/* stringJsonItem */ "B"])(coverPic, 'pc'),
    alt: tags
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: title,
    href: newsLink,
    target: "_blank"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("time", null, author)));
};

RightNewsItem.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  coverPic: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  publishTime: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired
  /** @desc 右侧专题item */

};

var RightFeatureItem = function RightFeatureItem(props) {
  var id = props.id,
      topicName = props.topicName,
      newSmallPcImgSrc = props.newSmallPcImgSrc,
      pcImgSrc = props.pcImgSrc,
      createTime = props.createTime,
      serverTime = props.serverTime; // 专题链接

  var featureLink = _public_index__WEBPACK_IMPORTED_MODULE_6__[/* mixUrl */ "w"].news("/feature/".concat(id));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-news-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "left",
    title: topicName,
    href: featureLink,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_img__WEBPACK_IMPORTED_MODULE_2__["SimpleImg"], {
    applyAspectRatio: true,
    width: 90,
    height: 65,
    placeholder: '#f6f8fa',
    src: newSmallPcImgSrc || pcImgSrc || _public_img_feature_backImg_png__WEBPACK_IMPORTED_MODULE_7___default.a
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: topicName,
    href: featureLink,
    target: "_blank"
  }, topicName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("time", null, Object(_public_index__WEBPACK_IMPORTED_MODULE_6__[/* formatPublishTime */ "k"])(createTime, serverTime && serverTime !== '' && serverTime))));
};

RightFeatureItem.propTypes = {
  topicName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  createTime: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired
  /** @desc 右侧推荐,热门,相关新闻等 */

};

var RightNews = function RightNews(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RightItemWrapper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    id: props.id || '',
    titleBtn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "more-icon",
      style: {
        display: props.ismore === false ? 'none' : 'block'
      },
      href: props.feature ? _public_index__WEBPACK_IMPORTED_MODULE_6__[/* mixUrl */ "w"].news('/feature') : _public_index__WEBPACK_IMPORTED_MODULE_6__[/* mixUrl */ "w"].news(),
      target: "_blank"
    }),
    title: props.title
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-news-wrapper"
  }, Object(_public_index__WEBPACK_IMPORTED_MODULE_6__[/* isArray */ "n"])(props.data) && (props.data.length !== 0 ? props.data.map(function (item, index) {
    return props.feature ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightFeatureItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: item.topic.id
    }, item.topic)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightNewsItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: item.id,
      rank: index
    }, item));
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "no-news"
  }, "\u6682\u65E0\u5185\u5BB9"))));
};

/* harmony default export */ __webpack_exports__["a"] = (RightNews);

/***/ }),

/***/ 110:
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
    className: "load-more-btn"
  }), "\u52A0\u8F7D\u66F4\u591A");
};

/* harmony default export */ __webpack_exports__["a"] = (LoadMore);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "video-btn-417b2428.png";

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

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

// EXTERNAL MODULE: ./_multiappsharing/components/RightNews/index.js
var RightNews = __webpack_require__(108);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: external "react-simple-img"
var external_react_simple_img_ = __webpack_require__(100);

// EXTERNAL MODULE: ./assets/components/FeatureList/img/video-btn.png
var video_btn = __webpack_require__(143);
var video_btn_default = /*#__PURE__*/__webpack_require__.n(video_btn);

// EXTERNAL MODULE: ./_multiappsharing/components/LoadMore/index.js
var LoadMore = __webpack_require__(110);

// CONCATENATED MODULE: ./assets/components/FeatureList/index.js






 // import NewsListItem from 'multiComps/NewsListItem'

var FeatureList_featureList = function featureList(props) {
  // const { topicContentList, loadMore, itemProps } = props
  var topicContentList = props.topicContentList,
      loadMore = props.loadMore;
  return external_react_default.a.createElement("div", {
    className: "feature-topic-list-wrapper"
  }, Object(_multiappsharing_public["n" /* isArray */])(topicContentList.inforList) && topicContentList.inforList.map(function (item, index) {
    // return <NewsListItem key={item.id} {...item} {...itemProps}/>
    // if (adImplant['3'].length === 0) {
    //     return <NewsListItem key={item.id} {...item} {...itemProps}/>
    // }
    // return adImplant['3'].map((adItem, nIndex) => {
    //     if (parseInt(adItem.topOrder) === index) {
    //         return <a className='ad-img-list clearfix' href={adItem.url} key={adItem.id} target='_blank'>
    //             <img src={adItem.pcImgSrc} alt=""/>
    //             <div className='ad-right'>
    //                 <h5>{adItem.title}</h5>
    //                 <p>{adItem.description}</p>
    //             </div>
    //         </a>
    //     }
    //     if (nIndex === adImplant['3'].length - 1) {
    //         return <NewsListItem key={item.id} {...item} {...itemProps}/>
    //     }
    // })
    // 新闻链接
    // const newsLink = mixUrl.news(`/${item.topicId}.html`)
    // 作者链接
    // const authLink = mixUrl.main(`/userCenter/${item.createdBy}`)
    return external_react_default.a.createElement("div", {
      className: "feature-topic-list-item",
      key: index
    }, external_react_default.a.createElement("a", {
      className: "item-left",
      title: item.title,
      href: item.url,
      target: "_blank"
    }, item.newsCat && item.newsCat !== '' && external_react_default.a.createElement("span", null, item.newsCat), external_react_default.a.createElement(external_react_simple_img_["SimpleImg"], {
      applyAspectRatio: true,
      width: 220,
      height: 160,
      placeholder: '#f6f8fa',
      src: Object(_multiappsharing_public["B" /* stringJsonItem */])(item.coverPic, 'pc'),
      alt: ""
    }), item.contentType === 1 ? external_react_default.a.createElement("img", {
      className: "videoImg",
      src: video_btn_default.a
    }) : null), external_react_default.a.createElement("div", {
      className: "item-right"
    }, external_react_default.a.createElement("a", {
      className: "title-synopsis",
      title: item.title,
      href: item.url,
      target: "_blank"
    }, external_react_default.a.createElement("h5", null, item.authCat && item.authCat !== '' && external_react_default.a.createElement("span", null, item.authCat), item.title), external_react_default.a.createElement("p", null, item.synopsis && item.synopsis.replace('【GPT】', ''))), external_react_default.a.createElement("div", {
      className: "relate-info"
    }, external_react_default.a.createElement("div", {
      className: "author-time"
    }, external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(item.publishTime, item.serverTime && item.serverTime !== '' && item.serverTime))))));
  }), external_react_default.a.createElement("div", {
    className: "no-feature",
    style: {
      display: topicContentList.inforList.length === 0 ? 'block' : ''
    }
  }, "\u6682\u65E0\u5185\u5BB9"), props.isMore ? external_react_default.a.createElement(LoadMore["a" /* default */], {
    onClick: loadMore,
    dataleng: topicContentList.inforList.length,
    style: {
      display: topicContentList.inforList.length === 0 || topicContentList.currentPage === topicContentList.pageCount ? 'none' : 'block'
    }
  }) : '');
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicContentList: state.news.featureDetails.topicContentList,
    adImplant: state.multi.adImplant
  };
};

/* harmony default export */ var FeatureList = (Object(external_react_redux_["connect"])(mapStateToProps)(FeatureList_featureList));
// EXTERNAL MODULE: ./assets/redux/actions/news.js + 1 modules
var news = __webpack_require__(22);

// CONCATENATED MODULE: ./assets/containers/FeatureDetailsAndTags/index.js








 // import { getNewsList } from 'multiRedux/actions/news'




var FeatureDetailsAndTags_FeatureAndTags = function FeatureAndTags(props) {
  var hotNewsList = props.hotNewsList,
      featureList = props.featureList,
      featureDetails = props.featureDetails,
      dispatch = props.dispatch,
      match = props.match,
      pageType = props.pageType;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;
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
      setIsMore = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    // 更换接口，不需要tags了
    // if (!match.params.tags) {
    //     dispatch(getFeatureDetails(match.params.featureId)).then(function (res) {
    //         if (res.code === 1) {
    //             setParams({
    //                 ...params,
    //                 tags: res.obj.tags
    //             })
    //         } else {
    //             setIsMore(false)
    //             Toast.info(res.msg)
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info(`获取专题详情错误`)
    //     })
    // }
    if (!match.params.featureId) {
      setIsMore(false);
    }
  }, []);
  var loadMore = Object(external_react_["useCallback"])(function () {
    dispatch(Object(news["b" /* getFeatureDetails */])(params, 'isMore')).then(function (res) {
      if (res.code === 1) {
        console.log(res);
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

  var _useState5 = Object(external_react_["useState"])(featureList),
      _useState6 = slicedToArray_default()(_useState5, 2),
      listdata = _useState6[0],
      setFeatureList = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    // 命令式变成和函数编程
    // const newData = []
    // console.log(listdata)
    // for (let i = 0; i < featureList.inforList.length; i++) {
    //     let item = featureList.inforList[i]
    //     if (item.topic.id !== featureDetails.topic.id) {
    //         newData.push(item)
    //     }
    // }
    // featureList.inforList = newData
    // setFeatureList(featureList.inforList)
    var newinforlist = listdata.inforList.filter(function (item) {
      return item.topic.id !== featureDetails.topic.id;
    });
    featureList.inforList = newinforlist;
    setFeatureList(featureList.inforList);
  }, [featureList]);
  return [external_react_default.a.createElement("div", {
    className: "tags-feature-banner",
    key: "tagsFeatureBanner"
  }, pageType === 'tags' && external_react_default.a.createElement("div", {
    className: "tags-banner"
  }), pageType === 'feature' && external_react_default.a.createElement("div", {
    className: "feature-banner",
    style: {
      background: "url(".concat(featureDetails.topic.pcBackImage, ") no-repeat center top"),
      backgroundSize: "auto 300px"
    }
  }, external_react_default.a.createElement("div", {
    className: "feature-title"
  }, external_react_default.a.createElement("h1", null, featureDetails.topic.titleDisplayFlag === 0 ? '' : featureDetails.topic.topicName)), external_react_default.a.createElement("div", {
    className: "feature-desc"
  }, external_react_default.a.createElement("h5", null, t('feature_desc'), ":"), external_react_default.a.createElement("p", null, featureDetails.topic.description)))), external_react_default.a.createElement("div", {
    className: "layout-main tags-feature-wrapper",
    key: "tagsFeature"
  }, external_react_default.a.createElement("div", {
    className: "layout-left"
  }, external_react_default.a.createElement(FeatureList, {
    loadMore: loadMore,
    isMore: isMore
  })), external_react_default.a.createElement("div", {
    className: "layout-right"
  }, external_react_default.a.createElement(RightNews["a" /* default */], {
    data: featureList.inforList,
    title: t('feature_recommended_topic'),
    feature: true
  }), external_react_default.a.createElement(RightNews["a" /* default */], {
    data: hotNewsList.inforList,
    title: t('feature_hot_news')
  })))];
};

var FeatureDetailsAndTags_mapStateToProps = function mapStateToProps(state) {
  var news = state.multi.news;
  return {
    hotNewsList: news.hotNewsList,
    featureList: news.featureList,
    featureDetails: state.news.featureDetails
  };
};

/* harmony default export */ var FeatureDetailsAndTags = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(FeatureDetailsAndTags_mapStateToProps)(FeatureDetailsAndTags_FeatureAndTags));

/***/ })

};;
//# sourceMappingURL=containers-FeatureDetailsAndTags.js.map