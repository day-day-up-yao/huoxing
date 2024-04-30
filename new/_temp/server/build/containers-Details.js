require("source-map-support").install();
exports.ids = [3];
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(116);
/* harmony import */ var _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(117);
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-ios-bfae97d1.png";

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-android-e33868e0.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-QRcode-e79e9b7e.jpg";

/***/ }),

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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttentionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthorName; });
/* unused harmony export AuthorType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);










/** @desc 关注按钮 */

var AttentionButton = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    userInfo: state.multi.login.userInfo.info
  };
})(function (props) {
  var authorInfo = props.authorInfo,
      userInfo = props.userInfo,
      attentionSuccessed = props.attentionSuccessed,
      className = props.className,
      dispatch = props.dispatch;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;
  /** @desc 关注作者 */


  var attentionAuthorFunc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__[/* isLogin */ "b"])(userInfo.passportId, dispatch)) return;
    var type = authorInfo.ifCollect === 1 ? 'delete' : 'add';
    var id = authorInfo.passportId;
    Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* attentionAuthor */ "a"])({
      passportid: userInfo.passportId,
      token: userInfo.token,
      authorId: id
    }, type).then(function (res) {
      if (res.code === 1) {
        attentionSuccessed();
      } else {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info('关注作者错误');
      throw err;
    });
  }, [userInfo, authorInfo]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: attentionAuthorFunc,
    className: "attention-author-button ".concat(authorInfo.ifCollect === 1 ? 'active' : '', " ").concat(className || '')
  }, authorInfo.ifCollect === 1 ? t('guan_zhu_ed') : t('guan_zhu'));
});
/** @desc 头像 */

var Avatar = function Avatar(props) {
  var authorInfo = props.authorInfo,
      iconHide = props.iconHide,
      className = props.className; // iconHide认证类型图标是否隐藏

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation2.t;
  /** @desc 认证样式与名称 */


  var authStyle = null;
  var authName = t('author_info_ordinary_user');

  switch (parseInt(authorInfo.vGrade)) {
    case 0:
      authName = t('author_info_ordinary_user');
      break;

    case 1:
      authStyle = _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
      authName = "MarsBit ".concat(t('author_info_zl_self'));
      break;

    case 2:
      authStyle = _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
      authName = "MarsBit ".concat(t('author_info_zl_media'));
      break;

    case 3:
      authStyle = _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
      authName = "MarsBit ".concat(t('author_info_zl_enterprise'));
      break;

    default:
      authName = t('author_info_ordinary_user');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "w"].main("/userCenter/".concat(authorInfo.passportId)),
    title: authorInfo.nickName,
    className: "author-info-avatar ".concat(className || ''),
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "avatar-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-clear-blur",
    src: authorInfo.iconUrl,
    alt: authorInfo.nickName
  })), authStyle && !iconHide && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: authName,
    className: "avatar-mark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-clear-blur",
    src: authStyle,
    alt: authorInfo.nickName
  })));
};
/** @desc 作者名称 */

var AuthorName = function AuthorName(props) {
  var authorInfo = props.authorInfo,
      className = props.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "w"].main("/userCenter/".concat(authorInfo.passportId)),
    title: authorInfo.nickName,
    className: "author-info-user-name ".concat(className || ''),
    target: "_blank"
  }, authorInfo.nickName);
};
/** @desc 作者类型标签 */

var AuthorType = function AuthorType(props) {
  var authorInfo = props.authorInfo,
      className = props.className;

  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation3.t;
  /** @desc 认证样式与名称 */


  var authStyle = {
    display: 'none'
  };
  var authName = '';

  switch (parseInt(authorInfo.vGrade)) {
    case 1:
      authStyle = {
        display: 'block',
        color: 'rgba(255, 123, 1, 1)',
        background: 'rgba(255, 123, 1, 0.1)'
      };
      authName = t('author_info_self');
      break;

    case 2:
      authStyle = {
        display: 'block',
        color: 'rgba(10, 127, 242, 1)',
        background: 'rgba(10, 127, 242, 0.1)'
      };
      authName = t('author_info_media');
      break;

    case 3:
      authStyle = {
        display: 'block',
        color: 'rgba(10, 127, 242, 1)',
        background: 'rgba(10, 127, 242, 0.1)'
      };
      authName = t('author_info_enterprise');
      break;

    default:
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author-info-user-type ".concat(className || ''),
    style: authStyle
  }, authName);
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);



