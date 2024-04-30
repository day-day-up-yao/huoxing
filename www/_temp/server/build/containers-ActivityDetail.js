require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/containers/ActivityDetail/TopInfo/index.js




/* harmony default export */ var TopInfo = (function (props) {
  var title = props.title,
      coverPic = props.coverPic,
      sponsor = props.sponsor,
      numPeople = props.numPeople,
      connection = props.connection,
      detailPlace = props.detailPlace,
      startTime = props.startTime,
      endTime = props.endTime,
      fee = props.fee,
      url = props.url;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      shareCon = _useState2[0],
      setShareCon = _useState2[1]; // 由于使用window，且需要在didMount中生成。直接生成会出现client的div和server的div不匹配错误
  // 生成分享按钮事件


  var shareGenerate = Object(external_react_["useCallback"])(function () {
    var SocialShare = __webpack_require__(489)["default"];

    return external_react_default.a.createElement(SocialShare, {
      url: window.location.href,
      title: title,
      sites: ['qq', 'weibo', 'wechat']
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    setShareCon(shareGenerate());
  }, []);
  return external_react_default.a.createElement("div", {
    className: "activity-detail-top-info"
  }, external_react_default.a.createElement("div", {
    className: "activity-detail-top-info-wrap"
  }, external_react_default.a.createElement("div", {
    className: "activity-img"
  }, external_react_default.a.createElement("img", {
    src: coverPic !== '' ? JSON.parse(coverPic).pc : '',
    title: "",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "activity-right"
  }, external_react_default.a.createElement("div", {
    className: "activity-message"
  }, external_react_default.a.createElement("h1", null, title), external_react_default.a.createElement("div", {
    className: "message-left"
  }, external_react_default.a.createElement("div", {
    className: "sponsor"
  }, external_react_default.a.createElement("span", null, "\u4E3B\u529E\u65B9\uFF1A"), external_react_default.a.createElement("p", null, sponsor)), numPeople && numPeople !== 0 ? external_react_default.a.createElement("div", {
    className: "person-num"
  }, external_react_default.a.createElement("span", null, "\u6D3B\u52A8\u4EBA\u6570\uFF1A"), external_react_default.a.createElement("p", null, "".concat(numPeople, "\u4EBA"))) : null, external_react_default.a.createElement("div", {
    className: "contact"
  }, external_react_default.a.createElement("span", null, "\u8054\u7CFB\u65B9\u5F0F\uFF1A"), external_react_default.a.createElement("p", null, connection))), external_react_default.a.createElement("div", {
    className: "message-right"
  }, external_react_default.a.createElement("div", {
    className: "site"
  }, external_react_default.a.createElement("span", null, "\u6D3B\u52A8\u5730\u70B9\uFF1A"), external_react_default.a.createElement("p", null, detailPlace)), external_react_default.a.createElement("div", {
    className: "time"
  }, external_react_default.a.createElement("span", null, "\u6D3B\u52A8\u65F6\u95F4\uFF1A"), external_react_default.a.createElement("p", null, parseInt(endTime) - parseInt(startTime) < 86400000 ? Object(_multiappsharing_public["l" /* formatTime */])(startTime, 'yy年MM月dd日') : "".concat(Object(_multiappsharing_public["l" /* formatTime */])(startTime, 'yy年MM月dd日'), "-").concat(Object(_multiappsharing_public["l" /* formatTime */])(endTime, 'yy年MM月dd日')))), fee !== '' ? external_react_default.a.createElement("div", {
    className: "money"
  }, external_react_default.a.createElement("span", null, "\u8D39\u7528\uFF1A"), external_react_default.a.createElement("p", null, fee)) : null), url !== '' ? external_react_default.a.createElement("a", {
    className: "activityBtn",
    href: url,
    title: "\u7ACB\u5373\u53C2\u4E0E",
    target: "_blank"
  }, "\u7ACB\u5373\u53C2\u4E0E") : external_react_default.a.createElement("div", {
    className: "notActivityBtn",
    title: "\u7ACB\u5373\u53C2\u4E0E"
  }, "\u7ACB\u5373\u53C2\u4E0E"), external_react_default.a.createElement("div", {
    id: "shareBox"
  }, external_react_default.a.createElement("font", null, "\u5206\u4EAB"), typeof window !== 'undefined' && shareCon)))));
});
// CONCATENATED MODULE: ./assets/containers/ActivityDetail/BottomInfo/index.js


/* harmony default export */ var BottomInfo = (function (props) {
  var synopsis = props.synopsis,
      content = props.content;
  return external_react_default.a.createElement("div", {
    className: "activity-detail-bottom-info"
  }, external_react_default.a.createElement("div", {
    className: "activity-detail-bottom-info-box"
  }, external_react_default.a.createElement("div", {
    className: "feature"
  }, external_react_default.a.createElement("h6", null, external_react_default.a.createElement("span", null), "\u6D3B\u52A8\u7279\u8272"), external_react_default.a.createElement("div", {
    className: "feature-cont"
  }, external_react_default.a.createElement("p", null, synopsis))), external_react_default.a.createElement("div", {
    className: "activity-cont simditor"
  }, external_react_default.a.createElement("h6", null, external_react_default.a.createElement("span", null), "\u6D3B\u52A8\u5185\u5BB9"), external_react_default.a.createElement("div", {
    className: "activity-text simditor-body",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }))));
});
// CONCATENATED MODULE: ./assets/containers/ActivityDetail/index.js





/* harmony default export */ var ActivityDetail = __webpack_exports__["default"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      activityInfoData: state.activity.activityInfoData
    };
  }, external_react_redux_["shallowEqual"]),
      activityInfoData = _useSelector.activityInfoData;

  return external_react_default.a.createElement("div", {
    className: "activity-detail-page"
  }, external_react_default.a.createElement(TopInfo, activityInfoData), external_react_default.a.createElement(BottomInfo, activityInfoData));
});

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(186);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);








 // Initialize a variables.

