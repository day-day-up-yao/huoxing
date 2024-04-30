require("source-map-support").install();
exports.ids = [24];
exports.modules = {

/***/ 137:
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

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "react-simple-img"
var external_react_simple_img_ = __webpack_require__(170);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// CONCATENATED MODULE: ./_multiappsharing/components/RightItemWrapper/index.js




var RightItemWrapper_RightItemWrapper = function RightItemWrapper(props) {
  var id = props.id,
      children = props.children,
      title = props.title,
      firstItem = props.firstItem,
      titleBtn = props.titleBtn,
      titleStyle = props.titleStyle,
      onClick = props.onClick;
  return external_react_default.a.createElement("div", {
    id: id || '',
    className: "layout-content-right-item ".concat(firstItem ? 'first-item' : '')
  }, title && external_react_default.a.createElement("div", {
    className: "right-item-title"
  }, external_react_default.a.createElement("h5", {
    style: titleStyle && objectSpread_default()({}, titleStyle)
  }, title), external_react_default.a.createElement("div", {
    className: "button",
    style: {
      display: titleBtn && titleBtn !== '' ? 'flex' : 'none'
    },
    onClick: onClick && onClick
  }, titleBtn)), external_react_default.a.createElement("div", {
    className: "right-item-content"
  }, children));
};

/* harmony default export */ var components_RightItemWrapper = (RightItemWrapper_RightItemWrapper);
// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: ./_multiappsharing/public/img/feature-backImg.png
var feature_backImg = __webpack_require__(438);
var feature_backImg_default = /*#__PURE__*/__webpack_require__.n(feature_backImg);

// CONCATENATED MODULE: ./_multiappsharing/components/RightNews/index.js








/** @desc 右侧新闻item */

var RightNews_RightNewsItem = function RightNewsItem(props) {
  var title = props.title,
      id = props.id,
      coverPic = props.coverPic,
      author = props.author,
      rank = props.rank,
      tags = props.tags; // 新闻链接

  var newsLink = _multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"));
  return external_react_default.a.createElement("div", {
    className: "right-news-item"
  }, external_react_default.a.createElement("a", {
    className: "left",
    title: title,
    href: newsLink,
    target: "_blank"
  }, external_react_default.a.createElement("span", null, rank + 1), external_react_default.a.createElement(external_react_simple_img_["SimpleImg"], {
    applyAspectRatio: true,
    width: 90,
    height: 65,
    placeholder: '#f6f8fa',
    src: Object(_multiappsharing_public["G" /* stringJsonItem */])(coverPic, 'pc'),
    alt: tags
  })), external_react_default.a.createElement("div", {
    className: "right"
  }, external_react_default.a.createElement("a", {
    title: title,
    href: newsLink,
    target: "_blank"
  }, title), external_react_default.a.createElement("time", null, author)));
};

RightNews_RightNewsItem.propTypes = {
  title: external_prop_types_["string"].isRequired,
  id: external_prop_types_["string"].isRequired,
  coverPic: external_prop_types_["string"].isRequired,
  publishTime: external_prop_types_["number"].isRequired,
  author: external_prop_types_["string"].isRequired
  /** @desc 右侧专题item */

};

var RightNews_RightFeatureItem = function RightFeatureItem(props) {
  var id = props.id,
      topicName = props.topicName,
      newSmallPcImgSrc = props.newSmallPcImgSrc,
      pcImgSrc = props.pcImgSrc,
      createTime = props.createTime,
      serverTime = props.serverTime; // 专题链接

  var featureLink = _multiappsharing_public["A" /* mixUrl */].news("/feature/".concat(id));
  return external_react_default.a.createElement("div", {
    className: "right-news-item"
  }, external_react_default.a.createElement("a", {
    className: "left",
    title: topicName,
    href: featureLink,
    target: "_blank"
  }, external_react_default.a.createElement(external_react_simple_img_["SimpleImg"], {
    applyAspectRatio: true,
    width: 90,
    height: 65,
    placeholder: '#f6f8fa',
    src: newSmallPcImgSrc || pcImgSrc || feature_backImg_default.a
  })), external_react_default.a.createElement("div", {
    className: "right"
  }, external_react_default.a.createElement("a", {
    title: topicName,
    href: featureLink,
    target: "_blank"
  }, topicName), external_react_default.a.createElement("time", null, Object(_multiappsharing_public["k" /* formatPublishTime */])(createTime, serverTime && serverTime !== '' && serverTime))));
};

RightNews_RightFeatureItem.propTypes = {
  topicName: external_prop_types_["string"].isRequired,
  id: external_prop_types_["string"].isRequired,
  createTime: external_prop_types_["number"].isRequired
  /** @desc 右侧推荐,热门,相关新闻等 */

};

var RightNews_RightNews = function RightNews(props) {
  return external_react_default.a.createElement(components_RightItemWrapper, {
    id: props.id || '',
    titleBtn: external_react_default.a.createElement("a", {
      className: "more-icon",
      style: {
        display: props.ismore === false ? 'none' : 'block'
      },
      href: props.feature ? _multiappsharing_public["A" /* mixUrl */].news('/feature') : _multiappsharing_public["A" /* mixUrl */].news(),
      target: "_blank"
    }),
    title: props.title
  }, external_react_default.a.createElement("div", {
    className: "right-news-wrapper"
  }, Object(_multiappsharing_public["n" /* isArray */])(props.data) && (props.data.length !== 0 ? props.data.map(function (item, index) {
    return props.feature ? external_react_default.a.createElement(RightNews_RightFeatureItem, extends_default()({
      key: item.topic.id
    }, item.topic)) : external_react_default.a.createElement(RightNews_RightNewsItem, extends_default()({
      key: item.id,
      rank: index
    }, item));
  }) : external_react_default.a.createElement("div", {
    className: "no-news"
  }, "\u6682\u65E0\u5185\u5BB9"))));
};

/* harmony default export */ var components_RightNews = (RightNews_RightNews);
// EXTERNAL MODULE: ./assets/containers/Home/RightTags/index.js
var RightTags = __webpack_require__(236);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(169);

// EXTERNAL MODULE: ./assets/containers/Search/Image/search-icon.png
var search_icon = __webpack_require__(439);
var search_icon_default = /*#__PURE__*/__webpack_require__.n(search_icon);

// CONCATENATED MODULE: ./assets/containers/Search/TopInput/index.js






/* harmony default export */ var TopInput = (function () {
  var _useParams = Object(external_react_router_dom_["useParams"])(),
      searchQuery = _useParams.searchQuery; // url参数


  var _useState = Object(external_react_["useState"])(searchQuery),
      _useState2 = slicedToArray_default()(_useState, 2),
      nowInputValue = _useState2[0],
      setNowInputValue = _useState2[1]; // 当前输入框内容
  // 输入框当前输入内容改变事件


  var onInputValueChange = Object(external_react_["useCallback"])(function (e) {
    setNowInputValue(e.target.value);
  }, []); // 搜索确定按钮

  var onBtnSearchClick = Object(external_react_["useCallback"])(function () {
    if (Object(_multiappsharing_public["H" /* trim */])(nowInputValue) !== '') {
      window.location.href = _multiappsharing_public["A" /* mixUrl */].main("/search/".concat(Object(_multiappsharing_public["h" /* encodeSearchKey */])(nowInputValue)));
    }
  }, [nowInputValue]); // 点击键盘事件

  var onKeySearchEnterDown = Object(external_react_["useCallback"])(function (e) {
    if (e.keyCode && e.keyCode !== 13) {
      return false;
    }

    onBtnSearchClick();
  }, [nowInputValue]);
  return external_react_default.a.createElement("div", {
    className: "search-top"
  }, external_react_default.a.createElement("div", {
    className: "search-top-title"
  }, "\u5173\u952E\u5B57\uFF1A", external_react_default.a.createElement("span", null, searchQuery)), external_react_default.a.createElement("div", {
    className: "search-top-input-wrap"
  }, external_react_default.a.createElement("div", {
    className: "search-top-input-box"
  }, external_react_default.a.createElement("img", {
    className: "search-top-input-icon",
    src: search_icon_default.a
  }), external_react_default.a.createElement("input", {
    className: "search-top-input",
    value: nowInputValue,
    onChange: function onChange(e) {
      return onInputValueChange(e);
    },
    onKeyDown: function onKeyDown(e) {
      return onKeySearchEnterDown(e);
    }
  })), external_react_default.a.createElement("div", {
    className: "search-top-btn",
    onClick: function onClick() {
      return onBtnSearchClick();
    }
  }, "\u641C\u7D22")));
});
// EXTERNAL MODULE: ./assets/redux/actions/search.js + 1 modules
var search = __webpack_require__(54);

// EXTERNAL MODULE: ./assets/public/js/searchData.js
var searchData = __webpack_require__(33);

// CONCATENATED MODULE: ./assets/containers/Search/TopType/index.js




var _searchData = Object(searchData["a" /* default */])(),
    searchTabType = _searchData.searchTabType;

/* harmony default export */ var TopType = (function (props) {
  var pageType = props.pageType,
      setPageType = props.setPageType;
  return external_react_default.a.createElement("div", {
    className: "search-top-type"
  }, searchTabType.filter(function (itm) {
    return itm.type !== 99;
  }).map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "search-top-type-item ".concat(pageType === item.type ? 'select' : ''),
      onClick: function onClick() {
        return setPageType(item.type);
      },
      key: index
    }, item.label, pageType === item.type && external_react_default.a.createElement("div", {
      className: "search-top-type-line"
    }));
  }));
});
// EXTERNAL MODULE: ./_multiappsharing/components/AuthorInfo/index.js
var AuthorInfo = __webpack_require__(188);