var AdUp = function AdUp(props) {
  var dataObj = props.data;
  var adImgUrl = null;

  switch (dataObj.useType) {
    case 1:
      adImgUrl = dataObj.url;
      break;

    case 2:
      adImgUrl = dataObj.url;
      break;

    case 3:
      adImgUrl = "https://news.marsbit.co/newsdetail/".concat(dataObj.url);
      break;

    case 4:
      adImgUrl = "https://news.marsbit.co/list/".concat(dataObj.url);
      break;

    case 5:
      adImgUrl = "https://news.marsbit.co/feature/".concat(dataObj.url);
      break;

    case 6:
      adImgUrl = "https://news.marsbit.co/tags/".concat(dataObj.url);
      break;

    default:
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ad-up-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: adImgUrl,
    title: dataObj.title,
    key: dataObj.id,
    className: "item",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: dataObj.pcImgSrc,
    alt: dataObj.title
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (AdUp);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var onlyOne = props.onlyOne; // onlyOne 只显示其中1个  flash: 快讯  dynamic: 项目行情(潜伏日历)

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      showlivesData: state.multi.home.showlivesData,
      calendarData: state.multi.home.calendarData
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]),
      showlivesData = _useSelector.showlivesData,
      calendarData = _useSelector.calendarData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(onlyOne && onlyOne === 'dynamic' ? calendarData : showlivesData),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(onlyOne && onlyOne === 'dynamic' ? 'dynamic' : 'flash'),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      listType = _useState4[0],
      setListType = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    switch (listType) {
      case 'flash':
        setListData(showlivesData);
        break;

      case 'dynamic':
        setListData(calendarData);
        break;

      default:
        break;
    }
  }, [showlivesData, calendarData, listType]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic"
  }, onlyOne && onlyOne === 'flash' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "right-flash-and-dynamic-title-box",
    href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* mixUrl */ "w"].news("/flash"),
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title right-flash-and-dynamic-title-only"
  }, "7x24H ", t('headernavtwo')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-arrow"
  })), onlyOne && onlyOne === 'dynamic' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title right-flash-and-dynamic-title-only"
  }, t('product_dynamics'))), !onlyOne && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title ".concat(listType === 'flash' ? 'right-flash-and-dynamic-title-active' : ''),
    onClick: function onClick() {
      setListType('flash');
    }
  }, "7x24H ", t('headernavtwo'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-line"
  })), listData && listData.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title ".concat(listType === 'dynamic' ? 'right-flash-and-dynamic-title-active' : ''),
    onClick: function onClick() {
      setListType('dynamic');
    }
  }, t('product_dynamics'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-line"
  }))), listData && listData.length > 0 && listData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "incident-list ".concat(item.tag && parseInt(item.tag) === 2 ? 'import' : ''),
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("font", {
      className: "yuan"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "list-top"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "list-date"
    }, listType === 'flash' ? Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* formatPublishTime */ "k"])(item.createdTime) : Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* formatTime */ "l"])(item.publishTime * 1000, 'MM-dd'))), item.url !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.url,
      target: "_blank"
    }, item.title) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'auto'
      }
    }, item.title));
  }));
});

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-orange-ddf372b8.svg";

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-blue-77c6a4e4.svg";

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);










var RelatedNews = function RelatedNews(props) {
  var newsCur = props.newsCur,
      isflash = props.isflash;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      relatedNews = _useState2[0],
      setRelatedNews = _useState2[1]; // console.log(newsCur)


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isflash) {
      if (newsCur.tagsV2) {
        var tagslist = JSON.parse(newsCur.tagsV2);
        var tagnamelist = [];
        tagslist.map(function (item) {
          tagnamelist.push(item.name);
        });
        var tagname = tagnamelist.toString();
        getfalshAboutnewsFn(tagname);
      }
    } else {
      getAboutnewsFn(newsCur.tags);
    }
  }, []); // 快讯详情的相关新闻

  var getfalshAboutnewsFn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (tagname) {
    var params = {
      currentPage: 1,
      pageSize: 4,
      id: newsCur.id,
      tags: tagname
      /** @desc 获取相关新闻 */

    };
    dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_7__[/* getNewsList */ "i"])(params, 'tags')).then(function (res) {
      if (res.code !== 1) {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info(res.msg);
      } else {
        setRelatedNews(res.obj.inforList);
      }
    })["catch"](function (err) {
      console.log(err);
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info('获取相关新闻错误');
    });
  }, [newsCur]); // 新闻详情的相关新闻

  var getAboutnewsFn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (tagname) {
    /** @desc 获取相关新闻 */
    dispatch(Object(_redux_actions_news__WEBPACK_IMPORTED_MODULE_6__[/* getRelatedNews */ "e"])({
      tags: tagname,
      id: newsCur.id,
      newsCounts: 4,
      publishTime: newsCur.publishTime
    })).then(function (res) {
      if (res.code !== 1) {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info(res.msg);
      } else {
        setRelatedNews(res.obj.inforList);
      }
    })["catch"](function (err) {
      console.log(err);
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info('获取相关新闻错误');
    });
  }, [newsCur]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "news-details-related-news",
    style: {
      display: "".concat(Array.isArray(relatedNews) && relatedNews.length > 0 ? 'block' : 'none')
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t('about_news'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content clearfix"
  }, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(relatedNews) && relatedNews.map(function (item, index) {
    var link = _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__[/* mixUrl */ "w"].news("/".concat(item.id, ".html"));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: link,
      target: "_blank",
      title: item.title,
      key: item.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__[/* stringJsonItem */ "B"])(item.coverPic, 'pc'),
      alt: item.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-right"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-right-top"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-right-desc"
    }, item.synopsis && item.synopsis.replace('【GPT】', ''))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-right-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-right-bottom-author"
    }, item.author), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-right-bottom-item"
    }, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__[/* formatPublishTime */ "k"])(item.publishTime)))));
  })));
}; // const mapStateToProps = (state) => ({
//     relatedNews: state.news.relatedNewslist.inforList,
//     newsCur: state.news.newsDetails.current || {}
// })


/* harmony default export */ __webpack_exports__["a"] = (RelatedNews);

/***/ }),

/***/ 140:
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(103);
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

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "liveshare-icon-afdfdc07.jpg";

/***/ }),

/***/ 86:
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

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components/RightNews/index.js
var RightNews = __webpack_require__(108);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/components/AdUp/index.js
var AdUp = __webpack_require__(123);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(114);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightFlashAndDynamic/index.js
var RightFlashAndDynamic = __webpack_require__(124);

