require("source-map-support").install();
exports.ids = [42];
exports.modules = {

/***/ 151:
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

// EXTERNAL MODULE: ./assets/containers-m/NaGa/Header/index.js
var Header = __webpack_require__(233);

// EXTERNAL MODULE: ./assets/containers-m/NaGa/PullDown/index.js
var PullDown = __webpack_require__(427);

// EXTERNAL MODULE: ./assets/public/img/close_icon.png
var close_icon = __webpack_require__(187);
var close_icon_default = /*#__PURE__*/__webpack_require__.n(close_icon);

// EXTERNAL MODULE: ./assets/public/img/wall_fis.png
var wall_fis = __webpack_require__(204);
var wall_fis_default = /*#__PURE__*/__webpack_require__.n(wall_fis);

// EXTERNAL MODULE: ./assets/public/img/wall_secon.png
var wall_secon = __webpack_require__(205);
var wall_secon_default = /*#__PURE__*/__webpack_require__.n(wall_secon);

// EXTERNAL MODULE: ./assets/public/img/wall_three.png
var wall_three = __webpack_require__(206);
var wall_three_default = /*#__PURE__*/__webpack_require__.n(wall_three);

// CONCATENATED MODULE: ./assets/containers/NaGa/PopupPage/index.js






/* harmony default export */ var PopupPage = (function (props) {
  var closeFn = props.closeFn,
      soonFn = props.soonFn;
  var walletlist = [{
    icon: wall_fis_default.a,
    name: 'Martian Wallet',
    link: ''
  }, {
    icon: wall_secon_default.a,
    name: 'Fewcha Wallet',
    link: ''
  }, {
    icon: wall_three_default.a,
    name: 'Pontem Wallet',
    link: ''
  }];
  return external_react_default.a.createElement("div", {
    className: "popup"
  }, external_react_default.a.createElement("div", {
    className: "popup-center"
  }, external_react_default.a.createElement("h2", null, "Connect your wallet"), external_react_default.a.createElement("div", {
    className: "wallet-list"
  }, walletlist.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "wallet-list-item",
      key: index,
      onClick: function onClick() {
        if (item.link === '') {
          soonFn();
        }
      }
    }, external_react_default.a.createElement("div", {
      className: "wallet-list-item-left"
    }, external_react_default.a.createElement("img", {
      src: item.icon,
      alt: ""
    })), external_react_default.a.createElement("div", {
      className: "wallet-list-item-right"
    }, item.name));
  })), external_react_default.a.createElement("div", {
    className: "close-popup",
    onClick: function onClick() {
      closeFn();
    }
  }, external_react_default.a.createElement("img", {
    src: close_icon_default.a,
    alt: ""
  }))));
});
// EXTERNAL MODULE: ./assets/components/NaGa/ShareList/index.js
var ShareList = __webpack_require__(227);

// EXTERNAL MODULE: ./assets/public/img/bigimg.png
var bigimg = __webpack_require__(261);
var bigimg_default = /*#__PURE__*/__webpack_require__.n(bigimg);

// EXTERNAL MODULE: ./assets/public/img/naga_soon.png
var naga_soon = __webpack_require__(197);
var naga_soon_default = /*#__PURE__*/__webpack_require__.n(naga_soon);

// EXTERNAL MODULE: ./assets/public/img/sxicon.png
var sxicon = __webpack_require__(514);
var sxicon_default = /*#__PURE__*/__webpack_require__.n(sxicon);

// EXTERNAL MODULE: ./assets/public/img/items_icon.png
var items_icon = __webpack_require__(515);
var items_icon_default = /*#__PURE__*/__webpack_require__.n(items_icon);

// EXTERNAL MODULE: ./assets/components/NaGa/Search/index.js
var Search = __webpack_require__(225);

// EXTERNAL MODULE: ./assets/components/NaGa/DownSelect/index.js
var DownSelect = __webpack_require__(228);

// EXTERNAL MODULE: ./assets/components/NaGa/Text/index.js
var Text = __webpack_require__(262);

// EXTERNAL MODULE: ./assets/containers-m/NaGa/Popup/index.js
var Popup = __webpack_require__(234);

