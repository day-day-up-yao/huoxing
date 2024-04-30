require("source-map-support").install();
exports.ids = [8];
exports.modules = {

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(56);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(12);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(165);

// CONCATENATED MODULE: ./assets/containers/Home/TopAdSwiper/index.js




var adLen = 7;
/* harmony default export */ var TopAdSwiper = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      topAdData: state.home.adData[11] ? state.home.adData[11] : [],
      slideTopAdData: state.home.slideTopAdData
    };
  }, external_react_redux_["shallowEqual"]),
      topAdData = _useSelector.topAdData,
      slideTopAdData = _useSelector.slideTopAdData; // console.log(topAdData)


  return external_react_default.a.createElement("div", {
    className: "top-ad-swiper-wrap",
    style: {
      display: topAdData.length < adLen ? 'none' : 'block'
    }
  }, external_react_default.a.createElement("div", {
    className: "top-ad-swiper-contain"
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "top-ad-swiper",
    preventClicks: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    }
  }, slideTopAdData && slideTopAdData.map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      className: "swiper-slide",
      key: index
    }, item.map(function (itemEle, indexEle) {
      return external_react_default.a.createElement("a", {
        className: "slide-item",
        key: indexEle,
        href: !itemEle.url ? '' : itemEle.url,
        target: "_blank",
        title: itemEle.description,
        rel: "nofollow"
      }, external_react_default.a.createElement("img", {
        className: "ad-img",
        src: itemEle.img_url,
        title: itemEle.title,
        alt: itemEle.title
      }), external_react_default.a.createElement("div", {
        className: "ad-info"
      }, external_react_default.a.createElement("h5", null, itemEle.title), external_react_default.a.createElement("p", {
        className: "desc"
      }, itemEle.description)));
    }));
  }))));
});
// CONCATENATED MODULE: ./assets/containers/Home/TopAdImg/index.js


 // import AdImg from '../image/ad-home-top-bg-mclouds.jpg'

/* harmony default export */ var TopAdImg = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      homeTopAdImgData: state.home.homeTopAdImgData
    };
  }, external_react_redux_["shallowEqual"]),
      homeTopAdImgData = _useSelector.homeTopAdImgData;

  return external_react_default.a.createElement("div", {
    className: "top-ad-img-page",
    style: {
      paddingTop: homeTopAdImgData.length > 0 ? '20px' : '0'
    }
  }, external_react_default.a.createElement("a", {
    href: homeTopAdImgData.length > 0 ? homeTopAdImgData[0].url : '',
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "top-ad-img",
    src: homeTopAdImgData.length > 0 ? homeTopAdImgData[0].pcImgSrc : ''
  })));
});
// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./assets/containers/Home/image/swiper-icon-prev.png
var swiper_icon_prev = __webpack_require__(433);
var swiper_icon_prev_default = /*#__PURE__*/__webpack_require__.n(swiper_icon_prev);

// EXTERNAL MODULE: ./assets/containers/Home/image/swiper-icon-next.png
var swiper_icon_next = __webpack_require__(434);
var swiper_icon_next_default = /*#__PURE__*/__webpack_require__.n(swiper_icon_next);

// EXTERNAL MODULE: ./assets/containers/Home/image/ad-carousel-title.png
var ad_carousel_title = __webpack_require__(435);
var ad_carousel_title_default = /*#__PURE__*/__webpack_require__.n(ad_carousel_title);

// CONCATENATED MODULE: ./assets/containers/Home/LeftAdCarousel/index.js








/* harmony default export */ var LeftAdCarousel = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      primaryImgData: state.home.primaryImgData.length > 6 ? state.home.primaryImgData.slice(0, 6) : state.home.primaryImgData,
      recommendImgData: state.home.recommendImgData
    };
  }, external_react_redux_["shallowEqual"]),
      primaryImgData = _useSelector.primaryImgData,
      recommendImgData = _useSelector.recommendImgData; // console.log(primaryImgData, recommendImgData)


  return external_react_default.a.createElement("div", {
    className: "left-ad-carousel"
  }, external_react_default.a.createElement(react_["Swiper"], {
    className: "left-ad-carousel-primary",
    preventClicks: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next.rm-next',
      prevEl: '.swiper-button-prev.rm-prev'
    },
    pagination: {
      el: '.swiper-pagination.rm-pag',
      type: 'progressbar'
    }
  }, primaryImgData && primaryImgData.map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      className: "comment-news",
      key: index
    }, external_react_default.a.createElement("a", {
      title: item.title,
      target: "_blank",
      href: item.url
    }, external_react_default.a.createElement("div", {
      className: "img-div"
    }, external_react_default.a.createElement("img", {
      className: "news-img",
      alt: item.title,
      src: item.pcImgSrc
    })), external_react_default.a.createElement("span", {
      className: "mode"
    }), external_react_default.a.createElement("div", {
      className: "title"
    }, item.title), item.useType === 1 ? external_react_default.a.createElement("div", {
      className: "ad-title"
    }, external_react_default.a.createElement("img", {
      src: ad_carousel_title_default.a
    })) : null));
  }), external_react_default.a.createElement("div", {
    className: "perv-bg"
  }, external_react_default.a.createElement("div", {
    className: "swiper-button-prev rm-prev"
  }, external_react_default.a.createElement("img", {
    className: "btn-img",
    src: swiper_icon_prev_default.a
  }))), external_react_default.a.createElement("div", {
    className: "next-bg"
  }, external_react_default.a.createElement("div", {
    className: "swiper-button-next rm-next"
  }, external_react_default.a.createElement("img", {
    className: "btn-img",
    src: swiper_icon_next_default.a
  }))), external_react_default.a.createElement("div", {
    className: "swiper-pagination rm-pag"
  })), external_react_default.a.createElement(react_["Swiper"], {
    className: "left-ad-carousel-recommend",
    preventClicks: false,
    pagination: {
      el: '.swiper-pagination.left-ad-carousel-recommend-pag',
      type: 'bullets',
      clickable: true,
      bulletClass: 'left-ad-carousel-recommend-pag-customs',
      bulletActiveClass: 'left-ad-carousel-recommend-pag-customs-active'
    }
  }, recommendImgData && recommendImgData.map(function (item, index) {
    return external_react_default.a.createElement(react_["SwiperSlide"], {
      className: "left-ad-carousel-recommend-item",
      key: index
    }, item.map(function (itemEle, indexEle) {
      return external_react_default.a.createElement("div", {
        className: "left-ad-carousel-recommend-item-item",
        key: indexEle
      }, external_react_default.a.createElement("a", {
        className: "left-ad-carousel-recommend-item-tag",
        target: "_blank",
        href: _multiappsharing_public["A" /* mixUrl */].news("/tags/".concat(itemEle.tagsV2 ? JSON.parse(itemEle.tagsV2)[0].name : ''))
      }, itemEle.tagsV2 && JSON.parse(itemEle.tagsV2)[0].name), external_react_default.a.createElement("a", {
        className: "left-ad-carousel-recommend-item-title",
        target: "_blank",
        href: itemEle.url
      }, itemEle.title), external_react_default.a.createElement("a", {
        className: "left-ad-carousel-recommend-item-text",
        target: "_blank",
        href: itemEle.url
      }, itemEle.description !== '' ? itemEle.description : itemEle.title), indexEle === 0 ? external_react_default.a.createElement("div", {
        className: "left-ad-carousel-recommend-item-line"
      }) : null);
    }));
  }), external_react_default.a.createElement("div", {
    className: "swiper-pagination left-ad-carousel-recommend-pag"
  })));
});
// CONCATENATED MODULE: ./assets/containers/Home/LeftAdRecommend/index.js




 // import moreIcon from '../image/ad-recommend-btn.png'

