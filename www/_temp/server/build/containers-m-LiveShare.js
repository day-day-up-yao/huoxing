require("source-map-support").install();
exports.ids = [37];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/containers-m/LiveShare/LiveInfo/images/live-share-guest-blue.png
var live_share_guest_blue = __webpack_require__(502);
var live_share_guest_blue_default = /*#__PURE__*/__webpack_require__.n(live_share_guest_blue);

// EXTERNAL MODULE: ./assets/containers-m/LiveShare/LiveInfo/images/live-share-guest-yellow.png
var live_share_guest_yellow = __webpack_require__(503);
var live_share_guest_yellow_default = /*#__PURE__*/__webpack_require__.n(live_share_guest_yellow);

// EXTERNAL MODULE: ./assets/containers-m/LiveShare/HotLiveroom/Image/im-live-list-item-status.gif
var im_live_list_item_status = __webpack_require__(431);
var im_live_list_item_status_default = /*#__PURE__*/__webpack_require__.n(im_live_list_item_status);

// EXTERNAL MODULE: ./assets/containers-m/LiveShare/HotLiveroom/Image/im-live-list-item-status2.png
var im_live_list_item_status2 = __webpack_require__(432);
var im_live_list_item_status2_default = /*#__PURE__*/__webpack_require__.n(im_live_list_item_status2);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/containers-m/LiveShare/LiveInfo/index.jsx







/* harmony default export */ var LiveInfo = (function (props) {
  var presenter = props.presenterList && Array.isArray(props.presenterList) && props.presenterList[0] || {};
  var presenterGrade = 'vGrade' in presenter && (presenter.vGrade === 2 || presenter.vGrade === 3 ? live_share_guest_blue_default.a : presenter.vGrade === 1 ? live_share_guest_yellow_default.a : null);
  var playNum = props.pop.popularity ? props.pop.popularity : props.popularity;
  var name = props.name,
      status = props.status,
      beginTime = props.beginTime;
  var playNumText = playNum;

  if (playNum > 1000000) {
    playNumText = '99.9万+';
  } else if (playNumText > 10000) {
    playNumText = "".concat((playNumText / 10000).toFixed(1), "\u4E07");
  }

  return external_react_default.a.createElement("div", {
    className: "liveshare-m-info-box"
  }, external_react_default.a.createElement("div", {
    className: "liveshare-info-simple"
  }, external_react_default.a.createElement("div", {
    className: "video-title"
  }, external_react_default.a.createElement("span", {
    className: "live-status im-item-status-".concat(status && status === 2 ? 'finish' : status && status === 1 ? 'living' : 'ready')
  }, status && status === 1 ? external_react_default.a.createElement("img", {
    src: im_live_list_item_status_default.a
  }) : status && status === 2 ? external_react_default.a.createElement("img", {
    src: im_live_list_item_status2_default.a
  }) : '', external_react_default.a.createElement("em", null, status && status === 1 ? '直播中' : status && status === 2 ? '回放中' : '即将开始')), external_react_default.a.createElement("div", {
    className: "title"
  }, name)), status ? external_react_default.a.createElement("div", {
    className: "liveshare-info-presenter"
  }, external_react_default.a.createElement("div", {
    className: "presenter-info"
  }, external_react_default.a.createElement("div", {
    className: "avatar"
  }, external_react_default.a.createElement("img", {
    src: presenter.iconUrl
  })), external_react_default.a.createElement("div", {
    className: "name"
  }, presenter.nickName), presenterGrade && external_react_default.a.createElement("div", {
    className: "grade"
  }, external_react_default.a.createElement("img", {
    src: presenterGrade
  }))), external_react_default.a.createElement("div", {
    className: "presenter-play-num"
  }, "\u89C2\u770B\u4EBA\u6B21\uFF1A", external_react_default.a.createElement("span", null, playNumText))) : external_react_default.a.createElement("div", {
    className: "live-time"
  }, "\u76F4\u64AD\u65F6\u95F4\uFF1A", Object(_multiappsharing_public["l" /* formatTime */])(beginTime, 'yyyy-MM-dd hh:mm'))));
});
// EXTERNAL MODULE: ./_multiappsharing/components-m/Layout/FooterDownload/index.js
var FooterDownload = __webpack_require__(424);

// EXTERNAL MODULE: ./_multiappsharing/components-m/DownloadBtn/index.js
var DownloadBtn = __webpack_require__(231);

// CONCATENATED MODULE: ./assets/containers-m/LiveShare/HotLiveroom/LiveRoomItem/index.jsx





