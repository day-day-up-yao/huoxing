(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1570:function(t,e,n){"use strict";n.r(e);n(675);var r=n(676),a=n.n(r),o=(n(1379),n(1380)),i=n.n(o),c=(n(361),n(20)),u=n.n(c),l=n(0),s=n.n(l),f=n(10),p=n(246),d=n(1660),y=(n(1385),n(1386)),b=n.n(y),h=(n(247),n(183)),m=n.n(h),v=(n(1405),n(1406)),g=n.n(v),O=(n(184),n(1378)),k=n.n(O),w=n(48);n(1790);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){L(t,e,n[e])})}return t}function E(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=[],T=function(t){var e=t.editable,n=t.value,r=t.onChange,a=t.type;return s.a.createElement("div",null,e?s.a.createElement(k.a,{type:a||"text",style:{margin:"-5px 0"},value:n,onChange:function(t){return r(t.target.value)}}):n)},A=function(t){function e(t){var n,r,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,a=P(e).call(this,t),n=!a||"object"!==S(a)&&"function"!=typeof a?_(r):a,L(_(n),"handleAdd",function(){var t=n.state,e=t.count,r=t.data,a={editable:!0,key:e,title:"标题".concat(e),url:"http://www.huoxing24.com/",synopsis:"无"};n.setState({data:[a].concat(E(r)),count:e+1})}),L(_(n),"onDelete",function(t,e){var r=E(n.state.data);if(e.id){var a={status:0};a.id=e.id,Object(w.i)("POST","/topic/delcontent",j({},a),function(e){1===e.code?(u.a.success("操作成功！"),n.setState({data:r.filter(function(e){return e.key!==t})}),n.setContentList(r.filter(function(e){return e.key!==t}))):u.a.error(e.msg)})}else n.setState({data:r.filter(function(e){return e.key!==t})}),n.setContentList(r.filter(function(e){return e.key!==t}))}),L(_(n),"setContentList",function(t){var e=[];t.map(function(t,n){var r={};for(var a in t)"key"!==a&&"editable"!==a&&(r[a]=t[a]);e.push(r)}),n.props.getData(e)});var o=n.props,i=o.dataList,c=o.update;n.columns=[{title:"文章标题",dataIndex:"title",width:"30%",render:function(t,e){return n.renderColumns(t,e,"title","text")}},{title:"文章链接(请输入完整的URL地址)",dataIndex:"url",width:"35%",render:function(t,e){return n.renderColumns(t,e,"url","url")}},{title:"备注",dataIndex:"synopsis",width:"15%",render:function(t,e){return n.renderColumns(t,e,"synopsis","text")}},{title:"操作",dataIndex:"operation",render:function(t,e){var r=e.editable;return s.a.createElement("div",{className:"editable-row-operations"},r?s.a.createElement("span",null,s.a.createElement("a",{onClick:function(){return n.save(e.key)}},"保存"),s.a.createElement(g.a,{title:"确定要放弃修改吗？",onConfirm:function(){return n.cancel(e.key)}},s.a.createElement("a",null,"取消"))):s.a.createElement("a",{onClick:function(){return n.edit(e.key)}},"编辑"),n.state.data.length>0?s.a.createElement(g.a,{title:"确定要删除吗？",onConfirm:function(){return n.onDelete(e.key,e)}},s.a.createElement("a",{href:"#"},"删除")):null)}}];var l=[];return c&&i.map(function(t,e){t.key=e,l.push(t)}),n.state=c?{data:l,count:l.length}:{data:x,count:1},n.cacheData=x.map(function(t){return j({},t)}),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,l["Component"]),n=e,(r=[{key:"renderColumns",value:function(t,e,n,r){var a=this;return s.a.createElement(T,{type:r,editable:e.editable,value:t,onChange:function(t){return a.handleChange(t,e.key,n)}})}},{key:"handleChange",value:function(t,e,n){var r=E(this.state.data),a=r.filter(function(t){return e===t.key})[0];a&&(a[n]=t,this.setState({data:r}),this.setContentList(r))}},{key:"edit",value:function(t){var e=E(this.state.data),n=e.filter(function(e){return t===e.key})[0];n&&(n.editable=!0,this.setState({data:e}))}},{key:"save",value:function(t){var e=this,n=E(this.state.data),r=n.filter(function(e){return t===e.key})[0];if(this.props.query){var a={};for(var o in r)"key"!==o&&"editable"!==o&&(a[o]=r[o]);if(r&&!r.id){var i={topic:{id:this.props.query},contentList:[]};i.contentList.push(a),Object(w.m)("/topic/addcontent",j({},i),function(t){1===t.code?(delete r.editable,r.id=t.obj,u.a.success("操作成功！"),e.setState({data:n}),e.cacheData=n.map(function(t){return j({},t)})):u.a.error(t.msg)})}else a.status=1,delete a.key,Object(w.i)("POST","/topic/updatecontent",j({},a),function(t){1===t.code?(delete r.editable,e.setState({data:n}),e.cacheData=n.map(function(t){return j({},t)}),u.a.success("操作成功！")):u.a.error(t.msg)})}else r&&(delete r.editable,this.setState({data:n}),this.cacheData=n.map(function(t){return j({},t)}),this.setContentList(n))}},{key:"cancel",value:function(t){var e=E(this.state.data),n=e.filter(function(e){return t===e.key})[0];n&&(Object.assign(n,this.cacheData.filter(function(e){return t===e.key})[0]),delete n.editable,this.setState({data:e}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"editable-table"},s.a.createElement(m.a,{className:"editable-add-btn",type:"primary",onClick:this.handleAdd},"新增"),this.props.backButton?s.a.createElement(m.a,{type:"primary",className:"cancel",style:{marginLeft:15},onClick:function(){f.hashHistory.goBack()}},"返回"):"",s.a.createElement(b.a,{pagination:!1,bordered:!0,dataSource:this.state.data,columns:this.columns}))}}])&&C(n.prototype,r),a&&C(n,a),e}();n(1697);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var H=function(t){function e(){var t,n,r,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=this,a=(t=N(e)).call.apply(t,[this].concat(i)),n=!a||"object"!==I(a)&&"function"!=typeof a?B(r):a,z(B(n),"state",{loading:!0,contentList:[]}),z(B(n),"handleSubmit",function(t){t.preventDefault(),n.props.form.validateFieldsAndScroll(function(t,e){t||(n.setState({loading:!0}),e.topic={id:n.props.location.query.id},e.contentList=n.state.contentList,Object(w.m)("/topic/add",e,function(t){1===t.code?(u.a.success("操作成功！"),f.hashHistory.push("/specialTopic-list")):u.a.error(t.msg)}))})}),z(B(n),"createMarkup",function(t){return{__html:t}}),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,l["Component"]),n=e,(r=[{key:"componentWillMount",value:function(){this.props.location.query.id?this.doSearch("init",{}):this.setState({loading:!1})}},{key:"doSearch",value:function(t,e){var n=this,r=this.props,a=r.dispatch,o=r.pageData,i={id:r.location.query.id,pageSize:500,currentPage:o.currentPage};i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){z(t,e,n[e])})}return t}({},i,e),a(Object(d.d)(t,i,function(t){n.setState({loading:!1})}))}},{key:"render",value:function(){var t=this,e=this.props,n=e.list,r=e.location;return s.a.createElement("div",{className:"specialTopic-send"},s.a.createElement(a.a,{spinning:this.state.loading,size:"large"},s.a.createElement(i.a,{onSubmit:this.handleSubmit},this.state.loading?"":s.a.createElement(A,{backButton:!0,query:r.query.id,dataList:n,update:!0,getData:function(e){t.setState({contentList:e})}}))))}}])&&q(n.prototype,r),o&&q(n,o),e}();e.default=Object(p.connect)(function(t){return{pageData:t.specialTopicInfo.pageData,list:t.specialTopicInfo.contentList,selectData:t.specialTopicInfo.selectedData}})(i.a.create()(H))},1790:function(t,e,n){var r=n(1791);"string"==typeof r&&(r=[[t.i,r,""]]);var a={transform:void 0};n(186)(r,a);r.locals&&(t.exports=r.locals)},1791:function(t,e,n){(t.exports=n(185)(!1)).push([t.i,"",""])}}]);