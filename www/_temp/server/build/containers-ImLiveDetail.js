require("source-map-support").install();
exports.ids = [11];
exports.modules = {

/***/ 139:
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

// EXTERNAL MODULE: ./_multiappsharing/components/AuthorInfo/index.js
var AuthorInfo = __webpack_require__(188);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/image/live_detail_type_2.gif
var live_detail_type_2 = __webpack_require__(441);
var live_detail_type_2_default = /*#__PURE__*/__webpack_require__.n(live_detail_type_2);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/image/live_detail_pop.png
var live_detail_pop = __webpack_require__(442);
var live_detail_pop_default = /*#__PURE__*/__webpack_require__.n(live_detail_pop);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/image/live-tip-warning.png
var live_tip_warning = __webpack_require__(443);
var live_tip_warning_default = /*#__PURE__*/__webpack_require__.n(live_tip_warning);

// CONCATENATED MODULE: ./assets/components/ImLiveDetail/LeftLiveVideo/LeftLiveVideoHeader/index.js







/* harmony default export */ var LeftLiveVideoHeader = (function (props) {
  var status = props.status,
      name = props.name,
      type2 = props.type2,
      beginTime = props.beginTime,
      presenterList = props.presenterList,
      popularity = props.popularity,
      pop = props.pop,
      onBtnGetTipAddClick = props.onBtnGetTipAddClick;
  var playNum = pop.popularity ? pop.popularity : popularity && popularity !== 0 ? popularity : 0;
  var playNumText = playNum;

  if (playNum > 1000000) {
    playNumText = "99.9\u4E07+";
  } else if (playNum > 10000) {
    playNumText = "".concat((playNum / 10000).toFixed(1), "\u4E07");
  }

  return external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header"
  }, external_react_default.a.createElement(AuthorInfo["c" /* Avatar */], {
    className: "im-live-detail-left-live-video-header-img",
    authorInfo: presenterList[0]
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-info"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-top-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-top-left"
  }, status !== undefined && status === 0 && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-icon im-live-detail-left-live-video-header-type1"
  }, "\u5373\u5C06\u5F00\u59CB"), status !== undefined && status === 1 && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-icon im-live-detail-left-live-video-header-type2"
  }, external_react_default.a.createElement("img", {
    src: live_detail_type_2_default.a,
    style: {
      height: '16px',
      marginRight: '4px'
    }
  }), "\u76F4\u64AD\u4E2D"), status !== undefined && status === 2 && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-icon im-live-detail-left-live-video-header-type3"
  }, "\u56DE\u653E\u4E2D"), name && name !== '' && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-title",
    title: name
  }, name), type2 && type2 !== '' && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-title-sp"
  }, type2)), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-top-text"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-left-live-video-header-top-text-icon",
    src: live_detail_pop_default.a
  }), "\u89C2\u770B\u4EBA\u6B21\uFF1A".concat(playNumText))), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-bottom-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-bottom-left"
  }, name && name !== '' && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-bottom-text"
  }, "\u4E3B\u64AD\uFF1A".concat(presenterList && presenterList.length > 0 && presenterList[0].nickName !== '' ? presenterList[0].nickName : '')), beginTime && beginTime !== '' && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-bottom-text"
  }, "\u76F4\u64AD\u65F6\u95F4\uFF1A".concat(Object(_multiappsharing_public["l" /* formatTime */])(beginTime, 'yyyy-MM-dd hh:mm')))), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-header-bottom-right",
    onClick: function onClick() {
      return onBtnGetTipAddClick();
    }
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-left-live-video-header-bottom-right-icon",
    src: live_tip_warning_default.a
  }), "\u4E3E\u62A5"))));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/image/live-tip-clear.png
var live_tip_clear = __webpack_require__(444);
var live_tip_clear_default = /*#__PURE__*/__webpack_require__.n(live_tip_clear);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/image/live-tip-close.png
var live_tip_close = __webpack_require__(445);
var live_tip_close_default = /*#__PURE__*/__webpack_require__.n(live_tip_close);

// EXTERNAL MODULE: ./assets/components/ImLiveDetail/image/live-tip-cross.png
var live_tip_cross = __webpack_require__(446);
var live_tip_cross_default = /*#__PURE__*/__webpack_require__.n(live_tip_cross);

// CONCATENATED MODULE: ./assets/components/ImLiveDetail/LiveTipBox/index.js








 // 举报类型数组