// CONCATENATED MODULE: ./assets/components/Search/AuthorItem/index.js






var AuthorItem_searchData = Object(searchData["a" /* default */])(),
    searchKeyColor = AuthorItem_searchData.searchKeyColor;

/* harmony default export */ var AuthorItem = (function (props) {
  var authorInfo = props.authorInfo,
      searchQuery = props.searchQuery;
  var key = authorInfo.keywords && Object(_multiappsharing_public["n" /* isArray */])(authorInfo.keywords) && authorInfo.keywords.length > 0 ? authorInfo.keywords : searchQuery; // 点击头像事件

  var onBtnClick = Object(external_react_["useCallback"])(function () {
    window.open(_multiappsharing_public["A" /* mixUrl */].main("/userCenter/".concat(authorInfo.passportId)));
  }, [authorInfo]);
  return external_react_default.a.createElement("div", {
    className: "search-author-item",
    onClick: function onClick() {
      return onBtnClick();
    }
  }, external_react_default.a.createElement(AuthorInfo["c" /* Avatar */], {
    className: "search-author-item-head",
    authorInfo: authorInfo
  }), external_react_default.a.createElement("div", {
    className: "search-author-item-name",
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["z" /* keyLight */])(authorInfo.nickName, key, searchKeyColor)
    }
  }), authorInfo.introduce && authorInfo.introduce !== '' && external_react_default.a.createElement("div", {
    className: "search-author-item-text",
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["z" /* keyLight */])(authorInfo.introduce, key, searchKeyColor)
    }
  }));
});
// CONCATENATED MODULE: ./assets/containers/Search/AuthorList/index.js





