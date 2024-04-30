require("source-map-support").install();
exports.ids = [12];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);





var checkOpen = function checkOpen(callback) {
  var _clickTime = +new Date(); // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束


  var _count = 0;
  var intHandle;
  intHandle = setInterval(function () {
    _count++;
    var elsTime = +new Date() - _clickTime;

    if (_count >= 100 || elsTime > 3000) {
      clearInterval(intHandle);

      if (elsTime > 3000 || document.hidden || document.webkitHidden) {
        console.log('正在打开app');
      } else {
        callback();
      }
    }
  }, 20);
};
/**
 * @params type 当前页面类型 id文章视频等相对应的id
 * newsDetail新闻详情，newsList新闻列表
 * flashDetail快讯详情，flashList快讯列表
 * videoDetail视频详情，videoList视频列表
 * authorCenter作者中心
 * 不传type默认跳转到首页
 * 返回appDownload 传递以上参数
 * 并返回openInBrowser是否提示浏览器中打开
 * */


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var iosUrl = 'https://itunes.apple.com/cn/app/id1343659925?mt=8';
  var andUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('');
  var openApp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (url, doNotDownload) {
    location.href = url;
    checkOpen(function () {
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "o"])() && !doNotDownload) location.href = iosUrl;
      if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])() && !doNotDownload) location.href = andUrl.current;
    });
  }, [andUrl]);
  var appDownload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (type, id, obj) {
    var doNotDownload = obj ? obj.doNotDownload : false;
    var openInBrowser = false;

    if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "v"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isIos */ "o"])()) {
      // 打开appStore
      location.href = iosUrl;
    } else if (Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isWechat */ "v"])() && Object(_public__WEBPACK_IMPORTED_MODULE_3__[/* isAndroid */ "m"])()) {
      // 提示浏览器中打开
      openInBrowser = true;
    } else {
      switch (type) {
        case 'liveshare':
          openApp("marsbusiness://liveshare/".concat(id), doNotDownload);
          break;

        case 'newsDetail':
          openApp("marsbusiness://news/".concat(id), doNotDownload);
          break;

        case 'newsList':
          openApp("marsbusiness://newlist/".concat(id), doNotDownload);
          break;

        case 'flashDetail':
          openApp("marsbusiness://fast/".concat(id), doNotDownload);
          break;

        case 'flashList':
          openApp("marsbusiness://home/fast", doNotDownload);
          break;

        case 'videoDetail':
          openApp("marsbusiness://video/".concat(id), doNotDownload);
          break;

        case 'videoList':
          openApp("marsbusiness://home/video", doNotDownload);
          break;

        case 'authorCenter':
          openApp("marsbusiness://authorCenter/".concat(id), doNotDownload);
          break;

        case 'noticeDetail':
          openApp("marsbusiness://noticeDetail/".concat(id), doNotDownload);
          break;

        default:
          openApp("marsbusiness://home/new", doNotDownload);
      }
    }

    return openInBrowser;
  }, [andUrl]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_redux_actions_public__WEBPACK_IMPORTED_MODULE_1__[/* getAndroidDownloadUrl */ "c"])().then(function (res) {
      if (res.code === 1) {
        andUrl.current = res.obj;
      } else {
        _components_Toast__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].info(res.msg);
      }
    })["catch"](function (err) {
      throw err;
    });
  }, []);
  return appDownload;
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony import */ var _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return props.openInBrowser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download-app-wechat-tips",
    onClick: function onClick() {
      return props.setOpenInBrowser(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download-app-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_wechat_download_tips_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00"
  })));
});

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wechat-download-tips-fef770a1.png";

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var _public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var isH5 = props.isH5;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis-ai ".concat(isH5 && 'news-synopsis-ai-h5')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis-ai-text ".concat(isH5 && 'news-synopsis-ai-text-h5')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_img_aiicon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t('abstract-title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis-ai-text-tip"
  }, t('abstract-news'))));
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aiicon-d797f22d.png";

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);




 // const formatDate = (time) => {
//     const newDate = new Date(time)
//     const day = newDate.getDay()
//     const year = newDate.getFullYear()
//     const mouth = newDate.getMonth() + 1
//     const date = newDate.getDate()
//     const dayArr = ['日', '一', '二', '三', '四', '五', '六']
//     return {
//         month: `${mouth < 10 ? '0' + mouth : mouth}/${year}`,
//         week: `星期${dayArr[day]}`,
//         day: date
//     }
// }

var FalshList = function FalshList(props) {
  // const flashToday = formatDate((props.data && props.data.length !== 0) ? props.data[0].createdTime : Date.parse(new Date()))
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.data),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      dataArr = _useState2[0];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t; // const onShow = useCallback((nIndex) => {
  //     let newsArr = []
  //     props.data.map((item, index) => {
  //         if (nIndex === index) {
  //             let obj = { 'show': true, ...item }
  //             newsArr.push(obj)
  //         } else {
  //             newsArr.push(item)
  //         }
  //     })
  //     setDataArr(newsArr)
  // }, [])


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flash-content-bg news-fash"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title-section clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "title"
  }, "7x24 ", t('headernavtwo'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "lives-box"
  }, dataArr.map(function (item, index) {
    var titleContent = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* flashRecognize */ "i"])(item);
    var title = titleContent.title; // const content = titleContent.content

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "new-fash-list",
      key: item.id,
      "data-date": "1576830749000"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "time-flash"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "iconfont iconfont-circle new-mark"
    }), Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* flashTime */ "j"])(item.createdTime, 'MM-dd hh:mm')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-flash clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      "data-id": item.id,
      className: "text-box"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "text-title ",
      href: _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_3__[/* mixUrl */ "w"].m("/flashshare/".concat(item.id, ".html")),
      title: title
    }, title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        clear: 'both'
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (FalshList);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136);
/* harmony import */ var _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111);
/* harmony import */ var _public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);







