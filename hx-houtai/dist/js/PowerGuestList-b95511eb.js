(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1540:function(e,t,n){"use strict";n.r(t);n(675);var a=n(676),r=n.n(a),o=(n(1385),n(1386)),i=n.n(o),l=(n(1381),n(1382)),c=n.n(l),s=(n(1383),n(1384)),u=n.n(s),p=(n(247),n(183)),f=n.n(p),m=(n(1390),n(1391)),d=n.n(m),b=(n(361),n(20)),y=n.n(b),g=(n(1376),n(1377)),h=n.n(g),v=n(0),w=n.n(v),E=n(246),O=(n(1388),n(1389)),S=n.n(O),k=(n(678),n(363)),j=n.n(k),C=(n(184),n(1378)),P=n.n(C),I=(n(1387),n(50)),T=n.n(I),_=(n(1379),n(1380)),N=n.n(_),G=n(48);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=N.a.Item,q=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=D(t).call(this,e),n=!r||"object"!==x(r)&&"function"!=typeof r?V(a):r,F(V(n),"handleCancel",function(){return n.setState({previewVisible:!1})}),F(V(n),"handlePreview",function(e){n.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),F(V(n),"handleChange",function(e){var t=e.file,a=e.fileList;n.setState({fileList:a}),"removed"===t.status&&n.setState({imgUrl:""}),t.response&&(1===t.response.code&&"done"===t.status&&(n.setState({imgUrl:t.response.obj}),n.props.getImgData(t.response.obj)),"error"===t.status&&(y.a.error("网络错误，上传失败！"),n.setState({imgUrl:"",fileList:[]})))}),n.state={previewVisible:!1,previewImage:"",fileList:[],imgUrl:"",description:"",brief:"",loading:!0,userType:"1"},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,v["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.onCancel,a=e.onCreate,r=e.form,o=e.loading,i=r.getFieldDecorator,l={labelCol:{span:4},wrapperCol:{span:18,offset:1}},c=w.a.createElement("div",null,w.a.createElement(T.a,{type:"plus"}),w.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return w.a.createElement(h.a,{visible:t,title:"新增嘉宾",okText:"确定",onCancel:n,onOk:a,confirmLoading:o},w.a.createElement(N.a,null,w.a.createElement(M,U({},l,{label:"姓名"}),i("guestName",{initialValue:"",rules:[{required:!0,message:"请输入嘉宾姓名！"}]})(w.a.createElement(P.a,null))),w.a.createElement(M,U({},l,{className:"collection-create-form_last-form-item",label:"嘉宾类型"}),i("type",{initialValue:"1"})(w.a.createElement(j.a.Group,null,w.a.createElement(j.a,{value:"1"},"个人"),w.a.createElement(j.a,{value:"2"},"机构")))),w.a.createElement(M,U({},l,{label:"头像",className:"upload-div"}),w.a.createElement("div",{className:"dropbox"},i("imgUrl",{initialValue:"",rules:[{required:!0,message:"请上传嘉宾头像！"}]})(w.a.createElement(S.a,{headers:{"Sign-Param":Object(G.A)()},action:"".concat(G.a,"/picture/upload"),name:"uploadFile",data:{type:"news"},listType:"picture-card",fileList:this.state.fileList,onPreview:this.handlePreview,onChange:this.handleChange},this.state.fileList.length>=1?null:c)),w.a.createElement(h.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},w.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),w.a.createElement("span",{className:"cover-img-tip",style:{display:"inline-block",marginTop:"70px",position:"absolute"}},"用于直播页面头像展示, 长宽比例: ",w.a.createElement("font",{style:{color:"red"}},"1 : 1")))),w.a.createElement(M,U({},l,{label:"嘉宾介绍"}),i("introduction",{initialValue:"",rules:[{required:!0,message:'请输入嘉宾介绍"！'}]})(w.a.createElement(P.a,{rows:4,type:"textarea"})))))}}])&&L(n.prototype,a),r&&L(n,r),t}(),R=N.a.create()(q),z=(n(1812),n(10)),H=n(2);function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e,t,n){return function(a){var r="init"===e?"/commonGuest/listGuest":"/post/search";Object(G.i)("post",r,t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){J(e,t,n[t])})}return e}({category:1},t):{},function(e){if(1===e.code){var t=e.obj;a(Q({list:t.inforList})),a(K({totalCount:t.recordCount,pageSize:t.pageSize,page:t.currentPage})),n&&n(t)}else y.a.error(e.msg)})}},Q=function(e){return{type:H.qb.ADD_DATA,data:e}},Y=function(e){return{type:H.qb.SET_SEARCH_QUERY,data:e}},B=function(e){return{type:H.qb.SET_FILTER_DATA,data:e}},K=function(e){return{type:H.qb.SET_PAGE_DATA,data:e}};function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ae(e,t,n[t])})}return e}function $(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=h.a.confirm,oe=[],ie=[{label:"嘉宾",value:"1"},{label:"主持人",value:"2"},{label:"全部",value:"0"}],le=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=ee(t).call(this),e=!a||"object"!==X(a)&&"function"!=typeof a?te(n):a,ae(te(e),"getOrderNum",function(t){e.setState({order:t})}),ae(te(e),"showModal",function(){e.setState({visible:!0})}),ae(te(e),"handleCancel",function(){e.setState({visible:!1,data:{}})}),ae(te(e),"getImgUrl",function(t){e.setState({imgUrl:t})}),ae(te(e),"handleCreate",function(){var t=e.form;t.setFieldsValue({imgUrl:e.state.imgUrl}),t.validateFields(function(n,a){n||(e.setState({confirmLoading:!0}),a.category=1,Object(G.i)("POST","/commonGuest/addGuest",a,function(n){e.setState({confirmLoading:!1}),1===n.code?(y.a.success("添加成功！"),t.resetFields(),e.setState({visible:!1}),e.doSearch("init")):y.a.error(n.msg)}))})}),ae(te(e),"saveFormRef",function(t){e.form=t}),ae(te(e),"handleChange",function(t){(0,e.props.dispatch)(B({type:t})),e.setState({type:t}),e.doSearch("init",{page:1,type:t})}),ae(te(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),ae(te(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),e.state={visible:!1,loading:!0,type:null,data:{},imgUrl:"",previewVisible:!1,previewImage:"",order:1,confirmLoading:!1},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,v["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){var e=this,t=this.props.dispatch;this.doSearch("init"),oe=[{title:"嘉宾名",key:"guestName",render:function(t,n){return n&&w.a.createElement("div",{className:"powerGuest-info clearfix"},w.a.createElement("div",null,w.a.createElement("h4",{title:n.guestName,dangerouslySetInnerHTML:e.createMarkup(Object(G.q)(n.guestName,30))}),0===parseInt(n.topOrder)?"":w.a.createElement("div",{style:{display:"inline-block"}},w.a.createElement("span",{className:"powerGuest-status has-publish mr10"},"置顶(",n.topOrder,")"))))}},{title:"类型",dataIndex:"type",key:"type",render:function(e){return 1===parseInt(e)?w.a.createElement("span",{className:"type-org tag"},"个人"):2===parseInt(e)?w.a.createElement("span",{className:"type-person tag"},"机构"):w.a.createElement("span",{className:"type-other tag"},"其他")}},{title:"头像 ",dataIndex:"imgUrl",key:"imgUrl",render:function(t){return w.a.createElement("div",{className:"shrinkPic",key:t,style:{background:"url(".concat(t,") no-repeat center / cover")},src:t,onClick:e.handlePreview})}},{title:"创建时间",dataIndex:"createTime",key:"createTime",width:130,render:function(e){return e&&Object(G.w)(e)}},{title:"嘉宾简介",key:"introduction",render:function(e){return e.introduction?w.a.createElement("h4",{title:e.introduction},e.introduction):"无"}},{title:"置顶相关",key:"topOption",render:function(t){return w.a.createElement("div",null,0===t.topOrder?w.a.createElement("p",null,w.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#007bff"}},"置顶")):w.a.createElement("p",null,w.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e._isTop(t)},style:{background:"#007bff"}},"取消置顶")),0===t.topOrder?"":w.a.createElement("p",{style:{marginTop:10}},w.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#dd274e"}},"修改置顶权重")))}},{title:"操作",key:"action",render:function(n){return w.a.createElement("div",null,w.a.createElement("p",null,w.a.createElement("a",{onClick:function(){var e;t((e=n,{type:H.xb,data:e})),z.hashHistory.push("/activity-powerGuest-edit")},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#108ee9"}},"编辑")),w.a.createElement("p",{style:{marginTop:10}},w.a.createElement("a",{onClick:function(){return e.delIco(n)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Y({type:"init"})),e(K({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"recommendTopic",value:function(e){var t=this;re({title:"提示",content:w.a.createElement("div",{className:"modal-input"},w.a.createElement("span",{style:{marginRight:10}},"请输入置顶权重：(权重越大排序越靠前)"),w.a.createElement(d.a,{style:{margin:"10px 0"},min:1,defaultValue:e.topOrder||1,autoFocus:!0,type:"number",onChange:t.getOrderNum})),onOk:function(){var n=t.state.order;if(""===n.toString().trim())return y.a.error("推荐位的权重值不能为空！"),!1;var a={id:e.id,topOrder:n};t.setState({loading:!0}),Object(G.i)("POST","/commonGuest/updateTopOrder",Z({},a),function(e){1===e.code?(y.a.success("修改成功"),t.doSearch("init")):y.a.error(e.msg)})}})}},{key:"_isTop",value:function(e){var t=this;re({title:"提示",content:"确认要取消置顶吗 ?",onOk:function(){var n={id:e.id};Object(G.i)("post","/commonGuest/deleteTopGuest",n,function(e){1===e.code?(y.a.success("操作成功"),t.doSearch("init")):y.a.error(e.msg)})}})}},{key:"channelName",value:function(e){var t="";return ie.map(function(n,a){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"doSearch",value:function(e,t){var n=this;this.setState({loading:!0});var a=this.props,r=a.dispatch,o={pageSize:20,currentPage:a.pageData.page};o=Z({},o,t),r(W(e,o,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(K({page:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0}),(0,this.props.dispatch)(K({page:e})),this.doSearch("init",{currentPage:e})}},{key:"delIco",value:function(e){var t=this.props.dispatch,n=this;re({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id};Object(G.i)("POST","/commonGuest/deleteGuest",Z({},a),function(e){1===e.code?(y.a.success("删除成功"),n.doSearch("init"),t(Y({type:"init"}))):y.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData;return w.a.createElement("div",{className:"powerGuest-index"},w.a.createElement(c.a,null,w.a.createElement(u.a,null,w.a.createElement(f.a,{type:"primary",onClick:this.showModal},"新增嘉宾"))),w.a.createElement("div",{className:"mt30"},w.a.createElement(r.a,{spinning:this.state.loading,size:"large"},w.a.createElement(i.a,{dataSource:n.map(function(e,t){return Z({},e,{key:t})}),columns:oe,bordered:!0,pagination:{current:a.page,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))),w.a.createElement(h.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},w.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),this.state.visible&&w.a.createElement(R,{loading:this.state.confirmLoading,getImgData:function(t){e.getImgUrl(t)},ref:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate,data:this.state.data}))}}])&&$(n.prototype,a),o&&$(n,o),t}();t.default=Object(E.connect)(function(e){return{powerGuestInfo:e.powerGuestInfo,list:e.powerGuestInfo.list,search:e.powerGuestInfo.search,filter:e.powerGuestInfo.filter,pageData:e.powerGuestInfo.pageData}})(le)},1812:function(e,t,n){var a=n(1813);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(186)(a,r);a.locals&&(e.exports=a.locals)},1813:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])}}]);