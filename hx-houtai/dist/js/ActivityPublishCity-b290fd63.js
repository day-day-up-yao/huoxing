(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1591:function(e,t,a){"use strict";a.r(t);a(184);var n=a(1378),r=a.n(n),i=(a(675),a(676)),c=a.n(i),l=(a(1385),a(1386)),o=a.n(l),s=(a(1381),a(1382)),u=a.n(s),p=(a(1383),a(1384)),f=a.n(p),d=(a(247),a(183)),m=a.n(d),y=(a(361),a(20)),b=a.n(y),h=(a(1379),a(1380)),v=a.n(h),g=(a(677),a(362)),k=a.n(g),E=(a(1376),a(1377)),O=a.n(E),S=a(0),P=a.n(S),j=a(246),w=(a(1661),a(48)),C=a(2);function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){D(e,t,a[t])})}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var N=function(e){return{type:C.xb,data:e}},T=function(e){return{type:C.u.ADD_DATA,data:e}},I=function(e){return{type:C.u.SET_SEARCH_QUERY,data:e}},A=function(e){return{type:C.u.SET_FILTER_DATA,data:e}},x=function(e){return{type:C.u.SET_PAGE_DATA,data:e}},F=a(11),M=a.n(F);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){U(e,t,a[t])})}return e}function V(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var W=O.a.confirm,$=k.a.Option,G={labelCol:{xs:{span:2},sm:{span:4}},wrapperCol:{xs:{span:4},sm:{span:16}}},Q=[],Y=v.a.Item,B=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=L(t).call(this),e=!n||"object"!==R(n)&&"function"!=typeof n?H(a):n,U(H(e),"disabledDate",function(e){return e&&e<M()().endOf("hours")}),U(H(e),"handleChange1",function(t){(0,e.props.dispatch)(A({status:t})),e.doSearch("init",{currentPage:1,status:t})}),U(H(e),"cancelModal",function(){var t=e.props.form;e.setState({visible:!1}),t.resetFields()}),e.state={loading:!0,newsStatus:null,editNewsId:"",visible:!1},e}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,S["Component"]),a=t,(n=[{key:"channelName",value:function(e){var t="";return w.p.map(function(a,n){parseInt(a.value)===e&&(t=a.label)}),t}},{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.search,n=t.filter;this.doSearch("init",q({},n,{title:a.title})),Q=[{title:"城市",key:"place",render:function(t,a){return a&&P.a.createElement("div",{className:"activityPublish-info clearfix"},P.a.createElement("div",null,P.a.createElement("h4",{title:a.place,dangerouslySetInnerHTML:e.createMarkup(Object(w.q)(a.place,30))})))}},{title:"状态",key:"status",render:function(e){return e&&-1===e.status?P.a.createElement("span",{className:"news-status pre-publish"},"撤回 (未展示)"):e&&1===e.status?P.a.createElement("span",{className:"news-status"},"展示中"):P.a.createElement("span",null,"暂无")}},{title:"排序",dataIndex:"rank",key:"rank"},{title:"操作",key:"action",render:function(t){return 99===t.rank||100===t.rank?P.a.createElement("p",{className:"btns"},P.a.createElement("a",{className:"mr10 opt-btn",href:"javascript:void(0)",onClick:function(){return e._isPublish(t)},style:{background:"#f68e15"}},1===t.status?"禁用":-1===t.status?"启用":"无")):P.a.createElement("div",{className:"btns"},P.a.createElement("p",null,P.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){e.updateCity(t)},style:{background:"#108ee9"}},"修改排序")),P.a.createElement("p",null,P.a.createElement("a",{className:"mr10 opt-btn",href:"javascript:void(0)",onClick:function(){return e._isPublish(t)},style:{background:"#f68e15"}},1===t.status?"禁用":-1===t.status?"启用":"无")),P.a.createElement("p",null,P.a.createElement("a",{onClick:function(){return e.delCity(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(I({type:"init",nickName:""})),e(x({pageSize:20,totalCount:0}))}},{key:"updateCity",value:function(e){this.props.dispatch(N(e)),this.setState({visible:!0})}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t){var a=this,n=this.props,r=n.dispatch,i=n.pageData,c=q({},n.filter,{pageSize:20,currentPage:i.currPage});r(function(e,t,a){return function(n){var r="init"===e?"/activity/getplacelist":"/post/search";Object(w.i)("get",r,t?_({},t):{},function(e){if(1===e.code){var t=e.obj;n(T({list:t})),a&&a(t)}else b.a.error(e.msg)})}}(e,c=q({},c,t),function(){a.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(I({type:"init"})),e(x({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,a=t.dispatch,n=t.search,r=t.filter;a(x({currPage:e})),this.doSearch(n.type,q({currentPage:e},r))}},{key:"delCity",value:function(e){var t=this.props.dispatch,a=this;W({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={place:e.place};Object(w.i)("POST","/activity/delplace",q({},n),function(e){1===e.code?(b.a.success("删除成功"),a.doSearch("init"),t(I({type:"init"}))):b.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this;W({title:"提示",content:"确认要".concat(1===e.status?"禁用":"启用","吗 ?"),onOk:function(){var a={place:e.place,status:1!==e.status?1:-1};Object(w.i)("POST","/activity/placestatus",q({},a),function(e){1===e.code?(b.a.success("操作成功"),t.doSearch("init")):b.a.error(e.msg)})}})}},{key:"submit",value:function(){var e=this,t=this.props,a=t.dispatch,n=t.form,r=t.selectedData,i=this;n.validateFields(function(t,c){if(t)return!1;var l,o;r.rank?(c.oldRank=c.rank,delete c.rank,delete c.status,Object(w.i)("POST","/activity/updateplacerank",c,function(t){1===t.code?(b.a.success("操作成功!"),e.setState({visible:!1}),n.resetFields(),i.doSearch("init")):b.a.success(t.msg)})):a((l=c,o=function(){e.setState({visible:!1}),n.resetFields(),e.doSearch("init")},function(e){Object(w.i)("post","/activity/addplace",_({},l),function(e){1===e.code?(b.a.success("添加成功！"),o&&o()):b.a.error(e.msg)})}))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.filter,i=t.form,l=t.selectedData,s=t.pageData,p=t.dispatch,d=i.getFieldDecorator;return P.a.createElement("div",{className:"activityPublish-index"},P.a.createElement(u.a,null,P.a.createElement(f.a,null,P.a.createElement("span",{style:{marginLeft:0}},"推荐："),P.a.createElement(k.a,{defaultValue:"".concat(n.status),style:{width:100},onChange:this.handleChange1},P.a.createElement($,{value:""},"全部"),P.a.createElement($,{value:"1"},"使用中"),P.a.createElement($,{value:"-1"},"禁用")),P.a.createElement("span",null,P.a.createElement(m.a,{type:"primary",style:{margin:"0 0 0 15px"},onClick:function(){e.setState({visible:!0}),p(N({}))}},"新增城市")))),P.a.createElement("div",{className:"mt30"},P.a.createElement(c.a,{spinning:this.state.loading,size:"large"},P.a.createElement(o.a,{dataSource:a.map(function(e,t){return q({},e,{key:t})}),columns:Q,bordered:!0,pagination:{current:s.currPage,total:s.totalCount,pageSize:s.pageSize,onChange:function(t){return e.changePage(t)}}}))),P.a.createElement(O.a,{title:"添加城市",visible:this.state.visible,onOk:function(){return e.submit()},onCancel:this.cancelModal},P.a.createElement(v.a,null,P.a.createElement(Y,z({},G,{label:"城市名称"}),d("place",{rules:[{required:!0,message:"请输入城市名称!"}],initialValue:""===l.place?"":l.place})(P.a.createElement(r.a,{disabled:l.rank}))),l.rank&&P.a.createElement("div",null,P.a.createElement(Y,z({},G,{label:l.rank?"旧排序值":"排序值"}),d("rank",{rules:[{required:!l.rank&&""!==l.rank,message:"请输入排序值!"},{pattern:/^[1-9][0-8]?$/,message:"排序值应在1~98之间!"}],initialValue:""===l.rank?"":l.rank})(P.a.createElement(r.a,{disabled:l.rank,placeholder:"升序排列, 越小越靠前"}))),P.a.createElement(Y,z({},G,{label:"新排序值"}),d("newRank",{rules:[{required:!l.rank&&""!==l.rank,message:"请输入排序值!"},{pattern:/^[1-9][0-8]?$/,message:"排序值应在1~98之间!"}],initialValue:""})(P.a.createElement(r.a,{placeholder:"升序排列, 越小越靠前"})))))))}}])&&V(a.prototype,n),i&&V(a,i),t}();t.default=Object(j.connect)(function(e){return{list:e.activityCityInfo.list,search:e.activityCityInfo.search,filter:e.activityCityInfo.filter,pageData:e.activityCityInfo.pageData,selectedData:e.activityCityInfo.selectedData}})(v.a.create()(B))}}]);