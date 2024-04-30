require("source-map-support").install();
exports.ids = [18];
exports.modules = {

/***/ 158:
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

// EXTERNAL MODULE: ./assets/containers/NaGa/Header/index.js
var Header = __webpack_require__(248);

// EXTERNAL MODULE: ./assets/containers/NaGa/LeftCon/index.js
var LeftCon = __webpack_require__(249);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// EXTERNAL MODULE: ./assets/components/NaGa/ShareList/index.js
var ShareList = __webpack_require__(227);

// EXTERNAL MODULE: ./assets/public/js/imgDefaut.js
var imgDefaut = __webpack_require__(253);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(166);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./assets/containers/NaGa/RightCon/index.js


 // import bigimg from '../../../public/img/bigimg.png'




external_swiper_default.a.use([external_swiper_["Autoplay"], external_swiper_["Navigation"], external_swiper_["Pagination"]]);
/* harmony default export */ var RightCon = (function (props) {
  // function createArr (num) {
  //     let arr = []
  //     for (let i = 0; i < num; i++) {
  //         arr.push(i + 1)
  //     }
  //     let result = []
  //     for (let i = arr.length - 1; i > 0; i--) {
  //         let rand = Math.ceil(Math.random() * i)
  //         // 根据arr数组长度，随机产生一个索引
  //         // 从原数组arr把该索引的元素删除，并加入到result数组--便是随机产生啦
  //         result.push(arr.splice(rand, 1))
  //     }
  //     return result
  // }
  // let tenArr = createArr(50)
  return external_react_default.a.createElement("div", {
    className: "right-con"
  }, external_react_default.a.createElement("div", {
    className: "right-con-banner"
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "naga-item-banner",
    preventClicks: false,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination.right-naga-carousel-recommend-pag',
      type: 'bullets',
      clickable: true,
      bulletClass: 'right-naga-carousel-recommend-pag-customs',
      bulletActiveClass: 'right-naga-carousel-recommend-pag-customs-active'
    }
  }, imgDefaut["a" /* gameList */].map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      key: index
    }, external_react_default.a.createElement("div", {
      className: "itemcon-banner",
      style: {
        backgroundImage: "url(".concat(item.bgimg, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    }, external_react_default.a.createElement("div", {
      className: "itemcon-banner-bg"
    }), external_react_default.a.createElement("div", {
      className: "itemcon-banner-con"
    }, external_react_default.a.createElement("div", {
      className: "itemcon-banner-con-top"
    }, external_react_default.a.createElement("div", {
      className: "banner-top-img"
    }, external_react_default.a.createElement("img", {
      src: item.icon,
      alt: ""
    })), external_react_default.a.createElement("div", {
      className: "banner-con-top-left"
    }, external_react_default.a.createElement("div", {
      className: "banner-title"
    }, item.name), external_react_default.a.createElement(ShareList["a" /* default */], {
      link: item.twitter
    }))), external_react_default.a.createElement("div", {
      className: "itemcon-banner-con-desc"
    }, item.desc))));
  }), external_react_default.a.createElement("div", {
    className: "swiper-pagination right-naga-carousel-recommend-pag"
  }))), external_react_default.a.createElement("div", {
    className: "all-list"
  }, imgDefaut["a" /* gameList */].concat(imgDefaut["a" /* gameList */]).concat(imgDefaut["a" /* gameList */]).concat(imgDefaut["a" /* gameList */]).map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "all-list-item",
      key: index,
      onClick: function onClick() {
        // goitemFn()
        window.open("/nagadetail?iteminfo=".concat(JSON.stringify(item)));
      }
    }, external_react_default.a.createElement("div", {
      className: "item-top"
    }, external_react_default.a.createElement("img", {
      src: item.icon,
      alt: ""
    })), external_react_default.a.createElement("div", {
      className: "item-bottom"
    }, external_react_default.a.createElement("div", {
      className: "item-bottom-title"
    }, item.name), external_react_default.a.createElement("div", {
      className: "item-bottom-desc"
    }, item.desc), external_react_default.a.createElement(ShareList["a" /* default */], null)));
  })));
});
// EXTERNAL MODULE: ./assets/containers/NaGa/ComingSoon/index.js
var ComingSoon = __webpack_require__(226);