/* harmony default export */ var LeftAdRecommend = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      adRecommend: state.home.adRecommend
    };
  }, external_react_redux_["shallowEqual"]),
      adRecommend = _useSelector.adRecommend;

  var linkFn = Object(external_react_["useCallback"])(function (idlink) {
    if (typeof window !== 'undefined') {
      var reqhost = window.location;
      return _multiappsharing_public["A" /* mixUrl */].news("/".concat(idlink, ".html"), reqhost);
    } else {
      return _multiappsharing_public["A" /* mixUrl */].news("/".concat(idlink, ".html"));
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "left-ad-news",
    style: {
      display: adRecommend.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "left-ad-news-header"
  }, external_react_default.a.createElement("div", {
    className: "left-ad-news-title"
  }, "\u7CBE\u9009\u5185\u5BB9")), external_react_default.a.createElement("div", {
    className: "left-ad-news-list"
  }, adRecommend && adRecommend.map(function (item, index) {
    var nameArr = item.tagsV2 && Object(_multiappsharing_public["r" /* isJson */])(item.tagsV2) && Array.isArray(JSON.parse(item.tagsV2)) && JSON.parse(item.tagsV2).length > 0 ? JSON.parse(item.tagsV2) : null;
    return external_react_default.a.createElement("div", {
      className: "left-ad-news-item",
      key: index
    }, external_react_default.a.createElement("a", {
      className: "left-ad-news-text",
      target: "_blank",
      href: linkFn(item.id)
    }, item.title), external_react_default.a.createElement("div", {
      className: "top-news-tags-list",
      style: {
        display: 'none'
      }
    }, nameArr && nameArr.map(function (tagItem, tagIndex) {
      if (tagIndex === 0 || tagIndex === 1 && nameArr[0].name.length + nameArr[1].name.length < 10) {
        return external_react_default.a.createElement("a", {
          className: "top-news-time",
          target: "_blank",
          href: _multiappsharing_public["A" /* mixUrl */].news("/tags/".concat(tagItem.name)),
          key: tagIndex
        }, tagItem.name);
      } else {
        return null;
      }
    })));
  })));
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: ./_multiappsharing/components/NewsListItem/index.js + 1 modules
var NewsListItem = __webpack_require__(430);

// CONCATENATED MODULE: ./_multiappsharing/components/NewsAdImgItem/index.js


/* harmony default export */ var NewsAdImgItem = (function (props) {
  var url = props.url,
      pcImgSrc = props.pcImgSrc,
      title = props.title;
  return external_react_default.a.createElement("a", {
    className: "news-ad-img-item",
    href: url,
    target: "_blank"
  }, external_react_default.a.createElement("div", {
    className: "news-ad-img-item-title"
  }, external_react_default.a.createElement("h5", null, title)), external_react_default.a.createElement("img", {
    className: "news-ad-img-item-img",
    src: pcImgSrc,
    alt: ""
  }));
});
// CONCATENATED MODULE: ./_multiappsharing/components/NewsAuthorItem/index.js
 // import { mixUrl } from '../../public/index'


/* harmony default export */ var NewsAuthorItem = (function (props) {
  var listData = props.listData;
  return external_react_default.a.createElement("div", {
    className: "news-author-item"
  }, listData && listData.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      className: "news-author-item-one",
      href: "/userCenter/".concat(item.passportId),
      target: "_blank",
      key: index
    }, external_react_default.a.createElement("img", {
      className: "news-author-item-img",
      src: item.iconUrl
    }), external_react_default.a.createElement("div", {
      className: "news-author-item-title"
    }, item.nickName), external_react_default.a.createElement("div", {
      className: "news-author-item-text"
    }, item.introduce));
  }));
});
// CONCATENATED MODULE: ./_multiappsharing/components/NewsFlashItem/index.js




