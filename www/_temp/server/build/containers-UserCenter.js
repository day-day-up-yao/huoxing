require("source-map-support").install();
exports.ids = [26];
exports.modules = {

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(19);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./_multiappsharing/components/AuthorInfo/index.js
var AuthorInfo = __webpack_require__(188);

// EXTERNAL MODULE: ./assets/containers/UserCenter/Image/userCenter-change-amend.png
var userCenter_change_amend = __webpack_require__(464);
var userCenter_change_amend_default = /*#__PURE__*/__webpack_require__.n(userCenter_change_amend);

// EXTERNAL MODULE: ./assets/containers/UserCenter/Image/userCenter-change-password.png
var userCenter_change_password = __webpack_require__(465);
var userCenter_change_password_default = /*#__PURE__*/__webpack_require__.n(userCenter_change_password);

// CONCATENATED MODULE: ./assets/containers/UserCenter/UserCenterHeader/index.js









/* harmony default export */ var UserCenterHeader = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      userInfo: state.login.userInfo.info,
      authorInfo: state.userCenter.authorInfo
    };
  }, external_react_redux_["shallowEqual"]),
      userInfo = _useSelector.userInfo,
      authorInfo = _useSelector.authorInfo;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      myOrHers = _useState2[0],
      setMyOrHers = _useState2[1]; // 是否是本人浏览


  Object(external_react_["useEffect"])(function () {
    var myOrHer = userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId;
    setMyOrHers(myOrHer);
  }, [userInfo, authorInfo]);
  return external_react_default.a.createElement("div", {
    className: "user-center-header"
  }, external_react_default.a.createElement(AuthorInfo["c" /* Avatar */], {
    className: "user-center-header-img",
    authorInfo: authorInfo
  }), external_react_default.a.createElement("div", {
    className: "user-center-header-right"
  }, external_react_default.a.createElement("div", {
    className: "user-center-header-name-box"
  }, external_react_default.a.createElement(AuthorInfo["a" /* AuthorName */], {
    className: "user-center-header-name",
    authorInfo: authorInfo
  }), external_react_default.a.createElement(AuthorInfo["b" /* AuthorType */], {
    className: "user-center-header-author-type",
    authorInfo: authorInfo
  })), external_react_default.a.createElement("div", {
    className: "user-center-header-infor"
  }, authorInfo.introduce)), myOrHers && external_react_default.a.createElement("a", {
    className: "user-center-header-data-edition",
    href: _multiappsharing_public["A" /* mixUrl */].main("/compile/portrait")
  }, external_react_default.a.createElement("img", {
    src: userCenter_change_amend_default.a,
    alt: ""
  }), t('usercenter_author_info')), myOrHers && external_react_default.a.createElement("a", {
    className: "user-center-header-change-password",
    href: _multiappsharing_public["A" /* mixUrl */].main("/compile/password")
  }, external_react_default.a.createElement("img", {
    src: userCenter_change_password_default.a,
    alt: ""
  }), t('usercenter_change_password')));
});
// CONCATENATED MODULE: ./assets/containers/UserCenter/UserCenterJoin/index.js





/* harmony default export */ var UserCenterJoin = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorInfo: state.userCenter.authorInfo,
      userInfo: state.login.userInfo.info
    };
  }, external_react_redux_["shallowEqual"]),
      authorInfo = _useSelector.authorInfo,
      userInfo = _useSelector.userInfo;

  return external_react_default.a.createElement("a", {
    className: "user-center-join",
    href: _multiappsharing_public["A" /* mixUrl */].mp(),
    target: "_blank"
  }, external_react_default.a.createElement("div", {
    className: "user-center-join-box"
  }, external_react_default.a.createElement("div", {
    className: "user-center-join-text"
  }, userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId ? authorInfo.vGrade !== undefined && authorInfo.role !== undefined && authorInfo.vGrade !== 0 && authorInfo.role === 1 ? t('usercenter_coming') : t('usercenter_immediate_entry') : t('usercenter_immediate_entry'), external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
    className: "user-center-join-text-span"
  }, "MarsBit ", t('usercenter_column')))));
});
// CONCATENATED MODULE: ./assets/containers/UserCenter/UserCenterTag/index.js





