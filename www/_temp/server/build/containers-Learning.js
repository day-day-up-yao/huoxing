require("source-map-support").install();
exports.ids = [15];
exports.modules = {

/***/ 143:
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

// CONCATENATED MODULE: ./assets/containers/Learning/Title/index.js



var Title_LearningTitle = function LearningTitle(props) {
  return external_react_default.a.createElement("div", {
    className: "learning-title"
  }, external_react_default.a.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.title), external_react_default.a.createElement("p", null, props.introduce));
};

/* harmony default export */ var Title = (Title_LearningTitle);
// CONCATENATED MODULE: ./assets/containers/Learning/LearningNewsList/index.js



var LearningNewsList_LearningNewsList = function LearningNewsList(props) {
  return external_react_default.a.createElement("div", {
    className: "learning-news-list ".concat(props.all),
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
// CONCATENATED MODULE: ./assets/containers/Learning/LearningVideoList/index.js



var LearningVideoList_LearningVideoList = function LearningVideoList(props) {
  return external_react_default.a.createElement("div", {
    className: "learning-video-list",
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
// CONCATENATED MODULE: ./assets/containers/Learning/LearningTags/index.js


var tagUrl = 'https://news.huoxing24.com/tags/';

var LearningTags_LearningTags = function LearningTags(props) {
  return external_react_default.a.createElement("div", {
    className: "tags-box clearfix"
  }, external_react_default.a.createElement("div", {
    className: "index-tags"
  }, external_react_default.a.createElement("div", {
    className: "tags-title clearfix"
  }, external_react_default.a.createElement("h3", null, "\u5B66\u4E60\u6807\u7B7E")), external_react_default.a.createElement("div", {
    className: "tags-cont"
  }, props.tag.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      target: "_blank",
      key: index,
      href: tagUrl + item,
      title: item
    }, item);
  }))));
};

/* harmony default export */ var Learning_LearningTags = (LearningTags_LearningTags);
// CONCATENATED MODULE: ./assets/containers/Learning/LearningProject/index.js



var LearningProject_LearningProject = function LearningProject(props) {
  return external_react_default.a.createElement("div", {
    className: "subject-box clearfix"
  }, external_react_default.a.createElement("div", {
    className: "subject-h5 clearfix"
  }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("a", {
    href: "https://news.huoxing24.com/feature",
    target: "_blank"
  }, "\u70ED\u95E8\u4E13\u9898")), external_react_default.a.createElement("a", {
    href: "https://news.huoxing24.com/feature",
    className: "more",
    target: "_blank"
  })), external_react_default.a.createElement("div", {
    className: "subject-tab clearfix"
  }, props.cont.map(function (d, index) {
    // let iteList = d.contentList
    // let liStr = ''
    // iteList.map(function (item) {
    //     liStr += `<li class="clearfix">
    //             <span></span>
    //             <a href=${item.url} target="_blank">
    //                 <h3>${item.title}</h3>
    //             </a>
    //         </li>`
    // })
    return external_react_default.a.createElement("div", {
      className: "subject-list clearfix",
      key: index
    }, external_react_default.a.createElement("div", {
      className: "subject-first clearfix"
    }, external_react_default.a.createElement("a", {
      title: d.title,
      target: "_blank",
      href: d.url
    }, external_react_default.a.createElement("img", {
      src: d.img
    }), external_react_default.a.createElement("h5", null, d.title))));
  })));
};

/* harmony default export */ var Learning_LearningProject = (LearningProject_LearningProject);
// EXTERNAL MODULE: ./assets/public/js/rankData.js
var rankData = __webpack_require__(241);

// CONCATENATED MODULE: ./assets/containers/Learning/index.js







 // import { getHotColumn } from '../../redux/actions/learning'









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
      var oneNewsLen = Math.ceil(arr.length / 30);

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
        }

        var list = "\u7B2C".concat(hint, "\u9875");
        oneNewsTab.push(list);
      }

      return oneNewsTab;
    };

    _this.handClickOneNews = function (e, arr) {
      var index = parseInt(e.target.getAttribute('index')) || 0;
      var contList = arr.slice(index * 30, (index + 1) * 30);

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
      var contList = arr.slice(index * 30, (index + 1) * 30);
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
      var This = this; // const { dispatch } = this.props

      this.setState({
        oneNewsTab: {
          index: 0,
          tab: This.tabListLen(jsonObj.blockChainGeneralKnowledge.newsList),
          contList: jsonObj.blockChainGeneralKnowledge.newsList.slice(0, 30)
        },
        twoVideoTab: {
          index: 0,
          tab: this.tabListLen(jsonObj.blockChainVideo.newsList),
          contList: jsonObj.blockChainVideo.newsList.slice(0, 30)
        },
        threeNewsTab: {
          index: 0,
          type: 0,
          tab: This.tabListLen(jsonObj.blockChainOpenClass.newsList),
          contList: jsonObj.blockChainOpenClass.newsList.slice(0, 30),
          article: true,
          video: false
        },
        fourNewsTab: {
          index: 0,
          type: 0,
          tab: This.tabListLen(jsonObj.tenQuestions.newsList),
          contList: jsonObj.tenQuestions.newsList.slice(0, 30),
          article: true,
          video: false
        }
      }); // dispatch(getTagsData())
      // dispatch(getHotColumn())
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
        className: "learning-cont"
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
        className: "lerning-wrap-left clearfix"
      }, external_react_default.a.createElement("div", {
        className: "wrap-left-item clearfix"
      }, external_react_default.a.createElement("div", {
        className: "left-img one"
      }, external_react_default.a.createElement("h6", null, "\u533A\u5757\u94FE\u901A\u8BC6\u8BFE"), external_react_default.a.createElement("p", null, "\u5728\u8FD9\u91CC\uFF0C\u5C0F\u767D\u4E5F\u80FD\u8BFB\u61C2\u533A\u5757\u94FE")), external_react_default.a.createElement("div", {
        className: "left-cont"
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
      }))), external_react_default.a.createElement("div", {
        className: "wrap-left-item clearfix"
      }, external_react_default.a.createElement("div", {
        className: "left-img two"
      }, external_react_default.a.createElement("h6", null, "\u533A\u5757\u94FE\u5165\u95E8\u5230\u7CBE\u901A"), external_react_default.a.createElement("p", null, "\u664B\u7EA7\uFF0C\u63D0\u5347\u4F60\u5BF9\u533A\u5757\u94FE\u7684\u4E13\u4E1A\u8BA4\u77E5")), external_react_default.a.createElement("div", {
        className: "left-cont"
      }, external_react_default.a.createElement(Title, {
        title: '区块链入门到精通',
        url: _multiappsharing_public["A" /* mixUrl */].main('/userCenter/8873ee080e6040538009ac2805ec5549'),
        introduce: '晋级，提升你对区块链的专业认知'
      }), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: twoVideoTab.contList,
        show: true,
        more: false
      }))), external_react_default.a.createElement("div", {
        className: "wrap-left-item clearfix",
        style: {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "left-img three"
      }, external_react_default.a.createElement("h6", null, "\u533A\u5757\u94FE\u516C\u5F00\u8BFE"), external_react_default.a.createElement("p", null, "\u884C\u4E1A\u6700\u524D\u7EBF\uFF0C\u533A\u5757\u94FE\u4ECE\u4E1A\u8005\u4E13\u9898\u77E5\u8BC6\u5206\u4EAB")), external_react_default.a.createElement("div", {
        className: "left-cont"
      }, external_react_default.a.createElement(Title, {
        title: '区块链公开课',
        url: _multiappsharing_public["A" /* mixUrl */].main('/tags/MarsBit公开课'),
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
      })), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: threeNewsTab.contList,
        show: threeNewsTab.article
      }), external_react_default.a.createElement(Learning_LearningVideoList, {
        cont: threeNewsTab.contList,
        show: threeNewsTab.video,
        more: false
      }))), external_react_default.a.createElement("div", {
        className: "wrap-left-item clearfix",
        style: {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "left-img four"
      }, external_react_default.a.createElement("h6", null, "MarsBit\u5927\u5B66\u8BFE\u7A0B"), external_react_default.a.createElement("p", null, "\u9876\u7EA7\u5BFC\u5E08\u9762\u5BF9\u9762\uFF0C\u5B66\u4E60\u533A\u5757\u94FE\u7B2C\u4E00\u7AD9")), external_react_default.a.createElement("div", {
        className: "left-cont"
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
      }))), external_react_default.a.createElement("div", {
        className: "wrap-left-item clearfix"
      }, external_react_default.a.createElement("div", {
        className: "left-img five"
      }), external_react_default.a.createElement("div", {
        className: "left-cont"
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
      })), external_react_default.a.createElement(Learning_LearningNewsList, {
        cont: fourNewsTab.contList,
        all: 'show',
        show: true
      })))), external_react_default.a.createElement("div", {
        className: "lerning-wrap-right"
      }, external_react_default.a.createElement(Learning_LearningTags, {
        tag: jsonObj.tagsArr
      }), external_react_default.a.createElement(Learning_LearningProject, {
        cont: jsonObj.subjectObj.newsList
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

/* harmony default export */ var containers_Learning = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Learning_Learning));

/***/ })

};;
//# sourceMappingURL=containers-Learning.js.map