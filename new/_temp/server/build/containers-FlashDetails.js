require("source-map-support").install();
exports.ids = [7];
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

/***/ 144:
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
        className: "social-share-bar"
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
  wechatQrcodeSize: 90,
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

/***/ 92:
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

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./_multiappsharing/components/RightNews/index.js
var RightNews = __webpack_require__(108);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(114);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightFlashAndDynamic/index.js
var RightFlashAndDynamic = __webpack_require__(124);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(1);

// EXTERNAL MODULE: ./_multiappsharing/components/ImgPopup/index.js
var ImgPopup = __webpack_require__(112);

// EXTERNAL MODULE: ./_multiappsharing/components/FlashListItem/FlashUpDown/index.js
var FlashUpDown = __webpack_require__(128);

// CONCATENATED MODULE: ./assets/containers/Details/Sharebar/index.js




var Sharebar_Sharebar = function Sharebar(props) {
  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      shareCon = _useState2[0],
      setShareCon = _useState2[1];

  var shareGenerate = Object(external_react_["useCallback"])(function () {
    var SocialShareBar = __webpack_require__(144)["default"];

    return external_react_default.a.createElement(SocialShareBar, {
      url: window.location.href,
      sites: ['twitter', 'facebook']
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    setShareCon(shareGenerate());
  }, []);
  return external_react_default.a.createElement("div", {
    className: "flashbar-share-wrapper",
    id: "flash-detail-share"
  }, typeof window !== 'undefined' && shareCon);
};

/* harmony default export */ var Details_Sharebar = (Sharebar_Sharebar);
// EXTERNAL MODULE: ./_multiappsharing/redux/actions/news.js + 1 modules
var news = __webpack_require__(14);

// EXTERNAL MODULE: ./assets/containers/Details/RelatedNews/index.js
var RelatedNews = __webpack_require__(127);

// CONCATENATED MODULE: ./assets/containers/FlashDetails/index.js




 // import { getDetailUporDown } from '../../redux/actions/flash'

 // import RightRiseDropList from 'multiComps/RightRiseDropList'





 // import { isLogin } from 'multiComps/RegisterLogin/public'






var FlashDetails_FlashDetails = function FlashDetails(props) {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var flashDetails = props.flashDetails,
      dispatch = props.dispatch,
      hotNews24H = props.hotNews24H;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      imgShow = _useState4[0],
      setImgShow = _useState4[1];

  console.log(flashDetails);
  Object(external_react_["useEffect"])(function () {
    // const $share = document.getElementById('flash-detail-share')
    // windowScroll(function (res) {
    //     const sTop = scrollOffset().top
    //     // console.log('高度是：' + sTop)
    //     if (sTop > 160) {
    //         $share.style.position = 'fixed'
    //         $share.style.top = '80px'
    //     } else {
    //         $share.style.position = 'absolute'
    //         $share.style.top = 0
    //     }
    // })
    // 获取24H热门
    dispatch(Object(news["b" /* get24hHotNews */])({
      lastDays: 1,
      readCounts: 50,
      newsCounts: 5
    })).then(function (res) {
      if (res.code !== 1) {
        Toast["a" /* default */].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      Toast["a" /* default */].info('获取24H热门新闻错误');
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    var div = document.getElementsByClassName('flash-details-wrapper')[0];
    var clientHeight = div.clientHeight; // setHeight(clientHeight);

    console.log(clientHeight);
  }); // const upOrDown = useCallback((event) => {
  //     if (!isLogin(loginInfo.passportId, dispatch)) return false
  //     const params = {
  //         id: event.target.getAttribute('data-id'),
  //         status: event.target.getAttribute('data-status'),
  //         passportid: loginInfo.passportId,
  //         token: loginInfo.token
  //     }
  //     dispatch(getDetailUporDown(params)).then(function (res) {
  //         if (res.code !== 1) {
  //             Toast.info(res.msg)
  //         }
  //     }).catch(function (err) {
  //         console.log(err)
  //         Toast.info('快讯利好利空错误')
  //     })
  // }, [loginInfo])

  var addZero = function addZero(num) {
    return num >= 10 ? num : '0' + num;
  };

  var createdTime = new Date(flashDetails.createdTime);
  var weeksObj = {
    '1': '星期一',
    '2': '星期二',
    '3': '星期三',
    '4': '星期四',
    '5': '星期五',
    '6': '星期六',
    '0': '星期日'
  };
  var titleContent = Object(_multiappsharing_public["i" /* flashRecognize */])(flashDetails);
  var title = titleContent.title;
  var content = titleContent.content; // let newstr = ''
  // if (content !== '') {
  //     newstr = String(content).replaceAll('noopener ', '')
  //     newstr = String(newstr).replaceAll('http://', '')
  //     newstr = String(newstr).replaceAll('noreferrer', '')
  //     newstr = String(newstr).replaceAll('rel=""', '')
  //     newstr = String(newstr).replaceAll('href="', 'href="http://')
  // } else {
  //     newstr = ''
  // }
  // content = '<p>' + newstr

  return external_react_default.a.createElement("div", {
    className: "layout-main flash-details-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "layout-left"
  }, external_react_default.a.createElement("div", {
    className: "flash-news-date-box clearfix"
  }, external_react_default.a.createElement("div", {
    className: "left"
  }, external_react_default.a.createElement("h2", null, addZero(createdTime.getDate())), external_react_default.a.createElement("p", null, addZero(createdTime.getMonth() + 1), "\u6708")), external_react_default.a.createElement("div", {
    className: "right"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", null, weeksObj[createdTime.getDay()])), external_react_default.a.createElement("h2", null, "".concat(Object(_multiappsharing_public["j" /* flashTime */])(flashDetails.createdTime))))), external_react_default.a.createElement("div", {
    className: "live-news-contain"
  }, external_react_default.a.createElement("h1", null, title), external_react_default.a.createElement("h2", null, external_react_default.a.createElement("div", {
    className: "content-words",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), flashDetails.url && external_react_default.a.createElement("a", {
    rel: "nofollow",
    title: "\u67E5\u770B\u539F\u6587",
    href: flashDetails.url,
    target: "_blank"
  }, "\u300C\u67E5\u770B\u539F\u6587\u300D")), flashDetails.images && external_react_default.a.createElement("img", {
    onClick: function onClick() {
      setImgShow(!imgShow);
      setImgSrc(flashDetails.images);
    },
    alt: flashDetails.imagesRemark || title,
    src: flashDetails.images
  }), external_react_default.a.createElement(FlashUpDown["a" /* default */], {
    details: flashDetails
  }), external_react_default.a.createElement("div", {
    className: "hint"
  }, t('disclaimer_in'))), external_react_default.a.createElement("div", {
    className: "flash-news-share"
  }, external_react_default.a.createElement(Details_Sharebar, null)), external_react_default.a.createElement(RelatedNews["a" /* default */], {
    newsCur: flashDetails,
    isflash: true
  })), external_react_default.a.createElement("div", {
    className: "layout-right"
  }, external_react_default.a.createElement(RightFlashAndDynamic["a" /* default */], {
    onlyOne: 'flash'
  }), external_react_default.a.createElement(RightDownloadBox["a" /* default */], null), external_react_default.a.createElement(RightNews["a" /* default */], {
    id: "interestNews",
    data: hotNews24H,
    title: t('24_hot_news')
  })), external_react_default.a.createElement(ImgPopup["a" /* default */], {
    close: function close() {
      return setImgShow(!imgShow);
    },
    show: imgShow,
    src: imgSrc
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    flashDetails: state.flash.flashDetails,
    loginInfo: state.multi.login.userInfo.info,
    hotNews24H: state.multi.news.hot24HNewsList.inforList
  };
};

/* harmony default export */ var containers_FlashDetails = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(FlashDetails_FlashDetails));

/***/ })

};;
//# sourceMappingURL=containers-FlashDetails.js.map