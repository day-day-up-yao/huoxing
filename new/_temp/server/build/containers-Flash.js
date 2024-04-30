require("source-map-support").install();
exports.ids = [6];
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

/***/ 110:
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var FlashUpDown = function FlashUpDown(props) {
  var details = props.details,
      upOrDown = props.upOrDown;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "judge-profit-wrapper",
    style: {
      display: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "good-profit ".concat(parseInt(details.type) === 1 ? 'active' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-status": "1",
    "data-id": details.id,
    onClick: upOrDown
  }, "\u5229\u597D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-status": "1",
    "data-id": details.id,
    onClick: upOrDown
  }, details.upCounts)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bad-profit ".concat(parseInt(details.type) === 0 ? 'active' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-status": "0",
    "data-id": details.id,
    onClick: upOrDown
  }, "\u5229\u7A7A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-status": "0",
    "data-id": details.id,
    onClick: upOrDown
  }, details.downCounts)));
};

FlashUpDown.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (FlashUpDown);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(12);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

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

// EXTERNAL MODULE: ./_multiappsharing/components/AdUp/index.js
var AdUp = __webpack_require__(123);

// EXTERNAL MODULE: ./_multiappsharing/components/LoadMore/index.js
var LoadMore = __webpack_require__(110);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/flash.js + 1 modules
var flash = __webpack_require__(31);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/components/RightItemWrapper/index.js
var RightItemWrapper = __webpack_require__(106);

// EXTERNAL MODULE: ./_multiappsharing/components/RightNews/index.js
var RightNews = __webpack_require__(108);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(114);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components/RegisterLogin/public.js
var RegisterLogin_public = __webpack_require__(19);

// EXTERNAL MODULE: ./_multiappsharing/components/ImgPopup/index.js
var ImgPopup = __webpack_require__(112);

// EXTERNAL MODULE: ./_multiappsharing/components/FlashListItem/FlashUpDown/index.js
var FlashUpDown = __webpack_require__(128);

// CONCATENATED MODULE: ./_multiappsharing/components/FlashListItem/index.js












var FlashListItem_FlashListItem = function FlashListItem(props) {
  var item = props.item,
      serverTime = props.serverTime,
      loginInfo = props.loginInfo,
      dispatch = props.dispatch;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      imgShow = _useState4[0],
      setImgShow = _useState4[1];

  var upOrDown = Object(external_react_["useCallback"])(function (event) {
    if (!Object(RegisterLogin_public["b" /* isLogin */])(loginInfo.passportId, dispatch)) return false;
    dispatch(Object(flash["c" /* getUporDown */])({
      id: event.target.getAttribute('data-id'),
      status: event.target.getAttribute('data-status'),
      passportid: loginInfo.passportId,
      token: loginInfo.token
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      Toast["a" /* default */].info('快讯利好利空错误');
      throw err;
    });
  }, [loginInfo]);
  var titleContent = Object(_multiappsharing_public["i" /* flashRecognize */])(item);
  var title = titleContent.title;
  var content = titleContent.content;
  content = unescape(content);
  var reg = 'rel="noopener noreferrer"';
  content.replace(reg, '');
  return external_react_default.a.createElement("div", {
    className: "flash-list-item-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "item-icons ".concat(item.tag === 2 ? 'import' : '')
  }, external_react_default.a.createElement("div", {
    className: "round"
  }), external_react_default.a.createElement("div", {
    className: "time-left"
  }, Object(_multiappsharing_public["j" /* flashTime */])(item.createdTime, serverTime))), external_react_default.a.createElement("a", {
    href: _multiappsharing_public["w" /* mixUrl */].news("/flash/".concat(item.id, ".html")),
    className: "item-title ".concat(item.tag === 2 ? 'import' : ''),
    target: "_blank"
  }, title), external_react_default.a.createElement("h3", {
    className: "item-detail"
  }, external_react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["D" /* urlToLink */])(content).replace(/\n/g, '</br>')
    }
  }), item.url && external_react_default.a.createElement("a", {
    title: "\u67E5\u770B\u539F\u6587",
    href: item.url,
    target: "_blank"
  }, " \u300C\u67E5\u770B\u539F\u6587\u300D")), item.images && external_react_default.a.createElement("img", {
    className: "little-img",
    onClick: function onClick() {
      setImgShow(!imgShow);
      setImgSrc(item.images);
    },
    alt: item.imagesRemark || title,
    src: item.images
  }), external_react_default.a.createElement(FlashUpDown["a" /* default */], {
    details: item,
    upOrDown: upOrDown
  }), external_react_default.a.createElement(ImgPopup["a" /* default */], {
    close: function close() {
      return setImgShow(!imgShow);
    },
    show: imgShow,
    src: imgSrc
  }));
};

