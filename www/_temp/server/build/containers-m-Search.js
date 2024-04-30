require("source-map-support").install();
exports.ids = [47];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(27);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/containers-m/Search/SearchNewsList/index.js




var SearchNewsList_SearchNewsList = function SearchNewsList(props) {
  return props.cont.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "news-item",
      key: index
    }, external_react_default.a.createElement("div", {
      className: "news-item-content"
    }, external_react_default.a.createElement("p", {
      className: "content-title"
    }, external_react_default.a.createElement("a", {
      title: item.title,
      href: "/newsdetail/".concat(item.id, ".html"),
      dangerouslySetInnerHTML: {
        __html: Object(_multiappsharing_public["z" /* keyLight */])(item.title, props.searchKey)
      }
    })), external_react_default.a.createElement("p", {
      className: "content-sup"
    }, external_react_default.a.createElement("span", null, item.author), external_react_default.a.createElement("span", null, Object(_multiappsharing_public["l" /* formatTime */])(item.createTime, 'yyyy-MM-dd hh:mm')))), external_react_default.a.createElement("div", {
      className: "news-item-img"
    }, external_react_default.a.createElement("img", {
      src: "".concat(JSON.parse(item.coverPic).wap_small),
      className: "img-pic",
      alt: item.title
    })));
  });
};

/* harmony default export */ var Search_SearchNewsList = (SearchNewsList_SearchNewsList);
// EXTERNAL MODULE: ./assets/containers-m/Search/img/m-time.png
var m_time = __webpack_require__(505);
var m_time_default = /*#__PURE__*/__webpack_require__.n(m_time);

// CONCATENATED MODULE: ./assets/containers-m/Search/SearchLiveList/index.js





var SearchLiveList_SearchLiveList = function SearchLiveList(props) {
  return props.cont.map(function (item, index) {
    if (!item.title) {
      item.content.replace(/【([^【】]+)】/g, function () {
        item.title = arguments[1];
      });
    }

    var liveLink = "https://flash.huoxing24.com/".concat(item.id, ".html");
    return external_react_default.a.createElement("div", {
      className: "lives-item",
      key: index
    }, external_react_default.a.createElement("div", {
      className: "lives-item-time"
    }, external_react_default.a.createElement("img", {
      className: "iconfont-time",
      src: m_time_default.a
    }), Object(_multiappsharing_public["l" /* formatTime */])(item.createdTime, 'yyyy-MM-dd hh:mm')), external_react_default.a.createElement("div", {
      className: "lives-item-content"
    }, external_react_default.a.createElement("p", {
      className: "content-title"
    }, external_react_default.a.createElement("a", {
      title: item.title,
      href: liveLink,
      dangerouslySetInnerHTML: {
        __html: Object(_multiappsharing_public["z" /* keyLight */])(item.title, props.searchKey)
      }
    })), external_react_default.a.createElement("p", {
      className: "content-msg",
      dangerouslySetInnerHTML: {
        __html: Object(_multiappsharing_public["z" /* keyLight */])(item.content, props.searchKey)
      }
    })));
  });
};

/* harmony default export */ var Search_SearchLiveList = (SearchLiveList_SearchLiveList);
// CONCATENATED MODULE: ./assets/containers-m/Search/SearchMarketList/index.js



var SearchMarketList_SearchMarketList = function SearchMarketList(props) {
  var onBtnClick = function onBtnClick(symbol) {
    window.open("https://token.huoxing24.com/".concat(symbol, ".html"), '_self');
  };

  return external_react_default.a.createElement("div", {
    className: "market-box"
  }, external_react_default.a.createElement("div", {
    className: "search-result"
  }, "\"", external_react_default.a.createElement("span", null, props.searchKey), "\u5171\u641C\u7D22\u51FA ".concat(props.cont.length, " \u6761\u7ED3\u679C")), external_react_default.a.createElement("table", null, external_react_default.a.createElement("thead", null, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, "\u8D27\u5E01"), external_react_default.a.createElement("td", null, "\u5F53\u524D\u4EF7\u683C(CNY)"), external_react_default.a.createElement("td", null, "24H\u6DA8\u8DCC\u699C"))), external_react_default.a.createElement("tbody", null, props.cont.map(function (item, index) {
    return external_react_default.a.createElement("tr", {
      key: index,
      onClick: function onClick() {
        return onBtnClick(item.symbol);
      }
    }, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
      src: item.icon,
      alt: ""
    }), item.symbol), external_react_default.a.createElement("td", null, (props.price * item.price).toFixed(2)), external_react_default.a.createElement("td", null, external_react_default.a.createElement("span", {
      className: item.change_percent * 100 > 0 ? 'rise' : 'fall'
    }, item.change_percent * 100 > 0 ? '+' + (item.change_percent * 100).toFixed(2) : (item.change_percent * 100).toFixed(2), "%")));
  }))));
};