var typeArr = [{
  type: 1,
  name: '违法违禁'
}, {
  type: 2,
  name: '淫秽色情'
}, {
  type: 3,
  name: '抽烟喝酒'
}, {
  type: 4,
  name: '危险行为'
}, {
  type: 5,
  name: '侮辱谩骂'
}, {
  type: 6,
  name: '其他'
}];
/* harmony default export */ var LiveTipBox = (function (props) {
  var room = props.room,
      onBtnGetTipAddClick = props.onBtnGetTipAddClick;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowType = _useState2[0],
      setNowType = _useState2[1]; // 当前选择的举报类型


  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      textImg = _useState4[0],
      setTextImg = _useState4[1]; // 举报图片


  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      isUpImg = _useState6[0],
      setIsUpImg = _useState6[1]; // 是否正在上传图片


  var textArea = Object(external_react_["useRef"])(); // 输入框实例

  var curWordsNum = Object(external_react_["useRef"])(); // 输入字数

  /** @desc 评论输入字数量 */

  var wordsNum = Object(external_react_["useCallback"])(function (event) {
    var val = Object(_multiappsharing_public["H" /* trim */])(event.target.value);

    if (val.length <= 100) {
      curWordsNum.current.innerText = val.length;
    } else {
      event.target.value = val.substring(0, 300);
    }
  }, []); // 点击举报类型按钮事件

  var onBtnChangeTypeClick = Object(external_react_["useCallback"])(function (type) {
    setNowType(type);
  }, []); // 图片地址转换Blob格式

  var dataURLtoBlob = function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {
      type: mime
    });
  }; // 上传图片事件


  var coverImgUpload = Object(external_react_["useCallback"])(function (e) {
    var file = e.target.files[0]; // 获取文件

    if (window.FileReader) {
      // 如果浏览器支持FileReader
      var reader = new FileReader(); // 新建一个FileReader对象

      reader.readAsDataURL(file); // 读取文件url

      reader.onloadend = function (e) {
        setTextImg(e.target.result);
        setIsUpImg(true);
        Object(live["m" /* uploadImg */])({
          uploadFile: dataURLtoBlob(e.target.result),
          type: 'news',
          data: '',
          watermark: 0
        }).then(function (res) {
          if (res.code === 1) {
            setTextImg(res.obj);
          }

          setIsUpImg(false);
        })["catch"](function (err) {
          console.log('上传图片失败');
          setIsUpImg(false);
          throw err;
        });
      };
    }
  }, []); // 点击取消图片事件

  var closeImg = Object(external_react_["useCallback"])(function () {
    setTextImg('');
  }, []); // 点击提交按钮事件

  var onBtnOKClick = Object(external_react_["useCallback"])(function () {
    if (isUpImg === true) return;

    if (nowType === 0) {
      Toast["a" /* default */].info('请选择举报类型');
      return;
    }

    var passportId = room.presenterList && room.presenterList.length > 0 ? room.presenterList[0].passportId : '';
    if (passportId === '') return;
    var val = Object(_multiappsharing_public["H" /* trim */])(textArea.current.value);
    var obj = {
      roomId: room.roomId,
      passportId: passportId,
      type: nowType,
      reason: val,
      imgUrl: textImg
    };
    Object(live["a" /* getLiveTipAdd */])(obj).then(function (res) {
      if (res.code === 1) {
        Toast["a" /* default */].info('举报成功');
        setTimeout(function () {
          onBtnGetTipAddClick();
        }, 1000);
      }
    })["catch"](function (err) {
      Toast["a" /* default */].info('举报失败');
      throw err;
    });
  }, [isUpImg, nowType, onBtnGetTipAddClick]); // 点击取消按钮事件

  var onBtnClearClick = Object(external_react_["useCallback"])(function () {
    onBtnGetTipAddClick();
  }, [onBtnGetTipAddClick]);
  return external_react_default.a.createElement("div", {
    className: "im-live-tip-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-tip-box-bg"
  }), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-popup"
  }, external_react_default.a.createElement("div", {
    className: "im-live-tip-box-top"
  }, external_react_default.a.createElement("div", {
    className: "im-live-tip-box-title"
  }, "\u4E3E\u62A5\u7406\u7531"), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-clear",
    onClick: function onClick() {
      return onBtnClearClick();
    }
  }, external_react_default.a.createElement("img", {
    className: "im-live-tip-box-clear-img",
    src: live_tip_clear_default.a
  }))), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-type-list"
  }, typeArr.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "im-live-tip-box-type-item ".concat(item.type === nowType ? 'im-live-tip-box-type-item-active' : ''),
      key: index,
      onClick: function onClick() {
        return onBtnChangeTypeClick(item.type);
      }
    }, item.name);
  })), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-reason"
  }, external_react_default.a.createElement("textarea", {
    className: "im-live-tip-box-reason-input",
    placeholder: "\uFF08\u5FC5\u586B\uFF09\u586B\u5199\u4E3E\u62A5\u7406\u7531\u4E0E\u4E0A\u4F20\u622A\u56FE\uFF0C\u53EF\u8BA9\u5FEB\u901F\u5904\u7406\u76F8\u5173\u95EE\u9898",
    ref: textArea,
    onChange: wordsNum
  }), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-reason-input-sp"
  }, external_react_default.a.createElement("em", {
    ref: curWordsNum
  }, "0"), "/300")), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-update"
  }, external_react_default.a.createElement("div", {
    className: "im-live-tip-box-update-img-bg"
  }, external_react_default.a.createElement("img", {
    className: "im-live-tip-box-update-img-cross ".concat(textImg !== '' ? 'im-live-tip-box-update-img-text' : ''),
    src: textImg !== '' ? textImg : live_tip_cross_default.a
  }), external_react_default.a.createElement("input", {
    className: "im-live-tip-box-update-img-inputfile",
    onChange: function onChange(e) {
      return coverImgUpload(e);
    },
    name: "file",
    id: "file",
    type: "file",
    accept: ".jpg,.jpeg,.png"
  }), textImg !== '' ? external_react_default.a.createElement("img", {
    className: "im-live-tip-box-update-img-close",
    onClick: function onClick() {
      return closeImg();
    },
    src: live_tip_close_default.a
  }) : null), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-update-text"
  }, "\uFF08\u5FC5\u586B\uFF09\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC74M")), external_react_default.a.createElement("div", {
    className: "im-live-tip-box-btn",
    onClick: function onClick() {
      return onBtnOKClick();
    }
  }, "\u63D0\u4EA4")));
});
// EXTERNAL MODULE: ./assets/public/hooks/useTWebLivePlayer.js
var useTWebLivePlayer = __webpack_require__(242);

// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/LeftLiveVideo/index.js





 // import LeftLiveVideoFooter from '../../../components/ImLiveDetail/LeftLiveVideo/LeftLiveVideoFooter'




/* harmony default export */ var LeftLiveVideo = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      room: state.live.room,
      popularityList: state.live.popularityList
    };
  }, external_react_redux_["shallowEqual"]),
      room = _useSelector.room,
      popularityList = _useSelector.popularityList;

  var _useTWebLivePlayer = Object(useTWebLivePlayer["a" /* default */])({
    elementID: 'im-live-detail-left-live-video'
  }),
      player = _useTWebLivePlayer.player,
      countTime = _useTWebLivePlayer.countTime,
      timeZero = _useTWebLivePlayer.timeZero,
      setMutedBtnShow = _useTWebLivePlayer.setMutedBtnShow,
      mutedBtnShow = _useTWebLivePlayer.mutedBtnShow;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      isPip = _useState2[0],
      setIsPip = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isTipShow = _useState4[0],
      setIsTipShow = _useState4[1]; // 是否显示举报弹窗
  // 滚动画中画


  Object(external_react_["useEffect"])(function () {
    if (room.status !== 2 && room.status !== 1 || !player) return;
    var box = document.getElementById('im-live-detail-left-live-video');
    var scrollFunc = Object(_multiappsharing_public["L" /* windowScroll */])(function (res) {
      if (res === 'down' && isPip === 0 && Object(_multiappsharing_public["E" /* scrollOffset */])().top > 600) {
        player.getPIP();
        setIsPip(1);
        box.style.zIndex = 1000;
      }

      if (res === 'up' && isPip === 1 && Object(_multiappsharing_public["E" /* scrollOffset */])().top < 600) {
        player.exitPIP();
        setIsPip(0);
        box.style.zIndex = 0;
      }
    });
    return function () {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [room, player, isPip]); // 点击举报按钮事件

  var onBtnGetTipAddClick = Object(external_react_["useCallback"])(function () {
    setIsTipShow(!isTipShow);
  }, [isTipShow]);
  return external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video"
  }, external_react_default.a.createElement(LeftLiveVideoHeader, extends_default()({}, room, {
    pop: popularityList && Object(_multiappsharing_public["n" /* isArray */])(popularityList) && popularityList.length > 0 ? popularityList[0] : 0,
    onBtnGetTipAddClick: onBtnGetTipAddClick
  })), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-wrapper"
  }, room.status === 0 || room.status === 2 && !room.recordVideoUrl ? external_react_default.a.createElement("img", {
    className: "im-live-detail-left-live-video-bg",
    src: room.coverPicUrl
  }) : null, external_react_default.a.createElement("div", {
    className: "im-live-detail-video-wrapper"
  }, external_react_default.a.createElement("div", {
    id: "im-live-detail-left-live-video",
    style: {
      width: '100%',
      height: '100%',
      zIndex: 0
    }
  }), external_react_default.a.createElement("div", {
    className: "click-cancel-muted",
    style: {
      display: mutedBtnShow ? 'block' : 'none'
    },
    onClick: function onClick() {
      if (!player) return;
      setMutedBtnShow(false);
    }
  }, external_react_default.a.createElement("button", null, "\u70B9\u51FB\u53D6\u6D88\u9759\u97F3"))), room.status === 0 ? external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer"
  }, countTime.d === 0 && countTime.h === 0 && countTime.m === 0 && countTime.s === 0 ? external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u4E3B\u64AD\u9A6C\u4E0A\u5C31\u5230\uFF0C\u656C\u8BF7\u671F\u5F85") : external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u8DDD\u5F00\u64AD\u9884\u8BA1\u8FD8\u5269"), countTime.d === 0 && countTime.h === 0 && countTime.m === 0 && countTime.s === 0 ? null : external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer-text2"
  }, timeZero(countTime.d), external_react_default.a.createElement("span", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u5929"), timeZero(countTime.h), external_react_default.a.createElement("span", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u65F6"), timeZero(countTime.m), external_react_default.a.createElement("span", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u5206"), timeZero(countTime.s), external_react_default.a.createElement("span", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u79D2"))) : null, room.status === 2 && !room.recordVideoUrl ? external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-video-footer-text1"
  }, "\u76F4\u64AD\u5DF2\u7ED3\u675F\uFF0C\u56DE\u653E\u5236\u4F5C\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85")) : null), isTipShow === true ? external_react_default.a.createElement(LiveTipBox, {
    room: room,
    onBtnGetTipAddClick: onBtnGetTipAddClick
  }) : null);
});
// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/LeftLiveAd/index.js


 // import joinIcon from '../Image/live-ad-join.png'

