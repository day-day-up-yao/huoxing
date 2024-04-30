require("source-map-support").install();
exports.ids = [12];
exports.modules = {

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// EXTERNAL MODULE: ./assets/components/ImLiveList/LeftLiveHeader/index.js
var LeftLiveHeader = __webpack_require__(246);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightLive/ImLiveListItem/index.js
var ImLiveListItem = __webpack_require__(199);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/LeftLiveRecommend/index.js
var LeftLiveRecommend = __webpack_require__(220);

// CONCATENATED MODULE: ./assets/containers/ImLiveList/LeftLiveList/index.js










/* harmony default export */ var LeftLiveList = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      roomLiveTypeList: state.live.roomLiveTypeList,
      // 类型列表
      roomLiveRecommendList: state.live.roomLiveRecommendList.inforList,
      // 推荐列表
      roomLiveTypeListObjData: state.live.roomLiveTypeListObjData,
      // 分类列表
      roomLivePopularityList: state.live.popularityList // 人气列表

    };
  }, external_react_redux_["shallowEqual"]),
      roomLiveTypeList = _useSelector.roomLiveTypeList,
      roomLiveTypeListObjData = _useSelector.roomLiveTypeListObjData,
      roomLiveRecommendList = _useSelector.roomLiveRecommendList,
      roomLivePopularityList = _useSelector.roomLivePopularityList;

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])(9999),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowType = _useState2[0],
      setNowType = _useState2[1]; // 当前分类 10000.广场 9999.推荐 1.其他


  var _useState3 = Object(external_react_["useState"])(roomLiveTypeListObjData[9999].inforList),
      _useState4 = slicedToArray_default()(_useState3, 2),
      nowListData = _useState4[0],
      setNowListData = _useState4[1]; // 当前分类


  var _useState5 = Object(external_react_["useState"])(roomLiveRecommendList),
      _useState6 = slicedToArray_default()(_useState5, 2),
      nowRecommend = _useState6[0],
      setNowRecommend = _useState6[1]; // 当前推荐


  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      isHaveMore = _useState8[0],
      setIsHaveMore = _useState8[1]; // 是否还有更多内容


  var _useState9 = Object(external_react_["useState"])(0),
      _useState10 = slicedToArray_default()(_useState9, 2),
      isOpen = _useState10[0],
      setIsOpen = _useState10[1]; // 是否初始化完成


  var timer = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(function () {
    setNowRecommend(roomLiveRecommendList);
  }, [roomLiveTypeList, roomLiveRecommendList, roomLiveTypeListObjData]); // 初始请求人气值

  Object(external_react_["useEffect"])(function () {
    if (isOpen !== 0) return;
    var ids = [];
    roomLiveRecommendList.map(function (item) {
      ids.push(item.roomId);
    });
    nowListData.map(function (item) {
      ids.push(item.roomId);
    });
    dispatch(Object(live["i" /* getRoomPopularity */])({
      roomIDs: ids.join(',')
    })).then(function () {
      setIsOpen(1);
    });
  }, [dispatch.live, nowListData, roomLiveRecommendList, isOpen]); // 请求人气值

  Object(external_react_["useEffect"])(function () {
    if (timer.current || isOpen === 0) return;
    timer.current = setInterval(function () {
      dispatch(Object(live["i" /* getRoomPopularity */])());
    }, 5000);
    return function () {
      clearInterval(timer.current);
    };
  }, [dispatch.live, nowListData, roomLiveRecommendList, isOpen]); // 人气赋值

  Object(external_react_["useEffect"])(function () {
    var newList = nowListData;

    for (var i = 0; i < newList.length; i++) {
      for (var j = 0; j < roomLivePopularityList.length; j++) {
        if (newList[i].roomId === roomLivePopularityList[j].roomId) {
          newList[i].popularity = roomLivePopularityList[j].popularity;
          break;
        }
      }
    }

    setNowListData(newList);
    var newList2 = roomLiveRecommendList;

    for (var _i = 0; _i < newList2.length; _i++) {
      for (var _j = 0; _j < roomLivePopularityList.length; _j++) {
        if (newList2[_i].roomId === roomLivePopularityList[_j].roomId) {
          newList2[_i].popularity = roomLivePopularityList[_j].popularity;
          break;
        }
      }
    }

    setNowRecommend(newList2);
  }, [roomLivePopularityList]);
  Object(external_react_["useEffect"])(function () {
    if (roomLiveTypeListObjData && roomLiveTypeListObjData[nowType]) {
      setNowListData(roomLiveTypeListObjData[nowType].inforList);
      var currPage = parseInt(roomLiveTypeListObjData[nowType].currentPage) + 1;

      if (roomLiveTypeListObjData[nowType].pageCount >= currPage) {
        setIsHaveMore(true);
      } else {
        setIsHaveMore(false);
      }
    }
  }, [roomLiveTypeListObjData, nowType]); // 点击切换类型按钮事件

  var onBtnTypeClick = Object(external_react_["useCallback"])(function (type) {
    setNowType(type);
  }, []); // 点击分类列表加载更多按钮事件

  var onBtnMoreClick = Object(external_react_["useCallback"])(function () {
    var currPage = parseInt(roomLiveTypeListObjData[nowType].currentPage) + 1;

    if (roomLiveTypeListObjData[nowType].pageCount >= currPage) {
      dispatch(Object(live["f" /* getRoomLiveList */])({
        liveType: nowType,
        pageSize: 32,
        page: currPage
      }));
    }
  }, [nowType, roomLiveTypeListObjData]);
  return external_react_default.a.createElement("div", {
    className: "im-live-list-left-live-list"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-left-live-list-new-box",
    style: {
      display: 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-left-live-list-new-box-left"
  }, "\u7CBE\u9009\u76F4\u64AD"), external_react_default.a.createElement("div", {
    className: "im-live-list-left-live-list-new-box-list"
  }, nowRecommend && Object(_multiappsharing_public["n" /* isArray */])(nowRecommend) && nowRecommend.map(function (item, index) {
    if (index < 4) {
      return external_react_default.a.createElement("div", {
        className: "im-live-list-left-live-list-new-box-item",
        key: index
      }, external_react_default.a.createElement(ImLiveListItem["a" /* default */], extends_default()({}, item, {
        itemType: "top3"
      })));
    } else {
      return null;
    }
  })), external_react_default.a.createElement("a", {
    className: "im-live-list-left-live-list-new-box-right",
    href: _multiappsharing_public["A" /* mixUrl */].main("/live/recommend"),
    target: "_blank"
  }, "\u67E5\u770B\u66F4\u591A")), external_react_default.a.createElement(LeftLiveHeader["a" /* default */], {
    title: '',
    typeList: roomLiveTypeList,
    nowType: nowType,
    onBtnTypeClick: onBtnTypeClick
  }), external_react_default.a.createElement(LeftLiveRecommend["a" /* default */], {
    listData: nowListData,
    onBtnMoreClick: onBtnMoreClick,
    isHaveMore: isHaveMore
  }));
});
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// EXTERNAL MODULE: ./assets/components/ImLiveList/image/ad-carousel-title.png
var ad_carousel_title = __webpack_require__(450);
var ad_carousel_title_default = /*#__PURE__*/__webpack_require__.n(ad_carousel_title);

