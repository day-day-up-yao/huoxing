(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1456:function(e,t,n){"use strict";n.r(t);n(675);var a=n(676),r=n.n(a),i=(n(1385),n(1386)),o=n.n(i),c=(n(1381),n(1382)),s=n.n(c),l=(n(1383),n(1384)),u=n.n(l),p=(n(247),n(183)),f=n.n(p),m=(n(184),n(1378)),d=n.n(m),h=(n(361),n(20)),b=n.n(h),y=(n(677),n(362)),g=n.n(y),v=(n(1376),n(1377)),O=n.n(v),k=n(0),j=n.n(k),E=n(246),S=(n(1672),n(10)),w=n(1605),I=n(1673),C=n(48);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){D(e,t,n[t])})}return e}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=O.a.confirm,L=g.a.Option,q=[],J=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=T(t).call(this),e=!a||"object"!==_(a)&&"function"!=typeof a?x(n):a,D(x(e),"handleChange",function(t){(0,e.props.dispatch)(Object(I.d)({status:t})),e.setState({icoStatus:t}),e.doSearch("init",{page:1,status:t})}),D(x(e),"handleChange1",function(t){(0,e.props.dispatch)(Object(I.d)({recommend:t})),e.doSearch("init",{page:1,recommend:t})}),D(x(e),"handleChange2",function(t){(0,e.props.dispatch)(Object(I.d)({channelId:t})),e.doSearch("init",{page:1,channelId:t})}),e.state={loading:!0,icoStatus:null},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,k["Component"]),n=t,(a=[{key:"channelName",value:function(e){var t="";return C.E.map(function(n,a){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.search,a=t.filter;this.doSearch("init",P({},a,{symbol:n.symbol})),q=[{title:"ICO名称",width:"250px",key:"name",render:function(t,n){return n&&j.a.createElement("div",{className:"ico-info clearfix"},j.a.createElement("div",null,j.a.createElement("h4",{title:n.name,dangerouslySetInnerHTML:e.createMarkup(Object(C.q)(n.name,30))})))}},{title:"ICO简称 ",dataIndex:"symbol",key:"symbol"},{title:"ICO 图标",width:140,key:"img",render:function(e){return j.a.createElement("img",{style:{width:100},src:e.img,alt:""})}},{title:"Ico状态",key:"status",render:function(e){return e&&"past"===e.status?j.a.createElement("span",{className:"ico-status pre-publish"},"已结束"):e&&"ongoing"===e.status?j.a.createElement("span",{className:"ico-status has-publish"},"进行中"):e&&"upcoming"===e.status?j.a.createElement("span",{className:"ico-status will-publish"},"即将开始"):j.a.createElement("span",null,"暂无")}},{title:"开始时间",dataIndex:"startTime",key:"startTime",render:function(e){return e&&Object(C.w)(e)}},{title:"结束时间 ",dataIndex:"endTime",key:"endTime",render:function(e){return e&&Object(C.w)(e)}},{title:"操作",key:"action",render:function(t){return j.a.createElement("div",null,j.a.createElement(S.Link,{className:"mr10 opt-btn",to:{pathname:"/ico-detail",query:{id:t.id}},style:{background:"#108ee9"}},"详情"),j.a.createElement("a",{onClick:function(){return e.delIco(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除"))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(I.f)({type:"init",nickName:""})),e(Object(I.e)({pageSize:10,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t){var n=this,a=this.props,r=a.dispatch,i=a.pageData,o=a.search,c=P({},a.filter,{symbol:o.symbol,pageSize:10,page:i.page});"init"!==e&&(c=P({},c,{nickName:o.nickName,symbol:o.symbol})),c=P({},c,t),r(Object(I.b)(e,c,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props,t=e.dispatch,n=e.search,a="init";a=(n.nickName||n.symbol,"init"),this.doSearch(a,{page:1}),t(Object(I.f)({type:a})),t(Object(I.e)({page:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.search,r=t.filter;n(Object(I.e)({page:e})),this.doSearch(a.type,P({page:e},r))}},{key:"delIco",value:function(e){var t=this.props.dispatch,n=this;M({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id,status:-1};Object(C.i)("POST","/ico/delete",P({},a),function(e){1===e.code?(b.a.success("删除成功"),n.doSearch("init"),t(Object(I.f)({type:"init"}))):b.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,n=this;M({title:"提示",content:"确认要".concat(0===e.status?"发表":"撤回到草稿箱","吗 ?"),onOk:function(){var a={id:e.id,status:0===e.status?1:0};Object(C.i)("POST","/news/status",P({},a),function(a){1===a.code?(b.a.success("".concat(0===e.status?"发表":"撤回","成功")),n.doSearch("init"),t(Object(I.f)({type:"init"}))):b.a.error(a.msg)})}})}},{key:"_forbidcomment",value:function(e){var t=this,n=this.props.dispatch,a={id:e.id,operate:parseInt(e.forbidComment)?"0":"1"};Object(C.i)("post","/post/forbidcomment",a,function(e){200===e.status?(t.doSearch("init"),n(Object(I.f)({type:"init"}))):b.a.error(e.msg)})}},{key:"_isTop",value:function(e){var t=this,n=this.props.dispatch,a={id:e.id,recommend:1===e.recommend?0:1};Object(C.i)("post","/ico/recommend",a,function(e){1===e.code?(t.doSearch("init"),n(Object(I.f)({type:"init"}))):b.a.error(e.msg)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData,i=t.filter,c=t.search,l=t.dispatch;return j.a.createElement("div",{className:"ico-index"},j.a.createElement(s.a,null,j.a.createElement(u.a,null,j.a.createElement("span",null,"Ico状态："),j.a.createElement(g.a,{defaultValue:"".concat(i.status),style:{width:120},onChange:this.handleChange},j.a.createElement(L,{value:""},"全部"),C.E.map(function(e){return j.a.createElement(L,{value:e.value,key:e.value},e.label)})),j.a.createElement("span",{style:{marginLeft:15}},"Ico简称: "),j.a.createElement(d.a,{value:c.symbol,style:{width:200,marginRight:15},onChange:function(e){return l(Object(I.f)({symbol:e.target.value}))},placeholder:"请输入Ico简称"}),j.a.createElement("span",null,j.a.createElement(f.a,{type:"primary",onClick:function(){e._search()}},j.a.createElement(w.a,{type:"icon-search"}),"搜索")))),j.a.createElement("div",{className:"mt30"},j.a.createElement(r.a,{spinning:this.state.loading,size:"large"},j.a.createElement(o.a,{dataSource:n.map(function(e,t){return P({},e,{key:t})}),columns:q,bordered:!0,pagination:{current:a.page,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))))}}])&&N(n.prototype,a),i&&N(n,i),t}();t.default=Object(E.connect)(function(e){return{icoInfo:e.icoInfo,list:e.icoInfo.list,search:e.icoInfo.search,filter:e.icoInfo.filter,pageData:e.icoInfo.pageData}})(J)}}]);