/* harmony default export */ var Search_SearchMarketList = (SearchMarketList_SearchMarketList);
// EXTERNAL MODULE: ./assets/containers-m/Search/img/m-search.png
var m_search = __webpack_require__(506);
var m_search_default = /*#__PURE__*/__webpack_require__.n(m_search);

// CONCATENATED MODULE: ./assets/containers-m/Search/NoData/index.js




var NoData_NoData = function NoData(props) {
  return external_react_default.a.createElement("div", {
    className: "result-img"
  }, external_react_default.a.createElement("img", {
    src: m_search_default.a,
    alt: ""
  }), external_react_default.a.createElement("p", null, "\u5F88\u62B1\u6B49\uFF0C\u6CA1\u6709\u627E\u5230", external_react_default.a.createElement("span", null, props.searchKey), "\u76F8\u5173\u7ED3\u679C\uFF0C\u8BF7\u4FEE\u6539\u6216\u8005\u5C1D\u8BD5\u5176\u4ED6\u641C\u7D22\u8BCD"));
};

/* harmony default export */ var Search_NoData = (NoData_NoData);
// EXTERNAL MODULE: ./assets/redux/actions/search.js + 1 modules
var search = __webpack_require__(54);

// EXTERNAL MODULE: ./assets/containers-m/Search/img/m-search.svg
var img_m_search = __webpack_require__(507);
var img_m_search_default = /*#__PURE__*/__webpack_require__.n(img_m_search);

// EXTERNAL MODULE: ./assets/public/js/rankData.js
var rankData = __webpack_require__(241);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(11);

// CONCATENATED MODULE: ./_multiappsharing/redux/constants/market.js
// 获取涨跌幅数据
var GETRISEDROPDATA = 'get-rise-drop-data'; // 获取搜索行情数据

var GETSEARCHMARKETDATA = 'get-search-market-data';
// CONCATENATED MODULE: ./_multiappsharing/redux/actions/market.js





/** ---------------------------------------- pure ajax ---------------------------------------- */

/**
 * @desc 获取汇率
 * @return {code, data:{coin_rate:{BTC, ETH}, legal_rate:{CNY, USD}}}
 */

var market_getExchangeRate = function getExchangeRate() {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'get',
    url: '/market/coin/financerate'
  });
};
/**
 * @desc 获取汇率2
 */

var market_getExchangeRate2 = function getExchangeRate2() {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'post',
    url: '/market/tickers/fiatmap'
  });
};
/**
 * @desc 获取行情数据
 * @Params {params} params = {page, size, sort, order, topRank}
 page 当前显示第几页，必传
 size 每页显示记录条数，必传
 search 搜索值，非必传
 order 排序规则，必传，[rank, price, change, volume, turnover_rate, change_1h, change_7d, change_30d]
 sort 排序方式，必传，[asc, desc]
 limit top-n的币，非必传
 topRank 市值前topRank的币参与排序，非必传
 * @return {code, msg, data}
 */

var market_getMarketData = function getMarketData(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'get',
    url: '/market/tickers/coin/list',
    params: params
  });
};
/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 设置涨跌幅state
 * @Params {params} params = {sort, time}
 */