// EXTERNAL MODULE: ./assets/components/NaGa/Filter/index.js + 2 modules
var Filter = __webpack_require__(428);

// CONCATENATED MODULE: ./assets/containers-m/NaGa/Filtrate/index.js





/* harmony default export */ var Filtrate = (function (props) {
  var closeFn = props.closeFn;
  var multilist = [{
    id: 1,
    name: 'Legendary1）',
    checked: false
  }, {
    id: 2,
    name: 'Legendary2（87）',
    checked: false
  }, {
    id: 3,
    name: 'Legendary3（87）',
    checked: false
  }, {
    id: 4,
    name: 'Legendary4（87）',
    checked: false
  }, {
    id: 5,
    name: 'Legendary5（87）',
    checked: false
  }];
  return external_react_default.a.createElement(Popup["a" /* default */], {
    isother: true,
    children: external_react_default.a.createElement("div", {
      className: "filtrate"
    }, external_react_default.a.createElement("h2", null, "Filter"), external_react_default.a.createElement("div", {
      className: "close-filter",
      onClick: function onClick() {
        closeFn(false);
      }
    }, external_react_default.a.createElement("img", {
      src: close_icon_default.a,
      alt: ""
    })), external_react_default.a.createElement(Filter["a" /* default */], {
      filterlist: multilist,
      ish5: true,
      getdataFn: function getdataFn(e) {
        console.log(e);
      }
    }))
  });
});
// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/containers-m/NaGa/SecondPage/index.js


 // import itembg from '../../../public/img/h5bigimg.png'


 // import pointdown from '../../../public/img/pointdown.png'









