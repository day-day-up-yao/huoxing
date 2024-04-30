require("source-map-support").install();
exports.ids = [38];
exports.modules = {

/***/ 160:
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

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// CONCATENATED MODULE: ./_multiappsharing/components-m/ShareBtn2/index.js



 // import WebchatOpenInBrowser from '../../components-m/WebchatOpenInBrowser'
// import useAppDownload from '../../public/hooks/useAppDownload'

/* harmony default export */ var ShareBtn2 = (function (props) {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      iphonex = _useState2[0],
      setIphonex = _useState2[1]; // const [openInBrowser, setOpenInBrowser] = useState(false)
  // const appDownload = useAppDownload()
  // const clickDownload = useCallback(() => {
  //     setOpenInBrowser(appDownload(props.type, props.id))
  // }, [])


  Object(external_react_["useEffect"])(function () {
    Object(_multiappsharing_public["q" /* isIphoneX */])() && setIphonex(true);
    console.log('绑定事件');
    var btn = document.getElementById('launch-btn');
    btn.addEventListener('launch', function (e) {
      console.log('success');
      alert('success');
    });
    btn.addEventListener('error', function (e) {
      console.log('fail', e.detail);
      alert("fail= ".concat(JSON.stringify(e)));
      alert(JSON.stringify(e.detail));
    });
  }, []);
  var htmlText = "<wx-open-launch-app id=\"launch-btn\" appid=\"wx8885cf0644d6a01a\" extinfo=\"extinfo\" style=\"height: 100%; width: 100%;\">\n        <template style=\"display: block; height: 100%; width: 100%;\">\n            <div style=\"height: 100%; width: 100%; background: rgba(0, 0, 0, 1); color: #fff;\">\u53BBMarsBit\u89C2\u770B\u76F4\u64AD</div>\n        </template>\n    </wx-open-launch-app>"; // return <div className={`download-app-wrapper ${iphonex ? 'iphonex' : ''}`} dangerouslySetInnerHTML={{ __html: htmlText }}>

  return external_react_default.a.createElement("div", {
    className: "download-app-wrapper ".concat(iphonex ? 'iphonex' : '')
  }, external_react_default.a.createElement("div", {
    className: "download-app-btn",
    style: {
      position: 'absolute'
    }
  }, "\u53BBMarsBit\u89C2\u770B\u76F4\u64AD"), external_react_default.a.createElement("div", {
    className: "download-app-btn",
    style: {
      opacity: 0
    },
    dangerouslySetInnerHTML: {
      __html: htmlText
    }
  }));
});
// CONCATENATED MODULE: ./assets/containers-m/LiveShare2/index.js










var LiveShare2_LiveShare =
/*#__PURE__*/
function (_Component) {
  inherits_default()(LiveShare, _Component);

  function LiveShare() {
    classCallCheck_default()(this, LiveShare);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(LiveShare).apply(this, arguments));
  }

  createClass_default()(LiveShare, [{
    key: "render",
    value: function render() {
      var img = this.props.roomData.sharePicUrl;
      return external_react_default.a.createElement("div", {
        className: "mLiveSharePage"
      }, external_react_default.a.createElement("img", {
        className: "mLiveSharePageBg",
        src: img,
        draggable: "false"
      }), external_react_default.a.createElement(ShareBtn2, {
        type: "liveShare",
        id: this.props.roomData.roomId
      }));
    }
  }]);

  return LiveShare;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    roomData: state.live.room
  };
};

/* harmony default export */ var LiveShare2 = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(LiveShare2_LiveShare));

/***/ })

};;
//# sourceMappingURL=containers-m-LiveShare2.js.map