// CONCATENATED MODULE: ./assets/components/ImLiveList/LeftLiveAd/index.js





/* harmony default export */ var LeftLiveAd = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      liveListImgData: state.home.liveListImgData
    };
  }, external_react_redux_["shallowEqual"]),
      liveListImgData = _useSelector.liveListImgData;

  return external_react_default.a.createElement("div", {
    className: "im-live-list-left-live-ad",
    style: {
      display: liveListImgData.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "im-live-list-left-live-ad-primary",
    preventClicks: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination.left-ad-carousel-recommend-pag',
      type: 'bullets',
      clickable: true,
      bulletClass: 'left-ad-carousel-recommend-pag-customs',
      bulletActiveClass: 'left-ad-carousel-recommend-pag-customs-active'
    }
  }, liveListImgData && liveListImgData.map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      className: "comment-news",
      key: index
    }, external_react_default.a.createElement("a", {
      title: item.title,
      target: "_blank",
      href: item.url
    }, external_react_default.a.createElement("div", {
      className: "img-div"
    }, external_react_default.a.createElement("img", {
      className: "news-img",
      alt: item.title,
      src: item.pcImgSrc
    })), external_react_default.a.createElement("span", {
      className: "mode"
    }), external_react_default.a.createElement("div", {
      className: "title"
    }, item.title), item.useType === 1 ? external_react_default.a.createElement("div", {
      className: "ad-title"
    }, external_react_default.a.createElement("img", {
      src: ad_carousel_title_default.a
    })) : null));
  }), external_react_default.a.createElement("div", {
    className: "swiper-pagination left-ad-carousel-recommend-pag"
  })));
});
// EXTERNAL MODULE: ./_multiappsharing/redux/actions/login.js + 1 modules
var login = __webpack_require__(14);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/home.js + 1 modules
var home = __webpack_require__(31);

