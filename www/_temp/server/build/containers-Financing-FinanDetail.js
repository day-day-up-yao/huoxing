require("source-map-support").install();
exports.ids = [6];
exports.modules = {

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(167);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./assets/public/js/other.js
var other = __webpack_require__(210);

// EXTERNAL MODULE: ./assets/public/img/timeicon.png
var timeicon = __webpack_require__(269);
var timeicon_default = /*#__PURE__*/__webpack_require__.n(timeicon);

// CONCATENATED MODULE: ./assets/containers/Financing/FinanDetail/FinanceLeft/index.js





/* harmony default export */ var FinanceLeft = (function (props) {
  var detail = props.detail;
  var categorylist = detail.category.split(',');
  var catestyle = ['', 'one-type-item', 'two-type-item'];
  return external_react_default.a.createElement("div", {
    className: "financedetail-left"
  }, external_react_default.a.createElement("div", {
    className: "financedetail-left-top"
  }, external_react_default.a.createElement("div", {
    className: "lefttop-header"
  }, external_react_default.a.createElement("img", {
    src: detail.logoUrl,
    alt: ""
  }), external_react_default.a.createElement("div", {
    className: "lefttop-header-right"
  }, external_react_default.a.createElement("h3", null, detail.projectName), external_react_default.a.createElement("div", {
    className: "lefttop-header-right-type"
  }, categorylist.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "header-type-item ".concat(catestyle[index]),
      key: index
    }, item);
  })))), external_react_default.a.createElement("div", {
    className: "lefttop-desc"
  }, detail.brief)), external_react_default.a.createElement("div", {
    className: "financedetail-left-infolist"
  }, external_react_default.a.createElement("h3", null, "\u878D\u8D44\u4FE1\u606F"), detail.investRaisedList.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "infolist-item",
      key: index
    }, external_react_default.a.createElement("div", {
      className: "infolist-item-left"
    }, external_react_default.a.createElement("div", {
      className: "infolist-item-left-time"
    }, external_react_default.a.createElement("img", {
      src: timeicon_default.a,
      alt: ""
    }), external_react_default.a.createElement("span", null, "\u65E5\u671F\uFF1A", external_moment_default()(item.investDate).format('YYYY年MM月DD日'))), external_react_default.a.createElement("div", {
      className: "infolist-item-left-money"
    }, external_react_default.a.createElement("h4", null, "\u878D\u8D44\u91D1\u989D"), external_react_default.a.createElement("div", {
      className: "money-amount"
    }, "$", Object(other["a" /* formattingNum */])(item.amount))), external_react_default.a.createElement("a", {
      className: "infolist-item-left-other",
      href: item.reportUrl,
      target: "_blank"
    }, "\u76F8\u5173\u62A5\u9053")), external_react_default.a.createElement("div", {
      className: "infolist-item-right"
    }, external_react_default.a.createElement("h4", null, "\u6295\u8D44\u673A\u6784"), external_react_default.a.createElement("div", {
      className: "infolist-item-right-prolist"
    }, item.orgList.map(function (itm, idx) {
      return external_react_default.a.createElement("div", {
        className: "prolist-item",
        key: idx
      }, external_react_default.a.createElement("img", {
        src: itm.logoUrl,
        alt: ""
      }));
    }))));
  })));
});
// EXTERNAL MODULE: ./assets/public/img/share/twitterico.png
var twitterico = __webpack_require__(270);
var twitterico_default = /*#__PURE__*/__webpack_require__.n(twitterico);

// EXTERNAL MODULE: ./assets/public/img/share/discordico.png
var discordico = __webpack_require__(271);
var discordico_default = /*#__PURE__*/__webpack_require__.n(discordico);

// EXTERNAL MODULE: ./assets/public/img/share/mediumico.png
var mediumico = __webpack_require__(272);
var mediumico_default = /*#__PURE__*/__webpack_require__.n(mediumico);

// CONCATENATED MODULE: ./assets/containers/Financing/FinanDetail/FinanceRight/index.js





/* harmony default export */ var FinanceRight = (function (props) {
  var detail = props.detail;
  var communitlist = [{
    name: 'Twitter',
    icon: twitterico_default.a,
    link: detail.twitter
  }, {
    name: 'Discord',
    icon: discordico_default.a,
    link: detail.discord
  }, {
    name: 'Medium',
    icon: mediumico_default.a,
    link: detail.medium
  }];
  return external_react_default.a.createElement("div", {
    className: "financedetail-right"
  }, external_react_default.a.createElement("div", {
    className: "detail-right-communication"
  }, external_react_default.a.createElement("h3", null, "\u5B98\u7F51"), external_react_default.a.createElement("div", {
    className: "communication-list"
  }, external_react_default.a.createElement("a", {
    className: "communication-list-item"
  }, external_react_default.a.createElement("span", null, detail.website)))), external_react_default.a.createElement("div", {
    className: "detail-right-communication"
  }, external_react_default.a.createElement("h3", null, "\u793E\u4EA4\u5A92\u4F53"), external_react_default.a.createElement("div", {
    className: "communication-list"
  }, communitlist.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      className: "communication-list-item",
      key: index,
      href: item.link,
      target: "_blank"
    }, external_react_default.a.createElement("img", {
      src: item.icon,
      alt: ""
    }), external_react_default.a.createElement("span", null, item.name));
  }))));
});
// CONCATENATED MODULE: ./assets/containers/Financing/FinanDetail/index.js





