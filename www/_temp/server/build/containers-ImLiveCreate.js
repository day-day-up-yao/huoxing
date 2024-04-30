require("source-map-support").install();
exports.ids = [10];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(167);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/node-noop/index.js
var node_noop = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/redux/actions/live.js + 1 modules
var live = __webpack_require__(16);

// EXTERNAL MODULE: ./_multiappsharing/components/Popup/index.js + 1 modules
var Popup = __webpack_require__(213);

// EXTERNAL MODULE: ./_multiappsharing/components/Toast/index.js + 1 modules
var Toast = __webpack_require__(13);

// EXTERNAL MODULE: external "react-image-crop"
var external_react_image_crop_ = __webpack_require__(181);
var external_react_image_crop_default = /*#__PURE__*/__webpack_require__.n(external_react_image_crop_);

// CONCATENATED MODULE: ./_multiappsharing/components/ImageCropper/index.js






/* harmony default export */ var components_ImageCropper = (function (_ref) {
  var onComplete = _ref.onComplete,
      image = _ref.image;
  var imgRef = Object(external_react_["useRef"])(null);

  var _useState = Object(external_react_["useState"])({
    unit: '%',
    width: 100,
    aspect: 16 / 9
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      crop = _useState2[0],
      setCrop = _useState2[1];

  var onLoad = Object(external_react_["useCallback"])(function (img) {
    imgRef.current = img;
  }, []);

  var makeClientCrop =
  /*#__PURE__*/
  function () {
    var _ref2 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(crop) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (imgRef.current && crop.width && crop.height) {
                createCropPreview(imgRef.current, crop, 'newFile.jpeg');
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function makeClientCrop(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var createCropPreview =
  /*#__PURE__*/
  function () {
    var _ref3 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2(image, crop, fileName) {
      var canvas, scaleX, scaleY, ctx;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              canvas = document.createElement('canvas');
              scaleX = image.naturalWidth / image.width;
              scaleY = image.naturalHeight / image.height;
              canvas.width = crop.width;
              canvas.height = crop.height;
              ctx = canvas.getContext('2d');
              ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                canvas.toBlob(function (blob) {
                  if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                  }

                  blob.name = fileName;
                  onComplete(blob);
                }, 'image/jpeg');
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function createCropPreview(_x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement(external_react_image_crop_default.a, {
    src: image,
    onImageLoaded: onLoad,
    crop: crop,
    onChange: function onChange(c) {
      return setCrop(c);
    },
    onComplete: makeClientCrop
  });
});
// EXTERNAL MODULE: ./_multiappsharing/public/index.js
var _multiappsharing_public = __webpack_require__(2);

// EXTERNAL MODULE: external "moment/locale/zh-cn"
var zh_cn_ = __webpack_require__(174);

// EXTERNAL MODULE: external "rc-calendar"
var external_rc_calendar_ = __webpack_require__(182);
var external_rc_calendar_default = /*#__PURE__*/__webpack_require__.n(external_rc_calendar_);

// EXTERNAL MODULE: external "rc-calendar/lib/Picker"
var Picker_ = __webpack_require__(183);
var Picker_default = /*#__PURE__*/__webpack_require__.n(Picker_);

// EXTERNAL MODULE: external "rc-calendar/lib/locale/zh_CN"
var zh_CN_ = __webpack_require__(175);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: external "rc-time-picker/lib/Panel"
var Panel_ = __webpack_require__(184);
var Panel_default = /*#__PURE__*/__webpack_require__.n(Panel_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(25);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

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

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(18);

// CONCATENATED MODULE: ./assets/public/js/RichEditor.js







 // import { urlImgUpload, fileImgUpload, fileLargeUpload } from '../../redux/actions/richEditor'

var toolbarOptions = [[{
  header: [2, 3, false]
}], // [{ header: 2 }, 'bold', 'italic', 'underline', 'strike'],
[{
  header: 2
}, 'bold'], ['blockquote'], [{
  align: []
}], [{
  list: 'ordered'
}, {
  list: 'bullet'
}], // ['link', 'image', 'video'],
['link', 'image'], ['clean']];
var editorQuill = null;

var RichEditor_RichEditor =
/*#__PURE__*/
function (_Component) {
  inherits_default()(RichEditor, _Component);

  function RichEditor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, RichEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(RichEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fullscreen: false // 点击全屏与退出全屏

    };

    _this.fullscreenHandle = function (event) {
      var className = event.target.getAttribute('class');

      if (className && className.indexOf('ql-fullscreen') > -1) {
        _this.setState({
          fullscreen: !_this.state.fullscreen
        });
      }
    };

    return _this;
  }

  createClass_default()(RichEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var MediaQuill = __webpack_require__(185);

      var Delta = MediaQuill["import"]('delta'); // 自定义格式清除

      var qlClean = function qlClean(value) {
        var range = this.quill.getSelection(true);
        var delta2 = this.quill.getContents(range.index, range.length);
        var delta = new Delta().retain(range.index + range.length);
        delta2.ops = delta2.ops.map(function (item) {
          if (!item.insert) {
            return item;
          }

          if (typeof_default()(item.insert) !== 'object') {
            return {
              insert: item.insert
            };
          }

          switch (Object.keys(item.insert)[0]) {
            case 'LinkBlot':
              return {
                insert: item.insert.LinkBlot.text
              };

            default:
              return {
                insert: item.insert
              };
          }
        });
        delta = delta.concat(delta2);
        this.quill.updateContents(delta, MediaQuill.sources.USER);
        this.quill.deleteText(range.index, range.length);
        this.quill.videoInit();
      };

      var options = {
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              clean: qlClean
            }
          },
          imageResize: {} // clipboard: {
          // imageUpload: async (url) => {
          //     const res = await urlImgUpload([
          //         {
          //             signTime: new Date().getTime(),
          //             imgSrc: url || ''
          //         }
          //     ])
          //     if (res.code === 1 && res.obj[0].imgSrc) {
          //         return res.obj[0].imgSrc
          //     }
          // }
          // },
          // mediaUploader: {
          // imageUpload: async (file) => {
          //     const res = await fileImgUpload({
          //         type: 'news',
          //         uploadFile: file
          //     })
          //     if (res.code === 1) {
          //         return res.obj
          //     }
          // },
          // videoUpload: async (file) => {
          //     const videoUrl = await fileLargeUpload({ file })
          //     if (videoUrl) return videoUrl
          // }
          // }

        },
        placeholder: this.props.textDefault,
        theme: 'snow'
      };
      editorQuill = new MediaQuill('#editorQuill', options);
      editorQuill.on('text-change', function () {
        // 通过onChange传给Antd的Form
        if (_this2.props.getContent) {
          var editorVal = editorQuill.root.innerHTML;

          if (editorQuill.mediaUploading() === false) {
            _this2.props.getContent(editorVal);
          }
        }
      });

      if (this.props.content) {
        var oldDelta = editorQuill.root.innerHTML;

        if (this.props.content !== oldDelta && oldDelta === '<p><br></p>') {
          editorQuill.setContents(editorQuill.clipboard.convert(this.props.content));
        }
      }

      editorQuill.videoInit(); // 添加全屏按钮

      var fullscreenIcon = "<svg class=\"ql-fullscreen-svg\" viewBox=\"0 0 1024 1024\"><path d=\"M160 96h192q14.016 0.992 23.008 10.016t8.992 22.496-8.992 22.496T352 160H160v192q0 14.016-8.992 23.008T128 384t-23.008-8.992T96 352V96h64z m0 832H96v-256q0-14.016 8.992-23.008T128 640t23.008 8.992T160 672v192h192q14.016 0 23.008 8.992t8.992 22.496-8.992 22.496T352 928H160zM864 96h64v256q0 14.016-8.992 23.008T896 384t-23.008-8.992T864 352V160h-192q-14.016 0-23.008-8.992T640 128.512t8.992-22.496T672 96h192z m0 832h-192q-14.016-0.992-23.008-10.016T640 895.488t8.992-22.496T672 864h192v-192q0-14.016 8.992-23.008T896 640t23.008 8.992T928 672v256h-64z\" p-id=\"8486\"></path></svg>";
      var formats = document.createElement('span');
      formats.setAttribute('class', 'ql-formats ql-fullscreen-formats');
      var button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'ql-fullscreen');
      button.innerHTML = fullscreenIcon;
      formats.appendChild(button);
      document.querySelector('.ql-toolbar').appendChild(formats);

      if (editorQuill) {
        document.addEventListener('click', this.fullscreenHandle, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.fullscreenHandle, false);
    }
  }, {
    key: "render",
    value: function render() {
      var fullscreen = this.state.fullscreen;
      return external_react_default.a.createElement("div", {
        className: "editor-quill-box ".concat(fullscreen ? 'active' : '')
      }, external_react_default.a.createElement("div", {
        className: "editor-quill-cotent"
      }, external_react_default.a.createElement("div", {
        id: "editorQuill"
      })));
    }
  }]);

  return RichEditor;
}(external_react_["Component"]);

RichEditor_RichEditor.propTypes = {
  content: external_prop_types_["string"].isRequired,
  getContent: external_prop_types_["func"].isRequired,
  textDefault: external_prop_types_["string"].isRequired
};
/* harmony default export */ var js_RichEditor = (RichEditor_RichEditor);
// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-down.png
var im_live_create_down = __webpack_require__(457);
var im_live_create_down_default = /*#__PURE__*/__webpack_require__.n(im_live_create_down);

// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-add.png
var im_live_create_add = __webpack_require__(458);
var im_live_create_add_default = /*#__PURE__*/__webpack_require__.n(im_live_create_add);

// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-date.png
var im_live_create_date = __webpack_require__(459);
var im_live_create_date_default = /*#__PURE__*/__webpack_require__.n(im_live_create_date);

// CONCATENATED MODULE: ./assets/containers/ImLiveCreate/ImLiveCreateItem/index.js

 // import Datetime from 'react-datetime'











/** @desc 输入框Item */

var ImLiveCreateItem_ImLiveCreateInputItem = function ImLiveCreateInputItem(props) {
  var title = props.title,
      valRef = props.valRef,
      isWrong = props.isWrong,
      wrongText = props.wrongText;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-item ".concat(isWrong ? 'wrong' : '')
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-item-title"
  }, title), external_react_default.a.createElement("input", {
    className: "im-live-create-item-input",
    ref: valRef,
    maxLength: 25,
    placeholder: " ".concat('标题不超过25个字')
  }), isWrong && external_react_default.a.createElement("div", {
    className: "im-live-create-item-wrong"
  }, wrongText));
};
/** @desc 文本区Item */