// EXTERNAL MODULE: ./assets/containers/ImLiveList/Image/im-live-add.png
var im_live_add = __webpack_require__(451);
var im_live_add_default = /*#__PURE__*/__webpack_require__.n(im_live_add);

// CONCATENATED MODULE: ./assets/containers/Home/RightAdLive/index.js








/* harmony default export */ var RightAdLive = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      userInfo: state.login.userInfo.info
    };
  }, external_react_redux_["shallowEqual"]),
      userInfo = _useSelector.userInfo;

  var dispatch = Object(external_react_redux_["useDispatch"])(); // 点击按钮事件

  var onBtnClick = Object(external_react_["useCallback"])(function () {
    if (!userInfo.passportId) {
      dispatch(Object(login["h" /* loginShowHide */])('account', true));
      return;
    }

    if (userInfo.realAuth && parseInt(userInfo.realAuth) === 1 || userInfo.faceAuth && parseInt(userInfo.faceAuth) === 1) {
      dispatch(Object(live["f" /* getRoomLiveList */])({
        passportId: userInfo.passportId,
        adminCreateFlag: 0,
        main: true
      })).then(function (res) {
        if (res.code === 1) {
          var list = res.obj.inforList;
          var roomId = -1;

          for (var i = 0; i < list.length; i++) {
            var element = list[i];

            if (element.status !== 2) {
              roomId = element.roomId;
              break;
            }
          }

          if (roomId === -1) {
            window.location.href = _multiappsharing_public["A" /* mixUrl */].main("/live/start");
          } else {
            window.location.href = _multiappsharing_public["A" /* mixUrl */].main("/live/control/".concat(roomId));
          }
        }
      })["catch"](function (err) {
        throw err;
      });
    } else {
      dispatch(Object(home["c" /* homeLiveVerifyPopupShow */])(true));
    }
  }, [userInfo]);
  return external_react_default.a.createElement("div", {
    className: "home-right-ad-live",
    onClick: function onClick() {
      onBtnClick();
    }
  }, external_react_default.a.createElement("img", {
    className: "home-right-ad-live-img",
    src: im_live_add_default.a
  }));
});
// EXTERNAL MODULE: ./assets/containers/Home/Popup/index.js + 1 modules
var Popup = __webpack_require__(429);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(189);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightFlashAndDynamic/index.js
var RightFlashAndDynamic = __webpack_require__(237);

// EXTERNAL MODULE: ./assets/public/hooks/useLiveGather.js
var useLiveGather = __webpack_require__(195);