/* harmony default export */ var FinanDetail = __webpack_exports__["default"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      productdetail: state.finance.pruductDetail
    };
  }),
      productdetail = _useSelector.productdetail;

  return external_react_default.a.createElement("div", {
    className: "financedetail"
  }, external_react_default.a.createElement(FinanceLeft, {
    detail: productdetail
  }), external_react_default.a.createElement(FinanceRight, {
    detail: productdetail
  }));
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nagacomlist */
/* unused harmony export nagacom */
/* unused harmony export numberDecimal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formattingNum; });
/* unused harmony export formattingSpecialNum */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @desc 是否是 naga.one || naga.is
 */

var nagacomlist = ['www.naga.one', 'www.naga.is'];
var nagacom = function nagacom(req) {
  return req && typeof window === 'undefined' ? nagacomlist.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1 : nagacomlist.indexOf(window.location.hostname) > -1;
};
/**
 * @desc 普通数值显示保留几位小数
 * @Params (value, decimalDigits, params)
 * @method numberDecimal(value, decimalDigits, params)
 */

function numberDecimal(value) {
  var decimalDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var params = arguments.length > 2 ? arguments[2] : undefined;
  var CloneBn = bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a.clone();
  CloneBn.config({
    DECIMAL_PLACES: decimalDigits,
    ROUNDING_MODE: params && params.roundUp ? bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a.ROUND_UP : bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a.ROUND_DOWN,
    EXPONENTIAL_AT: 1e9
  });
  var val = typeof value === 'function' ? value(CloneBn) : value;

  if (params && params.toFixed) {
    return new CloneBn(val).toFixed(decimalDigits);
  }

  return new CloneBn(val).toString(10);
}
/**
 * @desc 数字百万M千K分割
 * @param num
 * @param isman // 小于10整数
 * @param isFixed // 小数位数 默认2位 小于10用
 * @returns {string}
 */

var formattingNum = function formattingNum(num, isman, isFixed) {
  if (!num || num === '') return '--';
  var newnum = '';

  if (Number(num) >= 1000000000) {
    newnum = "".concat(numberDecimal(Number(Number(num) / 1000000000), 1), "B");
    return newnum;
  }

  if (Number(num) >= 1000000) {
    newnum = "".concat(numberDecimal(Number(Number(num) / 1000000), 1), "M");
    return newnum;
  }

  if (Number(num) >= 1000) {
    newnum = "".concat(numberDecimal(Number(Number(num) / 1000), 1), "K");
    return newnum;
  }

  if (!isman) {
    newnum = Number(num) < 10 ? isFixed ? numberDecimal(Number(num), isFixed) : numberDecimal(Number(num), 2) : numberDecimal(Number(num), 1);
    return Number(newnum).toString();
  }

  if (isman) {
    return num.toString();
  }

  return '--';
};
/**
 * @desc 数字百万M千K分割————特殊规则   0显示，-1显示 - -
 * @param num
 * @param isman // 小于10整数
 * @param isFixed // 小数位数 默认2位 小于10用 不四舍五入
 * @returns {string}
 */

var formattingSpecialNum = function formattingSpecialNum(num, isman, isFixed) {
  if (typeof num === 'undefined' || num === '') return '--';
  if (Number(num) < 0) return '--';
  if (Number(num) === 0) return '0';
  var newnum = '';

  if (Number(num) >= 1000000000) {
    newnum = "".concat(numberDecimal(Number(Number(num) / 1000000000), 1), "B");
    return newnum;
  }

  if (Number(num) >= 1000000) {
    newnum = "".concat(numberDecimal(Number(Number(num) / 1000000), 1), "M");
    return newnum;
  }

  if (Number(num) >= 1000) {
    newnum = "".concat(numberDecimal(Number(Number(num) / 1000), 1), "K");
    return newnum;
  }

  if (!isman) {
    newnum = Number(num) < 1000 ? isFixed ? numberDecimal(Number(num), isFixed) : numberDecimal(Number(num), 2) : numberDecimal(Number(num), 1);
    return Number(newnum).toString();
  }

  if (isman) {
    return num.toString();
  }

  return '--';
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  nagacom: nagacom,
  formattingNum: formattingNum
});

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "timeicon-30a50f7e.png";

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "twitterico-14a86350.png";

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "discordico-6594376f.png";

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mediumico-f8de26ce.png";

/***/ })

};;
//# sourceMappingURL=containers-Financing-FinanDetail.js.map