/* harmony default export */ var NewsFlashItem = (function (props) {
  var content = props.content,
      createdTime = props.createdTime,
      tagsV2 = props.tagsV2,
      serverTime = props.serverTime,
      hotCounts = props.hotCounts,
      tagsHide = props.tagsHide,
      hotShow = props.hotShow,
      id = props.id;
  var startIndex = content.indexOf('【') === -1 ? 0 : content.indexOf('【') + 1;
  var endIndex = content.indexOf('】') === -1 ? 0 : content.indexOf('】');
  var newTitle = content.substring(startIndex, endIndex);
  var newContent = content.substring(endIndex === 0 ? 0 : endIndex + 1).replace(/(<\/?p.*?>)/g, '').replace(/(<\/?a.*?>)/g, ''); // let newUrl = mixUrl.news(`/flash/${id}.html`)

  var _useState = Object(external_react_["useState"])(_multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"))),
      _useState2 = slicedToArray_default()(_useState, 2),
      linkurl = _useState2[0],
      setLinkurl = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    if (typeof window !== 'undefined') {
      var reqhost = window.location;
      setLinkurl(_multiappsharing_public["A" /* mixUrl */].news("/flash/".concat(id, ".html"), reqhost));
    }
  }, [id]);
  return external_react_default.a.createElement("div", {
    className: "news-flash-item"
  }, external_react_default.a.createElement("a", {
    className: "title-synopsis",
    title: newTitle,
    href: linkurl,
    target: "_blank"
  }, external_react_default.a.createElement("h5", null, external_react_default.a.createElement("span", null, "\u5FEB\u8BAF"), newTitle), external_react_default.a.createElement("p", null, newContent)), external_react_default.a.createElement("div", {
    className: "relate-info"
  }, external_react_default.a.createElement("div", {
    className: "author-time"
  }, external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(createdTime, serverTime && serverTime !== '' && serverTime))), !tagsHide && Object(_multiappsharing_public["F" /* stringArray */])(tagsV2).length !== 0 && external_react_default.a.createElement("div", {
    className: "tags",
    style: {
      display: 'none'
    }
  }, "\u5173\u952E\u5B57:", Object(_multiappsharing_public["F" /* stringArray */])(tagsV2).map(function (item, index) {
    if (index >= 3 || !item.name) return false;
    var symbol = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'symbol');
    var fullname = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'full_name');
    var link = (item.type === 3 || symbol === '') && _multiappsharing_public["A" /* mixUrl */].news("/tags/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(item.name))) || _multiappsharing_public["A" /* mixUrl */].main("/marketsDetail/".concat(fullname, "/").concat(symbol));
    var name = (item.type === 3 || fullname === '') && item.name || fullname;
    return (// <a
      //     key={item.id}
      //     title={item.name}
      //     href={link}
      //     target="_blank">
      //     &nbsp;&nbsp;
      //     {name}
      //     {index < 2 && index !== stringArray(tagsV2).length - 1 && ','}
      // </a>
      external_react_default.a.createElement("a", {
        className: "relate-text",
        key: item.id,
        title: item.name,
        href: link,
        target: "_blank"
      }, name)
    );
  })), hotShow && external_react_default.a.createElement("div", {
    className: "hot"
  }, "\u70ED\u5EA6:\xA0", hotCounts)));
});
// EXTERNAL MODULE: ./_multiappsharing/components/LoadMore/index.js
var LoadMore = __webpack_require__(235);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: ./assets/redux/actions/home.js + 1 modules
var home = __webpack_require__(15);

// CONCATENATED MODULE: ./assets/containers/Home/LeftNewsList/index.js



 // import { useSelector, shallowEqual, useDispatch } from 'react-redux'









 // import defaultImg from '../image/default-img.png'
// 头条ID

