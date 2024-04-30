require("source-map-support").install();
exports.ids = [33];
exports.modules = {

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./_multiappsharing/components-m/DownloadBtn/index.js
var DownloadBtn = __webpack_require__(231);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// CONCATENATED MODULE: ./assets/containers-m/Home/TopAdCarousel/index.js




/* harmony default export */ var TopAdCarousel = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      primaryImgData: state.home.primaryImgData
    };
  }, external_react_redux_["shallowEqual"]),
      primaryImgData = _useSelector.primaryImgData;

  return external_react_default.a.createElement("div", {
    className: "top-ad-carousel"
  }, external_react_default.a.createElement(react_["Swiper"], {
    id: "newsWrap"
  }, primaryImgData && primaryImgData.map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      className: "",
      key: index
    }, external_react_default.a.createElement("a", {
      title: item.title,
      target: "_self",
      href: item.url
    }, external_react_default.a.createElement("img", {
      src: item.mImgSrc,
      alt: item.title
    })), external_react_default.a.createElement("span", {
      className: "img-news-title"
    }, item.title));
  })));
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(18);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/containers-m/Home/NewsListItem/index.js



 // import SimpleImg from './SimpleImg'

var NewsListItem_NewsListItem = function NewsListItem(props) {
  var title = props.title,
      nickName = props.nickName,
      coverPic = props.coverPic,
      publishTime = props.publishTime,
      id = props.id,
      serverTime = props.serverTime;
  var newsLink = "/newsdetail/".concat(id, ".html");
  var videoImg = Object(_multiappsharing_public["G" /* stringJsonItem */])(coverPic, 'wap_small');
  return external_react_default.a.createElement("div", {
    className: "news-list-more"
  }, external_react_default.a.createElement("a", {
    className: "item-left",
    title: title,
    href: newsLink,
    target: "_self"
  }, external_react_default.a.createElement("div", {
    className: "title"
  }, title), external_react_default.a.createElement("div", {
    className: "list-text"
  }, external_react_default.a.createElement("div", {
    className: "bottom-left clearfix"
  }, external_react_default.a.createElement("div", {
    className: "nick-name"
  }, nickName), external_react_default.a.createElement("div", {
    className: "time"
  }, " ", external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(publishTime, serverTime && serverTime !== '' && serverTime))))), external_react_default.a.createElement("div", {
    className: "cover-img-sma-first"
  }, external_react_default.a.createElement("img", {
    src: videoImg
  }))));
};

NewsListItem_NewsListItem.propTypes = {
  title: external_prop_types_["string"].isRequired
};
/* harmony default export */ var Home_NewsListItem = (NewsListItem_NewsListItem);
// CONCATENATED MODULE: ./assets/containers-m/Home/FlashListItem/index.js





var FlashListItem_NewsListItem = function NewsListItem(props) {
  var title = props.title,
      createdTime = props.createdTime,
      id = props.id,
      content = props.content,
      serverTime = props.serverTime;
  var startIndex = content.indexOf('【') === -1 ? 0 : content.indexOf('【') + 1;
  var endIndex = content.indexOf('】') === -1 ? 0 : content.indexOf('】');
  var flashTitle = content.substring(startIndex, endIndex);
  var flashLink = "/flash/".concat(id, ".html");
  return external_react_default.a.createElement("div", {
    className: "news-list-more"
  }, external_react_default.a.createElement("a", {
    title: title,
    href: flashLink,
    target: "_self"
  }, external_react_default.a.createElement("div", {
    className: "flashTitle"
  }, flashTitle), external_react_default.a.createElement("div", {
    className: "list-text"
  }, external_react_default.a.createElement("div", {
    className: "bottom-left clearfix"
  }, external_react_default.a.createElement("div", {
    className: "nick-name txt_0A7FF2"
  }, "\u5FEB\u8BAF"), external_react_default.a.createElement("div", {
    className: "time"
  }, "\xB7", external_react_default.a.createElement("span", null, " ", external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(createdTime, serverTime && serverTime !== '' && serverTime))))))));
};

