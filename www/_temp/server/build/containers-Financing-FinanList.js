require("source-map-support").install();
exports.ids = [7];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(174);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_calendar_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var rc_calendar_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_calendar_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_calendar_lib_RangeCalendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(178);
/* harmony import */ var rc_calendar_lib_RangeCalendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_calendar_lib_RangeCalendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_finance_dateicon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(491);
/* harmony import */ var _public_img_finance_dateicon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_finance_dateicon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_finance_search_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(492);
/* harmony import */ var _public_img_finance_search_icon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_finance_search_icon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_finance_down_i_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(493);
/* harmony import */ var _public_img_finance_down_i_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_finance_down_i_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_finance_lighticon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(494);
/* harmony import */ var _public_img_finance_lighticon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_finance_lighticon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_img_prepage_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(266);
/* harmony import */ var _public_img_prepage_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_prepage_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_img_nextpage_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(267);
/* harmony import */ var _public_img_nextpage_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_nextpage_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_finance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24);
/* harmony import */ var _public_js_other__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(210);
/* harmony import */ var _multiappsharing_components_Pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(268);
/* harmony import */ var _multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13);


















/* harmony default export */ __webpack_exports__["default"] = (function () {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      financeList: state.finance.financeList,
      productTypelist: state.finance.productTypelist
    };
  }),
      financeList = _useSelector.financeList,
      productTypelist = _useSelector.productTypelist;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(financeList),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      finenlist = _useState2[0],
      setFinenlist = _useState2[1];

  var classcolor = ['', 'five-second-item', 'five-thend-item'];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      otherflg = _useState4[0],
      setOtherflg = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      current = _useState6[0],
      setCurrent = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      amountflg = _useState8[0],
      setAmountflg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      minmoney = _useState10[0],
      setMinmoney = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('max'),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      maxmoney = _useState12[0],
      setMaxmoney = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),
      productflg = _useState14[0],
      setProductflg = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState15, 2),
      producttype = _useState16[0],
      setProducttype = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState17, 2),
      searchname = _useState18[0],
      setSearchname = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('选择日期'),
      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState19, 2),
      selecttime = _useState20[0],
      setSelecttime = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState21, 2),
      timeflag = _useState22[0],
      setTimeflag = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState24 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState23, 2),
      starttime = _useState24[0],
      setStarttime = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState26 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState25, 2),
      endtime = _useState26[0],
      setEndtime = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('融资金额'),
      _useState28 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState27, 2),
      quantity = _useState28[0],
      setQuantity = _useState28[1]; // useEffect(() => {
  //     getFinance()
  // }, [current, producttype])
  // 获取融资列表


  var getFinance = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (page, type) {
    setCurrent(page);
    var catetype = '';

    if (type) {
      catetype = type;
    }

    setProducttype(catetype);
    var params = {
      currentPage: page,
      pageSize: 20,
      category: catetype,
      projectName: searchname,
      minInvestDate: starttime,
      maxInvestDate: endtime,
      minAmount: minmoney === 'min' ? 0 : Number(minmoney) * 1000000,
      maxAmount: maxmoney === 'max' ? 2100000000 : Number(maxmoney) * 1000000
    };
    dispatch(Object(_redux_actions_finance__WEBPACK_IMPORTED_MODULE_14__[/* getFinancelist */ "a"])(params)).then(function (res) {
      if (res.code === 1) {
        setFinenlist(res.obj);
      } else {
        _multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].info(res.msg);
      }
    });
  }, [current, minmoney, maxmoney, producttype, searchname, starttime, endtime]); // 筛选价钱列表

  var amountlist = ['< $1M', '$1M - 5M', '$5M - 10M', '$10M >']; // 筛选时间列表

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
  }]; // 确认通过时间筛选

  var timesureFn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    getFinance(1);
    setTimeflag(false);
  }, []); // 选择筛选价格

  var selectAmount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (index) {
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
  }, []); // 确认通过价格筛选

  var amountsureFn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (minmoney !== 'min' && maxmoney !== 'max') {
      setQuantity("$".concat(minmoney, "M - ").concat(maxmoney, "M"));
    }

    getFinance(1);
    setAmountflg(false);
  }, [minmoney, maxmoney, getFinance]); // 搜索名称获取融资列表

  var searchFn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    getFinance(1);
  }, [getFinance]); // 回车执行

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onkeyup = function (event) {
      if (event.keyCode === 13) {
        getFinance(1);
      }
    };
  }, [getFinance]); // 点击其他地方隐藏下拉列表

  var hideAllMenu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setAmountflg(false);
    setProductflg(false);
    setTimeflag(false);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener('click', hideAllMenu);
  }, [hideAllMenu]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finanlist"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u6700\u65B0\u878D\u8D44\u4E8B\u4EF6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finanlist-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-list-item list-item-data"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "item-select",
    onClick: function onClick(e) {
      setTimeflag(!timeflag);
      e.nativeEvent.stopImmediatePropagation();
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, selecttime), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-item-img"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_finance_dateicon_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: ""
  }))), timeflag && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-amount",
    onClick: function onClick(e) {
      e.nativeEvent.stopImmediatePropagation();
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-select"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_lib_RangeCalendar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    showDateInput: false,
    onSelect: function onSelect(e) {
      setStarttime(new Date(moment__WEBPACK_IMPORTED_MODULE_3___default()(e[0]._d).format('YYYY/MM/DD')).getTime() / 1000);
      setEndtime(new Date(moment__WEBPACK_IMPORTED_MODULE_3___default()(e[1]._d).format('YYYY/MM/DD')).getTime() / 1000);
      setSelecttime(moment__WEBPACK_IMPORTED_MODULE_3___default()(e[0]._d).format('YYYY/MM/DD') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_3___default()(e[1]._d).format('YYYY/MM/DD'));
    },
    locale: rc_calendar_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-select-right"
  }, stimelist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "select-data-item",
      key: index,
      onClick: function onClick() {
        if (item.stime === '' && item.etime === '') {
          setStarttime('');
          setEndtime('');
          setSelecttime('选择日期');
        } else {
          setStarttime(parseInt(item.stime / 1000));
          setEndtime(parseInt(item.etime / 1000));
          setSelecttime(moment__WEBPACK_IMPORTED_MODULE_3___default()(item.stime).format('YYYY/MM/DD') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_3___default()(item.etime).format('YYYY/MM/DD'));
        }
      }
    }, item.name);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-select-btn"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-btn-item",
    onClick: function onClick() {
      setTimeflag(false);
      setSelecttime('选择日期');
    }
  }, "\u53D6\u6D88"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-btn-item",
    onClick: timesureFn
  }, "\u786E\u5B9A")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-list-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "item-select",
    onClick: function onClick(e) {
      setAmountflg(!amountflg);
      e.nativeEvent.stopImmediatePropagation();
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-item-img little-img ".concat(amountflg && 'rotate-img')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_finance_down_i_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: ""
  }))), amountflg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-amount",
    onClick: function onClick(e) {
      e.nativeEvent.stopImmediatePropagation();
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "selelct-amount-con"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "selelct-amount-con-left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "amount-left-num"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u6700\u5C0F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "amount-left-num-white"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    value: minmoney,
    onChange: function onChange(e) {
      setMinmoney(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "M"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "amount-left-num bottom-max"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u6700\u5927"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "amount-left-num-white"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    value: maxmoney,
    onChange: function onChange(e) {
      setMaxmoney(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "M")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "selelct-amount-con-right"
  }, amountlist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "right-select-mount",
      key: index,
      onClick: function onClick() {
        selectAmount(index);
      }
    }, item);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-sure-btn"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-item-btn btn-cancal",
    onClick: function onClick() {
      setAmountflg(false);
    }
  }, "\u53D6\u6D88"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-item-btn btn-sure",
    onClick: function onClick(e) {
      amountsureFn();
      e.nativeEvent.stopImmediatePropagation();
    }
  }, "\u786E\u5B9A")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-list-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "item-select",
    onClick: function onClick(e) {
      setProductflg(!productflg);
      e.nativeEvent.stopImmediatePropagation();
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, producttype === '' ? '项目名称' : producttype), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-item-img little-img ".concat(productflg && 'rotate-img')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_finance_down_i_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: ""
  }))), productflg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-amount"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-product-item",
    onClick: function onClick() {
      getFinance(1);
    }
  }, "All"), productTypelist.length > 0 && productTypelist.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "select-product-item",
      key: index,
      onClick: function onClick() {
        getFinance(1, item);
      }
    }, item);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-list-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "list-item-search",
    type: "text",
    placeholder: "\u8F93\u5165\u9879\u76EE\u540D\u79F0\u641C\u7D22",
    onChange: function onChange(e) {
      setSearchname(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-item-img",
    onClick: searchFn
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_finance_search_icon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: ""
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finanlist-header-right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _public_img_finance_lighticon_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 - 10 of 28"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finanlist-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finanlist-center-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-item-one"
  }, "#"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-item-two"
  }, "\u9879\u76EE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-item-three"
  }, "\u878D\u8D44\u65E5\u671F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-item-four"
  }, "\u878D\u8D44\u91D1\u989D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-item-five"
  }, "\u9879\u76EE\u7C7B\u578B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-item-six"
  }, "\u6295\u8D44\u673A\u6784")), finenlist.inforList.length > 0 && finenlist.inforList.map(function (item, index) {
    var categorylist = item.category.split(',');
    var investlist = item.orgList.length > 3 ? item.orgList.slice(0, 3) : item.orgList;
    var otherinverst = item.orgList.length > 3 ? item.orgList.slice(3, item.orgList.length) : [];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "finanlist-center-top finanlist-center-list",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "center-item-one one-item-number"
    }, "0" + "".concat(index + 1 + (current - 1) * 20)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/financedetail/".concat(item.projectId),
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "center-item-two"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.projectLogoUrl,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, item.projectName))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "center-item-three"
    }, moment__WEBPACK_IMPORTED_MODULE_3___default()(item.investDate).format('YYYY年MM月DD日')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "center-item-four"
    }, "$", Object(_public_js_other__WEBPACK_IMPORTED_MODULE_15__[/* formattingNum */ "a"])(item.amount)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "center-item-five"
    }, categorylist.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "five-item ".concat(classcolor[index]),
        key: index
      }, item);
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "center-item-six"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "invest-list"
    }, investlist.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: item.logoUrl,
        alt: ""
      }));
    }), otherinverst.length > 0 && otherflg !== index && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "invest-list-num",
      onClick: function onClick() {
        setOtherflg(index);
      }
    }, '+' + otherinverst.length)), otherinverst.length > 0 && otherflg === index && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "other-invest"
    }, otherinverst.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: item.logoUrl,
        alt: ""
      }));
    }))));
  })), finenlist.inforList.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_multiappsharing_components_Pagination__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"] // currentPage={1}
  , {
    totalData: financeList.recordCount,
    pageSize: 20,
    pageChange: function pageChange(curPage) {
      setCurrent(curPage);
      getFinance(curPage);
    },
    prevTxt: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _public_img_prepage_png__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: ""
    })),
    nextTxt: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _public_img_nextpage_png__WEBPACK_IMPORTED_MODULE_13___default.a,
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

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dateicon-3d9251e5.png";

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search_icon-ab2cc4ec.png";

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "down_i-099c9292.png";

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lighticon-fd29ea78.png";

/***/ })

};;
//# sourceMappingURL=containers-Financing-FinanList.js.map