/* harmony default export */ var LeftLiveAd = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      liveDetailImgData: state.home.liveDetailImgData
    };
  }, external_react_redux_["shallowEqual"]),
      liveDetailImgData = _useSelector.liveDetailImgData;

  return external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-ad"
  }, external_react_default.a.createElement("a", {
    className: "im-live-list-right-join-box",
    href: liveDetailImgData.length > 0 ? liveDetailImgData[0].url : '',
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-left-live-ad-img",
    src: liveDetailImgData.length > 0 ? liveDetailImgData[0].pcImgSrc : ''
  })));
});
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(19);

// CONCATENATED MODULE: ./assets/components/ImLiveDetail/LeftLiveInfo/index.js


/* harmony default export */ var LeftLiveInfo = (function (props) {
  var brief = props.brief;
  return external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-info"
  }, external_react_default.a.createElement("div", {
    className: "ql-container ql-snow"
  }, external_react_default.a.createElement("div", {
    className: "ql-editor",
    dangerouslySetInnerHTML: {
      __html: brief
    }
  })));
});
// EXTERNAL MODULE: ./assets/components/ImLiveDetail/LeftLiveRecommend/index.js
var LeftLiveRecommend = __webpack_require__(220);

// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/LeftLiveBottomBox/index.js







var typeName = {
  INFO: 'info',
  RECOMMEND: 'recommend'
};
/* harmony default export */ var LeftLiveBottomBox = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      brief: state.live.room.brief,
      roomLiveRecommendList: state.live.roomLiveRecommendList.inforList // 推荐列表

    };
  }, external_react_redux_["shallowEqual"]),
      brief = _useSelector.brief,
      roomLiveRecommendList = _useSelector.roomLiveRecommendList;

  var _useState = Object(external_react_["useState"])(typeName.INFO),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowType = _useState2[0],
      setNowType = _useState2[1]; // 点击切换标签按钮事件


  var onBtnTypeClick = function onBtnTypeClick(type) {
    setNowType(type);
  };

  return external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header-item",
    onClick: function onClick() {
      return onBtnTypeClick(typeName.INFO);
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header-text ".concat(nowType === typeName.INFO ? 'im-live-detail-left-live-bottom-box-header-select' : '')
  }, t('live_brief')), nowType === typeName.INFO && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header-line"
  })), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header-item",
    onClick: function onClick() {
      return onBtnTypeClick(typeName.RECOMMEND);
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header-text ".concat(nowType === typeName.RECOMMEND ? 'im-live-detail-left-live-bottom-box-header-select' : '')
  }, t('live_tj_strem')), nowType === typeName.RECOMMEND && external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-header-line"
  }))), external_react_default.a.createElement("div", {
    className: "im-live-detail-left-live-bottom-box-wrapper"
  }, nowType === typeName.INFO && external_react_default.a.createElement(LeftLiveInfo, {
    brief: brief
  }), nowType === typeName.RECOMMEND && external_react_default.a.createElement(LeftLiveRecommend["a" /* default */], {
    listData: roomLiveRecommendList
  })));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(189);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "blueimp-md5"