/* harmony default export */ var UserCenterTag = (function (props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var nowType = props.nowType,
      userCenterTagType = props.userCenterTagType,
      onBtnTypeClick = props.onBtnTypeClick;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      userInfo: state.login.userInfo.info,
      authorInfo: state.userCenter.authorInfo,
      authorCollectList: state.userCenter.authorCollectList,
      authorAchievement: state.userCenter.authorAchievement
    };
  }, external_react_redux_["shallowEqual"]),
      authorInfo = _useSelector.authorInfo,
      userInfo = _useSelector.userInfo,
      authorAchievement = _useSelector.authorAchievement,
      authorCollectList = _useSelector.authorCollectList; // const myOrHers = userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId
  //     ? '我的'
  //     : '他的'


  var myOrHers = userInfo && authorInfo && userInfo.passportId !== undefined && authorInfo.passportId !== undefined && userInfo.passportId === authorInfo.passportId ? '' : '';
  return external_react_default.a.createElement("div", {
    className: "user-center-tag"
  }, external_react_default.a.createElement("div", {
    className: "user-center-tag-box ".concat(nowType === userCenterTagType.ARTICLE ? 'user-center-tag-box-active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick(userCenterTagType.ARTICLE);
    }
  }, "".concat(myOrHers).concat(t('usercenter_article')), external_react_default.a.createElement("div", {
    className: "user-center-tag-box-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.newsCounts) : 0)), external_react_default.a.createElement("div", {
    className: "user-center-tag-box ".concat(nowType === userCenterTagType.VIDEO ? 'user-center-tag-box-active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick(userCenterTagType.VIDEO);
    }
  }, "".concat(myOrHers).concat(t('usercenter_vidio')), external_react_default.a.createElement("div", {
    className: "user-center-tag-box-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.videoCounts) : 0)), external_react_default.a.createElement("div", {
    className: "user-center-tag-box ".concat(nowType === userCenterTagType.COLLECTION ? 'user-center-tag-box-active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick(userCenterTagType.COLLECTION);
    }
  }, "".concat(myOrHers).concat(t('usercenter_collect')), external_react_default.a.createElement("div", {
    className: "user-center-tag-box-span"
  }, authorCollectList ? Object(_multiappsharing_public["a" /* addComma */])(authorCollectList.recordCount) : 0)), external_react_default.a.createElement("div", {
    className: "user-center-tag-box ".concat(nowType === userCenterTagType.LIVE ? 'user-center-tag-box-active' : ''),
    onClick: function onClick() {
      return onBtnTypeClick(userCenterTagType.LIVE);
    }
  }, "".concat(myOrHers).concat(t('headernavfour')), external_react_default.a.createElement("div", {
    className: "user-center-tag-box-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.videoLiveCount) : 0)));
});
// CONCATENATED MODULE: ./assets/containers/UserCenter/UserCenterFollowAndFans/index.js




/* harmony default export */ var UserCenterFollowAndFans = (function (props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var userCenterTagType = props.userCenterTagType,
      onBtnTypeClick = props.onBtnTypeClick;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorAchievement: state.userCenter.authorAchievement
    };
  }, external_react_redux_["shallowEqual"]),
      authorAchievement = _useSelector.authorAchievement;

  return external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans"
  }, external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-box user-center-follow-and-fans-box-follow",
    onClick: function onClick() {
      return onBtnTypeClick(userCenterTagType.FOLLOW);
    }
  }, external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-box-span"
  }, t('usercenter_attention')), external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-box-text"
  }, authorAchievement ? authorAchievement.authorLikeCounts : 0)), external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-line"
  }), external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-box"
  }, external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-box-span"
  }, t('usercenter_vermicelli')), external_react_default.a.createElement("div", {
    className: "user-center-follow-and-fans-box-text"
  }, authorAchievement ? authorAchievement.authorFollowCounts : 0)));
});
// EXTERNAL MODULE: ./assets/containers/UserCenter/Image/userCenter-achievement-icon1.png
var userCenter_achievement_icon1 = __webpack_require__(466);
var userCenter_achievement_icon1_default = /*#__PURE__*/__webpack_require__.n(userCenter_achievement_icon1);

