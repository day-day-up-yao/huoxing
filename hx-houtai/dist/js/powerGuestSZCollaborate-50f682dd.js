(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1543:function(e,t,a){"use strict";a.r(t);a(675);var n=a(676),r=a.n(n),o=(a(1385),a(1386)),i=a.n(o),l=(a(1381),a(1382)),c=a.n(l),s=(a(1383),a(1384)),u=a.n(s),p=(a(247),a(183)),m=a.n(p),f=(a(361),a(20)),y=a.n(f),d=(a(1376),a(1377)),g=a.n(d),h=(a(677),a(362)),b=a.n(h),v=a(0),E=a.n(v),w=a(246),S=(a(1388),a(1389)),O=a.n(S),C=(a(1390),a(1391)),k=a.n(C),T=(a(184),a(1378)),j=a.n(T),P=(a(1387),a(50)),I=a.n(P),U=(a(678),a(363)),_=a.n(U),L=(a(1379),a(1380)),q=a.n(L),V=a(48);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var R=q.a.Item,A=_.a.Group,G=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=D(t).call(this,e),a=!r||"object"!==x(r)&&"function"!=typeof r?z(n):r,F(z(a),"handleCancel",function(){return a.setState({previewVisible:!1})}),F(z(a),"handlePreview",function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),F(z(a),"handleChange",function(e){var t=e.file,n=e.fileList;a.setState({fileList:n}),"removed"===t.status&&a.setState({imgUrl:""}),t.response&&(1===t.response.code&&"done"===t.status&&(a.setState({imgUrl:t.response.obj}),a.props.getImgData(t.response.obj)),"error"===t.status&&(y.a.error("网络错误，上传失败！"),a.setState({imgUrl:"",fileList:[]})))}),a.state={previewVisible:!1,previewImage:"",fileList:[],imgUrl:"",description:"",brief:"",loading:!0,userType:"1"},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,v["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=[{uid:"-1",name:"xxx.png",status:"done",url:this.props.data.companyImageUrl}];this.setState({fileList:this.props.data.companyImageUrl?e:[]})}},{key:"collaborateSubmit",value:function(){var e=this,t=this;this.props.form.validateFields(function(a,n){if(a)return!1;var r=e.state.imgUrl||e.props.data.companyImageUrl,o=e.props.data.id?"/power6/updateCooperation":"/power6/addCooperation";Object(V.i)("POST",o,{id:e.props.data.id,title:n.title,companyImageUrl:r,companySeq:n.companySeq,companyType:n.companyType},function(a){1===a.code?(e.props.onCancel(),location.reload(),t.setState({loading:!1})):y.a.error(a.msg)})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.onCancel,r=t.form,o=t.loading,i=t.data,l=r.getFieldDecorator,c={labelCol:{span:4},wrapperCol:{span:18,offset:1}},s=E.a.createElement("div",null,E.a.createElement(I.a,{type:"plus"}),E.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return E.a.createElement(g.a,{visible:a,title:"添加/编辑 合作方",okText:"确定",onCancel:n,onOk:function(){e.collaborateSubmit()},confirmLoading:o},E.a.createElement(q.a,null,E.a.createElement(R,N({},c,{label:"标题"}),l("title",{initialValue:i.id?i.title:"",rules:[{required:!0,message:"请输入标题！"}]})(E.a.createElement(j.a,null))),E.a.createElement(R,N({},c,{label:"选择类型"}),l("companyType",{initialValue:i.id?i.companyType.toString():"",rules:[{required:!0,message:"请选择类型！"}]})(E.a.createElement(A,null,E.a.createElement(_.a,{value:"0"},"主办方"),E.a.createElement(_.a,{value:"1"},"联合主办"),E.a.createElement(_.a,{value:"5"},"首席战略合作"),E.a.createElement(_.a,{value:"7"},"合作伙伴"),E.a.createElement(_.a,{value:"6"},"MarsBit生态支持"),E.a.createElement(_.a,{value:"3"},"首席合作媒体"),E.a.createElement(_.a,{value:"2"},"战略合作媒体"),E.a.createElement(_.a,{value:"4"},"战略合作社区")))),E.a.createElement(R,N({},c,{className:"collection-create-form_last-form-item",label:"排序权重"}),l("companySeq",{initialValue:i.id?i.companySeq:0,rules:[{required:!0,message:"请输入排序权重！"}]})(E.a.createElement(k.a,{placeholder:"权重越大排序越靠前"}))),E.a.createElement(R,N({},c,{label:"头像",className:"upload-div"}),E.a.createElement("div",{className:"dropbox"},l("companyImageUrl",{initialValue:i.id?i.companyImageUrl:"",rules:[{required:!0,message:"请上传嘉宾头像！"}]})(E.a.createElement(O.a,{headers:{"Sign-Param":Object(V.A)()},action:"".concat(V.a,"/picture/upload"),name:"uploadFile",data:{type:"news"},listType:"picture-card",fileList:this.state.fileList,onPreview:this.handlePreview,onChange:this.handleChange},this.state.fileList.length>=1?null:s)),E.a.createElement(g.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},E.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),E.a.createElement("span",{className:"cover-img-tip",style:{display:"inline-block",marginTop:"70px",position:"absolute"}},"用于直播页面头像展示, 长宽比例: ",E.a.createElement("font",{style:{color:"red"}},"1 : 1"))))))}}])&&M(a.prototype,n),r&&M(a,r),t}(),J=q.a.create()(G),W=(a(1633),a(1634));function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){$(e,t,a[t])})}return e}function K(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ee=b.a.Option,te=g.a.confirm,ae=[],ne=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=Q(t).call(this),e=!n||"object"!==Z(n)&&"function"!=typeof n?X(a):n,$(X(e),"getOrderNum",function(t){e.setState({order:t})}),$(X(e),"showModal",function(){e.setState({data:{visible:!0}})}),$(X(e),"handleCancel",function(){e.setState({data:{visible:!1}})}),$(X(e),"handleChange",function(t){e.setState({changeType:t}),e.doSearch(t,1)}),$(X(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),$(X(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),$(X(e),"getImgUrl",function(t){e.setState({imgUrl:t})}),$(X(e),"handleCompile",function(t){e.setState({data:{visible:!0,id:t.id,title:t.title,companyImageUrl:t.companyImageUrl,companySeq:t.companySeq,companyType:t.companyType}})}),e.state={loading:!0,changeType:"",data:{visible:!1,id:"",title:"",companyImageUrl:"",companySeq:"",companyType:""},imgUrl:"",previewVisible:!1,previewImage:"",order:1,confirmLoading:!1},e}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,v["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this;this.doSearch("",1),ae=[{title:"标题",key:"title",render:function(e){return E.a.createElement("p",null,e.title)}},{title:"所属分类",key:"companyType",render:function(e){var t="";return 0===e.companyType?t="主办方":1===e.companyType?t="联合主办":7===e.companyType?t="合作伙伴":2===e.companyType?t="战略合作媒体":3===e.companyType?t="首席合作媒体":4===e.companyType?t="战略合作社区":5===e.companyType?t="首席战略合作":6===e.companyType&&(t="MarsBit生态支持"),E.a.createElement("h4",{title:e.companyType},t)}},{title:"图片 ",key:"companyImageUrl",render:function(t){return E.a.createElement("img",{className:"shrinkPic",key:t,src:t.companyImageUrl,onClick:e.handlePreview})}},{title:"排序",key:"companySeq",render:function(e){return E.a.createElement("p",null,e.companySeq)}},{title:"操作",key:"action",render:function(t){return E.a.createElement("div",null,E.a.createElement("p",null,E.a.createElement("a",{onClick:function(){e.handleCompile(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#108ee9"}},"编辑")),E.a.createElement("p",{style:{marginTop:10}},E.a.createElement("a",{onClick:function(){return e.delIco(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t){var a=this;this.setState({loading:!0});var n=this.props.dispatch,r={companyType:e,pageSize:20,currentPage:t};r=H({},r),n(Object(W.a)(r,function(){a.setState({loading:!1})}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.state.changeType;this.doSearch(t,e)}},{key:"delIco",value:function(e){var t=this;te({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id};Object(V.i)("POST","/power6/deleteCooperation",H({},a),function(e){1===e.code?(y.a.success("删除成功"),t.doSearch(t.state.changeType,t.props.pageData.page)):y.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.cooperationList,n=t.pageData;return E.a.createElement("div",{className:"powerGuest-index"},E.a.createElement(c.a,null,E.a.createElement(u.a,null,E.a.createElement("span",null,"选择类型："),E.a.createElement(b.a,{defaultValue:"",style:{width:120,marginRight:15},onChange:this.handleChange},E.a.createElement(ee,{value:""},"全部"),E.a.createElement(ee,{value:"0"},"主办方"),E.a.createElement(ee,{value:"1"},"联合主办"),E.a.createElement(ee,{value:"5"},"首席战略合作"),E.a.createElement(ee,{value:"7"},"合作伙伴"),E.a.createElement(ee,{value:"6"},"MarsBit生态支持"),E.a.createElement(ee,{value:"3"},"首席合作媒体"),E.a.createElement(ee,{value:"2"},"战略合作媒体"),E.a.createElement(ee,{value:"4"},"战略合作社区")),E.a.createElement(m.a,{type:"primary",onClick:this.showModal},"新增合作方"))),E.a.createElement("div",{className:"mt30"},E.a.createElement(r.a,{spinning:this.state.loading,size:"large"},E.a.createElement(i.a,{dataSource:a.map(function(e,t){return H({},e,{key:t})}),columns:ae,bordered:!0,pagination:{current:n.page,total:n.recordCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),E.a.createElement(g.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},E.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),this.state.data.visible&&E.a.createElement(J,{loading:this.state.confirmLoading,visible:this.state.data.visible,onCancel:this.handleCancel,data:this.state.data,getImgData:function(t){e.getImgUrl(t)}}))}}])&&K(a.prototype,n),o&&K(a,o),t}();t.default=Object(w.connect)(function(e){return{cooperationList:e.powerSZCooperation.cooperationList,pageData:e.powerSZCooperation.pageData}})(ne)}}]);