/* harmony default export */ var SecondPage = (function () {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      selecfg = _useState2[0],
      setSelecfg = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      sxflag = _useState4[0],
      seySxflag = _useState4[1];

  var selectlist = [{
    name: 'Items',
    soon: false
  }, {
    name: 'Activity',
    soon: false
  }, {
    name: 'Mints',
    soon: true
  }, {
    name: 'Play Now',
    soon: true
  }];

  var _useState5 = Object(external_react_["useState"])(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      iteminfo = _useState6[0],
      setIteminfo = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    if (Object(_multiappsharing_public["C" /* queryParam */])('iteminfo')) {
      setIteminfo(JSON.parse(Object(_multiappsharing_public["C" /* queryParam */])('iteminfo')));
    } // console.log(JSON.parse(queryParam('iteminfo')))

  }, []);

  function createArr(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
      arr.push(i + 1);
    }

    var result = [];

    for (var _i = arr.length - 1; _i > 0; _i--) {
      var rand = Math.ceil(Math.random() * _i); // 根据arr数组长度，随机产生一个索引
      // 从原数组arr把该索引的元素删除，并加入到result数组--便是随机产生啦

      result.push(arr.splice(rand, 1));
    }

    return result;
  }

  var tenArr = createArr(20);
  var itemlist = ['Price: Low to High', 'Price: High to Low', 'Date: New to Old', 'Date: Old to New', 'Rank: High to Low', 'Rank: Low to High'];
  return external_react_default.a.createElement("div", {
    className: "second-page"
  }, external_react_default.a.createElement("div", {
    className: "second-page-top",
    style: {
      backgroundImage: "url(".concat(iteminfo && iteminfo.bgimg, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }, external_react_default.a.createElement("div", {
    className: "page-top-popup"
  }), external_react_default.a.createElement("div", {
    className: "second-page-other"
  }, external_react_default.a.createElement("div", {
    className: "page-other-left"
  }, external_react_default.a.createElement("img", {
    src: iteminfo && iteminfo.icon,
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "page-other-right"
  }, external_react_default.a.createElement("div", {
    className: "other-right-not"
  }), external_react_default.a.createElement("div", {
    className: "other-right-text"
  }, iteminfo ? iteminfo.name : '--'), iteminfo && external_react_default.a.createElement(ShareList["a" /* default */], {
    link: iteminfo.twitter
  })))), external_react_default.a.createElement("div", {
    className: "second-page-text"
  }, external_react_default.a.createElement("div", {
    className: "second-page-text-con"
  }, external_react_default.a.createElement("div", {
    className: "text-con-btn"
  }, iteminfo && iteminfo.website && external_react_default.a.createElement("div", {
    className: "text-con-btn-item item-again"
  }, external_react_default.a.createElement("a", {
    href: iteminfo.website,
    target: "_blank"
  }, "Website"))), external_react_default.a.createElement("div", {
    className: "text-con-desc"
  }, external_react_default.a.createElement("div", {
    className: "text-con-desc-t"
  }, iteminfo ? iteminfo.desc : '--')))), external_react_default.a.createElement("div", {
    className: "second-page-bottom"
  }, external_react_default.a.createElement("div", {
    className: "page-bottom-select"
  }, selectlist.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "bottom-select-item ".concat(selecfg === index && 'select-active'),
      key: index,
      onClick: function onClick() {
        if (!item.soon) {
          setSelecfg(index);
        }
      }
    }, external_react_default.a.createElement("span", null, item.name), item.soon && external_react_default.a.createElement("div", {
      className: "select-item-soon"
    }, external_react_default.a.createElement("img", {
      src: naga_soon_default.a,
      alt: ""
    })));
  })), selecfg === 0 && external_react_default.a.createElement("div", {
    className: "page-bottom-items"
  }, external_react_default.a.createElement("div", {
    className: "page-bottom-sx"
  }, external_react_default.a.createElement(Search["a" /* default */], {
    little: true
  }), external_react_default.a.createElement("div", {
    className: "bottom-sx-go"
  }, external_react_default.a.createElement(DownSelect["a" /* default */], {
    title: "Price\uFF1ALow to High",
    little: true,
    itemlist: itemlist
  }), external_react_default.a.createElement("div", {
    className: "bottom-sx-go-right",
    onClick: function onClick() {
      seySxflag(true);
    }
  }, external_react_default.a.createElement("img", {
    src: sxicon_default.a,
    alt: ""
  })))), external_react_default.a.createElement("div", {
    className: "bottom-items-list"
  }, tenArr.map(function (item) {
    return external_react_default.a.createElement("div", {
      className: "items-list-item",
      key: item
    }, external_react_default.a.createElement("div", {
      className: "items-list-item-top"
    }, external_react_default.a.createElement("img", {
      src: bigimg_default.a,
      alt: ""
    })), external_react_default.a.createElement("div", {
      className: "items-list-item-bottom"
    }, external_react_default.a.createElement("div", {
      className: "item-bottom-text"
    }, "DEMO #6965"), external_react_default.a.createElement("div", {
      className: "item-bottom-btn"
    }, external_react_default.a.createElement("img", {
      src: items_icon_default.a,
      alt: ""
    }), external_react_default.a.createElement("span", null, "0.15 APT"))));
  }))), selecfg === 1 && external_react_default.a.createElement("div", {
    className: "page-bottom-activity"
  }, external_react_default.a.createElement(Text["a" /* default */], {
    isH5: true,
    itemtype: iteminfo.type
  }))), sxflag && external_react_default.a.createElement(Filtrate, {
    closeFn: function closeFn() {
      seySxflag(false);
    }
  }));
});
// CONCATENATED MODULE: ./assets/containers-m/NaGa/NagaDetail/index.js







/* harmony default export */ var NagaDetail = __webpack_exports__["default"] = (function () {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      downfg = _useState2[0],
      setDownfg = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      wallerfg = _useState4[0],
      setWalletfg = _useState4[1];

  return external_react_default.a.createElement("div", {
    className: "naga-m"
  }, external_react_default.a.createElement(Header["a" /* default */], {
    ondownFn: function ondownFn(fg) {
      setDownfg(fg);
    },
    walletFn: function walletFn() {
      setWalletfg(true);
    }
  }), external_react_default.a.createElement(SecondPage, null), downfg && external_react_default.a.createElement(PullDown["a" /* default */], {
    onpullFn: function onpullFn() {
      setDownfg(false);
    },
    onwalletFn: function onwalletFn() {
      setWalletfg(true);
    },
    gotolinkFn: function gotolinkFn(num) {
      if (num === 0) {
        // setTypefg(0)
        setDownfg(false);
      }
    }
  }), wallerfg && external_react_default.a.createElement(PopupPage, {
    closeFn: function closeFn() {
      setWalletfg(false);
    },
    soonFn: function soonFn() {
      console.log('toast');
    }
  }));
});

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close_icon-e93c41a9.png";

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wallet_icon-749436f8.png";

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "naga_soon-85b54a6b.png";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "twitter-0a6e2638.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nagalogo-dfaf0a85.png";

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wall_fis-375cc8b8.png";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wall_secon-7c217a67.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wall_three-01a15a1c.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "allgame-5235b13c.png";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rocket-70f04387.png";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "game_h-e6d2e873.png";

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search_naga-582a6ff7.png";

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_search_naga_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(214);
/* harmony import */ var _public_img_search_naga_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_search_naga_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var little = props.little;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-center ".concat(little && 'little-search')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_search_naga_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Search"
  }));
});

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(198);
/* harmony import */ var _public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);

 // import share1img from '../../../public/img/share/share1.png'
