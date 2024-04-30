require("source-map-support").install();
exports.ids = [1];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttentionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthorName; });
/* unused harmony export AuthorType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);










/** @desc 关注按钮 */

var AttentionButton = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    userInfo: state.multi.login.userInfo.info
  };
})(function (props) {
  var authorInfo = props.authorInfo,
      userInfo = props.userInfo,
      attentionSuccessed = props.attentionSuccessed,
      className = props.className,
      dispatch = props.dispatch;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;
  /** @desc 关注作者 */


  var attentionAuthorFunc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__[/* isLogin */ "b"])(userInfo.passportId, dispatch)) return;
    var type = authorInfo.ifCollect === 1 ? 'delete' : 'add';
    var id = authorInfo.passportId;
    Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* attentionAuthor */ "a"])({
      passportid: userInfo.passportId,
      token: userInfo.token,
      authorId: id
    }, type).then(function (res) {
      if (res.code === 1) {
        attentionSuccessed();
      } else {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info('关注作者错误');
      throw err;
    });
  }, [userInfo, authorInfo]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: attentionAuthorFunc,
    className: "attention-author-button ".concat(authorInfo.ifCollect === 1 ? 'active' : '', " ").concat(className || '')
  }, authorInfo.ifCollect === 1 ? t('guan_zhu_ed') : t('guan_zhu'));
});
/** @desc 头像 */

var Avatar = function Avatar(props) {
  var authorInfo = props.authorInfo,
      iconHide = props.iconHide,
      className = props.className; // iconHide认证类型图标是否隐藏

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation2.t;
  /** @desc 认证样式与名称 */


  var authStyle = null;
  var authName = t('author_info_ordinary_user');

  switch (parseInt(authorInfo.vGrade)) {
    case 0:
      authName = t('author_info_ordinary_user');
      break;

    case 1:
      authStyle = _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
      authName = "MarsBit ".concat(t('author_info_zl_self'));
      break;

    case 2:
      authStyle = _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
      authName = "MarsBit ".concat(t('author_info_zl_media'));
      break;

    case 3:
      authStyle = _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
      authName = "MarsBit ".concat(t('author_info_zl_enterprise'));
      break;

    default:
      authName = t('author_info_ordinary_user');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "w"].main("/userCenter/".concat(authorInfo.passportId)),
    title: authorInfo.nickName,
    className: "author-info-avatar ".concat(className || ''),
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "avatar-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-clear-blur",
    src: authorInfo.iconUrl,
    alt: authorInfo.nickName
  })), authStyle && !iconHide && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: authName,
    className: "avatar-mark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-clear-blur",
    src: authStyle,
    alt: authorInfo.nickName
  })));
};
/** @desc 作者名称 */

var AuthorName = function AuthorName(props) {
  var authorInfo = props.authorInfo,
      className = props.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "w"].main("/userCenter/".concat(authorInfo.passportId)),
    title: authorInfo.nickName,
    className: "author-info-user-name ".concat(className || ''),
    target: "_blank"
  }, authorInfo.nickName);
};
/** @desc 作者类型标签 */

var AuthorType = function AuthorType(props) {
  var authorInfo = props.authorInfo,
      className = props.className;

  var _useTranslation3 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation3.t;
  /** @desc 认证样式与名称 */


  var authStyle = {
    display: 'none'
  };
  var authName = '';

  switch (parseInt(authorInfo.vGrade)) {
    case 1:
      authStyle = {
        display: 'block',
        color: 'rgba(255, 123, 1, 1)',
        background: 'rgba(255, 123, 1, 0.1)'
      };
      authName = t('author_info_self');
      break;

    case 2:
      authStyle = {
        display: 'block',
        color: 'rgba(10, 127, 242, 1)',
        background: 'rgba(10, 127, 242, 0.1)'
      };
      authName = t('author_info_media');
      break;

    case 3:
      authStyle = {
        display: 'block',
        color: 'rgba(10, 127, 242, 1)',
        background: 'rgba(10, 127, 242, 0.1)'
      };
      authName = t('author_info_enterprise');
      break;

    default:
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author-info-user-type ".concat(className || ''),
    style: authStyle
  }, authName);
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-orange-ddf372b8.svg";

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-blue-77c6a4e4.svg";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(122);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(120);









var identityData = [{
  type: 0,
  name: '全部'
}, {
  type: 3,
  name: '投研'
}, {
  type: 1,
  name: '媒体'
}, {
  type: 6,
  name: '社群 '
}, {
  type: 4,
  name: '项目'
}, {
  type: 2,
  name: 'KOL'
  /* , {
     type: 5,
     name: '行情'
  } */

}];

var Author = function Author(props) {
  var authorList = props.authorList,
      dispatch = props.dispatch,
      userInfo = props.userInfo,
      match = props.match,
      history = props.history;
  var order = match.params.order || 5;
  var type = match.params.type || 0;
  var page = match.params.page || 1;
  var attentionSuccessed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_6__[/* getAuthorList */ "d"])({
      type: order,
      currentPage: page,
      identityAuth: type,
      pageSize: 30,
      myPassportId: userInfo.passportId || ''
    })).then(function (res) {
      if (res.code !== 1) {
        _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      console.log(err);
      _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info('获取作者列表错误');
    });
  }, [order, type, page, userInfo]);
  var goPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (curPage) {
    Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_4__[/* arriveAtDom */ "c"])(0);
    history.push("/author/".concat(order, "/").concat(type, "/").concat(curPage));
  }, [order, type]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author-list-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sort"
  }, "\u6392\u5E8F:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/author/5/".concat(type, "/1"),
    className: "".concat(parseInt(order) === 5 && 'active')
  }, "\u63A8\u8350\u4F5C\u8005"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/author/6/".concat(type, "/1"),
    className: "".concat(parseInt(order) === 6 && 'active')
  }, "\u6700\u65B0\u5165\u9A7B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "type"
  }, "\u7C7B\u522B:", identityData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: item.type,
      to: "/author/".concat(order, "/").concat(item.type, "/1"),
      className: "".concat(parseInt(type) === item.type && 'active')
    }, item.name);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_4__[/* isArray */ "n"])(authorList.inforList) && authorList.inforList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_5__[/* Avatar */ "c"], {
      authorInfo: item
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info-up"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_5__[/* AuthorName */ "b"], {
      authorInfo: item
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_5__[/* AttentionButton */ "a"], {
      authorInfo: item,
      attentionSuccessed: attentionSuccessed
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      title: item.introduce
    }, item.introduce)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info-down"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6587\u7AE0\u6570\uFF1A", item.newsCount || 0), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u7C89\u4E1D\u6570\uFF1A", item.followCount || 0))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination",
    style: {
      display: (authorList.inforList.length === 0 || authorList.recordCount < authorList.pageSize) && 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_Pagination__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    currentPage: page,
    pageSize: authorList.pageSize,
    totalData: authorList.recordCount,
    pageChange: goPage
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  var multi = state.multi;
  return {
    authorList: multi.news.author.authorList,
    userInfo: multi.login.userInfo.info
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Author)));

/***/ })

};;
//# sourceMappingURL=containers-Author.js.map