var headlinesId = 10002;
/* harmony default export */ var LeftNewsList = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      newsChannelIdData: state.home.newsChannelIdData,
      newsHeadlinesData: state.home.newsHeadlinesData,
      newsTotalListData: state.home.newsTotalListData
    };
  }),
      newsChannelIdData = _useSelector.newsChannelIdData,
      newsHeadlinesData = _useSelector.newsHeadlinesData,
      newsTotalListData = _useSelector.newsTotalListData; // console.log(newsHeadlinesData)


  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])(newsHeadlinesData),
      _useState2 = slicedToArray_default()(_useState, 2),
      newsList = _useState2[0],
      setNewsList = _useState2[1]; // 当前选中的列表


  var _useState3 = Object(external_react_["useState"])(headlinesId),
      _useState4 = slicedToArray_default()(_useState3, 2),
      nowTypeId = _useState4[0],
      setNowTypeId = _useState4[1]; // 当前选中的列表ID


  var _useState5 = Object(external_react_["useState"])({}),
      _useState6 = slicedToArray_default()(_useState5, 2),
      idPageList = _useState6[0],
      setIdPageList = _useState6[1]; // 各个列表当前页数


  var isLoading = Object(external_react_["useRef"])(false); // 是否在加载中

  Object(external_react_["useEffect"])(function () {
    if (Object.keys(idPageList).length > 0) return;

    if (newsChannelIdData && newsChannelIdData.length) {
      var listData = newsChannelIdData.concat();
      var pageList = {};
      listData.map(function (item) {
        pageList[item.channelId] = 1;
      });
      setIdPageList(pageList);
    }
  }, [newsChannelIdData, idPageList]); // 滚动加载更多

  Object(external_react_["useEffect"])(function () {
    var scrollFunc = Object(_multiappsharing_public["L" /* windowScroll */])(function (res) {
      var currentPage = idPageList[nowTypeId];
      if (res !== 'down' || currentPage > 3 || isLoading.current) return false;
      var $footerWrapper = document.getElementById('footerWrapper');

      if (Object(_multiappsharing_public["E" /* scrollOffset */])().top + Object(_multiappsharing_public["K" /* windowOffset */])().height > Object(_multiappsharing_public["g" /* elementOffset */])($footerWrapper).top - Object(_multiappsharing_public["K" /* windowOffset */])().height / 2) {
        loadMore();
      }
    });
    return function () {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [isLoading, nowTypeId, idPageList, newsHeadlinesData]); // 加载更多

  var loadMore = Object(external_react_["useCallback"])(function () {
    if (isLoading.current) return false;
    isLoading.current = true;

    if (nowTypeId === headlinesId) {
      var data = newsHeadlinesData.concat();
      var time = data && Object(_multiappsharing_public["n" /* isArray */])(data) && data.length > 2 ? data[data.length - 1].publishTime : new Date().getTime();
      dispatch(Object(home["g" /* getNewsHeadlines */])(time, 'isMore')).then(function (res) {
        isLoading.current = false;

        if (res.code === 1) {
          var list = res.obj;

          if (!Object(_multiappsharing_public["n" /* isArray */])(list) || list.length === 0) {
            Toast["a" /* default */].info('暂无更多新闻头条');
          } else {
            var objList = idPageList;
            objList[nowTypeId] += 1;
            setIdPageList(objList);
          }
        } else {
          Toast["a" /* default */].info(res.msg);
        }
      })["catch"](function (err) {
        console.log(err);
        Toast["a" /* default */].info('获取列表错误');
      });
    } else {
      var currPage = parseInt(newsTotalListData[nowTypeId].currentPage) + 1;
      var pageSize = newsTotalListData[nowTypeId].pageSize;

      var _data = newsTotalListData[nowTypeId].inforList.concat();

      var lastTime = _data && Object(_multiappsharing_public["n" /* isArray */])(_data) && _data.length > 2 ? _data[_data.length - 1].publishTime : new Date().getTime();
      dispatch(Object(home["h" /* getNewsMoreList */])(nowTypeId, currPage, pageSize, lastTime)).then(function (res) {
        isLoading.current = false;

        if (res.code === 1) {
          var list = res.obj.inforList;

          if (!Object(_multiappsharing_public["n" /* isArray */])(list) || list.length === 0) {
            Toast["a" /* default */].info('暂无更多新闻');
          } else {
            var objList = idPageList;
            objList[nowTypeId] += 1;
            setIdPageList(objList);
          }
        } else {
          Toast["a" /* default */].info(res.msg);
        }
      })["catch"](function (err) {
        console.log(err);
        Toast["a" /* default */].info('获取列表错误');
      });
    }
  }, [isLoading, idPageList, nowTypeId, newsHeadlinesData, newsTotalListData]); // 点击切换类型按钮事件

  var onBtnTypeClick = Object(external_react_["useCallback"])(function (id) {
    if (nowTypeId !== Number(id)) {
      setNowTypeId(Number(id));

      if (Number(id) === headlinesId) {
        setNewsList(newsHeadlinesData);
      } else {
        setNewsList(newsTotalListData[Number(id)].inforList);
      }
    }
  }, [nowTypeId, newsHeadlinesData, newsTotalListData]);
  Object(external_react_["useEffect"])(function () {
    if (nowTypeId === headlinesId) {
      setNewsList(newsHeadlinesData);
    } else {
      var data = newsTotalListData[nowTypeId].inforList.concat();
      setNewsList(data);
    }
  }, [nowTypeId, newsHeadlinesData, newsTotalListData]);
  return external_react_default.a.createElement("div", {
    className: "left-news-list",
    style: {
      display: newsChannelIdData.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "left-news-list-tags"
  }, newsChannelIdData && newsChannelIdData.slice(0, 13).map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "left-news-list-tags-item ".concat(nowTypeId === Number(item.channelId) ? 'active' : ''),
      onClick: function onClick() {
        return onBtnTypeClick(item.channelId);
      },
      key: index
    }, item.channelName);
  })), external_react_default.a.createElement("div", {
    className: "block-style"
  }, external_react_default.a.createElement("div", {
    className: "news-list-content"
  }, newsList && newsList.map(function (item, index) {
    if (nowTypeId === headlinesId) {
      // 隐藏指定标签信息流内容
      if (item.infoType === 'author' || item.infoType === 'notice') return;
    }

    var itemList = nowTypeId === headlinesId ? item.infoObj : item;
    var arrTag = !itemList.tags || typeof itemList.tags !== 'string' ? [] : itemList.tags.split(',');
    var authCat = null;
    arrTag.map(function (itemTag) {
      switch (itemTag) {
        case '火星号精选':
          authCat = '火星号';
          break;

        case '火星深度':
          authCat = '深度';
          break;

        case '火星一线':
          authCat = '一线';
          break;

        case '火星独家':
          authCat = '独家';
          break;

        case '火星原创':
          authCat = '原创';
          break;

        case '火星快译':
          authCat = '快译';
          break;

        case '火星特约':
          authCat = '特约';
          break;
      }
    });
    var obj = {
      authCat: authCat
    };

    if (nowTypeId === headlinesId && item.infoType === 'adImg') {
      return external_react_default.a.createElement(NewsAdImgItem, extends_default()({}, itemList, {
        key: index
      }));
    } else if (nowTypeId === headlinesId && item.infoType === 'author') {
      return external_react_default.a.createElement(NewsAuthorItem, {
        listData: itemList,
        key: index
      });
    } else if (nowTypeId === headlinesId && item.infoType === 'live') {
      return external_react_default.a.createElement(NewsFlashItem, extends_default()({}, itemList, {
        key: index
      }));
    } else {
      if (item.infoType) {
        obj.infoType = item.infoType;
      }

      return external_react_default.a.createElement(NewsListItem["a" /* default */], extends_default()({}, itemList, obj, {
        key: index
      }));
    }
  })), external_react_default.a.createElement("div", {
    className: "not-cont",
    style: {
      display: newsList.length === 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("p", null, "\u6682\u65E0\u5185\u5BB9")), external_react_default.a.createElement(LoadMore["a" /* default */], {
    style: {
      display: newsList.length === 0 ? 'none' : 'block'
    },
    onClick: function onClick() {
      loadMore();
    }
  })));
});
// CONCATENATED MODULE: ./assets/containers/Home/RightAdOneself/index.js



/* harmony default export */ var RightAdOneself = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      adOneselfData: state.home.adOneselfData
    };
  }),
      adOneselfData = _useSelector.adOneselfData;

  return external_react_default.a.createElement("div", {
    className: "right-ad-oneself",
    style: {
      display: adOneselfData.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "right-ad-oneself-container"
  }, adOneselfData && adOneselfData.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "right-ad-oneself-list clearfix",
      rel: "nofollow",
      key: index
    }, external_react_default.a.createElement("a", {
      className: "right-ad-oneself-icon",
      href: item.url,
      target: "_blank"
    }, external_react_default.a.createElement("img", {
      src: item.img_url,
      title: item.title,
      alt: item.title
    })), external_react_default.a.createElement("div", {
      className: "right-ad-oneself-text",
      title: item.title
    }, external_react_default.a.createElement("div", {
      className: "right-ad-oneself-text-sp"
    }, external_react_default.a.createElement("a", {
      href: item.url,
      target: "_blank"
    }, external_react_default.a.createElement("h5", null, item.title)), external_react_default.a.createElement("a", {
      className: "right-ad-oneself-app-btn ".concat(item.appUrl === '' ? 'right-ad-oneself-text-sp-off' : ''),
      href: item.appUrl,
      target: "_blank"
    }, item.appType, external_react_default.a.createElement("div", {
      className: "right-ad-oneself-app-btn-img"
    }))), external_react_default.a.createElement("a", {
      href: item.url,
      target: "_blank"
    }, external_react_default.a.createElement("p", null, item.description))));
  })));
});
// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightDownloadBox/index.js
var RightDownloadBox = __webpack_require__(189);

