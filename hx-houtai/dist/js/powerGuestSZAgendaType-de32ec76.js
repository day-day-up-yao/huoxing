(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1558:function(e,t,n){"use strict";n.r(t);n(675);var a=n(676),r=n.n(a),o=(n(1385),n(1386)),i=n.n(o),l=(n(1381),n(1382)),c=n.n(l),u=(n(1383),n(1384)),s=n.n(u),f=(n(247),n(183)),p=n.n(f),d=(n(361),n(20)),m=n.n(d),b=(n(1376),n(1377)),y=n.n(b),h=n(0),g=n.n(h),v=n(246),O=(n(184),n(1378)),w=n.n(O),S=(n(1379),n(1380)),j=n.n(S),E=n(48);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=j.a.Item,D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,N(t).call(this,e))).state={previewVisible:!1,loading:!0},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,h["Component"]),n=t,(a=[{key:"agendaSubmit",value:function(){var e=this,t=this;this.props.form.validateFields(function(n,a){if(n)return!1;var r=e.props.data.id?"/power6/updateHall":"/power6/addHall";Object(E.i)("POST",r,{id:e.props.data.id,hallName:a.hallName},function(n){1===n.code&&(e.props.onCancel(),location.reload(),t.setState({loading:!1}))})})}},{key:"render",value:function(){var e=this,t=this.props,n=t.visible,a=t.onCancel,r=t.form,o=t.loading,i=t.data,l=r.getFieldDecorator;return g.a.createElement(y.a,{visible:n,title:"添加/编辑 议程分类",okText:"确定",onCancel:a,onOk:function(){e.agendaSubmit()},confirmLoading:o},g.a.createElement(j.a,null,g.a.createElement(L,C({},{labelCol:{span:4},wrapperCol:{span:18,offset:1}},{label:"议程名称"}),l("hallName",{initialValue:i.id?i.hallName:"",rules:[{required:!0,message:"请输入议程名称！"}]})(g.a.createElement(w.a,null)))))}}])&&P(n.prototype,a),r&&P(n,r),t}(),F=j.a.create()(D),I=(n(1633),n(1634));function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){G(e,t,n[t])})}return e}function M(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=y.a.confirm,A=[],J=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=R(t).call(this),e=!a||"object"!==x(a)&&"function"!=typeof a?U(n):a,G(U(e),"showModal",function(){e.setState({data:{visible:!0}})}),G(U(e),"handleCancel",function(){e.setState({data:{visible:!1}})}),G(U(e),"handleCreate",function(){var t=e.form;t.setFieldsValue({imgUrl:e.state.data.imgUrl}),t.validateFields(function(n,a){n||(e.setState({confirmLoading:!0}),a.category=1,Object(E.i)("POST","/commonGuest/addGuest",a,function(n){e.setState({confirmLoading:!1}),1===n.code?(m.a.success("添加成功！"),t.resetFields(),e.setState({data:{visible:!1}}),e.doSearch("init")):m.a.error(n.msg)}))})}),G(U(e),"saveFormRef",function(t){e.form=t}),G(U(e),"handleCompile",function(t){e.setState({data:{visible:!0,id:t.id,hallName:t.hallName}})}),e.state={loading:!0,type:null,data:{visible:!1,id:"",hallName:""},imgUrl:"",previewVisible:!1,previewImage:"",order:1,confirmLoading:!1},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,h["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){var e=this;this.doSearch(),A=[{title:"会场 ",key:"hallName",render:function(e){return g.a.createElement("p",null,e.hallName)}},{title:"操作",key:"action",render:function(t){return g.a.createElement("div",null,g.a.createElement("p",null,g.a.createElement("a",{onClick:function(){e.handleCompile(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#108ee9"}},"编辑")),g.a.createElement("p",{style:{marginTop:10}},g.a.createElement("a",{onClick:function(){return e.delIco(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(){var e=this;this.setState({loading:!0});var t=this.props,n=t.dispatch,a={pageSize:40,currentPage:t.pageData.page};n(Object(I.c)(a,function(){e.setState({loading:!1})}))}},{key:"delIco",value:function(e){var t=this;H({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={id:e.id};Object(E.i)("POST","/power6/deleteHall",z({},n),function(e){1===e.code?(m.a.success("删除成功"),t.doSearch()):m.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.agendaListType,a=t.pageData;return g.a.createElement("div",{className:"powerGuest-index"},g.a.createElement(c.a,null,g.a.createElement(s.a,null,g.a.createElement(p.a,{type:"primary",onClick:this.showModal},"新增议程分类"))),g.a.createElement("div",{className:"mt30"},g.a.createElement(r.a,{spinning:this.state.loading,size:"large"},g.a.createElement(i.a,{dataSource:n.map(function(e,t){return z({},e,{key:t})}),columns:A,bordered:!0,pagination:{current:a.page,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))),this.state.data.visible&&g.a.createElement(F,{loading:this.state.confirmLoading,getImgData:function(t){e.getImgUrl(t)},ref:this.saveFormRef,visible:this.state.data.visible,onCancel:this.handleCancel,onCreate:this.handleCreate,data:this.state.data}))}}])&&M(n.prototype,a),o&&M(n,o),t}();t.default=Object(v.connect)(function(e){return{agendaListType:e.powerSZAgendaList.agendaListType,pageData:e.powerSZAgendaList.pageData}})(J)}}]);