// EXTERNAL MODULE: ./assets/containers/UserCenter/Image/userCenter-achievement-icon2.png
var userCenter_achievement_icon2 = __webpack_require__(467);
var userCenter_achievement_icon2_default = /*#__PURE__*/__webpack_require__.n(userCenter_achievement_icon2);

// EXTERNAL MODULE: ./assets/containers/UserCenter/Image/userCenter-achievement-icon3.png
var userCenter_achievement_icon3 = __webpack_require__(468);
var userCenter_achievement_icon3_default = /*#__PURE__*/__webpack_require__.n(userCenter_achievement_icon3);

// CONCATENATED MODULE: ./assets/containers/UserCenter/UserCenterAchievement/index.js








/* harmony default export */ var UserCenterAchievement = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorAchievement: state.userCenter.authorAchievement
    };
  }, external_react_redux_["shallowEqual"]),
      authorAchievement = _useSelector.authorAchievement;

  return external_react_default.a.createElement("div", {
    className: "user-center-achievement"
  }, external_react_default.a.createElement("div", {
    className: "user-center-achievement-title"
  }, t('usercenter_achievement')), external_react_default.a.createElement("div", {
    className: "user-center-achievement-list"
  }, external_react_default.a.createElement("div", {
    className: "user-center-achievement-item"
  }, external_react_default.a.createElement("img", {
    className: "user-center-achievement-item-icon",
    src: userCenter_achievement_icon1_default.a
  }), t('usercenter_all_fb'), external_react_default.a.createElement("span", {
    className: "user-center-achievement-item-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.newsCounts) : 0), t('usercenter_all_author'), "\uFF0C", external_react_default.a.createElement("span", {
    className: "user-center-achievement-item-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.videoCounts) : 0), t('usercenter_all_vedio')), external_react_default.a.createElement("div", {
    className: "user-center-achievement-item"
  }, external_react_default.a.createElement("img", {
    className: "user-center-achievement-item-icon",
    src: userCenter_achievement_icon2_default.a
  }), t('usercenter_all_hot_more'), external_react_default.a.createElement("span", {
    className: "user-center-achievement-item-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.newsHotCounts + authorAchievement.videoHotCounts) : 0)), external_react_default.a.createElement("div", {
    className: "user-center-achievement-item"
  }, external_react_default.a.createElement("img", {
    className: "user-center-achievement-item-icon",
    src: userCenter_achievement_icon3_default.a
  }), t('usercenter_all_get'), external_react_default.a.createElement("span", {
    className: "user-center-achievement-item-span"
  }, authorAchievement ? Object(_multiappsharing_public["a" /* addComma */])(authorAchievement.newsCommentCounts + authorAchievement.videoCommentCounts) : 0), t('usercenter_all_pl'))));
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: ./_multiappsharing/components/NewsListItem/index.js + 1 modules
var NewsListItem = __webpack_require__(430);

// EXTERNAL MODULE: ./_multiappsharing/components/LoadMore/index.js
var LoadMore = __webpack_require__(235);

// CONCATENATED MODULE: ./assets/components/UserCenter/UserCenterFollowItem/index.js



/* harmony default export */ var UserCenterFollowItem = (function (props) {
  var authorInfo = props.authorInfo;
  return external_react_default.a.createElement("div", {
    className: "user-center-follow-item"
  }, external_react_default.a.createElement(AuthorInfo["c" /* Avatar */], {
    className: "user-center-follow-item-img",
    authorInfo: authorInfo
  }), external_react_default.a.createElement("div", {
    className: "user-center-follow-item-right"
  }, external_react_default.a.createElement("div", {
    className: "user-center-follow-item-name-box"
  }, external_react_default.a.createElement(AuthorInfo["a" /* AuthorName */], {
    className: "user-center-follow-item-name",
    authorInfo: authorInfo
  })), external_react_default.a.createElement("div", {
    className: "user-center-follow-item-infor"
  }, authorInfo.introduce)));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightLive/ImLiveListItem/index.js
var ImLiveListItem = __webpack_require__(199);

// EXTERNAL MODULE: ./assets/redux/actions/userCenter.js + 1 modules
var userCenter = __webpack_require__(43);

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// CONCATENATED MODULE: ./assets/containers/UserCenter/UserCenterList/index.js













/* harmony default export */ var UserCenterList = (function (props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var oldType = props.oldType,
      userCenterTagType = props.userCenterTagType;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorNewsList: state.userCenter.authorNewsList,
      authorVideoList: state.userCenter.authorVideoList,
      authorCollectList: state.userCenter.authorCollectList,
      authorFollowList: state.userCenter.authorFollowList,
      authorAchievement: state.userCenter.authorAchievement,
      authorInfo: state.userCenter.authorInfo,
      roomLiveList: state.live.roomLiveList
    };
  }, external_react_redux_["shallowEqual"]),
      authorNewsList = _useSelector.authorNewsList,
      authorVideoList = _useSelector.authorVideoList,
      authorCollectList = _useSelector.authorCollectList,
      authorFollowList = _useSelector.authorFollowList,
      authorAchievement = _useSelector.authorAchievement,
      authorInfo = _useSelector.authorInfo,
      roomLiveList = _useSelector.roomLiveList;

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])(authorNewsList),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowList = _useState2[0],
      setNowList = _useState2[1]; // 当前选中的列表


  var _useState3 = Object(external_react_["useState"])(userCenterTagType.ARTICLE),
      _useState4 = slicedToArray_default()(_useState3, 2),
      nowType = _useState4[0],
      setNowType = _useState4[1]; // 当前标签


  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = slicedToArray_default()(_useState5, 2),
      isHoveMore = _useState6[0],
      setIsHoveMore = _useState6[1]; // 是否显示加载更多
  // 初始请求


  Object(external_react_["useEffect"])(function () {
    dispatch(Object(userCenter["e" /* getAuthorVideolist */])({
      passportId: authorInfo.passportId
    }));
    dispatch(Object(userCenter["b" /* getAuthorCollectlist */])({
      passportId: authorInfo.passportId
    }));
    dispatch(Object(userCenter["c" /* getAuthorFollowList */])({
      passportid: authorInfo.passportId
    }));
    dispatch(Object(live["f" /* getRoomLiveList */])({
      passportId: authorInfo.passportId,
      pageSize: 21,
      adminCreateFlag: 0
    }));
  }, [authorInfo.passportId]); // 列表切换，先清空列表防止数据混乱

  Object(external_react_["useEffect"])(function () {
    if (!oldType) return;

    if (oldType !== nowType) {
      setNowList([]);
      setIsHoveMore(0);
    }
  }, [oldType]); // 列表切换时，更新列表

  Object(external_react_["useEffect"])(function () {
    if (nowList.length > 0) return;
    setNowType(oldType);
    setListData();
  }, [nowList]); // 加载更多时，更新列表

  Object(external_react_["useEffect"])(function () {
    setListData();
  }, [authorNewsList, authorVideoList, authorCollectList, authorFollowList, roomLiveList]); // 列表赋值

  var setListData = function setListData() {
    switch (oldType) {
      case userCenterTagType.ARTICLE:
        setNowList(authorNewsList.inforList);

        if (authorNewsList.inforList.length < authorAchievement.newsCounts) {
          setIsHoveMore(1);
        } else {
          setIsHoveMore(0);
        }

        break;

      case userCenterTagType.VIDEO:
        setNowList(authorVideoList.inforList);

        if (authorVideoList.inforList.length < authorAchievement.videoCounts) {
          setIsHoveMore(1);
        } else {
          setIsHoveMore(0);
        }

        break;

      case userCenterTagType.COLLECTION:
        setNowList(authorCollectList.inforList);

        if (authorCollectList.inforList.length < authorCollectList.recordCount) {
          setIsHoveMore(1);
        } else {
          setIsHoveMore(0);
        }

        break;

      case userCenterTagType.FOLLOW:
        setNowList(authorFollowList.inforList);

        if (authorFollowList.inforList.length < authorAchievement.authorLikeCounts) {
          setIsHoveMore(1);
        } else {
          setIsHoveMore(0);
        }

        break;

      case userCenterTagType.LIVE:
        setNowList(roomLiveList.inforList);

        if (roomLiveList.inforList.length < authorAchievement.videoLiveCount) {
          setIsHoveMore(1);
        } else {
          setIsHoveMore(0);
        }

        break;

      default:
        break;
    }
  }; // 点击加载更多按钮事件


  var loadMore = Object(external_react_["useCallback"])(function () {
    switch (nowType) {
      case userCenterTagType.ARTICLE:
        dispatch(Object(userCenter["d" /* getAuthorShowcolumnlist */])({
          passportId: authorInfo.passportId,
          currentPage: authorNewsList.currentPage + 1
        }));
        break;

      case userCenterTagType.VIDEO:
        dispatch(Object(userCenter["e" /* getAuthorVideolist */])({
          passportId: authorInfo.passportId,
          currentPage: authorVideoList.currentPage + 1
        }));
        break;

      case userCenterTagType.COLLECTION:
        dispatch(Object(userCenter["b" /* getAuthorCollectlist */])({
          passportId: authorInfo.passportId,
          currentPage: authorCollectList.currentPage + 1
        }));
        break;

      case userCenterTagType.FOLLOW:
        dispatch(Object(userCenter["c" /* getAuthorFollowList */])({
          passportId: authorInfo.passportId,
          currentPage: authorFollowList.currentPage + 1
        }));
        break;

      case userCenterTagType.LIVE:
        dispatch(Object(live["f" /* getRoomLiveList */])({
          passportId: authorInfo.passportId,
          pageSize: 21,
          page: roomLiveList.currentPage + 1,
          adminCreateFlag: 0
        }));
        break;

      default:
        break;
    }
  }, [nowType, authorInfo, authorNewsList, roomLiveList, authorVideoList, authorCollectList, authorFollowList]);
  return external_react_default.a.createElement("div", {
    className: "user-center-list"
  }, external_react_default.a.createElement("div", {
    className: "user-center-list-news-list ".concat(nowType === userCenterTagType.VIDEO || nowType === userCenterTagType.LIVE ? 'user-center-list-news-list-myvideo' : '')
  }, nowList && Object(_multiappsharing_public["n" /* isArray */])(nowList) && nowList.map(function (item, index) {
    switch (nowType) {
      case userCenterTagType.ARTICLE:
      case userCenterTagType.COLLECTION:
        var arrTag = !item.tags || typeof item.tags !== 'string' ? [] : item.tags.split(',');
        var authCat = null;
        arrTag.map(function (itemTag) {
          switch (itemTag) {
            case 'MarsBit 专栏精选':
              authCat = 'MarsBit 专栏';
              break;

            case '火星深度':
              authCat = '深度';
              break;

            case '火星一线':
              authCat = '一线';
              break;

            case '火星独家':
              authCat = '独家';
              break;

            case '火星原创':
              authCat = '原创';
              break;

            case '火星快译':
              authCat = '快译';
              break;

            case '火星特约':
              authCat = '特约';
              break;
          }
        });
        var newsObj = {
          authCat: authCat
        };
        return external_react_default.a.createElement(NewsListItem["a" /* default */], extends_default()({}, item, newsObj, {
          key: index
        }));

      case userCenterTagType.VIDEO:
        var url = item.coverPic ? JSON.parse(item.coverPic).pc ? JSON.parse(item.coverPic).pc : JSON.parse(item.coverPic).mainImg : '';
        var videoObj = {
          itemType: 'myvideo',
          name: item.title,
          coverPicUrl: url
        };
        return external_react_default.a.createElement(ImLiveListItem["a" /* default */], extends_default()({}, item, videoObj, {
          key: index
        }));

      case userCenterTagType.FOLLOW:
        return external_react_default.a.createElement(UserCenterFollowItem, {
          authorInfo: item,
          key: index
        });

      case userCenterTagType.LIVE:
        return external_react_default.a.createElement(ImLiveListItem["a" /* default */], extends_default()({}, item, {
          itemType: 'mylive',
          key: index
        }));

      default:
        return null;
    }
  })), external_react_default.a.createElement(LoadMore["a" /* default */], {
    style: {
      display: isHoveMore === 0 ? 'none' : 'block'
    },
    onClick: function onClick() {
      return loadMore();
    }
  }), external_react_default.a.createElement("div", {
    className: "user-center-list-no",
    style: {
      display: nowList.length === 0 ? 'block' : 'none'
    }
  }, t('no_content')));
});
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// EXTERNAL MODULE: ./_multiappsharing/public/img/right-load-more-btn.png
var right_load_more_btn = __webpack_require__(469);
var right_load_more_btn_default = /*#__PURE__*/__webpack_require__.n(right_load_more_btn);

