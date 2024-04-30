require("source-map-support").install();
exports.ids = [2];
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

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "huoxing-mark-bg-7009e2cf.jpg";

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(25);

// EXTERNAL MODULE: ./assets/components/NewsList/index.js + 2 modules
var NewsList = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/containers/AuthorDetails/images/huoxing-mark-bg.jpg
var huoxing_mark_bg = __webpack_require__(142);
var huoxing_mark_bg_default = /*#__PURE__*/__webpack_require__.n(huoxing_mark_bg);

// CONCATENATED MODULE: ./assets/containers/AuthorDetails/AuthorBanner/index.js




var AuthorBanner_AuthorBanner = function AuthorBanner(props) {
  return external_react_default.a.createElement("div", {
    className: "author-banner"
  }, external_react_default.a.createElement("div", {
    className: "banner-cont"
  }, external_react_default.a.createElement("div", {
    className: "author-introduce"
  }, external_react_default.a.createElement("div", {
    className: "introduce-cont"
  }, external_react_default.a.createElement("div", {
    className: "author-img"
  }), external_react_default.a.createElement("div", {
    className: "author-account"
  }, external_react_default.a.createElement("div", {
    className: "attention-state not"
  }, "\u5173\u6CE8"), external_react_default.a.createElement("h5", null, "\u817E\u8BAF\u79D1\u6280 "), external_react_default.a.createElement("p", null, "\u817E\u8BAF\u7F51\u4E94\u5927\u6838\u5FC3\u8D44\u8BAF\u9891\u9053\u4E4B\u4E00\uFF0C\u56CA\u62ECBusiness Insider\u7B49\u591A\u5BB6\u7F8E\u56FD\u9876\u5C16\u79D1\u6280\u5A92\u4F53\u7684\u72EC\u5BB6\u4E2D\u6587\u7248\u6743\u3002\u817E\u8BAF\u7F51\u4E94\u5927\u6838\u5FC3\u8D44\u8BAF\u9891\u9053\u4E4B\u4E00\uFF0C\u56CA\u62ECBusiness Insider\u7B49\u591A\u5BB6\u7F8E\u56FD\u9876\u5C16\u79D1\u6280\u5A92\u4F53\u7684\u72EC\u5BB6\u4E2D\u6587\u7248\u6743\u3002"))), external_react_default.a.createElement("div", {
    className: "author-cont-type"
  }, external_react_default.a.createElement("p", {
    className: "active"
  }, "\u4ED6\u7684\u6587\u7AE0 ", external_react_default.a.createElement("span", null, "100")), external_react_default.a.createElement("p", null, "\u4ED6\u7684\u89C6\u9891 ", external_react_default.a.createElement("span", null, "100")), external_react_default.a.createElement("p", null, "\u4ED6\u7684\u6536\u85CF ", external_react_default.a.createElement("span", null, "100")))), external_react_default.a.createElement("div", {
    className: "banner-hxh"
  }, external_react_default.a.createElement("a", {
    href: ""
  }, external_react_default.a.createElement("img", {
    src: huoxing_mark_bg_default.a,
    alt: ""
  })))));
};

/* harmony default export */ var AuthorDetails_AuthorBanner = (AuthorBanner_AuthorBanner);
// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: ./assets/redux/actions/author.js + 1 modules
var author = __webpack_require__(33);

// CONCATENATED MODULE: ./assets/components/UserContRight/assembly/mainImg.js