// CONCATENATED MODULE: ./assets/containers/NaGa/index.js





 // import ItemCon from './ItemCon'


/* harmony default export */ var NaGa = __webpack_exports__["default"] = (function () {
  // const [type, setType] = useState(0)
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      comingfg = _useState2[0],
      setComingfg = _useState2[1];

  return external_react_default.a.createElement("div", {
    className: "naga"
  }, external_react_default.a.createElement(Header["a" /* default */], {
    comingFn: function comingFn(fg) {
      setComingfg(fg);
    }
  }), external_react_default.a.createElement("div", {
    className: "naga-con"
  }, external_react_default.a.createElement(LeftCon["a" /* default */], null), external_react_default.a.createElement(RightCon, null)), comingfg && external_react_default.a.createElement(ComingSoon["a" /* default */], {
    closeFn: function closeFn() {
      setComingfg(false);
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gime1-a58cec36.jpeg";

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "game2-f0f4d693.jpeg";

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "game3-e7f126d1.jpeg";

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gamen4-72194d59.jpeg";

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gamen5-9b3312d3.jpeg";

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_wall_fis_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);
/* harmony import */ var _public_img_wall_fis_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_wall_fis_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_wall_secon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(205);
/* harmony import */ var _public_img_wall_secon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_wall_secon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_wall_three_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(206);
/* harmony import */ var _public_img_wall_three_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_wall_three_png__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var closeFn = props.closeFn,
      soonFn = props.soonFn;
  var walletlist = [{
    icon: _public_img_wall_fis_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    name: 'Martian Wallet',
    link: ''
  }, {
    icon: _public_img_wall_secon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    name: 'Fewcha Wallet',
    link: ''
  }, {
    icon: _public_img_wall_three_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: 'Pontem Wallet',
    link: ''
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Connect your wallet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wallet-list"
  }, walletlist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wallet-list-item",
      key: index,
      onClick: function onClick() {
        if (item.link === '') {
          soonFn();
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wallet-list-item-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.icon,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wallet-list-item-right"
    }, item.name));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-popup",
    onClick: function onClick() {
      closeFn();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }))));
});

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

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var closeFn = props.closeFn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "coming-soon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "coming-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Coming soon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-popup",
    onClick: function onClick() {
      closeFn();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_close_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }))));
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

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(196);
/* harmony import */ var _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NaGa_WalletPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(224);
/* harmony import */ var _components_NaGa_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(225);



 // import connectbtn from '../../../public/img/connect.png'
// import searchimg from '../../../public/img/search_naga.png'




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var comingFn = props.comingFn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      walletfg = _useState2[0],
      setWalletfg = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "naga-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header-logo",
    onClick: function onClick() {
      window.open('/naga');
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_nagalogo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NaGa_Search__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-btn",
    onClick: function onClick() {
      setWalletfg(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_wallet_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Connect Wallet")), walletfg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NaGa_WalletPage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    closeFn: function closeFn() {
      setWalletfg(false);
    },
    soonFn: function soonFn() {
      comingFn(true);
    }
  }));
});

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_allgame_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(207);
/* harmony import */ var _public_img_allgame_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_allgame_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_rocket_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(208);
/* harmony import */ var _public_img_rocket_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_rocket_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_game_h_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(209);
/* harmony import */ var _public_img_game_h_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_game_h_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(198);
/* harmony import */ var _public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_share_share1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(250);
/* harmony import */ var _public_img_share_share1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_share_share1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_share_share2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(251);
/* harmony import */ var _public_img_share_share2_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_share_share2_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_share_share3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(252);
/* harmony import */ var _public_img_share_share3_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_share_share3_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(215);
/* harmony import */ var _public_img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(216);
/* harmony import */ var _public_img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(217);
/* harmony import */ var _public_img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(218);
/* harmony import */ var _public_img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(219);
/* harmony import */ var _public_img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ComingSoon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(226);

















