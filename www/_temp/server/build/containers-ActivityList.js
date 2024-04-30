require("source-map-support").install();
exports.ids = [3];
exports.modules = {

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/containers/ActivityList/TopBannerSwiper/index.js





/* harmony default export */ var TopBannerSwiper = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      activityRecommendListData: state.activity.activityRecommendListData
    };
  }, external_react_redux_["shallowEqual"]),
      activityRecommendListData = _useSelector.activityRecommendListData;

  return external_react_default.a.createElement("div", {
    className: "activity-list-top-banner-swiper",
    style: {
      height: activityRecommendListData.inforList.length === 0 ? '65px' : '390px'
    }
  }, activityRecommendListData.inforList.length > 2 ? external_react_default.a.createElement("div", {
    className: "activity-list-top-banner-swiper-box"
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "activity-list-top-banner-swiper-primary",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    preventClicks: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: 'false'
    },
    pagination: {
      el: '.swiper-pagination.activity-p',
      type: 'bullets',
      clickable: false
    },
    navigation: {
      nextEl: '.activity-n-x',
      prevEl: '.activity-p-x'
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      // 旋转的角度
      stretch: 300,
      // 拉伸   图片间左右的间距和密集度
      depth: 431,
      // 深度   切换图片间上下的间距和密集度
      modifier: 2,
      // 修正值 该值越大前面的效果越明显
      slideShadows: false // 页面阴影效果

    }
  }, activityRecommendListData && activityRecommendListData.inforList.map(function (item, index) {
    var coverPic = JSON.parse(item.coverPic);
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      key: index
    }, external_react_default.a.createElement("a", {
      title: item.title,
      target: "_blank",
      href: _multiappsharing_public["A" /* mixUrl */].main("/huodong/".concat(item.id))
    }, external_react_default.a.createElement("img", {
      src: coverPic.pc_recommend,
      alt: item.title
    })));
  }), external_react_default.a.createElement("div", {
    className: "swiper-pagination activity-p"
  }), external_react_default.a.createElement("div", {
    className: "swiper-button-next activity-n-x"
  }), external_react_default.a.createElement("div", {
    className: "swiper-button-prev activity-p-x"
  }))) : activityRecommendListData.inforList.length > 0 ? external_react_default.a.createElement("div", {
    className: "activity-list-top-banner-swiper-box",
    style: {
      width: '1200px'
    }
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "activity-list-top-banner-swiper-primary",
    loop: true,
    preventClicks: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: 'false'
    },
    pagination: {
      el: '.swiper-pagination.activity-p',
      type: 'bullets',
      clickable: false
    },
    navigation: {
      nextEl: '.activity-next',
      prevEl: '.activity-prev'
    }
  }, activityRecommendListData && activityRecommendListData.inforList.map(function (item, index) {
    var coverPic = JSON.parse(item.coverPic);
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      key: index
    }, external_react_default.a.createElement("a", {
      title: item.title,
      target: "_blank",
      href: _multiappsharing_public["A" /* mixUrl */].main("/huodong/".concat(item.id))
    }, external_react_default.a.createElement("img", {
      src: coverPic.pc_recommend,
      alt: item.title
    })));
  }), external_react_default.a.createElement("div", {
    className: "swiper-pagination activity-p"
  }), external_react_default.a.createElement("div", {
    className: "activity-next"
  }), external_react_default.a.createElement("div", {
    className: "activity-prev"
  }))) : null);
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: ./assets/redux/actions/activity.js + 1 modules
var activity = __webpack_require__(30);

// EXTERNAL MODULE: ./assets/components/ActivityList/Image/activity-list-item-site.png
var activity_list_item_site = __webpack_require__(482);
var activity_list_item_site_default = /*#__PURE__*/__webpack_require__.n(activity_list_item_site);

// EXTERNAL MODULE: ./assets/components/ActivityList/Image/activity-list-item-time.png
var activity_list_item_time = __webpack_require__(483);
var activity_list_item_time_default = /*#__PURE__*/__webpack_require__.n(activity_list_item_time);