var mainImg_MainImg =
/*#__PURE__*/
function (_Component) {
  inherits_default()(MainImg, _Component);

  function MainImg() {
    classCallCheck_default()(this, MainImg);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(MainImg).apply(this, arguments));
  }

  createClass_default()(MainImg, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://www.huoxing24.com/img/userCenter/achievement-1-1beeaf265f.png",
        alt: "h"
      }), "\u5171\u53D1\u8868 ", external_react_default.a.createElement("span", null, this.props.data.authorFollowCounts), "\u7BC7\u6587\u7AE0\uFF0C", external_react_default.a.createElement("span", null, this.props.data.videoCounts), "\u90E8\u7535\u5F71"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://www.huoxing24.com/img/userCenter/achievement-2-20e377003d.png",
        alt: "h"
      }), "\u53D1\u5E03\u7684\u6587\u7AE0\u603B\u70ED\u5EA6\u8D85\u8FC7", external_react_default.a.createElement("span", null, this.props.data.newsHotCounts)), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
        src: "https://www.huoxing24.com/img/userCenter/achievement-3-bfaa114c91.png",
        alt: "h"
      }), "\u6587\u7AE0\u5171\u83B7\u5F97", external_react_default.a.createElement("span", null, this.props.data.newsCommentCounts), "\u6B21\u8BC4\u8BBA"));
    }
  }]);

  return MainImg;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.author.authorAchieve
  };
};

/* harmony default export */ var mainImg = (Object(external_react_redux_["connect"])(mapStateToProps, {
  getAuthorAchieve: author["b" /* getAuthorAchieve */]
})(mainImg_MainImg));
// CONCATENATED MODULE: ./assets/components/UserContRight/assembly/navHeader.js







 // import getCollectAuthor from '../../../redux/actions/author'
// import Toast from 'multiComps/Toast'

var navHeader_NavHeader =
/*#__PURE__*/
function (_Component) {
  inherits_default()(NavHeader, _Component);

  function NavHeader() {
    classCallCheck_default()(this, NavHeader);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(NavHeader).apply(this, arguments));
  }

  createClass_default()(NavHeader, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "nav_header clearfix"
      }, external_react_default.a.createElement("div", {
        className: "left"
      }, external_react_default.a.createElement("p", null, "\u5173\u6CE8"), " ", external_react_default.a.createElement("h3", null, this.props.data.newsCounts)), external_react_default.a.createElement("div", {
        className: "right"
      }, external_react_default.a.createElement("p", null, "\u7C89\u4E1D"), " ", external_react_default.a.createElement("h3", null, this.props.data.newsHotCounts)));
    }
  }]);

  return NavHeader;
}(external_react_["Component"]);

var navHeader_mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.author.authorAchieve
  };
};

/* harmony default export */ var navHeader = (Object(external_react_redux_["connect"])(navHeader_mapStateToProps)(navHeader_NavHeader));
// CONCATENATED MODULE: ./assets/components/UserContRight/assembly/swiperSlide.js









var swiperSlide_SwiperSlide =
/*#__PURE__*/
function (_Component) {
  inherits_default()(SwiperSlide, _Component);

  function SwiperSlide(props) {
    var _this;

    classCallCheck_default()(this, SwiperSlide);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(SwiperSlide).call(this, props));

    _this.swSlide = function () {
      var setVal = function setVal() {
        _this.setState({
          arrList: _this.state.newArr[_this.state.flag]
        });
      }; // 从接口获取数据，每6条数据为一组怎样实现点击按钮进行换一批


      if (_this.state.flag < _this.state.newArrLength - 1) {
        _this.setState({
          flag: _this.state.flag + 1
        }, setVal);
      } else {
        _this.setState({
          flag: 0
        }, setVal);
      }
    };

    _this.state = {
      flag: 0,
      arrList: [],
      newArr: [],
      newArrLength: 0
    };
    return _this;
  }

  createClass_default()(SwiperSlide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 数据的遍历和分组
      var newArr = this.state.newArr;
      var cool = this.props.authorData;
      var arrLength = Object.keys(cool).length; // 数组长度

      var num = 6; // 每页显示 6 条

      var index = 0;

      for (var i = 0; i < arrLength; i++) {
        if (i % num === 0 && i !== 0) {
          // 可以被 6 整除
          newArr.push(cool.slice(index, i));
          index = i;
        }

        if (i + 1 === arrLength) {
          newArr.push(cool.slice(index, i + 1));
        }
      }

      this.setState({
        newArr: newArr,
        arrList: newArr[0],
        newArrLength: newArr.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      var postItems = this.state.arrList.map(function (data) {
        return (// console.log(data)
          external_react_default.a.createElement("div", {
            className: "list-author",
            key: data.passportId
          }, external_react_default.a.createElement("a", {
            target: "_blank",
            href: "#"
          }, external_react_default.a.createElement("div", {
            className: "list-author-img"
          }, external_react_default.a.createElement("img", {
            title: data.iconUrl,
            src: data.iconUrl,
            alt: data.iconUrl
          }), external_react_default.a.createElement("span", {
            className: "v-blue",
            title: "\u4F01\u4E1A\u7528\u6237",
            style: {
              backgroundImage: 'url(' + data.shareLink + ')'
            }
          })), external_react_default.a.createElement("div", {
            className: "list-author-text"
          }, external_react_default.a.createElement("h3", {
            title: data.nickName
          }, data.nickName), external_react_default.a.createElement("p", {
            title: data.introduce
          }, data.introduce))))
        );
      });
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "author-title clearfix"
      }, external_react_default.a.createElement("h3", null, "MarsBit\u4E13\u680F\u4F5C\u5BB6"), external_react_default.a.createElement("div", {
        className: "next-page",
        tabIndex: "0",
        role: "button",
        onClick: this.swSlide
      }, "\u6362\u4E00\u6279")), postItems);
    }
  }]);

  return SwiperSlide;
}(external_react_["Component"]);