/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  // const { righttypeFn } = props
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      littleflag = _useState2[0],
      setLittleflag = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      soonflg = _useState4[0],
      setSoonflg = _useState4[1];

  var leftlist = [{
    title: 'ALL GAME',
    icon: _public_img_allgame_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    list: [],
    soon: false,
    type: 0
  }, {
    title: 'MINTS',
    icon: _public_img_rocket_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    list: [],
    soon: true,
    type: 1
  }, {
    title: 'PLAY NOW',
    icon: _public_img_game_h_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    list: [{
      title: 'EFAS',
      icons: _public_img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_11___default.a,
      link: ''
    }, {
      title: 'Million on Mars',
      icons: _public_img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_12___default.a,
      link: ''
    }, {
      title: 'ev.io',
      icons: _public_img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_13___default.a,
      link: ''
    }, {
      title: 'Tiny Colony',
      icons: _public_img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_14___default.a,
      link: ''
    }, {
      title: 'MetaOps',
      icons: _public_img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_15___default.a,
      link: ''
    }],
    soon: true,
    type: 2
  }];
  var sharelist = [{
    icon: _public_img_share_twitter_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    link: ''
  }, {
    icon: _public_img_share_share1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    link: ''
  }, {
    icon: _public_img_share_share2_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    link: ''
  }, {
    icon: _public_img_share_share3_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    link: ''
  }];
  var selectItem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (info) {
    if (!info.soon) {
      // righttypeFn(info.type)
      window.open('/naga');
    }

    if (info.list.length > 0) {
      setLittleflag(!littleflag);
    } else {
      setLittleflag(false);
    }
  }, [littleflag]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "left-con"
  }, leftlist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "left-con-item",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item-header",
      onClick: function onClick() {
        selectItem(item);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item-img"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.icon,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item-title"
    }, item.title, item.soon && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item-soon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _public_img_naga_soon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: ""
    })))), item.list.length > 0 && item.list.map(function (itm, idx) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-list",
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-list-item",
        onClick: function onClick() {
          setSoonflg(true);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list-item-img"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: itm.icons,
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list-item-text"
      }, itm.title)));
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "left-con-share"
  }, sharelist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "share-img",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.icon,
      alt: ""
    }));
  })), soonflg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ComingSoon__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
    closeFn: function closeFn() {
      setSoonflg(false);
    }
  }));
});

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "share1-17e816c9.png";

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "share2-a31e474d.png";

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "share3-705c38f1.png";

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameList; });
/* unused harmony export nagaBannerlist */
/* harmony import */ var _img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);
/* harmony import */ var _img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(217);
/* harmony import */ var _img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(218);
/* harmony import */ var _img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(219);
/* harmony import */ var _img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_nagaimg_gamen6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(254);
/* harmony import */ var _img_nagaimg_gamen6_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_gamen6_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_nagaimg_Plasmaverse_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(255);
/* harmony import */ var _img_nagaimg_Plasmaverse_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_Plasmaverse_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_nagaimg_Keple_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(256);
/* harmony import */ var _img_nagaimg_Keple_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_Keple_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_nagaimg_GalaxyBlitz_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(257);
/* harmony import */ var _img_nagaimg_GalaxyBlitz_jpeg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_GalaxyBlitz_jpeg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_nagaimg_banner4_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(258);
/* harmony import */ var _img_nagaimg_banner4_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_banner4_jpeg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_nagaimg_bannern5_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(259);
/* harmony import */ var _img_nagaimg_bannern5_jpeg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_bannern5_jpeg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_nagaimg_bannern6_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(260);
/* harmony import */ var _img_nagaimg_bannern6_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_nagaimg_bannern6_jpeg__WEBPACK_IMPORTED_MODULE_11__);