/* harmony default export */ var LiveRoomItem = (function (props) {
  var itemType = props.itemType,
      roomId = props.roomId,
      status = props.status,
      popularity = props.popularity,
      coverPicUrl = props.coverPicUrl,
      name = props.name,
      id = props.id,
      publishTime = props.publishTime;
  var playNum = popularity && popularity !== '' ? popularity : 0;
  var playNumText = "".concat(playNum, " \u4EBA\u6B21");

  if (playNum > 1000000) {
    playNumText = "99.9\u4E07+  \u4EBA\u6B21";
  } else if (playNum > 10000) {
    playNumText = "".concat((playNum / 10000).toFixed(1), "\u4E07 \u4EBA\u6B21");
  }

  var href = itemType !== undefined && itemType === 'myvideo' ? _multiappsharing_public["A" /* mixUrl */].main("/video/detail/".concat(id, "/").concat(publishTime)) : _multiappsharing_public["A" /* mixUrl */].main("/liveshare/".concat(roomId));
  return external_react_default.a.createElement("a", {
    className: "im-live-list-item im-live-list-item-".concat(itemType),
    href: href,
    target: "_self"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-item-video"
  }, external_react_default.a.createElement("img", {
    className: "im-live-list-item-video-img",
    src: coverPicUrl
  }), itemType !== undefined && itemType === 'myvideo' ? null : external_react_default.a.createElement("div", {
    className: "im-live-list-item-video-state type-lt"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-item-video-state-box type-".concat(status && status !== '' ? status : '0')
  }, status && status === 1 ? external_react_default.a.createElement("img", {
    className: "im-live-list-item-video-state-box-img",
    src: im_live_list_item_status_default.a
  }) : status && status === 0 ? '' : external_react_default.a.createElement("img", {
    className: "im-live-list-item-video-state-box-img",
    src: im_live_list_item_status2_default.a
  }), status && status === 1 ? '直播中' : status && status === 2 ? '回放中' : '即将开始'), status && status !== 0 ? external_react_default.a.createElement("div", {
    className: "im-live-list-item-video-state-box type-pop"
  }, playNumText) : null), itemType === 'top1' || itemType === 'top2' ? external_react_default.a.createElement("div", {
    className: "im-live-list-item-list-top-state"
  }, external_react_default.a.createElement("div", {
    className: "im-live-list-item-list-top-title"
  }, name)) : null), itemType === undefined || itemType === 'myvideo' || itemType === 'mylive' || itemType === 'top3' ? external_react_default.a.createElement("div", {
    className: "im-live-list-item-title"
  }, name) : null);
});
// CONCATENATED MODULE: ./assets/containers-m/LiveShare/HotLiveroom/index.jsx




/* harmony default export */ var HotLiveroom = (function (props) {
  var listData = props.listData;
  return external_react_default.a.createElement("div", {
    className: "hot-live",
    style: {
      display: listData.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "live-room-list"
  }, listData && listData.length > 0 && listData.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "live-room-list-item"
    }, external_react_default.a.createElement(LiveRoomItem, extends_default()({}, item, {
      key: index
    })));
  })));
});
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

// EXTERNAL MODULE: ./assets/containers-m/LiveShare/LiveroomDesc/images/arrow-img.png
var arrow_img = __webpack_require__(504);
var arrow_img_default = /*#__PURE__*/__webpack_require__.n(arrow_img);

// CONCATENATED MODULE: ./assets/containers-m/LiveShare/LiveroomDesc/index.js









var LiveroomDesc_LiveroomDesc =
/*#__PURE__*/
function (_Component) {
  inherits_default()(LiveroomDesc, _Component);

  function LiveroomDesc(props) {
    var _this;

    classCallCheck_default()(this, LiveroomDesc);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(LiveroomDesc).call(this, props));

    _this.onCheckboxChange = function () {
      _this.setState({
        showAll: false
      });
    };

    _this.state = {
      showAll: true
    };
    return _this;
  }

  createClass_default()(LiveroomDesc, [{
    key: "render",
    value: function render() {
      var showAll = this.state.showAll;
      return external_react_default.a.createElement("div", {
        className: "im-live-detail-left-live-info"
      }, external_react_default.a.createElement("div", {
        className: "description_box"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "contTab",
        onChange: this.onCheckboxChange,
        checked: showAll,
        className: "tabbed"
      }), external_react_default.a.createElement("div", {
        id: "cont"
      }, external_react_default.a.createElement("div", {
        className: "description",
        dangerouslySetInnerHTML: {
          __html: this.props.brief
        }
      })), external_react_default.a.createElement("div", {
        className: "content-more"
      }, external_react_default.a.createElement("div", {
        className: "gradient"
      }), external_react_default.a.createElement("label", {
        htmlFor: "contTab",
        className: "readmore"
      }, "\u5C55\u5F00\u5168\u90E8", external_react_default.a.createElement("img", {
        className: "arrow",
        src: arrow_img_default.a
      })))));
    }
  }]);

  return LiveroomDesc;
}(external_react_["Component"]);

/* harmony default export */ var LiveShare_LiveroomDesc = (LiveroomDesc_LiveroomDesc);
// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "blueimp-md5"
var external_blueimp_md5_ = __webpack_require__(52);
var external_blueimp_md5_default = /*#__PURE__*/__webpack_require__.n(external_blueimp_md5_);

// EXTERNAL MODULE: ./assets/public/hooks/useTWebLivePlayer.js
var useTWebLivePlayer = __webpack_require__(242);

// EXTERNAL MODULE: ./assets/public/hooks/useTWebLiveIm.js
var useTWebLiveIm = __webpack_require__(244);

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// CONCATENATED MODULE: ./assets/containers-m/LiveShare/LiveroomVideo/index.jsx










