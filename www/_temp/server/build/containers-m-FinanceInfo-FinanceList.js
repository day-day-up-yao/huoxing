require("source-map-support").install();
exports.ids = [32];
exports.modules = {

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

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

// EXTERNAL MODULE: external "rc-calendar/lib/RangeCalendar"
var RangeCalendar_ = __webpack_require__(178);
var RangeCalendar_default = /*#__PURE__*/__webpack_require__.n(RangeCalendar_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(167);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "moment/locale/zh-cn"
var zh_cn_ = __webpack_require__(174);

// EXTERNAL MODULE: external "rc-calendar/lib/locale/zh_CN"
var zh_CN_ = __webpack_require__(175);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: ./assets/public/img/finance/screenicon.png
var screenicon = __webpack_require__(516);
var screenicon_default = /*#__PURE__*/__webpack_require__.n(screenicon);

// EXTERNAL MODULE: ./assets/public/img/finance/point_down_w.png
var point_down_w = __webpack_require__(517);
var point_down_w_default = /*#__PURE__*/__webpack_require__.n(point_down_w);

// EXTERNAL MODULE: ./assets/public/img/finance/notselect_icon.png
var notselect_icon = __webpack_require__(518);
var notselect_icon_default = /*#__PURE__*/__webpack_require__.n(notselect_icon);

// EXTERNAL MODULE: ./assets/public/img/finance/selecting_icon.png
var selecting_icon = __webpack_require__(519);
var selecting_icon_default = /*#__PURE__*/__webpack_require__.n(selecting_icon);

// CONCATENATED MODULE: ./assets/containers-m/FinanceInfo/FinanceList/FinanHeader/index.js


 // import { useDispatch } from 'react-redux'








 // import { getFinancelist } from '../../../../redux/actions/finance'
// import Toast from '../../../../../_multiappsharing/components/Toast'

/* harmony default export */ var FinanHeader = (function (props) {
  var catelist = props.catelist,
      getPruductlist = props.getPruductlist; // console.log(page)
  // const dispatch = useDispatch()

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      screenflg = _useState2[0],
      setScreenflg = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(-1),
      _useState4 = slicedToArray_default()(_useState3, 2),
      satetype = _useState4[0],
      setSatetype = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      starttime = _useState6[0],
      setStarttime = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(''),
      _useState8 = slicedToArray_default()(_useState7, 2),
      endtime = _useState8[0],
      setEndtime = _useState8[1];

  var _useState9 = Object(external_react_["useState"])('投资时间（全部）'),
      _useState10 = slicedToArray_default()(_useState9, 2),
      selecttime = _useState10[0],
      setSelecttime = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(0),
      _useState12 = slicedToArray_default()(_useState11, 2),
      minmoney = _useState12[0],
      setMinmoney = _useState12[1];

  var _useState13 = Object(external_react_["useState"])('max'),
      _useState14 = slicedToArray_default()(_useState13, 2),
      maxmoney = _useState14[0],
      setMaxmoney = _useState14[1];

  var _useState15 = Object(external_react_["useState"])(''),
      _useState16 = slicedToArray_default()(_useState15, 2),
      producttype = _useState16[0],
      setProducttype = _useState16[1];

  var _useState17 = Object(external_react_["useState"])('融资金额'),
      _useState18 = slicedToArray_default()(_useState17, 2),
      quantity = _useState18[0],
      setQuantity = _useState18[1];

  var _useState19 = Object(external_react_["useState"])(-1),
      _useState20 = slicedToArray_default()(_useState19, 2),
      selectType = _useState20[0],
      setSelectType = _useState20[1]; // const [searchname, setSearchname] = useState('')


  var selectamount = ['< $1M', '$1M - 5M', '$5M - 10M', '$10M >']; // 筛选时间列表

  var nowTime = new Date();
  var stimelist = [{
    name: '最近7日',
    stime: nowTime.getTime() - 3600 * 1000 * 24 * 7,
    etime: nowTime.getTime()
  }, {
    name: '最近30日',
    stime: nowTime.getTime() - 3600 * 1000 * 24 * 30,
    etime: nowTime.getTime()
  }, {
    name: '本月',
    stime: new Date(nowTime.getFullYear(), nowTime.getMonth(), 1).getTime(),
    etime: new Date(nowTime.getFullYear(), nowTime.getMonth() + 1, 0).getTime() + 24 * 60 * 60 * 1000 - 1
  }, {
    name: '上月',
    stime: new Date(nowTime.getFullYear(), nowTime.getMonth() - 1, 1).getTime(),
    etime: new Date(nowTime.getFullYear(), nowTime.getMonth(), 0).getTime() + 24 * 60 * 60 * 1000 - 1
  }, {
    name: '今年',
    stime: new Date(nowTime.getFullYear(), 0).getTime(),
    etime: new Date(nowTime.getFullYear(), 11, 31).getTime() + 24 * 60 * 60 * 1000 - 1
  }, {
    name: '全部',
    stime: '',
    etime: ''
  }]; // 确认通过价格筛选

  var amountsureFn = Object(external_react_["useCallback"])(function () {
    if (minmoney !== 'min' && maxmoney !== 'max') {
      setQuantity("$".concat(minmoney, "M - ").concat(maxmoney, "M"));
    }

    getFinance();
    setSelectType(-1);
    setScreenflg(false);
  }, [minmoney, maxmoney]);
  var screeninglist = [{
    name: selecttime,
    center: external_react_default.a.createElement("div", {
      className: "acreening-item-down"
    }, external_react_default.a.createElement("div", {
      className: "select-m-time"
    }, external_react_default.a.createElement("div", {
      className: "select-m-time-top"
    }, stimelist.map(function (item, index) {
      return external_react_default.a.createElement("div", {
        className: "m-time-top-item",
        key: index,
        onClick: function onClick() {
          if (item.stime === '' && item.etime === '') {
            setStarttime('');
            setEndtime('');
            setSelecttime('选择日期');
          } else {
            setStarttime(parseInt(item.stime / 1000));
            setEndtime(parseInt(item.etime / 1000));
            setSelecttime(external_moment_default()(item.stime).format('YYYY/MM/DD') + ' - ' + external_moment_default()(item.etime).format('YYYY/MM/DD'));
          }
        }
      }, item.name);
    })), external_react_default.a.createElement("div", {
      className: "select-m-time-bottom"
    }, external_react_default.a.createElement(RangeCalendar_default.a, {
      showDateInput: false,
      onSelect: function onSelect(e) {
        setStarttime(new Date(external_moment_default()(e[0]._d).format('YYYY/MM/DD')).getTime() / 1000);
        setEndtime(new Date(external_moment_default()(e[1]._d).format('YYYY/MM/DD')).getTime() / 1000);
        setSelecttime(external_moment_default()(e[0]._d).format('YYYY/MM/DD') + ' - ' + external_moment_default()(e[1]._d).format('YYYY/MM/DD'));
      },
      locale: zh_CN_default.a
    })), external_react_default.a.createElement("div", {
      className: "m-item-btn"
    }, external_react_default.a.createElement("div", {
      className: "m-item-btn-item",
      onClick: function onClick() {
        setSelectType(-1);
      }
    }, "\u53D6\u6D88"), external_react_default.a.createElement("div", {
      className: "m-item-btn-item",
      onClick: function onClick() {
        getFinance();
        setSelectType(-1);
        setScreenflg(false);
      }
    }, "\u786E\u5B9A")))),
    flage: false,
    type: 0
  }, {
    name: quantity,
    center: external_react_default.a.createElement("div", {
      className: "acreening-item-down"
    }, external_react_default.a.createElement("div", {
      className: "select-m-amount"
    }, external_react_default.a.createElement("div", {
      className: "m-amount-top"
    }, external_react_default.a.createElement("div", {
      className: "white-amount"
    }, external_react_default.a.createElement("h4", null, "\u6700\u5C0F"), external_react_default.a.createElement("div", {
      className: "white-amount-b"
    }, external_react_default.a.createElement("input", {
      type: "text",
      value: minmoney,
      onChange: function onChange(e) {
        setMinmoney(e.target.value);
      }
    }), external_react_default.a.createElement("span", null, "M"))), external_react_default.a.createElement("div", {
      className: "white-amount"
    }, external_react_default.a.createElement("h4", null, "\u6700\u5927"), external_react_default.a.createElement("div", {
      className: "white-amount-b"
    }, external_react_default.a.createElement("input", {
      type: "text",
      value: maxmoney,
      onChange: function onChange(e) {
        setMinmoney(e.target.value);
      }
    }), external_react_default.a.createElement("span", null, "M")))), external_react_default.a.createElement("div", {
      className: "m-amount-bottom"
    }, selectamount.map(function (itm, indx) {
      return external_react_default.a.createElement("div", {
        className: "m-amount-bottom-item",
        key: indx,
        onClick: function onClick() {
          selectMamount(indx);
        }
      }, itm);
    })), external_react_default.a.createElement("div", {
      className: "m-amount-btn"
    }, external_react_default.a.createElement("div", {
      className: "m-amount-btn-item",
      onClick: function onClick() {
        setSelectType(-1);
      }
    }, "\u53D6\u6D88"), external_react_default.a.createElement("div", {
      className: "m-amount-btn-item",
      onClick: function onClick() {
        amountsureFn();
      }
    }, "\u786E\u5B9A")))),
    flage: false,
    type: 1
  }, {
    name: selecttime,
    center: external_react_default.a.createElement("div", {
      className: "acreening-item-down"
    }, external_react_default.a.createElement("div", {
      className: "categary-list"
    }, external_react_default.a.createElement("div", {
      className: "categary-list-item",
      onClick: function onClick() {
        setSatetype(-1);
      }
    }, external_react_default.a.createElement("span", null, "\u9879\u76EE\u7C7B\u578B\uFF08\u5168\u90E8\uFF09"), external_react_default.a.createElement("img", {
      src: satetype === -1 ? selecting_icon_default.a : notselect_icon_default.a,
      alt: ""
    })), catelist.map(function (item, index) {
      return external_react_default.a.createElement("div", {
        className: "categary-list-item",
        key: index,
        onClick: function onClick() {
          setScreenflg(false);
          setSelectType(-1);
          getFinance(item);
          setSatetype(index);
        }
      }, external_react_default.a.createElement("span", null, item), external_react_default.a.createElement("img", {
        src: satetype === index ? selecting_icon_default.a : notselect_icon_default.a,
        alt: ""
      }));
    }))),
    flage: false,
    type: 2
  }]; // 获取融资列表

  var getFinance = Object(external_react_["useCallback"])(function (page, type) {
    var catetype = '';

    if (type) {
      catetype = type;
    }

    setProducttype(catetype);
    var params = {
      pageSize: 20,
      category: catetype,
      projectName: '',
      minInvestDate: starttime,
      maxInvestDate: endtime,
      minAmount: minmoney === 'min' ? 0 : Number(minmoney) * 1000000,
      maxAmount: maxmoney === 'max' ? 2100000000 : Number(maxmoney) * 1000000
    };
    getPruductlist(params); // dispatch(getFinancelist(params)).then((res) => {
    //     if (res.code === 1) {
    //         getPruductlist(res.obj)
    //     } else {
    //         Toast.info(res.msg)
    //     }
    // })
  }, [minmoney, maxmoney, producttype, starttime, endtime]); // 选择筛选价格

  var selectMamount = Object(external_react_["useCallback"])(function (index) {
    if (index === 0) {
      setMinmoney('min');
      setMaxmoney('1');
      setQuantity('$min - 1M');
    }

    if (index === 1) {
      setMinmoney('1');
      setMaxmoney('5');
      setQuantity('$1M - 5M');
    }

    if (index === 2) {
      setMinmoney('5');
      setMaxmoney('10');
      setQuantity('$5M - 10M');
    }

    if (index === 3) {
      setMinmoney('10');
      setMaxmoney('max');
      setQuantity('$10M - max');
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "finan-m-header"
  }, external_react_default.a.createElement("div", {
    className: "finan-header-top"
  }, external_react_default.a.createElement("h3", null, "\u6700\u65B0\u878D\u8D44\u4E8B\u4EF6"), external_react_default.a.createElement("div", {
    className: "fin-screening",
    onClick: function onClick() {
      setScreenflg(!screenflg);
    }
  }, external_react_default.a.createElement("img", {
    src: screenicon_default.a,
    alt: ""
  }))), screenflg && external_react_default.a.createElement("div", {
    className: "screening-info"
  }, screeninglist.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "screening-info-item",
      key: index
    }, external_react_default.a.createElement("div", {
      className: "acreening-item-con",
      onClick: function onClick() {
        if (selectType === index) {
          setSelectType(-1);
        } else {
          setSelectType(index);
        }
      }
    }, external_react_default.a.createElement("span", null, item.name), external_react_default.a.createElement("img", {
      src: point_down_w_default.a,
      alt: ""
    })), selectType === index && item.center);
  })));
});
// EXTERNAL MODULE: ./assets/public/js/other.js
var other = __webpack_require__(210);

