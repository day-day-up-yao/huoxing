require("source-map-support").install();
exports.ids = [36];
exports.modules = {

/***/ 144:
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

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// CONCATENATED MODULE: ./assets/redux/constants/learning.js
// 热门标签
var HOTTAGSLIST = 'hont-tags-list'; // 热门专题

var HOTCOLUMNLIST = 'Hot-column-list';
// EXTERNAL MODULE: ./_multiappsharing/redux/constants/public.js
var constants_public = __webpack_require__(11);

// CONCATENATED MODULE: ./assets/redux/actions/learning.js





/**
 * @desc 热门标签
 * @Params {params}
 */

var learning_getTagsData = function getTagsData() {
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
                url = '/info/news/getfooterinfo?type=2';
                _context.next = 4;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: url,
                  params: {},
                  noLoading: true
                });

              case 4:
                data = _context.sent;

                if (data.code === 1) {
                  dispatch({
                    type: HOTTAGSLIST,
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
/**
 * @desc 热门专题
 * @Params {params}
 */

var learning_getHotColumn = function getHotColumn() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(dispatch) {
        var url, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = '/info/topic/listall?currentPage=1&pageSize=3&position=0';
                _context2.next = 4;
                return Object(_multiappsharing_public["d" /* axiosAjax */])({
                  type: 'GET',
                  url: url,
                  params: {},
                  noLoading: true
                });

              case 4:
                data = _context2.sent;

                if (data.code === 1) {
                  dispatch({
                    type: HOTCOLUMNLIST,
                    data: data.obj
                  });
                }

                return _context2.abrupt("return", data);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: constants_public["a" /* ACTIONERROR */],
                  data: _context2.t0
                });
                throw new Error(_context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
// CONCATENATED MODULE: ./assets/containers-m/Learning/Title/index.js



var Title_LearningTitle = function LearningTitle(props) {
  return external_react_default.a.createElement("div", {
    className: "m-learning-title"
  }, external_react_default.a.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.title), external_react_default.a.createElement("p", null, props.introduce));
};

/* harmony default export */ var Title = (Title_LearningTitle);
// CONCATENATED MODULE: ./assets/containers-m/Learning/LearningNewsList/index.js



var LearningNewsList_LearningNewsList = function LearningNewsList(props) {
  return external_react_default.a.createElement("div", {
    className: "m-learning-news-list ".concat(props.all),
    style: {
      display: props.show ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "cont-list ".concat(props.all)
  }, props.cont.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      href: item.url,
      target: "_blank",
      key: index
    }, item.title);
  })));
};

/* harmony default export */ var Learning_LearningNewsList = (LearningNewsList_LearningNewsList);
// CONCATENATED MODULE: ./assets/containers-m/Learning/LearningVideoList/index.js



var LearningVideoList_LearningVideoList = function LearningVideoList(props) {
  return external_react_default.a.createElement("div", {
    className: "m-learning-video-list",
    style: {
      display: props.show ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "cont-list"
  }, props.cont.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      href: item.url,
      target: "_blank",
      key: index
    }, external_react_default.a.createElement("img", {
      src: item.img,
      alt: ""
    }), external_react_default.a.createElement("p", null, item.title));
  }), external_react_default.a.createElement("div", {
    className: "more",
    style: {
      display: props.more ? 'block' : 'none'
    }
  }, "\u67E5\u770B\u66F4\u591A", external_react_default.a.createElement("span", null))));
};

/* harmony default export */ var Learning_LearningVideoList = (LearningVideoList_LearningVideoList);
// EXTERNAL MODULE: ./assets/public/js/rankData.js
var rankData = __webpack_require__(241);

// CONCATENATED MODULE: ./assets/containers-m/Learning/index.js












 // import DownloadBtn from 'multiCompsM/DownloadBtn'



var _rankData = Object(rankData["a" /* default */])(),
    oneNewsList = _rankData.oneNewsList,
    twoVideoList = _rankData.twoVideoList,
    jsonObj = _rankData.jsonObj;