/* harmony default export */ var AuthorList = (function (props) {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorListData: state.search.authorListData
    };
  }, external_react_redux_["shallowEqual"]),
      authorListData = _useSelector.authorListData;

  var _useParams = Object(external_react_router_dom_["useParams"])(),
      searchQuery = _useParams.searchQuery; // url参数


  var pageType = props.pageType; // 更改搜索数目显示

  var onCountChangeText = Object(external_react_["useCallback"])(function (num) {
    if (parseInt(num) > 9999) {
      return '9999+';
    } else {
      return num;
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "search-author-list"
  }, pageType !== 0 && external_react_default.a.createElement("div", {
    className: "search-author-list-title"
  }, "\u4F5C\u8005", external_react_default.a.createElement("span", {
    className: "search-author-list-title-num"
  }, "(", onCountChangeText(authorListData.recordCount), ")")), external_react_default.a.createElement("div", {
    className: "search-author-list-wrap"
  }, authorListData && authorListData.inforList.length > 0 && authorListData.inforList.map(function (item, index) {
    return pageType === 0 && index < 5 || pageType !== 0 ? external_react_default.a.createElement(AuthorItem, {
      authorInfo: item,
      searchQuery: searchQuery,
      key: index
    }) : null;
  })));
});
// CONCATENATED MODULE: ./_multiappsharing/components/ImgPopup/index.js







