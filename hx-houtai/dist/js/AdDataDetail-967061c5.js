(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1501:function(e,t,n){"use strict";n.r(t);n(1379);var a=n(1380),r=n.n(a),o=(n(675),n(676)),i=n.n(o),c=(n(1385),n(1386)),u=n.n(c),s=(n(247),n(183)),l=n.n(s),f=(n(361),n(20)),p=n.n(f),m=(n(1392),n(1393)),y=n.n(m),h=n(0),d=n.n(h),b=n(246),g=n(11),D=n.n(g),v=(n(1706),n(1707)),O=n(48);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Y(e,t,n[t])})}return e}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=y.a.RangePicker,_=[],M=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=j(t).call(this),e=!a||"object"!==w(a)&&"function"!=typeof a?k(n):a,Y(k(e),"handleChange",function(t){e.setState({startTime:Date.parse(t[0].format("YYYY-MM-DD HH:mm:ss")),endTime:Date.parse(t[1].format("YYYY-MM-DD HH:mm:ss"))})}),e.state={visible:!1,loading:!0,startTime:"",endTime:"",sortType:"1"},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,h["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){this.doSearch("init"),_=[{title:"日期",key:"createTime",width:280,render:function(e,t){return d.a.createElement("div",{className:"adData-info clearfix"},Object(O.w)(t.createTime))}},{title:"点击量(pv)",key:"pv",render:function(e,t){return t.count}}]}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t){var n=this,a=this.props,r=a.dispatch,o=a.pageData,i=a.location,c={statisticId:i.query.id,startTime:i.query.time,endTime:Date.parse(new Date),currentPage:o.currPage};this.setState({loading:!0}),c=P({},c,t),r(Object(v.b)(e,c,function(e){n.setState({loading:!1}),1!==e.code&&p.a.error("请求失败!")}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{startTime:this.state.startTime,endTime:this.state.endTime,currentPage:1}),e(Object(v.f)({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.search;n(Object(v.f)({currPage:e})),this.doSearch(a.type,{currentPage:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData,r=t.location;return d.a.createElement("div",{className:"adData-index"},d.a.createElement("span",{style:{marginLeft:15}},"时间筛选："),d.a.createElement(E,{onChange:this.handleChange,defaultValue:[D()(Object(O.w)(r.query.time||Date.parse(new Date)),"YYYY-MM-DD"),D()()],format:"YYYY-MM-DD"}),d.a.createElement(l.a,{type:"primary",style:{marginLeft:15},onClick:function(){e._search()}},"确定"),d.a.createElement("div",{style:{marginTop:15}},d.a.createElement(i.a,{spinning:this.state.loading,size:"large"},d.a.createElement(u.a,{dataSource:n.map(function(e,t){return P({},e,{key:t})}),columns:_,bordered:!0,pagination:{current:a.currPage,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))))}}])&&S(n.prototype,a),r&&S(n,r),t}();t.default=Object(b.connect)(function(e){return{selectedData:e.adDataInfo.selectedData,list:e.adDataInfo.listDetail,search:e.adDataInfo.search,pageData:e.adDataInfo.pageDetailData}})(r.a.create()(M))}}]);