/* harmony default export */ var LiveroomVideo = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      room: state.live.room,
      userInfo: state.login.userInfo.info
    };
  }, external_react_redux_["shallowEqual"]),
      room = _useSelector.room,
      userInfo = _useSelector.userInfo;

  var _useState = Object(external_react_["useState"])({
    paddingTop: '0'
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      style = _useState2[0],
      setStyle = _useState2[1];

  var _useTWebLivePlayer = Object(useTWebLivePlayer["a" /* default */])({
    elementID: 'id_test_video'
  }),
      player = _useTWebLivePlayer.player,
      setMutedBtnShow = _useTWebLivePlayer.setMutedBtnShow,
      mutedBtnShow = _useTWebLivePlayer.mutedBtnShow;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var timeImLogin = Object(external_react_["useRef"])();
  var timeImJoin = Object(external_react_["useRef"])();

  var onTextMessageReceived = function onTextMessageReceived(event) {
    if (!event || !event.data || !Object(_multiappsharing_public["n" /* isArray */])(event.data)) return;
    event.data.map(function (elementItem) {
      if (!elementItem.type) return;

      switch (elementItem.type) {
        case 'TIMGroupSystemNoticeElem':
          if (!elementItem.payload) return;

          if (elementItem.payload.operationType && elementItem.payload.operationType === 5) {
            // 直播间直播结束（群被解散）
            dispatch(Object(live["d" /* getRoomByID */])({
              roomId: room.roomId
            }));
            setImJoin(false);
          }

          break;

        default:
          break;
      }
    });
  };

  var _useTWebLiveIm = Object(useTWebLiveIm["a" /* default */])(),
      createIM = _useTWebLiveIm.createIM,
      getImLogin = _useTWebLiveIm.getImLogin,
      joinImRoom = _useTWebLiveIm.joinImRoom,
      setImJoin = _useTWebLiveIm.setImJoin,
      im = _useTWebLiveIm.im,
      imReady = _useTWebLiveIm.imReady,
      imLogin = _useTWebLiveIm.imLogin,
      imJoin = _useTWebLiveIm.imJoin; // 创建直播间


  Object(external_react_["useEffect"])(function () {
    if (room.status !== 1) return;
    createIM(onTextMessageReceived);
  }, [room.status]); // 登录

  Object(external_react_["useEffect"])(function () {
    if (!im) return; // 未登录下用 uuid md5 取第8-24位

    var passportId = !userInfo.passportId ? external_blueimp_md5_default()(Object(_multiappsharing_public["I" /* uuid */])()).substring(7, 23) : userInfo.passportId;
    getImLogin(passportId);
  }, [im, userInfo]); // 加入聊天室

  Object(external_react_["useEffect"])(function () {
    if (timeImLogin.current) {
      clearInterval(timeImLogin.current);
      timeImLogin.current = null;
    }

    if (imReady) {
      if (!imLogin && room.status === 1) {
        timeImLogin.current = setInterval(function () {
          // 未登录下用 uuid md5 取第8-24位
          var passportId = !userInfo.passportId ? external_blueimp_md5_default()(Object(_multiappsharing_public["I" /* uuid */])()).substring(7, 23) : userInfo.passportId;
          getImLogin(passportId);
        }, 10000);
      } else {
        clearInterval(timeImLogin.current);
        timeImLogin.current = null;
        joinImRoom(room.roomId);
      }
    }

    return function () {
      clearInterval(timeImLogin.current);
    };
  }, [imReady, imLogin, userInfo, room.status]); // 掉线后循环请求加入

  Object(external_react_["useEffect"])(function () {
    if (timeImJoin.current) {
      clearInterval(timeImJoin.current);
      timeImJoin.current = null;
    }

    if (!imJoin && room.status === 1) {
      timeImJoin.current = setInterval(function () {
        joinImRoom(room.roomId);
      }, 10000);
    } else {
      clearInterval(timeImJoin.current);
      timeImJoin.current = null;
    }

    return function () {
      clearInterval(timeImJoin.current);
      timeImJoin.current = null;
    };
  }, [room.status, imJoin]);
  Object(external_react_["useEffect"])(function () {
    var timer = setInterval(function () {
      if (typeof window !== 'undefined' && player) {
        setStyle(videoStyle());
        clearInterval(timer);
      }
    }, 200);
    return function () {
      clearInterval(timer);
    };
  }, [player]);
  var videoStyle = Object(external_react_["useCallback"])(function () {
    // 1是obs推流，0是手机
    if (room.roomType === 0) return {
      width: '57%',
      margin: '0 auto'
    };
    if (room.roomType === 1) return {
      paddingTop: '0'
    };
  }, [room.roomType]);
  return external_react_default.a.createElement("div", {
    className: "live-share-live-video-m"
  }, external_react_default.a.createElement("div", {
    className: "video-wrapper",
    style: objectSpread_default()({}, style)
  }, external_react_default.a.createElement("div", {
    id: "id_test_video",
    className: "".concat(room && room.roomType === 0 ? 'vertical' : 'horizontal')
  }), external_react_default.a.createElement("div", {
    className: "click-cancel-muted ".concat(room && room.roomType === 0 ? 'mobile' : 'pc'),
    style: {
      display: mutedBtnShow ? 'block' : 'none'
    },
    onClick: function onClick() {
      if (!player) return;
      setMutedBtnShow(false);
    }
  }, external_react_default.a.createElement("button", null, "\u70B9\u51FB\u53D6\u6D88\u9759\u97F3"))));
});
// CONCATENATED MODULE: ./assets/containers-m/LiveShare/NostartButton/index.jsx


/* harmony default export */ var NostartButton = (function (props) {
  var time = props.time;

  var timeZero = function timeZero(num) {
    if (Number(num) < 10) {
      return "0".concat(num);
    } else {
      return num;
    }
  };

  return external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer-text2"
  }, "\u8DDD\u76F4\u64AD\u5F00\u59CB\uFF1A", timeZero(time.d) && time.d !== 0 && external_react_default.a.createElement("span", null, time.d, "\u5929"), timeZero(time.h) && external_react_default.a.createElement("span", null, time.h, "\u65F6"), timeZero(time.m) && external_react_default.a.createElement("span", null, time.m, "\u5206"), timeZero(time.s) && external_react_default.a.createElement("span", null, time.s, "\u79D2")));
});
// EXTERNAL MODULE: ./_multiappsharing/public/img/v-orange.svg
var v_orange = __webpack_require__(193);
var v_orange_default = /*#__PURE__*/__webpack_require__.n(v_orange);

