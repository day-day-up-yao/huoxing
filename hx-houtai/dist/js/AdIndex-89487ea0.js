(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1444:function(e,t,a){"use strict";a.r(t);a(1390);var n=a(1391),r=a.n(n),c=(a(675),a(676)),i=a.n(c),l=(a(1385),a(1386)),s=a.n(l),o=(a(1381),a(1382)),u=a.n(o),d=(a(1383),a(1384)),m=a.n(d),p=(a(247),a(183)),f=a.n(p),h=(a(184),a(1378)),b=a.n(h),y=(a(361),a(20)),g=a.n(y),v=(a(677),a(362)),E=a.n(v),k=(a(1379),a(1380)),O=a.n(k),S=(a(1376),a(1377)),P=a.n(S),w=a(0),j=a.n(w),N=a(246),C=(a(1626),a(10)),I=a(1612),T=a(48);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){W(e,t,a[t])})}return e}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var q=P.a.confirm,B=O.a.Item,L=E.a.Option,U={labelCol:{sm:{span:6}},wrapperCol:{sm:{span:16}}},H=[],F=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=V(t).call(this),e=!n||"object"!==_(n)&&"function"!=typeof n?A(a):n,W(A(e),"handleChange",function(t){(0,e.props.dispatch)(Object(I.d)({adPcPlace:t})),e.setState({adStatus:t}),e.doSearch("init",{currentPage:1,adPlace:t})}),W(A(e),"handleStatusChange",function(t){(0,e.props.dispatch)(Object(I.d)({pcStatus:t})),e.doSearch("init",{currentPage:1,status:t})}),W(A(e),"incAd",function(){C.hashHistory.push("/ad-edit")}),W(A(e),"handleOk",function(t){e.setState({visible:!1})}),W(A(e),"handleCancel",function(t){e.setState({visible:!1})}),W(A(e),"cancelUpdateModal",function(t){e.setState({updateVisible:!1})}),W(A(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),W(A(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),W(A(e),"setNumber",function(t){e.setState({number:t})}),e.state={loading:!0,adStatus:null,visible:!1,previewVisible:!1,updateVisible:!1,previewImage:"",number:1,advertlist:[]},e}var a,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,w["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.search,n=t.filter;this.doSearch(a.type?a.type:"init",{adPlace:n.adPcPlace}),H=[{title:"广告标题",width:170,key:"remake",render:function(t,a){return j.a.createElement("div",{className:"ad-info clearfix"},j.a.createElement("div",null,j.a.createElement("h4",{title:a.remake,dangerouslySetInnerHTML:e.createMarkup(a.remake?Object(T.q)(a.remake,30):"暂无")})))}},{title:"类型",key:"status",render:function(e){return e.useType?1===e.useType?j.a.createElement("span",{className:"banner-status link"},"广告"):2===e.useType?j.a.createElement("span",{className:"banner-status will-publish"},"自有链接"):3===e.useType?j.a.createElement("span",{className:"banner-status news-detail"},"新闻详情"):4===e.useType?j.a.createElement("span",{className:"banner-status news"},"新闻频道"):5===e.useType?j.a.createElement("span",{className:"banner-status authorInfo"},"专题"):6===e.useType?j.a.createElement("span",{className:"banner-status ad"},"关键字/标签"):j.a.createElement("span",{className:"banner-status no"},"暂无"):j.a.createElement("span",{className:"banner-status no"},"暂无")}},{title:"广告图",width:100,key:"imgSrc",render:function(t){return j.a.createElement("div",{className:"shrinkPic",key:t.id,style:{background:"url(".concat(t.mImgSrc?t.mImgSrc:t.pcImgSrc,") no-repeat center / cover")},src:t.mImgSrc?t.mImgSrc:t.pcImgSrc,onClick:e.handlePreview})}},{title:"广告位置",dataIndex:"adPlace",key:"adPlace",render:function(t){return e.adPosition(t)}},{title:"广告链接 ",dataIndex:"url",key:"url",render:function(e,t){return j.a.createElement("a",{href:t.url,target:"_blank",title:t.url},t.url?Object(T.q)(t.url,30):"暂无")}},{title:"权重",key:"topOrder",render:function(t){return j.a.createElement("p",null,3!==parseInt(e.adPosition(t))&&12!==parseInt(e.adPosition(t))?t.topOrder:t.weight)}},{title:"更新时间",key:"updateTime",render:function(e){return Object(T.w)(e.updateTime)}},{title:"查看/修改",key:"option",render:function(t){return j.a.createElement("div",null,j.a.createElement("p",{style:{marginBottom:10}},j.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){e.detailModal(t)},style:{background:"#2b465f"}},"查看")),j.a.createElement("p",null,j.a.createElement(C.Link,{className:"mr10 opt-btn",to:{pathname:"/ad-edit",query:{id:t.id}},style:{background:"#108ee9"}},"编辑")))}},{title:"操作",key:"action",render:function(t){return j.a.createElement("div",null,j.a.createElement("p",{style:{marginBottom:10}},j.a.createElement("a",{className:"mr10 opt-btn",href:"javascript:void(0)",onClick:function(){return e._isPublish(t)},style:{background:"#00a854"}},1===t.status?"撤回":"发布")),j.a.createElement("p",null,j.a.createElement("a",{onClick:function(){return e.delAd(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(I.f)({type:"init",nickName:"",title:""})),e(Object(I.e)({pageSize:20,totalCount:0})),e(Object(I.c)({}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"adPosition",value:function(e){var t="";return T.N.map(function(a,n){parseInt(a.value)===e&&(t=a.label)}),t}},{key:"doSearch",value:function(e,t){var a=this;this.setState({loading:!0});var n=this.props,r=n.dispatch,c=n.pageData,i=n.search,l=n.filter,s={search:i.search,status:l.pcStatus||"",adPlace:l.adPcPlace,type:1,pageSize:20,currentPage:c.currPage};s=M({},s,t),r(Object(I.b)(e,s,function(){a.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(Object(I.e)({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,a=t.dispatch,n=t.search,r=t.filter;a(Object(I.e)({currPage:e})),this.doSearch(n.type,{currentPage:e,adPlace:r.adPcPlace,status:r.pcStatus})}},{key:"delAd",value:function(e){var t=this.props.dispatch,a=this;q({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={id:e.id,status:0};Object(T.i)("POST","/ad/status",M({},n),function(e){1===e.code?(g.a.success("删除成功"),a.doSearch("init"),t(Object(I.f)({type:"init"}))):g.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,a=this;q({title:"提示",content:"确认要".concat(2===e.status?"发表":"撤回广告","吗 ?"),onOk:function(){var n={id:e.id,status:2===e.status?1:2};Object(T.i)("POST","/ad/status",M({},n),function(n){1===n.code?(g.a.success("".concat(2===e.status?"发表":"撤回到草稿箱","成功")),a.doSearch("init"),t(Object(I.f)({type:"init"}))):g.a.error(n.msg)})}})}},{key:"_forbidcomment",value:function(e){var t=this,a=this.props.dispatch,n={id:e.id,operate:parseInt(e.forbidComment)?"0":"1"};Object(T.i)("post","/ad/forbidcomment",n,function(e){200===e.status?(t.doSearch("init"),a(Object(I.f)({type:"init"}))):g.a.error(e.msg)})}},{key:"_isTop",value:function(e){var t=this,a=this.props.dispatch,n={id:e.id,recommend:1===e.recommend?0:1};Object(T.i)("post","/ad/recommend",n,function(e){1===e.code?(t.doSearch("init"),a(Object(I.f)({type:"init"}))):g.a.error(e.msg)})}},{key:"detailModal",value:function(e){this.setState({visible:!0}),(0,this.props.dispatch)(Object(I.c)(e))}},{key:"submitAccount",value:function(){var e=this.props,t=e.form,a=e.selectedData,n=this;t.validateFields(function(e,t){if(e)return!1;Object(T.i)("post","/ad/setshowposition",{id:a.id,showPosition:t.showPosition},function(e){1===e.code?(n.setState({updateVisible:!1}),n.doSearch("init")):g.a.error(e.msg)})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.pageData,c=t.filter,l=t.selectedData,o=t.form,d=t.search,p=t.dispatch,h=o.getFieldDecorator;return j.a.createElement("div",{className:"ad-index"},j.a.createElement(u.a,null,j.a.createElement(m.a,{span:22,className:"ad-position"},j.a.createElement("span",null,"广告位置："),j.a.createElement(E.a,{defaultValue:"".concat(c.adPcPlace),style:{width:140},onChange:this.handleChange},j.a.createElement(L,{value:""},"全部"),T.N.map(function(e,t){return j.a.createElement(L,{value:e.value,key:t},e.label)})),j.a.createElement(E.a,{defaultValue:"".concat(c.pcStatus),style:{width:140,margin:"0 0 0 15px"},onChange:this.handleStatusChange},j.a.createElement(L,{value:""},"全部"),j.a.createElement(L,{value:"1"},"展示中"),j.a.createElement(L,{value:"2"},"未展示")),j.a.createElement(b.a,{value:d.search,style:{width:150,margin:"0 15px"},onChange:function(e){return p(Object(I.f)({search:e.target.value}))},placeholder:"标题",onPressEnter:function(){e._search()}}),j.a.createElement(f.a,{type:"primary",onClick:function(){e._search()}},"搜索"),j.a.createElement(f.a,{type:"primary",onClick:this.incAd,className:"editBtn",style:{marginLeft:"10px"}},"新增广告"))),j.a.createElement("div",{className:"mt30"},j.a.createElement(i.a,{spinning:this.state.loading,size:"large"},j.a.createElement(s.a,{dataSource:Object(T.Q)(a,"topOrder").map(function(e,t){return M({},e,{key:t})}),columns:H,bordered:!0,pagination:{current:n.currPage,total:n.totalCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),j.a.createElement(P.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},j.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),j.a.createElement(P.a,{title:"广告详情",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},j.a.createElement("div",{className:"adInfo",style:{padding:"0 10px 10px"}},j.a.createElement(u.a,{style:{marginBottom:10}},j.a.createElement(m.a,{span:4,className:"ad-title",style:{fontWeight:"bold"}},"位置: "),j.a.createElement(m.a,{span:20,className:""},this.adPosition(l.adPlace))),j.a.createElement(u.a,{style:{marginBottom:10}},j.a.createElement(m.a,{span:4,className:"ad-title",style:{fontWeight:"bold"}},"标题: "),j.a.createElement(m.a,{span:20,className:""},l.remake||"无")),j.a.createElement(u.a,{style:{marginBottom:10}},j.a.createElement(m.a,{span:4,className:"ad-title",style:{fontWeight:"bold"}},"链接地址: "),j.a.createElement(m.a,{span:20,className:""},j.a.createElement("a",{target:"_blank",href:l.url,title:l.url},l.url||"无")))),j.a.createElement(u.a,null,j.a.createElement(m.a,{className:"",style:{margin:"0 auto",width:"95%"}},j.a.createElement("img",{src:l.imgSrc,alt:""})))),this.state.updateVisible&&j.a.createElement(P.a,{title:"添加/修改嵌入位置",visible:this.state.updateVisible,onOk:function(){return e.submitAccount()},onCancel:this.cancelUpdateModal,footer:[j.a.createElement(f.a,{key:"back",onClick:this.cancelUpdateModal},"取消"),j.a.createElement(f.a,{key:"submit",type:"primary",onClick:function(){e.submitAccount()}},"添加")]},j.a.createElement(O.a,null,j.a.createElement(B,x({},U,{label:"广告嵌入位置"}),h("showPosition",{rules:[{required:!0,message:"请输入广告嵌入位置!"}],initialValue:l.showPosition||1})(j.a.createElement(r.a,{max:30,min:1,placeholder:"广告嵌入位置(升序排列)",onPressEnter:function(){return e.submitAccount()},style:{width:"80%"},onChange:function(t){e.setNumber(t)}}))))))}}])&&D(a.prototype,n),c&&D(a,c),t}();t.default=Object(N.connect)(function(e){return{adInfo:e.adInfo,selectedData:e.adInfo.selectedData,list:e.adInfo.list,search:e.adInfo.search,filter:e.adInfo.filter,pageData:e.adInfo.pageData}})(O.a.create()(F))},1445:function(e,t,a){"use strict";a.r(t);a(675);var n=a(676),r=a.n(n),c=(a(1385),a(1386)),i=a.n(c),l=(a(1381),a(1382)),s=a.n(l),o=(a(1383),a(1384)),u=a.n(o),d=(a(247),a(183)),m=a.n(d),p=(a(184),a(1378)),f=a.n(p),h=(a(1390),a(1391)),b=a.n(h),y=(a(361),a(20)),g=a.n(y),v=(a(677),a(362)),E=a.n(v),k=(a(1376),a(1377)),O=a.n(k),S=a(0),P=a.n(S),w=a(246),j=(a(1626),a(10)),N=a(1612),C=a(48);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){V(e,t,a[t])})}return e}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var A=O.a.confirm,z=E.a.Option,W=[],q=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=x(t).call(this),e=!n||"object"!==I(n)&&"function"!=typeof n?M(a):n,V(M(e),"getOrderNum",function(t){e.setState({order:t})}),V(M(e),"handleChange",function(t){(0,e.props.dispatch)(Object(N.d)({adMobilePlace:t})),e.setState({adStatus:t}),e.doSearch("init",{currentPage:1,adPlace:t})}),V(M(e),"handleStatusChange",function(t){(0,e.props.dispatch)(Object(N.d)({mStatus:t})),e.doSearch("init",{currentPage:1,status:t})}),V(M(e),"incAd",function(){j.hashHistory.push("/adM-edit")}),V(M(e),"handleOk",function(t){e.setState({visible:!1})}),V(M(e),"handleCancel",function(t){e.setState({visible:!1})}),V(M(e),"handleImgModalCancel",function(){return e.setState({previewVisible:!1})}),V(M(e),"handlePreview",function(t){e.setState({previewImage:t.target.getAttribute("src"),previewVisible:!0})}),e.state={loading:!0,adStatus:null,visible:!1,previewVisible:!1,previewImage:"",order:1},e}var a,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,S["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.search,n=t.filter;this.doSearch(a.type?a.type:"init",{adPlace:n.adMobilePlace}),W=[{title:"广告标题",key:"remake",render:function(t,a){return P.a.createElement("div",{className:"ad-info clearfix"},P.a.createElement("div",null,P.a.createElement("h4",{title:a.remake,dangerouslySetInnerHTML:e.createMarkup(a.remake?Object(C.q)(a.remake,30):"暂无")})))}},{title:"类型",key:"status",render:function(e){return e.useType?1===e.useType?P.a.createElement("span",{className:"banner-status link"},"广告"):2===e.useType?P.a.createElement("span",{className:"banner-status will-publish"},"自有链接"):3===e.useType?P.a.createElement("span",{className:"banner-status news-detail"},"新闻详情"):4===e.useType?P.a.createElement("span",{className:"banner-status news"},"新闻频道"):5===e.useType?P.a.createElement("span",{className:"banner-status authorInfo"},"专题"):6===e.useType?P.a.createElement("span",{className:"banner-status ad"},"关键字/标签"):P.a.createElement("span",{className:"banner-status no"},"暂无"):P.a.createElement("span",{className:"banner-status no"},"暂无")}},{title:"广告图",width:100,key:"imgSrc",render:function(t){return P.a.createElement("div",{className:"shrinkPic",key:t.mImgSrc,style:{background:"url(".concat(t.mImgSrc,") no-repeat center / cover")},src:t.mImgSrc,onClick:e.handlePreview})}},{title:"广告位置",dataIndex:"adPlace",key:"adPlace",render:function(t){return e.adPosition(t)}},{title:"相关信息 ",key:"url",render:function(e,t){return 1===t.useType||2===t.useType?P.a.createElement("span",null,"跳转链接：",t.url?P.a.createElement("a",{href:t.url,target:"_blank",title:t.url},Object(C.q)(t.url,30)):"暂无"):4===t.useType?P.a.createElement("span",null,"新闻频道：",P.a.createElement("a",{href:"//huoxing24.com/news/".concat(t.url),target:"_blank",title:"//huoxing24.com/news/".concat(t.url)},"http//huoxing24.com/news/".concat(t.url)," ")):3===t.useType?P.a.createElement("span",null,"新闻 ID：",P.a.createElement("a",{href:"//huoxing24.com/newsdetail/".concat(t.url),target:"_blank",title:"//huoxing24.com/newsdetail/".concat(t.url)},t.url)):5===t.useType?P.a.createElement("span",null,"专题：",P.a.createElement("a",{href:"//huoxing24.com/hot/".concat(t.url),target:"_blank",title:"//huoxing24.com/hot/".concat(t.url)},t.url)):6===t.useType?P.a.createElement("span",null,"关键字/标签：",P.a.createElement("a",{href:"//huoxing24.com/search/".concat(t.url),target:"_blank",title:"//huoxing24.com/search/".concat(t.url)},t.url)):void 0}},{title:"权重",key:"topOrder",render:function(t){return P.a.createElement("p",null,15!==parseInt(e.adPosition(t))?t.topOrder:t.weight)}},{title:"更新时间",key:"updateTime",render:function(e){return Object(C.w)(e.updateTime)}},{title:"展示",key:"option",render:function(t){var a="";switch(t.status){case 2:a=P.a.createElement("p",null,P.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e.recommendTopic(t)},style:{background:"#00b45a"}},"发布"));break;case 1:a=P.a.createElement("div",null,P.a.createElement("p",{style:{marginTop:10}},P.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){return e._isPublish(t)},style:{background:"#e9892f"}},"撤回")));break;default:a=""}return P.a.createElement("div",{className:"btns"},a)}},{title:"操作",key:"action",render:function(t){return P.a.createElement("div",{className:"btns"},P.a.createElement("p",null,P.a.createElement("a",{className:"mr10 opt-btn",onClick:function(){e.detailModal(t)},style:{background:"#2b465f"}},"查看")),P.a.createElement("p",null,P.a.createElement(j.Link,{className:"mr10 opt-btn",to:{pathname:"/adM-edit",query:{id:t.id}},style:{background:"#108ee9"}},"编辑")),P.a.createElement("p",null,P.a.createElement("a",{onClick:function(){return e.delAd(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(N.f)({type:"init",nickName:"",title:""})),e(Object(N.e)({pageSize:20,totalCount:0})),e(Object(N.c)({}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"adPosition",value:function(e){var t="";return C.f.map(function(a,n){parseInt(a.value)===e&&(t=a.label)}),t}},{key:"doSearch",value:function(e,t){var a=this;this.setState({loading:!0});var n=this.props,r=n.dispatch,c=n.pageData,i=n.search,l=n.filter,s={search:i.search,status:l.mStatus||"",adPlace:l.adMobilePlace,type:2,pageSize:20,currentPage:c.currPage};s=T({},s,t),r(Object(N.b)(e,s,function(){a.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(Object(N.e)({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,a=t.dispatch,n=t.search,r=t.filter;a(Object(N.e)({currPage:e})),this.doSearch(n.type,{currentPage:e,adPlace:r.adMobilePlace,status:r.mStatus})}},{key:"delAd",value:function(e){var t=this.props.dispatch,a=this;A({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={id:e.id,status:0};Object(C.i)("POST","/ad/status",T({},n),function(e){1===e.code?(g.a.success("删除成功"),a.doSearch("init"),t(Object(N.f)({type:"init"}))):g.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,a=this;A({title:"提示",content:"确认要".concat(2===e.status?"发表":"撤回广告","吗 ?"),onOk:function(){var n={id:e.id,status:2===e.status?1:2};Object(C.i)("POST","/ad/status",T({},n),function(n){1===n.code?(g.a.success("".concat(2===e.status?"发表":"撤回","成功")),a.doSearch("init"),t(Object(N.f)({type:"init"}))):g.a.error(n.msg)})}})}},{key:"recommendTopic",value:function(e){var t=this;e.topOrder&&2!==parseInt(e.status)?this.setState({order:e.topOrder}):this.setState({order:1}),A({title:"提示",content:P.a.createElement("div",{className:"modal-input"},P.a.createElement("span",{style:{marginRight:10}},"请输入排序号：(序号越小越靠前, 最小为 1)"),P.a.createElement(b.a,{min:1,max:999,defaultValue:e.topOrder||1,autoFocus:!0,type:"number",onChange:t.getOrderNum})),onOk:function(){var a=t.state.order;if(""===a.toString().trim())return g.a.error("序号不能为空！"),!1;var n={id:e.id,status:1,type:e.type,topOrder:a,adPlace:e.adPlace};2===e.status?Object(C.i)("POST","/ad/status",{id:e.id,status:2===e.status?1:2},function(e){1===e.code?Object(C.i)("POST","/ad/settoporder",T({},n),function(e){1===e.code?(g.a.success("操作成功"),t.doSearch("init")):g.a.error(e.msg)}):g.a.error(e.msg)}):1===e.status&&Object(C.i)("POST","/ad/settoporder",T({},n),function(e){1===e.code?(g.a.success("操作成功"),t.doSearch("init")):g.a.error(e.msg)})}})}},{key:"detailModal",value:function(e){this.setState({visible:!0}),(0,this.props.dispatch)(Object(N.c)(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.pageData,c=t.filter,l=t.selectData,o=t.search,d=t.dispatch;return P.a.createElement("div",{className:"ad-index"},P.a.createElement(s.a,null,P.a.createElement(u.a,{span:22,className:"ad-position"},P.a.createElement("span",null,"广告位置："),P.a.createElement(E.a,{defaultValue:"".concat(c.adMobilePlace),style:{width:140},onChange:this.handleChange},P.a.createElement(z,{value:""},"全部"),C.f.map(function(e){return P.a.createElement(z,{value:e.value,key:e.value},e.label)})),P.a.createElement(E.a,{defaultValue:"".concat(c.mStatus),style:{width:140,margin:"0 0 0 15px"},onChange:this.handleStatusChange},P.a.createElement(z,{value:""},"全部"),P.a.createElement(z,{value:"1"},"展示中"),P.a.createElement(z,{value:"2"},"未展示")),P.a.createElement(f.a,{value:o.search,style:{width:150,margin:"0 15px"},onChange:function(e){return d(Object(N.f)({search:e.target.value}))},placeholder:"标题",onPressEnter:function(){e._search()}}),P.a.createElement(m.a,{type:"primary",onClick:function(){e._search()}},"搜索"),P.a.createElement(m.a,{type:"primary",onClick:this.incAd,className:"editBtn",style:{marginLeft:"10px"}},"新增广告"))),P.a.createElement("div",{className:"mt30"},P.a.createElement(r.a,{spinning:this.state.loading,size:"large"},P.a.createElement(i.a,{dataSource:Object(C.Q)(a,"topOrder").map(function(e,t){return T({},e,{key:t})}),columns:W,bordered:!0,pagination:{current:n.currPage,total:n.totalCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),P.a.createElement(O.a,{className:"pre-Modal",visible:this.state.previewVisible,footer:null,onCancel:this.handleImgModalCancel},P.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),P.a.createElement(O.a,{title:"广告详情",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},P.a.createElement("div",{className:"adInfo",style:{padding:"0 10px 10px"}},P.a.createElement(s.a,null,P.a.createElement(u.a,{span:4,className:"ad-title",style:{fontWeight:"bold"}},"位置: "),P.a.createElement(u.a,{span:20,className:""},this.adPosition(l.adPlace))),P.a.createElement(s.a,null,P.a.createElement(u.a,{span:4,className:"ad-title",style:{fontWeight:"bold"}},"标题: "),P.a.createElement(u.a,{span:20,className:""},l.remake||"无")),P.a.createElement(s.a,null,P.a.createElement(u.a,{span:4,className:"ad-title",style:{fontWeight:"bold"}},"链接地址: "),P.a.createElement(u.a,{span:20,className:""},P.a.createElement("a",{target:"_blank",href:l.url,title:l.url},l.url||"无")))),P.a.createElement(s.a,null,P.a.createElement(u.a,{className:"",style:{margin:"0 auto",width:"95%"}},P.a.createElement("img",{src:l.imgSrc,alt:""})))))}}])&&_(a.prototype,n),c&&_(a,c),t}();t.default=Object(w.connect)(function(e){return{adInfo:e.adInfo,selectData:e.adInfo.selectedData,list:e.adInfo.list,search:e.adInfo.search,filter:e.adInfo.filter,pageData:e.adInfo.pageData}})(q)},1626:function(e,t,a){var n=a(1647);"string"==typeof n&&(n=[[e.i,n,""]]);var r={transform:void 0};a(186)(n,r);n.locals&&(e.exports=n.locals)},1647:function(e,t,a){(e.exports=a(185)(!1)).push([e.i,"",""])}}]);