// EXTERNAL MODULE: ./assets/redux/actions/news.js + 1 modules
var news = __webpack_require__(22);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/news.js + 1 modules
var actions_news = __webpack_require__(14);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/public.js
var actions_public = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/components/RightItemWrapper/index.js
var RightItemWrapper = __webpack_require__(106);

// EXTERNAL MODULE: ./_multiappsharing/components/AuthorInfo/index.js
var components_AuthorInfo = __webpack_require__(122);

// CONCATENATED MODULE: ./assets/containers/Details/AuthorInfo/index.js








var AuthorInfo_AuthorInfo = function AuthorInfo(props) {
  /** @desc 获取props */
  var authorInfo = props.authorInfo,
      newsCur = props.newsCur,
      userInfo = props.userInfo,
      attentionSuccessed = props.attentionSuccessed;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var myPassportId = userInfo.passportId;
  return external_react_default.a.createElement(RightItemWrapper["a" /* default */], {
    firstItem: true
  }, external_react_default.a.createElement("div", {
    style: {
      display: "".concat(newsCur.cateId === 1 ? 'block' : 'none')
    }
  }, external_react_default.a.createElement("div", {
    className: "news-details-user-info"
  }, external_react_default.a.createElement(components_AuthorInfo["c" /* Avatar */], {
    className: "avatar",
    authorInfo: authorInfo
  }), external_react_default.a.createElement("div", {
    className: "info-right"
  }, external_react_default.a.createElement("h5", null, external_react_default.a.createElement(components_AuthorInfo["b" /* AuthorName */], {
    authorInfo: authorInfo
  }), newsCur.createdBy !== myPassportId && external_react_default.a.createElement(components_AuthorInfo["a" /* AttentionButton */], {
    authorInfo: authorInfo,
    attentionSuccessed: attentionSuccessed
  })), external_react_default.a.createElement("p", null, authorInfo.introduce))), external_react_default.a.createElement("div", {
    className: "news-details-user-list"
  }, external_react_default.a.createElement("h5", null, t('news_updated')), external_react_default.a.createElement("div", {
    className: "list"
  }, Array.isArray(authorInfo.infolist) && authorInfo.infolist.map(function (item, index) {
    var link = _multiappsharing_public["w" /* mixUrl */].news("/".concat(item.id, ".html"));
    return external_react_default.a.createElement("a", {
      href: link,
      key: item.id,
      target: "_blank"
    }, item.title);
  })))), external_react_default.a.createElement("div", {
    style: {
      display: "".concat(newsCur.cateId === 2 ? 'block' : 'none')
    }
  }, external_react_default.a.createElement("div", {
    className: "source-title clearfix",
    title: newsCur.source
  }, t('news_this_article'), "\uFF1A", newsCur.source), external_react_default.a.createElement("div", {
    className: "original-title"
  }, t('news_author_title'), "\uFF1A", newsCur.originalUrl ? external_react_default.a.createElement("a", {
    href: newsCur.originalUrl,
    target: "_blank"
  }, newsCur.originalTitle) : newsCur.originalTitle)));
};

var mapStateToProps = function mapStateToProps(state) {
  var multi = state.multi;
  return {
    userInfo: multi.login.userInfo.info,
    authorInfo: multi.news.author.authorInfo,
    newsCur: state.news.newsDetails.current || {}
  };
};

/* harmony default export */ var Details_AuthorInfo = (Object(external_react_redux_["connect"])(mapStateToProps)(AuthorInfo_AuthorInfo));
// CONCATENATED MODULE: ./assets/containers/Details/PrevNextNews/index.js






var PrevNextNews_PrevNewsNext = function PrevNewsNext(props) {
  var next = props.newsNext;
  var prev = props.newsPrev;
  var newsNext = !next.title && !prev.title ? external_react_default.a.createElement("div", {
    id: "newsNext"
  }) : external_react_default.a.createElement(RightItemWrapper["a" /* default */], {
    id: "newsNext"
  }, prev.title && external_react_default.a.createElement("a", {
    className: "news-details-prev-next-page ".concat(next.title && 'prev', " clearfix"),
    href: _multiappsharing_public["w" /* mixUrl */].news("/".concat(prev.id, ".html")),
    target: "_blank"
  }, external_react_default.a.createElement("h5", null, "\u4E0A\u4E00\u7BC7"), external_react_default.a.createElement("p", null, prev.title)), next.title && external_react_default.a.createElement("a", {
    className: "news-details-prev-next-page next clearfix",
    href: _multiappsharing_public["w" /* mixUrl */].news("/".concat(next.id, ".html")),
    target: "_blank"
  }, external_react_default.a.createElement("h5", null, "\u4E0B\u4E00\u7BC7"), external_react_default.a.createElement("p", null, next.title)));
  return newsNext;
};

var PrevNextNews_mapStateToProps = function mapStateToProps(state) {
  return {
    newsNext: state.news.newsDetails.next || {},
    newsPrev: state.news.newsDetails.prev || {}
  };
};

/* harmony default export */ var PrevNextNews = (Object(external_react_redux_["connect"])(PrevNextNews_mapStateToProps)(PrevNextNews_PrevNewsNext));
// EXTERNAL MODULE: ./_multiappsharing/components/RegisterLogin/public.js
var RegisterLogin_public = __webpack_require__(19);

// CONCATENATED MODULE: ./assets/containers/Details/Share/index.js










