require("source-map-support").install();
exports.ids = [13];
exports.modules = {

/***/ 149:
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

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// EXTERNAL MODULE: ./assets/components/ImLiveList/LeftLiveHeader/index.js
var LeftLiveHeader = __webpack_require__(246);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/LeftLiveRecommend/index.js
var LeftLiveRecommend = __webpack_require__(220);

// CONCATENATED MODULE: ./assets/containers/ImLiveRecommendList/LeftLiveListTop/index.js







/* harmony default export */ var LeftLiveListTop = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      roomLiveRecommendList: state.live.roomLiveRecommendList // 推荐列表

    };
  }, external_react_redux_["shallowEqual"]),
      roomLiveRecommendList = _useSelector.roomLiveRecommendList;

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isHaveMore = _useState2[0],
      setIsHaveMore = _useState2[1]; // 是否还有更多内容


  Object(external_react_["useEffect"])(function () {
    var currPage = parseInt(roomLiveRecommendList.currentPage) + 1;

    if (roomLiveRecommendList.pageCount >= currPage) {
      setIsHaveMore(true);
    } else {
      setIsHaveMore(false);
    }
  }, [roomLiveRecommendList]); // 点击分类列表加载更多按钮事件

  var onBtnMoreClick = Object(external_react_["useCallback"])(function () {
    var currPage = parseInt(roomLiveRecommendList.currentPage) + 1;

    if (roomLiveRecommendList.pageCount >= currPage) {
      dispatch(Object(live["f" /* getRoomLiveList */])({
        pageSize: 32,
        page: currPage,
        recommendFlag: 1,
        newFlag: 1
      }));
    }
  }, [roomLiveRecommendList]);
  return external_react_default.a.createElement("div", {
    className: "im-live-list-left-live-list-top"
  }, external_react_default.a.createElement(LeftLiveHeader["a" /* default */], {
    title: '精选直播',
    notLine: true
  }), external_react_default.a.createElement(LeftLiveRecommend["a" /* default */], {
    listData: roomLiveRecommendList.inforList,
    onBtnClick: onBtnMoreClick,
    isHaveMore: isHaveMore
  }));
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/RightLiveBoxTitle/index.js
var RightLiveBoxTitle = __webpack_require__(222);

// EXTERNAL MODULE: ./assets/components/ImLiveList/RightLiveGoodUpItem/index.js
var RightLiveGoodUpItem = __webpack_require__(245);

// CONCATENATED MODULE: ./assets/containers/ImLiveList/RightLiveListPlayer/index.js







/* harmony default export */ var RightLiveListPlayer = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      roomLiveUsePopularList: state.live.roomLiveUsePopularList
    };
  }, external_react_redux_["shallowEqual"]),
      roomLiveUsePopularList = _useSelector.roomLiveUsePopularList;

  return external_react_default.a.createElement("div", {
    className: "im-live-list-right-live-list-player"
  }, external_react_default.a.createElement(RightLiveBoxTitle["a" /* default */], {
    title: 'MarBit人气主播',
    crown: true
  }), external_react_default.a.createElement("div", {
    className: "im-live-list-right-live-list-player-box"
  }, roomLiveUsePopularList && Object(_multiappsharing_public["n" /* isArray */])(roomLiveUsePopularList) && roomLiveUsePopularList.map(function (item, index) {
    return external_react_default.a.createElement(RightLiveGoodUpItem["a" /* default */], extends_default()({}, item, {
      key: index
    }));
  })));
});
// EXTERNAL MODULE: ./assets/components/ImLiveList/image/live-join.png
var live_join = __webpack_require__(452);
var live_join_default = /*#__PURE__*/__webpack_require__.n(live_join);

// CONCATENATED MODULE: ./assets/components/ImLiveList/RightLiveJoin/index.js