// CONCATENATED MODULE: ./_multiappsharing/components/Home/RightLoadMoreBtn/index.js



/** @desc 右侧栏查看更多按钮 */

/* harmony default export */ var RightLoadMoreBtn = (function (props) {
  var url = props.url,
      className = props.className;
  return external_react_default.a.createElement("a", {
    href: url,
    className: "right-load-more-btn ".concat(className || ''),
    target: "_blank"
  }, external_react_default.a.createElement("div", {
    className: "right-load-more-btn-text"
  }, "\u67E5\u770B\u66F4\u591A"), external_react_default.a.createElement("img", {
    className: "right-load-more-btn-img",
    src: right_load_more_btn_default.a
  }));
});
// EXTERNAL MODULE: ./assets/containers/Home/image/right-author-next.png
var right_author_next = __webpack_require__(470);
var right_author_next_default = /*#__PURE__*/__webpack_require__.n(right_author_next);

// CONCATENATED MODULE: ./assets/containers/Home/RightMpAuthor/index.js









/* harmony default export */ var RightMpAuthor = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      mpAuthorData: state.home.mpAuthorData
    };
  }, external_react_redux_["shallowEqual"]),
      mpAuthorData = _useSelector.mpAuthorData;

  return external_react_default.a.createElement("div", {
    className: "right-mp-author right-mp-author-add-more",
    style: {
      display: mpAuthorData.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "right-mp-author-title"
  }, "MarsBit ", t('usercenter_column_author'), external_react_default.a.createElement("div", {
    className: "right-mp-author-next-btn"
  }, external_react_default.a.createElement("img", {
    className: "right-mp-author-next-btn-img",
    src: right_author_next_default.a
  }), t('usercenter_change_batch'))), external_react_default.a.createElement("div", {
    className: "right-mp-author-list"
  }, external_react_default.a.createElement(react_["Swiper"], {
    preventClicks: true,
    loop: true,
    navigation: {
      nextEl: '.right-mp-author-next-btn'
    }
  }, mpAuthorData && mpAuthorData.map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      className: "swiper-slide clearfix",
      key: index
    }, item.map(function (itemEle, indexEle) {
      return external_react_default.a.createElement("div", {
        className: "right-mp-author-item",
        key: indexEle
      }, external_react_default.a.createElement(AuthorInfo["c" /* Avatar */], {
        className: "right-mp-author-item-img",
        authorInfo: itemEle
      }), external_react_default.a.createElement("div", {
        className: "right-mp-author-item-right"
      }, external_react_default.a.createElement(AuthorInfo["a" /* AuthorName */], {
        className: "right-mp-author-item-title",
        authorInfo: itemEle
      }), external_react_default.a.createElement("a", {
        className: "right-mp-author-item-text",
        href: _multiappsharing_public["A" /* mixUrl */].main("/userCenter/".concat(itemEle.passportId)),
        target: "_blank",
        title: itemEle.nickName
      }, itemEle.introduce)));
    }));
  }))), external_react_default.a.createElement(RightLoadMoreBtn, {
    url: _multiappsharing_public["A" /* mixUrl */].news("/author")
  }));
});
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(166);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./assets/containers/UserCenter/index.js