// CONCATENATED MODULE: ./assets/containers/Home/RightRankNews/index.js




/* harmony default export */ var RightRankNews = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      rankNews: state.home.rankNews
    };
  }, external_react_redux_["shallowEqual"]),
      rankNews = _useSelector.rankNews;

  return external_react_default.a.createElement("div", {
    className: "right-rank-news",
    style: {
      display: rankNews && rankNews.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("h3", {
    className: "right-rank-news-title"
  }, "24H\u70ED\u95E8\u65B0\u95FB"), external_react_default.a.createElement("div", {
    className: "right-rank-news-sort"
  }, rankNews && rankNews.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "right-rank-news-list",
      key: index
    }, external_react_default.a.createElement("span", null, index + 1), external_react_default.a.createElement("a", {
      className: "right-text",
      title: item.title,
      target: "_blank",
      href: _multiappsharing_public["A" /* mixUrl */].news("/".concat(item.id, ".html"))
    }, item.title));
  })));
});
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(19);

// EXTERNAL MODULE: ./assets/containers/Home/image/default-img.png
var default_img = __webpack_require__(436);
var default_img_default = /*#__PURE__*/__webpack_require__.n(default_img);

// CONCATENATED MODULE: ./assets/containers/Home/RightSubject/index.js






/* harmony default export */ var RightSubject = (function () {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      subjectData: state.home.subjectData
    };
  }, external_react_redux_["shallowEqual"]),
      subjectData = _useSelector.subjectData;

  return external_react_default.a.createElement("div", {
    className: "right-subject",
    style: {
      display: subjectData.length > 0 ? 'block' : 'none'
    }
  }, external_react_default.a.createElement("a", {
    className: "right-subject-title",
    href: _multiappsharing_public["A" /* mixUrl */].news("/feature"),
    target: "_blank"
  }, t('most_new_topic'), external_react_default.a.createElement("div", {
    className: "right-subject-arrow"
  })), external_react_default.a.createElement("div", {
    className: "right-subject-list"
  }, subjectData && subjectData.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      className: "right-subject-item",
      key: index,
      title: item.dTopic.topicName,
      target: "_blank",
      href: item.aUrl
    }, external_react_default.a.createElement("img", {
      className: "right-subject-item-img",
      src: item.dTopic.newSmallPcImgSrc ? item.dTopic.newSmallPcImgSrc : default_img_default.a,
      alt: item.dTopic.topicName
    }), external_react_default.a.createElement("h5", {
      className: "right-subject-item-title"
    }, item.dTopic.topicName));
  })));
});
// EXTERNAL MODULE: ./assets/containers/Home/RightTags/index.js
var RightTags = __webpack_require__(236);

// EXTERNAL MODULE: ./_multiappsharing/components/Home/RightFlashAndDynamic/index.js
var RightFlashAndDynamic = __webpack_require__(237);

// EXTERNAL MODULE: ./assets/containers/Home/Popup/index.js + 1 modules
var Popup = __webpack_require__(429);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(166);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./assets/containers/Home/index.js




 // import TopDefiMarketData from './TopDefiMarketData'

 // import TopCoinSwiper from './TopCoinSwiper'








 // import RightVideo from './RightVideo'
// import RightLive from 'multiComps/Home/RightLive'
// import RightControllerLive from './RightControllerLive'

 // import RightRiskHint from './RightRiskHint'
// import RightElement from './RightElement'

 // import RightMpAuthor from './RightMpAuthor'
// import RightAdLive from './RightAdLive'





