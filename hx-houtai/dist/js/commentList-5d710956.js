(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1462:function(e,t,n){"use strict";n.r(t);n(675);var a=n(676),c=n.n(a),r=(n(1385),n(1386)),o=n.n(r),i=(n(1381),n(1382)),l=n.n(i),s=(n(247),n(183)),u=n.n(s),d=(n(184),n(1378)),p=n.n(d),m=(n(1383),n(1384)),U=n.n(m),h=(n(361),n(20)),V=n.n(h),R=(n(1376),n(1377)),k=n.n(R),f=n(0),N=n.n(f),b=n(246),y=(n(1648),n(1605)),T=n(1773),S=n(48);n(1774);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){g(e,t,n[t])})}return e}function W(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=k.a.confirm,O=[],w=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=v(t).call(this),e=!a||"object"!==Z(a)&&"function"!=typeof a?E(n):a,g(E(e),"previewImg",function(t){console.log(t),e.setState({preview:t,visible:!0})}),g(E(e),"onSelectChange",function(t,n){var a=[];n.map(function(e,t){a.push(e.id)}),e.setState({selectedRowKeys:t,idArr:a})}),g(E(e),"batchDelete",function(){Q({title:"提示",content:"暂时未开放批量删除功能!"})}),e.state={newsStatus:null,loading:!1,selectedRowKeys:[],idArr:[],visible:!1,preview:"",title:""},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,f["Component"]),n=t,(a=[{key:"channelName",value:function(e){var t="";return S.p.map(function(n,a){parseInt(n.value)===e&&(t=n.label)}),t}},{key:"componentWillMount",value:function(){var e=this,t=this.props.search,n=this;Object(S.i)("post","/caster/room/one",{castId:this.props.location.query.id},function(e){1===e.code?n.setState({title:e.obj.title}):V.a.error(e.msg)}),this.doSearch(t.type?t.type:"init",""===t.keys?{}:{keys:t.keys}),O=[{title:"评论内容",key:"content",render:function(t,n){var a=/<img[^<]*src=['"]([^<>]+)['"][^>]*>/,c=a.exec(t.content)?a.exec(t.content)[1]:"";return N.a.createElement("div",{onClick:c?function(){return e.previewImg(c)}:null,className:"reply-content comment-info",dangerouslySetInnerHTML:e.createMarkup(n.content)})}},{title:"昵称",dataIndex:"userNickName",key:"userNickName",render:function(e,t){return N.a.createElement("span",null,t.nickName)}},{title:"评论时间",key:"createTime",render:function(e,t){return Object(S.w)(t.addTime)}},{title:"操作",key:"action",render:function(t){return N.a.createElement("div",null,N.a.createElement("a",{onClick:function(){return e.delPost(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"#d73435"}},"删除"),N.a.createElement("a",{onClick:t.isBan?null:function(){return e.pushBlackList(t)},className:"mr10 opt-btn",href:"javascript:void(0)",style:{background:"rgb(233, 93, 1)"}},t.isBan?"禁言中":"禁言"))}}]}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e(Object(T.c)({keys:"",type:"init",nickName:"",title:""})),e(Object(T.b)({currPage:1,pageSize:20,totalCount:0}))}},{key:"createMarkup",value:function(e){return{__html:e}}},{key:"doSearch",value:function(e,t){var n=this,a=this.props,c=a.dispatch,r=a.pageData,o=a.search,i={castId:this.props.location.query.id,pageSize:20,currentPage:r.currPage};"init"!==e&&(i=F({},i,{keys:o.keys})),i=F({},i,t),c(Object(T.a)(e,i,function(){n.setState({loading:!1})}))}},{key:"_search",value:function(){Q({title:"提示",content:"暂时未开放搜索功能!"})}},{key:"changePage",value:function(e){this.setState({loading:!0});var t=this.props,n=t.dispatch,a=t.search;n(Object(T.b)({currPage:e})),this.doSearch(a.type,{currentPage:e,keys:a.keys})}},{key:"delPost",value:function(e){var t=this.props.dispatch,n=this;Q({title:"提示",content:"确认要删除吗 ?",onOk:function(){var a={castId:e.castId,passportId:e.passportId,addTime:e.addTime};Object(S.i)("POST","/caster/room/comment/del",F({},a),function(e){1===e.code?(V.a.success("删除成功"),n.doSearch("init"),t(Object(T.c)({type:"init"}))):V.a.error(e.msg)})}})}},{key:"pushBlackList",value:function(e){var t=this,n=this.props.dispatch;Q({title:"提示",style:{top:"30%"},content:"封禁该用户的评论功能，请确认！",onOk:function(){Object(S.i)("POST","/caster/black/add",{passportId:e.passportId},function(e){1===e.code?(V.a.success("禁言成功！"),t.doSearch("init"),n(Object(T.c)({type:"init"}))):V.a.error(e.msg)})}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pageData,r=t.dispatch,i=t.search,s=this.state,d=s.selectedRowKeys,m=s.loading,h={selectedRowKeys:d,onChange:this.onSelectChange},V=d.length>0;return N.a.createElement("div",{className:"comment-index"},N.a.createElement("div",{className:"live-comment-title"},this.state.title),N.a.createElement(l.a,{style:{width:800}},N.a.createElement(U.a,{span:2,className:"form-label"},"关键字："),N.a.createElement(U.a,{span:4},N.a.createElement(p.a,{value:i.keys,onChange:function(e){return r(Object(T.c)({keys:e.target.value}))},placeholder:"请输入关键字搜索"})),N.a.createElement(U.a,{span:1,offset:1},N.a.createElement(u.a,{type:"primary",onClick:function(){e._search()}},N.a.createElement(y.a,{type:"icon-search"}),"搜索")),N.a.createElement(U.a,{offset:2,span:5},N.a.createElement(u.a,{type:"primary",onClick:this.batchDelete,disabled:!V,loading:m},"批量删除"),N.a.createElement("span",{style:{marginLeft:8}},V?"已选择 ".concat(d.length," 条"):""))),N.a.createElement("div",{className:"mt30"},N.a.createElement(c.a,{spinning:this.state.loading,size:"large"},N.a.createElement(o.a,{rowSelection:h,dataSource:n.map(function(e,t){return F({},e,{key:t})}),columns:O,bordered:!0,pagination:{current:a.currPage,total:a.totalCount,pageSize:a.pageSize,onChange:function(t){return e.changePage(t)}}}))),N.a.createElement(k.a,{title:"图片预览",visible:this.state.visible,wrapClassName:"wrap-img-box",width:520,footer:null,onCancel:function(){e.setState({visible:!1})}},N.a.createElement("img",{src:this.state.preview,alt:""})))}}])&&W(n.prototype,a),r&&W(n,r),t}();t.default=Object(b.connect)(function(e){return{commentInfo:e.commentInfo,list:e.commentInfo.list,search:e.commentInfo.search,filter:e.commentInfo.filter,pageData:e.commentInfo.pageData}})(w)},1773:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return u});n(361);var a=n(20),c=n.n(a),r=n(48),o=n(2);var i=function(e,t,n){return function(a){var o="init"===e?"/caster/room/comment/list":"";Object(r.i)("get",o,t||{},function(e){if(1===e.code){var t=e.obj;a(l({list:t.inforList})),a(u({totalCount:t.recordCount,pageSize:t.pageSize,currPage:t.currentPage})),n&&n(t)}else c.a.error(e.msg)})}},l=function(e){return{type:o.x.ADD_DATA,data:e}},s=function(e){return{type:o.x.SET_SEARCH_QUERY,data:e}},u=function(e){return{type:o.x.SET_PAGE_DATA,data:e}}}).call(this,n(97))},1774:function(e,t){e.exports="data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHd0FBQUJzQ0FZQUFBQ1BabGZOQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQVlEU1VSQlZIaGU3WnhOYUZ4VkZNZVArVTRrTVNIZlg0S0xoR1NwMlFoZEtCUXB0RmhRcUNnb2RDRW91QkJjdUhDbklFZ1YzTGtRWExnUVhMUzF0dHFnVml1VktrcGlSU0l4TVpuTVRHYnl5V1NTdFBtWW1UUTEvOHNOMUppUGVXL3V2VFBuemZsQnlIdXZDUy96ZnZlY2U4NjlqejR3TkRSMGp3UTJsT2p2QWhORUdETkVHRE5FR0RORUdETkVHRE5FR0RORUdETkVHRE5FR0RNOExVME5EQXpvSThFa3c4UEQrdWhvSk1LWUljS1lJY0tZSWNLWUljSjIyTjdlcGtRaVFmRjRuQ0tSQ0kyUGoxTW9GS0pvTkVwemMzTzB2cjZ1ZnpML0ZIV1ZDQkd6czdPMHVycXFwQjFHWldVbE5UYzNxNitTRXJQalhLckVJOGhrTWpRNU9VbWpvNk8wdkx4OHBDeVFTcVVvRm92UnlNaUlpc1o4VVhUQ05qYzNhV3hzVElueUEyU0h3MkdhbVpuUlY5eFNWTUoyWlNGYWNnV3BGQkhubXFJUmhzaVltSmlncmEwdGZTVjM1dWZuVlZIaWtxSVJob3JQUkdUdEJaV2x5eXF5S0lUaGdmcWRzN0lCNmRFVlJTSE05Z1BGWU5qWTJOQm5kZ204TUpUczZMTnNrMHdtOVpGZEFpOE1EektiUGl0WGxwYVc5SkZkQWk4TXBid0xVTkM0R0JpQkYyYXlqRDhLRi9jS3ZEQWJwZnhCcE5OcGZXU1B3QXNyTFMzVlIvWnhjYS9BQ3lzcks5Tkg5bkZ4cjhBTHc3YUlDN0RsVWw1ZXJzL3NFWGhoZFhWMStzZ3VydTRUZUdFMU5UVk9vcXkrdmw0ZjJTWHd3a0JUVTVNK3NnTlNZVU5EZ3o2elMxRUlhMmxwc1RxL3RMYTJHbjl0NENBS1R0aWx5Ulg2TG5wYm41a0JEN096czFPZm1hV3Fxa3E5NStHWFgrZThiYzBVbExBUGJ5M1NLOWZqOU9LMzAvVDZqUmxhU2QvVi81STdqWTJOMU43ZXJzL01nS2p0NmVueEhWMVhwbGJwekdCRW4yVkhRUWpiMnI2bkJMMDN2S2l2RUgwK3ZreFBYZ2pSWU5oY3RIVjBkS2owYUFMSTZ1M3RwWXFLQ24zRkd4LzltYUNYdjQ5UjZxNjMvM1VqNzhMV010djB3amRSSldndk0yc1pPbnR0V24yd3BVMHowZGJkM1oxemVrUWE3T3ZyVTkrOWdzSDUxaTl6OVBadjgvcUtOL0lxYkdGamkwNWVucUliOFRWOVpYK1FPbzZkbjFEem13bmEydHFvdjcvZmN5bU9xT3JxNmxLLzZ5ZXlNRGpQWG92UkozLzUzNHJKMjR1a2Z5ZFRkT1pxUkVuendsTVAxOUs1WTIzVThhQ1pxbS8zOVFIc1orMjNVSXo1Q1UweDVLSjA5enRmNFhPK3RETTMvN0g0LzUzcHE0OW12MXVkRjJFL3hPNm9OSWNSNTRlSEtrcnBuY2RiNmZsZXM4MHE5ck93UlFKeFdCZkVsNGwyNEovbGxFcjcwN2N6K3NwLzhTTE1lVXI4YkN5cFJwcGZXUURWSTRvVVZGZ0hQUVEvSUhxUTZtcHJhNm02dXRxSUxKVHRweTZIamYyZFRvV2hDbnpqcDFrMThab0FjOThURnlkem1oTnNjbjVpaFo3ZFNmc20yeE1ud2lEb3RSL2pxczh5RFNJVlZkZnByOElxOVJRSytLejR6S1lHNXk3V2hXRjBQVGNZVmFQTkprZzl4NzhJcWY3RzlFUHlBdTZOTEhKL1Qya1NxOEtRdDVHL2I4NGVYcmFiQWswbytodEVHNnBRMXlEYU1UOWpucmFGTldFb1g5Rmo1U05ORFM5c3FHaDcvL2RGWjlHR3NoMERCUld3VGF3SXcrSXRKbHV2UFpaSklPcURIV0VudnB6YXQvY3hDYUw1K01VUWpTVHN2MUpuWE5pbm8wblZ6ZWRTdHBzRUQvSFVsYkJLbFY3WDdiSUJsU295aWF2QmFWUVlIc3FiTjgyVjdhYkEzNE5pQkdrUzZkSVVXUDlFUSt4eWNCb1JocEdMbFFzOGxFSUc4eW5tR2JRQnVUNWt6STlvM2wwUHpweUZZUlVkS3c1WW9PVUFIakFhYlRUY1AvdW9Ydkg3Nks4d1ArYURuSVJOcmFiVmlQVzZhMW9Jb09WNDV1dUk2cG15WFlsQVZMcm9LUS9EdHpCSU9yMHptUmZTNm9JZjBETmhvL1NvMXhLd040ZUswMVZQZVJDK2hDSDlZYkxOWjlsdUVzallmUzFodjQxU1ZKb25MdVducDl5TFoyRWZqeVRvMWV2eGdpbmJUWUtxRHh1bDk4L0hpRHlrL1VJWm5KNzJ3eTZrT3d0MlpkdzBUejlTUjQ4MVY5TzdRd3ZXSzBGckc1Z25iMVhySThFa0JiMkJLZVNHQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HQ0dPR0NHT0dDR09HcHpkL2hmd2pFY1lNRWNZTUVjWU1FY1lNRWNZTUVjWU1FY1lNRWNZTUVjWU1FY1lNRWNZTUVjWU1FY1lNRWNZTUVjWU1FY1lNRWNZTUVjWU1FY1lNRWNZTUVjWUtvbjhCL0FmZlZDcjhaMzhBQUFBQVNVVk9SSzVDWUlJPSI="}}]);