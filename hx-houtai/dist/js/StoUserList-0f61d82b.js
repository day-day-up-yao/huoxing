(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1599:function(e,t,n){"use strict";n.r(t);n(675);var a=n(676),r=n.n(a),o=(n(1385),n(1386)),i=n.n(o),l=(n(1381),n(1382)),c=n.n(l),s=(n(1383),n(1384)),u=n.n(s),p=(n(247),n(183)),f=n.n(p),m=(n(1390),n(1391)),d=n.n(m),b=(n(361),n(20)),g=n.n(b),h=(n(1376),n(1377)),y=n.n(h),v=n(0),O=n.n(v),E=n(246),w=(n(1388),n(1389)),S=n.n(w),k=(n(678),n(363)),j=n.n(k),I=(n(184),n(1378)),C=n.n(I),P=(n(1387),n(50)),N=n.n(P),T=(n(1379),n(1380)),_=n.n(T),U=n(48);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=_.a.Item,q=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=M(t).call(this,e),n=!r||"object"!==x(r)&&"function"!=typeof r?D(a):r,z(D(n),"handleCancel",function(){return n.setState({previewVisible:!1})}),z(D(n),"handlePreview",function(e){n.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),z(D(n),"handleChange",function(e){var t=e.file,a=e.fileList;n.setState({fileList:a}),"removed"===t.status&&n.setState({coverImgUrl:""}),t.response&&(1===t.response.code&&"done"===t.status&&(n.setState({coverImgUrl:t.response.obj}),n.props.getImgData(t.response.obj)),"error"===t.status&&(g.a.error("网络错误，上传失败！"),n.setState({coverImgUrl:"",fileList:[]})))}),n.state={previewVisible:!1,previewImage:"",fileList:[],coverImgUrl:"",description:"",loading:!0,userType:"1"},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,v["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.onCancel,a=e.onCreate,r=e.form,o=e.loading,i=r.getFieldDecorator,l={labelCol:{span:4},wrapperCol:{span:18,offset:1}},c=O.a.createElement("div",null,O.a.createElement(N.a,{type:"plus"}),O.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return O.a.createElement(y.a,{visible:t,title:"新增嘉宾",okText:"确定",onCancel:n,onOk:a,confirmLoading:o},O.a.createElement(_.a,null,O.a.createElement(R,L({},l,{label:"嘉宾名"}),i("guestName",{initialValue:"",rules:[{required:!0,message:"请输入嘉宾名！"}]})(O.a.createElement(C.a,null))),O.a.createElement(R,L({},l,{className:"collection-create-form_last-form-item",label:"嘉宾类型"}),i("type",{initialValue:"0"})(O.a.createElement(j.a.Group,null,O.a.createElement(j.a,{value:"0"},"个人"),O.a.createElement(j.a,{value:"1"},"机构")))),O.a.createElement(R,L({},l,{label:"嘉宾头像",className:"upload-div"}),O.a.createElement("div",{className:"dropbox"},i("imgUrl",{initialValue:"",rules:[{required:!0,message:"请上传嘉宾头像！"}]})(O.a.createElement(S.a,{headers:{"Sign-Param":Object(U.A)()},action:"".concat(U.a,"/pic/upload"),name:"uploadFile",listType:"picture-card",fileList:this.state.fileList,onPreview:this.handlePreview,onChange:this.handleChange},this.state.fileList.length>=1?null:c)),O.a.createElement(y.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},O.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),O.a.createElement("span",{className:"cover-img-tip",style:{display:"inline-block",marginTop:"70px",position:"absolute"}},"用于直播页面头像展示, 长宽比例: ",O.a.createElement("font",{style:{color:"red"}},"1 : 1")))),O.a.createElement(R,L({},l,{label:"嘉宾信息"}),i("introduction",{initialValue:""})(O.a.createElement(C.a,{rows:4,type:"textarea"})))))}}])&&V(n.prototype,a),r&&V(n,r),t}(),G=_.a.create()(q),A=(n(1842),n(10)),J=n(1711);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Y(e,t,n[t])})}return e}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=y.a.confirm,$=[],ee=[{label:"顾问",value:"1"},{label:"主持人",value:"2"},{label:"全部",value:"0"}],te=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=K(t).call(this),e=!a||"object"!==W(a)&&"function"!=typeof a?Q(n):a,Y(Q(e),"getOrderNum",function(t){e.setState({order:t})}),Y(Q(e),"showModal",function(){e.setState({visible:!0})}),Y(Q(e),"handleCancel",function(){e.setState({visible:!1,data:{}})}),Y(Q(e),"getImgUrl",function(t){e.setState({imgUrl:t})}),Y(Q(e),"handleCreate",function(){var t=e.form;t.setFieldsValue({imgUrl:e.state.imgUrl}),t.validateFields(function(n,a){n||(e.setState({confirmLoading:!0}),Object(U.i)("POST","/guestInfo/addGuest",a,function(n){e.setState({confirmLoading:!1}),1===n.code?(g.a.success("添加成功！"),t.resetFields(),e.setState({visible:!1}),e.doSearch("init")):g.a.error(n.msg)}))})}),Y(Q(e),"saveFormRef",function(t){e.form=t}),Y(Q(e),"handleChange",function(t){(0,e.props.dispatch)(Object(J.c)({type:t})),e.setState({type:t}),e.doSearch("init",{page:1,type:t})}),Y(Q(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),Y(Q(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),e.state={visible:!1,loading:!0,type:null,data:{},imgUrl:"",previewVisible:!1,previewImage:"",order:1,confirmLoading:!1},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,v["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){var e=this;this.doSearch("init"),$=[{title:"姓名",key:"guestName",render:function(t,n){return n&&O.a.createElement("div",{className:"sto-info clearfix"},O.a.createElement("div",null,O.a.createElement("h4",{title:n.guestName,dangerouslySetInnerHTML:e.createMarkup(Object(U.q)(n.guestName,30))}),0===parseInt(n.topOrder)?"":O.a.createElement("div",{style:{display:"inline-block"}},O.a.createElement("span",{className:"sto-status has-publish mr10"},"置顶（",n.topOrder,"）"))))}},{title:"类型",dataIndex:"type",key:"type",render:function(e){return 1===parseInt(e)?O.a.createElement("span",{className:"type-org tag"},"机构"):0===parseInt(e)?O.a.createElement("span",{className:"type-person tag"},"个人"):O.a.createElement("span",{className:"type-other tag"},"其他")}},{title:"头像 ",dataIndex:"imgUrl",key:"imgUrl",render:function(t){return O.a.createElement("div",{className:"shrinkPic",key:t,style:{background:"url(".concat(t,") no-repeat center / cover")},src:t,onClick:e.handlePreview})}},{title:"创建时间",dataIndex:"createTime",key:"createTime",render:function(e){return e&&Object(U.w)(e)}},{title:"简介",key:"introduction",render:function(e){return e.introduction?O.a.createElement("h4",{title:e.introduction},e.introduction):"无"}},{title:"置顶相关",key:"topOption",render:function(t){return O.a.createElement("div",null,0===t.topOrder?O.a.createElement("p",null,O.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#007bff"}},"置顶")):O.a.createElement("p",null,O.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e._isTop(t)},style:{background:"#007bff"}},"取消置顶")),0===t.topOrder?"":O.a.createElement("p",{style:{marginTop:10}},O.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#dd274e"}},"修改置顶权重")))}},{title:"操作",key:"action",render:function(t){return O.a.createElement("div",null,O.a.createElement("p",null,O.a.createElement(A.Link,{className:"mr10 opt-btn",to:{pathname:"/sto-userEdit",query:{id:t.id}},style:{background:"#108ee9"}},"编辑")),O.a.createElement("p",{style:{marginTop:10}},O.a.createElement("a",{onClick:function(){return e.delIco(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(J.e)({type:"init"})),e(Object(J.d)({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"recommendTopic",value:function(e){var t=this;Z({title:"提示",content:O.a.createElement("div",{className:"modal-input"},O.a.createElement("span",{style:{marginRight:10}},"请输入置顶权重：(权重越大排序越靠前)"),O.a.createElement(d.a,{style:{margin:"10px 0"},min:1,max:20,defaultValue:e.topOrder||1,autoFocus:!0,type:"number",onChange:t.getOrderNum})),onOk:function(){var n=t.state.order;if(""===n.toString().trim())return g.a.error("推荐位的权重值不能为空！"),!1;var a={id:e.id,topOrder:n};t.setState({loading:!0}),Object(U.i)("POST","/guestInfo/updateTopOrder",H({},a),function(e){1===e.code?(g.a.success("修改成功"),t.doSearch("init")):g.a.error(e.msg)})}})}},{key:"_isTop",value:function(e){var t=this;Z({title:"提示",content:"确认要取消置顶吗 ?",onOk:function(){var n={id:e.id};Object(U.i)("post","/guestInfo/deleteTopGuest",n,function(e){1===e.code?(g.a.success("操作成功"),t.doSearch("init")):g.a.error(e.msg)})}})}},{key:"channelName",value:function(e){var t="";return ee.map(function(n,a){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"doSearch",value:function(e,t){var n=this;this.setState({loading:!0});var a=this.props,r=a.dispatch,o={pageSize:20,currentPage:a.pageData.page};o=H({},o,t),r(Object(J.b)(e,o,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{page:1}),e(Object(J.d)({page:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.filter;n(Object(J.d)({page:e})),this.doSearch("init",H({page:e},a))}},{key:"delIco",value:function(e){var t=this.props.dispatch,n=this;Z({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id};Object(U.i)("POST","/guestInfo/deleteGuest",H({},a),function(e){1===e.code?(g.a.success("删除成功"),n.doSearch("init"),t(Object(J.e)({type:"init"}))):g.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData;return O.a.createElement("div",{className:"sto-index"},O.a.createElement(c.a,null,O.a.createElement(u.a,null,O.a.createElement(f.a,{type:"primary",style:{margin:"0 15px"},onClick:this.showModal},"新增顾问"))),O.a.createElement("div",{className:"mt30"},O.a.createElement(r.a,{spinning:this.state.loading,size:"large"},O.a.createElement(i.a,{dataSource:n.map(function(e,t){return H({},e,{key:t})}),columns:$,bordered:!0,pagination:{current:a.page,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))),O.a.createElement(y.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},O.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),this.state.visible&&O.a.createElement(G,{loading:this.state.confirmLoading,getImgData:function(t){e.getImgUrl(t)},ref:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate,data:this.state.data}))}}])&&B(n.prototype,a),o&&B(n,o),t}();t.default=Object(E.connect)(function(e){return{stoUserInfo:e.stoUserInfo,list:e.stoUserInfo.list,search:e.stoUserInfo.search,filter:e.stoUserInfo.filter,pageData:e.stoUserInfo.pageData}})(te)},1842:function(e,t,n){var a=n(1843);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(186)(a,r);a.locals&&(e.exports=a.locals)},1843:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])}}]);