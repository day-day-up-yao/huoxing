(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[11],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a(16),i=a.n(r),o=a(53),s=a(48),m=a(1),u=a(236),b=(a(312),a(313)),p=a.n(b),d=Object(l.b)(function(e){return{noticeObj:e.notice.noticeObj,bourseObj:e.notice.bourseObj}})(function(e){var t=e.dispatch,a=e.bourseObj,l=e.noticeObj,r=Object(n.useState)(""),b=i()(r,2),d=b[0],E=b[1],g=Object(n.useState)(""),f=i()(g,2),j=f[0],v=f[1],y=Object(n.useState)(""),N=i()(y,2),O=N[0],h=N[1],x=Object(n.useState)(1),C=i()(x,2),k=C[0],_=C[1];Object(n.useEffect)(function(){t(Object(s.d)({exchangeSymbol:d,type:j,search:"",page:k,pageSize:20}))},[k]);var S=Object(n.useCallback)(function(e){var n="";if(e.target.value)n=e.target.value;else if(e.target.getAttribute("datasymbol")){n=e.target.getAttribute("datasymbol");var c=0;a.obj.exchange.map(function(e,t){e.symbol===n&&(c=t)}),document.getElementById("bourse_".concat(c)).selected=!0}E(n),t(Object(s.d)({exchangeSymbol:n,type:j,search:O}))}),D=Object(n.useCallback)(function(e){var n="";if(e.target.value)n=e.target.value;else if(e.target.getAttribute("datatype")){n=e.target.getAttribute("datatype");var c=0;a.obj.type.map(function(e,t){e.id===parseInt(n)&&(c=t)}),document.getElementById("type_".concat(c)).selected=!0}v(n),t(Object(s.d)({exchangeSymbol:d,type:n,search:O}))}),I=Object(n.useCallback)(function(e){var t=e.target.value;h(t)}),L=Object(n.useCallback)(function(e){t(Object(s.d)({exchangeSymbol:"",type:"",search:O}))}),A=Object(n.useCallback)(function(e){if(e.keyCode&&13!==e.keyCode)return!1;var a="input"!==e.target.tagName.toLowerCase()?O:e.target.value;""!==Object(m.F)(a)&&t(Object(s.d)({exchangeSymbol:"",type:"",search:a}))},[]);return c.a.createElement("div",{className:"notice-cont-box"},c.a.createElement("div",{className:"cont-type"},c.a.createElement("select",{className:"cont-option-type",id:"bourseType",onChange:S},Object(m.n)(a.obj.exchange)&&a.obj.exchange.map(function(e,t){return c.a.createElement("option",{key:t,value:e.symbol,id:"bourse_".concat(t)},e.name)})),c.a.createElement("select",{className:"cont-option-type",id:"noticeType",onChange:D},Object(m.n)(a.obj.type)&&a.obj.type.map(function(e,t){return c.a.createElement("option",{key:t,value:e.id,id:"type_".concat(t)},e.name)})),c.a.createElement("div",{className:"notice-input-search"},c.a.createElement("input",{onChange:I,type:"text",onKeyDown:A,placeholder:"公告搜索"}),c.a.createElement("span",{onClick:L}))),c.a.createElement("div",{className:"notice-cont-list clearfix"},c.a.createElement("div",{className:"list-header clearfix"},c.a.createElement("span",null,"平台"),c.a.createElement("span",null,"类型"),c.a.createElement("span",null,"内容"),c.a.createElement("span",null,"时间"),c.a.createElement("span",null,"原文")),c.a.createElement("div",{className:"cont-tbody"},Object(m.n)(l.obj.inforList)&&l.obj.inforList.map(function(e){return c.a.createElement("div",{className:"cont-item",key:e.id},c.a.createElement("a",{className:"bourse-name",onClick:S,datasymbol:e.exchangeSymbol},c.a.createElement("img",{src:e.exchangeIconUrl,alt:""}),e.exchangeName),c.a.createElement("a",{className:"item-type",onClick:D,datatype:e.type},e.typeName),c.a.createElement(o.b,{to:"/noticeDetail/".concat(e.noticeId),className:"item-cont",target:"_blank"},e.title),c.a.createElement(o.b,{to:"/noticeDetail/".concat(e.noticeId),className:"item-time",target:"_blank"},Object(m.k)(e.publishTime,"")),c.a.createElement("a",{href:e.orignUrl,className:"item-link",target:"_blank"},c.a.createElement("img",{src:p.a,alt:e.title})))})),c.a.createElement("div",{className:"pagination",style:{display:(0===l.obj.inforList.length||l.obj.recordCount<l.pageSize)&&"none"}},c.a.createElement(u.a,{currentPage:l.obj.currentPage,pageSize:l.obj.pageSize,totalData:l.obj.recordCount,pageChange:function(e){return _(e)}}))))}),E=a(253),g=a(255);a(314),t.default=Object(l.b)(function(e){return{statisticsObj:e.notice.statisticsObj.obj}})(function(e){var t=e.statisticsObj;return c.a.createElement("div",{className:"notice-cont"},c.a.createElement("div",{className:"notice-nav"},c.a.createElement("div",{className:"nav-map"},c.a.createElement(o.b,{to:"/flash",target:"_blank"},"快讯"),c.a.createElement("a",{className:"active"},"公告"),c.a.createElement("a",{style:{display:"none"}},"微博/Twitter"))),c.a.createElement("div",{className:"notice-map-box clearfix"},c.a.createElement("div",{className:"notice-map-left"},c.a.createElement(d,null)),c.a.createElement("div",{className:"notice-map-right"},c.a.createElement(g.a,{dataobj:t}),c.a.createElement(E.a,{title:"重要公告",dataArr:Object(m.n)(t.importantExchangeNoticeList)&&t.importantExchangeNoticeList}),c.a.createElement(E.a,{title:"新币上线",dataArr:Object(m.n)(t.newCoinOnlineExchangeNoticeList)&&t.newCoinOnlineExchangeNoticeList}))))})},236:function(e,t,a){"use strict";var n=a(16),c=a.n(n),l=a(0),r=a.n(l),i=a(17),o=(a(237),function(e){var t=e.currentPage,a=e.totalData,n=e.pageSize,i=e.pageChange,o=e.prevTxt,s=e.nextTxt,m=e.prevNextCount,u=e.prevNextHide,b=parseInt(m),p=Math.ceil(parseInt(a)/parseInt(n)),d=Object(l.useRef)(p),E=Object(l.useState)(parseInt(t)),g=c()(E,2),f=g[0],j=g[1],v=Object(l.useState)([]),y=c()(v,2),N=y[0],O=y[1];Object(l.useEffect)(function(){j(parseInt(t))},[t]);var h=Object(l.useCallback)(function(){var e=0,t=0;return p>2*b+3?f<2*b?t=(e=2)+3:f>p-2*b?e=(t=p-1)-3:(e=f-2,t=f+2):(e=2,t=p-1),{start:e,end:t}},[f,p]),x=Object(l.useCallback)(function(e){i(e),j(e)},[f,p]);return Object(l.useEffect)(function(){for(var e=h().start,t=h().end,a=[1],n=[],c=[],l=e;l<=t;l++)n.push(l);c=2===e?t===p-1?a.concat(n):a.concat(n).concat(["•••"]):t===p-1?a.concat(["•••"]).concat(n):a.concat(["•••"]).concat(n).concat(["•••"]),d.current!==p&&(d.current=p,j(1)),O(1===p?c:c.concat([p]))},[f,p]),r.a.createElement("div",{className:"react-pagination"},!u&&r.a.createElement("a",{className:"prev ".concat(1===f&&"disabled"),title:o,onClick:function(){return f>1&&x(f-1)}},o),N.map(function(e,t){return r.a.createElement("a",{key:t,className:"".concat(f===e&&"active"),onClick:function(){"•••"!==e&&x(e)}},e)}),!u&&r.a.createElement("a",{className:"next ".concat(f===p&&"disabled"),title:s,onClick:function(){return f<p&&x(f+1)}},s))});o.defaultProps={prevTxt:"上一页",nextTxt:"下一页",prevNextCount:2,prevNextHide:!1,currentPage:1},o.propTypes={totalData:i.number.isRequired,pageSize:i.number.isRequired},t.a=o},237:function(e,t,a){},253:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(1),r=a(53);a(254);t.a=function(e){return c.a.createElement("div",{className:"notice-list"},c.a.createElement("h6",null,e.title),e.dataArr.map(function(e){return c.a.createElement("div",{className:"item",key:e.id},c.a.createElement("div",{className:"clearfix"},c.a.createElement(r.b,{to:"/noticeDetail/".concat(e.noticeId),target:"_blank"},c.a.createElement("p",null,c.a.createElement("img",{src:e.exchangeIconUrl,alt:""}),e.exchangeSymbol),c.a.createElement("span",null,Object(l.k)(e.publishTime,"")))),c.a.createElement(r.b,{to:"/noticeDetail/".concat(e.noticeId),target:"_blank"},e.title))}))}},254:function(e,t,a){},255:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=(a(256),a(257)),r=a.n(l),i=a(258),o=a.n(i),s=a(259),m=a.n(s);t.a=function(e){return c.a.createElement("div",{className:"data-focus clearfix"},c.a.createElement("div",{className:"focus-item"},c.a.createElement("img",{src:r.a,alt:""}),c.a.createElement("p",null,e.dataobj.todayUpdateCount),c.a.createElement("span",null,"今日更新")),c.a.createElement("div",{className:"focus-item"},c.a.createElement("img",{src:o.a,alt:""}),c.a.createElement("p",null,e.dataobj.sevenDayNewCoin),c.a.createElement("span",null,"一周上新")),c.a.createElement("div",{className:"focus-item"},c.a.createElement("img",{src:m.a,alt:""}),c.a.createElement("p",null,e.dataobj.exchangeCount),c.a.createElement("span",null,"收录平台")),c.a.createElement("div",{className:"focus-item"},c.a.createElement("a",{href:"https://jinshuju.net/f/U21cuJ",target:"_blank"},"申请收录")))}},256:function(e,t,a){},257:function(e,t,a){e.exports=a.p+"update-icon-4095d99b.png"},258:function(e,t,a){e.exports=a.p+"newbi-icon-2a29217d.png"},259:function(e,t,a){e.exports=a.p+"bourse-icon-c07be9d1.png"},312:function(e,t,a){},313:function(e,t,a){e.exports=a.p+"text-icon-2fa40eea.png"},314:function(e,t,a){}}]);
//# sourceMappingURL=containers-Notice-0c7eda86.js.map