var Share_Share = function Share(props) {
  /** @desc 获取props */
  var newsDetails = props.newsDetails,
      userInfo = props.userInfo,
      authorInfo = props.authorInfo,
      attentionSuccessed = props.attentionSuccessed,
      getNewsDetailsFunc = props.getNewsDetailsFunc,
      dispatch = props.dispatch;
  var newsCur = newsDetails.current || {};
  var myPassportId = userInfo.passportId;

  var _useState = Object(external_react_["useState"])(parseInt(newsDetails.ifCollect)),
      _useState2 = slicedToArray_default()(_useState, 2),
      ifCollect = _useState2[0],
      setIfCollect = _useState2[1];
  /** @desc 收藏新闻 */


  var favoriteDo = Object(external_react_["useCallback"])(function () {
    if (!Object(RegisterLogin_public["b" /* isLogin */])(myPassportId, dispatch)) return;
    var status = ifCollect === 1 ? -1 : 1;
    Object(news["a" /* favoriteNews */])({
      newsId: newsCur.id,
      passportId: myPassportId,
      token: userInfo.token,
      status: status
    }).then(function (res) {
      if (res.code === 1) {
        getNewsDetailsFunc();
        setIfCollect(ifCollect === 1 ? -1 : 1);
      } else {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('收藏新闻错误');
    });
  }, [ifCollect, userInfo, myPassportId]);
  /** @desc 生成分享按钮: 由于使用window，且需要在didMount中生成。直接生成会出现client的div和server的div不匹配错误
   * 此处有jsx组件，按理说用useMemo比较合适，但是useMemo会首先运行一遍回调函数并返回运行结果，但又在服务端首次调用，服务端报window is undefined
   * useCallback不运行，只返回函数
   * */

  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      shareCon = _useState4[0],
      setShareCon = _useState4[1];

  var shareGenerate = Object(external_react_["useCallback"])(function () {
    var SocialShare = __webpack_require__(140)["default"];

    return external_react_default.a.createElement(SocialShare, {
      url: window.location.href,
      title: newsCur.title,
      sites: ['twitter', 'facebook']
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    setShareCon(shareGenerate());
  }, []);
  return external_react_default.a.createElement("div", {
    className: "news-details-share-wrapper",
    style: {
      display: 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "news-details-share",
    id: "newsDetailsShare"
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("div", {
    className: "user-info",
    style: {
      display: "".concat(newsCur.cateId === 1 ? 'flex' : 'none')
    }
  }, external_react_default.a.createElement(components_AuthorInfo["c" /* Avatar */], {
    className: "avatar",
    iconHide: true,
    authorInfo: authorInfo
  }), external_react_default.a.createElement(components_AuthorInfo["b" /* AuthorName */], {
    className: "user-name",
    authorInfo: authorInfo
  }), newsCur.createdBy !== myPassportId && external_react_default.a.createElement(components_AuthorInfo["a" /* AttentionButton */], {
    authorInfo: authorInfo,
    attentionSuccessed: attentionSuccessed
  })), external_react_default.a.createElement("div", {
    className: "share-reprint",
    style: {
      display: "".concat(newsCur.cateId === 2 ? 'flex' : 'none')
    }
  }, "\u672C\u6587\u6765\u6E90: ", newsCur.source), external_react_default.a.createElement("div", {
    className: "func"
  }, external_react_default.a.createElement("div", {
    className: "comment-favorite"
  }, external_react_default.a.createElement("a", {
    className: "favorite ".concat(ifCollect === 1 ? 'active' : ''),
    onClick: favoriteDo
  }), external_react_default.a.createElement("a", {
    className: "comment",
    onClick: function onClick() {
      return Object(_multiappsharing_public["c" /* arriveAtDom */])(document.getElementById('newsMessage'), 500, {
        add: -120
      });
    }
  }, newsCur.commentCount)), external_react_default.a.createElement("div", {
    className: "share"
  }, "\u5206\u4EAB", typeof window !== 'undefined' && shareCon), external_react_default.a.createElement("div", {
    className: "goto-top",
    onClick: function onClick() {
      return Object(_multiappsharing_public["c" /* arriveAtDom */])(0);
    }
  })))));
};

var Share_mapStateToProps = function mapStateToProps(state) {
  var multi = state.multi;
  return {
    userInfo: multi.login.userInfo.info,
    newsDetails: state.news.newsDetails,
    authorInfo: multi.news.author.authorInfo
  };
};

/* harmony default export */ var Details_Share = (Object(external_react_redux_["connect"])(Share_mapStateToProps)(Share_Share));
// EXTERNAL MODULE: ./assets/containers/Details/RelatedNews/index.js
var RelatedNews = __webpack_require__(127);

// CONCATENATED MODULE: ./assets/containers/Details/NewsContent/AuthorType/index.js



/* harmony default export */ var AuthorType = (function (_ref) {
  var newsContent = _ref.newsContent;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var authStyle = null;
  var authStyleBg = null;
  var authName = null;

  switch (parseInt(newsContent.vGrade)) {
    case 1:
      authStyle = 'rgba(255, 123, 1, 1)';
      authStyleBg = 'rgba(255, 123, 1, 0.1)';
      authName = t('author_info_self');
      break;

    case 2:
      authStyle = 'rgba(10, 127, 242, 1)';
      authStyleBg = 'rgba(10, 127, 242, 0.1)';
      authName = t('author_info_media');
      break;

    case 3:
      authStyle = 'rgba(10, 127, 242, 1)';
      authStyleBg = 'rgba(10, 127, 242, 0.1)';
      authName = t('author_info_enterprise');
      break;
  }

  return external_react_default.a.createElement("div", {
    className: "author-type",
    style: {
      display: authStyle && parseInt(newsContent.cateId) === 1 ? 'inline-block' : 'none',
      background: authStyleBg,
      color: authStyle
    }
  }, authName);
});
// EXTERNAL MODULE: ./assets/public/img/liveshare-icon.jpg
var liveshare_icon = __webpack_require__(141);
var liveshare_icon_default = /*#__PURE__*/__webpack_require__.n(liveshare_icon);

// EXTERNAL MODULE: ./assets/components/NewsTip/index.js
var NewsTip = __webpack_require__(118);

// CONCATENATED MODULE: ./assets/containers/Details/NewsContent/VideoPlay/index.js



var VideoPlay_VideoPlay = function VideoPlay(props) {
  return external_react_default.a.createElement("div", {
    className: "news-details-video"
  }, external_react_default.a.createElement("video", {
    src: props.file.fileUrl,
    preload: true,
    controls: true
  }));
};

/* harmony default export */ var NewsContent_VideoPlay = (VideoPlay_VideoPlay);
// CONCATENATED MODULE: ./assets/containers/Details/NewsContent/index.js


 // import ReactTooltip from 'react-tooltip'





 // import AudioPlay from './AudioPlay'



var NewsContent_NewsContent = function NewsContent(props) {
  var newsCur = props.newsCur;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var video = Object(_multiappsharing_public["A" /* stringArray */])(newsCur.video); // const audio = stringArray(newsCur.audio)

  var newsContent = decodeURIComponent(newsCur.content);

  if (newsCur && newsCur.apiAdd !== 0) {
    // const reg = /<([a-z]+?)(?:\s+?[^>]*?)?>\s*?<\/(?!img)\1>/ig
    // newsContent = newsContent.replace(reg, '')
    newsContent = newsContent.replace(/<p><br><\/p>/g, '');
    newsContent = newsContent.replace(/<p><br\/><\/p>/g, '');
    newsContent = newsContent.replace(/<p><\/p>/g, '');
  }
  /** @desc a标签添加nofollow */


  var htmlString = newsCur.source && newsCur.source.toLocaleLowerCase() !== 'tradingview' ? newsContent.replace(/<a[^>]+>/g, function (a) {
    if (!/\srel\s*=/.test(a) && a.indexOf('marsbit.co') === -1) {
      return a.replace(/^<a\s/, '<a rel="nofollow" ');
    }

    return a;
  }) : newsContent;
  /** @desc 如果图片没有alt属性，则设置为第一个标签 */

  var labelArr = Object(_multiappsharing_public["A" /* stringArray */])(newsCur.tagsV2);
  var imgAlt = newsCur.title;
  var subTitle = newsCur.subTitle ? newsCur.subTitle : '';
  var aritcleInfo = subTitle.replace(/<p><br><\/p>/g, '');
  aritcleInfo = aritcleInfo.replace(/&nbsp;/g, '');
  if (labelArr.length > 0) imgAlt = Object(_multiappsharing_public["B" /* stringJsonItem */])(labelArr[0].name, 'full_name') || labelArr[0].name;
  var altReg = /alt=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i;
  htmlString = htmlString.replace(/<img[^>]+>/g, function (img) {
    var alt = img.match(altReg);

    if (!alt || alt && alt[1] === '') {
      return img.replace(/^<img\s/, "<img alt=\"".concat(imgAlt, "\" "));
    }

    return img;
  }); // 初始化视频播放器

  Object(external_react_["useEffect"])(function () {
    var _require = __webpack_require__(104),
        videoInit = _require.videoInit;

    if (Object(_multiappsharing_public["v" /* isWechat */])()) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        var audio = document.getElementsByTagName('video');

        for (var i = 0; i < audio.length; i++) {
          audio[i].load();
          videoInit();
        }
      }, false);
    } else {
      videoInit();
    }
  }, []);
  console.log(newsCur);
  return external_react_default.a.createElement("div", {
    className: "news-details-content"
  }, external_react_default.a.createElement("h1", null, newsCur.title), external_react_default.a.createElement("div", {
    className: "news-info"
  }, external_react_default.a.createElement("a", {
    href: _multiappsharing_public["w" /* mixUrl */].main("/userCenter/".concat(newsCur.createdBy)),
    className: "author"
  }, newsCur.author), external_react_default.a.createElement(AuthorType, {
    newsContent: newsCur
  }), external_react_default.a.createElement("time", null, Object(_multiappsharing_public["l" /* formatTime */])(newsCur.publishTime, 'yyyy-MM-dd')), external_react_default.a.createElement("span", null, t('news_hotd'), ": ", newsCur.hotCounts)), newsCur.synopsis !== '' && external_react_default.a.createElement("div", {
    className: "news-synopsis"
  }, external_react_default.a.createElement("p", null, newsCur.synopsis.replace('【GPT】', '')), newsCur.synopsis.indexOf('【GPT】') > -1 && external_react_default.a.createElement(NewsTip["a" /* default */], null)), newsCur.subTitle !== '' && external_react_default.a.createElement("div", {
    className: "news-aritcleInfo"
  }, external_react_default.a.createElement("pre", {
    style: {
      color: 'rgba(51,51,51,70%'
    },
    dangerouslySetInnerHTML: {
      __html: aritcleInfo
    }
  })), video.length !== 0 && external_react_default.a.createElement(NewsContent_VideoPlay, {
    file: video[0]
  }), external_react_default.a.createElement("div", {
    className: "news-wxshare-icon"
  }, external_react_default.a.createElement("img", {
    src: liveshare_icon_default.a,
    alt: ""
  })), newsCur.editorFlag === 1 && external_react_default.a.createElement("div", {
    className: "ql-container ql-snow"
  }, external_react_default.a.createElement("div", {
    id: "newsDetailsContent",
    className: "ql-editor",
    dangerouslySetInnerHTML: {
      __html: htmlString
    }
  })), (!newsCur.editorFlag || newsCur.editorFlag === 0) && external_react_default.a.createElement("div", {
    id: "newsDetailsContent",
    className: "simditor-body",
    dangerouslySetInnerHTML: {
      __html: htmlString
    }
  }), external_react_default.a.createElement("div", {
    className: "tradingView",
    style: {
      display: newsCur.author === 'TradingView' ? 'block' : 'none'
    }
  }, "\u672C\u6587\u6765\u6E90\uFF1A", newsCur.author, external_react_default.a.createElement("br", null), "\u539F\u6587\u6807\u9898\uFF1A", external_react_default.a.createElement("a", {
    href: newsCur.originalUrl,
    target: "_blank"
  }, newsCur.title)), external_react_default.a.createElement("div", {
    className: "news-tips"
  }, external_react_default.a.createElement("div", {
    style: {
      display: 'none'
    }
  }, t('news_sm_one'), external_react_default.a.createElement("br", null), t('news_sm_two'), t('news_sm_three'), external_react_default.a.createElement("br", null), t('news_sm_four')), t('disclaimer_in')), external_react_default.a.createElement("div", {
    className: "news-tags",
    id: "newsTags",
    style: {
      display: Object(_multiappsharing_public["A" /* stringArray */])(newsCur.tagsV2).length > 0 ? 'block' : 'none'
    }
  }, t('news_guan_j'), ":", Object(_multiappsharing_public["A" /* stringArray */])(newsCur.tagsV2).map(function (item, index) {
    if (!item.name) return;
    var symbol = Object(_multiappsharing_public["B" /* stringJsonItem */])(item.name, 'symbol');
    var fullname = Object(_multiappsharing_public["B" /* stringJsonItem */])(item.name, 'full_name');
    var link = (item.type === 3 || symbol === '') && _multiappsharing_public["w" /* mixUrl */].news("/tags/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(item.name))) || _multiappsharing_public["w" /* mixUrl */].main("/marketsDetail/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(fullname), "/").concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(symbol)));
    var name = (item.type === 3 || fullname === '') && item.name || fullname; // return <a
    //     key={index}
    //     title={name}
    //     href={link}
    //     target="_blank">
    //     {name}
    // </a>

    return external_react_default.a.createElement("a", {
      key: index,
      title: name,
      href: link,
      target: "_blank"
    }, name);
  })));
};

