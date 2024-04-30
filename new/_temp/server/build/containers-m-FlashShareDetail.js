require("source-map-support").install();
exports.ids = [17];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);





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
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "o"])() && !doNotDownload) location.href = iosUrl;
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])() && !doNotDownload) location.href = andUrl.current;
    });
  }, [andUrl]);
  var appDownload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (type, id, obj) {
    var doNotDownload = obj ? obj.doNotDownload : false;
    var openInBrowser = false;

    if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "v"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "o"])()) {
      // 打开appStore
      location.href = iosUrl;
    } else if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "v"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])()) {
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);







var ImgPopup = function ImgPopup(props) {
  var src = props.src,
      show = props.show,
      close = props.close;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      imgShow = _useState2[0],
      setImgShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    height: 'auto',
    width: '100%'
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      imgStyle = _useState4[0],
      setImgStyle = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!src) return;
    var imgTemp = new Image();
    imgTemp.src = src;

    imgTemp.onload = function () {
      var ih = imgTemp.height;
      var iw = imgTemp.width;

      if (Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* isPc */ "s"])()) {
        if (iw >= ih && (iw >= 1000 && ih * 1000 / iw <= 600 || iw < 1000 && ih <= 600)) {
          setImgStyle({
            height: 'auto',
            maxWidth: '1000px'
          });
        } else {
          setImgStyle({
            maxHeight: '600px',
            width: 'auto'
          });
        }
      } else {
        var wh = Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* windowOffset */ "F"])().height * 0.8;
        var ww = Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* windowOffset */ "F"])().width;

        if (iw >= ww && ih * ww / iw <= wh || iw < ww && ih <= wh) {
          setImgStyle({
            height: 'auto',
            width: '100%'
          });
        } else {
          setImgStyle({
            height: wh,
            width: 'auto'
          });
        }
      }

      setImgShow(true);
    };
  }, [src]);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('pc'),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      equipment = _useState6[0],
      setEquipment = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (Object(_public_index__WEBPACK_IMPORTED_MODULE_4__[/* isPc */ "s"])()) return;
    setEquipment('mobile');

    var Hammer = __webpack_require__(102);

    var $ele = document.getElementById('imgPopContent');
    var hammertime = new Hammer($ele, {});
    hammertime.get('pinch').set({
      enable: true
    });
    var posX = 0;
    var posY = 0;
    var scale = 1;
    var lastScale = 1;
    var lastPosX = 0;
    var lastPosY = 0;
    var maxPosX = 0;
    var maxPosY = 0;
    var transform = '';
    var el = $ele;
    hammertime.on('doubletap pan pinch panend pinchend', function (ev) {
      if (ev.type === 'doubletap') {
        transform = 'translate3d(0, 0, 0) scale3d(2, 2, 1)';
        scale = 2;
        lastScale = 2;

        try {
          if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() !== 'matrix(1, 0, 0, 1, 0, 0)') {
            transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
            scale = 1;
            lastScale = 1;
          }
        } catch (err) {
          console.log(err);
        }

        el.style.webkitTransform = transform;
        transform = '';
      } // pan


      if (scale !== 1) {
        posX = lastPosX + ev.deltaX;
        posY = lastPosY + ev.deltaY;
        maxPosX = Math.ceil((scale - 1) * el.clientWidth / 2);
        maxPosY = Math.ceil((scale - 1) * el.clientHeight / 2);
        if (posX > maxPosX) posX = maxPosX;
        if (posX < -maxPosX) posX = -maxPosX;
        if (posY > maxPosY) posY = maxPosY;
        if (posY < -maxPosY) posY = -maxPosY;
      } // pinch


      if (ev.type === 'pinch') scale = Math.max(0.999, Math.min(lastScale * ev.scale, 4));
      if (ev.type === 'pinchend') lastScale = scale; // panend

      if (ev.type === 'panend') {
        lastPosX = posX < maxPosX ? posX : maxPosX;
        lastPosY = posY < maxPosY ? posY : maxPosY;
      }

      if (scale !== 1) transform = 'translate3d(' + posX + 'px,' + posY + 'px, 0) ' + 'scale3d(' + scale + ', ' + scale + ', 1)';
      if (transform) el.style.webkitTransform = transform;
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "img-popup-wrapper ".concat(equipment),
    style: {
      display: show && imgShow ? 'flex' : 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "img-position",
    onClick: close
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "imgPopContent",
    className: "img-content ".concat(equipment === 'pc' ? 'beautify-scroll' : '')
  }, src && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: src,
    style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, imgStyle),
    alt: "img-viewer"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "close-icon",
    onClick: close
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "img-popup-mask",
    onClick: close
  }));
};