var ImLiveCreateItem_ImLiveCreateTextareaItem = function ImLiveCreateTextareaItem(props) {
  var title = props.title,
      brief = props.brief,
      onBriefChange = props.onBriefChange,
      isWrong = props.isWrong,
      wrongText = props.wrongText;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-item ".concat(isWrong ? 'wrong' : ''),
    style: {
      height: '74px',
      alignItems: 'flex-start'
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-item-title"
  }, title), external_react_default.a.createElement("textarea", {
    className: "im-live-create-item-textarea",
    disabled: true,
    placeholder: " ".concat('简介不超过200字')
  }), external_react_default.a.createElement(js_RichEditor, {
    getContent: onBriefChange,
    content: brief,
    textDefault: " ".concat('简介不超过200字')
  }), isWrong && external_react_default.a.createElement("div", {
    className: "im-live-create-item-wrong"
  }, wrongText));
};
/** @desc 图片Item */

var ImLiveCreateItem_ImLiveCreatePictureItem = function ImLiveCreatePictureItem(props) {
  var title = props.title,
      src = props.src,
      inputFileVal = props.inputFileVal,
      coverImgUpload = props.coverImgUpload,
      isWrong = props.isWrong,
      wrongText = props.wrongText;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-item",
    style: {
      alignItems: 'flex-start'
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-item-title"
  }, title), external_react_default.a.createElement("div", {
    className: "im-live-create-item-img-box"
  }, (!src || src === '') && external_react_default.a.createElement("img", {
    className: "im-live-create-item-icon",
    src: im_live_create_add_default.a
  }), external_react_default.a.createElement("input", {
    className: "im-live-create-item-img-input",
    value: inputFileVal,
    onChange: function onChange(e) {
      return coverImgUpload(e);
    },
    name: "file",
    id: "file",
    type: "file",
    accept: ".jpg,.jpeg,.png"
  }), src && src !== '' && external_react_default.a.createElement("img", {
    className: "im-live-create-item-img",
    src: src
  })), external_react_default.a.createElement("div", {
    className: "im-live-create-item-explain",
    style: {
      width: '120px',
      marginLeft: '16px'
    }
  }, "\u5EFA\u8BAE\u5C3A\u5BF81280*720", external_react_default.a.createElement("br", null), "\u6BD4\u4F8B16:9"), isWrong && external_react_default.a.createElement("div", {
    className: "im-live-create-item-wrong"
  }, wrongText));
};
/** @desc 日期Item */