// import share2img from '../../../public/img/share/share2.png'


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var link = props.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "share-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "share-img",
    onClick: function onClick() {
      if (link) {
        window.open(link);
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: ""
  })));
});

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_pointdown_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(229);
/* harmony import */ var _public_img_pointdown_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_pointdown_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var title = props.title,
      little = props.little,
      itemlist = props.itemlist;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(title),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      selectname = _useState4[0],
      setSelectname = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-select ".concat(little && 'little-select')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-select-con",
    onClick: function onClick() {
      setShow(!show);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, selectname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_pointdown_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  })), show && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "down-select-list"
  }, itemlist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "down-select-list-item",
      key: index,
      onClick: function onClick() {
        setSelectname(item);
        setShow(false);
      }
    }, item);
  })));
});

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pointdown-9cdc2a41.png";

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);
/* harmony import */ var _public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(196);
/* harmony import */ var _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_driectory_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var _public_img_driectory_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_driectory_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(187);
/* harmony import */ var _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var ispopup = props.ispopup,
      ondownFn = props.ondownFn,
      walletFn = props.walletFn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  })), ispopup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m-right-all",
    onClick: function onClick() {
      ondownFn(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: ""
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m-right-all",
    onClick: function onClick() {
      ondownFn(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_driectory_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-m-wallet",
    onClick: function onClick() {
      walletFn(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: ""
  }))));
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var children = props.children,
      isother = props.isother;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-m ".concat(isother && 'other-popup')
  }, children);
});

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bigimg-9b147d38.png";

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);

 // import bigimg from '../../../public/img/itembg.png'

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var isH5 = props.isH5,
      itemtype = props.itemtype;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity ".concat(isH5 && 'little')
  }, itemtype === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Multi-Phase ARPG Game on Metaverse"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Because Earth is near extinction, scientists around the world were racing to find the most planet similar to Earth. Then they found it and named it Plasmaverse. They decided to send an expedition to settle a living there in Plasmaverse, containing nine heroes who brought several resources with them. The resources are animals, plants, seeds as well as human embryos. They prepared these resources to be ready by reaching Plasmaverse in twenty light years.")), itemtype === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kepler Gaming NFT takes you to take over the Kepler galaxy in a parallel universe."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to the world of Kepler. Escaping from Earth and flying to outer space has become the last hope for human survival. Choose the game mode then team up with your comrades to explore the human habitable planet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kepler's vision is to create a globally popular blockchain-based MMORPG which returns to the fun of the game itself and brings new players into NFTs to influence more game content creators. Facing an unknown future, Kepler is not limited to the RPG game itself, the world has infinite possibilities which we will explore together.")), itemtype === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A #PlayToEarn strategy #NFT game where you lead the descendants of humanity to forge a new empire!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Galaxy Blitz is our upcoming Play-To-Earn strategy NFT game where we combine the use of real-world, usable tokens with high-octane gameplay and extensive history and lore  for a unique player experience."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The continued push for NFT gaming is incredibly important for a few different reasons. With more riveting gameplay, extensive adoption of crypto technology around the world will surely follow. Additionally, for gamers, NFT gaming gives the power back to them, as they can earn tokens from the time that they spend with their favorite game."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Players will use MIT, our in-game governance token, to buy in-game tokens and NFTs that can be used in the game.")), itemtype === 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "CODM warriors building a gaming empire on @aptoslabs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "AptosCODM is a community of gamers who\u2019ve come together to form a gaming community on @AptosLabs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "#aptosecosystem #Aptos . Our goal is to utilize our common interests (Gaming) as a tool to impact the web3 space. Our discord link/roadmap is coming soon! Retweet")), itemtype === 4 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "AptosYoka is a community-driven Web3 Social GameFi platform that empowers users by rewarding them for their engagement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In AptosYoka, the community is everything. you can not only play games to gain profits, but also have in-depth exchanges with different players to build a web3 world that belongs to all GameFi users.")), itemtype === 5 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In this dApp, players can buy, trade, breed, & accessorize cartoon Capybaras. As programmable objects on Sui, Capys showcase principles such as: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\uD83D\uDD39asset ownership"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\uD83D\uDD39transferability"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\uD83D\uDD39dynamic fields ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Developing Sui Capys using Sui #Move required defining basic modules, creating types, and building a registry to record and verify them."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A unique feature of this project is the ability to breed two Capys, creating a completely new Capy based on the breeding pair's characteristics."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The breed function takes two parent Capys and computes genes for the \u201Cnewborn.\u201D")));
});

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pointtop-e4e3872b.png";

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "multied-3c291dc9.png";

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "multiimg-ffc42a4c.png";

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "driectory-37242f49.png";

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(233);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(234);
/* harmony import */ var _public_img_allgame_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);
/* harmony import */ var _public_img_allgame_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_allgame_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_rocket_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(208);
/* harmony import */ var _public_img_rocket_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_rocket_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_game_h_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(209);
/* harmony import */ var _public_img_game_h_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_game_h_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(197);
/* harmony import */ var _public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(196);
/* harmony import */ var _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var onpullFn = props.onpullFn,
      onwalletFn = props.onwalletFn;
  var pulllist = [{
    name: 'ALL GAME',
    icon: _public_img_allgame_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    soon: false,
    link: '/naga'
  }, {
    name: 'MINTS',
    icon: _public_img_rocket_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    soon: true,
    link: ''
  }, {
    name: 'PLAY NOW',
    icon: _public_img_game_h_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    soon: true,
    link: ''
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popup__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pulldown"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      ispopup: true,
      ondownFn: function ondownFn(e) {
        onpullFn(e);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pulldown-list"
    }, pulllist.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pulldown-list-item",
        key: index,
        onClick: function onClick() {
          if (!item.soon) {
            // gotolinkFn(index)
            window.location.href = item.link;
          } else {
            _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info('Coming soon');
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pulldown-list-item-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: item.icon,
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "top-text"
      }, item.name, item.soon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-top-soon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: ""
      })))));
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pulldown-wallet",
      onClick: function onClick() {
        onpullFn(false);
        onwalletFn(true);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Connect Wallet")))
  });
});

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/components/NaGa/DownSelect/index.js
var DownSelect = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// CONCATENATED MODULE: ./assets/components/Progress/index.js

 // import axios from 'axios'