external_swiper_default.a.use([external_swiper_["Autoplay"], external_swiper_["Navigation"], external_swiper_["Pagination"]]);
/* harmony default export */ var Home = __webpack_exports__["default"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      festivalCloseState: state.home.festivalCloseState // bannerv2list: state.home.elementBannerList

    };
  }),
      festivalCloseState = _useSelector.festivalCloseState;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(function () {
    // dispatch(getAdData())
    var festivalCloseTime = external_js_cookie_default.a.get(_multiappsharing_public["f" /* cookiesName */].festival);
    if (!festivalCloseTime || festivalCloseState) return; // 设置过、且设置的已过今天：移除cookie中设置的时间

    external_js_cookie_default.a.remove(_multiappsharing_public["f" /* cookiesName */].festival);
  }, []);
  var festivalTime = false;
  var nowTime = new Date().getTime();

  if (nowTime > external_dayjs_default()('2021-02-04 00:00').valueOf() && nowTime < external_dayjs_default()('2021-02-19 00:00').valueOf()) {
    festivalTime = true;
  }

  return external_react_default.a.createElement("div", {
    className: "home-festival-bg ".concat(festivalTime && !festivalCloseState ? 'active' : '')
  }, external_react_default.a.createElement("div", {
    className: "home-festival-bg-img"
  }), external_react_default.a.createElement("div", {
    className: "home-page-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "home-festival-bg-close",
    onClick: function onClick() {
      dispatch(Object(home["a" /* festivalClose */])(true));
      external_js_cookie_default.a.set(_multiappsharing_public["f" /* cookiesName */].festival, external_dayjs_default()(new Date()).format('YYYY-MM-DD'));
    }
  }, external_react_default.a.createElement("span", null, "\u2715"), "\u5173\u95ED"), external_react_default.a.createElement(TopAdImg, null), external_react_default.a.createElement(TopAdSwiper, null), external_react_default.a.createElement("div", {
    className: "home-page-main-box"
  }, external_react_default.a.createElement("div", {
    className: "home-page-main-box-left"
  }, external_react_default.a.createElement(LeftAdCarousel, null), external_react_default.a.createElement(LeftAdRecommend, null), external_react_default.a.createElement(LeftNewsList, null)), external_react_default.a.createElement("div", {
    className: "home-page-main-box-right"
  }, external_react_default.a.createElement(RightAdOneself, null), external_react_default.a.createElement(RightFlashAndDynamic["a" /* default */], {
    onlyOne: 'flash'
  }), external_react_default.a.createElement(RightDownloadBox["a" /* default */], null), external_react_default.a.createElement(RightRankNews, null), external_react_default.a.createElement("div", {
    className: "right-subject-tags"
  }, external_react_default.a.createElement(RightSubject, null), external_react_default.a.createElement(RightTags["a" /* default */], null)))), external_react_default.a.createElement(Popup["a" /* default */], null)));
});

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(190);
/* harmony import */ var _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(191);
/* harmony import */ var _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
/* harmony import */ var _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var isLive = props.isLive;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      and = _useState2[0],
      setAnd = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_redux_actions_public__WEBPACK_IMPORTED_MODULE_3__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
      if (res.code === 1) {
        setAnd(res.obj);
      } else {
        _Toast__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, [and]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box ".concat(isLive !== undefined ? 'right-download-box-live' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-title"
  }, t('download_marsbit_app')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-content"
  }, t('marsbit_app_desc')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "right-download-box-btn right-download-box-btn-color1",
    href: "https://apps.apple.com/cn/app/id1343659925",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "right-download-box-btn-img",
    src: _public_img_right_download_ios_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      marginRight: '8px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-text"
  }, "iPhone \u7248")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "right-download-box-btn right-download-box-btn-color2",
    href: and,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "right-download-box-btn-img",
    src: _public_img_right_download_android_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      marginRight: '6px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-text"
  }, "Android \u7248")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-code"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-download-box-btn-code-show"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "right-download-box-btn-code-show-img",
    src: _public_img_right_download_QRcode_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
  })))));
});

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-ios-bfae97d1.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-android-e33868e0.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-QRcode-e79e9b7e.jpg";

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// CONCATENATED MODULE: ./_multiappsharing/public/hooks/useMemo.js

/* harmony default export */ var useMemo = (function (_ref) {
  var children = _ref.children,
      _ref$deps = _ref.deps,
      deps = _ref$deps === void 0 ? [] : _ref$deps,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? external_react_["Fragment"] : _ref$wrap;
  // 转换参数为大写开头
  var Wrap = wrap; // 这里由于React 的限制，必须要返回单一节点，因此做了一层包装。
  // 包装节点可自定义传入一个组件类型
  // eslint-disable-next-line react-hooks/exhaustive-deps

  var comp = Object(external_react_["useMemo"])(children, deps);
  return external_react_default.a.createElement(Wrap, null, comp);
});
// CONCATENATED MODULE: ./_multiappsharing/components/Popup/index.js



/* harmony default export */ var Popup = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      show = _ref.show,
      close = _ref.close,
      closeIcon = _ref.closeIcon,
      closeClassName = _ref.closeClassName,
      wrapperClassName = _ref.wrapperClassName;
  // 显示时让弹出框在最上层
  // 按项目布局定--只需要layout-content在layout-header,layout-header-auto等外层布局上就好
  Object(external_react_["useEffect"])(function () {
    var layoutContent = document.querySelector('.layout-content');
    if (!layoutContent) return;
    var zIndexStyle = '; z-index: 10';

    var removeZindex = function removeZindex() {
      var defaultStyle = layoutContent.getAttribute('style');
      defaultStyle && defaultStyle.indexOf(zIndexStyle) > -1 && layoutContent.setAttribute('style', defaultStyle.replace(zIndexStyle, ''));
    };

    if (show) {
      var defaultStyle = layoutContent.getAttribute('style');
      defaultStyle && defaultStyle.indexOf(zIndexStyle) === -1 && layoutContent.setAttribute('style', defaultStyle + zIndexStyle);
    } else {
      removeZindex();
    }

    return function () {
      removeZindex();
    };
  }, [show]);
  return external_react_default.a.createElement(useMemo, {
    deps: [children, show, close]
  }, function () {
    return external_react_default.a.createElement("div", {
      className: "popup-wrapper ".concat(wrapperClassName || ''),
      style: {
        display: show ? 'flex' : 'none'
      }
    }, external_react_default.a.createElement("div", {
      className: "popup-content"
    }, external_react_default.a.createElement("img", {
      className: "popup-close ".concat(closeClassName || ''),
      src: closeIcon,
      onClick: close
    }), children), external_react_default.a.createElement("div", {
      className: "popup-mask",
      onClick: close
    }));
  });
});

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var LoadMore = function LoadMore(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: "load-more-btn"
  }), "\u52A0\u8F7D\u66F4\u591A");
};