var Learning_Learning =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Learning, _Component);

  function Learning() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Learning);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Learning)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      oneNewsTab: {
        index: 0,
        tab: [],
        contList: []
      },
      threeNewsTab: {
        index: 0,
        tab: [],
        type: 0,
        contList: [],
        article: true,
        video: false
      },
      fourNewsTab: {
        index: 0,
        tab: [],
        type: 0,
        contList: [],
        article: true,
        video: false
      }
    };

    _this.tabListLen = function (arr) {
      var oneNewsTab = [];
      var oneNewsLen = Math.ceil(arr.length / 20);

      for (var i = 1; i <= oneNewsLen; i++) {
        var hint = '';

        switch (i) {
          case 1:
            hint = '一';
            break;

          case 2:
            hint = '二';
            break;

          case 3:
            hint = '三';
            break;

          case 4:
            hint = '四';
            break;

          case 5:
            hint = '五';
            break;

          case 6:
            hint = '六';
            break;

          case 7:
            hint = '七';
            break;

          case 8:
            hint = '八';
            break;

          case 9:
            hint = '九';
            break;

          case 10:
            hint = '十';
            break;

          case 11:
            hint = '十一';
            break;

          case 12:
            hint = '十二';
            break;

          case 13:
            hint = '十三';
            break;

          case 14:
            hint = '十四';
            break;

          case 15:
            hint = '十五';
            break;

          case 16:
            hint = '十六';
            break;
        }

        var list = "\u7B2C".concat(hint, "\u9875");
        oneNewsTab.push(list);
      }

      return oneNewsTab;
    };

    _this.handClickOneNews = function (e, arr) {
      var index = parseInt(e.target.getAttribute('index')) || 0;
      var contList = arr.slice(index * 20, (index + 1) * 20);

      _this.setState({
        oneNewsTab: {
          index: index,
          tab: _this.tabListLen(arr),
          contList: contList
        }
      });
    };

    _this.handClickType = function (e, arr, typeArr) {
      var type = parseInt(e.target.getAttribute('type'));

      _this.threeContList(e, arr);

      var obj = {
        type: type,
        article: type === 0 || false,
        video: type === 1 || false,
        tab: _this.tabListLen(arr)
      };

      if (typeArr === 'three') {
        _this.setState({
          threeNewsTab: Object.assign(_this.state.threeNewsTab, obj)
        });
      } else if (typeArr === 'four') {
        _this.setState({
          fourNewsTab: Object.assign(_this.state.fourNewsTab, obj)
        });
      }
    };

    _this.threeContList = function (e, arr, typeArr) {
      var index = parseInt(e.target.getAttribute('index')) || 0;
      var contList = arr.slice(index * 20, (index + 1) * 20);
      var obj = {
        contList: contList,
        index: index
      };

      if (typeArr === 'three') {
        _this.setState({
          threeNewsTab: Object.assign(_this.state.threeNewsTab, obj)
        });
      } else if (typeArr === 'four') {
        _this.setState({
          fourNewsTab: Object.assign(_this.state.fourNewsTab, obj)
        });
      }
    };

    return _this;
  }

  createClass_default()(Learning, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var This = this;
      var dispatch = this.props.dispatch;
      this.setState({
        oneNewsTab: {
          index: 0,
          tab: This.tabListLen(jsonObj.blockChainGeneralKnowledge.newsList),
          contList: jsonObj.blockChainGeneralKnowledge.newsList.slice(0, 20)
        },
        twoVideoTab: {
          index: 0,
          tab: this.tabListLen(jsonObj.blockChainVideo.newsList),
          contList: jsonObj.blockChainVideo.newsList.slice(0, 20)
        },
        threeNewsTab: {
          index: 0,
          type: 0,
          tab: This.tabListLen(jsonObj.blockChainOpenClass.newsList),
          contList: jsonObj.blockChainOpenClass.newsList.slice(0, 20),
          article: true,
          video: false
        },
        fourNewsTab: {
          index: 0,
          type: 0,
          tab: This.tabListLen(jsonObj.tenQuestions.newsList),
          contList: jsonObj.tenQuestions.newsList.slice(0, 20),
          article: true,
          video: false
        }
      });
      dispatch(learning_getHotColumn());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var This = this;
      var _this$state = this.state,
          oneNewsTab = _this$state.oneNewsTab,
          twoVideoTab = _this$state.twoVideoTab,
          threeNewsTab = _this$state.threeNewsTab,
          fourNewsTab = _this$state.fourNewsTab;
      return external_react_default.a.createElement("div", {
        className: "m-learning-cont"
      }, external_react_default.a.createElement("div", {
        className: "swiper-container"
      }, external_react_default.a.createElement("div", {
        className: "swiper-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "swiper-slide"
      }, external_react_default.a.createElement("div", {
        className: "slide-cont"
      })))), external_react_default.a.createElement("div", {
        className: "lerning-cont-wrap clearfix"
      }, external_react_default.a.createElement("div", {
        className: "wrap-item clearfix"
      }, external_react_default.a.createElement(Title, {
        title: '区块链通识课',
        url: _multiappsharing_public["A" /* mixUrl */].main('/userCenter/f636cec44bd841edb53c3734e9bff15a'),
        introduce: '在这里，小白也能读懂区块链'
      }), external_react_default.a.createElement("div", {
        className: "list-tab",
        style: {
          display: 'none'
        }
      }, oneNewsTab.tab.map(function (item, index) {
        var active = oneNewsTab.index === index ? 'active' : '';
        return external_react_default.a.createElement("p", {
          onClick: function onClick(e) {
            This.handClickOneNews(e, oneNewsList);
          },
          className: active,
          key: index,
          index: index
        }, item);
      })), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: oneNewsTab.contList,
        show: true
      })), external_react_default.a.createElement("div", {
        className: "wrap-left-item clearfix"
      }, external_react_default.a.createElement("div", {
        className: "left-cont"
      }, external_react_default.a.createElement(Title, {
        title: '区块链入门到精通',
        url: _multiappsharing_public["A" /* mixUrl */].news('/userCenter/8873ee080e6040538009ac2805ec5549'),
        introduce: '晋级，提升你对区块链的专业认知'
      }), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: twoVideoTab.contList,
        show: true,
        more: false
      }))), external_react_default.a.createElement("div", {
        className: "wrap-item clearfix"
      }, external_react_default.a.createElement(Title, {
        title: '区块链公开课',
        url: _multiappsharing_public["A" /* mixUrl */].news('/tags/MarsBit公开课'),
        introduce: '行业最前线，区块链从业者专题知识分享'
      }), external_react_default.a.createElement("div", {
        className: "list-type",
        style: {
          display: 'none'
        }
      }, external_react_default.a.createElement("p", {
        className: threeNewsTab.type === 0 ? 'active' : '',
        type: "0",
        onClick: function onClick(e) {
          _this2.handClickType(e, oneNewsList, 'three');
        }
      }, "\u6587\u7AE0"), external_react_default.a.createElement("p", {
        className: threeNewsTab.type === 1 ? 'active' : '',
        type: "1",
        onClick: function onClick(e) {
          _this2.handClickType(e, twoVideoList, 'three');
        },
        style: {
          display: 'none'
        }
      }, "\u89C6\u9891")), external_react_default.a.createElement("div", {
        className: "list-tab"
      }, external_react_default.a.createElement("div", {
        className: "tab-box"
      }, threeNewsTab.tab.map(function (item, index) {
        var active = threeNewsTab.index === index ? 'active' : '';
        return external_react_default.a.createElement("p", {
          onClick: function onClick(e) {
            This.threeContList(e, jsonObj.blockChainOpenClass.newsList, 'three');
          },
          className: active,
          key: index,
          index: index
        }, item);
      }))), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: threeNewsTab.contList,
        show: threeNewsTab.article
      }), external_react_default.a.createElement(Learning_LearningVideoList, {
        cont: threeNewsTab.contList,
        show: threeNewsTab.video,
        more: false
      })), external_react_default.a.createElement("div", {
        className: "wrap-item clearfix",
        style: {
          display: 'none'
        }
      }, external_react_default.a.createElement(Title, {
        title: 'MarsBit大学课程',
        introduce: '顶级导师面对面，学习区块链第一站'
      }), external_react_default.a.createElement("div", {
        className: "list-type news-video"
      }, external_react_default.a.createElement("p", {
        className: "active"
      }, "\u6587\u7AE0"), external_react_default.a.createElement("p", null, "\u89C6\u9891")), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: oneNewsList,
        show: true
      }), external_react_default.a.createElement(Learning_LearningVideoList, {
        cont: twoVideoList,
        show: false,
        more: false
      })), external_react_default.a.createElement("div", {
        className: "wrap-item clearfix"
      }, external_react_default.a.createElement(Title, {
        title: '王峰十问',
        url: _multiappsharing_public["A" /* mixUrl */].main('/userCenter/01a70568381235638aa28b000b913c26'),
        introduce: '尖峰对话，洞悉区块链世界的人性与人格'
      }), external_react_default.a.createElement("div", {
        className: "list-type news-video",
        style: {
          display: 'none'
        }
      }, external_react_default.a.createElement("p", {
        className: "active"
      }, "\u5168\u90E8")), external_react_default.a.createElement("div", {
        className: "list-tab"
      }, external_react_default.a.createElement("div", {
        className: "tab-box"
      }, fourNewsTab.tab.map(function (item, index) {
        var active = fourNewsTab.index === index ? 'active' : '';
        return external_react_default.a.createElement("p", {
          onClick: function onClick(e) {
            This.threeContList(e, jsonObj.tenQuestions.newsList, 'four');
          },
          className: active,
          key: index,
          index: index
        }, item);
      }))), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: fourNewsTab.contList,
        all: 'show',
        show: true
      }))));
    }
  }]);

  return Learning;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    tagsArr: state.learning.tagsArr,
    hotColumn: state.learning.hotColumn
  };
};

/* harmony default export */ var containers_m_Learning = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Learning_Learning));

/***/ })

};;
//# sourceMappingURL=containers-m-Learning.js.map