// import SelectCode from '../../components/Public/HomeHint'


/* harmony default export */ var Progress = (function (props) {
  var valnum = props.valnum,
      onChange = props.onChange,
      allnum = props.allnum,
      ish5 = props.ish5,
      minnum = props.minnum,
      onMinchange = props.onMinchange;
  var totalRef = Object(external_react_["useRef"])(null); // const minRef = useRef(null)

  var _useState = Object(external_react_["useState"])(valnum),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(minnum),
      _useState4 = slicedToArray_default()(_useState3, 2),
      minval = _useState4[0],
      setMinval = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    setValue(valnum);
  }, [valnum]);
  Object(external_react_["useEffect"])(function () {
    setMinval(minnum);
  }, [minnum]);
  return external_react_default.a.createElement("div", {
    className: "pregress-line"
  }, external_react_default.a.createElement("div", {
    ref: totalRef,
    className: "pregress-line-bg"
  }, external_react_default.a.createElement("div", {
    className: "pregress-line-con",
    style: {
      width: value * 100 + '%'
    }
  })), ish5 ? external_react_default.a.createElement("div", {
    className: "pregress-line-btn",
    onTouchStart: function onTouchStart(e) {
      var offsetWidth = totalRef.current.offsetWidth;
      var stop = e.currentTarget;
      var offsetLeft = stop.offsetLeft;
      stop.style['left'] = offsetLeft + 'px';
      var start = e.touches['0'].pageX;

      var move = function move(e) {
        console.log(start);
        var val = offsetLeft + e.touches['0'].pageX - start;
        if (val <= 0) val = 0;
        if (val >= offsetWidth) val = offsetWidth; // stop.style['left'] = val + 'px'

        setValue((val / offsetWidth).toFixed(2));
        onChange((val / offsetWidth).toFixed(2));
        onChange(val / offsetWidth);
      };

      var clear = function clear() {
        document.removeEventListener('touchmove', move);
        document.removeEventListener('mouseup', clear);
        document.removeEventListener('touchend', clear);
      };

      document.addEventListener('touchmove', move);
      document.addEventListener('mouseup', clear);
      document.addEventListener('touchend', clear);
    },
    style: {
      left: value * 100 + '%'
    }
  }, external_react_default.a.createElement("div", {
    className: "pregress-line-btn-pop"
  }, external_react_default.a.createElement("div", {
    className: "btn-pop-num"
  }, parseInt(allnum * value)))) : external_react_default.a.createElement("div", {
    className: "pregress-line-btn",
    onMouseDown: function onMouseDown(e) {
      var offsetWidth = totalRef.current.offsetWidth;
      console.log(offsetWidth);
      var stop = e.currentTarget;
      console.log(e.currentTarget);
      var offsetLeft = stop.offsetLeft;
      stop.style['left'] = offsetLeft + 'px';
      var start = e.pageX;

      var move = function move(e) {
        var val = offsetLeft + e.pageX - start;
        if (val <= 0) val = 0;
        if (val >= offsetWidth) val = offsetWidth; // stop.style['left'] = val + 'px'

        setValue((val / offsetWidth).toFixed(2));
        onChange((val / offsetWidth).toFixed(2));
      };

      var clear = function clear() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', clear);
        document.removeEventListener('mouseleave', clear);
      };

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', clear);
      document.addEventListener('mouseleave', clear);
    },
    style: {
      left: value * 100 + '%'
    }
  }, external_react_default.a.createElement("div", {
    className: "pregress-line-btn-pop"
  }, external_react_default.a.createElement("div", {
    className: "btn-pop-num"
  }, parseInt(allnum * value)))), external_react_default.a.createElement("div", {
    className: "min-left",
    style: {
      width: minval * 100 + '%'
    }
  }), ish5 ? external_react_default.a.createElement("div", {
    className: "pregress-line-leftbtn",
    onTouchStart: function onTouchStart(e) {
      var offsetWidth = totalRef.current.offsetWidth;
      var stop = e.currentTarget; // console.log(e.currentTarget)

      var offsetLeft = stop.offsetLeft;
      stop.style['left'] = offsetLeft + 'px';
      var start = e.touches['0'].pageX;

      var move = function move(e) {
        var val = offsetLeft + e.touches['0'].pageX - start;
        if (val <= 0) val = 0;
        if (val >= value * offsetWidth) val = value * offsetWidth;
        if (val >= offsetWidth) val = offsetWidth;
        setMinval((val / offsetWidth).toFixed(2)); // stop.style['left'] = val + 'px'

        onMinchange((val / offsetWidth).toFixed(2)); // console.log(val)
      };

      var clear = function clear() {
        document.removeEventListener('touchmove', move);
        document.removeEventListener('mouseup', clear);
        document.removeEventListener('touchend', clear);
      };

      document.addEventListener('touchmove', move);
      document.addEventListener('mouseup', clear);
      document.addEventListener('touchend', clear);
    },
    style: {
      left: minval * 100 - 2 + '%'
    }
  }, external_react_default.a.createElement("div", {
    className: "pregress-line-btn-pop"
  }, external_react_default.a.createElement("div", {
    className: "btn-pop-num"
  }, parseInt(allnum * minval)))) : external_react_default.a.createElement("div", {
    className: "pregress-line-leftbtn",
    onMouseDown: function onMouseDown(e) {
      var offsetWidth = totalRef.current.offsetWidth;
      var stop = e.currentTarget; // console.log(e.currentTarget)

      var offsetLeft = stop.offsetLeft; // console.log(offsetLeft)

      stop.style['left'] = offsetLeft + 'px';
      var start = e.pageX;

      var move = function move(e) {
        var val = offsetLeft + e.pageX - start;
        if (val <= 0) val = 0;
        if (val >= value * offsetWidth) val = value * offsetWidth;
        if (val >= offsetWidth) val = offsetWidth;
        setMinval((val / offsetWidth).toFixed(2)); // stop.style['left'] = val + 'px'

        onMinchange((val / offsetWidth).toFixed(2)); // console.log(val)
      };

      var clear = function clear() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', clear);
        document.removeEventListener('mouseleave', clear);
      };

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', clear);
      document.addEventListener('mouseleave', clear);
    },
    style: {
      left: minval * 100 - 2 + '%'
    }
  }, external_react_default.a.createElement("div", {
    className: "pregress-line-btn-pop"
  }, external_react_default.a.createElement("div", {
    className: "btn-pop-num"
  }, parseInt(allnum * minval)))));
});
// EXTERNAL MODULE: ./assets/public/img/pointtop.png
var pointtop = __webpack_require__(263);
var pointtop_default = /*#__PURE__*/__webpack_require__.n(pointtop);

