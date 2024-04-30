require("source-map-support").install();
exports.ids = [18];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var _public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var isH5 = props.isH5;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis-ai ".concat(isH5 && 'news-synopsis-ai-h5')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis-ai-text ".concat(isH5 && 'news-synopsis-ai-text-h5')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t('abstract-title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis-ai-text-tip"
  }, t('abstract-news'))));
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aiicon-d797f22d.png";

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: ./assets/redux/actions/news.js + 1 modules
var news = __webpack_require__(22);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// CONCATENATED MODULE: ./assets/containers-m/News/RelatedNewsItem/index.js



var RelatedNewsItem_RelatedNewsItem = function RelatedNewsItem(props) {
  var item = props.item;
  var link = _multiappsharing_public["w" /* mixUrl */].news("/".concat(item.id, ".html"));
  var coverImg = item.coverPic;
  return external_react_default.a.createElement("a", {
    href: link,
    title: item.title,
    key: item.id
  }, external_react_default.a.createElement("div", {
    className: "title"
  }, item.title), external_react_default.a.createElement("div", {
    className: "list-text"
  }, external_react_default.a.createElement("div", {
    className: "time clearfix"
  }, external_react_default.a.createElement("span", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(item.publishTime)))), external_react_default.a.createElement("div", {
    className: "cover-img-sma"
  }, external_react_default.a.createElement("img", {
    src: Object(_multiappsharing_public["B" /* stringJsonItem */])(coverImg, 'wap_small')
  })));
};

/* harmony default export */ var News_RelatedNewsItem = (RelatedNewsItem_RelatedNewsItem);
// CONCATENATED MODULE: ./assets/containers-m/News/RelateNewslist/index.js





/* harmony default export */ var RelateNewslist = (function (props) {
  var relatedNews = props.relatedNews;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  return external_react_default.a.createElement("div", {
    className: "news-correlation"
  }, external_react_default.a.createElement("h6", null, t('news_get_you')), external_react_default.a.createElement("div", {
    className: "news-list-box"
  }, Object(_multiappsharing_public["n" /* isArray */])(relatedNews) && relatedNews.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "news-list-more",
      data: ""
    }, external_react_default.a.createElement(News_RelatedNewsItem, {
      item: item,
      key: index
    }));
  })));
});
// EXTERNAL MODULE: ./assets/components/NewsTip/index.js
var NewsTip = __webpack_require__(118);

// CONCATENATED MODULE: ./assets/containers-m/News/index.js






 // import RelatedNewsItem from './RelatedNewsItem'




var News_News = function News(props) {
  var dispatch = props.dispatch,
      newsCur = props.newsCur,
      relatedNews = props.relatedNews;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var newsContent = decodeURIComponent(newsCur.content);
  var htmlString = newsCur.source && newsCur.source.toLocaleLowerCase() !== 'tradingview' ? newsContent.replace(/<a[^>]+>/g, function (a) {
    if (!/\srel\s*=/.test(a) && a.indexOf('marsbit.co') === -1) {
      return a.replace(/^<a\s/, '<a rel="nofollow" ');
    }

    return a;
  }) : newsContent;
  Object(external_react_["useEffect"])(function () {
    /** @desc 获取相关新闻 */
    dispatch(Object(news["e" /* getRelatedNews */])({
      tags: newsCur.tags,
      id: newsCur.id,
      newsCounts: 6,
      publishTime: newsCur.publishTime
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取相关新闻错误');
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: "details",
    "data-tags": "",
    "data-id": "",
    "data-score": "",
    id: "currNewsBox"
  }, external_react_default.a.createElement("div", {
    className: "details-header"
  }, external_react_default.a.createElement("h6", {
    id: "flashNewsTime"
  }, newsCur.title), external_react_default.a.createElement("div", {
    className: "list-text"
  }, external_react_default.a.createElement("div", {
    className: "author"
  }, newsCur.author), external_react_default.a.createElement("div", {
    className: "time clearfix"
  }, external_react_default.a.createElement("span", null, Object(_multiappsharing_public["l" /* formatTime */])(newsCur.publishTime, 'yyyy-MM-dd'))), external_react_default.a.createElement("div", {
    className: "read-text-number"
  }, t('news_hotd'), "\uFF1A", newsCur.hotCounts)), newsCur.synopsis !== '' && external_react_default.a.createElement("div", {
    className: "news-synopsis"
  }, external_react_default.a.createElement("p", null, newsCur.synopsis.replace('【GPT】', '')), newsCur.synopsis.indexOf('【GPT】') > -1 && external_react_default.a.createElement(NewsTip["a" /* default */], {
    isH5: true
  })), newsCur.subTitle !== '' && external_react_default.a.createElement("div", {
    className: "news-subtitle adc clearfix"
  }, external_react_default.a.createElement("pre", {
    style: {
      lineHeight: '28px',
      color: 'rgba(51,51,51,70%'
    },
    dangerouslySetInnerHTML: {
      __html: newsCur.subTitle
    }
  }))), external_react_default.a.createElement("div", {
    className: "simditor ql-container ql-snow"
  }, newsCur.editorFlag === 1 && external_react_default.a.createElement("div", {
    id: "editorShow",
    className: "details-cont ql-editor",
    dangerouslySetInnerHTML: {
      __html: htmlString
    }
  }), (!newsCur.editorFlag || newsCur.editorFlag === 0) && external_react_default.a.createElement("div", {
    id: "newsDetailsContent",
    className: "simditor-body",
    dangerouslySetInnerHTML: {
      __html: htmlString
    }
  }), external_react_default.a.createElement("div", {
    className: "d-hint"
  }, t('disclaimer_in'))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(RelateNewslist, {
    relatedNews: relatedNews
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    newsCur: state.news.newsDetails.current || {},
    relatedNews: state.news.relatedNewslist.inforList
  };
};

/* harmony default export */ var containers_m_News = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(News_News));

/***/ })

};;
//# sourceMappingURL=containers-m-News.js.map