// CONCATENATED MODULE: ./assets/containers-m/FinanceInfo/FinanceList/FinanceCenter/index.js




/* harmony default export */ var FinanceCenter = (function (props) {
  var productList = props.productList;
  return external_react_default.a.createElement("div", {
    className: "fincenter-m-center"
  }, productList.inforList.map(function (item, index) {
    var liststring = [];
    item.orgList.map(function (itm) {
      liststring.push(itm.orgName);
    });
    return external_react_default.a.createElement("a", {
      className: "finlist-m-item",
      key: index,
      href: "/financedetail/".concat(item.projectId),
      target: "_blank"
    }, external_react_default.a.createElement("div", {
      className: "finlist-item-top"
    }, external_react_default.a.createElement("img", {
      src: item.projectLogoUrl,
      alt: ""
    }), external_react_default.a.createElement("span", null, item.projectName)), external_react_default.a.createElement("div", {
      className: "finlist-item-bottom"
    }, external_react_default.a.createElement("div", {
      className: "finlist-item-bottom-left"
    }, external_react_default.a.createElement("div", {
      className: "bottom-left-one"
    }, external_react_default.a.createElement("h4", null, "\u878D\u8D44\u91D1\u989D"), external_react_default.a.createElement("div", {
      className: "left-one-money"
    }, "$", Object(other["a" /* formattingNum */])(item.amount))), external_react_default.a.createElement("div", {
      className: "bottom-left-two"
    }, external_react_default.a.createElement("h4", null, "\u878D\u8D44\u65F6\u95F4"), external_react_default.a.createElement("div", {
      className: "left-two-time"
    }, external_moment_default()(item.investDate).format('YYYY年MM月DD日')))), external_react_default.a.createElement("div", {
      className: "finlist-item-bottom-right"
    }, external_react_default.a.createElement("h4", null, "\u6295\u8D44\u673A\u6784"), external_react_default.a.createElement("div", {
      className: "bottom-right-instit"
    }, liststring.join(', ')))));
  }));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Pagination/index.js
var Pagination = __webpack_require__(268);

// EXTERNAL MODULE: ./assets/public/img/prepage.png
var prepage = __webpack_require__(266);
var prepage_default = /*#__PURE__*/__webpack_require__.n(prepage);

// EXTERNAL MODULE: ./assets/public/img/nextpage.png
var nextpage = __webpack_require__(267);
var nextpage_default = /*#__PURE__*/__webpack_require__.n(nextpage);

// EXTERNAL MODULE: ./assets/redux/actions/finance.js + 1 modules
var finance = __webpack_require__(24);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// CONCATENATED MODULE: ./assets/containers-m/FinanceInfo/FinanceList/index.js












/* harmony default export */ var FinanceList = __webpack_exports__["default"] = (function () {
  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      financeList: state.finance.financeList,
      productTypelist: state.finance.productTypelist
    };
  }),
      financeList = _useSelector.financeList,
      productTypelist = _useSelector.productTypelist;

  var _useState = Object(external_react_["useState"])(financeList),
      _useState2 = slicedToArray_default()(_useState, 2),
      productlist = _useState2[0],
      setProductlist = _useState2[1];

  var _useState3 = Object(external_react_["useState"])({
    pageSize: 10,
    category: '',
    projectName: '',
    minInvestDate: '',
    maxInvestDate: '',
    minAmount: '',
    maxAmount: ''
  }),
      _useState4 = slicedToArray_default()(_useState3, 2),
      paraminfo = _useState4[0],
      setParaminfo = _useState4[1]; // const [newpage, setNewpage] = useState(1)


  var getProductFn = Object(external_react_["useCallback"])(function (params, page) {
    setParaminfo(params);

    var obj = objectSpread_default()({
      currentPage: page
    }, params);

    console.log(obj);
    dispatch(Object(finance["a" /* getFinancelist */])(obj)).then(function (res) {
      if (res.code === 1) {
        setProductlist(res.obj);
      } else {
        Toast["a" /* default */].info(res.msg);
      }
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: "financelist-m"
  }, external_react_default.a.createElement(FinanHeader, {
    catelist: productTypelist // page={newpage}
    ,
    getPruductlist: function getPruductlist(obj) {
      getProductFn(obj, 1);
    }
  }), external_react_default.a.createElement(FinanceCenter, {
    productList: productlist
  }), productlist.inforList.length > 0 && external_react_default.a.createElement(Pagination["a" /* default */] // currentPage={1}
  , {
    totalData: productlist.recordCount,
    pageSize: 10,
    pageChange: function pageChange(curPage) {
      getProductFn(paraminfo, curPage);
    },
    prevTxt: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("img", {
      src: prepage_default.a,
      alt: ""
    })),
    nextTxt: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("img", {
      src: nextpage_default.a,
      alt: ""
    }))
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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "prepage-1fea5192.png";

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nextpage-8acf1f62.png";

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var Pagination = function Pagination(props) {
  var currentPage = props.currentPage,
      totalData = props.totalData,
      pageSize = props.pageSize,
      pageChange = props.pageChange,
      prevTxt = props.prevTxt,
      nextTxt = props.nextTxt,
      prevNextCount = props.prevNextCount,
      prevNextHide = props.prevNextHide;
  var dotStr = '•••';
  var prevNextNum = parseInt(prevNextCount);
  var totalPage = Math.ceil(parseInt(totalData) / parseInt(pageSize));
  var totalPagePrev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(totalPage);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(parseInt(currentPage)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      curPage = _useState2[0],
      setCurPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      pageArr = _useState4[0],
      setPageArr = _useState4[1]; // props更新时，useState数据不会更新。故在此currentPage更新时，重新设置curPage


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setCurPage(parseInt(currentPage));
  }, [currentPage]);
  /** @desc 根据当前页两边页数计算: 中间开始于结束数字 */

  var getStartAndEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var start = 0;
    var end = 0;

    if (totalPage > prevNextNum * 2 + 3) {
      // 总页数大于前后个数+当前页+首尾页，需要省略
      if (curPage < prevNextNum * 2) {
        // curr=1,2,3页
        start = 2;
        end = start + 3;
      } else if (curPage > totalPage - prevNextNum * 2) {
        // curr=47,48,49,50
        end = totalPage - 1;
        start = end - 3;
      } else {
        // 如curr=45  分页1...43 44 45 46 47 ...50
        start = curPage - 2;
        end = curPage + 2;
      }
    } else {
      start = 2;
      end = totalPage - 1;
    }

    return {
      start: start,
      end: end
    };
  }, [curPage, totalPage]);
  /** @desc 点击设置当前页，并调用props回调函数 */

  var pageClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (curPage) {
    pageChange(curPage);
    setCurPage(curPage);
  }, [curPage, totalPage]);
  /** @desc 根据curPage自动计算页面显示数组 */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var start = getStartAndEnd().start;
    var end = getStartAndEnd().end;
    var initArr = [1];
    var itemArr = [];
    var lastArr = [];

    for (var i = start; i <= end; i++) {
      itemArr.push(i);
    }

    if (start === 2) {
      if (end === totalPage - 1) {
        lastArr = initArr.concat(itemArr);
      } else {
        lastArr = initArr.concat(itemArr).concat([dotStr]);
      }
    } else {
      if (end === totalPage - 1) {
        lastArr = initArr.concat([dotStr]).concat(itemArr);
      } else {
        lastArr = initArr.concat([dotStr]).concat(itemArr).concat([dotStr]);
      }
    }

    if (totalPagePrev.current !== totalPage) {
      totalPagePrev.current = totalPage;
      setCurPage(1);
    }

    if (totalPage === 1) {
      setPageArr(lastArr);
    } else {
      setPageArr(lastArr.concat([totalPage]));
    }
  }, [curPage, totalPage]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "react-pagination"
  }, !prevNextHide && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "prev ".concat(curPage === 1 && 'disabled'),
    title: prevTxt,
    onClick: function onClick() {
      return curPage > 1 && pageClick(curPage - 1);
    }
  }, prevTxt), pageArr.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: index,
      className: "".concat(curPage === item && 'active'),
      onClick: function onClick() {
        if (item === dotStr) return;
        pageClick(item);
      }
    }, item);
  }), !prevNextHide && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "next ".concat(curPage === totalPage && 'disabled'),
    title: nextTxt,
    onClick: function onClick() {
      return curPage < totalPage && pageClick(curPage + 1);
    }
  }, nextTxt));
};

Pagination.defaultProps = {
  prevTxt: '上一页',
  nextTxt: '下一页',
  prevNextCount: 2,
  prevNextHide: false,
  currentPage: 1
};
Pagination.propTypes = {
  totalData: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "screenicon-ec073bf7.png";

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "point_down_w-a2c54751.png";

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "notselect_icon-c06f87da.png";

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "selecting_icon-93d1600d.png";

/***/ })

};;
//# sourceMappingURL=containers-m-FinanceInfo-FinanceList.js.map