var ImgPopup_ImgPopup = function ImgPopup(props) {
  var src = props.src,
      show = props.show,
      close = props.close;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      imgShow = _useState2[0],
      setImgShow = _useState2[1];

  var _useState3 = Object(external_react_["useState"])({
    height: 'auto',
    width: '100%'
  }),
      _useState4 = slicedToArray_default()(_useState3, 2),
      imgStyle = _useState4[0],
      setImgStyle = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    if (!src) return;
    var imgTemp = new Image();
    imgTemp.src = src;

    imgTemp.onload = function () {
      var ih = imgTemp.height;
      var iw = imgTemp.width;

      if (Object(_multiappsharing_public["u" /* isPc */])()) {
        if (iw >= ih && (iw >= 1000 && ih * 1000 / iw <= 600 || iw < 1000 && ih <= 600)) {
          setImgStyle({
            height: 'auto',
            maxWidth: '1000px'
          });
        } else {
          setImgStyle({
            maxHeight: '600px',
            width: 'auto'
          });
        }
      } else {
        var wh = Object(_multiappsharing_public["K" /* windowOffset */])().height * 0.8;
        var ww = Object(_multiappsharing_public["K" /* windowOffset */])().width;

        if (iw >= ww && ih * ww / iw <= wh || iw < ww && ih <= wh) {
          setImgStyle({
            height: 'auto',
            width: '100%'
          });
        } else {
          setImgStyle({
            height: wh,
            width: 'auto'
          });
        }
      }

      setImgShow(true);
    };
  }, [src]);

  var _useState5 = Object(external_react_["useState"])('pc'),
      _useState6 = slicedToArray_default()(_useState5, 2),
      equipment = _useState6[0],
      setEquipment = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    if (Object(_multiappsharing_public["u" /* isPc */])()) return;
    setEquipment('mobile');

    var Hammer = __webpack_require__(179);

    var $ele = document.getElementById('imgPopContent');
    var hammertime = new Hammer($ele, {});
    hammertime.get('pinch').set({
      enable: true
    });
    var posX = 0;
    var posY = 0;
    var scale = 1;
    var lastScale = 1;
    var lastPosX = 0;
    var lastPosY = 0;
    var maxPosX = 0;
    var maxPosY = 0;
    var transform = '';
    var el = $ele;
    hammertime.on('doubletap pan pinch panend pinchend', function (ev) {
      if (ev.type === 'doubletap') {
        transform = 'translate3d(0, 0, 0) scale3d(2, 2, 1)';
        scale = 2;
        lastScale = 2;

        try {
          if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() !== 'matrix(1, 0, 0, 1, 0, 0)') {
            transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
            scale = 1;
            lastScale = 1;
          }
        } catch (err) {
          console.log(err);
        }

        el.style.webkitTransform = transform;
        transform = '';
      } // pan


      if (scale !== 1) {
        posX = lastPosX + ev.deltaX;
        posY = lastPosY + ev.deltaY;
        maxPosX = Math.ceil((scale - 1) * el.clientWidth / 2);
        maxPosY = Math.ceil((scale - 1) * el.clientHeight / 2);
        if (posX > maxPosX) posX = maxPosX;
        if (posX < -maxPosX) posX = -maxPosX;
        if (posY > maxPosY) posY = maxPosY;
        if (posY < -maxPosY) posY = -maxPosY;
      } // pinch


      if (ev.type === 'pinch') scale = Math.max(0.999, Math.min(lastScale * ev.scale, 4));
      if (ev.type === 'pinchend') lastScale = scale; // panend

      if (ev.type === 'panend') {
        lastPosX = posX < maxPosX ? posX : maxPosX;
        lastPosY = posY < maxPosY ? posY : maxPosY;
      }

      if (scale !== 1) transform = 'translate3d(' + posX + 'px,' + posY + 'px, 0) ' + 'scale3d(' + scale + ', ' + scale + ', 1)';
      if (transform) el.style.webkitTransform = transform;
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: "img-popup-wrapper ".concat(equipment),
    style: {
      display: show && imgShow ? 'flex' : 'none'
    }
  }, external_react_default.a.createElement("div", {
    className: "img-position",
    onClick: close
  }, external_react_default.a.createElement("div", {
    id: "imgPopContent",
    className: "img-content ".concat(equipment === 'pc' ? 'beautify-scroll' : '')
  }, src && external_react_default.a.createElement("img", {
    src: src,
    style: objectSpread_default()({}, imgStyle),
    alt: "img-viewer"
  })), external_react_default.a.createElement("a", {
    className: "close-icon",
    onClick: close
  })), external_react_default.a.createElement("div", {
    className: "img-popup-mask",
    onClick: close
  }));
};

ImgPopup_ImgPopup.propTypes = {
  show: external_prop_types_["bool"].isRequired,
  close: external_prop_types_["func"].isRequired
};
/* harmony default export */ var components_ImgPopup = (ImgPopup_ImgPopup);
// CONCATENATED MODULE: ./assets/components/Search/FlashItem/index.js





var FlashItem_searchData = Object(searchData["a" /* default */])(),
    FlashItem_searchKeyColor = FlashItem_searchData.searchKeyColor;

/* harmony default export */ var FlashItem = (function (props) {
  var id = props.id,
      title = props.title,
      content = props.content,
      tag = props.tag,
      url = props.url,
      images = props.images,
      imagesRemark = props.imagesRemark,
      createdTime = props.createdTime,
      keywords = props.keywords,
      searchQuery = props.searchQuery,
      showListImg = props.showListImg;
  var key = keywords && Object(_multiappsharing_public["n" /* isArray */])(keywords) && keywords.length > 0 ? keywords : searchQuery;
  return external_react_default.a.createElement("div", {
    className: "search-flash-item"
  }, external_react_default.a.createElement("div", {
    className: "search-flash-item-wrap"
  }, external_react_default.a.createElement("a", {
    target: "_blank",
    href: _multiappsharing_public["A" /* mixUrl */].news("/flash/".concat(id, ".html"))
  }, external_react_default.a.createElement("h1", {
    className: "".concat(parseInt(tag) === 2 ? 'news-title import' : 'news-title'),
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["z" /* keyLight */])(title, key, FlashItem_searchKeyColor)
    }
  })), external_react_default.a.createElement("h2", {
    className: "news-detail",
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["z" /* keyLight */])(content, key, FlashItem_searchKeyColor)
    }
  }, url && external_react_default.a.createElement("a", {
    rel: "nofollow",
    title: "\u67E5\u770B\u539F\u6587",
    href: url,
    style: "color: #0a7ff2",
    target: "_blank"
  }, " \u300C\u67E5\u770B\u539F\u6587\u300D")), images && external_react_default.a.createElement("img", {
    style: {
      cursor: 'pointer'
    },
    alt: "".concat(!imagesRemark ? title : imagesRemark),
    onClick: showListImg,
    src: images
  }), external_react_default.a.createElement("div", {
    className: "time-left"
  }, Object(_multiappsharing_public["k" /* formatPublishTime */])(createdTime))));
});
// CONCATENATED MODULE: ./assets/containers/Search/FlashList/index.js