/* harmony default export */ var RightLiveJoin = (function () {
  return external_react_default.a.createElement("div", {
    className: "im-live-list-right-join"
  }, external_react_default.a.createElement("a", {
    className: "im-live-list-right-join-box",
    href: _multiappsharing_public["A" /* mixUrl */].main('/download'),
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "im-live-list-right-join-box",
    src: live_join_default.a
  })));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(189);

// EXTERNAL MODULE: ./assets/public/hooks/useLiveGather.js
var useLiveGather = __webpack_require__(195);

// EXTERNAL MODULE: ./assets/public/hooks/useLiveGatherAjax.js
var useLiveGatherAjax = __webpack_require__(223);

// CONCATENATED MODULE: ./assets/containers/ImLiveRecommendList/index.js








/* harmony default export */ var ImLiveRecommendList = __webpack_exports__["default"] = (function () {
  Object(useLiveGatherAjax["a" /* default */])();
  var livePush = Object(useLiveGather["a" /* default */])();
  Object(external_react_["useEffect"])(function () {
    livePush({
      eventId: 'recommended_enter'
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: "im-live-recommend-list-page"
  }, external_react_default.a.createElement("div", {
    className: "im-live-recommend-list-page-main-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-recommend-list-page-main-box-left"
  }, external_react_default.a.createElement(LeftLiveListTop, null)), external_react_default.a.createElement("div", {
    className: "im-live-recommend-list-page-main-box-right"
  }, external_react_default.a.createElement(RightLiveJoin, null), external_react_default.a.createElement(RightLiveListPlayer, null), external_react_default.a.createElement(RightDownloadBox["a" /* default */], {
    isLive: true
  }))));
});

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AttentionButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthorType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51);










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
    if (!Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__[/* isLogin */ "b"])(userInfo.passportId, dispatch)) return;
    var type = authorInfo.ifCollect === 1 ? 'delete' : 'add';
    var id = authorInfo.passportId;
    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* attentionAuthor */ "a"])({
      passportid: userInfo.passportId,
      token: userInfo.token,
      authorId: id
    }, type).then(function (res) {
      if (res.code === 1) {
        attentionSuccessed();
      } else {
        _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info('关注作者错误');
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
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "A"].main("/userCenter/".concat(authorInfo.passportId)),
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
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "A"].main("/userCenter/".concat(authorInfo.passportId)),
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-orange-ddf372b8.svg";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-blue-77c6a4e4.svg";

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return {
      room: state.live.room
    };
  }),
      room = _useSelector.room;

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var eventId = _ref.eventId,
        eventInfo = _ref.eventInfo;
    dispatch(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_2__[/* gatherLive */ "b"])({
      liveState: room,
      eventId: eventId,
      eventInfo: eventInfo
    }));
  }, []);
});

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _Image_im_live_list_item_status2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(202);
/* harmony import */ var _Image_im_live_list_item_status2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Image_im_live_list_item_status2_png__WEBPACK_IMPORTED_MODULE_4__);



 // import headerDef from 'multiPublic/img/avatar-default.jpg'