// EXTERNAL MODULE: ./_multiappsharing/public/img/v-blue.svg
var v_blue = __webpack_require__(194);
var v_blue_default = /*#__PURE__*/__webpack_require__.n(v_blue);

// CONCATENATED MODULE: ./assets/containers-m/LiveShare/LiveGuestInfo/LiveGuestItem/Profile/index.jsx




/** @desc 头像，不可跳转 */

/* harmony default export */ var Profile = (function (props) {
  var authorInfo = props.authorInfo,
      iconHide = props.iconHide;
  var authStyle = null;
  var authName = '普通用户';

  switch (parseInt(authorInfo.vGrade)) {
    case 0:
      authName = '普通用户';
      break;

    case 1:
      authStyle = v_orange_default.a;
      authName = 'MarsBit 专栏个人认证';
      break;

    case 2:
      authStyle = v_blue_default.a;
      authName = 'MarsBit 专栏媒体认证';
      break;

    case 3:
      authStyle = v_blue_default.a;
      authName = 'MarsBit 专栏机构认证';
      break;

    default:
      authName = '普通用户';
  }

  return external_react_default.a.createElement("div", {
    className: "author-info-avatar"
  }, external_react_default.a.createElement("div", {
    className: "author-info-avatar-img"
  }, external_react_default.a.createElement("img", {
    className: "img-clear-blur avatar-img",
    src: authorInfo.iconUrl,
    alt: authorInfo.nickname
  }), authStyle && !iconHide && external_react_default.a.createElement("span", {
    title: authName,
    className: "avatar-mark"
  }, external_react_default.a.createElement("img", {
    className: "img-clear-blur",
    src: authStyle,
    alt: authorInfo.nickName
  }))), external_react_default.a.createElement("div", {
    className: "author-info-avatar-text"
  }, external_react_default.a.createElement("p", {
    className: "live-profile-title"
  }, external_react_default.a.createElement("span", null, authorInfo.nickName, external_react_default.a.createElement("span", {
    className: "avatar-role"
  }, authorInfo.userType === 0 ? external_react_default.a.createElement("span", {
    className: "guest-icon"
  }, "\u5609\u5BBE") : external_react_default.a.createElement("span", {
    className: "presenter-icon"
  }, "\u4E3B\u64AD")))), external_react_default.a.createElement("p", {
    className: "im-live-list-right-live-good-up-item-text"
  }, authorInfo.introduce)));
});
// CONCATENATED MODULE: ./assets/containers-m/LiveShare/LiveGuestInfo/LiveGuestItem/index.jsx



/* harmony default export */ var LiveGuestItem = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "im-live-list-right-live-good-up-item"
  }, external_react_default.a.createElement(Profile, {
    authorInfo: props
  }));
});
// CONCATENATED MODULE: ./assets/containers-m/LiveShare/LiveGuestInfo/index.jsx




/* harmony default export */ var LiveGuestInfo = (function (props) {
  var guestList = props.guestList,
      presenterList = props.presenterList;
  return external_react_default.a.createElement("div", {
    className: "liveshare-m-guest-box"
  }, presenterList && presenterList.length > 0 && presenterList.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "live-guest-list-item"
    }, external_react_default.a.createElement(LiveGuestItem, extends_default()({}, item, {
      key: index
    })));
  }), guestList && guestList.length > 0 && guestList.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "live-guest-list-item"
    }, external_react_default.a.createElement(LiveGuestItem, extends_default()({}, item, {
      key: index
    })));
  }));
});
// CONCATENATED MODULE: ./assets/containers-m/LiveShare/index.jsx