var ImLiveCreateItem_ImLiveDateInputItem = function ImLiveDateInputItem(props) {
  var title = props.title,
      onTimeChange = props.onTimeChange,
      isWrong = props.isWrong,
      wrongText = props.wrongText; // 仅能选择三天天以内的时间
  // const valid = useCallback(
  //     (current) => {
  //         const tomorrow = moment().add(2, 'day')
  //         const yesterday = moment().subtract(1, 'day')
  //         return current.isAfter(yesterday) && current.isBefore(tomorrow)
  //     },
  //     []
  // )
  // 仅能选择三天天以内的天数

  var disabledDate = Object(external_react_["useCallback"])(function (current) {
    if (!current) {
      // allow empty select
      return false;
    }

    var tomorrow = external_moment_default()().add(2, 'day');
    var yesterday = external_moment_default()().subtract(1, 'day');
    return !(current.isAfter(yesterday) && current.isBefore(tomorrow));
  }, []); // 时间组件

  var timePickerElement = external_react_default.a.createElement(Panel_default.a, {
    defaultValue: external_moment_default()('00:00:00', 'HH:mm'),
    showSecond: false
  }); // 日期组件

  var calendar = external_react_default.a.createElement(external_rc_calendar_default.a, {
    locale: zh_CN_default.a,
    style: {
      zIndex: 1001
    },
    dateInputPlaceholder: "\u8F93\u5165\u65E5\u671F",
    format: "YYYY-MM-DD HH:mm",
    timePicker: timePickerElement,
    disabledDate: disabledDate
  });
  return external_react_default.a.createElement("div", {
    className: "im-live-create-item ".concat(isWrong ? 'wrong' : '')
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-item-title"
  }, title), external_react_default.a.createElement("img", {
    className: "im-live-create-item-date-img",
    src: im_live_create_date_default.a
  }), external_react_default.a.createElement(Picker_default.a, {
    locale: zh_CN_default.a,
    animation: "slide-up",
    calendar: calendar,
    onChange: onTimeChange
  }, function (_ref) {
    var value = _ref.value;
    return external_react_default.a.createElement("input", {
      className: "im-live-create-item-date",
      placeholder: " ".concat('选择日期'),
      readOnly: true,
      value: value && value.format('YYYY-MM-DD HH:mm') || ''
    });
  }), external_react_default.a.createElement("div", {
    className: "im-live-create-item-explain",
    style: {
      width: '360px',
      marginLeft: '16px'
    }
  }, "\u4EC5\u80FD\u9009\u62E9\u4E09\u5929\u4EE5\u5185\u65F6\u95F4\uFF1B\u5F00\u64AD\u65F6\u95F4\u6BB5\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u662F\u5B9E\u9645\u76F4\u64AD\u53EF\u4EE5\u5F00\u64AD\u65F6\u95F4\uFF0C\u76F4\u64AD\u95F4\u5728\u5F00\u59CB\u65F6\u95F4\u524D\u4E5F\u53EF\u4EE5\u5F00\u64AD"), isWrong && external_react_default.a.createElement("div", {
    className: "im-live-create-item-wrong"
  }, wrongText));
};
/** @desc 说明Item */