var external_blueimp_md5_ = __webpack_require__(52);
var external_blueimp_md5_default = /*#__PURE__*/__webpack_require__.n(external_blueimp_md5_);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/login.js + 1 modules
var login = __webpack_require__(14);

// EXTERNAL MODULE: external "anchorme"
var external_anchorme_ = __webpack_require__(180);
var external_anchorme_default = /*#__PURE__*/__webpack_require__.n(external_anchorme_);

// CONCATENATED MODULE: ./assets/components/ImLiveDetail/ImLiveChatItem/index.js
 // import { urlToLink } from 'multiPublic/index'



/* harmony default export */ var ImLiveChatItem = (function (props) {
  var type = props.type,
      nick = props.nick,
      text = props.text;
  var textClass = type !== undefined ? type === 99 ? 'im-live-detail-right-chart-item-sys' : type === 98 ? 'im-live-detail-right-chart-item-name' : '' : '';
  return external_react_default.a.createElement("div", {
    className: "im-live-detail-right-chart-item"
  }, type !== undefined && type === 1 && external_react_default.a.createElement("span", {
    className: "im-live-detail-right-chart-item-sp im-live-detail-right-chart-item-icon1"
  }, "\u4E3B\u64AD"), type !== undefined && type === 2 && external_react_default.a.createElement("span", {
    className: "im-live-detail-right-chart-item-sp im-live-detail-right-chart-item-icon2"
  }, "\u5609\u5BBE"), nick !== undefined && external_react_default.a.createElement("span", {
    className: "im-live-detail-right-chart-item-name"
  }, "".concat(nick, "\uFF1A")), text !== undefined ? external_react_default.a.createElement("span", {
    className: "im-live-chart-item ".concat(textClass),
    dangerouslySetInnerHTML: {
      __html: external_anchorme_default()({
        input: text,
        options: {
          attributes: {
            target: '_blank'
          }
        }
      })
    }
  }) : '');
});
// EXTERNAL MODULE: ./assets/components/ImLiveDetail/RightLiveBoxTitle/index.js
var RightLiveBoxTitle = __webpack_require__(222);

// EXTERNAL MODULE: ./assets/public/hooks/useTWebLiveIm.js
var useTWebLiveIm = __webpack_require__(244);

// EXTERNAL MODULE: ./assets/containers/ImLiveDetail/Image/live_chat_nolive.png
var live_chat_nolive = __webpack_require__(447);
var live_chat_nolive_default = /*#__PURE__*/__webpack_require__.n(live_chat_nolive);

// EXTERNAL MODULE: ./assets/public/hooks/useLiveGather.js
var useLiveGather = __webpack_require__(195);

// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/RightLiveChat/index.js
















 // import { commentStyle } from '../../../public/hooks/useTWebLivePlayer'