// CONCATENATED MODULE: ./assets/components/ActivityList/ActivityListItem/index.js





/* harmony default export */ var ActivityListItem = (function (props) {
  var id = props.id,
      currentTime = props.currentTime,
      title = props.title,
      place = props.place,
      startTime = props.startTime,
      endTime = props.endTime,
      coverPic = props.coverPic;
  var pic = coverPic ? JSON.parse(coverPic) : {};
  return external_react_default.a.createElement("a", {
    className: "activity-list-item",
    href: _multiappsharing_public["A" /* mixUrl */].main("/huodong/".concat(id))
  }, external_react_default.a.createElement("div", {
    className: "activity-list-item-state ".concat(currentTime > endTime ? 'over' : '')
  }, currentTime > endTime ? '已结束' : '报名中'), external_react_default.a.createElement("img", {
    src: pic.pc ? pic.pc : '',
    alt: title,
    title: title
  }), external_react_default.a.createElement("p", {
    title: title
  }, title), external_react_default.a.createElement("div", {
    className: "activity-list-item-b"
  }, external_react_default.a.createElement("p", {
    className: "activity-list-item-site"
  }, external_react_default.a.createElement("img", {
    src: activity_list_item_site_default.a,
    alt: ""
  }), external_react_default.a.createElement("span", null, place)), external_react_default.a.createElement("p", {
    className: "activity-list-item-time"
  }, external_react_default.a.createElement("img", {
    src: activity_list_item_time_default.a,
    alt: ""
  }), external_react_default.a.createElement("span", null, parseInt(endTime) - parseInt(startTime) < 86400000 ? Object(_multiappsharing_public["l" /* formatTime */])(startTime, 'MM月dd日') : "".concat(Object(_multiappsharing_public["l" /* formatTime */])(startTime, 'MM月dd日'), "-").concat(Object(_multiappsharing_public["l" /* formatTime */])(endTime, 'MM月dd日'))))));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./assets/containers/ActivityList/Image/activity-wx.png
var activity_wx = __webpack_require__(484);
var activity_wx_default = /*#__PURE__*/__webpack_require__.n(activity_wx);

// EXTERNAL MODULE: ./assets/containers/ActivityList/Image/activity-a-wx.png
var activity_a_wx = __webpack_require__(485);
var activity_a_wx_default = /*#__PURE__*/__webpack_require__.n(activity_a_wx);

// EXTERNAL MODULE: ./assets/containers/ActivityList/Image/activity-yx.png
var activity_yx = __webpack_require__(486);
var activity_yx_default = /*#__PURE__*/__webpack_require__.n(activity_yx);

// EXTERNAL MODULE: ./assets/containers/ActivityList/Image/activity-page-left.png
var activity_page_left = __webpack_require__(487);
var activity_page_left_default = /*#__PURE__*/__webpack_require__.n(activity_page_left);

// EXTERNAL MODULE: ./assets/containers/ActivityList/Image/activity-page-right.png
var activity_page_right = __webpack_require__(488);
var activity_page_right_default = /*#__PURE__*/__webpack_require__.n(activity_page_right);

// CONCATENATED MODULE: ./assets/containers/ActivityList/BottomList/index.js














 // 举办地址

var getNav = function getNav(place) {
  var text = '';

  switch (place) {
    case 'all':
      text = '全部';
      break;

    case 'overseas':
      text = '海外';
      break;

    case 'others':
      text = '其他';
      break;

    default:
      text = place;
      break;
  }

  return text;
}; // 举办时间


var timeData = ['全部', '本周', '本月']; // 邮箱地址

var emailAddress = '782257144@qq.com';
/* harmony default export */ var BottomList = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      activityPlaceList: state.activity.activityPlaceList,
      activityAllListData: state.activity.activityAllListData
    };
  }, external_react_redux_["shallowEqual"]),
      activityPlaceList = _useSelector.activityPlaceList,
      activityAllListData = _useSelector.activityAllListData;

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])('all'),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowPlace = _useState2[0],
      setNowPlace = _useState2[1]; // 当前举办地址


  var _useState3 = Object(external_react_["useState"])(1),
      _useState4 = slicedToArray_default()(_useState3, 2),
      nowTime = _useState4[0],
      setNowTime = _useState4[1]; // 当前时间


  var _useState5 = Object(external_react_["useState"])(1),
      _useState6 = slicedToArray_default()(_useState5, 2),
      nowPageNum = _useState6[0],
      setNowPageNum = _useState6[1]; // 当前页码
  // 请求切换数据


  var getListData = Object(external_react_["useCallback"])(function (params) {
    var obj = {
      place: nowPlace,
      timeType: nowTime,
      recommend: 0,
      currentPage: nowPageNum,
      pageSize: 18
    };

    if (params) {
      obj = objectSpread_default()({}, obj, params);
    }

    dispatch(Object(activity["b" /* getActivityList */])(obj));
  }, [nowPlace, nowTime, nowPageNum]); // 页码展示组件

  var pageNumList = Object(external_react_["useCallback"])(function (length) {
    if (length < 9) {
      var list = [];

      var _loop = function _loop(i) {
        list.push(external_react_default.a.createElement("span", {
          className: "page-item-text ".concat(i === nowPageNum ? 'active' : ''),
          key: i,
          onClick: function onClick() {
            return onBtnChangePageNumClick(i);
          }
        }, i));
      };

      for (var i = 1; i <= length; i++) {
        _loop(i);
      }

      return list;
    } else {
      var _list = [];

      if (nowPageNum <= 3) {
        var _loop2 = function _loop2(i) {
          _list.push(external_react_default.a.createElement("span", {
            className: "page-item-text ".concat(i === nowPageNum ? 'active' : ''),
            key: i,
            onClick: function onClick() {
              return onBtnChangePageNumClick(i);
            }
          }, i));
        };

        for (var i = 1; i <= 5; i++) {
          _loop2(i);
        }

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text omit",
          key: 'omit2',
          onClick: function onClick() {
            return onBtnChangePageNumClick(nowPageNum + 5 > length ? length : nowPageNum + 5);
          }
        }, "\xB7\xB7\xB7"));

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text",
          key: 'end',
          onClick: function onClick() {
            return onBtnChangePageNumClick(length);
          }
        }, length));
      } else if (nowPageNum === 4) {
        var _loop3 = function _loop3(i) {
          _list.push(external_react_default.a.createElement("span", {
            className: "page-item-text ".concat(i === nowPageNum ? 'active' : ''),
            key: i,
            onClick: function onClick() {
              return onBtnChangePageNumClick(i);
            }
          }, i));
        };

        for (var i = 1; i <= 6; i++) {
          _loop3(i);
        }

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text omit",
          key: 'omit2',
          onClick: function onClick() {
            return onBtnChangePageNumClick(nowPageNum + 5 > length ? length : nowPageNum + 5);
          }
        }, "\xB7\xB7\xB7"));

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text",
          key: 'end',
          onClick: function onClick() {
            return onBtnChangePageNumClick(length);
          }
        }, length));
      } else if (nowPageNum === length - 3) {
        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text",
          key: 'start',
          onClick: function onClick() {
            return onBtnChangePageNumClick(1);
          }
        }, 1));

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text omit",
          key: 'omit1',
          onClick: function onClick() {
            return onBtnChangePageNumClick(nowPageNum - 5 < 1 ? 1 : nowPageNum - 5);
          }
        }, "\xB7\xB7\xB7"));

        var _loop4 = function _loop4(i) {
          _list.push(external_react_default.a.createElement("span", {
            className: "page-item-text ".concat(i === nowPageNum ? 'active' : ''),
            key: i,
            onClick: function onClick() {
              return onBtnChangePageNumClick(i);
            }
          }, i));
        };

        for (var i = length - 5; i <= length; i++) {
          _loop4(i);
        }
      } else if (nowPageNum >= length - 3) {
        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text",
          key: 'start',
          onClick: function onClick() {
            return onBtnChangePageNumClick(1);
          }
        }, 1));

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text omit",
          key: 'omit1',
          onClick: function onClick() {
            return onBtnChangePageNumClick(nowPageNum - 5 < 1 ? 1 : nowPageNum - 5);
          }
        }, "\xB7\xB7\xB7"));

        var _loop5 = function _loop5(i) {
          _list.push(external_react_default.a.createElement("span", {
            className: "page-item-text ".concat(i === nowPageNum ? 'active' : ''),
            key: i,
            onClick: function onClick() {
              return onBtnChangePageNumClick(i);
            }
          }, i));
        };

        for (var i = length - 4; i <= length; i++) {
          _loop5(i);
        }
      } else {
        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text",
          key: 'start',
          onClick: function onClick() {
            return onBtnChangePageNumClick(1);
          }
        }, 1));

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text omit",
          key: 'omit1',
          onClick: function onClick() {
            return onBtnChangePageNumClick(nowPageNum - 5 < 1 ? 1 : nowPageNum - 5);
          }
        }, "\xB7\xB7\xB7"));

        var _loop6 = function _loop6(i) {
          _list.push(external_react_default.a.createElement("span", {
            className: "page-item-text ".concat(i === nowPageNum ? 'active' : ''),
            key: i,
            onClick: function onClick() {
              return onBtnChangePageNumClick(i);
            }
          }, i));
        };

        for (var i = nowPageNum - 2; i <= nowPageNum + 2; i++) {
          _loop6(i);
        }

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text omit",
          key: 'omit2',
          onClick: function onClick() {
            return onBtnChangePageNumClick(nowPageNum + 5 > length ? length : nowPageNum + 5);
          }
        }, "\xB7\xB7\xB7"));

        _list.push(external_react_default.a.createElement("span", {
          className: "page-item-text",
          key: 'end',
          onClick: function onClick() {
            return onBtnChangePageNumClick(length);
          }
        }, length));
      }

      return _list;
    }
  }, [nowPageNum]); // 点击切换地址按钮事件

  var onBtnChangePlaceClick = Object(external_react_["useCallback"])(function (place) {
    setNowPlace(place);
    setNowPageNum(1);
    getListData({
      place: place,
      currentPage: 1
    });
  }, []); // 点击切换地址按钮事件

  var onBtnChangeTime = Object(external_react_["useCallback"])(function (timeId) {
    setNowTime(timeId);
    setNowPageNum(1);
    getListData({
      timeType: timeId,
      currentPage: 1
    });
  }, []); // 点击切换页码按钮事件

  var onBtnChangePageNumClick = Object(external_react_["useCallback"])(function (num) {
    if (num < 1 || num > activityAllListData.pageCount) return;
    setNowPageNum(num);
    getListData({
      currentPage: num
    });
  }, [activityAllListData]); // 点击一键复制按钮事件

  var onBtnCopyClick = Object(external_react_["useCallback"])(function (value) {
    if (Object(_multiappsharing_public["i" /* execCommandCopy */])(value)) {
      Toast["a" /* default */].success('复制成功');
    } else {
      Toast["a" /* default */].info('复制失败，该浏览器不支持点击复制到剪贴板');
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "activity-list-page-bottom-list"
  }, external_react_default.a.createElement("div", {
    className: "activity-list-page-bottom-list-wrapper"
  }, external_react_default.a.createElement("ul", {
    className: "activity-list-page-bottom-list-nav",
    id: "activityNav"
  }, activityPlaceList && activityPlaceList.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      className: item.place === nowPlace ? 'active' : '',
      onClick: function onClick() {
        return onBtnChangePlaceClick(item.place);
      },
      key: index
    }, getNav(item.place), index !== 0 ? external_react_default.a.createElement("span", null, "(".concat(item.placeCount, ")")) : null);
  })), external_react_default.a.createElement("div", {
    className: "activity-list-page-bottom-list-date"
  }, external_react_default.a.createElement("span", null, "\u65F6\u95F4"), timeData.map(function (item, index) {
    var timeId = index + 1;
    return external_react_default.a.createElement("p", {
      className: timeId === nowTime ? 'active' : '',
      onClick: function onClick() {
        return onBtnChangeTime(timeId);
      },
      key: index
    }, item);
  }), external_react_default.a.createElement("div", {
    className: "contact"
  }, "\u8054\u7CFB\u6211\u4EEC:", external_react_default.a.createElement("div", {
    className: "yx"
  }, external_react_default.a.createElement("img", {
    src: activity_yx_default.a,
    alt: ""
  }), external_react_default.a.createElement("div", {
    className: "yx-cont"
  }, external_react_default.a.createElement("font", {
    id: "fMailbox"
  }, "\u90AE\u7BB1\uFF1A", emailAddress), external_react_default.a.createElement("div", {
    className: "copy",
    onClick: function onClick() {
      return onBtnCopyClick(emailAddress);
    }
  }, "\u590D\u5236"), external_react_default.a.createElement("i", null))), external_react_default.a.createElement("div", {
    className: "wx"
  }, external_react_default.a.createElement("img", {
    src: activity_wx_default.a,
    alt: ""
  }), external_react_default.a.createElement("div", {
    className: "wx-cont"
  }, external_react_default.a.createElement("img", {
    src: activity_a_wx_default.a,
    alt: ""
  }), external_react_default.a.createElement("span", null, "\u5FAE\u4FE1\uFF1Alinghu_chong_"), external_react_default.a.createElement("i", null))))), external_react_default.a.createElement("div", {
    className: "activity-list-page-bottom-list-list"
  }, activityAllListData && activityAllListData.pageCount >= 1 ? activityAllListData.inforList.map(function (item, index) {
    return external_react_default.a.createElement(ActivityListItem, extends_default()({}, item, {
      currentTime: activityAllListData.currentTime,
      key: index
    }));
  }) : external_react_default.a.createElement("div", {
    className: "not-available"
  })), activityAllListData && activityAllListData.pageCount > 1 ? external_react_default.a.createElement("div", {
    className: "activity-list-page-bottom-list-page"
  }, external_react_default.a.createElement("div", {
    className: "activity-list-page-bottom-list-page-list"
  }, external_react_default.a.createElement("p", {
    className: "page-item-btn",
    onClick: function onClick() {
      return onBtnChangePageNumClick(nowPageNum - 1);
    },
    key: 'left'
  }, external_react_default.a.createElement("img", {
    src: activity_page_left_default.a,
    alt: ""
  })), pageNumList(activityAllListData.pageCount), external_react_default.a.createElement("p", {
    className: "page-item-btn",
    onClick: function onClick() {
      return onBtnChangePageNumClick(nowPageNum + 1);
    },
    key: 'right'
  }, external_react_default.a.createElement("img", {
    src: activity_page_right_default.a,
    alt: ""
  })))) : null));
});
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(166);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./assets/containers/ActivityList/index.js





external_swiper_default.a.use([external_swiper_["Autoplay"], external_swiper_["EffectCoverflow"], external_swiper_["Navigation"], external_swiper_["Pagination"]]);
/* harmony default export */ var ActivityList = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    className: "activity-list-page"
  }, external_react_default.a.createElement(TopBannerSwiper, null), external_react_default.a.createElement(BottomList, null));
});

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-list-item-site-c4248d67.png";

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-list-item-time-4f7a3a4a.png";

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-wx-f7149a6e.png";

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-a-wx-9633acf2.png";

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-yx-f7f1a434.png";

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-page-left-87410caf.png";

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "activity-page-right-25ab7611.png";

/***/ })

};;
//# sourceMappingURL=containers-ActivityList.js.map