/* harmony default export */ var LiveShare = __webpack_exports__["default"] = (function (props) {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      roomData: state.live.room,
      popularityList: state.live.popularityList,
      roomLiveRecommendList: state.live.roomLiveRecommendList.inforList
    };
  }, external_react_redux_["shallowEqual"]),
      roomData = _useSelector.roomData,
      popularityList = _useSelector.popularityList,
      roomLiveRecommendList = _useSelector.roomLiveRecommendList;

  var livelinkid = props.match.params.roomId;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t; // 当前直播间状态 0.未直播 1.直播中 2.回放中


  var _useState = Object(external_react_["useState"])(roomData.status),
      _useState2 = slicedToArray_default()(_useState, 2),
      liveState = _useState2[0],
      setLiveState = _useState2[1];

  var _useState3 = Object(external_react_["useState"])({
    d: 0,
    h: 0,
    m: 0,
    s: 0
  }),
      _useState4 = slicedToArray_default()(_useState3, 2),
      countTime = _useState4[0],
      setCountTime = _useState4[1];

  var getCountTimeText = Object(external_react_["useCallback"])(function () {
    var nowTime = new Date().getTime();
    var endTime = Number(roomData.beginTime);
    var leftTime = endTime - nowTime;
    var obj = {
      d: 0,
      h: 0,
      m: 0,
      s: 0
    };

    if (leftTime >= 0) {
      obj.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      obj.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      obj.m = Math.floor(leftTime / 1000 / 60 % 60);
      obj.s = Math.floor(leftTime / 1000 % 60);
    } else {// 跳走，reload
    }

    setCountTime(obj);

    if (roomData.status === 0) {
      setTimeout(getCountTimeText, 1000);
    }
  }, []);

  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = slicedToArray_default()(_useState5, 2),
      isBoxShow = _useState6[0],
      setIsBoxShow = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    if (roomData.status === 0) {
      setLiveState(0);
    } else if (roomData.status === 1) {
      setLiveState(1);
    } else if (roomData.status === 2) {
      setLiveState(2);
    }
  }, [roomData]);
  Object(external_react_["useEffect"])(function () {
    getCountTimeText();
  }, []);

  var changeBoxShow = function changeBoxShow(boxShow) {
    setIsBoxShow(boxShow);
  };

  return external_react_default.a.createElement("div", {
    id: "hxwrap"
  }, external_react_default.a.createElement(FooterDownload["a" /* default */], {
    type: "liveshare",
    id: livelinkid
  }), external_react_default.a.createElement("div", {
    className: "hxwrap"
  }, external_react_default.a.createElement("div", {
    className: "live-share-m"
  }, external_react_default.a.createElement("div", {
    className: "live-share-m-info"
  }, external_react_default.a.createElement("div", {
    className: "live-share-m-content",
    id: "live-share-m-content"
  }, liveState === 0 ? external_react_default.a.createElement("div", {
    className: "readyPic"
  }, external_react_default.a.createElement("img", {
    className: "live-share-m-ready-coverPic",
    src: roomData.coverPicUrl
  }), external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "playerWrap"
  }, external_react_default.a.createElement("div", {
    className: "player"
  })))) : external_react_default.a.createElement(LiveroomVideo, {
    changeBoxShow: changeBoxShow
  }), roomData && external_react_default.a.createElement("div", {
    className: "live-background",
    style: {
      background: "url(".concat(roomData.coverPicUrl, ")")
    }
  })), external_react_default.a.createElement("div", {
    className: "live-share-m-info"
  }, external_react_default.a.createElement(LiveInfo, extends_default()({}, roomData, {
    pop: popularityList[0]
  })), liveState === 0 && external_react_default.a.createElement("div", {
    className: "live-share-m-brief"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "live-share-box-title"
  }), "\u4E3B\u64AD\u4E0E\u5609\u5BBE"), external_react_default.a.createElement(LiveGuestInfo, roomData)))), external_react_default.a.createElement("div", {
    className: "live-share-m-brief"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "live-share-box-title"
  }), t('live_brief')), external_react_default.a.createElement(LiveShare_LiveroomDesc, roomData)), external_react_default.a.createElement("div", {
    className: "live-share-m-hot-box"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "live-share-box-title"
  }), "\u70ED\u95E8\u76F4\u64AD"), roomLiveRecommendList.length > 0 && external_react_default.a.createElement(HotLiveroom, {
    listData: roomLiveRecommendList
  })))), isBoxShow !== 0 ? external_react_default.a.createElement("div", null) : null, liveState ? external_react_default.a.createElement(DownloadBtn["a" /* default */], null) : external_react_default.a.createElement(NostartButton, extends_default()({}, roomData, {
    time: countTime
  })));
});

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

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export commentStyle */
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _useLiveGather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(195);



 // import HlsJsPlayer from 'xgplayer-hls.js'






var timeZero = function timeZero(num) {
  if (Number(num) < 10) {
    return "0".concat(num);
  } else {
    return num;
  }
};

var commentStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '24px',
  textShadow: 'rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px' // padding: '5px 11px',
  // border: '1px solid rgba(255, 255, 255, 0.4)',
  // borderRadius: '50px',
  // backgroundColor: 'rgba(255, 255, 255, 0.2)'

};
/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return {
      roomHistoryList: state.live.roomHistoryList,
      room: state.live.room
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]),
      room = _useSelector.room,
      roomHistoryList = _useSelector.roomHistoryList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    d: 0,
    h: 0,
    m: 0,
    s: 0
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      countTime = _useState2[0],
      setCountTime = _useState2[1]; // elementID 播放器绑定ID


  var elementID = props.elementID; // 倒计时

  var getCountTimeText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var nowTime = new Date().getTime();
    var endTime = Number(room.beginTime);
    var leftTime = endTime - nowTime;
    var obj = {
      d: 0,
      h: 0,
      m: 0,
      s: 0
    };

    if (leftTime >= 0) {
      obj.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      obj.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      obj.m = Math.floor(leftTime / 1000 / 60 % 60);
      obj.s = Math.floor(leftTime / 1000 % 60);
    }

    setCountTime(obj);

    if (room.status === 0) {
      setTimeout(getCountTimeText, 1000);
    }
  }, []); // 播放

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      mutedBtnShow = _useState4[0],
      setMutedBtnShow = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      player = _useState6[0],
      setPlayer = _useState6[1]; // 直播中实例


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!player || mutedBtnShow) return;
    document.querySelector('.xgplayer-icon-large').removeAttribute('style');
    document.querySelector('.xgplayer-icon-muted').removeAttribute('style');
    player.video.muted = false;
  }, [mutedBtnShow]);
  var startPlay = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (url, type) {
    if (!url) return; // 移动端的控制条选项

    var mobileoptions = {
      id: elementID,
      url: url,
      poster: room.coverPicUrl,
      width: elementID === 'id_test_video' ? '100%' : 884,
      height: elementID === 'id_test_video' ? '100%' : 500,
      pip: false,
      // 画中画
      screenShot: false,
      autoplay: true,
      lang: 'zh-cn',
      playsinline: true,
      ignores: ['volume']
    };
    var options = {
      id: elementID,
      url: url,
      poster: room.coverPicUrl,
      // playbackRate: [0.5, 0.75, 1, 1.5, 2],
      // defaultPlaybackRate: 1,
      rotate: {
        // 视频旋转按钮配置项
        innerRotate: true,
        // 只旋转内部video
        clockwise: false // 旋转方向是否为顺时针

      },
      pip: true,
      // 画中画
      pipConfig: {
        bottom: 200,
        right: 0,
        width: 320,
        height: 180
      },
      screenShot: true,
      // 截图功能
      autoplay: true,
      // 自动播放，行为会受到浏览器规则限制
      // videoInit: true, // 在没有设置poster的情况下显示视频首帧,移动端无效
      width: elementID === 'id_test_video' ? '100%' : 884,
      height: elementID === 'id_test_video' ? '100%' : 500,
      lang: 'zh-cn',
      // useHls: true, // 插件解码
      playsinline: true,
      controls: true // isPc() // 控制条显示（移动端禁止）
      // 弹幕

    };
    options.danmu = {
      // panel: true,
      comments: [],
      area: {
        // 弹幕显示区域
        start: 0.02,
        // 区域顶部到播放器顶部所占播放器高度的比例
        end: 1.02 // 区域底部到播放器顶部所占播放器高度的比例

      } // 回放添加，变速按钮，弹幕数组
      // 移动端回翻和pc端回放要区别开来

    };

    if (type === 'playback' && Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__[/* isPc */ "u"])()) {
      options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, options, {
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        defaultPlaybackRate: 1
      });
      var commentsArray = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = roomHistoryList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var val = _step.value;
          // console.log(`${val.content}: ${(val.updateTime - room.beginTime) / 1000}s`)
          commentsArray.push({
            mode: 'scroll',
            duration: 10000,
            id: val.id,
            start: val.updateTime - room.beginTime,
            // txt: `${val.nickName}：${val.content}`,
            txt: val.content,
            style: commentStyle
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      options.danmu.comments = commentsArray;
    } else if (type === 'playback' && !Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__[/* isPc */ "u"])()) {
      options = mobileoptions; // 根据横竖屏，先计算，出一个高度

      if (room.roomType === 1) {
        options.height = 211; // options.rotateFullscreen = true

        options.cssFullscreen = true;
      } else {
        options.height = 310;
      }
    } else {
      options.controls = false; // 手机直播 隐藏控制条
    }

    var player = null;

    if (Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__[/* fileExtension */ "j"])(url) === 'flv') {
      // iphone不支持flv----->https://github.com/bytedance/xgplayer/issues/385
      // options = {
      //     ...options,
      //     isLive: type === 'playing',
      //     cors: true
      // }
      // require('xgplayer')
      // const FlvPlayer = require('xgplayer-flv')
      // player = new FlvPlayer(options)
      // console.log('000')
      __webpack_require__(168);

      options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, options, {
        url: options.url.replace('.flv', '.m3u8')
      });

      var HlsJsPlayer = __webpack_require__(171);

      player = new HlsJsPlayer(options);
    } else if (Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__[/* fileExtension */ "j"])(url) === 'm3u8') {
      __webpack_require__(168);

      var _HlsJsPlayer = __webpack_require__(171);

      player = new _HlsJsPlayer(options);
    } else {
      var Player = __webpack_require__(168);

      __webpack_require__(176);

      player = new Player(options);
    } // Usage: isAutoplaySupported(callback);
    // Using a callback assures that support
    // has been properly checked


    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__[/* isAutoplaySupported */ "o"])(function (supported) {
      if (supported) {
        // HTML5 Video Autoplay Supported!
        console.log('HTML5 Video Autoplay Supported!');
      } else {
        // HTML5 Video Autoplay Not Supported :(
        console.log('HTML5 Video Autoplay Not Supported :(');
        player.once('canplay', function () {
          document.querySelector('.xgplayer-icon-large').setAttribute('style', 'display:none');
          document.querySelector('.xgplayer-icon-muted').setAttribute('style', 'display:block');
          player.video.muted = true;
          player.play();
          setMutedBtnShow(true);
        });
      }
    });
    setPlayer(player);
    window.livePlayer = player; // 挂载到全局，以便发送评论时，发送弹幕
    // roomHistoryList 服务端请求roomHistoryList，此处inputs加与不加，关系不大。服务端请求数据可减少startPlay数据判断
  }, []); // 点击上报事件

  var livePush = Object(_useLiveGather__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!player) return;
    console.log(1111);
    player.on('play', function () {
      livePush({
        eventId: 'playback_control',
        eventInfo: {
          action: 'play'
        }
      });
    });
    player.on('pause', function () {
      livePush({
        eventId: 'playback_control',
        eventInfo: {
          action: 'pause'
        }
      });
    });
    player.on('requestFullscreen', function () {
      livePush({
        eventId: 'playback_control',
        eventInfo: {
          action: 'fullscreen'
        }
      });
    });
    player.on('exitFullscreen', function () {
      livePush({
        eventId: 'playback_control',
        eventInfo: {
          action: 'exit_fullscreen'
        }
      });
    });
  }, [player]);
  var roomStatus = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (room) {
    var status = '';

    switch (room.status) {
      case 0:
        status = 'not_started';
        break;

      case 1:
        status = 'living';
        break;

      case 2:
        status = 'finished';
        break;

      default:
        status = 'not_started';
    }

    return status;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!room) return; // 页面刷新退出前，上报关闭直播间时，直播间状态

    window.onbeforeunload = function () {
      livePush({
        eventId: 'exit_room',
        eventInfo: {
          state: roomStatus(room)
        }
      });
    };
  }, [room]);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      oldRoomStatus = _useState8[0],
      setOldRoomStatus = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // 未开始和直播中才上报
    if (!room || room.status !== 0 && room.status !== 1) return;
    if (room.status === oldRoomStatus) return;
    setOldRoomStatus(room.status);
    livePush({
      eventId: 'enter_room',
      eventInfo: {
        state: roomStatus(room)
      }
    });
  }, [room]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!room) return;

    switch (room.status) {
      case 0:
        // 即将开始
        getCountTimeText();
        break;

      case 1:
        // 直播中
        var playingUrl = room.webPullStreamUrl ? room.webPullStreamUrl : room.pullStreamUrl;

        if (!playingUrl) {
          _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].info('未获取到视频直播地址，请刷新试试');
          return;
        }

        if (player === null) {
          if (playingUrl.indexOf('?txSecret=') > -1) playingUrl = playingUrl.split('?txSecret=')[0];
          if (playingUrl.indexOf('https://') === -1) playingUrl = playingUrl.replace('http://', 'https://');
          startPlay(playingUrl, 'playing');
        }

        break;

      case 2:
        // 回放中
        livePush({
          eventId: 'enter_playback'
        });
        var playbackUrl = room.recordVideoUrl;

        if (!playbackUrl) {
          // 会因为重复请求，而一直弹出
          // Toast.info('未获取到视频回放地址，请刷新试试')
          return;
        }

        if (player !== null) {
          player.destroy(true);
          setPlayer(null);
        }

        if (playbackUrl.indexOf('https://') === -1) {
          playbackUrl = playbackUrl.replace('http://', 'https://');
        }

        startPlay(playbackUrl, 'playback');
        break;

      default:
        setTimeout(function () {
          _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].info('直播间不存在或已删除');
        }, 500);
        break;
    }
  }, [room]); // 监听人气值实时更新

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var timer = setInterval(function () {
      if (room.status === 1) {
        dispatch(Object(_redux_actions_live__WEBPACK_IMPORTED_MODULE_4__[/* getRoomPopularity */ "i"])({
          roomIDs: room.roomId
        }));
      }
    }, 5000);
    return function () {
      clearInterval(timer);
    };
  }, [dispatch.live, room]); // 监听直播间状态，即将开始-->直播-->回放

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(666);
    var timer = setInterval(function () {
      if (room.status === 0 || room.status === 2 && !room.recordVideoUrl) {
        dispatch(Object(_redux_actions_live__WEBPACK_IMPORTED_MODULE_4__[/* getRoomByID */ "d"])({
          roomId: room.roomId
        }));
      } else {
        clearInterval(timer);
      }
    }, 3000);
    return function () {
      clearInterval(timer);
    };
  }, [dispatch.live, room]); // 监听移动端点击播放

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_6__[/* isPc */ "u"])() && player) {
      document.body.onclick = function () {
        player.play();
      };
    }
  }, [player]);
  return {
    player: player,
    countTime: countTime,
    timeZero: timeZero,
    setMutedBtnShow: setMutedBtnShow,
    mutedBtnShow: mutedBtnShow
  };
});

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(177);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_5__);





 // import { imSdkAppId } from '../../../config/config-server'

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      im = _useState2[0],
      setIm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      imReady = _useState4[0],
      setImReady = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      imLogin = _useState6[0],
      setImLogin = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      imJoin = _useState8[0],
      setImJoin = _useState8[1];

  var createIM = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (setTextMessageReceived) {
    var TWebLive = __webpack_require__(172);

    var im = TWebLive.createIM({
      SDKAppID: 1400383128
    });

    var onIMReady = function onIMReady(event) {
      setImReady(true);
    };

    var onSdkNotReady = function onSdkNotReady(event) {
      console.log("\u7528\u6237\u88ABNotReady\u89E6\u53D1");
      setImReady(false);
    }; // const onTextMessageReceived = function (event) {
    //     event.data.forEach(function (message) {
    //         console.log((message.from || message.nick) + ' : ', message.payload.text)
    //     })
    //     setTextMessageReceived(event)
    // }


    var onCustomMessageReceived = function onCustomMessageReceived(event) {
      console.log('custom message received', event.data);
      event.data.forEach(function (message) {
        console.log((message.from || message.nick) + ' : ', message.payload.text);
      });
      setTextMessageReceived(event);
    };

    var onRemoteUserJoin = function onRemoteUserJoin(event) {
      event.data.forEach(function (message) {
        console.log((message.nick || message.payload.userIDList[0]) + ' 来了');
      });
    };

    var onRemoteUserLeave = function onRemoteUserLeave(event) {
      event.data.forEach(function (message) {
        console.log((message.nick || message.payload.userIDList[0]) + ' 走了');
      });
    };

    var onKickedOut = function onKickedOut(event) {
      console.log("\u7528\u6237\u88AB\u8E22\u4E0B\u7EBF\u65F6\u89E6\u53D1");
      console.log(event.data.type); // TWebLive.TYPES.KICKED_OUT_MULT_ACCOUNT(Web端，同一账号，多页面登录被踢)
      // TWebLive.TYPES.KICKED_OUT_MULT_DEVICE(同一账号，多端登录被踢)
      // TWebLive.TYPES.KICKED_OUT_USERSIG_EXPIRED(签名过期)
    };

    var onNetStateChange = function onNetStateChange(event) {
      console.log("\u7F51\u7EDC\u72B6\u6001\u53D1\u751F\u6539\u53D8");
      console.log(event.data.state); // event.data.state 当前网络状态，枚举值及说明如下：
      // TWebLive.TYPES.NET_STATE_CONNECTED - 已接入网络
      // TWebLive.TYPES.NET_STATE_CONNECTING - 连接中。很可能遇到网络抖动，SDK 在重试。接入侧可根据此状态提示“当前网络不稳定”或“连接中”
      // TWebLive.TYPES.NET_STATE_DISCONNECTED - 未接入网络。接入侧可根据此状态提示“当前网络不可用”。SDK 仍会继续重试，若用户网络恢复，SDK 会自动同步消息
    };

    var onPushStopped = function onPushStopped(event) {
      console.log("\u4E3B\u64AD\u505C\u6B62\u63A8\u6D41\u65F6\u89E6\u53D1");
      console.log('postscript: ', event.data);
    }; // 接入侧监听此事件，然后可调用 SDK 发送消息等


    im.on(TWebLive.EVENT.IM_READY, onIMReady); // 接入侧监听此事件，然后可调用 SDK 发送消息等

    im.on(TWebLive.EVENT.IM_NOT_READY, onSdkNotReady); // // 收到文本消息，上屏
    // im.on(TWebLive.EVENT.IM_TEXT_MESSAGE_RECEIVED, onTextMessageReceived)
    // // 收到自定义消息时触发
    // im.on(TWebLive.EVENT.IM_CUSTOM_MESSAGE_RECEIVED, onCustomMessageReceived)
    // 远程用户进入触发

    im.on(TWebLive.EVENT.IM_REMOTE_USER_JOIN, onRemoteUserJoin); // 远程用户离开触发

    im.on(TWebLive.EVENT.IM_REMOTE_USER_LEAVE, onRemoteUserLeave); // 远程用户离开

    im.on(TWebLive.EVENT.IM_KICKED_OUT, onKickedOut); // 网络状态改变

    im.on(TWebLive.EVENT.IM_NET_STATE_CHANGED, onNetStateChange); // 主播停止推流

    im.on(TWebLive.EVENT.IM_PUSH_STOPPED, onPushStopped); // tweblive不能接收到系统消息，通过tim接收

    im._tim.on(tim_js_sdk__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.MESSAGE_RECEIVED, onCustomMessageReceived);

    setIm(im);
  }, []);
  var getImLogin = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(passportId) {
      var sigRes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                url: "/imusersig/".concat(passportId)
              });

            case 2:
              sigRes = _context.sent;
              // 2、登录
              // im.registerPlugin({ 'cos-js-sdk': COS })
              im.login({
                userID: passportId,
                userSig: sigRes.data.data
              }).then(function (imResponse) {
                console.log('im.login');
                console.log('登录成功');
                console.log(imResponse); // 登录成功
                // if (imResponse.data.repeatLogin === true) {
                //     // 标识账号已登录，本次登录操作为重复登录
                //     console.log(imResponse.data.errorInfo)
                // }

                setImLogin(true);
              })["catch"](function (imError) {
                console.log('登录失败');
                console.warn('im | login | failed', imError); // 登录失败的相关信息

                setImLogin(false);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [im]);
  var joinImRoom = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (roomId) {
    var TWebLive = __webpack_require__(172);

    if (im.enterRoom) {
      // 3、加入直播间
      im.enterRoom(roomId).then(function (imResponse) {
        console.log(imResponse.data);

        switch (imResponse.data.status) {
          case TWebLive.TYPES.ENTER_ROOM_SUCCESS:
            // 加入直播间成功
            console.log('成功加入直播间');
            setImJoin(true);
            break;

          case TWebLive.TYPES.ALREADY_IN_ROOM:
            // 已经在直播间内
            console.log('已经在直播间里');
            setImJoin(true);
            break;

          default:
            setImJoin(false);
            break;
        }
      })["catch"](function (imError) {
        console.warn('im | enterRoom | failed', imError); // 加入直播间失败的相关信息

        setImJoin(false);
      });
    }
  }, [im]);
  return {
    imReady: imReady,
    imLogin: imLogin,
    imJoin: imJoin,
    createIM: createIM,
    getImLogin: getImLogin,
    joinImRoom: joinImRoom,
    setImLogin: setImLogin,
    setImJoin: setImJoin,
    im: im
  };
});

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(425);
/* harmony import */ var _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(200);
/* harmony import */ var _public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(201);







/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var type = props.type,
      id = props.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openInBrowser = _useState2[0],
      setOpenInBrowser = _useState2[1];

  var appDownload = Object(_public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])();
  var clickDownload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setOpenInBrowser(appDownload(type, id));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "share-download-bottom active",
    id: "share-download-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bottom-left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "MarsBit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t('all_world_dynamic'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "b-down",
    onClick: clickDownload
  }, t('share_open'), " APP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    openInBrowser: openInBrowser,
    setOpenInBrowser: setOpenInBrowser
  }));
});

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-share-logo-3e28eff7.png";

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-list-item-status-19bd2cda.gif";

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-list-item-status2-5d5cebf1.png";

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-share-guest-blue-09bc8518.png";

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-share-guest-yellow-d7c73d40.png";

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-img-d0262ecc.png";

/***/ })

};;
//# sourceMappingURL=containers-m-LiveShare.js.map