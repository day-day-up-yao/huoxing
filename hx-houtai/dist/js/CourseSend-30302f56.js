(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1509:function(e,t,n){"use strict";n.r(t),function(e){n(675);var a=n(676),r=n.n(a),i=(n(1381),n(1382)),o=n.n(i),s=(n(1383),n(1384)),l=n.n(s),c=(n(1376),n(1377)),u=n.n(c),p=(n(1396),n(1397)),d=n.n(p),m=(n(247),n(183)),f=n.n(m),g=(n(1388),n(1389)),h=n.n(g),v=(n(1387),n(50)),b=n.n(v),y=(n(361),n(20)),w=n.n(y),S=(n(677),n(362)),I=n.n(S),E=(n(678),n(363)),O=n.n(E),C=(n(184),n(1378)),k=n.n(C),x=(n(1379),n(1380)),P=n.n(x),j=n(0),L=n.n(j),T=n(246),N=n(10),A=n(1650),V=n(1398),F=(n(1606),n(51)),_=n.n(F),q=n(1688),D=n(1685),R=n(48);n(1686);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,t,n,a,r,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(a,r)}function z(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){U(i,a,r,o,s,"next",e)}function s(e){U(i,a,r,o,s,"throw",e)}o(void 0)})}}function H(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=P.a.Item,Q=k.a.TextArea,Y=O.a.Group,X=I.a.Option,Z=[{label:"音频",value:"1"},{label:"视频",value:"2"}],ee=function(t){function n(t){var a,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,i=G(n).call(this,t),a=!i||"object"!==M(i)&&"function"!=typeof i?W(r):i,$(W(a),"enterIconLoading",function(){a.setState({iconLoading:!0})}),$(W(a),"insertState",function(e){e.map(function(e){a.state[e+"fileList"]=[],a.state[e+"Img"]=""})}),$(W(a),"saveArticle",function(e){var t=a.props.form,n={tags:a.state.tags.join(","),original:a.state.original,introduction:a.state.introduction,author:t.getFieldValue("author"),hotCounts:t.getFieldValue("hotCounts"),synopsis:t.getFieldValue("synopsis"),title:t.getFieldValue("title"),source:t.getFieldValue("source"),advertised:t.getFieldValue("advertised"),subTitle:t.getFieldValue("subTitle"),originalUrl:t.getFieldValue("originalUrl"),originalTitle:t.getFieldValue("originalTitle"),resType:a.state.resType,place:a.state.place,picHead:a.state.pcImg,picCover:a.state.Img};localStorage.setItem("courseData",JSON.stringify(n)),e&&e(n)}),$(W(a),"fileList",function(e){return[{uid:0,name:"xxx.png",status:"done",url:e}]}),$(W(a),"renderData",function(e){var t=e.introduction.replace(/<style(.+)<\/style>/,"");a.state.editor.setValue(t);var n=a.fileList(e.picCover),r=a.fileList(e.picHead);a.setState({updateOrNot:!0,fileList:n,pcfileList:r,introduction:t,Img:e.picCover,allImg:e.all,pcImg:e.picHead,loading:!1,mark:e.mark||0,resType:e.resType})}),$(W(a),"placeChange",function(e){a.setState({place:e.target.value})}),$(W(a),"resTypeChange",function(e){var t=a.props.form;"1"===e.target.value?t.setFieldsValue({resType:"1"}):t.setFieldsValue({resType:"2"}),a.setState({resType:e.target.value})}),$(W(a),"handleCancel",function(){return a.setState({previewVisible:!1})}),$(W(a),"handlePreview",function(e){if(e.hasOwnProperty("target")){var t=e.target.getAttribute("data-type");""!==a.state[t]?a.setState({previewImage:a.state[t],previewVisible:!0}):w.a.info("请先上传图片")}else a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),$(W(a),"file",function(e){return new Promise(function(t){var n=new FileReader,a=new Image;n.readAsDataURL(e),n.onload=function(e){var t=e.target.result;a.src=t},t(a)})}),$(W(a),"image",function(e){return new Promise(function(t){e.onload=function(){var n=e.width,a=e.height;t(n<=1300&&a<=1300)}})}),$(W(a),"beforeUpload",function(){var e=z(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.file(t).then(function(e){return a.image(e)}).then(function(e){return e});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),$(W(a),"handleChange",function(){var e=z(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.file,r=t.fileList,"removed"!==n.status){e.next=5;break}a.setState({Img:""}),e.next=11;break;case 5:return e.next=7,a.beforeUpload(n.originFileObj);case 7:if(e.sent){e.next=11;break}return w.a.warning("单张图片上传尺寸不能大于 1300 * 1300, 请重新选择图片或使用统一上传!"),e.abrupt("return",!1);case 11:a.setState({fileList:r}),n.response&&(1===n.response.code&&"done"===n.status&&a.setState({Img:n.response.obj}),"error"===n.status&&(w.a.error("网络错误，上传失败！"),a.setState({Img:"",fileList:[]})));case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),$(W(a),"handlePcChange",function(){var e=z(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.file,r=t.fileList,"removed"!==n.status){e.next=5;break}a.setState({pcImg:""}),e.next=11;break;case 5:return e.next=7,a.beforeUpload(n.originFileObj);case 7:if(e.sent){e.next=11;break}return w.a.warning("单张图片上传尺寸不能大于 1300 * 1300, 请重新选择图片或使用统一上传!"),e.abrupt("return",!1);case 11:a.setState({pcfileList:r}),n.response&&(1===n.response.code&&"done"===n.status&&a.setState({pcImg:n.response.obj}),"error"===n.status&&(w.a.error("网络错误，上传失败！"),a.setState({pcImg:"",pcfileList:[]})));case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),$(W(a),"newsVisibleHide",function(){a.setState({newsVisible:!1})}),$(W(a),"newsVisibleShow",function(){a.setState({newsVisible:!0})}),$(W(a),"uploadAllImg",function(t){var n=t.file,r=t.fileList,i=W(a);if(n.size/1048576>=2)return w.a.error("图片大小超过 2M , 请重新选择!"),a.setState({allfilelist:[],allImg:""}),!1;a.setState({allfileList:r}),"removed"===n.status&&(a.setState({allfilelist:[],allImg:""}),a.state.cropImgRule.map(function(e,t){var n;i.setState(($(n={},e.coverName,""),$(n,e.coverList,[]),n))})),n.response&&(1===n.response.code&&"done"===n.status&&a.setState({allImg:n.response.obj,uploadAllImgModal:!0,focusImg:-1},function(){var t=document.querySelector("#croppedImg");t.src=n.thumbUrl,i.setState({cropper:new V.a(t,{aspectRatio:a.state.ratio,viewMode:1,crop:function(t){var n=this.cropper.getCroppedCanvas({maxWidth:800}).toDataURL("image/jpeg"),a=e(".crop-preview-item"),r=i.state.focusImg;-1===r?a.each(function(t,a){e(this).children("img").attr("src",n)}):a.eq(r).children("img").attr("src",n)}})})}),"error"===n.status&&(w.a.error("网络错误，上传失败！"),a.setState({allImg:"",allfileList:[]})))}),$(W(a),"sureCropImg",function(){var t=W(a),n=0;a.setState({uploadAllImgModal:!1,loading:!0}),w.a.warning("上传中，请稍候！"),a.state.cropper.destroy(),e(".crop-preview-item").each(function(a,r){var i=this;setTimeout(function(){var a,r=e(i).data("type"),o=e(i).data("list");t.setState(($(a={},r,""),$(a,o,[]),a));var s=Object(R.r)(e(i).find("img").prop("src")),l=new FormData;l.append("uploadFile",s),e.ajax("".concat(R.a,"/pic/upload"),{headers:{"Sign-Param":Object(R.A)()},method:"POST",data:l,processData:!1,timeout:2e4,contentType:!1,success:function(e){var a;2===(n+=1)&&(t.setState({loading:!1}),w.a.success("上传完毕！")),t.setState(($(a={},r,e.obj),$(a,o,[{uid:0,name:"xxx.png",status:"done",url:e.obj}]),a),function(){})},error:function(e,n){t.setState({loading:!1}),"timeout"===n?w.a.error("上传超时, 请检查网络后重新上传！"):w.a.error("上传发生错误, 请尝试重新上传！"),e.abort()}})},500*a)})}),$(W(a),"uploadAllImgCancel",function(){a.setState({uploadAllImgModal:!1}),a.state.cropper.destroy()}),$(W(a),"selectTime",function(e){}),$(W(a),"handleSubmit",function(t){t.preventDefault(),a.enterIconLoading();var n=t.target.getAttribute("data-status"),r=a.state.updateOrNot&&(a.props.location.query.id||a.props.location.query.url);return e(".simditor").find("img.uploading").length>0?(w.a.warning("编辑器中图片正在上传, 请稍候提交!"),a.setState({iconLoading:!1}),!1):a.state.uploading?(w.a.warning("视频正在上传, 请稍候提交!"),a.setState({iconLoading:!1}),!1):void a.setState({audioDefalutArr:[]},function(){var e=this;this.props.form.setFieldsValue({mark:1===this.state.mark,introduction:this.state.introduction,picHead:this.state.pcImg,picCover:this.state.Img}),this.props.form.validateFieldsAndScroll(function(t,a){t?e.setState({iconLoading:!1}):(e.setState({loading:!0}),delete a.alignLeft,delete a.wordBreak,delete a.watermark,a.status=n||1,a.type=1,a.chapterNums=0,a.duration=0,a.mark=a.mark?1:0,e.state.updateOrNot?a.resourceId=e.props.location.query.id||"":delete a.resourceId,Object(R.i)("post","".concat(e.state.updateOrNot&&e.props.location.query.id?"/college/lesson/update":"/college/lesson/add"),a,function(t){e.setState({loading:!1}),t.code&&1===t.code?(w.a.success(r?"修改成功！":"添加成功！"),!r&&localStorage.removeItem("courseData"),N.hashHistory.push("/college-courseList")):(e.setState({iconLoading:!1}),w.a.error(t.msg))}))})})}),$(W(a),"sendPost",function(e){var t=a.state,n=t.wordBreak,r=t.alignLeft,i='<style type="text/css"> .details .details-cont p, p {word-break: '.concat(n?"break-all !important":"normal","; text-align: ").concat(r?"left !important":"unset","} p img {text-align: center !important;} </style>"),o={newsTitle:e.postTitle||"",newsContent:"<div class=".concat(r?"simditorSupport":"",">").concat(i).concat(e.postContent,"</div>")||!1};a.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){$(e,t,n[t])})}return e}({},a.state,{introduction:o.newsContent}))}),$(W(a),"createMarkup",function(e){return{__html:e}}),$(W(a),"CropperImgCroped",function(e){console.log(e)}),$(W(a),"FormItem",function(e){var t=a.state.updateOrNot,n=a.props.form.getFieldDecorator,r=L.a.createElement("div",null,L.a.createElement(b.a,{type:"plus"}),L.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return L.a.createElement(K,B({},{labelCol:{span:1},wrapperCol:{span:15,offset:1}},{label:e.label}),L.a.createElement("div",{className:"dropbox"},n(e.imgName,{initialValue:t&&e.courseInfo?e.fileList:"",rules:[{required:e.require,message:"请上传".concat(e.label,"封面！")}]})(L.a.createElement(h.a,{headers:{"Sign-Param":Object(R.A)()},action:"".concat(R.a,"/pic/upload"),name:"uploadFile",listType:"picture-card",fileList:e.fileList,onPreview:a.handlePreview,onChange:e.changeEvent},e.fileList.length>=1?null:r)),e.noBtn?"":L.a.createElement(f.a,{"data-type":e.imgUrl,onClick:a.handlePreview,className:"img-preview",type:"primary"},"预览"),L.a.createElement("span",{className:"cover-img-tip"},"用于 ",e.label," 的封面展示, 建议尺寸: ",L.a.createElement("font",{style:{color:"red"}},e.size))))}),a.state={editor:"",updateOrNot:!1,tags:[],inputVisible:!1,inputValue:"",isLogin:!1,place:"北京",newsVisible:!1,resType:"2",previewVisible:!1,previewImage:"",newsTitle:"",introduction:"",uploading:!1,progressNum:0,loading:!0,mark:0,advertised:0,uploadAllImgModal:!1,cropper:null,focusImg:-1,ratio:2,cropImgRule:[{coverName:"pcImg",coverList:"pcfileList",width:"800px",height:"200px",ratio:4,intro:"PC端推荐位新闻封面:1200 * 300"},{coverName:"Img",coverList:"fileList",width:"256px",height:"186px",ratio:1.375,intro:"PC 端新闻封面:385 * 280"}],width:0,height:0,wordBreak:0,alignLeft:0,iconLoading:!1,interval:0},a}var a,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(n,j["Component"]),a=n,(i=[{key:"componentWillMount",value:function(){_.a.set("watermark",0),this.insertState(["all","","pc"])}},{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.dispatch,a=t.location;n(Object(D.b)("init",{pageSize:1e3,currentPage:1})),a.query.id?(this.setState({loading:!0}),n(Object(q.b)({resourceId:a.query.id},function(t){e.renderData(t)}))):this.setState({loading:!1})}},{key:"componentWillUnmount",value:function(){var e=this.state.interval;this.setState({interval:clearInterval(e)})}},{key:"changeActiveImg",value:function(e,t,n){var a=this;if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),n===this.state.focusImg)return!1;this.setState({ratio:t.ratio,focusImg:n},function(){a.state.cropper.setAspectRatio(t.ratio)})}},{key:"render",value:function(){var e=this,t=this,n=this.props.form.getFieldDecorator,a=this.props.courseInfo,i=this.state,s=i.focusImg,c=i.allfileList,p=i.uploadAllImgModal,m=i.previewVisible,g=i.previewImage,v=i.fileList,y=i.pcfileList,w=i.introduction,S=i.updateOrNot,E=i.newsVisible,O={labelCol:{span:1},wrapperCol:{span:20,offset:1}},C=L.a.createElement("div",null,L.a.createElement(b.a,{type:"plus"}),L.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return L.a.createElement("div",{className:"course-send"},L.a.createElement(r.a,{spinning:this.state.loading,size:"large"},L.a.createElement(P.a,{onSubmit:this.handleSubmit},L.a.createElement(K,B({},O,{label:"课程类型: "}),n("resType",{initialValue:S&&a?"".concat(a.resType||"1"):"1"})(L.a.createElement(Y,{options:Z,onChange:this.resTypeChange,setFieldsValue:this.state.resType}))),0!==this.props.lecturerList.length&&L.a.createElement(K,B({},O,{label:"讲师: "}),n("lecturerId",{initialValue:S&&a?"".concat(a.lecturerId||""):"",rules:[{required:!0,message:"请选择课程讲师！"}]})(L.a.createElement(I.a,{style:{width:240},showSearch:!0,showArrow:!0,optionFilterProp:"children"},L.a.createElement(X,{value:""},"请选择讲师"),this.props.lecturerList.map(function(e){return L.a.createElement(X,{value:"".concat(e.lecturerId),key:e.lecturerId},e.name)})))),L.a.createElement(K,B({},O,{label:"价格: "}),n("money",{initialValue:S&&a&&a.money||"",rules:[{required:!0,message:"请输入课程价格！"},{pattern:/^\d+(\.\d+)?$/,message:"请输入正确的数字"}]})(L.a.createElement(k.a,{className:"news-source",placeholder:"请输入课程价格(单位:元)"}))),L.a.createElement(K,B({},O,{label:"标题: "}),n("title",{initialValue:S&&a&&a.title||"",rules:[{required:!0,message:"请输入课程标题！"},{pattern:/^[^\s]+$/,message:"请勿输入空格！"}]})(L.a.createElement(k.a,{className:"news-source",placeholder:"请输入课程标题"}))),L.a.createElement(K,B({},O,{label:"课程简介: "}),n("brief",{initialValue:S&&a&&a.brief||"",rules:[{max:300,required:!0,message:"请输入课程特色, 最多300字！"}]})(L.a.createElement(Q,{rows:4,className:"news-summary",placeholder:"课程特色(简介), 最多300字"}))),L.a.createElement(K,B({},O,{label:"精品课程: "}),n("mark",{initialValue:!(!S||!a.mark)&&1===parseInt(a.mark),valuePropName:"checked"})(L.a.createElement(d.a,{onChange:function(t){e.setState({mark:t?1:0})},checkedChildren:"是",unCheckedChildren:"否"}))),L.a.createElement(K,B({},O,{label:"课程内容: "}),n("introduction",{initialValue:S&&a?w:"",rules:[{required:!0,message:"请输入课程内容！"}]})(L.a.createElement(k.a,{className:"news",style:{display:"none"}})),L.a.createElement(A.a,{setSimditor:function(t){e.setState({editor:t})},subSend:function(t){return e.sendPost(t)}})),L.a.createElement(K,B({},O,{label:"统一上传图片: "}),L.a.createElement("div",{className:"dropbox"},L.a.createElement(h.a,{headers:{"Sign-Param":Object(R.A)()},action:"".concat(R.a,"/pic/upload"),name:"uploadFile",listType:"picture-card",fileList:c,onPreview:this.handlePreview,onChange:this.uploadAllImg},c.length>=1?null:C),L.a.createElement("span",{className:"cover-img-tip all-img"},"统一上传所有尺寸图片，自动剪裁适配尺寸"))),this.FormItem({imgName:"picCover",label:"封面图",imgUrl:"Img",courseInfo:a,fileList:v,changeEvent:this.handleChange,size:"385 * 280",noBtn:!1,require:!0}),this.FormItem({imgName:"picHead",label:"详情页图片",imgUrl:"pcImg",courseInfo:a,fileList:y,changeEvent:this.handlePcChange,size:"1200 * 300",noBtn:!1,require:!1}),L.a.createElement(K,{wrapperCol:{span:12,offset:2}},L.a.createElement(f.a,{type:"primary",onClick:this.newsVisibleShow,className:"preview",style:{marginRight:"10px",marginBottom:10}},"课程内容预览"),L.a.createElement(f.a,{loading:this.state.iconLoading,type:"primary","data-status":"1",onClick:this.handleSubmit,style:{marginRight:"10px"}},"发布"),L.a.createElement(f.a,{type:"primary","data-status":"0",onClick:this.handleSubmit,style:{marginRight:"10px"}},"待发布"),L.a.createElement(f.a,{type:"primary",className:"cancel",onClick:function(){N.hashHistory.goBack()}},"取消")),L.a.createElement(u.a,{height:"700px",width:"1400px",style:{top:"50px"},visible:p,onOk:this.sureCropImg,maskClosable:!1,onCancel:this.uploadAllImgCancel},L.a.createElement("div",{className:"croper-wrap activityPub clearfix"},L.a.createElement("div",{className:"crop-img",id:"cropImgWrap"},L.a.createElement("img",{id:"croppedImg",src:"",alt:"Picture"})),L.a.createElement("div",{onClick:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),e.setState({focusImg:-1})},className:"crop-preview"},this.state.cropImgRule.map(function(e,n){return L.a.createElement("div",{key:n,onClick:function(a){t.changeActiveImg(a,e,n)},className:"cropper-intro"},L.a.createElement("div",{className:"cropper-item-wrap ".concat(s===n?"active":"")},L.a.createElement("div",{"data-type":e.coverName,"data-list":e.coverList,className:"crop-preview-item",style:{fontSize:0,width:e.width,height:e.height}},L.a.createElement("img",{src:"",alt:"",style:{width:"100%",height:"100%"}}))),L.a.createElement("span",null,e.intro))})))),L.a.createElement(u.a,{visible:E,footer:null,className:"newsModal",onCancel:this.newsVisibleHide,width:1e3},L.a.createElement(o.a,null,L.a.createElement(l.a,{className:"previewNews simditor"},L.a.createElement("p",{className:"simditor-body",style:{padding:10},dangerouslySetInnerHTML:this.createMarkup(w)})))),L.a.createElement(u.a,{visible:m,footer:null,onCancel:this.handleCancel},L.a.createElement("img",{alt:"example",style:{width:"100%"},src:g})))))}}])&&H(a.prototype,i),s&&H(a,s),n}();t.default=Object(T.connect)(function(e){return{userInfo:e.courseInfo.userInfo,courseInfo:e.courseInfo.info,lecturerList:e.lecturerInfo.list}})(P.a.create()(ee))}.call(this,n(97))},1650:function(e,t,n){"use strict";n(184);var a=n(1378),r=n.n(a),i=n(0),o=n.n(i),s=n(246),l=n(97),c=n.n(l),u=n(1399),p=n.n(u),d=(n(1640),n(1622)),m=n.n(d),f=(n(1651),n(48));n(1623);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=r.a.TextArea,S="",I=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=v(this,b(t).call(this,e));var a=e.info,r=e.toolBar;return n.state={postContent:a&&a.postContent?a.postContent:""},n.EDITTOOLBAR=r||["title","bold","italic","underline","strikethrough","fontScale","color","ol","ul","blockquote","code","table","link","image","hr","indent","outdent","alignment","clearhtml"],n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,i["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;(S=new p.a({pasteImage:!0,textarea:c()(".editor"),defaultImage:m.a,toolbar:this.EDITTOOLBAR,upload:{pasteImage:!0,url:"".concat(f.a,"/picture/upload"),params:{type:"news"},fileKey:"uploadFile",connectionCount:1,headers:{"Sign-Param":Object(f.A)()},leaveConfirm:"正在上传文件",success:function(e){this.editor.opts.upload.headers["Sign-Param"]=Object(f.A)();var t="",n="";return 1!==e.code?(t=e.msg||this._t("uploadFailed"),window.layer.msg(t),n=this.defaultImage):n=e.obj,n}}})).on("focus",function(){var e=c()(".toolbar-menu-title").find("li");e.eq(2).hide(),e.eq(3).hide(),e.eq(6).hide(),e.eq(7).hide();var t=c()(".link-popover").find(".settings-field");t.eq(0).hide(),t.eq(1).find("input").val(""),t.eq(2).hide()}),S.on("pasting",function(e,t){t.each(function(){c()(this).removeAttr("style"),c()(this).find("*").removeAttr("style"),c()(this).removeAttr("class"),c()(this).find("*").removeAttr("class")});var n=c()(t[0]),a=Object(f.G)(n.html())?n.html():[],r=c()(".simditor-body"),i=c()(".simditor");setTimeout(function(){r.children("p").each(function(){var e=c()(this),t=c()(this).html();Object(f.G)(t)&&t.indexOf("signTime")>-1&&t.indexOf("imgSrc")>-1&&e.remove()})},10);0!==a.length&&(i.find(".simditorModal").length>0?c()(".simditorModal").show():i.append('<div class="simditorModal" style="position:absolute;top: 0;left: 0;z-index: 6; width:100%;height:100%;box-sizing:border-box;padding-top:40px;text-align: center;line-height: 150%;font-size: 1.2rem;background-color: rgba(255,255,255,0.5);">图片上传中</div>'),Object(f.i)("POST","/pic/url_upload",{data:a},function(e){1===e.code&&(c.a.each(e.obj,function(e,t){var n="pasteUploadingImg"+t.signTime;c()("img[src="+n+"]").attr("src",t.imgSrc)}),c()(".simditorModal").hide(),S.setValue(r.html()))}))}),this.props.setSimditor&&this.props.setSimditor(S);var t=this.props.info;t&&t.postContent&&S.setValue(t.postContent),S.on("valuechanged ",function(t){e.setState({postContent:S.getValue()}),e.sendPost()})}},{key:"sendPost",value:function(){(0,this.props.subSend)(this.state)}},{key:"clearContent",value:function(){S.setValue(""),this.setState({postContent:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"editor-post-content"},o.a.createElement(w,{className:"editor",autosize:!0}))}}])&&h(n.prototype,a),r&&h(n,r),t}();t.a=Object(s.connect)(function(e){return{query:e.postInfo.query}})(I)},1651:function(e,t,n){var a=n(1652);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(186)(a,r);a.locals&&(e.exports=a.locals)},1652:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])},1686:function(e,t,n){var a=n(1687);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(186)(a,r);a.locals&&(e.exports=a.locals)},1687:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])},1688:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"g",function(){return f}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return h});n(361);var a=n(20),r=n.n(a),i=n(48),o=n(2);function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){return{type:o.xb,data:e}},u=function(e,t,n){return function(a){var o="init"===e?"/college/lesson/list":"/post/search";Object(i.i)("get",o,t?s({},t):{},function(e){if(1===e.code){var t=e.obj;a(d({list:t.inforList})),a(h({totalCount:t.recordCount,pageSize:t.pageSize,currPage:t.currentPage})),n&&n(t)}else e.msg&&r.a.error(e.msg)})}},p=function(e,t){return function(n){Object(i.i)("post","/college/lesson/getById",s({},e),function(e){if(1===e.code){var a=e.obj;n(d({info:a})),t&&t(a)}else r.a.error(e.msg)})}},d=function(e){return{type:o.B.ADD_DATA,data:e}},m=function(e,t){return{type:o.B.EDIT_LIST_ITEM,data:e,index:t}},f=function(e){return{type:o.B.SET_SEARCH_QUERY,data:e}},g=function(e){return{type:o.B.SET_FILTER_DATA,data:e}},h=function(e){return{type:o.B.SET_PAGE_DATA,data:e}}}}]);