/* harmony default export */ __webpack_exports__["a"] = (LoadMore);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      tagsData: state.home.tagsData
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]),
      tagsData = _useSelector.tagsData;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-tags",
    style: {
      display: tagsData.length > 0 ? 'block' : 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "right-tags-title"
  }, t('hot_door_title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-tags-cont"
  }, tagsData && tagsData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      style: {
        display: item.name ? 'flex' : 'none'
      },
      href: item.url,
      target: "_blank",
      title: item.name,
      key: index
    }, item.name);
  })));
});

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var onlyOne = props.onlyOne; // onlyOne 只显示其中1个  flash: 快讯  dynamic: 项目行情(潜伏日历)

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      showlivesData: state.multi.home.showlivesData,
      calendarData: state.multi.home.calendarData
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]),
      showlivesData = _useSelector.showlivesData,
      calendarData = _useSelector.calendarData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(onlyOne && onlyOne === 'dynamic' ? calendarData : showlivesData),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(onlyOne && onlyOne === 'dynamic' ? 'dynamic' : 'flash'),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      listType = _useState4[0],
      setListType = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    switch (listType) {
      case 'flash':
        setListData(showlivesData);
        break;

      case 'dynamic':
        setListData(calendarData);
        break;

      default:
        break;
    }
  }, [showlivesData, calendarData, listType]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic"
  }, onlyOne && onlyOne === 'flash' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "right-flash-and-dynamic-title-box",
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* mixUrl */ "A"].news("/flash"),
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title right-flash-and-dynamic-title-only"
  }, "7x24H ", t('headernavtwo')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-arrow"
  })), onlyOne && onlyOne === 'dynamic' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title right-flash-and-dynamic-title-only"
  }, t('product_dynamics'))), !onlyOne && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title ".concat(listType === 'flash' ? 'right-flash-and-dynamic-title-active' : ''),
    onClick: function onClick() {
      setListType('flash');
    }
  }, "7x24H ", t('headernavtwo'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-line"
  })), listData && listData.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-title ".concat(listType === 'dynamic' ? 'right-flash-and-dynamic-title-active' : ''),
    onClick: function onClick() {
      setListType('dynamic');
    }
  }, t('product_dynamics'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right-flash-and-dynamic-line"
  }))), listData && listData.length > 0 && listData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "incident-list ".concat(item.tag && parseInt(item.tag) === 2 ? 'import' : ''),
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("font", {
      className: "yuan"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "list-top"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "list-date"
    }, listType === 'flash' ? Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* formatPublishTime */ "k"])(item.createdTime) : Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* formatTime */ "l"])(item.publishTime * 1000, 'MM-dd'))), item.url !== '' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.url,
      target: "_blank"
    }, item.title) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'auto'
      }
    }, item.title));
  }));
});

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-popup-close-d56650a0.png";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right-download-QRcode-e79e9b7e.jpg";

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-live-verify-right-f392b3bc.png";

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./_multiappsharing/components/Popup/index.js + 1 modules
var Popup = __webpack_require__(213);

// EXTERNAL MODULE: ./_multiappsharing/redux/actions/home.js + 1 modules
var home = __webpack_require__(31);

// EXTERNAL MODULE: ./assets/containers/Home/image/home-popup-close.png
var home_popup_close = __webpack_require__(238);
var home_popup_close_default = /*#__PURE__*/__webpack_require__.n(home_popup_close);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/containers/Home/image/right-download-QRcode.jpg
var right_download_QRcode = __webpack_require__(239);
var right_download_QRcode_default = /*#__PURE__*/__webpack_require__.n(right_download_QRcode);

// EXTERNAL MODULE: ./assets/containers/Home/image/home-live-verify-right.png
var home_live_verify_right = __webpack_require__(240);
var home_live_verify_right_default = /*#__PURE__*/__webpack_require__.n(home_live_verify_right);

// CONCATENATED MODULE: ./assets/containers/Home/Popup/PopupLiveVerify/index.js




/* harmony default export */ var PopupLiveVerify = (function () {
  return external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-title"
  }, "\u5B9E\u540D\u8BA4\u8BC1"), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-halftitle"
  }, "\u5E94\u7F51\u7EDC\u5B9E\u540D\u5236\u8981\u6C42\uFF0C\u8EAB\u4EFD\u6821\u9A8C\u540E\u624D\u53EF\u4EE5\u5F00\u542F\u76F4\u64AD"), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-box"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-title left"
  }, "1\u3001\u6253\u5F00MarsBit\u5E76\u767B\u5F55\u5F53\u524D\u8D26\u53F7"), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-code"
  }, external_react_default.a.createElement("img", {
    className: "home-popup-live-verify-popup-item-code-img",
    src: right_download_QRcode_default.a
  })), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-text"
  }, "\u626B\u63CF\u4E8C\u7EF4\u7801\u53EF\u4E0B\u8F7DMarsBit APP")), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-line"
  }), external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item"
  }, external_react_default.a.createElement("div", {
    className: "home-popup-live-verify-popup-item-title right"
  }, "2. \u5728APP\u9996\u9875\u70B9\u51FB \u3010\u5F00\u64AD\u3011\u5F00\u59CB\u8BA4\u8BC1"), external_react_default.a.createElement("img", {
    className: "home-popup-live-verify-popup-item-right-img",
    src: home_live_verify_right_default.a
  }))));
});
// CONCATENATED MODULE: ./assets/containers/Home/Popup/index.js






/* harmony default export */ var Home_Popup = __webpack_exports__["a"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      isLiveVerifyShow: state.multi.home.popupState.liveVerify
    };
  }, external_react_redux_["shallowEqual"]),
      isLiveVerifyShow = _useSelector.isLiveVerifyShow;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var onBtnCloseClick = Object(external_react_["useCallback"])(function () {
    dispatch(Object(home["c" /* homeLiveVerifyPopupShow */])(false));
  }, []);
  return external_react_default.a.createElement(Popup["a" /* default */], {
    children: external_react_default.a.createElement(PopupLiveVerify, null),
    show: isLiveVerifyShow,
    close: onBtnCloseClick,
    closeIcon: home_popup_close_default.a,
    closeClassName: 'home-popup-live-verify-popup-close'
  });
});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: external "react-simple-img"
var external_react_simple_img_ = __webpack_require__(170);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./_multiappsharing/components/NewsListItem/SimpleImg.js




/* harmony default export */ var SimpleImg = (function (_ref) {
  var coverPic = _ref.coverPic,
      tags = _ref.tags,
      type = _ref.type;

  var _useState = Object(external_react_["useState"])(coverPic),
      _useState2 = slicedToArray_default()(_useState, 2),
      oldImg = _useState2[0],
      setOldImg = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(coverPic),
      _useState4 = slicedToArray_default()(_useState3, 2),
      newPic = _useState4[0],
      setNewPic = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    if (coverPic !== newPic) {
      setOldImg(null);
      setNewPic(coverPic);
    }
  }, [coverPic]);
  Object(external_react_["useEffect"])(function () {
    setOldImg(newPic);
  }, [newPic]);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, oldImg !== null && external_react_default.a.createElement(external_react_simple_img_["SimpleImg"], {
    applyAspectRatio: true,
    importance: 'high',
    width: 220,
    height: 160,
    placeholder: '#f6f8fa',
    src: Object(_multiappsharing_public["G" /* stringJsonItem */])(coverPic, type),
    alt: tags
  }));
});
// CONCATENATED MODULE: ./_multiappsharing/components/NewsListItem/index.js







