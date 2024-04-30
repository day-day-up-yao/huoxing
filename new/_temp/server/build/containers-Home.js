require("source-map-support").install();
exports.ids = [8];
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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components/LoadMore/index.js
var LoadMore = __webpack_require__(110);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(16);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-simple-img"
var external_react_simple_img_ = __webpack_require__(100);

// CONCATENATED MODULE: ./_multiappsharing/components/NewsListItem/SimpleImg.js




/* harmony default export */ var SimpleImg = (function (_ref) {
  var coverPic = _ref.coverPic,
      tags = _ref.tags,
      type = _ref.type;

  var _useState = Object(external_react_["useState"])(coverPic),
      _useState2 = slicedToArray_default()(_useState, 2),
      oldImg = _useState2[0],
      setOldImg = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(coverPic),
      _useState4 = slicedToArray_default()(_useState3, 2),
      newPic = _useState4[0],
      setNewPic = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    if (coverPic !== newPic) {
      setOldImg(null);
      setNewPic(coverPic);
    }
  }, [coverPic]);
  Object(external_react_["useEffect"])(function () {
    setOldImg(newPic);
  }, [newPic]);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, oldImg !== null && external_react_default.a.createElement(external_react_simple_img_["SimpleImg"], {
    applyAspectRatio: true,
    importance: 'high',
    width: 220,
    height: 160,
    placeholder: '#f6f8fa',
    src: Object(_multiappsharing_public["B" /* stringJsonItem */])(coverPic, type),
    alt: tags
  }));
});
// CONCATENATED MODULE: ./_multiappsharing/components/NewsListItem/index.js







var NewsListItem_NewsListItem = function NewsListItem(props) {
  // 简写: auth = author; cat = category
  // tag的type: 1行情，2媒体，3新闻
  var title = props.title,
      synopsis = props.synopsis,
      id = props.id,
      coverPic = props.coverPic,
      author = props.author,
      createdBy = props.createdBy,
      publishTime = props.publishTime,
      tagsV2 = props.tagsV2,
      serverTime = props.serverTime,
      hotCounts = props.hotCounts,
      newsCat = props.newsCat,
      authCat = props.authCat,
      nameHide = props.nameHide,
      tagsHide = props.tagsHide,
      hotShow = props.hotShow,
      advertised = props.advertised,
      tags = props.tags,
      infoType = props.infoType,
      content = props.content; // 新闻链接
  // let newsLink = ''
  // 作者链接

  var authLink = _multiappsharing_public["w" /* mixUrl */].main("/userCenter/".concat(createdBy)); // 视频图片类型

  var videoImgType = Object(_multiappsharing_public["B" /* stringJsonItem */])(coverPic, 'video_pc') !== '' ? 'video_pc' : 'video_m';

  var _useState = Object(external_react_["useState"])(_multiappsharing_public["w" /* mixUrl */].news("/".concat(id, ".html"))),
      _useState2 = slicedToArray_default()(_useState, 2),
      linkurl = _useState2[0],
      setLinkurl = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    if (typeof window !== 'undefined') {
      var reqhost = window.location;

      if (infoType && infoType === 'video') {
        setLinkurl(_multiappsharing_public["w" /* mixUrl */].main("/video/detail/".concat(id, "/").concat(publishTime), reqhost));
      } else {
        setLinkurl(_multiappsharing_public["w" /* mixUrl */].news("/".concat(id, ".html"), reqhost));
      } // newsLink = (infoType && infoType === 'video') ? mixUrl.main(`/video/detail/${id}/${publishTime}`, reqhost) : mixUrl.news(`/${id}.html`, reqhost)

    }
  }, [infoType, id]);
  return external_react_default.a.createElement("div", {
    className: "news-list-item"
  }, external_react_default.a.createElement("a", {
    className: "item-left",
    title: title,
    href: linkurl,
    target: "_blank"
  }, newsCat && newsCat !== '' && external_react_default.a.createElement("span", null, newsCat), infoType && infoType === 'video' && external_react_default.a.createElement("div", {
    className: "type-video"
  }, "\u89C6\u9891"), infoType && infoType === 'video' && external_react_default.a.createElement("div", {
    className: "type-video-btn"
  }), external_react_default.a.createElement(SimpleImg, {
    coverPic: coverPic,
    tags: tags,
    type: infoType && infoType === 'video' ? videoImgType : 'pc'
  })), external_react_default.a.createElement("div", {
    className: "item-right"
  }, external_react_default.a.createElement("a", {
    className: "title-synopsis",
    title: title,
    href: linkurl,
    target: "_blank"
  }, external_react_default.a.createElement("h5", null, authCat && authCat !== '' && external_react_default.a.createElement("span", null, authCat), title), external_react_default.a.createElement("p", null, infoType && infoType === 'video' ? content : synopsis.replace('【GPT】', ''))), external_react_default.a.createElement("div", {
    className: "relate-info"
  }, external_react_default.a.createElement("div", {
    className: "author-time"
  }, advertised !== null && advertised === 1 && external_react_default.a.createElement("span", {
    style: {
      color: "#5a83f9"
    }
  }, "\u63A8\u5E7F | "), !nameHide && external_react_default.a.createElement("a", {
    href: authLink,
    title: author,
    target: "_blank"
  }, author), external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(publishTime, serverTime && serverTime !== '' && serverTime))), !tagsHide && Object(_multiappsharing_public["A" /* stringArray */])(tagsV2).length !== 0 && external_react_default.a.createElement("div", {
    className: "tags",
    style: {
      display: 'none'
    }
  }, "\u5173\u952E\u5B57:", Object(_multiappsharing_public["A" /* stringArray */])(tagsV2).map(function (item, index) {
    if (index >= 3 || !item.name) return false;
    var symbol = Object(_multiappsharing_public["B" /* stringJsonItem */])(item.name, 'symbol');
    var fullname = Object(_multiappsharing_public["B" /* stringJsonItem */])(item.name, 'full_name');
    var link = (item.type === 3 || symbol === '') && _multiappsharing_public["w" /* mixUrl */].news("/tags/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(item.name))) || _multiappsharing_public["w" /* mixUrl */].main("/marketsDetail/".concat(fullname, "/").concat(symbol));
    var name = (item.type === 3 || fullname === '') && item.name || fullname; // return <a
    //     key={item.id}
    //     title={item.name}
    //     href={link}
    //     target="_blank">
    //     &nbsp;&nbsp;
    //     {name}
    //     {index < 2 && index !== stringArray(tagsV2).length - 1 && ','}
    // </a>

    return external_react_default.a.createElement("a", {
      className: "relate-text",
      key: item.id,
      title: item.name,
      href: link,
      target: "_blank"
    }, name);
  })), hotShow && external_react_default.a.createElement("div", {
    className: "hot"
  }, "\u70ED\u5EA6:\xA0", hotCounts))));
};