var gameList = [{
  name: 'Plasmaverse',
  icon: _img_nagaimg_gime1_jpeg__WEBPACK_IMPORTED_MODULE_0___default.a,
  bgimg: _img_nagaimg_Plasmaverse_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  desc: 'Multi-Phase ARPG Game on Metaverse',
  type: 0,
  twitter: 'https://twitter.com/plasmaversexyz',
  website: 'https://www.plasmaverse.xyz'
}, {
  name: 'Keple',
  icon: _img_nagaimg_game2_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a,
  bgimg: _img_nagaimg_Keple_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  desc: 'Kepler Gaming NFT takes you to take over the Kepler galaxy in a parallel universe',
  type: 1,
  twitter: 'https://twitter.com/KeplerHomes',
  website: 'https://kepler.homes'
}, {
  name: 'Galaxy Blitz',
  icon: _img_nagaimg_game3_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a,
  bgimg: _img_nagaimg_GalaxyBlitz_jpeg__WEBPACK_IMPORTED_MODULE_8___default.a,
  desc: 'A PlayToEarn strategy NFT game where you lead the descendants of humanity to forge a new empire!',
  type: 2,
  twitter: 'https://twitter.com/GalaxyBlitzGame',
  website: 'https://www.galaxyblitz.world'
}, {
  name: 'CODM',
  icon: _img_nagaimg_gamen4_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
  bgimg: _img_nagaimg_banner4_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
  desc: 'CODM warriors building a gaming empire on @aptoslabs',
  type: 3,
  twitter: 'https://twitter.com/AptosCODM',
  website: ''
}, {
  name: 'Aptos Yoka',
  icon: _img_nagaimg_gamen5_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a,
  bgimg: _img_nagaimg_bannern5_jpeg__WEBPACK_IMPORTED_MODULE_10___default.a,
  desc: 'AptosYoka is a community-driven Web3 Social GameFi platform that empowers users by rewarding them for their engagement',
  type: 4,
  twitter: 'https://twitter.com/Aptos_Yoka',
  website: ''
}, {
  name: 'Sui Capys',
  icon: _img_nagaimg_gamen6_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  bgimg: _img_nagaimg_bannern6_jpeg__WEBPACK_IMPORTED_MODULE_11___default.a,
  desc: 'A fun new prototype that serves as a dev preview (not an airdrop!) and demonstrates key capabilities of Sui',
  type: 5,
  twitter: 'https://twitter.com/SuiNetwork',
  website: ''
}];
var nagaBannerlist = [{
  name: 'Plasmaverse',
  bgimg: _img_nagaimg_Plasmaverse_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  type: 0
}, {
  name: 'Keple',
  bgimg: _img_nagaimg_Keple_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  type: 1
}, {
  name: 'Galaxy Blitz',
  bgimg: _img_nagaimg_GalaxyBlitz_jpeg__WEBPACK_IMPORTED_MODULE_8___default.a,
  type: 2
}, {
  name: 'CODM',
  bgimg: _img_nagaimg_banner4_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
  type: 3
}, {
  name: 'Aptos Yoka',
  bgimg: _img_nagaimg_bannern5_jpeg__WEBPACK_IMPORTED_MODULE_10___default.a,
  type: 4
}];
/* unused harmony default export */ var _unused_webpack_default_export = ({
  gameList: gameList,
  nagaBannerlist: nagaBannerlist
});

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gamen6-2a42b54a.png";

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Plasmaverse-9550b057.png";

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Keple-6b362b78.png";

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "GalaxyBlitz-805a58a3.jpeg";

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner4-961ff59d.jpeg";

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bannern5-4e355546.jpeg";

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bannern6-379187d4.jpeg";

/***/ })

};;
//# sourceMappingURL=containers-NaGa.js.map