var ImLiveCreateItem_ImLiveCreateExplainItem = function ImLiveCreateExplainItem(props) {
  var data = props.data;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-item"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-item-explain"
  }, "\u521B\u5EFA\u76F4\u64AD\u5373\u4E3A\u540C\u610F", external_react_default.a.createElement("a", {
    className: "im-live-create-item-explain-a",
    href: data[0].url,
    target: "_blank"
  }, " \u300A".concat(data[0].name, "\u300B ")), "\u4E0E", external_react_default.a.createElement("a", {
    className: "im-live-create-item-explain-a",
    href: data[1].url,
    target: "_blank"
  }, " \u300A".concat(data[1].name, "\u300B "))));
};
/** @desc 按钮Item */

var ImLiveCreateItem_ImLiveCreateBtnItem = function ImLiveCreateBtnItem(props) {
  var text = props.text,
      click = props.click,
      url = props.url;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-item",
    style: {
      marginBottom: 0
    }
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-item-btn",
    onClick: click
  }, text), external_react_default.a.createElement("a", {
    className: "im-live-create-item-btn-explain",
    href: url,
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "im-live-create-item-btn-explain-icon",
    src: im_live_create_down_default.a
  }), "\u4E0B\u8F7DOBS\u8F6F\u4EF6"));
};
/** @desc 教程Item */