// EXTERNAL MODULE: ./assets/public/hooks/useLiveGatherAjax.js
var useLiveGatherAjax = __webpack_require__(223);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(166);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./assets/containers/ImLiveList/index.js



 // import RightLiveListPlayer from './RightLiveListPlayer'
// import RightLiveJoin from '../../components/ImLiveList/RightLiveJoin'








external_swiper_default.a.use([external_swiper_["Autoplay"], external_swiper_["Navigation"], external_swiper_["Pagination"]]);
/* harmony default export */ var ImLiveList = __webpack_exports__["default"] = (function () {
  Object(useLiveGatherAjax["a" /* default */])();
  var livePush = Object(useLiveGather["a" /* default */])();
  Object(external_react_["useEffect"])(function () {
    livePush({
      eventId: 'live_home_enter'
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: "im-live-list-page"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-page-main-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-page-main-box-left"
  }, external_react_default.a.createElement(LeftLiveAd, null), external_react_default.a.createElement(LeftLiveList, null)), external_react_default.a.createElement("div", {
    className: "im-live-list-page-main-box-right"
  }, external_react_default.a.createElement(RightAdLive, null), external_react_default.a.createElement(RightFlashAndDynamic["a" /* default */], {
    onlyOne: 'flash'
  }), external_react_default.a.createElement(RightDownloadBox["a" /* default */], {
    isLive: true
  }))), external_react_default.a.createElement(Popup["a" /* default */], null));
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

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// CONCATENATED MODULE: ./_multiappsharing/public/hooks/useMemo.js

/* harmony default export */ var useMemo = (function (_ref) {
  var children = _ref.children,
      _ref$deps = _ref.deps,
      deps = _ref$deps === void 0 ? [] : _ref$deps,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? external_react_["Fragment"] : _ref$wrap;
  // 转换参数为大写开头
  var Wrap = wrap; // 这里由于React 的限制，必须要返回单一节点，因此做了一层包装。
  // 包装节点可自定义传入一个组件类型
  // eslint-disable-next-line react-hooks/exhaustive-deps

  var comp = Object(external_react_["useMemo"])(children, deps);
  return external_react_default.a.createElement(Wrap, null, comp);
});
// CONCATENATED MODULE: ./_multiappsharing/components/Popup/index.js



/* harmony default export */ var Popup = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      show = _ref.show,
      close = _ref.close,
      closeIcon = _ref.closeIcon,
      closeClassName = _ref.closeClassName,
      wrapperClassName = _ref.wrapperClassName;
  // 显示时让弹出框在最上层
  // 按项目布局定--只需要layout-content在layout-header,layout-header-auto等外层布局上就好
  Object(external_react_["useEffect"])(function () {
    var layoutContent = document.querySelector('.layout-content');
    if (!layoutContent) return;
    var zIndexStyle = '; z-index: 10';

    var removeZindex = function removeZindex() {
      var defaultStyle = layoutContent.getAttribute('style');
      defaultStyle && defaultStyle.indexOf(zIndexStyle) > -1 && layoutContent.setAttribute('style', defaultStyle.replace(zIndexStyle, ''));
    };

    if (show) {
      var defaultStyle = layoutContent.getAttribute('style');
      defaultStyle && defaultStyle.indexOf(zIndexStyle) === -1 && layoutContent.setAttribute('style', defaultStyle + zIndexStyle);
    } else {
      removeZindex();
    }

    return function () {
      removeZindex();
    };
  }, [show]);
  return external_react_default.a.createElement(useMemo, {
    deps: [children, show, close]
  }, function () {
    return external_react_default.a.createElement("div", {
      className: "popup-wrapper ".concat(wrapperClassName || ''),
      style: {
        display: show ? 'flex' : 'none'
      }
    }, external_react_default.a.createElement("div", {
      className: "popup-content"
    }, external_react_default.a.createElement("img", {
      className: "popup-close ".concat(closeClassName || ''),
      src: closeIcon,
      onClick: close
    }), children), external_react_default.a.createElement("div", {
      className: "popup-mask",
      onClick: close
    }));
  });
});

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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
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
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* mixUrl */ "A"].news("/flash"),
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
    }, listType === 'flash' ? Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* formatPublishTime */ "k"])(item.createdTime) : Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* formatTime */ "l"])(item.publishTime * 1000, 'MM-dd'))), item.url !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-popup-close-d56650a0.png";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-QRcode-e79e9b7e.jpg";

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-live-verify-right-f392b3bc.png";

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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./_multiappsharing/components/Popup/index.js + 1 modules
var Popup = __webpack_require__(213);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/home.js + 1 modules
var home = __webpack_require__(31);

