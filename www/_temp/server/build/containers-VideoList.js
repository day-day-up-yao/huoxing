require("source-map-support").install();
exports.ids = [28];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _Image_video_btn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(478);
/* harmony import */ var _Image_video_btn_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Image_video_btn_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);







var gap = 20; // 每个Item的间距

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      videoListData: state.video.videoListData // 视频列表数据

    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]),
      videoListData = _useSelector.videoListData;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('查看更多'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      btnText = _useState2[0],
      setBtnText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isOk = _useState4[0],
      setIsOk = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      pageNum = _useState6[0],
      setPageNum = _useState6[1]; // 页数


  var contBox = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // cont 实例

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    waterfall();
  }, [videoListData]); // 产生瀑布流效果

  var waterfall = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var items = document.getElementsByClassName('video-list-page-item'); // 首先确定列数 = 页面的宽度 / 图片的宽度
    // let pageWidth = 1200

    var itemWidth = items[0].offsetWidth; // let columns = parseInt(pageWidth / (itemWidth + gap))

    var columns = 4;
    var arr = []; // 定义一个数组，用来存储元素的高度

    for (var i = 0; i < items.length; i++) {
      if (i < columns) {
        // 满足这个条件则说明在第一行，文章里面有提到
        items[i].style.top = 0;
        items[i].style.left = (itemWidth + gap) * i + 'px';
        arr.push(items[i].offsetHeight);
      } else {
        // 其他行，先找出最小高度列，和索引
        // 假设最小高度是第一个元素
        var minHeight = arr[0];
        var index = 0; // 找出最小高度

        for (var j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        } // 设置下一行的第一个盒子的位置
        // top值就是最小列的高度+gap


        items[i].style.top = arr[index] + gap + 'px';
        items[i].style.left = items[index].offsetLeft + 'px'; // 修改最小列的高度
        // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度

        arr[index] = arr[index] + items[i].offsetHeight + gap;
      }
    } // 设置整体高度


    contBox.current.style.height = Math.max.apply(Math, arr) + 'px';
    setIsOk(true);
  }, []); // 请求更多数据

  var getMoreData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (currentPage) {
    dispatch(Object(_redux_actions_video__WEBPACK_IMPORTED_MODULE_6__[/* getVideoList */ "b"])({
      currentPage: currentPage,
      pageSize: 24
    }));
  }, []); // 点击查看更多按钮事件

  var onBtnMoreClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newPageNum = pageNum + 1;
    setPageNum(newPageNum);

    if (videoListData.pageCount >= newPageNum) {
      getMoreData(newPageNum);
    } else {
      setBtnText('没有更多了');
    }
  }, [pageNum]); // 点击每项按钮

  var onBtnItemClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    if (!item.id || !item.publishTime) return;
    window.location.href = _Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* mixUrl */ "A"].main("/video/detail/".concat(item.id, "/").concat(item.publishTime));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "video-list-page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "video-list-page-cont",
    ref: contBox,
    style: {
      opacity: isOk === true ? 1 : 0
    }
  }, videoListData.inforList && Object(_Users_admin_Desktop_HUOXING_hx_www_huoxing24_com_multiappsharing_public__WEBPACK_IMPORTED_MODULE_4__[/* isArray */ "n"])(videoListData.inforList) && videoListData.inforList.map(function (item, index) {
    var videoImg = !item.coverPic || item.coverPic.indexOf('{') === -1 ? '' : JSON.parse(item.coverPic);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "video-list-page-item",
      key: index,
      onClick: function onClick() {
        return onBtnItemClick(item);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "video-item-img"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      title: item.title,
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: !videoImg || !videoImg.pc ? '' : videoImg.pc,
      alt: item.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _Image_video_btn_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "\u64AD\u653E"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "video-item-describe"
    }, item.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "box-bottom"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "comment"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item.commentCounts), "\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "endorse"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item.hotCounts)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "time"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item.videoTime))));
  })), videoListData.recordCount && videoListData.recordCount > 12 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "video-list-page-more",
    onClick: function onClick() {
      return onBtnMoreClick();
    }
  }, btnText));
});

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "video-btn-d985f525.png";

/***/ })

};;
//# sourceMappingURL=containers-VideoList.js.map