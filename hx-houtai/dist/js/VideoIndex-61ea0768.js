(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1431:function(e,t,n){"use strict";n.r(t);n(1392);var a=n(1393),r=n.n(a),i=(n(675),n(676)),o=n.n(i),c=(n(1385),n(1386)),s=n.n(c),l=(n(1381),n(1382)),u=n.n(l),p=(n(247),n(183)),d=n.n(p),m=(n(184),n(1378)),f=n.n(m),h=(n(1383),n(1384)),b=n.n(h),v=(n(361),n(20)),g=n.n(v),y=(n(1379),n(1380)),E=n.n(y),O=(n(677),n(362)),k=n.n(O),w=(n(1376),n(1377)),j=n.n(w),S=n(0),T=n.n(S),I=n(246),C=(n(1641),n(10)),D=n(1643),P=n(48),_=n(11),M=n.n(_);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){R(e,t,n[t])})}return e}function Y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=j.a.confirm,z=k.a.Option,F=E.a.Item,G={labelCol:{xs:{span:2},sm:{span:4}},wrapperCol:{xs:{span:4},sm:{span:16}}},U=[],$=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=x(t).call(this),e=!a||"object"!==N(a)&&"function"!=typeof a?L(n):a,R(L(e),"handleRecommend",function(t){var n=e.props.dispatch,a=L(e);console.log(t),q({title:"提示",content:"".concat(1===t.recCreaterType?"确认要撤回吗":"确认要推荐吗"," "),onOk:function(){var e={videoId:t.id,status:1===t.recCreaterType?0:1};Object(P.i)("POST","/video/changeRecCreaterType",H({},e),function(e){1===e.code?(g.a.success("".concat(1===t.recCreaterType?"撤回成功":"推荐成功"," ")),a.doSearch("init"),n(Object(D.h)({type:"init"}))):g.a.error(e.msg)})}})}),R(L(e),"disabledDate",function(e){return e&&e<M()().endOf("hours")}),R(L(e),"handleChange",function(t){(0,e.props.dispatch)(Object(D.f)({status:t})),e.setState({newsStatus:t}),e.doSearch("init",{currentPage:1,status:t})}),R(L(e),"handleChange1",function(t){(0,e.props.dispatch)(Object(D.f)({recommend:t})),e.doSearch("init",{currentPage:1,recommend:t})}),R(L(e),"handleChange2",function(t){(0,e.props.dispatch)(Object(D.f)({channelId:t})),e.doSearch("init",{currentPage:1,channelId:t})}),e.state={loading:!0,newsStatus:null,editNewsId:""},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,S["Component"]),n=t,(a=[{key:"channelName",value:function(e){var t="";return P.p.map(function(n,a){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.search,a=t.filter;this.doSearch("init",H({},a,{title:n.title})),U=[{title:"视频标题",width:250,key:"name",render:function(t,n){return n&&T.a.createElement("div",{className:"video-info clearfix"},T.a.createElement("div",null,T.a.createElement("h4",{title:n.title,dangerouslySetInnerHTML:e.createMarkup(Object(P.q)(n.title,30))}),T.a.createElement("div",null,n.original&&1===parseInt(n.original)?T.a.createElement("div",{style:{display:"inline-block"}},T.a.createElement("span",{className:"green-bg mr10"},"独家")):"",parseInt(n.recommend)?T.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},T.a.createElement("span",{className:"org-bg mr10"},"推荐")):"",parseInt(n.forbidComment)?T.a.createElement("span",{className:"pre-bg"},"禁评"):"")),n.pictureUrl?T.a.createElement("img",{src:n.pictureUrl.split(",")[0]}):"")}},{title:"视频状态",key:"status",render:function(e){return e&&0===e.status?T.a.createElement("span",{className:"news-status pre-publish"},"草稿"):e&&e.publishTime<=Date.parse(new Date)?T.a.createElement("span",{className:"news-status"},"已发表"):e&&e.publishTime>Date.parse(new Date)?T.a.createElement("span",{className:"news-status will-publish"},"定时发表"):T.a.createElement("span",null,"暂无")}},{title:"视频简介 ",dataIndex:"content",key:"content",render:function(t){return t?T.a.createElement("span",{title:t,dangerouslySetInnerHTML:e.createMarkup(Object(P.q)(t,50))}):"无"}},{title:"发表时间",key:"createTime",width:150,render:function(e){return e&&Object(P.w)(e.publishTime)}},{title:"推荐/置顶",key:"option",render:function(t){return T.a.createElement("div",{className:"btns"},T.a.createElement("p",null,T.a.createElement("a",{className:"mr10 recommend-btn opt-btn ".concat(1!==t.status?"disabled":""),href:"javascript:void(0)",onClick:function(){return e._isTop(t)},disabled:1!==t.status&&!0},1===t.recommend?"取消推荐":"推荐")),T.a.createElement("p",null,1===t.recommendToMiniApp?T.a.createElement("a",{className:"mr10 toMiniApp-btn opt-btn",href:"javascript:void(0)",onClick:function(){return e.backFromMiniApp(t)}},"从小程序撤回"):T.a.createElement("a",{className:"mr10 toMiniApp-btn opt-btn",href:"javascript:void(0)",onClick:function(){return e._isToMiniApp(t)}},"推至小程序")),T.a.createElement("p",null,T.a.createElement("a",{className:"mr10 toMiniApp-btn opt-btn",href:"javascript:void(0)",style:{background:"#1048ae"},onClick:function(){return e.handleRecommend(t)}},1===t.recCreaterType?"从首页撤回":"推至首页")))}},{title:"操作",key:"action",render:function(t){return T.a.createElement("div",{className:"btns"},T.a.createElement("p",null,T.a.createElement(C.Link,{target:"_blank",className:"mr10 opt-btn",to:{pathname:"/video-detail",query:{id:t.id}},style:{background:"#108ee9"}},"详情")),T.a.createElement("p",null,T.a.createElement(C.Link,{target:"_blank",className:"mr10 opt-btn",to:{pathname:"/video-send",query:{id:t.id}},style:{background:"#e07091"}},"编辑")),T.a.createElement("p",null,T.a.createElement("a",{className:"mr10 opt-btn",href:"javascript:void(0)",onClick:function(){return e._isPublish(t)},style:{background:"#00a854"}},1===t.status?"撤回到草稿":0===t.status?t.publishTime>Date.parse(new Date)?"定时发表":"发表":void 0)),T.a.createElement("p",null,T.a.createElement("a",{onClick:function(){return e.delVideo(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(D.h)({type:"init",nickName:""})),e(Object(D.g)({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"_isToMiniApp",value:function(e){var t=this,n=this.props.dispatch;this.setState({loading:!0});var a={id:e.id,recommendToMiniApp:e.recommendToMiniApp&&1===e.recommendToMiniApp?0:1};Object(P.i)("post","/video/recommendtominiapp",a,function(e){1===e.code?(g.a.success("操作成功!"),t.doSearch("init"),n(Object(D.h)({type:"init"}))):g.a.error(e.msg)})}},{key:"backFromMiniApp",value:function(e){var t=this,n=this.props.dispatch;this.setState({loading:!0});var a={id:e.id};Object(P.i)("post","/miniappvideo/delete",a,function(e){1===e.code?(g.a.success("操作成功!"),t.doSearch("init"),n(Object(D.h)({type:"init"}))):g.a.error(e.msg)})}},{key:"showToTopModal",value:function(e,t,n){var a=this.props.dispatch;e?this.newsIsToTop({id:t,topEndHotcount:0,topOrder:0,topEndTime:0}):(this.setState({editNewsId:t,topIsShow:!0}),a(Object(D.e)(n)))}},{key:"newsIsToTop",value:function(e){var t=this,n=this.props.dispatch;n(Object(D.d)(e,function(){t.doSearch("init"),n(Object(D.h)({type:"init"}))}))}},{key:"setNewsTop",value:function(){var e=this,t=this.props.form;t.validateFields(function(n,a){n||(e.setState({topIsShow:!1}),e.newsIsToTop({id:e.state.editNewsId,topOrder:a.order,topEndHotcount:a.topEndHotcount,topEndTime:Date.parse(a.topEndTime.format("YYYY-MM-DD HH:mm:ss"))}),t.resetFields())})}},{key:"changeTopValue",value:function(e,t){var n=this.props.dispatch,a=e.target.value;0!==parseInt(a)?n(Object(D.a)({topOrder:a},t.key)):g.a.warning("置顶权重值不能为0！")}},{key:"_editTopValue",value:function(e,t){var n=e.target.value,a=t.id;n?/^\d+$/.test(n)?this.newsIsToTop({id:a,topEndHotcount:t.topEndHotcount||1e4,topOrder:n,topEndTime:t.topEndTime||Date.parse(M()().add("day",1).format("YYYY-MM-DD HH:mm:ss"))}):g.a.warning("置顶权重值必须是整数！"):g.a.warning("请输入置顶权重值！")}},{key:"doSearch",value:function(e,t){var n=this;this.setState({loading:!0});var a=this.props,r=a.dispatch,i=a.pageData,o=a.search,c=H({},a.filter,{title:o.title,pageSize:20,currentPage:i.currPage});"init"!==e&&(c=H({},c,{nickName:o.nickName,title:o.title})),c=H({},c,t),r(Object(D.c)(e,c,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props.dispatch;this.setState({loading:!0}),this.doSearch("init",{currentPage:1}),e(Object(D.g)({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.search,r=t.filter;n(Object(D.g)({currPage:e})),this.doSearch(a.type,H({currentPage:e},r))}},{key:"delVideo",value:function(e){var t=this.props.dispatch,n=this;q({title:"提示",content:"确认要删除吗 ?",onOk:function(){n.setState({loading:!0});var a={id:e.id,status:-1};Object(P.i)("POST","/video/status",H({},a),function(e){1===e.code?(g.a.success("删除成功"),n.doSearch("init"),t(Object(D.h)({type:"init"}))):g.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,n=this;q({title:"提示",content:"确认要".concat(1===e.status?"撤回":"发表","吗 ?"),onOk:function(){var a={id:e.id,status:0===e.status?1:0};Object(P.i)("POST","/video/status",H({},a),function(a){1===a.code?(g.a.success("".concat(1===e.status?"撤回":"发表","成功")),n.doSearch("init"),t(Object(D.h)({type:"init"}))):g.a.error(a.msg)})}})}},{key:"_forbidcomment",value:function(e){var t=this,n=this.props.dispatch,a={id:e.id,operate:parseInt(e.forbidComment)?"0":"1"};Object(P.i)("post","/post/forbidcomment",a,function(e){200===e.status?(t.doSearch("init"),n(Object(D.h)({type:"init"}))):g.a.error(e.msg)})}},{key:"_isTop",value:function(e){var t=this,n=this.props.dispatch;this.setState({loading:!0});var a={id:e.id,recommend:1===e.recommend?0:1};Object(P.i)("post","/video/recommend",a,function(e){1===e.code?(t.doSearch("init"),n(Object(D.h)({type:"init"}))):g.a.error(e.msg)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData,i=t.filter,c=t.search,l=t.dispatch,p=t.form,m=t.selectedData,h=p.getFieldDecorator;return T.a.createElement("div",{className:"video-index"},T.a.createElement(u.a,null,T.a.createElement(b.a,{style:{margin:"0 0 20px"}},T.a.createElement("span",null,"视频来源："),T.a.createElement("span",null," MarsBit官方")),T.a.createElement(b.a,null,T.a.createElement("span",null,"视频状态："),T.a.createElement(k.a,{defaultValue:"".concat(i.status),style:{width:100},onChange:this.handleChange},T.a.createElement(z,{value:""},"全部"),T.a.createElement(z,{value:"1"},"已发表"),T.a.createElement(z,{value:"2"},"定时发表"),T.a.createElement(z,{value:"0"},"草稿箱")),T.a.createElement("span",{style:{marginLeft:15}},"推荐："),T.a.createElement(k.a,{defaultValue:"".concat(i.recommend),style:{width:100},onChange:this.handleChange1},T.a.createElement(z,{value:""},"全部"),T.a.createElement(z,{value:"0"},"未推荐"),T.a.createElement(z,{value:"1"},"推荐")),T.a.createElement("span",{style:{marginLeft:15}},"视频标题："),T.a.createElement(f.a,{value:c.title,style:{width:150,marginRight:15},onChange:function(e){return l(Object(D.h)({title:e.target.value}))},placeholder:"请输入视频标题",onPressEnter:function(){e._search()}}),T.a.createElement("span",null,T.a.createElement(d.a,{type:"primary",onClick:function(){e._search()}},"搜索"),T.a.createElement(d.a,{type:"primary",style:{margin:"0 15px"},onClick:function(){window.open("".concat(window.location.origin,"/#/video-send"))}},"新增"),T.a.createElement(d.a,{type:"primary",onClick:function(){e.doSearch("init")},shape:"circle",icon:"reload"})))),T.a.createElement("div",{className:"mt30"},T.a.createElement(o.a,{spinning:this.state.loading,size:"large"},T.a.createElement(s.a,{dataSource:n.map(function(e,t){return H({},e,{key:t})}),columns:U,bordered:!0,pagination:{current:a.currPage,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))),T.a.createElement(j.a,{title:"置顶权重",visible:this.state.topIsShow,onOk:function(){return e.setNewsTop()},onCancel:function(){e.setState({topIsShow:!1}),p.resetFields()}},T.a.createElement(E.a,null,T.a.createElement(F,A({},G,{label:"置顶权重"}),h("order",{rules:[{required:!0,message:"请输入置顶权重!"},{pattern:/^[1-9]\d*$/,message:"设置权重必须大于0!"}],initialValue:0===m.topOrder?1:m.topOrder})(T.a.createElement(f.a,{min:1}))),T.a.createElement(F,A({},G,{label:"失效热度"}),h("topEndHotcount",{rules:[{required:!0,message:"请输入置顶失效热度!"},{pattern:/^[1-9]\d*$/,message:"置顶失效热度必须大于0!"}],initialValue:m.topEndHotcount&&0!==m.topEndHotcount?m.topEndHotcount:1e4})(T.a.createElement(f.a,{min:1e4}))),T.a.createElement(F,A({},G,{label:"失效时间: "}),h("topEndTime",{rules:[{required:!0,message:"请选择置顶失效时间！"}],initialValue:m.topEndTime&&""!==m.topEndTime?M()(Object(P.w)(m.topEndTime),"YYYY-MM-DD HH:mm:ss"):M()().add("hours",1)})(T.a.createElement(r.a,{showTime:!0,disabledDate:this.disabledDate,format:"YYYY-MM-DD HH:mm:ss"}))))))}}])&&Y(n.prototype,a),i&&Y(n,i),t}();t.default=Object(I.connect)(function(e){return{videoInfo:e.videoInfo,list:e.videoInfo.list,search:e.videoInfo.search,filter:e.videoInfo.filter,pageData:e.videoInfo.pageData,selectedData:e.videoInfo.selectedData}})(E.a.create()($))},1641:function(e,t,n){var a=n(1642);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(186)(a,r);a.locals&&(e.exports=a.locals)},1642:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])},1643:function(e,t,n){"use strict";n.d(t,"e",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return f}),n.d(t,"h",function(){return h}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return v});n(361);var a=n(20),r=n.n(a),i=n(48),o=n(2);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return{type:o.xb,data:e}},u=function(e,t,n){return function(a){var o="init"===e?"/video/getvideolist":"/post/search";Object(i.i)("get",o,t?c({},t,{createrType:0}):{},function(e){if(1===e.code){var t=e.obj;a(m({list:t.inforList})),a(v({totalCount:t.recordCount,pageSize:t.pageSize,currPage:t.currentPage})),n&&n(t)}else r.a.error(e.msg)})}},p=function(e,t){return function(n){Object(i.i)("post","/video/getbyid",c({},e),function(e){if(1===e.code){var a=e.obj;n(m({info:a})),t&&t(a)}else r.a.error(e.msg)})}},d=function(e,t){return function(n){Object(i.i)("post","/news/setorder",c({},e),function(n){1===n.code?(0===parseInt(e.topOrder)?r.a.success("取消置顶成功！"):r.a.success("置顶成功！"),t&&t()):r.a.error(n.msg)})}},m=function(e){return{type:o.Gb.ADD_DATA,data:e}},f=function(e,t){return{type:o.Gb.EDIT_LIST_ITEM,data:e,index:t}},h=function(e){return{type:o.Gb.SET_SEARCH_QUERY,data:e}},b=function(e){return{type:o.Gb.SET_FILTER_DATA,data:e}},v=function(e){return{type:o.Gb.SET_PAGE_DATA,data:e}}}}]);