// EXTERNAL MODULE: ./assets/containers/Home/image/home-popup-close.png
var home_popup_close = __webpack_require__(238);
var home_popup_close_default = /*#__PURE__*/__webpack_require__.n(home_popup_close);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/containers/Home/image/right-download-QRcode.jpg
var right_download_QRcode = __webpack_require__(239);
var right_download_QRcode_default = /*#__PURE__*/__webpack_require__.n(right_download_QRcode);

// EXTERNAL MODULE: ./assets/containers/Home/image/home-live-verify-right.png
var home_live_verify_right = __webpack_require__(240);
var home_live_verify_right_default = /*#__PURE__*/__webpack_require__.n(home_live_verify_right);

// CONCATENATED MODULE: ./assets/containers/Home/Popup/PopupLiveVerify/index.js




/* harmony default export */ var PopupLiveVerify = (function () {
  return external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-title"
  }, "\u5B9E\u540D\u8BA4\u8BC1"), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-halftitle"
  }, "\u5E94\u7F51\u7EDC\u5B9E\u540D\u5236\u8981\u6C42\uFF0C\u8EAB\u4EFD\u6821\u9A8C\u540E\u624D\u53EF\u4EE5\u5F00\u542F\u76F4\u64AD"), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-box"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-title left"
  }, "1\u3001\u6253\u5F00MarsBit\u5E76\u767B\u5F55\u5F53\u524D\u8D26\u53F7"), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-code"
  }, external_react_default.a.createElement("img", {
    className: "home-popup-live-verify-popup-item-code-img",
    src: right_download_QRcode_default.a
  })), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-text"
  }, "\u626B\u63CF\u4E8C\u7EF4\u7801\u53EF\u4E0B\u8F7DMarsBit APP")), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-line"
  }), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-title right"
  }, "2. \u5728APP\u9996\u9875\u70B9\u51FB \u3010\u5F00\u64AD\u3011\u5F00\u59CB\u8BA4\u8BC1"), external_react_default.a.createElement("img", {
    className: "home-popup-live-verify-popup-item-right-img",
    src: home_live_verify_right_default.a
  }))));
});
// CONCATENATED MODULE: ./assets/containers/Home/Popup/index.js






/* harmony default export */ var Home_Popup = __webpack_exports__["a"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      isLiveVerifyShow: state.multi.home.popupState.liveVerify
    };
  }, external_react_redux_["shallowEqual"]),
      isLiveVerifyShow = _useSelector.isLiveVerifyShow;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var onBtnCloseClick = Object(external_react_["useCallback"])(function () {
    dispatch(Object(home["c" /* homeLiveVerifyPopupShow */])(false));
  }, []);
  return external_react_default.a.createElement(Popup["a" /* default */], {
    children: external_react_default.a.createElement(PopupLiveVerify, null),
    show: isLiveVerifyShow,
    close: onBtnCloseClick,
    closeIcon: home_popup_close_default.a,
    closeClassName: 'home-popup-live-verify-popup-close'
  });
});

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad-carousel-title-2dc60314.png";

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-add-62cc0ba9.png";

/***/ })

};;
//# sourceMappingURL=containers-ImLiveList.js.map