/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var type = props.type,
      id = props.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openInBrowser = _useState2[0],
      setOpenInBrowser = _useState2[1];

  var appDownload = Object(_public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])();
  var clickDownload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setOpenInBrowser(appDownload(type, id));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "share-download-bottom active",
    id: "share-download-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bottom-left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _img_m_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "MarsBit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t('all_world_dynamic'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "b-down",
    onClick: clickDownload
  }, t('share_open'), " APP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_m_WebchatOpenInBrowser__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    openInBrowser: openInBrowser,
    setOpenInBrowser: setOpenInBrowser
  }));
});

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "m-share-logo-3e28eff7.png";

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FlashShareDetail_HotFlashList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(134);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_m_Layout_FooterDownload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(135);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NewsTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(118);


 // import { useParams } from 'react-dom'
// import HotNewsList from './HotNewsList'



 // import DownloadBtn from 'multiCompsM/DownloadBtn'
// import WebchatOpenInBrowser from 'multiCompsM/WebchatOpenInBrowser'
// import WxShareBox from 'multiCompsM/WxShareBox'





var NewsdetailShare = function NewsdetailShare(props) {
  var flashImportant = props.flashImportant,
      newsCur = props.newsCur;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t; // const { newsId } = useParams()


  var newsContent = decodeURIComponent(newsCur.content);
  var linkid = props.match.params.newsId;
  console.log(linkid);
  var htmlString = newsCur.source && newsCur.source.toLocaleLowerCase() !== 'tradingview' ? newsContent.replace(/<a[^>]+>/g, function (a) {
    if (!/\srel\s*=/.test(a) && a.indexOf('marsbit.co') === -1) {
      return a.replace(/^<a\s/, '<a rel="nofollow" ');
    }

    return a;
  }) : newsContent; // const titleContent = flashRecognize(flashDetails)
  // const title = titleContent.title
  // const content = titleContent.content

  var subTitle = newsCur.subTitle;
  var aritcleInfo = subTitle.replace(/<p><br><\/p>/g, '');
  aritcleInfo = aritcleInfo.replace(/&nbsp;/g, '');
  var appDownload = Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_hooks_useAppDownload__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(); // const [openInBrowser, setOpenInBrowser] = useState(false)

  console.log(props.match.params.newsId);
  var clickDownload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    appDownload('newsDetail', linkid);
  }, [linkid]); // useEffect(() => {
  //     if (!isWechat()) {
  //         setOpenInBrowser(appDownload('flashDetail', props.match.params.flashId, { doNotDownload: true }))
  //     }
  // }, [])

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log(newsId)
    var imglist = newsContent.match(/<img.*?>/g);

    if (imglist) {
      var imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1];
      var twettermeta = document.createElement('meta');
      twettermeta.name = 'twitter:image';
      twettermeta.content = imgurl;
      document.getElementsByTagName('head')[0].appendChild(twettermeta);
    } else {
      var _twettermeta = document.createElement('meta');

      _twettermeta.name = 'twitter:image';
      _twettermeta.content = 'http://www.marsbit.co/resource/images/huoxing24.png';
      document.getElementsByTagName('head')[0].appendChild(_twettermeta);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-flash-share-detail details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "flashNewsTime"
  }, newsCur.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author"
  }, newsCur.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "time clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_public_index__WEBPACK_IMPORTED_MODULE_4__[/* formatTime */ "l"])(newsCur.publishTime, 'yyyy-MM-dd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "read-text-number"
  }, t('news_hotd'), "\uFF1A", newsCur.hotCounts)), newsCur.synopsis !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, newsCur.synopsis.replace('【GPT】', '')), newsCur.synopsis.indexOf('【GPT】') > -1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsTip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    isH5: true
  })), newsCur.subTitle !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-synopsis adc clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    style: {
      lineHeight: '22px',
      color: 'rgba(51,51,51,70%'
    },
    dangerouslySetInnerHTML: {
      __html: aritcleInfo
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ql-container ql-snow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "editorShow",
    className: "details-cont"
  }, newsCur.editorFlag === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ql-container ql-snow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "newsDetailsContent",
    className: "ql-editor",
    dangerouslySetInnerHTML: {
      __html: htmlString
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-hint"
  }, t('disclaimer_in')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlashShareDetail_HotFlashList__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    data: flashImportant.inforList,
    title: t('hand_pick_flash')
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "more-btn",
    onClick: clickDownload
  }, t('see_more_info_download')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_admin_Desktop_HUOXING_hx_news_huoxing24_com_multiappsharing_components_m_Layout_FooterDownload__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "newsDetail",
    id: linkid
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    newsCur: state.news.newsDetails.current || {},
    flashDetails: state.flash.flashDetails,
    flashImportant: state.flash.flashImportant,
    newsVideoList: state.news.hotNewsVideo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(NewsdetailShare));

/***/ })

};;
//# sourceMappingURL=containers-m-DetailShare.js.map