ImgPopup.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"].isRequired,
  close: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"].isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (ImgPopup);

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wechat-download-tips-fef770a1.png";

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);




 // const formatDate = (time) => {
//     const newDate = new Date(time)
//     const day = newDate.getDay()
//     const year = newDate.getFullYear()
//     const mouth = newDate.getMonth() + 1
//     const date = newDate.getDate()
//     const dayArr = ['日', '一', '二', '三', '四', '五', '六']
//     return {
//         month: `${mouth < 10 ? '0' + mouth : mouth}/${year}`,
//         week: `星期${dayArr[day]}`,
//         day: date
//     }
// }

var FalshList = function FalshList(props) {
  // const flashToday = formatDate((props.data && props.data.length !== 0) ? props.data[0].createdTime : Date.parse(new Date()))
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.data),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      dataArr = _useState2[0];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t; // const onShow = useCallback((nIndex) => {
  //     let newsArr = []
  //     props.data.map((item, index) => {
  //         if (nIndex === index) {
  //             let obj = { 'show': true, ...item }
  //             newsArr.push(obj)
  //         } else {
  //             newsArr.push(item)
  //         }
  //     })
  //     setDataArr(newsArr)
  // }, [])


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flash-content-bg news-fash"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title-section clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "title"
  }, "7x24 ", t('headernavtwo'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "lives-box"
  }, dataArr.map(function (item, index) {
    var titleContent = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* flashRecognize */ "i"])(item);
    var title = titleContent.title; // const content = titleContent.content

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "new-fash-list",
      key: item.id,
      "data-date": "1576830749000"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "time-flash"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "iconfont iconfont-circle new-mark"
    }), Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* flashTime */ "j"])(item.createdTime, 'MM-dd hh:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-flash clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      "data-id": item.id,
      className: "text-box"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "text-title ",
      href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* mixUrl */ "w"].m("/flashshare/".concat(item.id, ".html")),
      title: title
    }, title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        clear: 'both'
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (FalshList);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136);
/* harmony import */ var _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111);
/* harmony import */ var _public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);







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

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-share-logo-3e28eff7.png";

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-wxShareBox-ok-114f2d64.png";

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-wxShareBox-clear-6772f844.png";

/***/ }),

/***/ 94:
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

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/containers-m/FlashShareDetail/HotFlashList/index.js
var HotFlashList = __webpack_require__(134);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components-m/Layout/FooterDownload/index.js
var FooterDownload = __webpack_require__(135);

// EXTERNAL MODULE: ./_multiappsharing/components-m/WebchatOpenInBrowser/index.js
var WebchatOpenInBrowser = __webpack_require__(111);

// EXTERNAL MODULE: ./_multiappsharing/public/hooks/useAppDownload.js
var useAppDownload = __webpack_require__(109);

// EXTERNAL MODULE: ./_multiappsharing/components-m/WxShareBox/images/m-wxShareBox-ok.png
var m_wxShareBox_ok = __webpack_require__(146);
var m_wxShareBox_ok_default = /*#__PURE__*/__webpack_require__.n(m_wxShareBox_ok);

// EXTERNAL MODULE: ./_multiappsharing/components-m/WxShareBox/images/m-wxShareBox-clear.png
var m_wxShareBox_clear = __webpack_require__(147);
var m_wxShareBox_clear_default = /*#__PURE__*/__webpack_require__.n(m_wxShareBox_clear);

// CONCATENATED MODULE: ./_multiappsharing/components-m/WxShareBox/index.js