external_swiper_default.a.use([external_swiper_["Autoplay"], external_swiper_["Navigation"], external_swiper_["Pagination"]]); // 标签类型

var UserCenter_userCenterTagType = {
  ARTICLE: 'article',
  // 文章
  VIDEO: 'video',
  // 视频
  COLLECTION: 'collection',
  // 收藏
  FOLLOW: 'follow',
  // 关注
  LIVE: 'live' // 直播

};
/* harmony default export */ var UserCenter = __webpack_exports__["default"] = (function () {
  var _useState = Object(external_react_["useState"])(UserCenter_userCenterTagType.ARTICLE),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowType = _useState2[0],
      setNowType = _useState2[1]; // 当前标签
  // 点击标签切换事件


  var onBtnTypeClick = Object(external_react_["useCallback"])(function (type) {
    setNowType(type);
  }, []);
  return external_react_default.a.createElement("div", {
    className: "user-center-page"
  }, external_react_default.a.createElement("div", {
    className: "user-center-page-header"
  }, external_react_default.a.createElement("div", {
    className: "user-center-page-header-cont"
  }, external_react_default.a.createElement("div", {
    className: "user-center-page-header-cont-left"
  }, external_react_default.a.createElement(UserCenterHeader, null), external_react_default.a.createElement(UserCenterTag, {
    nowType: nowType,
    userCenterTagType: UserCenter_userCenterTagType,
    onBtnTypeClick: onBtnTypeClick
  })), external_react_default.a.createElement("div", {
    className: "user-center-page-header-cont-right"
  }, external_react_default.a.createElement(UserCenterJoin, null)))), external_react_default.a.createElement("div", {
    className: "user-center-page-main"
  }, external_react_default.a.createElement("div", {
    className: "user-center-page-main-left"
  }, external_react_default.a.createElement(UserCenterList, {
    oldType: nowType,
    userCenterTagType: UserCenter_userCenterTagType
  })), external_react_default.a.createElement("div", {
    className: "user-center-page-main-right"
  }, external_react_default.a.createElement(UserCenterFollowAndFans, {
    userCenterTagType: UserCenter_userCenterTagType,
    onBtnTypeClick: onBtnTypeClick
  }), external_react_default.a.createElement(UserCenterAchievement, null), external_react_default.a.createElement(RightMpAuthor, null))));
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-orange-ddf372b8.svg";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-blue-77c6a4e4.svg";

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

/***/ 235:
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "react-simple-img"
var external_react_simple_img_ = __webpack_require__(170);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

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
    src: Object(_multiappsharing_public["G" /* stringJsonItem */])(coverPic, type),
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

  var authLink = _multiappsharing_public["A" /* mixUrl */].main("/userCenter/".concat(createdBy)); // 视频图片类型

  var videoImgType = Object(_multiappsharing_public["G" /* stringJsonItem */])(coverPic, 'video_pc') !== '' ? 'video_pc' : 'video_m';

  var _useState = Object(external_react_["useState"])(_multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"))),
      _useState2 = slicedToArray_default()(_useState, 2),
      linkurl = _useState2[0],
      setLinkurl = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    if (typeof window !== 'undefined') {
      var reqhost = window.location;

      if (infoType && infoType === 'video') {
        setLinkurl(_multiappsharing_public["A" /* mixUrl */].main("/video/detail/".concat(id, "/").concat(publishTime), reqhost));
      } else {
        setLinkurl(_multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"), reqhost));
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
  }, author), external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(publishTime, serverTime && serverTime !== '' && serverTime))), !tagsHide && Object(_multiappsharing_public["F" /* stringArray */])(tagsV2).length !== 0 && external_react_default.a.createElement("div", {
    className: "tags",
    style: {
      display: 'none'
    }
  }, "\u5173\u952E\u5B57:", Object(_multiappsharing_public["F" /* stringArray */])(tagsV2).map(function (item, index) {
    if (index >= 3 || !item.name) return false;
    var symbol = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'symbol');
    var fullname = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'full_name');
    var link = (item.type === 3 || symbol === '') && _multiappsharing_public["A" /* mixUrl */].news("/tags/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(item.name))) || _multiappsharing_public["A" /* mixUrl */].main("/marketsDetail/".concat(fullname, "/").concat(symbol));
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
/* harmony default export */ var components_NewsListItem = __webpack_exports__["a"] = (NewsListItem_NewsListItem);

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "userCenter-change-amend-3bbed03e.png";

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "userCenter-change-password-ed0b7997.png";

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "userCenter-achievement-icon1-1beeaf26.png";

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "userCenter-achievement-icon2-20e37700.png";

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "userCenter-achievement-icon3-bfaa114c.png";

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-load-more-btn-e48af609.png";

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-author-next-7e655345.png";

/***/ })

};;
//# sourceMappingURL=containers-UserCenter.js.map