/* harmony default export */ var RightLiveChat = (function () {
  var livePush = Object(useLiveGather["a" /* default */])();

  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      room: state.live.room,
      roomHistoryList: state.live.roomHistoryList,
      userInfo: state.login.userInfo.info
    };
  }, external_react_redux_["shallowEqual"]),
      room = _useSelector.room,
      userInfo = _useSelector.userInfo,
      roomHistoryList = _useSelector.roomHistoryList; // console.log(roomHistoryList, 2222)


  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isClickChat = _useState4[0],
      setIsClickChat = _useState4[1];

  var curWordsNum = Object(external_react_["useRef"])();
  var textArea = Object(external_react_["useRef"])();
  var listScroll = Object(external_react_["useRef"])();
  var timeImLogin = Object(external_react_["useRef"])();
  var timeImJoin = Object(external_react_["useRef"])(); // 发送弹幕
  // const sendDamu = useCallback((val) => {
  //     if (!window.livePlayer) return
  //     window.livePlayer.danmu.sendComment({
  //         mode: 'scroll',
  //         duration: 15000,
  //         id: uuid(),
  //         txt: val,
  //         style: commentStyle
  //     })
  // }, [])
  // console.log(listData)
  // 监听聊天室新信息

  var onTextMessageReceived = function onTextMessageReceived(event) {
    if (!event || !event.data || !Object(_multiappsharing_public["n" /* isArray */])(event.data)) return;
    event.data.map(function (elementItem) {
      if (!elementItem.type) return;

      switch (elementItem.type) {
        case 'TIMCustomElem':
          if (!elementItem.payload || !elementItem.payload.data) return;
          var cmd = JSON.parse(elementItem.payload.data).cmd;

          if (cmd === 'CustomTextMsg') {
            if (!elementItem._elements || !Object(_multiappsharing_public["n" /* isArray */])(elementItem._elements)) return;
            var obj = {
              type: 0
            };

            elementItem._elements.map(function (item) {
              if (item.type === 'TIMCustomElem') {
                var data = JSON.parse(item.content.data).data;
                obj.nick = data.nickName;
                obj.msgId = data.msgId;
                var presenterList = !room.presenterList ? [] : room.presenterList;
                presenterList.map(function (presenterItem) {
                  if (data.passportId === presenterItem.passportId) {
                    obj.type = 1;
                  }
                });
                var guestList = !room.guestList ? [] : room.guestList;
                guestList.map(function (guesItem) {
                  if (data.passportId === guesItem.passportId) {
                    obj.type = 2;
                  }
                });
              } else if (item.type === 'TIMTextElem') {
                obj.text = item.content.text;
              } else {
                console.log('====================================');
                console.log("\u65B0\u7684\u7C7B\u578B\u53C2\u6570\uFF1A".concat(item));
                console.log('====================================');
              }
            });

            setChatItem(obj); // sendDamu(obj.text)
          }

          break;

        case 'TIMGroupSystemNoticeElem':
          if (!elementItem.payload) return;

          if (elementItem.payload.userDefinedField && elementItem.payload.userDefinedField !== '') {
            var userDefinedField = JSON.parse(elementItem.payload.userDefinedField);
            var _cmd = userDefinedField.cmd; // 删除评论

            if (_cmd === 'delMsgHx' && userDefinedField.data && userDefinedField.data.msgId) {
              delChatItem(userDefinedField.data.msgId);
            } // 禁言


            if (_cmd === 'forbidMsgHx' && userDefinedField.data && userDefinedField.data.passportId && userDefinedField.data.content) {
              if (userInfo.passportId && userInfo.passportId === userDefinedField.data.passportId) {
                setChatItem({
                  type: 99,
                  text: userDefinedField.data.content
                });
              }
            }
          } else if (elementItem.payload.operationType && elementItem.payload.operationType === 5) {
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
      imJoin = _useTWebLiveIm.imJoin;

  Object(external_react_["useEffect"])(function () {
    var status = room.status ? room.status : 0;

    switch (status) {
      case 0:
        setIsClickChat(1);
        break;

      case 1:
        setIsClickChat(0);
        break;

      case 2:
        setIsClickChat(1);
        break;

      default:
        break;
    }
  }, [room]); // 加载回放中历史聊天记录

  Object(external_react_["useEffect"])(function () {
    if (room.status === 0) return;

    if (roomHistoryList && Object(_multiappsharing_public["n" /* isArray */])(roomHistoryList) && roomHistoryList.length > 0) {
      setListData([]);
      roomHistoryList.map(function (item) {
        var obj = {
          nick: item.nickName,
          text: item.content,
          type: 0
        };
        var presenterList = !room.presenterList ? [] : room.presenterList;
        presenterList.map(function (presenterItem) {
          if (item.passportId === presenterItem.passportId) {
            obj.type = 1;
          }
        });
        var guestList = !room.guestList ? [] : room.guestList;
        guestList.map(function (guesItem) {
          if (item.passportId === guesItem.passportId) {
            obj.type = 2;
          }
        });
        setChatItem(obj);
      });
      setTimeout(function () {
        listScroll.current.scrollIntoView(false); // 移动到列表底部
      }, 500);
    }
  }, [room, roomHistoryList]); // 创建直播间

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
    if (imReady === true && imLogin === true && imJoin === true) {
      setChatItem({
        type: 98,
        text: '欢迎来到MarsBit直播间！直播间内严禁出现违法违规、低俗色情、吸烟酗酒等内容，若有违规行为请及时举报'
      });
      setTimeout(function () {
        listScroll.current.scrollIntoView(false); // 移动到列表底部
      }, 500);
    }
  }, [imReady, imLogin, imJoin]); // 插入聊天

  var setChatItem = Object(external_react_["useCallback"])(function (data) {
    var list = listData;
    list.push(data);

    if (Object(_multiappsharing_public["g" /* elementOffset */])(listScroll.current).bottom === 645) {
      setListData(JSON.parse(JSON.stringify(list)));
      listScroll.current.scrollIntoView(false); // 移动到列表底部
    } else {
      setListData(JSON.parse(JSON.stringify(list))); // console.log(JSON.parse(JSON.stringify(list)), 222)
    }
  }, []); // 删除聊天

  var delChatItem = Object(external_react_["useCallback"])(function (msgId) {
    var list = listData;

    for (var i = 0; i < list.length; i++) {
      if (list[i].msgId && list[i].msgId === msgId) {
        list.splice(i, 1);
        break;
      }
    }

    if (Object(_multiappsharing_public["g" /* elementOffset */])(listScroll.current).bottom === 645) {
      setListData(JSON.parse(JSON.stringify(list)));
      listScroll.current.scrollIntoView(false); // 移动到列表底部
    } else {
      setListData(JSON.parse(JSON.stringify(list)));
    }
  }, []);
  /** @desc 评论输入字数量 */

  var wordsNum = Object(external_react_["useCallback"])(function (event) {
    var val = Object(_multiappsharing_public["H" /* trim */])(event.target.value);

    if (val.length <= 100) {
      curWordsNum.current.innerText = val.length;
    } else {
      event.target.value = val.substring(0, 100);
    }
  }, []); // 发送评论
  // im.sendCustomMessage() 由于存在自定义消息，故用系统发送消息办法

  var setAddChat = Object(external_react_["useCallback"])(
  /*#__PURE__*/
  asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var zg, text, val, res;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!imJoin || isClickChat === 1)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            if (userInfo.passportId) {
              _context.next = 5;
              break;
            }

            dispatch(Object(login["h" /* loginShowHide */])('account', true));
            return _context.abrupt("return");

          case 5:
            if (!(!userInfo.nickName || userInfo.nickName === '')) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return");

          case 9:
            zg = /^[0-9a-zA-Z]*$/;
            text = userInfo.nickName.split('MarsBit');

            if (!(text.length === 2 && text[0] === '' && zg.test(text[1]))) {
              _context.next = 14;
              break;
            }

            dispatch(Object(login["i" /* renameShowHide */])(true));
            return _context.abrupt("return");

          case 14:
            val = Object(_multiappsharing_public["H" /* trim */])(textArea.current.value);

            if (!(val === '')) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return");

          case 17:
            _context.prev = 17;
            setIsClickChat(1);
            _context.next = 21;
            return Object(live["k" /* liveComentSend */])({
              roomId: room.roomId,
              passportId: userInfo.passportId,
              nickName: userInfo.nickName,
              content: val
            });

          case 21:
            res = _context.sent;

            if (!res || res.code !== 1) {
              // console.log(res)
              // textArea.current.value = res.msg ? res.msg : '发送失败'
              Toast["a" /* default */].info(res.msg ? res.msg : '发送失败');
              setIsClickChat(0);
            } else {
              setIsClickChat(0);
              livePush({
                eventId: 'send_msg'
              });
            }

            textArea.current.value = '';
            textArea.current.focus();
            listScroll.current.scrollIntoView(false); // 移动到列表底部

            _context.next = 32;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](17);
            console.log('im | sendCustomMessage | failed', _context.t0);
            setIsClickChat(0);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[17, 28]]);
  })), [imJoin, isClickChat, userInfo]);
  /** @desc 登录弹出 */

  var loginPopup = Object(external_react_["useCallback"])(function () {
    if (room && room.status === 2) return;
    dispatch(Object(login["h" /* loginShowHide */])('account', true));
  }, []);
  return external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat"
  }, external_react_default.a.createElement(RightLiveBoxTitle["a" /* default */], {
    title: t('live_commincation')
  }), room && room.status !== undefined && room.status === 0 && external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-nolive"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-right-live-chat-nolive-icon",
    src: live_chat_nolive_default.a
  }), t('live_not_start')), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-list"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-list-box",
    id: "id_scroll",
    ref: listScroll
  }, listData && listData.map(function (item, index) {
    if (!item.text) return;
    return external_react_default.a.createElement(ImLiveChatItem, extends_default()({}, item, {
      key: index
    }));
  }))), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-input-box"
  }, (!userInfo.passportId || room && room.status !== undefined && room.status !== 1) && external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-input ".concat(room && room.status !== undefined && room.status === 2 ? 'im-live-detail-right-live-chat-input-end' : 'im-live-detail-right-live-chat-input-noload'),
    onClick: loginPopup
  }, room && room.status !== undefined && room.status === 2 ? null : external_react_default.a.createElement("span", {
    className: "im-live-detail-right-live-chat-input-noload-sp"
  }, "\u767B\u5F55"), room && room.status !== undefined && room.status === 2 ? t('live_finsh') : t('live_to_say')), userInfo && userInfo.passportId && room && room.status !== undefined && room.status === 1 && external_react_default.a.createElement("textarea", {
    className: "im-live-detail-right-live-chat-input",
    ref: textArea,
    onChange: wordsNum,
    onKeyUp: function onKeyUp(event) {
      if (event && event.type === 'keyup' && event.keyCode !== 13) return;
      setAddChat();
    },
    disabled: isClickChat === 1 || !imJoin
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-btn-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-btn-sp"
  }, external_react_default.a.createElement("em", {
    ref: curWordsNum
  }, "0"), "/100"), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-chat-btn ".concat(room && room.status !== undefined && room.status !== 2 && isClickChat === 0 && imJoin === true ? 'im-live-detail-right-live-chat-btn-ok' : ''),
    onClick: setAddChat
  }, t('live_send')))));
});
// EXTERNAL MODULE: ./assets/components/ImLiveList/RightLiveGoodUpItem/index.js
var RightLiveGoodUpItem = __webpack_require__(245);

// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/RightLivePresenter/index.js







/* harmony default export */ var RightLivePresenter = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      room: state.live.room
    };
  }, external_react_redux_["shallowEqual"]),
      room = _useSelector.room;

  return external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-presenter"
  }, external_react_default.a.createElement(RightLiveBoxTitle["a" /* default */], {
    title: '主讲人'
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-presenter-box"
  }, room.presenterList && Object(_multiappsharing_public["n" /* isArray */])(room.presenterList) && room.presenterList.map(function (item, index) {
    return external_react_default.a.createElement(RightLiveGoodUpItem["a" /* default */], extends_default()({}, item, {
      key: index
    }));
  }), room.guestList && Object(_multiappsharing_public["n" /* isArray */])(room.guestList) && room.guestList.map(function (item, index) {
    return external_react_default.a.createElement(RightLiveGoodUpItem["a" /* default */], extends_default()({}, item, {
      key: index
    }));
  })));
});
// EXTERNAL MODULE: ./assets/containers/ImLiveDetail/Image/live-join-phone.png
var live_join_phone = __webpack_require__(448);
var live_join_phone_default = /*#__PURE__*/__webpack_require__.n(live_join_phone);

// EXTERNAL MODULE: ./assets/containers/ImLiveDetail/Image/live-join-wx.png
var live_join_wx = __webpack_require__(449);
var live_join_wx_default = /*#__PURE__*/__webpack_require__.n(live_join_wx);

// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/RightLiveJoin/index.js





/* harmony default export */ var RightLiveJoin = (function () {
  return external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join"
  }, external_react_default.a.createElement(RightLiveBoxTitle["a" /* default */], {
    title: '直播合作'
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-title"
  }, "\u76F4\u64AD\u54A8\u8BE2"), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text-box"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-right-live-join-img",
    src: live_join_phone_default.a
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text"
  }, "\u7535\u8BDD\uFF1A18322606595")), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text-box"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-right-live-join-img",
    src: live_join_wx_default.a
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text"
  }, "\u5FAE\u4FE1\uFF1ACRYPTO1996")), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-title",
    style: {
      marginTop: '24px'
    }
  }, "\u5546\u52A1\u5408\u4F5C"), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text-box"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-right-live-join-img",
    src: live_join_phone_default.a
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text"
  }, "\u7535\u8BDD\uFF1A15555527736")), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text-box"
  }, external_react_default.a.createElement("img", {
    className: "im-live-detail-right-live-join-img",
    src: live_join_wx_default.a
  }), external_react_default.a.createElement("div", {
    className: "im-live-detail-right-live-join-text"
  }, "\u5FAE\u4FE1\uFF1A15555527736"))));
});
// EXTERNAL MODULE: ./assets/public/hooks/useLiveGatherAjax.js
var useLiveGatherAjax = __webpack_require__(223);

// CONCATENATED MODULE: ./assets/containers/ImLiveDetail/index.js











/* harmony default export */ var ImLiveDetail = __webpack_exports__["default"] = (function () {
  Object(useLiveGatherAjax["a" /* default */])();
  var livePush = Object(useLiveGather["a" /* default */])();
  Object(external_react_["useEffect"])(function () {
    livePush({
      eventId: 'view_live_intro'
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: "im-live-detail-page"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-page-main-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-detail-page-main-box-left"
  }, external_react_default.a.createElement(LeftLiveVideo, null), external_react_default.a.createElement(LeftLiveAd, null), external_react_default.a.createElement(LeftLiveBottomBox, null)), external_react_default.a.createElement("div", {
    className: "im-live-detail-page-main-box-right"
  }, external_react_default.a.createElement(RightLiveChat, null), external_react_default.a.createElement(RightLivePresenter, null), external_react_default.a.createElement(RightLiveJoin, null), external_react_default.a.createElement(RightDownloadBox["a" /* default */], {
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

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live_player_icon-bf9e2aa0.png";

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

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live_detail_type_2-8a275757.gif";

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live_detail_pop-e84b1852.png";

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-tip-warning-63dcc696.png";

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-tip-clear-f707987a.png";

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-tip-close-77eb6637.png";

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-tip-cross-e684198f.png";

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live_chat_nolive-79dc86f9.png";

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-join-phone-1baef09e.png";

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live-join-wx-368c013c.png";

/***/ })

};;
//# sourceMappingURL=containers-ImLiveDetail.js.map