/* harmony default export */ var WxShareBox = (function (props) {
  var list = props.list,
      type = props.type,
      id = props.id;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      openInBrowser = _useState2[0],
      setOpenInBrowser = _useState2[1];

  var appDownload = Object(useAppDownload["a" /* default */])(); // 点击关闭按钮事件

  var onBtnClearClick = Object(external_react_["useCallback"])(function () {
    document.getElementsByClassName('m-wx-share-box')[0].style.display = 'none';
  }, []);
  var clickDownload = Object(external_react_["useCallback"])(function () {
    setOpenInBrowser(appDownload(type, id));
  }, []);
  return external_react_default.a.createElement("div", {
    className: "m-wx-share-box"
  }, external_react_default.a.createElement("div", {
    className: "m-wx-share-box-bg"
  }), external_react_default.a.createElement("div", {
    className: "m-wx-share-box-content"
  }, external_react_default.a.createElement("div", {
    className: "m-wx-share-box-content-title"
  }, external_react_default.a.createElement("img", {
    className: "m-wx-share-box-content-ok",
    src: m_wxShareBox_ok_default.a
  }), "\u5206\u4EAB\u6210\u529F", external_react_default.a.createElement("img", {
    className: "m-wx-share-box-content-clear",
    onClick: onBtnClearClick,
    src: m_wxShareBox_clear_default.a
  })), external_react_default.a.createElement("div", {
    className: "m-wx-share-box-content-title2"
  }, type === 'flashList' ? '精选快讯' : '今日热点'), external_react_default.a.createElement("div", {
    className: "m-wx-share-box-content-line"
  }), list && list.map(function (item, index) {
    var link = type === 'flashList' ? _multiappsharing_public["w" /* mixUrl */].m("/flashshare/".concat(item.id, ".html")) : _multiappsharing_public["w" /* mixUrl */].m("/newsdetailShare/".concat(item.id, ".html"));
    var title = type === 'flashList' ? Object(_multiappsharing_public["i" /* flashRecognize */])(item).title : item.title;
    return external_react_default.a.createElement("div", {
      className: "m-wx-share-box-item",
      key: index
    }, external_react_default.a.createElement("a", {
      className: "m-wx-share-box-content-text right-text",
      title: title,
      href: link,
      target: "_blank"
    }, title), external_react_default.a.createElement("div", {
      className: "m-wx-share-box-content-line"
    }));
  }), external_react_default.a.createElement("div", {
    className: "m-wx-share-box-btn",
    onClick: clickDownload
  }, "\u67E5\u770B\u66F4\u591A\u70ED\u95E8\u5185\u5BB9")), external_react_default.a.createElement(WebchatOpenInBrowser["a" /* default */], {
    openInBrowser: openInBrowser,
    setOpenInBrowser: setOpenInBrowser
  }));
});
// EXTERNAL MODULE: ./_multiappsharing/components/ImgPopup/index.js
var ImgPopup = __webpack_require__(112);

// CONCATENATED MODULE: ./assets/containers-m/FlashShareDetail/index.js




 // import HotNewsList from './HotNewsList'



 // import DownloadBtn from 'multiCompsM/DownloadBtn'




 // import bad from './img/bad.svg'
// import rate from './img/rate.svg'

