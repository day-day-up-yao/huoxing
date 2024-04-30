require("source-map-support").install();
exports.ids = [27];
exports.modules = {

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// CONCATENATED MODULE: ./assets/containers/VideoDetail/LeftVideo/index.js




 // import useTWebLivePlayer from '../../../public/hooks/useNewVideoPlayer'

/* harmony default export */ var LeftVideo = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      videoDetail: state.video.videoDetail
    };
  }, external_react_redux_["shallowEqual"]),
      videoDetail = _useSelector.videoDetail;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    if (!videoDetail) {
      setTimeout(function () {
        Toast["a" /* default */].info('视频不存在或已删除');
      }, 500);
      return;
    }

    var playbackUrl = JSON.parse(videoDetail.current.url);

    if (!playbackUrl) {
      Toast["a" /* default */].info('未获取到视频地址，请刷新试试');
      return;
    }

    playbackUrl = playbackUrl[0].fileUrl;
    setUrl(playbackUrl);
  }, [videoDetail]); // const {
  //     player,
  //     setMutedBtnShow,
  //     mutedBtnShow
  // } = useTWebLivePlayer({ elementID: 'video-detail-left-video' })

  return external_react_default.a.createElement("div", {
    className: "video-detail-left-video"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-left-video-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-video-wrapper"
  }, external_react_default.a.createElement("div", {
    id: "video-detail-left-video",
    style: {
      width: '100%',
      height: '100%',
      zIndex: 0
    }
  }, external_react_default.a.createElement("video", {
    // muted
    preload: "auto",
    autoPlay: "autoplay",
    controls: true,
    src: url,
    className: "topshow-video",
    poster: JSON.parse(videoDetail.current.coverPic).video_pc
  })))));
});
// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./assets/containers/VideoDetail/Image/video_author_arrow.png
var video_author_arrow = __webpack_require__(479);
var video_author_arrow_default = /*#__PURE__*/__webpack_require__.n(video_author_arrow);

// EXTERNAL MODULE: ./assets/containers/VideoDetail/Image/video_author_blue.svg
var video_author_blue = __webpack_require__(480);
var video_author_blue_default = /*#__PURE__*/__webpack_require__.n(video_author_blue);

// EXTERNAL MODULE: ./assets/containers/VideoDetail/Image/video_author_orange.svg
var video_author_orange = __webpack_require__(481);
var video_author_orange_default = /*#__PURE__*/__webpack_require__.n(video_author_orange);

// CONCATENATED MODULE: ./assets/containers/VideoDetail/LeftAuthor/index.js








/* harmony default export */ var LeftAuthor = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      videoDetail: state.video.videoDetail
    };
  }, external_react_redux_["shallowEqual"]),
      videoDetail = _useSelector.videoDetail;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1]; // 是否展开简介
  // 点击展开按钮事件


  var onBtnOpenClick = Object(external_react_["useCallback"])(function () {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return external_react_default.a.createElement("div", {
    className: "video-detail-left-author"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-left-author-title"
  }, videoDetail.current.title), external_react_default.a.createElement("a", {
    className: "video-detail-left-author-header-box",
    href: _multiappsharing_public["A" /* mixUrl */].main("/userCenter/".concat(videoDetail.current.createdBy)),
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "video-detail-left-author-header-img",
    src: videoDetail.current.iconUrl,
    alt: videoDetail.current.nickName
  }), external_react_default.a.createElement("div", {
    className: "video-detail-left-author-header-text"
  }, videoDetail.current.nickName), videoDetail.current.vGrade && parseInt(videoDetail.current.vGrade) === 1 && external_react_default.a.createElement("img", {
    className: "video-detail-left-author-header-icon",
    src: video_author_orange_default.a
  }), videoDetail.current.vGrade && parseInt(videoDetail.current.vGrade) === 2 && external_react_default.a.createElement("img", {
    className: "video-detail-left-author-header-icon",
    src: video_author_blue_default.a
  }), videoDetail.current.vGrade && parseInt(videoDetail.current.vGrade) === 3 && external_react_default.a.createElement("img", {
    className: "video-detail-left-author-header-icon",
    src: video_author_blue_default.a
  }), external_react_default.a.createElement("div", {
    className: "video-detail-left-author-header-text"
  }, "\u53D1\u5E03\u4E8E".concat(Object(_multiappsharing_public["l" /* formatTime */])(videoDetail.current.publishTime, 'yyyy年MM月dd日 hh:mm'), " \xB7 ").concat(videoDetail.current.hotCounts, " \u64AD\u653E"))), external_react_default.a.createElement("div", {
    className: "video-detail-left-author-content-box"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-left-author-content-text",
    style: {
      display: isOpen ? 'block' : '-webkit-box'
    }
  }, videoDetail.current.content), videoDetail.current.content && videoDetail.current.content.length >= 46 && external_react_default.a.createElement("div", {
    className: "video-detail-left-author-content-btn",
    onClick: onBtnOpenClick
  }, isOpen ? '收起' : '展开', external_react_default.a.createElement("img", {
    className: "video-detail-left-author-content-btn-img",
    src: video_author_arrow_default.a,
    style: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    }
  }))), external_react_default.a.createElement("div", {
    className: "video-detail-left-author-tag-box"
  }, videoDetail.current.tagsV2 && Object(_multiappsharing_public["F" /* stringArray */])(videoDetail.current.tagsV2).length !== 0 && Object(_multiappsharing_public["F" /* stringArray */])(videoDetail.current.tagsV2).map(function (item, index) {
    if (index >= 3 || !item.name) return false;
    var symbol = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'symbol');
    var fullname = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'full_name');
    var link = (item.type === 3 || symbol === '') && _multiappsharing_public["A" /* mixUrl */].news("/tags/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(item.name))) || _multiappsharing_public["A" /* mixUrl */].main("/marketsDetail/".concat(fullname, "/").concat(symbol));
    var name = (item.type === 3 || fullname === '') && item.name || fullname;
    return external_react_default.a.createElement("a", {
      className: "video-detail-left-author-tag-item",
      key: index,
      title: item.name,
      href: link,
      target: "_blank"
    }, name);
  })));
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// CONCATENATED MODULE: ./assets/components/VideoDetail/RightRecommendItem/index.js