FlashListItem_FlashListItem.propTypes = {
  item: external_prop_types_["object"].isRequired,
  serverTime: external_prop_types_["number"].isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loginInfo: state.multi.login.userInfo.info
  };
};

/* harmony default export */ var components_FlashListItem = (Object(external_react_redux_["connect"])(mapStateToProps)(FlashListItem_FlashListItem));
// EXTERNAL MODULE: ./_multiappsharing/redux/actions/public.js
var actions_public = __webpack_require__(24);

// CONCATENATED MODULE: ./assets/containers/Flash/index.js












 // import RightLive from 'multiComps/Home/RightLive'


 // import { Link } from 'react-router-dom'



var Flash_Flash = function Flash(props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var flashChannel = props.flashChannel,
      flashList = props.flashList,
      dispatch = props.dispatch,
      login = props.login,
      flashImportant = props.flashImportant,
      newsRankings = props.newsRankings,
      adImplant = props.adImplant;
  var paramsObj = {
    currentPage: flashList.currentPage,
    pageSize: 20,
    channelId: flashChannel.id || 0,
    passportid: login.info.passportId || ''
  };

  var _useState = Object(external_react_["useState"])(paramsObj),
      _useState2 = slicedToArray_default()(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    setParams(paramsObj);
  }, [login]);
  var loadType = Object(external_react_["useRef"])(false); // 点击切换频道为false、加载更多more

  var isLoading = Object(external_react_["useRef"])(false); // 是否在加载中

  var isMounted = Object(external_react_["useRef"])(false); // 组件是否已经挂载

  /** @desc 滚动加载更多 */

  Object(external_react_["useEffect"])(function () {
    var scrollFunc = Object(_multiappsharing_public["G" /* windowScroll */])(function (res) {
      if (res !== 'down' || params.currentPage > 3 || isLoading.current) return false;
      loadType.current = 'more';
      var $footerWrapper = document.getElementById('footerWrapper');

      if (Object(_multiappsharing_public["z" /* scrollOffset */])().top + Object(_multiappsharing_public["F" /* windowOffset */])().height > Object(_multiappsharing_public["g" /* elementOffset */])($footerWrapper).top - Object(_multiappsharing_public["F" /* windowOffset */])().height / 2) {
        loadMore();
      }
    });
    return function () {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [params, isLoading]);
  /** @desc 加载更多 */

  var refreshTime = Object(external_react_["useRef"])(flashList.inforList[flashList.inforList.length - 1].createdTime);
  Object(external_react_["useEffect"])(function () {
    refreshTime.current = flashList.inforList[flashList.inforList.length - 1].createdTime;
  }, [flashList]);
  var loadMore = Object(external_react_["useCallback"])(function () {
    if (isLoading.current) return false;
    setParams(objectSpread_default()({}, params, {
      currentPage: params.currentPage + 1,
      refreshTime: refreshTime.current
    }));
  }, [params, isLoading, refreshTime]);
  /** @desc 点击快讯频道 */

  var changeChannel = Object(external_react_["useCallback"])(function (channelId) {
    if (isLoading.current) return false;
    loadType.current = false;
    setParams(objectSpread_default()({}, params, {
      currentPage: 1,
      channelId: channelId
    }));
  }, [params, loadType, isLoading]);
  /** @desc 获取快讯列表 */

  Object(external_react_["useEffect"])(function () {
    if (isMounted.current && !isLoading.current) {
      isLoading.current = true;
      Promise.all([dispatch(Object(flash["b" /* getFlashList */])(params, loadType.current))["catch"](function (err) {
        console.log(err);
        Toast["a" /* default */].info('获取快讯列表错误');
      }), dispatch(Object(actions_public["b" /* getAdImplant */])([{
        'adPlace': 12,
        'secondPosition': params.channelId
      }, {
        'adPlace': 5
      }]))["catch"](function (err) {
        console.log(err);
        Toast["a" /* default */].info('获取快讯广告列表错误');
      })]).then(function (res) {
        isLoading.current = false;

        if (res[0].code === 1) {
          var list = res[0].obj.inforList;

          if (!Object(_multiappsharing_public["n" /* isArray */])(list) || list.length === 0) {
            Toast["a" /* default */].info('暂无更多快讯');
          }
        } else {
          Toast["a" /* default */].info(res[0].msg);
        }
      });
    } else {
      isMounted.current = true;
    }
  }, [params, isLoading, isMounted]);
  return [external_react_default.a.createElement("div", {
    className: "ad-flash-wrapper",
    key: "adFlashWrapper",
    style: {
      display: !adImplant['5'][0] ? 'none' : 'block'
    }
  }, external_react_default.a.createElement(AdUp["a" /* default */], {
    data: adImplant['5'][0] || []
  })), external_react_default.a.createElement("div", {
    className: "flash-notice-nav",
    key: "flashNoticeNav"
  }), external_react_default.a.createElement("div", {
    className: "layout-main flash-list-wrapper",
    key: "flashListWrapper"
  }, external_react_default.a.createElement("div", {
    className: "layout-left"
  }, external_react_default.a.createElement("div", {
    className: "flash-nav"
  }, flashChannel.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      key: item.id,
      className: parseInt(item.channelId) === parseInt(params.channelId) ? 'active' : '',
      datatype: item.channelId,
      onClick: function onClick() {
        return changeChannel(item.channelId);
      }
    }, item.channelName);
  })), external_react_default.a.createElement("div", {
    className: "flash-list-content"
  }, flashList.inforList.map(function (item, index) {
    if (adImplant['12'].length === 0) {
      return external_react_default.a.createElement(components_FlashListItem, {
        item: item,
        serverTime: flashList.currentTime,
        key: item.id
      });
    }

    return adImplant['12'].map(function (adItem, nIndex) {
      var adImgUrl = null;

      switch (adItem.useType) {
        case 1:
          adImgUrl = adItem.url;
          break;

        case 2:
          adImgUrl = adItem.url;
          break;

        case 3:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/newsdetail/".concat(adItem.url));
          break;

        case 4:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/list/".concat(adItem.url));
          break;

        case 5:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/feature/".concat(adItem.url.split('/')[1]));
          break;

        case 6:
          adImgUrl = _multiappsharing_public["w" /* mixUrl */].news("/tags/".concat(adItem.url));
          break;

        default:
      }

      var topOrder = parseInt(adItem.topOrder) === 0 ? parseInt(adItem.topOrder) + 1 : parseInt(adItem.topOrder);

      if (topOrder === index) {
        return external_react_default.a.createElement("a", {
          className: "flash-ad-list",
          target: "_blank",
          href: adImgUrl,
          key: adItem.id
        }, external_react_default.a.createElement("div", {
          className: "item-icons"
        }, external_react_default.a.createElement("div", {
          className: "round"
        }), external_react_default.a.createElement("div", {
          className: "time-left"
        }, Object(_multiappsharing_public["j" /* flashTime */])(item.createdTime, flashList.currentTime))), external_react_default.a.createElement("h6", null, adItem.title), external_react_default.a.createElement("p", null, adItem.description), external_react_default.a.createElement("span", {
          className: "ad-span",
          style: {
            display: "".concat(adItem.useType === 1 ? 'block' : 'none')
          }
        }, "\u5E7F\u544A"));
      }

      if (nIndex === adImplant['12'].length - 1) {
        return external_react_default.a.createElement(components_FlashListItem, {
          item: item,
          serverTime: flashList.currentTime,
          key: item.id
        });
      }
    });
  })), external_react_default.a.createElement(LoadMore["a" /* default */], {
    onClick: loadMore,
    style: {
      display: flashList.inforList.length === 0 || flashList.recordCount === flashList.inforList.length ? 'none' : ''
    }
  })), external_react_default.a.createElement("div", {
    className: "layout-right"
  }, external_react_default.a.createElement(RightItemWrapper["a" /* default */], {
    firstItem: true,
    title: t('flash_info')
  }, flashImportant.inforList && flashImportant.inforList.map(function (item, index) {
    var titleContent = Object(_multiappsharing_public["i" /* flashRecognize */])(item);
    return external_react_default.a.createElement("div", {
      className: "flash-important-item",
      key: item.id
    }, external_react_default.a.createElement("h4", null, Object(_multiappsharing_public["j" /* flashTime */])(item.createdTime, flashList.currentTime)), external_react_default.a.createElement("a", {
      href: _multiappsharing_public["w" /* mixUrl */].news("/flash/".concat(item.id, ".html")),
      target: "_blank"
    }, external_react_default.a.createElement("h3", null, titleContent.title), external_react_default.a.createElement("div", {
      className: "animate-content"
    }, external_react_default.a.createElement("div", {
      className: "im-content"
    }, titleContent.content))));
  })), external_react_default.a.createElement(RightDownloadBox["a" /* default */], null), external_react_default.a.createElement(RightNews["a" /* default */], {
    data: newsRankings.inforList || [],
    title: t('24_hot_news')
  })))];
};

var Flash_mapStateToProps = function mapStateToProps(state) {
  var multi = state.multi;
  return {
    adUp: multi.adData[5] || [],
    login: multi.login.userInfo,
    flashList: multi.flash.flashList,
    hotNewsList: multi.news.hotNewsList,
    flashImportant: state.flash.flashImportant,
    flashChannel: state.flash.flashChannel,
    newsRankings: state.flash.newsRankings,
    adImplant: state.multi.adImplant
  };
};

/* harmony default export */ var containers_Flash = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(Flash_mapStateToProps)(Flash_Flash));

/***/ })

};;
//# sourceMappingURL=containers-Flash.js.map