var swiperSlide_mapStateToProps = function mapStateToProps(state) {
  return {
    authorData: state.author.author.inforList
  };
};

/* harmony default export */ var swiperSlide = (Object(external_react_redux_["connect"])(swiperSlide_mapStateToProps)(swiperSlide_SwiperSlide));
// EXTERNAL MODULE: ./_multiappsharing/components/RightItemWrapper/index.js
var RightItemWrapper = __webpack_require__(106);

// CONCATENATED MODULE: ./assets/components/UserContRight/index.js








var UserContRight_UserContRight = function UserContRight(props) {
  return external_react_default.a.createElement("div", {
    className: "userContRight-nav"
  }, external_react_default.a.createElement(RightItemWrapper["a" /* default */], {
    firstItem: true
  }, external_react_default.a.createElement(navHeader, null)), external_react_default.a.createElement(RightItemWrapper["a" /* default */], null, external_react_default.a.createElement("div", {
    className: "nav_main clearfix"
  }, external_react_default.a.createElement("h4", null, "\u4E2A\u4EBA\u6210\u5C31"), external_react_default.a.createElement(mainImg, null))), external_react_default.a.createElement(RightItemWrapper["a" /* default */], null, external_react_default.a.createElement("div", {
    className: "index-news-right clearfix"
  }, external_react_default.a.createElement(swiperSlide, null), external_react_default.a.createElement("a", {
    href: "/author",
    className: "author-more",
    target: "_black"
  }, "\u67E5\u770B\u66F4\u591A"))));
};

/* harmony default export */ var components_UserContRight = (Object(external_react_redux_["connect"])()(UserContRight_UserContRight));
// CONCATENATED MODULE: ./assets/containers/AuthorDetails/index.js



 // import { getNewsList } from 'multiRedux/actions/news'
// import Toast from 'multiComps/Toast'
// import { isArray } from 'multiPublic/index'




var AuthorDetails_AuthorDetails = function AuthorDetails(props) {
  return [external_react_default.a.createElement(AuthorDetails_AuthorBanner, {
    key: "authorBanner"
  }), external_react_default.a.createElement("div", {
    className: "layout-main",
    key: "authorContent"
  }, external_react_default.a.createElement("div", {
    className: "layout-left"
  }, external_react_default.a.createElement(NewsList["a" /* default */], null)), external_react_default.a.createElement("div", {
    className: "layout-right"
  }, external_react_default.a.createElement(components_UserContRight, null)))];
};

var AuthorDetails_mapStateToProps = function mapStateToProps(state) {
  return {
    authorNewsList: state.author.authorNewsList
  };
};

/* harmony default export */ var containers_AuthorDetails = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(AuthorDetails_mapStateToProps)(AuthorDetails_AuthorDetails));

/***/ })

};;
//# sourceMappingURL=containers-AuthorDetails.js.map