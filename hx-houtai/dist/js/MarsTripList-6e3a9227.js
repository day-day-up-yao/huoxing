(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1562:function(e,t,a){"use strict";a.r(t);a(675);var n=a(676),r=a.n(n),i=(a(1385),a(1386)),c=a.n(i),s=(a(1381),a(1382)),o=a.n(s),u=(a(1383),a(1384)),l=a.n(u),p=(a(247),a(183)),f=a.n(p),d=(a(361),a(20)),m=a.n(d),y=(a(1379),a(1380)),h=a.n(y),b=(a(184),a(1378)),v=a.n(b),g=(a(1376),a(1377)),S=a.n(g),O=a(0),E=a.n(O),k=a(246),w=a(10),P=(a(1700),a(1605)),T=a(48),j=a(2);function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){A(e,t,a[t])})}return e}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _=function(e){return{type:j.xb,data:e}},I=function(e){return{type:j.ab.ADD_DATA,data:e}},C=function(e){return{type:j.ab.SET_SEARCH_QUERY,data:e}},D=function(e){return{type:j.ab.SET_FILTER_DATA,data:e}},x=function(e){return{type:j.ab.SET_PAGE_DATA,data:e}};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){L(e,t,a[t])})}return e}function F(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var J=S.a.confirm,U=v.a.TextArea,W={labelCol:{xs:{span:2},sm:{span:4}},wrapperCol:{xs:{span:4},sm:{span:16}}},G=[],Q=h.a.Item,Y=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=R(t).call(this),e=!n||"object"!==M(n)&&"function"!=typeof n?V(a):n,L(V(e),"handleChange",function(t){(0,e.props.dispatch)(D({status:t})),e.setState({newsStatus:t}),e.doSearch("init",{currentPage:1,status:t})}),L(V(e),"cancelModal",function(){var t=e.props.form;e.setState({visible:!1}),t.resetFields()}),e.state={loading:!0,newsStatus:null,editNewsId:"",visible:!1,passwordModal:!1},e}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,O["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.search,n=t.filter;this.doSearch("init",q({},n,{value:a.value})),G=[{title:"城市",key:"city",render:function(t,a){return a&&E.a.createElement("div",{className:"marsTrip-info clearfix"},E.a.createElement("div",null,E.a.createElement("h4",{title:a.city,dangerouslySetInnerHTML:e.createMarkup(Object(T.q)(a.city,30))})))}},{title:"编号 ",dataIndex:"cityNum",key:"cityNum"},{title:"活动时间",key:"activityTime",dataIndex:"activityTime"},{title:"活动地址",dataIndex:"detailAddress",key:"detailAddress"},{title:"报名人数",dataIndex:"personNum",key:"personNum",render:function(e){return e||"暂无"}},{title:"状态",key:"status",render:function(e){return e&&1===e.status?E.a.createElement("span",{className:"news-status"},"正常"):e&&-1===e.status?E.a.createElement("span",{className:"news-status cont-publish"},"封禁"):E.a.createElement("span",{className:"news-status pre-publish"},"暂无")}},{title:"操作",key:"action",render:function(t){return E.a.createElement("div",{className:"btns"},E.a.createElement("a",{onClick:function(){w.hashHistory.push({pathname:"/registrant-list",query:{id:t.cityNum}})},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#64a5f8"}},"报名详情"),E.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){e.updateAccount(t)},style:{background:"#108ee9"}},"编辑"),E.a.createElement("a",{onClick:function(){return e.delMarsTrip(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除"))}}]}},{key:"componentWillUnmount",value:function(){(0,this.props.dispatch)(x({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"submitAccount",value:function(){var e=this,t=this.props,a=t.dispatch,n=t.form,r=t.selectedData,i=this;n.validateFields(function(t,c){if(t)return!1;var s,o;delete c.confirm,r.cityNum?Object(T.i)("post","/marschinatrip/updatecity",{cityNum:r.cityNum,city:c.city,detailAddress:c.detailAddress,activityTime:c.activityTime},function(t){1===t.code?(m.a.success("操作成功!"),e.setState({visible:!1}),n.resetFields(),i.doSearch("init")):m.a.success(t.msg)}):a((s=q({},c),o=function(){e.setState({visible:!1}),n.resetFields(),e.doSearch("init")},function(e){Object(T.i)("post","/marschinatrip/addcity",N({},s),function(e){1===e.code?(m.a.success("添加成功！"),o&&o()):m.a.error(e.msg)})}))})}},{key:"updateAccount",value:function(e){this.props.dispatch(_(e)),this.setState({visible:!0})}},{key:"doSearch",value:function(e,t){var a=this,n=this.props,r=n.dispatch,i=n.pageData,c=n.search,s=q({},n.filter,{value:c.value,pageSize:20,currentPage:i.currPage});r(function(e,t,a){return function(n){var r="init"===e?"/marschinatrip/searchcitypeople":"/post/search";Object(T.i)("get",r,t?N({},t):{},function(e){if(1===e.code){var t=e.obj;n(I({list:t.inforList})),n(x({totalCount:t.recordCount,pageSize:t.pageSize,currPage:t.currentPage})),a&&a(t)}else m.a.error(e.msg)})}}(e,s=q({},s,t),function(){a.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(C({type:"init"})),e(x({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,a=t.dispatch,n=t.search,r=t.filter;a(x({currPage:e})),this.doSearch(n.type,q({currentPage:e},r))}},{key:"delMarsTrip",value:function(e){var t=this.props.dispatch,a=this;J({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={cityNum:e.cityNum};Object(T.i)("POST","/marschinatrip/delcity",q({},n),function(e){1===e.code?(m.a.success("删除成功"),a.doSearch("init"),t(C({type:"init"}))):m.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,a=this;J({title:"提示",content:"确认要".concat(1===e.status?"封禁":"解封","用户吗 ?"),onOk:function(){var n={passportId:e.passportId,status:1===e.status?-1:1};Object(T.i)("POST","/liveaccount/status",q({},n),function(e){1===e.code?(m.a.success("操作成功"),a.doSearch("init"),t(C({type:"init"}))):m.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.pageData,i=t.dispatch,s=t.form,u=t.selectedData,p=s.getFieldDecorator;return E.a.createElement("div",{className:"marsTrip-index"},E.a.createElement(o.a,null,E.a.createElement(l.a,null,E.a.createElement(f.a,{type:"primary",style:{margin:0},onClick:function(){e.setState({visible:!0}),i(_({cityNum:""}))}},E.a.createElement(P.a,{type:"icon-post-send"}),"新增城市"))),E.a.createElement("div",{className:"mt30"},E.a.createElement(r.a,{spinning:this.state.loading,size:"large"},E.a.createElement(c.a,{dataSource:a.map(function(e,t){return q({},e,{key:t})}),columns:G,bordered:!0,pagination:{current:n.currPage,total:n.totalCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),this.state.visible&&E.a.createElement(S.a,{title:"添加/修改城市",visible:this.state.visible,onOk:function(){return e.submitAccount()},onCancel:this.cancelModal},E.a.createElement(h.a,null,E.a.createElement(Q,z({},W,{label:"城市"}),p("city",{rules:[{required:!0,message:"请输入城市名!"}],initialValue:""===u.cityNum?"":u.city})(E.a.createElement(v.a,{placeholder:"请输入城市名"}))),E.a.createElement(Q,z({},W,{label:"城市编号"}),p("cityNum",{rules:[{required:!0,message:"请输入城市编号!"},{pattern:/^[1-9]\d*$/,message:"请输入正确的城市编号!"}],initialValue:""===u.cityNum?"":u.cityNum})(E.a.createElement(v.a,{disabled:""!==u.cityNum,placeholder:"城市编号, 添加后编号不可修改"}))),E.a.createElement(Q,z({},W,{label:"活动时间: "}),p("activityTime",{rules:[{required:!0,message:"请设置活动时间！"}],initialValue:""===u.cityNum?"":u.activityTime})(E.a.createElement(v.a,{placeholder:"请输入活动时间"}))),E.a.createElement(Q,z({},W,{label:"活动地点"}),p("detailAddress",{rules:[{required:!0,message:"请确认活动地点!"}],initialValue:""===u.cityNum?"":u.detailAddress})(E.a.createElement(U,{placeholder:"请输入活动地点"}))))))}}])&&F(a.prototype,n),i&&F(a,i),t}();t.default=Object(k.connect)(function(e){return{marsTripInfo:e.marsTripInfo,list:e.marsTripInfo.list,search:e.marsTripInfo.search,filter:e.marsTripInfo.filter,pageData:e.marsTripInfo.pageData,selectedData:e.marsTripInfo.selectedData}})(h.a.create()(Y))}}]);