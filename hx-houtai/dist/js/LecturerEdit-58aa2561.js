(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1507:function(e,t,r){"use strict";r.r(t);r(675);var a=r(676),n=r.n(a),i=(r(247),r(183)),o=r.n(i),l=(r(1376),r(1377)),s=r.n(l),c=(r(1388),r(1389)),u=r.n(c),p=(r(678),r(363)),f=r.n(p),m=(r(184),r(1378)),d=r.n(m),h=(r(1387),r(50)),y=r.n(h),b=(r(361),r(20)),v=r.n(b),g=(r(1379),r(1380)),w=r.n(g),E=r(0),O=r.n(E),S=r(246),I=r(10),j=r(1685),C=r(48);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function T(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=w.a.Item,_=function(e){function t(e){var r,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=U(t).call(this,e),r=!n||"object"!==N(n)&&"function"!=typeof n?x(a):n,V(x(r),"handleCancel",function(){return r.setState({previewVisible:!1})}),V(x(r),"handlePreview",function(e){r.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),V(x(r),"handleChange",function(e){var t=e.file,a=e.fileList;r.setState({fileList:a}),"removed"===t.status&&r.setState({coverImgUrl:""}),t.response&&(1===t.response.code&&"done"===t.status&&r.setState({coverImgUrl:t.response.obj}),"error"===t.status&&(v.a.error("网络错误，上传失败！"),r.setState({coverImgUrl:"",fileList:[]})))}),V(x(r),"handleSubmit",function(e){e.preventDefault(),r.props.form.setFieldsValue({headUrl:r.state.coverImgUrl}),r.props.form.validateFieldsAndScroll(function(e,t){e||(r.setState({loading:!0}),t.userId=r.props.userInfo.userId,Object(C.i)("post","/college/lecturer/update",t,function(e){1===e.code?(v.a.success("修改成功"),I.hashHistory.push("/college-lecList")):v.a.error(e.msg)}))})}),r.state={previewVisible:!1,previewImage:"",fileList:[],coverImgUrl:"",description:"",loading:!0,userType:"1"},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,E["Component"]),r=t,(a=[{key:"componentWillMount",value:function(){var e=this,t=this.props,r=t.dispatch,a=t.location;r(Object(j.a)({id:a.query.id},function(t){var r=t.headUrl;e.setState({updateOrNot:!0,fileList:[{uid:0,name:"xxx.png",status:"done",url:r}],description:t.description,coverImgUrl:r,loading:!1,userType:t.userType,userName:t.userName})}))}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.userInfo,a=t.getFieldDecorator,i={labelCol:{span:1},wrapperCol:{span:15,offset:1}},l=O.a.createElement("div",null,O.a.createElement(y.a,{type:"plus"}),O.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return O.a.createElement(w.a,{onSubmit:this.handleSubmit},O.a.createElement(n.a,{spinning:this.state.loading,size:"large"},O.a.createElement(k,P({},i,{label:"用户名"}),a("userName",{initialValue:r.userName?r.userName:"",rules:[{required:!0,message:"请输入直播用户名！"}]})(O.a.createElement(d.a,null))),O.a.createElement(k,P({},i,{className:"",label:"用户类型"}),a("userType",{initialValue:r.userType?"".concat(r.userType):"1"})(O.a.createElement(f.a.Group,null,O.a.createElement(f.a,{value:"1"},"嘉宾"),O.a.createElement(f.a,{value:"2"},"主持人")))),O.a.createElement(k,P({},i,{label:"用户头像",className:"upload-div"}),O.a.createElement("div",{className:"dropbox"},a("headUrl",{initialValue:r&&r.headUrl?this.state.fileList:"",rules:[{required:!0,message:"请上传用户头像！"}]})(O.a.createElement(u.a,{headers:{"Sign-Param":Object(C.A)()},action:"".concat(C.a,"/pic/upload"),name:"uploadFile",listType:"picture-card",fileList:this.state.fileList,onPreview:this.handlePreview,onChange:this.handleChange},this.state.fileList.length>=1?null:l)),O.a.createElement(s.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},O.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),O.a.createElement("span",{className:"cover-img-tip",style:{display:"inline-block",marginTop:"70px"}},"用于直播页面头像展示, 长宽比例: ",O.a.createElement("font",{style:{color:"red"}},"1 : 1")))),O.a.createElement(k,P({},i,{label:"用户描述"}),a("description",{initialValue:r&&r.description?r.description:""})(O.a.createElement(d.a,{rows:4,type:"textarea"}))),O.a.createElement(k,{wrapperCol:{span:12,offset:2}},O.a.createElement(o.a,{type:"primary","data-status":"1",htmlType:"submit",style:{marginRight:"10px"}},"保存"),O.a.createElement(o.a,{type:"primary",className:"cancel",onClick:function(){I.hashHistory.goBack()}},"取消"))))}}])&&T(r.prototype,a),i&&T(r,i),t}();t.default=Object(S.connect)(function(e){return{userInfo:e.lecturerInfo.info}})(w.a.create()(_))}}]);