NewsListItem_NewsListItem.propTypes = {
  title: external_prop_types_["string"].isRequired,
  id: external_prop_types_["string"].isRequired,
  coverPic: external_prop_types_["string"].isRequired,
  author: external_prop_types_["string"].isRequired,
  createdBy: external_prop_types_["string"].isRequired,
  publishTime: external_prop_types_["number"].isRequired
};
/* harmony default export */ var components_NewsListItem = (NewsListItem_NewsListItem);
// CONCATENATED MODULE: ./assets/components/NewsList/index.js








var NewsList_NewsList = function NewsList(props) {
  var newsList = props.newsList,
      loadMore = props.loadMore,
      itemProps = props.itemProps;
  return external_react_default.a.createElement("div", {
    className: "news-list-wrapper"
  }, Object(_multiappsharing_public["n" /* isArray */])(newsList.inforList) && newsList.inforList.map(function (item, index) {
    return external_react_default.a.createElement(components_NewsListItem, extends_default()({
      key: item.id
    }, item, itemProps)); // if (adImplant['3'].length === 0) {
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
  }), external_react_default.a.createElement("div", {
    className: "no-news",
    style: {
      display: newsList.inforList.length === 0 ? 'block' : ''
    }
  }, "\u6682\u65E0\u5185\u5BB9"), props.isMore ? external_react_default.a.createElement(LoadMore["a" /* default */], {
    onClick: loadMore,
    dataleng: newsList.inforList.length,
    style: {
      display: newsList.inforList.length === 0 || newsList.currentPage === newsList.pageCount ? 'none' : 'block'
    }
  }) : '');
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    newsList: state.multi.news.newsList,
    adImplant: state.multi.adImplant
  };
};

/* harmony default export */ var components_NewsList = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps)(NewsList_NewsList));

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(121);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_RightNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);









 // import RightLive from 'multiComps/Home/RightLive'



var NewsHome = function NewsHome(props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;
  /** @desc 获取props  */


  var newsChannelId = props.newsChannelId,
      match = props.match,
      newsList = props.newsList,
      dispatch = props.dispatch,
      hotNews24H = props.hotNews24H;
  /** @desc 加载更多  */

  var lastNews = newsList.inforList.length !== 0 && newsList.inforList[newsList.inforList.length - 1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    currentPage: newsList.currentPage + 1,
    pageSize: newsList.pageSize,
    channelId: match.params.channelId || 0,
    refreshTime: lastNews && lastNews.publishTime
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isMore = _useState4[0],
      setIsMore = _useState4[1];

  var loadMore = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* getNewsList */ "i"])(params, 'channel', 'more')).then(function (res) {
      if (res.code === 1) {
        var curPage = res.obj.currentPage;
        var list = res.obj.inforList;

        if (Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "n"])(list) && list.length !== 0) {
          setParams(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, params, {
            currentPage: curPage + 1,
            refreshTime: list[list.length - 1].publishTime
          }));
        } else {
          _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].info('暂无更多新闻');
          setIsMore(false);
        }
      } else {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].info('获取首页新闻列表错误');
    });
  }, [params]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // 获取24H热门
    dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* get24hHotNews */ "b"])({
      lastDays: 1,
      readCounts: 50,
      newsCounts: 6
    })).then(function (res) {
      if (res.code !== 1) {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].info('获取24H热门新闻错误');
    });
  }, []);
  return [react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "news-list-nav",
    key: "newsListNav"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content"
  }, newsChannelId.slice(0, 17).map(function (item, index) {
    var active = match.params.channelId ? parseInt(item.channelId) === parseInt(match.params.channelId) ? 'active' : '' : index === 0 ? 'active' : '';

    if (item.channelId !== 1) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "w"].news("/list/".concat(item.channelId)),
        className: active,
        key: item.channelId,
        target: "_blank"
      }, item.channelName);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "layout-main news-list-home",
    key: "layoutMain"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "layout-left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NewsList__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    loadMore: loadMore,
    isMore: isMore
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "layout-right"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_RightNews__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    data: hotNews24H,
    ismore: false,
    title: t('24_hot_news')
  })))];
};

var mapStateToProps = function mapStateToProps(state) {
  var news = state.multi.news;
  return {
    newsChannelId: news.newsChannelId,
    newsList: news.newsList,
    hotNewsList: news.hotNewsList,
    hotNews24H: news.hot24HNewsList.inforList
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(NewsHome));

/***/ })

};;
//# sourceMappingURL=containers-Home.js.map