FlashListItem_NewsListItem.propTypes = {
  title: external_prop_types_["string"].isRequired
};
/* harmony default export */ var FlashListItem = (FlashListItem_NewsListItem);
// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./assets/redux/actions/home.js + 1 modules
var home = __webpack_require__(15);

// CONCATENATED MODULE: ./assets/containers-m/Home/NewsContent/index.js











/* harmony default export */ var NewsContent = (function () {
  var isLoading = Object(external_react_["useRef"])(false); // 是否在加载中

  var paramObj = {
    currentPage: 1
  };

  var _useState = Object(external_react_["useState"])(paramObj),
      _useState2 = slicedToArray_default()(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      newsHeadlinesData: state.home.newsHeadlinesData
    };
  }),
      newsHeadlinesData = _useSelector.newsHeadlinesData;

  var _useState3 = Object(external_react_["useState"])(newsHeadlinesData),
      _useState4 = slicedToArray_default()(_useState3, 2),
      newsList = _useState4[0],
      setNewsList = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    var scrollFunc = Object(_multiappsharing_public["L" /* windowScroll */])(function (res) {
      if (res !== 'down' || isLoading.current) return false;
      var $btnMore = document.getElementById('btnMore');

      if (Object(_multiappsharing_public["E" /* scrollOffset */])().top + Object(_multiappsharing_public["K" /* windowOffset */])().height > Object(_multiappsharing_public["g" /* elementOffset */])($btnMore).top - Object(_multiappsharing_public["K" /* windowOffset */])().height / 2) {
        loadMore();
      }
    });
    return function () {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [params, isLoading, newsHeadlinesData]);
  var loadMore = Object(external_react_["useCallback"])(function () {
    if (isLoading.current) return false;
    isLoading.current = true;
    var data = newsHeadlinesData.concat();
    var time = data && Object(_multiappsharing_public["n" /* isArray */])(data) && data.length > 2 ? data[data.length - 1].publishTime : new Date().getTime();
    dispatch(Object(home["g" /* getNewsHeadlines */])(time, 'isMore', true)).then(function (res) {
      if (res.code === 1) {
        isLoading.current = false;
        var list = res.obj;

        if (!Object(_multiappsharing_public["n" /* isArray */])(list) || list.length === 0) {
          Toast["a" /* default */].info('暂无更多新闻');
        } else {
          setParams(objectSpread_default()({}, params, {
            currentPage: params.currentPage + 1
          }));
        }
      } else {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取列表错误');
    });
  }, [params, isLoading]);
  Object(external_react_["useEffect"])(function () {
    setNewsList(newsHeadlinesData);
  }, [newsHeadlinesData]);
  return external_react_default.a.createElement("div", {
    className: "news-box"
  }, external_react_default.a.createElement("div", {
    className: "list-box"
  }, newsList && newsList.map(function (item, index) {
    var itemList = item.infoObj;

    if (item.infoType === 'news') {
      return external_react_default.a.createElement(Home_NewsListItem, extends_default()({}, itemList, {
        key: index
      }));
    } else if (item.infoType === 'live') {
      return external_react_default.a.createElement(FlashListItem, extends_default()({}, itemList, {
        key: index
      }));
    }
  })), external_react_default.a.createElement("div", {
    className: "flash-more-btn"
  }, external_react_default.a.createElement("div", {
    className: "btn-more",
    id: "btnMore"
  }, "\u52A0\u8F7D\u66F4\u591A")));
});
// CONCATENATED MODULE: ./assets/containers-m/Home/index.js












var Home_Home =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Home, _Component);

  function Home() {
    classCallCheck_default()(this, Home);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Home).apply(this, arguments));
  }

  createClass_default()(Home, [{
    key: "render",
    value: function render() {
      // const { userInfo } = this.props
      return external_react_default.a.createElement("div", {
        className: "m-home"
      }, external_react_default.a.createElement(TopAdCarousel, null), external_react_default.a.createElement(NewsContent, null), external_react_default.a.createElement(DownloadBtn["a" /* default */], {
        type: "home"
      }));
    }
  }]);

  return Home;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.login.userInfo
  };
};

