(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1597:function(e,t,n){"use strict";n.r(t);n(1379);var r=n(1380),a=n.n(r),o=(n(675),n(676)),i=n.n(o),c=(n(1385),n(1386)),l=n.n(c),u=(n(1381),n(1382)),f=n.n(u),s=(n(1383),n(1384)),p=n.n(s),g=(n(247),n(183)),y=n.n(g),d=(n(677),n(362)),b=n.n(d),h=n(0),m=n.n(h),v=n(246),O=n(10),w=(n(361),n(20)),E=n.n(w),S=n(48),j=n(2);function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e,t,n){return function(r){var a="init"===e?"/power/agendaList":"/power/search";Object(S.i)("get",a,t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}({},t,{createType:0}):{},function(e){if(1===e.code){var t=e.obj;r(D({list:t.inforList})),r(C({totalCount:t.recordCount,pageSize:t.pageSize,currPage:t.currentPage})),n&&n(t)}else E.a.error(e.obj)})}},D=function(e){return{type:j.f.ADD_DATA,data:e}},C=function(e){return{type:j.f.SET_PAGE_DATA,data:e}},_=n(248);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){N(e,t,n[t])})}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=b.a.Option,x=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,L(t).call(this))).state={loading:!1,filter:""},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,h["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.filter;t(Object(_.g)()),this.doSearch("init",T({},n))}},{key:"doSearch",value:function(e,t){var n=this,r=this.props,a=r.dispatch,o=r.pageData,i=r.filter,c=r.conferenceList;console.log("过滤数据:"+JSON.stringify(c));var l=T({},i,{pageSize:20,currentPage:o.currPage,conferenceId:1,agendaDate:1});this.setState({loading:!0}),l=T({},l,t),console.log(l),a(k(e,l,function(){n.setState({loading:!1})}))}},{key:"handleChange",value:function(){}},{key:"render",value:function(){var e=this,t=[{title:"主题",width:220,key:"titleEN",render:function(e,t){return t&&m.a.createElement("div",null,t.titleEN,"/",t.titleZHCN)}},{title:"演讲时间",width:220,key:"speakTime",render:function(e,t){return t&&m.a.createElement("div",null,t.speakTime)}}],n=this.props,r=n.conferenceList,a=n.list,o=n.pageData;return console.log("最后拿到的数据:"+JSON.stringify(r)),m.a.createElement("div",{className:"conference-index"},m.a.createElement(f.a,null,m.a.createElement(p.a,null,m.a.createElement("span",null,"大会："),m.a.createElement(b.a,{defaultValue:"全部",style:{width:140,marginRight:20},onChange:this.handleChange},m.a.createElement(R,{value:""},"全部"),this.props.conferenceList.map(function(e,t){return m.a.createElement(R,{key:e.id,value:String(e.id)},e.label)})),m.a.createElement("span",{style:{marginRight:15}},"日期："),m.a.createElement(b.a,{style:{width:100,marginRight:10}},m.a.createElement(R,{value:"111"},"哈哈哈")),m.a.createElement(y.a,{type:"primary",onClick:function(){return O.hashHistory.push("/agender-send")}},"新 增"))),m.a.createElement("div",{className:"mt30"},m.a.createElement(i.a,{spinning:this.state.loading,size:"large"},m.a.createElement(l.a,{dataSource:a.map(function(e,t){return T({},e,{key:t})}),columns:t,bordered:!0,pagination:{current:o.currPage,total:o.totalCount,pageSize:o.pageSize,onChange:function(t){return e.changePage(t)}}}))))}}])&&z(n.prototype,r),a&&z(n,a),t}();t.default=Object(v.connect)(function(e){return{agendaInfo:e.agendaInfo,list:e.agendaInfo.list,search:e.agendaInfo.search,filter:e.agendaInfo.filter,pageData:e.agendaInfo.pageData,selectedData:e.agendaInfo.selectedData,conferenceList:e.conferenceInfo}})(a.a.create()(x))}}]);