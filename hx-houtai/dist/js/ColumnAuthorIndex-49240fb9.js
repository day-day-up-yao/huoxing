(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1536:function(e,t,n){"use strict";n.r(t);n(675);var r=n(676),a=n.n(r),o=(n(1385),n(1386)),i=n.n(o),c=(n(1381),n(1382)),u=n.n(c),l=(n(1383),n(1384)),s=n.n(l),p=(n(247),n(183)),f=n.n(p),m=(n(184),n(1378)),h=n.n(m),d=(n(1390),n(1391)),y=n.n(d),b=(n(361),n(20)),v=n.n(b),g=(n(677),n(362)),O=n.n(g),S=(n(1376),n(1377)),k=n.n(S),E=n(0),w=n.n(E),P=n(246),j=(n(1379),n(1380)),C=n.n(j),_=n(48);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F,z,V=C.a.Item,M=O.a.Option,L=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=N(t).call(this,e),n=!a||"object"!==T(a)&&"function"!=typeof a?x(r):a,R(x(n),"getAuthorList",function(e,t){F&&(clearTimeout(F),F=null),z=e;F=setTimeout(function(){n.setState({searching:!0}),Object(_.i)("post","/author/showauthorlist",{value:e,currentPage:1,pageSize:500},function(r){if(n.setState({searching:!1}),z===e){var a=r.obj.inforList,o=[];a.forEach(function(e){o.push({value:e.passportId,text:e.nickName})}),t(o)}})},300)}),R(x(n),"handleChange",function(e){n.setState({value:e,data:[]}),n.getAuthorList(e,function(e){return n.setState({data:e})})}),n.state={data:[],value:"",description:"",loading:!0,userType:"1",searching:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,E["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.onCancel,r=e.onCreate,o=e.form.getFieldDecorator,i=this.state.data.map(function(e){return w.a.createElement(M,{key:e.value},e.text)});return w.a.createElement(k.a,{visible:t,title:"新增专栏作者",okText:"确定",onCancel:n,onOk:r},w.a.createElement(C.a,null,w.a.createElement("p",{style:{color:"black",margin:"0 0 10px 10px"}},"输入作者姓名或手机号进行搜索："),w.a.createElement(V,I({},{labelCol:{span:4},wrapperCol:{span:18,offset:1}},{label:"专栏作者"}),o("passportId",{initialValue:this.state.value,rules:[{required:!0,message:"请选择专栏作者！"}]})(w.a.createElement(O.a,{showSearch:!0,style:{width:"100%"},placeholder:"请输入作者姓名或手机号",defaultActiveFirstOption:!1,notFoundContent:this.state.searching?w.a.createElement(a.a,{size:"small"}):null,showArrow:!0,filterOption:!1,onSearch:this.handleChange},i)))))}}])&&A(n.prototype,r),o&&A(n,o),t}(),U=C.a.create()(L),q=(n(1697),n(2));function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){H(e,t,n[t])})}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){return{type:q.w.ADD_DATA,data:e}},W=function(e){return{type:q.w.SET_SEARCH_QUERY,data:e}},Q=function(e){return{type:q.w.SET_FILTER_DATA,data:e}},Y=function(e){return{type:q.w.SET_PAGE_DATA,data:e}};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){te(e,t,n[t])})}return e}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=k.a.confirm,re=O.a.Option,ae=[],oe=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=Z(t).call(this,e),n=!a||"object"!==B(a)&&"function"!=typeof a?$(r):a,te($(n),"handleChange",function(e){(0,n.props.dispatch)(Q({type:e})),n.setState({type:e}),n.doSearch("init",{currentPage:1,type:e})}),te($(n),"getOrderNum",function(e){n.setState({order:e})}),te($(n),"handleCancel",function(){return n.setState({previewVisible:!1})}),te($(n),"handlePreview",function(e){n.setState({previewImage:e.target.getAttribute("src"),previewVisible:!0})}),te($(n),"showModal",function(){n.setState({visible:!0})}),te($(n),"handleFormCancel",function(){n.setState({visible:!1})}),te($(n),"handleCreate",function(){var e=n.formRef.props.form;e.validateFields(function(t,r){t||(r.recommend=0,Object(_.i)("POST","/author/recommendauthor",r,function(e){1===e.code?(v.a.success("添加成功！"),n.doSearch("init")):v.a.error(e.msg)}),e.resetFields(),n.setState({visible:!1}))})}),te($(n),"saveFormRef",function(e){n.formRef=e}),n.state={visible:!1,loading:!0,previewVisible:!1,previewImage:"",status:null,order:1,recommendVisible:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,E["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){var e=this,t=this.props.filter;this.doSearch("init",{type:t.type}),ae=[{title:"作者昵称",key:"nickName",render:function(t,n){return n&&w.a.createElement("div",{className:"columnAuthor-info clearfix"},w.a.createElement("div",null,w.a.createElement("h4",{title:n.nickName,dangerouslySetInnerHTML:e.createMarkup(Object(_.q)(n.nickName,50))}),0===parseInt(n.recommend)?"":w.a.createElement("div",{style:{display:"inline-block"}},w.a.createElement("span",{className:"columnAuthor-status has-publish mr10"},"置顶（",n.recommend,"）"))))}},{title:"手机号",key:"phoneNum",render:function(e){return e&&e.phoneNum?w.a.createElement("span",{className:"columnAuthor-status pre-publish"},e.phoneNum):w.a.createElement("span",null,"暂无")}},{title:"作者头像",dataIndex:"iconUrl",key:"iconUrl",render:function(t){return w.a.createElement("div",{className:"shrinkPic",key:t,style:{background:"url(".concat(t||"http://static.huoxing24.com/images/2018/03/31/1522470188490129.png",") no-repeat center / cover")},src:t||"http://static.huoxing24.com/images/2018/03/31/1522470188490129.png",onClick:e.handlePreview})}},{title:"作者 ID",dataIndex:"passportId",key:"passportId"},{title:"置顶相关",key:"topOption",render:function(t){return w.a.createElement("div",null,0===t.recommend?w.a.createElement("p",null,w.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#349d58"}},"置顶")):w.a.createElement("p",null,w.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e._isTop(t)},style:{background:"#007bff"}},"取消置顶")),0===t.recommend?"":w.a.createElement("p",{style:{marginTop:10}},w.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#dd274e"}},"修改置顶权重")))}},{title:"操作",key:"option",render:function(t){return w.a.createElement("a",{onClick:function(){return e.delSpecialTopic(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"取消推荐")}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(W({type:"init",nickName:""})),e(Y({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"channelName",value:function(e){var t="";return _.h.map(function(n,r){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"doSearch",value:function(e,t){var n=this,r=this.props,a=r.dispatch,o=r.pageData,i=r.filter,c=r.search;this.setState({loading:!0});var u={type:i.type,search:c.search,pageSize:20,currentPage:o.currentPage};a(function(e,t,n){return function(r){var a="init"===e?"/author/recommendlist":"/post/search";Object(_.i)("get",a,t?G({},t):{},function(e){if(1===e.code){var t=e.obj;r(J({list:t.inforList})),r(Y({totalCount:t.recordCount,pageSize:t.pageSize,currentPage:t.currentPage})),n&&n(t)}else v.a.error(e.msg)})}}(e,u=K({},u,t),function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(Y({currentPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,r=t.search,a=t.filter;n(Y({currentPage:e})),this.doSearch(r.type,K({currentPage:e},a))}},{key:"delSpecialTopic",value:function(e){var t=this;ne({title:"提示",content:"确认要取消专栏作者的推荐吗 ?",onOk:function(){var n={passportId:e.passportId};Object(_.i)("POST","/author/cancelrecommend",K({},n),function(e){1===e.code?(v.a.success("操作成功"),t.doSearch("init")):v.a.error(e.msg)})}})}},{key:"_isTop",value:function(e){var t=this;ne({title:"提示",content:"确认要取消置顶吗 ?",onOk:function(){var n={passportId:e.passportId,recommend:0};Object(_.i)("post","/author/recommendauthor",n,function(e){1===e.code?(v.a.success("操作成功"),t.doSearch("init")):v.a.error(e.msg)})}})}},{key:"recommendTopic",value:function(e){var t;(0,this.props.dispatch)(function(e){Object(_.i)("get","/author/recommendnum",{},function(n){if(1===n.code){var r=n.obj;e({type:q.w.GET_TOP_NUM,actionData:r}),t&&t(r)}else v.a.error(n.msg)})});var n=this;ne({title:"提示",content:w.a.createElement("div",{className:"modal-input"},w.a.createElement("span",{style:{marginRight:10}},"请输入置顶权重：(最小为1，最大为20，且不能重复)"),w.a.createElement(y.a,{style:{margin:"10px 0"},min:1,max:20,defaultValue:e.recommend||1,autoFocus:!0,type:"number",onChange:n.getOrderNum})),onOk:function(){var t=n.state.order;if(""===t.toString().trim())return v.a.error("推荐位的权重值不能为空！"),!1;var r={passportId:e.passportId,recommend:t};-1!==n.props.numArr.indexOf(t)?ne({title:"提示",content:w.a.createElement("div",null,w.a.createElement("h3",null,t," 号置顶位已经被占用！"),w.a.createElement("h3",null,"点击确定将直接 替换 原有专栏作者！")),onOk:function(){Object(_.i)("POST","/author/recommendauthor",K({},r),function(e){1===e.code?(v.a.success("替换成功"),n.doSearch("init")):v.a.error(e.msg)})}}):Object(_.i)("POST","/author/recommendauthor",K({},r),function(e){1===e.code?(v.a.success("操作成功"),n.doSearch("init")):v.a.error(e.msg)})}})}},{key:"backRecommend",value:function(e){var t=this;ne({title:"提示",content:"确认要撤回推荐吗 ?",onOk:function(){var n={id:e.id,status:1};Object(_.i)("POST","/topic/status",K({},n),function(e){1===e.code?(v.a.success("操作成功"),t.doSearch("init")):v.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this;ne({title:"提示",content:"确认要".concat(0===e.status?"开启直播":"结束直播","吗 ?"),onOk:function(){var n={id:e.id,status:0===e.status?1:0};Object(_.i)("POST","/news/status",K({},n),function(e){1===e.code?(v.a.success("操作成功！"),t.doSearch("init")):v.a.error(e.msg)})}})}},{key:"_forbidcomment",value:function(e){var t=this,n=this.props.dispatch,r={id:e.id,operate:parseInt(e.forbidComment)?"0":"1"};Object(_.i)("post","/post/forbidcomment",r,function(e){200===e.status?(t.doSearch("init"),n(W({type:"init"}))):v.a.error(e.msg)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,r=t.pageData,o=t.filter,c=t.search,l=t.dispatch;return w.a.createElement("div",{className:"columnAuthor-index"},w.a.createElement(u.a,null,w.a.createElement(s.a,null,w.a.createElement("span",null,"状态："),w.a.createElement(O.a,{defaultValue:"".concat(o.type),style:{width:120},onChange:this.handleChange},_.h.map(function(e){return w.a.createElement(re,{value:e.value,key:e.value},e.label)})),w.a.createElement(h.a,{value:c.search,style:{width:200,margin:"0 15px"},onChange:function(e){return l(W({search:e.target.value}))},placeholder:"请输入名称搜索",onPressEnter:function(){e._search()}}),w.a.createElement(f.a,{type:"primary",onClick:function(){e._search()}},"搜索"),w.a.createElement(f.a,{type:"primary",style:{margin:"0 15px"},onClick:this.showModal},"新增专栏作者"))),w.a.createElement("div",{className:"mt30"},w.a.createElement(a.a,{spinning:this.state.loading,size:"large"},w.a.createElement(i.a,{dataSource:n.map(function(e,t){return K({},e,{key:t})}),columns:ae,bordered:!0,pagination:{current:r.currentPage,total:r.totalCount,pageSize:r.pageSize,onChange:function(t){return e.changePage(t)}}}),w.a.createElement(k.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},w.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})))),w.a.createElement(U,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleFormCancel,onCreate:this.handleCreate}))}}])&&X(n.prototype,r),o&&X(n,o),t}();t.default=Object(P.connect)(function(e){return{columnAuthorInfo:e.columnAuthorInfo,list:e.columnAuthorInfo.list,search:e.columnAuthorInfo.search,filter:e.columnAuthorInfo.filter,pageData:e.columnAuthorInfo.pageData,numArr:e.columnAuthorInfo.numArr}})(oe)}}]);