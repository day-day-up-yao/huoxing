require("source-map-support").install();
exports.ids = [16];
exports.modules = {

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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_ImgPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(112);








var FlashDetail = function FlashDetail(props) {
  var flashDetails = props.flashDetails;
  var titleContent = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__[/* flashRecognize */ "i"])(flashDetails);
  var title = titleContent.title;
  var content = titleContent.content;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      imgShow = _useState4[0],
      setImgShow = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "m-flash-share-detail"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "detail-cont"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cont-time"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "MarsBit", t('headernavtwo')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_5__[/* flashTime */ "j"])(flashDetails.createdTime, 'yyyy-MM-dd hh:mm'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "detail-cont"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content-words",
    dangerouslySetInnerHTML: {
      __html: content.replace(/\n/g, '</br>')
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: flashDetails.url,
    className: "original",
    style: {
      display: "".concat(!flashDetails.url ? 'none' : 'inline-block')
    }
  }, "\u67E5\u770B\u539F\u6587 >"), flashDetails.images && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    onClick: function onClick() {
      setImgShow(!imgShow);
      setImgSrc(flashDetails.images);
    },
    src: flashDetails.images
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_ImgPopup__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    close: function close() {
      return setImgShow(!imgShow);
    },
    show: imgShow,
    src: imgSrc
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "live-hint"
  }, t('disclaimer_in')));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    flashDetails: state.flash.flashDetails
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(FlashDetail));

/***/ })

};;
//# sourceMappingURL=containers-m-FlashDetail.js.map