(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1451:function(e,t,a){"use strict";a.r(t);a(1392);var n=a(1393),r=a.n(n),o=(a(675),a(676)),s=a.n(o),c=(a(1385),a(1386)),i=a.n(c),l=(a(1381),a(1382)),u=a.n(l),p=(a(247),a(183)),d=a.n(p),m=(a(1383),a(1384)),h=a.n(m),f=(a(680),a(250)),b=a.n(f),g=(a(361),a(20)),y=a.n(g),E=(a(1379),a(1380)),v=a.n(E),S=(a(677),a(362)),w=a.n(S),O=(a(184),a(1378)),k=a.n(O),j=(a(1376),a(1377)),T=a.n(j),C=a(0),P=a.n(C),I=a(246),N=a(11),D=a.n(N),_=(a(1618),a(10)),A=a(1605),R=a(1620),H=a(248),M=a(48);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){q(e,t,a[t])})}return e}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var J=T.a.confirm,G=k.a.TextArea,U=w.a.Option,W=v.a.Item,$=["文章包含广告信息","文章包含违规信息","发布内容与行业无关","请修改默认昵称","其它"],Q=["经常发布广告、违规内容","经常发布与行业无关内容","头像、简介、昵称包含违规内容","其他"],K={labelCol:{xs:{span:2},sm:{span:4}},wrapperCol:{xs:{span:4},sm:{span:16}}},X=[],Z=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=x(t).call(this),e=!n||"object"!==Y(n)&&"function"!=typeof n?z(a):n,q(z(e),"disabledDate",function(e){return e&&e<D()().endOf("hours")}),q(z(e),"doBloacktDo",function(){var t=z(e);e.setState({loading:!0}),""!==e.state.reason.trim()?Object(M.i)("POST","/blacklist/addblacklist_by_nickname",{nickname:e.state.author,reason:e.state.reason},function(a){1===a.code?(y.a.success("加入黑名单成功！"),t.doSearch("init"),e.setState({doBlackShow:!1}),e.doSearch("init")):(e.setState({loading:!1}),y.a.error(a.msg))}):(e.setState({loading:!1}),y.a.error("原因不能为空!"))}),q(z(e),"getReason",function(t){e.setState({reason:t.target.value})}),q(z(e),"doRejectSelect",function(t){e.setState({reason:$[t],rejectSelectVal:t})}),q(z(e),"doBlackSelect",function(t){e.setState({reason:$[t],blackSelectVal:t})}),q(z(e),"doRejectDo",function(){var t=z(e);e.setState({loading:!0}),""!==e.state.reason.trim()?Object(M.i)("POST","/news/status",{id:t.state.listItemId,status:2,reason:e.state.reason},function(a){1===a.code?(y.a.success("操作成功！"),e.dataGather2(t.state.listItemId,e.state.reason,a.currentTime),e.setState({doRejectShow:!1}),e.doSearch("init")):(e.setState({loading:!1}),y.a.error(a.msg))}):(e.setState({loading:!1}),y.a.error("原因不能为空!"))}),q(z(e),"removeHTMLTag",function(e){return e=(e=(e=e.replace(/<\/?[^>]*>/g,"")).replace(/[ | ]*\n/g,"\n")).replace(/ /gi,"")}),q(z(e),"dataGather2",function(t,a,n){(0,e.props.dispatch)(Object(R.b)({id:t},function(t){var r={event_type:"COMMIT_ANTI_REJECT",event_info:{title:t.title,content:e.removeHTMLTag(t.content),reason:a},timestamp:n};Object(M.i)("post","/passport/account/recommend/gather",{data:JSON.stringify(r)})}))}),q(z(e),"handleChange",function(t){(0,e.props.dispatch)(Object(R.f)({status:t})),e.setState({newsStatus:t}),e.doSearch("init",{currentPage:1,status:t})}),q(z(e),"handleChange1",function(t){(0,e.props.dispatch)(Object(R.f)({recommend:t})),e.doSearch("init",{currentPage:1,recommend:t})}),q(z(e),"handleChange2",function(t){(0,e.props.dispatch)(Object(R.f)({channelId:t})),e.doSearch("init",{currentPage:1,channelId:t})}),q(z(e),"handleChange3",function(t){(0,e.props.dispatch)(Object(R.f)({machineAuditStatus:t})),e.doSearch("init",{currentPage:1,machineAuditStatus:t})}),e.state={loading:!0,newsStatus:null,reason:""},e}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,C["Component"]),a=t,(n=[{key:"channelName",value:function(e){var t="";return this.props.channelList.every(function(t){return parseInt(t.value)!==e})?t="无":this.props.channelList.map(function(a,n){parseInt(a.value)===e&&(t=a.label)}),t}},{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.search,n=t.filter;(0,t.dispatch)(Object(H.f)()),this.doSearch("init",B({},n,{title:a.title})),X=[{title:"文章标题",key:"name",width:250,render:function(t,a){return a&&P.a.createElement("div",{className:"post-info clearfix"},P.a.createElement("div",null,P.a.createElement("h4",{title:a.title,dangerouslySetInnerHTML:e.createMarkup(a.title,a.autoPass)}),P.a.createElement("div",null,a.original&&1===parseInt(a.original)?P.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},P.a.createElement("span",{className:"green-bg mr10"},"独家")):"",parseInt(a.recommend)?P.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},P.a.createElement("span",{className:"org-bg mr10"},"推荐")):"",0===parseInt(a.topOrder)?"":P.a.createElement(b.a,{placement:"bottom",title:"失效时间: ".concat(D()(a.topEndTime).format("YYYY年MM月DD日 HH:mm:ss"),"; 失效热度: ").concat(a.topEndHotcount)},P.a.createElement("div",{className:"news-top clearfix"},P.a.createElement("span",{className:"top-bg"},"置顶"),P.a.createElement(k.a,{className:"top-num",onBlur:function(t){return e._editTopValue(t,a)},onChange:function(t){return e.changeTopValue(t,a)},value:a.topOrder}))))),a.pictureUrl?P.a.createElement("img",{src:a.pictureUrl.split(",")[0]}):"")}},{title:"文章状态",key:"status",width:100,render:function(e){return e&&4===e.status?P.a.createElement("span",{className:"news-status audit-publish"},"审核中"):e&&0===e.status?P.a.createElement("span",{className:"news-status pre-publish"},"草稿箱"):e&&1===e.status?P.a.createElement("span",{className:"news-status has-publish"},"审核通过"):e&&2===e.status?P.a.createElement("div",null,P.a.createElement("span",{className:"news-status has-forbidden"},"审核驳回"),P.a.createElement("p",{className:"reason",style:{marginTop:10}},"( 原因：",e.nopassReason&&""!==e.nopassReason.trim()?e.nopassReason:"未填写"," )")):e&&3===e.status?P.a.createElement("div",null,P.a.createElement("span",{className:"news-status will-publish"},"定时发表")):P.a.createElement("span",null,"暂无")}},{title:"机审结果",key:"machineAuditStatus",width:100,render:function(e){return e.machineAuditStatus?2===e.machineAuditStatus?P.a.createElement("div",null,P.a.createElement("span",{className:"news-status machine-forbidden"},"机审未通过"),P.a.createElement("p",{className:"reason",style:{marginTop:10}},"( 原因：",e.nopassReason&&""!==e.nopassReason.trim()?e.nopassReason:"未填写"," )")):e&&1===e.machineAuditStatus?P.a.createElement("span",{className:"news-status machine-publish"},"机审通过"):P.a.createElement("span",null,"暂无"):P.a.createElement("span",{className:"news-status machine-pre"},"未机审")}},{title:"文章作者",dataIndex:"author",key:"author",width:100,render:function(e,t){return t.author&&""!==t.author.trim()?P.a.createElement("span",{title:t.author},Object(M.q)(t.author,25),1===t.isWhite?P.a.createElement("div",{className:"icon-color"},P.a.createElement(A.a,{type:"icon-identify"})):""):"无"}},{title:"提交时间",key:"createTime",width:135,render:function(e){return e&&Object(M.w)(e.createTime)}},{title:"发表时间",key:"publishTime",width:135,render:function(e){return e&&Object(M.w)(e.publishTime)}},{title:"推荐/置顶",key:"option",width:110,render:function(t){return 0===t.status?"无":P.a.createElement("div",{className:"btns checkBtns"},P.a.createElement("p",{style:{marginBottom:10}},P.a.createElement("a",{className:"mr10 recommend-btn opt-btn ".concat(1!==t.status?"disabled":""),href:"javascript:void(0)",onClick:function(){return e.homeShow(t)},disabled:1!==t.status&&!0},1===t.recCreaterType?"从头条撤回":"推至头条")),P.a.createElement("p",null,parseInt(t.topOrder)?P.a.createElement(b.a,{placement:"bottom",title:"置顶失效时间: ".concat(D()(t.topEndTime).format("YYYY年MM月DD日 HH:mm:ss"),"; 失效热度: ").concat(t.topEndHotcount)},P.a.createElement("a",{className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#ff4f3e"},onClick:function(){return e.showToTopModal(parseInt(t.topOrder),t.id,t)}},"取消置顶")):P.a.createElement("a",{className:"mr10 opt-btn topBtn ".concat(1!==t.status||1!==t.recCreaterType?"disabled":""),disabled:(1!==t.status||1!==t.recCreaterType)&&!0,href:"javascript:void(0)",onClick:function(){return e.showToTopModal(parseInt(t.topOrder),t.id,t)}},"置顶")))}},{title:"操作",key:"action",width:180,render:function(t,a){return P.a.createElement("div",{className:"huoxinghao-operation"},4===t.status?P.a.createElement(_.Link,{target:"_blank",className:"mr10 opt-btn",to:{pathname:"/checkArticle-edit",query:{id:t.id}},style:{background:"#108ee9"}},"修改"):P.a.createElement(_.Link,{target:"_blank",className:"mr10 opt-btn",to:{pathname:"/checkArticle-edit",query:{id:t.id}},style:{background:"#2e55a3"}},"修改"),P.a.createElement("p",{style:{margin:"10px 0"}},P.a.createElement("a",{className:"mr10 opt-btn publish-btn ".concat(2===t.status?"disabled":""),href:"javascript:void(0)",onClick:function(){return e._isPublish(t)},disabled:2===t.status&&!0},0===t.status?"发表":"草稿不可操作")),P.a.createElement("a",{onClick:function(){return e.delPost(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除"))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(R.h)({type:"init",nickName:""})),e(Object(R.g)({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e,t){var a="";return 1===t&&(a="【白名单】"),{__html:a+e}}},{key:"showToTopModal",value:function(e,t,a){var n=this.props.dispatch;e?this.newsIsToTop({id:t,topEndHotcount:0,topOrder:0,topEndTime:0}):(this.setState({editNewsId:t,topIsShow:!0}),n(Object(R.e)(a)))}},{key:"newsIsToTop",value:function(e){var t=this,a=this.props.dispatch;a(Object(R.d)(e,function(){t.doSearch("init"),a(Object(R.h)({type:"init"}))}))}},{key:"setNewsTop",value:function(){var e=this,t=this.props.form;t.validateFields(function(a,n){a||(e.setState({topIsShow:!1}),e.newsIsToTop({id:e.state.editNewsId,topOrder:n.order,topEndHotcount:n.topEndHotcount,topEndTime:Date.parse(n.topEndTime.format("YYYY-MM-DD HH:mm:ss"))}),t.resetFields())})}},{key:"changeTopValue",value:function(e,t){var a=this.props.dispatch,n=e.target.value;0!==parseInt(n)?a(Object(R.a)({topOrder:n},t.key)):y.a.warning("置顶权重值不能为0！")}},{key:"_editTopValue",value:function(e,t){var a=e.target.value,n=t.id;a?/^\d+$/.test(a)?this.newsIsToTop({id:n,topEndHotcount:t.topEndHotcount||1e4,topOrder:a,topEndTime:t.topEndTime||Date.parse(D()().add("day",1).format("YYYY-MM-DD HH:mm:ss"))}):y.a.warning("置顶权重值必须是整数！"):y.a.warning("请输入置顶权重值！")}},{key:"doSearch",value:function(e,t){var a=this,n=this.props,r=n.dispatch,o=n.pageData,s=n.search,c=B({},n.filter,{pageSize:20,title:s.title,authorName:s.authorName,currentPage:o.currPage});c.status=0,this.setState({loading:!0}),(c=B({},c,t)).status=0,console.log(c),r(Object(R.c)(e,c,function(){a.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.doSearch("init",{currentPage:1}),e(Object(R.h)({type:"init"})),e(Object(R.g)({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,a=t.dispatch,n=t.search,r=t.filter;a(Object(R.g)({currPage:e})),this.doSearch(n.type,B({currentPage:e},r))}},{key:"addAuthToWhite",value:function(e){Object(M.i)("post","/author/whitelist/add",{phonenum:e,remarks:"批量添加，请更新备注"},function(e){1===e.code?y.a.success("添加成功！"):-1===e.code?y.a.error("添加失败！"):y.a.error(e.msg)})}},{key:"delPost",value:function(e){var t=this.props.dispatch,a=this;J({title:"提示",content:"确认要删除吗 ?",onOk:function(){var n={id:e.id,status:-1};Object(M.i)("POST","/news/status",B({},n),function(e){1===e.code?(y.a.success("删除成功"),a.doSearch("init"),t(Object(R.h)({type:"init"}))):y.a.error(e.msg)})}})}},{key:"doBlack",value:function(e){this.setState({author:e.author},function(){this.setState({doBlackShow:!0})})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,a=this;if(4===e.status){if(!Object(M.G)(e.coverPic))return y.a.error("新闻封面暂无，请先上传相关封面！"),!1;if(!JSON.parse(e.coverPic).pc&&!JSON.parse(e.coverPic).pc_recommend)return y.a.error("新闻封面暂无，请先上传相关封面！"),!1}J({title:"提示",content:"确认要".concat(0===e.status?"发表":"草稿状态不可点击","吗 ?"),onOk:function(){var n={id:e.id,status:1,rePub:1};Object(M.i)("POST","/news/status",B({},n),function(n){1===n.code?(y.a.success("".concat(0===e.status?"发表":"草稿可不操作","成功")),a.doSearch("init"),t(Object(R.h)({type:"init"})),4===e.status&&Object(M.i)("post","/caster/mars/content/sent",{newsId:e.id,title:e.title,synopsis:e.synopsis,coverPic:e.coverPic,createdBy:e.createdBy})):y.a.error(n.msg)})}})}},{key:"doReject",value:function(e){e.nopassReason?this.setState({reason:e.nopassReason,rejectSelectVal:"4"}):this.setState({reason:$[0],rejectSelectVal:"0"}),this.setState({listItemId:e.id},function(){this.setState({doRejectShow:!0})})}},{key:"_isTop",value:function(e){var t=this,a=this.props.dispatch,n={id:e.id,recommend:1===e.recommend?0:1};Object(M.i)("post","/news/recommend",n,function(e){1===e.code?(t.doSearch("init"),a(Object(R.h)({type:"init"})),y.a.success("操作成功!")):y.a.error(e.msg)})}},{key:"homeShow",value:function(e){var t=this.props.dispatch,a=this,n={id:e.id,recCreaterType:1===e.recCreaterType?0:1};J({title:"提示",content:"确认要".concat(1===e.recCreaterType?"从头条撤回(置顶会被取消)":"推至头条","吗 ?"),onOk:function(){Object(M.i)("post","/news/column/recommend",n,function(e){1===e.code?(a.doSearch("init"),t(Object(R.h)({type:"init"})),y.a.success("操作成功!")):y.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.pageData,o=t.filter,c=t.search,l=t.dispatch,p=t.selectedData,m=t.form,f=m.getFieldDecorator;return P.a.createElement("div",{className:"article-index"},P.a.createElement(u.a,null,P.a.createElement(h.a,{style:{margin:"0 0 20px"}},P.a.createElement("span",null,"文章来源："),P.a.createElement("span",null," MarsBit专栏")),P.a.createElement(h.a,null,P.a.createElement("span",null,"文章状态："),P.a.createElement(w.a,{defaultValue:"0",style:{width:120,marginBottom:10},onChange:this.handleChange},P.a.createElement(U,{value:"0"},"草稿箱")),P.a.createElement("div",{style:{display:"".concat(4===parseInt(o.status)?"inline-block":"none")},className:"machineOption"},P.a.createElement("span",{style:{marginLeft:15}},"智能审核："),P.a.createElement(w.a,{defaultValue:"".concat(o.machineAuditStatus),style:{width:120},onChange:this.handleChange3},P.a.createElement(U,{value:""},"全部"),P.a.createElement(U,{value:"0"},"未机审"),P.a.createElement(U,{value:"1"},"机审通过"),P.a.createElement(U,{value:"2"},"机审驳回"))),P.a.createElement("span",{style:{marginLeft:15}},"推荐："),P.a.createElement(w.a,{defaultValue:"".concat(o.recommend),style:{width:120},onChange:this.handleChange1},P.a.createElement(U,{value:""},"全部"),P.a.createElement(U,{value:"0"},"未推荐"),P.a.createElement(U,{value:"1"},"推荐")),P.a.createElement("span",{style:{marginLeft:15}},"新闻类别："),P.a.createElement(w.a,{defaultValue:"".concat(o.channelId),style:{width:120},onChange:this.handleChange2},P.a.createElement(U,{value:""},"全部"),this.props.channelList.map(function(e){return P.a.createElement(U,{value:e.value,key:e.value},e.label)}))),P.a.createElement(h.a,null,P.a.createElement("span",null,"新闻标题: "),P.a.createElement(k.a,{value:c.title,style:{width:180,marginRight:15},onChange:function(e){return l(Object(R.h)({title:e.target.value}))},placeholder:"请输入新闻标题",onPressEnter:function(){e._search()}}),P.a.createElement("span",null,"作者名: "),P.a.createElement(k.a,{value:c.authorName,style:{width:165,marginRight:15},onChange:function(e){return l(Object(R.h)({authorName:e.target.value}))},placeholder:"请输入作者名",onPressEnter:function(){e._search()}}),P.a.createElement(d.a,{type:"primary",onClick:function(){e._search()}},P.a.createElement(A.a,{type:"icon-search"}),"搜索"),P.a.createElement(d.a,{type:"primary",style:{marginLeft:15},onClick:function(){e.doSearch("init")},shape:"circle",icon:"reload"}))),P.a.createElement("div",{className:"mt30"},P.a.createElement(s.a,{spinning:this.state.loading,size:"large"},P.a.createElement(i.a,{dataSource:a.map(function(e,t){return B({},e,{key:t})}),columns:X,bordered:!0,pagination:{current:n.currPage,total:n.totalCount,pageSize:n.pageSize,onChange:function(t){return e.changePage(t)}}}))),P.a.createElement(T.a,{title:"置顶权重",visible:this.state.topIsShow,onOk:function(){return e.setNewsTop()},onCancel:function(){e.setState({topIsShow:!1}),m.resetFields()}},P.a.createElement(v.a,null,P.a.createElement(W,V({},K,{label:"置顶权重"}),f("order",{rules:[{required:!0,message:"请输入置顶权重!"},{pattern:/^[1-9]\d*$/,message:"设置权重必须大于0!"}],initialValue:0===p.topOrder?1:p.topOrder})(P.a.createElement(k.a,{min:1}))),P.a.createElement(W,V({},K,{label:"失效热度"}),f("topEndHotcount",{rules:[{required:!0,message:"请输入置顶失效热度!"},{pattern:/^[1-9]\d*$/,message:"置顶失效热度必须大于0!"}],initialValue:p.topEndHotcount&&0!==p.topEndHotcount?p.topEndHotcount:1e4})(P.a.createElement(k.a,{min:1e4}))),P.a.createElement(W,V({},K,{label:"失效时间: "}),f("topEndTime",{rules:[{required:!0,message:"请选择置顶失效时间！"}],initialValue:p.topEndTime&&""!==p.topEndTime?D()(Object(M.w)(p.topEndTime),"YYYY-MM-DD HH:mm:ss"):D()().add("hours",1)})(P.a.createElement(r.a,{showTime:!0,disabledDate:this.disabledDate,format:"YYYY-MM-DD HH:mm:ss"}))))),P.a.createElement(T.a,{title:"审核驳回",visible:this.state.doRejectShow,onOk:this.doRejectDo,onCancel:function(){e.setState({doRejectShow:!1})}},P.a.createElement("div",{className:"modal-input-reject"},P.a.createElement("span",{style:{marginRight:10}},"请",4===parseInt(this.state.rejectSelectVal)?"填写":"选择","文章不通过原因：",this.state.reason||""),P.a.createElement(w.a,{value:this.state.rejectSelectVal,style:{width:280},onChange:this.doRejectSelect},$.map(function(e,t){return P.a.createElement(U,{value:"".concat(t),key:t},e)})),P.a.createElement(G,{style:{display:4===parseInt(this.state.rejectSelectVal)?"block":"none"},rows:3,autoFocus:!0,onChange:function(t){e.getReason(t)}}))),P.a.createElement(T.a,{title:"用户拉黑",visible:this.state.doBlackShow,onOk:this.doBloacktDo,onCancel:function(){e.setState({doBlackShow:!1})}},P.a.createElement("div",{className:"modal-input-reject"},P.a.createElement("span",{style:{marginRight:10}},"请",3===parseInt(this.state.blackSelectVal)?"填写":"选择","用户被拉黑原因：",this.state.reason||""),P.a.createElement(w.a,{value:this.state.blackSelectVal,style:{width:280},onChange:this.doBlackSelect},Q.map(function(e,t){return P.a.createElement(U,{value:"".concat(t),key:t},e)})),P.a.createElement(G,{style:{display:3===parseInt(this.state.blackSelectVal)?"block":"none"},rows:3,autoFocus:!0,onChange:function(t){e.getReason(t)}}))))}}])&&L(a.prototype,n),o&&L(a,o),t}();t.default=Object(I.connect)(function(e){return{articleAudit:e.articleAudit,list:e.articleAudit.list,search:e.articleAudit.search,filter:e.articleAudit.filter,pageData:e.articleAudit.pageData,selectedData:e.postInfo.selectedData,channelList:e.channelListInfo}})(v.a.create()(Z))},1618:function(e,t,a){var n=a(1619);"string"==typeof n&&(n=[[e.i,n,""]]);var r={transform:void 0};a(186)(n,r);n.locals&&(e.exports=n.locals)},1619:function(e,t,a){(e.exports=a(185)(!1)).push([e.i,"",""])},1620:function(e,t,a){"use strict";a.d(t,"e",function(){return l}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return p}),a.d(t,"d",function(){return d}),a.d(t,"a",function(){return h}),a.d(t,"h",function(){return f}),a.d(t,"f",function(){return b}),a.d(t,"g",function(){return g});a(361);var n=a(20),r=a.n(n),o=a(48),s=a(2);function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){i(e,t,a[t])})}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=function(e){return{type:s.xb,data:e}},u=function(e,t,a){return function(n){var s="init"===e?"/news/shownews":"/post/search";Object(o.i)("get",s,t?c({},t,{createrType:1}):{},function(e){if(1===e.code){var t=e.obj;n(m({list:t.inforList})),n(g({totalCount:t.recordCount,pageSize:t.pageSize,currPage:t.currentPage})),a&&a(t)}else r.a.error(e.msg)})}},p=function(e,t){return function(a){Object(o.i)("post","/news/getbyid",c({},e),function(e){if(1===e.code){var n=e.obj;a(m({info:n})),t&&t(n)}else r.a.error(e.msg)})}},d=function(e,t){return function(a){Object(o.i)("post","/news/setorder",c({},e),function(a){1===a.code?(0===parseInt(e.topOrder)?r.a.success("取消置顶成功！"):r.a.success("置顶成功！"),t&&t()):r.a.error(a.msg)})}},m=function(e){return{type:s.k.ADD_DATA,data:e}},h=function(e,t){return{type:s.k.EDIT_LIST_ITEM,data:e,index:t}},f=function(e){return{type:s.k.SET_SEARCH_QUERY,data:e}},b=function(e){return{type:s.k.SET_FILTER_DATA,data:e}},g=function(e){return{type:s.k.SET_PAGE_DATA,data:e}}}}]);