// EXTERNAL MODULE: ./assets/public/img/pointdown.png
var pointdown = __webpack_require__(229);
var pointdown_default = /*#__PURE__*/__webpack_require__.n(pointdown);

// CONCATENATED MODULE: ./assets/components/NaGa/Screening/index.js





/* harmony default export */ var Screening = (function (props) {
  var title = props.title,
      children = props.children,
      spread = props.spread;

  var _useState = Object(external_react_["useState"])(spread),
      _useState2 = slicedToArray_default()(_useState, 2),
      unfold = _useState2[0],
      setUnfold = _useState2[1];

  return external_react_default.a.createElement("div", {
    className: "items-left-item"
  }, external_react_default.a.createElement("div", {
    className: "screen",
    onClick: function onClick() {
      setUnfold(!unfold);
    }
  }, external_react_default.a.createElement("div", {
    className: "screen-title"
  }, title), external_react_default.a.createElement("div", {
    className: "screen-img"
  }, external_react_default.a.createElement("img", {
    src: unfold ? pointtop_default.a : pointdown_default.a,
    alt: ""
  }))), unfold && children);
});
// EXTERNAL MODULE: ./assets/public/img/multied.png
var multied = __webpack_require__(264);
var multied_default = /*#__PURE__*/__webpack_require__.n(multied);

