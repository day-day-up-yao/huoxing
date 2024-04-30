(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1504:function(e,t,n){"use strict";n.r(t);n(1379);var r=n(1380),a=n.n(r),o=(n(1381),n(1382)),i=n.n(o),c=(n(675),n(676)),l=n.n(c),u=(n(1385),n(1386)),s=n.n(u),f=(n(1383),n(1384)),p=n.n(f),d=(n(247),n(183)),h=n.n(d),m=(n(184),n(1378)),y=n.n(m),g=(n(361),n(20)),b=n.n(g),v=(n(1376),n(1377)),O=n.n(v),w=(n(677),n(362)),E=n.n(w),k=n(0),S=n.n(k),j=n(246),P=n(10),I=n(1710),C=n(248),_=(n(1684),n(48));function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){L(e,t,n[t])})}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=E.a.Option,G=O.a.confirm,q=[],A=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=x(this,z(t).call(this))).state={loading:!1,filter:""},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,k["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.dispatch,r=t.filter;q=[{title:"头像",width:220,key:"speakerIcon",render:function(e,t){return t&&S.a.createElement("div",{style:{textAlign:"center"}},S.a.createElement("img",{width:"50",height:"50",src:t.speakerIcon,alt:"嘉宾头像"}))}},{title:"姓名",width:220,key:"name",render:function(e,t){return t&&S.a.createElement("div",null,t.name)}},{title:"一句话介绍",width:220,key:"brief",render:function(e,t){return t&&S.a.createElement("div",null,t.brief)}},{title:"详细介绍",width:220,key:"intro",render:function(e,t){return t&&S.a.createElement("div",null,t.intro)}},{title:"排序权重",width:220,key:"topOrder",render:function(e,t){return t&&S.a.createElement("div",null,t.topOrder)}},{title:"操作",width:220,key:"option",render:function(t){return S.a.createElement("div",{className:"btns"},S.a.createElement("p",null,S.a.createElement(P.Link,{className:"mr10 opt-btn",to:{pathname:"/guest-send",query:{id:t.id}},style:{background:"#f68e15"}},"编辑")),S.a.createElement("p",null,S.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.deleteGuestItem(t)},style:{background:"#d73435"}},"删除")))}}],n(Object(C.g)()),this.doSearch("init",N({},r))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,r=t.search,a=t.filter;n(Object(I.c)({currPage:e})),this.doSearch(r.type,N({currentPage:e},a))}},{key:"doSearch",value:function(e,t){var n=this,r=this.props,a=r.dispatch,o=r.pageData,i=r.filter,c=r.conferenceList;console.log("过滤数据:"+JSON.stringify(c));var l=N({},i,{pageSize:20,currentPage:o.currPage,name:"Robert Leshner",conferenceId:1});this.setState({loading:!0}),l=N({},l,t),console.log(l),a(Object(I.b)(e,l,function(){n.setState({loading:!1})}))}},{key:"deleteGuestItem",value:function(e){var t=this.props.dispath,n=this;G({title:"提示",content:"确定要删除吗",onOk:function(){var r={id:e.id};Object(_.i)("POST","/power/deleteSpeaker",N({},r),function(e){1===e.code?(b.a.success("修改成功"),n.doSearch("init"),t(Object(I.d)({type:"init"}))):b.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.conferenceList,r=t.list,a=t.pageData;return S.a.createElement("div",{className:"conference-index"},S.a.createElement(i.a,null,S.a.createElement(p.a,null,S.a.createElement("span",null,"大会："),S.a.createElement(E.a,{defaultValue:"全部",style:{width:140,marginRight:20},onChange:this.handleChange},S.a.createElement(T,{value:""},"全部"),n.map(function(e,t){return S.a.createElement(T,{key:e.id,value:String(e.id)},e.label)})),S.a.createElement(y.a,{type:"text",style:{width:150,marginRight:20},placeholder:"输入嘉宾姓名搜索"}),S.a.createElement(h.a,{type:"primary",style:{marginRight:20}},"搜 索"),S.a.createElement(h.a,{type:"primary",onClick:function(){return P.hashHistory.push("/guest-send")}},"新 增")),S.a.createElement("div",{className:"mt30"},S.a.createElement(l.a,{spinning:this.state.loading,size:"large"},S.a.createElement(s.a,{dataSource:r.map(function(e,t){return N({},e,{key:t})}),columns:q,bordered:!0,pagination:{current:a.currPage,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}})))))}}])&&R(n.prototype,r),a&&R(n,a),t}();t.default=Object(j.connect)(function(e){return{list:e.guestInfo.list,search:e.guestInfo.search,filter:e.guestInfo.filter,pageData:e.guestInfo.pageData,selectedData:e.guestInfo.selectedData,conferenceList:e.conferenceInfo}})(a.a.create()(A))}}]);