var NewsContent_mapStateToProps = function mapStateToProps(state) {
  return {
    newsCur: state.news.newsDetails.current || {}
  };
};

/* harmony default export */ var Details_NewsContent = (Object(external_react_redux_["connect"])(NewsContent_mapStateToProps)(NewsContent_NewsContent));
// CONCATENATED MODULE: ./assets/containers/Details/AdGeneralize/index.js





var AdGeneralize_AdGeneralize = function AdGeneralize(props) {
  return external_react_default.a.createElement("div", {
    className: "news-details-ad-generalize",
    style: {
      display: props.adImplant && Object(_multiappsharing_public["n" /* isArray */])(props.adImplant) && props.adImplant.length !== 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("h5", null, "\u63A8\u5E7F"), external_react_default.a.createElement("div", {
    className: "content"
  }, props.adImplant.map(function (item, index) {
    // if (index <= 2) {
    if (index <= 0) {
      var adImgUrl = null;

      switch (item.useType) {
        case 1:
          adImgUrl = item.url;
          break;

        case 2:
          adImgUrl = item.url;
          break;

        case 3:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/".concat(item.url, ".html"));
          break;

        case 4:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/list/".concat(item.url));
          break;

        case 5:
          var featureUrl = item.url.indexOf('/') > -1 ? item.url.split('/')[1] : item.url;
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/feature/".concat(featureUrl));
          break;

        case 6:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/tags/".concat(item.url));
          break;

        default:
      }

      return external_react_default.a.createElement("a", {
        href: adImgUrl,
        title: item.title,
        key: index,
        className: props.adImplant.length === 1 ? 'single' : 'single',
        target: "_blank"
      }, external_react_default.a.createElement("img", {
        src: item.pcImgSrc,
        alt: item.title
      }), external_react_default.a.createElement("p", null, item.title));
    }
  })));
};

var AdGeneralize_mapStateToProps = function mapStateToProps(state) {
  return {
    // adGeneralize: state.multi.adData['6'] || []
    adImplant: state.multi.adImplant['2'] || []
  };
};

/* harmony default export */ var Details_AdGeneralize = (Object(external_react_redux_["connect"])(AdGeneralize_mapStateToProps)(AdGeneralize_AdGeneralize));
// CONCATENATED MODULE: ./assets/containers/Details/index.js



 // import ImageGallery from 'react-image-gallery'


 // import RightRiseDropList from 'multiComps/RightRiseDropList'











 // import Comment from 'multiComps/Comment'
// import CommentShow from 'multiComps/CommentShow'





var Details_Details = function Details(props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var dispatch = props.dispatch,
      newsCur = props.newsCur,
      userInfo = props.userInfo,
      adImplant = props.adImplant,
      hotNews24H = props.hotNews24H;
  var myPassportId = userInfo.passportId;
  /** @desc 获取作者信息：默认，关注 */

  var getAuthorInfoFunc = Object(external_react_["useCallback"])(function () {
    dispatch(Object(actions_news["c" /* getAuthorInfo */])({
      passportId: newsCur.createdBy,
      myPassportId: myPassportId || ''
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取作者信息错误');
    });
  }, [myPassportId]);
  /** @desc 获取文章详情：pages默认，评论，收藏 */

  var getNewsDetailsFunc = Object(external_react_["useCallback"])(function () {
    var params = {
      id: newsCur.id
    };

    if (myPassportId) {
      params = {
        id: newsCur.id,
        passportId: myPassportId,
        token: userInfo.token
      };
    }

    dispatch(Object(news["d" /* getNewsDetails */])(params)).then(function (res) {})["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('新闻详情获取错误');
    });
  }, [userInfo, myPassportId]);
  /** @desc 下一篇文章位置 */

  var nextPagePos = Object(external_react_["useCallback"])(function () {
    var $next = document.getElementById('newsNext');
    var $interest = document.getElementById('interestNews');
    var $footer = document.getElementById('footerWrapper'); // 已滚动高度

    var sTop = Object(_multiappsharing_public["z" /* scrollOffset */])().top; // 下一篇高度

    var nHeight = Object(_multiappsharing_public["g" /* elementOffset */])($next).height; // 底部离视窗顶部

    var fTop = $footer.getBoundingClientRect().top;

    if (sTop + 95 >= Object(_multiappsharing_public["g" /* elementOffset */])($interest).bottom + 20 && sTop + nHeight < sTop + fTop - 40) {
      $next.style.position = 'fixed';
      $next.style.top = '90px';
      $next.style.bottom = 'inherit';
    } else if (sTop + nHeight >= sTop + fTop - 40) {
      $next.style.position = 'fixed';
      $next.style.bottom = "".concat(Object(_multiappsharing_public["F" /* windowOffset */])().height - fTop + 20, "px");
      $next.style.top = 'inherit';
    } else {
      $next.style.position = 'static';
      $next.style.top = 'inherit';
      $next.style.bottom = 'inherit';
    }
  }, []);
  /** @desc share与nextPage的默认位置
   * 此处功能应同步与数据请求执行，也就是当dom更新完就执行。应该使用useLayoutEffect
   * 但在服务端会运行，故挪到useEffect，把变化的数据都依赖进来，此处简单点就是props
   * 按理说可typeof window !== 'undefined' && useLayoutEffect(() => {})
   * 但eslint跟官方规则不允许hooks存在条件判断等规则故此方式不行
   * */

  Object(external_react_["useEffect"])(function () {
    nextPagePos(); // share默认位置

    var $share = document.getElementById('newsDetailsShare');
    var $tags = document.getElementById('newsTags');

    if (Object(_multiappsharing_public["z" /* scrollOffset */])().top + Object(_multiappsharing_public["F" /* windowOffset */])().height < Object(_multiappsharing_public["g" /* elementOffset */])($tags).top + 130) {
      $share.className = 'news-details-share active';
      $share.style.position = 'fixed';
    } else {
      $share.style.position = 'static';
    }
  }, [props]);
  Object(external_react_["useEffect"])(function () {
    var $share = document.getElementById('newsDetailsShare');
    var $tags = document.getElementById('newsTags');
    Object(_multiappsharing_public["G" /* windowScroll */])(function (res) {
      nextPagePos(); // share滚动时位置

      if (Object(_multiappsharing_public["z" /* scrollOffset */])().top + Object(_multiappsharing_public["F" /* windowOffset */])().height < Object(_multiappsharing_public["g" /* elementOffset */])($tags).top + 130) {
        $share.style.position = 'fixed';

        if (res === 'down') {
          $share.className = 'news-details-share active';
        } else if (res === 'up') {
          $share.className = 'news-details-share';
        }
      } else {
        $share.style.position = 'static';
      }
    });
    getAuthorInfoFunc();
    /** @desc 访问量统计 */

    Object(news["f" /* statisticsNews */])({
      id: newsCur.id,
      ifRecommend: !newsCur.score || newsCur.score > 1 || newsCur.score < 0 ? 0 : 1
    }).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('统计新闻访问量错误');
    });
    /** @desc 获取您可能感兴趣的内容, 未登录获取热门新闻，登录获取推荐新闻 */

    dispatch(Object(actions_news["g" /* getHotNews */])({
      lastDays: 30,
      readCounts: 100,
      newsCounts: 6
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取热门新闻错误');
    }); // 获取24H热门

    dispatch(Object(actions_news["b" /* get24hHotNews */])({
      lastDays: 1,
      readCounts: 50,
      newsCounts: 6
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取24H热门新闻错误');
    }); // if (myPassportId) {
    //     dispatch(getRecommendNews({
    //         pageSize: 6,
    //         currentPage: 1,
    //         passportId: myPassportId
    //     })).then(function (res) {
    //         console.log(11111, res)
    //         if (res.code !== 1) {
    //             Toast.info(res.msg)
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info('获取推荐新闻错误')
    //     })
    // } else {
    //     dispatch(getHotNews({
    //         lastDays: 30,
    //         readCounts: 100,
    //         newsCounts: 6
    //     })).then(function (res) {
    //         console.log(2222, res)
    //         if (res.code !== 1) {
    //             Toast.info(res.msg)
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info('获取热门新闻错误')
    //     })
    // }

    /** @desc 获取广告 */

    dispatch(Object(actions_public["a" /* getAd */])({
      adPlace: '5,6,7',
      type: 1
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取广告错误');
    });
  }, []);

  var _useState = Object(external_react_["useState"])({
    aWidth: '360px',
    aLeft: 0,
    aIndex: 0
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      adCon = _useState2[0],
      setAdCon = _useState2[1];

  var newsAdRight = Object(external_react_["useCallback"])(function () {
    var len = adImplant['7'].length;
    var index = 0;
    setAdCon({
      aWidth: len * 360 + 'px',
      aLeft: 0,
      aIndex: 0
    });
    setInterval(function () {
      if (index >= adImplant['7'].length - 1) {
        index = 0;
      } else {
        index += 1;
      }

      setAdCon({
        aWidth: len * 360 + 'px',
        aLeft: -(index * 360) + 'px',
        aIndex: index
      });
    }, 5000);
  }, []);
  Object(external_react_["useEffect"])(function () {
    newsAdRight();
  }, []);
  return [external_react_default.a.createElement("div", {
    className: "news-details-ad-up",
    key: "newsDetailsAdUp"
  }, adImplant['5'] && external_react_default.a.createElement(AdUp["a" /* default */], {
    data: adImplant['5'][0] || []
  })), external_react_default.a.createElement("div", {
    className: "layout-main news-details",
    key: "newsDetails"
  }, external_react_default.a.createElement("div", {
    className: "layout-left"
  }, external_react_default.a.createElement(Details_NewsContent, null), external_react_default.a.createElement(Details_Share, {
    attentionSuccessed: getAuthorInfoFunc,
    getNewsDetailsFunc: getNewsDetailsFunc
  }), external_react_default.a.createElement(Details_AdGeneralize, null), external_react_default.a.createElement(RelatedNews["a" /* default */], {
    newsCur: newsCur
  })), external_react_default.a.createElement("div", {
    className: "layout-right"
  }, external_react_default.a.createElement(Details_AuthorInfo, {
    attentionSuccessed: getAuthorInfoFunc
  }), external_react_default.a.createElement("div", {
    className: "ad-right-img",
    style: {
      display: "".concat(Array.isArray(adImplant['7']) && adImplant['7'].length === 0 ? 'none' : 'block')
    }
  }, external_react_default.a.createElement("div", {
    className: "right-img-cont",
    style: {
      width: adCon.aWidth,
      left: adCon.aLeft
    }
  }, adImplant['7'] && Array.isArray(adImplant['7']) && adImplant['7'].map(function (item, index) {
    // 2020-06-01只展示第一个广告
    if (index !== 0) return;
    var adImgUrl = null;

    switch (item.useType) {
      case 1:
        adImgUrl = item.url;
        break;

      case 2:
        adImgUrl = item.url;
        break;

      case 3:
        adImgUrl = "https://news.huoxing24.com/newsdetail/".concat(item.url);
        break;

      case 4:
        adImgUrl = "https://news.huoxing24.com/list/".concat(item.url);
        break;

      case 5:
        adImgUrl = "https://news.huoxing24.com/feature/".concat(item.url.split('/')[1]);
        break;

      case 6:
        adImgUrl = "https://news.huoxing24.com/tags/".concat(item.url);
        break;

      default:
    }

    return external_react_default.a.createElement("a", {
      key: item.id,
      href: adImgUrl,
      target: "_blank"
    }, external_react_default.a.createElement("img", {
      src: item.pcImgSrc
    }), external_react_default.a.createElement("span", {
      style: {
        display: "".concat(item.useType === 1 ? 'block' : 'none')
      }
    }, "\u5E7F\u544A"), external_react_default.a.createElement("p", null, item.title));
  })), external_react_default.a.createElement("div", {
    className: "img-cont-item"
  }, adImplant['7'] && adImplant['7'].map(function (item, index) {
    var nActive = adCon.aIndex === index ? 'active' : '';
    return external_react_default.a.createElement("font", {
      key: index,
      className: nActive
    });
  }))), external_react_default.a.createElement(RightDownloadBox["a" /* default */], null), external_react_default.a.createElement(RightNews["a" /* default */], {
    id: "interestNews",
    data: hotNews24H,
    title: t('24_hot_news')
  }), external_react_default.a.createElement(RightFlashAndDynamic["a" /* default */], {
    onlyOne: 'flash'
  }), external_react_default.a.createElement(PrevNextNews, null))), external_react_default.a.createElement("div", {
    className: "news-details-comment",
    key: "newsComment"
  }, external_react_default.a.createElement("div", {
    className: "layout-main"
  }, external_react_default.a.createElement("div", {
    className: "layout-left",
    id: "newsMessage"
  })))];
};

var Details_mapStateToProps = function mapStateToProps(state) {
  var multi = state.multi;
  return {
    userInfo: multi.login.userInfo.info,
    hotNews: multi.news.hotNewsList.inforList,
    recommendNews: state.news.recommendNewsList.inforList,
    newsCur: state.news.newsDetails.current || {},
    adImplant: multi.adImplant,
    hotNews24H: multi.news.hot24HNewsList.inforList
  };
};

/* harmony default export */ var containers_Details = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(Details_mapStateToProps)(Details_Details));

/***/ })

};;
//# sourceMappingURL=containers-Details.js.map