var ImLiveCreateItem_ImLiveCreateCourseItem = function ImLiveCreateCourseItem(props) {
  var img = props.img,
      title = props.title,
      text = props.text,
      urlText = props.urlText,
      url = props.url;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-course-item"
  }, external_react_default.a.createElement("img", {
    className: "im-live-create-course-item-img",
    src: img
  }), external_react_default.a.createElement("div", {
    className: "im-live-create-course-item-title"
  }, title), external_react_default.a.createElement("div", {
    className: "im-live-create-course-item-text"
  }, text), url && url !== '' && external_react_default.a.createElement("a", {
    className: "im-live-create-course-item-url",
    href: url,
    target: "_blank"
  }, urlText));
};
// CONCATENATED MODULE: ./assets/containers/ImLiveCreate/ImLiveCreateCropperPopup/index.js


/* harmony default export */ var ImLiveCreateCropperPopup = (function (props) {
  var title = props.title,
      halftitle = props.halftitle,
      textList = props.textList,
      onCloseClick = props.onCloseClick,
      onOkClick = props.onOkClick,
      ImageCropper = props.ImageCropper,
      onComplete = props.onComplete,
      image = props.image;
  return external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-title"
  }, title), external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-halftitle"
  }, halftitle), external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-left"
  }, external_react_default.a.createElement(ImageCropper, {
    onComplete: onComplete,
    image: image
  })), external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-right"
  }, textList && textList.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      className: "im-live-create-cropper-popup-text-item",
      key: index
    }, item);
  }), external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-btn-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-btn close",
    onClick: onCloseClick
  }, "\u53D6\u6D88"), external_react_default.a.createElement("div", {
    className: "im-live-create-cropper-popup-btn ok",
    onClick: onOkClick
  }, "\u786E\u5B9A")))));
});
// EXTERNAL MODULE: ./assets/containers/ImLiveControl/ImLiveControlPopup/index.js
var ImLiveControlPopup = __webpack_require__(247);

// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-popup-close.png
var im_live_create_popup_close = __webpack_require__(460);
var im_live_create_popup_close_default = /*#__PURE__*/__webpack_require__.n(im_live_create_popup_close);

// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-course1.png
var im_live_create_course1 = __webpack_require__(461);
var im_live_create_course1_default = /*#__PURE__*/__webpack_require__.n(im_live_create_course1);

// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-course2.png
var im_live_create_course2 = __webpack_require__(462);
var im_live_create_course2_default = /*#__PURE__*/__webpack_require__.n(im_live_create_course2);

// EXTERNAL MODULE: ./assets/containers/ImLiveCreate/Image/im-live-create-course3.png
var im_live_create_course3 = __webpack_require__(463);
var im_live_create_course3_default = /*#__PURE__*/__webpack_require__.n(im_live_create_course3);

// CONCATENATED MODULE: ./assets/containers/ImLiveCreate/index.js















 // import bgIcon from './Image/im-live-create-bg.png'




 // 截图弹窗说明

var cropperTextList = ['图片格式：JPG、PNG', '文件大小：≦2M', '建议尺寸：1280*720', '图片比例：16:9']; // 协议数据

var explainData = [{
  name: 'MarsBit用户服务协议',
  url: _multiappsharing_public["A" /* mixUrl */].main('/protocol')
}, {
  name: 'MarsBit直播协议',
  url: _multiappsharing_public["A" /* mixUrl */].main('/imlive/protocol')
}]; // MarsBit电脑直播教程

var coursUrl = 'https://news.huoxing24.com/20210201154152675262.html'; // obs下载链接

var obsUrl = 'https://obsproject.com/zh-cn/download'; // 教程数据