/* harmony default export */ var containers_m_Home = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Home_Home));

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return props.openInBrowser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download-app-wechat-tips",
    onClick: function onClick() {
      return props.setOpenInBrowser(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download-app-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00"
  })));
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);





var checkOpen = function checkOpen(callback) {
  var _clickTime = +new Date(); // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束


  var _count = 0;
  var intHandle;
  intHandle = setInterval(function () {
    _count++;
    var elsTime = +new Date() - _clickTime;

    if (_count >= 100 || elsTime > 3000) {
      clearInterval(intHandle);

      if (elsTime > 3000 || document.hidden || document.webkitHidden) {
        console.log('正在打开app');
      } else {
        callback();
      }
    }
  }, 20);
};
/**
 * @params type 当前页面类型 id文章视频等相对应的id
 * newsDetail新闻详情，newsList新闻列表
 * flashDetail快讯详情，flashList快讯列表
 * videoDetail视频详情，videoList视频列表
 * authorCenter作者中心
 * 不传type默认跳转到首页
 * 返回appDownload 传递以上参数
 * 并返回openInBrowser是否提示浏览器中打开
 * */


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var iosUrl = 'https://itunes.apple.com/cn/app/id1343659925?mt=8';
  var andUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('');
  var openApp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (url, doNotDownload) {
    location.href = url;
    checkOpen(function () {
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "p"])() && !doNotDownload) location.href = iosUrl;
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])() && !doNotDownload) location.href = andUrl.current;
    });
  }, [andUrl]);
  var appDownload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (type, id, obj) {
    var doNotDownload = obj ? obj.doNotDownload : false;
    var openInBrowser = false;

    if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "y"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "p"])()) {
      // 打开appStore
      location.href = iosUrl;
    } else if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "y"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])()) {
      // 提示浏览器中打开
      openInBrowser = true;
    } else {
      switch (type) {
        case 'liveshare':
          openApp("marsbusiness://liveshare/".concat(id), doNotDownload);
          break;

        case 'newsDetail':
          openApp("marsbusiness://news/".concat(id), doNotDownload);
          break;

        case 'newsList':
          openApp("marsbusiness://newlist/".concat(id), doNotDownload);
          break;

        case 'flashDetail':
          openApp("marsbusiness://fast/".concat(id), doNotDownload);
          break;

        case 'flashList':
          openApp("marsbusiness://home/fast", doNotDownload);
          break;

        case 'videoDetail':
          openApp("marsbusiness://video/".concat(id), doNotDownload);
          break;

        case 'videoList':
          openApp("marsbusiness://home/video", doNotDownload);
          break;

        case 'authorCenter':
          openApp("marsbusiness://authorCenter/".concat(id), doNotDownload);
          break;

        case 'noticeDetail':
          openApp("marsbusiness://noticeDetail/".concat(id), doNotDownload);
          break;

        default:
          openApp("marsbusiness://home/new", doNotDownload);
      }
    }

    return openInBrowser;
  }, [andUrl]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_redux_actions_public__WEBPACK_IMPORTED_MODULE_1__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
      if (res.code === 1) {
        andUrl.current = res.obj;
      } else {
        _components_Toast__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, []);
  return appDownload;
});

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wechat-download-tips-fef770a1.png";

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var _public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(232);
/* harmony import */ var _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      iphonex = _useState2[0],
      setIphonex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      openInBrowser = _useState4[0],
      setOpenInBrowser = _useState4[1];

  var appDownload = Object(_public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
  var clickDownload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setOpenInBrowser(appDownload(props.type, props.id));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* isIphoneX */ "q"])() && setIphonex(true);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "download-app-wrapper ".concat(iphonex ? 'iphonex' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "download-app-btn",
    onClick: clickDownload
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_cellphone_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "\u4E0B\u8F7DMarsBit"
  }), "\u4E0B\u8F7DMarsBit APP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    openInBrowser: openInBrowser,
    setOpenInBrowser: setOpenInBrowser
  }));
});

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cellphone-icon-524dafc5.png";

/***/ })

};;
//# sourceMappingURL=containers-m-Home.js.map