/* harmony default export */ var FlashList = (function (props) {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      livesListData: state.search.livesListData
    };
  }, external_react_redux_["shallowEqual"]),
      livesListData = _useSelector.livesListData;

  var _useParams = Object(external_react_router_dom_["useParams"])(),
      searchQuery = _useParams.searchQuery; // url参数


  var pageType = props.pageType;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isImgPopupShow = _useState2[0],
      setIsImgPopupShow = _useState2[1]; // 是否展示图片弹窗


  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      imgPopupSrc = _useState4[0],
      setImgPopupSrc = _useState4[1]; // 图片弹窗展示内容
  // 图片弹窗展示事件


  var showListImg = Object(external_react_["useCallback"])(function (e) {
    setImgPopupSrc(e.target.getAttribute('src'));
    setIsImgPopupShow(true);
  }, []); // 更改搜索数目显示

  var onCountChangeText = Object(external_react_["useCallback"])(function (num) {
    if (parseInt(num) > 9999) {
      return '9999+';
    } else {
      return num;
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "search-flash-list"
  }, pageType !== 0 && external_react_default.a.createElement("div", {
    className: "search-flash-list-title"
  }, "\u5FEB\u8BAF", external_react_default.a.createElement("span", {
    className: "search-flash-list-title-num"
  }, "(", onCountChangeText(livesListData.recordCount), ")")), livesListData && livesListData.inforList.length > 0 && livesListData.inforList.map(function (item, index) {
    return pageType === 0 && index < 5 || pageType !== 0 ? external_react_default.a.createElement(FlashItem, extends_default()({}, item, {
      searchQuery: searchQuery,
      showListImg: showListImg,
      key: index
    })) : null;
  }), external_react_default.a.createElement(components_ImgPopup, {
    close: function close() {
      return setIsImgPopupShow(!isImgPopupShow);
    },
    show: isImgPopupShow,
    src: imgPopupSrc
  }));
});
// CONCATENATED MODULE: ./assets/components/Search/NewsItem/index.js





var NewsItem_searchData = Object(searchData["a" /* default */])(),
    NewsItem_searchKeyColor = NewsItem_searchData.searchKeyColor;

/* harmony default export */ var NewsItem = (function (props) {
  var id = props.id,
      title = props.title,
      coverPic = props.coverPic,
      synopsis = props.synopsis,
      author = props.author,
      publishTime = props.publishTime,
      keywords = props.keywords,
      searchQuery = props.searchQuery;
  var key = keywords && Object(_multiappsharing_public["n" /* isArray */])(keywords) && keywords.length > 0 ? keywords : searchQuery;
  return external_react_default.a.createElement("div", {
    className: "search-news-item"
  }, external_react_default.a.createElement("a", {
    title: title,
    target: "_blank",
    href: _multiappsharing_public["A" /* mixUrl */].news("/".concat(id, ".html"))
  }, external_react_default.a.createElement("div", {
    className: "list-left"
  }, external_react_default.a.createElement("img", {
    alt: title,
    src: !coverPic || !JSON.parse(coverPic).pc ? '' : JSON.parse(coverPic).pc
  })), external_react_default.a.createElement("div", {
    className: "list-right",
    style: {
      width: '560px'
    }
  }, external_react_default.a.createElement("h1", {
    className: "headline",
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["z" /* keyLight */])(title, key, NewsItem_searchKeyColor)
    }
  }), external_react_default.a.createElement("h3", {
    className: "details",
    dangerouslySetInnerHTML: {
      __html: Object(_multiappsharing_public["z" /* keyLight */])(synopsis.replace('【GPT】', ''), key, NewsItem_searchKeyColor)
    }
  }))), external_react_default.a.createElement("div", {
    className: "list-bottom index-mian clearfix"
  }, external_react_default.a.createElement("p", {
    className: "name"
  }, author), external_react_default.a.createElement("p", {
    className: "lock-time"
  }, Object(_multiappsharing_public["k" /* formatPublishTime */])(publishTime))), external_react_default.a.createElement("div", {
    className: "shadow"
  }));
});
// CONCATENATED MODULE: ./assets/containers/Search/NewsList/index.js