var courseData = [{
  img: im_live_create_course1_default.a,
  title: '1. 下载与安装OBS软件',
  text: '在官网下载软件安装包，需要Windows8或者Mac10.13及以上系统'
}, {
  img: im_live_create_course2_default.a,
  title: '2. 软件设置',
  text: '设置推流地址与输出码率',
  urlText: '查看MarsBit电脑直播教程',
  url: 'https://news.huoxing24.com/20210201154152675262.html'
}, {
  img: im_live_create_course3_default.a,
  title: '3. 开始直播',
  text: '设置完成，直播页面点击开始直播'
}];
/* harmony default export */ var ImLiveCreate = __webpack_exports__["default"] = (function () {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return {
      userInfo: state.login.userInfo.info
    };
  }, external_react_redux_["shallowEqual"]),
      userInfo = _useSelector.userInfo;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var inputVal = Object(external_react_["useRef"])(); // 直播标题

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      inputWrong = _useState2[0],
      setInputWrong = _useState2[1]; // 是否显示错误
  // const textareaVal = useRef() // 直播简介


  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      brief = _useState4[0],
      setBrief = _useState4[1]; // 直播简介


  var textImg = Object(external_react_["useRef"])(''); // 直播图片

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      imgWrong = _useState6[0],
      setImgWrong = _useState6[1]; // 是否显示图片错误


  var _useState7 = Object(external_react_["useState"])(''),
      _useState8 = slicedToArray_default()(_useState7, 2),
      inputFileVal = _useState8[0],
      setInputFileVal = _useState8[1]; // 图片输入框值, 确定取消置空，避免同一张图不触发onChange


  var _useState9 = Object(external_react_["useState"])(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      textareaWrong = _useState10[0],
      setTextareaWrong = _useState10[1]; // 是否显示错误


  var _useState11 = Object(external_react_["useState"])(''),
      _useState12 = slicedToArray_default()(_useState11, 2),
      imgDataUrl = _useState12[0],
      setImgDataUrl = _useState12[1]; // 上传的图片DataUrl


  var _useState13 = Object(external_react_["useState"])(''),
      _useState14 = slicedToArray_default()(_useState13, 2),
      imgBolb = _useState14[0],
      setImgBolb = _useState14[1]; // 上传的图片DataUrl


  var _useState15 = Object(external_react_["useState"])(false),
      _useState16 = slicedToArray_default()(_useState15, 2),
      isUpImg = _useState16[0],
      setIsUpImg = _useState16[1]; // 是否正在上传图片


  var _useState17 = Object(external_react_["useState"])(false),
      _useState18 = slicedToArray_default()(_useState17, 2),
      isCropperShow = _useState18[0],
      setIsCropperShow = _useState18[1]; // 是否打开裁剪弹窗


  var _useState19 = Object(external_react_["useState"])(0),
      _useState20 = slicedToArray_default()(_useState19, 2),
      timeVal = _useState20[0],
      setTimeVal = _useState20[1]; // 时间戳


  var _useState21 = Object(external_react_["useState"])(''),
      _useState22 = slicedToArray_default()(_useState21, 2),
      timeWrong = _useState22[0],
      setTimeWrong = _useState22[1]; // 是否显示时间错误


  var _useState23 = Object(external_react_["useState"])(false),
      _useState24 = slicedToArray_default()(_useState23, 2),
      isPopShow2 = _useState24[0],
      setIsPopShow2 = _useState24[1]; // 已有直播间确认弹窗


  var _useState25 = Object(external_react_["useState"])(''),
      _useState26 = slicedToArray_default()(_useState25, 2),
      isHaveRoomId = _useState26[0],
      setIsHaveRoomId = _useState26[1]; // 已有直播间RoomId


  Object(external_react_["useEffect"])(function () {
    if (inputWrong === true && inputVal.current.value !== '') {
      setInputWrong(false);
    }
  }, [inputVal.current, inputWrong]); // 图片地址转换Blob格式
  // const dataURLtoBlob = (dataurl) => {
  //     let arr = dataurl.split(',')
  //     let mime = arr[0].match(/:(.*?);/)[1]
  //     let bstr = atob(arr[1])
  //     let n = bstr.length
  //     let u8arr = new Uint8Array(n)
  //     while (n--) {
  //         u8arr[n] = bstr.charCodeAt(n)
  //     }
  //     return new Blob([u8arr], { type: mime })
  // }
  // 选择图片文件

  var onSetInputFiles = Object(external_react_["useCallback"])(function (e) {
    var file = e.target.files[0]; // 获取文件

    if (window.FileReader) {
      // 如果浏览器支持FileReader
      var reader = new FileReader(); // 新建一个FileReader对象

      reader.readAsDataURL(file); // 读取文件url

      reader.onloadend = function (e) {
        setImgDataUrl(e.target.result);
        setIsCropperShow(true);
      };
    }

    setInputFileVal('');
  }, []); // 上传图片事件

  var coverImgUpload = Object(external_react_["useCallback"])(function () {
    setIsUpImg(true);
    Object(live["m" /* uploadImg */])({
      uploadFile: imgBolb,
      type: 'news',
      data: '',
      watermark: 0
    }).then(function (res) {
      if (res.code === 1) {
        textImg.current = res.obj;
        setIsCropperShow(false);
      }

      setIsUpImg(false);
    })["catch"](function (err) {
      console.log('上传图片失败');
      setIsUpImg(false);
      throw err;
    });
  }, [imgBolb, textImg]); // 获取直播简介变化

  var onBriefChange = Object(external_react_["useCallback"])(function (content) {
    setBrief(content);
  }, []); // 获取截取图片的Bolb

  var onComplete = Object(external_react_["useCallback"])(function (e) {
    setImgBolb(e);
  }, []); // 获取时间变化

  var onTimeChange = Object(external_react_["useCallback"])(function (value) {
    if (!value) {
      setTimeVal('');
    } else {
      setTimeVal(value.valueOf());
    }
  }, []); // 点击创建按钮事件

  var onBtnCreateClick = Object(external_react_["useCallback"])(
  /*#__PURE__*/
  asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var time, liveListData, liveList, isHave, i, element, roomAddRes;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setInputWrong(inputVal.current.value === '');
            setTextareaWrong(brief === '' || brief === '<p></p>' || brief === '<p><br></p>');
            setImgWrong(textImg.current === '');
            setTimeWrong(timeVal === 0 || timeVal === '');

            if (!(isUpImg === true || textImg.current === '' || timeVal === 0 || timeVal === '' || Object(_multiappsharing_public["H" /* trim */])(inputVal.current.value) === '' || Object(_multiappsharing_public["H" /* trim */])(brief) === '' || brief === '<p></p>' || brief === '<p><br></p>')) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            // 如果所选时间小于此刻时间，直接用此刻时间
            time = timeVal < external_moment_default()().valueOf() ? external_moment_default()().valueOf() : timeVal;
            _context.next = 9;
            return dispatch(Object(live["f" /* getRoomLiveList */])({
              passportId: userInfo.passportId,
              adminCreateFlag: 0,
              main: true
            }));

          case 9:
            liveListData = _context.sent;

            if (!(liveListData.code === 1)) {
              _context.next = 28;
              break;
            }

            liveList = liveListData.obj.inforList;
            isHave = -1;
            i = 0;

          case 14:
            if (!(i < liveList.length)) {
              _context.next = 22;
              break;
            }

            element = liveList[i];

            if (!(parseInt(element.status) !== 2)) {
              _context.next = 19;
              break;
            }

            isHave = i;
            return _context.abrupt("break", 22);

          case 19:
            i++;
            _context.next = 14;
            break;

          case 22:
            if (!(isHave !== -1)) {
              _context.next = 26;
              break;
            }

            setIsHaveRoomId(liveList[isHave].roomId);
            setIsPopShow2(true);
            return _context.abrupt("return", {
              customRes: true
            });

          case 26:
            _context.next = 29;
            break;

          case 28:
            throw Error(liveListData.msg);

          case 29:
            _context.next = 31;
            return Object(live["c" /* getRoomAdd */])({
              name: inputVal.current.value,
              brief: brief,
              passportId: userInfo.passportId,
              nickName: userInfo.nickName,
              coverPicUrl: textImg.current,
              beginTime: time,
              roomType: 1 // displayFlag: 0 // 临时添加：创建不展示的直播间

            })["catch"](function (err) {
              Toast["a" /* default */].info('获取直播间错误');
              throw err;
            });

          case 31:
            roomAddRes = _context.sent;

            if (roomAddRes.code === 1) {
              window.location.href = _multiappsharing_public["A" /* mixUrl */].main("/live/control/".concat(roomAddRes.obj));
            } else {
              Toast["a" /* default */].info(roomAddRes.msg);
            }

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [dispatch, inputVal, isUpImg, textImg, userInfo, brief, timeVal]); // 点击关闭裁剪弹窗

  var onBtnCropperCloseClick = Object(external_react_["useCallback"])(function () {
    setInputFileVal('');
    setImgDataUrl('');
    setIsCropperShow(false);
  }, []); // 点击已存在直播间按钮

  var onBtnPopupOKClick2 = Object(external_react_["useCallback"])(function () {
    if (isHaveRoomId !== '') {
      window.location.href = _multiappsharing_public["A" /* mixUrl */].main("/live/control/".concat(isHaveRoomId));
    }
  }, [isHaveRoomId]);
  return external_react_default.a.createElement("div", {
    className: "im-live-create-page"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-page-title-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-page-title"
  }, "\u521B\u5EFA\u7535\u8111\u7AEF\u76F4\u64AD"), external_react_default.a.createElement("div", {
    className: "im-live-create-page-explain-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-page-explain"
  }, "\u7535\u8111\u76F4\u64AD\u9700\u8981OBS\u8F6F\u4EF6\u8F85\u52A9\uFF0C\u624B\u673A\u76F4\u64AD\u8BF7\u5728MarsBit\u4E0A\u5F00\u542F"), external_react_default.a.createElement("a", {
    className: "im-live-create-page-explain explain2",
    href: coursUrl,
    target: "_blank"
  }, "MarsBit\u7535\u8111\u76F4\u64AD\u6559\u7A0B"))), external_react_default.a.createElement("div", {
    className: "im-live-create-page-create-box"
  }, external_react_default.a.createElement(ImLiveCreateItem_ImLiveCreateInputItem, {
    title: '直播标题：',
    valRef: inputVal,
    isWrong: inputWrong,
    wrongText: '请填写直播标题'
  }), external_react_default.a.createElement(ImLiveCreateItem_ImLiveCreateTextareaItem, {
    title: '直播简介：',
    brief: brief,
    onBriefChange: onBriefChange,
    isWrong: textareaWrong,
    wrongText: '请填写直播简介'
  }), external_react_default.a.createElement(ImLiveCreateItem_ImLiveCreatePictureItem, {
    title: '直播封面：',
    src: !textImg.current ? imgDataUrl : textImg.current,
    inputFileVal: inputFileVal,
    coverImgUpload: onSetInputFiles,
    isWrong: imgWrong,
    wrongText: '请上传直播封面'
  }), external_react_default.a.createElement(ImLiveCreateItem_ImLiveDateInputItem, {
    title: '直播日期：',
    onTimeChange: onTimeChange,
    isWrong: timeWrong,
    wrongText: '请选择直播日期'
  }), external_react_default.a.createElement(ImLiveCreateItem_ImLiveCreateExplainItem, {
    data: explainData
  }), external_react_default.a.createElement(ImLiveCreateItem_ImLiveCreateBtnItem, {
    text: '创建直播',
    click: onBtnCreateClick,
    url: obsUrl
  })), external_react_default.a.createElement("div", {
    className: "im-live-create-page-title-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-page-title"
  }, "\u5F00\u542F\u76F4\u64AD\u6559\u7A0B"), external_react_default.a.createElement("div", {
    className: "im-live-create-page-explain-box"
  }, external_react_default.a.createElement("div", {
    className: "im-live-create-page-explain"
  }, "MarsBit\u7535\u8111\u76F4\u64AD\u9700\u4F7F\u7528OBS\u6216\u8005\u5176\u4ED6\u540C\u7C7B\u578B\u8F6F\u4EF6\u8F85\u52A9\uFF0C\u4EE5\u4E0B\u6559\u7A0B\u4EE5OBS\u8F6F\u4EF6\u4E3A\u4F8B"))), external_react_default.a.createElement("div", {
    className: "im-live-create-page-course-box"
  }, courseData.map(function (item, index) {
    return external_react_default.a.createElement(ImLiveCreateItem_ImLiveCreateCourseItem, extends_default()({}, item, {
      key: index
    }));
  })), external_react_default.a.createElement(Popup["a" /* default */], {
    children: external_react_default.a.createElement(ImLiveCreateCropperPopup, {
      title: '图片裁剪',
      halftitle: '优秀的封面是获得流量的基础',
      textList: cropperTextList,
      onCloseClick: onBtnCropperCloseClick,
      onOkClick: coverImgUpload,
      ImageCropper: components_ImageCropper,
      onComplete: onComplete,
      image: imgDataUrl
    }),
    show: isCropperShow,
    close: onBtnCropperCloseClick,
    closeIcon: im_live_create_popup_close_default.a,
    closeClassName: 'im-live-create-cropper-popup-close '
  }), external_react_default.a.createElement(Popup["a" /* default */], {
    children: external_react_default.a.createElement(ImLiveControlPopup["a" /* default */], {
      title: '提示',
      text: '您已存在直播间',
      ok: onBtnPopupOKClick2,
      okText: '确定'
    }),
    show: isPopShow2,
    closeClassName: 'im-live-control-popup-close2'
  }));
});

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

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var title = props.title,
      text = props.text,
      close = props.close,
      ok = props.ok,
      okText = props.okText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-text"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-btn-box",
    style: {
      justifyContent: close && ok ? 'space-between' : 'center'
    }
  }, close && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-btn close",
    onClick: close
  }, "\u53D6\u6D88"), ok && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "im-live-control-popup-btn ok",
    onClick: ok
  }, okText)));
});

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-down-6f6d353d.png";

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-add-d14060e5.png";

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-date-a9886975.png";

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-popup-close-d56650a0.png";

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-course1-359e473e.png";

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-course2-dcd98fa7.png";

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im-live-create-course3-34dcdab5.png";

/***/ })

};;
//# sourceMappingURL=containers-ImLiveCreate.js.map