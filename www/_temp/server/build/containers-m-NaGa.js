require("source-map-support").install();
exports.ids = [41];
exports.modules = {

/***/ 162:
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

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// EXTERNAL MODULE: ./assets/components/NaGa/ShareList/index.js
var ShareList = __webpack_require__(227);

// EXTERNAL MODULE: ./assets/public/js/imgDefaut.js
var imgDefaut = __webpack_require__(253);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(166);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./assets/containers-m/NaGa/FirstPage/index.js






external_swiper_default.a.use([external_swiper_["Autoplay"], external_swiper_["Navigation"], external_swiper_["Pagination"]]);
/* harmony default export */ var FirstPage = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "page-center"
  }, external_react_default.a.createElement("div", {
    className: "page-banner"
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "naga-item-banner-m",
    preventClicks: false,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    }
  }, imgDefaut["a" /* gameList */].map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      key: index
    }, external_react_default.a.createElement("div", {
      className: "page-banner-m"
    }, external_react_default.a.createElement("div", {
      className: "page-banner-m-item",
      style: {
        backgroundImage: "url(".concat(item.bgimg, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    }, external_react_default.a.createElement("div", {
      className: "banner-m-info"
    }, external_react_default.a.createElement("h3", null, item.name)), external_react_default.a.createElement("div", {
      className: "banner-m-bg"
    })), external_react_default.a.createElement("div", {
      className: "banner-m-other"
    }, external_react_default.a.createElement(ShareList["a" /* default */], {
      link: item.twitter
    }), external_react_default.a.createElement("div", {
      className: "banner-m-info-desc"
    }, item.desc))));
  }))), external_react_default.a.createElement("div", {
    className: "first-page"
  }, imgDefaut["a" /* gameList */].concat(imgDefaut["a" /* gameList */]).concat(imgDefaut["a" /* gameList */]).map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "first-page-item",
      key: index,
      onClick: function onClick() {
        window.location.href = "/nagadetail?iteminfo=".concat(JSON.stringify(item));
      }
    }, external_react_default.a.createElement("div", {
      className: "first-page-item-img"
    }, external_react_default.a.createElement("img", {
      src: item.icon,
      alt: ""
    })), external_react_default.a.createElement("div", {
      className: "first-page-item-con"
    }, external_react_default.a.createElement("h2", null, item.name), external_react_default.a.createElement(ShareList["a" /* default */], null)));
  })));
});
// EXTERNAL MODULE: ./assets/containers-m/NaGa/PullDown/index.js
var PullDown = __webpack_require__(427);

// EXTERNAL MODULE: ./assets/components/NaGa/WalletPage/index.js
var WalletPage = __webpack_require__(224);

// CONCATENATED MODULE: ./assets/containers-m/NaGa/index.js







/* harmony default export */ var NaGa = __webpack_exports__["default"] = (function () {
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
  }), external_react_default.a.createElement(FirstPage, null), downfg && external_react_default.a.createElement(PullDown["a" /* default */], {
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
  }), wallerfg && external_react_default.a.createElement(WalletPage["a" /* default */], {
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

/***/ })

};;
//# sourceMappingURL=containers-m-NaGa.js.map