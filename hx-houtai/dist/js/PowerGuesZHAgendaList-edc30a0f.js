(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1581:function(e,t,a){"use strict";a.r(t);a(675);var n=a(676),r=a.n(n),i=(a(1385),a(1386)),o=a.n(i),l=(a(1381),a(1382)),c=a.n(l),u=(a(1383),a(1384)),d=a.n(u),s=(a(247),a(183)),p=a.n(s),g=(a(361),a(20)),m=a.n(g),f=(a(1376),a(1377)),h=a.n(f),y=(a(677),a(362)),b=a.n(y),v=a(0),w=a.n(v),E=a(246),S=(a(1390),a(1391)),T=a.n(S),O=(a(184),a(1378)),k=a.n(O),j=(a(678),a(363)),C=a.n(j),P=(a(1379),a(1380)),_=a.n(P),D=a(48);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function I(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=b.a.Option,M=_.a.Item,z=C.a.Group,R=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=L(this,V(t).call(this,e))).state={previewVisible:!1,loading:!0},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,v["Component"]),a=t,(n=[{key:"agendaAddSubmit",value:function(){var e=this,t=this;this.props.form.validateFields(function(a,n){if(a)return!1;var r=e.props.data.id?"/power3/agenda/update":"/power3/agenda/add";Object(D.i)("POST",r,{id:e.props.data.id,holdingTime:n.holdingTime,holdingDate:n.holdingDate,agendaTheme:n.agendaTheme,guestIntroduce:n.guestIntroduce,agendaSeq:n.agendaSeq,agendaType:n.agendaType,guestName:n.guestName,holdingApm:n.holdingApm},function(a){1===a.code&&(e.props.onCancel(),location.reload(),t.setState({loading:!1}))})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.onCancel,r=t.form,i=t.loading,o=t.data,l=r.getFieldDecorator,c={labelCol:{span:4},wrapperCol:{span:18,offset:1}};return w.a.createElement(h.a,{visible:a,title:"添加/编辑 议程",okText:"确定",onCancel:n,onOk:function(){e.agendaAddSubmit()},confirmLoading:i},w.a.createElement(_.a,null,w.a.createElement(M,N({},c,{label:"日期"}),l("holdingDate",{initialValue:o.id?"".concat(o.holdingDate):"",rules:[{required:!0,message:"请选择议程日期！"}]})(w.a.createElement(b.a,{style:{width:120,marginRight:15}},[{id:1,date:"12月15日"},{id:2,date:"12月16日"},{id:3,date:"12月17日"}].map(function(e){return w.a.createElement(x,{value:"".concat(e.date),key:e.id},e.date)})))),w.a.createElement(M,N({},c,{label:"上/下午"}),l("holdingApm",{initialValue:o.id?o.holdingApm:"",rules:[{required:!0,message:"请选择议程时间！"}]})(w.a.createElement(z,null,w.a.createElement(C.a,{value:"上午"},"上午"),w.a.createElement(C.a,{value:"下午"},"下午")))),w.a.createElement(M,N({},c,{label:"时间"}),l("holdingTime",{initialValue:o.id?"".concat(o.holdingTime):"",rules:[{required:!0,message:"请选择议程议时间！"}]})(w.a.createElement(k.a,{rows:2,type:"text"}))),w.a.createElement(M,N({},c,{label:"议程类型"}),l("agendaType",{initialValue:o.id?"".concat(o.agendaType):"",rules:[{required:!1,message:"请选择议程议程类型！"}]})(w.a.createElement(k.a,{rows:2,type:"text"}))),w.a.createElement(M,N({},c,{label:"主题"}),l("agendaTheme",{initialValue:o.id?o.agendaTheme:"",rules:[{required:!0,message:'请输入择议主题"！'}]})(w.a.createElement(k.a,{rows:2,type:"textarea"}))),w.a.createElement(M,N({},c,{label:"嘉宾"}),l("guestName",{initialValue:o.id?o.guestName:"",rules:[{required:!0,message:'请输入择议嘉宾"！'}]})(w.a.createElement(k.a,{rows:2,type:"textarea"}))),w.a.createElement(M,N({},c,{className:"collection-create-form_last-form-item",label:"排序权重"}),l("agendaSeq",{initialValue:o.id?o.agendaSeq:0,rules:[{required:!0,message:'请输入择排序权重"！'}]})(w.a.createElement(T.a,{placeholder:"权重越大排序越靠前"})))))}}])&&I(a.prototype,n),r&&I(a,r),t}(),H=_.a.create()(R),Z=(a(1637),a(1638));function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){Q(e,t,a[t])})}return e}function J(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var U=b.a.Option,X=h.a.confirm,Y=[],$=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=W(t).call(this),e=!n||"object"!==F(n)&&"function"!=typeof n?B(a):n,Q(B(e),"getOrderNum",function(t){e.setState({order:t})}),Q(B(e),"showModal",function(){e.setState({data:{visible:!0}})}),Q(B(e),"handleCancel",function(){e.setState({data:{visible:!1}})}),Q(B(e),"handleChangeDate",function(t){e.setState({dateType:t});var a=e.state.agendaType;e.doSearch(a,t)}),Q(B(e),"handleChangeType",function(t){e.setState({agendaType:t});var a=e.state.dateType;e.doSearch(t,a)}),Q(B(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),Q(B(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),Q(B(e),"handleCompile",function(t){e.setState({data:{visible:!0,holdingTime:t.holdingTime,holdingDate:t.holdingDate,agendaType:t.agendaType,id:t.id,guestName:t.guestName,holdingApm:t.holdingApm,agendaTheme:t.agendaTheme,guestIntroduce:t.guestIntroduce,agendaSeq:t.agendaSeq}})}),e.state={loading:!0,dateType:"",agendaType:"",data:{visible:!1,holdingTime:"",holdingDate:"",id:"",hallId:"",hallName:"",agendaTheme:"",guestIntroduce:"",agendaSeq:""},previewVisible:!1,previewImage:"",order:1,confirmLoading:!1},e}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,v["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this;this.doSearch("",""),(0,this.props.dispatch)(Object(Z.d)({pageSize:40,currentPage:1},function(){e.setState({loading:!1})})),Y=[{title:"日期",key:"holdingDate",render:function(e){return w.a.createElement("p",null,e.holdingDate)}},{title:"时间",key:"holdingTime",render:function(e){return e.holdingTime?w.a.createElement("h4",{title:e.holdingTime},e.holdingTime):"无"}},{title:"类型",key:"agendaType",render:function(e){return w.a.createElement("p",null,e.agendaType)}},{title:"排序",key:"agendaSeq",render:function(e){return w.a.createElement("p",null,e.agendaSeq)}},{title:"主题",key:"agendaTheme",width:350,render:function(e){return w.a.createElement("p",null,e.agendaTheme)}},{title:"嘉宾",key:"guestName",width:250,render:function(e){return w.a.createElement("p",null,e.guestName)}},{title:"操作",key:"action",render:function(t){return w.a.createElement("div",null,w.a.createElement("p",null,w.a.createElement("a",{onClick:function(){e.handleCompile(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#108ee9"}},"编辑")),w.a.createElement("p",{style:{marginTop:10}},w.a.createElement("a",{onClick:function(){return e.delIco(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t,a){var n=this;this.setState({loading:!0});var r={holdingDate:t,pageSize:20,currentPage:a||1};(0,this.props.dispatch)(Object(Z.c)(r,function(){n.setState({loading:!1})}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.state.dateType,a=this.state.agendaType;this.doSearch(a,t,e)}},{key:"delIco",value:function(e){var t=this;X({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id};Object(D.i)("POST","/power3/agenda/delete",G({},a),function(e){1===e.code?(m.a.success("删除成功"),t.doSearch()):m.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.agendaList,n=t.pageData,i=t.agendaListType;return w.a.createElement("div",{className:"powerGuest-index"},w.a.createElement(c.a,null,w.a.createElement(d.a,null,w.a.createElement("span",null,"日期："),w.a.createElement(b.a,{defaultValue:"",style:{width:120,marginRight:15},onChange:this.handleChangeDate},w.a.createElement(U,{value:""},"全部"),w.a.createElement(U,{value:"12月15日"},"12月15日"),w.a.createElement(U,{value:"12月16日"},"12月16日"),w.a.createElement(U,{value:"12月17日"},"12月17日")),w.a.createElement(p.a,{type:"primary",onClick:this.showModal},"新增议程"))),w.a.createElement("div",{className:"mt30"},w.a.createElement(r.a,{spinning:this.state.loading,size:"large"},w.a.createElement(o.a,{dataSource:a.map(function(e,t){return G({},e,{key:t})}),columns:Y,bordered:!0,pagination:{current:n.page,total:n.recordCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),w.a.createElement(h.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},w.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),this.state.data.visible&&w.a.createElement(H,{loading:this.state.confirmLoading,visible:this.state.data.visible,onCancel:this.handleCancel,data:this.state.data,agendaListType:i}))}}])&&J(a.prototype,n),i&&J(a,i),t}();t.default=Object(E.connect)(function(e){return{agendaList:e.powerZHAgendaList.agendaList,agendaListType:e.powerZHAgendaList.agendaListType,pageData:e.powerZHAgendaList.pageData}})($)}}]);