// import playIcon from '../image/live-video-play.png'


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var itemType = props.itemType,
      roomId = props.roomId,
      status = props.status,
      popularity = props.popularity,
      beginTime = props.beginTime,
      coverPicUrl = props.coverPicUrl,
      name = props.name,
      id = props.id,
      publishTime = props.publishTime;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  var playNum = popularity && popularity !== '' ? popularity : 0;
  var playNumText = "".concat(playNum, " \u4EBA\u6B21");

  if (playNum > 1000000) {
    playNumText = "99.9\u4E07+  \u4EBA\u6B21";
  } else if (playNum > 10000) {
    playNumText = "".concat((playNum / 10000).toFixed(1), "\u4E07 \u4EBA\u6B21");
  }

  var timeFormat = Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* isThisYear */ "x"])(beginTime) ? 'MM-dd hh:mm' : 'yyyy-MM-dd hh:mm';
  var href = itemType !== undefined && itemType === 'myvideo' ? _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* mixUrl */ "A"].main("/video/detail/".concat(id, "/").concat(publishTime)) : _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* mixUrl */ "A"].main("/live/".concat(roomId));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "im-live-list-item im-live-list-item-".concat(itemType),
    href: href,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-video"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "im-live-list-item-video-img",
    src: coverPicUrl
  }), itemType !== undefined && itemType === 'myvideo' ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-video-state type-lt"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-video-state-box type-".concat(status && status !== '' ? status : '0')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "im-live-list-item-video-state-box-img",
    src: _Image_im_live_list_item_status2_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }), status && status === 1 ? t('live_ing') : status && status === 2 ? t('live_playback') : t('live_about_start')), status && status !== 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-video-state-box type-pop"
  }, playNumText) : null), itemType === 'top1' || itemType === 'top2' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-list-top-state"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-list-top-title"
  }, name)) : null), itemType === undefined || itemType === 'myvideo' || itemType === 'mylive' || itemType === 'top3' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-title"
  }, name) : null, itemType === undefined || itemType === 'mylive' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-time"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-time-box"
  }, "".concat(t('live_broadcast_time'), "\uFF1A").concat(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* formatTime */ "l"])(beginTime, timeFormat)))) : null, itemType === 'right' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-right-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-right-info-title"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-item-right-info-time"
  }, "".concat(t('live_start_time'), "\uFF1A").concat(Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_3__[/* formatTime */ "l"])(beginTime, timeFormat)))) : null);
});

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-list-item-status2-5d5cebf1.png";

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_notfound_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
/* harmony import */ var _image_notfound_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_notfound_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Home_RightLive_ImLiveListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(199);





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var listData = props.listData,
      onBtnMoreClick = props.onBtnMoreClick,
      isHaveMore = props.isHaveMore;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "im-live-detail-left-live-recommend"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "im-live-detail-left-live-recommend-list"
  }, listData && listData.length > 0 && listData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Home_RightLive_ImLiveListItem__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      key: index
    }));
  }), listData && listData.length === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "no-data"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "no-data-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "no-data-img",
    src: "".concat(_image_notfound_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "no-data-title"
  }, "\u6682\u65E0\u5185\u5BB9")))), listData && listData.length > 0 && onBtnMoreClick && isHaveMore ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "im-live-detail-left-live-recommend-btn",
    onClick: onBtnMoreClick
  }, "\u52A0\u8F7D\u66F4\u591A") : null);
});

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "notfound-icon-114affdc.png";

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_live_player_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(243);
/* harmony import */ var _image_live_player_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_live_player_icon_png__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var title = props.title,
      crown = props.crown;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-detail-right-live-box-title"
  }, crown === undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-detail-right-live-box-title-line"
  }), crown !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "im-live-detail-right-live-box-title-icon",
    src: _image_live_player_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-detail-right-live-box-title-text"
  }, title && title !== '' ? title : ''));
});

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return {
      gatherPayload: state.multi.gather
    };
  }),
      gatherPayload = _useSelector.gatherPayload;

  console.log(gatherPayload);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof window === 'undefined') return;

    window.onunload = function () {
      Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_public__WEBPACK_IMPORTED_MODULE_2__[/* gather */ "a"])(gatherPayload);
    };
  }, [gatherPayload]);
});

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live_player_icon-bf9e2aa0.png";

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(188);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var nickName = props.nickName,
      introduce = props.introduce,
      passportId = props.passportId;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-right-live-good-up-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_3__[/* Avatar */ "c"], {
    className: "im-live-list-right-live-good-up-item-img",
    authorInfo: props
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-right-live-good-up-item-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_3__[/* AuthorName */ "a"], {
    className: "im-live-list-right-live-good-up-item-title",
    authorInfo: props
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "im-live-list-right-live-good-up-item-text",
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_2__[/* mixUrl */ "A"].main("/userCenter/".concat(passportId)),
    target: "_blank",
    title: nickName
  }, introduce)));
});

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var title = props.title,
      typeList = props.typeList,
      nowType = props.nowType,
      onBtnTypeClick = props.onBtnTypeClick,
      notLine = props.notLine,
      moreUrl = props.moreUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-left-live-header ".concat(notLine ? 'im-live-list-left-live-header-notLine' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-left-live-header-left"
  }, title && title !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-left-live-header-title"
  }, title), typeList && typeList.length > 1 && typeList.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "im-live-list-left-live-header-type ".concat(nowType === item.id ? 'im-live-list-left-live-header-type-select' : ''),
      key: item.id,
      onClick: function onClick() {
        return onBtnTypeClick(item.id);
      }
    }, item.name);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-list-left-live-header-right"
  }, moreUrl !== undefined && moreUrl !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "im-live-list-left-live-header-more",
    href: moreUrl,
    target: "_blank"
  }, "\u67E5\u770B\u66F4\u591A")));
});

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-join-cc8722ad.png";

/***/ })

};;
//# sourceMappingURL=containers-ImLiveRecommendList.js.map