var NewsListItem_NewsListItem = function NewsListItem(props) {
  // 简写: auth = author; cat = category
  // tag的type: 1行情，2媒体，3新闻
  var title = props.title,
      synopsis = props.synopsis,
      id = props.id,
      coverPic = props.coverPic,
      author = props.author,
      createdBy = props.createdBy,
      publishTime = props.publishTime,
      tagsV2 = props.tagsV2,
      serverTime = props.serverTime,
      hotCounts = props.hotCounts,
      newsCat = props.newsCat,
      authCat = props.authCat,
      nameHide = props.nameHide,
      tagsHide = props.tagsHide,
      hotShow = props.hotShow,
      advertised = props.advertised,
      tags = props.tags,
      infoType = props.infoType,
      content = props.content; // 新闻链接
  // let newsLink = ''
  // 作者链接

  var authLink = _multiappsharing_public["A" /* mixUrl */].main("/userCenter/".concat(createdBy)); // 视频图片类型

  var videoImgType = Object(_multiappsharing_public["G" /* stringJsonItem */])(coverPic, 'video_pc') !== '' ? 'video_pc' : 'video_m';

  var _useState = Object(external_react_["useState"])(_multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"))),
      _useState2 = slicedToArray_default()(_useState, 2),
      linkurl = _useState2[0],
      setLinkurl = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    if (typeof window !== 'undefined') {
      var reqhost = window.location;

      if (infoType && infoType === 'video') {
        setLinkurl(_multiappsharing_public["A" /* mixUrl */].main("/video/detail/".concat(id, "/").concat(publishTime), reqhost));
      } else {
        setLinkurl(_multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"), reqhost));
      } // newsLink = (infoType && infoType === 'video') ? mixUrl.main(`/video/detail/${id}/${publishTime}`, reqhost) : mixUrl.news(`/${id}.html`, reqhost)

    }
  }, [infoType, id]);
  return external_react_default.a.createElement("div", {
    className: "news-list-item"
  }, external_react_default.a.createElement("a", {
    className: "item-left",
    title: title,
    href: linkurl,
    target: "_blank"
  }, newsCat && newsCat !== '' && external_react_default.a.createElement("span", null, newsCat), infoType && infoType === 'video' && external_react_default.a.createElement("div", {
    className: "type-video"
  }, "\u89C6\u9891"), infoType && infoType === 'video' && external_react_default.a.createElement("div", {
    className: "type-video-btn"
  }), external_react_default.a.createElement(SimpleImg, {
    coverPic: coverPic,
    tags: tags,
    type: infoType && infoType === 'video' ? videoImgType : 'pc'
  })), external_react_default.a.createElement("div", {
    className: "item-right"
  }, external_react_default.a.createElement("a", {
    className: "title-synopsis",
    title: title,
    href: linkurl,
    target: "_blank"
  }, external_react_default.a.createElement("h5", null, authCat && authCat !== '' && external_react_default.a.createElement("span", null, authCat), title), external_react_default.a.createElement("p", null, infoType && infoType === 'video' ? content : synopsis.replace('【GPT】', ''))), external_react_default.a.createElement("div", {
    className: "relate-info"
  }, external_react_default.a.createElement("div", {
    className: "author-time"
  }, advertised !== null && advertised === 1 && external_react_default.a.createElement("span", {
    style: {
      color: "#5a83f9"
    }
  }, "\u63A8\u5E7F | "), !nameHide && external_react_default.a.createElement("a", {
    href: authLink,
    title: author,
    target: "_blank"
  }, author), external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(publishTime, serverTime && serverTime !== '' && serverTime))), !tagsHide && Object(_multiappsharing_public["F" /* stringArray */])(tagsV2).length !== 0 && external_react_default.a.createElement("div", {
    className: "tags",
    style: {
      display: 'none'
    }
  }, "\u5173\u952E\u5B57:", Object(_multiappsharing_public["F" /* stringArray */])(tagsV2).map(function (item, index) {
    if (index >= 3 || !item.name) return false;
    var symbol = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'symbol');
    var fullname = Object(_multiappsharing_public["G" /* stringJsonItem */])(item.name, 'full_name');
    var link = (item.type === 3 || symbol === '') && _multiappsharing_public["A" /* mixUrl */].news("/tags/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(item.name))) || _multiappsharing_public["A" /* mixUrl */].main("/marketsDetail/".concat(fullname, "/").concat(symbol));
    var name = (item.type === 3 || fullname === '') && item.name || fullname; // return <a
    //     key={item.id}
    //     title={item.name}
    //     href={link}
    //     target="_blank">
    //     &nbsp;&nbsp;
    //     {name}
    //     {index < 2 && index !== stringArray(tagsV2).length - 1 && ','}
    // </a>

    return external_react_default.a.createElement("a", {
      className: "relate-text",
      key: item.id,
      title: item.name,
      href: link,
      target: "_blank"
    }, name);
  })), hotShow && external_react_default.a.createElement("div", {
    className: "hot"
  }, "\u70ED\u5EA6:\xA0", hotCounts))));
};

NewsListItem_NewsListItem.propTypes = {
  title: external_prop_types_["string"].isRequired,
  id: external_prop_types_["string"].isRequired,
  coverPic: external_prop_types_["string"].isRequired,
  author: external_prop_types_["string"].isRequired,
  createdBy: external_prop_types_["string"].isRequired,
  publishTime: external_prop_types_["number"].isRequired
};
/* harmony default export */ var components_NewsListItem = __webpack_exports__["a"] = (NewsListItem_NewsListItem);

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "swiper-icon-prev-44f1d07c.png";

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "swiper-icon-next-12adf25b.png";

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad-carousel-title-2dc60314.png";

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "default-img-686aa412.png";

/***/ })

};;
//# sourceMappingURL=containers-Home.js.map