/* harmony default export */ var NewsList = (function (props) {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      newsListData: state.search.newsListData
    };
  }, external_react_redux_["shallowEqual"]),
      newsListData = _useSelector.newsListData;

  var _useParams = Object(external_react_router_dom_["useParams"])(),
      searchQuery = _useParams.searchQuery; // url参数


  var pageType = props.pageType; // 更改搜索数目显示
  // const onCountChangeText = useCallback(
  //     (num) => {
  //         if (parseInt(num) > 9999) {
  //             return '9999+'
  //         } else {
  //             return num
  //         }
  //     },
  //     []
  // )

  return external_react_default.a.createElement("div", {
    className: "search-news-list"
  }, pageType !== 0 && external_react_default.a.createElement("div", {
    className: "search-news-list-title"
  }, "\u65B0\u95FB"), newsListData && newsListData.inforList.length > 0 && newsListData.inforList.map(function (item, index) {
    return pageType === 0 && index < 5 || pageType !== 0 ? external_react_default.a.createElement(NewsItem, extends_default()({}, item, {
      searchQuery: searchQuery,
      key: index
    })) : null;
  }));
});
// CONCATENATED MODULE: ./assets/containers/Search/AllList/index.js





 // import ExcellentNewsList from '../ExcellentNewsList'




var AllList_searchData = Object(searchData["a" /* default */])(),
    searchTabTypeEnum = AllList_searchData.searchTabTypeEnum;

/* harmony default export */ var AllList = (function (props) {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorListData: state.search.authorListData,
      // excellentNewsListData: state.search.excellentNewsListData,
      livesListData: state.search.livesListData,
      newsListData: state.search.newsListData
    };
  }, external_react_redux_["shallowEqual"]),
      authorListData = _useSelector.authorListData,
      livesListData = _useSelector.livesListData,
      newsListData = _useSelector.newsListData;

  var setPageType = props.setPageType; // console.log(newsListData)
  // 更改搜索数目显示

  var onCountChangeText = Object(external_react_["useCallback"])(function (num) {
    if (parseInt(num) > 9999) {
      return '9999+';
    } else {
      return num;
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "search-all-list"
  }, newsListData.recordCount > 0 && external_react_default.a.createElement("div", {
    className: "search-all-list-title",
    style: {
      marginBottom: '20px'
    }
  }, "\u65B0\u95FB"), newsListData.recordCount > 0 && external_react_default.a.createElement(NewsList, {
    pageType: 0
  }), newsListData.totalIndex > 1 && external_react_default.a.createElement("div", {
    className: "search-all-list-btn",
    onClick: function onClick() {
      Object(_multiappsharing_public["c" /* arriveAtDom */])(0);
      setPageType(searchTabTypeEnum.NEWS);
    }
  }, "\u67E5\u770B\u66F4\u591A\u65B0\u95FB"), livesListData.recordCount > 0 && external_react_default.a.createElement("div", {
    className: "search-all-list-title",
    style: {
      marginBottom: '20px'
    }
  }, "\u5FEB\u8BAF", external_react_default.a.createElement("span", {
    className: "search-all-list-title-num"
  }, "(", onCountChangeText(livesListData.recordCount), ")")), livesListData.recordCount > 0 && external_react_default.a.createElement(FlashList, {
    pageType: 0
  }), livesListData.totalIndex > 1 && external_react_default.a.createElement("div", {
    className: "search-all-list-btn",
    onClick: function onClick() {
      Object(_multiappsharing_public["c" /* arriveAtDom */])(0);
      setPageType(searchTabTypeEnum.FLASH);
    }
  }, "\u67E5\u770B\u66F4\u591A\u5FEB\u8BAF"), authorListData.recordCount > 0 && external_react_default.a.createElement("div", {
    className: "search-all-list-title",
    style: {
      marginBottom: '20px'
    }
  }, "\u4F5C\u8005", external_react_default.a.createElement("span", {
    className: "search-all-list-title-num"
  }, "(", onCountChangeText(authorListData.recordCount), ")")), authorListData.recordCount > 0 && external_react_default.a.createElement(AuthorList, {
    pageType: 0
  }), authorListData.totalIndex > 1 && external_react_default.a.createElement("div", {
    className: "search-all-list-btn",
    onClick: function onClick() {
      Object(_multiappsharing_public["c" /* arriveAtDom */])(0);
      setPageType(searchTabTypeEnum.AUTHOR);
    }
  }, "\u67E5\u770B\u66F4\u591A\u4F5C\u8005"));
});
// EXTERNAL MODULE: ./assets/containers/Search/Image/search-no.png
var search_no = __webpack_require__(440);
var search_no_default = /*#__PURE__*/__webpack_require__.n(search_no);

// CONCATENATED MODULE: ./assets/containers/Search/NoData/index.js



/* harmony default export */ var NoData = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "no-data"
  }, external_react_default.a.createElement("div", {
    className: "no-data-wrap"
  }, external_react_default.a.createElement("img", {
    className: "no-data-img",
    src: search_no_default.a
  }), external_react_default.a.createElement("div", {
    className: "no-data-title"
  }, "\u6682\u65E0\u76F8\u5173\u5185\u5BB9"), external_react_default.a.createElement("div", {
    className: "no-data-text"
  }, "\u8BF7\u4FEE\u6539\u6216\u8005\u5C1D\u8BD5\u5176\u4ED6\u641C\u7D22\u8BCD")));
});
// CONCATENATED MODULE: ./assets/containers/Search/BottomList/index.js









 // import TopSort from '../TopSort'


 // import ExcellentNewsList from '../ExcellentNewsList'