var image = (document.images[0] || 0).src || '';
var site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;
var title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;
var description = getMetaContentByName('description') || getMetaContentByName('Description') || '';
var url = location.href;
var origin = location.origin;

function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content;
}

var Share =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Share, _Component);

  function Share() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Share);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Share).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Share, [{
    key: "getDataFormat",
    value: function getDataFormat() {
      var _this = this;

      // const hyphenateRE = /([a-z\d])([A-Z])/g;
      return Object.keys(this.props).reduce(function (pre, cur) {
        pre[cur] = typeof _this.props[cur] === 'string' ? encodeURIComponent(_this.props[cur]) : _this.props[cur];
        return pre;
      }, {});
    }
  }, {
    key: "render",
    value: function render() {
      // const setData = this.getDataFormat();
      var _this$getDataFormat = this.getDataFormat(),
          url = _this$getDataFormat.url,
          sites = _this$getDataFormat.sites,
          disabled = _this$getDataFormat.disabled,
          title = _this$getDataFormat.title,
          image = _this$getDataFormat.image,
          description = _this$getDataFormat.description,
          summary = _this$getDataFormat.summary,
          source = _this$getDataFormat.source,
          wechatQrcodeSize = _this$getDataFormat.wechatQrcodeSize,
          wechatQrcodeLevel = _this$getDataFormat.wechatQrcodeLevel,
          initialized = _this$getDataFormat.initialized;

      var templates = {
        qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=".concat(url, "&title=").concat(title, "&desc=").concat(description, "&summary=").concat(summary, "&site=").concat(source),
        qq: "http://connect.qq.com/widget/shareqq/index.html?url=".concat(url, "&title=").concat(title, "&source=").concat(source, "&desc=").concat(description),
        tencent: "http://share.v.t.qq.com/index.php?c=share&a=index&title=".concat(title, "&url=").concat(url, "&pic=").concat(image),
        weibo: "http://service.weibo.com/share/share.php?url=".concat(url, "&title=").concat(title, "&pic=").concat(image),
        wechat: decodeURIComponent(url),
        douban: "http://shuo.douban.com/!service/share?href=".concat(url, "&name=").concat(title, "&text=").concat(description, "&image=").concat(image, "&starid=0&aid=0&style=11"),
        diandian: "http://www.diandian.com/share?lo=".concat(url, "&ti=").concat(title, "&type=link"),
        linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title=".concat(title, "&url=").concat(url, "&summary=").concat(summary, "&source=").concat(source, "&armin=armin"),
        facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(url),
        twitter: "https://twitter.com/intent/tweet?text=".concat(title, "&url=").concat(url, "&via=").concat(origin),
        google: "https://plus.google.com/share?url=".concat(url)
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "social-share"
      }, initialized ? this.props.children : sites.map(function (site) {
        if (~disabled.indexOf(site)) return;

        if (site !== 'wechat') {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            key: site,
            className: "social-share-icon icon-".concat(site),
            target: "_blank",
            href: templates[site]
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            key: site,
            className: "social-share-icon icon-".concat(site),
            target: "_blank"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "wechat-qrcode"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF1A\u5206\u4EAB"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
            value: templates[site],
            size: wechatQrcodeSize,
            level: wechatQrcodeLevel
          })));
        }
      }));
    }
  }]);

  return Share;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Share.defaultProps = {
  url: url,
  origin: origin,
  title: title,
  description: description,
  disabled: [],
  summary: description,
  image: image,
  site: site,
  source: site,
  initialized: false,
  sites: ['qzone', 'weibo', 'google', 'twitter', 'qq', 'tencent', 'wechat', 'douban', 'linkedin', 'facebook'],
  wechatQrcodeSize: 150,
  wechatQrcodeLevel: 'Q'
};
Share.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  origin: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  sites: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  wechatQrcodeTitle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  wechatQrcodeHelper: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  initialized: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  wechatQrcodeLevel: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  wechatQrcodeSize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number // getDataFormat() {
  //   const hyphenateRE = /([a-z\d])([A-Z])/g;
  //   return Object.keys(this.props).reduce((pre,cur) => {
  //     const key = "data-"+cur.replace(hyphenateRE, '$1-$2').toLowerCase();
  //     pre[key] = this.props[cur];
  //     return pre;
  //   },{})
  // }

};
/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ })

};;
//# sourceMappingURL=containers-ActivityDetail.js.map