/* harmony default export */ var RightRecommendItem = (function (props) {
  var id = props.id,
      title = props.title,
      publishTime = props.publishTime,
      coverPic = props.coverPic,
      author = props.author,
      hotCounts = props.hotCounts;
  var imgUrl = coverPic ? JSON.parse(coverPic).pc : '';
  return external_react_default.a.createElement("a", {
    className: "video-detail-right-recommend-item",
    href: _multiappsharing_public["A" /* mixUrl */].main("/video/detail/".concat(id, "/").concat(publishTime)),
    target: "_blank",
    title: title
  }, external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-left"
  }, external_react_default.a.createElement("img", {
    className: "video-detail-right-recommend-item-img",
    src: imgUrl
  })), external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-right"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-title"
  }, title), external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-text-box"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-text"
  }, author), external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-text-line"
  }), external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-item-text"
  }, "\u64AD\u653E\u91CF ".concat(hotCounts)))));
});
// CONCATENATED MODULE: ./assets/containers/VideoDetail/RightRecommend/index.js





/* harmony default export */ var RightRecommend = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      videoByTagsListData: state.video.videoByTagsListData,
      videoRecommendListData: state.video.videoRecommendListData
    };
  }, external_react_redux_["shallowEqual"]),
      videoByTagsListData = _useSelector.videoByTagsListData,
      videoRecommendListData = _useSelector.videoRecommendListData;

  return external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-title-box"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-line"
  }), external_react_default.a.createElement("div", {
    className: "video-detail-right-recommend-title"
  }, "\u7CBE\u9009\u89C6\u9891")), videoByTagsListData && videoByTagsListData.inforList.length > 0 && videoByTagsListData.inforList.map(function (item, index) {
    return external_react_default.a.createElement(RightRecommendItem, extends_default()({}, item, {
      key: index
    }));
  }), videoByTagsListData && videoRecommendListData && videoByTagsListData.inforList.length < 4 && videoRecommendListData.slice(0, parseInt(4 - videoByTagsListData.inforList.length)).map(function (item, index) {
    return external_react_default.a.createElement(RightRecommendItem, extends_default()({}, item, {
      key: index
    }));
  }));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(189);

// CONCATENATED MODULE: ./assets/containers/VideoDetail/index.js



 // import LeftComment from './LeftComment'



/* harmony default export */ var VideoDetail = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    className: "video-detail-page"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-page-main-box"
  }, external_react_default.a.createElement("div", {
    className: "video-detail-page-main-box-left"
  }, external_react_default.a.createElement(LeftVideo, null), external_react_default.a.createElement(LeftAuthor, null)), external_react_default.a.createElement("div", {
    className: "video-detail-page-main-box-right"
  }, external_react_default.a.createElement(RightRecommend, null), external_react_default.a.createElement(RightDownloadBox["a" /* default */], null))));
});

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(190);
/* harmony import */ var _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(191);
/* harmony import */ var _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
/* harmony import */ var _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var isLive = props.isLive;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      and = _useState2[0],
      setAnd = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_redux_actions_public__WEBPACK_IMPORTED_MODULE_3__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
      if (res.code === 1) {
        setAnd(res.obj);
      } else {
        _Toast__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, [and]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box ".concat(isLive !== undefined ? 'right-download-box-live' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-title"
  }, t('download_marsbit_app')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-content"
  }, t('marsbit_app_desc')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "right-download-box-btn right-download-box-btn-color1",
    href: "https://apps.apple.com/cn/app/id1343659925",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "right-download-box-btn-img",
    src: _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      marginRight: '8px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-text"
  }, "iPhone \u7248")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "right-download-box-btn right-download-box-btn-color2",
    href: and,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "right-download-box-btn-img",
    src: _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      marginRight: '6px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-text"
  }, "Android \u7248")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-code"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-code-show"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "right-download-box-btn-code-show-img",
    src: _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
  })))));
});

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-ios-bfae97d1.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-android-e33868e0.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-QRcode-e79e9b7e.jpg";

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "video_author_arrow-02df9638.png";

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "video_author_blue-77c6a4e4.svg";

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "video_author_orange-ddf372b8.svg";

/***/ })

};;
//# sourceMappingURL=containers-VideoDetail.js.map