var BottomList_searchData = Object(searchData["a" /* default */])(),
    BottomList_searchTabTypeEnum = BottomList_searchData.searchTabTypeEnum,
    searchSortTypeEnum = BottomList_searchData.searchSortTypeEnum;

/* harmony default export */ var BottomList = (function () {
  var _useParams = Object(external_react_router_dom_["useParams"])(),
      searchQuery = _useParams.searchQuery;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      authorListData: state.search.authorListData,
      // excellentNewsListData: state.search.excellentNewsListData,
      livesListData: state.search.livesListData,
      newsListData: state.search.newsListData
    };
  }, external_react_redux_["shallowEqual"]),
      authorListData = _useSelector.authorListData,
      livesListData = _useSelector.livesListData,
      newsListData = _useSelector.newsListData;

  console.log(newsListData);
  var dispatch = Object(external_react_redux_["useDispatch"])();

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      pageType = _useState2[0],
      setPageType = _useState2[1]; // 当前选中的类别


  var _useState3 = Object(external_react_["useState"])(1),
      _useState4 = slicedToArray_default()(_useState3, 2),
      pageNum = _useState4[0],
      setPageNum = _useState4[1]; // 当前页


  var _useState5 = Object(external_react_["useState"])(searchSortTypeEnum.DESC),
      _useState6 = slicedToArray_default()(_useState5, 2),
      sortType = _useState6[0],
      setSortType = _useState6[1]; // 当前选中的排序


  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1]; // 是否正在请求数据


  var _useState9 = Object(external_react_["useState"])(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      isSortShow = _useState10[0],
      setIsSortShow = _useState10[1]; // 是否显示排序组件

  /** @desc 请求搜索列表 */


  var getListData = Object(external_react_["useCallback"])(function (obj) {
    setIsLoading(true);
    var sendData = {
      q: searchQuery,
      page: 1,
      pageSize: 20,
      type: pageType === BottomList_searchTabTypeEnum.EXCELLENTNEWS ? BottomList_searchTabTypeEnum.NEWS : pageType,
      excellentFlag: pageType === BottomList_searchTabTypeEnum.EXCELLENTNEWS ? 1 : 0 // if (sortType !== searchSortTypeEnum.DEFAULT) {
      //     sendData.order = sortType
      // }

    };

    if (obj) {
      sendData = objectSpread_default()({}, sendData, obj);
    }

    dispatch(Object(search["b" /* getMultiSearchList */])(sendData)).then(function (res) {
      // console.log(res)
      if (res.code === 1) {
        switch (pageType) {
          case BottomList_searchTabTypeEnum.ALL:
            if ( // res.obj.ExcellentNews.recordCount > 0 ||
            res.obj.News.recordCount > 0 || res.obj.Lives.recordCount > 0 || res.obj.Author.recordCount > 0) {
              setIsSortShow(false);
            } else {
              setIsSortShow(false);
            }

            break;
          // case searchTabTypeEnum.EXCELLENTNEWS:

          case BottomList_searchTabTypeEnum.NEWS:
          case BottomList_searchTabTypeEnum.FLASH:
          case BottomList_searchTabTypeEnum.AUTHOR:
            if (res.obj.recordCount > 0) {
              setIsSortShow(false);
            } else {
              setIsSortShow(false);
            }

            break;

          default:
            setIsSortShow(false);
            break;
        }

        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, [pageType, sortType, searchQuery]); // 监听页面向下滚动，加载下一页

  Object(external_react_["useEffect"])(function () {
    var scrollFunc = Object(_multiappsharing_public["L" /* windowScroll */])(function (res) {
      if (res !== 'down' || isLoading || pageType === BottomList_searchTabTypeEnum.ALL) return false;
      var endPage = 1;
      var newPage = parseInt(pageNum) + 1;

      switch (pageType) {
        // case searchTabTypeEnum.EXCELLENTNEWS:
        //     endPage = excellentNewsListData.totalIndex
        //     break
        case BottomList_searchTabTypeEnum.FLASH:
          endPage = livesListData.totalIndex;
          break;

        case BottomList_searchTabTypeEnum.NEWS:
          endPage = newsListData.totalIndex;
          break;

        case BottomList_searchTabTypeEnum.AUTHOR:
          endPage = authorListData.totalIndex;
          break;

        default:
          break;
      }

      if (endPage < newPage) {
        return;
      }

      var $contain = document.getElementById('searchPage');

      if (Object(_multiappsharing_public["g" /* elementOffset */])($contain).height < Object(_multiappsharing_public["E" /* scrollOffset */])().top + Object(_multiappsharing_public["K" /* windowOffset */])().height) {
        getListData({
          page: newPage
        });
        setPageNum(newPage);
      }
    });
    return function () {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [isLoading, pageType, pageNum]); // 根据当前页面类型切换页面事件

  Object(external_react_["useEffect"])(function () {
    // getListData()
    setPageNum(1);
    setSortType(searchSortTypeEnum.DESC);
  }, [pageType]); // 根据当前页面排序切换页面事件

  Object(external_react_["useEffect"])(function () {
    var obj = {
      page: 1 // if (sortType !== searchSortTypeEnum.DEFAULT) {
      //     obj.order = sortType
      // }

    };
    getListData(obj);
    setPageNum(1);
  }, [sortType]); // 根据当前页面类型切换页面事件

  var nowTypeChangeDivShow = Object(external_react_["useCallback"])(function (type) {
    switch (type) {
      case BottomList_searchTabTypeEnum.ALL:
        if ( // excellentNewsListData.recordCount > 0 ||
        newsListData.recordCount > 0 || livesListData.recordCount > 0 || authorListData.recordCount > 0) {
          return external_react_default.a.createElement(AllList, {
            setPageType: setPageType
          });
        } else {
          return external_react_default.a.createElement(NoData, null);
        }

      // case searchTabTypeEnum.EXCELLENTNEWS:
      //     if (excellentNewsListData.recordCount > 0) {
      //         return <ExcellentNewsList />
      //     } else {
      //         return <NoData />
      //     }

      case BottomList_searchTabTypeEnum.NEWS:
        if (newsListData.recordCount > 0) {
          return external_react_default.a.createElement(NewsList, null);
        } else {
          return external_react_default.a.createElement(NoData, null);
        }

      case BottomList_searchTabTypeEnum.FLASH:
        if (livesListData.recordCount > 0) {
          return external_react_default.a.createElement(FlashList, null);
        } else {
          return external_react_default.a.createElement(NoData, null);
        }

      case BottomList_searchTabTypeEnum.AUTHOR:
        if (authorListData.recordCount > 0) {
          return external_react_default.a.createElement(AuthorList, null);
        } else {
          return external_react_default.a.createElement(NoData, null);
        }

      default:
        return external_react_default.a.createElement(AllList, null);
    }
  }, [newsListData, livesListData, authorListData]);
  return external_react_default.a.createElement("div", {
    className: "search-bottom-list",
    id: "searchPage"
  }, external_react_default.a.createElement(TopType, {
    pageType: pageType,
    setPageType: setPageType
  }), pageType !== BottomList_searchTabTypeEnum.AUTHOR && isSortShow ? external_react_default.a.createElement(TopSort, {
    sortType: sortType,
    setSortType: setSortType,
    pageType: pageType
  }) : null, nowTypeChangeDivShow(pageType));
});
// CONCATENATED MODULE: ./assets/containers/Search/index.js







/* harmony default export */ var Search = __webpack_exports__["default"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      hotNews24H: state.multi.news.hot24HNewsList.inforList
    };
  }, external_react_redux_["shallowEqual"]),
      hotNews24H = _useSelector.hotNews24H;

  return external_react_default.a.createElement("div", {
    className: "search-page"
  }, external_react_default.a.createElement(TopInput, null), external_react_default.a.createElement("div", {
    className: "search-page-bottom-wrap"
  }, external_react_default.a.createElement("div", {
    className: "search-page-bottom-left"
  }, external_react_default.a.createElement(BottomList, null)), external_react_default.a.createElement("div", {
    className: "search-page-bottom-right"
  }, external_react_default.a.createElement(RightTags["a" /* default */], null), external_react_default.a.createElement(components_RightNews, {
    id: "interestNews",
    data: hotNews24H,
    title: "24H\u70ED\u95E8\u65B0\u95FB"
  }))));
});

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AttentionButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthorType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var _public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_orange_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_v_blue_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51);










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
    if (!Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_RegisterLogin_public__WEBPACK_IMPORTED_MODULE_6__[/* isLogin */ "b"])(userInfo.passportId, dispatch)) return;
    var type = authorInfo.ifCollect === 1 ? 'delete' : 'add';
    var id = authorInfo.passportId;
    Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_redux_actions_news__WEBPACK_IMPORTED_MODULE_9__[/* attentionAuthor */ "a"])({
      passportid: userInfo.passportId,
      token: userInfo.token,
      authorId: id
    }, type).then(function (res) {
      if (res.code === 1) {
        attentionSuccessed();
      } else {
        _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_components_Toast__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].info('关注作者错误');
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
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "A"].main("/userCenter/".concat(authorInfo.passportId)),
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
    href: _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_8__[/* mixUrl */ "A"].main("/userCenter/".concat(authorInfo.passportId)),
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-orange-ddf372b8.svg";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "v-blue-77c6a4e4.svg";

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

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feature-backImg-d818821e.png";

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search-icon-5b5afaf1.png";

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search-no-38b4096c.png";

/***/ })

};;
//# sourceMappingURL=containers-Search.js.map