// EXTERNAL MODULE: ./assets/public/img/multiimg.png
var multiimg = __webpack_require__(265);
var multiimg_default = /*#__PURE__*/__webpack_require__.n(multiimg);

// CONCATENATED MODULE: ./assets/components/NaGa/Filter/index.js








/* harmony default export */ var Filter = __webpack_exports__["a"] = (function (props) {
  var filterlist = props.filterlist,
      getdataFn = props.getdataFn,
      ish5 = props.ish5;

  var _useState = Object(external_react_["useState"])((100 / 400).toFixed(2)),
      _useState2 = slicedToArray_default()(_useState, 2),
      maxnum = _useState2[0],
      setMaxnum = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      minnum = _useState4[0],
      setMinnum = _useState4[1];

  var allnumber = 500;

  var _useState5 = Object(external_react_["useState"])(filterlist),
      _useState6 = slicedToArray_default()(_useState5, 2),
      filterdata = _useState6[0],
      setFilterdata = _useState6[1];

  var itemlist = ['Primus(59)', 'Sinisters(45)', 'Elites(34)', 'Invaders(32)', 'Heroes(29)', 'Ronin(29)', 'Hut 8(5)', 'Outlanders(4)']; // 多选点击

  var selectMulti = Object(external_react_["useCallback"])(function (e) {
    var id = e.target.getAttribute('dataid');
    var data = [];
    filterdata.map(function (itm, idx) {
      if (parseInt(id) === parseInt(itm.id)) {
        filterdata[idx].checked = !itm.checked;
      }

      data.push(itm);
    });
    var condata = []; // 筛选条件列表

    data.map(function (item) {
      if (item.checked === true) {
        condata.push(item.name);
      }
    });
    getdataFn(condata);
    setFilterdata(data);
  }, [filterdata]);
  return external_react_default.a.createElement("div", {
    className: "center-items-left ".concat(ish5 && 'h5-filter')
  }, external_react_default.a.createElement(Screening, {
    title: "Faction",
    spread: true,
    children: external_react_default.a.createElement(DownSelect["a" /* default */], {
      title: "select Faction...",
      itemlist: itemlist
    })
  }), external_react_default.a.createElement(Screening, {
    title: "Power - Level",
    spread: true,
    children: external_react_default.a.createElement("div", {
      className: "select-amount"
    }, external_react_default.a.createElement(Progress, {
      valnum: maxnum,
      ish5: ish5,
      allnum: allnumber,
      onChange: function onChange(e) {
        setMaxnum(e);
      },
      minnum: minnum,
      onMinchange: function onMinchange(e) {
        setMinnum(e);
      }
    }), external_react_default.a.createElement("div", {
      className: "select-amount-box"
    }, external_react_default.a.createElement("div", {
      className: "amount-box-any"
    }, external_react_default.a.createElement("input", {
      type: "text",
      value: parseInt(minnum * allnumber),
      onChange: function onChange(e) {
        if (e.target.value >= parseInt(maxnum * allnumber)) {
          // console.log(e.target.value)
          setMinnum(maxnum);
          return;
        }

        setMinnum(e.target.value / allnumber); // if (e.target.value >= parseInt(maxnum * 100)) {
        //     setMinnum(maxnum)
        // } else {
        //     setMinnum(parseInt(e.target.value / 100))
        // }
      }
    })), external_react_default.a.createElement("div", null, "\u4E00"), external_react_default.a.createElement("div", {
      className: "amount-box-any box-active"
    }, external_react_default.a.createElement("input", {
      type: "text",
      value: parseInt(maxnum * allnumber),
      onChange: function onChange(e) {
        if (e.target.value > allnumber) {
          setMaxnum(allnumber / allnumber);
          return;
        }

        if (e.target.value <= minnum * allnumber) {
          setMaxnum(minnum);
          return;
        }

        setMaxnum(e.target.value / allnumber);
      }
    }))))
  }), external_react_default.a.createElement(Screening, {
    title: "Tier",
    spread: true,
    children: external_react_default.a.createElement("div", {
      className: "multi-select"
    }, filterdata.map(function (item, index) {
      return external_react_default.a.createElement("div", {
        className: "multi-select-con",
        key: index
      }, external_react_default.a.createElement("div", {
        className: "multi-select-con-img",
        dataid: item.id,
        datatradeno: item.name,
        onClick: selectMulti
      }, external_react_default.a.createElement("img", {
        src: item.checked ? multied_default.a : multiimg_default.a,
        alt: "",
        dataid: item.id,
        datatradeno: item.name
      })), external_react_default.a.createElement("span", null, item.name));
    }))
  }), external_react_default.a.createElement(Screening, {
    title: "Game-Node-Id" // spread
    ,
    children: external_react_default.a.createElement("div", {
      className: "multi-select"
    }, filterdata.map(function (item, index) {
      return external_react_default.a.createElement("div", {
        className: "multi-select-con",
        key: index
      }, external_react_default.a.createElement("div", {
        className: "multi-select-con-img",
        dataid: item.id,
        datatradeno: item.name,
        onClick: selectMulti
      }, external_react_default.a.createElement("img", {
        src: item.checked ? multied_default.a : multiimg_default.a,
        alt: "",
        dataid: item.id,
        datatradeno: item.name
      })), external_react_default.a.createElement("span", null, item.name));
    }))
  }));
});

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sxicon-c7a3c054.png";

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "items_icon-626768df.png";

/***/ })

};;
//# sourceMappingURL=containers-m-NaGa-NagaDetail-index.js.map