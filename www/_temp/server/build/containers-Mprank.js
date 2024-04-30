require("source-map-support").install();
exports.ids = [17];
exports.modules = {

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// CONCATENATED MODULE: ./assets/redux/constants/mpRank.js
// 获取火星排行榜
var GETMPRANKLIST = 'get-mprank-list';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(11);

// CONCATENATED MODULE: ./assets/redux/actions/mpRank.js





/**
 * @desc 火星排行榜分类
 * @Params {params} params = {}
 */

var mpRank_getRankType = function getRankType() {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'GET',
    url: '/info/rank/type'
  });
};
/**
 * @desc 火星排行榜时间
 * @Params {params} params = {firstType, secondType}
 */

var mpRank_getRankMonth = function getRankMonth(params) {
  return Object(_multiappsharing_public["d" /* axiosAjax */])({
    type: 'GET',
    url: '/info/rank/month/list',
    params: params
  });
};
/** ---------------------------------------- redux ajax ---------------------------------------- */

/**
 * @desc 火星排行榜
 * @Params {params}
 * firstType 1级分类
 * secondType 2级分类
 * rankMonth 排行榜时间戳13位（榜单月份1号0点0分0秒）
 */

var mpRank_getMpRankList = function getMpRankList(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var url, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = '/info/rank/msg';
                _context.next = 4;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: url,
                  params: params,
                  noLoading: true
                });

              case 4:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: GETMPRANKLIST,
                    data: data.obj
                  });
                }

                return _context.abrupt("return", data);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context.t0
                });
                throw new Error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
// CONCATENATED MODULE: ./assets/containers/Mprank/index.js











var Mprank_Mprank =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Mprank, _Component);

  function Mprank() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Mprank);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Mprank)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      typeList: [],
      typeIndex: '1',
      month: [],
      secondType: 1
    };

    _this.addComma = function (num) {
      var number = (num || 0).toString();
      var result = '';

      while (number.length > 3) {
        result = ',' + number.slice(-3) + result;
        number = number.slice(0, number.length - 3);
      }

      if (number) {
        result = number + result;
      }

      return result;
    };

    _this.getType = function (e) {
      var type = e.target.getAttribute('type');

      _this.setState({
        secondType: type,
        typeIndex: type
      });

      _this.mpRankList(type, '');

      _this.rankMonth(type);
    };

    _this.mpRankList = function (secondType, rankMonth) {
      var dispatch = _this.props.dispatch;
      dispatch(mpRank_getMpRankList({
        firstType: 1,
        secondType: secondType,
        rankMonth: rankMonth
      }));
    };

    _this.rankMonth = function (secondType) {
      mpRank_getRankMonth({
        firstType: 1,
        secondType: secondType
      }).then(function (res) {
        if (res.code === 1) {
          _this.setState({
            month: res.obj
          });
        }
      });
    };

    _this.handleChangeMonth = function (e) {
      var secondType = _this.state.secondType;
      var rankMonth = e.target.value;

      _this.mpRankList(secondType, rankMonth);
    };

    return _this;
  }

  createClass_default()(Mprank, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      mpRank_getRankType().then(function (res) {
        if (res.code === 1) {
          var data = res.obj[1];

          _this2.setState({
            typeList: data
          });
        }
      });
      this.mpRankList(1, null);
      this.rankMonth();
    }
    /**
     * @desc 数字格式化
     * @returns {string}
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          typeList = _this$state.typeList,
          typeIndex = _this$state.typeIndex,
          month = _this$state.month;
      var rankListObj = this.props.rankListObj;
      var list = rankListObj.rankUserInfo ? rankListObj.rankUserInfo.inforList : [];
      return external_react_default.a.createElement("div", {
        className: "mp-rank-box"
      }, external_react_default.a.createElement("div", {
        className: "rank-banner"
      }), external_react_default.a.createElement("div", {
        className: "rank-cont"
      }, external_react_default.a.createElement("div", {
        className: "cont-tab"
      }, typeList.map(function (res, index) {
        var active = parseInt(typeIndex) === index + 1 ? 'active' : '';
        return external_react_default.a.createElement("p", {
          onClick: _this3.getType,
          className: active,
          type: res.typeId,
          key: res.typeId
        }, res.typeName);
      })), external_react_default.a.createElement("div", {
        className: "cont-date"
      }, external_react_default.a.createElement("select", {
        onChange: this.handleChangeMonth
      }, month.map(function (item, index) {
        return external_react_default.a.createElement("option", {
          style: {
            height: '30px'
          },
          value: item,
          key: index
        }, Object(_multiappsharing_public["l" /* formatTime */])(item, 'yyyy年MM月'));
      })), external_react_default.a.createElement("a", {
        href: rankListObj.imgUrl,
        target: "_blank",
        style: {
          display: !rankListObj.imgUrl ? 'none' : 'block'
        },
        download: "logo.png",
        className: "download-img"
      })), external_react_default.a.createElement("div", {
        className: "cont-table"
      }, external_react_default.a.createElement("table", null, external_react_default.a.createElement("thead", null, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, "\u6392\u540D"), external_react_default.a.createElement("td", null, "MarsBit \u4E13\u680F"), external_react_default.a.createElement("td", null, "\u6587\u7AE0\u6570"), external_react_default.a.createElement("td", null, "\u70ED\u5EA6"), external_react_default.a.createElement("td", null, "\u5F71\u54CD\u529B ", external_react_default.a.createElement("span", null, "?"), external_react_default.a.createElement("div", {
        className: "hint"
      }, "\u5F71\u54CD\u529B\u7531MarsBit \u4E13\u680F\u672C\u6708\u4E2D\u53D1\u6587\u91CF\u3001\u9605\u8BFB\u91CF\u3001\u7C89\u4E1D\u91CF\u3001\u6536\u85CF\u91CF\u3001\u5206\u4EAB\u91CF\u4E0E\u63A8\u8350\u91CF\u7EFC\u5408\u8BA1\u7B97\u5F97\u6765\u3002")))), external_react_default.a.createElement("tbody", null, list.map(function (item, index) {
        var colorTd = '';

        switch (index) {
          case 0:
            colorTd = 'one';
            break;

          case 1:
            colorTd = 'two';
            break;

          case 2:
            colorTd = 'three';
            break;
        }

        return external_react_default.a.createElement("tr", {
          key: item.id,
          style: {
            width: '700px'
          }
        }, external_react_default.a.createElement("td", {
          className: colorTd
        }, index + 1), external_react_default.a.createElement("td", null, external_react_default.a.createElement("a", {
          href: _multiappsharing_public["A" /* mixUrl */].main("/userCenter/".concat(item.passportId)),
          target: "_blank"
        }, external_react_default.a.createElement("img", {
          className: "td-img",
          src: item.iconUrl,
          alt: ""
        }), external_react_default.a.createElement("span", {
          className: "".concat(item.vGrade === 1 ? 'personal' : 'enterprise')
        }), external_react_default.a.createElement("div", {
          style: {
            marginLeft: '25px'
          }
        }, external_react_default.a.createElement("h6", null, item.nickName), external_react_default.a.createElement("p", null, item.identityDesc)))), external_react_default.a.createElement("td", null, _this3.addComma(item.articleCount)), external_react_default.a.createElement("td", null, _this3.addComma(item.readCount)), external_react_default.a.createElement("td", null, _this3.addComma(item.effectPoint)));
      }))))));
    }
  }]);

  return Mprank;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    rankListObj: state.mpRank.rankListObj
  };
};

/* harmony default export */ var containers_Mprank = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Mprank_Mprank));

/***/ })

};;
//# sourceMappingURL=containers-Mprank.js.map