var market_getRiseDropData = function getRiseDropData(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return market_getMarketData({
                  page: 1,
                  size: 10,
                  sort: params.sort,
                  order: params.order,
                  topRank: 50
                });

              case 3:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETRISEDROPDATA,
                    data: data.data
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/**
 * @desc 设置搜索行情
 * @Params {params} params = {search}
 */

var market_getSearchMarketData = function getSearchMarketData(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return market_getMarketData({
                  page: 1,
                  size: 2000,
                  search: params.search,
                  order: 'rank',
                  sort: 'asc',
                  limit: 0
                });

              case 3:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETSEARCHMARKETDATA,
                    data: data.data
                  });
                }

                return _context2.abrupt("return", data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
// CONCATENATED MODULE: ./assets/containers-m/Search/index.js




















var _rankData = Object(rankData["a" /* default */])(),
    searchMTabType = _rankData.searchMTabType;

var Search_Search =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Search, _Component);

  function Search(props) {
    var _this;

    classCallCheck_default()(this, Search);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Search).call(this, props));
    _this.isSearching = false;
    _this.nowScrollTop = 0;

    _this.bindHandleScroll = function (event) {
      var _event$target = event.target,
          scrollHeight = _event$target.scrollHeight,
          clientHeight = _event$target.clientHeight,
          scrollTop = _event$target.scrollTop;

      if (scrollTop > _this.nowScrollTop && !_this.isSearching && _this.state.showType !== 3) {
        if (scrollTop + clientHeight + 50 > scrollHeight) {
          _this.handleSearchList({
            page: parseInt(_this.state.currPage) + 1
          });
        }
      }

      _this.nowScrollTop = scrollTop;
    };

    _this.searchEnter = function (event) {
      if (!_this.isSearching && event.keyCode && event.keyCode !== 13) return false;

      if (Object(_multiappsharing_public["H" /* trim */])(event.target.value) !== '') {
        _this.setState({
          searchQuery: event.target.value,
          searchKey: event.target.value,
          showType: 1
        });

        _this.handleSearchList({
          page: 1
        });
      }
    };

    _this.searchChange = function (event) {
      _this.setState({
        searchQuery: Object(_multiappsharing_public["H" /* trim */])(event.target.value)
      });

      if (Object(_multiappsharing_public["H" /* trim */])(event.target.value) === '') {
        _this.setState({
          isResShow: false
        });
      }
    };

    _this.handleSearchList = function (obj) {
      var dispatch = _this.props.dispatch;

      var This = assertThisInitialized_default()(_this);

      var sendData = {
        q: _this.state.searchQuery,
        keyWord: _this.state.searchQuery,
        page: _this.state.currPage,
        pageSize: _this.state.pageSize,
        type: _this.state.showType
      };

      if (obj) {
        sendData = objectSpread_default()({}, sendData, obj);
      }

      if (sendData.page > 1 && sendData.page > _this.state.total) {
        return;
      }

      _this.isSearching = true;

      switch (sendData.type) {
        case 1:
          dispatch(Object(search["c" /* getNewsSearchList */])(sendData)).then(function (res) {
            This.isSearching = false;

            if (res.code === 1) {
              if (!res.obj || !res.obj.inforList) {
                This.setState({
                  listData: [],
                  recordCount: 0,
                  total: 0,
                  currPage: sendData.page,
                  showType: sendData.type,
                  isResShow: true
                });
              } else {
                var listData = [];

                if (sendData.page === 1) {
                  listData = res.obj.inforList;
                } else {
                  listData = This.state.listData.concat(res.obj.inforList);
                }

                This.setState({
                  listData: listData,
                  recordCount: res.obj.recordCount,
                  total: res.obj.totalIndex,
                  currPage: sendData.page,
                  showType: sendData.type,
                  isResShow: true
                });
              }
            } else {
              This.setState({
                listData: [],
                recordCount: 0,
                total: 0,
                currPage: sendData.page,
                showType: sendData.type,
                isResShow: true
              });
            }
          });
          break;

        case 2:
          dispatch(Object(search["a" /* getLiveSearchList */])(sendData)).then(function (res) {
            This.isSearching = false;

            if (res.code === 1) {
              if (!res.obj || !res.obj.inforList) {
                This.setState({
                  listData: [],
                  recordCount: 0,
                  total: 0,
                  currPage: sendData.page,
                  showType: sendData.type,
                  isResShow: true
                });
              } else {
                var listData = [];

                if (sendData.page === 1) {
                  listData = res.obj.inforList;
                } else {
                  listData = This.state.listData.concat(res.obj.inforList);
                }

                This.setState({
                  listData: listData,
                  recordCount: res.obj.recordCount,
                  total: res.obj.totalIndex,
                  currPage: sendData.page,
                  showType: sendData.type,
                  isResShow: true
                });
              }
            } else {
              This.setState({
                listData: [],
                recordCount: 0,
                total: 0,
                currPage: sendData.page,
                showType: sendData.type,
                isResShow: true
              });
            }
          });
          break;

        case 3:
          dispatch(market_getSearchMarketData({
            search: _this.state.searchQuery
          })).then(function (res) {
            This.isSearching = false;

            if (res.code === 1) {
              if (!res.data || !res.data.inforList) {
                This.setState({
                  listData: [],
                  recordCount: 0,
                  total: 0,
                  currPage: sendData.page,
                  showType: sendData.type,
                  isResShow: true
                });
              } else {
                var listData = [];

                if (sendData.page === 1) {
                  listData = res.data.inforList;
                } else {
                  listData = This.state.listData.concat(res.data.inforList);
                }

                This.setState({
                  listData: listData,
                  recordCount: res.data.recordCount,
                  total: res.data.totalIndex,
                  currPage: sendData.page,
                  showType: sendData.type,
                  isResShow: true
                });
              }
            } else {
              This.setState({
                listData: [],
                recordCount: 0,
                total: 0,
                currPage: sendData.page,
                showType: sendData.type,
                isResShow: true
              });
            }
          });
          break;

        default:
          break;
      }
    };

    _this.renderStr = function (type, listData, currPage) {
      if (_this.isSearching) return;

      if (!listData.length && currPage === 1) {
        return external_react_default.a.createElement(Search_NoData, {
          searchKey: _this.state.searchKey
        });
      }

      switch (parseInt(type)) {
        case 1:
          return external_react_default.a.createElement(Search_SearchNewsList, {
            cont: listData,
            searchKey: _this.state.searchKey
          });

        case 2:
          return external_react_default.a.createElement(Search_SearchLiveList, {
            cont: listData,
            searchKey: _this.state.searchKey
          });

        case 3:
          return external_react_default.a.createElement(Search_SearchMarketList, {
            cont: listData,
            price: _this.state.cnyPrice,
            searchKey: _this.state.searchKey
          });

        default:
          break;
      }
    };

    _this.onBtnCancelClick = function () {
      window.history.go(-1);
    };

    _this.onBtnSearchtabClick = function (typeId) {
      if (_this.state.showType !== typeId) {
        _this.handleSearchList({
          page: 1,
          type: typeId
        });
      }
    };

    _this.state = {
      // 列表显示
      isResShow: false,
      // 列表数据
      listData: [],
      // 搜索数量
      recordCount: 0,
      // 搜索内容
      searchQuery: '',
      // 确定搜索内容 用于搜索列表里高亮文字显示
      searchKey: '',
      // 搜索类型 0空列表 其他与 searchMTabType type相同
      showType: 1,
      // 当前页数
      currPage: 0,
      // 每页数量
      pageSize: 10,
      // 总页数
      total: 0,
      // 美元汇率
      cnyPrice: 0
    };
    return _this;
  } // 是否正在搜索


  createClass_default()(Search, [{
    key: "componentDidMount",
    // 组件渲染后调用
    value: function componentDidMount() {
      // 加载监听滚动
      var This = this;
      var $contain = document.getElementById('searchPage');
      $contain.addEventListener('scroll', This.bindHandleScroll, false); // 请求美元汇率

      market_getExchangeRate2().then(function (res) {
        if (res.code === 1) {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].quote === 'CNY') {
              var cnyPrice = res.data[i].price;
              This.setState({
                cnyPrice: cnyPrice
              });
              break;
            }
          }
        }
      });
    } // 组件移除前调用

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 移除监听滚动
      var This = this;
      var $contain = document.getElementById('searchPage');
      $contain.removeEventListener('scroll', This.bindHandleScroll);
    }
    /** @desc 处理组件滚动 */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isResShow = _this$state.isResShow,
          showType = _this$state.showType,
          searchQuery = _this$state.searchQuery,
          listData = _this$state.listData,
          currPage = _this$state.currPage;
      return external_react_default.a.createElement("div", {
        className: "m-search-content"
      }, external_react_default.a.createElement("div", {
        className: "search-group"
      }, external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("img", {
        src: img_m_search_default.a
      }), external_react_default.a.createElement("input", {
        type: "search",
        className: "input search",
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",
        value: searchQuery,
        onChange: this.searchChange,
        onKeyDown: this.searchEnter
      })), external_react_default.a.createElement("span", {
        className: "cancel-search ".concat(searchQuery !== '' ? 'input-in' : ''),
        onClick: this.onBtnCancelClick
      }, "\u53D6\u6D88")), external_react_default.a.createElement("div", {
        className: "search-main"
      }, external_react_default.a.createElement("div", {
        className: "search-res",
        style: {
          display: isResShow ? 'block' : 'none'
        }
      }, external_react_default.a.createElement("ul", {
        className: "res-tab"
      }, searchMTabType.map(function (item) {
        var active = showType === item.type ? 'active' : '';
        return external_react_default.a.createElement("li", {
          className: active,
          key: item.type,
          onClick: function onClick() {
            _this2.onBtnSearchtabClick(item.type);
          }
        }, item.label);
      })), external_react_default.a.createElement("div", {
        className: "scroll-box",
        id: "searchPage"
      }, this.renderStr(showType, listData, currPage)))));
    }
  }]);

  return Search;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    newsChannelId: state.multi.newsChannelId
  };
};

/* harmony default export */ var containers_m_Search = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Search_Search));

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-time-68310a01.png";

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-search-3fc67de6.png";

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-search-358aef42.svg";

/***/ })

};;
//# sourceMappingURL=containers-m-Search.js.map