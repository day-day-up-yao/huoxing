(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1588:function(e,t,n){"use strict";n.r(t);n(1379);var a=n(1380),r=n.n(a),c=(n(675),n(676)),o=n.n(c),i=(n(1385),n(1386)),l=n.n(i),s=(n(1381),n(1382)),u=n.n(s),f=(n(1383),n(1384)),p=n.n(f),h=(n(247),n(183)),m=n.n(h),y=(n(184),n(1378)),d=n.n(y),b=(n(361),n(20)),g=n.n(b),v=(n(677),n(362)),E=n.n(v),O=(n(1376),n(1377)),S=n.n(O),k=n(0),w=n.n(k),C=n(246),j=(n(1609),n(48)),P=n(2);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){x(e,t,n[t])})}return e}function V(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=S.a.confirm,L=E.a.Option,R=[],J=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=N(t).call(this),e=!a||"object"!==T(a)&&"function"!=typeof a?I(n):a,x(I(e),"isRecommend",function(t){var n=I(e);z({title:"提示",content:"确认要".concat(1===t.recCreaterType?"回撤":"推荐","吗?"),onOk:function(){var e={noticeId:t.noticeId,status:1===t.recCreaterType?0:1};Object(j.i)("POST","/notice/changeRecCreaterType",_({},e),function(e){1===e.code?(g.a.success("".concat(1===t.recCreaterType?"回撤":"推荐","成功")),n.doSearch(n.state.type,n.props.selectedData.currentPage,n.state.searchVal)):g.a.error(e.msg)})}})}),x(I(e),"handleChange",function(t){e.setState({searchVal:"",type:t}),e.doSearch(t,1,"")}),x(I(e),"changeVal",function(t){var n=t.target.value;e.setState({searchVal:n})}),e.state={loading:!0,visible:!1,type:"",searchVal:""},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,k["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){var e=this;this.doSearch(this.state.type,1,this.state.searchVal),R=[{title:"公告标题",key:"channelName",render:function(e,t){return t&&w.a.createElement("div",{className:"post-info clearfix"},w.a.createElement("div",null,w.a.createElement("h4",{title:t.title},t.title)))}},{title:"操作",key:"action",render:function(t){return w.a.createElement("div",{className:"btns"},w.a.createElement("p",null,w.a.createElement("a",{onClick:function(){e.isRecommend(t)}},1===t.recCreaterType?w.a.createElement("span",{className:"mr10 opt-btn",style:{background:"#f68e15"}},"取消推荐"):0===t.recCreaterType?w.a.createElement("span",{className:"mr10 opt-btn",style:{background:"#108ee9"}},"推荐至首页"):void 0)),w.a.createElement("p",null,w.a.createElement("a",{onClick:function(){return e.delChannel(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")),w.a.createElement("p",null,w.a.createElement("a",{className:"mr10 opt-btn",target:"_blank",href:"https://news.marsbit.co.com/noticeDetail/".concat(t.noticeId),style:{background:"#18d8ef"}},"查看")))}}]}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t,n){var a=this;(0,this.props.dispatch)(function(e,t){return function(n){Object(j.i)("get","/notice/list_title",e,function(e){if(1===e.code){var a=e.obj;n({type:P.mb.GET_POST_NOTICE_LIST,data:a}),t&&t(a)}else g.a.error(e.msg)})}}({recCreaterType:e,search:n,currentPage:t,pageSize:20},function(e){a.setState({loading:!1})}))}},{key:"changePage",value:function(e){this.setState({loading:!0}),this.doSearch(this.state.type,e,this.state.searchVal)}},{key:"delChannel",value:function(e){var t=this;z({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={noticeId:e.noticeId,status:-1};Object(j.i)("POST","/notice/status",_({},n),function(e){1===e.code?(g.a.success("删除成功"),t.doSearch(t.state.type,t.props.selectedData.currentPage,t.state.searchVal)):g.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props.selectedData,n=t.inforList?t.inforList:[];return w.a.createElement("div",{className:"post-index"},w.a.createElement(u.a,null,w.a.createElement(p.a,null,w.a.createElement("span",{style:{marginLeft:15}},"推荐："),w.a.createElement(E.a,{defaultValue:"",style:{width:100},onChange:this.handleChange},w.a.createElement(L,{value:""},"全部"),w.a.createElement(L,{value:"1"},"已推荐"),w.a.createElement(L,{value:"0"},"未推荐")),w.a.createElement(d.a,{defaultValue:""===this.state.searchVal?"":this.state.searchVal,style:{width:250,margin:"0 15px"},placeholder:"搜索内容",onChange:this.changeVal}),w.a.createElement("span",null,w.a.createElement(m.a,{type:"primary",onClick:function(){e.doSearch(e.state.type,1,e.state.searchVal)}},"搜索")))),w.a.createElement("div",{className:"mt30"},w.a.createElement(o.a,{spinning:this.state.loading,size:"large"},w.a.createElement(l.a,{dataSource:n.map(function(e,t){return _({},e,{key:t})}),columns:R,bordered:!0,pagination:{current:t.currentPage,total:t.recordCount,pageSize:t.pageSize,onChange:function(t){return e.changePage(t)}}}))))}}])&&V(n.prototype,a),r&&V(n,r),t}();t.default=Object(C.connect)(function(e){return{selectedData:e.newsNoticeInfo.selectedData}})(r.a.create()(J))}}]);