require("source-map-support").install();
exports.ids = [9];
exports.modules = {

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/components/Popup/index.js + 1 modules
var Popup = __webpack_require__(213);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/login.js + 1 modules
var login = __webpack_require__(14);

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// EXTERNAL MODULE: ./assets/containers/ImLiveControl/Image/im-live-control-arrow.png
var im_live_control_arrow = __webpack_require__(453);
var im_live_control_arrow_default = /*#__PURE__*/__webpack_require__.n(im_live_control_arrow);

// CONCATENATED MODULE: ./assets/containers/ImLiveControl/ImLiveControlItem/index.js





/** @desc 图片Item */

var ImLiveControlItem_ImLiveControlPictureItem = function ImLiveControlPictureItem(props) {
  var title = props.title,
      src = props.src;
  return external_react_default.a.createElement("div", {
    className: "im-live-control-item",
    style: {
      alignItems: 'flex-start'
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-control-item-title"
  }, title), external_react_default.a.createElement("img", {
    className: "im-live-control-item-img",
    src: src
  }));
};
/** @desc 文字Item */

var ImLiveControlItem_ImLiveControlTextItem = function ImLiveControlTextItem(props) {
  var title = props.title,
      text = props.text;
  return external_react_default.a.createElement("div", {
    className: "im-live-control-item"
  }, external_react_default.a.createElement("div", {
    className: "im-live-control-item-title"
  }, title), external_react_default.a.createElement("div", {
    className: "im-live-control-item-text"
  }, text));
};
/** @desc 输入框Item */

var ImLiveControlItem_ImLiveControlInputItem = function ImLiveControlInputItem(props) {
  var title = props.title,
      value = props.value; // 需要选中状态，但是不能更改，所以不能用readOnly 或 defaultVal

  var onInputChange = Object(external_react_["useCallback"])(function () {}, []); // 点击一键复制按钮事件

  var onBtnCopyClick = Object(external_react_["useCallback"])(function () {
    if (Object(_multiappsharing_public["i" /* execCommandCopy */])(value)) {
      Toast["a" /* default */].success('复制成功');
    } else {
      Toast["a" /* default */].info('复制失败，该浏览器不支持点击复制到剪贴板');
    }
  }, [value]);
  return external_react_default.a.createElement("div", {
    className: "im-live-control-item"
  }, external_react_default.a.createElement("div", {
    className: "im-live-control-item-title"
  }, title), external_react_default.a.createElement("input", {
    className: "im-live-control-item-input",
    value: value,
    onChange: onInputChange,
    spellCheck: false
  }), external_react_default.a.createElement("div", {
    className: "im-live-control-item-copy",
    onClick: function onClick() {
      return onBtnCopyClick();
    }
  }, "\u4E00\u952E\u590D\u5236"));
};
/** @desc 说明Item */

var ImLiveControlItem_ImLiveControlExplainItem = function ImLiveControlExplainItem(props) {
  var text = props.text,
      roomType = props.roomType;
  return external_react_default.a.createElement("div", {
    className: "im-live-control-item"
  }, external_react_default.a.createElement("div", {
    className: "im-live-control-item-explain",
    style: {
      color: roomType === 1 ? '#999' : '#F63C2A'
    }
  }, text));
};
/** @desc 按钮Item */

var ImLiveControlItem_ImLiveControlBtnItem = function ImLiveControlBtnItem(props) {
  var text = props.text,
      roomType = props.roomType,
      src = props.src,
      click = props.click,
      coursUrl = props.coursUrl;
  return external_react_default.a.createElement("div", {
    className: "im-live-control-item",
    style: {
      marginBottom: 0
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-control-item-btn ".concat(roomType === 1 ? 'backColor1' : 'backColor2'),
    onClick: click
  }, external_react_default.a.createElement("img", {
    className: "im-live-control-item-btn-icon",
    src: src
  }), text), external_react_default.a.createElement("a", {
    className: "im-live-control-item-btn-explain",
    href: coursUrl,
    target: "_blank"
  }, "MarsBit\u7535\u8111\u76F4\u64AD\u6559\u7A0B"), external_react_default.a.createElement("img", {
    className: "im-live-control-item-btn-explain-icon",
    src: im_live_control_arrow_default.a
  }));
};
// EXTERNAL MODULE: ./assets/containers/ImLiveControl/ImLiveControlPopup/index.js
var ImLiveControlPopup = __webpack_require__(247);

// EXTERNAL MODULE: ./assets/containers/ImLiveControl/Image/im-live-control-close.png
var im_live_control_close = __webpack_require__(454);
var im_live_control_close_default = /*#__PURE__*/__webpack_require__.n(im_live_control_close);

// EXTERNAL MODULE: ./assets/containers/ImLiveControl/Image/im-live-control-play.png
var im_live_control_play = __webpack_require__(455);
var im_live_control_play_default = /*#__PURE__*/__webpack_require__.n(im_live_control_play);

// EXTERNAL MODULE: ./assets/containers/ImLiveControl/Image/im-live-control-popup-close.png
var im_live_control_popup_close = __webpack_require__(456);
var im_live_control_popup_close_default = /*#__PURE__*/__webpack_require__.n(im_live_control_popup_close);

// CONCATENATED MODULE: ./assets/containers/ImLiveControl/index.js
















var explainText = ['直播软件（如OBS软件）设置完成推流后，点击“开始直播”按钮后直播才会正式开始', '直播结束后，点击“结束直播”按钮后，直播间状态会自动更改为回放中', '当前为手机直播，请在MarsBit上开启或关闭直播']; // 火星财经电脑直播教程

var ImLiveControl_coursUrl = 'https://news.marsbit.co/20210201154152675262.html';
/* harmony default export */ var ImLiveControl = __webpack_exports__["default"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      userInfo: state.login.userInfo.info,
      room: state.live.room
    };
  }, external_react_redux_["shallowEqual"]),
      userInfo = _useSelector.userInfo,
      room = _useSelector.room;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var timer = Object(external_react_["useRef"])();

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isPopShow = _useState2[0],
      setIsPopShow = _useState2[1]; // 是否开启弹窗


  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isPopShow2 = _useState4[0],
      setIsPopShow2 = _useState4[1]; // 是否开启弹窗2


  Object(external_react_["useEffect"])(function () {
    if (room.status === 2) {
      setIsPopShow2(true);
      return;
    } // 循环请求直播间状态, 非本页面关闭时，跳转到直播列表页


    if (timer.current) return;
    timer.current = setInterval(
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var getRoomStatusRes;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(live["j" /* getRoomStatus */])({
                roomId: room.roomId
              });

            case 2:
              getRoomStatusRes = _context.sent;

              if (parseInt(getRoomStatusRes.obj) === 2) {
                setIsPopShow2(true);
                clearInterval(timer);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 10000);
    return function () {
      clearInterval(timer);
      timer.current = null;
    };
  }, [room]); // 点击弹窗确定按钮事件

  var onBtnPopupOKClick = Object(external_react_["useCallback"])(
  /*#__PURE__*/
  asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2() {
    var getRoomStatusRes, oldStatus, setRoomStatusRes;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!userInfo.passportId) {
              dispatch(Object(login["h" /* loginShowHide */])('account', true));
            } // 请求当前直播间状态


            _context2.next = 3;
            return Object(live["j" /* getRoomStatus */])({
              roomId: room.roomId
            })["catch"](function (err) {
              Toast["a" /* default */].info('获取直播间错误');
              throw err;
            });

          case 3:
            getRoomStatusRes = _context2.sent;

            if (!(getRoomStatusRes.code === 1)) {
              _context2.next = 20;
              break;
            }

            oldStatus = parseInt(getRoomStatusRes.obj);
            _context2.t0 = oldStatus;
            _context2.next = _context2.t0 === 0 ? 9 : _context2.t0 === 1 ? 9 : _context2.t0 === 2 ? 14 : 16;
            break;

          case 9:
            _context2.next = 11;
            return Object(live["l" /* setRoomStatus */])({
              roomId: room.roomId,
              passportId: userInfo.passportId,
              status: oldStatus + 1
            })["catch"](function (err) {
              Toast["a" /* default */].info('获取直播间错误');
              throw err;
            });

          case 11:
            setRoomStatusRes = _context2.sent;

            if (setRoomStatusRes.code === 1) {
              // 刷新直播间数据
              dispatch(Object(live["d" /* getRoomByID */])({
                roomId: room.roomId
              })).then(function (res) {
                if (res.code !== 1) {
                  Toast["a" /* default */].info(res.msg);
                }
              })["catch"](function (err) {
                Toast["a" /* default */].info('获取直播间错误');
                throw err;
              });
            } else {
              Toast["a" /* default */].info(setRoomStatusRes.msg);
            }

            return _context2.abrupt("break", 18);

          case 14:
            setIsPopShow2(true);
            return _context2.abrupt("break", 18);

          case 16:
            setIsPopShow2(true);
            return _context2.abrupt("break", 18);

          case 18:
            _context2.next = 21;
            break;

          case 20:
            Toast["a" /* default */].info(getRoomStatusRes.msg);

          case 21:
            setIsPopShow(false);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [dispatch, room, userInfo]); // 点击开始关闭按钮事件

  var onBtnPlayOrEndClick = Object(external_react_["useCallback"])(function () {
    setIsPopShow(true);
  }, []); // 点击弹窗关闭按钮事件

  var onBtnPopupCloseClick = Object(external_react_["useCallback"])(function () {
    setIsPopShow(false);
  }, []); // 点击直播间已关闭弹窗确定按钮事件

  var onBtnPopupOKClick2 = Object(external_react_["useCallback"])(function () {
    window.location.href = _multiappsharing_public["A" /* mixUrl */].main('/live');
  }, []);
  return external_react_default.a.createElement("div", {
    className: "im-live-control-page"
  }, external_react_default.a.createElement("div", {
    className: "im-live-control-page-main-box"
  }, external_react_default.a.createElement(ImLiveControlItem_ImLiveControlPictureItem, {
    title: '直播封面：',
    src: room.coverPicUrl
  }), external_react_default.a.createElement(ImLiveControlItem_ImLiveControlTextItem, {
    title: '直播标题：',
    text: room.name
  }), external_react_default.a.createElement(ImLiveControlItem_ImLiveControlTextItem, {
    title: '直播时间：',
    text: Object(_multiappsharing_public["l" /* formatTime */])(room.beginTime, 'yyyy-MM-dd hh:mm')
  }), room.roomType === 1 && room.pushStreamUrl ? external_react_default.a.createElement(ImLiveControlItem_ImLiveControlInputItem, {
    title: '服务器：',
    value: "".concat(room.pushStreamUrl.split('/')[0], "//").concat(room.pushStreamUrl.split('/')[2], "/").concat(room.pushStreamUrl.split('/')[3])
  }) : external_react_default.a.createElement(ImLiveControlItem_ImLiveControlTextItem, {
    title: '服务器：',
    text: '手机直播不支持串流'
  }), room.roomType === 1 && room.pushStreamUrl ? external_react_default.a.createElement(ImLiveControlItem_ImLiveControlInputItem, {
    title: '串流密钥：',
    value: room.pushStreamUrl.split('/')[4]
  }) : external_react_default.a.createElement(ImLiveControlItem_ImLiveControlTextItem, {
    title: '串流密钥：',
    text: '手机直播不支持串流'
  }), external_react_default.a.createElement(ImLiveControlItem_ImLiveControlInputItem, {
    title: '直播间观看地址：',
    value: "https://www.marsbit.co/live/".concat(room.roomId)
  }), external_react_default.a.createElement(ImLiveControlItem_ImLiveControlExplainItem, {
    text: room.roomType === 1 ? explainText[room.status] : explainText[2],
    roomType: room.roomType,
    status: room.status
  }), external_react_default.a.createElement(ImLiveControlItem_ImLiveControlBtnItem, {
    text: room.status === 0 ? '开始直播' : '结束直播',
    roomType: room.roomType,
    src: room.status === 0 ? im_live_control_play_default.a : im_live_control_close_default.a,
    click: onBtnPlayOrEndClick,
    coursUrl: ImLiveControl_coursUrl
  })), external_react_default.a.createElement(Popup["a" /* default */], {
    children: external_react_default.a.createElement(ImLiveControlPopup["a" /* default */], {
      title: '提示',
      text: room.status === 0 ? '直播软件（如OBS）设置完成后才可正常开始直播。' : '是否结束直播',
      close: onBtnPopupCloseClick,
      okText: room.status === 0 ? '开始直播' : '结束直播',
      ok: onBtnPopupOKClick
    }),
    show: isPopShow,
    close: onBtnPopupCloseClick,
    closeIcon: im_live_control_popup_close_default.a,
    closeClassName: 'im-live-control-popup-close'
  }), external_react_default.a.createElement(Popup["a" /* default */], {
    children: external_react_default.a.createElement(ImLiveControlPopup["a" /* default */], {
      title: '提示',
      text: '直播间已被关闭',
      ok: onBtnPopupOKClick2,
      okText: '确定'
    }),
    show: isPopShow2,
    closeClassName: 'im-live-control-popup-close2'
  }));
});

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

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var title = props.title,
      text = props.text,
      close = props.close,
      ok = props.ok,
      okText = props.okText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-text"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-btn-box",
    style: {
      justifyContent: close && ok ? 'space-between' : 'center'
    }
  }, close && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-btn close",
    onClick: close
  }, "\u53D6\u6D88"), ok && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-btn ok",
    onClick: ok
  }, okText)));
});

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-control-arrow-3d60a162.png";

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-control-close-011bb54b.png";

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-control-play-2d150157.png";

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-control-popup-close-d56650a0.png";

/***/ })

};;
//# sourceMappingURL=containers-ImLiveControl.js.map