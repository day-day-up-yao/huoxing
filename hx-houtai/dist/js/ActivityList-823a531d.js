(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1480:function(e,t,n){"use strict";n.r(t);n(675);var a=n(676),r=n.n(a),i=(n(1385),n(1386)),c=n.n(i),o=(n(1381),n(1382)),s=n.n(o),l=(n(1383),n(1384)),u=n.n(l),m=(n(247),n(183)),p=n.n(m),d=(n(1390),n(1391)),h=n.n(d),f=(n(361),n(20)),y=n.n(f),g=(n(677),n(362)),v=n.n(g),b=(n(1376),n(1377)),E=n.n(b),w=n(0),k=n.n(w),S=n(246),O=(n(1702),n(10)),j=n(1703),I=n(48);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){R(e,t,n[t])})}return e}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=E.a.confirm,H=v.a.Option,M=[{label:"未展示",value:"0"},{label:"展示中",value:"1"}],B=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=T(t).call(this,e),n=!r||"object"!==P(r)&&"function"!=typeof r?_(a):r,R(_(n),"handleChange",function(e){(0,n.props.dispatch)(Object(j.d)({type:e})),n.setState({loading:!0,type:e}),n.doSearch("init",{currentPage:1,type:e})}),R(_(n),"handleTypeChange",function(e){(0,n.props.dispatch)(Object(j.d)({status:e})),n.setState({loading:!0,status:e}),n.doSearch("init",{currentPage:1,status:e})}),R(_(n),"handleRecommendChange",function(e){(0,n.props.dispatch)(Object(j.d)({recommend:e})),n.setState({loading:!0,recommend:e}),n.doSearch("init",{currentPage:1,recommend:e})}),R(_(n),"getOrderNum",function(e){n.setState({order:e})}),R(_(n),"handleCancel",function(){return n.setState({previewVisible:!1})}),R(_(n),"handlePreview",function(e){n.setState({previewImage:e.target.getAttribute("src"),previewVisible:!0})}),n.state={loading:!0,previewVisible:!1,previewImage:"",status:null,recommend:"1",order:1,recommendVisible:!1},n.basic=[{title:"标题",key:"title",render:function(e,t){return t&&k.a.createElement("div",{className:"activity-info clearfix"},k.a.createElement("div",null,k.a.createElement("h4",{title:t.title,dangerouslySetInnerHTML:n.createMarkup(Object(I.q)(t.title||"无",50))}),1!==parseInt(t.status)?"":k.a.createElement("div",{style:{display:"inline-block"}},k.a.createElement("span",{className:"activity-status has-publish mr10"},"展示中"))))}},{title:"描述",key:"description",render:function(e,t){return t&&k.a.createElement("div",{className:"activity-info clearfix"},k.a.createElement("div",null,k.a.createElement("h4",{title:t.description,dangerouslySetInnerHTML:n.createMarkup(Object(I.q)(t.description||"无",50))})))}},{title:"位置",key:"recommend",render:function(e,t){var a=n.channelName(I.b,t.recommend);return 1===t.recommend?k.a.createElement("span",{className:"activity-status news"},a):2===t.recommend?k.a.createElement("span",{className:"activity-status authorInfo"},a):3===t.recommend?k.a.createElement("span",{className:"activity-status ad"},a):"暂无"}},{title:"状态",key:"status",width:80,render:function(e,t){return 0===t.status?k.a.createElement("span",{className:"activity-status pre-publish"},"已撤回"):1===t.status?k.a.createElement("span",{className:"activity-status has-publish"},"展示中"):k.a.createElement("span",null,"暂无")}}],n.option=[{title:"操作",key:"action",width:130,render:function(e){var t="";switch(e.status){case 0:t=k.a.createElement("p",null,k.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return n.backRecommend(e)},style:{background:"#00b45a"}},"展示"));break;case 1:t=k.a.createElement("div",null,k.a.createElement("p",{style:{marginTop:10}},k.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return n.backRecommend(e)},style:{background:"#e9892f"}},"撤回")));break;default:t=""}return k.a.createElement("div",null,k.a.createElement("p",{style:{marginBottom:10}},k.a.createElement(O.Link,{className:"mr10 opt-btn",to:{pathname:"/activity-add",query:{id:e.id}},style:{background:"#49a9ee"}},"修改")),t,k.a.createElement("p",{style:{marginTop:10}},k.a.createElement("a",{onClick:function(){return n.delActivity(e)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}],n.pic=[{title:"PC 端封面 ",dataIndex:"pcRecommendImg",key:"pcRecommendImg",render:function(e){return e?k.a.createElement("img",{onClick:n.handlePreview,style:{width:70,cursor:"pointer"},src:e||"https://hx24.huoxing24.com/image/news/2018/08/15/1534305399664279.png",alt:""}):"—"}},{title:"手机端封面 ",dataIndex:"mImg",key:"mImg",render:function(e){return e?k.a.createElement("img",{onClick:n.handlePreview,style:{width:70,cursor:"pointer"},src:e||"https://hx24.huoxing24.com/image/news/2018/08/15/1534305399664279.png",alt:""}):"—"}}],n.pcBig=[{title:"底部左侧大图",dataIndex:"pcBigImg",key:"pcBigImg",render:function(e){return e?k.a.createElement("img",{onClick:n.handlePreview,style:{width:70,cursor:"pointer"},src:e||"https://hx24.huoxing24.com/image/news/2018/08/15/1534305399664279.png",alt:""}):"—"}}],n.pcSmall=[{title:"底部右侧小图",dataIndex:"pcSmallImg",key:"pcSmallImg",render:function(e){return e?k.a.createElement("img",{onClick:n.handlePreview,style:{width:70,cursor:"pointer"},src:e||"https://hx24.huoxing24.com/image/news/2018/08/15/1534305399664279.png",alt:""}):"—"}}],n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,w["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){var e=this.props.filter;this.doSearch("init",{type:e.type})}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"channelName",value:function(e,t){var n="";return e.map(function(e,a){parseInt(e.value)===parseInt(t)&&(n=e.name)}),n}},{key:"doSearch",value:function(e,t){var n=this,a=this.props,r=a.dispatch,i=a.pageData,c=a.filter,o={recommend:c.recommend,status:c.status,type:c.type,pageSize:20,currentPage:i.currentPage};o=N({},o,t),r(Object(j.b)(e,o,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(Object(j.e)({currentPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.filter;n(Object(j.e)({currentPage:e})),this.doSearch("init",N({currentPage:e},a))}},{key:"delActivity",value:function(e){var t=this;V({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={status:-1,id:e.id};Object(I.i)("POST","/specialtopic/status",N({},n),function(e){1===e.code?(y.a.success("删除成功"),t.doSearch("init")):e.msg&&y.a.error(e.msg)})}})}},{key:"recommendTopic",value:function(e){var t=this,n=this;e.showNum&&0!==parseInt(e.showNum)&&0!==parseInt(e.status)?this.setState({order:e.showNum}):this.setState({order:1}),(0,this.props.dispatch)(Object(j.c)(function(a){V({title:"提示",content:k.a.createElement("div",{className:"modal-input"},k.a.createElement("span",{style:{marginRight:10}},"请输入首页推荐位置的权重：(权重越高越靠前)"),k.a.createElement("p",null,"已被占用的权重：",k.a.createElement("span",null,a.join(", "))),k.a.createElement(h.a,{min:1,defaultValue:t.state.order,autoFocus:!0,type:"number",onChange:n.getOrderNum})),onOk:function(){var t=n.state.order;if(""===t.toString().trim())return y.a.error("推荐位的权重值不能为空！"),!1;var a={id:e.id,status:1};0===e.status?Object(I.i)("POST","/homerecommend/updateHomerecommendstatus",N({},a),function(a){1===a.code?Object(I.i)("post","/homerecommend/updateHomerecommendshownum",{id:e.id,showNum:t},function(e){1===e.code?(y.a.success("操作成功"),n.doSearch("init")):e.msg&&y.a.error(e.msg)}):a.msg&&y.a.error(a.msg)}):Object(I.i)("post","/homerecommend/updateHomerecommendshownum",{id:e.id,showNum:t},function(e){1===e.code?(y.a.success("操作成功"),n.doSearch("init")):e.msg&&y.a.error(e.msg)})}})}))}},{key:"backRecommend",value:function(e){var t=this;V({title:"提示",content:"确认要".concat(1===e.status?"撤回":"展示","吗 ?"),onOk:function(){var n={id:e.id,status:0===e.status?1:0};Object(I.i)("POST","/specialtopic/status",N({},n),function(e){1===e.code?(y.a.success("操作成功"),t.doSearch("init")):e.msg&&y.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData,i=t.filter;return k.a.createElement("div",{className:"activity-index"},k.a.createElement(s.a,null,k.a.createElement(u.a,null,k.a.createElement("span",null,"活动筛选："),k.a.createElement(v.a,{defaultValue:"".concat(i.type),style:{width:120},onChange:this.handleChange},I.c.map(function(e){return k.a.createElement(H,{value:e.value,key:e.value},e.label)})),k.a.createElement("span",{style:{marginLeft:10}},"位置筛选："),k.a.createElement(v.a,{defaultValue:"".concat(i.recommend),style:{width:120},onChange:this.handleRecommendChange},k.a.createElement(H,{value:""},"全部"),I.b.map(function(e){return k.a.createElement(H,{value:e.value,key:e.value},e.name)})),k.a.createElement("span",{style:{marginLeft:10}},"状态筛选："),k.a.createElement(v.a,{defaultValue:"".concat(i.status),style:{width:120},onChange:this.handleTypeChange},k.a.createElement(H,{value:""},"全部"),M.map(function(e){return k.a.createElement(H,{value:e.value,key:e.value},e.label)})),k.a.createElement(p.a,{type:"primary",style:{margin:"0 15px"},onClick:function(){return O.hashHistory.push("/activity-add")}},"新增"))),k.a.createElement("div",{className:"mt30"},k.a.createElement(r.a,{spinning:this.state.loading,size:"large"},k.a.createElement(c.a,{dataSource:n.map(function(e,t){return N({},e,{key:t})}),columns:[].concat(C(this.basic),C(this.pic),C(this.pcBig),C(this.pcSmall),C(this.option)),bordered:!0,pagination:{current:a.currentPage,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}),k.a.createElement(E.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},k.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})))))}}])&&x(n.prototype,a),i&&x(n,i),t}();t.default=Object(S.connect)(function(e){return{activityInfo:e.activityInfo,list:e.activityInfo.list,search:e.activityInfo.search,filter:e.activityInfo.filter,pageData:e.activityInfo.pageData,numArr:e.activityInfo.numArr}})(B)}}]);