var FlashShareDetail_FlashShareDetail = function FlashShareDetail(props) {
  // newsVideoList 24H热门新闻
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var flashDetails = props.flashDetails,
      flashImportant = props.flashImportant;
  var titleContent = Object(_multiappsharing_public["i" /* flashRecognize */])(flashDetails);
  var title = titleContent.title;
  var content = titleContent.content;
  var flashlinkid = props.match.params.flashId;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      openInBrowser = _useState2[0],
      setOpenInBrowser = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      imgSrc = _useState4[0],
      setImgSrc = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      imgShow = _useState6[0],
      setImgShow = _useState6[1];

  var appDownload = Object(useAppDownload["a" /* default */])();
  var clickDownload = Object(external_react_["useCallback"])(function () {
    setOpenInBrowser(appDownload('flashDetail', flashlinkid));
  }, []);
  Object(external_react_["useEffect"])(function () {
    if (!Object(_multiappsharing_public["v" /* isWechat */])()) {
      setOpenInBrowser(appDownload('flashDetail', flashlinkid, {
        doNotDownload: true
      }));
    }
  }, []); // scrollOffset, windowOffset, windowScroll, elementOffset,
  // useEffect(() => {
  //     const $share = document.getElementById('share-download-bottom')
  //     console.log(elementOffset($share).height) // 元素的高度  66
  //     console.log(windowOffset().height) // 窗口的高度 6737
  //     windowScroll(function (res) {
  //         // scrollOffset().top 是滚动条移动的距离
  //         // if (scrollOffset().top + windowOffset().height < elementOffset($tags).top + 66) {
  //         if (scrollOffset().top > elementOffset($share).height) {
  //             $share.style.position = 'fixed'
  //             if (res === 'up') {
  //                 $share.className = 'share-download-bottom active'
  //             } else if (res === 'down') {
  //                 $share.className = 'share-download-bottom'
  //             }
  //         }
  //     })
  // }, [])
  // let rateBar = parseInt(flashDetails.upCounts) / (parseInt(flashDetails.upCounts) + parseInt(flashDetails.downCounts)) * 100
  // let badBar = parseInt(flashDetails.downCounts) / (parseInt(flashDetails.upCounts) + parseInt(flashDetails.downCounts)) * 100

  Object(external_react_["useEffect"])(function () {
    if (flashDetails.images) {
      var twettermeta = document.createElement('meta');
      twettermeta.name = 'twitter:image';
      twettermeta.content = flashDetails.images;
      document.getElementsByTagName('head')[0].appendChild(twettermeta);
    } else {
      var _twettermeta = document.createElement('meta');

      _twettermeta.name = 'twitter:image';
      _twettermeta.content = 'http://www.marsbit.co/resource/images/huoxing24.png';
      document.getElementsByTagName('head')[0].appendChild(_twettermeta);
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "m-flash-share-detail"
  }, external_react_default.a.createElement("div", {
    className: "detail-cont"
  }, external_react_default.a.createElement("h6", null, title), external_react_default.a.createElement("div", {
    className: "cont-time"
  }, external_react_default.a.createElement("p", null, "MarsBit", t('headernavtwo')), external_react_default.a.createElement("span", null, Object(_multiappsharing_public["j" /* flashTime */])(flashDetails.createdTime, 'yyyy-MM-dd hh:mm'))), external_react_default.a.createElement("div", {
    className: "detail-cont"
  }, external_react_default.a.createElement("div", {
    className: "content-words",
    dangerouslySetInnerHTML: {
      __html: content.replace(/\n/g, '</br>')
    }
  }), external_react_default.a.createElement("a", {
    href: flashDetails.url,
    className: "original",
    style: {
      display: "".concat(!flashDetails.url ? 'none' : 'inline-block')
    }
  }, "\u67E5\u770B\u539F\u6587 >"), flashDetails.images && external_react_default.a.createElement("img", {
    onClick: function onClick() {
      setImgShow(!imgShow);
      setImgSrc(flashDetails.images);
    },
    src: flashDetails.images
  }), external_react_default.a.createElement(ImgPopup["a" /* default */], {
    close: function close() {
      return setImgShow(!imgShow);
    },
    show: imgShow,
    src: imgSrc
  }))), external_react_default.a.createElement("div", {
    className: "live-hint"
  }, t('disclaimer_in')), external_react_default.a.createElement(HotFlashList["a" /* default */], {
    data: flashImportant.inforList,
    title: t('hand_pick_flash')
  }), external_react_default.a.createElement("a", {
    className: "more-btn",
    onClick: clickDownload
  }, t('see_more_info_download')), external_react_default.a.createElement(FooterDownload["a" /* default */], {
    type: "flashDetail",
    id: flashlinkid
  }), external_react_default.a.createElement(WebchatOpenInBrowser["a" /* default */], {
    openInBrowser: openInBrowser,
    setOpenInBrowser: setOpenInBrowser
  }), external_react_default.a.createElement(WxShareBox, {
    list: flashImportant.inforList.slice(0, 3),
    type: "flashList",
    id: flashlinkid
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    flashDetails: state.flash.flashDetails,
    flashImportant: state.flash.flashImportant,
    newsVideoList: state.news.hotNewsVideo
  };
};

/* harmony default export */ var containers_m_FlashShareDetail = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(FlashShareDetail_FlashShareDetail));

/***/ })

};;
//# sourceMappingURL=containers-m-FlashShareDetail.js.map