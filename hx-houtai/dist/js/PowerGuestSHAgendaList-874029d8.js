(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1547:function(e,t,a){"use strict";a.r(t);a(675);var n=a(676),r=a.n(n),i=(a(1385),a(1386)),l=a.n(i),o=(a(1381),a(1382)),c=a.n(o),u=(a(1383),a(1384)),s=a.n(u),d=(a(247),a(183)),p=a.n(d),m=(a(361),a(20)),g=a.n(m),f=(a(1376),a(1377)),h=a.n(f),y=(a(677),a(362)),b=a.n(y),v=a(0),E=a.n(v),w=a(246),S=(a(1390),a(1391)),O=a.n(S),T=(a(184),a(1378)),k=a.n(T),j=(a(1379),a(1380)),C=a.n(j),I=a(48);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=b.a.Option,A=C.a.Item,x=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=q(this,L(t).call(this,e))).state={previewVisible:!1,loading:!0},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,v["Component"]),a=t,(n=[{key:"agendaAddSubmit",value:function(){var e=this,t=this;this.props.form.validateFields(function(a,n){if(a)return!1;var r=e.props.data.id?"/power5/updateAgenda":"/power5/add/agenda";Object(I.i)("POST",r,{id:e.props.data.id,holdingTime:n.holdingTime,holdingDate:n.holdingDate,hallId:n.hallId,agendaTheme:n.agendaTheme,guestIntroduce:n.guestIntroduce,agendaSeq:n.agendaSeq},function(a){1===a.code&&(e.props.onCancel(),location.reload(),t.setState({loading:!1}))})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.onCancel,r=t.form,i=t.loading,l=t.data,o=t.agendaListType,c=r.getFieldDecorator,u={labelCol:{span:4},wrapperCol:{span:18,offset:1}};return E.a.createElement(h.a,{visible:a,title:"添加/编辑 议程",okText:"确定",onCancel:n,onOk:function(){e.agendaAddSubmit()},confirmLoading:i},E.a.createElement(C.a,null,E.a.createElement(A,_({},u,{label:"论坛"}),c("hallId",{initialValue:l.id?"".concat(l.hallId):"",rules:[{required:!0,message:"请选择议程议程类型！"}]})(E.a.createElement(b.a,null,o.map(function(e){return E.a.createElement(V,{value:"".concat(e.id),key:e.id},e.hallName)})))),E.a.createElement(A,_({},u,{label:"日期"}),c("holdingDate",{initialValue:l.id?l.holdingDate:"",rules:[{required:!0,message:"请选择议程日期！"}]})(E.a.createElement(b.a,{style:{width:120,marginRight:15}},E.a.createElement(V,{value:"8月10日"},"8月10日"),E.a.createElement(V,{value:"8月11日"},"8月11日"),E.a.createElement(V,{value:"8月12日"},"8月12日"),E.a.createElement(V,{value:"8月13日"},"8月13日")))),E.a.createElement(A,_({},u,{label:"时段"}),c("holdingTime",{initialValue:l.id?l.holdingTime:"",rules:[{required:!0,message:"请输入议程时间！"}]})(E.a.createElement(b.a,{style:{width:120,marginRight:15}},E.a.createElement(V,{value:"上午"},"上午"),E.a.createElement(V,{value:"中午"},"中午"),E.a.createElement(V,{value:"下午"},"下午"),E.a.createElement(V,{value:"晚上"},"晚上"),E.a.createElement(V,{value:"全天"},"全天")))),E.a.createElement(A,_({},u,{label:"主题"}),c("agendaTheme",{initialValue:l.id?l.agendaTheme:"",rules:[{required:!0,message:'请输入择议主题"！'}]})(E.a.createElement(k.a,{rows:2,type:"textarea"}))),E.a.createElement(A,_({},u,{label:"嘉宾"}),c("guestIntroduce",{initialValue:l.id?l.guestIntroduce:"",rules:[{required:!1,message:'请输入择议嘉宾"！'}]})(E.a.createElement(k.a,{rows:2,type:"textarea"}))),E.a.createElement(A,_({},u,{className:"collection-create-form_last-form-item",label:"权重"}),c("agendaSeq",{initialValue:l.id?l.agendaSeq:0,rules:[{required:!0,message:'请输入择排序权重"！'}]})(E.a.createElement(O.a,{placeholder:"权重越大排序越靠前"})))))}}])&&D(a.prototype,n),r&&D(a,r),t}(),M=C.a.create()(x),R=(a(1631),a(1632));function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){B(e,t,a[t])})}return e}function F(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var K=b.a.Option,Q=h.a.confirm,U=[],X=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=J(t).call(this),e=!n||"object"!==z(n)&&"function"!=typeof n?G(a):n,B(G(e),"getOrderNum",function(t){e.setState({order:t})}),B(G(e),"showModal",function(){e.setState({data:{visible:!0}})}),B(G(e),"handleCancel",function(){e.setState({data:{visible:!1}})}),B(G(e),"handleChangeDate",function(t){e.setState({dateType:t});var a=e.state.agendaType;e.doSearch(a,t)}),B(G(e),"handleChangeType",function(t){e.setState({agendaType:t});var a=e.state.dateType;e.doSearch(t,a)}),B(G(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),B(G(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),B(G(e),"handleCompile",function(t){e.setState({data:{visible:!0,holdingTime:t.holdingTime,holdingDate:t.holdingDate,id:t.id,hallId:t.hallId,hallName:t.hallName,agendaTheme:t.agendaTheme,guestIntroduce:t.guestIntroduce,agendaSeq:t.agendaSeq}})}),e.state={loading:!0,dateType:"",agendaType:"",data:{visible:!1,holdingTime:"",holdingDate:"",id:"",hallId:"",hallName:"",agendaTheme:"",guestIntroduce:"",agendaSeq:""},previewVisible:!1,previewImage:"",order:1,confirmLoading:!1},e}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,v["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this;this.doSearch("",""),(0,this.props.dispatch)(Object(R.c)({pageSize:40,currentPage:1},function(){e.setState({loading:!1})})),U=[{title:"论坛",key:"hallName",render:function(e){return E.a.createElement("p",null,e.hallName)}},{title:"时间",key:"holdingDate",render:function(e){return E.a.createElement("p",null,e.holdingDate)}},{title:"时段",key:"holdingTime",render:function(e){return e.holdingTime?E.a.createElement("h4",{title:e.holdingTime},e.holdingTime):"无"}},{title:"权重",key:"agendaSeq",render:function(e){return E.a.createElement("p",null,e.agendaSeq)}},{title:"主题与活动",key:"agendaTheme",width:350,render:function(e){return E.a.createElement("p",null,e.agendaTheme)}},{title:"嘉宾",key:"guestIntroduce",width:250,render:function(e){for(var t=E.a.createElement("br",null),a="",n=e.guestIntroduce.split(","),r=0;r<n.length;r++)a=0===r?n[r]:E.a.createElement("span",null,a,t,n[r]);return a}},{title:"操作",key:"action",render:function(t){return E.a.createElement("div",null,E.a.createElement("p",null,E.a.createElement("a",{onClick:function(){e.handleCompile(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#108ee9"}},"编辑")),E.a.createElement("p",{style:{marginTop:10}},E.a.createElement("a",{onClick:function(){return e.delIco(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t,a){var n=this;this.setState({loading:!0});var r={hallId:e,holdingDate:t,pageSize:20,currentPage:a||1};(0,this.props.dispatch)(Object(R.b)(r,function(){n.setState({loading:!1})}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.state.dateType,a=this.state.agendaType;this.doSearch(a,t,e)}},{key:"delIco",value:function(e){var t=this;Q({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id};Object(I.i)("POST","/power5/deleteAgenda",H({},a),function(e){1===e.code?(g.a.success("删除成功"),t.doSearch()):g.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.agendaList,n=t.pageData,i=t.agendaListType;return E.a.createElement("div",{className:"powerGuest-index"},E.a.createElement(c.a,null,E.a.createElement(s.a,null,E.a.createElement("span",null,"日期："),E.a.createElement(b.a,{defaultValue:"",style:{width:120,marginRight:15},onChange:this.handleChangeDate},E.a.createElement(K,{value:""},"全部"),E.a.createElement(K,{value:"8月10日"},"8月10日"),E.a.createElement(K,{value:"8月11日"},"8月11日"),E.a.createElement(K,{value:"8月12日"},"8月12日"),E.a.createElement(K,{value:"8月13日"},"8月13日")),E.a.createElement("span",null,"会场："),E.a.createElement(b.a,{defaultValue:"",style:{width:120,marginRight:15},onChange:this.handleChangeType},E.a.createElement(K,{value:""},"全部"),i.map(function(e){return E.a.createElement(K,{value:"".concat(e.id),key:e.id},e.hallName)})),E.a.createElement(p.a,{type:"primary",onClick:this.showModal},"新增议程"))),E.a.createElement("div",{className:"mt30"},E.a.createElement(r.a,{spinning:this.state.loading,size:"large"},E.a.createElement(l.a,{dataSource:a.map(function(e,t){return H({},e,{key:t})}),columns:U,bordered:!0,pagination:{current:n.page,total:n.recordCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),E.a.createElement(h.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},E.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),this.state.data.visible&&E.a.createElement(M,{loading:this.state.confirmLoading,visible:this.state.data.visible,onCancel:this.handleCancel,data:this.state.data,agendaListType:i}))}}])&&F(a.prototype,n),i&&F(a,i),t}();t.default=Object(w.connect)(function(e){return{agendaList:e.powerSHAgendaList.agendaList,agendaListType:e.powerSHAgendaList.agendaListType,pageData:e.powerSHAgendaList.pageData}})(X)}}]);