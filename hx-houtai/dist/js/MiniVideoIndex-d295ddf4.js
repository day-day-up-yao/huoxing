(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1489:function(e,t,n){"use strict";n.r(t);n(1392);var a=n(1393),i=n.n(a),r=(n(675),n(676)),o=n.n(r),s=(n(1385),n(1386)),c=n.n(s),l=(n(1381),n(1382)),u=n.n(l),p=(n(1383),n(1384)),d=n.n(p),m=(n(247),n(183)),h=n.n(m),f=(n(184),n(1378)),b=n.n(f),y=(n(361),n(20)),g=n.n(y),v=(n(1379),n(1380)),E=n.n(v),O=(n(677),n(362)),w=n.n(O),k=(n(1376),n(1377)),j=n.n(k),S=n(0),T=n.n(S),I=n(246),D=(n(1681),n(10)),P=n(1682),N=n(48),C=n(11),H=n.n(C);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){L(e,t,n[t])})}return e}function Y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=j.a.confirm,U=w.a.Option,$=E.a.Item,J={labelCol:{xs:{span:2},sm:{span:4}},wrapperCol:{xs:{span:4},sm:{span:16}}},R=[],W=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=q(t).call(this),e=!a||"object"!==V(a)&&"function"!=typeof a?x(n):a,L(x(e),"disabledDate",function(e){return e&&e<H()().endOf("hours")}),L(x(e),"handleChange",function(t){(0,e.props.dispatch)(Object(P.f)({status:t})),e.setState({newsStatus:t}),e.doSearch("init",{currentPage:1,status:t})}),L(x(e),"handleChange1",function(t){(0,e.props.dispatch)(Object(P.f)({recommend:t})),e.doSearch("init",{currentPage:1,recommend:t})}),L(x(e),"handleChange2",function(t){(0,e.props.dispatch)(Object(P.f)({channelId:t})),e.doSearch("init",{currentPage:1,channelId:t})}),e.state={loading:!0,newsStatus:null,editNewsId:""},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,S["Component"]),n=t,(a=[{key:"channelName",value:function(e){var t="";return N.p.map(function(n,a){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.search,a=t.filter;this.doSearch("init",M({},a,{title:n.title})),R=[{title:"视频标题",key:"name",render:function(t,n){return n&&T.a.createElement("div",{className:"miniVideo-info clearfix"},T.a.createElement("div",null,T.a.createElement("h4",{title:n.title,dangerouslySetInnerHTML:e.createMarkup(Object(N.q)(n.title,30))}),T.a.createElement("div",null,n.original&&1===parseInt(n.original)?T.a.createElement("div",{style:{display:"inline-block"}},T.a.createElement("span",{className:"green-bg mr10"},"独家")):"",parseInt(n.recommend)?T.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},T.a.createElement("span",{className:"org-bg mr10"},"推荐")):"",parseInt(n.forbidComment)?T.a.createElement("span",{className:"pre-bg"},"禁评"):"")),n.pictureUrl?T.a.createElement("img",{src:n.pictureUrl.split(",")[0]}):"")}},{title:"视频状态",key:"status",render:function(e){return e&&0===e.status?T.a.createElement("span",{className:"news-status pre-publish"},"草稿"):e&&e.publishTime<=Date.parse(new Date)?T.a.createElement("span",{className:"news-status"},"已发表"):e&&e.publishTime>Date.parse(new Date)?T.a.createElement("span",{className:"news-status will-publish"},"定时发表"):T.a.createElement("span",null,"暂无")}},{title:"视频简介 ",dataIndex:"content",key:"content",render:function(t){return T.a.createElement("span",{title:t,dangerouslySetInnerHTML:e.createMarkup(Object(N.q)(t,50))})}},{title:"发表时间",key:"createTime",width:150,render:function(e){return e&&Object(N.w)(e.publishTime)}},{title:"操作",key:"action",render:function(t){return T.a.createElement("div",{className:"btns"},T.a.createElement("p",null,T.a.createElement(D.Link,{className:"mr10 opt-btn",to:{pathname:"/miniVideo-detail",query:{id:t.id}},style:{background:"#108ee9"}},"详情")),T.a.createElement("p",null,T.a.createElement(D.Link,{className:"mr10 opt-btn",to:{pathname:"/miniVideo-send",query:{id:t.id}},style:{background:"#e07091"}},"编辑")),T.a.createElement("p",null,T.a.createElement("a",{className:"mr10 opt-btn",href:"javascript:void(0)",onClick:function(){return e._isPublish(t)},style:{background:"#00a854"}},1===t.status?"撤回到草稿":0===t.status?t.publishTime>Date.parse(new Date)?"定时发表":"发表":void 0)),T.a.createElement("p",null,T.a.createElement("a",{onClick:function(){return e.delMiniVideo(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除")))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(P.h)({type:"init",nickName:""})),e(Object(P.g)({pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"showToTopModal",value:function(e,t,n){var a=this.props.dispatch;e?this.newsIsToTop({id:t,topEndHotcount:0,topOrder:0,topEndTime:0}):(this.setState({editNewsId:t,topIsShow:!0}),a(Object(P.e)(n)))}},{key:"newsIsToTop",value:function(e){var t=this,n=this.props.dispatch;n(Object(P.d)(e,function(){t.doSearch("init"),n(Object(P.h)({type:"init"}))}))}},{key:"setNewsTop",value:function(){var e=this,t=this.props.form;t.validateFields(function(n,a){n||(e.setState({topIsShow:!1}),e.newsIsToTop({id:e.state.editNewsId,topOrder:a.order,topEndHotcount:a.topEndHotcount,topEndTime:Date.parse(a.topEndTime.format("YYYY-MM-DD HH:mm:ss"))}),t.resetFields())})}},{key:"changeTopValue",value:function(e,t){var n=this.props.dispatch,a=e.target.value;0!==parseInt(a)?n(Object(P.a)({topOrder:a},t.key)):g.a.warning("置顶权重值不能为0！")}},{key:"_editTopValue",value:function(e,t){var n=e.target.value,a=t.id;n?/^\d+$/.test(n)?this.newsIsToTop({id:a,topEndHotcount:t.topEndHotcount||1e4,topOrder:n,topEndTime:t.topEndTime||Date.parse(H()().add("day",1).format("YYYY-MM-DD HH:mm:ss"))}):g.a.warning("置顶权重值必须是整数！"):g.a.warning("请输入置顶权重值！")}},{key:"doSearch",value:function(e,t){var n=this;this.setState({loading:!0});var a=this.props,i=a.dispatch,r=a.pageData,o=a.search,s=M({},a.filter,{title:o.title,pageSize:20,currentPage:r.currPage});"init"!==e&&(s=M({},s,{nickName:o.nickName,title:o.title})),s=M({},s,t),i(Object(P.c)(e,s,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){var e=this.props,t=e.dispatch,n=e.search,a="init";a=(n.nickName||n.title,"init"),this.doSearch(a,{currentPage:1}),t(Object(P.h)({type:a})),t(Object(P.g)({currPage:1}))}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.search,i=t.filter;n(Object(P.g)({currPage:e})),this.doSearch(a.type,M({currentPage:e},i))}},{key:"delMiniVideo",value:function(e){var t=this.props.dispatch,n=this;F({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={id:e.id};Object(N.i)("POST","/miniappvideo/delete",M({},a),function(e){1===e.code?(g.a.success("删除成功"),n.doSearch("init"),t(Object(P.h)({type:"init"}))):g.a.error(e.msg)})}})}},{key:"_isPublish",value:function(e){var t=this.props.dispatch,n=this;F({title:"提示",content:"确认要".concat(1===e.status?"撤回":"发表","吗 ?"),onOk:function(){var a={id:e.id,status:0===e.status?1:0};Object(N.i)("POST","/miniappvideo/status",M({},a),function(a){1===a.code?(g.a.success("".concat(1===e.status?"撤回":"发表","成功")),n.doSearch("init"),t(Object(P.h)({type:"init"}))):g.a.error(a.msg)})}})}},{key:"_forbidcomment",value:function(e){var t=this,n=this.props.dispatch,a={id:e.id,operate:parseInt(e.forbidComment)?"0":"1"};Object(N.i)("post","/post/forbidcomment",a,function(e){200===e.status?(t.doSearch("init"),n(Object(P.h)({type:"init"}))):g.a.error(e.msg)})}},{key:"_isTop",value:function(e){var t=this,n=this.props.dispatch,a={id:e.id,recommend:1===e.recommend?0:1};Object(N.i)("post","/miniappvideo/recommend",a,function(e){1===e.code?(t.doSearch("init"),n(Object(P.h)({type:"init"}))):g.a.error(e.msg)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData,r=t.filter,s=t.search,l=t.dispatch,p=t.form,m=t.selectedData,f=p.getFieldDecorator;return T.a.createElement("div",{className:"miniVideo-index"},T.a.createElement(u.a,null,T.a.createElement(d.a,null,T.a.createElement("span",null,"视频状态："),T.a.createElement(w.a,{defaultValue:"".concat(r.status),style:{width:100},onChange:this.handleChange},T.a.createElement(U,{value:""},"全部"),T.a.createElement(U,{value:"1"},"已发表"),T.a.createElement(U,{value:"2"},"定时发表"),T.a.createElement(U,{value:"0"},"草稿箱")),T.a.createElement("span",{style:{marginLeft:15}},"视频标题："),T.a.createElement(b.a,{value:s.title,style:{width:150,marginRight:15},onChange:function(e){return l(Object(P.h)({title:e.target.value}))},placeholder:"请输入视频标题",onPressEnter:function(){e._search()}}),T.a.createElement("span",null,T.a.createElement(h.a,{type:"primary",onClick:function(){e._search()}},"搜索"),T.a.createElement(h.a,{type:"primary",style:{margin:"0 0 0 15px"},onClick:function(){D.hashHistory.push("/miniVideo-send")}},"新增")))),T.a.createElement("div",{className:"mt30"},T.a.createElement(o.a,{spinning:this.state.loading,size:"large"},T.a.createElement(c.a,{dataSource:n.map(function(e,t){return M({},e,{key:t})}),columns:R,bordered:!0,pagination:{current:a.currPage,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))),T.a.createElement(j.a,{title:"置顶权重",visible:this.state.topIsShow,onOk:function(){return e.setNewsTop()},onCancel:function(){e.setState({topIsShow:!1}),p.resetFields()}},T.a.createElement(E.a,null,T.a.createElement($,_({},J,{label:"置顶权重"}),f("order",{rules:[{required:!0,message:"请输入置顶权重!"},{pattern:/^[1-9]\d*$/,message:"设置权重必须大于0!"}],initialValue:0===m.topOrder?1:m.topOrder})(T.a.createElement(b.a,{min:1}))),T.a.createElement($,_({},J,{label:"失效热度"}),f("topEndHotcount",{rules:[{required:!0,message:"请输入置顶失效热度!"},{pattern:/^[1-9]\d*$/,message:"置顶失效热度必须大于0!"}],initialValue:m.topEndHotcount&&0!==m.topEndHotcount?m.topEndHotcount:1e4})(T.a.createElement(b.a,{min:1e4}))),T.a.createElement($,_({},J,{label:"失效时间: "}),f("topEndTime",{rules:[{required:!0,message:"请选择置顶失效时间！"}],initialValue:m.topEndTime&&""!==m.topEndTime?H()(Object(N.w)(m.topEndTime),"YYYY-MM-DD HH:mm:ss"):H()().add("hours",1)})(T.a.createElement(i.a,{showTime:!0,disabledDate:this.disabledDate,format:"YYYY-MM-DD HH:mm:ss"}))))))}}])&&Y(n.prototype,a),r&&Y(n,r),t}();t.default=Object(I.connect)(function(e){return{miniVideoInfo:e.miniVideoInfo,list:e.miniVideoInfo.list,search:e.miniVideoInfo.search,filter:e.miniVideoInfo.filter,pageData:e.miniVideoInfo.pageData,selectedData:e.miniVideoInfo.selectedData}})(E.a.create()(W))}}]);